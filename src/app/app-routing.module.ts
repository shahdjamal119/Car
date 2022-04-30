import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';

const routes: Routes = [
  {path: '', redirectTo:'file-upload', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgetPasswordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
