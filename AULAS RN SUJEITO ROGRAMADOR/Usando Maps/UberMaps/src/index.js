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