import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import firebase from 'firebase';

console.disableYellowBox =true

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      lista: []
     
    };

    

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

      
      firebase.database().ref('usuarios').on('value', (snapshot)=>{
        let state =this.state;
        state.lista = [];

        snapshot.forEach((childItem)=>{
           state.lista.push({
            key: childItem.key,
            nome: childItem.val().nome,
            cargo: childItem.val().cargo
          });
        });

        this.setState(this);
      })

  }



  render(){
    return(
      <View style={styles.container}>
        <FlatList data={this.state.lista} renderItem={({item})=> <Listagem data={item} />} />
      </View>
    )
  }
}

class Listagem extends Component{
  render(){
    return(
      <View>
        <Text style={styles.texto}>Nome: {this.props.data.nome} - {this.props.data.cargo}</Text>
      <Text>Chave {this.props.data.key} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1
  },
  texto:{
    fontSize:20,
    paddingTop: 5
  },
  
})