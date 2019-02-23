import React, { Component } from 'react';

class ToItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={{ display: 'inline-block' }}>{ this.props.list.title }</div>
        );
    }
}

export default ToItems;