import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, timer } from "rxjs";
import { map, mergeMap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { BrandModel } from "../models/brand.model";

@Injectable({ providedIn: 'root' })
export class BrandService {

    constructor(private http: HttpClient) { }

    getBrands(): Observable<Array<BrandModel>> {
        /*return [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];*/

        /*this.http.get<Array<BrandModel>>(environment.urlBrand).subscribe(data => {
            console.log(data);
        });*/

        /*let inter = timer(0, 10000);
        let call = this.http.get<Array<BrandModel>>(environment.urlBrand);
        let final = inter.pipe(mergeMap(() => call));
        return final;*/

        //return timer(0, 10000).pipe(mergeMap(() => this.http.get<Array<BrandModel>>(environment.urlBrand)));
        //let call = this.http.get<Array<BrandModel>>(environment.urlBrand).pipe(map(data => data.sort((a, b) => a.name < b.name ? -1 : 1)));

        //return timer(0, 10000).pipe(mergeMap(() => call));

        return this.http.get<Array<BrandModel>>(environment.urlBrand);
    }

    getBrandsOrderByName(): Observable<Array<BrandModel>> {
        return this.http.get<Array<BrandModel>>(environment.urlBrand).pipe(map(data => data.sort((a, b) => a.name < b.name ? -1 : 1)));
    }

    getBandsOrderByNameRepeat(): Observable<Array<BrandModel>> {
        return timer(0, 10000).pipe(mergeMap(() => this.http.get<Array<BrandModel>>(environment.urlBrand).pipe(map(data => data.sort((a, b) => a.name < b.name ? -1 : 1)))));
    }

    getBrandById(id: number): Observable<BrandModel> {
        return this.http.get<BrandModel>(`${environment.urlBrand}/${id}`);
    }
}