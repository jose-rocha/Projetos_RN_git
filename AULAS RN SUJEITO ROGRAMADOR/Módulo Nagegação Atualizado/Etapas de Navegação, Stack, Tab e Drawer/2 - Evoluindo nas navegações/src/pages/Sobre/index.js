import React, { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sobre({ route }) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Sobre ${route.params?.nome}`,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Sobre</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Email: {route.params?.email}</Text>
      <Button title="Voltar para Home!" onPress={() => navigation.goBack()} />

      <Button title="Contato" onPress={() => navigation.navigate('Contato')} />
    </View>
  );
}
