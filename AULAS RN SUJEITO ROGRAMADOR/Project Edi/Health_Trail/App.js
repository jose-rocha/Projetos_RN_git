import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/Home';
import Calendario from './src/pages/Calendario';
import Chat from './src/pages/Chat';
import Perfil from './src/pages/Perfil';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home'
  },
  Calendario: {
    name: 'calendar'
  },
  Chat: {
    name: 'chatbubble-ellipses-outline'
  },
  Perfil: {
    name: 'user-o'

  }
}




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#b0bed4',
        style: {
          height: 80
        },

      }

      } /* screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return (
            <>
              <Icon name={name} color={color} size={size} />
            </>

          )
        }
      })} */ >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, /* size */ }) => (
              <Icon name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Calendario" component={Calendario}
          options={{
            tabBarLabel: 'calendario',
            tabBarIcon: ({ color, /* size */ }) => (
              <AntDesign name="calendar" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Chat" component={Chat}
          options={{
            tabBarLabel: 'chat',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Perfil" component={Perfil}
          options={{
            tabBarLabel: 'perfil',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-o" size={size} color={color} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

