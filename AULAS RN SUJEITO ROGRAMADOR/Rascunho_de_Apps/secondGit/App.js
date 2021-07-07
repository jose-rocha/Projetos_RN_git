import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default ()=>{

  const [name, setName] = useState('');
  const [input, setInput] = useState('');

  useEffect(()=>{

    async ()=>{
      let nameAsync = await AsyncStorage.getItem('names')
      if(nameAsync !== null){
        setName(nameAsync)
      }
    }
   

  }, [])
  
  useEffect(()=>{

   async ()=>{

      await AsyncStorage.setItem('names', name)

    }


  }, [name])


  function morphName(){
    setName(input)
    setInput('')
  }

  return(
    <View style={styles.contatiner}>
      <Text style={styles.titleFirst}>First</Text>

      <TextInput
       placeholder="Digite a palavra"
       value={input}
       onChangeText={setInput}
       />

      <TouchableOpacity style={styles.btn} onPress={morphName}>
        <Text style={styles.btnText}>Morph Name</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{name}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  contatiner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleFirst:{
    fontSize: 30
  },
  btn:{
    backgroundColor: '#000',
    width: '90%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center'
  },
  btnText:{
      fontSize: 25,
      color: "#fff",
      textAlign: 'center',
  },
  result:{
    fontSize: 35
  }

})