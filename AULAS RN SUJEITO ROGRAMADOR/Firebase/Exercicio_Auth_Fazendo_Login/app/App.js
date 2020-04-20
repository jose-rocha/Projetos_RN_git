import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Login from './src/Login';
import Home from './src/Home';

const navega = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      headerTitleAlign: 'center',
      headerTitle: 'Tela de Login'
    }

  },
  Home:{
    screen: Home,
    navigationOptions:{
      headerTitleAlign: 'center',
      headerTitle: 'Tela Inicial'
    }
  }
});

export default createAppContainer(navega);

