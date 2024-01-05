import { Component } from '@angular/core';
import { VehicleDetailsComponent } from '../vehicle-details/vehicle-details.component';
import { VehicleService } from '../_services/vehicle.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  vehicle: any;

  constructor(private vehicleDetails: VehicleDetailsComponent,
    private vehicleService: VehicleService) {
    this.getDetails();
  }

  ngOnInit() {
    this.generateDocument();
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
  }

  async generateDocument() {
    try {
      const pdfBlob = await lastValueFrom(this.vehicleService.generatePolicy(this.vehicle));
      console.log(pdfBlob);
      const pdfUrl = window.URL.createObjectURL(pdfBlob.body as Blob);
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = 'Vinsurance Policy.pdf';
      a.click();
      URL.revokeObjectURL(pdfUrl);
    }
    catch (error) {
      console.log(error);
    }
  }

  changeView(next: string) {
    sessionStorage.removeItem("vehicle");
    switch (next) {
      case 'homepage':
        this.vehicleDetails.changeView('');
        break;
      case 'details':
        this.vehicleDetails.changeView('');
        break;
    }
  }

}
