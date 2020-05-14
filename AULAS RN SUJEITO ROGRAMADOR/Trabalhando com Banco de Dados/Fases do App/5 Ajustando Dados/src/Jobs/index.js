import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {Container, Nome, Cargo, CenterView, EditItem, EditText} from './style'

export default class Jobs extends Component {

    render() {
        return (
            <Container>
               <Nome>id: {this.props.data.id} User: {this.props.data.nome} </Nome>
               <Cargo><Text style={{fontWeight: "bold"}}>Função: </Text>
               {this.props.data.cargo} 
               </Cargo>

               <CenterView>
                   <EditItem onPress={()=> {this.props.editar(this.props.data)}}>
                       <EditText>Editar</EditText>
                   </EditItem>

                   <EditItem onPress={()=> {this.props.excluir(this.props.data)}}>
                       <EditText>Excluir</EditText>
                   </EditItem>
               </CenterView>
            </Container>
        )
    }
}
