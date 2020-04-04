import { createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';
import HomeTab from './src/screens/HomeTab';
import Configs from './src/screens/Configs';
import Sobre from './src/screens/Sobre';
import Contato from './src/screens/Contato';
import Fotos from './src/screens/Fotos';
import { createStackNavigator } from 'react-navigation-stack';
console.disableYellowBox = true;




 
const AppNavigator = createStackNavigator({
  Login:{
    screen: Login,
    navigationOptions:{
      title:'',
       
    }
  },
  HomeTab:{
    screen: HomeTab,
    navigationOptions:{
      title: '',
    }
  },
  Configs:{
    screen: Configs
  },
  Sobre:{
    screen: Sobre
  },
  Contato: {
    screen: Contato,
    navigationOptions:{
      title:''
    }
  },
  Fotos:{
    screen: Fotos
  }
});

 
export default  createAppContainer(AppNavigator);