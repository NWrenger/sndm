import{j as mt}from"./singletons.e52194ae.js";const St=mt("goto");var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _t(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var pt={exports:{}},z={exports:{}},j={exports:{}};/*!
  * Bootstrap data.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var it;function Et(){return it||(it=1,function(b,O){(function(i,r){b.exports=r()})(x,function(){const i=new Map;return{set(d,n,e){i.has(d)||i.set(d,new Map);const s=i.get(d);if(!s.has(n)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(n,e)},get(d,n){return i.has(d)&&i.get(d).get(n)||null},remove(d,n){if(!i.has(d))return;const e=i.get(d);e.delete(n),e.size===0&&i.delete(d)}}})}(j)),j.exports}var H={exports:{}},Y={exports:{}};/*!
  * Bootstrap index.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var st;function F(){return st||(st=1,function(b,O){(function(i,r){r(O)})(x,function(i){const n="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(a,o)=>`#${CSS.escape(o)}`)),t),s=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},l=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:o}=window.getComputedStyle(t);const y=Number.parseFloat(a),D=Number.parseFloat(o);return!y&&!D?0:(a=a.split(",")[0],o=o.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(o))*1e3)},A=t=>{t.dispatchEvent(new Event(n))},m=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),f=t=>m(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(e(t)):null,p=t=>{if(!m(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return a;if(o!==t){const y=t.closest("summary");if(y&&y.parentNode!==o||y===null)return!1}return a},N=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",C=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?C(t.parentNode):null},M=()=>{},T=t=>{t.offsetHeight},k=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L=[],q=t=>{document.readyState==="loading"?(L.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of L)a()}),L.push(t)):t()},P=()=>document.documentElement.dir==="rtl",c=t=>{q(()=>{const a=k();if(a){const o=t.NAME,y=a.fn[o];a.fn[o]=t.jQueryInterface,a.fn[o].Constructor=t,a.fn[o].noConflict=()=>(a.fn[o]=y,t.jQueryInterface)}})},u=(t,a=[],o=t)=>typeof t=="function"?t(...a):o,g=(t,a,o=!0)=>{if(!o){u(t);return}const y=5,D=l(a)+y;let w=!1;const v=({target:$})=>{$===a&&(w=!0,a.removeEventListener(n,v),u(t))};a.addEventListener(n,v),setTimeout(()=>{w||A(a)},D)},_=(t,a,o,y)=>{const D=t.length;let w=t.indexOf(a);return w===-1?!o&&y?t[D-1]:t[0]:(w+=o?1:-1,y&&(w=(w+D)%D),t[Math.max(0,Math.min(w,D-1))])};i.defineJQueryPlugin=c,i.execute=u,i.executeAfterTransition=g,i.findShadowRoot=C,i.getElement=f,i.getNextActiveElement=_,i.getTransitionDurationFromElement=l,i.getUID=h,i.getjQuery=k,i.isDisabled=N,i.isElement=m,i.isRTL=P,i.isVisible=p,i.noop=M,i.onDOMContentLoaded=q,i.parseSelector=e,i.reflow=T,i.toType=s,i.triggerTransitionEnd=A,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})})}(Y,Y.exports)),Y.exports}/*!
  * Bootstrap event-handler.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function B(){return rt||(rt=1,function(b,O){(function(i,r){b.exports=r(F())})(x,function(i){const r=/[^.]*(?=\..*)\.|.*/,d=/\..*/,n=/::\d+$/,e={};let s=1;const h={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(c,u){return u&&`${u}::${s++}`||c.uidEvent||s++}function m(c){const u=A(c);return c.uidEvent=u,e[u]=e[u]||{},e[u]}function f(c,u){return function g(_){return P(_,{delegateTarget:c}),g.oneOff&&q.off(c,_.type,u),u.apply(c,[_])}}function p(c,u,g){return function _(t){const a=c.querySelectorAll(u);for(let{target:o}=t;o&&o!==this;o=o.parentNode)for(const y of a)if(y===o)return P(t,{delegateTarget:o}),_.oneOff&&q.off(c,t.type,u,g),g.apply(o,[t])}}function N(c,u,g=null){return Object.values(c).find(_=>_.callable===u&&_.delegationSelector===g)}function C(c,u,g){const _=typeof u=="string",t=_?g:u||g;let a=L(c);return l.has(a)||(a=c),[_,t,a]}function M(c,u,g,_,t){if(typeof u!="string"||!c)return;let[a,o,y]=C(u,g,_);u in h&&(o=(Q=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return Q.call(this,E)})(o));const D=m(c),w=D[y]||(D[y]={}),v=N(w,o,a?g:null);if(v){v.oneOff=v.oneOff&&t;return}const $=A(o,u.replace(r,"")),I=a?p(c,g,o):f(c,o);I.delegationSelector=a?g:null,I.callable=o,I.oneOff=t,I.uidEvent=$,w[$]=I,c.addEventListener(y,I,a)}function T(c,u,g,_,t){const a=N(u[g],_,t);a&&(c.removeEventListener(g,a,!!t),delete u[g][a.uidEvent])}function k(c,u,g,_){const t=u[g]||{};for(const[a,o]of Object.entries(t))a.includes(_)&&T(c,u,g,o.callable,o.delegationSelector)}function L(c){return c=c.replace(d,""),h[c]||c}const q={on(c,u,g,_){M(c,u,g,_,!1)},one(c,u,g,_){M(c,u,g,_,!0)},off(c,u,g,_){if(typeof u!="string"||!c)return;const[t,a,o]=C(u,g,_),y=o!==u,D=m(c),w=D[o]||{},v=u.startsWith(".");if(typeof a<"u"){if(!Object.keys(w).length)return;T(c,D,o,a,t?g:null);return}if(v)for(const $ of Object.keys(D))k(c,D,$,u.slice(1));for(const[$,I]of Object.entries(w)){const V=$.replace(n,"");(!y||u.includes(V))&&T(c,D,o,I.callable,I.delegationSelector)}},trigger(c,u,g){if(typeof u!="string"||!c)return null;const _=i.getjQuery(),t=L(u),a=u!==t;let o=null,y=!0,D=!0,w=!1;a&&_&&(o=_.Event(u,g),_(c).trigger(o),y=!o.isPropagationStopped(),D=!o.isImmediatePropagationStopped(),w=o.isDefaultPrevented());const v=P(new Event(u,{bubbles:y,cancelable:!0}),g);return w&&v.preventDefault(),D&&c.dispatchEvent(v),v.defaultPrevented&&o&&o.preventDefault(),v}};function P(c,u={}){for(const[g,_]of Object.entries(u))try{c[g]=_}catch{Object.defineProperty(c,g,{configurable:!0,get(){return _}})}return c}return q})}(H)),H.exports}var G={exports:{}},J={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function gt(){return ot||(ot=1,function(b,O){(function(i,r){b.exports=r()})(x,function(){function i(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function r(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(n,e,s){n.setAttribute(`data-bs-${r(e)}`,s)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${r(e)}`)},getDataAttributes(n){if(!n)return{};const e={},s=Object.keys(n.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of s){let l=h.replace(/^bs/,"");l=l.charAt(0).toLowerCase()+l.slice(1,l.length),e[l]=i(n.dataset[h])}return e},getDataAttribute(n,e){return i(n.getAttribute(`data-bs-${r(e)}`))}}})}(J)),J.exports}/*!
  * Bootstrap config.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var at;function nt(){return at||(at=1,function(b,O){(function(i,r){b.exports=r(gt(),F())})(x,function(i,r){class d{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,s){const h=r.isElement(s)?i.getDataAttribute(s,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...r.isElement(s)?i.getDataAttributes(s):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,s=this.constructor.DefaultType){for(const[h,l]of Object.entries(s)){const A=e[h],m=r.isElement(A)?"element":r.toType(A);if(!new RegExp(l).test(m))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${m}" but expected type "${l}".`)}}}return d})}(G)),G.exports}/*!
  * Bootstrap base-component.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ut;function bt(){return ut||(ut=1,function(b,O){(function(i,r){b.exports=r(Et(),B(),nt(),F())})(x,function(i,r,d,n){const e="5.3.0";class s extends d{constructor(l,A){super(),l=n.getElement(l),l&&(this._element=l,this._config=this._getConfig(A),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),r.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,A,m=!0){n.executeAfterTransition(l,A,m)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return i.get(n.getElement(l),this.DATA_KEY)}static getOrCreateInstance(l,A={}){return this.getInstance(l)||new this(l,typeof A=="object"?A:null)}static get VERSION(){return e}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}return s})}(z)),z.exports}var X={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function U(){return ct||(ct=1,function(b,O){(function(i,r){b.exports=r(F())})(x,function(i){const r=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let s=n.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&s!=="#"?s.trim():null}return i.parseSelector(e)},d={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(s=>s.matches(e))},parents(n,e){const s=[];let h=n.parentNode.closest(e);for(;h;)s.push(h),h=h.parentNode.closest(e);return s},prev(n,e){let s=n.previousElementSibling;for(;s;){if(s.matches(e))return[s];s=s.previousElementSibling}return[]},next(n,e){let s=n.nextElementSibling;for(;s;){if(s.matches(e))return[s];s=s.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(s=>!i.isDisabled(s)&&i.isVisible(s))},getSelectorFromElement(n){const e=r(n);return e&&d.findOne(e)?e:null},getElementFromSelector(n){const e=r(n);return e?d.findOne(e):null},getMultipleElementsFromSelector(n){const e=r(n);return e?d.find(e):[]}};return d})}(X)),X.exports}var Z={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var lt;function At(){return lt||(lt=1,function(b,O){(function(i,r){b.exports=r(B(),nt(),F())})(x,function(i,r,d){const n="backdrop",e="fade",s="show",h=`mousedown.bs.${n}`,l={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},A={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class m extends r{constructor(p){super(),this._config=this._getConfig(p),this._isAppended=!1,this._element=null}static get Default(){return l}static get DefaultType(){return A}static get NAME(){return n}show(p){if(!this._config.isVisible){d.execute(p);return}this._append();const N=this._getElement();this._config.isAnimated&&d.reflow(N),N.classList.add(s),this._emulateAnimation(()=>{d.execute(p)})}hide(p){if(!this._config.isVisible){d.execute(p);return}this._getElement().classList.remove(s),this._emulateAnimation(()=>{this.dispose(),d.execute(p)})}dispose(){this._isAppended&&(i.off(this._element,h),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const p=document.createElement("div");p.className=this._config.className,this._config.isAnimated&&p.classList.add(e),this._element=p}return this._element}_configAfterMerge(p){return p.rootElement=d.getElement(p.rootElement),p}_append(){if(this._isAppended)return;const p=this._getElement();this._config.rootElement.append(p),i.on(p,h,()=>{d.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(p){d.executeAfterTransition(p,this._getElement(),this._config.isAnimated)}}return m})}(Z)),Z.exports}var W={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var dt;function yt(){return dt||(dt=1,function(b,O){(function(i,r){r(O,B(),U(),F())})(x,function(i,r,d,n){const e=(s,h="hide")=>{const l=`click.dismiss${s.EVENT_KEY}`,A=s.NAME;r.on(document,l,`[data-bs-dismiss="${A}"]`,function(m){if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),n.isDisabled(this))return;const f=d.getElementFromSelector(this)||this.closest(`.${A}`);s.getOrCreateInstance(f)[h]()})};i.enableDismissTrigger=e,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})})}(W,W.exports)),W.exports}var tt={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ft;function Tt(){return ft||(ft=1,function(b,O){(function(i,r){b.exports=r(B(),U(),nt())})(x,function(i,r,d){const n="focustrap",s=".bs.focustrap",h=`focusin${s}`,l=`keydown.tab${s}`,A="Tab",m="forward",f="backward",p={autofocus:!0,trapElement:null},N={autofocus:"boolean",trapElement:"element"};class C extends d{constructor(T){super(),this._config=this._getConfig(T),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return p}static get DefaultType(){return N}static get NAME(){return n}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),i.off(document,s),i.on(document,h,T=>this._handleFocusin(T)),i.on(document,l,T=>this._handleKeydown(T)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,i.off(document,s))}_handleFocusin(T){const{trapElement:k}=this._config;if(T.target===document||T.target===k||k.contains(T.target))return;const L=r.focusableChildren(k);L.length===0?k.focus():this._lastTabNavDirection===f?L[L.length-1].focus():L[0].focus()}_handleKeydown(T){T.key===A&&(this._lastTabNavDirection=T.shiftKey?f:m)}}return C})}(tt)),tt.exports}var et={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function Dt(){return ht||(ht=1,function(b,O){(function(i,r){b.exports=r(gt(),U(),F())})(x,function(i,r,d){const n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",e=".sticky-top",s="padding-right",h="margin-right";class l{constructor(){this._element=document.body}getWidth(){const m=document.documentElement.clientWidth;return Math.abs(window.innerWidth-m)}hide(){const m=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,s,f=>f+m),this._setElementAttributes(n,s,f=>f+m),this._setElementAttributes(e,h,f=>f-m)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,s),this._resetElementAttributes(n,s),this._resetElementAttributes(e,h)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(m,f,p){const N=this.getWidth(),C=M=>{if(M!==this._element&&window.innerWidth>M.clientWidth+N)return;this._saveInitialAttribute(M,f);const T=window.getComputedStyle(M).getPropertyValue(f);M.style.setProperty(f,`${p(Number.parseFloat(T))}px`)};this._applyManipulationCallback(m,C)}_saveInitialAttribute(m,f){const p=m.style.getPropertyValue(f);p&&i.setDataAttribute(m,f,p)}_resetElementAttributes(m,f){const p=N=>{const C=i.getDataAttribute(N,f);if(C===null){N.style.removeProperty(f);return}i.removeDataAttribute(N,f),N.style.setProperty(f,C)};this._applyManipulationCallback(m,p)}_applyManipulationCallback(m,f){if(d.isElement(m)){f(m);return}for(const p of r.find(m,this._element))f(p)}}return l})}(et)),et.exports}/*!
  * Bootstrap modal.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(b,O){(function(i,r){b.exports=r(bt(),B(),U(),At(),yt(),Tt(),F(),Dt())})(x,function(i,r,d,n,e,s,h,l){const A="modal",f=".bs.modal",p=".data-api",N="Escape",C=`hide${f}`,M=`hidePrevented${f}`,T=`hidden${f}`,k=`show${f}`,L=`shown${f}`,q=`resize${f}`,P=`click.dismiss${f}`,c=`mousedown.dismiss${f}`,u=`keydown.dismiss${f}`,g=`click${f}${p}`,_="modal-open",t="fade",a="show",o="modal-static",y=".modal.show",D=".modal-dialog",w=".modal-body",v='[data-bs-toggle="modal"]',$={backdrop:!0,focus:!0,keyboard:!0},I={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class V extends i{constructor(E,S){super(E,S),this._dialog=d.findOne(D,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new l,this._addEventListeners()}static get Default(){return $}static get DefaultType(){return I}static get NAME(){return A}toggle(E){return this._isShown?this.hide():this.show(E)}show(E){this._isShown||this._isTransitioning||r.trigger(this._element,k,{relatedTarget:E}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(_),this._adjustDialog(),this._backdrop.show(()=>this._showElement(E)))}hide(){!this._isShown||this._isTransitioning||r.trigger(this._element,C).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(a),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){r.off(window,f),r.off(this._dialog,f),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new n({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new s({trapElement:this._element})}_showElement(E){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const S=d.findOne(w,this._dialog);S&&(S.scrollTop=0),h.reflow(this._element),this._element.classList.add(a);const R=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,r.trigger(this._element,L,{relatedTarget:E})};this._queueCallback(R,this._dialog,this._isAnimated())}_addEventListeners(){r.on(this._element,u,E=>{if(E.key===N){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),r.on(window,q,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),r.on(this._element,c,E=>{r.one(this._element,P,S=>{if(!(this._element!==E.target||this._element!==S.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(_),this._resetAdjustments(),this._scrollBar.reset(),r.trigger(this._element,T)})}_isAnimated(){return this._element.classList.contains(t)}_triggerBackdropTransition(){if(r.trigger(this._element,M).defaultPrevented)return;const S=this._element.scrollHeight>document.documentElement.clientHeight,R=this._element.style.overflowY;R==="hidden"||this._element.classList.contains(o)||(S||(this._element.style.overflowY="hidden"),this._element.classList.add(o),this._queueCallback(()=>{this._element.classList.remove(o),this._queueCallback(()=>{this._element.style.overflowY=R},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const E=this._element.scrollHeight>document.documentElement.clientHeight,S=this._scrollBar.getWidth(),R=S>0;if(R&&!E){const K=h.isRTL()?"paddingLeft":"paddingRight";this._element.style[K]=`${S}px`}if(!R&&E){const K=h.isRTL()?"paddingRight":"paddingLeft";this._element.style[K]=`${S}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(E,S){return this.each(function(){const R=V.getOrCreateInstance(this,E);if(typeof E=="string"){if(typeof R[E]>"u")throw new TypeError(`No method named "${E}"`);R[E](S)}})}}return r.on(document,g,v,function(Q){const E=d.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&Q.preventDefault(),r.one(E,k,K=>{K.defaultPrevented||r.one(E,T,()=>{h.isVisible(this)&&this.focus()})});const S=d.findOne(y);S&&V.getInstance(S).hide(),V.getOrCreateInstance(E).toggle(this)}),e.enableDismissTrigger(V),h.defineJQueryPlugin(V),V})})(pt);var wt=pt.exports;const vt=_t(wt);export{vt as M,St as g};
