import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../Services/Vehicle/vehicle.service';
// import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-doneservicevehicle',
  templateUrl: './doneservicevehicle.component.html',
  styleUrls: ['./doneservicevehicle.component.css']
})
export class DoneservicevehicleComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehiclesUnderService();
  }

  loadVehiclesUnderService(): void {
    this.vehicleService.getServicedVehicles().subscribe(
      (response: any) => {
        this.vehicles = response.$values;
      },
      (error) => {
        console.error('Error fetching vehicles under service', error);
      }
    );
  }
}
