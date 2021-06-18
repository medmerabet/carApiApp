import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrandModel } from 'src/app/models/brand.model';
import { CarModel } from 'src/app/models/car.model';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-detailcar',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  $obsCar?: Observable<CarModel>;
  $obsBrand?: Observable<BrandModel>;

  constructor(private servCar: CarService, private route: ActivatedRoute, private servBrand: BrandService) { }

  ngOnInit(): void {
    this.$obsCar = this.servCar.getCarById(this.route.snapshot.params.id).pipe(map(x => {
      this.$obsBrand = this.servBrand.getBrandById(x.markID);
      return x;
    }));


  }

}
