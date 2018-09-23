import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../service/reservation.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-card-list-resver',
  templateUrl: './card-list-resver.component.html',
  styleUrls: ['./card-list-resver.component.css']
})
export class CardListResverComponent implements OnInit {
  reservation: Array<any>;
  constructor(private reser : ReservationService,private router: Router) { }

  ngOnInit() {
    this.reser.getAllReservation().subscribe(data=>{
      this.reservation = data
      // console.log(data)
    })
  }
  OnSelect(data:any){
    //  console.log(data)
     this.router.navigate(['check',{data:data}])
  }

}
