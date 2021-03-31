import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Location from '@react-native-community/geolocation';

import Menu from '../../components/Menu'

export default function Locations() {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const obterLocalizacao = () => {
        Location.getCurrentPosition(
            (pos) => {
                setLatitude(pos.coords.latitude);
                setLongitude(pos.coords.longitude);
                console.log(`Latitude: ${latitude}`);
                console.log(`Longitude: ${longitude}`);
            },
            // (erro) => {
            //     alert(`Erro: ${erro.message}`);
            // },
            // {
            //     enableHighAccuracy: true, timeout: 120000, maximumAge: 1000
            // }
        )
    }

    return (
        <View style={styles.container}>
            <Menu />
            <Text style={styles.title}>Localização E Position</Text>
            <Text style={styles.title}>Latitude: {latitude} </Text>
            <Text style={styles.title}>Longitude: {longitude} </Text>

            <TouchableOpacity style={styles.Button} onPress={obterLocalizacao} >
                <Text style={styles.ButtonText} >Obter Localização e Posição</Text>
            </TouchableOpacity>

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
    },
    Button: {
        backgroundColor: 'blue',
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    ButtonText: {
        color: '#fff',
        fontSize: 18
    }
});