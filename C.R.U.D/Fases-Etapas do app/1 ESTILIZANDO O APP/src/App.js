import React, { Component } from 'react'
import { Text, StatusBar } from 'react-native'

import Jobs from './Jobs';

import {Container, Title, Input, Botao, BotaoText, CenterView, List} from './styles';
   

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            cargo: '',
            jobs: [] //vai ser para a lista
        };
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
              
                <Title> Nome </Title>
                <Input autoCapitalize="none" autoCorret={false} value={this.state.nome} onchageText={(nome)=> this.setState({nome: nome})} />
               
                <Title> Cargo </Title>
                <Input autoCapitalize="none" autoCorret={false} value={this.state.cargo} onchageText={(cargo)=> this.setState({cargo: cargo})} />

                <CenterView>
                    <Botao>
                        <BotaoText>Cadastrar</BotaoText>
                    </Botao>

                </CenterView>

                <List keyboardShouldPersistTaps="handled" 
                    data={[{
                        id: 1,
                        nome: 'José',
                        cargo: 'Programador React JS e Kotlin',
                        
                    }]}
                    keyExtractor={item => String(item.id)}
                    renderItem={ ({item})=> (
                        <Jobs data={item} />
                    )}
                />
                
            </Container>    
           
        )
    }
}
