import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {

    let tempo = new Date();
    let day = tempo.getDate();
    let Month = tempo.getMonth() + 1;
    let Year = tempo.getFullYear();

    if (day < 10) {
        day = '0' + day;
    } if (Month < 10) {
        Month = '0' + Month;
    }

    return (
        <LinearGradient
            colors={['#1ed6ff', '#97c1ff']}
            style={styles.container}
        >
            <Text style={styles.date} >{`${day}/${Month}/${Year} `}</Text>
            <Text style={styles.city} >São Bernardo do Campo</Text>

            <Ionicons name="ios-cloud" color="#fff" size={150} />

            <Text style={styles.tempperatura}>30º</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 20,
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8

    },
    date: {
        color: '#fff',
        fontSize: 17,

    },
    city: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold', left: 5,
    },
    tempperatura: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 80
    }

})