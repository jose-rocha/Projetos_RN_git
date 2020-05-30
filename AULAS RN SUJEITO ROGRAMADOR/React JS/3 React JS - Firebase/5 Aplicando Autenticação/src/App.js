import React, {Component} from 'react';
import firebase from './fireConnection';

export default class ReactJS extends Component{
  constructor(props){
    super(props);
    this.state = {
        email: '',
        senha: ''

    };
    this.cadastrar = this.cadastrar.bind(this);

 }


  cadastrar(e){

    /*lembrando que para poder usar essa função, tera que liberar na firebase na parte de 
      Authenticator/Sign-in method e ativar o Email/senha, vai ter duas opções só abilita a primeira

    */
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
      if(error.code === 'auth/invalid-email'){
        alert('Email invalido!');
      }
      if(error.code === 'auth/weak-password'){
        alert('Senha Fraca!');
      }else{
        alert('Codigo de erro: '+ error.code)
      }

      
    })
    
   

    e.preventDefault();
 }
 


  //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
  render() {

    return (
     
      <div  >
        <form onSubmit={this.cadastrar} >

          <label>Email:</label>  <br/>
          <input type="email" value={this.state.email}
            onChange={(e)=> this.setState({email: e.target.value})}
          /> <br/><br/>

          <label>Senha:</label>  <br/>
          <input type="text" value={this.state.senha}
            onChange={(e)=> this.setState({senha: e.target.value})}
          /> <br/>

          <button type="submit" >Cadastrar</button>


        </form>
      </div>
    )
  }
}