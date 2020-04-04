import React,{Component} from 'react';
import {View, Text, StyleSheet, FlatList, Platform ,ImageBackground} from 'react-native';
import ListItem from './src/ListItem';

export default class AppChat extends Component{

  constructor(props){
    super(props);
    this.state ={
      chat :[
        {key: '1', img:'https://www.b7web.com.br/avatar1.png', nome:'José Rocha', msg: 'Iai, tem boas noticias?' },
        {key: '2', img:'https://www.b7web.com.br/avatar2.png', nome:'Felipe', msg: 'Iai, Por enquanto nada!' },
        {key: '3', img:'https://www.b7web.com.br/avatar3.png', nome:'José Rocha', msg: 'Iai, que vc acha dessse COVID-19?' },
        {key: '4', img:'https://www.b7web.com.br/avatar2.png', nome:'Felipe', msg: ' Estou meio apreensivo, por causa dessa desgraça estou comp problemas na minha jornada' },
        {key: '5', img:'https://www.b7web.com.br/avatar3.png', nome:'José Rocha', msg: ' Estou de férias?' },
        {key: '6', img:'https://www.b7web.com.br/avatar1.png', nome:'Felipe', msg: ' Estou fazendo ADS' }
      ]
    };
  }
    


  render(){
    return(
     <View style={styles.container} >
      <ImageBackground  source={require('./assets/images/Fundo.jpg')} style={styles.chat} >

      </ImageBackground>
     </View>
    )
  }
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
   // marginTop:(Platform.OS=='ios')? 20:0,
  },
  chat:{
    flex:1
  }
});