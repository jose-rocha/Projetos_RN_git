import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity,
FlatList, Modal, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import TaskList from './src/components/TaskList';
import * as  Animatable from 'react-native-animatable';

const  AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity);


export default function Tarefas (){
    const [task, setTask] = useState([ ]);

    const [visible, setVisible] = useState(false);

    const [input, setIput] = useState('');

    
   {/*   essa função buscar todas a tarefas ao iniciar o app */ }

    useEffect(()=> {
     async function loadTask(){
        const taskStorage = await AsyncStorage.getItem('@task');

        if(taskStorage){
          setTask(JSON.parse(taskStorage));

        }
      }

      loadTask();

    }, []);

    // Salvando caso tenha alguma tarefa alterada //

    useEffect(()=>{

      async function saveTasks(){
        await AsyncStorage.setItem('@task', JSON.stringify(task));
      }

      saveTasks();

    }, [task]);

    function handleAdd() {
      if(input === '') return;

      const data ={
        key: input,
        task: input
      };

      setTask([...task, data]);
      setVisible(false);
      setIput('');
    }

    const handleConcluido = useCallback((data)=> {
        const find = task.filter(r => r.key !== data.key)

        setTask(find);

        alert('Tarefa Concluida');
    });

  return(

    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#171d31" barStyle="light-content"  />

      <View style={styles.content} >
        <Text style={styles.title}>MinhasTarefas</Text>

    
      </View>


      {/* Aqui vai ser a lista  */}

      <FlatList 
        marginHorizontal={2}
        showsVerticalScrollIndicator={false}
        data={task}
        keyExtractor={ (item)=> String(item.key)}
        renderItem={ ({item}) => <TaskList data={item} handleConcluido={handleConcluido} />}
      />

      <Modal animationType="slide" transparent={false} visible={visible}>
          <SafeAreaView style={styles.modal}>
           
            <View  style={styles.modalHeader}>
                
                <TouchableOpacity onPress={()=> setVisible(false)} >

                  <Icon name="arrow-left" size={35} style={{marginTop: 3, marginLeft: 5, color: '#fff'}} />

                    <Text style={{fontWeight:'bold', marginTop: 3, marginLeft:5,color: '#fff'}}>Voltar</Text>
                    
                </TouchableOpacity>

                <Text 
                style={{color:'#fff', 
                  marginLeft: 10,
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontSize: 20
               }}
                > Nova Tarefa </Text>

            </View>

            <Animatable.View animation='fadeInUp' useNativeDriver style={styles.ModalBody}>
                <TextInput 
                multiline={true}
                placeholderTextColor='#747474'
                autoCorrect={false}
                 placeholder="Tarefas para hoje"
                 style={styles.input} 
                 value={input}
                 onChangeText={(texto)=> setIput(texto)} />

               <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
                 <Text style={styles.handleAddText}> Cadastrar</Text>
               </TouchableOpacity>

            </Animatable.View>
            
          </SafeAreaView>
      </Modal>
      

      <AnimatableBtn style={styles.fab} animation="bounceInUp" useNativeDriver duration={1500} 
      onPress={ ()=>setVisible(true)}
      >
          <Icon name="plus" size={30} color="#FFF" />
      </AnimatableBtn>

     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#171d31'
  },
  title:{
    marginTop: 10, 
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF'
  },
  fab: {
    position: 'absolute',
    width:60,
    height: 60,
    backgroundColor: '#0094ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    }
  },

  modal: {
    flex:1,
    backgroundColor: '#171d31'
  },
  ModalBody:{
    marginTop: 15
  }
  ,
  input:{
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    backgroundColor: '#fff',
    padding:9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5 
  },
  handleAdd:{
    backgroundColor: '#fff',
    marginTop:10,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight:10,
    height: 40,
    borderRadius:5
  },
  handleAddText:{
    fontSize:20
  }
  
});