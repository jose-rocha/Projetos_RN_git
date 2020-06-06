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

    /*Essa função serve para verificar se tem usuário logado trabalha em conjunto
     com a state "nome: localStorage.nome", mesmo colocando a url correta ela vai redirecionar 
     para a página de login.
    */
    async componentDidMount(){
        if(!firebase.getCurrent()){
            alert('Area restrita, para acessar essa página você precisa estar logado!');
            this.props.history.replace('/login');
            return null;
        }

        await firebase.getUserName((info)=>{
           localStorage.nome = info.val().nome;
            this.setState({nome: localStorage.nome});
        })
    }


    render() {
        return (
            
            <div >
                <nav id="dashboard">
                   <div >
                     <Link  to="/Itens" color="#fff" className="dashLink" >Voltar</Link> 
                   </div>
                 </nav>



                <div className="user-info" >
                    <div className="dashLinkPai">
                        <Link to="/dashboard/newOs" className="newOs">  Nova OS</Link>

                    </div>
                    
                    <h1>Olá {this.state.nome} </h1>
                </div>
                <p>Usuário: {firebase.getCurrent()}</p>
            </div>
        )
    }
}

export default withRouter(Dashboard);