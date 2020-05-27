import React, {Component} from 'react';
//import './App.css';

import {Container, Head, Titulo, BemVindo} from './styles';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
             
    }

    
    render(){
        return(
                 <Container>
                     <Head>
                     <Titulo>Projeto Styled</Titulo>
                     </Head>

                     <BemVindo cor="00ff00" tamanho={35}>
                         Bem vindo ao sistema
                     </BemVindo>

                    
                 </Container>
        
        )
    }
}

/*

<div className="container">
    <header  className="header" >
       <a className="titulo" > Projeto Styled</a>
    </header >
 <h1>Bem vindo ao sistema!</h1>
  </div>  

*/