import React, {Component} from 'react';
import Feed from './components/Feed';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
           feed:[
               {id: 1, username: 'José', curtidas: 10, comentarios:2},
               {id: 2, username: 'Maicon', curtidas: 13, comentarios: 3},
               {id: 3, username: 'Marcelo', curtidas: 6, comentarios: 23},
               {id: 4 , username: 'João', curtidas: 1, comentarios: 0}
               
           ]
        };
       
    }

   
    render(){
        return(
          
            <div>
               {this.state.feed.map((item)=>{
                
                return(

                    <Feed id={item.id} username={item.username} 
                    curtidas={item.curtidas} comentarios={item.comentarios} />
                   
                   ) 
               })}
                
            
            </div>
        )
    }
}