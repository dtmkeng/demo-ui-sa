import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewService } from '../service/new.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

export interface Detail {
workschuduleid: number,
date: Date,
location: String,
photographer: String,
timetype: String
}


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    displayedColumns : string[] = ['workschuduleid','photographer','timetype','location','date'];
    dataSource = new DetailDataSource(this.newService);
    constructor(private newService: NewService, private httpClient: HttpClient) { }
    //console.log(dataSource);
  ngOnInit() {
            this.newService.getDetail().subscribe(data=>{
                console.log(data)
            })
  }
}
export class DetailDataSource extends DataSource<any> {
   constructor(private newService: NewService) {
    super();
   }
   connect(): Observable<any>{

    return this.newService.getDetail();

   }
   disconnect(){}
}
