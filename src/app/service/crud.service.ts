import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Good } from '../interfaces/good.interface'
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  

  constructor(private afs: AngularFirestore) { }

  // add car 
  addCar(car: Good) {
    car.id = this.afs.createId();
    return this.afs.collection('carso').add(car);
  }

  // get all cars
  getAllCars() {
    return this.afs.collection('carso').snapshotChanges();
  }

  // delete car
  deleteCar(car: Good) {
     this.afs.doc(`carso/${car.id}`).delete();
  }

}
