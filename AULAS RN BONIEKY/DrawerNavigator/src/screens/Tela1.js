import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Tela1 extends Component{
    render(){
        return(
            <View>
                { /* <Button title='Abrir Menu' onPress={()=> this.props.navigation.toggleDrawer()} />  */}

                <Text style={{textAlign: 'center', fontSize: 20}}>Tela Home</Text>
            </View>
        );
    }
}