import React, {Component} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

export default class Tela1 extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Text>Tela1</Text>

               { /* <Button title='Ir paar tela2' onPress={()=> this.props.navigation.navigate('Tela2')}  /> */}
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})