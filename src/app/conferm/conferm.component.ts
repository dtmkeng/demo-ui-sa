import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/table';
import {SendPhotoServiceService} from '../service/send-photo-service.service'
export interface PeriodicElement {
  sendId: String;
  

  name: string;
  address: string;
  email: string;

  typeDelivery:string;
  typePhoto:string;
  typeSize:string;

}



@Component({
  selector: 'app-conferm',
  templateUrl: './conferm.component.html',
  styleUrls: ['./conferm.component.css']
})
export class ConfermComponent implements OnInit {

  displayedColumns: string[] = ['sendId', 'name', 'address', 'email','TypeDelivery','TypePhoto','TypeSize'];
  dataSource = new ReservationDataSource(this.sendPhoto);
  memberid = JSON.parse(localStorage.getItem('user')).memberId 
  constructor(private sendPhoto: SendPhotoServiceService) { }

  ngOnInit() {
    console.log("ad")
    this.sendPhoto.getSendPhoto(this.memberid).subscribe(data=>{
      console.log(data)
    })
  }



}
export class ReservationDataSource extends DataSource<any> {
  memberid = JSON.parse(localStorage.getItem('user')).memberId 
  constructor(private sendPhoto: SendPhotoServiceService) {
   super();
  }
  connect(): Observable<any>{
   return this.sendPhoto.getSendPhoto(this.memberid);

  }
  disconnect(){}
}