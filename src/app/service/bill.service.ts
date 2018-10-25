import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
  export class BillService {
  public API = '//localhost:8080';
  check : Boolean
  constructor(private http: HttpClient) {}
    getName() :  Observable<any>{
    return this.http.get(this.API+'/name');
  }
    getPhonenumber() :  Observable<any>{
    return this.http.get(this.API+'/phonenumber');
  }
    getDate() :  Observable<any>{
    return this.http.get(this.API+'/date');
  }
    getPrice() :  Observable<any>{
    return this.http.get(this.API+'/price');
  }
    getReserId() :  Observable<any>{
    return this.http.get(this.API+'/reserId');
  }
    getBookingequId() :  Observable<any>{
    return this.http.get(this.API+'/bookingequId');
  }
    getMemberId() :  Observable<any>{
    return this.http.get(this.API+'/memberId');
  }
   getTypeAll(): Observable<any>{
      return this.http.get(this.API+'/Type');
   }
   //
   getReservationAll():Observable<any>{
      return this.http.get(this.API+'/Reservation')
   }
   getBookALL():Observable<any>{
     return this.http.get(this.API+'/Booking')
   }

   saveBill(data:any): Observable<any>{
     return this.http.post(this.API+'/bills',data);
  }

}


