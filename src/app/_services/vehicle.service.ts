import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vehicle } from '../_models/vehicle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicleDetails = new BehaviorSubject<Vehicle | null>(null);
  vehicleDetails$ = this.vehicleDetails.asObservable();
  vehicle: any;
  vehicleList: string[] = [];
  baseUrl: string = 'https://vehicleinsuranceapi.azurewebsites.net/api/Vehicle';

  constructor(private http: HttpClient) { }

  getImageUri(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/Blob');
  }

  getVehicleList(type: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + type);
  }

  getPremiumDetails(model: Vehicle): Observable<any> {
    console.log('getPremiumDetails');
    return this.http.post<Vehicle>(this.baseUrl + '/calculate', model);
  }

  generatePolicy(model: Vehicle): Observable<any> {
    return this.http.post(this.baseUrl + '/pdf', model, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  setVehicle(vehicle: Vehicle) {
    this.vehicleDetails.next(vehicle);
    sessionStorage.setItem('vehicle', JSON.stringify(vehicle));
  }

  setImageUri(image: any) {
    console.log('setting storage details!');
    sessionStorage.setItem('imageUri', JSON.stringify(image));
  }

  getVehicleDetails() {
    return this.vehicleDetails$;
  }

}
