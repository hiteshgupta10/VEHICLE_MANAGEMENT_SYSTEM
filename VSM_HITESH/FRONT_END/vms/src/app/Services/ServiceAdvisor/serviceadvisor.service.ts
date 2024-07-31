import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
  srId: number;
  model: string;
  licensePlate: string;
}

export interface MaterialBill {
  srId: number;
  item: string;
  cost: number;
  units: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceadvisorService {
  private baseUrl = 'https://yourapiurl.com/api/serviceadvisor'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  getScheduledVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/scheduled-vehicles`);
  }

  addMaterialBill(materialBill: MaterialBill): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-material-bill`, materialBill);
  }

  completeServiceRecord(srId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/complete-service-record/${srId}`, {});
  }
}
