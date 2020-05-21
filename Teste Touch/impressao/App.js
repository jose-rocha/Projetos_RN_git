import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/Login';
import Home from './src/Home';

const NavegaFinger = createStackNavigator({
  Login:{
    screen: Login,
    navigationOptions:{
      headerShown: false
    }
  },
  Home:{
    screen:Home,
    navigationOptions:{
      headerShown: false
    }
  }
});

export default createAppContainer(NavegaFinger);