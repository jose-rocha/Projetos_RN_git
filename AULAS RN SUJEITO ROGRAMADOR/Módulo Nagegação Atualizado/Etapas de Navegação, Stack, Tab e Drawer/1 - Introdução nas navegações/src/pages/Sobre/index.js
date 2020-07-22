import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Sobre({route}) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Sobre</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Email: {route.params?.email} </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
