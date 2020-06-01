import React, { Component } from 'react';
import firebase from '../../firebase';
import './home.css';

export default class Home extends Component {

    state = {
        posts:[

        ]
    }

    componentDidMount(){
        firebase.app.ref('posts').once('value', (snapshot)=>{
            let state = this.state;
            state.posts = [];


            snapshot.forEach((chilItem)=>{
                state.posts.push({
                    key: chilItem.key,
                    titulo: chilItem.val().titulo,
                    image: chilItem.val().image,
                    descricao: chilItem.val().descricao,
                    autor: chilItem.val().autor,
                    
                })
            });
            this.setState(state);
        })
    }

    render() {
        return (
            <section id="posts" >
                {this.state.posts.map((posts)=>{
                    return(
                        <article key={posts.key} >
                            <header>
                                <div className="title" >
                                    <strong>{posts.titulo} </strong>
                                    <span>Autor: {posts.autor} </span>
                                </div>
                            </header>

                            <img src={posts.image} alt="Capa do post" width="720" height="650" />
                            <footer>
                                <p>Descrição</p>
                            </footer>
                        </article>
                    )
                })}
            </section>
        )
    }
}
