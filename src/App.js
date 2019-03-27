import React, { Component } from "react";
import TodoList from "./components/TodoInput";
import ListItem from "./components/ToItems";
// import LearnCloud from "./utils/LearnCloud";
import UserDialog from "./components/UserDialog";
import { ownUser, signOut, TodoModel } from "./utils/learnCloud";
import "./css/App.css";
import "normalize.css";
import "./css/todo.css";
import "./css/iconfont.css";
// import { white } from "ansi-colors";
// var AV = require('leancloud-storage');
// var AV = require("leancloud-storage/live-query");
// var { Query, User } = AV;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todoList: [],
      user: {},
      isLogin: false
    };
  }
  addTodo(value) {
    //添加待办事项
    console.log("App", value);
    console.log("添加Todo");
    let temptodolist = this.state.todoList;
    console.log(temptodolist);
    console.log(temptodolist.length);
    if (temptodolist.length >= 1) {
      //判断todolist的长度 如果Tododist有内容 将ID加1 然后push 新的事项
      let end = temptodolist.slice(-1)[0];
      console.log(end);
      
      console.log("push之后 temptodolist",temptodolist);
      let newTodo = {
        // id: end.id + 1,
        title: value,
        status: null,
        deleted: false
      };
      TodoModel.create(
        newTodo,
        (ObjId) => {
          console.log(newTodo);
          console.log(this.state.todoList);
          temptodolist.push({
            id: ObjId,
            title: value,
            status: null,
            deleted: false
           });
          this.setState(
            {
              todoList: temptodolist
            },
            () => {
              localStorage.setItem(
                "TodoList",
                JSON.stringify(this.state.todoList)
              );
              console.log(this.state.todoList);
  
            }
          );
        },
        error => {
          console.log(error);
        }

      );
    } else {
      
      let newTodo = {
        // id: 1,
        title: value,
        status: null,
        deleted: false
      }//上传数据需要是一个对象。
      TodoModel.create(
        newTodo,
        (ObjId) => {
          temptodolist.push({ id: ObjId,title:value,status:null,deleted:false }); //如果Todolist没有内容 直接 ID为ObjId 然后push 新的事项
          console.log(newTodo);
          console.log(this.state.todoList);
          this.setState(
            {
              todoList: temptodolist
            },
            () => {
              localStorage.setItem(
                "TodoList",
                JSON.stringify(this.state.todoList)
              );
              console.log(this.state.todoList);
         
            }
          );
        },
        error => {
          console.log(error);
        }


      );


    }
  }
  del(index) {
    console.log(index);
    // console.log(todos);
    let tempindex = this.state.todoList;
    let id = tempindex[index].id;
    tempindex.splice(index, 1); //删除对应的值
    console.log(id);
    TodoModel.destroy(id, () => {
    
      this.setState(
        {
          todoList: tempindex
        },
        () => {
          //删除后 将新的值存入localStorage
          localStorage.setItem("TodoList", JSON.stringify(this.state.todoList));
          // LearnCloud(this.state.todoList);
        }
      );
    
    });
  }

  componentDidMount() {

    let tempuser = ownUser();
    console.log(tempuser);
    this.setState(
      {
        user: tempuser
      },
      () => {
        console.log(this.state.user);
        if (Object.keys(this.state.user).length !== 0) {
          this.setState({
            isLogin: true
          });
        }
      }
    );


    if (localStorage.getItem("TodoList")) {
      let templist = JSON.parse(localStorage.getItem("TodoList"));
      this.setState({
        todoList: templist
      });
    }
    this.getTodolist(); //组件挂载就加载待办列表数据
  }
  getTodolist() {
    //加载待办事项
    let user = ownUser();
    console.log(user);
    if (user) {
      TodoModel.getByUser(user, todos => {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.todoList = todos;
        console.log(todos);
        localStorage.setItem("TodoList", JSON.stringify(todos));
        this.setState(stateCopy);
      });
    }
  }
  onSingup(user) {
    //注册
    console.log(user);
    this.setState(
      {
        user: user
      },
      () => {
        this.setState({
          isLogin: true
        });
        localStorage.setItem(
          this.state.user.id,
          JSON.stringify(this.state.user)
        );
      }
    );
  }
  signOut() {
    //登出
    localStorage.setItem("TodoList", []);
    signOut();
    this.setState({
      user: {},
      isLogin: false,
      todoList: []
    });
  }
  onSingin(user) {
    //登录
    console.log(user);
    this.setState(
      {
        user: user
      },
      () => {
        this.setState({
          isLogin: true
        });
        this.getTodolist();

      }
    );

  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index}>
          <input
            type="checkbox"
            checked={item.deleted}
            onChange={() => {
              let tempselect = this.state.todoList;
              tempselect[index].deleted = !tempselect[index].deleted;
              TodoModel.update(
                tempselect[index],
                () => {//修改成功
                  // this.setState(this.state);
                  this.setState(
                    {
                      todoList: tempselect
                    },
                    () => {
                      console.log(this.state.todoList);
                    }
                  );
                },
                error => {//修改失败
                  console.log("修改错误");
                 
                }
              );
          
            }}
            className="todoinput"
            style={{}}
          />
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
    let component = (
      <UserDialog
        onSingup={user => {
          this.onSingup(user);
        }}
        onSingin={user => {
          this.onSingin(user);
        }}
      />
    );

    return (
      <div className="App-header">
        <h1 style={{ color: "white", fontSize: "35px" }}>
          {this.state.user.username || "我"}的待办
          {this.state.user.id ? (
            <button
              onClick={this.signOut.bind(this)}
              className="logout todobutton"
            >
              登出
            </button>
          ) : null}
        </h1>
        <div className="iconfont icon-icon" />
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
        {/* <UserDialog
          onSingup={user => {
            this.onSingup(user);
          }}
        /> */}
        {this.state.isLogin === false ? component : null}
      </div>
    );
  }
}

export default App;
