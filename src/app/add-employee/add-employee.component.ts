import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service'


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service:EmployeeserviceService) { }

  ngOnInit(): void {
  }

  basicForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    contact:new FormControl(''),
    address:new FormControl(''),
    department:new FormControl(''),
    doj:new FormControl('')
  })

  getReactiveFormData()
  {
    this.service.saveEmployeeData(this.basicForm.value).subscribe((data)=>{
      console.log(data);
    })
  }
  

}
