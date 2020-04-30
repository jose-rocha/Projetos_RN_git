import React, {Component} from 'react';
import {View, Text, StyleSheet,  Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class HomeProducts extends Component{
        constructor(props){
            super(props);
            this.state = {
                list:props.navigation.state.params.products
            };
        }

    render(){
        return(
            <View style={styles.container}>
               <FlatList  
                data={this.state.list}
               renderItem={({item})=> <ProductItem data={item}  />}
               />
            </View>
        )
    }
}

class ProductItem extends Component{

    constructor(props){
        super(props);
        this.state ={};
    }


    render(){
        return(
            <View style={styles.productItem} >
                <Image resizeMode="contain" source={this.props.data.img} style={styles.productImagem}  />
               <Text style={styles.productName}  >{this.props.data.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ccc'
        
    },
    Titulo:{
        color:'#fff',
        fontSize: 20
    },
    productItem:{
        height: 100,
        backgroundColor:'#fff',
        margin:10,
        borderRadius:5,
        padding: 10,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    productImagem:{
        height:80,
        width:150
    },
    productName:{
        fontSize:16,

    }
})