import { Component, OnInit } from '@angular/core';
// import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { VehicleService } from '../../../Services/Vehicle/vehicle.service';

@Component({
  selector: 'app-vehiclecrud',
  templateUrl: './vehiclecrud.component.html',
  styleUrls: ['./vehiclecrud.component.css']
})
export class VehiclecrudComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.vehicleService.getVehiclesDueForService().subscribe((data: any) => {
      this.vehicles = data;
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
