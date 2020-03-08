import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Home extends Component{
  

    render(){
      return(
        <View style={styles.View}>
            <View style={styles.div}> 
              <Text style={styles.Texto}>Home</Text>
            </View>
            <View style={{paddingTop: 10}}> 
              <Button 
                title='ir para tela de Contato' 
                onPress={()=> this.props.navigation.navigate('Contato')}
              />
             </View>
             
             

             <View style={{paddingTop: 10}}>
             <Button 
                title='Sobre' 
                onPress={()=> this.props.navigation.navigate('Sobre')}
              />
             </View>

         </View>
      );
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
    },
  
    });
  
    export default Home;



  