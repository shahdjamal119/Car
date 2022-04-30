import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email : string = '';

  constructor(private auth : AuthService) { }


  ngOnInit(): void {
  }
  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}
