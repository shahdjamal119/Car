import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Car } from '../models/car.model';
import {Good} from '../interfaces/good.interface'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private dbPath = '/cars';
  carsRef: AngularFirestoreCollection<Car>;
  constructor(private db: AngularFirestore) { 
    this.carsRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Good> {
    return this.carsRef;
  }
  create(car: Car): any {
    return this.carsRef.add({ ...car });
  }
  update(id: string, data: any): Promise<void> {
    return this.carsRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.carsRef.doc(id).delete();
  }
}
