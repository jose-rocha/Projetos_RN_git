import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Home';
import Flat from './src/Flat';

const navega = createStackNavigator({
  Flat: {
    screen: Flat,
    navigationOptions:{
      headerShown: false
    }
  },
  Home:{
    screen: Home,

  }
   
},{
  initialRouteName: 'Flat'
});

export default createAppContainer(navega);