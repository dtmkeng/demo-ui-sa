import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ReservationService} from '../service/reservation.service'
@Component({
  selector: 'app-text-sucess',
  templateUrl: './text-sucess.component.html',
  styleUrls: ['./text-sucess.component.css']
})
export class TextSucessComponent implements OnInit {
  reser:any={}
  constructor(private route :ActivatedRoute,private reservatio : ReservationService) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      console.log(data)
         this.reservatio.getReservationByReserId(data.reserid).subscribe(reser =>{
             this.reser = reser;
             this.reser.membername = reser.memberId.name
             this.reser.time = reser.time.time
             console.log(reser)
         })
       
    })
  }

}
