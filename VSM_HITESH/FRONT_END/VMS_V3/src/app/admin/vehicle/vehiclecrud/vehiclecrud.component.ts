import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../../../Services/Vehicle/vehicle.service';

@Component({
  selector: 'app-vehiclecrud',
  templateUrl: './vehiclecrud.component.html',
  styleUrls: ['./vehiclecrud.component.css']
})
export class VehiclecrudComponent implements OnInit {
  vehicles: any[] = [];
  newVehicle: any = {
    make: '',
    model: '',
    year: 0,
    customerId: 0,
    vin: ''
  };

  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehiclesDueForService().subscribe((data: any) => {
      this.vehicles = data;
    });
  }

  addVehicle(): void {
    this.vehicleService.addVehicle(this.newVehicle).subscribe((vehicle: any) => {
      this.vehicles.push(vehicle);
      this.newVehicle = { make: '', model: '', year: 0, customerId: 0, vin: '' }; // Reset the form
    });
  }

  editVehicle(vehicle: any): void {
    this.router.navigate(['/vehicles/edit', vehicle.vehicleId]);
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.vehicles = this.vehicles.filter(vehicle => vehicle.vehicleId !== id);
    });
  }
}
