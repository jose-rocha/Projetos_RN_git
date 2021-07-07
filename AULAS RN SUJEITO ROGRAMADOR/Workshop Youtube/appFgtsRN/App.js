import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

// const Navigation = NavigationContainer();

export default function App() {
  return (
   <NavigationContainer>
       <Routes />
   </NavigationContainer>
  );
}

