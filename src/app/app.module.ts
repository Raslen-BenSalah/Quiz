import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { ListeempComponent } from './listeemp/listeemp.component';
import { AjoutempComponent } from './ajoutemp/ajoutemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { AjoutquizComponent } from './ajoutquiz/ajoutquiz.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminnavComponent,
    ListeempComponent,
    AjoutempComponent,
    EditempComponent,
    AjoutquizComponent,
    ListQuizComponent,
    AdminprofileComponent,
    EditadminComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
