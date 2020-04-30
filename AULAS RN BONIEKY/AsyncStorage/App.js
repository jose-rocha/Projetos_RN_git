import React, {Component} from 'react';
import { View, Text, StyleSheet, AsyncStorage, TextInput } from "react-native";


export default class Async extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:''
    };

    AsyncStorage.getItem('qualquerCoisa').then((value)=>{
      this.setState({nome:value});
    });

    this.setNome = this.setNome.bind(this);

  }
  setNome(nome){
    let s = this.state;
    s.nome = nome;
    this.setState(s);

    AsyncStorage.setItem('qualquerCoisa', nome); //AsyncStorage salva informações
  }

  render(){
    return(
      <View style={styles.body}>
        
      <TextInput style={styles.input} value={this.state.nome} onChangeText={(text)=>this.setNome(text)} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:10,
    justifyContent:'center',
    alignItems: 'center'
  },
  input:{
    height: 40,
    width: 200,
    borderWidth:1,
    backgroundColor:'#ccc',
    margin: 10,
    borderRadius: 5,
    color: '#fff',
    padding: 10,
    fontSize:16
  }
});