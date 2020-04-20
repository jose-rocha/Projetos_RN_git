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
      
    };

this.logar = this.logar.bind(this);
 
//função para deslogar o user
firebase.auth().signOut();

firebase.auth().onAuthStateChanged((user)=> {
  if(user){

    firebase.database().ref('usuarios').child(user.uid).once('value').then((snapshot)=>{
        let nome = snapshot.val().nome;
        let state = this.state;
        state.nome = nome;
        this.setState(state);

        alert('Seja bem vindo '+nome);
    });
  }
});

    
  }

  logar(){
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.senha
    ).catch((error)=>{
      alert(error.code);
    });
  }

  render(){
    return(
      <View style={styles.container}>

        <Text style={{fontSize: 30, textAlign: 'center'}}>Entrar</Text>

        <TextInput  style={styles.input} placeholder="Email"
        underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}} />

       <TextInput  style={styles.input} placeholder="Senha" 
        underlineColorAndroid="transparent" onChangeText={(senha)=>{this.setState({senha})}} />

       <Button title="logar" onPress={this.logar} />

      <Text tyle={{fontSize: 30, textAlign:'center'}}>{this.state.nome} </Text>
       
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