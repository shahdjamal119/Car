import { Injectable } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { AngularFirestore} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore) {
   }
}


