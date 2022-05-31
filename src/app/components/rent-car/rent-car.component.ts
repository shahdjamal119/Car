import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Good} from 'src/app/interfaces/good.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  carrent:any;
  goods: Good[] = [
    
  ];
   goodsOpservable!: Subscription;
   Add:number = -1;
   constructor(private gs:CarService) { }
 
   ngOnInit(): void {
     
     this.gs.getAll().then((rent)=>{this.carrent=rent});
     
   }

   ngOnDestory(){
    
   }
 addToCart(index: any){
  
 }
 buy(amount:number){
   let selectedGood=this.goods[this.Add]
   let data = {
     name: selectedGood.name,
     amount :+amount,price: selectedGood.price
   }
 }
}