import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../_services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle: any = {};
  detailsMenuBtn = true;
  planMenuBtn = false;
  addOnMenuBtn = false;
  persMenuBtn = false;
  checkOutMenuBtn = false;
  detailsMenuBold = true;
  planMenuBold = false;
  addOnMenuBold = false;
  persMenuBold = false;
  checkOutMenuBold = false;
  vehicleType: string = '';

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private route: ActivatedRoute) {
    this.getDetails();
  }

  getDetails() {
    this.vehicleService.vehicleDetails$.subscribe({
      next: response => this.vehicle = response
    });
    this.changeView(document.location.href.substring(document.location.href.lastIndexOf('/') + 1));
    this.vehicleType = this.vehicle.type;
    // console.log(document.location.href.substring(document.location.href.lastIndexOf('/') + 1));
  }

  changeView(nextUrl: string) {
    switch (nextUrl) {
      case 'details':
        this.detailsMenuBtn = true;
        this.planMenuBtn = false;
        this.addOnMenuBtn = false;
        this.persMenuBtn = false;
        this.checkOutMenuBtn = false;

        this.detailsMenuBold = true;
        this.planMenuBold = false;
        this.addOnMenuBold = false;
        this.persMenuBold = false;
        this.checkOutMenuBold = false;
        break;
      case 'plan':
        this.detailsMenuBtn = true;
        this.planMenuBtn = true;
        this.addOnMenuBtn = false;
        this.persMenuBtn = false;
        this.checkOutMenuBtn = false;

        this.detailsMenuBold = false;
        this.planMenuBold = true;
        this.addOnMenuBold = false;
        this.persMenuBold = false;
        this.checkOutMenuBold = false;
        break;
      case 'addon':
        this.detailsMenuBtn = true;
        this.planMenuBtn = true;
        this.addOnMenuBtn = true;
        this.persMenuBtn = false;
        this.checkOutMenuBtn = false;

        this.detailsMenuBold = false;
        this.planMenuBold = false;
        this.addOnMenuBold = true;
        this.persMenuBold = false;
        this.checkOutMenuBold = false;
        break;
      case 'personal':
        this.detailsMenuBtn = true;
        this.planMenuBtn = true;
        this.addOnMenuBtn = true;
        this.persMenuBtn = true;
        this.checkOutMenuBtn = false;

        this.detailsMenuBold = false;
        this.planMenuBold = false;
        this.addOnMenuBold = false;
        this.persMenuBold = true;
        this.checkOutMenuBold = false;
        break;
      case 'checkout':
        this.detailsMenuBtn = true;
        this.planMenuBtn = true;
        this.addOnMenuBtn = true;
        this.persMenuBtn = true;
        this.checkOutMenuBtn = true;

        this.detailsMenuBold = false;
        this.planMenuBold = false;
        this.addOnMenuBold = false;
        this.persMenuBold = false;
        this.checkOutMenuBold = true;
        break;
    }
    this.router.navigate([nextUrl], { relativeTo: this.route });
  }

}
