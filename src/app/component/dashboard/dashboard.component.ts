
import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interface';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cars: Good[] = [];
  carObj: Good = {
    id: '',
    name: '',
    price: 0,
  };
  id: string = '';
  name: string = '';
  price: number = 0;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.crudService.getAllCars().subscribe(res => {
      this.cars = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data
      })
    })
  }

  resetForm() {
    this.id = '';
    this.name = '';
    this.price = 0;
    this.carObj.id = '';
    this.carObj.name = '';
    this.carObj.price = 0;
  }

  addCar() {
    if(this.name == '' || this.price == 0) {
      alert('Fill All Field');
      return;
    } 
    this.carObj.id = '';
    this.carObj.name = this.name;
    this.carObj.price = this.price
    this.crudService.addCar(this.carObj);
    this.resetForm();
  }


  deleteCar(car: Good) {
    
    if(window.confirm('Are you sure you want to delete ' + car.name + ' ? ')) {
      this.crudService.deleteCar(car)
    }
  }
}