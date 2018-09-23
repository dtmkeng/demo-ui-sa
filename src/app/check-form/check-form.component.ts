import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CancelreservationService} from '../service/cancelreservation.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent implements OnInit {
  check: any = {};
  constructor(private route:ActivatedRoute,private cacelreser:CancelreservationService,private router: Router) { }
  reserId : String
  ngOnInit() {
    this.route.params.subscribe(param=>{
      console.log(param['data'])
    })
   
  }
  onClickMe(){
    this.cacelreser.findMapReser(this.check.reserid,this.check.memid).subscribe(data=>{
      console.log(data)
      if(data != null){
        this.router.navigate(['detail',{data:data.reserId}])
      }
    })
      console.log(this.check)
  }
}
