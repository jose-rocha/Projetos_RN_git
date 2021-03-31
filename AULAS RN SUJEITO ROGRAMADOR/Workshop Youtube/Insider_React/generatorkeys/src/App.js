import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import Clipboard from 'react-native-clipboard';
import Clipboard from '@react-native-community/clipboard'

import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function Keys() {
    const [password, setPasword] = useState('');
    const [size, setSize] = useState(5);


    function generatePass() {
        // setPasword(size)
        // setPasword(charset.charAt(Math.random() * 8));

        let pass = '';
        for (let i = 0, n = charset.length; i < size; i++) {
            pass += charset.charAt(Math.floor(Math.random() * n));
        }

        setPasword(pass);

    }

    function copyPass() {
        Clipboard.setString(password);
        alert(`A senha (${password}) foi copiada com sucesso!`);
    }

    return (
        <View style={styles.container}>

            <Image source={require('./images/logo.png')} style={styles.logo} />

            <Text style={styles.Title}>{size} Caracteres</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={5}
                    maximumValue={15}
                    maximumTrackTintColor={'green'}
                    minimumTrackTintColor={'red'}
                    // value={size}
                    onValueChange={(size) => setSize(size.toFixed(0))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePass}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            {password !== '' && (
                <View style={styles.area}>
                    <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
                </View>
            )}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 60,

    }
    ,
    Title: {
        // textAlign: 'center'
        fontSize: 30,
        fontWeight: 'bold'

    },
    area: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 7

    },
    button: {
        backgroundColor: '#ffa200',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginBottom: 25
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

    password: {
        padding: 10,
        textAlign: 'center',
        // alignItems: 'center'
        fontSize: 25
    }

})