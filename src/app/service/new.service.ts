import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Detail } from '../detail/detail.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {
public API = '//localhost:8080';
check : Boolean
private serviceUrl = '//localhost:8080/workschudule';
constructor(private http: HttpClient) {

  }
   getTimeType() :  Observable<any>{
    return this.http.get(this.API+'/timetype');
  }
  gettypework() :  Observable<any>{
    return this.http.get(this.API+'/category');
  }
  saveWork(data:any): Observable<any>{
     return this.http.post(this.API+'/dataWorkschudule',data);
  }
  getDetail(): Observable<any>{
    return this.http.get(this.API+'/workschudule');
  }

}


