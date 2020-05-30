import React, {Component} from 'react';
import firebase from './fireConnection';

export default class ReactJS extends Component{
  constructor(props){
    super(props);
    this.state = {
        email: '',
        senha: ''

    };
    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);


    // firebase.auth().signOut(); //deslogando user.

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
      alert('Usuário logado com sucesso! \n Email: ' + user.email);
    }
    })

 }


  logar(e){

    /*lembrando que para poder usar essa função, tera que liberar na firebase na parte de 
      Authenticator/Sign-in method e ativar o Email/senha, vai ter duas opções só abilita a primeira

    */
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
      if(error.code === 'auth/wrong-password'){
        alert('Senha Incorreta!');
      }else{
        alert('Codigo de erro: ' + error.code);
      }      
    })
    
   

    e.preventDefault();
 }

    sair(){
      firebase.auth().signOut();
      alert('Usuário deslogado!')
    }
 


  //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
  render() {

    return (
     
      <div  >
        <h1>Entrar</h1>
        <form onSubmit={this.logar} >

          <label>Email:</label>  <br/>
          <input type="text" value={this.state.email}
            onChange={(e)=> this.setState({email: e.target.value})}
          /> <br/><br/>

          <label>Senha:</label>  <br/>
          <input type="text" value={this.state.senha}
            onChange={(e)=> this.setState({senha: e.target.value})}
          /> <br/>

          <button type="submit" >Logar</button>


        </form> <br/>

        <button onClick={this.sair} >Sair</button>

        
      </div>
    )
  }
}