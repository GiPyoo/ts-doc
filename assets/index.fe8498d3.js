import{q as e,r as l,a as t}from"./vendor.efc1348d.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,a)=>{const c=new URL(e,n);if(self[l].moduleMap[c])return t(self[l].moduleMap[c]);const m=new Blob([`import * as m from '${c}';`,`${l}.moduleMap['${c}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(m),onerror(){a(new Error(`Failed to import: ${e}`)),r(u)},onload(){t(self[l].moduleMap[c]),r(u)}});document.head.appendChild(u)})),self[l].moduleMap={}}}("/assets/");const n=e.h1`
  font-size: 32px;
  color: black;
`,r=e.h1`
  font-size: 21px;
  color: black;
`,a=e.span`
  font-size: inherit;
  line-height: inherit;
  color: #7fd9bb;
`,c=e.input`
  box-shadow: 0px 1px 2px 0px #cccccc;
  border: none;
  font-size: inherit;
  width: auto;
`,m=e.span`
  font-size: inherit;
  line-height: inherit;
  color: #ff6c00;
`,u=e.span`
  font-size: inherit;
  line-height: inherit;
  color: #d10000;
`,E=e.div`
  padding: 20px;
  font-size: 15px;
  line-height: 23px;
  text-align: left;
  width: 600px;
  min-height: 80px;
  background-color: #f2faff;
  box-shadow: 0px 1px 2px 0px #cccccc;
  border-radius: 8px;
  height: auto;
`,i=e.div`
  display: flex;
  width: 100%;
  justify-content: center;

  flex-wrap: wrap;
  gap: 20px 30px;
`,o=e.span`
  font-size: inherit;
  line-height: inherit;
  color: #cf7fff;
`,b=e.span`
  font-size: inherit;
  line-height: inherit;
  color: #0091ff;
`,s=e.div`
  width: 100%;
  padding-top: 40px;
