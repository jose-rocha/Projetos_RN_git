import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight, Image} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReceitaResumo from './ReceitaResumo';
import ReceitaIngredientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';

const Abas = createBottomTabNavigator({
    ReceitaResumo:{
        screen: ReceitaResumo,   
    },
    ReceitaIngredientes:{
        screen: ReceitaIngredientes
    },
    ReceitaModo:{
        screen: ReceitaModo
    },
    
},{
  tabBarPosition:'Top'
});




export  class Receita extends Component{
        constructor(props){
            super(props);
            this.state = {};

            this.goBack = this.goBack.bind(this);
        }

        goBack(){
            this.props.navigation.goBack();
        }

    render(){
        return(
            <View style={styles.container}>
        {/* <Button title="Voltar" onPress={()=> this.props.navigation.goBack()} /> */}
                <TouchableHighlight underlayColor='#ccc' onPress={ this.goBack} style={styles.backButtom}>
                    <Image source={require('../assets/images/back.png')} style={styles.backImage} />
                </TouchableHighlight>
                <Image  source={{uri:this.props.navigation.state.params.imagem}} style={styles.receitaImagem} />
                <Abas />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
        
    },
    backButtom:{
        width:26,
        height: 26,
        marginLeft:10,
        marginTop:5,
        zIndex:99
    },
    backImage:{
        width: 26,
        height: 26, 
        
        
    },
    receitaImagem:{
        height: 200,
        marginTop:-51

    }
});


export  default Abas;