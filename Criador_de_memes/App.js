import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AppMeme extends Component{
  render(){
    return(
      <View style={styles.container}>

          <View style={{height: 50, width:70 ,backgroundColor: 'blue', justifyContent: 'center', borderRadius: 10}}>  
            <Text style={{color: 'white', textAlign: 'center',  }} >Meme</Text>
            </View>   
          
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});