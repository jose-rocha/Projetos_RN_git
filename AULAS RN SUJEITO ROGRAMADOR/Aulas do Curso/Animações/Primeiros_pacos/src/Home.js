import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Button, TouchableOpacity} from 'react-native';

//console.disableYellowBox = true


export default class Home extends Component{
    constructor(props){
      super(props);
      this.state = {

        LarAnimada: new Animated.Value(150),
        AltAnimada: new Animated.Value(50)

      };

      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 620,
          duration: 2000,
          useNativeDriver: false
        }
      ).start();

      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 360,
          duration: 2000,
          useNativeDriver: false
        }
      ).start();
    }



  render(){
    return(
      <View style={styles.container}>
            <Animated.View style={{width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: '#4169e1', justifyContent: 'center', borderRadius: 5}} >

              <Text style={{color:'#fff',fontSize: 22, textAlign: 'center'}} >Carregando...</Text>

              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Sobre')} style={styles.botao}>
                  <Text style={styles.voltar}>Voltar</Text>
              </TouchableOpacity>


            </Animated.View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    
  },
  botao:{
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#fff',
      height: 40,
      width: 80,
      borderRadius: 5,
      marginLeft: 140

  },
  voltar:{
      color: 'green',
      fontSize: 20
  }
})