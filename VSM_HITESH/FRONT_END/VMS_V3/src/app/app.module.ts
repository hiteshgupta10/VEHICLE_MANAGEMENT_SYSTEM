import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import {HttpClientModule} from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { VehicleModule } from './admin/vehicle/vehicle.module';
import { CustomerModule } from './admin/customer/customer.module';
import { WorkableModule } from './admin/workable/workable.module';
import { ServiceadvisorModule } from './admin/serviceadvisor/serviceadvisor.module';
import { ServicemanagerComponent } from './servicemanager/servicemanager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,ServicemanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    AdminModule,
    VehicleModule,
    CustomerModule,
    WorkableModule,
    ServiceadvisorModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
