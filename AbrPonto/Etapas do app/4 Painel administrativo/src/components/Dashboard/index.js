import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './Dashboard.css';

 class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: localStorage.nome
        }
    }

    async componentWillMount(){
        if(!firebase.getCurrent()){
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
            
            <div id="dashboard">
                <header id="dashVoltar">
                    <button type="button" className="botao">
                     <Link  to="/Itens" color="#fff" className="dashLink" >Voltar</Link> 
                     </button>
                 </header>



                <div className="user-info" >
                    <h1>Olá {this.state.nome} </h1>
                    <Link to="/dashboard/newOs" >  Nova OS</Link>
                </div>
                <p>Usuário: email@teste.com</p>
            </div>
        )
    }
}

export default new withRouter(Dashboard);