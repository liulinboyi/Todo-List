import React, { Component } from "react";
import TodoList from "./components/TodoInput";
import ListItem from "./components/ToItems";
import "./css/App.css";
import "normalize.css";
import "./css/todo.css";
import "./css/iconfont.css";

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
      this.setState(
        {
          todoList: temptodolist
        },
        () => {
          localStorage.setItem("TodoList", JSON.stringify(this.state.todoList));
        }
      );
    } else {
      temptodolist.push({ id: 1, title: value }); //如果Todolist没有内容 直接 ID为1 然后push 新的事项
      this.setState({
        todoList: temptodolist
      });
    }
  }
  del(index) {
    console.log(index);
    let tempindex = this.state.todoList;
    tempindex.splice(index, 1); //删除对应的值
    this.setState(
      {
        todoList: tempindex
      },
      () => {
        //删除后 将新的值存入localStorage
        localStorage.setItem("TodoList", JSON.stringify(this.state.todoList));
      }
    );
  }

  componentDidMount() {
    if (localStorage.getItem("TodoList")) {
      let templist = JSON.parse(localStorage.getItem("TodoList"));
      this.setState({
        todoList: templist
      });
    }
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index}>
          <input type="checkbox" className="todoinput" style={{}} />
          <ListItem list={item} />
          {/* 抽离待办列表 */}
          <button
            onClick={() => {
              this.del(index);
            }}
            style={{
              display: "inline-block",
              fontSize: "10px",
              float: "right"
            }}
            className="todobutton"
          >
            删除
          </button>
        </li>
      );
    });

    return (
      <div className="App-header">
        <h1>我的待办</h1>
        <div className="inputWrapper" className="iconfont icon-icon" />
        <TodoList
          context={this.state.newTodo} //父向子传递 值
          Submit={value => {
            this.addTodo(value); //箭头函数保持this的一致性
          }} //父向子传递传递函数
        />
        {/* 抽离输入框 */}
        <ol style={{ paddingLeft: "0px", width: "276px", listStyle: "none" }}>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
