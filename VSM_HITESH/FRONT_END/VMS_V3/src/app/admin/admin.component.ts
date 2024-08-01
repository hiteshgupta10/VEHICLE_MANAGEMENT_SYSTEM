// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent {
//   onLogout() {
//     this.authService.storeTokenReceived({ token: '', userType: '' }); // Optionally clear token and userType
//     localStorage.removeItem('token');
//     localStorage.removeItem('userType');
//     this.router.navigate(['/login']); // Redirect to login page or any other page
//   }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.storeTokenReceived({ token: '', userType: '' }); // Optionally clear token and userType
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.router.navigate(['/login']); // Redirect to login page or any other page
  }
}