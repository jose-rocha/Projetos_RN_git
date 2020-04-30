import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      flatData: [
        {key: '1', nome: 'José', idade: 33},
        {key: '2', nome: 'Marcos', idade: 23},
        {key: '3', nome: 'João', idade: 36},
        {key: '4', nome: 'Maria', idade: 68}
        

      ]
    };

  }

  flatRender(item){
    return(
      <View style={styles.flatItem}>
        <Text style={styles.flatNome}>Nome: {item.nome} </Text>
        <Text style={styles.flatIdade}> idade: {item.idade} anos</Text>
      </View>
    );
  }

  render(){
    return(
      <View style={{flex:1}}>
        
            <ImageBackground source={require('./images/horizonte.jpg')} style={styles.bg}>
              
              <FlatList data={this.state.flatData} renderItem={({item})=> this.flatRender(item)} 
              />

            </ImageBackground>
        
      </View>
    );

  }
}

const styles = StyleSheet.create({
  bg:{
    flex:1,
    width: null
  },
  flatItem:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5
  },  
  flatNome:{
    fontSize: 24,
    color: '#fff'
  },
  flatIdade:{
    fontSize: 16,
    color: '#fff'
  }
});