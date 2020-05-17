import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/login';
import Filmes from './src/filmes';

const NavegaFilmes = createStackNavigator({
  Login:{
    screen: Login,
    navigationOptions:{
      headerShown: false
    }

  },
  Filmes:{
    screen: Filmes,
    navigationOptions:{
      headerShown: false
    }
  }
});

export default createAppContainer(NavegaFilmes);