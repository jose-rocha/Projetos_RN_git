import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
 
const AppNavigator = createStackNavigator({
  Tela1:{
    screen: Tela1
  },
  Tela2:{
    
    screen: Tela2
  }
});

 5402
 
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;