import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableHighlight, Button } from 'react-native';


export default class HomeList extends Component{

    constructor(props) {
        super(props);
            this.state ={
                    list:[
                            {
                                key:'1',
                                title:'Prato Executivo',
                                img:require('../assets/images/tipos/pe.png'),
                                descripiton:'Pratos Prontos.',
                                bg: '#e35339',
                                products:[
                                    {key:'5', name: 'Prato de Frango', img:require('../assets/images/cardapio/pe/executivos_frang_.png')},
                                    {key:'6', name: 'Prato de Peixe', img:require('../assets/images/cardapio/pe/executivos_peix_.png')},
                                    {key:'7', name: 'Prato de Picanha', img:require('../assets/images/cardapio/pe/executivos_picanh_.png')},

                                ]
                        },
                        {   
                                key:'2',
                                title:'Saladas',
                                img:require('../assets/images/tipos/saladas.png'),
                                descripiton:'Pratos saudaveis para você.',
                                bg: '#a6bb24',
                                products:[
                                    {key:'8', name: 'Salada de Frango', img:require('../assets/images/cardapio/saladas/salada-fr.png')},
                                    {key:'9', name: 'Salada Agua Doce', img:require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                                    {key:'10', name: 'Salada de Salmão', img:require('../assets/images/cardapio/saladas/salada_salma.png')},

                                ]
                        },
                        {       
                                key:'3',
                                title:'Bebidas',
                                img:require('../assets/images/tipos/bebidas.png'),
                                descripiton:'Sucos e Vitaminas.',
                                bg: '#079ed4',
                                products:[
                                    {key:'11', name: 'Caipirinha', img:require('../assets/images/cardapio/bebidas/capirosc_3.png')},
                                    {key:'12', name: 'Cookie Cream', img:require('../assets/images/cardapio/bebidas/cookies_crea.png')},
                                    {key:'13', name: 'Morango GD', img:require('../assets/images/cardapio/bebidas/morango_gd.png')},
                                    {key:'14', name: 'Prata', img:require('../assets/images/cardapio/bebidas/patra.png')},
                                    {key:'15', name: 'Suco Fitness', img:require('../assets/images/cardapio/bebidas/suco_fitines_gd.png')},

                                ]
                        },
                        {       
                                key:'4',
                                title:'Sobremesas',
                                img:require('../assets/images/tipos/sobremesa.png'),
                                descripiton:'Sobremesas.',
                                bg: '#fcb81c',
                                products:[
                                    {key:'16', name: 'Brownie', img:require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
                                    {key:'17', name: 'Creme papaya', img:require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                                    {key:'18', name: 'Delicia Gelada', img:require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')}
                                ]
                        }
                        
                    ]
          }
    }


    render(){
        return(
            <View style={styles.container}>
            

           <FlatList  data={this.state.list} 
           renderItem={({item})=> < Lista data={item}  navigation={this.props.navigation} />} 
            /> 


        {/*<Button title='Ir Para Homeproducts' onPress={()=> this.props.navigation.navigate("HomeProducts")} /> */}
            </View>
        );
    }
}


        class Lista extends Component{

            constructor(props){
                super(props);
                this.state = {};

                this.clicou =this.clicou.bind(this);

            }

            clicou(){
                this.props.navigation.navigate('HomeProducts', {title:this.props.data.title, products:this.props.data.products});
            }
            
            render(){
                return(
                    <TouchableHighlight underlayColor='#ccc'  onPress={this.clicou}  >
                       
                        <View  style={[styles.listaItem, {backgroundColor:this.props.data.bg}]}>
                             <Image source={this.props.data.img} style={styles.listaImagem}  />
                           <View>  
                                <Text style={styles.listaTitle} >{this.props.data.title}</Text>
                                <Text style={styles.listaDescripition} >{this.props.data.descripiton}</Text>
                           </View>
                                
                        </View>                        
                    </TouchableHighlight>

                );
            }
        }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10
    },
    Titulo:{
        color:'#fff',
        fontSize: 20
    },
    
    listaItem:{
        height: 100,
        flex:1,
        alignItems:'center',
        flexDirection: 'row',
        
        
    },
    listaImagem:{
        width: 64,
        height: 64,
        marginLeft: 20,
        marginRight:20
    },
    listaTitle:{
        color: '#fff',
        fontSize:25,
        fontWeight:'bold'
    },
    listaDescripition:{
        color: '#fff',
        fontSize:16
    }
})

       

   