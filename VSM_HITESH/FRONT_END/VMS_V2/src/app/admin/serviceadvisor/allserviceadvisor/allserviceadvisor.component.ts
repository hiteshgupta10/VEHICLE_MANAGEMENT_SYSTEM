// import { Component, OnInit } from '@angular/core';
// import { ServiceadvisorService , Vehicle, MaterialBill} from '../../../Services/ServiceAdvisor/serviceadvisor.service';
// // import { ServiceadvisorService, Vehicle, MaterialBill } from './serviceadvisor.service';

// @Component({
//   selector: 'app-allserviceadvisor',
//   templateUrl: './allserviceadvisor.component.html',
//   styleUrls: ['./allserviceadvisor.component.css']
// })
// export class AllserviceadvisorComponent implements OnInit {
//   scheduledVehicles: Vehicle[] = [];
//   selectedVehicle: Vehicle | null = null;
//   materialBill: MaterialBill = {
//     srId: 0,
//     item: '',
//     cost: 0,
//     units: 0
//   };

//   constructor(private serviceadvisorService: ServiceadvisorService) {}

//   ngOnInit() {
//     this.getScheduledVehicles();
//   }

//   getScheduledVehicles() {
//     this.serviceadvisorService.getScheduledVehicles().subscribe(
//       (vehicles: Vehicle[]) => (this.scheduledVehicles = vehicles),
//       (error: any) => console.error(error)
//     );
//   }

//   selectVehicle(vehicle: Vehicle) {
//     this.selectedVehicle = vehicle;
//     this.materialBill.srId = vehicle.srId; // Assuming srId is available in vehicle
//   }

//   addMaterialBill() {
//     if (this.selectedVehicle) {
//       this.serviceadvisorService.addMaterialBill(this.materialBill).subscribe(
//         (response: any) => console.log('Material bill added:', response),
//         (error: any) => console.error(error)
//       );
//     }
//   }

//   completeServiceRecord() {
//     if (this.selectedVehicle) {
//       this.serviceadvisorService.completeServiceRecord(this.materialBill.srId).subscribe(
//         (response: any) => console.log('Service record completed:', response),
//         (error: any) => console.error(error)
//       );
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
// import { ServiceadvisorService, Vehicle, MaterialBill } from '../services/serviceadvisor.service'; // Update the path if necessary
import { NgForm } from '@angular/forms';
import { Vehicle, MaterialBill, ServiceadvisorService } from '../../../Services/ServiceAdvisor/serviceadvisor.service';

@Component({
  selector: 'app-allserviceadvisor',
  templateUrl: './allserviceadvisor.component.html',
  styleUrls: ['./allserviceadvisor.component.css']
})
export class AllserviceadvisorComponent implements OnInit {
  vehicles: Vehicle[] = [];
  newMaterialBill: MaterialBill = {
    srId: 0,
    item: '',
    cost: 0,
    units: 0
  };
  selectedVehicle: Vehicle | null = null;

  constructor(private serviceadvisorService: ServiceadvisorService) {}

  ngOnInit(): void {
    this.loadScheduledVehicles();
  }

  loadScheduledVehicles(): void {
    this.serviceadvisorService.getScheduledVehicles().subscribe({
      next: (data: Vehicle[]) => {
        this.vehicles = data;
      },
      error: err => {
        console.error('Error loading scheduled vehicles', err);
      }
    });
  }

  onAddMaterialBill(form: NgForm): void {
    if (this.selectedVehicle) {
      this.newMaterialBill.srId = this.selectedVehicle.srId; // Assuming `srId` is linked with `Vehicle`
      this.serviceadvisorService.addMaterialBill(this.newMaterialBill).subscribe({
        next: () => {
          alert('Material Bill added successfully!');
          form.reset();
          this.loadScheduledVehicles(); // Reload vehicles to reflect changes
        },
        error: err => {
          console.error('Error adding material bill', err);
        }
      });
    } else {
      alert('Please select a vehicle first.');
    }
  }

  onCompleteServiceRecord(srId: number): void {
    this.serviceadvisorService.completeServiceRecord(srId).subscribe({
      next: () => {
        alert('Service record completed successfully!');
        this.loadScheduledVehicles(); // Reload vehicles to reflect changes
      },
      error: err => {
        console.error('Error completing service record', err);
      }
    });
  }

  selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}
