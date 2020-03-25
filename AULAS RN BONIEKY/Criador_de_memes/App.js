import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

export default class AppMeme extends Component{

  constructor(props){
    super(props);
    this.state = {texto1: 'Alguma Coisa', texto2: 'Alguma Coisa'};

    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase();

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô)/g, 'i');
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i');

    return novoTexto;
  }

  escrever(t){
      let s = this.state;
      s.texto1 = t;
      s.texto2 = this.mudarVogais(t);
      this.setState(s);
  }
  render(){
    return(
      <View style={styles.container}>
            <View >
              <Text style={styles.titulo}>Criador de mimi</Text>
            </View>
            <View style={styles.inputArea} >
              <TextInput style={styles.input} placeholder="Digite seu texto" 
              onChangeText={this.escrever}/>
            </View>
           
           <View style={styles.area}> 
    <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
             <Image style={styles.imagem} source={require('./images/mimimi.jpg')} />
             <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>     
           </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 30,
    color: '#fff'
  },
  inputArea:{
    alignSelf: 'stretch'
  },
  input:{
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#eee',
    fontWeight: 'bold',
    height: 40,
    margin: 20,
    padding: 10
  },
  imagem:{
    height: 320,
    width: 320,
    marginTop:-70,
    zIndex: 0
  },
  area:{
    height: 320,
    width: 320,
    paddingTop: 10,
  },
  texto:{
    fontSize: 25,
    color: '#fff',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70
  },
  texto1:{
    zIndex: 1
  },
  texto2:{
    zIndex: 2,
    marginTop:-70,
  }

});