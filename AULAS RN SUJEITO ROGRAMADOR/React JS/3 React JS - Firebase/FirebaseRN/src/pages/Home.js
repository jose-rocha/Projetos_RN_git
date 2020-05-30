import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

import firebase from 'firebase';

//console.disableYellowBox = true;


export default class Home extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          tokenInput: '',
          nomeInput: '',
          token: 'Carregando...',
          nome:'Carregando...',
          idade: 'Carregando...'
        };
    
        this.cadastrar =this.cadastrar.bind(this);
        this.atualizarNome = this.atualizarNome.bind(this);


       
    
      }

      componentDidMount(){
        
        let firebaseConfig = {
          apiKey: "AIzaSyC8Np2uvBplX9G33TV0SAeMpUW0ITO9Eys",
          authDomain: "reactjsapp-dab24.firebaseapp.com",
          databaseURL: "https://reactjsapp-dab24.firebaseio.com",
          projectId: "reactjsapp-dab24",
          storageBucket: "reactjsapp-dab24.appspot.com",
          messagingSenderId: "410078304504",
          appId: "1:410078304504:web:24313a8e9e55db75bc830d",
          measurementId: "G-81ZRGZ06L5"
        };
        // Initialize Firebase
        if (!firebase.apps.length)
        firebase.initializeApp(firebaseConfig);
    
    
     /*   //Aqui é um olheiro em realtime  por causa do on.('value'), 
          //muda em tempo real quando alguma coisa é alterada no banco.
       firebase.database().ref('token').on('value', (snapshot)=>{
       let state = this.state;
       state.token = snapshot.val();
       this.setState(state);
    
        }); */
    
        //Aqui é um olheiro mas não em realtime  por causa do once.('value') se for on.('value') fica realtime,
        //só muda  quando quando dá um refreshná página.
        firebase.database().ref('token').on('value',(snapshot)=>{
          let state = this.state;
          state.token = snapshot.val();
          this.setState(state);
        });
    
        //Olheiro do nome
        firebase.database().ref('usuarios').child(1).child('nome').on('value', (snapshot)=>{
          let state = this.state;
          state.nome = snapshot.val();
          this.setState(state);
        });
    
        
    
      
      }


      cadastrar(){
        //inserindo/criando  dados no banco
       //   alert('t//');

        firebase.database().ref('token').set(this.state.tokenInput);
        this.state.tokenInput = "";

      }


      atualizarNome(){
          firebase.database().ref('usuarios').child(1).child('nome').set(this.state.nomeInput);
      }
    
      //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
      render() {
        const {token, nome} = this.state;  //desconstruindo
        return (
         
          <View style={styles.container}>
            
            <View style={styles.form} >

                  
                    <TextInput autoCapitalize="none" 
                    autoCorrect={false} 
                    value={this.state.tokenInput}
                    onChangeText={(tokenInput)=> this.setState({tokenInput: tokenInput})} 
                    placeholder="Digite seu token" style={styles.input} 
                    
                    />

                  {/*  <Button title="Gerar Token" onPress={()=> this.cadastrar()} /> */}

                  <TouchableOpacity onPress={()=> this.cadastrar()} style={styles.TouchButton} >
                        <Text style={styles.TextButton} > Cadastrar Token</Text>
                  </TouchableOpacity>


                  <TextInput autoCapitalize="none" 
                    autoCorrect={false} 
                    value={this.state.nomeInput}
                    onChangeText={(nomeInput)=> this.setState({nomeInput: nomeInput})} 
                    placeholder="Atualize seu nombre" style={styles.input}  
                    
                    />

                  { /* <Button title="Atualizar Idade" onPress={()=> this.atualizarIdade()} /> */}
                    
                    <TouchableOpacity onPress={()=> this.atualizarNome()} style={styles.TouchButton} >
                        <Text style={styles.TextButton} > Atualizar Nome</Text>
                    </TouchableOpacity>

                  { /* <Button title="Atualizar Idade" onPress={()=> this.atualizarIdade()} /> */}

                   

                    <Text style={styles.texto} >Token: {token} </Text>
                    <Text style={styles.texto} >Nome: {nome} </Text>
                   
            </View>        

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Tela2')} style={styles.TouchButton} >
                        <Text style={styles.TextButton} > Ir para Tela 2</Text>
                    </TouchableOpacity>

          </View>
        )
      }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    texto:{
        fontSize: 25,

    },
    form:{
        
        backgroundColor: '#0fd',
        height: 450,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },

    input:{
      borderWidth: 2,
      borderRadius: 5,
      width: '66%',
      marginBottom: 10,
      marginTop: 10
      
    },
    TouchButton:{
      width: '65%',
      height:50,
      borderRadius: 5,
      backgroundColor: '#836FFF',
      justifyContent: 'center',
      alignItems: 'center'

    },
    TextButton:{
      fontSize: 18,
      color: '#fff'
    }
})



