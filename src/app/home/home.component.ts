import { Component, EventEmitter } from '@angular/core';
import { VehicleService } from '../_services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private vehicleService: VehicleService, private router: Router,
    private route: ActivatedRoute) {
    this.changeVehicleCard('Bike');
  }

  ngOnInit() {
    this.getImages();
  }

  card = false;
  details = false;
  vehicle: any = {};
  selectedUrl: any;
  regx = /^[A-Za-z]{2}\d{2}[A-Za-z]{1,2}\d{4}$/;
  regNoFlag = false;
  demoFlag = false;
  imageUrl: any = {};

  changeVehicleCard(value: string) {
    this.card = true;
    this.vehicle.type = value;

    if (sessionStorage.getItem('imageUri') != null) {
      this.imageUrl = JSON.parse(sessionStorage['imageUri']);
      switch(this.vehicle.type) {
        case 'Car': {
          this.vehicle.img = this.imageUrl.car;
          // this.selectedUrl = '/car-details';
          break;
        }
        default: {
          this.vehicle.img = this.imageUrl.bike;
          break;
        }
      }
      this.selectedUrl = '/vehicle-details/details';
    }
    else {
      this.vehicle.img = `./assets/img/${this.vehicle.type}.jpg`;
      this.selectedUrl = '/vehicle-details/details';
      // switch (this.vehicle.type) {
      //   case "Car": {
      //     this.selectedUrl = '/car-details';
      //     break;
      //   }
      //   default: {
      //     
      //     break;
      //   }
      // }
    }
  }

  getImages() {
    this.vehicleService.getImageUri().subscribe({
      next: response => this.vehicleService.setImageUri(response),
      error: () => console.log('Error in retrieving Images'),
      complete: () => console.log('Image URL received')
    })
  }

  demoNumber() {
    this.vehicle.regNo = "TN03J4483";
    this.demoFlag = true;
  }

  regNoValidation(regNo: string) {
    if (this.regx.test(regNo) == true) {
      this.regNoFlag = false;
      return true;
    }
    this.regNoFlag = true;
    return false;
  }

  changeView() {
    if (this.vehicle.regNo == "") {
      this.demoNumber();
      return;
    }

    if (this.regNoValidation(this.vehicle.regNo)) {
      this.vehicleService.setVehicle(this.vehicle);
      console.log(this.selectedUrl);
      this.regNoFlag = false;
      if (this.demoFlag) {
        setTimeout(() => {
          this.router.navigate([this.selectedUrl], { relativeTo: this.route });
        }, 1000);
      } else {
        this.router.navigate([this.selectedUrl], { relativeTo: this.route });
      }
    }
    else {
      this.regNoFlag = true;
    }
  }
}
