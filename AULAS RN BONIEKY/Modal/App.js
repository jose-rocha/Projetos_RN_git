import React, {Component} from 'react';
import{View, Text, StyleSheet, Modal, Button} from 'react-native';

export default class modal extends Component{

    constructor(props){
      super(props);
      this.state = {
        modalVisible:false
      };

      this.abrirModal = this.abrirModal.bind(this);
      this.fecharModal = this.fecharModal.bind(this);
    }

    abrirModal(){
      let s = this.state;
      s.modalVisible = true;
      this.setState(s);
    }
    fecharModal(){
      let s = this.state;
      s.modalVisible = false;
      this.setState(s);
    }

  render(){
    return(
      <View style={styles.body}>
          <Text>Modal</Text>

            <Modal animationType='slide' visible={this.state.modalVisible} >
                <View style={styles.modal}>  
                  <Text>Modal</Text>

                  <Button title='Fechar Modal' onPress={this.fecharModal} />
                  
                </View> 
            </Modal>

            <Button title='Abrir Modal' onPress={this.abrirModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modal:{
      flex:1,
      backgroundColor: '#00ff00',
      paddingTop:  40,
      alignItems: 'center'
  }
});