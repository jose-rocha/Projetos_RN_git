import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Contato extends Component{
  static navigationOpitions = {
    title: ""
  };

    render(){
      return(
        

        <View style={styles.View}>
          
              <Text style={{marginTop: 10, }}>Nome: José Rocha</Text>
              <Text style={{marginTop: 10}}>Tel: (11) 987654321)</Text>
              <Text style={{marginTop: 10}}>Email: josemarlerocha@gmail.com</Text>
        
            
            
            <View style={styles.div}> 
              <Text style={styles.Texto}>Contato</Text>
              
            </View>
            <View style={{paddingTop: 10}}>
                <Button
                    title='Voltar para tela Home'
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
      backgroundColor: '#929dde',
      alignItems:'center',
      justifyContent: 'center'
    },
    div:{
      width:'98%',
      height: 50,
      backgroundColor: 'black',
      justifyContent: 'center',
    },
    Texto: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center'
    }
  
    });
  
    export default Contato;