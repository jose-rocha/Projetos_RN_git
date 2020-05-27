import React, {Component} from 'react';
import {Link } from 'react-router-dom';


export default class Home extends Component{
    render(){
        return(
            <div>
              <h2>Bem vindo a página Home</h2>  <br/>

              <Link to="/sobre" >Sobre</Link>
            </div>
        )
    }
}