import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardListResverComponent } from '../card-list-resver/card-list-resver.component';
import { CheckFormComponent } from '../check-form/check-form.component';
import { DetailFormComponent } from '../detail-form/detail-form.component';
import { PasswordValidComponent } from '../password-valid/password-valid.component';
import { TextSucessComponent } from '../text-sucess/text-sucess.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import {HomeComponent} from '../home/home.component'

import {BookComponent} from '../book/book.component'
import { HistoryComponent } from '../history/history.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reserlist', component: CardListResverComponent },
  { path:'check',component:CheckFormComponent},
  { path:'detail',component:DetailFormComponent},
  { path:'check-valid',component:PasswordValidComponent},
  { path:'sucess' , component:TextSucessComponent},
  { path:'login' , component:LoginComponent},
  { path:'signup' , component:SignupComponent},
  { path:'book',component:BookComponent},
  { path:'book/history',component:HistoryComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RoutingMainComponent{}
