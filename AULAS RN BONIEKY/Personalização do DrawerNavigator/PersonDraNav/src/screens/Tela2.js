import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


export default class Tela2 extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Text>
                    Tela 2
                </Text>
               
                <Button title='Voltar' onPress={()=>this.props.navigation.navigate('Tela1')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})