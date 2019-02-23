import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit(e) {
    if (e.key === "Enter") {
      console.log("按回车了");
    }
  }
  change(e){
    console.log(e.target.value);

  }
  render() {
    return (
      <input
        onChange={e => {
          e.persist();
          this.change(e)
        }}
        onKeyPress={e => {
          this.submit(e);
        }}
        type="text"
      />
    );
  }
}

export default TodoInput;
