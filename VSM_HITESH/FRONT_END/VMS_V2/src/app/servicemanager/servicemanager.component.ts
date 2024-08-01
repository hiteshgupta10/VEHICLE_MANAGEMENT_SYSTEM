import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceadvisorService } from '../Services/ServiceAdvisor/serviceadvisor.service';

@Component({
  selector: 'app-servicemanager',
  templateUrl: './servicemanager.component.html',
  styleUrls: ['./servicemanager.component.css']
})
export class ServicemanagerComponent implements OnInit {
  vehicles: any[] = [];
  selectedVehicle: any;
  newMaterialBill: any = {
    item: '',
    cost: 0,
    units: 0
  };

  constructor(private serviceadvisorService: ServiceadvisorService) {}

  ngOnInit(): void {
    this.loadScheduledVehicles();
  }

  loadScheduledVehicles(): void {
    this.serviceadvisorService.getScheduledVehicles().subscribe(response => {
      // Directly use response assuming it is an array of vehicles
      if (Array.isArray(response)) {
        this.vehicles = response;
      } else {
        console.error('Unexpected response format:', response);
        this.vehicles = []; // Fallback to empty array
      }
    }, error => {
      console.error('Error fetching scheduled vehicles:', error);
      this.vehicles = []; // Fallback to empty array
    });
  }

  selectVehicle(vehicle: any): void {
    this.selectedVehicle = vehicle;
  }

  onAddMaterialBill(form: NgForm): void {
    if (form.valid) {
      this.serviceadvisorService.addMaterialBill(this.newMaterialBill).subscribe(() => {
        this.newMaterialBill = { item: '', cost: 0, units: 0 };
        this.selectedVehicle = null;
        this.loadScheduledVehicles(); // Refresh the list
      });
    }
  }

  onCompleteServiceRecord(srId: number): void {
    this.serviceadvisorService.completeServiceRecord(srId).subscribe(() => {
      this.loadScheduledVehicles(); // Refresh the list
    });
  }
}
