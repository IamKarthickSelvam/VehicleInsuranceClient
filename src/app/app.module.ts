import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { PlanComponent } from './vehicle-details/plan/plan.component';
import { DetailsComponent } from './vehicle-details/details/details.component';
import { AddonComponent } from './vehicle-details/addon/addon.component';
import { PersonalComponent } from './vehicle-details/personal/personal.component';
import { CheckoutComponent } from './vehicle-details/checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { VehicleService } from './_services/vehicle.service';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        VehicleDetailsComponent,
        CarDetailsComponent,
        PlanComponent,
        DetailsComponent,
        AddonComponent,
        PersonalComponent,
        CheckoutComponent,
        SuccessComponent
    ],
    providers: [
        VehicleService,
        VehicleDetailsComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        NgbNavModule,
    ]
})
export class AppModule { }
