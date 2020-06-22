import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BirthdayInfo } from './birthdayInfo';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable()
export class Service {

  private url = "http://localhost:8080/calculateBirthday/birthdayInfo";

  constructor(private http: HttpClient) { 
    
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }  

  public calculateBirthday(bInfo:BirthdayInfo): Observable<any>{
    
    const birthDate = new DatePipe('en-ES').transform(bInfo.birthDate, 'dd/MM/yyyy')
    
    console.log("DATA FOR WS : "+ this.url  + "?firstName=" + bInfo.firstName +"&lastName="+ bInfo.lastName  + "&birthday=" + birthDate);
    return this.http.get<BirthdayInfo>( this.url  + "?firstName=" + bInfo.firstName +"&lastName="+ bInfo.lastName  + "&birthday=" + birthDate)
  }

}