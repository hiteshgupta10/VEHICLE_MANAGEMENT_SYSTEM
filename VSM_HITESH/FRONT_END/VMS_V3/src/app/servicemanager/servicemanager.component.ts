import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceadvisorService, Vehicle, VehicleResponse } from '../Services/ServiceAdvisor/serviceadvisor.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-servicemanager',
  templateUrl: './servicemanager.component.html',
  styleUrls: ['./servicemanager.component.css']
})
export class ServicemanagerComponent implements OnInit {
  vehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;
  newMaterialBill: any = {
    item: '',
    cost: 0,
    units: 0
  };

  constructor(private authService: AuthService, private router: Router,private serviceadvisorService: ServiceadvisorService) {}

  ngOnInit(): void {
    this.loadScheduledVehicles();
  }

  loadScheduledVehicles(): void {
    this.serviceadvisorService.getScheduledVehicles().subscribe(
      (response: VehicleResponse) => {
        if (response && Array.isArray(response.$values)) {
          this.vehicles = response.$values;
        } else {
          console.error('Unexpected response format:', response);
          this.vehicles = []; // Fallback to empty array
        }
      },
      (error) => {
        console.error('Error fetching scheduled vehicles:', error);
        this.vehicles = []; // Fallback to empty array
      }
    );
  }

  completeServiceRecord(vehicleId: number): void {
    this.serviceadvisorService.completeServiceRecord(vehicleId).subscribe(
      () => {
        this.loadScheduledVehicles(); // Refresh the list
        alert('Service record completed successfully.');
      },
      (error) => {
        console.error('Error completing service record:', error);
        alert('Failed to complete service record.');
      }
    );
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
  onLogout() {
    this.authService.storeTokenReceived({ token: '', userType: '' }); // Optionally clear token and userType
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.router.navigate(['/login']); // Redirect to login page or any other page
  }
}