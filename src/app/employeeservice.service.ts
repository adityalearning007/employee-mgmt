import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }
  // Get data from database
  getEmployeeData()
  {
    var apiURL="https://localhost:7001/api/Employee/Employee";
    return this.http.get(apiURL);
  }

  saveEmployeeData(Obj:any)
  {
    //console.log(Obj);
    
    var headers=new HttpHeaders().set('content-type','application/json');    
    //JSON Object (convert form data into JSON)
    Obj={
      Id:Obj.Id.toString(),
      firstName:Obj.firstName,
      lastName:Obj.lastName,
      contact:Obj.contact.toString(),
      address:Obj.address,
      department:Obj.department,
      doj:Obj.doj==null?'':Obj.doj
    }  
    console.log(Obj);
    return this.http.post('https://localhost:7001/api/Employee/addemployee',Obj,{headers});   
  }

  deleteEmployee(Id:number)
  {
    var headers=new HttpHeaders().set('content-type','application/json'); 
    return this.http.delete('https://localhost:7001/api/Employee/deleteEmployee/'+Id,{headers})
  }
  
  getEmployeeDataById(id:number)
  {
    return this.http.get('https://localhost:7001/api/Employee/getdataById/'+id);
  }

}
