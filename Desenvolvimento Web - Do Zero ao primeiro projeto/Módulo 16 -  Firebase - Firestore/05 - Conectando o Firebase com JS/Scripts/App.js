
var firebaseConfig = {
  apiKey: "AIzaSyCfFRQsBovQwTjUjy3M7FSYUA5AjIYWO78",
  authDomain: "app-fire-eca10.firebaseapp.com",
  databaseURL: "https://app-fire-eca10.firebaseio.com",
  projectId: "app-fire-eca10",
  storageBucket: "app-fire-eca10.appspot.com",
  messagingSenderId: "498957835456",
  // appId: "1:498957835456:web:86a1b89619d3c820aa6125",
  // measurementId: "G-6K3RYLKTZP"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  let firestore = firebase.firestore();
}
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);


 

  let firestore= firebase.firestore();