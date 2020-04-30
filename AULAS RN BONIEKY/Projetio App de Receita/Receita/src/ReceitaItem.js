import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TouchableHighlight} from 'react-native';


export default class ReceitaItem extends Component{

        constructor(props){
            super(props);
            this.state = {};

        }


    render(){
        return(
            <TouchableHighlight onPress={this.props.onPress} underlayColor='#999' >
               <View style={styles.area}> 
                <Image  resizeMode='contain' source={{uri:this.props.data.imagem}} style={styles.image}  />
                <View style={styles.areaInfo} >
                    <Text style={styles.nome} >{this.props.data.nome}</Text>
                    <Text style={styles.info} >{this.props.data.rendimento} porções - {this.props.data.preparo} minutos </Text>
                </View>
              </View> 
            </TouchableHighlight>
        );
    }
}

const styles =StyleSheet.create({
    area:{
        flex:1,
        flexDirection: 'row',
        height: 80,
        borderBottomWidth: 1,
        borderColor:'#ccc'
    },
    image:{
        width: 100,
        height: 70,
        marginTop: 5,
        marginLeft: 10
    },
    areaInfo:{
        flex:1,
        flexDirection: 'column',
        marginLeft:10,
        margin:10
    },
    nome:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    info:{
        color: '#999'
    }
})