import firebase from 'firebase';

let  firebaseConfig = {
    apiKey: "AIzaSyCfFRQsBovQwTjUjy3M7FSYUA5AjIYWO78",
    authDomain: "app-fire-eca10.firebaseapp.com",
    databaseURL: "https://app-fire-eca10.firebaseio.com",
    projectId: "app-fire-eca10",
    storageBucket: "app-fire-eca10.appspot.com",
    messagingSenderId: "498957835456",
    appId: "1:498957835456:web:2c5f6da3c33b2f29aa6125",
    measurementId: "G-WGHGL5ST0H"
  };

  if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

export default firebase;