import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { CarModel } from '../models/car.model';

export class CarInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //avant l'appel

        if (req.method === "POST" || req.method === "PUT") {
            //console.log(req.body['price']);
            if (req.body !== null && req.body['price'] != null) {
                req.body['price'] = +req.body['price'];
            }
        }
        return next.handle(req);
        /*next.handle(req).subscribe(resp => {
            //après le retour
        });*/
    }

}