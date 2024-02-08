# Vehicle Insurance Client
Frontend client of the Vehicle Insurance application for purchasing Vehicle Insurance with views to select vehicle type, insurance type and its premium, buyer's details and payment portal. Interacts with the [Vehicle Insurance API](https://github.com/IamKarthickSelvam/VehicleInsuranceAPI) to fetch vehicle data, image uri, retrieves calculated premium data and the generated invoice pdf as blob data.

The client app is written in TypeScript, styled using Bootstrap and built with Angular and its inbuilt router navigation, template-driven forms, reactive forms and HttpClient for interacting with the API. For state management, RxJS's BehaviorSubject coupled with Observables and sessionStorage is used. The client is hosted on the cloud using Azure Static Web App.

Live Web App Link: [wonderful-wave-002693203.4.azurestaticapps.net](wonderful-wave-002693203.4.azurestaticapps.net)

## Tech Stack
Angular v16 | RxJS | Bootstrap | Azure Static Web App

## Video Demo
https://github.com/IamKarthickSelvam/VehicleInsuranceAPI/assets/102350733/4a33a9b1-cd5e-49cb-942e-2f044cfcb9c0

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
