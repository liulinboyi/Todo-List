import React, { Component } from 'react';

class ToItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>{ this.props.list.title }</div>
        );
    }
}

export default ToItems;