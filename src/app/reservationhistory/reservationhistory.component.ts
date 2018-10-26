import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { ReservationserviceService } from '../service/reservationservice.service';
import { Observable } from 'rxjs/Observable';
export interface History  {
price: number ;
reservationId: number;
date: string
timetype: string;
}
let id
@Component({
  selector: 'app-reservationhistory',
  templateUrl: './reservationhistory.component.html',
  styleUrls: ['./reservationhistory.component.css']
})

export class ReservationhistoryComponent implements OnInit {
  displayedColumns: string[] = ['reservationId', 'date', 'timetype', 'price'];
  dataSource = new HistoryDataSource(this.reservationService);
  constructor(private reservationService: ReservationserviceService, private httpClient: HttpClient) { }

  ngOnInit() {
    console.log("adssad")
    this.reservationService.getReserMem("2").subscribe(data=>{
      console.log(data)
    })
  }
}
export class HistoryDataSource extends DataSource <any> {
   constructor(private reservationService: ReservationserviceService) {
    super();
   }
   connect(): Observable<any>{
      return this.reservationService.getHistory();
   }
   disconnect(){}
  }