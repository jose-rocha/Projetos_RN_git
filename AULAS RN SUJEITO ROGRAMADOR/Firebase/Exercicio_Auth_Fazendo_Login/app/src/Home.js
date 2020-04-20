import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

import firebase from './firebaseConnection';




export default class Home extends Component{   

    constructor(props){
        super(props);
        this.state = {

        };

        this.sair = this.sair.bind(this);
        
    }

    sair(){
        firebase.auth().signOut();
        alert('Deslogado com sucesso!');
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions:[
                NavigationActions.navigate({routeName: 'Login'})
            ]
        }));
      }

    

  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Seja Bem Vindo</Text>

        <Button title="Logout" onPress={this.sair} />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
})


//secureTextEntry={true}