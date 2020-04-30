import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

export default  class appSwitch extends Component{

  constructor(props){
    super(props);
    this.state= {
      valor: false
    };
  }


  render(){
    return(
      <View style={styles.body}>
        <View style={styles.opcao}>
          <Switch thumbColor='#000'  value={this.state.valor} onValueChange={(v)=> this.setState({valor: v})}  />

              <Text style={{marginLeft: 8}}>{(this.state.valor)?"Ligado":'Desligado'}</Text>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop: 20,
      flex:1,
      
  },
  opcao:{
    alignItems:'flex-start'
  },
  preto:{
    backgroundColor: '#000'
  },
  branco:{
    backgroundColor: '#fff'
  }

});