import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { History } from '../history/history.component';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingequipmentService {
  public API = '//localhost:8080';
  private serviceUrl = '//localhost:8080/booking';
  constructor(private http: HttpClient) { }

  getEquipmentName(): Observable<any> {
    return this.http.get(this.API + '/equipments');
  }
  getData(): Observable<any> {
    return this.http.get(this.API + '/bookings');
  }
  getHistory(): Observable<History[]>{
    return this.http.get<History[]>(this.serviceUrl);
  }
}
