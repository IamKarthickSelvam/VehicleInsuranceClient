import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './vehicle-details/plan/plan.component';
import { DetailsComponent } from './vehicle-details/details/details.component';
import { AddonComponent } from './vehicle-details/addon/addon.component';
import { PersonalComponent } from './vehicle-details/personal/personal.component';
import { CheckoutComponent } from './vehicle-details/checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'vehicle-details', component: VehicleDetailsComponent,
    children: [
      { path: 'details', component: DetailsComponent},
      { path: 'plan', component: PlanComponent},
      { path: 'addon', component: AddonComponent},
      { path: 'personal', component: PersonalComponent},
      { path: 'checkout', component: CheckoutComponent}
    ]
  },
  { path: 'car-details', component: CarDetailsComponent},
  { path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
