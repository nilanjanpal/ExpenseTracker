// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBCm-5dEaY80hMwCe9-Vekf-edcfWUlvG0",
    authDomain: "expense-tracker-2bff2.firebaseapp.com",
    databaseURL: "https://expense-tracker-2bff2.firebaseio.com",
    projectId: "expense-tracker-2bff2",
    storageBucket: "expense-tracker-2bff2.appspot.com",
    messagingSenderId: "757956429532",
    appId: "1:757956429532:web:60f3c664c859c8adf75619",
    measurementId: "G-9G232RXKFH"
  },
  url: "https://expense-tracker-backend-production-4d1b.up.railway.app/api/"
  // url: "http://localhost:8080/api/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
