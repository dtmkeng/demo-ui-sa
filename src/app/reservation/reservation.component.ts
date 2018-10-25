import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
export interface Transaction {
id: number
name: string;
cost: number;
date: string
time: string;

}
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
displayedColumns = ['id','name', 'date', 'time', 'cost'];
  transactions: Transaction[] = [
    {id:1,name: 'Hero', date:'12/03/63', time:'ครึ่งวัน', cost: 1600},
    {id:1,name: 'Room1', date:'12/03/63', time:'ครึ่งวัน', cost: 3200},

  ];
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  constructor() { }

  ngOnInit() {
  }

}
