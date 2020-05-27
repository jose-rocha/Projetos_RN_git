import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component{
    render(){
        return(
            <div>
                Header Meu projeto <br/>
                <Link to="/" >Ir para Home</Link>
                <hr/>
            </div>
        );
    }
}