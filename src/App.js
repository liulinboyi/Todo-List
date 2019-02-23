import React, { Component } from "react";
import TodoList from "./components/TodoInput";
import ListItem from "./components/ToItems";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "test",
      todoList: [{ id: 1, title: "第一个待办" }]
    };
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={ index }>
          <ListItem list={ item } />
          {/* 抽离待办列表 */}
        </li>
      );
    });

    return (
      <div className="App-header">
        <h1>我的待办</h1>
        <div className="inputWrapper" />
        <TodoList context={this.state.newTodo} />
        {/* 抽离输入框 */}
        <ol>{todos}</ol>
      </div>
    );
  }
}

export default App;
