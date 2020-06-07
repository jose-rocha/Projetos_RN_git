import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './Dashboard.css';


import {AiOutlineDashboard} from 'react-icons/ai'; //DashBoard
import {FaCubes} from 'react-icons/fa';

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
                        <Link  to="/Itens" color="#fff" className="dashLink" > 
                            <span className="br7Name" >BR7mobilidade</span> 
                        </Link> 
                   </div>
                 </nav>


             <div id="geral">

                <div className="user-info" >
                    <div className="dashLinkPai">
                        <Link to="/dashboard/newOs" > Nova OS</Link>

                    </div>
                    
                    <h1>Olá {this.state.nome} </h1>
                </div>
                <p>Usuário: {firebase.getCurrent()}</p>
                  
                <div className="menu">
                <div >
                     <div className="fixed">
                        <div className="link1"> 
                            <Link  to="/dashboard"    >
                                <div className="span1">
                                  <AiOutlineDashboard color="#fff" size="15px" /> 
                                  <span className="span2" >DASHBOARD</span>  
                                </div>                         
                            </Link>
                        </div>

                        <div className="link1" >
                            <Link  to="/Itens"   >
                              <div className="span1">
                                <FaCubes color="#fff" size="15px" /> 
                                <span className="span2">ATIVOS</span>  
                              </div>
                            </Link>
                        </div> 
                     </div>
                </div>
                
            </div>

           </div>
                
            </div>

            
        )
    }
}

export default withRouter(Dashboard);