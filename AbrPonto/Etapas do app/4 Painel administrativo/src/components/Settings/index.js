import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';

import './Settings.css';

class Settings extends Component {

    constructor(props){
        super(props);
        this.state ={
            nome: '',
            email: '',
            password: ''
        }

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    register(e){
       e.preventDefault();

       this.onRegister();
    }

    onRegister = async()=>{
        try{
            const {nome, email, password} = this.state;

            await firebase.register(nome, email, password);
            this.props.history.replace('/Itens');
        }catch(error){
            alert(error.message);
        }

    }
    
    render() {
        return (
            <div>
                <header id="inicioVoltar">
                     <Link  to="/Itens" color="#fff" className="link" >Voltar</Link> 
                 </header>

               <h1 className="register-h1" >Cadastrar Usuário na Plataforma</h1>

               <form onSubmit={this.register} id="register">
                   <label>Nome:</label> <br/>
                   <input type="text" value={this.state.nome} autoFocus autoComplete="off"
                   onChange={(e) =>this.setState({nome: e.target.value})} 
                   /> <br/> <br/>

                   <label>Email:</label> <br/>
                   <input type="email" value={this.state.email} placeholder="teste@teste.com"
                   onChange={(e) =>this.setState({email: e.target.value})} 
                   /> <br/><br/> 

                   <label>Senha:</label> <br/>
                   <input type="password" value={this.state.password} placeholder="******"
                   onChange={(e) =>this.setState({password: e.target.value})} 
                   /> <br/> <br/>

                   <button type="submit" >Cadastrar</button>

               </form>

               <Link  to="/Itens" className="voltar" >Voltar</Link>
            </div>
        )
    }
}

export default withRouter(Settings)
