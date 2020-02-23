import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Configuracao extends Component{
  

    render(){
      return(
        <View style={styles.View}>
            <View style={styles.div}> 
              <Text style={styles.Texto}>Configurações</Text>
            </View>

            <View style={{paddingTop: 10}}>
              <Button 
                title='Voltar' 
                onPress={()=> this.props.navigation.goBack()}
              />
            </View> 
         </View>
      )
    }
  }
  
  const styles =StyleSheet.create({
    View:{
      flex: 1,
      backgroundColor: 'gray',
      alignItems:'center',
      justifyContent: 'center'
    },
    div:{
      width:'98%',
      height: 50,
      backgroundColor: 'black',
      justifyContent: 'center'
  
    },
    Texto: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center'
    }
  
    });
  
    export default Configuracao;