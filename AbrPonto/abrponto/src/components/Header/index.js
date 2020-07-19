import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

export default function Header(){
   
        return (
           <header  id="main-header" >
               <div className="header-content">
                 <Link to="/login" >Logar</Link>
                { /*<Link to="/" >Br7 Ativos</Link> */}
                   
               </div>
           </header>
        )
    }

