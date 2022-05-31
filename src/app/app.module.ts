import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';  
import { AngularFireModule } from '@angular/fire/compat';  
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  
import { environment } from 'src/environments/environment';
import { loginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterComponent } from './components/register/register.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';

@NgModule({
  declarations: [
    AppComponent,  
    loginComponent,
    ForgetPasswordComponent, 
    RegisterComponent, 
    RentCarComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
