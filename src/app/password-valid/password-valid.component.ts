import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute} from "@angular/router";
import {ReservationService} from '../service/reservation.service'
import {CancelreservationService} from '../service/cancelreservation.service'
import {TextDialogComponent} from '../text-dialog/text-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-password-valid',
  templateUrl: './password-valid.component.html',
  styleUrls: ['./password-valid.component.css']
})
export class PasswordValidComponent implements OnInit {
  password:any={}
  checkdata:any={}
  constructor(private route:ActivatedRoute,private reservaton :ReservationService,private cancelreser:CancelreservationService,private router:Router,public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(prams=>{
      console.log(prams)
      this.checkdata=prams
    })
  }
  SubmitLast(){

    this.reservaton.getReservationByReserId(this.checkdata.reserid).subscribe(data=>{
       console.log(data)
       this.reservaton.getMemberById(data.memberId.memberId).subscribe(mem=>{
         console.log(mem)
          this.reservaton.checkpassword(mem.username,this.password.pass).subscribe(check=>{
            console.log(check)
            if(check.status == "found" ){
                this.cancelreser.submitCancel(this.checkdata.reserid,this.checkdata.comment).subscribe(data=>{
                  // console.log(data)
                  if(data.status == "save"){
                      this.router.navigate(['sucess',{reserid:this.checkdata.reserid}])
                  }else{
                      console.log("error save cancelReservation")
                  }  
                })
            }else{
                    console.log("not found member accout")
                    const dialogRef = this.dialog.open(TextDialogComponent, {
                      width: '350px',
                  
                      data: {name: 'password ผิดพลาด'}
                    });
                
                    dialogRef.afterClosed().subscribe(result => {
                      console.log('The dialog was closed');
                   
                    });
            }
          })
       })
    })
    // console.log(this.password)

  }
}
