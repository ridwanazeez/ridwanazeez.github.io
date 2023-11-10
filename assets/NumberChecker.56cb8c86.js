import{g as D,H as L,h as v,i as lt,j as He,k as N,l as p,m as ne,n as x,p as O,q as E,F as Le,S as W,s as ae,u as y,v as q,P as he,N as j,T as rt,x as B,y as $,z as nt,A as at,B as G,C as ot,D as it,E as je,G as st,I as Ce,J as P,K as ut,L as dt,M as ct,O as ft,Q as pt,R as vt,U as I,_ as mt,r as ee,o as fe,c as pe,a as f,V as ht,W as gt,b as bt,X as yt,Y as wt,e as Q,w as X,t as xe,d as Et}from"./index.8ff14dac.js";var ge=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ge||{});let Fe=D({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:l}){return()=>{let{features:r,...n}=e,a={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return L({ourProps:a,theirProps:n,slot:{},attrs:l,slots:t,name:"Hidden"})}}});function Tt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ae(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function oe(){let e=[],t={addEventListener(l,r,n,a){return l.addEventListener(r,n,a),t.add(()=>l.removeEventListener(r,n,a))},requestAnimationFrame(...l){let r=requestAnimationFrame(...l);t.add(()=>cancelAnimationFrame(r))},nextFrame(...l){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...l)})},setTimeout(...l){let r=setTimeout(...l);t.add(()=>clearTimeout(r))},microTask(...l){let r={current:!0};return Ae(()=>{r.current&&l[0]()}),t.add(()=>{r.current=!1})},style(l,r,n){let a=l.style.getPropertyValue(r);return Object.assign(l.style,{[r]:n}),this.add(()=>{Object.assign(l.style,{[r]:a})})},group(l){let r=oe();return l(r),this.add(()=>r.dispose())},add(l){return e.push(l),()=>{let r=e.indexOf(l);if(r>=0)for(let n of e.splice(r,1))n()}},dispose(){for(let l of e.splice(0))l()}};return t}var re=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(re||{});function xt(){let e=v(0);return lt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ve(e,t,l,r){He.isServer||N(n=>{e=e!=null?e:window,e.addEventListener(t,l,r),n(()=>e.removeEventListener(t,l,r))})}function St(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ie(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let r=y(l);r instanceof HTMLElement&&t.add(r)}return t}var Ue=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ue||{});let te=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let n=v(null);r({el:n,$el:n});let a=p(()=>ne(n)),o=v(!1);x(()=>o.value=!0),O(()=>o.value=!1),Lt({ownerDocument:a},p(()=>o.value&&Boolean(e.features&16)));let i=Ct({ownerDocument:a,container:n,initialFocus:p(()=>e.initialFocus)},p(()=>o.value&&Boolean(e.features&2)));Ft({ownerDocument:a,container:n,containers:e.containers,previousActiveElement:i},p(()=>o.value&&Boolean(e.features&8)));let s=xt();function u(g){let w=y(n);!w||(T=>T())(()=>{q(s.value,{[re.Forwards]:()=>{he(w,j.First,{skipElements:[g.relatedTarget]})},[re.Backwards]:()=>{he(w,j.Last,{skipElements:[g.relatedTarget]})}})})}let d=v(!1);function c(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function m(g){if(!o.value)return;let w=Ie(e.containers);y(n)instanceof HTMLElement&&w.add(y(n));let T=g.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(We(w,T)||(d.value?he(y(n),q(s.value,{[re.Forwards]:()=>j.Next,[re.Backwards]:()=>j.Previous})|j.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&W(g.target)))}return()=>{let g={},w={ref:n,onKeydown:c,onFocusout:m},{features:T,initialFocus:C,containers:J,...F}=e;return E(Le,[Boolean(T&4)&&E(Fe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ge.Focusable}),L({ourProps:w,theirProps:{...t,...F},slot:g,attrs:t,slots:l,name:"FocusTrap"}),Boolean(T&4)&&E(Fe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ge.Focusable})])}}}),{features:Ue}),V=[];St(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&V[0]!==t.target&&(V.unshift(t.target),V=V.filter(l=>l!=null&&l.isConnected),V.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Dt(e){let t=v(V.slice());return ae([e],([l],[r])=>{r===!0&&l===!1?Ae(()=>{t.value.splice(0)}):r===!1&&l===!0&&(t.value=V.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(r=>r!=null&&r.isConnected))!=null?l:null}}function Lt({ownerDocument:e},t){let l=Dt(t);x(()=>{N(()=>{var r,n;t.value||((r=e.value)==null?void 0:r.activeElement)===((n=e.value)==null?void 0:n.body)&&W(l())},{flush:"post"})}),O(()=>{t.value&&W(l())})}function Ct({ownerDocument:e,container:t,initialFocus:l},r){let n=v(null),a=v(!1);return x(()=>a.value=!0),O(()=>a.value=!1),x(()=>{ae([t,l,r],(o,i)=>{if(o.every((u,d)=>(i==null?void 0:i[d])===u)||!r.value)return;let s=y(t);s&&Ae(()=>{var u,d;if(!a.value)return;let c=y(l),m=(u=e.value)==null?void 0:u.activeElement;if(c){if(c===m){n.value=m;return}}else if(s.contains(m)){n.value=m;return}c?W(c):he(s,j.First|j.NoScroll)===rt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),n}function Ft({ownerDocument:e,container:t,containers:l,previousActiveElement:r},n){var a;Ve((a=e.value)==null?void 0:a.defaultView,"focus",o=>{if(!n.value)return;let i=Ie(l);y(t)instanceof HTMLElement&&i.add(y(t));let s=r.value;if(!s)return;let u=o.target;u&&u instanceof HTMLElement?We(i,u)?(r.value=u,W(u)):(o.preventDefault(),o.stopPropagation(),W(s)):W(r.value)},!0)}function We(e,t){for(let l of e)if(l.contains(t))return!0;return!1}let Se=new Map,le=new Map;function Be(e,t=v(!0)){N(l=>{var r;if(!t.value)return;let n=y(e);if(!n)return;l(function(){var o;if(!n)return;let i=(o=le.get(n))!=null?o:1;if(i===1?le.delete(n):le.set(n,i-1),i!==1)return;let s=Se.get(n);s&&(s["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",s["aria-hidden"]),n.inert=s.inert,Se.delete(n))});let a=(r=le.get(n))!=null?r:0;le.set(n,a+1),a===0&&(Se.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}let qe=Symbol("ForcePortalRootContext");function Pt(){return $(qe,!1)}let Pe=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return B(qe,e.force),()=>{let{force:r,...n}=e;return L({theirProps:n,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}});function kt(e){let t=ne(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let Ge=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let r=v(null),n=p(()=>ne(r)),a=Pt(),o=$(ze,null),i=v(a===!0||o==null?kt(r.value):o.resolveTarget());N(()=>{a||o!=null&&(i.value=o.resolveTarget())});let s=$(ke,null);return x(()=>{let u=y(r);u&&s&&O(s.register(u))}),O(()=>{var u,d;let c=(u=n.value)==null?void 0:u.getElementById("headlessui-portal-root");c&&i.value===c&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:r,"data-headlessui-portal":""};return E(nt,{to:i.value},L({ourProps:u,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),ke=Symbol("PortalParentContext");function _t(){let e=$(ke,null),t=v([]);function l(a){return t.value.push(a),e&&e.register(a),()=>r(a)}function r(a){let o=t.value.indexOf(a);o!==-1&&t.value.splice(o,1),e&&e.unregister(a)}let n={register:l,unregister:r,portals:t};return[t,D({name:"PortalWrapper",setup(a,{slots:o}){return B(ke,n),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let ze=Symbol("PortalGroupContext"),Ot=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let r=at({resolveTarget(){return e.target}});return B(ze,r),()=>{let{target:n,...a}=e;return L({theirProps:a,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}}),Ye=Symbol("StackContext");var _e=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(_e||{});function $t(){return $(Ye,()=>{})}function At({type:e,enabled:t,element:l,onUpdate:r}){let n=$t();function a(...o){r==null||r(...o),n(...o)}x(()=>{ae(t,(o,i)=>{o?a(0,e,l):i===!0&&a(1,e,l)},{immediate:!0,flush:"sync"})}),O(()=>{t.value&&a(1,e,l)}),B(Ye,a)}let Qe=Symbol("DescriptionContext");function Rt(){let e=$(Qe,null);if(e===null)throw new Error("Missing parent");return e}function Nt({slot:e=v({}),name:t="Description",props:l={}}={}){let r=v([]);function n(a){return r.value.push(a),()=>{let o=r.value.indexOf(a);o!==-1&&r.value.splice(o,1)}}return B(Qe,{register:n,slot:e,name:t,props:l}),p(()=>r.value.length>0?r.value.join(" "):void 0)}let Fl=D({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${G()}`}},setup(e,{attrs:t,slots:l}){let r=Rt();return x(()=>O(r.register(e.id))),()=>{let{name:n="Description",slot:a=v({}),props:o={}}=r,{id:i,...s}=e,u={...Object.entries(o).reduce((d,[c,m])=>Object.assign(d,{[c]:ot(m)}),{}),id:i};return L({ourProps:u,theirProps:s,slot:a.value,attrs:t,slots:l,name:n})}}});function Bt(e){let t=it(e.getSnapshot());return O(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Mt(e,t){let l=e(),r=new Set;return{getSnapshot(){return l},subscribe(n){return r.add(n),()=>r.delete(n)},dispatch(n,...a){let o=t[n].call(l,...a);o&&(l=o,r.forEach(i=>i()))}}}function Ht(){let e;return{before({doc:t}){var l;let r=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-r.clientWidth},after({doc:t,d:l}){let r=t.documentElement,n=r.clientWidth-r.offsetWidth,a=e-n;l.style(r,"paddingRight",`${a}px`)}}}function jt(){if(!Tt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:l,meta:r}){function n(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=oe();o.style(t.documentElement,"scroll-behavior","auto"),l.add(()=>l.microTask(()=>o.dispose()))}l.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;l.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),u=t.querySelector(s);u&&!n(u)&&(a=u)}catch{}},!0),l.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!n(o.target)&&o.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function Vt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function It(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let U=Mt(()=>new Map,{PUSH(e,t){var l;let r=(l=this.get(e))!=null?l:{doc:e,count:0,d:oe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let r={doc:e,d:t,meta:It(l)},n=[jt(),Ht(),Vt()];n.forEach(({before:a})=>a==null?void 0:a(r)),n.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});U.subscribe(()=>{let e=U.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let r=t.get(l.doc)==="hidden",n=l.count!==0;(n&&!r||!n&&r)&&U.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&U.dispatch("TEARDOWN",l)}});function Ut(e,t,l){let r=Bt(U),n=p(()=>{let a=e.value?r.value.get(e.value):void 0;return a?a.count>0:!1});return ae([e,t],([a,o],[i],s)=>{if(!a||!o)return;U.dispatch("PUSH",a,l);let u=!1;s(()=>{u||(U.dispatch("POP",i!=null?i:a,l),u=!0)})},{immediate:!0}),n}function Wt({defaultContainers:e=[],portals:t,mainTreeNodeRef:l}={}){let r=v(null),n=ne(r);function a(){var o;let i=[];for(let s of e)s!==null&&(s instanceof HTMLElement?i.push(s):"value"in s&&s.value instanceof HTMLElement&&i.push(s.value));if(t!=null&&t.value)for(let s of t.value)i.push(s);for(let s of(o=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?o:[])s!==document.body&&s!==document.head&&s instanceof HTMLElement&&s.id!=="headlessui-portal-root"&&(s.contains(y(r))||i.some(u=>s.contains(u))||i.push(s));return i}return{resolveContainers:a,contains(o){return a().some(i=>i.contains(o))},mainTreeNodeRef:r,MainTreeNode(){return l!=null?null:E(Fe,{features:ge.Hidden,ref:r})}}}var qt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qt||{});let Oe=Symbol("DialogContext");function ie(e){let t=$(Oe,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,ie),l}return t}let ve="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Gt=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ve},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${G()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:r,expose:n}){var a;let o=v(!1);x(()=>{o.value=!0});let i=v(0),s=je(),u=p(()=>e.open===ve&&s!==null?(s.value&P.Open)===P.Open:e.open),d=v(null),c=p(()=>ne(d));if(n({el:d,$el:d}),!(e.open!==ve||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===ve?void 0:e.open}`);let m=p(()=>o.value&&u.value?0:1),g=p(()=>m.value===0),w=p(()=>i.value>1),T=$(Oe,null)!==null,[C,J]=_t(),{resolveContainers:F,mainTreeNodeRef:M,MainTreeNode:se}=Wt({portals:C,defaultContainers:[p(()=>{var h;return(h=S.panelRef.value)!=null?h:d.value})]}),ue=p(()=>w.value?"parent":"leaf"),K=p(()=>s!==null?(s.value&P.Closing)===P.Closing:!1),ye=p(()=>T||K.value?!1:g.value),de=p(()=>{var h,b,k;return(k=Array.from((b=(h=c.value)==null?void 0:h.querySelectorAll("body > *"))!=null?b:[]).find(_=>_.id==="headlessui-portal-root"?!1:_.contains(y(M))&&_ instanceof HTMLElement))!=null?k:null});Be(de,ye);let we=p(()=>w.value?!0:g.value),Ee=p(()=>{var h,b,k;return(k=Array.from((b=(h=c.value)==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(_=>_.contains(y(M))&&_ instanceof HTMLElement))!=null?k:null});Be(Ee,we),At({type:"Dialog",enabled:p(()=>m.value===0),element:d,onUpdate:(h,b)=>{if(b==="Dialog")return q(h,{[_e.Add]:()=>i.value+=1,[_e.Remove]:()=>i.value-=1})}});let Te=Nt({name:"DialogDescription",slot:p(()=>({open:u.value}))}),z=v(null),S={titleId:z,panelRef:v(null),dialogState:m,setTitleId(h){z.value!==h&&(z.value=h)},close(){t("close",!1)}};B(Oe,S);let Z=p(()=>!(!g.value||w.value));st(F,(h,b)=>{S.close(),ut(()=>b==null?void 0:b.focus())},Z);let A=p(()=>!(w.value||m.value!==0));Ve((a=c.value)==null?void 0:a.defaultView,"keydown",h=>{A.value&&(h.defaultPrevented||h.key===dt.Escape&&(h.preventDefault(),h.stopPropagation(),S.close()))});let Y=p(()=>!(K.value||m.value!==0||T));return Ut(c,Y,h=>{var b;return{containers:[...(b=h.containers)!=null?b:[],F]}}),N(h=>{if(m.value!==0)return;let b=y(d);if(!b)return;let k=new ResizeObserver(_=>{for(let ce of _){let R=ce.target.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&S.close()}});k.observe(b),h(()=>k.disconnect())}),()=>{let{id:h,open:b,initialFocus:k,..._}=e,ce={...l,ref:d,id:h,role:"dialog","aria-modal":m.value===0?!0:void 0,"aria-labelledby":z.value,"aria-describedby":Te.value},R={open:m.value===0};return E(Pe,{force:!0},()=>[E(Ge,()=>E(Ot,{target:d.value},()=>E(Pe,{force:!1},()=>E(te,{initialFocus:k,containers:F,features:g.value?q(ue.value,{parent:te.features.RestoreFocus,leaf:te.features.All&~te.features.FocusLock}):te.features.None},()=>E(J,{},()=>L({ourProps:ce,theirProps:{..._,...l},slot:R,attrs:l,slots:r,visible:m.value===0,features:Ce.RenderStrategy|Ce.Static,name:"Dialog"})))))),E(se)])}}});D({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${G()}`}},setup(e,{attrs:t,slots:l}){let r=ie("DialogOverlay");function n(a){a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r.close())}return()=>{let{id:a,...o}=e;return L({ourProps:{id:a,"aria-hidden":!0,onClick:n},theirProps:o,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogOverlay"})}}});D({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${G()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let n=ie("DialogBackdrop"),a=v(null);return r({el:a,$el:a}),x(()=>{if(n.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:o,...i}=e,s={id:o,ref:a,"aria-hidden":!0};return E(Pe,{force:!0},()=>E(Ge,()=>L({ourProps:s,theirProps:{...t,...i},slot:{open:n.dialogState.value===0},attrs:t,slots:l,name:"DialogBackdrop"})))}}});let zt=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${G()}`}},setup(e,{attrs:t,slots:l,expose:r}){let n=ie("DialogPanel");r({el:n.panelRef,$el:n.panelRef});function a(o){o.stopPropagation()}return()=>{let{id:o,...i}=e,s={id:o,ref:n.panelRef,onClick:a};return L({ourProps:s,theirProps:i,slot:{open:n.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}}),Yt=D({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${G()}`}},setup(e,{attrs:t,slots:l}){let r=ie("DialogTitle");return x(()=>{r.setTitleId(e.id),O(()=>r.setTitleId(null))}),()=>{let{id:n,...a}=e;return L({ourProps:{id:n},theirProps:a,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}});function Qt(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function De(e,...t){e&&t.length>0&&e.classList.add(...t)}function me(e,...t){e&&t.length>0&&e.classList.remove(...t)}var $e=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))($e||{});function Xt(e,t){let l=oe();if(!e)return l.dispose;let{transitionDuration:r,transitionDelay:n}=getComputedStyle(e),[a,o]=[r,n].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return a!==0?l.setTimeout(()=>t("finished"),a+o):t("finished"),l.add(()=>t("cancelled")),l.dispose}function Me(e,t,l,r,n,a){let o=oe(),i=a!==void 0?Qt(a):()=>{};return me(e,...n),De(e,...t,...l),o.nextFrame(()=>{me(e,...l),De(e,...r),o.add(Xt(e,s=>(me(e,...r,...t),De(e,...n),i(s))))}),o.add(()=>me(e,...t,...l,...r,...n)),o.add(()=>i("cancelled")),o.dispose}function H(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Re=Symbol("TransitionContext");var Jt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Jt||{});function Kt(){return $(Re,null)!==null}function Zt(){let e=$(Re,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function el(){let e=$(Ne,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ne=Symbol("NestingContext");function be(e){return"children"in e?be(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Xe(e){let t=v([]),l=v(!1);x(()=>l.value=!0),O(()=>l.value=!1);function r(a,o=I.Hidden){let i=t.value.findIndex(({id:s})=>s===a);i!==-1&&(q(o,{[I.Unmount](){t.value.splice(i,1)},[I.Hidden](){t.value[i].state="hidden"}}),!be(t)&&l.value&&(e==null||e()))}function n(a){let o=t.value.find(({id:i})=>i===a);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,I.Unmount)}return{children:t,register:n,unregister:r}}let Je=Ce.RenderStrategy,Ke=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:r,expose:n}){let a=v(0);function o(){a.value|=P.Opening,t("beforeEnter")}function i(){a.value&=~P.Opening,t("afterEnter")}function s(){a.value|=P.Closing,t("beforeLeave")}function u(){a.value&=~P.Closing,t("afterLeave")}if(!Kt()&&ct())return()=>E(Ze,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:s,onAfterLeave:u},r);let d=v(null),c=p(()=>e.unmount?I.Unmount:I.Hidden);n({el:d,$el:d});let{show:m,appear:g}=Zt(),{register:w,unregister:T}=el(),C=v(m.value?"visible":"hidden"),J={value:!0},F=G(),M={value:!1},se=Xe(()=>{!M.value&&C.value!=="hidden"&&(C.value="hidden",T(F),u())});x(()=>{let S=w(F);O(S)}),N(()=>{if(c.value===I.Hidden&&F){if(m.value&&C.value!=="visible"){C.value="visible";return}q(C.value,{hidden:()=>T(F),visible:()=>w(F)})}});let ue=H(e.enter),K=H(e.enterFrom),ye=H(e.enterTo),de=H(e.entered),we=H(e.leave),Ee=H(e.leaveFrom),Te=H(e.leaveTo);x(()=>{N(()=>{if(C.value==="visible"){let S=y(d);if(S instanceof Comment&&S.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function z(S){let Z=J.value&&!g.value,A=y(d);!A||!(A instanceof HTMLElement)||Z||(M.value=!0,m.value&&o(),m.value||s(),S(m.value?Me(A,ue,K,ye,de,Y=>{M.value=!1,Y===$e.Finished&&i()}):Me(A,we,Ee,Te,de,Y=>{M.value=!1,Y===$e.Finished&&(be(se)||(C.value="hidden",T(F),u()))})))}return x(()=>{ae([m],(S,Z,A)=>{z(A),J.value=!1},{immediate:!0})}),B(Ne,se),ft(p(()=>q(C.value,{visible:P.Open,hidden:P.Closed})|a.value)),()=>{let{appear:S,show:Z,enter:A,enterFrom:Y,enterTo:h,entered:b,leave:k,leaveFrom:_,leaveTo:ce,...R}=e,et={ref:d},tt={...R,...g.value&&m.value&&He.isServer?{class:pt([l.class,R.class,...ue,...K])}:{}};return L({theirProps:tt,ourProps:et,slot:{},slots:r,attrs:l,features:Je,visible:C.value==="visible",name:"TransitionChild"})}}}),tl=Ke,Ze=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:r}){let n=je(),a=p(()=>e.show===null&&n!==null?(n.value&P.Open)===P.Open:e.show);N(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(a.value?"visible":"hidden"),i=Xe(()=>{o.value="hidden"}),s=v(!0),u={show:a,appear:p(()=>e.appear||!s.value)};return x(()=>{N(()=>{s.value=!1,a.value?o.value="visible":be(i)||(o.value="hidden")})}),B(Ne,i),B(Re,u),()=>{let d=vt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return L({ourProps:{...c,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[E(tl,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...c,...d},r.default)]},attrs:{},features:Je,visible:o.value==="visible",name:"Transition"})}}});const ll={components:{Dialog:Gt,DialogPanel:zt,DialogTitle:Yt,TransitionChild:Ke,TransitionRoot:Ze},data(){return{number:"",carrier:"",show:!1,errors:[]}},methods:{checkNumber:function(e){this.errors=[],this.number=this.number.toString(),this.number.length==10?(this.number=this.number.slice(3,10),this.validateNumber(this.number)&&this.checkCarrier(this.number)):this.validateNumber(this.number)&&this.checkCarrier(this.number),e.preventDefault()},validateNumber(e){return e>=6e6&&e<=8889999?(this.show=!this.show,!0):(this.errors.push("Please enter valid cell number."),!1)},reset(){this.number=""},logFormData(){let e=[];e.push({Number:this.number,Carrier:this.carrier}),console.log("Form Data:",e)},checkCarrier(e){e>="6000000"&&e<="6089999"?this.carrier="Digicel":e>="6090000"&&e<="6299999"?this.carrier="GTT":e>="6300000"&&e<="6349999"?this.carrier="Digicel":e>="6350000"&&e<="6359999"?this.carrier="ENet":e>="6360000"&&e<="6379999"?this.carrier="Digicel":e>="6380000"&&e<="6589999"?this.carrier="GTT":e>="6590000"&&e<="6999999"?this.carrier="Digicel":e>="7010000"&&e<="7019999"?this.carrier="Digicel":e>="7060000"&&e<="7079999"?this.carrier="GTT":e>="7100000"&&e<="7139999"?this.carrier="ENet":e>="8880000"&&e<="8889999"?this.carrier="GTT":this.carrier="GTT"}}},rl={class:"h-full"},nl={class:"flex h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"},al={class:"rounded-xl shadow-xl dark:shadow-lg dark:shadow-blue-700"},ol=f("a",{href:"https://storyset.com/people",title:"People illustrations by Storyset"},[f("div",{class:"mx-auto w-auto rounded-t-xl bg-cover bg-center [height:250px]",style:{"background-image":"url(/images/people.svg)"},role:"img","aria-label":"Illustration of people using their cellphones"})],-1),il={class:"px-10 py-10"},sl=f("h2",{class:"text-center text-3xl font-extrabold text-gray-900 dark:text-white"}," Cell Number Checker ",-1),ul=f("p",{class:"text-center text-sm dark:text-white"},"v1.1.1 | Last updated: 11/06/2023",-1),dl=f("p",{class:"text-gray-500text-center mt-4 font-medium dark:text-white"}," Disclaimer: I don't work for any of the telecommunications providers mentioned in this app ",-1),cl={key:0},fl=f("p",{class:"mt-4 text-center text-2xl font-medium text-red-500"},"Error!",-1),pl={class:"mt-4 space-y-6"},vl={class:"grid gap-6"},ml={class:"col-span-6 sm:col-span-3"},hl=f("label",{for:"number",class:"block text-sm font-medium text-gray-700 dark:text-white"},"Cell Number",-1),gl=f("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),bl={class:"fixed inset-0 z-10 overflow-y-auto"},yl={class:"flex min-h-full items-center justify-center p-4 text-center sm:p-0"},wl={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},El={class:"sm:flex sm:items-start"},Tl={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},xl={class:"mt-2"},Sl={class:"text-sm text-gray-500"},Dl={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"};function Ll(e,t,l,r,n,a){const o=ee("TransitionChild"),i=ee("DialogTitle"),s=ee("DialogPanel"),u=ee("Dialog"),d=ee("TransitionRoot");return fe(),pe(Le,null,[f("div",rl,[f("div",nl,[f("div",al,[ol,f("div",il,[f("form",{class:"w-full max-w-md space-y-8",onSubmit:t[2]||(t[2]=ht((...c)=>e.checkForm&&e.checkForm(...c),["prevent"]))},[f("div",null,[sl,ul,dl,n.errors.length?(fe(),pe("div",cl,[fl,(fe(!0),pe(Le,null,gt(n.errors,(c,m)=>(fe(),pe("p",{key:m,class:"font-bold dark:text-white"},xe(c),1))),128))])):bt("",!0)]),f("div",pl,[f("div",vl,[f("div",ml,[hl,yt(f("input",{id:"number","onUpdate:modelValue":t[0]||(t[0]=c=>n.number=c),type:"number",name:"number",placeholder:"Enter cell phone number",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"},null,512),[[wt,n.number]])])]),f("div",null,[f("button",{type:"submit",class:"group relative flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-700",onClick:t[1]||(t[1]=(...c)=>a.checkNumber&&a.checkNumber(...c))}," Check Number ")])])],32)])])])]),Q(d,{as:"template",show:n.show=n.show},{default:X(()=>[Q(u,{as:"div",class:"relative z-10",open:n.show,onClose:t[4]||(t[4]=c=>n.show=!n.show)},{default:X(()=>[Q(o,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:X(()=>[gl]),_:1}),f("div",bl,[f("div",yl,[Q(o,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:X(()=>[Q(s,{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:X(()=>[f("div",wl,[f("div",El,[f("div",Tl,[Q(i,{as:"h3",class:"pb-3 text-xl font-bold text-gray-900"},{default:X(()=>[Et("Results ")]),_:1}),f("div",xl,[f("p",Sl,xe(n.number)+" is a "+xe(n.carrier)+" SIM",1)])])])]),f("div",Dl,[f("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[3]||(t[3]=c=>{n.show=!n.show,a.reset()})}," Close ")])]),_:1})]),_:1})])])]),_:1},8,["open"])]),_:1},8,["show"])],64)}var Pl=mt(ll,[["render",Ll]]);export{Pl as default};