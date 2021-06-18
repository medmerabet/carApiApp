import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AddComponent } from './car/add/add.component';
import { ListComponent } from './car/list/list.component';
import { HomeComponent } from './master/home/home.component';
import { NotFoundComponent } from './master/not-found/not-found.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },

    /*{ path: 'car/list', component: ListComponent },
    { path: 'car/add', component: AddComponent },*/
    /*{
        path: 'car', children: [
            { path: 'list', component: ListComponent },
            { path: 'add', component: AddComponent }
        ]
    },*/
    { path: 'car', loadChildren: () => import('./car/car.module').then(x => x.CarModule) },

    //{ path: 'auth/login', component: LoginComponent },
    { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(x => x.AuthenticationModule) },

    { path: '404', component: NotFoundComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }