import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './Dashboard.css';


import {AiOutlineDashboard} from 'react-icons/ai'; //DashBoard
import {FaCubes} from 'react-icons/fa';


import {IoMdExit} from "react-icons/io"; //exit
import {AiFillSetting} from 'react-icons/ai'; //settings
import {FaUserAlt} from 'react-icons/fa'; //User


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
                <nav id="inicioN" >

                    <div className="br7I" > 
                        <Link  to="/Itens" className="br7Link"   >
                        <span className="br7Name"> BR7mobilidade</span>  {/*BR7mobilidade */}
                        </Link>
                    </div> 

                    <div>
                    <Link  to="/user" className="linkPerfil"  title="Meu perfil" >
                            <FaUserAlt color="#fff" size="15px"  /> {/*User */} 
                    </Link>
                    </div>

                    <div>
                        <Link  to="/settings" className="linkConfigConta" title="Configurações da conta"   >
                            
                            <AiFillSetting color="#fff" size="15px"  />  {/*configurações */}
                        </Link>
                    </div> 

                    <div>
                        <Link  to="/login" className="linkSair" onClick={()=> this.logout()} title="Sair"  >
                            <IoMdExit color="#fff" size="15px"  /> {/*Sair */}
                        </Link>
                    </div> 

                </nav>



             <div id="geral">

                
                  
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