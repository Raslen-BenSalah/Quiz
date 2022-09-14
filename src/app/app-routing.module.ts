import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminnavComponent } from './adminnav/adminnav.component';
import { LoginComponent } from './login/login.component';
import { ListeempComponent } from './listeemp/listeemp.component';
import { AjoutempComponent } from './ajoutemp/ajoutemp.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'adminnav', component:AdminnavComponent},
  {path:"listeemp", component:ListeempComponent},
  {path:"ajoutemp", component:AjoutempComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
