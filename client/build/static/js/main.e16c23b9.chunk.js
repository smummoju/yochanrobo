(this["webpackJsonpyochanrobo-client"]=this["webpackJsonpyochanrobo-client"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(32),r=n.n(i),o=(n(86),n(87),n(29)),s=n(15),l=n(17),j=n(13),d=function(e){return fetch("/api/player/get?email=".concat(e)).then((function(e){return e.json()})).then((function(e){return e||{}}),(function(e){console.log(e)}))},u=function(e){var t=e;return console.log(t),fetch("/api/player/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e),e})).catch((function(e){console.error("Error:",e)}))},b=(n(88),n(151)),h=n(152),m=n(154),O=n(149),f=n(153),x=n(150),p=(n(89),n(54)),v=n(55),g=n(2);var N=function(e){for(var t,n,c=e.currentPosition,a=e.rowIndex,i=e.columnIndex,r=e.path,o=0;o<r.length;o++){var s=Object(j.a)(r[o].coord,2),l=s[0],d=s[1];l===a&&d===i&&(t=o+1,n=r[o].state)}var u,b=Object(j.a)(r[r.length-1].coord,2),h=b[0],m=b[1],O=Object(g.jsx)("div",{className:"position",children:"\xa0\xa0\xa0\xa0\xa0"}),f=Object(j.a)(r[c].coord,2),x=f[0],N=f[1];return x===a&&N===i&&(O=Object(g.jsx)("div",{className:"position",children:Object(g.jsx)(p.a,{icon:v.b})})),a===h&&i===m&&(u=Object(g.jsx)(p.a,{icon:v.a})),Object(g.jsxs)("div",{className:"cell-container",children:[u||O,Object(g.jsx)("div",{className:"feedback",children:n}),Object(g.jsx)("div",{className:"subscript",children:Object(g.jsx)("div",{className:"subinner",children:t})})]})},P=n(140),y=n(144);var S=function(){var e=new URLSearchParams(Object(s.g)().search),t=Object(s.f)(),n=Object(c.useState)({name:"",email:"",data:{currentPosition:0,path:[{coord:[3,0],state:""},{coord:[3,1],state:""},{coord:[3,2],state:""},{coord:[3,3],state:""},{coord:[2,3],state:""},{coord:[1,3],state:""},{coord:[0,3],state:""}]}}),a=Object(j.a)(n,2),i=a[0],r=a[1];Object(c.useEffect)((function(){var t=e.get("email");u(t)}),[]);var o=function(){t.push("/login")},u=function(e){e||o(),d(e).then((function(e){e?r(e):o()}))},p=function(){r(JSON.parse(JSON.stringify(i)))},v=function(e){var t=i.data.currentPosition;i.data.path[t].state=e,p()},S=Object(l.a)(Array(4)).map((function(e,t){return t}));return Object(g.jsx)("div",{className:"grid",children:Object(g.jsxs)("div",{className:"feedbacksplit",children:[Object(g.jsxs)("div",{className:"main",children:[Object(g.jsx)("div",{className:"grid-container",children:Object(g.jsx)(O.a,{component:x.a,children:Object(g.jsx)(b.a,{"aria-label":"simple table",children:Object(g.jsx)(h.a,{children:S.map((function(e,t){return Object(g.jsx)(f.a,{children:S.map((function(e,n){return Object(g.jsx)(m.a,{align:"center",className:"cell",children:Object(g.jsx)(N,{rowIndex:t,columnIndex:n,path:i.data.path,currentPosition:i.data.currentPosition})})}))},t)}))})})})}),Object(g.jsx)("div",{className:"bts-container",children:Object(g.jsxs)(P.a,{spacing:2,direction:"row",children:[Object(g.jsx)(y.a,{variant:"contained",onClick:function(){i.data.currentPosition-1>=0&&(i.data.currentPosition=i.data.currentPosition-1),p()},children:"Previous State"}),Object(g.jsx)(y.a,{variant:"contained",onClick:function(){console.log("Cikc"),i.data.currentPosition+1<i.data.path.length&&(i.data.currentPosition=i.data.currentPosition+1),p()},children:"Next State"}),Object(g.jsx)(y.a,{variant:"contained",onClick:function(){(function(e){var t=e;return fetch("/api/player/update/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e),e})).catch((function(e){console.error("Error:",e)}))})(i).then((function(e){e&&e.success&&t.push("/result/?email=".concat(i.email))}))},children:"Submit"})]})})]}),Object(g.jsx)("div",{className:"feedback-container",children:Object(g.jsxs)(P.a,{spacing:2,direction:"column",children:[Object(g.jsx)("h3",{children:"Feedback"}),Object(g.jsx)(y.a,{variant:"contained",onClick:function(){return v("+")},children:"+"}),Object(g.jsx)(y.a,{variant:"contained",onClick:function(){return v("-")},children:"-"})]})})]})})},C=n(58),w=n.n(C),k=n(68),T=n(5),E=n(26),I=n(143),J=(n(99),[{name:"name",label:"Name",id:"name"},{name:"email",label:"Email",id:"email"}]),F={name:"",email:"",formSubmitted:!1,success:!1},L=function(){var e=Object(c.useState)(F),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(s.f)(),b=function(e){var t=e.target,c=t.name,i=t.value;a(Object(E.a)(Object(E.a)({},n),{},Object(T.a)({},c,i))),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=Object(E.a)({},o);"name"in e&&(t.name=e.name?"":"This field is required."),"email"in e&&(t.email=e.email?"":"This field is required.",e.email&&(t.email=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.email)?"":"Email is not valid.")),l(Object(E.a)({},t))}(Object(T.a)({},c,i))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.name&&e.email&&Object.values(o).every((function(e){return""===e}));return t},m=function(){var e=Object(k.a)(w.a.mark((function e(t){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Object.values(o).every((function(e){return""===e}))&&h()&&(c={email:n.email,name:n.name,data:{currentPosition:0,path:[{coord:[3,0],state:""},{coord:[3,1],state:""},{coord:[3,2],state:""},{coord:[3,3],state:""},{coord:[2,3],state:""},{coord:[1,3],state:""},{coord:[0,3],state:""}]}},u(c).then((function(e){e&&e.success&&d.push("/grid/?email=".concat(n.email))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"loginPage",children:Object(g.jsx)("div",{className:"form-container",children:Object(g.jsxs)("form",{autoComplete:"off",onSubmit:m,className:"form",children:[J.map((function(e,t){var n,c;return Object(g.jsx)(I.a,Object(E.a)({onChange:b,onBlur:b,style:{margin:10},name:e.name,label:e.label,error:o[e.name],multiline:null!==(n=e.multiline)&&void 0!==n&&n,rows:null!==(c=e.rows)&&void 0!==c?c:1,autoComplete:"none",formControlProps:{fullWidth:!0}},o[e.name]&&{error:!0,helperText:o[e.name]}),t)})),Object(g.jsx)(y.a,{variant:"contained",type:"submit",color:"secondary",disabled:!h(),children:"Login"})]})})})},D=n(155);n(101);var B=function(){var e=new URLSearchParams(Object(s.g)().search),t=Object(s.f)(),n=Object(c.useState)({name:"",email:"",data:{currentPosition:0,path:[]}}),a=Object(j.a)(n,2),i=a[0],r=a[1],o=function(){t.push("/login")};return Object(c.useEffect)((function(){!function(e){e||o(),d(e).then((function(e){e?r(e):o()}))}(e.get("email"))}),[]),Object(g.jsx)("div",{className:"result-page",children:Object(g.jsxs)("div",{className:"json-display",children:[Object(g.jsx)("h2",{children:"Player Details"}),Object(g.jsx)(O.a,{component:x.a,children:Object(g.jsx)(b.a,{"aria-label":"simple table",children:Object(g.jsxs)(h.a,{children:[Object(g.jsxs)(f.a,{children:[Object(g.jsx)(m.a,{align:"center",className:"cell",children:"Name"}),Object(g.jsx)(m.a,{align:"center",className:"cell",children:i.name})]}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)(m.a,{align:"center",className:"cell",children:"Email"}),Object(g.jsx)(m.a,{align:"center",className:"cell",children:i.email})]})]})})}),Object(g.jsx)("h2",{children:"Grid Details"}),Object(g.jsx)(O.a,{component:x.a,children:Object(g.jsxs)(b.a,{"aria-label":"simple table",children:[Object(g.jsx)(D.a,{children:Object(g.jsxs)(f.a,{children:[Object(g.jsx)(m.a,{align:"center",children:Object(g.jsx)("b",{children:"Coordinates"})}),Object(g.jsx)(m.a,{align:"center",children:Object(g.jsx)("b",{children:"State"})})]})}),Object(g.jsx)(h.a,{children:i.data.path.map((function(e,t){return Object(g.jsxs)(f.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(m.a,{component:"th",scope:"row",align:"center",children:"[".concat(e.coord[0],",").concat(e.coord[1],"]")}),Object(g.jsx)(m.a,{align:"center",children:e.state})]},t)}))})]})})]})})},R=n(146),q=n(147),G=n(148);var U=function(){return Object(s.f)(),Object(g.jsxs)(o.a,{children:[Object(g.jsx)(R.a,{position:"static",children:Object(g.jsx)(q.a,{children:Object(g.jsx)(G.a,{variant:"h6",component:"div",sx:{flexGrow:1},onClick:function(){window.location.href="/"},children:"Yochan Robo"})})}),Object(g.jsx)("div",{className:"app",children:Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{path:"/result",children:Object(g.jsx)(B,{})}),Object(g.jsx)(s.a,{path:"/grid",children:Object(g.jsx)(S,{})}),Object(g.jsx)(s.a,{path:"/",children:Object(g.jsx)(L,{})})]})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root")),A()},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.e16c23b9.chunk.js.map