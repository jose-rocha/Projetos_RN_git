import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';

import Dash from './screen/Dash';
import Exit from './screen/Exit';

const NavegaFinger = createDrawerNavigator({
  Dash:{
    screen: Dash,
    navigationOptions:{
      headerShown: false
    }
  },
 Exit:{
    screen:Exit,
    navigationOptions:{
      headerShown: false
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
  activeBackgroundColor:'#ff5500',

  itemsContainerStyle:{
    marginTop: -4
  },
  labelStyle:{
    fontSize: 18
  }

},


});

export default createAppContainer(NavegaFinger);