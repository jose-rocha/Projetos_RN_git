import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import './homeItem.css';

import {GiExitDoor} from "react-icons/gi"; //exit
import {AiFillSetting} from 'react-icons/ai'; //settings
import {AiOutlineDashboard} from 'react-icons/ai'; //DashBoard

export default class HomeItem extends Component {
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

            this.setState(state);
        })

        this.logout = this.logout.bind(this);
    }


   
    logout = async ()=> {
       await firebase.logout()
       .catch((error)=>{
           console.log(error);
       });
       
       this.props.history.push('/login');
    } 

    render() {
        return (
        <div>
            <header id="inicio">
                <div >
                    <div>
                        <Link  to="/login" className="link" onClick={()=> this.logout()}  >
                            
                        <GiExitDoor color="#fff" size="30px"  />
                        </Link>
                     </div>     

                        <Link  to="/settings" className="link2"   >
                            
                        <AiFillSetting color="#fff" size="30px" className="img2" />
                        </Link>

                        <Link  to="/dashboard" className="link3"   >
                            
                        <AiOutlineDashboard color="#fff" size="30px" className="img3" />
                        </Link>

                
                </div>

            </header>
            
            

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
                            <img src={ativo.image} alt="Imagem do Ativo"  />
                           <h1>HomeItem</h1> 
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

