import { Component, OnInit } from '@angular/core';
import { ReservationserviceService } from '../service/reservationservice.service'
import {Router} from "@angular/router";
export interface Room {
value: string;
viewValue: string;
}

export interface Name {
value: string;
viewValue: string;
}

export interface Time {
value: string;
viewValue: string;
}


@Component({
  selector: 'app-mainreservation',
  templateUrl: './mainreservation.component.html',
  styleUrls: ['./mainreservation.component.css']
})
export class MainreservationComponent implements OnInit {
photo:Array<any>=[]
studio:Array<any>=[]
timetype:Array<any>=[]
usernameStudioSelect=''
usernamePhotoSelect=''
usernameTimeSelect=''
date=''
data : any = {}

 detail:any={

  }
  constructor(private reser:ReservationserviceService,private router:Router) { }

  ngOnInit() {
      this.reser.getReservetionphotograher().subscribe(data=>{
          console.log(data)
          this.photo=data
      });
      this.reser.getReservetionstudio().subscribe(data=>{
          console.log(data)
          this.studio=data
      });
      this.reser.getReservetiontimetype().subscribe(data=>{
          console.log(data)
          this.timetype=data
      });
      
  }
submitData(){
//console.log(this.usernameStudioSelect)
//console.log(this.usernamePhotoSelect)
//console.log(this.usernameTimeSelect)
console.log(this.data)
 //this.reser(this.data)
    this.data.memberid = JSON.parse(localStorage.getItem('user')).memberId
    this.reser.saveWork(this.data).subscribe(data=>{
    console.log(data)
    this.router.navigate(['reservation'])
})
}
 //onDate(event){
   // this.roomsFilter.date = event;

 //this.getData(this.roomsFilter.date);
//console.log(event)

  //}

}
