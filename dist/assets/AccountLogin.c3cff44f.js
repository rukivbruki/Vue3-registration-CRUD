import{r as a,o as r,c as i,a as e,w as u,b as c,u as d,d as _,e as l,f as m,g as p,h}from"./index.e3efdd73.js";const f={class:"login-container"},w=e("h1",null,"Login",-1),g={class:"form-container"},b=["onSubmit"],v=e("label",{for:"username"},"Name",-1),y={type:"text",id:"username",name:"username",required:""},k=e("label",{for:"password"},"Password",-1),x=e("input",{type:"password",id:"password",name:"password",required:""},null,-1),B=e("button",{type:"submit",value:"Login"},"Login",-1),S=p("Register"),E={__name:"AccountLogin",setup(L){async function n(){const o=h();let s=document.getElementById("username").value,t=document.getElementById("password").value;await o.login(s,t)}return(o,s)=>{const t=a("router-link");return r(),i("div",f,[w,e("div",g,[e("form",{onSubmit:u(n,["prevent"])},[v,c(e("input",y,null,512),[[d(m)]]),k,x,B,_(t,{class:"router-link",to:{name:"register"}},{default:l(()=>[S]),_:1})],40,b)])])}}};export{E as default};
