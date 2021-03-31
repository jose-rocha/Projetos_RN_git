import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';

import { condition } from '../../utils/conditions'

export default function Forecast({ data }) {
    let icon = condition(data.condition)

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <IonIcons name={icon.name} color={icon.color} size={25} />
            {/* <Text>{data.weekend}</Text> */}

            <View style={styles.temp} >
                <Text >{data.min}º</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{data.max}º</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 12,
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    date: {
        fontSize: 14
    },
    temp: {
        alignItems: 'center'
    }
})