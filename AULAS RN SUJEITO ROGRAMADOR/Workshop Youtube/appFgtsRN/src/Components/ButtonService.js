import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {FontAwesome} from 'react-native-vector-icons';

export default function Service(){
    return(
        <View style={styles.Container}>
            <FontAwesome name="dollar"  size={17} color={'white'} />
            <Text style={styles.texto}>Meus</Text>
            <Text style={styles.texto}>Saques</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        height: 56,
        width:56,
        borderRadius: 35,
        marginBottom: 10
    },
    texto:{
        marginTop: -4,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:11
    }
})