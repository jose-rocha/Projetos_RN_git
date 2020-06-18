import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
    render() {
        return (
            

            <div className="pai">

          
            <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
                                 

                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav mr-auto">  </ul>
                                            
                            
                                <div  >
                                     <Link to="/login"  className="navbar-brand" >Login </Link>
                                </div>  

                                    

                     </div>

            
            </nav>
            
                  
                  
                     {/*<Link  to="/login" color="#fff" className="link" >Login</Link> */}
                    
               


                <div>
                    <p className="t"> Bem Vindo Ao Sistema </p>
                </div>
                <img src={require('../../images/br7.jpeg')} className="br7" alt="Capa da página Home" />
            </div>
        )
    }
}
