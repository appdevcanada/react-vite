import{r as l,c as h,u,j as s,F as c,a as t}from"./index.992934b7.js";function v({findStarship:r}){const[e,p]=l.exports.useState(null),{id:a}=h(),[,,,n,i]=u();function d(f){if(n.id===parseInt(a)&&n.type==="starships"){i("",0,{});return}i("starships",parseInt(a),e)}l.exports.useEffect(()=>{p(r(a))},[r,a]);let o=s(c,{children:[e&&s("p",{children:["Name: ",e.name]}),e&&s("p",{children:["Model: ",e.model," km"]}),e&&s("p",{children:["Manufacturer: ",e.manufacturer]}),e&&s("p",{children:["Class: ",e.starship_class]})]});return s(c,{children:[t("h2",{children:"Starship Details"}),o,t("p",{children:s("button",{onClick:d,children:["Set"," ",t("span",{className:"material-icons small-font red-font",children:"favorite"})]})})]})}export{v as default};