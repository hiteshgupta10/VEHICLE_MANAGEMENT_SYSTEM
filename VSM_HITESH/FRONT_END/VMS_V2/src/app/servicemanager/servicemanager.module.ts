import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleunderserviceComponent } from './vehicleunderservice/vehicleunderservice.component';
import { ServicemanagerComponent } from './servicemanager.component';

@NgModule({
  declarations: [
    VehicleunderserviceComponent,
    ServicemanagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ServicemanagerModule { }
