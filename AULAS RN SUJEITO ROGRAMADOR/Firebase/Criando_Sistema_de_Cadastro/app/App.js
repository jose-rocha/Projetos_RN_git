import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import firebase from  './src/firebaseConnection';

console.disableYellowBox =true

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
      
    };

    this.cadastrar = this.cadastrar.bind(this);

     
  }

  cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
      if(error.code == 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres.');
      } if(error.code == 'auth/invalid-email'){
        alert('Email invalido.');
      }
    })

    
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Cadastrar</Text>
       <TextInput  style={styles.input} placeholder="Email"
        underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}} />

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
    padding: 20,
  },
  input:{
    width: 300,
    height:50,
    backgroundColor: '#ccc',
    fontSize: 22,
    padding: 5,
    margin: 5,
    borderRadius: 5
   
  }
})


//secureTextEntry={true}