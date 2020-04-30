import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';

export default class Specs extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor:"#999"}}>

                <Text style={{textAlign: 'center', fontSize: 20, }}>Tela de Especs</Text>
               
                   <TouchableOpacity onPress={()=> this.props.navigation.navigate('Configs')}  >
                        <Text style={{textAlign: 'center', fontSize: 30,}}>
                        <Image source={require('../images/settings.png')} /> Settings
                        </Text>
                  </TouchableOpacity>  
                
            </View>
        );
    }
}