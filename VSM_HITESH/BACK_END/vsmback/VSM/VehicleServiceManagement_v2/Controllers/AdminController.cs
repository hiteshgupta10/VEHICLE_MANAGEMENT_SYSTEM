using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using VehicleServiceManagement.Models;

[ApiController]
[Route("api/[controller]")]
//[Authorize(Roles = "Admin")]
public class AdminController : ControllerBase
{
    private readonly VehicleServiceManagementContext _context;

    public AdminController(VehicleServiceManagementContext context)
    {
        _context = context;
    }

    // 1. View Lists of Vehicles
    [HttpGet("vehicles/due")]
    public async Task<ActionResult> GetVehiclesDueForService()
    {
  

        var vehicles = await _context.ServiceRecords
            .Include(sr => sr.Vehicle)
            .Where(sr => sr.Status == "Due")
            .ToListAsync();

        return Ok(vehicles);
    }

    [HttpGet("vehicles/under-service")]
    public async Task<ActionResult> GetVehiclesUnderService()
    {
        var vehicles = await _context.ServiceRecords
            .Include(sr => sr.Vehicle)
            .Where(sr => sr.Status == "Scheduled")
            .ToListAsync();

        return Ok(vehicles);
    }

    [HttpGet("vehicles/serviced")]
    public async Task<ActionResult> GetServicedVehicles()
    {
        var vehicles = await _context.ServiceRecords
            .Include(sr => sr.Vehicle)
            .Where(sr => sr.Status == "Completed")
            .ToListAsync();

        return Ok(vehicles);
    }

    // 2. Schedule Vehicle for Servicing
    //[HttpPost("schedule")]
    //public async Task<ActionResult> ScheduleVehicleForService(int vehicleId)
    //{
    //    // Check if there's an existing service record with the vehicleId that's already due for service
    //    var serviceRecord = await _context.ServiceRecords
    //        .FirstOrDefaultAsync(sr => sr.VehicleId == vehicleId && sr.Status == "Due");

    //    if (serviceRecord == null)
    //    {
    //        return NotFound("Service record not found or vehicle is not due for service.");
    //    }

    //    // Update the service record status to "Scheduled"
    //    serviceRecord.Status = "Scheduled";

    //    // Save the changes to the database
    //    await _context.SaveChangesAsync();

    //    return Ok("Service record status updated to 'Scheduled'.");
    //}
    [HttpPost("schedule")]
    public async Task<ActionResult> ScheduleVehicleForService([FromBody] int vehicleId)
    {
        // Check if there's an existing service record with the vehicleId that's already due for service
        var serviceRecord = await _context.ServiceRecords
            .FirstOrDefaultAsync(sr => sr.VehicleId == vehicleId && sr.Status == "Due");

        if (serviceRecord == null)
        {
            return NotFound("Service record not found or vehicle is not due for service.");
        }

        // Update the service record status to "Scheduled"
        serviceRecord.Status = "Scheduled";

        // Save the changes to the database
        await _context.SaveChangesAsync();

        return Ok("Service record status updated to 'Scheduled'.");
    }




    // 3. Print Invoice, Process Payment, and Dispatch
    [HttpGet("print-invoice/{serviceRecordId}")]
    public async Task<ActionResult> PrintInvoice(int serviceRecordId)
    {
        var serviceRecord = await _context.ServiceRecords
            .Include(sr => sr.Vehicle)
            .Include(sr => sr.MaterialBills)
            .FirstOrDefaultAsync(sr => sr.SrId == serviceRecordId);

        if (serviceRecord == null)
        {
            return NotFound();
        }

        // Logic to generate and return invoice as a file or report
        // ...

        return Ok("Invoice printed");
    }

    [HttpPost("process-payment/{serviceRecordId}")]
    public async Task<ActionResult> ProcessPayment(int serviceRecordId)
    {
        var serviceRecord = await _context.ServiceRecords.FindAsync(serviceRecordId);
        if (serviceRecord == null)
        {
            return NotFound();
        }

        // Logic to process payment
        serviceRecord.Status = "Completed";
        await _context.SaveChangesAsync();

        return Ok("Payment processed");
    }

    [HttpPost("dispatch/{serviceRecordId}")]
    public async Task<ActionResult> DispatchVehicle(int serviceRecordId)
    {
        var serviceRecord = await _context.ServiceRecords.FindAsync(serviceRecordId);
        if (serviceRecord == null)
        {
            return NotFound();
        }

        // Logic to dispatch the vehicle
        serviceRecord.Status = "Dispatched";
        await _context.SaveChangesAsync();

        return Ok("Vehicle dispatched");
    }

    // 4. Manage Master Data
    // CRUD for Vehicles
    [HttpPost("vehicle")]
    public async Task<ActionResult<Vehicle>> CreateVehicle(Vehicle vehicle)
    {
        _context.Vehicles.Add(vehicle);
        await _context.SaveChangesAsync();

        // Create a new ServiceRecord for the vehicle
        var serviceRecord = new ServiceRecord
        {
            VehicleId = vehicle.VehicleId,
            DateOfService = DateTime.Now, // Or set a different default date
            ServiceDesc = "Initial service scheduled",
            ServiceCost = 0.0m, // Set a default cost or logic to calculate cost
            Status = "Due",
            ID = (int)UserType.SERVICE_ADVISER // You may want to assign a default user or leave it null
        };

        _context.ServiceRecords.Add(serviceRecord);
        await _context.SaveChangesAsync();

        return Ok(vehicle);
    }

       
    


    [HttpPut("vehicle/{id}")]
    public async Task<ActionResult> UpdateVehicle(int id, Vehicle vehicle)
    {
        if (id != vehicle.VehicleId)
        {
            return BadRequest();
        }

        _context.Entry(vehicle).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("vehicle/{id}")]
    public async Task<ActionResult> DeleteVehicle(int id)
    {
        var vehicle = await _context.Vehicles.FindAsync(id);
        if (vehicle == null)
        {
            return NotFound();
        }

        _context.Vehicles.Remove(vehicle);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpGet("vehicle/search")]
    public async Task<ActionResult> SearchVehicles(string search)
    {
        var vehicles = await _context.Vehicles
            .Where(v => v.Make.Contains(search) || v.Model.Contains(search))
            .ToListAsync();

        return Ok(vehicles);
    }

    // CRUD for Customers
    [HttpPost("customer")]
    public async Task<ActionResult> CreateCustomer(Customer customer)
    {
        _context.Customers.Add(customer);
        await _context.SaveChangesAsync();
        return Ok(customer);
    }

    [HttpPut("customer/{id}")]
    public async Task<ActionResult> UpdateCustomer(int id, Customer customer)
    {
        if (id != customer.CustomerId)
        {
            return BadRequest();
        }

        _context.Entry(customer).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("customer/{id}")]
    public async Task<ActionResult> DeleteCustomer(int id)
    {
        var customer = await _context.Customers.FindAsync(id);
        if (customer == null)
        {
            return NotFound();
        }

        _context.Customers.Remove(customer);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpGet("customer/search")]
    public async Task<ActionResult> SearchCustomers(string search)
    {
        var customers = await _context.Customers
            .Where(c => c.FirstName.Contains(search) || c.LastName.Contains(search) || c.Email.Contains(search))
            .ToListAsync();

        return Ok(customers);
    }

    

    

}
