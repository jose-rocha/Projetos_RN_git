import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                
                <Route path="/" component={Home} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;