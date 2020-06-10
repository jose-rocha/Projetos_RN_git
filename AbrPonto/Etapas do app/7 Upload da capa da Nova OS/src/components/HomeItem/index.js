import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import './homeItem.css';

import {IoMdExit} from "react-icons/io"; //exit
import {AiFillSetting} from 'react-icons/ai'; //settings
import {AiOutlineDashboard} from 'react-icons/ai'; //DashBoard

import {FaCubes} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';

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

            </div>

           
           
            <div className="menu">
                <div >
                     <div className="fixed"  >
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

            <div className="user-info" >
                    <div>
                        <div className="user-info-link">
                            <Link to="/dashboard/newOs" > Nova OS</Link>

                            <h1>Olá {this.state.nome} </h1>
                            <span>Usuário: {firebase.getCurrent()}</span> 
                        </div>
                    </div>     
                        
                         
            </div>

            

            <section id="ativos" >
                {this.state.ativos.map((ativo)=>{
                    return(
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
                    )
                })}
            </section>

            </div>
        )
    }
}

