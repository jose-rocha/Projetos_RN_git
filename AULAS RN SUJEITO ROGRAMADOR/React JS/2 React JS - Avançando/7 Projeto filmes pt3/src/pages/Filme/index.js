import React, {Component} from 'react';
import './filme-info.css';
import {Link} from 'react-router-dom';
import Home from '../Home';

export default class Filme extends Component{

    constructor(props){
        super(props);
        this.state = {
            filme: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((r)=> r.json())
        .then((json) => {
            this.setState({filme: json});
            console.log(json);
        })
    }
    
    render() {
        return (
            <div  className={"filme-info"} >
              <h1> {this.state.filme.nome} </h1>
              <img src={this.state.filme.foto} />
                {this.state.filme.length !== 0 && /*essa condisão serve para mostrar tudo na tela de uma vez,
                   pois <h3> Sinopse </h3> naão está sendo requisitado de nehuma API  */
                    <h3> Sinopse </h3> 
                }

              {this.state.filme.sinopse} <br/><br/>

              {this.state.filme.length !== 0 && 
                
                <Link to="/" className="voltar" >Voltar</Link>
              
              }

                


            </div>
        )
    }
}