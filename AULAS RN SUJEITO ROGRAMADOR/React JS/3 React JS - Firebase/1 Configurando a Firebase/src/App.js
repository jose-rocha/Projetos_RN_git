import React, {Component} from 'react';
import firebase from 'firebase';

export default class ReactJS extends Component{
  constructor(props){
    super(props);
    this.state = {};

   let firebaseConfig = {
      apiKey: "AIzaSyC8Np2uvBplX9G33TV0SAeMpUW0ITO9Eys",
      authDomain: "reactjsapp-dab24.firebaseapp.com",
      databaseURL: "https://reactjsapp-dab24.firebaseio.com",
      projectId: "reactjsapp-dab24",
      storageBucket: "reactjsapp-dab24.appspot.com",
      messagingSenderId: "410078304504",
      appId: "1:410078304504:web:24313a8e9e55db75bc830d",
      measurementId: "G-81ZRGZ06L5"
    };
    // Initialize Firebase
    if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <div>
        Teste
      </div>
    )
  }
}