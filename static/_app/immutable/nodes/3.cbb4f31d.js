import{s as ct,f as dt,i as ut,n as rt,r as ft}from"../chunks/scheduler.56f0b95c.js";import{S as pt,i as mt,g as r,s as V,z as vt,h as o,f as u,c as x,j as g,x as N,k as a,y as n,a as ot,A as q,B as lt}from"../chunks/index.8ac81898.js";import{p as ht}from"../chunks/parse.bee59afc.js";import{j as bt,k as _t}from"../chunks/singletons.b6694f2e.js";const gt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,yt=!0,xt=Object.freeze(Object.defineProperty({__proto__:null,prerender:yt},Symbol.toStringTag,{value:"Module"})),wt=bt("invalidate_all");function Et(t){return _t.apply_action(t)}function Lt(t){const l=JSON.parse(t);return l.data&&(l.data=ht(l.data)),l}function it(t){return HTMLElement.prototype.cloneNode.call(t)}function Tt(t,l=()=>{}){const p=async({action:e,result:i,reset:m})=>{i.type==="success"&&(m!==!1&&HTMLFormElement.prototype.reset.call(t),await wt()),(location.origin+location.pathname===e.origin+e.pathname||i.type==="redirect"||i.type==="error")&&Et(i)};async function c(e){var H,j,T,d;if(((H=e.submitter)!=null&&H.hasAttribute("formmethod")?e.submitter.formMethod:it(t).method)!=="post")return;e.preventDefault();const m=new URL((j=e.submitter)!=null&&j.hasAttribute("formaction")?e.submitter.formAction:it(t).action),v=new FormData(t),w=(T=e.submitter)==null?void 0:T.getAttribute("name");w&&v.append(w,((d=e.submitter)==null?void 0:d.getAttribute("value"))??"");const E=new AbortController;let L=!1;const y=await l({action:m,cancel:()=>L=!0,controller:E,get data(){return v},formData:v,get form(){return t},formElement:t,submitter:e.submitter})??p;if(L)return;let f;try{const s=await fetch(m,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:v,signal:E.signal});f=Lt(await s.text()),f.type==="error"&&(f.status=s.status)}catch(s){if((s==null?void 0:s.name)==="AbortError")return;f={type:"error",error:s}}y({action:m,get data(){return v},formData:v,get form(){return t},formElement:t,update:s=>p({action:m,result:f,reset:s==null?void 0:s.reset}),result:f})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",c),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",c)}}}const{document:K}=gt;function It(t){let l,p,c,e,i,m='<div class="container-fluid"><a href="/login.html" class="navbar-brand svelte-2m1rv2">SNDI</a></div>',v,w,E,L,A,y,f,H="Login",j,T,d,s,b,U,D,Q="Benutzername",R,C,_,J,S,W="Passwort",$,M,X='<button type="submit" class="btn btn-primary">Login</button>',O,G,Y;return{c(){l=r("meta"),p=V(),c=r("section"),e=r("div"),i=r("nav"),i.innerHTML=m,v=V(),w=r("div"),E=r("div"),L=r("div"),A=r("div"),y=r("div"),f=r("h5"),f.textContent=H,j=V(),T=r("div"),d=r("form"),s=r("div"),b=r("input"),U=V(),D=r("label"),D.textContent=Q,R=V(),C=r("div"),_=r("input"),J=V(),S=r("label"),S.textContent=W,$=V(),M=r("div"),M.innerHTML=X,this.h()},l(h){const I=vt("svelte-1yk2yl2",K.head);l=o(I,"META",{name:!0,content:!0}),I.forEach(u),p=x(h),c=o(h,"SECTION",{});var Z=g(c);e=o(Z,"DIV",{class:!0});var P=g(e);i=o(P,"NAV",{class:!0,"data-svelte-h":!0}),N(i)!=="svelte-12l9art"&&(i.innerHTML=m),v=x(P),w=o(P,"DIV",{class:!0});var tt=g(w);E=o(tt,"DIV",{class:!0});var et=g(E);L=o(et,"DIV",{class:!0});var at=g(L);A=o(at,"DIV",{class:!0});var nt=g(A);y=o(nt,"DIV",{class:!0});var z=g(y);f=o(z,"H5",{class:!0,"data-svelte-h":!0}),N(f)!=="svelte-1n40lkb"&&(f.textContent=H),j=x(z),T=o(z,"DIV",{class:!0});var st=g(T);d=o(st,"FORM",{method:!0,action:!0});var k=g(d);s=o(k,"DIV",{class:!0});var B=g(s);b=o(B,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),U=x(B),D=o(B,"LABEL",{for:!0,"data-svelte-h":!0}),N(D)!=="svelte-1ubyjfg"&&(D.textContent=Q),B.forEach(u),R=x(k),C=o(k,"DIV",{class:!0});var F=g(C);_=o(F,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),J=x(F),S=o(F,"LABEL",{for:!0,"data-svelte-h":!0}),N(S)!=="svelte-2d9uwq"&&(S.textContent=W),F.forEach(u),$=x(k),M=o(k,"DIV",{class:!0,"data-svelte-h":!0}),N(M)!=="svelte-1wz249l"&&(M.innerHTML=X),k.forEach(u),st.forEach(u),z.forEach(u),nt.forEach(u),at.forEach(u),et.forEach(u),tt.forEach(u),P.forEach(u),Z.forEach(u),this.h()},h(){K.title="Login",a(l,"name","description"),a(l,"content","Login Page"),a(i,"class","nav navbar bg-secondary-subtle svelte-2m1rv2"),a(f,"class","card-title p-1"),a(b,"type","text"),a(b,"class","form-control"),a(b,"id","username"),a(b,"placeholder","Benutzername eingeben"),b.required=!0,a(D,"for","username"),a(s,"class","form-floating mb-3"),a(_,"type","password"),a(_,"class","form-control"),a(_,"id","password"),a(_,"placeholder","Passwort eingeben"),_.required=!0,a(S,"for","password"),a(C,"class","form-floating mb-3"),a(M,"class","d-grid gap-2"),a(d,"method","POST"),a(d,"action","?/enter"),a(T,"class","card-text"),a(y,"class","card-body"),a(A,"class","card"),a(L,"class","col-md-6"),a(E,"class","row p-2 h-75 align-items-center justify-content-center"),a(w,"class","container svelte-2m1rv2"),a(e,"class","main svelte-2m1rv2")},m(h,I){n(K.head,l),ot(h,p,I),ot(h,c,I),n(c,e),n(e,i),n(e,v),n(e,w),n(w,E),n(E,L),n(L,A),n(A,y),n(y,f),n(y,j),n(y,T),n(T,d),n(d,s),n(s,b),q(b,t[0]),n(s,U),n(s,D),n(d,R),n(d,C),n(C,_),q(_,t[1]),n(C,J),n(C,S),n(d,$),n(d,M),G||(Y=[lt(b,"input",t[2]),lt(_,"input",t[3]),dt(O=Tt.call(null,d,t[4]))],G=!0)},p(h,[I]){I&1&&b.value!==h[0]&&q(b,h[0]),I&2&&_.value!==h[1]&&q(_,h[1]),O&&ut(O.update)&&I&3&&O.update.call(null,h[4])},i:rt,o:rt,d(h){h&&(u(p),u(c)),u(l),G=!1,ft(Y)}}}async function Ct(t,l){const p=btoa(t+":"+l),c="/login/fetch/"+encodeURIComponent(t),e=await fetch(c,{method:"GET",headers:{Authorization:"Basic "+p,"Content-Type":"application/json; charset=utf-8"}}),i=await e.json();if(e.status===200)window.localStorage.setItem("auth",p),window.localStorage.setItem("current_user",t),window.localStorage.setItem("permissions",JSON.stringify(i.Ok)),window.open("/","_self");else{const m=document.getElementsByTagName("input");for(const v of m)v.classList.add("is-invalid")}}function At(t,l,p){let c="",e="";function i(){c=this.value,p(0,c)}function m(){e=this.value,p(1,e)}return[c,e,i,m,()=>{Ct(c,e)}]}class jt extends pt{constructor(l){super(),mt(this,l,At,It,ct,{})}}export{jt as component,xt as universal};
