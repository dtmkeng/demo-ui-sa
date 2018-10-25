import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingequipmentService } from '../bookingequipment-service/bookingequipment.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
export interface History {
  equipmentName: string;
  equipmentType: string;
  equipmentBrand: string;
  equipmentPrice: number;
  dateStart: Date;
  dateEnd: Date;
  totalDay: number;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']

})
export class HistoryComponent implements OnInit {


  displayedColumns: string[] = ['EquipmentName', 'EquipmentType', 'EquipmentBrand', 'EquipmentPrice', 'DateStart', 'DateEnd', 'TotalDay'];
  dataSource = new HistoryDataSource(this.bookingequipmentService);
  constructor(private bookingequipmentService: BookingequipmentService, private httpClient: HttpClient) { }

  ngOnInit() {
  }
}
export class HistoryDataSource extends DataSource<any> {
   constructor(private bookingequipmentService: BookingequipmentService) {
    super();
   }
   connect(): Observable<History[]>{
    return this.bookingequipmentService.getHistory();

   }
   disconnect(){}
}
