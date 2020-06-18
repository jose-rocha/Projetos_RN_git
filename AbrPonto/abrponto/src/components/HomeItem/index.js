import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import './homeItem.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';


import {FaUserAlt} from 'react-icons/fa'; //User 
import {AiFillSetting} from 'react-icons/ai'; //settings
import {IoMdExit} from "react-icons/io"; //exit

import {AiOutlineDashboard} from 'react-icons/ai'; //DashBoard
import {FaCubes} from 'react-icons/fa'; //Ativos
import {AiFillFileText} from 'react-icons/ai';  //file
import {FaWrench} from 'react-icons/fa'; //Tarefas
import {FaExclamationCircle} from 'react-icons/fa'; //Chamados





export default class HomeItem extends Component {
    state = {
        nome: localStorage.nome
    }
    state ={
        ativos: [ ]
    }


    

    componentDidMount(){
        firebase.app.ref('ativos').once('value', (snapshot)=>{
            let state = this.state;
            state.ativos = [];

            snapshot.forEach((childItem)=>{
                state.ativos.push({
                    key: childItem.key,
        /*titulo*/  tipo: childItem.val().tipo,
                    image: childItem.val().image,
                    localizacao: childItem.val().localizacao,
                    ultimaOcorrencia: childItem.val().ultimaOcorrencia,
          /*autor*/ executador: childItem.val().executador,
                    descricao: childItem.val().descricao

                
                })
            });
            state.ativos.reverse(); //essa função faz com que as ultimas OS fiquem por primeioro 
            this.setState(state);
        })
       
        this.logout = this.logout.bind(this);
    }


    /*Essa função serve para verificar se tem usuário logado trabalha em conjunto
     com a state "nome: localStorage.nome", mesmo colocando a url correta ela vai redirecionar 
     para a página de login. */
    async componentWillMount(){
        if(!firebase.getCurrent()){
           // alert('Area restrita, para acessar essa página você precisa estar logado!');
            this.props.history.replace('/login');
            return null;
        }

        firebase.getUserName((info)=>{
            localStorage.nome = info.val().nome;
            this.setState({nome: localStorage.nome});
        })
    }
   
    logout = async ()=> {
       await firebase.logout()
       .catch((error)=>{
           console.log(error);
       });
      localStorage.removeItem("nome");
       this.props.history.push('/login');
    } 

    render() {
        return (
        <div id="geral">

        
        <div className="container-fluid p-0" id="fixa">

          
              
              <nav className="navbar navbar-expand-md navbar-dark bg-dark "  >
                              

                                  <Link className="navbar-brand" to="/Itens"    >
                                      <span > BR7mobilidade</span>  {/*BR7mobilidade */}
                                  </Link>

                                  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                                      aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation" >
                                      <span className="navbar-toggler-icon" ></span>

                                  </button>

                                  <section className="collapse navbar-collapse" id="navbarMainToggler" > 
                                      
                                      <div className="navbar-nav ml-auto" > {/* ml-auto para o menu ir para a direita */}
                                          <Dropdown >
                                          <Dropdown.Toggle variant="secundary" id="dropdown-basic" className="bg-light"> 
                                         ABRIGOS
                                 </Dropdown.Toggle>

                                              <Dropdown.Menu>
                                                  <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                                  <Dropdown.Item href="#/action-2">TODAS AS OPERAÇÕES</Dropdown.Item>
                                                  <Dropdown.Item href="#/action-3">ABRIGOS</Dropdown.Item>
                                                  <Dropdown.Item href="#/action-3">ABRIGOS</Dropdown.Item>
                                                  <Dropdown.Item href="#/action-3">BANCOS</Dropdown.Item>
                                                  <Dropdown.Item href="#/action-3">PLACAS I-23</Dropdown.Item>
                                                  <Dropdown.Item href="#/action-3">PONTOS FICTICIOS (SEM IDENTIFICAÇÃO)</Dropdown.Item>
                                                  <Dropdown.Item href="#/action-3">TOTENS</Dropdown.Item>
                                              </Dropdown.Menu>

                                          </Dropdown>

                                          <Link  className="nav-item nav-link" to="/user"   title="Meu perfil" >
                                              <FaUserAlt color="#fff" size="15px"  /> {/*User */} 
                                          </Link>
                                          

                                          
                                          <Link className="nav-item nav-link" to="/settings"  title="Configurações da conta"   >
                                              <AiFillSetting color="#fff" size="15px"  />  {/*configurações */}
                                          </Link>
                                          

                                          
                                          <Link  className="nav-item nav-link" to="/login"  onClick={()=> this.logout()} title="Sair" >
                                              <IoMdExit color="#fff" size="15px"  /> {/*Sair */}
                                          </Link>
                                    </div>  
                                  </section>

        
          </nav>


        </div>            
            
            
        <div className="fixar">  
             <div className="menu">
                <div className="fixed"  >
                    <div className="link1"> 
                        <Link  to="/dashboard"    >
                            <div className="navbar-brand">
                            <AiOutlineDashboard color="#fff" size="15px" /> 
                            <span className="span2" >DASHBOARD</span>  
                            </div>                         
                        </Link>
                    </div>

                    <div className="link1" >
                        <Link  to="/Itens"   >
                        <div className="navbar-brand">
                            <FaCubes color="#fff" size="15px" /> 
                            <span className="span2">ATIVOS</span>  
                        </div>
                        </Link>
                    </div> 

                    <div className="linkOs" >
                        <Link  to="/OS"   >
                        <div className="navbar-brand">
                            <AiFillFileText color="#fff" size="15px" /> 
                            <span className="span2">ORDENS DE SERVIÇO</span>  
                        </div>
                        </Link>
                    </div> 

                    <div className="linkOs" >
                        <Link  to="/tarefas"   >
                        <div className="navbar-brand">
                            <FaWrench color="#fff" size="15px" /> 
                            <span className="span2">TAREFAS</span>  
                        </div>
                        </Link>
                    </div> 

                    <div className="linkOs" >
                        <Link  to="/chamados"   >
                        <div className="navbar-brand">
                            <FaExclamationCircle color="#fff" size="15px" /> 
                            <span className="span2">CHAMADOS</span>  
                        </div>
                        </Link>
                    </div> 

                    <div className="linkOs" >
                        <Link  to="/Itens/config"   >
                        <div className="navbar-brand">
                            <AiFillSetting color="#fff" size="15px" /> 
                            <span className="span2">CONFIGURAÇÕES</span>  
                        </div>
                        </Link>
                    </div> 


                </div>
            </div>

                
                <div className="user-info" >
                <div>
                    <div className="user-info-link">
                        <Link to="/dashboard/newOs" > ATIVOS</Link>

                        <h1>Olá {this.state.nome} </h1>
                        <span>Usuário: {firebase.getCurrent()}</span> 
                    </div>
                </div>     
                    
                    
             </div>

            </div> 

            <div className="ativosPai" > 

                <section id="ativos" >
                    {this.state.ativos.map((ativo)=>{
                        return(
                            <div>
                            <article key={ativo.key} >
                                <header>
                                    <div className="title">
                                        <strong>Tipo: {ativo.tipo} </strong>
                                        <span>Executador: {ativo.executador} </span>
                                    </div>
                                </header>
                                <img src={ativo.image} alt="Imagem do Ativo" className="imgAtivos"  />
                            
                                <footer>
                                    <p>Ação: {ativo.descricao} </p>

                                    
                                </footer>
                            </article>  

                            <hr/>
                            </div>
                        )

                        
                    })}
                </section> 

            </div>      

                    
           
    </div>
        )
    }
}




