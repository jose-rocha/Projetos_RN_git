import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default class Sobre extends Component{
    render(){
        return(
            <View style={styles.conatiner}>


               <Button title='Ir para home' onPress={()=> this.props.navigation.navigate('Home')} />
               
                
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} style={styles.Touche}>
                    <Text style={styles.ir} >Ir para Home</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Touche:{
        backgroundColor: '#4169e1',
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin:5

    },
    ir:{
        color: '#fff',
        fontSize: 17,
    }
})