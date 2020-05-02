import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class UberMaps extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            region:{
                latitude: -23.5505,
                longitude:-46.6333,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421
        },
        texto: ''
       
    };

 //   this.minhAcao = alert('Mapa Totalmente Carregado!');

    //this.mudouMapa = this.mudouMapa.bind(this);
    this.clicou = this.clicou.bind(this);
}

mudouMapa(region){
    let state  = this.state;
    state.texto = region.latitude;
    state.region ={
                latitude:region.latitude,
                longitude:region.longitude,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421
    }
    this.setState(state);
}

clicou(e){
    alert('Latitude Clicada: ' + e.nativeEvent.coordinate.latitude + '\nLongitude: ' + e.nativeEvent.coordinate.longitude);
}
    render(){
        const {region, texto} = this.state;

    return(
        
        <View style={styles.Conatiner}>
            <Text>{region.latitude} | {region.longitude} </Text>
            <Text style={{fontWeight: 'bold'}}>UberMaps</Text>
            <Text>Latitude Atual</Text>
            <Text>{texto}</Text>

            <MapView 
            //onMapReady={()=> this.minhAcao}
            //onRegionChangeComplete = {this.mudouMapa}
            onPress={this.clicou}
            style={styles.mapa}
            region={region}
            />

    
        
        </View>
    )
}
}

const styles = StyleSheet.create({
    Conatiner:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
       
    },
    mapa:{
        height:550,
        width:'100%' ,
        flex:1
    }
});