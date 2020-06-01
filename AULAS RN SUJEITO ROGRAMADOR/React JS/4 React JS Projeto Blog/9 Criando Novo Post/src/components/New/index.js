import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

import './new.css';


 class New extends Component {
    constructor(props){
        super(props);
        this.state ={
            titulo:'',
            image: '',
            descricao: ''
        }

        this.cadastrarPost = this.cadastrarPost.bind(this);
    }


    cadastrarPost(){

    }

    render() {
        return (
            <div >
                <header id="new">
                    <Link to="/dashboard" >Voltar</Link>

                    
                </header>
                <p  className="novoPost">Novo Post</p>
                
                <form onSubmit={this.cadastrarPost} id="new-post">
                    <label>Titulo:</label><br/>
                    <input type="text" placeholder="Nome do Post"
                     value={this.state.titulo}
                     onChange={(e)=>this.setState({titulo: e.target.value})}
                     autoFocus
                       /><br/>

                    <label>Url da imagem:</label><br/>
                    <input type="text" placeholder="Url da capa"
                     value={this.state.image}
                     onChange={(e)=>this.setState({image: e.target.value})}
                     autoFocus
                       /><br/>

                    <label>Descrição:</label><br/>
                    <textarea type="text" placeholder="Escreva a descrição do post aqui"
                     value={this.state.descrição}
                     onChange={(e)=>this.setState({descrição: e.target.value})}
                     autoFocus
                       /><br/> 

                    <button type="submit" >Cadastrar</button>


                </form>
            </div>
        )
    }
}

export default withRouter(New);
