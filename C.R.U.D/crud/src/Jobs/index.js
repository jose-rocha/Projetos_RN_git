import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Container, Nome, Cargo, CenterView, EditItem, EditText} from './style';

export default class Jobs extends Component {
    render() {
        return (
            <Container>
                <Nome> id: <Text style={{fontWeight: 'normal'}}> {this.props.data.id} 
                </Text> Nome: <Text style={{fontWeight: 'normal'}}> {this.props.data.nome}</Text>  </Nome>

                <Cargo>Cargo: <Text style={{fontWeight: 'normal'}}> {this.props.data.cargo} </Text>  </Cargo>

                <CenterView>
                    <EditItem onPress={()=> {this.props.editar(this.props.data)}}>
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
