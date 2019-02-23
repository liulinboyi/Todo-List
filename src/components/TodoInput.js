import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit(e) {
    //监听 按键事件
    if (e.key === "Enter") {
      console.log("按回车了");
      if (e.target.value) {
        //判断输入内容是否为空
        this.props.Submit.call(this.props, e.target.value);
      } else {
        alert("您没有输入任何内容！");
      }

      e.target.value = "";
    }
  }
  change(e) {
    //监听change事件
    console.log(e.target.value);
  }
  render() {
    return (
      <input
        onChange={e => {
          e.persist();
          this.change(e);
        }}
        onKeyPress={e => {
          this.submit(e);
        }}
        type="text"
        placeholder="请输入待办事项"
        style={{ textIndent: "1em",fontSize: '95%' }}
        className="input"
      />
    );
  }
}

export default TodoInput;
