import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function TelaHome(props) {

 
  
 return(

    
      
    <View style={styles.Container}>
      <Text style={styles.titulo}>Testando Navegação com Maps</Text>
     
      <TouchableOpacity onPress={()=> props.navigation.navigate('Mapas')} style={styles.botao}>
          <Text style={styles.tituloBotao}>Ir para o Mapa</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  Container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 20
  },
  botao:{
      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: '#1C1C1C',
      width: 140,
      height: 40,
      borderRadius: 5,
      
  },
  tituloBotao:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  }
});