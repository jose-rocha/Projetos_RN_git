import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Login extends Component {
  constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        }

   this.logar = this.logar.bind(this);
}

logar(){
    if(this.state.user === 'josemarlerocha@gmail.com' && this.state.password === '123' ){
    this.props.navigation.navigate('Filmes')

   } if(this.state.user != 'josemarlerocha@gmail.com' || this.state.password != '123'){
       alert('user ou password incorretos!')
   } 

}


    render() {
        return (
            <View style={styles.Container}>
                <Icon name='file-movie-o' size={100} color='#fff'/>

                
                <TextInput 
                placeholder='Digite seu user' 
                style={styles.input} autoCapitalize="none" 
                autoCorrect={false} 
                value={this.state.user} 
                onChangeText={user => this.setState({user})}
                />

                
                <TextInput 
                placeholder='Digite seu password' 
                secureTextEntry={true} 
                style={styles.input}
                value={this.state.password} 
                onChangeText={password => this.setState({password})} 
                />

                <TouchableOpacity 
                    onPress={this.logar} 
                    style={styles.btn}
                    >
                    <Text style={styles.btnLogar}>Logar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    
    input:{
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 5,
        fontWeight: "bold",
        margin: 5,
        marginTop: 10
    },
    btn:{
        marginTop: 10,
        backgroundColor: '#3498db',
        height: 50,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnLogar:{
        color: '#fff',
        fontSize:25
    }
})

/*<Text> Login </Text>

<TouchableOpacity onPress={()=>this.props.navigation.navigate('Filmes')}
 style={{
    backgroundColor: '#2c3e50', width: '30%', height: '18%',
    borderRadius: 5, 
    alignItems: "center", justifyContent: 'center'}}
>
    <Text style={{color: '#fff'}}>Ir para filmes</Text>
</TouchableOpacity>

*/