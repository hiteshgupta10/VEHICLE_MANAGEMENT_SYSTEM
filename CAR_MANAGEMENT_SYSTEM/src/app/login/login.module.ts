import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ]
})
export class LoginModule { }
