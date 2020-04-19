import React, {Component} from 'react';
import{View, Text, StyleSheet , FlatList, Image, TouchableOpacity} from 'react-native';

export default class Lista extends Component{
    render(){
        const {img, obs, title} = this.props.data;
        return(
            <View>

                <View style={styles.card}>
                    <Text style={styles.titulo}>{title} </Text>
                    <Image  source={img} style={styles.capa} />

                    <View style={styles.areaBotao}>
                    <TouchableOpacity  onPress={()=> alert(obs)} style={styles.botao}>
                        <Text style={styles.botaoTexto}>Frase Sobre a Refeição</Text>
                    </TouchableOpacity>
                </View>
               
                </View>

               
                
            </View>
        );

    }
}



const styles = StyleSheet.create({
    card:{
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius:5,
        borderRadius: 5,
        elevation: 3
    },     
    titulo:{
        fontSize:18,
        padding:15
    },
    capa:{                  
        height: 310,
        width:330,
        zIndex: 2
    },
    areaBotao: {
        alignItems:'flex-end',
        marginTop: -40,
        zIndex:9
    },
    botao: {
        width:100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding:8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius: 5
    },
    botaoTexto:{
        fontSize:15,
        color: '#fff'
    }

})