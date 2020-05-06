import React, { Component } from 'react';
import {Platform, View, Text, StatusBar, StyleSheet } from 'react-native';

import {Container, Title, Input, Botao, BotaoText, CenterView, List} from './styles';
import Jobs from './Jobs'


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:'',
      Cargo: '',
      jobs: []
    }
  }
  render(){
    return (
      <Container>
          <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <Title>Nome</Title>
            <Input autoCapitalize="none" autoCorrect={false} value={this.state.nome} onChangeText={(nome)=>this.setState({nome: nome})} />

            <Title>Cargo</Title>
            <Input autoCapitalize="none" autoCorrect={false} value={this.state.cargo} onChangeText={(cargo)=>this.setState({cargo: cargo})} />
            
            <CenterView>
            <Botao>
                <BotaoText>Cadastrar</BotaoText>
            </Botao>

            <Botao>
                <BotaoText>Editar</BotaoText>
            </Botao>

            </CenterView>

            <List keyboardShouldPersistTaps="handled"
                  data={[{
                    id: 1,
                    nome: 'José Rocha',
                    cargo: 'Programador RN'
                  }]}
                  keyExtractor={item => String(item.id)}
                  renderItem={({item})=> (
                    <Jobs data={item} />
                  )}
                  />

      </Container>
    );
  }
}