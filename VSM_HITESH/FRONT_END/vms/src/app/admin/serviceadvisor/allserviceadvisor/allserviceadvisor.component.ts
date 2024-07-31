import { Component, OnInit } from '@angular/core';
import { ServiceadvisorService , Vehicle, MaterialBill} from '../../../Services/ServiceAdvisor/serviceadvisor.service';
// import { ServiceadvisorService, Vehicle, MaterialBill } from './serviceadvisor.service';

@Component({
  selector: 'app-allserviceadvisor',
  templateUrl: './allserviceadvisor.component.html',
  styleUrls: ['./allserviceadvisor.component.css']
})
export class AllserviceadvisorComponent implements OnInit {
  scheduledVehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;
  materialBill: MaterialBill = {
    srId: 0,
    item: '',
    cost: 0,
    units: 0
  };

  constructor(private serviceadvisorService: ServiceadvisorService) {}

  ngOnInit() {
    this.getScheduledVehicles();
  }

  getScheduledVehicles() {
    this.serviceadvisorService.getScheduledVehicles().subscribe(
      (vehicles: Vehicle[]) => (this.scheduledVehicles = vehicles),
      (error: any) => console.error(error)
    );
  }

  selectVehicle(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    this.materialBill.srId = vehicle.srId; // Assuming srId is available in vehicle
  }

  addMaterialBill() {
    if (this.selectedVehicle) {
      this.serviceadvisorService.addMaterialBill(this.materialBill).subscribe(
        (response: any) => console.log('Material bill added:', response),
        (error: any) => console.error(error)
      );
    }
  }

  completeServiceRecord() {
    if (this.selectedVehicle) {
      this.serviceadvisorService.completeServiceRecord(this.materialBill.srId).subscribe(
        (response: any) => console.log('Service record completed:', response),
        (error: any) => console.error(error)
      );
    }
  }
}
