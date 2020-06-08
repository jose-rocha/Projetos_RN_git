import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            

            <div className="pai">

            <header>
                 <nav className="teste">
                         <div>
                         <Link to="/login" className="link" >Login</Link>
                         </div>
                         
                     </nav>
            </header>
                  
                  
                     {/*<Link  to="/login" color="#fff" className="link" >Login</Link> */}
                    
               


                <div>
                    <p className="t"> Bem Vindo Ao Sistema </p>
                </div>
                <img src={require('../../images/br7.jpeg')} className="br7" alt="Capa da página Home" />
            </div>
        )
    }
}
