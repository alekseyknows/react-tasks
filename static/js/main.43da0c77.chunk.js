(this["webpackJsonpreact-tasks"]=this["webpackJsonpreact-tasks"]||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(21),o=n.n(a),s=n(36),u=n(24),i=n(43),j=n(42),b=n(37),l=n(41),d=n(8),O=n(18),x=n(9),m=n(87),h=n(85),f=n(83),p=n(80),v=Object(p.a)({pic:{width:"1000px"}}),C=n.p+"static/media/about-us-mock.c82c7e94.png",g=n(2);function k(){var e=v();return Object(g.jsx)("div",{children:Object(g.jsx)("img",{className:e.pic,src:C,alt:"about us"})})}var N=n(63),B=n(82),S=Object(p.a)({container:{margin:"50px auto 0px",maxWidth:"1120px",textAlign:"center",border:"1px solid black",borderRadius:"20px"},buttons:{margin:"25px 0px 15px 0px"},incrementButton:{color:"green"},decrementButton:{color:"red"},resetButton:{color:"grey"},text:{fontSize:40,fontWeight:"bold",marginTop:"10px"}}),y=function(e){var t=S();return Object(g.jsxs)("div",{className:t.container,children:[Object(g.jsx)("div",{className:t.text,children:"Current counter is ".concat(e.counter)}),Object(g.jsxs)(B.a,{className:t.buttons,children:[Object(g.jsx)(N.a,{className:t.incrementButton,onClick:e.increment,children:"Increment (+1)"}),Object(g.jsx)(N.a,{className:t.decrementButton,onClick:e.decrement,children:"Decrement (-1)"}),Object(g.jsx)(N.a,{className:t.resetButton,onClick:e.reset,children:"Reset"})]})]})};var A=function(e){var t=Object(c.useState)(e.initialValue),n=Object(O.a)(t,2),r=n[0],a=n[1],o=e.prevNumChildren;Object(c.useEffect)((function(){e.numChildren>o&&"add"===e.clicked&&s(),e.numChildren<o&&"remove"===e.clicked&&u()}),[e.numChildren,e.clicked]);var s=function(){r%2===0&&0!==r&&a(r+1)},u=function(){r%2!==0&&0!==r&&a(r-1)};return Object(c.useMemo)((function(){return Object(g.jsx)(y,{counter:r,increment:function(){return a(r+1)},decrement:function(){return a(r-1)},reset:function(){return a(0)}})}),[r])},R=Object(p.a)({buttons:{textAlign:"center"},addButton:{backgroundColor:"green"},removeButton:{backgroundColor:"red"},resetButton:{backgroundColor:"grey"},counter:{marginLeft:"15px",fontSize:30,fontWeight:"bold"}}),E=function(e){var t=R();return Object(g.jsxs)("div",{children:[Object(g.jsxs)(B.a,{className:t.buttons,children:[Object(g.jsx)(N.a,{className:t.addButton,onClick:e.addCounter,children:"Add"}),Object(g.jsx)(N.a,{className:t.removeButton,onClick:e.removeCounter,children:"Remove"}),Object(g.jsx)(N.a,{className:t.resetButton,onClick:e.resetCounter,children:"Reset"})]}),Object(g.jsx)("span",{className:t.counter,children:e.numChildren})]})};var W=function(){var e=Object(c.useState)(1),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("none"),o=Object(O.a)(a,2),s=o[0],u=o[1],i=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e}),[e]),t.current}(n);return Object(g.jsxs)("div",{children:[Object(g.jsx)(E,{numChildren:n,addCounter:function(){u("add"),r(n+1)},removeCounter:function(){u("remove"),1!==n&&r(n-1)},resetCounter:function(){u("reset"),r(1)}}),function(){for(var e=[],t=0;t<n;t++)e.push(Object(g.jsx)(A,{initialValue:0,numChildren:n,prevNumChildren:i,clicked:s},t));return e}()]})},w=function(e){var t,n=e.match,c=e.history,a=n.path,o={0:"about-us",1:"counters"},s=(t={},Object(x.a)(t,"/about-us",0),Object(x.a)(t,"/counters",1),t),u=r.a.useState(s[a]),i=Object(O.a)(u,2),j=i[0],b=i[1];return Object(g.jsxs)("nav",{children:[Object(g.jsx)(m.a,{position:"static",children:Object(g.jsxs)(h.a,{value:j,onChange:function(e,t){c.push("/".concat(o[t])),b(t)},children:[Object(g.jsx)(f.a,{label:"About Us"}),Object(g.jsx)(f.a,{label:"Counters"})]})}),0===j&&Object(g.jsx)(k,{}),1===j&&Object(g.jsx)(W,{})]})},z=Object(p.a)({content:{textAlign:"center",marginTop:"200px",fontWeight:"bold",fontSize:50}});function I(){var e=z();return Object(g.jsx)("div",{className:e.content,children:"404 PAGE IS NOT FOUND"})}function T(){return Object(g.jsx)(l.a,{children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{exact:!0,path:["/","/counters","/about-us"],render:function(e){return Object(g.jsx)(w,Object(b.a)({},e))}}),Object(g.jsx)(d.a,{component:I})]})})}var D=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)(T,{})}}]),n}(c.Component),J=n(84);o.a.render(Object(g.jsxs)("div",{children:[Object(g.jsx)(J.a,{}),Object(g.jsx)(D,{})]}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.43da0c77.chunk.js.map