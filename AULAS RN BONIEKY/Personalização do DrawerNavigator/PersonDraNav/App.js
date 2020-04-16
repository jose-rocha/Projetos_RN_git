import { createAppContainer } from 'react-navigation';
import {  createDrawerNavigator } from 'react-navigation-drawer';
import {StyleSheet, Image} from 'react-native';
import React from 'react';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
console.disableYellowBox = true



const AppNavigator =  createDrawerNavigator({
  Tela1:{
    screen: Tela1,
    navigationOptions:{
      drawerLabel: '',
      drawerIcon:()=>(
        <Image source={ require('./src/assets/images/home.png')} style={styles.icon} />
      ),
      //drawerVisible: false
    }
    
  },
  Tela2:{
    screen: Tela2, 
    navigationOptions:{
      drawerIcon:()=> (
        <Image source={require('./src/assets/images/tv.png')} style={styles.icon} />
      ),
      drawerVisible: false // Aqui serve para escoonder o drawer
    }
  }
},
{
drawerPosition:'right',
drawerWidth: 150,
drawerBackgroundColor: '#ffff00',
animationEnabled: true,
//initialRouteName: 'Tela2'
//order: ['Tela2', 'Tela1'],
contentOptions:{
  activeTintColor:"#fff",
  inactiveTintColor: '#00ff',
  activeBackgroundColor:'#ff5500',
  //inactiveBackgroundColor: '#fff'
  itemsContainerStyle:{
    marginTop:100
  },
  labelStyle:{
    fontSize: 20
   },
},
drawerOptions:{
  //showIcon: true,
  //showLabel:false, não está fazendo efeito nessa versão.
drawerStyle:{
 // backgroundColor: '#ff00ff',
  
 },
 
 iconStyle: {
 
 }
}
});


const styles = StyleSheet.create({
    icon:{
      width: 20,
      height: 20
    }
});


 
export default  createAppContainer(AppNavigator);