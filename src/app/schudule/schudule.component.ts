import { Component, OnInit } from '@angular/core';
import {NewService} from '../service/new.service'
import {Router} from "@angular/router";
export interface Category {
value: string;
viewValue: string;
}
export interface Timetype {
value: string;
viewValue: string;
}

@Component({
  selector: 'app-schudule',
  templateUrl: './schudule.component.html',
  styleUrls: ['./schudule.component.css']
})
export class SchuduleComponent implements OnInit {
data:any={}
timetype: Array<any>= [];
typework: Array<any>= [];
constructor(private app : NewService,private router: Router) { }


  ngOnInit() {
      this.app.getTimeType().subscribe(timetype=>{
          this.timetype =  timetype;
          console.log(timetype)
      })
this.app.gettypework().subscribe(typework=>{
          this.typework =  typework;
          console.log(typework)
      })

  }
submitData(){
console.log(this.data)
this.app.saveWork(this.data).subscribe(data=>{
    console.log(data)
    this.router.navigate(['schudule/detail'])
})
}
}
