
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {getPixel} from './utils';
import Pin from './Pin';


export default class App extends Component {

  
  constructor(props){
    super(props);
    this.state = {
      region:null,
      destLocation: null
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
        enableHighAccuracy: false,
        maximumAge:2000,
      }
    )
  }





  render() {
    const {region, } = this.state;
   
    
    return (
      
      <View style={styles.container}>
         
        <MapView
          ref={(map)=>{this.map = map}}
          style={styles.mapa}
          region={region}
          showsUserLocation
          loadingEnabled
        >
          
          {this.state.destLocation &&
            <MapViewDirections  
              origin={this.state.region}
              destination={this.state.destLocation}
              apikey="AIzaSyB1Z9KJesk94fXXzkPg87ocnyN7P5RX2GY"
              strokeWidth={5}
              strokeColor='#000'
              onReady={result => {
                this.map.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: getPixel(50) ,
                    left:getPixel(50),
                    top:getPixel(50),
                    bottom: getPixel(50)
                  }
                })
              }}
            />

          }

        </ MapView>
  
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>
            
            <View style={styles.localView}>
              <TouchableOpacity style={styles.localBtn} onPress={()=> {
                this.setState({destLocation:{
                  latitude:-23.712222,
                  longitude: -46.5517265
                }})
              }}>
                  <Text style={styles.localText}>Burger King</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.localView}>
              <TouchableOpacity style={styles.localBtn}>
                  <Text style={styles.localText}>Shopping</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.localView}>
              <TouchableOpacity style={styles.localBtn}>
                  <Text style={styles.localText}>Farmácia</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.localView}>
              <TouchableOpacity style={styles.localBtn} onPress={()=>{
                this.setState({destLocation:{
                  latitude: -23.7378769,
                  longitude:  -46.5292091 
                }})
              }}>
                  <Text style={styles.localText}>Empresa</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.localView} >
              <TouchableOpacity style={styles.localBtn} onPress={()=>{
              this.setState({destLocation:{
                latitude:-23.7067507,
                longitude: -46.5526447
              }})
            }}>
                  <Text style={styles.localText}>Correios</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
      </View>


          /* Burger King: Latitude = -23.712222, Longitude = -46.5517265
             Empresa: Latitude = -23.7378769,  Longitude = -46.5292091 
             Correios: Latitude = -23.7067507,  Longitude = -46.5526447 
          */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  mapa:{
    flex: 1
  },
  box:{
    position: 'absolute',
    top: 30,
    margin: 10,
    height: 70
  },
  localView:{
    height:40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localBtn:{
    backgroundColor: '#ff0000',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localText:{
    color: '#fff'
  }
});