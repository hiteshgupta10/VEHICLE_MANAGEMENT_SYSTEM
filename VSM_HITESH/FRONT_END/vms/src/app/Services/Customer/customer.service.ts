import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'api/customers'; // Adjust as per your API route

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, customer);
  }
}
