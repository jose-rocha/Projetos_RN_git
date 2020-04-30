import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


export default class Horarios extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.Titulo}>Horarios</Text>
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
        backgroundColor:'#666'
    },
    Titulo:{
        color:'#fff',
        fontSize: 20
    }
})