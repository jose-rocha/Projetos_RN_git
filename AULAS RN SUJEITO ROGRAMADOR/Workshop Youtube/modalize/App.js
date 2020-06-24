import React, { useRef } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Modalize} from 'react-native-modalize';

export default function App()   {

    const modalize = useRef(null);

    function onOpen(){
        modalize.current?.open();
    }

   
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={onOpen} >
                    <Text style={styles.text} > ABRIR MODALIZE </Text>
                </TouchableOpacity>

                <Modalize
                    ref={modalize}
                    snapPoint={180}
                    modalHeight={360}
                >
                        <View style={styles.modalize}>
                            <TouchableOpacity style={[styles.modalizeBotao, {backgroundColor: '#29ae19'}]} onPress={()=> alert('Editar')}>
                                <Text>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalizeBotao, {backgroundColor: '#ff0000'}]} onPress={()=> alert('Excluir')}>
                                <Text>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                </Modalize>

            </View>
        )
    }


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "gray",
        
        
    },
    text:{
        color: "#fff",
        fontSize: 25
    },
    modalize:{
        flex:1,
        height:180,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    modalizeBotao:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 7
    }
})