import React, {useState} from 'react';
import {View,  StyleSheet, Text, Button, TextInput, Image} from 'react-native';
import * as Speech from 'expo-speech';


export default function App(){

  const [text, setText] = useState('Bem vindo, digite algo pra eu falar');

  function speak(){
    Speech.speak(text, {
      language:'pt-BR'
    });
  }
 

    
    return(
      <View style={styles.container}>

      <View style={{alignItems: 'center', marginTop: -120, padding:5}}>
        <Image 
          source={require('./src/assets/logo.png')}
        />
      </View>  

        <Text style={{fontSize: 25, fontWeight: 'bold'}}>  Seja Bem Vindo  </Text>

        <TextInput
        style={styles.input}
        onChangeText={e => setText(e)}
        placeholder='Digite algo..'
        />

        <Button
          title="Aperte"
          onPress={speak}
        /> 
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00ced1'
    },
    input: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#121212',
      padding: 10,
      margin: 10,
      color: '#000',
      fontSize: 20,
      backgroundColor: "white",
      

    }

  });
