import{r as a,_ as p,u as h,j as l,F as c,a as e,N as v,R as F,b as _}from"./index.992934b7.js";function N(o){const d=a.exports.lazy(()=>p(()=>import("./Film.d07ab40e.js"),["assets/Film.d07ab40e.js","assets/index.992934b7.js","assets/index.6750659a.css"])),[n]=h(),{list:t,setSearchState:m}=o;a.exports.useEffect(()=>{},[t]),a.exports.useEffect(()=>{m(!1)});function f(i){const s=t.find((r,u)=>parseInt(i)===u+1);return s||null}return l(c,{children:[l("div",{className:"results",children:[e("h2",{children:"Film List"}),t.length===0&&e("p",{children:"No films..."}),t.map((i,s)=>e("p",{children:l(v,{className:({isActive:r})=>r?"activeLink":"",to:`/films/${s+1}`,children:[i.title,"\xA0",n.type==="films"&&s+1===parseInt(n.id)&&e(c,{children:e("span",{className:"material-icons small-font red-font",children:"favorite"})})]})},i.title))]}),e("div",{className:"details",children:e(F,{children:e(_,{path:":id",element:e(a.exports.Suspense,{children:e(d,{findFilm:f})})})})})]})}export{N as default};
