import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/_services/vehicle.service';
import { VehicleDetailsComponent } from '../vehicle-details.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  vehicle: any;

  persDetailsForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  })

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
    
    if ((this.vehicle.fullName && this.vehicle.email && this.vehicle.mobNo && this.vehicle.pincode) != null) {
      this.persDetailsForm.setValue({
        fullName: this.vehicle.fullName,
        email: this.vehicle.email,
        mobNo: this.vehicle.mobNo,
        pincode: this.vehicle.pincode
      })
    }
  }

  get fullName() {
    return this.persDetailsForm.get('fullName');
  }
  get email() {
    return this.persDetailsForm.get('email');
  }
  get mobNo() {
    return this.persDetailsForm.get('mobNo');
  }
  get pincode() {
    return this.persDetailsForm.get('pincode');
  }

  savePersDetails() {
    this.vehicle.fullName = this.fullName?.value;
    this.vehicle.email = this.email?.value;
    this.vehicle.mobNo = this.mobNo?.value;
    this.vehicle.pincode = this.pincode?.value;
    this.vehicleService.setVehicle(this.vehicle);
    this.vehicleDetails.changeView('checkout');
  }
}
