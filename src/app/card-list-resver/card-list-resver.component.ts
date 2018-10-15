import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../service/reservation.service'
import {Router} from "@angular/router";
import { AppserviceService } from '../service/appservice.service'
@Component({
  selector: 'app-card-list-resver',
  templateUrl: './card-list-resver.component.html',
  styleUrls: ['./card-list-resver.component.css']
})
export class CardListResverComponent implements OnInit {
  reservation: Array<any>= [];
  constructor(private reser : ReservationService,private router: Router,private app :AppserviceService) { }
  user :any ;
  ngOnInit() {
    this.user = this.app.getUser()
    // console.log(this.user)
    if(this.user){
    this.reser.getReservatioMember(this.user.memberId).subscribe(datare=>{
      // this.reservation = data
      for( let datas of datare){
        this.reser.CheckReser(datas.reserId).subscribe(data=>{
          if(data==null){
              this.reservation.push(datas)
          }
        })
  
      
      }
      
    })
  }
  // }
    // console.log(this.app.getUser())
  }
  OnSelect(data:any){
    //  console.log(data)
     this.router.navigate(['check',{data:data}])
  }
  auth(){
    return this.app.authenticated
  }

}
