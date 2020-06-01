import React, { Component } from 'react';
import {Link, withRouter  } from 'react-router-dom';
import firebase from '../../firebase';

import './register.css';


 class Register extends Component {
    constructor(props){
        super(props);
        this.state ={
            nome: '',
            email: '',
            password: ''
        };

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
       
}

  register(e){

    e.preventDefault();
    this.onRegister();
  }

  //função de cadastrar
  onRegister = async ()=> {

    try {
        const {nome, email, password} = this.state;

        await firebase.register(nome, email, password);
        this.props.history.replace('/dashboard');

    } catch (error) {
        alert(error.message);
    }


  }


    
    render() {
        return (
            <div>
                <h1 className="register-h1" >Novo Usuário</h1><br/>
                <form onSubmit={this.register}  id="register" >
                    <label>Nome:</label><br/>
                    <input type="text" value={this.state.nome} autoFocus autoComplete="off"
                        onChange={(e)=>this.setState({nome: e.target.value})}
                        placeholder="Digite seu nome"
                    /><br/>

                    <label>Email:</label><br/>
                    <input type="email" value={this.state.email} autoComplete="off"
                        onChange={(e)=>this.setState({email: e.target.value})} 
                        placeholder="teste@teste.com"

                    /><br/>

                    <label>Senha:</label><br/>
                    <input type="password" value={this.state.password} 
                        onChange={(e)=>this.setState({password: e.target.value})}
                        placeholder="*****"
                    /><br/>

                    <button type="submit" >Cadastrar</button>

                </form>
               
            </div>
        )
    }
}


export default withRouter(Register);