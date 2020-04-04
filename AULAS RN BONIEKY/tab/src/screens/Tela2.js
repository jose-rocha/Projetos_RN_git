import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Tela2 extends Component{
    render(){
        return(
            <View>
               

                <Button title="Voltar para home" onPress={()=> this.props.navigation.goBack()} />
            </View>
        );
    }
}