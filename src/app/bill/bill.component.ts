import { Component, OnInit } from '@angular/core';
import { BillService} from '../service/bill.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
export interface PeriodicElement {
name: string;
phonenumber:string;
date:Date;
price:Number;
reverId:string;
bookId:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
];
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})

export class BillComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phonenumber', 'date', 'reverId','bookId'];
  dataSource = new ReservationDataSource(this.reservation);
  reser:any={}
  constructor(private reservation: BillService ) { }
  ngOnInit() {
  }
}
export class ReservationDataSource extends DataSource<any> {
  constructor(private reservation: BillService) {
   super();
  }
  connect(): Observable<any>{
   this.reservation.getBill().subscribe(data=>{
     console.log(data)
   })
   return this.reservation.getBill();
  }
  disconnect(){}
}

