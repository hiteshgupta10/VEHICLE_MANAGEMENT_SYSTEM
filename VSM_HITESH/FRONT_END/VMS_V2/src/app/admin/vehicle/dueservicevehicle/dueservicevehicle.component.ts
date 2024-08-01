import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../Services/Vehicle/vehicle.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dueservicevehicle',
  templateUrl: './dueservicevehicle.component.html',
  styleUrls: ['./dueservicevehicle.component.css']
})
export class DueservicevehicleComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadVehiclesDueForService();
  }

  loadVehiclesDueForService(): void {
    this.vehicleService.getVehiclesDueForService().subscribe(
      (response: any) => {
        this.vehicles = response.$values;
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      (error) => {
        console.error('Error fetching vehicles due for service', error);
      }
    );
  }

  scheduleService(vehicleId: number): void {
    this.vehicleService.scheduleService(vehicleId).subscribe(
      (response: any) => {
        console.log('Service scheduled successfully for vehicle ID:', vehicleId);
        // Refresh the list of vehicles due for service
        this.loadVehiclesDueForService();
      },
      (error) => {
        console.error('Error scheduling service for vehicle ID:', vehicleId, error);
      }
    );
  }
}