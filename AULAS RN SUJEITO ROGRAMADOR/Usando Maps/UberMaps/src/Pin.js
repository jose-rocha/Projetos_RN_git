import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
          <View style={[pinStyle.viewMarker, {backgroundColor:this.props.corFundo}]}>
                <Text style={pinStyle.textoMarker}>{this.props.aviso} </Text>
                
         </View>
      
    );
  }
}


const pinStyle = StyleSheet.create({
    viewMarker:{
        height: 40,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5,
        padding: 5
      },
      textoMarker:{
        color: '#fff'
      }
})