import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        newTodo: 'test',
        todoList: [
          {id:1, title:'第一个待办'}
        ]
     };
  }
  render() {
   let todos = this.state.todoList.map((item,index)=>{
      return <li>{item.title}</li>
    })

    return (
        <div className="App-header">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo}/>
        </div>
       
        <ol>
          {todos}
        </ol>
      </div>
    );
    
  }
  }


export default App;
