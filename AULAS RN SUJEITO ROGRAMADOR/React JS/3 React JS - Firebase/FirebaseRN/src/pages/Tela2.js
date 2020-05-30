import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

import firebase from 'firebase';

//console.disableYellowBox = true;


export default class index extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          idadeInput: '',
          cargoInput: '',
          cargo: 'Carregando...',
          idade: 'Carregando...'
        };
    
        
        this.atualizarIdade = this.atualizarIdade.bind(this);
        this.atualizarCargo = this.atualizarCargo.bind(this);

      
    
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
   
       
    
        //Olheiro da idade 
        firebase.database().ref('usuarios').child('1').child('idade').on('value', (snapshot)=>{
          let state = this.state;
          state.idade = snapshot.val();
          this.setState(state);
        });

         //Aqui é um olheiro cargo se for on.('value') fica realtime,
        //só muda  quando quando dá um refreshná página.
        firebase.database().ref('usuarios').child(1).child('cargo').on('value',(snapshot)=>{
            let state = this.state;
            state.cargo = snapshot.val();
            this.setState(state);
          });
    
      }


     

      atualizarIdade(){
          firebase.database().ref('usuarios').child(1).child('idade').set(this.state.idadeInput);
          this.state.idadeInput = "";
          
      }

      atualizarCargo(){
          firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.cargoInput);
          this.state.cargoInput = "";
      }
    
      //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
      render() {
        const {idade, cargo} = this.state;  //desconstruindo
        return (
         
          <View style={styles.container}>
            
            <View style={styles.form} >


                    <TextInput autoCapitalize="none" 
                    autoCorrect={false} 
                    value={this.state.idadeInput}
                    onChangeText={(idadeInput)=> this.setState({idadeInput: idadeInput})} 
                    placeholder="Atualize a idade" style={styles.input} keyboardType="numeric" 
                    
                    />

                  { /* <Button title="Atualizar Idade" onPress={()=> this.atualizarIdade()} /> */}
                    
                    <TouchableOpacity onPress={()=> this.atualizarIdade()} style={styles.TouchButton} >
                        <Text style={styles.TextButton} > Atualizar Idade</Text>
                    </TouchableOpacity>

                    <TextInput autoCapitalize="none" 
                    autoCorrect={false} 
                    value={this.state.cargoInput}
                    onChangeText={(cargoInput)=> this.setState({cargoInput: cargoInput})} 
                    placeholder="Qual o cargo?" style={styles.input}  
                    
                    />

                  { /* <Button title="Atualizar Idade" onPress={()=> this.atualizarIdade()} /> */}
                    
                    <TouchableOpacity onPress={()=> this.atualizarCargo()} style={styles.TouchButton} >
                        <Text style={styles.TextButton} > Cadastrar/Atualizar</Text>
                    </TouchableOpacity>

                    <Text style={styles.texto} >Idade: {idade} </Text>

                    
                    <Text style={styles.texto} >Cargo: {cargo} </Text>
            </View>       
            
             
    
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
        flex: 1,
        backgroundColor: '#0fd',
        height: 550,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
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



