import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailsComponent } from './component/cardetails/cardetails.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';

const routes: Routes = [
  {path: '',  pathMatch:'full',component:LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgetPasswordComponent},
  {path: 'varify-email/:id', component : CardetailsComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
