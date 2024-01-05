import { Component } from '@angular/core';
import { VehicleDetailsComponent } from '../vehicle-details.component';
import { VehicleService } from 'src/app/_services/vehicle.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  vehicle: any;
  Date: any;
  Month: any;
  startYear: any;
  endYear: any;
  payment: any = {};
  images: any = {};

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
    const polStartDate = new Date;
    const polEndDate = new Date;
    polEndDate.setFullYear(polStartDate.getFullYear() + 1);

    this.Date = polStartDate.getDate();
    this.Month = polStartDate.getMonth() + 1;
    this.startYear = polStartDate.getFullYear();
    this.endYear = this.startYear + 1;

    this.setMonthNames();
    this.setPaymentDefault();
    this.getImageUrl();
  }

  setMonthNames() {
    switch (this.Month) {
      case 1:
        this.Month = 'January';
        break;
      case 2:
        this.Month = 'February';
        break;
      case 3:
        this.Month = 'March';
        break;
      case 4:
        this.Month = 'April';
        break;
      case 5:
        this.Month = 'May';
        break;
      case 6:
        this.Month = 'June';
        break;
      case 7:
        this.Month = 'July';
        break;
      case 8:
        this.Month = 'August';
        break;
      case 9:
        this.Month = 'September';
        break;
      case 10:
        this.Month = 'October';
        break;
      case 11:
        this.Month = 'November';
        break;
      case 12:
        this.Month = 'December';
        break;
    }
  }

  setPaymentDefault() {
    this.payment.credit = true;
    this.payment.debit = false;
    this.payment.upi = false;
    this.payment.netbank = false;
  }

  getImageUrl() {
    this.images = JSON.parse(sessionStorage["imageUri"]);
  }

  setPaymentScreen(event: any, paymentType: string) {
    switch (paymentType) {
      case 'credit':
        this.payment.credit = true;
        this.payment.debit = false;
        this.payment.upi = false;
        this.payment.netbank = false;
        break;
      case 'debit':
        this.payment.credit = false;
        this.payment.debit = true;
        this.payment.upi = false;
        this.payment.netbank = false;
        break;
      case 'upi':
        this.payment.credit = false;
        this.payment.debit = false;
        this.payment.upi = true;
        this.payment.netbank = false;
        break;
      case 'netbank':
        this.payment.credit = false;
        this.payment.debit = false;
        this.payment.upi = false;
        this.payment.netbank = true;
        break;
    }
  }

}
