import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { CalldataService } from './calldata.service';
import { CourseService } from './course.service';
import { ChekSessionService } from './chek-session.service';

import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule ,
  MatButtonModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPanComponent } from './login-pan/login-pan.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CallTableComponent } from './call-table/call-table.component';
import { CourseTableComponent } from './course-table/course-table.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPanComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundPageComponent,
    DashbordComponent,
    CallTableComponent,
    CourseTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
