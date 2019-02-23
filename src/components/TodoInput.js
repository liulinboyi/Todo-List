import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newTodo: "test",
         };
    }
    render() {
        return (
             <input type="text" value={this.state.newTodo}/>
        );
    }
}

export default TodoInput;