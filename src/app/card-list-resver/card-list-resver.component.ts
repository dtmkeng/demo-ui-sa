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
    console.log(this.user)
    if(localStorage.getItem('user')!=null){
      this.user =   JSON.parse(localStorage.getItem('user'))  
    this.reser.getReservatioMember(this.user.memberId).subscribe(datare=>{
      // this.reservation = data
      console.log(datare)

      for( let datas of datare){
        this.reser.CheckReser(datas.reservationId).subscribe(data=>{
          if(data==null){
               console.log(datas)
               datas.detail = 'reservation :'+ datas.photographer.detail+'  ' +datas.studio.name               
              this.reservation.push(datas)}})}})}
  }
  OnSelect(data:any){
     this.router.navigate(['check',{data:data}])
  }
  auth(){
    return this.app.authenticated
  }

}
