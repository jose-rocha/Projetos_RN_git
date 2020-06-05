import React, { Component } from 'react';
import firebase from '../../firebase';
import './homeItem.css';

export default class HomeItem extends Component {
    state ={
        ativos: [ ]
    }

    componentDidMount(){
        firebase.app.ref('ativos').once('value', (snapshot)=>{
            let state = this.state;
            state.ativos = [];

            snapshot.forEach((childItem)=>{
                state.ativos.push({
                    key: childItem.key,
        /*titulo*/  tipo: childItem.val().tipo,
                    image: childItem.val().image,
                    localizacao: childItem.val().localizacao,
                    ultimaOcorrencia: childItem.val().ultimaOcorrencia,
          /*autor*/ executador: childItem.val().executador,
                    descricao: childItem.val().descricao

                
                })
            });

            this.setState(state);
        })
    }

    render() {
        return (
            <section id="ativos" >
                {this.state.ativos.map((ativo)=>{
                    return(
                        <article key={ativo.key} >
                            <header>
                                <div className="title">
                                    <strong>Tipo: {ativo.tipo} </strong>
                                    <span>Executador: {ativo.executador} </span>
                                </div>
                            </header>
                            <img src={ativo.image} alt="Imagem do Ativo"  />
                           <h1>HomeItem</h1> 
                            <footer>
                                <p>Ação: {ativo.descricao} </p>
                            </footer>
                        </article>
                    )
                })}
            </section>
        )
    }
}
