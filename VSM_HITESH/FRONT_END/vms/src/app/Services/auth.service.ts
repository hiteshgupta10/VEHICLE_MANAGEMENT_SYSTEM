import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loginuser } from '../Models/loginuser';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{

  constructor(private httpClient:HttpClient) { }

  private apiUrl:string="https://localhost:7116/api/Login";
  

  loginUserJWT(user:Loginuser):Observable<any>
  { 
    let url=this.apiUrl+'/Login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let returnMsg:boolean=false;
    return this.httpClient.post<Loginuser>(url,user,{headers});
  }

  storeTokenRecieved(responseToken:string)
  {
    localStorage.setItem('token', JSON.stringify(responseToken)); 
  }
  
  getStoredToken()
  {
    return localStorage.getItem('token');
  }

  decodeToken(): any {
    let token=localStorage.getItem('token');
    if(token){return jwtDecode(token);}
    else return undefined;
  }
}

