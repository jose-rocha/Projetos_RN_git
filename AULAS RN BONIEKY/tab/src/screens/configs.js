import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Configs extends Component{
    render(){
        return(
            <View>
                <Button title="Ir para Home" onPress={()=> this.props.navigation.navigate('Tela1')} />
            </View>
        );
    }
}