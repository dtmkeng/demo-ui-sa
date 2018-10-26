import { Component, OnInit } from '@angular/core';
import {SendPhotoServiceService} from '../service/send-photo-service.service'
import { Router } from '@angular/router';
import {TextDialogComponent} from '../text-dialog/text-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  datasend:any={reservationId:"",name:"",address:"",email:"",typeDeliveryId:"",typePhotoId:"",typeSizeId:""};
  

  constructor(private send : SendPhotoServiceService,private rounter : Router,public dialog: MatDialog) { }
  ngOnInit() {
    console.log("dasd")
    this.send.getTypeDeliveryId().subscribe(data=>{
      console.log(data)
      this.typeDelivery = data;
    })
    this.send.getTypePhotoId().subscribe(data=>{
      console.log(data)
      this.typePhoto = data;
    })
    this.send.getTypeSizeId().subscribe(data=>{
      console.log(data)
      this.typeSize = data; 
    })
  }
  typeDelivery: Array<any>= [];
  typeDeliverys: any = {
    
    typeDelivery:null
  };


  typePhoto:Array<any>=[];
  typePhotos: any = {
     typePhoto: null
    
  };

  typeSize:Array<any>=[];
  typeSizes: any = { 
    typeSize: null
  
  };
 
  OnSubmit(){
    console.log(this.datasend)
    this.datasend.memberId  =   JSON.parse(localStorage.getItem('user')).memberId
    this.send.saveSendPhoto(this.datasend).subscribe(data=>{
      console.log(data)
      this.datasend ={reservationId:"",name:"",address:"",email:"",typeDeliveryId:"",typePhotoId:"",typeSizeId:""}
      const dialogRef = this.dialog.open(TextDialogComponent, {
        width: '600px',
    
        data: {name: 'บันทึการส่งสำเสร็จ'}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  
    })
  };

  show(){
    this.rounter.navigate(['conferm'])


  };





}
