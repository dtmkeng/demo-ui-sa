import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  public API = '//localhost:8080';
  authenticated = false;

  constructor(private http: HttpClient) {
  }
 
  authenticate(credentials, callback) {
        console.log(credentials)
        let headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        console.log(headers)
        this.http.get(this.API+'/user', {headers:headers}).subscribe(response => {
            // console.log(response)
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

}
