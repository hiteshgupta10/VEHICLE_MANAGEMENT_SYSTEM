import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CrudcustomerComponent } from './crudcustomer/crudcustomer.component';
import { RouterModule } from '@angular/router';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CrudcustomerComponent,
    AllcustomerComponent
  ],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule,FormsModule
  ]
})
export class CustomerModule { }
