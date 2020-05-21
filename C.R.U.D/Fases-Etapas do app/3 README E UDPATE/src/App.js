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
            idEdit: null,
            jobs: [], //vai ser para a lista
            disableBtnCadastrar: true
        };

       this.editarJob = this.editarJob.bind(this);
       this.editJob = this.editJob.bind(this);
    }

    //função para editar os dados do user, ex: nome ou  cargo.
    editJob = async () =>{
        const realm = await getRealm();
        if(this.state.idEdit === null){
            alert('Clique em Editar para depois atualizar os dados!');
            return;
        }

        const response = {
            id: this.state.idEdit,
            nome: this.state.nome,
            cargo: this.state.cargo
        }

        realm.write(()=> {
            realm.create('Job', response, 'modified');
        });

        const dadosAlterados = this.state.jobs.map(job => (job.id === response.id ? response : job));
        this.setState({jobs: dadosAlterados, nome:'', cargo: '', idEdit: null});
        Keyboard.dismiss();
    }

    //função para editar/atualizar dados
    editarJob(data){
        let state = this.state;
        state.nome = data.nome;
        state.cargo = data.cargo;
        state.idEdit = data.id;
        disableBtnCadastrar: true
        this.setState(state);
    }

    //esta função trabalha em conjunto com data={this.state.jobs} da linha 56 para poder aparecer os users cadastrados.
    componentDidMount(){
        loadJobs = async () => {
            const realm = await getRealm();
            const data = realm.objects('Job');
            this.setState({jobs: data});
        }

        loadJobs();
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
                	 <Botao onPress={this.addJob} disabled={this.state.disableBtnCadastrar} 
                        style={{opacity: this.state.disableBtnCadastrar ? 0.5 : 1}}
                    >
                        <BotaoText>Cadastrar</BotaoText>
                    </Botao>

                
                
                    <Botao onPress={this.editJob}>
                        <BotaoText >Atualizar Dados</BotaoText>
                    </Botao>

                </CenterView>

                <List keyboardShouldPersistTaps="handled" 
                    data={this.state.jobs}
                    keyExtractor={item => String(item.id)}
                    renderItem={ ({item})=> (
                        <Jobs data={item} editar={this.editarJob} />
                    )}
                />
                
            </Container>    
           
        )
    }
}
