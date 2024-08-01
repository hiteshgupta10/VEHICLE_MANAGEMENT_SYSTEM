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

@NgModule({
  declarations: [
    AppComponent
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
    ServiceadvisorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
