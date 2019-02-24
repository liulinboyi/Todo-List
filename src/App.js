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

    // let user = ownUser();
    // console.log(user);
    // if (user) {
    //   TodoModel.getByUser(user, todos => {
    //     let stateCopy = JSON.parse(JSON.stringify(this.state));
    //     stateCopy.todoList = todos;
    //     console.log(todos);
    //     localStorage.setItem("TodoList", JSON.stringify(todos));
    //     this.setState(stateCopy);
    //   });
    // }
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
      temptodolist.push({ id: end.id + 1, title: value });
      console.log(temptodolist);
      let newTodo = {
        id: end.id + 1,
        title: value,
        status: null,
        deleted: false
      };
      TodoModel.create(
        newTodo,
        () => {
          // newTodo.id = id
          // this.state.todoList.push(newTodo)
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
              // LearnCloud(this.state.todoList);
            }
          );
        },
        error => {
          console.log(error);
        }

        // this.setState(
        //   {
        //     todoList: temptodolist
        //   },
        //   () => {
        //     localStorage.setItem("TodoList", JSON.stringify(this.state.todoList));
        //     // LearnCloud(this.state.todoList);
        //   }
      );
    } else {
      temptodolist.push({ id: 1, title: value }); //如果Todolist没有内容 直接 ID为1 然后push 新的事项
      this.setState(
        {
          todoList: temptodolist
        },
        () => {
          localStorage.setItem("TodoList", JSON.stringify(this.state.todoList));
          console.log(this.state.todoList);
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
      // todos.deleted = true;//删除
      // console.log(todos);
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
      // this.state.todoList[index].deleted = true
      // this.setState(this.state)
    });
  }

  componentDidMount() {
    // var APP_ID = "yf5B2o3sR3L2IVJStNOGE8CI-gzGzoHsz";
    // var APP_KEY = "0CNlpdYYiITG4csI3v1wyIHC";

    // AV.init({
    //   appId: APP_ID,
    //   appKey: APP_KEY
    // });
    // let user = AV.User.current();
    // console.log(user)

    // let tempuser = {id:user.id,...user.attributes}
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
    // var TestObject = AV.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject
    //   .save({
    //     words: "Hello World!"
    //   })
    //   .then(function(object) {
    //     alert("LeanCloud Rocks!");
    //   });

    // let tempuser = getUser
    // console.log(tempuser)
    // this.setState({
    //   user:tempuser
    // })

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
        // localStorage.setItem(
        //   this.state.user.id,
        //   JSON.stringify(this.state.user)
        // );
      }
    );
    // this.state({})
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
                  // todo.status = oldStatus;
                  // this.setState(this.state);
                }
              );
              // this.setState(
              //   {
              //     todoList: tempselect
              //   },
              //   () => {
              //     console.log(this.state.todoList);

              //   }
              // );
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
