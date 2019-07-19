// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAIsRsV8ngUDbO3X1K-C0YN9vjDJQam4hA",
    authDomain: "mytrip-e0aa6.firebaseapp.com",
    databaseURL: "https://mytrip-e0aa6.firebaseio.com",
    projectId: "mytrip-e0aa6",
    storageBucket: "mytrip-e0aa6.appspot.com",
    messagingSenderId: "626563754428",
    appId: "1:626563754428:web:cf19b4bef6fe74d2"
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYnlqb3NlMDA3IiwiYSI6ImNqdzZ3NXFqbDBkZ3o0YXM1bzBlNzlsZDUifQ.H4Y5vm4i3ong8SaW1XUWNw'
 }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
