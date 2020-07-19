import React, {Component} from 'react';
import './global.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebasse from './firebase';

import Home from './components/Home';
//import Header from './components/Header';
import Login from './components/Login';
import HomeItem from './components/HomeItem';
import  Dashboard from './components/Dashboard';
import  Settings from './components/Settings';
import New from './components/New';
import Config from './components/Config';
import Local from './components/Local';

/* import Navbar  from './components/Navbar';
import Sidebar from './components/Sidebar'; */



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
      então vai exibir essa parte abaixo */(
        <BrowserRouter>
          {/*<Header/> */}
        
         {/* <Navbar/>
          <Sidebar/> */}

          <Switch>
         
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Itens" component={HomeItem} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/dashboard/newOs" component={New} />
            <Route exact path="/Itens/config" component={Config} />
            <Route exact path="/Local/:Local" component={Local} />
          </Switch>
        </BrowserRouter>
          
      ) : /* se não mostra essa parte*/ (
        <h1 style={{backgroundColor: '#0D2636', color: '#fff'}} >Carregando...</h1>
      )
  }
}


