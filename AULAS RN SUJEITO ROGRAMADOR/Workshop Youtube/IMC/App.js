import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IMC(){

  const [peso, setPeso]  = useState('');

  const [height, setHeight] = useState('');

  function handleSubmit() {
    const alt = height / 100;
    const imc = peso / (alt * alt );

    
     if (imc < 18.6) {
       alert('Atenção, você está abaixo do peso! ' + imc.toFixed(2));
     } else if (imc >= 18.6 && imc < 24.9) {
      alert('Peso Ideal! ' + imc.toFixed(2));
     } else if (imc >= 24.9 && imc < 34.9) {
       alert('Atenção, você está levemente acima do peso ' + imc.toFixed(2));
     }
    
  }


  return(
    <View style={styles.conntainer}>
      <Text style={styles.title}>Calcule seu IMC</Text>

     

      <TextInput style={styles.input} 
      placeholder='Peso (kg)' 
      value={peso}
      onChangeText={(peso)=> setPeso(peso)}
      keyboardType="numeric"
      
      />


      <TextInput 
      style={styles.input} 
      placeholder='Altura (cm)' 
      value={height}
      onChangeText={(height)=> setHeight(height)}
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}> Calcular </Text>
        
      </TouchableOpacity>



      <View style={styles.Icon}> 
          <Icon 
          name="balance-scale" 
          size={35} 
          style={{marginTop: 30, marginLeft: 5, color: '#fff',  }} 
          
          />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  conntainer:{
      flex:1,
      backgroundColor: '#000',
      
  },
  title:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
    color: '#FFF'
  },
  input:{
    borderRadius:10,
    backgroundColor: '#fff',
    margin: 15,
    padding: 10,
    fontSize:20

  },
  Icon:{
    alignItems: 'center',
    justifyContent: 'center'
  },

  button:{
    justifyContent:'center',
    textAlign:'center',
    backgroundColor: '#41aef4' ,
    margin: 15,
    padding: 10,     
    borderRadius:10,  
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20
  }

});