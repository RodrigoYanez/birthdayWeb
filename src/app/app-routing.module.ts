import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayInfoComponent } from './calculateBirthday/birthdayInfo.component';

const routes: Routes = [
  { path: '', component: BirthdayInfoComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }