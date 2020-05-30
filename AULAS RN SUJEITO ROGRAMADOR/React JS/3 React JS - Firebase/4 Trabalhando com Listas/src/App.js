import React, {Component} from 'react';
import firebase from 'firebase';

export default class ReactJS extends Component{
  constructor(props){
    super(props);
    this.state = {
      lista: [

      ]

    };


   

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


    firebase.database().ref('usuarios').on('value', (snapshot)=>{
      let state = this.state;
      state.lista = [];


      snapshot.forEach((childeItem)=>{
        state.lista.push({
          key: childeItem.key,
          nome: childeItem.val().nome,
          idade: childeItem.val().idade,
          cargo: childeItem.val().cargo
        })
      });

      this.setState(state);
    })


 }

 


  //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
  render() {

    return (
     
      <div>
        {this.state.lista.map((item)=>{
          return(
            <div>
              <h2>ID: {item.key} </h2>
              <h1>Olá {item.nome} </h1>
              <h1>Idade {item.idade} anos </h1>
              <h1>Cargo: {item.cargo} </h1> <hr/>
            </div> 
          )
        })}

      </div>
    )
  }
}