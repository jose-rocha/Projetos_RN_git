import React, {Component} from 'react';
import { View, Text, StyleSheet ,Button } from "react-native";

export default class Feed extends Component{
    render(){
        return(
            <View style={styles.body}>
                <Text>Feed</Text>

                <Button title="Ir para Perfil" onPress={()=>this.props.navigation.navigate('Perfil')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

