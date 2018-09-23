import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReservationService {
public API = '//localhost:8080';
constructor(private http: HttpClient) {
  
  }
  getAllReservation(): Observable<any> {
      return this.http.get(this.API + '/reservation-list');
  }
  getReservationByReserId(reserid:String): Observable<any>{
      return this.http.get(this.API + '/reservation-list/'+reserid)
  }
  getMemberById(memid:String): Observable<any>{
    return this.http.get(this.API+'/member-list/'+memid)
  }
  // /member-list/{username}/pass/{pass}
  checkpassword(user:String,pass:String):Observable<any>{
    return this.http.post(this.API+'/member-list/'+user+'/pass/'+pass,{})
  }
  
}
 