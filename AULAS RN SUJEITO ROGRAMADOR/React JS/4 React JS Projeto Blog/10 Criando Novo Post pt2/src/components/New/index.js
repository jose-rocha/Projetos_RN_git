import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';

import './new.css';


 class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo:'',
            image: '',
            descricao: '',
            alert: ''
        }

        this.cadastrarPost = this.cadastrarPost.bind(this);
    }

    componentDidMount(){
        if(!firebase.getCurrent()){
            this.props.history.replace('/login');
            return null;
        }
    }


    cadastrarPost = async(e)=> {
        e.preventDefault();

        if(this.state.titulo !== '' && this.state.image !== '' && this.state.descricao !== ''){
            let posts = firebase.app.ref('posts');
            let chave = posts.push().key;
            await posts.child(chave).set({
                titulo: this.state.titulo,
                image: this.state.image,
                descricao: this.state.descricao,
                autor: localStorage.nome
            });

            this.props.history.push('/')
        }else{
            this.setState({alert: 'Preencha todos os campos!'});
        }

    }

    render() {
        return (
            <div >
                <header id="new">
                    <Link to="/dashboard" >Voltar</Link>

                    
                </header>
                <p  className="novoPost">Novo Post</p>
                
                <form onSubmit={this.cadastrarPost} id="new-post">
                    <span>{this.state.alert} </span>
                    <label>Titulo:</label><br/>
                    <input type="text" placeholder="Nome do Post"
                     value={this.state.titulo}
                     onChange={(e)=>this.setState({titulo: e.target.value})}
                     autoFocus
                       /><br/>

                    <label>Url da image:</label><br/>
                    <input type="text" placeholder="Url da capa"
                     value={this.state.image}
                     onChange={(e)=>this.setState({image: e.target.value})}
                    
                       /><br/>

                    <label>Descrição:</label><br/>
                    <textarea type="text" placeholder="Escreva a descrição do post aqui"
                     value={this.state.descricao}
                     onChange={(e)=>this.setState({descricao: e.target.value})}
                   
                       /><br/> 

                    <button type="submit" >Cadastrar</button>


                </form>
            </div>
        )
    }
}

export default withRouter(New);
