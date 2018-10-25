import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BookingequipmentService } from '../bookingequipment-service/bookingequipment.service';
import { AppserviceService } from '../bookingequipment-service/appservice.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
      this.user.memberIdInput = this.app.getUser().memberId
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
