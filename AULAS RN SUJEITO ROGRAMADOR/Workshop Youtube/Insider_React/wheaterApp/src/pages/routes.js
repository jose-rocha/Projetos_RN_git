import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

import Home from '../pages/Home';
import Search from '../pages/Search';
import Location from '../pages/Location';



export default function Routes() {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator

            // drawerType={'slide'} 
            drawerStyle={{
                backgroundColor: '#c6cbef',
                width: '100%',
                justifyContent: 'center',
                // alignItems: 'center'

            }}

        // drawerPosition={'right'} 
        >
            <Drawer.Screen name="Home" component={Home} options={{ headerTitleAlign: 'right' }} />

            <Drawer.Screen name="Search" component={Search} options={{ headerTitleAlign: 'center' }} />

            <Drawer.Screen
                name="Location" component={Location} option={{ headerTitleAlign: 'center' }}
            />


        </ Drawer.Navigator>
    )
}