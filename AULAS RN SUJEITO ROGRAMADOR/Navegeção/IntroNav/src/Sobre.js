import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Sobre extends Component{
  
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Sobre</Text>
                {/*<Button title='ir para home' onPress={()=> this.props.navigation.goBack()} />*/}
                <Button title='ir para home' onPress={()=> this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        color:'#fff'
    }
});