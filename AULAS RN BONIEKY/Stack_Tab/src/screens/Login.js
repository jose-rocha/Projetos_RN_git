import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';


export default class Login extends Component{
    render(){
        return(
            <View>
                <Text style={styles.textInputs}>User</Text>

                <TextInput  style={styles.inputs} />

                <View>

                <Text style={styles.textInputs} >Password</Text>

                <TextInput style={styles.inputs}  secureTextEntry={true} />
               
               <Image source={require('../images/Eye.png')} style={{height:20, width:20, marginTop: -35, marginLeft:330}} />
                
              </View>

                <View style={{paddingTop: 25}} >
                 <Button title='Fazer Login' onPress={()=> this.props.navigation.navigate('HomeTab')}  />  
                 </View>

                <Text style={{textAlign: 'center', fontSize: 20, paddingTop:15}}>Tela de Login</Text>

                    <View style={{alignItems: 'center'}}>
                        
                        <Image source={require('../images/baseline_people_black_18dp.png')}  
                        style={{width: 50, height: 50, }} />
                        
                        
                    </View>   

                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputs:{
        fontWeight:'bold',
        paddingTop: 15
    },
    inputs:{
        backgroundColor:'grey',
        borderRadius:5
    }
});