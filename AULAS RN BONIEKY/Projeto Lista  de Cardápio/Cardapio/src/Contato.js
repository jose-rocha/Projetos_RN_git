import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';


export default class Contato extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.Titulo}>Contato</Text>
              {/* <Button  title="Voltar" onPress={()=> this.props.navigation.goBack()}  /> */}  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#999'
    },
    Titulo:{
        color:'#fff',
        fontSize: 20
    }
})