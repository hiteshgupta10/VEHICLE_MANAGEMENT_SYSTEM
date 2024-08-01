import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loginuser } from '../Models/loginuser';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7116/api/Login';

  constructor(private httpClient: HttpClient) { }

  loginUserJWT(user: Loginuser): Observable<any> {
    const url = this.apiUrl+'/Login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<any>(url, {
      headers,
      params: { email: user.userNameOrEmail, password: user.userPassword }
    });
  }

  storeTokenReceived(response: any): void {
    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('userType', JSON.stringify(response.userType));
  }

  getStoredToken(): string | null {
    return localStorage.getItem('token');
  }

  decodeToken(): any {
    const token = this.getStoredToken();
    if (token) {
      return jwtDecode(token);
    }
    return undefined;
  }

  getUserType(): string | null {
    return localStorage.getItem('userType');
  }
}