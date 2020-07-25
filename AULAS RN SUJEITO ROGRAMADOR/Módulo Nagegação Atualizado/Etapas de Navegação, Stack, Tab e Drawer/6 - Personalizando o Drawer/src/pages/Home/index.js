import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native' //para poder navegar entre elas

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Home</Text>
      <Button title="Ir para Contato" onPress={() => navigation.navigate('Contato')} />

      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.AbrirDrawer}>
        <Text style={styles.texto}>Abrir Drawer</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  AbrirDrawer: {
    borderRadius: 5,
    backgroundColor: '#121212',
    width: '38%',
    height: 40,
    marginTop: 10,
    justifyContent: 'center'
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  }
})