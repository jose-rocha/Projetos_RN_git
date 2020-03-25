import React, {Component} from 'react';
import {View, Tex, StyleSheet, Button, StatusBar } from 'react-native';

export default class statusBar extends Component{

  constructor(props){
    super(props);
    this.state = {
      statusStyle:'dark-content',
      bgColor: '#fff'
    };

    this.alternar = this.alternar.bind(this);
  }

  alternar() {
      let s = this.state;

      if (s.statusStyle == 'dark-content') {
        s.statusStyle = 'light-content';
        s.bgColor = '#000';
      } else{
        s.statusStyle = 'dark-content';
        s.bgColor = '#fff'
      }


    this.setState(s);
  }

  render(){
    return(
      <View style={[styles.body, {backgroundColor:this.state.bgColor}]}>
        <StatusBar barStyle={this.state.statusStyle}  />

        <Button title='Modo Black' onPress={this.alternar} />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});