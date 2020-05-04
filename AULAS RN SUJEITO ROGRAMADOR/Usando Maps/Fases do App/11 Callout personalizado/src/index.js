
import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import Pin from './Pin';


export default class App extends Component {

  
  constructor(props){
    super(props);
    this.state = {
      region:null,
      markers:[
        {key: 1, aviso: 'Cuidado',  coords:{latitude:-23.7460000, longitude: -46.5280000}, pinColor: 'red' },
        {key: 2, aviso: 'Tranquilo', coords:{latitude:-23.7444467, longitude: -46.5265436}, pinColor: 'green' }
    ]
   
    };

  }

  
  async componentDidMount(){
   await Geolocation.getCurrentPosition(
    async  ({ coords:{latitude, longitude} })=>{
        this.setState({
          region:{
            latitude,
            longitude,
            latitudeDelta:0.0015,
            longitudeDelta:0.0121
          }
        });
      },
      ()=>{  }, //ERRO
      {
        timeout:3000,
        maximumAge:2000,
      }
    )
  }





  render() {
    const {region, markers} = this.state;
   
    
    return (
      
      <View style={styles.container}>
         
        <MapView
          ref={(map)=>{this.map = map}}

       
          
          style={styles.mapa}
          region={region}
          showsUserLocation
          loadingEnabled
        >
            {markers.map((marker)=> {
                return(
                    <Marker key={marker.key} coordinate={marker.coords}  >
                        
                          <Pin aviso={marker.aviso} corFundo={marker.pinColor} />

                          <Callout tooltip={true}>
                            <View style={{backgroundColor: '#ddd', width: 200, height: 150 }}>
                              <Text style={{fontSize: 18}}>Olá ....</Text>
                            </View>
                          </Callout>
                        
                     </Marker> 
                );
            })
            }

        </ MapView>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapa:{
    width:'100%',
    height:550,
    marginTop: 15
  }
});