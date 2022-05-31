import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  car: Car = new Car();
  submitted = false;
  constructor(private carservice: CarService) { }

  ngOnInit(): void {
  }
  saveLogin(): void {
    this.carservice.create(this.car).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
  newLogin(): void {
    this.submitted = false;
    this.car = new Car();
  }

}
