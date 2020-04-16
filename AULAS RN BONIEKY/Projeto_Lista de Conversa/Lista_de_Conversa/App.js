import React,{Component} from 'react';
import {View, Text, StyleSheet, FlatList, Platform ,ImageBackground} from 'react-native';
import MsgItem from './src/MsgItem';      

export default class AppChat extends Component{

  constructor(props){
    super(props);
    this.state ={
      chat :[
        {key: '1',  nome:'José Rocha', msg: 'Iai, tem boas noticias?', m:true },
        {key: '2',  nome:'Felipe', msg: 'Iai, Por enquanto nada!', m:false },
        {key: '3',  nome:'José Rocha', msg: 'que vc acha dessse COVID-19?', m:true },
        {key: '4',  nome:'Felipe', msg: ' Estou meio apreensivo, por causa dessa desgraça estou com problemas na minha jornada', m: false },
        {key: '5',  nome:'José Rocha', msg: ' Estou de férias?', m: true },
        {key: '6',  nome:'Felipe', msg: ' Estou fazendo ADS', m: false },
        {key: '7',  nome:'José Rocha', msg: ' Que bom, o que vc está achndo do curso?', m: true },
        {key: '8',  nome:'Felipe', msg: ' Estou gostando, pois gosto muito de tecnologia', m: false },
        {key: '9',  nome:'José Rocha', msg: ' Tenho certeza que não vai se arrepender', m: true },
        {key: '10',  nome:'Felipe', msg: ' Qualquer coisa eu vou te perturbar', m: false },
        {key: '11',  nome:'José Rocha', msg: ' Tá bom então.', m: true }
      ]
    };
  }
    


  render(){
    return(
     <View style={styles.container} >
      <ImageBackground  source={require('./assets/images/Fundo.jpg')} style={styles.chat} >
        <FlatList data={this.state.chat} renderItem={({item})=> <MsgItem  data={item} />} />

      </ImageBackground>
     </View>
    )
  }
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    marginTop:(Platform.OS=='ios')? 20:0,
  },
  chat:{
    flex:1
  }
});