import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Home from './src/Home';
import Contato from './src/Contato';
import TelaTeste from './src/TelaTeste';

const NavegaTela = createStackNavigator({
  Home: {
    screen: Home
  },
  Contato:{ 
    screen: Contato
  },
  TelaTeste: {
    screen: TelaTeste
  }
});

const AppContainer =createAppContainer(NavegaTela);

export default AppContainer
