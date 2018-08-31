import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardListResverComponent } from '../card-list-resver/card-list-resver.component';
import { CheckFormComponent } from '../check-form/check-form.component';
import { DetailFormComponent } from '../detail-form/detail-form.component';
import { PasswordValidComponent } from '../password-valid/password-valid.component';
import { TextSucessComponent } from '../text-sucess/text-sucess.component';
const routes: Routes = [
  { path: '', component: CardListResverComponent },
  { path:'check',component:CheckFormComponent},
  { path:'detail',component:DetailFormComponent},
  { path:'check-valid',component:PasswordValidComponent},
  { path:'sucess' , component:TextSucessComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RoutingMainComponent{}
