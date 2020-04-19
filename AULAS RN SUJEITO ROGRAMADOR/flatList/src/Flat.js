import React, {Component} from 'react';
import{View, Text, StyleSheet , FlatList} from 'react-native';

import Lista from './Lista';

export default class Flat extends Component{

    constructor(props){
       super(props);
       this.state = {
           list:[
               {
                   key: 1,
                   title: 'Bolo de Cenoura',
                   img: require('./images/bolo_cenoura.jpg'),
                   obs: 'Esse Bolo de Cenoura com cobertura de chocolate é muito delicioso'
               },
               {
                   key: 2,
                title: 'Bolo com Pão de Queijo',
                img: require('./images/bolopq.jpg'),
                obs: 'Bolo com café e pão de queijo, hum!'
               }
           ]

       };
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList data={this.state.list} keyExtractor={item => item.key.toString()} renderItem={({item})=> <Lista data={item} /> } />
                
            </View>
        );

    }
}



const styles = StyleSheet.create({
    container:{
        flex:1

    }
})