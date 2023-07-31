import{f as D,H as L,g as v,h as lt,i as Me,j as N,k as p,m as re,l as x,n as O,p as E,F as Le,S as W,q as oe,s as y,u as q,P as me,N as j,T as nt,t as B,v as $,x as rt,y as ot,z as G,A as at,B as it,C as He,D as st,E as ut,G as Fe,I as C,J as dt,K as ct,L as ft,M as pt,O as vt,Q as I,r as ee,o as ce,c as fe,a as f,R as mt,U as ht,V as gt,W as bt,X as yt,d as Q,w as X,Y as xe,b as wt}from"./index.8b71b527.js";import{_ as Et}from"./plugin-vue_export-helper.21dcd24c.js";var he=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(he||{});let Pe=D({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:l}){return()=>{let{features:n,...r}=e,o={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return L({ourProps:o,theirProps:r,slot:{},attrs:l,slots:t,name:"Hidden"})}}});function Tt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ge(){let e=[],t={addEventListener(l,n,r,o){return l.addEventListener(n,r,o),t.add(()=>l.removeEventListener(n,r,o))},requestAnimationFrame(...l){let n=requestAnimationFrame(...l);t.add(()=>cancelAnimationFrame(n))},nextFrame(...l){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...l)})},setTimeout(...l){let n=setTimeout(...l);t.add(()=>clearTimeout(n))},style(l,n,r){let o=l.style.getPropertyValue(n);return Object.assign(l.style,{[n]:r}),this.add(()=>{Object.assign(l.style,{[n]:o})})},group(l){let n=ge();return l(n),this.add(()=>n.dispose())},add(l){return e.push(l),()=>{let n=e.indexOf(l);if(n>=0)for(let r of e.splice(n,1))r()}},dispose(){for(let l of e.splice(0))l()}};return t}var ne=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ne||{});function xt(){let e=v(0);return lt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function je(e,t,l,n){Me.isServer||N(r=>{e=e!=null?e:window,e.addEventListener(t,l,n),r(()=>e.removeEventListener(t,l,n))})}function Ve(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function St(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ie(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let n=y(l);n instanceof HTMLElement&&t.add(n)}return t}var Ue=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ue||{});let te=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:n}){let r=v(null);n({el:r,$el:r});let o=p(()=>re(r)),a=v(!1);x(()=>a.value=!0),O(()=>a.value=!1),Lt({ownerDocument:o},p(()=>a.value&&Boolean(e.features&16)));let i=Ft({ownerDocument:o,container:r,initialFocus:p(()=>e.initialFocus)},p(()=>a.value&&Boolean(e.features&2)));Pt({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:i},p(()=>a.value&&Boolean(e.features&8)));let s=xt();function u(g){let w=y(r);!w||(T=>T())(()=>{q(s.value,{[ne.Forwards]:()=>{me(w,j.First,{skipElements:[g.relatedTarget]})},[ne.Backwards]:()=>{me(w,j.Last,{skipElements:[g.relatedTarget]})}})})}let d=v(!1);function c(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function m(g){if(!a.value)return;let w=Ie(e.containers);y(r)instanceof HTMLElement&&w.add(y(r));let T=g.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(We(w,T)||(d.value?me(y(r),q(s.value,{[ne.Forwards]:()=>j.Next,[ne.Backwards]:()=>j.Previous})|j.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&W(g.target)))}return()=>{let g={},w={ref:r,onKeydown:c,onFocusout:m},{features:T,initialFocus:F,containers:J,...P}=e;return E(Le,[Boolean(T&4)&&E(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:he.Focusable}),L({ourProps:w,theirProps:{...t,...P},slot:g,attrs:t,slots:l,name:"FocusTrap"}),Boolean(T&4)&&E(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:he.Focusable})])}}}),{features:Ue}),V=[];St(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&V[0]!==t.target&&(V.unshift(t.target),V=V.filter(l=>l!=null&&l.isConnected),V.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Dt(e){let t=v(V.slice());return oe([e],([l],[n])=>{n===!0&&l===!1?Ve(()=>{t.value.splice(0)}):n===!1&&l===!0&&(t.value=V.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(n=>n!=null&&n.isConnected))!=null?l:null}}function Lt({ownerDocument:e},t){let l=Dt(t);x(()=>{N(()=>{var n,r;t.value||((n=e.value)==null?void 0:n.activeElement)===((r=e.value)==null?void 0:r.body)&&W(l())},{flush:"post"})}),O(()=>{t.value&&W(l())})}function Ft({ownerDocument:e,container:t,initialFocus:l},n){let r=v(null),o=v(!1);return x(()=>o.value=!0),O(()=>o.value=!1),x(()=>{oe([t,l,n],(a,i)=>{if(a.every((u,d)=>(i==null?void 0:i[d])===u)||!n.value)return;let s=y(t);s&&Ve(()=>{var u,d;if(!o.value)return;let c=y(l),m=(u=e.value)==null?void 0:u.activeElement;if(c){if(c===m){r.value=m;return}}else if(s.contains(m)){r.value=m;return}c?W(c):me(s,j.First|j.NoScroll)===nt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function Pt({ownerDocument:e,container:t,containers:l,previousActiveElement:n},r){var o;je((o=e.value)==null?void 0:o.defaultView,"focus",a=>{if(!r.value)return;let i=Ie(l);y(t)instanceof HTMLElement&&i.add(y(t));let s=n.value;if(!s)return;let u=a.target;u&&u instanceof HTMLElement?We(i,u)?(n.value=u,W(u)):(a.preventDefault(),a.stopPropagation(),W(s)):W(n.value)},!0)}function We(e,t){for(let l of e)if(l.contains(t))return!0;return!1}let Se=new Map,le=new Map;function Ne(e,t=v(!0)){N(l=>{var n;if(!t.value)return;let r=y(e);if(!r)return;l(function(){var a;if(!r)return;let i=(a=le.get(r))!=null?a:1;if(i===1?le.delete(r):le.set(r,i-1),i!==1)return;let s=Se.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Se.delete(r))});let o=(n=le.get(r))!=null?n:0;le.set(r,o+1),o===0&&(Se.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}let qe=Symbol("ForcePortalRootContext");function Ct(){return $(qe,!1)}let Ce=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return B(qe,e.force),()=>{let{force:n,...r}=e;return L({theirProps:r,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}});function _t(e){let t=re(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}let Ge=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let n=v(null),r=p(()=>re(n)),o=Ct(),a=$(ze,null),i=v(o===!0||a==null?_t(n.value):a.resolveTarget());N(()=>{o||a!=null&&(i.value=a.resolveTarget())});let s=$(_e,null);return x(()=>{let u=y(n);u&&s&&O(s.register(u))}),O(()=>{var u,d;let c=(u=r.value)==null?void 0:u.getElementById("headlessui-portal-root");c&&i.value===c&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:n,"data-headlessui-portal":""};return E(rt,{to:i.value},L({ourProps:u,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),_e=Symbol("PortalParentContext");function kt(){let e=$(_e,null),t=v([]);function l(o){return t.value.push(o),e&&e.register(o),()=>n(o)}function n(o){let a=t.value.indexOf(o);a!==-1&&t.value.splice(a,1),e&&e.unregister(o)}let r={register:l,unregister:n,portals:t};return[t,D({name:"PortalWrapper",setup(o,{slots:a}){return B(_e,r),()=>{var i;return(i=a.default)==null?void 0:i.call(a)}}})]}let ze=Symbol("PortalGroupContext"),Ot=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let n=ot({resolveTarget(){return e.target}});return B(ze,n),()=>{let{target:r,...o}=e;return L({theirProps:o,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}}),Ye=Symbol("StackContext");var ke=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ke||{});function $t(){return $(Ye,()=>{})}function At({type:e,enabled:t,element:l,onUpdate:n}){let r=$t();function o(...a){n==null||n(...a),r(...a)}x(()=>{oe(t,(a,i)=>{a?o(0,e,l):i===!0&&o(1,e,l)},{immediate:!0,flush:"sync"})}),O(()=>{t.value&&o(1,e,l)}),B(Ye,o)}let Qe=Symbol("DescriptionContext");function Rt(){let e=$(Qe,null);if(e===null)throw new Error("Missing parent");return e}function Nt({slot:e=v({}),name:t="Description",props:l={}}={}){let n=v([]);function r(o){return n.value.push(o),()=>{let a=n.value.indexOf(o);a!==-1&&n.value.splice(a,1)}}return B(Qe,{register:r,slot:e,name:t,props:l}),p(()=>n.value.length>0?n.value.join(" "):void 0)}let _l=D({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${G()}`}},setup(e,{attrs:t,slots:l}){let n=Rt();return x(()=>O(n.register(e.id))),()=>{let{name:r="Description",slot:o=v({}),props:a={}}=n,{id:i,...s}=e,u={...Object.entries(a).reduce((d,[c,m])=>Object.assign(d,{[c]:at(m)}),{}),id:i};return L({ourProps:u,theirProps:s,slot:o.value,attrs:t,slots:l,name:r})}}});function Bt(e){let t=it(e.getSnapshot());return O(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Mt(e,t){let l=e(),n=new Set;return{getSnapshot(){return l},subscribe(r){return n.add(r),()=>n.delete(r)},dispatch(r,...o){let a=t[r].call(l,...o);a&&(l=a,n.forEach(i=>i()))}}}function Ht(){let e;return{before({doc:t}){var l;let n=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:t,d:l}){let n=t.documentElement,r=n.clientWidth-n.offsetWidth,o=e-r;l.style(n,"paddingRight",`${o}px`)}}}function jt(){if(!Tt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:l,meta:n}){function r(a){return n.containers.flatMap(i=>i()).some(i=>i.contains(a))}l.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;l.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let i=a.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),u=t.querySelector(s);u&&!r(u)&&(o=u)}catch{}},!0),l.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!r(a.target)&&a.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function Vt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function It(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let U=Mt(()=>new Map,{PUSH(e,t){var l;let n=(l=this.get(e))!=null?l:{doc:e,count:0,d:ge(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let n={doc:e,d:t,meta:It(l)},r=[jt(),Ht(),Vt()];r.forEach(({before:o})=>o==null?void 0:o(n)),r.forEach(({after:o})=>o==null?void 0:o(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});U.subscribe(()=>{let e=U.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let n=t.get(l.doc)==="hidden",r=l.count!==0;(r&&!n||!r&&n)&&U.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&U.dispatch("TEARDOWN",l)}});function Ut(e,t,l){let n=Bt(U),r=p(()=>{let o=e.value?n.value.get(e.value):void 0;return o?o.count>0:!1});return oe([e,t],([o,a],[i],s)=>{if(!o||!a)return;U.dispatch("PUSH",o,l);let u=!1;s(()=>{u||(U.dispatch("POP",i!=null?i:o,l),u=!0)})},{immediate:!0}),r}function Wt({defaultContainers:e=[],portals:t}={}){let l=v(null),n=re(l);function r(){var o;let a=[];for(let i of e)i!==null&&(i instanceof HTMLElement?a.push(i):"value"in i&&i.value instanceof HTMLElement&&a.push(i.value));if(t!=null&&t.value)for(let i of t.value)a.push(i);for(let i of(o=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?o:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(y(l))||a.some(s=>i.contains(s))||a.push(i));return a}return{resolveContainers:r,contains(o){return r().some(a=>a.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return E(Pe,{features:he.Hidden,ref:l})}}}var qt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qt||{});let Oe=Symbol("DialogContext");function ae(e){let t=$(Oe,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,ae),l}return t}let pe="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Gt=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:pe},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${G()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:r}){var o;let a=v(!1);x(()=>{a.value=!0});let i=v(0),s=He(),u=p(()=>e.open===pe&&s!==null?(s.value&C.Open)===C.Open:e.open),d=v(null),c=p(()=>re(d));if(r({el:d,$el:d}),!(e.open!==pe||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===pe?void 0:e.open}`);let m=p(()=>a.value&&u.value?0:1),g=p(()=>m.value===0),w=p(()=>i.value>1),T=$(Oe,null)!==null,[F,J]=kt(),{resolveContainers:P,mainTreeNodeRef:M,MainTreeNode:ie}=Wt({portals:F,defaultContainers:[p(()=>{var h;return(h=S.panelRef.value)!=null?h:d.value})]}),se=p(()=>w.value?"parent":"leaf"),K=p(()=>s!==null?(s.value&C.Closing)===C.Closing:!1),ye=p(()=>T||K.value?!1:g.value),ue=p(()=>{var h,b,_;return(_=Array.from((b=(h=c.value)==null?void 0:h.querySelectorAll("body > *"))!=null?b:[]).find(k=>k.id==="headlessui-portal-root"?!1:k.contains(y(M))&&k instanceof HTMLElement))!=null?_:null});Ne(ue,ye);let we=p(()=>w.value?!0:g.value),Ee=p(()=>{var h,b,_;return(_=Array.from((b=(h=c.value)==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(k=>k.contains(y(M))&&k instanceof HTMLElement))!=null?_:null});Ne(Ee,we),At({type:"Dialog",enabled:p(()=>m.value===0),element:d,onUpdate:(h,b)=>{if(b==="Dialog")return q(h,{[ke.Add]:()=>i.value+=1,[ke.Remove]:()=>i.value-=1})}});let Te=Nt({name:"DialogDescription",slot:p(()=>({open:u.value}))}),z=v(null),S={titleId:z,panelRef:v(null),dialogState:m,setTitleId(h){z.value!==h&&(z.value=h)},close(){t("close",!1)}};B(Oe,S);let Z=p(()=>!(!g.value||w.value));st(P,(h,b)=>{S.close(),ut(()=>b==null?void 0:b.focus())},Z);let A=p(()=>!(w.value||m.value!==0));je((o=c.value)==null?void 0:o.defaultView,"keydown",h=>{A.value&&(h.defaultPrevented||h.key===dt.Escape&&(h.preventDefault(),h.stopPropagation(),S.close()))});let Y=p(()=>!(K.value||m.value!==0||T));return Ut(c,Y,h=>{var b;return{containers:[...(b=h.containers)!=null?b:[],P]}}),N(h=>{if(m.value!==0)return;let b=y(d);if(!b)return;let _=new ResizeObserver(k=>{for(let de of k){let R=de.target.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&S.close()}});_.observe(b),h(()=>_.disconnect())}),()=>{let{id:h,open:b,initialFocus:_,...k}=e,de={...l,ref:d,id:h,role:"dialog","aria-modal":m.value===0?!0:void 0,"aria-labelledby":z.value,"aria-describedby":Te.value},R={open:m.value===0};return E(Ce,{force:!0},()=>[E(Ge,()=>E(Ot,{target:d.value},()=>E(Ce,{force:!1},()=>E(te,{initialFocus:_,containers:P,features:g.value?q(se.value,{parent:te.features.RestoreFocus,leaf:te.features.All&~te.features.FocusLock}):te.features.None},()=>E(J,{},()=>L({ourProps:de,theirProps:{...k,...l},slot:R,attrs:l,slots:n,visible:m.value===0,features:Fe.RenderStrategy|Fe.Static,name:"Dialog"})))))),E(ie)])}}});D({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${G()}`}},setup(e,{attrs:t,slots:l}){let n=ae("DialogOverlay");function r(o){o.target===o.currentTarget&&(o.preventDefault(),o.stopPropagation(),n.close())}return()=>{let{id:o,...a}=e;return L({ourProps:{id:o,"aria-hidden":!0,onClick:r},theirProps:a,slot:{open:n.dialogState.value===0},attrs:t,slots:l,name:"DialogOverlay"})}}});D({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${G()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:n}){let r=ae("DialogBackdrop"),o=v(null);return n({el:o,$el:o}),x(()=>{if(r.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:a,...i}=e,s={id:a,ref:o,"aria-hidden":!0};return E(Ce,{force:!0},()=>E(Ge,()=>L({ourProps:s,theirProps:{...t,...i},slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogBackdrop"})))}}});let zt=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${G()}`}},setup(e,{attrs:t,slots:l,expose:n}){let r=ae("DialogPanel");n({el:r.panelRef,$el:r.panelRef});function o(a){a.stopPropagation()}return()=>{let{id:a,...i}=e,s={id:a,ref:r.panelRef,onClick:o};return L({ourProps:s,theirProps:i,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}}),Yt=D({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${G()}`}},setup(e,{attrs:t,slots:l}){let n=ae("DialogTitle");return x(()=>{n.setTitleId(e.id),O(()=>n.setTitleId(null))}),()=>{let{id:r,...o}=e;return L({ourProps:{id:r},theirProps:o,slot:{open:n.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}});function Qt(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function De(e,...t){e&&t.length>0&&e.classList.add(...t)}function ve(e,...t){e&&t.length>0&&e.classList.remove(...t)}var $e=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))($e||{});function Xt(e,t){let l=ge();if(!e)return l.dispose;let{transitionDuration:n,transitionDelay:r}=getComputedStyle(e),[o,a]=[n,r].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return o!==0?l.setTimeout(()=>t("finished"),o+a):t("finished"),l.add(()=>t("cancelled")),l.dispose}function Be(e,t,l,n,r,o){let a=ge(),i=o!==void 0?Qt(o):()=>{};return ve(e,...r),De(e,...t,...l),a.nextFrame(()=>{ve(e,...l),De(e,...n),a.add(Xt(e,s=>(ve(e,...n,...t),De(e,...r),i(s))))}),a.add(()=>ve(e,...t,...l,...n,...r)),a.add(()=>i("cancelled")),a.dispose}function H(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Ae=Symbol("TransitionContext");var Jt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Jt||{});function Kt(){return $(Ae,null)!==null}function Zt(){let e=$(Ae,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function el(){let e=$(Re,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Re=Symbol("NestingContext");function be(e){return"children"in e?be(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Xe(e){let t=v([]),l=v(!1);x(()=>l.value=!0),O(()=>l.value=!1);function n(o,a=I.Hidden){let i=t.value.findIndex(({id:s})=>s===o);i!==-1&&(q(a,{[I.Unmount](){t.value.splice(i,1)},[I.Hidden](){t.value[i].state="hidden"}}),!be(t)&&l.value&&(e==null||e()))}function r(o){let a=t.value.find(({id:i})=>i===o);return a?a.state!=="visible"&&(a.state="visible"):t.value.push({id:o,state:"visible"}),()=>n(o,I.Unmount)}return{children:t,register:r,unregister:n}}let Je=Fe.RenderStrategy,Ke=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:r}){let o=v(0);function a(){o.value|=C.Opening,t("beforeEnter")}function i(){o.value&=~C.Opening,t("afterEnter")}function s(){o.value|=C.Closing,t("beforeLeave")}function u(){o.value&=~C.Closing,t("afterLeave")}if(!Kt()&&ct())return()=>E(Ze,{...e,onBeforeEnter:a,onAfterEnter:i,onBeforeLeave:s,onAfterLeave:u},n);let d=v(null),c=p(()=>e.unmount?I.Unmount:I.Hidden);r({el:d,$el:d});let{show:m,appear:g}=Zt(),{register:w,unregister:T}=el(),F=v(m.value?"visible":"hidden"),J={value:!0},P=G(),M={value:!1},ie=Xe(()=>{!M.value&&F.value!=="hidden"&&(F.value="hidden",T(P),u())});x(()=>{let S=w(P);O(S)}),N(()=>{if(c.value===I.Hidden&&P){if(m.value&&F.value!=="visible"){F.value="visible";return}q(F.value,{hidden:()=>T(P),visible:()=>w(P)})}});let se=H(e.enter),K=H(e.enterFrom),ye=H(e.enterTo),ue=H(e.entered),we=H(e.leave),Ee=H(e.leaveFrom),Te=H(e.leaveTo);x(()=>{N(()=>{if(F.value==="visible"){let S=y(d);if(S instanceof Comment&&S.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function z(S){let Z=J.value&&!g.value,A=y(d);!A||!(A instanceof HTMLElement)||Z||(M.value=!0,m.value&&a(),m.value||s(),S(m.value?Be(A,se,K,ye,ue,Y=>{M.value=!1,Y===$e.Finished&&i()}):Be(A,we,Ee,Te,ue,Y=>{M.value=!1,Y===$e.Finished&&(be(ie)||(F.value="hidden",T(P),u()))})))}return x(()=>{oe([m],(S,Z,A)=>{z(A),J.value=!1},{immediate:!0})}),B(Re,ie),ft(p(()=>q(F.value,{visible:C.Open,hidden:C.Closed})|o.value)),()=>{let{appear:S,show:Z,enter:A,enterFrom:Y,enterTo:h,entered:b,leave:_,leaveFrom:k,leaveTo:de,...R}=e,et={ref:d},tt={...R,...g.value&&m.value&&Me.isServer?{class:pt([l.class,R.class,...se,...K])}:{}};return L({theirProps:tt,ourProps:et,slot:{},slots:n,attrs:l,features:Je,visible:F.value==="visible",name:"TransitionChild"})}}}),tl=Ke,Ze=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n}){let r=He(),o=p(()=>e.show===null&&r!==null?(r.value&C.Open)===C.Open:e.show);N(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let a=v(o.value?"visible":"hidden"),i=Xe(()=>{a.value="hidden"}),s=v(!0),u={show:o,appear:p(()=>e.appear||!s.value)};return x(()=>{N(()=>{s.value=!1,o.value?a.value="visible":be(i)||(a.value="hidden")})}),B(Re,i),B(Ae,u),()=>{let d=vt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return L({ourProps:{...c,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[E(tl,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...c,...d},n.default)]},attrs:{},features:Je,visible:a.value==="visible",name:"Transition"})}}});const ll={data(){return{number:"",carrier:"",show:!1,errors:[]}},components:{Dialog:Gt,DialogPanel:zt,DialogTitle:Yt,TransitionChild:Ke,TransitionRoot:Ze},methods:{checkNumber:function(e){this.errors=[],this.number=this.number.toString(),this.number.length==10?(this.number=this.number.slice(3,10),this.validateNumber(this.number)&&this.checkCarrier(this.number)):this.validateNumber(this.number)&&this.checkCarrier(this.number),e.preventDefault()},validateNumber(e){return e>=6e6&&e<=8889999?(this.show=!this.show,!0):(this.errors.push("Please enter valid cell number."),!1)},reset(){this.number=""},logFormData(){let e=[];e.push({Number:this.number,Carrier:this.carrier}),console.log("Form Data:",e)},checkCarrier(e){e>="6000000"&&e<="6089999"?this.carrier="Digicel":e>="6090000"&&e<="6299999"?this.carrier="GTT":e>="6300000"&&e<="6349999"?this.carrier="Digicel":e>="6350000"&&e<="6359999"?this.carrier="ENet":e>="6360000"&&e<="6379999"?this.carrier="Digicel":e>="6380000"&&e<="6589999"?this.carrier="GTT":e>="6590000"&&e<="6999999"?this.carrier="Digicel":e>="7010000"&&e<="7019999"?this.carrier="Digicel":e>="7060000"&&e<="7079999"?this.carrier="GTT":e>="7100000"&&e<="7139999"?this.carrier="ENet":e>="8880000"&&e<="8889999"?this.carrier="GTT":this.carrier="GTT"}}},nl={class:"h-full"},rl={class:"h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},ol={class:"shadow-xl rounded-xl dark:shadow-lg dark:shadow-blue-700"},al=f("a",{href:"https://storyset.com/people",title:"People illustrations by Storyset"},[f("div",{class:"bg-cover bg-center mx-auto w-auto [height:250px] rounded-t-xl",style:{"background-image":"url(/people.svg)"},role:"img","aria-label":"Illustration of people using their cellphones"})],-1),il={class:"px-10 py-10"},sl=f("h2",{class:"text-center text-3xl font-extrabold text-gray-900 dark:text-white"},"Cell Number Checker",-1),ul=f("p",{class:"text-sm text-center dark:text-white"},"v1.1.1 | Last updated: 11/06/2023",-1),dl=f("p",{class:"mt-4 font-medium text-gray-500text-center dark:text-white"},"Disclaimer: I don't work for any of the telecommunications providers mentioned in this app",-1),cl={key:0},fl=f("p",{class:"mt-4 font-medium text-red-500 text-center text-2xl"},"Error!",-1),pl={class:"font-bold dark:text-white"},vl={class:"mt-4 space-y-6"},ml={class:"grid gap-6"},hl={class:"col-span-6 sm:col-span-3"},gl=f("label",{for:"number",class:"block text-sm font-medium text-gray-700 dark:text-white"},"Cell Number",-1),bl=f("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),yl={class:"fixed z-10 inset-0 overflow-y-auto"},wl={class:"flex items-center justify-center min-h-full p-4 text-center sm:p-0"},El={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Tl={class:"sm:flex sm:items-start"},xl={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Sl={class:"mt-2"},Dl={class:"text-sm text-gray-500"},Ll={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"};function Fl(e,t,l,n,r,o){const a=ee("TransitionChild"),i=ee("DialogTitle"),s=ee("DialogPanel"),u=ee("Dialog"),d=ee("TransitionRoot");return ce(),fe(Le,null,[f("div",nl,[f("div",rl,[f("div",ol,[al,f("div",il,[f("form",{onSubmit:t[2]||(t[2]=mt((...c)=>e.checkForm&&e.checkForm(...c),["prevent"])),class:"max-w-md w-full space-y-8"},[f("div",null,[sl,ul,dl,r.errors.length?(ce(),fe("div",cl,[fl,(ce(!0),fe(Le,null,ht(r.errors,c=>(ce(),fe("p",pl,xe(c),1))),256))])):gt("",!0)]),f("div",vl,[f("div",ml,[f("div",hl,[gl,bt(f("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>r.number=c),type:"number",name:"number",id:"number",placeholder:"Enter cell phone number",class:"mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[yt,r.number]])])]),f("div",null,[f("button",{type:"submit",onClick:t[1]||(t[1]=(...c)=>o.checkNumber&&o.checkNumber(...c)),class:"group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-white dark:bg-blue-500 dark:hover:bg-blue-700"},"Check Number")])])],32)])])])]),Q(d,{as:"template",show:r.show=r.show},{default:X(()=>[Q(u,{as:"div",class:"relative z-10",open:r.show,onClose:t[4]||(t[4]=c=>r.show=!r.show)},{default:X(()=>[Q(a,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:X(()=>[bl]),_:1}),f("div",yl,[f("div",wl,[Q(a,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:X(()=>[Q(s,{class:"relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"},{default:X(()=>[f("div",El,[f("div",Tl,[f("div",xl,[Q(i,{as:"h3",class:"text-xl font-bold text-gray-900 pb-3"},{default:X(()=>[wt("Results ")]),_:1}),f("div",Sl,[f("p",Dl,xe(r.number)+" is a "+xe(r.carrier)+" SIM",1)])])])]),f("div",Ll,[f("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[3]||(t[3]=c=>{r.show=!r.show,o.reset()})}," Close ")])]),_:1})]),_:1})])])]),_:1},8,["open"])]),_:1},8,["show"])],64)}var kl=Et(ll,[["render",Fl]]);export{kl as default};
