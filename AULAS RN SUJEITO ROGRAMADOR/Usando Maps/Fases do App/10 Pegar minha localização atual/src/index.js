
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


export default class App extends Component {

  
  constructor(props){
    super(props);
    this.state = {
      region:null
    };

  }

  
  async componentDidMount(){
   
   await Geolocation.getCurrentPosition(
    async  ({ coords:{latitude, longitude} })=>{
        this.setState({
          region:{
            latitude,
            longitude,
            latitudeDelta:0.03,
            longitudeDelta:0.04
          }
        });
      },
      ()=>{  }, //ERRO
      {
        timeout:2000,
        maximumAge:1000,
      }
    )
  }





  render() {
    const {region} = this.state;
   
    
    return (
      
      <View style={styles.container}>
         
        <MapView
        showsTraffic={true}
          mapType="hybrid"
          minZoomLevel={6}
          style={styles.mapa}
          region={region}
          showsUserLocation
          loadingEnabled
        />
  
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