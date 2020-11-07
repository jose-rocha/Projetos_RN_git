import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import './src/global';

class Home extends Component() {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.msg}>MD</Text>
      </View>
    );
  }
}

export default MD;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  msg: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
});
