import React, { Component } from 'react';
import {Platform, View, Text, StatusBar, StyleSheet } from 'react-native';

import {Container} from './styles';


export default class App extends Component{

  render(){
    return (
      <Container>
          <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />

      </Container>
    );
  }
}
