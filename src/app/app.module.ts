import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { ListeempComponent } from './listeemp/listeemp.component';
import { AjoutempComponent } from './ajoutemp/ajoutemp.component';
import { EditempComponent } from './editemp/editemp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminnavComponent,
    ListeempComponent,
    AjoutempComponent,
    EditempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
