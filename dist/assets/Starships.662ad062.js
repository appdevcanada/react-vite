import{r,_ as u,u as m,j as i,F as c,a as s,N as v,R as S,b as _}from"./index.992934b7.js";function N(o){const h=r.exports.lazy(()=>u(()=>import("./Starship.bb0ff9ab.js"),["assets/Starship.bb0ff9ab.js","assets/index.992934b7.js","assets/index.6750659a.css"])),[,,,n]=m(),{list:e,setSearchState:p}=o;r.exports.useEffect(()=>{},[e]),r.exports.useEffect(()=>{p(!1)});function d(a){const t=e.find((l,f)=>parseInt(a)===f+1);return t||null}return i(c,{children:[i("div",{className:"results",children:[s("h2",{children:"Starship List"}),e.length===0&&s("p",{children:"No starships..."}),e.length>0&&e.map((a,t)=>s("p",{children:i(v,{className:({isActive:l})=>l?"activeLink":"",to:`/starships/${t+1}`,children:[a.name,"\xA0",n.type==="starships"&&t+1===parseInt(n.id)&&s(c,{children:s("span",{className:"material-icons small-font red-font",children:"favorite"})})]})},a.name))]}),s("div",{className:"details",children:s(S,{children:s(_,{path:":id",element:s(r.exports.Suspense,{children:s(h,{findStarship:d})})})})})]})}export{N as default};
