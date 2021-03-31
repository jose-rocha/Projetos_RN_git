import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Feath from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Conditions() {
    return (
        <View style={styles.container}>
            <View style={styles.conditions}>
                <Feath name="wind" size={23} color="#1ed6ff" />
                <Text>7km/h</Text>
            </View>

            <View style={styles.conditions}>
                <MaterialCommunityIcons name="weather-sunset-up" size={23} color="#1ed6ff" />
                <Text>05:22 am</Text>
            </View>

            <View style={styles.conditions}>
                <MaterialCommunityIcons name="weather-sunset-down" size={23} color="#1ed6ff" />
                <Text>06:10 pm</Text>
            </View>

            <View style={styles.conditions}>
                <Feath name="droplet" size={23} color="#1ed6ff" />
                <Text>65</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 30,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%',
        borderRadius: 8
    },
    conditions: {
        alignItems: 'center',
        justifyContent: 'center'

    }
})