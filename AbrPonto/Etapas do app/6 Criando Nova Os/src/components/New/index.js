import React, {Component} from 'react'
import  {Link, withRouter} from 'react-router-dom';

import './New.css';



import {IoMdExit} from "react-icons/io"; //exit
import {AiFillSetting} from 'react-icons/ai'; //settings
import {FaUserAlt} from 'react-icons/fa'; //User

class New extends Component{

    constructor(props){
        super(props);
        this.state = {
            tipo: "",
            image: '',
            descricao: ''

        };

        this.cadstrarOS = this.cadstrarOS.bind(this);

    }
    

   cadstrarOS(){
    alert('Teste')
    }


    render(){
        return(
            <div>
               <nav id="inicioL" >

                    <div className="br7In" > 
                        <Link  to="/Itens" className="br7Link"   >
                        <span className="br7NameL"> BR7mobilidade</span>  {/*BR7mobilidade */}
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
                        <Link  to="/login" className="linkSair" onClick={()=> this.logout()} title="Sair" >
                            <IoMdExit color="#fff" size="15px"  /> {/*Sair */}
                        </Link>
                    </div> 




                </nav>

                <form onSubmit={this.cadstrarOS} id="new-form-os" >
                    <label>Tipo</label><br/>
                        <select name="selecao"  >
                            <option value="">--</option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})}>
                                 Abrigo
                             </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})}> 
                                Abrigo › Modelo Antigo 
                            </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})}> 
                                Abrigo › Modelo Concreto 
                            </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})}>
                                 Abrigo › Modelo Corredor 
                            </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})} > 
                                Abrigo › Modelo novo iluminado 
                            </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})}> 
                                Abrigo › Modelo Novo sem iluminação 
                            </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})} > 
                                Placa 
                            </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})}>
                                 Ponto Fictício
                             </option>
                            <option value={this.state.tipo} onChange={(e)=> this.setState({titulo: e.target.value})}> 
                                Totem
                             </option>
                        </select> <br/><br/>

                        <label>Descrição:</label><br/>
                        <textarea type="text" placeholder="Descreva o que será feito" value={this.state.descricao} 
                        onChange={(e)=> this.setState({descricao: e.target.value})} 
                         /> <br/><br/>

                        <label>Url da imagem:</label><br/>
                        <input type="text" placeholder="Url da sua imagem" value={this.state.image} 
                        onChange={(e)=> this.setState({image: e.target.value})} 
                         /><br/><br/>

                         <button type="submit" >Cadastrar OS</button>


                </form>
                
            </div>
        );
    }
}

export default withRouter(New);