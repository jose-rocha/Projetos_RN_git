import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView, FlatList } from 'react-native';



export default class Dash extends Component {
constructor(props){
    super(props);
    this.state = {
        historico:[
            
            {id: "1", title: "Histórico de Gastos", local: "Açougue", dataCompra: "19-05-2020", horario: "12:23", opcao:"Crédito", valor: "88,00"},
            {id: "2", title: "Histórico de Gastos", local: "Padaria Pão de Queijo", dataCompra: "20-05-2020", horario: "06:30", opcao:"Débito", valor:"12,77"},
            {id: "3", title: "Histórico de Gastos", local: "Varejão SL", dataCompra: "20-05-2020", horario: "18:53", opcao:"Crédito", valor:"27,53"},
            {id: "4", title: "Histórico de Gastos", local: "Mercadinho do João", dataCompra: "21-05-2020", horario: "15:53", opcao:"Débito", valor:"33,00"},
        ]
    }
}

    render() {
        return (
            <View style={styles.Container}>

                <FlatList 
                    data={this.state.historico}
                    keyExtractor={(item)=> item.id}
                    renderItem={ ({item})=> <Compras data={item}/>}
                />
            { /*<ScrollView >
                
                   
                    <View style={styles.box}>
                         <Text>{this.state.nome}</Text>
                         <Text>{this.state.funcao}</Text>
                    </View>
                    <View style={styles.box} ></View>
                    <View style={styles.box} ></View>

            </ScrollView> */}

            </View>
        )
    }
}

class Compras extends Component{
    render(){
        return(
            <View style={styles.box}>
                <Text style={{fontSize: 26, textAlign: 'center', color: '#7159c1'}}> {this.props.data.title} </Text>

                <Text style={styles.textoTitulo}> Local da compra:  </Text>
                  <Text style={styles.info}> {this.props.data.local}</Text>

                <Text style={styles.textoTitulo} > Data da Compra  </Text>
                <Text style={styles.info}> {this.props.data.dataCompra} às {this.props.data.horario} hrs </Text>

                <Text style={styles.textoTitulo}> Débito/Crédito  </Text>
                <Text style={styles.info}> {this.props.data.opcao}  </Text>

                <Text style={styles.textoTitulo}> Valor da Compra  </Text>
                <Text style={styles.textoTitulo}> R$<Text style={styles.info}>{this.props.data.valor}</Text>   </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#ADD8E6'
    },
    texto:{
        fontSize: 20,
        color: '#fff'
    },
    box: {
        backgroundColor: '#f0f0f0', 
        width: 330, 
        height: 270, 
        margin: 15,
        borderRadius: 10
    },
    textoTitulo:{
        fontWeight: 'bold',
        fontSize:20,
        paddingTop: 3,
    },
    info:{
        fontSize: 18,
        fontWeight: 'normal'
    }
})


