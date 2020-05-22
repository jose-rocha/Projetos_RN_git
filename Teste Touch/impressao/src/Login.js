import React, { Component } from 'react'
import {SafeAreaView, StyleSheet, TextInput ,TouchableOpacity, Text, View, Alert } from 'react-native';
import TouchID from 'react-native-touch-id';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login({navigation}) {

//Se eu abilitar essa função, asim que abrir a tela ele já vai pedir o biometria

 /* TouchID.authenticate().then(()=>{
    Alert.alert('Autenticação realizada co sucesso!');
    navigation.navigate('Dash')
  }).catch(()=>{
    Alert.alert('Autenticação Falhou!');
  }) */
  
    return (
      <SafeAreaView style={styles.Container}>
        <TextInput placeholder='Email' style={styles.input} placeholderTextColor='#444' />

        <TextInput placeholder='Senha' style={styles.input} placeholderTextColor='#444' />
       

        <TouchableOpacity style={styles.button}>
          <Text style={styles.entrarBtn} >Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDigital} 
          onPress={()=>TouchID.authenticate('Por favor confirme a sua biometria!',{
          title: 'Acessar o App!'}).then(()=>{
           // Alert.alert('Autenticação realizada com sucesso!');
            navigation.navigate('Dash')
            
          }).catch(()=>{
            Alert.alert('Autenticação Falhou!');
          })}>

          <Text style={styles.entrarDigital}>Entrar com Digital</Text>
          <Icon name="ios-finger-print" size={70} color="#7159c1"/>

        </TouchableOpacity>

       

      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6'

  },
  input:{
    width: 290,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  button:{
    width: 290,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    backgroundColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDigital:{
    width: 150,
    height: 45,    
    borderRadius: 50,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  entrarBtn:{
    color: '#fff',
  },
  entrarDigital:{
    color: '#fff',
    paddingTop: 55,
    fontSize: 16
  }
})