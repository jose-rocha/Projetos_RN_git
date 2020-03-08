import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

/* class Imagem extends Component{
  render() {

    let imagem = {uri: 'https://sujeitoprogramador.com/'+this.props.nome+'.png'};

    return(
      <Image source={imagem} style={styles.imagem} style={{width: parseInt(this.props.largura), 
        height:parseInt(this.props.altura), margin:parseInt(this.props.margem)}} />

    );
  }

}    

export default class App extends Component{
  render(){

      

    return(
      <View >
          
      <Text style={{textAlign: 'center'}}>Hello World</Text>

        <Imagem nome='steve' largura='300' altura='300' margem='35'/>

            

      </View>
    )
  }
}   essa parte do codigo faz parte  da aula entendendo props              */

class Janta extends Component{

  constructor(props) {
    super(props);
    this.state = {comida: props.comida};

    var comidas = ['Pizza', 'Lasanha', 'Burger King', 'Sopa', 'Arroz'];

    setInterval(()=>
     {
       this.setState(previousState =>{
          var n =  Math.floor(Math.random() * comidas.length);

          return {comida: comidas [n]}
       });

     }, 1000 )
  }


  render(){
    return(
      <View >
        <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 30, color: 'red'}}>Hoje você vai jantar:</Text>
        <Text style={{fontSize: 20, textAlign:'center'}}> {this.state.comida}</Text>
      </View>
    );
  }
}



export default class App extends Component{
  render(){

      

    return(
      <View style={{flex: 1, backgroundColor: '#00ced1'}}>
          
          <Janta comida='Sopa Verde'/>
    
      </View>
    )
  }
}