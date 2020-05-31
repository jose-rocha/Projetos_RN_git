import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import './global.css';

export default class App extends Component {

  state = {
    firebaseInitialized: false
  };


  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      //Devolve o usuário

      this.setState({firebaseInitialized: resultado});
    })
  }

  render() {
    return this.state.firebaseInitialized !== false ? (
       
      <BrowserRouter>
         <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}
