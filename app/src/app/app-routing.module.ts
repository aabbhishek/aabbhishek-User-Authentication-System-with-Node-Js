import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPanComponent } from './login-pan/login-pan.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
{
  path:'',
  component:LoginPanComponent
},
{
    path:'login',
    component:LoginPanComponent
 },
{
    path:'register',
    component:RegisterComponent
 },
{
    path:'dashbord',
    component:DashbordComponent
 },{//404 error
   path:"**",
     component:NotFoundPageComponent,
 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
