import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Plus(){
    return(
        <View style={styles.Container}>
            <Text>Mais</Text>
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