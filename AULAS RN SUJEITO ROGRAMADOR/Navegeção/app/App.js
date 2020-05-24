import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     hora: '00:00:00'
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({hora: new Date().toLocaleTimeString() })
    }, 1000);
  }
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}
      > 
      <Text style={{fontSize:60}}>Meu projeto</Text>
      <Text style={{fontSize:50}}>
       {this.state.hora} 
       </Text>
      </View>
    )
  }
}
