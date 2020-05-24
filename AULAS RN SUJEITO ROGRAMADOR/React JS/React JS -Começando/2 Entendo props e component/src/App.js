import React from 'react';

const BemVindo = ()  => <h2>Bem vindo(a)</h2> /*se for só numa linha desse jeito funciona direto, 
se não, usa como abaixo */

const BemVindo2 = (props) =>{
    return(
        <div>
            <h2>Bem Vindo(a) {props.nome} </h2>
    <h3>Tenho {props.idade} anos</h3>
        </div>
    );
}


function App(){
    
    return( 
        <div>
        Olá Mundo!
        <BemVindo/>
        <BemVindo2  nome="José" idade="29" />
        <BemVindo2  nome="Bete" idade="27" />

    <h1>Curso React</h1>

    </div>
    )
}

export default App;