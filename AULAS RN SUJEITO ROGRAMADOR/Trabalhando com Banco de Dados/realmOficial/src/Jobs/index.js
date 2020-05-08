import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {Container, Nome, Cargo, CenterView, EditItem, EditText} from './style'

export default class Jobs extends Component {
    render() {
        return (
            <Container>
               <Nome>{this.props.data.nome} </Nome>
               <Cargo>{this.props.data.cargo} </Cargo>

               <CenterView>
                   <EditItem onPress={()=> {}}>
                       <EditText>Editar</EditText>
                   </EditItem>

                   <EditItem onPress={()=> {}}>
                       <EditText>Excluir</EditText>
                   </EditItem>
               </CenterView>
            </Container>
        )
    }
}
