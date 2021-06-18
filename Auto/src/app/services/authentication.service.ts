import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user?: UserModel;
    private subjectUser = new BehaviorSubject<UserModel>(null);

    get $user(): Observable<UserModel> {
        return this.subjectUser.asObservable();
    }

    constructor() {
        if (sessionStorage.getItem('USER') != null) {
            this.user = JSON.parse(sessionStorage.getItem('USER') || '');
            this.subjectUser.next(this.user);
            console.log('NEXT');
        }
    }

    login(login: string, password: string): void {
        //appel serveur
        this.user = { login: login, name: 'bob', token: 'WXBDsfgWFGFDQGQFssqqdDSHGFS4545dsfdsggdsfQGGFDSQGFDHG542DS' };
        sessionStorage.setItem('USER', JSON.stringify(this.user));
        this.subjectUser.next(this.user);
    }

    logout(): void {
        this.user = null;
        sessionStorage.removeItem('USER');
        this.subjectUser.next(this.user);
    }
}