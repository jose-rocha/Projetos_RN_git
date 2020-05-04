import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Container}>
        <Icon name="home" size={40} color="#000" />
        <Icon name="coffee" size={40} color="#000" />
        <Icon name="upload" size={40} color="#000" />
        <Icon name="reply" size={40} color="#000" />

        <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3b5998', borderRadius: 5,
        width: 220, height:50}}>
            <Icon name="facebook" size={30} color="#fff" />
            <Text style={{color: '#fff', paddingLeft: 5, fontSize: 20}}>Login com Facebook</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdfdfd', borderRadius: 5,
        width: 220, height:50, borderColor: '#000', borderWidth: 3,marginTop: 5, marginBottom: 5}}>
            <Icon name="google" size={30} color="#ff0000" />
            <Text style={{color: '#000', paddingLeft: 5, fontSize: 20}}>Login com google</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', borderRadius: 5,
        width: 220, height:50}}>
            <Icon name="github" size={30} color="#fff" />
            <Text style={{color: '#fff', paddingLeft: 5, fontSize: 20}}>Login com Github</Text>
            </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})