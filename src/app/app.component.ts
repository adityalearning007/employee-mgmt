import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service'
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  EmployeeData:any;
  constructor(private service:EmployeeserviceService)
  {
    service.getEmployeeData().subscribe((data)=>{
      this.EmployeeData=data;
      console.log(data);
    });
  }

  deleteEmployye(Id:number)
  {
    this.service.deleteEmployee(Id).subscribe((data)=>{
      console.log(data);
    })

  }

  

  getReactiveFormData()
  {
    this.service.saveEmployeeData(this.basicForm.value).subscribe((data)=>{
      console.log(data);
    })
  }

  userData:any=[];
  basicForm=new FormGroup({
    Id:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    contact:new FormControl(''),
    address:new FormControl(''),
    department:new FormControl('')    
  });

  getEmployeeDetailsById(id:number)
  {
   this.service.getEmployeeDataById(id).subscribe((data)=>{
    console.log(data);
    this.userData=data; 
    this.basicForm.setValue({
      Id:this.userData[0].emp_Id,
      firstName:this.userData[0].firstName,
      lastName:this.userData[0].lastName,
      contact:this.userData[0].contact,
      address:this.userData[0].address,
      department:this.userData[0].department
    });
      
  })
  }

  updateEmployeeDataById()
  {
    console.log("Base value");
    console.log(this.basicForm.value);
    this.service.saveEmployeeData(this.basicForm.value).subscribe((data)=>{
      //console.log(data);
    })
  }

  
//Project Method/Variable End

  title = 'employee-mgmt';
  Add():void
  {
    console.warn("Test");
  }

   name:string="Employee Managment";
   lastname:string="This is my lastname";

   //Array 
   //numb=[12,23,45,67,78,89,123]

   isActive:boolean=true;
   //Array
   PL=["Javascript","c#","Angular","React","Vue Js","Sql Server"];
   //Object
   Employee=[
    {
      name:"Ram",
      Contact:904743984,
      Profile:"Software Devloper"
    },
    {
      name:"Shyam",
      Contact:9023792828,
      Profile:"HR"
    },
    {
      name:"Ghanshyam",
      Contact:90237493937,
      Profile:"Admin"
    },
    {
      name:"Pradeep",
      Contact:9034783483,
      Profile:"Admin"
    }
   ]


   getalertMsg(name:any)
   {
    alert(name);
   }

   getKeyUpData(charactor:any)
   {
    console.log(charactor);    
   }

   Fullname:string="";

   getUsername(name:any)
   {
    console.log(name);
    this.Fullname=name;
   }

   panNumber:any="bsdon1059W";
   amount:any=892378.23;
   todayDt=new Date();

   days=["Mon","Tues","Wed","Thru","Fri","Sat","Sun"]

   employeeData={
    name:'Ram',
    address:'Mumbai',
    Contact:90378438437,
    Isindian:true
   }

   color:any="blue";

   Language:string="Marathi";
  
   updateItem(item:string)
   {
    console.log("This is my parent compo.")
    console.log(item);
   }

   
    




  
}
