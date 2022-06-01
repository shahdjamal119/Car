import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { Good} from 'src/app/interfaces/good.interface';
import { GoodsService } from 'src/app/services/goods.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-varify-email',
  templateUrl: './varify-email.component.html',
  styleUrls: ['./varify-email.component.css']
})
export class VarifyEmailComponent implements OnInit {
am:any;
 goods: Good[] = [
  
   
 ];
  goodsOpservable!: Subscription;
  Add:number = -1;
  constructor(private gs:GoodsService,private router:Router) {}

  ngOnInit(): void {
    
    this.gs.getAllUsers().then((abood)=>{this.am=abood})
    } 
  
  ngOnDestory(){
   
  }
addToCart(index: any){
 this.router.navigate([this.router.url+'/'+index])
 console.log(index);
}
buy(amount:number){
  let selectedGood=this.goods[this.Add]
  let data = {
    name: selectedGood.name,
    amount :+amount,price: selectedGood.price
  }
}
}