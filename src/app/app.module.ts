import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildComponent } from './child/child.component';
import { FormsPrjComponent } from './forms-prj/forms-prj.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    ErrorComponent,
    NavbarComponent,
    ChildComponent,
    FormsPrjComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
