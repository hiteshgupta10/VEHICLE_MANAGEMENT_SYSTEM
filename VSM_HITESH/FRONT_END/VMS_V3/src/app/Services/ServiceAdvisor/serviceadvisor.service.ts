import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
  vehicleId: number;
  customerId: number;
  make: string;
  model: string;
  year: number;
  vin: string;
  status: string;
  serviceRecords: {
    $id: string;
    $values: ServiceRecord[];
  };
}

export interface ServiceRecord {
  serviceRecordId: number;
  // other properties of ServiceRecord
}

export interface VehicleResponse {
  $id: string;
  $values: Vehicle[];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceadvisorService {
  private apiUrl = 'https://localhost:7116/api/ServiceAdvisor';

  constructor(private http: HttpClient) {}

  getScheduledVehicles(): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(`${this.apiUrl}/scheduled-vehicles`);
  }

  addMaterialBill(materialBill: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/materialBills`, materialBill);
  }

  completeServiceRecord(vehicleId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/complete-service-record?vehicleId=${vehicleId}`, {});
  }
}