import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {color} from 'react-native-reanimated';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          //barStyle={'light-content'} por padrão a letra da StatusBar já é branca
          hidden={true} //aqui esconde a StatusBar
          // backgroundColor="#da5388"
        />
        <View style={styles.rosa}>
          <Text> Home </Text>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#fff"
            style={styles.SearchInput}
          />
          <TouchableOpacity style={styles.btnSearch}>
            <EvilIcons
              name="search"
              size={30}
              color="#fff"
              style={styles.iconSearch}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 95,
              marginLeft: 10,
            }}>
            Programa Gestação
          </Text>
        </View>
        <Text style={{marginLeft: 10, marginTop: 10, fontSize: 20}}>Dicas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  rosa: {
    backgroundColor: '#da5388',
    height: 190,
  },
  SearchInput: {
    backgroundColor: '#e05d87',
    borderRadius: 25,
    width: 250,
    marginLeft: 30,
    paddingLeft: 20,
  },
  btnSearch: {
    // backgroundColor: 'black',
    width: 25,
    marginLeft: 240,
    marginTop: -35,
  },
  iconSearch: {
    marginLeft: -2,
  },

  bolPerfil: {
    backgroundColor: '#fff',
  },
});
