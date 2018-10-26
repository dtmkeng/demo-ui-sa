import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ReservationserviceService } from '../service/reservationservice.service';
export interface History  {
  bill: number,
  cancelReservation: number,
  date: Date,
  timetype: any,
  memberId: any,
  studioId: number,
  photographer:any,
  price:number,
  reservationId:number,
  studio:any,
  }
  let id 
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  displayedColumns: string[] = ['reservationId','studioId','photographerId', 'date', 'timetype', 'price'];
  dataSource = new ReservationDataSource(this.reservationService,this.route);
  constructor(private reservationService: ReservationserviceService, private httpClient: HttpClient,private route : ActivatedRoute) { }
  reser:any={}
  ngOnInit() {
    console.log("adssad")
    this.route.params.subscribe(data=>{
      console.log(data)
      id = data.data
      this.reservationService.getReserMem(data.data).subscribe(data=>{
        console.log(data)
       
        this.reser = data
        this.reser.prices = 11233;
        this.reser.time = data.timetype.time
        this.reser.name = data.memberId.name
        this.reser.sname =  (data.studio != null) ? data.studio.name : ''
        this.reser.pname = (data.photographer != null) ? data.photographer.name : ''
        
        console.log(this.reser)
     })
    })
    
  }
}
export class ReservationDataSource extends DataSource <History[]>{
  constructor(private reservationService: ReservationserviceService,private route : ActivatedRoute) {
   super();
  }
  connect(): Observable<any>{
     return this.reservationService.getReserMem(id);
  }
  disconnect(){}
 }