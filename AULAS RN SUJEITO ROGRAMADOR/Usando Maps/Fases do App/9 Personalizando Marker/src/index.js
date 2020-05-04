import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView,  {Marker} from 'react-native-maps';
import Pin from './Pin';

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
            {key: 1, aviso: 'Cuidado',  coords:{latitude:-23.5505, longitude: -46.6333}, pinColor: 'red' },
            {key: 2, aviso: 'Tranquilo', coords:{latitude:-23.5705, longitude: -46.6533}, pinColor: 'green' }
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
                    <Marker key={marker.key} coordinate={marker.coords}  >
                        
                          <Pin aviso={marker.aviso} corFundo={marker.pinColor} />
                        
                     </Marker> 
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
    },
   
});
