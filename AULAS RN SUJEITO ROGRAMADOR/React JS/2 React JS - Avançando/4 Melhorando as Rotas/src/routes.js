import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

 const Routes = ()=>{
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre"  component={Sobre} />
                <Route path="/produto/:id" component={Produto} />
                <Route path="/produto/:id" component={Produto} />
                <Route path="*" component={Erro} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;