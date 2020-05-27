import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import firebase from 'firebase';

console.disableYellowBox = true;


export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
          token: 'Carregando...',
          nome:'Carregando...',
          idade: 'Carregando...'
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
    
    
     /*   //Aqui é um olheiro em realtime  por causa do on.('value'), 
          //muda em tempo real quando alguma coisa é alterada no banco.
       firebase.database().ref('token').on('value', (snapshot)=>{
       let state = this.state;
       state.token = snapshot.val();
       this.setState(state);
    
        }); */
    
        //Aqui é um olheiro mas não em realtime  por causa do once.('value'),
        //só muda  quando quando dá um refreshná página.
        firebase.database().ref('token').once('value').then((snapshot)=>{
          let state = this.state;
          state.token = snapshot.val();
          this.setState(state);
        });
    
        //Olheiro do nome
        firebase.database().ref('usuarios').child(1).child('nome').on('value', (snapshot)=>{
          let state = this.state;
          state.nome = snapshot.val();
          this.setState(state);
        });
    
        //Olheiro da idade 
        firebase.database().ref('usuarios').child('1').child('idade').on('value', (snapshot)=>{
          let state = this.state;
          state.idade = snapshot.val();
          this.setState(state);
        });
    
        
    
      }
    
      //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
      render() {
        const {token, nome, idade} = this.state;  //desconstruindo
        return (
         
          <View style={styles.container}>
            <Text style={styles.texto} >Token: {token} </Text>
            <Text style={styles.texto} >Nome: {nome} </Text>
            <Text style={styles.texto} >Idade: {idade} </Text> 
            
            <View style={styles.segunda}>
                    <Text style={styles.texto} >Nome: {nome} </Text>
                    <Text style={styles.texto} >Idade: {idade} </Text>
            </View>        
    
          </View>
        )
      }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    texto:{
        fontSize: 25,

    },
    segunda:{
        
        backgroundColor: '#0fd',
        height: 100,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})



