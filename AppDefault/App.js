import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';

import Home from './src/Home';
import Contato from './src/Contato';
import Configuracao from './src/Configuracao';
import Sobre from './src/Sobre';

const AppNavigator = createStackNavigator  ({
  Home:{
    screen: Home
    
  }, 
  Contato:{
    screen: Contato
  },
  Configuracao: {
    screen: Configuracao
  },
  Sobre: {
    screen: Sobre
  }
},
{
  defaultNavigationOptions:{
    headerTintColor: 'red',
    headerTitle: 'Dev JRocha'
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;


