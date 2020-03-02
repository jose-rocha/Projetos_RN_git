import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class TelaTeste extends Component{
    
    somar(n1, n2){
        return n1 + n2
    }

    render(){

        let name = 'José'

      return(
        <View>
          <Text style={{fontSize:30}}> A soma de 2+3 é: {this.somar(2, 3)} </Text>
          <Text style={{fontSize:30, paddingTop:5 }}> Meu nome é: {name} </Text>

          
        </View>
      )
    }
  }
  
  export default TelaTeste;