import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Home';
import Contato from './src/Contato';

const NavegcaoTela = createStackNavigator({
  Home: {
    screen: Home
  },
  Contato:{
    screen: Contato
  }
});

const AppContainer = createAppContainer(NavegcaoTela);

export default AppContainer;