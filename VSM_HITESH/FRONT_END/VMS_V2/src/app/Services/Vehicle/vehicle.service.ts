import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'https://localhost:7116/api/Admin';

  constructor(private http: HttpClient) { }

  getVehiclesDueForService(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicles/due`);
  }

  getVehiclesUnderService(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicles/under-service`);
  }

  getServicedVehicles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicles/serviced`);
  }

  addVehicle(vehicle: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vehicle`, vehicle);
  }

  updateVehicle(id: number, vehicle: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/vehicle/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/vehicle/${id}`);
  }

  searchVehicles(search: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicle/search?search=${search}`);
  }
  scheduleService(vehicleId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/schedule`, vehicleId, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
}

}
