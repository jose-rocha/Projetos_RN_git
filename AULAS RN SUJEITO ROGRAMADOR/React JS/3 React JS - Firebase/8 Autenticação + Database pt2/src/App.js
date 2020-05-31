import React, {Component} from 'react';
import firebase from './fireConnection';

export default class ReactJS extends Component{
  constructor(props){
    super(props);
    this.state = {
        email: '',
        senha: '',
        user: null

    };
    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.auth = this.auth.bind(this);
    this.sair = this.sair.bind(this);
    

   // firebase.auth().signOut(); //deslogando user.

    

 }

 componentDidMount(){
   this.auth();
 }

 auth(){
   firebase.auth().onAuthStateChanged((user)=>{
     if(user){
       this.setState({user: user});
     }
   })
 }

  cadastrar(){

    /*lembrando que para poder usar essa função, tera que liberar na firebase na parte de 
      Authenticator/Sign-in method e ativar o Email/senha, vai ter duas opções só abilita a primeira

    */
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
             alert('Codigo de erro: ' + error.code);
            
    });
    
   


 }

  logar(){

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
             alert('Codigo de erro: ' + error.code);
            
    });
  }

  sair(){
    firebase.auth().signOut()
    .then(()=>{
      this.setState({user: null});
      alert('Usuário Deslogado');
    })
  }
 


  //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
  render() {

    return (
     
      <div  >
          {this.state.user ? //se estiver logado 
            <div>
                <p>Painel Administrativo</p>
                <p>Minha ID: {this.state.user.uid} </p> 
                <p>Meu email:  {this.state.user.email} </p>

                <button onClick={this.sair} >Sair</button>  
            </div>  
            
            : // se não estiver logado ira aparecer a parte abaixo

            <div >
            <h1>Seja Bem vindo!</h1>      

            <label>Email:</label>  <br/>
            <input type="text" value={this.state.email}
              onChange={(e)=> this.setState({email: e.target.value})}
            /> <br/><br/>

            <label>Senha:</label>  <br/>
            <input type="text" value={this.state.senha}
              onChange={(e)=> this.setState({senha: e.target.value})}
            /> <br/>

            <button onClick={this.cadastrar} >Cadastrar</button>
            <button onClick={this.logar} >Logar</button>


            </div>       
                    
        }

       

        
      </div>
    )
  }
}