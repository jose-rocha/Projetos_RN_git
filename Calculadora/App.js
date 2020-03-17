import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Botao extends Component {

  constructor (props) {
    super(props);
    this.state = {};

    let c = 1;
    if(props.c) {
      c = parseInt(props.c); 
    }

    let btsinais = '#E0E0E0';
      if(props.btsinais) {
        btsinais = props.btsinais;
      }

    this.styles = StyleSheet.create({
      area: {
        flex:c,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:1,
        borderColor: '#999',
        backgroundColor: btsinais
      },
      text:{
        fontSize: 18
      }
    });
  }

  render() {
    return(
     <TouchableOpacity style={this.styles.area} onPress={this.props.onPress} >
            <Text style={this.styles.text}>{this.props.n}</Text>
     </TouchableOpacity>
    );
  }
}


export default class Calculadora extends Component{

  constructor(props) {
    super(props);
    this.state = {resultado: '0'}

    this.btn = this.btn.bind(this);
  }

  btn(b) {
    let s = this.state;

    if(b == 'C') {
      s.resultado = '0';
    }
    else if(b == '=') {
      s.resultado = eval(s.resultado);
    }
    else {
      if(s.resultado == '0') {
        s.resultado = b;
      } else {
        s.resultado += b;
      }
    }
    this.setState(s);
  }

  render(){
    return(
      <View style={styles.body}>

        <View style={styles.linha}>
            <Text style={styles.resultado} > {this.state.resultado} </Text>
        </View >

         <View style={styles.linha}>
            <Botao c="3" n="C" btsinais="#CCC" onPress={()=> {this.btn("C")}} />
            <Botao n="/" btsinais="#FD9536" onPress={()=> {this.btn("/")}} />
         </View> 

         <View style={styles.linha}>
            <Botao n="7" onPress={()=> {this.btn("7")}} />
            <Botao n="8" onPress={()=> {this.btn("8")}}/>
            <Botao n="9" onPress={()=> {this.btn("9")}}/> 
            <Botao n="*" btsinais="#FD9536" onPress={()=> {this.btn("*")}}/>
         </View> 

         <View style={styles.linha}>
            <Botao n="4" onPress={()=> {this.btn("4")}} />
            <Botao n="5" onPress={()=> {this.btn("5")}} />
            <Botao n="6" onPress={()=> {this.btn("6")}} /> 
            <Botao n="-" btsinais="#FD9536" onPress={()=> {this.btn("-")}}/>
         </View>

         <View style={styles.linha}>
            <Botao n="1" onPress={()=> {this.btn("1")}}/>
            <Botao n="2" onPress={()=> {this.btn("2")}} />
            <Botao n="3" onPress={()=> {this.btn("3")}} /> 
            <Botao n="+" btsinais="#FD9536" onPress={()=> {this.btn("+")}}/>
         </View>

         <View style={styles.linha}>
            <Botao c="2" n="0" onPress={()=> {this.btn("0")}}/>
            <Botao  n="." onPress={()=> {this.btn(".")}}/>
            <Botao n="=" btsinais="#FD9536"onPress={()=> {this.btn("=")}} /> 
         </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  linha: {
    flex: 1,
    flexDirection: 'row'
  },
  resultado: {
    flex: 1,
    backgroundColor: '#000',
    color: '#FFf',
    fontSize:40,
    textAlign: 'right',
  }
  

});