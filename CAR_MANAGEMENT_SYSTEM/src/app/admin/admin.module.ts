import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { VehicleModule } from './vehicle/vehicle.module';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,RouterModule,VehicleModule
  ]
})
export class AdminModule { }
