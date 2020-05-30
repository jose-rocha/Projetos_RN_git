import React, {Component} from 'react';
import firebase from 'firebase';

export default class ReactJS extends Component{
  constructor(props){
    super(props);
    this.state = {
      novoNome: '',
      novaIdade: '',
      novoCargo: '',


      tokenInput: '',
      nomeInput: '',
      idadeInput: '',
      cargoInput: '',


      token: 'Carregando...',
      nome:'Carregando...',
      idade: 'Carregando...',
      cargo: 'Carregando...'
    };


    this.cadastrar = this.cadastrar.bind(this);
    this.atualizaIdade = this.atualizaIdade.bind(this);
    this.atualizaNome = this.atualizaNome.bind(this);
    this.atualizaCargo = this.atualizaCargo.bind(this);
    this.removeCargo = this.removeCargo.bind(this);
    this.cadastrarNovoUser = this.cadastrarNovoUser.bind(this);

   let firebaseConfig = {
      apiKey: "AIzaSyC8Np2uvBplX9G33TV0SAeMpUW0ITO9Eys",
      authDomain: "reactjsapp-dab24.firebaseapp.com",
      databaseURL: "https://reactjsapp-dab24.firebaseio.com",
      projectId: "reactjsapp-dab24",
      storageBucket: "reactjsapp-dab24.appspot.com",
      messagingSenderId: "410078304504",
      appId: "1:410078304504:web:24313a8e9e55db75bc830d",
      measurementId: "G-81ZRGZ06L5"
    };
    // Initialize Firebase
    if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);


 /*   //Aqui é um olheiro em realtime  por causa do on.('value'), 
      //muda em tempo real quando alguma coisa é alterada no banco.
   firebase.database().ref('token').on('value', (snapshot)=>{
   let state = this.state;
   state.token = snapshot.val();
   this.setState(state);

    }); */

    //Aqui é um olheiro mas não em realtime  por causa do once.('value'),
    //só muda  quando quando dá um refreshná página.
    firebase.database().ref('token').on('value', (snapshot)=>{
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    //Olheiro do nome
    firebase.database().ref('usuarios').child(1).child('nome').on('value', (snapshot)=>{
      let state = this.state;
      state.nome = snapshot.val();
      this.setState(state);
    });

    //Olheiro da idade 
    firebase.database().ref('usuarios').child(1).child('idade').on('value', (snapshot)=>{
      let state = this.state;
      state.idade = snapshot.val();
      this.setState(state);
    });

   /* //Olheiro de nome e idade
    firebase.database().ref('usuarios').child(1).on('value', (snapshot)=>{
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);

    }) */


    //Olheiro do Cargo
    firebase.database().ref('usuarios').child(1).child('cargo').on('value', (snapshot)=>{
      let state = this.state;
      state.cargo = snapshot.val();
      this.setState(state);
    })

  }

 cadastrar(e){

    firebase.database().ref('token').set(this.state.tokenInput);
    this.state.tokenInput = '';


  e.preventDefault(); //para não atualizar a página quando clicar no botão cadastrar.
 }



 atualizaIdade(e){
   
   firebase.database().ref('usuarios').child(1).child('idade').set(this.state.idadeInput);
   this.state.idadeInput = '';
  


  e.preventDefault(); //para não atualizar a página quando clicar no botão cadastrar.

 }


 atualizaNome(e){
  firebase.database().ref('usuarios').child(1).child('nome').set(this.state.nomeInput);
  this.state.nomeInput = '';

  e.preventDefault();
 }

 atualizaCargo(e){

  firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.cargoInput);
  this.state.cargoInput = '';
  


  e.preventDefault();
 }

  
 removeCargo(e){

  firebase.database().ref('usuarios').child(1).child('cargo').remove();
  


 e.preventDefault();  
 }


 //Criar novo usuário
 cadastrarNovoUser(e){

  let usuarios =  firebase.database().ref('usuarios');
  let chave =  usuarios.push().key;

  usuarios.child(chave).set({
    nome: this.state.novoNome,
    idade: this.state.novaIdade,
    cargo: this.state.novoCargo,
    
  });


   this.state.novoNome = '';
   this.state.novaIdade = ''; 
   this.state.novoCargo = '';


  e.preventDefault();

 }

 


  //o nome do banco aqual foi usado nessa aplicação foi ReactJSAPP
  render() {
    const {token, nome, idade, cargo} = this.state;  //desconstruindo

    return (
     
      <div>

        <br/>

          <form onSubmit={this.cadastrarNovoUser} >

             

            <input type='text' value={this.state.novoNome}
              onChange={(e)=> this.setState({novoNome: e.target.value})}
              placeholder='Nome'
            />
             <br/><br/>

            

            <input type='text' value={this.state.novaIdade}
              onChange={(e)=> this.setState({novaIdade: e.target.value})}
              placeholder="Idade"
            /> <br/><br/>


           

          <input type='text' value={this.state.novoCargo}
              onChange={(e)=> this.setState({novoCargo: e.target.value})}
              placeholder='Cargo'
            /> <br/><br/>

          <button type="submit" >Cadastrar Novo usuário</button> <br/><br/><br/>


            

          </form> <hr/>



          <form   onSubmit={this.cadastrar}  >

            <input  type="text" value={this.state.tokenInput}
              onChange={(e)=> this.setState({tokenInput: e.target.value})}
            />
            <br/>

            <button type="submit" >Cadastrar Token</button> <br/><br/>

           
          </form>


          <form   onSubmit={this.atualizaNome} >

            <input  type="text" value={this.state.nomeInput}
                onChange={(e)=> this.setState({nomeInput: e.target.value})}
              />
              <br/>

              <button type="submit" >Atualizar Nome</button> <br/><br/>


          </form> 
          

          <form   onSubmit={this.atualizaIdade} >

          <input  type="text" value={this.state.idadeInput}
              onChange={(e)=> this.setState({idadeInput: e.target.value})}
            />
            <br/>

            <button type="submit" >Atualizar idade</button><br/><br/>


          </form  >

          <form onSubmit={this.atualizaCargo}>

          <input type="text" value={this.state.cargoInput}
            onChange={(e)=> this.setState({cargoInput: e.target.value})}
          /> 
          <br/>

          <button type="submit" >Cadrastrar Cargo</button><br/><br/>

         
          </form>



          <form onSubmit={this.removeCargo} >
            
             <button type="submit">Remover Cargo</button>

          </form>


          

         



        <h1>Token: {token} </h1>
        <h1>Nome: {nome} </h1>
        <h1>Idade: {idade} </h1> 
        <h1>Cargo: {cargo} </h1> <hr></hr>

        

      </div>
    )
  }
}