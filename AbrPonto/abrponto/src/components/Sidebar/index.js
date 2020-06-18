import React, {Component} from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import './Sidebar.css'


import {AiOutlineDashboard} from 'react-icons/ai'; //DashBoard
import {FaCubes} from 'react-icons/fa'; //Ativos
import {AiFillFileText} from 'react-icons/ai';  //file
import {FaWrench} from 'react-icons/fa'; //Tarefas
import {FaExclamationCircle} from 'react-icons/fa'; //Chamados
import {AiFillSetting} from 'react-icons/ai'; //settings

const StyledSideNav = styled.div`
    position: fixed;
    height: 100%;
    width: 170px;
    z-index:1;
    top: 3.4em;
    background-color: blue;
    margin-top:16px;
    overflow-x: hidden;
`;




export default class SideNav extends Component{
    render() {
        return (
            <StyledSideNav>
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

                            <div className="link1" >
                                <Link  to="/OS"   >
                                <div className="navbar-brand">
                                    <AiFillFileText color="#fff" size="15px" /> 
                                    <span className="span2">ORDENS DE SERVIÇOS</span>  
                                </div>
                                </Link>
                            </div> 

                            <div className="link1" >
                                <Link  to="/tarefas"   >
                                <div className="navbar-brand">
                                    <FaWrench color="#fff" size="15px" /> 
                                    <span className="span2">TAREFAS</span>  
                                </div>
                                </Link>
                            </div> 

                            <div className="link1" >
                                <Link  to="/chamados"   >
                                <div className="navbar-brand">
                                    <FaExclamationCircle color="#fff" size="15px" /> 
                                    <span className="span2">CHAMADOS</span>  
                                </div>
                                </Link>
                            </div> 

                            <div className="link1" >
                                <Link  to="/Itens/config"   >
                                <div className="navbar-brand">
                                    <AiFillSetting color="#fff" size="15px" /> 
                                    <span className="span2">CONFIGURAÇÕES</span>  
                                </div>
                                </Link>
                            </div> 


                        </div>
                    </div>

                        
                    { /* <div className="user-info" >
                        <div>
                            <div className="user-info-link">
                                <Link to="/dashboard/newOs" > Nova OS</Link>

                                <h1>Olá {this.state.nome} </h1>
                                <span>Usuário: {firebase.getCurrent()}</span> 
                            </div>
                        </div>     
                            
                            
                </div> */}

                </div>


                
            </StyledSideNav>
        )
    }
}

export class Sidebar extends Component{
    render() {
        return (
            <SideNav>

            </SideNav>
        )
    }
}