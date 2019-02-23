import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
             <input type="text" value={this.props.context}/>
        );
    }
}

export default TodoInput;