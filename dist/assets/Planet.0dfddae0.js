import{r as i,c as u,u as m,j as a,F as c,a as n}from"./index.992934b7.js";function v({findPlanet:r}){const[e,o]=i.exports.useState(null),{id:t}=u(),[,,s,,l]=m();function p(f){if(s.id===parseInt(t)&&s.type==="planets"){l("",0,{});return}l("planets",parseInt(t),e)}i.exports.useEffect(()=>{o(r(t))},[r,t]);let d=a(c,{children:[e&&a("p",{children:["Name: ",e.name]}),e&&a("p",{children:["Diameter: ",e.diameter," km"]}),e&&a("p",{children:["Terrain: ",e.terrain]}),e&&a("p",{children:["Population: ",e.population]})]});return a(c,{children:[n("h2",{children:"Planet Details"}),d,n("p",{children:a("button",{onClick:p,children:["Set"," ",n("span",{className:"material-icons small-font red-font",children:"favorite"})]})})]})}export{v as default};
