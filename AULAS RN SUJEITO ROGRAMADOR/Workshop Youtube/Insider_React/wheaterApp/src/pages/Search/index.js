import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Menu from '../../components/Menu'

export default function Search() {
    return (
        <View style={styles.container}>
            <Menu />
            <Text style={styles.title}>About</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8f0ff'
    },
    title: {
        fontSize: 18,
        color: '#000'
    }
});