using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using VehicleServiceManagement.Models;

namespace VehicleServiceManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "ServiceAdvisor")]
    public class ServiceAdvisorController : ControllerBase
    {
        private readonly VehicleServiceManagementContext _context;

        public ServiceAdvisorController(VehicleServiceManagementContext context)
        {
            _context = context;
        }

        // 1. Get scheduled vehicles
        [HttpGet("scheduled-vehicles")]
        public async Task<ActionResult<IEnumerable<Vehicle>>> GetScheduledVehicles()
        {
            var scheduledVehicles = await _context.ServiceRecords
                .Where(sr => sr.Status == "In Progress")
                .Select(sr => sr.Vehicle)
                .Distinct()
                .ToListAsync();

            if (scheduledVehicles == null || !scheduledVehicles.Any())
            {
                return NotFound("No vehicles are scheduled for service.");
            }

            return Ok(scheduledVehicles);
        }

        // 2. Create a new material bill record
        [HttpPost("add-material-bill")]
        public async Task<ActionResult> AddMaterialBill([FromBody] MaterialBill request)
        {
            // Find the service record
            var serviceRecord = await _context.ServiceRecords
                .FirstOrDefaultAsync(sr => sr.SrId == request.SrId);

            if (serviceRecord == null)
            {
                return NotFound("Service record not found.");
            }

            // Create a new material bill
            var materialBill = new MaterialBill
            {
                SrId = request.SrId,
                Item = request.Item,
                Cost = request.Cost,
                Units = request.Units
            };

            // Add the material bill to the service record
            _context.MaterialBills.Add(materialBill);

            // Update the service record status
            serviceRecord.Status = "In Progress";

            await _context.SaveChangesAsync();

            return Ok(materialBill);
        }

        // 3. Complete the service record and generate the bill
        [HttpPost("complete-service-record/{srId}")]
        public async Task<ActionResult> CompleteServiceRecord(int srId)
        {
            // Find the service record
            var serviceRecord = await _context.ServiceRecords
                .Include(sr => sr.MaterialBills) // Include material bills for the record
                .FirstOrDefaultAsync(sr => sr.SrId == srId);

            if (serviceRecord == null)
            {
                return NotFound("Service record not found.");
            }

            if (serviceRecord.Status != "In Progress")
            {
                return BadRequest("Service record status must be 'Under Servicing' to complete it.");
            }

            // Update service record status to "Serviced"
            serviceRecord.Status = "Completed";

            // Calculate the total bill amount
            var totalAmount = serviceRecord.MaterialBills.Sum(mb => mb.Cost * mb.Units);

            // Optionally, you can create an invoice or perform other actions with the totalAmount

            await _context.SaveChangesAsync();

            return Ok(new { message = "Service record completed.", totalAmount });
        }
    }
}
