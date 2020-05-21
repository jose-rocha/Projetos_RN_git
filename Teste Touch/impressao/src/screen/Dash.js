import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native';

export default class Dash extends Component {
    render() {
        return (
            <View style={styles.Container}>
            <ScrollView >
                
                   
                    <View style={styles.box}></View>
                    <View style={styles.box} ></View>
                    <View style={styles.box} ></View>

            </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#7159c1'
    },
    texto:{
        fontSize: 20,
        color: '#fff'
    },
    box: {
        backgroundColor: '#ADD8E6', 
        width: 330, 
        height: 250, 
        margin: 15,
         borderRadius: 10
    }
})