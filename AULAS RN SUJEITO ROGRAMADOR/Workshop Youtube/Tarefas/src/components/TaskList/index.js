import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as  Animatable from 'react-native-animatable';


export default function TaskList({data, handleConcluido}){
    return(
        <Animatable.View 
        style={styles.container} 
        animation="bounceIn" useNativeDriver
        >
            
            <TouchableOpacity onPress={ ()=> handleConcluido(data)}>
                <Icon name={"check-circle"} size={30} color='#121212' />
            </TouchableOpacity>

            <View>
                <Text style={styles.task}>{data.task}</Text>
            </View>

        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center', 
        borderRadius: 5,
        padding: 7,
        elevation:1.5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3
        }
    },
    task: {
        color: '#121212',
        paddingLeft: 8,
        paddingRight: 20,
        fontSize: 20

    }
});