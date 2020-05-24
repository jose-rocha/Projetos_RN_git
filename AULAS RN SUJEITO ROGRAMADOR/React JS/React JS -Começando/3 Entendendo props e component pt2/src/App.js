import React from 'react';

const Equipe = (props) =>{
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} 
            idade={props.idade} />

            <Social yt={props.youtube} lk={props.linkendin} in={props.instagram} />

          <hr/>  
        </div>
    );
}

const Sobre =(props)=>{
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo} </h3>
            <h3>Idade: {props.idade} anos </h3>
        </div>
    );
}

const Social = (props)=>{
    return(
        <div>
            <a href={props.yt}>Youtube </a>
            <a href={props.lk} >Linkendin </a>
            <a href={props.in} >Instagram </a>
        </div>
    );
}

function App(){
    
    return( 
        <div>

            <h1>Conheça nossa equipe</h1>

            <Equipe nome="José" cargo="Programador RN" idade="29" 
            youtube="https://www.youtube.com/channel/UC0hR4KGg13CdjQACYJHiUoQ?view_as=subscriber"
            linkendin="https://www.linkedin.com/feed/"
            instagram="https://www.instagram.com/?hl=pt-br" />
            <Equipe nome="Marcos" cargo="Full Stack" idade="24" />
            <Equipe nome="Amanda" cargo="Programadora" idade="23"  />

        </div>
    )
}

export default App;