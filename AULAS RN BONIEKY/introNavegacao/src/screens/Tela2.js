import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Tela2 extends Component{
    render(){
        return(
            <View>
                <Text>Nome: {this.props.navigation.getParam('nome')}</Text>
                <Text>e tenho: {this.props.navigation.getParam('Idade')} anos.</Text>

                <Button title="Voltar para home" onPress={()=> this.props.navigation.goBack()} />
            </View>
        );
    }
}