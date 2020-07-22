import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function irSobre() {
    navigation.navigate('Sobre', {nome: 'José', email: 'jose.rocha@gmail.com'});
  }

  return (
    <View>
      <Text>Seja Bem Vindo</Text>
      <Button title="Ir para Sobre" onPress={irSobre} />
    </View>
  );
}
