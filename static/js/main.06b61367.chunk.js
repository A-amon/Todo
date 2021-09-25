(this["webpackJsonptodo-v2"]=this["webpackJsonptodo-v2"]||[]).push([[0],{19:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),r=c.n(s),i=(c(19),c(0)),o=function(e){var t=e.children;return Object(i.jsx)("div",{className:"container",children:t})},l=function(e){var t=e.onChange;return Object(i.jsxs)("fieldset",{className:"theme-switch",children:[Object(i.jsxs)("label",{className:"theme-switch__label theme-switch__label--light",children:[Object(i.jsx)("p",{className:"sr-only",children:"Light mode"}),Object(i.jsx)("input",{className:"theme-switch__input",type:"radio",name:"theme",id:"theme-light",onChange:t})]}),Object(i.jsxs)("label",{className:"theme-switch__label theme-switch__label--dark",children:[Object(i.jsx)("p",{className:"sr-only",children:"Dark mode"}),Object(i.jsx)("input",{className:"theme-switch__input",type:"radio",name:"theme",id:"theme-dark",onChange:t})]})]})},d=c(3),u=c(2),j=function(e){var t=e.as,c=e.children,n=e.className,a=t;return Object(i.jsx)(a,Object(u.a)(Object(u.a)({},e),{},{className:"card ".concat(n||""),children:c}))};j.defaultProps={as:"li"};var b=j,h=function(e){var t=e.name,c=e.id,n=e.checked,a=e.onChange,s=e.ariaHidden,r=e.filteredProps;return Object(i.jsxs)("div",{className:"checkbox","aria-hidden":s,children:[Object(i.jsx)("input",Object(u.a)({className:"checkbox__input",type:"checkbox",name:t,id:c,checked:n,onChange:a},r)),Object(i.jsx)("span",{className:"checkbox__image"})]})},O=function(e){var t=e.onSubmit,c=Object(n.useState)(""),a=Object(d.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(""),l=Object(d.a)(o,2),u=l[0],j=l[1],O=function(){j("")};return Object(i.jsxs)(b,{as:"form",className:"create-input",onSubmit:function(e){var c;r(""),(c=u)&&0!==c.replace(" ","").length?(t(e,u),O()):(e.preventDefault(),r("Your task is empty!"))},children:[Object(i.jsx)(h,{name:"create-completed",id:"create-checkbox",ariaHidden:"true"}),Object(i.jsx)("input",{className:"create-input__input",type:"text",placeholder:"Create new input",value:u,"aria-label":"Create new input","aria-describedby":"create-input__response",onChange:function(e){return j(e.target.value)},onBlur:function(){return r("")}}),Object(i.jsx)("strong",{id:"create-input__response",className:"create-input__response ".concat(s.length>0&&"show"),children:s})]})},m="INIT_TODO",p="ADD_TODO",f="UPDATE_TODO",_="DELETE_TODO",x="CLEAR_COMPLETED",k="SWITCH_THEME",v={todo:[],theme:"dark"},g=function(e,t){switch(t.type){case k:return Object(u.a)(Object(u.a)({},e),{},{theme:t.theme});case m:case p:case f:case _:case x:return Object(u.a)(Object(u.a)({},e),{},{todo:t.todo});default:return e}},N=Object(n.createContext)(),C=function(e){var t=e.children,c=Object(n.useReducer)(g,v),a=Object(d.a)(c,2),s=a[0],r=a[1];return Object(i.jsx)(N.Provider,{value:{state:s,dispatch:r},children:t})},D=c(8),A=function(e){return"".concat(e<10?"0":"").concat(e)},w=function(){var e=new Date,t=A(e.getDate()),c=A(e.getMonth()+1),n=A(e.getFullYear()),a=A(e.getHours()),s=A(e.getMinutes()),r=A(e.getSeconds());return"".concat(t).concat(c).concat(n,"T").concat(a).concat(s).concat(r)},y=function(){var e=function(e,t,c,n){e.preventDefault(),function(e,t,c){t({type:p,todo:[].concat(Object(D.a)(e),[{task:c,completed:!1,createdAt:w()}])})}(t,c,n)};return Object(i.jsx)(N.Consumer,{children:function(t){var c=t.state,n=t.dispatch;return Object(i.jsx)("header",{className:"header",children:Object(i.jsxs)(o,{children:[Object(i.jsxs)("div",{className:"header__wrapper",children:[Object(i.jsx)("h1",{className:"header__title",children:"Todo"}),Object(i.jsx)(l,{onChange:function(){return function(e,t){t({type:k,theme:"light"===e?"dark":"light"})}(c.theme,n)}})]}),Object(i.jsx)(O,{onSubmit:function(t,a){return e(t,c.todo,n,a)}})]})})}})},T=c(26),S=c(25),E=function(e){var t=e.completed,c=e.task,a=e.createdAt,s=e.onUpdate,r=e.onDelete,o=e.onDrag,l=e.onDrop,u=Object(n.useState)(!1),j=Object(d.a)(u,2),O=j[0],m=j[1],p="task-".concat(a),f="".concat(p,"__desc"),_="checkbox-".concat(a);Object(n.useEffect)((function(){t&&m(t)}),[t]);return Object(i.jsxs)(b,{className:"task ".concat(O?"task--checked":""),id:p,draggable:!0,onDragOver:function(e){return e.preventDefault()},onDragStart:o,onDrop:l,children:[Object(i.jsx)(h,{checked:O,"aria-labelledby":f,onChange:function(){m(!O),s({createdAt:a,completed:!O})},id:_,name:"task-completion"}),Object(i.jsx)("p",{className:"task__desc",id:f,children:c}),Object(i.jsx)("button",{className:"task__delete","aria-label":"Delete ".concat(c),onClick:r,children:Object(i.jsx)("svg",{"aria-hidden":"true",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(i.jsx)("path",{d:"M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"})})})]})},I=function(){var e=Object(n.useState)("All"),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(N),r=s.state,o=s.dispatch,l=Object(n.useState)([]),j=Object(d.a)(l,2),h=j[0],O=j[1],m=Object(n.useRef)(null),p=Object(n.useState)(),k=Object(d.a)(p,2),v=k[0],g=k[1];Object(n.useEffect)((function(){var e=r.todo;O(C(c,e)),m.current.focus()}),[r.todo,c]);var C=function(e,t){var c=Object(D.a)(t);return"All"!==e&&(c=c.filter((function(t){return"Completed"===e?t.completed:!t.completed}))),c},A=function(e){g(e.currentTarget.id)},w=function(e){var t=e.currentTarget.id.split("-")[1],c=h.findIndex((function(e){return e.createdAt===t})),n=v.split("-")[1],a=h.findIndex((function(e){return e.createdAt===n}));O(y(a,c,h))},y=function(e,t,c){var n=Object(D.a)(c);return t<e?(n.splice(t,0,c[e]),n.splice(e+1,1)):t>e&&(n.splice(t+1,0,c[e]),n.splice(e,1)),n};return Object(i.jsxs)(b,{as:"div",className:"tasks__container",children:[Object(i.jsx)("ul",{className:"tasks","aria-describedby":"tasks__none",ref:m,tabIndex:"-1",children:Object(i.jsx)(T.a,{component:null,children:h.map((function(e){return Object(i.jsx)(S.a,{timeout:200,classNames:"task",children:Object(i.jsx)(E,Object(u.a)({onUpdate:function(e){return function(e,t,c){e.forEach((function(e){e.createdAt===c.createdAt&&Object.assign(e,c)})),t({type:f,todo:Object(D.a)(e)})}(r.todo,o,e)},onDelete:function(){return function(e,t,c){t({type:_,todo:e.filter((function(e){return e.createdAt!==c}))})}(r.todo,o,e.createdAt)},onDrag:A,onDrop:w},e))},e.createdAt)}))})}),0===h.length&&Object(i.jsx)(b,{as:"div",className:"tasks__none",id:"tasks__none",children:"No tasks here"}),Object(i.jsxs)(b,{as:"div",className:"tasks__footer",children:[Object(i.jsxs)("p",{className:"tasks__left",children:[h.length," items left"]}),Object(i.jsxs)("div",{className:"tasks__tabs",children:[Object(i.jsx)("button",{className:"tasks__tab ".concat("All"===c?"tasks__tab--current":""),onClick:function(){return a("All")},children:"All"}),Object(i.jsx)("button",{className:"tasks__tab ".concat("Active"===c?"tasks__tab--current":""),onClick:function(){return a("Active")},children:"Active"}),Object(i.jsx)("button",{className:"tasks__tab ".concat("Completed"===c?"tasks__tab--current":""),onClick:function(){return a("Completed")},children:"Completed"})]}),Object(i.jsx)("button",{className:"tasks__clear",onClick:function(){return function(e,t){t({type:x,todo:e.filter((function(e){return!e.completed}))})}(r.todo,o)},children:"Clear completed"})]})]})},P=function(){return Object(i.jsx)("main",{className:"main",children:Object(i.jsx)(o,{children:Object(i.jsx)(I,{})})})};var L=function(){return Object(i.jsx)(N.Consumer,{children:function(e){var t=e.state;return Object(i.jsxs)("div",{className:"app app--".concat(t.theme),children:[Object(i.jsx)(y,{}),Object(i.jsx)(P,{})]})}})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(C,{children:Object(i.jsx)(L,{})})}),document.getElementById("root")),M()}},[[23,1,2]]]);
//# sourceMappingURL=main.06b61367.chunk.js.map