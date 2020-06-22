import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './calculateBirthday/service';
import { AppComponent } from './app.component';
import { BirthdayInfoComponent } from './calculateBirthday/birthdayInfo.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})

export class AppModule { }