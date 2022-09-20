import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminnavComponent } from './adminnav/adminnav.component';
import { LoginComponent } from './login/login.component';
import { ListeempComponent } from './listeemp/listeemp.component';
import { AjoutempComponent } from './ajoutemp/ajoutemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { AjoutquizComponent } from './ajoutquiz/ajoutquiz.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailempComponent } from './detailemp/detailemp.component';

const routes: Routes = [
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'adminnav', component:AdminnavComponent},
  {path:"listeemp", component:ListeempComponent},
  {path:"ajoutemp", component:AjoutempComponent},
  {path:"editemp", component:EditempComponent},
  {path:"ajoutquiz", component:AjoutquizComponent},
  {path:"listquiz", component:ListQuizComponent},
  {path:"adminprofile", component:AdminprofileComponent},
  {path:"editadmin", component:EditadminComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"detailemp", component:DetailempComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
