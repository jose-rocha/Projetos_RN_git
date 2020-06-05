import React, {Component} from 'react';
import './global.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebasse from './firebase';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import HomeItem from './components/HomeItem';
import  Dashboard from './components/Dashboard';
import  Settings from './components/Settings';



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
          {/*<Header/> */}
          <Switch>
           <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Itens" component={HomeItem} />
            <Route exact path="/dashboard" component={ Dashboard} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </BrowserRouter>
          
      ) : /* se não mostra essa parte*/ (
        <h1>Carregando...</h1>
      )
  }
}


