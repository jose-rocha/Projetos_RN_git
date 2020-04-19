import React, {Component} from 'react';
import {View, Text, StyleSheet, } from 'react-native';

import firebase from 'firebase';

console.disableYellowBox =true

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      cliente: 'Carregando...'
    };

    let  firebaseConfig = {
      apiKey: "AIzaSyBr-Z0lcYVCFD5Qs_5WNOa65KXGnJBA3so",
      authDomain: "meuapp-ac769.firebaseapp.com",
      databaseURL: "https://meuapp-ac769.firebaseio.com",
      projectId: "meuapp-ac769",
      storageBucket: "meuapp-ac769.appspot.com",
      messagingSenderId: "863537345072",
      appId: "1:863537345072:web:c8570bdf85db56a9b7f3f5",
      measurementId: "G-VZ789J0SCF"
    };

    if (!firebase.apps.length)
      firebase.initializeApp(firebaseConfig);

      //* Essa query adiciona um Ouvinte = listener;
      firebase.database().ref("cliente").on('value', (snapshot)=>{
        let state = this.state;
        state.cliente = snapshot.val();
        this.setState(state);
      });
    
      /*Essa query para funcionar alteração, a página precisa ser carregada;
     firebase.database().ref("cliente").once('value', (snapshot)=>{
      let state = this.state;
      state.cliente = snapshot.val();
      this.setState(state);
    });
    */
   
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{paddingTop: 20, fontSize: 25}}>olá {this.state.cliente} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})