import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';
//console.disableYellowBox = true


const NavegaTelas = createBottomTabNavigator({

    Home: {
        screen:Home,
        navigationOptions:{
            tabLabel:'',
            tabBarIcon:({focused, tintColor})=> {
                if(focused){
                    return  (
                        <Image  source={require('./assets/images/home_azul.png')} style={styles.icone} />
                    )
                } else {
                    return  (
                        <Image  source={require('./assets/images/home_preto.png')} style={styles.icone} />
                    )
                }
            },
           
            

        }
        
    },

    Contato:{
        screen:Contato,
        navigationOptions:{
            tabLabel:'',
            tabBarIcon:({focused, tintColor})=> {
                if(focused){
                    return  (
                        <Image  source={require('./assets/images/contato_azul.png')} style={styles.icone} />
                    )
                } else {
                    return  (
                        <Image  source={require('./assets/images/contato_preto.png')} style={styles.icone} />
                    )
                }
            }
            

        }
    },
    Horarios:{
        screen: Horarios,
        navigationOptions:{
            tabLabel:'',
            tabBarIcon:({focused, tintColor})=> {
                if(focused){
                    return  (
                        <Image  source={require('./assets/images/horario_azul.png')} style={styles.icone} />
                    )
                } else {
                    return  (
                        <Image  source={require('./assets/images/horario_preto.png')} style={styles.icone} />
                    )
                }
            }
            

        }
    },
    Sobre:{
        screen: Sobre,
        navigationOptions:{
            tabLabel:'',
            tabBarIcon:({focused, tintColor})=> {
                if(focused){
                    return  (
                        <Image  source={require('./assets/images/sobre_azul.png')} style={styles.icone} />
                    )
                } else {
                    return  (
                        <Image  source={require('./assets/images/sobre_preto.png')} style={styles.icone} />
                    )
                }
            }
            

        }
    }


});


const styles = StyleSheet.create({
    icone:{
        width:20,
        height: 20
    }
})




export default createAppContainer (NavegaTelas);