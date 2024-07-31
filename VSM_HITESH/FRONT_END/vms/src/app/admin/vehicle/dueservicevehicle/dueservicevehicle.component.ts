import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../Services/Vehicle/vehicle.service';
// import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-dueservicevehicle',
  templateUrl: './dueservicevehicle.component.html',
  styleUrls: ['./dueservicevehicle.component.css']
})
export class DueservicevehicleComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehiclesDueForService().subscribe((data: any) => {
      this.vehicles = data;
    });
  }
}
