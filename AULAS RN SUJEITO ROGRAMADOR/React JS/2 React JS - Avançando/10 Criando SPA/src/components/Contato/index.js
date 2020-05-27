import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';


 export default function Contato() {
    
        return (
            <div className="home" id="contato" >
                <h1>Entre em Contato</h1>
                <h2>Telefone (11) 99999-9999)</h2>
                <h3>Rua: Rua das três Marias</h3>

                <Link  smooth to="#home" style={{color: '#fff'}} >Ir para Home</Link>

            </div>
        )
    
}
