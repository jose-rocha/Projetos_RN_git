import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';

import Home from './src/Home';
import Contato from './src/Contato';
import Login from './src/Login';
import Sobre from './src/Sobre';

const AppNavigator = createStackNavigator  ({
  Login: {
    screen: Login
  },
  Home:{
    screen: Home
    
  }, 
  Contato:{
    screen: Contato
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


