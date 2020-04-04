import { createAppContainer } from 'react-navigation';
import {  createDrawerNavigator } from 'react-navigation-drawer';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
console.disableYellowBox = true



const AppNavigator =  createDrawerNavigator({
  Tela1:{
    screen: Tela1,
    navigationOptions:{
      title:'Tela1',
    
      },
      

  },
  Tela2:{
    screen: Tela2,      
    navigationOptions:{
      title:'Tela2',
      
  }
}
});

 
export default  createAppContainer(AppNavigator);