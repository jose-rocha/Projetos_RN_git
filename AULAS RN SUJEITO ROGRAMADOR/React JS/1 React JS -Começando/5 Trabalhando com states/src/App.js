import React, { Component } from 'react';

export default class App extends Component {
        constructor(props){
            super(props);
            this.state = {
                nome: "José",
                contador: 0
            }

            this.aumentar = this.aumentar.bind(this);
            this.diminuir = this.diminuir.bind(this);
        }

        diminuir(){
            let state = this.state;
            if(state.contador === 0){
                alert('Não é premetido numero menor que zero!');
                return;
            }


            state.contador -= 1;
            state.nome = "José";
            this.setState(state);
        }

        aumentar(){
            let state = this.state;
            state.contador += 1;
            state.nome= "Rocha"
            this.setState(state);
        }

    render() {
        return (
            <div>
                <h1>Contador</h1> 
                <h1>{this.state.nome} </h1>

                <h3>
                    <button onClick={this.diminuir} >-</button>
                        {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>

            </div>
        );
    }
}
