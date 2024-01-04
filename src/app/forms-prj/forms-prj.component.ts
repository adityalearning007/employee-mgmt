import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-prj',
  templateUrl: './forms-prj.component.html',
  styleUrls: ['./forms-prj.component.css']
})
export class FormsPrjComponent implements OnInit {

  constructor() { }
  fullName:string="";
  Contact:number=0;

  ngOnInit(): void {
  }

  getFormData(data:any)
  {
    console.log(data.Fullname);
    this.fullName=data.Fullname;
    this.Contact=data.contact;
  }

  //Reactive form

  basicForm=new FormGroup({
    fullName:new FormControl('Viditya Software'),
    contact:new FormControl('232323232')
  })

  getReactiveFormData()
  {
    console.log(this.basicForm.value);

  }

 
}
