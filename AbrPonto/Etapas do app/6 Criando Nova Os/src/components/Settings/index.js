import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';

import './Settings.css';


import {IoMdExit} from "react-icons/io"; //exit
import {AiFillSetting} from 'react-icons/ai'; //settings
import {FaUserAlt} from 'react-icons/fa'; //User


class Settings extends Component {

    state ={
        nome: localStorage.nome
    }

    constructor(props){
        super(props);
        this.state = {
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
            alert("Para cadastrar o usuário é necessário um nome!");
            return null;

            await firebase.register(nome, email, password);
            if(this.state.nome = ""){
            
            }
            this.props.history.replace('/Itens');
        }catch(error){
            alert(error.message);
        }

    }
    
    
    async componentWillMount(){
        if(!firebase.getCurrent()){
            alert('Area restrita, para acessar essa página você precisa estar logado!');
            this.props.history.replace('/login');
            return null;
        }

        firebase.getCurrent((info)=>{
            localStorage.nome = info.val().nome;
            this.setState({nome: localStorage.nome});
        })
    }
    
    render() {
        return (
            <div>
                <nav id="inicio" >

<div className="br7I" > 
    <Link  to="/Itens" className="br7Link"   >
    <span className="br7Name"> BR7mobilidade</span>  {/*BR7mobilidade */}
    </Link>
</div> 

<div>
<Link  to="/user" className="link"  title="Meu perfil" >
        <FaUserAlt color="#fff" size="15px"  /> {/*User */} 
</Link>
</div>

<div>
    <Link  to="/settings" className="link2" title="Configurações da conta"   >
        
        <AiFillSetting color="#fff" size="15px"  />  {/*configurações */}
    </Link>
</div> 

<div>
    <Link  to="/login" className="link3" onClick={()=> this.logout()} title="Sair" >
        <IoMdExit color="#fff" size="15px"  /> {/*Sair */}
    </Link>
</div> 

</nav>


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

            
            </div>
        )
    }
}

export default withRouter(Settings)
