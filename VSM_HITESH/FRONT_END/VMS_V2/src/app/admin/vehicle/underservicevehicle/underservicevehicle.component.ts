import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../Services/Vehicle/vehicle.service';

@Component({
  selector: 'app-underservicevehicle',
  templateUrl: './underservicevehicle.component.html',
  styleUrls: ['./underservicevehicle.component.css']
})
export class UnderservicevehicleComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehiclesUnderService();
  }

  loadVehiclesUnderService(): void {
    this.vehicleService.getVehiclesUnderService().subscribe(
      (response: any) => {
        this.vehicles = response.$values;
      },
      (error) => {
        console.error('Error fetching vehicles under service', error);
      }
    );
  }
}