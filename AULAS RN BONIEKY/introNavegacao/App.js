import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
 
const AppNavigator = createStackNavigator({
  Tela1:{
    screen: Tela1,
    navigationOptions:{
      title:'Home',
      
    }
  },
  Tela2:{
    screen: Tela2,
    navigationOptions:{
      title: 'Specs'
    }
  }
},


{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: '#999'
    },
    headerTitleStyle:{
      fontSize: 20,
      fontWeight: 'bold'
    }
  }
});

 
 
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;