`,d=()=>{let[e,t]=l.useState('"id"'),n=l.createElement(l.Fragment,null,"    ");const r=e=>{switch(e){case"id":return"string";case"index":return"number";case"name":return"string"}};return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement(o,null,"type")," Card = ","{",l.createElement("br",null),n,"id: ",l.createElement(b,null,"string"),";",l.createElement("br",null),n,"index: ",l.createElement(b,null,"number"),";",l.createElement("br",null),n,"name: ",l.createElement(b,null,"string"),";",l.createElement("br",null),"}",l.createElement("br",null),l.createElement("br",null),l.createElement(o,null,"type")," SubCard = Omit","<","Card,",l.createElement(c,{value:e,onChange:e=>t(e.target.value)}),">",l.createElement("br",null)),l.createElement(E,null,l.createElement(o,null,"type")," SubCard = ","{"," ",l.createElement("br",null),(()=>{let t=e.split("|").map((e=>e.replaceAll('"',"").trim()));return["id","index","name"].map((e=>(console.log(t.includes(e)),t.includes(e)?null:l.createElement(l.Fragment,null,n,e,": ",l.createElement(b,null,r(e)),";",l.createElement("br",null)))))})(),"}",l.createElement("br",null)))},p=()=>{let e=l.createElement(l.Fragment,null,"    ");return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement(o,null,"type")," DateInfo = ","{",l.createElement("br",null),e,"year: ",l.createElement(b,null,"number"),";",l.createElement("br",null),e,"month: ",l.createElement(b,null,"string"),";",l.createElement("br",null),e,"date: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}",l.createElement("br",null),l.createElement("br",null),l.createElement(o,null,"type")," ParticleDateInfo = Particle","<","DateInfo",">",l.createElement("br",null)),l.createElement(E,null,l.createElement(o,null,"type")," DateInfo = ","{",l.createElement("br",null),e,"year: ",l.createElement(b,null,"number"),";",l.createElement("br",null),e,"month: ",l.createElement(b,null,"string"),";",l.createElement("br",null),e,"date: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}"," ",l.createElement(a,null,"|")," ","{",l.createElement("br",null),e,"year: ",l.createElement(b,null,"number"),";",l.createElement("br",null),e,"month: ",l.createElement(b,null,"string"),";",l.createElement("br",null),"}"," ",l.createElement(a,null,"|")," ","{",l.createElement("br",null),e,"month: ",l.createElement(b,null,"string"),";",l.createElement("br",null),e,"date: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}"," ",l.createElement(a,null,"|")," ","{",l.createElement("br",null),e,"year: ",l.createElement(b,null,"number"),";",l.createElement("br",null),e,"date: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}"," ",l.createElement(a,null,"|")," ","{",l.createElement("br",null),e,"year: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}"," ",l.createElement(a,null,"|")," ","{",l.createElement("br",null),e,"month: ",l.createElement(b,null,"string"),";",l.createElement("br",null),"}"," ",l.createElement(a,null,"|")," ","{",l.createElement("br",null),e,"date: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}",";"))},h=()=>{const[e,t]=l.useState('"name"'),[n,r]=l.useState('"subtitle"');return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement(o,null,"type")," Users = ","{",l.createElement("br",null),"    name: ",l.createElement(b,null,"string"),"; ",l.createElement("br",null),"    nickName: ",l.createElement(b,null,"string"),";"," ",l.createElement("br",null),"    grade: Grade",l.createElement("br",null),"}",";",l.createElement("br",null),l.createElement("br",null),l.createElement(o,null,"type")," Grade = ","{",l.createElement("br",null),"    subtitle: ",l.createElement(b,null,"string"),";",l.createElement("br",null),"    score: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}",l.createElement("br",null),l.createElement("br",null),l.createElement(o,null,"type")," SubTitleUsers ="," ",l.createElement(b,null,"Pick"),"<"," Grade,"," ",l.createElement(c,{value:n,onChange:e=>r(e.target.value)})," ",">"," &",l.createElement("br",null),"    ",l.createElement(b,null,"Pick"),"<","Users,",l.createElement(c,{value:e,onChange:e=>t(e.target.value)})," ",">"),l.createElement(E,null,l.createElement(o,null,"type")," SubTitleUsers = ","{",l.createElement("br",null),n.split("|").map((e=>e.replaceAll('"',"").trim())).map((e=>{if(e.length>0&&(e=>["subtitle","score"].includes(e))(e))return l.createElement(l.Fragment,null,"    ",e,":"," ",l.createElement(b,null,(e=>{switch(e){case"subtitle":return"string";case"score":default:return"number"}})(e)),";",l.createElement("br",null))})),e.split("|").map((e=>e.replaceAll('"',"").trim())).map((e=>{if(e.length>0&&["name","nickName","grade"].includes(e))return l.createElement(l.Fragment,null,"    ",e,":"," ",l.createElement(b,null,(e=>{switch(e){case"name":return"string";case"nickName":return"number";case"grade":return"Grade";default:return"number"}})(e)),";",l.createElement("br",null))})),"}"))},g=()=>{let e=l.createElement(l.Fragment,null,"    ");return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement(o,null,"type")," DateInfo = ","{",l.createElement("br",null),e,"year: ",l.createElement(b,null,"number"),";",l.createElement("br",null),e,"month: ",l.createElement(b,null,"string"),";",l.createElement("br",null),e,"date: ",l.createElement(b,null,"number"),";",l.createElement("br",null),"}",l.createElement("br",null),l.createElement("br",null),l.createElement(o,null,"type"),' PersonerDate = "birth" | "death"',l.createElement("br",null)),l.createElement(E,null,l.createElement(o,null,"const")," MrDOO : Record","<","PersonerDate, DateInfo",">"," = ","{"," ",l.createElement("br",null),e,"birth: ","{"," year: ",l.createElement(u,null,"1900"),", month: ",l.createElement(m,null,'"jan"'),", date:"," ",l.createElement(u,null,"1 "),"}",l.createElement("br",null),e,"death: ","{"," year: ",l.createElement(u,null,"1980"),", month: ",l.createElement(m,null,'"dec"'),", date:"," ",l.createElement(u,null,"31 "),"}",l.createElement("br",null),"}",l.createElement("br",null)))};function f(){return l.createElement("div",{className:"App"},l.createElement(n,null,"타입 유틸리티"),l.createElement(s,null),l.createElement(r,null,"Pick"),l.createElement(i,null,l.createElement(h,null)),l.createElement(s,null),l.createElement(r,null,"Omit"),l.createElement(i,null,l.createElement(d,null)),l.createElement(s,null),l.createElement(r,null,"Record"),l.createElement(i,null,l.createElement(g,null)),l.createElement(s,null),l.createElement(r,null,"Particle"),l.createElement(i,null,l.createElement(p,null)))}t.render(l.createElement(l.StrictMode,null,l.createElement(f,null)),document.getElementById("root"));
