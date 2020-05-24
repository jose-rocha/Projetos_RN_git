import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          nome: '',
          email: '',
          senha: '',
          error: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }


    cadastrar(e){
        const {nome, email, senha} = this.state;

        if(nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}` )
        } else{
            this.setState({error: 'Ops! Tem algo para preencher'})
        }

        
        //e.preventDefault(); essa função é para quando clicar no botão cadastrar não carregue a página
        e.preventDefault();
    }

   
    render(){
        return(
          
            <div>
                <h1>Novo usuário</h1>
                {this.state.error && <p> {this.state.error} </p>}

                <form onSubmit={this.cadastrar}>

                    <label>Nome:</label>  <br/>
                     <input type="text" value={this.state.nome}
                     onChange={(e)=> this.setState({nome: e.target.value})} />

                        <br/> <br/>

                    <label> Email:</label> <br/>
                     <input type="email" value={this.state.email}
                      onChange={(e)=> this.setState({email: e.target.value})} />

                      <br/> <br/>
                     <label>Senha:</label> <br/>
                     <input type="password" value={this.state.senha}
                        onChange={(e)=> this.setState({senha: e.target.value})} /> 

                        <br/><br/>

                        <button type="submit" >Cadastrar</button>
                </form>

                
            </div>
        )
    }
}