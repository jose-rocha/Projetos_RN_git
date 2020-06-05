import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="full">
                <h1 className="t"> Bem Vindo Ao Sistema </h1>
                <img src={require('../../images/br7.jpeg')} className="br7" />
            </div>
        )
    }
}
