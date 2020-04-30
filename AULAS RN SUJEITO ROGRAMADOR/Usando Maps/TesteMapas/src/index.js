
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Mapas from './Mapa';


const Navega = createStackNavigator({
    Home:{
      screen: Home,
      navigationOptions:{
       headerShown: false
      }
      
    },
    Mapas:{
      screen:Mapas,
      navigationOptions:{
        //headerTitleAlign: 'center',
        headerShown:false
      }
    }
})

export default createAppContainer(Navega);