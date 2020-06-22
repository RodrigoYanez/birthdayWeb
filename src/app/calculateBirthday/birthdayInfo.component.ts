import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from './service';
import { BirthdayInfo } from './birthdayInfo'
import { BirthdayInfoRS } from './birthdayInfoRS'

@Component({
  selector: 'app-calculateBirthday',
  templateUrl: './birthdayInfo.component.html',
  styleUrls: ['./birthdayInfo.component.css']
})
export class BirthdayInfoComponent {

  bInfo : BirthdayInfo
  bInfoRS : BirthdayInfoRS

  constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private service: Service
  ) { 
    this.bInfo = new BirthdayInfo();
    this.bInfoRS = new BirthdayInfoRS();
  }

  submitted = false;


  onSubmit() { 
      this.service.calculateBirthday(this.bInfo).subscribe(data => {
      console.log(data);
      this.bInfoRS.firstName = data.firstName;
      this.bInfoRS.lastName = data.lastName;
      this.bInfoRS.dateOfBirthday = data.dateOfBirthday;
      this.bInfoRS.age = data.age;
      this.bInfoRS.poem = data.poem;
      this.submitted = true; 
    });
  }

}
