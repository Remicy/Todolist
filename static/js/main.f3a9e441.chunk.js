(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),u=n(6),d=n(3),l=n(4),i=n(7),s=n(5),f=n(8),h=function(t){function e(){var t,n;Object(d.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={todoText:"",todoArr:[]},n.onChange=function(t){n.setState({todoText:t.target.value})},n.addTodo=function(){var t=n.state,e=t.todoText,o=t.todoArr;n.setState({todoText:"",todoArr:[e].concat(Object(u.a)(o))})},n.delTodo=function(t){var e=n.state,o=(e.todoText,e.todoArr);n.setState({todoArr:o.filter(function(e,n){return n!=t})})},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.state,n=e.todoText,o=e.todoArr;return a.a.createElement("div",null,a.a.createElement("h1",null,"Todo List"),a.a.createElement("input",{type:"text",onChange:this.onChange,value:n}),a.a.createElement("button",{onClick:this.addTodo},"Submit"),a.a.createElement("ul",null,o.map(function(e,n){return a.a.createElement("li",{onClick:function(){return t.delTodo(n)}},e)})))}}]),e}(o.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f3a9e441.chunk.js.map