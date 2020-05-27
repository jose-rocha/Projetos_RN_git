import React, {Component} from 'react';
import './style.css'
import Routes from './routes';

// https:sujeitoprogramador.com/r-api/?api=filmes/

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
             
    }

    
    render(){
        return(
                  
            <div className="app" >
                <Routes /> 
            </div>
        )
    }
}

