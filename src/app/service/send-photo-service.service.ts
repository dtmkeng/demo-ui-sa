import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendPhotoServiceService {
  public API = '//localhost:8080';
  check : Boolean
  constructor(private http: HttpClient) { 
  }
  getMemberId() :  Observable<any>{
    return this.http.get(this.API+'/memberId');
  }
  getReservationId() :  Observable<any>{
    return this.http.get(this.API+'/reservationId');
  }
  getName() :  Observable<any>{
    return this.http.get(this.API+'/name');
  }
  getAddress() :  Observable<any>{
    return this.http.get(this.API+'/address');
  }
  getEmail() :  Observable<any>{
    return this.http.get(this.API+'/email');
  }

  getTypeDeliveryId() :  Observable<any>{
    return this.http.get(this.API+'/TypeDalivery');
  }
  
  getTypePhotoId() :  Observable<any>{
    return this.http.get(this.API+'/TypePhotoController');
  }
  getTypeSizeId() :  Observable<any>{
    return this.http.get(this.API+'/TypeSizeController');
  }
  //---------------------------------------------------------
  

  //--------------------------------------------------

  saveSendPhoto(data:any): Observable<any>{
    return this.http.post(this.API+'/datasend',data);
 }




}
