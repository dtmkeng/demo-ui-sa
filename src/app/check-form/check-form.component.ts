import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CancelreservationService} from '../service/cancelreservation.service'
import {Router} from "@angular/router";
// export interface Food {
//   value: string;
//   viewValue: string;
// }
import {TextDialogComponent} from '../text-dialog/text-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent implements OnInit {
  check: any = {};
  animal: string;
  name: string;

  constructor(private route:ActivatedRoute,private cacelreser:CancelreservationService,private router: Router,public dialog: MatDialog) { }
  reserId : String
  ngOnInit() {
    this.route.params.subscribe(param=>{
      console.log(param['data'])
    })
    
   
    
  }
  onClickMe(){
    this.cacelreser.findMapReser(this.check.reserid,this.check.memname).subscribe(data=>{
      console.log(data)
      if(data){
        this.router.navigate(['detail',{data:data.reservationId}])
      }else{
        const dialogRef = this.dialog.open(TextDialogComponent, {
          width: '300px',
      
          data: {name: 'ข้อมูลผิดพลาด'}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
      }
    })
      console.log(this.check)
  }
 


}
