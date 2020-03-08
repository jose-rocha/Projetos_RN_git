import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default class App  extends Component{

  constructor(props){
    super(props);
    this.state = {inputTexto: '', texto: ''};

    this.apertouBotao =this.apertouBotao.bind(this);
  }

  apertouBotao(){
    let s = this.state;
    if(s.inputTexto == 'José'){
      s.texto = alert('você acertou');
    } else{
      s.texto = alert('Você errou, tente novamente!');
    }

    this.setState(s);
  }

  render() {
    return(
      <View>

        <Text style={{fontSize:20, fontWeight: 'bold', textAlign: 'center'}}>Seja Bem vindo</Text>
        

        <TextInput style={styles.input} placeholder='Adivinhe meu nome...' onChangeText={(inputTexto)=> this.setState({inputTexto})}/>

        <Button title="Aperte" onPress={this.apertouBotao}/>

    <Text style={{fontSize: 20, textAlign: 'center'}}>{this.state.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    padding: 10,
    borderRadius: 10

  }
});