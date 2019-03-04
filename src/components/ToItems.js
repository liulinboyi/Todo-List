import React, { Component } from 'react';

class ToItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={{ display: 'inline-block', overflow: 'hidden', width: '205px', whiteSpace: 'nowrap' ,textOverflow: 'ellipsis', fontSize:'25px', color:'white' }}>{ this.props.list.title }</div>
        );
    }
}

export default ToItems;