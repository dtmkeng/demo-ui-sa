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
  name : any ;
  
  constructor(public app : AppserviceService,private route:ActivatedRoute,private router: Router){
 
  }
  
  title = 'app';
  ngOnInit(){
    console.log(this.app)
    if(!this.authed()){
      this.router.navigate(['home'])
    }
    
  }
  authed(){
    return this.app.authenticated
  }
  names(){
    return this.app.name
  }
  logOut(){
    console.log("logout")
    this.app.authenticated = false
    this.router.navigate(['home'])
  }
}
