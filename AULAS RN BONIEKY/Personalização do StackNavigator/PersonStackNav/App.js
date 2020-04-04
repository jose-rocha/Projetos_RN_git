import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Feed from './src/screens/Feed';
import Perfil from './src/screens/Perfil';
import { Text } from 'react-native';
import React from 'react';
// console.disableYellowBox = true;


const AppNavigator = createStackNavigator({
  Feed:{
    screen: Feed,
    navigationOptions:{
      title:'Feed',
      //header:null
      headerStyle:{
        backgroundColor:'#0000ff'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize: 40
      },
      

       
    }
  },
  Perfil:{
    screen: Perfil,
    navigationOptions:{
      title:'Perfil',
      headerBackImage: ()=>(
        <Text style={{fontWeight:'bold', fontSize:20}}>Voltar</Text>
      ), 
    }
  }
},
{
  initialRouteName:'Feed',
  headerMode:'float', // se eu colocar none vai desaparecer o header de todas as páginas.
 headerLayoutPreset:'center'   //Aqui ele centeraliza o titulo.
});

 
export default  createAppContainer(AppNavigator);