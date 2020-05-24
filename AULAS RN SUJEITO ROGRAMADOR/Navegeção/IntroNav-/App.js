// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home';
import Sobre from './src/Sobre';


const Telas = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions:{
      title: 'Casa',
          headerTitleAlign: 'center'
    }
    
    

  },
  Sobre:{
    screen: Sobre,
    
  }

},
{
initialRouteName: 'Sobre'
});

export default createAppContainer(Telas);