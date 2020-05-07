import React, { Component } from 'react';
import {Platform, View, Text, StatusBar, Keyboard} from 'react-native';

import {Container, Title, Input, Botao, BotaoText, CenterView, List} from './styles';
import getRealm from './services/realm';

import Jobs from './Jobs';



export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:'',
      cargo: '',
      jobs: []
    };
    this.addJob = this.addJob.bind(this);
    this.saveJob = this.saveJob.bind(this);

  }

  saveJob = async (data)=> {
    const realm = await getRealm();

    const id = realm.objects('Job').length + 1; //gerando id
    const dadosJobs = {
      id: id,
      nome: data.nome,
      cargo: data.cargo
    };

    realm.write(()=>{
      realm.create('Job', dadosJobs);
    });

  }
  

addJob = async ()=> {
  try {
    if(this.state.nome === '' || this.state.cargo === ''){
      alert('Por favor preencha todos os campos!')
      return;
    }

    const data = {nome: this.state.nome, cargo: this.state.cargo};
    await this.saveJob(data);
    let state = this.state;
    state.nome = '', //nessa linha ele apaga o nome escrito de qu apertar no cadastrar
    state.cargo = ''; //nessa linha ele apaga o cargo escrito de qu apertar no cadastrar
    this.setState(state);
    Keyboard.dismiss(); // //nessa linha serve para fechar o teclado após cadastrar.


  } catch (err) {
    alert(err);
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
                <BotaoText onPress={this.addJob} >Cadastrar</BotaoText>
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