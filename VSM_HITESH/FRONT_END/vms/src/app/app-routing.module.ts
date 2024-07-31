import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthgaurdService } from './Services/Gaurd/authgaurd.service';
import { UnauthorizedComponent } from './login/unauthorized/unauthorized.component';
import { VehiclecrudComponent } from './admin/vehicle/vehiclecrud/vehiclecrud.component';
import { DueservicevehicleComponent } from './admin/vehicle/dueservicevehicle/dueservicevehicle.component';
import { UnderservicevehicleComponent } from './admin/vehicle/underservicevehicle/underservicevehicle.component';
import { DoneservicevehicleComponent } from './admin/vehicle/doneservicevehicle/doneservicevehicle.component';
import { VehicleComponent } from './admin/vehicle/vehicle.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { CrudcustomerComponent } from './admin/customer/crudcustomer/crudcustomer.component';
import { AllcustomerComponent } from './admin/customer/allcustomer/allcustomer.component';
import { WorkableComponent } from './admin/workable/workable.component';
import { AllworkableComponent } from './admin/workable/allworkable/allworkable.component';
import { CrudworkableComponent } from './admin/workable/crudworkable/crudworkable.component';
import { ServiceadvisorComponent } from './admin/serviceadvisor/serviceadvisor.component';
import { AllserviceadvisorComponent } from './admin/serviceadvisor/allserviceadvisor/allserviceadvisor.component';
import { CrudserviceadvisorComponent } from './admin/serviceadvisor/crudserviceadvisor/crudserviceadvisor.component';
import { ServicemanagerComponent } from './servicemanager/servicemanager.component';

const routes: Routes = 
[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'unauthorized',component:UnauthorizedComponent},
  {path:'admin',component:AdminComponent,
    canActivate:[AuthgaurdService],
    children:
    [
      {path:'vehicle',component:VehicleComponent,
        children:
        [
          {path:'',component:UnderservicevehicleComponent},
          {path:'add',component:VehiclecrudComponent},
          {path:'due',component:DueservicevehicleComponent},
          {path:'under',component:UnderservicevehicleComponent},
          {path:'done',component:DoneservicevehicleComponent}
        ]
      },
      {
        path:'customer',component:CustomerComponent,
        children:
        [ {path:'',component:AllcustomerComponent},
          { path:'add',component:CrudcustomerComponent}
        ]
      },
      {
        path:'workable',component:WorkableComponent,
        children:
        [ {path:'',component:AllworkableComponent},
          { path:'add',component:CrudworkableComponent}
        ]
      },
      {
        path:'serviceadvisor',component:ServiceadvisorComponent,
        children:
        [ {path:'',component:AllserviceadvisorComponent},
          { path:'add',component:CrudserviceadvisorComponent}
        ]
      }
    ]},
  {path:'serviceadvisor',component:ServicemanagerComponent,canActivate:[AuthgaurdService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
