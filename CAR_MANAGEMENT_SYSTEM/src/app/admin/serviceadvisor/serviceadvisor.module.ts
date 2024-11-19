import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceadvisorComponent } from './serviceadvisor.component';
import { AllserviceadvisorComponent } from './allserviceadvisor/allserviceadvisor.component';
import { CrudserviceadvisorComponent } from './crudserviceadvisor/crudserviceadvisor.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServiceadvisorComponent,
    AllserviceadvisorComponent,
    CrudserviceadvisorComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ]
})
export class ServiceadvisorModule { }
