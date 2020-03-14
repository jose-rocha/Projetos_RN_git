import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

export default class ContaAgua extends Component{
  render(){
    return(
      <View style={styles.body}>

        <ImageBackground source={require('./images/waterbg.png')}
        style={styles.bgimage} >


        </ImageBackground>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  body:{
    flex: 1,
    
  },
  bgimage:{
    flex:1,
    width: null
  }

});