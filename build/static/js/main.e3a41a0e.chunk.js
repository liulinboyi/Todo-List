(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(23)},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(9),i=n.n(o),l=(n(16),n(2)),c=n(3),r=n(5),u=n(4),d=n(6),h=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"submit",value:function(t){"Enter"===t.key&&(console.log("\u6309\u56de\u8f66\u4e86"),t.target.value?this.props.Submit.call(this.props,t.target.value):alert("\u60a8\u6ca1\u6709\u8f93\u5165\u4efb\u4f55\u5185\u5bb9\uff01"),t.target.value="")}},{key:"change",value:function(t){console.log(t.target.value)}},{key:"render",value:function(){var t=this;return s.a.createElement("input",{onChange:function(e){e.persist(),t.change(e)},onKeyPress:function(e){t.submit(e)},type:"text",placeholder:"\u8bf7\u8f93\u5165\u5f85\u529e\u4e8b\u9879",style:{textIndent:"1em",width:"276px",height:"29px",fontSize:"20px"},className:"input"})}}]),e}(a.Component),m=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:{display:"inline-block",overflow:"hidden",width:"205px",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"25px",color:"white"}},this.props.list.title)}}]),e}(a.Component),g=(n(17),n(7)),f=n(1),p=n.n(f);p.a.init({appId:"yf5B2o3sR3L2IVJStNOGE8CI-gzGzoHsz",appKey:"0CNlpdYYiITG4csI3v1wyIHC"});p.a;function v(){var t=p.a.User.current();return console.log(t),t?b(t):{}}function b(t){return Object(g.a)({id:t.id},t.attributes)}var S=function(t,e,n){new p.a.Query("Todo").find().then(function(t){var n=t.map(function(t){return Object(g.a)({id:t.id},t.attributes)});e.call(null,n)},function(t){n&&n.call(null,t)})},y=function(t,e,n){var a=t.status,s=t.title,o=t.deleted,i=new(p.a.Object.extend("Todo"));i.set("title",s),i.set("status",a),i.set("deleted",o);var l=new p.a.ACL;l.setPublicReadAccess(!1),l.setWriteAccess(p.a.User.current(),!0),l.setReadAccess(p.a.User.current(),!0),i.setACL(l),i.save().then(function(t){console.log("\u5b58\u50a8\u6210\u529f\u540e\u8fd4\u56de\u7684id",t.id),e.call(null,t.id)},function(t){n&&n.call(null,t)})},w=function(t,e,n){var a=t.id,s=t.title,o=t.status,i=t.deleted,l=p.a.Object.createWithoutData("Todo",a);void 0!==s&&l.set("title",s),void 0!==o&&l.set("status",o),void 0!==i&&l.set("deleted",i),l.save().then(function(t){e&&e.call(null)},function(t){return n&&n.call(null,t)})},E=function(t,e,n){p.a.Object.createWithoutData("Todo",t).destroy().then(function(t){e&&e.call(null)},function(t){n&&n.call(null,t)})};var O=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={selected:"signUp",selectedTab:"signInOrSignUp",formData:{username:"",password:"",email:""}},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"switch",value:function(t){this.setState({selected:t.target.value})}},{key:"signUp",value:function(t){var e=this;t.preventDefault();var n=this.state.formData;!function(t,e,n,a,s){var o=new p.a.User;o.setUsername(e),o.setPassword(n),o.setEmail(t),o.signUp().then(function(t){var e=b(t);a.call(null,e)},function(t){s.call(null,t)})}(n.email,n.username,n.password,function(t){console.log(t),e.props.onSingup(t)},function(t){console.log(t.message),alert(t.message)})}},{key:"signIn",value:function(t){var e=this;t.preventDefault();var n=this.state.formData;!function(t,e,n,a){p.a.User.logIn(t,e).then(function(t){var e=b(t);n.call(null,e)},function(t){a.call(null,t)})}(n.username,n.password,function(t){console.log(t),e.props.onSingin(t)},function(t){210===t.code?alert("\u8d26\u6237\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d"):219===t.code&&alert("\u767b\u5f55\u5931\u8d25\u6b21\u6570\u8d85\u8fc7\u9650\u5236\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\uff0c\u6216\u8005\u901a\u8fc7\u5fd8\u8bb0\u5bc6\u7801\u91cd\u8bbe\u5bc6\u7801\u3002"),console.log(t.code),console.log(t.message)})}},{key:"changeFormData",value:function(t,e){var n=JSON.parse(JSON.stringify(this.state));n.formData[t]=e.target.value,this.setState(n)}},{key:"showForgotPassword",value:function(){var t=JSON.parse(JSON.stringify(this.state));t.selectedTab="forgotPassword",this.setState(t)}},{key:"resetPassword",value:function(t){var e,n,a;t.preventDefault(),e=this.state.formData.email,p.a.User.requestPasswordReset(e).then(function(t){console.log(t),alert("\u53d1\u9001\u6210\u529f"),n.call()},function(t){console.dir(t),a.call(null,t)})}},{key:"returnToSignIn",value:function(){var t=JSON.parse(JSON.stringify(this.state));t.selectedTab="signInOrSignUp",this.setState(t)}},{key:"render",value:function(){var t=s.a.createElement("form",{className:"signUp",onSubmit:this.signUp.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.state.formData.email,onChange:this.changeFormData.bind(this,"email")}))," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c"))),e=s.a.createElement("form",{className:"signIn",onSubmit:this.signIn.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55"),s.a.createElement("a",{href:"#",onClick:this.showForgotPassword.bind(this)},"\u5fd8\u8bb0\u5bc6\u7801\u4e86\uff1f"))),n=s.a.createElement("div",{className:"signInOrSignUp"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)})," ","\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)})," ","\u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?t:null,"signIn"===this.state.selected?e:null)),a=s.a.createElement("div",{className:"forgotPassword"},s.a.createElement("h3",null,"\u91cd\u7f6e\u5bc6\u7801"),s.a.createElement("form",{className:"forgotPassword",onSubmit:this.resetPassword.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.state.formData.email,onChange:this.changeFormData.bind(this,"email")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u53d1\u9001\u91cd\u7f6e\u90ae\u4ef6"),s.a.createElement("a",{href:"#",onClick:this.returnToSignIn.bind(this)},"\u8fd4\u56de\u767b\u5f55"))));return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},"signInOrSignUp"===this.state.selectedTab?n:a))}}]),e}(a.Component),N=(n(19),n(20),n(21),n(22),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={newTodo:"",todoList:[],user:{},isLogin:!1},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"addTodo",value:function(t){var e=this;console.log("App",t),console.log("\u6dfb\u52a0Todo");var n=this.state.todoList;if(console.log(n),console.log(n.length),n.length>=1){var a=n.slice(-1)[0];console.log(a),console.log("push\u4e4b\u540e temptodolist",n);var s={title:t,status:null,deleted:!1};y(s,function(a){console.log(s),console.log(e.state.todoList),n.push({id:a,title:t,status:null,deleted:!1}),e.setState({todoList:n},function(){localStorage.setItem("TodoList",JSON.stringify(e.state.todoList)),console.log(e.state.todoList)})},function(t){console.log(t)})}else{var o={title:t,status:null,deleted:!1};y(o,function(a){n.push({id:a,title:t,status:null,deleted:!1}),console.log(o),console.log(e.state.todoList),e.setState({todoList:n},function(){localStorage.setItem("TodoList",JSON.stringify(e.state.todoList)),console.log(e.state.todoList)})},function(t){console.log(t)})}}},{key:"del",value:function(t){var e=this;console.log(t);var n=this.state.todoList,a=n[t].id;n.splice(t,1),console.log(a),E(a,function(){e.setState({todoList:n},function(){localStorage.setItem("TodoList",JSON.stringify(e.state.todoList))})})}},{key:"componentDidMount",value:function(){var t=this,e=v();if(console.log(e),this.setState({user:e},function(){console.log(t.state.user),0!==Object.keys(t.state.user).length&&t.setState({isLogin:!0})}),localStorage.getItem("TodoList")){var n=JSON.parse(localStorage.getItem("TodoList"));this.setState({todoList:n})}this.getTodolist()}},{key:"getTodolist",value:function(){var t=this,e=v();console.log(e),e&&S(e,function(e){var n=JSON.parse(JSON.stringify(t.state));n.todoList=e,console.log(e),localStorage.setItem("TodoList",JSON.stringify(e)),t.setState(n)})}},{key:"onSingup",value:function(t){var e=this;console.log(t),this.setState({user:t},function(){e.setState({isLogin:!0}),localStorage.setItem(e.state.user.id,JSON.stringify(e.state.user))})}},{key:"signOut",value:function(){localStorage.setItem("TodoList",[]),p.a.User.logOut(),this.setState({user:{},isLogin:!1,todoList:[]})}},{key:"onSingin",value:function(t){var e=this;console.log(t),this.setState({user:t},function(){e.setState({isLogin:!0}),e.getTodolist()})}},{key:"render",value:function(){var t=this,e=this.state.todoList.map(function(e,n){return s.a.createElement("li",{key:n},s.a.createElement("input",{type:"checkbox",checked:e.deleted,onChange:function(){var e=t.state.todoList;e[n].deleted=!e[n].deleted,w(e[n],function(){t.setState({todoList:e},function(){console.log(t.state.todoList)})},function(t){console.log("\u4fee\u6539\u9519\u8bef")})},className:"todoinput",style:{}}),s.a.createElement(m,{list:e}),s.a.createElement("button",{onClick:function(){t.del(n)},style:{display:"inline-block",fontSize:"10px",float:"right"},className:"todobutton"},"\u5220\u9664"))}),n=s.a.createElement(O,{onSingup:function(e){t.onSingup(e)},onSingin:function(e){t.onSingin(e)}});return s.a.createElement("div",{className:"App-header"},s.a.createElement("h1",{style:{color:"white",fontSize:"35px"}},this.state.user.username||"\u6211","\u7684\u5f85\u529e",this.state.user.id?s.a.createElement("button",{onClick:this.signOut.bind(this),className:"logout todobutton"},"\u767b\u51fa"):null),s.a.createElement("div",{className:"iconfont icon-icon"}),s.a.createElement(h,{context:this.state.newTodo,Submit:function(e){t.addTodo(e)}}),s.a.createElement("ol",{style:{paddingLeft:"0px",width:"276px",listStyle:"none"}},e),!1===this.state.isLogin?n:null)}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.e3a41a0e.chunk.js.map