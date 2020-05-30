import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

console.disableYellowBox = true;

import Home from './pages/Home';
import Tela2 from './pages/Tela2';

const NavegaTelas = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      headerShown: false
    }
  },
  Tela2:{
    screen: Tela2,
    navigationOptions:{
      title: "Concluir Cadastro"
    }
   
  }
},
{
  headerLayoutPreset: 'center' //centralizao Title
})


export default createAppContainer(NavegaTelas);