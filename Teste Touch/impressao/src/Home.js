import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Dash from './screens/Dash';
import Exit from './screens/Exit';

const NavegaFinger = createDrawerNavigator({
  Dash:{
    screen: Dash,
    navigationOptions:{
      headerShown: false,
      drawerIcon: ()=> (
        <Icon name="desktop-mac-dashboard" size={20} color="#fff" />
      )
    }
  },
 Exit:{
    screen:Exit,
    navigationOptions:{
      headerShown: false,
      drawerIcon: ()=> (
        <Icon name="exit-run" size={20} color="#fff" />
      )
    }
  }
},
{
  drawerWidth: 150,
  drawerBackgroundColor: '#ADD8E6',
  animationEnabled: true,

contentOptions:{
  activeTintColor: '#fff',
  inactiveBackgroundColor: '#fff',
  activeBackgroundColor:'#7159c1',
  

  

},


});

export default createAppContainer(NavegaFinger);