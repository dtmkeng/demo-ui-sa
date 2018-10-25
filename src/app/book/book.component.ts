import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BookingequipmentService } from '../bookingequipment-service/bookingequipment.service';
import { AppserviceService } from '../bookingequipment-service/appservice.service'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  equipmentNames: Array<any>;
  user: any={
    memberIdInput: null,
  }
  views: any = {
    equipmentNameSelect: null,
    dateStartInput: null,
    dateEndInput: null,
    totalDayInput: null,
  };
  constructor(private bookingequipmentService: BookingequipmentService , private httpClient: HttpClient,private app :AppserviceService) { }

  ngOnInit() {
    this.bookingequipmentService.getEquipmentName().subscribe(data => {
      this.equipmentNames = data;
      console.log(data);
    });

  }
  save_func(){
    // console.log(this.app.getUser())
      this.user.memberIdInput  =   JSON.parse(localStorage.getItem('user')).memberId  
      alert(this.views.equipmentNameSelect);
      alert(this.views.dateStartInput);
      alert(this.views.dateEndInput);
      alert(this.views.totalDayInput);
      alert(this.user.memberIdInput);
      this.httpClient.post('http://localhost:8080/booking/' + this.views.equipmentNameSelect + '/' + this.views.dateStartInput + '/' + this.views.dateEndInput + '/' + this.views.totalDayInput + '/' + this.user.memberIdInput, this.views )
           .subscribe(
               data => {
                   console.log('POST Request is successful', data);
               },
               error => {
                    console.log('Rrror', error);
              }

           );
  }

}
