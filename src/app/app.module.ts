import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListResverComponent } from './card-list-resver/card-list-resver.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { DetailFormComponent } from './detail-form/detail-form.component';

// import {CardListResverComponent} from './card-list-resver/card-list-resver.component' 
@NgModule({
  declarations: [
    AppComponent,
    CardListResverComponent,
    CheckFormComponent,
    DetailFormComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
