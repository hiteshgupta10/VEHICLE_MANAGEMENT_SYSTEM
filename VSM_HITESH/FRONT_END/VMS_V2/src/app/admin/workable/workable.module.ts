import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkableComponent } from './workable.component';
import { AllworkableComponent } from './allworkable/allworkable.component';
import { CrudworkableComponent } from './crudworkable/crudworkable.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WorkableComponent,
    AllworkableComponent,
    CrudworkableComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class WorkableModule { }
