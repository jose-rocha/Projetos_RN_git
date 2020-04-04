import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet, Button} from 'react-native';

export default class Configs extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor:false 

        };
    }


    render(){
        return(
            <View >
                <View style={styles.switch}>
                  <Switch value={this.state.valor} onValueChange={(v)=> this.setState({valor: v})} />
        <Text>{(this.state.valor)?'Selecionado':'Não Selecionado'}</Text>
               </View>

               <View style={{paddingTop: 25}} >
                 <Button title='Ir para tela de Contatos' onPress={()=> this.props.navigation.navigate('Contato')}  />  
                 </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    switch:{
        alignItems: 'flex-start'
    }
});

