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
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLoginFormSubmit(loginForm: NgForm) {
    const user: Loginuser = {
      userNameOrEmail: loginForm.value.username,
      userPassword: loginForm.value.password,
    };

    this.authService.loginUserJWT(user).subscribe({
      next: response => {
        if (response === 'unapproved') {
          alert('Account is not approved.');
        } else if (response === 'blocked') {
          alert('Account is blocked.');
        } else if (response.token && response.userType) {
          this.authService.storeTokenReceived(response);
          alert('Welcome!');
          this.redirectUserCorrectlyOnLoginSuccess();
        } else {
          alert('Login failed.');
        }
      },
      error: err => {
        alert('Login Failed');
      }
    });
  }

  redirectUserCorrectlyOnLoginSuccess() {
    const userType = this.authService.getUserType();
    if (userType =='1') {
      this.router.navigate(['/admin']);
    } else if (userType == '2') {
      this.router.navigate(['/serviceadvisor']);
    } else {
      this.router.navigate(['/']);
    }
  }
}