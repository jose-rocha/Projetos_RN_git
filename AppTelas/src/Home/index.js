import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component{
    render(){
      return(
        <View>
          <Text>Home</Text>

          <View>
            <Button 
              title='ir para tela de contato'
              onPress={()=> this.props.navigation.navigate('Contato')}
            />
          </View>
        </View>
      )
    }
  }
  
  export default Home;