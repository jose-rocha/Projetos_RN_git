import React, {useState} from 'react';
import {View,  StyleSheet, Button} from 'react-native';
import Speech from 'speech';


export default function App(){

  const [text, setText] = useState('Bem vindo');

  function speak(){
    Speech.speak(text, {
      language:'pt-BR'
    });
  }
 

    
    return(
      <View >
        <Button
          title="Falar :)"
          onPress={speak}
        /> 
      </View>
    );
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }

  });