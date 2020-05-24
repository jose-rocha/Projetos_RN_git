import React, {Component} from 'react';

export default class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome){
        this.setState({nome: nome})
    }

   
    render(){
        return(
            <div>
                <h2>Seja bem vindo(a)  {this.state.nome}</h2> 

                <button onClick={()=> this.entrar('Rocha')} >
                    Entar no Sistema
                </button> <br/><br/>

                <button onClick={()=> this.setState({nome:''})} >
                    Sair
                </button>
            </div>
        )
    }
}