import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReservationService} from '../service/reservation.service'
import {Router} from "@angular/router";
// class resers {}
@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {
  reser : any ={}
  detail:any={
    comment:""
  }
  constructor(private route:ActivatedRoute,private reservations : ReservationService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      console.log(param.data)
      this.reservations.getReservationByReserId(param.data).subscribe(data =>{
            console.log(data)
            this.reser = data
            this.reser.name = data.memberId.name
            this.reser.time = data.timetype.time
      })
    })
  }
  SumbitCancel(){
    if(this.detail.comment != ""){
      console.log(this.detail)
      const commet = this.detail.comment
      this.router.navigate(['check-valid',{comment:commet,reserid:this.reser.reservationId}]) 
    }
  }
  setUser(){
          const user = {
            username : "keng",
            password:"1234"
          }
          this.reservations.setUser(user)
  }
}
