import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  sendId: String;
  

  name: string;
  address: string;
  email: string;

  typeDelivery:string;
  typePhoto:string;
  typeSize:string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  //{sendId: "1", name: 'Hydrogen', address: "112 asd", email: "kotji@gmail.com",typeDelivery:"kerry",typePhoto:"Album",typeSize:"A4"},
  

];


@Component({
  selector: 'app-conferm',
  templateUrl: './conferm.component.html',
  styleUrls: ['./conferm.component.css']
})
export class ConfermComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','TypeDelivery','TypePhoto','TypeSize'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }



}
