import React, {Component} from 'react'
import  {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './New.css';



import {IoMdExit} from "react-icons/io"; //exit
import {AiFillSetting} from 'react-icons/ai'; //settings
import {FaUserAlt} from 'react-icons/fa'; //User

class New extends Component{


    constructor(props){
        super(props);
        this.state = {
            image: '',
            descricao: '',
            alert: '',
            tipo: '--',
            tipo1: 'Abrigo'
            

        };

        this.cadastrarOS = this.cadastrarOS.bind(this);

    }

    /*Essa função serve para verificar se tem usuário logado trabalha em conjunto
     com a state "nome: localStorage.nome", mesmo colocando a url correta ela vai redirecionar 
     para a página de login. */
     async componentWillMount(){
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

       if(this.state.tipo !== '' && this.state.image !== '' && this.state.descricao){
          let criaOS = firebase.app.ref('ativos');
          let chave = criaOS.push().key;
          await criaOS.child(chave).set({
              tipo: this.state.tipo,
              image: this.state.image,
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


            {/* https://static.inventsys.com.br/70/thumb/f-509766-400.jpg */}


                </nav>

                <form onSubmit={this.cadastrarOS} id="new-form-os" >

                    <span>{this.state.alert} </span>
                    <label>Tipo</label><br/>
                        <select name="selecao" >
                            <option value={this.state.tipo} onChange={(e)=> this.setState({tipo: e.target.value})}>
                                --
                            </option>
                            <option value={this.state.tipo1} onChange={(e)=> this.setState({tipo1: e.target.value})}>
                               Abrigo  
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