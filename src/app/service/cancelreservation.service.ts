import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CancelreservationService {
  public API = '//localhost:8080';
  public MAP = this.API +'/mapdata/'
  public SUBMIT = this.API+'/cancel-insert/'
  constructor(private http :HttpClient) { 

  }
  // /cancel-insert/{id}/comment/{commemt}
  findMapReser(reserId:String,memname:String): Observable<any>{
     console.log(memname,reserId)
     return  this.http.post(this.MAP+'/'+reserId+'/'+memname,{});
  }
  
  submitCancel(reserId:String,comment:String): Observable<any>{
     return this.http.post(this.SUBMIT+reserId+'/comment/'+comment,{});
  }
}
