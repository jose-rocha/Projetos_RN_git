import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';

import './new.css';


 class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo:'',
            image: null,
            url:'',
            descricao: '',
            alert: '',
            progress: 0,
        }

        this.cadastrarPost = this.cadastrarPost.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

    }

    componentDidMount(){
        if(!firebase.getCurrent()){
            this.props.history.replace('/login');
            return null;
        }
    }


    cadastrarPost = async(e)=> {
        e.preventDefault();

        if(this.state.titulo !== '' && 
            this.state.image !== '' && 
            this.state.descricao !== '' &&
            this.state.image !== null &&
            this.state.url !== ''){
            let posts = firebase.app.ref('posts');
            let chave = posts.push().key;
            await posts.child(chave).set({
                titulo: this.state.titulo,
                image: this.state.url,
                descricao: this.state.descricao,
                autor: localStorage.nome
            });

            this.props.history.push('/')
        }else{
            this.setState({alert: 'Preencha todos os campos!'});
        }

    }

    //upload de imagens.
   handleFile = async (e)=>{

        if(e.target.files[0]){

            const image = e.target.files[0];

            if(image.type === 'image/png' || image.type === 'image/jpeg' ){
               await this.setState({image: image});
                this.handleUpload();
            }else{
                alert('Envie uma image do tipo PNG ou JPG');
                this.setState({image: null});
                return null;
            }


        }

      
   }

   handleUpload = async()=> {
        const {image} = this.state;
        const currentUid =  firebase.getCurrentUid();
        const uploadTask = firebase.storage.ref(`images/${currentUid}/${image.name}`)
        .put(image);

        await uploadTask.on('state_changed',
        (snapshot)=>{
            //progress
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100 
                );
                this.setState({progress});
        },
        (error)=>{
            //error
            console.log('Error image ' +error);
        },
        ()=>{
            //sucesso!
            firebase.storage.ref(`images/${currentUid}`)
            .child(image.name).getDownloadURL()
            .then(url => {
                this.setState({url: url});
            })

        })
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

                    <input type="file"  onChange={this.handleFile} />
                    {this.state.url !== '' ?
                        <img src={this.state.url} width="250" height="150" 
                            alt="Capa do post"
                        />
                        : 
                        <progress value={this.state.progress} max="100" />
                    }

                    <label>Titulo:</label><br/>
                    <input type="text" placeholder="Nome do Post"
                     value={this.state.titulo}
                     onChange={(e)=>this.setState({titulo: e.target.value})}
                     autoFocus
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
