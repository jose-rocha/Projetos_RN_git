import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component{
    

    render(){
      return(
        <View>
          <Text>Home</Text>

          <View  style={{paddingTop: 5}}>
            <Button 
              title='ir para tela de contato'
              onPress={()=> this.props.navigation.navigate('Contato')}
            />
          </View>

          <View style={{paddingTop: 15}}>
            <Button 
              title='ir para tela de Teste'
              onPress={()=> this.props.navigation.navigate('TelaTeste')}
            />
          </View>
        </View>
      )
    }
  }
  
  export default Home;