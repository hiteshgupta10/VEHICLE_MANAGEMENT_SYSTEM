import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehiclecrudComponent } from './vehiclecrud/vehiclecrud.component';
import { DueservicevehicleComponent } from './dueservicevehicle/dueservicevehicle.component';
import { UnderservicevehicleComponent } from './underservicevehicle/underservicevehicle.component';
import { DoneservicevehicleComponent } from './doneservicevehicle/doneservicevehicle.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VehicleComponent,
    VehiclecrudComponent,
    DueservicevehicleComponent,
    UnderservicevehicleComponent,
    DoneservicevehicleComponent
  ],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule,FormsModule
  ]
})
export class VehicleModule { }
