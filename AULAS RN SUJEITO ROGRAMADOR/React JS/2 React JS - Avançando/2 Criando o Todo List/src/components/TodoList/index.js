import React, {Component} from 'react';
import TodoItems from '../TodoItems';


export default class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    
    addItem(event){
        let state = this.state;
        if(this._tarefaInput.value !== ""){
           /* console.log(this._tarefaInput.value); aqui é só descomentar 
           para vê se ele está recebendo valor do input digitado, e  o event.preventDefault();
           */

           let newItem ={
               text: this._tarefaInput.value,
               key: Date.now()
           };

           this.setState({items: [...state.items, newItem]});
        }

        if(this._tarefaInput.value === ""){
            alert('Preencha o campo de tarefa!');
        }


        event.preventDefault();
        this.setState({tarefa: ''}); //aqui apaga o que está ecrito no input quando apertar em adicionar.

    }

    log(){
        console.log(this.state.items);
    }


    deleteItem(key){
       console.log('Item a ser deletado é: ' + key);
      let filtro = this.state.items.filter((item)=>{
                  return(item.key !== key);
      });

      console.log(filtro);
      this.setState({items: filtro});
    }


    render(){
        return(
            <div>
                <form onSubmit={this.addItem} >
                    <input type="text" placeholder="Nova Tarefa?" name="tarefa"
                    value={this.state.tarefa} 
                    onChange={(e)=>  this.setState({tarefa: e.target.value})} 
                    ref={(e)=> this._tarefaInput = e }
                    />  

                    <button type="submit" >
                        Adicionar
                    </button>
                </form>

                <button onClick={this.log} >
                    LOG
                </button>

                <TodoItems lista={this.state.items} delete={this.deleteItem}  />
                
            </div>
        )
    }
}
