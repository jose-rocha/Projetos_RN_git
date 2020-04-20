import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import firebase from  './src/firebaseConnection';

console.disableYellowBox =true

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome: ''
      
    };

this.cadastrar = this.cadastrar.bind(this);
 
//Deslogar se tiver usuário logado.
firebase.auth().signOut();

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    //user uid
    firebase.database().ref('usuarios').child(user.uid).set({
      nome: this.state.nome
    });
  }
});

    
  }

  cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.senha
    ).catch((error)=> {
      alert(error.code);
    });
  }

  render(){
    return(
      <View style={styles.container}>

        <Text style={{fontSize: 30, textAlign: 'center'}}>Entrar</Text>

        <TextInput  style={styles.input} placeholder="Email"
        underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}} />

       <TextInput  style={styles.input} placeholder="Nome"
        underlineColorAndroid="transparent" onChangeText={(nome)=>{this.setState({nome})}} />

       <TextInput  style={styles.input} placeholder="Senha" 
        underlineColorAndroid="transparent" onChangeText={(senha)=>{this.setState({senha})}} />

       <Button title="Cadastrar" onPress={this.cadastrar} />

       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 15,
    backgroundColor: '#aef'
  },
  input:{
    width: 325,
    height:50,
    backgroundColor: '#ccc',
    fontSize: 22,
    padding: 5,
    margin: 5,
    borderRadius: 5
   
  }
})


//secureTextEntry={true}