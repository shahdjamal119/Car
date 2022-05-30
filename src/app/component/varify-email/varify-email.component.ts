import { Component, OnInit } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { Good} from 'src/app/interfaces/good.interface';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-varify-email',
  templateUrl: './varify-email.component.html',
  styleUrls: ['./varify-email.component.css']
})
export class VarifyEmailComponent implements OnInit {

 goods: Good[] = [
   {name:'skoda',price:5,photourl:'assets/car3.jpg'},
   {name:'skoda',price:5,photourl:'assets/asa.jpeg'},
   
 ];
  goodsOpservable!: Subscription;
  Add:number = -1;
  constructor(private gs:GoodsService) { }

  ngOnInit(): void {
    
    this.gs.getAllgoods().subscribe(data =>  {
      data.map(element => {
        return {}
      })
    } );
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