import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-text-sucess',
  templateUrl: './text-sucess.component.html',
  styleUrls: ['./text-sucess.component.css']
})
export class TextSucessComponent implements OnInit {
  reser:any={}
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      console.log(data)
        this.reser.reserid = data.reserid
    })
  }

}
