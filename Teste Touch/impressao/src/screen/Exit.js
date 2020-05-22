import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Exit extends Component {
    render() {
        return (
            <View style={styles.Container}>

                <TouchableOpacity style={styles.btn} onPress={()=> this.props.navigation.navigate('Login')}>
                    <Text style={styles.textBtn}>Sair</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6'
    },
    btn:{
        width: '25%',
        height: '10%',
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        borderRadius: 10
    },
    textBtn:{
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    }
})
