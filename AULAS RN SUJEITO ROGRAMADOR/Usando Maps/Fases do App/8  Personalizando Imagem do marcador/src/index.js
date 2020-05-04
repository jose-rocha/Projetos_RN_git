import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView,  {Marker} from 'react-native-maps';

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
        markers:[
            {key: 1, image:require('../assets/images/carro_down.png'), coords:{latitude:-23.5505, longitude: -46.6333} },
            {key: 2, image:require('../assets/images/carro_left.png'), coords:{latitude:-23.5805, longitude: -46.6633} }
        ]
       
    };

 
}



    render(){
        const {region, markers} = this.state;

    return(
        
        <View style={styles.Conatiner}>
            
            <Text>{region.latitude} | {region.longitude} </Text>
            <Text style={{fontWeight: 'bold'}}>UberMaps</Text>
          
            <MapView 
            showsTraffic={true}
            style={styles.mapa}
            region={region}            
            >
                
            {markers.map((marker)=> {
                return(
                    <Marker image={marker.image} key={marker.key} coordinate={marker.coords} pinColor={marker.pinColor} />
                )
            })}

            </MapView>
    
        
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