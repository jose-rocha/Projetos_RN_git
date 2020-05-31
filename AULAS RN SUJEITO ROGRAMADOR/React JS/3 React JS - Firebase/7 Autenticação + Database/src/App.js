import React, {Component} from 'react';
import firebase from './fireConnection';

export default class ReactJS extends Component{
  constructor(props){
    super(props);
    this.state = {
        nome:'',
        email: '',
        senha: ''

    };
    this.cadastrar = this.cadastrar.bind(this);
    

    firebase.auth().signOut(); //deslogando user.

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
      firebase.database().ref('usuarios').child(user.uid).set({
        nome: this.state.nome
      })
      .then(()=>{
        this.setState({nome: '', email: '', senha: ''});
      })
    }
    })

 }


  cadastrar(e){

    /*lembrando que para poder usar essa função, tera que liberar na firebase na parte de 
      Authenticator/Sign-in method e ativar o Email/senha, vai ter duas opções só abilita a primeira

    */
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
             alert('Codigo de erro: ' + error.code);
            
    });
    
   

    e.preventDefault();
 }

  
 


  //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
  render() {

    return (
     
      <div  >
        <h1>Novo Usuário</h1>
        <form onSubmit={(e)=>{this.cadastrar(e)}} >

        <label>Nome:</label>  <br/>
          <input type="text" value={this.state.nome}
            onChange={(e)=> this.setState({nome: e.target.value})}
          /> <br/><br/>

          <label>Email:</label>  <br/>
          <input type="text" value={this.state.email}
            onChange={(e)=> this.setState({email: e.target.value})}
          /> <br/><br/>

          <label>Senha:</label>  <br/>
          <input type="text" value={this.state.senha}
            onChange={(e)=> this.setState({senha: e.target.value})}
          /> <br/>

          <button type="submit" >Cadastrar</button>


        </form> <br/>

       

        
      </div>
    )
  }
}