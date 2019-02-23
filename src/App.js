import React, { Component } from "react";
import TodoList from "./components/TodoInput";
import ListItem from "./components/ToItems";
import "./css/App.css";
import "normalize.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todoList: []
    };
  }
  addTodo(value) {
    //添加待办事项
    console.log("App", value);
    console.log("添加Todo");
    let temptodolist = this.state.todoList;
    console.log(temptodolist);
    if (temptodolist.length >= 1) {
      //判断todolist的长度 如果Tododist有内容 将ID加1 然后push 新的事项
      let end = temptodolist.slice(-1)[0];
      console.log(end);
      temptodolist.push({ id: end.id + 1, title: value });
      this.setState({
        todoList: temptodolist
      });
    } else {
      temptodolist.push({ id: 1, title: value }); //如果Todolist没有内容 直接 ID为1 然后push 新的事项
      this.setState({
        todoList: temptodolist
      });
    }
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index}>
          <ListItem list={item} />
          {/* 抽离待办列表 */}
        </li>
      );
    });

    return (
      <div className="App-header">
        <h1>我的待办</h1>
        <div className="inputWrapper" />
        <TodoList
          context={this.state.newTodo} //父向子传递 值
          Submit={value => {
            this.addTodo(value); //箭头函数保持this的一致性
          }} //父向子传递传递函数
        />
        {/* 抽离输入框 */}
        <ol>{todos}</ol>
      </div>
    );
  }
}

export default App;
