import { createDirectiveDefinitionMap } from '@angular/compiler/src/render3/partial/directive';
import { AfterContentInit, AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodsService } from 'src/app/services/goods.service';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Good } from '../../interfaces/good.interface';
@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']

})
export class CardetailsComponent implements OnInit {
  carD:any;
  id = this._activatedRoute.snapshot.params['id'];
  constructor(private _activatedRoute: ActivatedRoute,private gs:GoodsService) {
   }

  ngOnInit(): void {
    this.test()

  }


  test() {
    return this.gs.getCardDitales(this.id).then((shahd)=>this.carD =shahd )
  }
}
