import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '../history/history.component';


@Injectable({
  providedIn: 'root'
})
export class ReservationserviceService {
    public API = '//localhost:8080';
   private serviceUrl = '//localhost:8080/reservation';
  constructor(private http: HttpClient) {
  }
  getReservetionphotograher(): Observable<any> {
  return this.http.get(this.API + '/photographer');
  }
  getReservetionstudio(): Observable<any> {
  return this.http.get(this.API + '/studio');
  }
  getReservetionmember(): Observable<any> {
  return this.http.get(this.API + '/members');
  }
  getReservetion(): Observable<any> {
  return this.http.get(this.API + '/reservation');
  }
  getReservetiontimetype(): Observable<any> {
  return this.http.get(this.API + '/timetype');
  }
  saveWork(data:any): Observable<any>{
  return this.http.post(this.API+'/data',data);
  }
  getstudioById(studioId:String ): Observable<any>{
    return this.http.get(this.API+'/sstudio/'+studioId)
  }
  getphotograherById(photographerId:String ): Observable<any>{
    return this.http.get(this.API+'/photographer/'+photographerId)
  }
  getHistory(): Observable<any>{
  return this.http.get(this.serviceUrl);
  }

}
