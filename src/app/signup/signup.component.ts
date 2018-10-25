import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../service/reservation.service'
import { DataSource } from '@angular/cdk/table';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  displayedColumns: string[] = ['reservationId','date','time'];
  dataSource = new ReservationDataSource(this.reservation);
  data:Array<any>=[]
  constructor(private reservation : ReservationService) { }

  ngOnInit() {
  }

}
export class ReservationDataSource extends DataSource<any> {
  constructor(private reservation: ReservationService) {
   super();
  }
  connect(): Observable<any>{
   return this.reservation.getAllReservation();

  }
  disconnect(){}
}