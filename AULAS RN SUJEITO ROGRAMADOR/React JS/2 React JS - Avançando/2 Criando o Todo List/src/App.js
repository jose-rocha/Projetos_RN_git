import React, {Component} from 'react';
import TodoList from './components/TodoList';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
             
    }

    
    render(){
        return(
                  
            <div  >

                <h1>Lista de tarefas</h1>
                <TodoList />

                
                
            </div>
        )
    }
}

