import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BrandModel } from 'src/app/models/brand.model';
import { CarModel } from 'src/app/models/car.model';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  formCar: FormGroup;
  $brands?: Observable<Array<BrandModel>>;

  constructor(private servBrand: BrandService, private servCar: CarService, private router: Router) {
    this.formCar = new FormGroup({
      model: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(0)]),
      dateOfCirculation: new FormControl('', [Validators.required]),
      markID: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.$brands = this.servBrand.getBrandsOrderByName();
  }

  onSubmit(): void {
    //console.log(this.formCar);
    if (this.formCar.valid) {
      const car = this.formCar.value as CarModel;
      //car.price = +car.price;
      //console.log(typeof car.price);
      //console.log(car);
      this.servCar.saveCar(car).subscribe(x => {
        alert(`La voiture est enregistrée avec l'id ${x.id}`);
        //this.router.navigate(['car/detail', x.id, x.model]);
        this.router.navigate(['car/list']);
      }, err => {
        alert(err.message);
      });
    }
  }

}
