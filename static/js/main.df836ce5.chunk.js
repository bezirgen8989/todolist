(this["webpackJsonpmy-to-do-list_2.0"]=this["webpackJsonpmy-to-do-list_2.0"]||[]).push([[0],[,,,,,,,,,,,function(t,e,a){t.exports={navigationStyle:"navStyle_navigationStyle__2xBli",active:"navStyle_active__2CMHg"}},,,,,,,,function(t,e,a){t.exports={routingBox:"contentStyle_routingBox__Ca5Kb",contentStyle:"contentStyle_contentStyle__3xLdp"}},function(t,e,a){t.exports={taskStyle:"taskStyle_taskStyle__3qGSE",taskStyle_done:"taskStyle_taskStyle_done__3i88J"}},function(t,e,a){t.exports={allListStyle:"allListStyle_allListStyle__-5-qv",allListStyle_scroll:"allListStyle_allListStyle_scroll__3D9mv"}},,function(t,e,a){t.exports={headerStyle:"headerStyle_headerStyle__bEdC3"}},function(t,e,a){t.exports={footerStyle:"footerStyle_footerStyle__vVy15"}},,function(t,e,a){t.exports={standardStyle:"standartStyle_standardStyle__3F6Jb"}},function(t,e,a){t.exports={formStyle:"formToAddStyle_formStyle__3zKEe"}},function(t,e,a){t.exports={favoriteStyle:"favoriteStyle_favoriteStyle__1qYsQ"}},function(t,e,a){t.exports={urgentStyle:"urgentStyle_urgentStyle__r21Q-"}},,,,,,function(t,e,a){},function(t,e,a){},,,,,,,,,function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(1),r=a.n(n),c=a(22),i=a.n(c),o=(a(35),a(36),a(23)),l=a.n(o),d=function(){return Object(s.jsx)("div",{className:l.a.headerStyle,children:Object(s.jsx)("h1",{children:"Header"})})},u=a(24),j=a.n(u);var k=function(){return Object(s.jsx)("div",{className:j.a.footerStyle,children:Object(s.jsx)("h1",{children:"Footer"})})},b=a(11),h=a.n(b),S=a(9);var O=function(){return Object(s.jsxs)("div",{className:h.a.navigationStyle,children:[Object(s.jsx)("h1",{children:"Navigation"}),Object(s.jsx)("div",{children:Object(s.jsx)(S.b,{to:"/standardsList",activeClassName:h.a.active,children:"Standards task list"})}),Object(s.jsx)("div",{children:Object(s.jsx)(S.b,{to:"/favoritesTask",activeClassName:h.a.active,children:"Favorites task list"})}),Object(s.jsx)("div",{children:Object(s.jsx)(S.b,{to:"/urgentTasks",activeClassName:h.a.active,children:"Urgent tasks list"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(S.b,{to:"/allTasks",activeClassName:h.a.active,children:"All tasks list"}),Object(s.jsx)("br",{})]})]})},f=a(19),x=a.n(f),y=a(3),v=a(8),g=a(26),T=a.n(g),_=a(20),L=a.n(_),p=function(t){return Object(s.jsxs)("span",{className:t.taskStatus?L.a.taskStyle_done:L.a.taskStyle,onClick:t.onChangeFoo,children:[Object(s.jsx)("input",{type:"checkbox",checked:t.taskStatus,onChange:t.onChangeFoo,onClick:t.onChangeFoo}),Object(s.jsx)("span",{children:t.task}),Object(s.jsx)("button",{onClick:t.deleteFoo,children:"Delete task"})]})},A=a(27),m=a.n(A),C=function(t){var e=Object(n.useState)(""),a=Object(v.a)(e,2),r=a[0],c=a[1];return Object(s.jsxs)("span",{className:m.a.formStyle,children:[Object(s.jsx)("input",{type:"text",value:r,onChange:function(t){return c(t.currentTarget.value)},placeholder:"Write your task"}),Object(s.jsx)("button",{onClick:function(){""===r?alert("You can`t add empty task!"):r.length>70?alert("Too many characters, rephrase your new task to add!"):(t.addTaskHOC(t.addTask(r,t.arrType)),c(""))},children:"addTask"})]})},F=function(t){var e=Object(n.useState)(Object(y.a)(t.standardListArr)),a=Object(v.a)(e,2),r=a[0],c=a[1];return Object(s.jsxs)("div",{className:T.a.standardStyle,children:[Object(s.jsx)("h1",{children:"Standard tasks list"}),Object(s.jsx)(C,{addTaskHOC:function(){c(Object(y.a)(t.standardListArr))},addTask:t.addTask,arrType:t.standardListArr}),r.map((function(e,a){return Object(s.jsx)(p,{task:e.taskText,taskStatus:e.taskStatus,onChangeFoo:function(){t.changeStatus(e.id,t.standardListArr),c(Object(y.a)(t.standardListArr))},deleteFoo:function(){t.deleteTask(t.standardListArr,a),c(Object(y.a)(t.standardListArr))}},e.id)}))]})},N=a(28),w=a.n(N),H=function(t){var e=Object(n.useState)(Object(y.a)(t.favoriteListArr)),a=Object(v.a)(e,2),r=a[0],c=a[1];return Object(s.jsxs)("div",{className:w.a.favoriteStyle,children:[Object(s.jsx)("h1",{children:"Favorite tasks list"}),Object(s.jsx)(C,{addTaskHOC:function(){c(Object(y.a)(t.favoriteListArr))},addTask:t.addTask,arrType:t.favoriteListArr}),r.map((function(e,a){return Object(s.jsx)(p,{task:e.taskText,taskStatus:e.taskStatus,onChangeFoo:function(){t.changeStatus(e.id,t.favoriteListArr),c(Object(y.a)(t.favoriteListArr))},deleteFoo:function(){t.deleteTask(t.favoriteListArr,a),c(Object(y.a)(t.favoriteListArr))}},e.id)}))]})},B=a(29),D=a.n(B),E=function(t){var e=Object(n.useState)(Object(y.a)(t.urgentListArr)),a=Object(v.a)(e,2),r=a[0],c=a[1];return Object(s.jsxs)("div",{className:D.a.urgentStyle,children:[Object(s.jsx)("h1",{children:"Urgent tasks list"}),Object(s.jsx)(C,{addTaskHOC:function(){c(Object(y.a)(t.urgentListArr))},addTask:t.addTask,arrType:t.urgentListArr}),r.map((function(e,a){return Object(s.jsx)(p,{task:e.taskText,taskStatus:e.taskStatus,onChangeFoo:function(){t.changeStatus(e.id,t.urgentListArr),c(Object(y.a)(t.urgentListArr))},deleteFoo:function(){t.deleteTask(t.urgentListArr,a),c(Object(y.a)(t.urgentListArr))}},e.id)}))]})},J=a(21),q=a.n(J),Y=function(t){var e=t.allTasksArr,a=[].concat(Object(y.a)(e.favoriteListArr),Object(y.a)(e.standardListArr),Object(y.a)(e.urgentListArr));return Object(s.jsxs)("div",{className:a.length<25?q.a.allListStyle:q.a.allListStyle_scroll,children:[Object(s.jsx)("h1",{children:"All tasks list"}),a.map((function(t){return Object(s.jsx)(p,{task:t.taskText,taskStatus:t.taskStatus,onChangeFoo:function(){alert("Here you can't change tasks status! This page only to show!")}},t.id)}))]})},I=a(2);var K=function(t){return Object(s.jsx)("div",{className:x.a.contentStyle,children:Object(s.jsxs)("div",{className:x.a.routingBox,children:[Object(s.jsx)(I.a,{path:"/standardsList",render:function(){return Object(s.jsx)(F,{standardListArr:t.state.standardListArr,addTask:t.addTask,changeStatus:t.changeStatus,deleteTask:t.deleteTask})}}),Object(s.jsx)(I.a,{path:"/favoritesTask",render:function(){return Object(s.jsx)(H,{favoriteListArr:t.state.favoriteListArr,addTask:t.addTask,changeStatus:t.changeStatus,deleteTask:t.deleteTask})}}),Object(s.jsx)(I.a,{path:"/urgentTasks",render:function(){return Object(s.jsx)(E,{urgentListArr:t.state.urgentListArr,addTask:t.addTask,changeStatus:t.changeStatus,deleteTask:t.deleteTask})}}),Object(s.jsx)(I.a,{path:"/allTasks",render:function(){return Object(s.jsx)(Y,{allTasksArr:t.state})}})]})})};var M=function(t){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(d,{}),Object(s.jsx)(k,{}),Object(s.jsx)(O,{}),Object(s.jsx)(K,{state:t.state.getState(),addTask:t.state.addTask,changeStatus:t.state.changeStatus,deleteTask:t.state.deleteTask})]})},P=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),r(t),c(t)}))},Q={_state:{standardListArr:[],favoriteListArr:[],urgentListArr:[]},getState:function(){return this._state},addTask:function(t,e){return Object(y.a)(e.map((function(t){return t.taskText}))).includes(t)?alert("You have such task! Check your list!"):e.length>=25?alert("Limit test"):e.push({id:Date.now(),taskText:t,taskStatus:!1}),e},changeStatus:function(t,e){e.filter((function(e){return e.id===t&&(e.taskStatus=!e.taskStatus,console.log(t)),e}))},deleteTask:function(t,e){t.splice(e,1)}},U=Q;window.store=Q,i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(S.a,{children:Object(s.jsx)(M,{state:U})})}),document.getElementById("root")),P()}],[[45,1,2]]]);
//# sourceMappingURL=main.df836ce5.chunk.js.map