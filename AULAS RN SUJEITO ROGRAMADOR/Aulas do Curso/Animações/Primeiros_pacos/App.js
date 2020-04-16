import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Home';
import Sobre from './src/Sobre';

const Navega = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      headerShown: false
    }
  },
  Sobre: {
    screen: Sobre,
    navigationOptions:{
      headerShown: false
    }
  }
},{
  initialRouteName: 'Sobre'
})

export default createAppContainer(Navega);