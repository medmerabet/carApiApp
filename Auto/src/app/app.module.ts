import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
//import { AuthenticationModule } from './authentication/authentication.module';
//import { CarModule } from './car/car.module';
import { MasterModule } from './master/master.module';
import { BrandService } from './services/brand.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { CarInterceptor } from './interceptors/car.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    MasterModule,
    HttpClientModule,
    MatNativeDateModule
    //AuthenticationModule,
    //CarModule
  ],
  providers: [
    /*BrandService,*/
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: CarInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
