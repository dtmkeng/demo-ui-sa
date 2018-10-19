import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../service/appservice.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {TextDialogComponent} from '../text-dialog/text-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''};
  constructor(private app: AppserviceService, private http: HttpClient, private router: Router,public dialog: MatDialog) {
  }


  ngOnInit() {
   
  }
  LoginSubmit(){
       this.app.authenticate(this.credentials,()=>{
         if(this.app.authenticated){
          this.router.navigate(['home']);
         }else{
          //  alert('not user')
          const dialogRef = this.dialog.open(TextDialogComponent, {
            width: '600px',
        
            data: {name: 'Incorrect login information. Please check your credentials and try again'}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
         }
       })
      
  }
}
