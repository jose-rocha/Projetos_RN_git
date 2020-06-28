import React, {Component} from 'react'
import  {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './New.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Dropdown } from 'react-bootstrap';


import {IoMdExit} from "react-icons/io"; //exit
import {AiFillSetting} from 'react-icons/ai'; //settings
import {FaUserAlt} from 'react-icons/fa'; //User

class New extends Component{


    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: '',
            descricao: '',
            alert: '',
            tipo: '--',
            progress: 0,

        };

        this.cadastrarOS = this.cadastrarOS.bind(this);
        this.pegarSelect = this.pegarSelect.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUploadImg =  this.handleUploadImg.bind(this);

    }


    

    //
    handleFile = async (e)=> {
        if(e.target.files[0]){
        const img = e.target.files[0];

        if(img.type === 'image/png' || img.type === 'image/jpeg'){
          await  this.setState({image: img});
          this.handleUploadImg();
            }else{
                alert('Envie uma imagem do tipo PNG ou JPG');
                this.setState({image: null}); //garantindo que se enviar uma arquivo que não seja png ou jpeg ele não carregue para o banco
                return null;
            }
        }
    }


    //
    handleUploadImg = async()=> {
        // console.log(this.state.image);

        const {image } = this.state;
        const currentUid = firebase.getCurrentUid();
        const uploadTask = firebase.storage.ref(`images/${currentUid}/${image.name}`)
        .put(image);
      
        // console.log(currentUid);

        await uploadTask.on('state_changed',
        (snapshot)=>{
            //progress
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
            this.setState({progress});
        },
        (error)=>{
            //error
            console.log('Error imagem: '+ error);
        },
        ()=>{
            //sucesso!
            firebase.storage.ref(`images/${currentUid}`)
            .child(image.name).getDownloadURL()
            .then(url =>{
                this.setState({url: url});
            })
        }) 

    }



    //função para pegar item selecionado no select
    pegarSelect(e){
        this.setState({tipo: e.target.value});
    }

    /*Essa função serve para verificar se tem usuário logado trabalha em conjunto
     com a state "nome: localStorage.nome", mesmo colocando a url correta ela vai redirecionar 
     para a página de login. */
     async componentDidMount(){
        if(!firebase.getCurrent()){
            alert('Area restrita, para acessar essa página você precisa estar logado!');
            this.props.history.replace('/login');
            return null;
        }

        firebase.getCurrent((info)=>{
            localStorage.nome = info.val().nome;
            this.setState({nome: localStorage.nome});
        })
    }
    
   //função para deslogar
    logout = async ()=> {
       await firebase.logout()
       .catch((error)=>{
           console.log(error);
       });
      localStorage.removeItem("nome");
       this.props.history.push('/login');
    } 
    

   cadastrarOS = async(e)=>{
       e.preventDefault();

       if(this.state.tipo !== ''
        && this.state.image !== '' 
        && this.state.descricao !== ''
        && this.state.image !== null
        && this.state.url !== ''){
          let criaOS = firebase.app.ref('ativos');
          let chave = criaOS.push().key;
          await criaOS.child(chave).set({
              tipo: this.state.tipo,
              image: this.state.url,
              descricao: this.state.descricao,
              executador: localStorage.nome
          });

          this.props.history.push('/Itens');
       }else{
           this.setState({alert: 'Preencha todos os campos!'});
       }
    }


    render(){
        return(
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-header" >
                        <Link  to="/Itens"   className="navbar-brand" >
                            <span > BR7mobilidade</span>  {/*BR7mobilidade */}
                        </Link>
                    </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">  </ul>
                                
                   
                    <div >
                    <div className="nav navbar-nav navbar-right" >
                    


                        <div className="espaco">   
                        <Link  to="/user"   title="Meu perfil" >
                        <FaUserAlt color="#fff" size="15px"  /> {/*User */} 
                        </Link>
                        </div>

                        <div>
                        <Link  to="/settings"  title="Configurações da conta"   className="espaco">
                            <AiFillSetting color="#fff" size="15px"  />  {/*configurações */}
                        </Link>
                        </div> 

                        <div>
                        <Link  to="/login"  onClick={()=> this.logout()} title="Sair" >
                            <IoMdExit color="#fff" size="15px"  /> {/*Sair */}
                        </Link>
                        </div> 

                        </div>

                    </div>

  </div>
</nav>

                <form onSubmit={this.cadastrarOS} id="new-form-os" >

                    <span>{this.state.alert} </span>
                    <label>Tipo</label><br/>

                        <select name="selecao" value={this.state.tipo} onChange={this.pegarSelect}  >
                            <option value="--">
                                --
                            </option>
                            <option value="Abrigo" >
                               Abrigo  
                             </option>
                             <option value="Abrigo › Modelo Antigo"> 
                                Abrigo › Modelo Antigo 
                            </option>
                            <option value="Abrigo › Modelo Concreto"> 
                                Abrigo › Modelo Concreto 
                            </option>
                            <option value="Abrigo › Modelo Corredor" >
                                 Abrigo › Modelo Corredor 
                            </option>
                            <option value="Abrigo › Modelo novo iluminado" > 
                                Abrigo › Modelo novo iluminado 
                            </option>
                            <option value="Abrigo › Modelo Novo sem iluminação" > 
                                Abrigo › Modelo Novo sem iluminação 
                            </option>
                            <option value="Placa" > 
                                Placa 
                            </option>
                            <option value="Ponto Fictício">
                                 Ponto Fictício
                             </option >
                            <option value="Totem"> 
                                Totem
                             </option>
                           
                        </select> <br/><br/>

                        <label>Descrição:</label><br/>
                        <textarea type="text" placeholder="Descreva o que será feito" value={this.state.descricao} 
                        onChange={(e)=> this.setState({descricao: e.target.value})} 
                         /> <br/><br/>

                       
                        <input type="file" onChange={this.handleFile} />
                        {this.state.url !== '' ?
                        <img src={this.state.url} width="250" height="150" alt="imagem da OS" />
                        :
                        <progress value={this.state.progress} max="100" />

                        } <br/><br/>

                         <button type="submit" >Cadastrar OS</button>


                </form>
                
            </div>
        );
    }
}

export default withRouter(New);