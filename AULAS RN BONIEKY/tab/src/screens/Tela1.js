import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Tela1 extends Component{
    render(){
        return(
            <View>
                <Button title="Ir para Specs" onPress={()=> this.props.navigation.navigate('Tela2',{nome: 'José', Idade: 27})} />
            </View>
        );
    }
}