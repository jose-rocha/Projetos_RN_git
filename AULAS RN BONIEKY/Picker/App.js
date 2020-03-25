import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

export default class Picke extends Component{
  constructor(props){
    super(props);
    this.state = {
      servico:0,
      servicos: [
        {nome: 'Alinhamento', valor: 59.9},
        {nome: 'Rodizio', valor: 40},
        {nome: 'Manutenção Hidraulica', valor: 159.9},
        {nome: 'Câmbio', valor: 75.99}
      ]
    };
  }

  render(){

    let servicosItem = this.state.servicos.map((v, k)=> {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    });

    return(
      <View style={styles.body}>
        <Text style={styles.logo}>Auto Peças</Text>

        <Picker selectedValue={this.state.servico} 
        onValueChange={(itemValue, intemIndex)=> this.setState({servico: itemValue})}
         >
            {servicosItem}
        </Picker>

    <Text style={styles.valor}>R${this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop: 20,
    backgroundColor: '#ccc'

  },
  logo:{
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20
  },
  valor:{
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20
  }
});