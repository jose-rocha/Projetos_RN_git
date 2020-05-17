import React, { Component } from 'react'
import { Text, StatusBar, Keyboard } from 'react-native'

import Jobs from './Jobs';

import {Container, Title, Input, Botao, BotaoText, CenterView, List} from './styles';
import getRealm from './services/realm';
   

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            cargo: '',
            jobs: [] //vai ser para a lista
        };

        this.addJob = this.addJob.bind(this);
        this.saveJob = this.saveJob.bind(this);
    }

    componentDidMount(){
        loadJobs = async () => {
            const realm = await getRealm();
            const data = realm.objects('Job');
            this.setState({jobs: data});
        }

        loadJobs();
    }

    //função para salvar o usuário
    saveJob = async(data) => {
        const realm = await getRealm();

        const id = realm.objects('Job').length + 1;
        const dadosJobs = {
            id: id,
            nome: data.nome,
            cargo: data.cargo
        };

        realm.write(()=> {
            realm.create('Job', dadosJobs);
        });
    }


    //função para cadastrar usuário
    addJob = async () => {
        try{
            if(this.state.nome === '' || this.state.cargo === ''){
                alert('Preencha todos os campos!')
                return;
            }

            const data = {nome: this.state.nome, cargo: this.state.cargo};
             await this.saveJob(data);
             let state = this.state;
             state.nome = '';
             state.cargo = '';
             this.setState(state);
             Keyboard.dismiss();

        }catch(err){
            alert(err);
        }
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
              
                <Title> Nome </Title>
                <Input autoCapitalize="none" autoCorret={false} value={this.state.nome} onChangeText={(nome)=> this.setState({nome: nome})} />
               
                <Title> Cargo </Title>
                <Input autoCapitalize="none" autoCorret={false} value={this.state.cargo} onChangeText={(cargo)=> this.setState({cargo: cargo})} />

                <CenterView>
                    <Botao onPress={this.addJob}>
                        <BotaoText>Cadastrar</BotaoText>
                    </Botao>

                </CenterView>

                <List keyboardShouldPersistTaps="handled" 
                    data={this.state.jobs}
                    keyExtractor={item => String(item.id)}
                    renderItem={ ({item})=> (
                        <Jobs data={item} />
                    )}
                />
                
            </Container>    
           
        )
    }
}