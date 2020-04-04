import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import Configs from './src/screens/configs';
console.disableYellowBox = true;

 
const AppNavigator = createDrawerNavigator({
  Tela1:{
    screen: Tela1,
    navigationOptions:{
      title:'Home',
       
    }
  },
  Tela2:{
    screen: Tela2,
    navigationOptions:{
      title: 'Specs',
    }
  },
  Configs:{
    screen: Configs,
    navigationOptions:{
      title: 'Configs',
    }
  }

});

 
export default  createAppContainer(AppNavigator);
