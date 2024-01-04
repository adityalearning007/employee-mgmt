import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  // Get data from database
  getEmployeeData()
  {
    var apiURL="https://localhost:7001/api/Employee/Employee";
    return this.http.get(apiURL);
  }


}
