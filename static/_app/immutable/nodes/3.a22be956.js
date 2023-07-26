import{s as ie,n as le,r as de,e as Q}from"../chunks/scheduler.4b895fe1.js";import{S as ce,i as ue,g as a,s as V,z as ve,h as s,f as o,c as M,j as f,x as z,k as e,y as t,a as re,C as U,A as W}from"../chunks/index.f3c0475d.js";import{g as me,M as pe}from"../chunks/modal.c4edcd22.js";import{m as fe,s as he,d as _e}from"../chunks/store.dcdf0419.js";const ge=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,be=!1,Te=Object.freeze(Object.defineProperty({__proto__:null,ssr:be},Symbol.toStringTag,{value:"Module"}));const{document:X}=ge;function ye(i){let w,h,_,d,v,P='<div class="container-fluid"><a href="/login" class="navbar-brand svelte-2m1rv2">SNDI</a></div>',x,g,m,p,E,b,C,A="Login",l,L,r,y,n,N,I,j="Benutzername",R,T,c,G,D,Y="Passwort",J,S,Z='<button type="submit" class="btn btn-primary">Login</button>',K,$;return{c(){w=a("meta"),h=V(),_=a("section"),d=a("div"),v=a("nav"),v.innerHTML=P,x=V(),g=a("div"),m=a("div"),p=a("div"),E=a("div"),b=a("div"),C=a("h5"),C.textContent=A,l=V(),L=a("div"),r=a("form"),y=a("div"),n=a("input"),N=V(),I=a("label"),I.textContent=j,R=V(),T=a("div"),c=a("input"),G=V(),D=a("label"),D.textContent=Y,J=V(),S=a("div"),S.innerHTML=Z,this.h()},l(u){const B=ve("svelte-1yk2yl2",X.head);w=s(B,"META",{name:!0,content:!0}),B.forEach(o),h=M(u),_=s(u,"SECTION",{});var ee=f(_);d=s(ee,"DIV",{class:!0});var O=f(d);v=s(O,"NAV",{class:!0,"data-svelte-h":!0}),z(v)!=="svelte-1unmsv0"&&(v.innerHTML=P),x=M(O),g=s(O,"DIV",{class:!0});var te=f(g);m=s(te,"DIV",{class:!0});var ae=f(m);p=s(ae,"DIV",{class:!0});var se=f(p);E=s(se,"DIV",{class:!0});var ne=f(E);b=s(ne,"DIV",{class:!0});var H=f(b);C=s(H,"H5",{class:!0,"data-svelte-h":!0}),z(C)!=="svelte-1n40lkb"&&(C.textContent=A),l=M(H),L=s(H,"DIV",{class:!0});var oe=f(L);r=s(oe,"FORM",{});var k=f(r);y=s(k,"DIV",{class:!0});var q=f(y);n=s(q,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),N=M(q),I=s(q,"LABEL",{for:!0,"data-svelte-h":!0}),z(I)!=="svelte-1ubyjfg"&&(I.textContent=j),q.forEach(o),R=M(k),T=s(k,"DIV",{class:!0});var F=f(T);c=s(F,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),G=M(F),D=s(F,"LABEL",{for:!0,"data-svelte-h":!0}),z(D)!=="svelte-2d9uwq"&&(D.textContent=Y),F.forEach(o),J=M(k),S=s(k,"DIV",{class:!0,"data-svelte-h":!0}),z(S)!=="svelte-1wz249l"&&(S.innerHTML=Z),k.forEach(o),oe.forEach(o),H.forEach(o),ne.forEach(o),se.forEach(o),ae.forEach(o),te.forEach(o),O.forEach(o),ee.forEach(o),this.h()},h(){X.title="Login",e(w,"name","description"),e(w,"content","Login Page"),e(v,"class","nav navbar bg-secondary-subtle svelte-2m1rv2"),e(C,"class","card-title p-1"),e(n,"type","text"),e(n,"class","form-control"),e(n,"id","username"),e(n,"placeholder","Benutzername eingeben"),n.required=!0,e(I,"for","username"),e(y,"class","form-floating mb-3"),e(c,"type","password"),e(c,"class","form-control"),e(c,"id","password"),e(c,"placeholder","Passwort eingeben"),c.required=!0,e(D,"for","password"),e(T,"class","form-floating mb-3"),e(S,"class","d-grid gap-2"),e(L,"class","card-text"),e(b,"class","card-body"),e(E,"class","card"),e(p,"class","col-md-6"),e(m,"class","row p-2 h-75 align-items-center justify-content-center"),e(g,"class","container svelte-2m1rv2"),e(d,"class","main svelte-2m1rv2")},m(u,B){t(X.head,w),re(u,h,B),re(u,_,B),t(_,d),t(d,v),t(d,x),t(d,g),t(g,m),t(m,p),t(p,E),t(E,b),t(b,C),t(b,l),t(b,L),t(L,r),t(r,y),t(y,n),U(n,i[0]),t(y,N),t(y,I),t(r,R),t(r,T),t(T,c),U(c,i[1]),t(T,G),t(T,D),t(r,J),t(r,S),K||($=[W(n,"input",i[6]),W(c,"input",i[7]),W(r,"submit",i[8])],K=!0)},p(u,[B]){B&1&&n.value!==u[0]&&U(n,u[0]),B&2&&c.value!==u[1]&&U(c,u[1])},i:le,o:le,d(u){u&&(o(h),o(_)),o(w),K=!1,de($)}}}function we(i,w,h){let _,d,v;Q(i,fe,l=>h(3,_=l)),Q(i,he,l=>h(4,d=l)),Q(i,_e,l=>h(5,v=l));let P,x,g,m="",p="";async function E(l,L){const r=btoa(l+":"+L),y="/login/fetch/"+encodeURIComponent(l),n=await fetch(y,{method:"GET",headers:{Authorization:"Basic "+r,"Content-Type":"application/json; charset=utf-8"}}),N=await n.json();if(n.status===200)window.localStorage.setItem("auth",r),window.localStorage.setItem("current_user",l),window.localStorage.setItem("permissions",JSON.stringify(N.Ok)),me("/",{replaceState:!0});else{if(P&&x&&g){const j=new pe(P);x.textContent="Fehler",g.textContent="Falsches Passwort!",j.toggle()}const I=document.getElementsByTagName("input");for(const j of I)j.classList.add("is-invalid")}}function b(){m=this.value,h(0,m)}function C(){p=this.value,h(1,p)}const A=()=>E(m,p);return i.$$.update=()=>{i.$$.dirty&56&&(P=v,x=d,g=_)},[m,p,E,_,d,v,b,C,A]}class Be extends ce{constructor(w){super(),ue(this,w,we,ye,ie,{})}}export{Be as component,Te as universal};
