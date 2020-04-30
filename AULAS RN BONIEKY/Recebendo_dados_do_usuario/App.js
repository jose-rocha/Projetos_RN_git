import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';



    export default class App extends Component{

      constructor(props){
        super(props);

        this.state = {texto: ''}

        this.mudarTexto = this.mudarTexto.bind(this);
      }

      mudarTexto(t){
        let s = this.state;
        if(t.length > 0) {
          s.texto = 'Olá usuário: '+t;
        } else {
          s.texto = '';
        }
        


        this.setState(s);
      }

      render(){
        return(
          <View style={styles.container}>
            
            <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Seja bem vindo</Text>

            <TextInput style={styles.input} placeholder='Digite o seu nome' onChangeText={this.mudarTexto} />

            <Text style={{fontSize: 20, textAlign: 'center'}} >{this.state.texto} </Text>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fdf'
      }, 
      input: {
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
      }
    });