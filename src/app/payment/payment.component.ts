import { Component, OnInit } from '@angular/core';
import { BillService } from '../service/bill.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
data:any={name:"",phomunber:"",date:"",price:"",reserId:"",bookingEquipment:"",memberId:""};
  constructor(private bill : BillService) { }
   typeBill : Array<any>=[]
   Reser : Array<any>=[]
   Book : Array<any>=[]
   public type: boolean = false
  ngOnInit() {
      this.bill.getTypeAll().subscribe(data=>{
              this.typeBill = data
      })
     this.bill.getBookALL().subscribe(data=>{
          this.Book = data
      })
      this.bill.getReservationAll().subscribe(data=>{
          this.Reser = data
      })
  }

  views: any = {
    equipmentNameSelect: null,

  };
someMethod(){

   if(this.data.typeId == 1){
        this.type = true;
        //console.log(this.type)
   }else if(this.data.typeId == 2){
        this.type = false;
        //console.log(this.type)
   }

}
save(){
  this.data.memberId  =   JSON.parse(localStorage.getItem('user')).memberId  
    console.log(this.data)
      this.bill.saveBill(this.data).subscribe(data=>{
          console.log(data)
      })
  };
}
