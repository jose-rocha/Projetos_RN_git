import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class App  extends Component{

  apertouBotao(){
    alert('Apertou');
  }

  render() {
    return(
      <View>
        <Text>Button</Text>

        <Button title="Aperte" onPress={this.apertouBotao}/>
      </View>
    );
  }
}