import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Loginuser } from '../Models/loginuser';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{

  constructor(private authService:AuthService,
    private router:Router){}

  /*
  getting the input from form and sending http post
  request to server
  getting jwt token in response and storing
  that in local storage
  and then redirecting based on that token
  */
  onLoginFormSubmit(loginForm:NgForm)
  {
    let user:Loginuser=
    {
      userNameOrEmail: loginForm.value.username,
      userPassword: loginForm.value.password,
      userRole: loginForm.value.role
    }
    this.authService.loginUserJWT(user).subscribe
    (
      {
        next:responseToken=>
          {
              this.authService.storeTokenRecieved(responseToken);
              alert('Welcome!');
              //redirect
              this.redirectUserCorrectlyOnLoginSuccess();
          }
        ,
        error:err=>
        {
          alert("Login Failed");
        }
      }
    );
  }

  redirectUserCorrectlyOnLoginSuccess()
  {
    //admin
    //service advisor
    let decodedToken=this.authService.decodeToken();
    console.log(decodedToken+"|||"+decodedToken.role);
    if(decodedToken.role==='Admin'){ this.router.navigate(['/admin']);}
    else{this.router.navigate(['/serviceadvisor']);}
  }

}
