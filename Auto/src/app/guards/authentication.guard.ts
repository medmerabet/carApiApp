import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

    user: UserModel;

    constructor(private auth: AuthenticationService) {
        auth.$user.subscribe(x => this.user = x);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.user) {
            return true;
        } else {
            alert(`impossible d'accéder à cette page`);
            return false;
        }
    }
}
