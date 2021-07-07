import React from 'react';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Meu_FGTS from './pages/Meu_FGTS';
import Meu_Saque from './pages/Meu_saque';
import Help from './pages/Help';
import Plus from './pages/Plus';

import Service from './Components/ButtonService';

import {Entypo, Feather, Octicons, MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
       <Tab.Navigator 
        tabBarOptions={{
            style:{
                height: 60,
                backgroundColor: 'white',
                borderTopColor: 'transparent'
            
            },
            activeTintColor: 'orange',
            inactiveTintColor: 'gray',
            tabStyle:{
                // marginTop: 5,
                paddingTop: 13,
                paddingBottom:5
            }
        }}

        // BottomTabBar={{
        //     style:{
        //         backgroundColor: 'blue'
        //     }
        // }}
       >
           <Tab.Screen 
           name="Principal"
            component={Home} 
            options={{
                // tabBarIcon:({size, color}) =>(
                //     <Entypo name="home" size={size} color={color} />
                // )
           }} />
           <Tab.Screen
            name="Meu FGTS" 
            component={Meu_FGTS} 
            options={{
                // tabBarIcon:({size, color}) => (
                //     <Octicons name='graph' size={size} color={color} />
                // )
            }}
            />
           <Tab.Screen
            name="Meu_Saque"
             component={Meu_Saque}
                options={{
                    tabBarLabel: '',
                    // tabBarIcon:({size, color})=>(
                    //     <Service size={size} color={color} />
                    // )
                }}
            />

           <Tab.Screen
            name="Ajuda"
            component={Help}
            options={{
                // tabBarIcon:({size, color}) => (
                //     <MaterialCommunityIcons name='help-box' size={size} color={color} />
                // )
            }}
            />
           <Tab.Screen
            name="Mais"
            component={Plus}
            options={{
            //    tabBarIcon:({ size,color})=>(
            //     <Ionicons name="grid-sharp" size={size} color={color} />
            //    )
            }} 
             />

          
       </Tab.Navigator>
    )
}