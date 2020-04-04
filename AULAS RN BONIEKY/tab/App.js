import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import Configs from './src/screens/configs';
console.disableYellowBox = true;
 
const AppNavigator = createBottomTabNavigator({
  Tela1:{
    screen: Tela1,
    navigationOptions:{
      title:'Home',
      tabBarOptions:{
        showIcon: false,
        labelStyle:{
          fontSize: 20,
          color: '#000fff'
        },
        tabStyle:{
          backgroundColor: '#999'
        }
      }
     
      
    }
  },
  Tela2:{
    screen: Tela2,
    navigationOptions:{
      title: 'Specs',
      tabBarOptions:{
        showIcon: false,
        labelStyle:{
          fontSize: 20,
        },
        tabStyle:{
          backgroundColor: '#666'
        },
        labelStyle:{
          fontSize: 20,
          color: '#fff'
        }
      }
    }
  },
  Configs:{
    screen: Configs,
    navigationOptions:{
      title: 'Configs',
      tabBarOptions:{
        showIcon: false,
        labelStyle:{
          fontSize: 20,
        },
        tabStyle:{
          backgroundColor: '#333'
        },
        labelStyle:{
          fontSize: 20,
          color: '#fff'
        }
      }
    }
  }

});

 
export default  createAppContainer(AppNavigator);

