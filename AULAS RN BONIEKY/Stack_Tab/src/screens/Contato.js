import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Sobre from './Sobre';
import Fotos from './Fotos';

const AppNavigator = createBottomTabNavigator({
    Sobre:{
        screen: Sobre,
        navigationOptions:{
          title:'Sobre',
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
      Fotos:{
        screen: Fotos,
        navigationOptions:{
          title:'Fotos',
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
      }

    
  
  });
  
   
  export default  createAppContainer(AppNavigator);