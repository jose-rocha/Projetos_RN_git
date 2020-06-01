import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';

import './dashboard.css';

 class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: localStorage.nome
        }

        this.logout = this.logout.bind(this);
    }

   async componentDidMount(){
       if(!firebase.getCurrent()){
           this.props.history.replace('/login');
           return null;
       }

       firebase.getUserName((info)=>{
           localStorage.nome = info.val().nome;
           this.setState({nome: localStorage.nome});
       })

    }

    logout = async ()=> {
        //está função está sendoinstanciada no arquivo firebase.js na linha 32
       await firebase.logout()
       .catch((error)=>{
           console.log(error);
       });

       localStorage.removeItem('nome');
       //se deslogar manda ele para a página home '/'
       this.props.history.push('/');

    }

    render() {
        return (
            <div id="dashboard" >
              
              <div className="user-info" >
                <h1>Olá  {this.state.nome} </h1>

                <Link to="/dashboard/new" >Novo Post</Link>     
                </div>   

              <p>Logado com: {firebase.getCurrent()}</p>

                <button onClick={()=> this.logout()} className="butt" >Sair</button>        
            </div>
        )
    }
}


export default withRouter (DashBoard);