import React, {Component} from 'react';

export default class Produto extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: ''
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params
        //console.log(id);
        this.setState({id: id});
    }

    render(){
        return(
            <div>
                <h1>Produto {this.state.id} </h1>

              
            </div>
        )
    }
}