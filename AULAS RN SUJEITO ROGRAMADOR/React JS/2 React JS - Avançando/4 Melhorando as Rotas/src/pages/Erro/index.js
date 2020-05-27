import React,  {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Erro extends Component{
    render(){
        return(
            <div>
                <h2>Ops! Página não encontrada!</h2>
                <h3>Você está procurando por:</h3>
                <Link to="/" > Home</Link> <br/><br/>
                <Link to="/Sobre" >Sobre</Link> 
            </div>
        )
    }
}