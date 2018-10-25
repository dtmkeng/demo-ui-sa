import { Component ,OnInit} from '@angular/core';
import {AppserviceService} from './service/appservice.service'
import {ActivatedRoute,Router} from "@angular/router";
import {AppService} from './service/app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  check : boolean 
  user :any;
  name : any ="keng" ;
  
  constructor(public admin:  AppService ,public app : AppserviceService,private route:ActivatedRoute,private router: Router,){
  }
  
  ngOnInit(){
    console.log(JSON.parse(localStorage.getItem('admin')))
    if(localStorage.getItem('user')==null && localStorage.getItem('admin')==null ){
      this.router.navigate(['home'])
    }else{
      this.app.authenticated = true;
      this.admin.authenticated = true;
    }
  }
  authed(){
    return this.app.authenticated || this.admin.authenticated
  }
  logOut(){
    console.log("logout")
    this.app.authenticated = false
    this.admin.authenticated = false;
    this.router.navigate(['home'])
    localStorage.removeItem('user')
    localStorage.removeItem('admin')
  }
  names(){
   
    return  (localStorage.getItem('user') !=null) ?JSON.parse(localStorage.getItem('user')).name : '' || (localStorage.getItem('admin') !=null) ? JSON.parse(localStorage.getItem('admin')).username :''
  }
}
