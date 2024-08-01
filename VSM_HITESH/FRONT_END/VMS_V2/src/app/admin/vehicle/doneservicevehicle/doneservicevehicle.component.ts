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
    this.vehicleService.getServicedVehicles().subscribe((data: any) => {
      this.vehicles = data;
    });
  }
}
