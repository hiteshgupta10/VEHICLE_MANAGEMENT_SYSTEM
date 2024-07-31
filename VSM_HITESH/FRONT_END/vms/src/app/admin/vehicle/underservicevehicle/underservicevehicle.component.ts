import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../Services/Vehicle/vehicle.service';
// import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-underservicevehicle',
  templateUrl: './underservicevehicle.component.html',
  styleUrls: ['./underservicevehicle.component.css']
})
export class UnderservicevehicleComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehiclesUnderService().subscribe((data: any) => {
      this.vehicles = data;
    });
  }
}
