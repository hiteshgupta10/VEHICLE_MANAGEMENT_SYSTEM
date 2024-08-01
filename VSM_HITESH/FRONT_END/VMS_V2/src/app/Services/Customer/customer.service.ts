import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'https://localhost:7116/api/Admin';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customers`);
  }

  createCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/customer`, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/customer/${id}`, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/customer/${id}`);
  }

  searchCustomers(search: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/search?search=${search}`);
  }
}