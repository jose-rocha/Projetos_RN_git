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
        }
    };

    this.moverCidade = this.moverCidade.bind(this);
}

moverCidade(lat, long){
    let state = this.state;
    let region = {
                latitude: lat,
                longitude:long,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421
    };
    state.region = region;
    this.setState(state);
}
    render(){
        const {region} = this.state;
    return(
        
        <View style={styles.Conatiner}>
            <Text style={{fontWeight: 'bold'}}>UberMaps</Text>

            <MapView 
            style={styles.mapa}
            region={region}
            />

        <View style={{flexDirection: 'row'}}>
            <Button title={'Brasilia'} onPress={()=> {this.moverCidade(-15.808037, -47.8750231)}} />
            <Button title={'São Paulo'} onPress={()=> {this.moverCidade(-23.5505, -46.6333)}} />
            <Button title={'SBC-SP'} onPress={()=> {this.moverCidade(-23.6916052, -46.5664753)}} />
        </View>

        <Text>{region.latitude} | {region.longitude} </Text>
        
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
        width:'100%' 
    }
});