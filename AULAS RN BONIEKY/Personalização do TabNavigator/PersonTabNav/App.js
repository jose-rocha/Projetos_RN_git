import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
console.disableYellowBox = true;


import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';

const AppNavigator = createBottomTabNavigator({
    Tela1:{
        screen: Tela1,
        navigationOptions:{
          tabBarLabel: '',
          tabBarIcon:()=>(
            <Image source={ require('./src/images/home.png')} style={styles.icon} />
          ),
          //tabBarVisible: false
        }
        
      },
      Tela2:{
        screen: Tela2, 
        navigationOptions:{
          tabBarIcon:()=> (
            <Image source={require('./src/images/tv.png')} style={styles.icon} />
          ),
          tabBarVisible: false // Aqui serve para escoonder o tabBar
        }
      }
  },
  {
    tabBarPosition:'top',
    animationEnabled: true,
    //initialRouteName: 'Tela2'
    //order: ['Tela2', 'Tela1'],
    tabBarOptions:{
      //showIcon: false
      //showLabel:false, não está fazendo efeito nessa versão.
    tabStyle:{
     // backgroundColor: '#ff00ff',
      
    },
    labelStyle:{
     // fontSize:10
    },
    iconStyle: {
     
    }
    }
  });

  
  const styles = StyleSheet.create({
    icon: {
      height: 20,
      width: 20
    }
  });
  
   
  export default  createAppContainer(AppNavigator);