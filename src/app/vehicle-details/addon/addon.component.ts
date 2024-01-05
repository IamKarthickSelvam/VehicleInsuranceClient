import { Component } from '@angular/core';
import { VehicleDetailsComponent } from '../vehicle-details.component';
import { VehicleService } from 'src/app/_services/vehicle.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent {
  vehicle: any;
  addedPremium: number = 0;
  oldPremium: number = 0;
  addbtn: string = 'Add';

  constructor(private vehicleDetails: VehicleDetailsComponent,
    private vehicleService: VehicleService) {
    this.getDetails();
  }

  getDetails() {
    if (sessionStorage.getItem('vehicle') == null) {
      if (this.vehicle == null) {
        this.vehicleService.vehicleDetails$.subscribe({
          next: response => this.vehicle = response
        });
      }
    }
    else {
      this.vehicle = JSON.parse(sessionStorage['vehicle']);
    }
    if (this.vehicle['accCover'] == null || this.vehicle['accCover'] == undefined) {
      this.vehicle.accCover = false;
    }
    this.addedPremium = this.vehicle.finalPremium;
    if (this.vehicle.accCover === true) {
      this.addbtn = 'Added';
      this.addedPremium = this.vehicle.finalPremium - 350;
    }
  }

  addCover() {
    if (this.vehicle.accCover === false) {
      this.vehicle.accCover = true;
      this.addedPremium = this.vehicle.finalPremium + 350;
      this.addbtn = 'Added';
    }
    else {
      this.vehicle.accCover = false;
      this.addedPremium = this.vehicle.finalPremium;
      this.addbtn = 'Add';
    }
    console.log(this.vehicle.finalPremium);
  }

  changeView() {
    this.vehicle.finalPremium = this.addedPremium;
    this.vehicleService.setVehicle(this.vehicle);
    this.vehicleDetails.changeView('personal');
  }
}
