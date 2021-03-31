import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

export default function Menu() {

    const abreDrawer = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => abreDrawer.openDrawer()} >
            <Feather name='menu' size={36} color="#000" />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9,
        left: 5,
        top: 10,
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50

    },

});