import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';

import Forecast from '../../components/Forecast';

import Location from '@react-native-community/geolocation';
import { Stats } from 'node:fs';

// Location.setRNConfiguration(config);

let date = new Date();
let day = date.getDate();
let Month = date.getMonth() + 1;

let date2 = new Date();
let day2 = date2.getDate() + 1;
let Month2 = date2.getMonth() + 1;

let date3 = new Date();
let day3 = date3.getDate() + 2;
let Month3 = date3.getMonth() + 1;

let date4 = new Date();
let day4 = date4.getDate() + 3;
let Month4 = date4.getMonth() + 1;

let date5 = new Date();
let day5 = date5.getDate() + 4;
let Month5 = date5.getMonth() + 1;

let date6 = new Date();
let day6 = date6.getDate() + 5;
let Month6 = date6.getMonth() + 1;

let date7 = new Date();
let day7 = date7.getDate() + 6;
let Month7 = date7.getMonth() + 1;

let date8 = new Date();
let day8 = date8.getDate() + 7;
let Month8 = date8.getMonth() + 1;

let date9 = new Date();
let day9 = date9.getDate() + 8;
let Month9 = date9.getMonth() + 1;

let date10 = new Date();
let day10 = date10.getDate() + 9;
let Month10 = date10.getMonth() + 1;


// if (Month < 10) {
//     Month = zeroCMonth;
// }

const myList = [
    // 1
    {
        'date': `${day}/${Month}`,
        'weekday': 'Dom',
        'max': 25,
        'min': 17,
        'descripiton': 'Tempestade Isoladas',
        'condition': 'storn'
    },

    // 2
    {
        'date': `${day2}/${Month2}`,
        'weekday': 'Seg',
        'max': 27,
        'min': 18,
        'descripiton': 'Tempo Nubado',
        'condition': 'clear_day'
    },

    // 3
    {
        'date': `${day3}/${Month3}`,
        'weekday': 'Ter',
        'max': 27,
        'min': 18,
        'descripiton': 'Tempo Nubado',
        'condition': 'cloud'
    },

    // 4
    {
        'date': `${day4}/${Month4}`,
        'weekday': 'Qua',
        'max': 26,
        'min': 18,
        'descripiton': 'Tempestade Isoladas',
        'condition': 'storn'
    },

    // 5
    {
        'date': `${day5}/${Month5}`,
        'weekday': 'Qui',
        'max': 23,
        'min': 18,
        'descripiton': 'Tempo Nubado',
        'condition': 'cloud'
    },

    // 6
    {
        'date': `${day6}/${Month6}`,
        'weekday': 'Sex',
        'max': 23,
        'min': 17,
        'descripiton': 'Tempestade Isoladas',
        'condition': 'storn'
    },

    // 7
    {
        'date': `${day7}/${Month7}`,
        'weekday': 'Sáb',
        'max': 23,
        'min': 17,
        'descripiton': 'Tempo Nubado',
        'condition': 'cloud'
    },

    // 8
    {
        'date': `${day8}/${Month8}`,
        'weekday': 'Dom',
        'max': 23,
        'min': 17,
        'descripiton': 'Alguns Chuvisco',
        'condition': 'rain'
    },

    // 9
    {
        'date': `${day9}/${Month9}`,
        'weekday': 'Seg',
        'max': 23,
        'min': 17,
        'descripiton': 'Alguns Chuvisco',
        'condition': 'rain'
    },

    // 10
    {
        'date': `${day10}/${Month10}`,
        'weekday': 'Ter',
        'max': 23,
        'min': 17,
        'descripiton': 'Tempestade Isoladas',
        'condition': 'storn'
    },
];

export default function Home() {

    //Chama essa função quando o app e montado na tela, ou seja 'aberto'.
    // useEffect(() => {

    //     (async () => {
    //         let { status } = Location.getCurrentPosition();
    //         console.log(status);


    //     })();

    // }, []);











    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Home</Text> */}
            <Menu />

            <Header />

            <Conditions />

            <FlatList
                horizontal={true}
                contentContainerStyle={{ paddingBottom: '5%' }}
                style={styles.list}
                data={myList}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => <Forecast data={item} />}
            />
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
    list: {
        marginTop: 10,
        marginLeft: 10
    }
});