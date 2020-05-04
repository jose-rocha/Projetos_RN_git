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
            {key: 0, coords:{latitude:-23.5505, longitude: -46.6333}, pinColor:'#ff0000' },
            {key: 1, coords:{latitude:-23.5805, longitude: -46.6633}, pinColor:'#ff00ff'}
        ]
       
    };
this.newMarker = this.newMarker.bind(this);
 
}

newMarker(e){
    let state = this.state;
    state.markers.push({
        key:state.markers.length,
        coords:{
        latitude:e.nativeEvent.coordinate.latitude,
        longitude:e.nativeEvent.coordinate.longitude
        },
        pinColor: '#ff0000'
    });

    this.setState(state);
}


    render(){
        const {region, markers} = this.state;

    return(
        
        <View style={styles.Conatiner}>
            
            <Text>{region.latitude} | {region.longitude} </Text>
            <Text style={{fontWeight: 'bold'}}>UberMaps</Text>
          
            <MapView 
            onPress={this.newMarker}
            style={styles.mapa}
            region={region}            
            >
                
            {markers.map((marker)=> {
                return(
                    <Marker key={marker.key} coordinate={marker.coords} pinColor={marker.pinColor} />
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
