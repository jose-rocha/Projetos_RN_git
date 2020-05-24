import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Home extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Home</Text>
                <Button title='ir para sobre' onPress={()=> this.props.navigation.navigate('Sobre')} />
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