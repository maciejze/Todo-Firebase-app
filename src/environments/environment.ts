// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dbCollection: 'todoList',
  firebaseConfig: {
    apiKey: 'AIzaSyAQYH0VagdrnIQ8yCCAqgomtzHGTws0Myo',
    authDomain: 'todo-4d2ee.firebaseapp.com',
    databaseURL: 'https://todo-4d2ee.firebaseio.com',
    projectId: 'todo-4d2ee',
    storageBucket: 'todo-4d2ee.appspot.com',
    messagingSenderId: '420475178756'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
