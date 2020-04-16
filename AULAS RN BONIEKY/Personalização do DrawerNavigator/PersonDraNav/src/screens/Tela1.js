import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


export default class Tela1 extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.texto}>Tela 1</Text>
                <Button title="Ir pra tela 2" onPress={()=> this.props.navigation.navigate('Tela2')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#999'

    },
    texto:{
        color: '#fff'
    }
})