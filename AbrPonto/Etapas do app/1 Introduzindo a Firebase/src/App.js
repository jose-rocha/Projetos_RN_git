import React, {Component} from 'react';
import './global.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebasse from './firebase';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';



export default class App extends Component {

    //state que verifica se o user está  logado.
    state = {
      firebaseInitialized: false
    };

    componentDidMount(){
      firebasse.isInitialized().then(resultado =>{
        // devolve o usuário
        this.setState({firebaseInitialized: resultado});
      })
    }

  render() {
      return this.state.firebaseInitialized !== false ? /*? se estiver diferente de falso
      então vai exibir essa parte aaixo */(
        <BrowserRouter>
          <Header/>
          <Switch>
          <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
          
      ) : /* se não mostra essa parte*/ (
        <h1>Carregando...</h1>
      )
  }
}


