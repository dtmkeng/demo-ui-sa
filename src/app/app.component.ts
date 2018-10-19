import { Component ,OnInit} from '@angular/core';
import {AppserviceService} from './service/appservice.service'
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  check : boolean 
  user :any;
  name : any ="keng" ;
  
  constructor(public app : AppserviceService,private route:ActivatedRoute,private router: Router){
  }
  
  ngOnInit(){
    console.log(this.app)
    if(localStorage.getItem('user')==null){
      this.router.navigate(['home'])
    }else{
      this.app.authenticated = true;
    }
  }
  authed(){
    return this.app.authenticated
  }
  logOut(){
    console.log("logout")
    this.app.authenticated = false
    this.router.navigate(['home'])
    localStorage.removeItem('user')
  }
  names(){
   
    return   JSON.parse(localStorage.getItem('user')).name
  }
}
