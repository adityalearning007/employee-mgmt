import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  
  {
    path:'addresource',
    component:AddEmployeeComponent
  },
  // {
  //   path:'about',
  //   component:AboutComponent
  // },
  // {
  //   path:'contact',
  //   component:ContactComponent
  // },
  // {
  //   path:'user',
  //   component:UserComponent
  // },
  // {
  //   path:'**',
  //   component:ErrorComponent
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
