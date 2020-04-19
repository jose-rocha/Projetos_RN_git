import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import firebase from 'firebase';

console.disableYellowBox =true

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      cargo:'' ,
     
    };

    this.cadastrarFucionario = this.cadastrarFucionario.bind(this);

    this.removerFucionario = this.removerFucionario.bind(this);

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

      /* criar um Nó, aqui se o child não existe no bd ele vai criar um, se existir ele só vai dar update no set('');
      firebase.database().ref('tipo').set('user'); */

      /*Aqui foi usado o update
      let id = '-M5Hm8QEuhCOELDmifK9';
      firebase.database().ref('usuarios').child(id).set({
        nome: 'Matu',
        cargo: 'Chefe de Cozinha'
      });  */

      /* Aqui foi usado o delete
      let id = '1'
      firebase.database().ref('usuarios').child(id).remove();
      */
      
      let id = '-M5I31RMCby-nkZPbOLd';
      firebase.database().ref('usuarios').child(id).child('cargo').set('Junior');
   
  }

  cadastrarFucionario(){
    if(this.state.nome != '' && this.state.cargo != ''){
      let usuarios = firebase.database().ref('usuarios'); // o ref('usuarios) é a referência ao nome child usarios do firebase.
      let chave = usuarios.push().key; //usamos aqui o push().key para criar uma chave aleátoria ou auto incremente.

      usuarios.child(chave).set({
        nome: this.state.nome,
        cargo: this.state.cargo
      });  /*aqui é aonde adiciona o usuário, poderi ser só (),
       mas como vai ser mais de uma informação ex: nome e cargo abre u json {} */
       
       alert('Cadastrado com sucesso!');
    }
  }

  //Remove funcionário
  removerFucionario(){
    if(this.state.nome != '' && this.state.cargo != ''){
      let usuarios = firebase.database().ref('usuarios');
      let id = '-M5ICCnb8tg1E2aPj6Os'
       
     
      
      usuarios.child(id).remove();

      alert('Usuário removido com sucesso!')
    }
  }

  

  render(){
    return(
      <View style={styles.container}>

        <Text style={styles.texto}>Nome:</Text>
        <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(nome)=> {this.setState({nome})}} />

        <Text style={styles.texto}>Cargo:</Text>
        <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(cargo)=> {this.setState({cargo})}} />
          <View style={{margin: 10}}>
            <Button title={"Cadastrar Novo Fucionário"} onPress={this.cadastrarFucionario} />
          </View>    
          <View style={{margin: 10}}>
             <Button title={"Remover Fucionário"} onPress={this.removerFucionario}  />
          </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1
  },
  texto:{
    fontSize:20
  },
  input:{
    padding:10,
    borderWidth: 1,
    borderColor: '#000',
    height:40
  }
})