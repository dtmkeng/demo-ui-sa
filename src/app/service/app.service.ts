import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
   public API = '//localhost:8080';
  authenticated = false;
  admin : any;
  public name: any =''
  public auth : boolean
  constructor(private http: HttpClient) {
    //   this.auth = false
  }

  // /admin-list/{username}/pass/{pass}
  authenticate(credentials, callback){
      this.http.post(this.API+'/admin-list/'+credentials.username+'/pass/'+credentials.password,{}).subscribe(data=>{
          if(data['success']){
              this.authenticated = true
              this.admin = data['admin']
              this.name = data['admin']
            //   console.log(this.name)
            //   console.log(data['admin'])
            //   this.setUser(data['admin'])
            localStorage.setItem('admin',JSON.stringify(this.admin))
          }else{
              this.authenticated = false
          }
          return callback && callback();
      })


    }
    getUser():any{
     return this.admin;
    }
    setUser(user:any){
        this.admin = user;
    }
    setAuth(auth : boolean){
        this.auth = auth
    }
    getAuth(): boolean{
       return this.auth
    }

}

