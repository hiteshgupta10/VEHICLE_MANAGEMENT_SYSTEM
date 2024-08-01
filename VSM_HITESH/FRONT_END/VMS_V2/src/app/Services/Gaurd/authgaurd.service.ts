// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthgaurdService implements CanActivate 
// {
//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
//   {
//     let decodedToken=this.authService.decodeToken();//return token else undefined
//     if(decodedToken)
//     {
//       if (route.url[0].path === 'admin' && decodedToken.role === 'Admin') {
//         return true;
//       } else if (route.url[0].path === 'serviceadvisor' && decodedToken.role === 'Service Advisor') {
//         return true;
//       } else {
//         this.router.navigate(['/unauthorized']);
//         return false;
//       }
//     }
//     return false;
//   }
// }
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getStoredToken();
    if (token) {
      const decodedToken = this.authService.decodeToken();
      const email = decodedToken.email;

      if (route.url[0].path === 'admin' && email === 'admin@gmail.com') {
        return true;
      } else if (route.url[0].path === 'serviceadvisor' && email === 'sa@gmail.com') {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}