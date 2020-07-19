import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Calendario from './Calendario';
import Chat from './Chat';
import Perfil from './Perfil';

const Telas = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '',
        tabBarIcon: () => <Icon name="home" size={30} color="#b0bed4" />,
      },
    },

    Calendario: {
      screen: Calendario,
      navigationOptions: {
        title: '',

        tabBarIcon: () => (
          <AntDesign name="calendar" size={30} color="#b0bed4" />
        ),
      },
    },

    Chat: {
      screen: Chat,
      navigationOptions: {
        title: '',
        tabBarIcon: () => (
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={30}
            color="#b0bed4"
          />
        ),
      },
    },

    Perfil: {
      screen: Perfil,
      navigationOptions: {
        title: '',
        tabBarIcon: () => (
          <FontAwesome name="user-o" size={30} color="#b0bed4" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        height: 80,
      },
      tabStyle: {
        height: 120,
      },
    },

    iconStyle: '#da5388',
  },
);

export default createAppContainer(Telas);
