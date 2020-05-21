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
            disableBtnCadastrar: false
        };

        this.excluirJob = this.excluirJob.bind(this);
        this.addJob = this.addJob.bind(this);
        this.saveJob = this.saveJob.bind(this);
        this.editarJob = this.editarJob.bind(this);
        this.editJob = this.editJob.bind(this);
    }

    //esta função serve para excluir o usuário
    excluirJob = async(data) => {
        const realm = await getRealm();
        const ID = data.id;

        realm.write(()=> {
            if(realm.objects('Job').filtered('id =' + ID).length > 0){

                realm.delete(
                    realm.objects('Job').filtered('id =' + ID)
                );

            }
        });

        //esta constante atualiza a lista, ex: depois que excluir o usuário ela vaitrazer só os usuários ativos.
        const JobsAtuais = realm.objects('Job').sorted('id', false);
        this.setState({jobs: JobsAtuais});

    }

    editarJob(data){
        let state = this.state;
        state.nome = data.nome;
        state.cargo = data.cargo;
        state.disableBtnCadastrar = true; 
        state.idEdit = data.id;
        
        this.setState(state);
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
        this.setState({jobs: dadosAlterados, nome:'', cargo: '', idEdit: null, disableBtnCadastrar: false});
        Keyboard.dismiss();
    }
    

    //função para salvar o usuário
    saveJob = async(data) => {
        const realm = await getRealm();

        //const id = realm.objects('Job').length + 1;
        const id = realm.objects('Job').sorted('id', true).length > 0 
        ? realm.objects('Job').sorted('id', true)[0].id + 1 : 1;  /* Essa atualização de const foi feita na aula "Deletando Dados no minuto 07:20",
        essa constante serve para se por acaso ao excluir o usuário e quando for criar outro não dê o erro de id, 
        ex: tem dois users um com id:1 e outro com id:2 e xcluo o de id 1 ao tentar criar o próximo ele retornária um erro que já existe um com id:2, 
        com essa constatnte não vai mais acontecer o erro */

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
                        <Jobs data={item} editar={this.editarJob} excluir={this.excluirJob} />
                    )}
                />
                
            </Container>    
           
        )
    }
}
