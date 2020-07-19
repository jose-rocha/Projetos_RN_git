import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './Login.css'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password: ''
        };

        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount(){
        //Verifica se tem algum user logado!
        if(firebase.getCurrent()){
            return this.props.history.replace('Itens')
        }

    }

    entrar(e){
        e.preventDefault();

        this.login();
    }

    login = async ()=>{
     const {email, password}  = this.state;

        try
        {
            await firebase.login(email, password)
            .catch((error)=>{
            if(error.code === 'auth/user-not-found'|| error.code === 'auth/wrong-password'){
                alert('Email ou senha incorretos!')

            }if(this.state.email === '' || this.state.password === ''){
                alert('Preencha todos os campos!')
                return null;
                
            } /*else{
                alert('Codigo de erro:' + error.code);
                return null;
            } */
        });

        this.props.history.replace('/Itens');

        }catch(error){
            alert(error.message);
        }
     
    }

    render() {
        return (
            <div>
               
                <form onSubmit={this.entrar} id="login"  >
                    <label>Email</label> <br/>
                    <input type="email" autoComplete="off" autoFocus
                     value={this.state.email}
                     onChange={(e)=> this.setState({email: e.target.value})}
                     placeholder="teste@teste.com"
                    /> <br/>


                    <label>Senha</label> <br/>
                    <input type="password" autoComplete="off"
                     value={this.state.password}
                     onChange={(e)=> this.setState({password: e.target.value})}
                     placeholder="****"
                    /> <br/>

                    <button type="submit">Entrar</button> <br/>

                    {/*<Link to="/register" >Ainda não é cadastrardo?</Link> */}

                </form>
            </div>
        )
    }
}

export default withRouter(Login)