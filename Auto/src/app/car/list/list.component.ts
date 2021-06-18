import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-listcar',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  cars: Array<CarModel> = [];

  constructor(private servCar: CarService) { }

  ngOnInit(): void {
    this.servCar.getCars().subscribe(data => this.cars = data);
  }

}
