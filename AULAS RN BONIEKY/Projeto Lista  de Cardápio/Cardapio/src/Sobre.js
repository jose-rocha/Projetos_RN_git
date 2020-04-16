import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


export default class Sobre extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.Titulo}>Sobre</Text>
            {/*  <Button  title="Voltar" onPress={()=> this.props.navigation.goBack()}  /> */}   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#3999'
    },
    Titulo:{
        color:'#fff',
        fontSize: 20
    }
})