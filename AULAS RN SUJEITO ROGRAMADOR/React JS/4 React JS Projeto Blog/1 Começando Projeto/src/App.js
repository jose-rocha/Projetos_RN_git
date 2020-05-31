import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
       
      <BrowserRouter>
         <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
