import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="full">
                  
                  <header id="inicio">
                     <Link  to="/login" color="#fff" className="link" >Login</Link> 
                 </header>


                <h1 className="t"> Bem Vindo Ao Sistema </h1>
                <img src={require('../../images/br7.jpeg')} className="br7" alt="Capa da página Home" />
            </div>
        )
    }
}
