import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Lista from './src/Lista';
import Receita from './src/Receita';


console.disableYellowBox = true

const NavegaTelas = createStackNavigator({
  Lista: {
    screen: Lista,
    navigationOptions: {
      title:'App de Receitas',
      headerTitleAlign:'center' //aqui serve para centralizar o titulo da página
    }
  },
  Receita: {
    screen: Receita,
    navigationOptions:{
     // headerTitleAlign: 'center',
      title: 'Receita',
      headerShown:false
    }
  }

},
{
  
});

export default createAppContainer(NavegaTelas);