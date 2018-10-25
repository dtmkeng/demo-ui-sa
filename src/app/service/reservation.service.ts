import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class User {
  username:String;
  password:String;
}

@Injectable()
export class ReservationService {
public API = '//localhost:8080';
check : Boolean 
constructor(private http: HttpClient) {
  
  }
  getAllReservation(): Observable<any> {
      return this.http.get(this.API + '/reservation-list');
  }
  getReservationByReserId(reserid:String): Observable<any>{
      return this.http.get(this.API + '/reservation-list/'+reserid)
  }
  getReservatioMember(memid : String) : Observable<any>{
      return this.http.get(this.API+'/reservationmember/'+memid)
  }
  getMemberById(memid:String): Observable<any>{
    return this.http.get(this.API+'/member-list/'+memid)
  }
  // /member-list/{username}/pass/{pass}
  checkpassword(user:String,pass:String):Observable<any>{
    return this.http.post(this.API+'/member-list/'+user+'/pass/'+pass,{})
  }
  
  getPhotograp(photoid:String):Observable<any>{
    return this.http.get(this.API+'/photographrer-list/'+photoid);
  }
  getStudio(studio:String):Observable<any>{
    return this.http.get(this.API+'/studio-list/'+studio);
  }

  CheckReser(rserid:String) : Observable<any>{
    
    return this.http.get(this.API+'/cancel-reser/'+rserid)
     
    //  return  true
  }
  setUser(user : any){
     return this.http.post<User>(this.API+'/userbody',user)
  }
  
}
 