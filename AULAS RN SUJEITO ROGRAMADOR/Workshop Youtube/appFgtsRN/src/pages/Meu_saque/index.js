import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Meu_Saque(){
    return(
        <View style={styles.Container}>
            <Text>Meus Saques</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})