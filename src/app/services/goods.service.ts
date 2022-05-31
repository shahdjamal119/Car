import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs:AngularFirestore) { }
  
  getAllUsers() {
    return new Promise<any>((resolve)=> {
    this.fs.collection('carso').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
   }}
