import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,MatIconModule,MatDialogModule,MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListResverComponent } from './card-list-resver/card-list-resver.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { PasswordValidComponent } from './password-valid/password-valid.component';
import { RoutingMainComponent } from './routing-main/routing-main.component';
import { TextSucessComponent } from './text-sucess/text-sucess.component';

import { AppserviceService} from './service/appservice.service'
import {ReservationService} from './service/reservation.service'
import {CancelreservationService} from './service/cancelreservation.service'
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import {CardListResverComponent} from './card-list-resver/card-list-resver.component'
import { HttpHandler ,HttpInterceptor,HttpRequest,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CardListResverComponent,
    CheckFormComponent,
    DetailFormComponent,
    PasswordValidComponent,
    TextSucessComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingMainComponent,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [ReservationService,CancelreservationService,AppserviceService,{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
