(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ur(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Fr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=de(s)?Fc(s):Fr(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(de(t))return t;if(se(t))return t}}const Lc=/;(?![^(]*\))/g,$c=/:([^]+)/,Uc=/\/\*.*?\*\//gs;function Fc(t){const e={};return t.replace(Uc,"").split(Lc).forEach(n=>{if(n){const s=n.split($c);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Br(t){let e="";if(de(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Br(t[n]);s&&(e+=s+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hc=Ur(Bc);function Fo(t){return!!t||t===""}const ee={},Wt=[],Me=()=>{},jc=()=>!1,Vc=/^on[^a-z]/,Ps=t=>Vc.test(t),Hr=t=>t.startsWith("onUpdate:"),me=Object.assign,jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wc=Object.prototype.hasOwnProperty,z=(t,e)=>Wc.call(t,e),H=Array.isArray,In=t=>Os(t)==="[object Map]",zc=t=>Os(t)==="[object Set]",B=t=>typeof t=="function",de=t=>typeof t=="string",Vr=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Bo=t=>se(t)&&B(t.then)&&B(t.catch),Kc=Object.prototype.toString,Os=t=>Kc.call(t),qc=t=>Os(t).slice(8,-1),Gc=t=>Os(t)==="[object Object]",Wr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,is=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ks=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jc=/-(\w)/g,Ge=ks(t=>t.replace(Jc,(e,n)=>n?n.toUpperCase():"")),Yc=/\B([A-Z])/g,rn=ks(t=>t.replace(Yc,"-$1").toLowerCase()),Ns=ks(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qs=ks(t=>t?`on${Ns(t)}`:""),An=(t,e)=>!Object.is(t,e),os=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ms=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ii;const Xc=()=>Ii||(Ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ke;class Qc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Zc(t,e=ke){e&&e.active&&e.effects.push(t)}function el(){return ke}const zr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ho=t=>(t.w&mt)>0,jo=t=>(t.n&mt)>0,tl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mt},nl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ho(r)&&!jo(r)?r.delete(t):e[n++]=r,r.w&=~mt,r.n&=~mt}e.length=n}},gr=new WeakMap;let vn=0,mt=1;const mr=30;let Ne;const St=Symbol(""),_r=Symbol("");class Kr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zc(this,s)}run(){if(!this.active)return this.fn();let e=Ne,n=ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ne,Ne=this,ft=!0,mt=1<<++vn,vn<=mr?tl(this):Ei(this),this.fn()}finally{vn<=mr&&nl(this),mt=1<<--vn,Ne=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(Ei(this),this.onStop&&this.onStop(),this.active=!1)}}function Ei(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ft=!0;const Vo=[];function on(){Vo.push(ft),ft=!1}function an(){const t=Vo.pop();ft=t===void 0?!0:t}function ye(t,e,n){if(ft&&Ne){let s=gr.get(t);s||gr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=zr()),Wo(r)}}function Wo(t,e){let n=!1;vn<=mr?jo(t)||(t.n|=mt,n=!Ho(t)):n=!t.has(Ne),n&&(t.add(Ne),Ne.deps.push(t))}function Ze(t,e,n,s,r,i){const o=gr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(s);o.forEach((u,d)=>{(d==="length"||d>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Wr(n)&&a.push(o.get("length")):(a.push(o.get(St)),In(t)&&a.push(o.get(_r)));break;case"delete":H(t)||(a.push(o.get(St)),In(t)&&a.push(o.get(_r)));break;case"set":In(t)&&a.push(o.get(St));break}if(a.length===1)a[0]&&vr(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);vr(zr(c))}}function vr(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&wi(s);for(const s of n)s.computed||wi(s)}function wi(t,e){(t!==Ne||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const sl=Ur("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vr)),rl=qr(),il=qr(!1,!0),ol=qr(!0),Ti=al();function al(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=q(this);for(let i=0,o=this.length;i<o;i++)ye(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(q)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on();const s=q(this)[e].apply(this,n);return an(),s}}),t}function cl(t){const e=q(this);return ye(e,"has",t),e.hasOwnProperty(t)}function qr(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Tl:Yo:e?Jo:Go).get(s))return s;const o=H(s);if(!t){if(o&&z(Ti,r))return Reflect.get(Ti,r,i);if(r==="hasOwnProperty")return cl}const a=Reflect.get(s,r,i);return(Vr(r)?zo.has(r):sl(r))||(t||ye(s,"get",r),e)?a:he(a)?o&&Wr(r)?a:a.value:se(a)?t?Xo(a):Bn(a):a}}const ll=Ko(),ul=Ko(!0);function Ko(t=!1){return function(n,s,r,i){let o=n[s];if(Xt(o)&&he(o)&&!he(r))return!1;if(!t&&(!_s(r)&&!Xt(r)&&(o=q(o),r=q(r)),!H(n)&&he(o)&&!he(r)))return o.value=r,!0;const a=H(n)&&Wr(s)?Number(s)<n.length:z(n,s),c=Reflect.set(n,s,r,i);return n===q(i)&&(a?An(r,o)&&Ze(n,"set",s,r):Ze(n,"add",s,r)),c}}function dl(t,e){const n=z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ze(t,"delete",e,void 0),s}function fl(t,e){const n=Reflect.has(t,e);return(!Vr(e)||!zo.has(e))&&ye(t,"has",e),n}function hl(t){return ye(t,"iterate",H(t)?"length":St),Reflect.ownKeys(t)}const qo={get:rl,set:ll,deleteProperty:dl,has:fl,ownKeys:hl},pl={get:ol,set(t,e){return!0},deleteProperty(t,e){return!0}},gl=me({},qo,{get:il,set:ul}),Gr=t=>t,xs=t=>Reflect.getPrototypeOf(t);function Qn(t,e,n=!1,s=!1){t=t.__v_raw;const r=q(t),i=q(e);n||(e!==i&&ye(r,"get",e),ye(r,"get",i));const{has:o}=xs(r),a=s?Gr:n?Xr:Sn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Zn(t,e=!1){const n=this.__v_raw,s=q(n),r=q(t);return e||(t!==r&&ye(s,"has",t),ye(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function es(t,e=!1){return t=t.__v_raw,!e&&ye(q(t),"iterate",St),Reflect.get(t,"size",t)}function Ri(t){t=q(t);const e=q(this);return xs(e).has.call(e,t)||(e.add(t),Ze(e,"add",t,t)),this}function Ci(t,e){e=q(e);const n=q(this),{has:s,get:r}=xs(n);let i=s.call(n,t);i||(t=q(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?An(e,o)&&Ze(n,"set",t,e):Ze(n,"add",t,e),this}function Ai(t){const e=q(this),{has:n,get:s}=xs(e);let r=n.call(e,t);r||(t=q(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Ze(e,"delete",t,void 0),i}function Si(){const t=q(this),e=t.size!==0,n=t.clear();return e&&Ze(t,"clear",void 0,void 0),n}function ts(t,e){return function(s,r){const i=this,o=i.__v_raw,a=q(o),c=e?Gr:t?Xr:Sn;return!t&&ye(a,"iterate",St),o.forEach((u,d)=>s.call(r,c(u),c(d),i))}}function ns(t,e,n){return function(...s){const r=this.__v_raw,i=q(r),o=In(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),d=n?Gr:e?Xr:Sn;return!e&&ye(i,"iterate",c?_r:St),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return t==="delete"?!1:this}}function ml(){const t={get(i){return Qn(this,i)},get size(){return es(this)},has:Zn,add:Ri,set:Ci,delete:Ai,clear:Si,forEach:ts(!1,!1)},e={get(i){return Qn(this,i,!1,!0)},get size(){return es(this)},has:Zn,add:Ri,set:Ci,delete:Ai,clear:Si,forEach:ts(!1,!0)},n={get(i){return Qn(this,i,!0)},get size(){return es(this,!0)},has(i){return Zn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:ts(!0,!1)},s={get(i){return Qn(this,i,!0,!0)},get size(){return es(this,!0)},has(i){return Zn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:ts(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ns(i,!1,!1),n[i]=ns(i,!0,!1),e[i]=ns(i,!1,!0),s[i]=ns(i,!0,!0)}),[t,n,e,s]}const[_l,vl,bl,yl]=ml();function Jr(t,e){const n=e?t?yl:bl:t?vl:_l;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(z(n,r)&&r in s?n:s,r,i)}const Il={get:Jr(!1,!1)},El={get:Jr(!1,!0)},wl={get:Jr(!0,!1)},Go=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Tl=new WeakMap;function Rl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cl(t){return t.__v_skip||!Object.isExtensible(t)?0:Rl(qc(t))}function Bn(t){return Xt(t)?t:Yr(t,!1,qo,Il,Go)}function Al(t){return Yr(t,!1,gl,El,Jo)}function Xo(t){return Yr(t,!0,pl,wl,Yo)}function Yr(t,e,n,s,r){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Cl(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function zt(t){return Xt(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function _s(t){return!!(t&&t.__v_isShallow)}function Qo(t){return zt(t)||Xt(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Zo(t){return ms(t,"__v_skip",!0),t}const Sn=t=>se(t)?Bn(t):t,Xr=t=>se(t)?Xo(t):t;function ea(t){ft&&Ne&&(t=q(t),Wo(t.dep||(t.dep=zr())))}function ta(t,e){t=q(t);const n=t.dep;n&&vr(n)}function he(t){return!!(t&&t.__v_isRef===!0)}function kt(t){return na(t,!1)}function Sl(t){return na(t,!0)}function na(t,e){return he(t)?t:new Pl(t,e)}class Pl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:Sn(e)}get value(){return ea(this),this._value}set value(e){const n=this.__v_isShallow||_s(e)||Xt(e);e=n?e:q(e),An(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Sn(e),ta(this))}}function Kt(t){return he(t)?t.value:t}const Ol={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return he(r)&&!he(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function sa(t){return zt(t)?t:new Proxy(t,Ol)}var ra;class kl{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ra]=!1,this._dirty=!0,this.effect=new Kr(e,()=>{this._dirty||(this._dirty=!0,ta(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=q(this);return ea(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ra="__v_isReadonly";function Nl(t,e,n=!1){let s,r;const i=B(t);return i?(s=t,r=Me):(s=t.get,r=t.set),new kl(s,r,i||!r,n)}function ht(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ms(i,e,n)}return r}function De(t,e,n,s){if(B(t)){const i=ht(t,e,n,s);return i&&Bo(i)&&i.catch(o=>{Ms(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(De(t[i],e,n,s));return r}function Ms(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ht(c,null,10,[t,o,a]);return}}xl(t,n,r,s)}function xl(t,e,n,s=!0){console.error(t)}let Pn=!1,br=!1;const fe=[];let We=0;const qt=[];let Ye=null,Rt=0;const ia=Promise.resolve();let Qr=null;function oa(t){const e=Qr||ia;return t?e.then(this?t.bind(this):t):e}function Ml(t){let e=We+1,n=fe.length;for(;e<n;){const s=e+n>>>1;On(fe[s])<t?e=s+1:n=s}return e}function Zr(t){(!fe.length||!fe.includes(t,Pn&&t.allowRecurse?We+1:We))&&(t.id==null?fe.push(t):fe.splice(Ml(t.id),0,t),aa())}function aa(){!Pn&&!br&&(br=!0,Qr=ia.then(la))}function Dl(t){const e=fe.indexOf(t);e>We&&fe.splice(e,1)}function Ll(t){H(t)?qt.push(...t):(!Ye||!Ye.includes(t,t.allowRecurse?Rt+1:Rt))&&qt.push(t),aa()}function Pi(t,e=Pn?We+1:0){for(;e<fe.length;e++){const n=fe[e];n&&n.pre&&(fe.splice(e,1),e--,n())}}function ca(t){if(qt.length){const e=[...new Set(qt)];if(qt.length=0,Ye){Ye.push(...e);return}for(Ye=e,Ye.sort((n,s)=>On(n)-On(s)),Rt=0;Rt<Ye.length;Rt++)Ye[Rt]();Ye=null,Rt=0}}const On=t=>t.id==null?1/0:t.id,$l=(t,e)=>{const n=On(t)-On(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function la(t){br=!1,Pn=!0,fe.sort($l);const e=Me;try{for(We=0;We<fe.length;We++){const n=fe[We];n&&n.active!==!1&&ht(n,null,14)}}finally{We=0,fe.length=0,ca(),Pn=!1,Qr=null,(fe.length||qt.length)&&la()}}function Ul(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ee;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[d]||ee;p&&(r=n.map(v=>de(v)?v.trim():v)),h&&(r=n.map(pr))}let a,c=s[a=Qs(e)]||s[a=Qs(Ge(e))];!c&&i&&(c=s[a=Qs(rn(e))]),c&&De(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,De(u,t,6,r)}}function ua(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!B(t)){const c=u=>{const d=ua(u,e,!0);d&&(a=!0,me(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(se(t)&&s.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):me(o,i),se(t)&&s.set(t,o),o)}function Ds(t,e){return!t||!Ps(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,rn(e))||z(t,e))}let Ce=null,Ls=null;function vs(t){const e=Ce;return Ce=t,Ls=t&&t.type.__scopeId||null,e}function cn(t){Ls=t}function ln(){Ls=null}function Fl(t,e=Ce,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ui(-1);const i=vs(e);let o;try{o=t(...r)}finally{vs(i),s._d&&Ui(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Zs(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:d,renderCache:h,data:p,setupState:v,ctx:A,inheritAttrs:k}=t;let F,P;const $=vs(t);try{if(n.shapeFlag&4){const K=r||s;F=Ve(d.call(K,K,h,i,v,p,A)),P=c}else{const K=e;F=Ve(K.length>1?K(i,{attrs:c,slots:a,emit:u}):K(i,null)),P=e.props?c:Bl(c)}}catch(K){wn.length=0,Ms(K,t,1),F=te(kn)}let N=F;if(P&&k!==!1){const K=Object.keys(P),{shapeFlag:ce}=N;K.length&&ce&7&&(o&&K.some(Hr)&&(P=Hl(P,o)),N=Qt(N,P))}return n.dirs&&(N=Qt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),F=N,vs($),F}const Bl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ps(n))&&((e||(e={}))[n]=t[n]);return e},Hl=(t,e)=>{const n={};for(const s in t)(!Hr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jl(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Oi(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(o[p]!==s[p]&&!Ds(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Oi(s,o,u):!0:!!o;return!1}function Oi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ds(n,i))return!0}return!1}function Vl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wl=t=>t.__isSuspense;function zl(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ll(t)}function as(t,e){if(oe){let n=oe.provides;const s=oe.parent&&oe.parent.provides;s===n&&(n=oe.provides=Object.create(s)),n[t]=e}}function ze(t,e,n=!1){const s=oe||Ce;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}const ss={};function cs(t,e,n){return da(t,e,n)}function da(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ee){const a=el()===(oe==null?void 0:oe.scope)?oe:null;let c,u=!1,d=!1;if(he(t)?(c=()=>t.value,u=_s(t)):zt(t)?(c=()=>t,s=!0):H(t)?(d=!0,u=t.some(N=>zt(N)||_s(N)),c=()=>t.map(N=>{if(he(N))return N.value;if(zt(N))return At(N);if(B(N))return ht(N,a,2)})):B(t)?e?c=()=>ht(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),De(t,a,3,[p])}:c=Me,e&&s){const N=c;c=()=>At(N())}let h,p=N=>{h=P.onStop=()=>{ht(N,a,4)}},v;if(xn)if(p=Me,e?n&&De(e,a,3,[c(),d?[]:void 0,p]):c(),r==="sync"){const N=Bu();v=N.__watcherHandles||(N.__watcherHandles=[])}else return Me;let A=d?new Array(t.length).fill(ss):ss;const k=()=>{if(P.active)if(e){const N=P.run();(s||u||(d?N.some((K,ce)=>An(K,A[ce])):An(N,A)))&&(h&&h(),De(e,a,3,[N,A===ss?void 0:d&&A[0]===ss?[]:A,p]),A=N)}else P.run()};k.allowRecurse=!!e;let F;r==="sync"?F=k:r==="post"?F=()=>be(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),F=()=>Zr(k));const P=new Kr(c,F);e?n?k():A=P.run():r==="post"?be(P.run.bind(P),a&&a.suspense):P.run();const $=()=>{P.stop(),a&&a.scope&&jr(a.scope.effects,P)};return v&&v.push($),$}function Kl(t,e,n){const s=this.proxy,r=de(t)?t.includes(".")?fa(s,t):()=>s[t]:t.bind(s,s);let i;B(e)?i=e:(i=e.handler,n=e);const o=oe;Zt(this);const a=da(r,i.bind(s),n);return o?Zt(o):Pt(),a}function fa(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function At(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),he(t))At(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)At(t[n],e);else if(zc(t)||In(t))t.forEach(n=>{At(n,e)});else if(Gc(t))for(const n in t)At(t[n],e);return t}function le(t){return B(t)?{setup:t,name:t.name}:t}const ls=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function ql(t,e){pa(t,"a",e)}function Gl(t,e){pa(t,"da",e)}function pa(t,e,n=oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($s(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ha(r.parent.vnode)&&Jl(s,e,n,r),r=r.parent}}function Jl(t,e,n,s){const r=$s(e,t,s,!0);ga(()=>{jr(s[e],r)},n)}function $s(t,e,n=oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on(),Zt(n);const a=De(e,n,t,o);return Pt(),an(),a});return s?r.unshift(i):r.push(i),i}}const tt=t=>(e,n=oe)=>(!xn||t==="sp")&&$s(t,(...s)=>e(...s),n),Yl=tt("bm"),Xl=tt("m"),Ql=tt("bu"),Zl=tt("u"),eu=tt("bum"),ga=tt("um"),tu=tt("sp"),nu=tt("rtg"),su=tt("rtc");function ru(t,e=oe){$s("ec",t,e)}function Nt(t,e){const n=Ce;if(n===null)return t;const s=Bs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ee]=e[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&At(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function It(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(on(),De(c,n,8,[t.el,a,t,e]),an())}}const ma="components";function iu(t,e){return au(ma,t,!0,e)||t}const ou=Symbol();function au(t,e,n=!0,s=!1){const r=Ce||oe;if(r){const i=r.type;if(t===ma){const a=$u(i,!1);if(a&&(a===e||a===Ge(e)||a===Ns(Ge(e))))return i}const o=ki(r[t]||i[t],e)||ki(r.appContext[t],e);return!o&&s?i:o}}function ki(t,e){return t&&(t[e]||t[Ge(e)]||t[Ns(Ge(e))])}const yr=t=>t?Aa(t)?Bs(t)||t.proxy:yr(t.parent):null,En=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yr(t.parent),$root:t=>yr(t.root),$emit:t=>t.emit,$options:t=>ei(t),$forceUpdate:t=>t.f||(t.f=()=>Zr(t.update)),$nextTick:t=>t.n||(t.n=oa.bind(t.proxy)),$watch:t=>Kl.bind(t)}),er=(t,e)=>t!==ee&&!t.__isScriptSetup&&z(t,e),cu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(er(s,e))return o[e]=1,s[e];if(r!==ee&&z(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&z(u,e))return o[e]=3,i[e];if(n!==ee&&z(n,e))return o[e]=4,n[e];Ir&&(o[e]=0)}}const d=En[e];let h,p;if(d)return e==="$attrs"&&ye(t,"get",e),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ee&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return er(r,e)?(r[e]=n,!0):s!==ee&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&z(t,o)||er(e,o)||(a=i[0])&&z(a,o)||z(s,o)||z(En,o)||z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ir=!0;function lu(t){const e=ei(t),n=t.proxy,s=t.ctx;Ir=!1,e.beforeCreate&&Ni(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:h,mounted:p,beforeUpdate:v,updated:A,activated:k,deactivated:F,beforeDestroy:P,beforeUnmount:$,destroyed:N,unmounted:K,render:ce,renderTracked:ue,renderTriggered:Ee,errorCaptured:Ae,serverPrefetch:Ue,expose:Te,inheritAttrs:nt,components:Fe,directives:$t,filters:bt}=e;if(u&&uu(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const J=o[Q];B(J)&&(s[Q]=J.bind(n))}if(r){const Q=r.call(n,n);se(Q)&&(t.data=Bn(Q))}if(Ir=!0,i)for(const Q in i){const J=i[Q],Se=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):Me,yt=!B(J)&&B(J.set)?J.set.bind(n):Me,Pe=Re({get:Se,set:yt});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:ve=>Pe.value=ve})}if(a)for(const Q in a)_a(a[Q],s,n,Q);if(c){const Q=B(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(J=>{as(J,Q[J])})}d&&Ni(d,t,"c");function re(Q,J){H(J)?J.forEach(Se=>Q(Se.bind(n))):J&&Q(J.bind(n))}if(re(Yl,h),re(Xl,p),re(Ql,v),re(Zl,A),re(ql,k),re(Gl,F),re(ru,Ae),re(su,ue),re(nu,Ee),re(eu,$),re(ga,K),re(tu,Ue),H(Te))if(Te.length){const Q=t.exposed||(t.exposed={});Te.forEach(J=>{Object.defineProperty(Q,J,{get:()=>n[J],set:Se=>n[J]=Se})})}else t.exposed||(t.exposed={});ce&&t.render===Me&&(t.render=ce),nt!=null&&(t.inheritAttrs=nt),Fe&&(t.components=Fe),$t&&(t.directives=$t)}function uu(t,e,n=Me,s=!1){H(t)&&(t=Er(t));for(const r in t){const i=t[r];let o;se(i)?"default"in i?o=ze(i.from||r,i.default,!0):o=ze(i.from||r):o=ze(i),he(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ni(t,e,n){De(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function _a(t,e,n,s){const r=s.includes(".")?fa(n,s):()=>n[s];if(de(t)){const i=e[t];B(i)&&cs(r,i)}else if(B(t))cs(r,t.bind(n));else if(se(t))if(H(t))t.forEach(i=>_a(i,e,n,s));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&cs(r,i,t)}}function ei(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>bs(c,u,o,!0)),bs(c,e,o)),se(e)&&i.set(e,c),c}function bs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&bs(t,i,n,!0),r&&r.forEach(o=>bs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=du[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const du={data:xi,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:wt,directives:wt,watch:hu,provide:xi,inject:fu};function xi(t,e){return e?t?function(){return me(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function fu(t,e){return wt(Er(t),Er(e))}function Er(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function wt(t,e){return t?me(me(Object.create(null),t),e):e}function hu(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function pu(t,e,n,s=!1){const r={},i={};ms(i,Fs,1),t.propsDefaults=Object.create(null),va(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Al(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function gu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=q(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Ds(t.emitsOptions,p))continue;const v=e[p];if(c)if(z(i,p))v!==i[p]&&(i[p]=v,u=!0);else{const A=Ge(p);r[A]=wr(c,a,A,v,t,!1)}else v!==i[p]&&(i[p]=v,u=!0)}}}else{va(t,e,r,i)&&(u=!0);let d;for(const h in a)(!e||!z(e,h)&&((d=rn(h))===h||!z(e,d)))&&(c?n&&(n[h]!==void 0||n[d]!==void 0)&&(r[h]=wr(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!z(e,h))&&(delete i[h],u=!0)}u&&Ze(t,"set","$attrs")}function va(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(is(c))continue;const u=e[c];let d;r&&z(r,d=Ge(c))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:Ds(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=q(n),u=a||ee;for(let d=0;d<i.length;d++){const h=i[d];n[h]=wr(r,c,h,u[h],t,!z(u,h))}}return o}function wr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Zt(r),s=u[n]=c.call(null,e),Pt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===rn(n))&&(s=!0))}return s}function ba(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const d=h=>{c=!0;const[p,v]=ba(h,e,!0);me(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return se(t)&&s.set(t,Wt),Wt;if(H(i))for(let d=0;d<i.length;d++){const h=Ge(i[d]);Mi(h)&&(o[h]=ee)}else if(i)for(const d in i){const h=Ge(d);if(Mi(h)){const p=i[d],v=o[h]=H(p)||B(p)?{type:p}:Object.assign({},p);if(v){const A=$i(Boolean,v.type),k=$i(String,v.type);v[0]=A>-1,v[1]=k<0||A<k,(A>-1||z(v,"default"))&&a.push(h)}}}const u=[o,a];return se(t)&&s.set(t,u),u}function Mi(t){return t[0]!=="$"}function Di(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Li(t,e){return Di(t)===Di(e)}function $i(t,e){return H(e)?e.findIndex(n=>Li(n,t)):B(e)&&Li(e,t)?0:-1}const ya=t=>t[0]==="_"||t==="$stable",ti=t=>H(t)?t.map(Ve):[Ve(t)],mu=(t,e,n)=>{if(e._n)return e;const s=Fl((...r)=>ti(e(...r)),n);return s._c=!1,s},Ia=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ya(r))continue;const i=t[r];if(B(i))e[r]=mu(r,i,s);else if(i!=null){const o=ti(i);e[r]=()=>o}}},Ea=(t,e)=>{const n=ti(e);t.slots.default=()=>n},_u=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),ms(e,"_",n)):Ia(e,t.slots={})}else t.slots={},e&&Ea(t,e);ms(t.slots,Fs,1)},vu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(me(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ia(e,r)),o=e}else e&&(Ea(t,e),o={default:1});if(i)for(const a in r)!ya(a)&&!(a in o)&&delete r[a]};function wa(){return{app:null,config:{isNativeTag:jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bu=0;function yu(t,e){return function(s,r=null){B(s)||(s=Object.assign({},s)),r!=null&&!se(r)&&(r=null);const i=wa(),o=new Set;let a=!1;const c=i.app={_uid:bu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Hu,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(c,...d)):B(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,h){if(!a){const p=te(s,r);return p.appContext=i,d&&e?e(p,u):t(p,u,h),a=!0,c._container=u,u.__vue_app__=c,Bs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c}};return c}}function Tr(t,e,n,s,r=!1){if(H(t)){t.forEach((p,v)=>Tr(p,e&&(H(e)?e[v]:e),n,s,r));return}if(ls(s)&&!r)return;const i=s.shapeFlag&4?Bs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,d=a.refs===ee?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(de(u)?(d[u]=null,z(h,u)&&(h[u]=null)):he(u)&&(u.value=null)),B(c))ht(c,a,12,[o,d]);else{const p=de(c),v=he(c);if(p||v){const A=()=>{if(t.f){const k=p?z(h,c)?h[c]:d[c]:c.value;r?H(k)&&jr(k,i):H(k)?k.includes(i)||k.push(i):p?(d[c]=[i],z(h,c)&&(h[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else p?(d[c]=o,z(h,c)&&(h[c]=o)):v&&(c.value=o,t.k&&(d[t.k]=o))};o?(A.id=-1,be(A,n)):A()}}}const be=zl;function Iu(t){return Eu(t)}function Eu(t,e){const n=Xc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:v=Me,insertStaticContent:A}=t,k=(l,f,g,m=null,b=null,E=null,R=!1,I=null,w=!!f.dynamicChildren)=>{if(l===f)return;l&&!gn(l,f)&&(m=T(l),ve(l,b,E,!0),l=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:y,ref:M,shapeFlag:O}=f;switch(y){case Us:F(l,f,g,m);break;case kn:P(l,f,g,m);break;case us:l==null&&$(f,g,m,R);break;case je:Fe(l,f,g,m,b,E,R,I,w);break;default:O&1?ce(l,f,g,m,b,E,R,I,w):O&6?$t(l,f,g,m,b,E,R,I,w):(O&64||O&128)&&y.process(l,f,g,m,b,E,R,I,w,W)}M!=null&&b&&Tr(M,l&&l.ref,E,f||l,!f)},F=(l,f,g,m)=>{if(l==null)s(f.el=a(f.children),g,m);else{const b=f.el=l.el;f.children!==l.children&&u(b,f.children)}},P=(l,f,g,m)=>{l==null?s(f.el=c(f.children||""),g,m):f.el=l.el},$=(l,f,g,m)=>{[l.el,l.anchor]=A(l.children,f,g,m,l.el,l.anchor)},N=({el:l,anchor:f},g,m)=>{let b;for(;l&&l!==f;)b=p(l),s(l,g,m),l=b;s(f,g,m)},K=({el:l,anchor:f})=>{let g;for(;l&&l!==f;)g=p(l),r(l),l=g;r(f)},ce=(l,f,g,m,b,E,R,I,w)=>{R=R||f.type==="svg",l==null?ue(f,g,m,b,E,R,I,w):Ue(l,f,b,E,R,I,w)},ue=(l,f,g,m,b,E,R,I)=>{let w,y;const{type:M,props:O,shapeFlag:D,transition:U,dirs:V}=l;if(w=l.el=o(l.type,E,O&&O.is,O),D&8?d(w,l.children):D&16&&Ae(l.children,w,null,m,b,E&&M!=="foreignObject",R,I),V&&It(l,null,m,"created"),Ee(w,l,l.scopeId,R,m),O){for(const Y in O)Y!=="value"&&!is(Y)&&i(w,Y,null,O[Y],E,l.children,m,b,S);"value"in O&&i(w,"value",null,O.value),(y=O.onVnodeBeforeMount)&&He(y,m,l)}V&&It(l,null,m,"beforeMount");const Z=(!b||b&&!b.pendingBranch)&&U&&!U.persisted;Z&&U.beforeEnter(w),s(w,f,g),((y=O&&O.onVnodeMounted)||Z||V)&&be(()=>{y&&He(y,m,l),Z&&U.enter(w),V&&It(l,null,m,"mounted")},b)},Ee=(l,f,g,m,b)=>{if(g&&v(l,g),m)for(let E=0;E<m.length;E++)v(l,m[E]);if(b){let E=b.subTree;if(f===E){const R=b.vnode;Ee(l,R,R.scopeId,R.slotScopeIds,b.parent)}}},Ae=(l,f,g,m,b,E,R,I,w=0)=>{for(let y=w;y<l.length;y++){const M=l[y]=I?ot(l[y]):Ve(l[y]);k(null,M,f,g,m,b,E,R,I)}},Ue=(l,f,g,m,b,E,R)=>{const I=f.el=l.el;let{patchFlag:w,dynamicChildren:y,dirs:M}=f;w|=l.patchFlag&16;const O=l.props||ee,D=f.props||ee;let U;g&&Et(g,!1),(U=D.onVnodeBeforeUpdate)&&He(U,g,f,l),M&&It(f,l,g,"beforeUpdate"),g&&Et(g,!0);const V=b&&f.type!=="foreignObject";if(y?Te(l.dynamicChildren,y,I,g,m,V,E):R||J(l,f,I,null,g,m,V,E,!1),w>0){if(w&16)nt(I,f,O,D,g,m,b);else if(w&2&&O.class!==D.class&&i(I,"class",null,D.class,b),w&4&&i(I,"style",O.style,D.style,b),w&8){const Z=f.dynamicProps;for(let Y=0;Y<Z.length;Y++){const ie=Z[Y],Oe=O[ie],Ft=D[ie];(Ft!==Oe||ie==="value")&&i(I,ie,Oe,Ft,b,l.children,g,m,S)}}w&1&&l.children!==f.children&&d(I,f.children)}else!R&&y==null&&nt(I,f,O,D,g,m,b);((U=D.onVnodeUpdated)||M)&&be(()=>{U&&He(U,g,f,l),M&&It(f,l,g,"updated")},m)},Te=(l,f,g,m,b,E,R)=>{for(let I=0;I<f.length;I++){const w=l[I],y=f[I],M=w.el&&(w.type===je||!gn(w,y)||w.shapeFlag&70)?h(w.el):g;k(w,y,M,null,m,b,E,R,!0)}},nt=(l,f,g,m,b,E,R)=>{if(g!==m){if(g!==ee)for(const I in g)!is(I)&&!(I in m)&&i(l,I,g[I],null,R,f.children,b,E,S);for(const I in m){if(is(I))continue;const w=m[I],y=g[I];w!==y&&I!=="value"&&i(l,I,y,w,R,f.children,b,E,S)}"value"in m&&i(l,"value",g.value,m.value)}},Fe=(l,f,g,m,b,E,R,I,w)=>{const y=f.el=l?l.el:a(""),M=f.anchor=l?l.anchor:a("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:U}=f;U&&(I=I?I.concat(U):U),l==null?(s(y,g,m),s(M,g,m),Ae(f.children,g,M,b,E,R,I,w)):O>0&&O&64&&D&&l.dynamicChildren?(Te(l.dynamicChildren,D,g,b,E,R,I),(f.key!=null||b&&f===b.subTree)&&Ta(l,f,!0)):J(l,f,g,M,b,E,R,I,w)},$t=(l,f,g,m,b,E,R,I,w)=>{f.slotScopeIds=I,l==null?f.shapeFlag&512?b.ctx.activate(f,g,m,R,w):bt(f,g,m,b,E,R,w):hn(l,f,w)},bt=(l,f,g,m,b,E,R)=>{const I=l.component=Nu(l,m,b);if(ha(l)&&(I.ctx.renderer=W),xu(I),I.asyncDep){if(b&&b.registerDep(I,re),!l.el){const w=I.subTree=te(kn);P(null,w,f,g)}return}re(I,l,f,g,b,E,R)},hn=(l,f,g)=>{const m=f.component=l.component;if(jl(l,f,g))if(m.asyncDep&&!m.asyncResolved){Q(m,f,g);return}else m.next=f,Dl(m.update),m.update();else f.el=l.el,m.vnode=f},re=(l,f,g,m,b,E,R)=>{const I=()=>{if(l.isMounted){let{next:M,bu:O,u:D,parent:U,vnode:V}=l,Z=M,Y;Et(l,!1),M?(M.el=V.el,Q(l,M,R)):M=V,O&&os(O),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&He(Y,U,M,V),Et(l,!0);const ie=Zs(l),Oe=l.subTree;l.subTree=ie,k(Oe,ie,h(Oe.el),T(Oe),l,b,E),M.el=ie.el,Z===null&&Vl(l,ie.el),D&&be(D,b),(Y=M.props&&M.props.onVnodeUpdated)&&be(()=>He(Y,U,M,V),b)}else{let M;const{el:O,props:D}=f,{bm:U,m:V,parent:Z}=l,Y=ls(f);if(Et(l,!1),U&&os(U),!Y&&(M=D&&D.onVnodeBeforeMount)&&He(M,Z,f),Et(l,!0),O&&j){const ie=()=>{l.subTree=Zs(l),j(O,l.subTree,l,b,null)};Y?f.type.__asyncLoader().then(()=>!l.isUnmounted&&ie()):ie()}else{const ie=l.subTree=Zs(l);k(null,ie,g,m,l,b,E),f.el=ie.el}if(V&&be(V,b),!Y&&(M=D&&D.onVnodeMounted)){const ie=f;be(()=>He(M,Z,ie),b)}(f.shapeFlag&256||Z&&ls(Z.vnode)&&Z.vnode.shapeFlag&256)&&l.a&&be(l.a,b),l.isMounted=!0,f=g=m=null}},w=l.effect=new Kr(I,()=>Zr(y),l.scope),y=l.update=()=>w.run();y.id=l.uid,Et(l,!0),y()},Q=(l,f,g)=>{f.component=l;const m=l.vnode.props;l.vnode=f,l.next=null,gu(l,f.props,m,g),vu(l,f.children,g),on(),Pi(),an()},J=(l,f,g,m,b,E,R,I,w=!1)=>{const y=l&&l.children,M=l?l.shapeFlag:0,O=f.children,{patchFlag:D,shapeFlag:U}=f;if(D>0){if(D&128){yt(y,O,g,m,b,E,R,I,w);return}else if(D&256){Se(y,O,g,m,b,E,R,I,w);return}}U&8?(M&16&&S(y,b,E),O!==y&&d(g,O)):M&16?U&16?yt(y,O,g,m,b,E,R,I,w):S(y,b,E,!0):(M&8&&d(g,""),U&16&&Ae(O,g,m,b,E,R,I,w))},Se=(l,f,g,m,b,E,R,I,w)=>{l=l||Wt,f=f||Wt;const y=l.length,M=f.length,O=Math.min(y,M);let D;for(D=0;D<O;D++){const U=f[D]=w?ot(f[D]):Ve(f[D]);k(l[D],U,g,null,b,E,R,I,w)}y>M?S(l,b,E,!0,!1,O):Ae(f,g,m,b,E,R,I,w,O)},yt=(l,f,g,m,b,E,R,I,w)=>{let y=0;const M=f.length;let O=l.length-1,D=M-1;for(;y<=O&&y<=D;){const U=l[y],V=f[y]=w?ot(f[y]):Ve(f[y]);if(gn(U,V))k(U,V,g,null,b,E,R,I,w);else break;y++}for(;y<=O&&y<=D;){const U=l[O],V=f[D]=w?ot(f[D]):Ve(f[D]);if(gn(U,V))k(U,V,g,null,b,E,R,I,w);else break;O--,D--}if(y>O){if(y<=D){const U=D+1,V=U<M?f[U].el:m;for(;y<=D;)k(null,f[y]=w?ot(f[y]):Ve(f[y]),g,V,b,E,R,I,w),y++}}else if(y>D)for(;y<=O;)ve(l[y],b,E,!0),y++;else{const U=y,V=y,Z=new Map;for(y=V;y<=D;y++){const we=f[y]=w?ot(f[y]):Ve(f[y]);we.key!=null&&Z.set(we.key,y)}let Y,ie=0;const Oe=D-V+1;let Ft=!1,vi=0;const pn=new Array(Oe);for(y=0;y<Oe;y++)pn[y]=0;for(y=U;y<=O;y++){const we=l[y];if(ie>=Oe){ve(we,b,E,!0);continue}let Be;if(we.key!=null)Be=Z.get(we.key);else for(Y=V;Y<=D;Y++)if(pn[Y-V]===0&&gn(we,f[Y])){Be=Y;break}Be===void 0?ve(we,b,E,!0):(pn[Be-V]=y+1,Be>=vi?vi=Be:Ft=!0,k(we,f[Be],g,null,b,E,R,I,w),ie++)}const bi=Ft?wu(pn):Wt;for(Y=bi.length-1,y=Oe-1;y>=0;y--){const we=V+y,Be=f[we],yi=we+1<M?f[we+1].el:m;pn[y]===0?k(null,Be,g,yi,b,E,R,I,w):Ft&&(Y<0||y!==bi[Y]?Pe(Be,g,yi,2):Y--)}}},Pe=(l,f,g,m,b=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:y}=l;if(y&6){Pe(l.component.subTree,f,g,m);return}if(y&128){l.suspense.move(f,g,m);return}if(y&64){R.move(l,f,g,W);return}if(R===je){s(E,f,g);for(let O=0;O<w.length;O++)Pe(w[O],f,g,m);s(l.anchor,f,g);return}if(R===us){N(l,f,g);return}if(m!==2&&y&1&&I)if(m===0)I.beforeEnter(E),s(E,f,g),be(()=>I.enter(E),b);else{const{leave:O,delayLeave:D,afterLeave:U}=I,V=()=>s(E,f,g),Z=()=>{O(E,()=>{V(),U&&U()})};D?D(E,V,Z):Z()}else s(E,f,g)},ve=(l,f,g,m=!1,b=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:y,shapeFlag:M,patchFlag:O,dirs:D}=l;if(I!=null&&Tr(I,null,g,l,!0),M&256){f.ctx.deactivate(l);return}const U=M&1&&D,V=!ls(l);let Z;if(V&&(Z=R&&R.onVnodeBeforeUnmount)&&He(Z,f,l),M&6)_(l.component,g,m);else{if(M&128){l.suspense.unmount(g,m);return}U&&It(l,null,f,"beforeUnmount"),M&64?l.type.remove(l,f,g,b,W,m):y&&(E!==je||O>0&&O&64)?S(y,f,g,!1,!0):(E===je&&O&384||!b&&M&16)&&S(w,f,g),m&&Ut(l)}(V&&(Z=R&&R.onVnodeUnmounted)||U)&&be(()=>{Z&&He(Z,f,l),U&&It(l,null,f,"unmounted")},g)},Ut=l=>{const{type:f,el:g,anchor:m,transition:b}=l;if(f===je){Xn(g,m);return}if(f===us){K(l);return}const E=()=>{r(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:I}=b,w=()=>R(g,E);I?I(l.el,E,w):w()}else E()},Xn=(l,f)=>{let g;for(;l!==f;)g=p(l),r(l),l=g;r(f)},_=(l,f,g)=>{const{bum:m,scope:b,update:E,subTree:R,um:I}=l;m&&os(m),b.stop(),E&&(E.active=!1,ve(R,l,f,g)),I&&be(I,f),be(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},S=(l,f,g,m=!1,b=!1,E=0)=>{for(let R=E;R<l.length;R++)ve(l[R],f,g,m,b)},T=l=>l.shapeFlag&6?T(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),x=(l,f,g)=>{l==null?f._vnode&&ve(f._vnode,null,null,!0):k(f._vnode||null,l,f,null,null,null,g),Pi(),ca(),f._vnode=l},W={p:k,um:ve,m:Pe,r:Ut,mt:bt,mc:Ae,pc:J,pbc:Te,n:T,o:t};let ne,j;return e&&([ne,j]=e(W)),{render:x,hydrate:ne,createApp:yu(x,ne)}}function Et({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ta(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ot(r[i]),a.el=o.el),n||Ta(o,a)),a.type===Us&&(a.el=o.el)}}function wu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Tu=t=>t.__isTeleport,je=Symbol(void 0),Us=Symbol(void 0),kn=Symbol(void 0),us=Symbol(void 0),wn=[];let xe=null;function ae(t=!1){wn.push(xe=t?null:[])}function Ru(){wn.pop(),xe=wn[wn.length-1]||null}let Nn=1;function Ui(t){Nn+=t}function Ra(t){return t.dynamicChildren=Nn>0?xe||Wt:null,Ru(),Nn>0&&xe&&xe.push(t),t}function Ie(t,e,n,s,r,i){return Ra(C(t,e,n,s,r,i,!0))}function un(t,e,n,s,r){return Ra(te(t,e,n,s,r,!0))}function Rr(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const Fs="__vInternal",Ca=({key:t})=>t??null,ds=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||he(t)||B(t)?{i:Ce,r:t,k:e,f:!!n}:t:null;function C(t,e=null,n=null,s=0,r=null,i=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ca(e),ref:e&&ds(e),scopeId:Ls,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ce};return a?(ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),Nn>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const te=Cu;function Cu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ou)&&(t=kn),Rr(t)){const a=Qt(t,e,!0);return n&&ni(a,n),Nn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag|=-2,a}if(Uu(t)&&(t=t.__vccOpts),e){e=Au(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=Br(a)),se(c)&&(Qo(c)&&!H(c)&&(c=me({},c)),e.style=Fr(c))}const o=de(t)?1:Wl(t)?128:Tu(t)?64:se(t)?4:B(t)?2:0;return C(t,e,n,s,r,o,i,!0)}function Au(t){return t?Qo(t)||Fs in t?me({},t):t:null}function Qt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Pu(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ca(a),ref:e&&e.ref?n&&r?H(r)?r.concat(ds(e)):[r,ds(e)]:ds(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Su(t=" ",e=0){return te(Us,null,t,e)}function _t(t,e){const n=te(us,null,t);return n.staticCount=e,n}function Ve(t){return t==null||typeof t=="boolean"?te(kn):H(t)?te(je,null,t.slice()):typeof t=="object"?ot(t):te(Us,null,String(t))}function ot(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function ni(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ni(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Fs in e)?e._ctx=Ce:r===3&&Ce&&(Ce.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ce},n=32):(e=String(e),s&64?(n=16,e=[Su(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Br([e.class,s.class]));else if(r==="style")e.style=Fr([e.style,s.style]);else if(Ps(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function He(t,e,n,s=null){De(t,e,7,[n,s])}const Ou=wa();let ku=0;function Nu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ou,i={uid:ku++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(s,r),emitsOptions:ua(s,r),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:s.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ul.bind(null,i),t.ce&&t.ce(i),i}let oe=null;const Zt=t=>{oe=t,t.scope.on()},Pt=()=>{oe&&oe.scope.off(),oe=null};function Aa(t){return t.vnode.shapeFlag&4}let xn=!1;function xu(t,e=!1){xn=e;const{props:n,children:s}=t.vnode,r=Aa(t);pu(t,n,r,e),_u(t,s);const i=r?Mu(t,e):void 0;return xn=!1,i}function Mu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zo(new Proxy(t.ctx,cu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Lu(t):null;Zt(t),on();const i=ht(s,t,0,[t.props,r]);if(an(),Pt(),Bo(i)){if(i.then(Pt,Pt),e)return i.then(o=>{Fi(t,o,e)}).catch(o=>{Ms(o,t,0)});t.asyncDep=i}else Fi(t,i,e)}else Sa(t,e)}function Fi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=sa(e)),Sa(t,n)}let Bi;function Sa(t,e,n){const s=t.type;if(!t.render){if(!e&&Bi&&!s.render){const r=s.template||ei(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=me(me({isCustomElement:i,delimiters:a},o),c);s.render=Bi(r,u)}}t.render=s.render||Me}Zt(t),on(),lu(t),an(),Pt()}function Du(t){return new Proxy(t.attrs,{get(e,n){return ye(t,"get","$attrs"),e[n]}})}function Lu(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Du(t))},slots:t.slots,emit:t.emit,expose:e}}function Bs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sa(Zo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in En)return En[n](t)},has(e,n){return n in e||n in En}}))}function $u(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Uu(t){return B(t)&&"__vccOpts"in t}const Re=(t,e)=>Nl(t,e,xn);function Pa(t,e,n){const s=arguments.length;return s===2?se(e)&&!H(e)?Rr(e)?te(t,null,[e]):te(t,e):te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Rr(n)&&(n=[n]),te(t,e,n))}const Fu=Symbol(""),Bu=()=>ze(Fu),Hu="3.2.47",ju="http://www.w3.org/2000/svg",Ct=typeof document<"u"?document:null,Hi=Ct&&Ct.createElement("template"),Vu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ct.createElementNS(ju,t):Ct.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ct.createTextNode(t),createComment:t=>Ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Hi.innerHTML=s?`<svg>${t}</svg>`:t;const a=Hi.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Wu(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function zu(t,e,n){const s=t.style,r=de(n);if(n&&!r){if(e&&!de(e))for(const i in e)n[i]==null&&Cr(s,i,"");for(const i in n)Cr(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ji=/\s*!important$/;function Cr(t,e,n){if(H(n))n.forEach(s=>Cr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ku(t,e);ji.test(n)?t.setProperty(rn(s),n.replace(ji,""),"important"):t[s]=n}}const Vi=["Webkit","Moz","ms"],tr={};function Ku(t,e){const n=tr[e];if(n)return n;let s=Ge(e);if(s!=="filter"&&s in t)return tr[e]=s;s=Ns(s);for(let r=0;r<Vi.length;r++){const i=Vi[r]+s;if(i in t)return tr[e]=i}return e}const Wi="http://www.w3.org/1999/xlink";function qu(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wi,e.slice(6,e.length)):t.setAttributeNS(Wi,e,n);else{const i=Hc(e);n==null||i&&!Fo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Gu(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Fo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ht(t,e,n,s){t.addEventListener(e,n,s)}function Ju(t,e,n,s){t.removeEventListener(e,n,s)}function Yu(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Xu(e);if(s){const u=i[e]=ed(s,r);Ht(t,a,u,c)}else o&&(Ju(t,a,o,c),i[e]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function Xu(t){let e;if(zi.test(t)){e={};let s;for(;s=t.match(zi);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),e]}let nr=0;const Qu=Promise.resolve(),Zu=()=>nr||(Qu.then(()=>nr=0),nr=Date.now());function ed(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;De(td(s,n.value),e,5,[s])};return n.value=t,n.attached=Zu(),n}function td(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ki=/^on[a-z]/,nd=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Wu(t,s,r):e==="style"?zu(t,n,s):Ps(e)?Hr(e)||Yu(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sd(t,e,s,r))?Gu(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qu(t,e,s,r))};function sd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ki.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ki.test(e)&&de(n)?!1:e in t}const qi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>os(e,n):e};function rd(t){t.target.composing=!0}function Gi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ys={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=qi(r);const i=s||r.props&&r.props.type==="number";Ht(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=pr(a)),t._assign(a)}),n&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",rd),Ht(t,"compositionend",Gi),Ht(t,"change",Gi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=qi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&pr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ar={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):mn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),mn(t,!0),s.enter(t)):s.leave(t,()=>{mn(t,!1)}):mn(t,e))},beforeUnmount(t,{value:e}){mn(t,e)}};function mn(t,e){t.style.display=e?t._vod:"none"}const id=me({patchProp:nd},Vu);let Ji;function od(){return Ji||(Ji=Iu(id))}const ad=(...t)=>{const e=od().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cd(s);if(!r)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function cd(t){return de(t)?document.querySelector(t):t}const _e=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ld={};function ud(t,e){const n=iu("RouterView");return ae(),un(n)}const dd=_e(ld,[["render",ud]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function fd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G=Object.assign;function sr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Le(r)?r.map(t):t(r)}return n}const Tn=()=>{},Le=Array.isArray,hd=/\/$/,pd=t=>t.replace(hd,"");function rr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=vd(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function gd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function md(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&en(e.matched[s],n.matched[r])&&Oa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function en(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Oa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_d(t[n],e[n]))return!1;return!0}function _d(t,e){return Le(t)?Xi(t,e):Le(e)?Xi(e,t):t===e}function Xi(t,e){return Le(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function vd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Mn;(function(t){t.pop="pop",t.push="push"})(Mn||(Mn={}));var Rn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Rn||(Rn={}));function bd(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pd(t)}const yd=/^[^#]+#/;function Id(t,e){return t.replace(yd,"#")+e}function Ed(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Hs=()=>({left:window.pageXOffset,top:window.pageYOffset});function wd(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ed(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qi(t,e){return(history.state?history.state.position-e:-1)+t}const Sr=new Map;function Td(t,e){Sr.set(t,e)}function Rd(t){const e=Sr.get(t);return Sr.delete(t),e}let Cd=()=>location.protocol+"//"+location.host;function ka(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Yi(c,"")}return Yi(n,t)+s+r}function Ad(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const v=ka(t,location),A=n.value,k=e.value;let F=0;if(p){if(n.value=v,e.value=p,o&&o===A){o=null;return}F=k?p.position-k.position:0}else s(v);r.forEach(P=>{P(n.value,A,{delta:F,type:Mn.pop,direction:F?F>0?Rn.forward:Rn.back:Rn.unknown})})};function c(){o=n.value}function u(p){r.push(p);const v=()=>{const A=r.indexOf(p);A>-1&&r.splice(A,1)};return i.push(v),v}function d(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:Hs()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:h}}function Zi(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Hs():null}}function Sd(t){const{history:e,location:n}=window,s={value:ka(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Cd()+t+c;try{e[d?"replaceState":"pushState"](u,"",p),r.value=u}catch(v){console.error(v),n[d?"replace":"assign"](p)}}function o(c,u){const d=G({},e.state,Zi(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),s.value=c}function a(c,u){const d=G({},r.value,e.state,{forward:c,scroll:Hs()});i(d.current,d,!0);const h=G({},Zi(s.value,c,null),{position:d.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Pd(t){t=bd(t);const e=Sd(t),n=Ad(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=G({location:"",base:t,go:s,createHref:Id.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Od(t){return typeof t=="string"||t&&typeof t=="object"}function Na(t){return typeof t=="string"||typeof t=="symbol"}const rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xa=Symbol("");var eo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(eo||(eo={}));function tn(t,e){return G(new Error,{type:t,[xa]:!0},e)}function Je(t,e){return t instanceof Error&&xa in t&&(e==null||!!(t.type&e))}const to="[^/]+?",kd={sensitive:!1,strict:!1,start:!0,end:!0},Nd=/[.+*?^${}()[\]/\\]/g;function xd(t,e){const n=G({},kd,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const p=u[h];let v=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Nd,"\\$&"),v+=40;else if(p.type===1){const{value:A,repeatable:k,optional:F,regexp:P}=p;i.push({name:A,repeatable:k,optional:F});const $=P||to;if($!==to){v+=10;try{new RegExp(`(${$})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${A}" (${$}): `+K.message)}}let N=k?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;h||(N=F&&u.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),r+=N,v+=20,F&&(v+=-8),k&&(v+=-20),$===".*"&&(v+=-50)}d.push(v)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const d=u.match(o),h={};if(!d)return null;for(let p=1;p<d.length;p++){const v=d[p]||"",A=i[p-1];h[A.name]=v&&A.repeatable?v.split("/"):v}return h}function c(u){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const v of p)if(v.type===0)d+=v.value;else if(v.type===1){const{value:A,repeatable:k,optional:F}=v,P=A in u?u[A]:"";if(Le(P)&&!k)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const $=Le(P)?P.join("/"):P;if(!$)if(F)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);d+=$}}return d||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Md(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Dd(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Md(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(no(s))return 1;if(no(r))return-1}return r.length-s.length}function no(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ld={type:0,value:""},$d=/[a-zA-Z0-9_]/;function Ud(t){if(!t)return[[]];if(t==="/")return[[Ld]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",d="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:$d.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Fd(t,e,n){const s=xd(Ud(t.path),n),r=G(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Bd(t,e){const n=[],s=new Map;e=io({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,h,p){const v=!p,A=Hd(d);A.aliasOf=p&&p.record;const k=io(e,d),F=[A];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const K of N)F.push(G({},A,{components:p?p.record.components:A.components,path:K,aliasOf:p?p.record:A}))}let P,$;for(const N of F){const{path:K}=N;if(h&&K[0]!=="/"){const ce=h.record.path,ue=ce[ce.length-1]==="/"?"":"/";N.path=h.record.path+(K&&ue+K)}if(P=Fd(N,h,k),p?p.alias.push(P):($=$||P,$!==P&&$.alias.push(P),v&&d.name&&!ro(P)&&o(d.name)),A.children){const ce=A.children;for(let ue=0;ue<ce.length;ue++)i(ce[ue],P,p&&p.children[ue])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return $?()=>{o($)}:Tn}function o(d){if(Na(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){let h=0;for(;h<n.length&&Dd(d,n[h])>=0&&(d.record.path!==n[h].record.path||!Ma(d,n[h]));)h++;n.splice(h,0,d),d.record.name&&!ro(d)&&s.set(d.record.name,d)}function u(d,h){let p,v={},A,k;if("name"in d&&d.name){if(p=s.get(d.name),!p)throw tn(1,{location:d});k=p.record.name,v=G(so(h.params,p.keys.filter($=>!$.optional).map($=>$.name)),d.params&&so(d.params,p.keys.map($=>$.name))),A=p.stringify(v)}else if("path"in d)A=d.path,p=n.find($=>$.re.test(A)),p&&(v=p.parse(A),k=p.record.name);else{if(p=h.name?s.get(h.name):n.find($=>$.re.test(h.path)),!p)throw tn(1,{location:d,currentLocation:h});k=p.record.name,v=G({},h.params,d.params),A=p.stringify(v)}const F=[];let P=p;for(;P;)F.unshift(P.record),P=P.parent;return{name:k,path:A,params:v,matched:F,meta:Vd(F)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function so(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ro(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vd(t){return t.reduce((e,n)=>G(e,n.meta),{})}function io(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ma(t,e){return e.children.some(n=>n===t||Ma(t,n))}const Da=/#/g,Wd=/&/g,zd=/\//g,Kd=/=/g,qd=/\?/g,La=/\+/g,Gd=/%5B/g,Jd=/%5D/g,$a=/%5E/g,Yd=/%60/g,Ua=/%7B/g,Xd=/%7C/g,Fa=/%7D/g,Qd=/%20/g;function si(t){return encodeURI(""+t).replace(Xd,"|").replace(Gd,"[").replace(Jd,"]")}function Zd(t){return si(t).replace(Ua,"{").replace(Fa,"}").replace($a,"^")}function Pr(t){return si(t).replace(La,"%2B").replace(Qd,"+").replace(Da,"%23").replace(Wd,"%26").replace(Yd,"`").replace(Ua,"{").replace(Fa,"}").replace($a,"^")}function ef(t){return Pr(t).replace(Kd,"%3D")}function tf(t){return si(t).replace(Da,"%23").replace(qd,"%3F")}function nf(t){return t==null?"":tf(t).replace(zd,"%2F")}function Is(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sf(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(La," "),o=i.indexOf("="),a=Is(o<0?i:i.slice(0,o)),c=o<0?null:Is(i.slice(o+1));if(a in e){let u=e[a];Le(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function oo(t){let e="";for(let n in t){const s=t[n];if(n=ef(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Le(s)?s.map(i=>i&&Pr(i)):[s&&Pr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rf(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Le(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const of=Symbol(""),ao=Symbol(""),js=Symbol(""),Ba=Symbol(""),Or=Symbol("");function _n(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function at(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(tn(4,{from:n,to:e})):h instanceof Error?a(h):Od(h)?a(tn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>a(h))})}function ir(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(af(a)){const u=(a.__vccOpts||a)[e];u&&r.push(at(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=fd(u)?u.default:u;i.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&at(p,n,s,i,o)()}))}}return r}function af(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function co(t){const e=ze(js),n=ze(Ba),s=Re(()=>e.resolve(Kt(t.to))),r=Re(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(en.bind(null,d));if(p>-1)return p;const v=lo(c[u-2]);return u>1&&lo(d)===v&&h[h.length-1].path!==v?h.findIndex(en.bind(null,c[u-2])):p}),i=Re(()=>r.value>-1&&df(n.params,s.value.params)),o=Re(()=>r.value>-1&&r.value===n.matched.length-1&&Oa(n.params,s.value.params));function a(c={}){return uf(c)?e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(Tn):Promise.resolve()}return{route:s,href:Re(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const cf=le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:co,setup(t,{slots:e}){const n=Bn(co(t)),{options:s}=ze(js),r=Re(()=>({[uo(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[uo(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),lf=cf;function uf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function df(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Le(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function lo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const uo=(t,e,n)=>t??e??n,ff=le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ze(Or),r=Re(()=>t.route||s.value),i=ze(ao,0),o=Re(()=>{let u=Kt(i);const{matched:d}=r.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),a=Re(()=>r.value.matched[o.value]);as(ao,Re(()=>o.value+1)),as(of,a),as(Or,r);const c=kt();return cs(()=>[c.value,a.value,t.name],([u,d,h],[p,v,A])=>{d&&(d.instances[h]=u,v&&v!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!en(d,v)||!p)&&(d.enterCallbacks[h]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=r.value,d=t.name,h=a.value,p=h&&h.components[d];if(!p)return fo(n.default,{Component:p,route:u});const v=h.props[d],A=v?v===!0?u.params:typeof v=="function"?v(u):v:null,F=Pa(p,G({},A,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[d]=null)},ref:c}));return fo(n.default,{Component:F,route:u})||F}}});function fo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hf=ff;function pf(t){const e=Bd(t.routes,t),n=t.parseQuery||sf,s=t.stringifyQuery||oo,r=t.history,i=_n(),o=_n(),a=_n(),c=Sl(rt);let u=rt;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=sr.bind(null,_=>""+_),h=sr.bind(null,nf),p=sr.bind(null,Is);function v(_,S){let T,x;return Na(_)?(T=e.getRecordMatcher(_),x=S):x=_,e.addRoute(x,T)}function A(_){const S=e.getRecordMatcher(_);S&&e.removeRoute(S)}function k(){return e.getRoutes().map(_=>_.record)}function F(_){return!!e.getRecordMatcher(_)}function P(_,S){if(S=G({},S||c.value),typeof _=="string"){const l=rr(n,_,S.path),f=e.resolve({path:l.path},S),g=r.createHref(l.fullPath);return G(l,f,{params:p(f.params),hash:Is(l.hash),redirectedFrom:void 0,href:g})}let T;if("path"in _)T=G({},_,{path:rr(n,_.path,S.path).path});else{const l=G({},_.params);for(const f in l)l[f]==null&&delete l[f];T=G({},_,{params:h(_.params)}),S.params=h(S.params)}const x=e.resolve(T,S),W=_.hash||"";x.params=d(p(x.params));const ne=gd(s,G({},_,{hash:Zd(W),path:x.path})),j=r.createHref(ne);return G({fullPath:ne,hash:W,query:s===oo?rf(_.query):_.query||{}},x,{redirectedFrom:void 0,href:j})}function $(_){return typeof _=="string"?rr(n,_,c.value.path):G({},_)}function N(_,S){if(u!==_)return tn(8,{from:S,to:_})}function K(_){return Ee(_)}function ce(_){return K(G($(_),{replace:!0}))}function ue(_){const S=_.matched[_.matched.length-1];if(S&&S.redirect){const{redirect:T}=S;let x=typeof T=="function"?T(_):T;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=$(x):{path:x},x.params={}),G({query:_.query,hash:_.hash,params:"path"in x?{}:_.params},x)}}function Ee(_,S){const T=u=P(_),x=c.value,W=_.state,ne=_.force,j=_.replace===!0,l=ue(T);if(l)return Ee(G($(l),{state:typeof l=="object"?G({},W,l.state):W,force:ne,replace:j}),S||T);const f=T;f.redirectedFrom=S;let g;return!ne&&md(s,x,T)&&(g=tn(16,{to:f,from:x}),yt(x,x,!0,!1)),(g?Promise.resolve(g):Ue(f,x)).catch(m=>Je(m)?Je(m,2)?m:Se(m):Q(m,f,x)).then(m=>{if(m){if(Je(m,2))return Ee(G({replace:j},$(m.to),{state:typeof m.to=="object"?G({},W,m.to.state):W,force:ne}),S||f)}else m=nt(f,x,!0,j,W);return Te(f,x,m),m})}function Ae(_,S){const T=N(_,S);return T?Promise.reject(T):Promise.resolve()}function Ue(_,S){let T;const[x,W,ne]=gf(_,S);T=ir(x.reverse(),"beforeRouteLeave",_,S);for(const l of x)l.leaveGuards.forEach(f=>{T.push(at(f,_,S))});const j=Ae.bind(null,_,S);return T.push(j),Bt(T).then(()=>{T=[];for(const l of i.list())T.push(at(l,_,S));return T.push(j),Bt(T)}).then(()=>{T=ir(W,"beforeRouteUpdate",_,S);for(const l of W)l.updateGuards.forEach(f=>{T.push(at(f,_,S))});return T.push(j),Bt(T)}).then(()=>{T=[];for(const l of _.matched)if(l.beforeEnter&&!S.matched.includes(l))if(Le(l.beforeEnter))for(const f of l.beforeEnter)T.push(at(f,_,S));else T.push(at(l.beforeEnter,_,S));return T.push(j),Bt(T)}).then(()=>(_.matched.forEach(l=>l.enterCallbacks={}),T=ir(ne,"beforeRouteEnter",_,S),T.push(j),Bt(T))).then(()=>{T=[];for(const l of o.list())T.push(at(l,_,S));return T.push(j),Bt(T)}).catch(l=>Je(l,8)?l:Promise.reject(l))}function Te(_,S,T){for(const x of a.list())x(_,S,T)}function nt(_,S,T,x,W){const ne=N(_,S);if(ne)return ne;const j=S===rt,l=jt?history.state:{};T&&(x||j?r.replace(_.fullPath,G({scroll:j&&l&&l.scroll},W)):r.push(_.fullPath,W)),c.value=_,yt(_,S,T,j),Se()}let Fe;function $t(){Fe||(Fe=r.listen((_,S,T)=>{if(!Xn.listening)return;const x=P(_),W=ue(x);if(W){Ee(G(W,{replace:!0}),x).catch(Tn);return}u=x;const ne=c.value;jt&&Td(Qi(ne.fullPath,T.delta),Hs()),Ue(x,ne).catch(j=>Je(j,12)?j:Je(j,2)?(Ee(j.to,x).then(l=>{Je(l,20)&&!T.delta&&T.type===Mn.pop&&r.go(-1,!1)}).catch(Tn),Promise.reject()):(T.delta&&r.go(-T.delta,!1),Q(j,x,ne))).then(j=>{j=j||nt(x,ne,!1),j&&(T.delta&&!Je(j,8)?r.go(-T.delta,!1):T.type===Mn.pop&&Je(j,20)&&r.go(-1,!1)),Te(x,ne,j)}).catch(Tn)}))}let bt=_n(),hn=_n(),re;function Q(_,S,T){Se(_);const x=hn.list();return x.length?x.forEach(W=>W(_,S,T)):console.error(_),Promise.reject(_)}function J(){return re&&c.value!==rt?Promise.resolve():new Promise((_,S)=>{bt.add([_,S])})}function Se(_){return re||(re=!_,$t(),bt.list().forEach(([S,T])=>_?T(_):S()),bt.reset()),_}function yt(_,S,T,x){const{scrollBehavior:W}=t;if(!jt||!W)return Promise.resolve();const ne=!T&&Rd(Qi(_.fullPath,0))||(x||!T)&&history.state&&history.state.scroll||null;return oa().then(()=>W(_,S,ne)).then(j=>j&&wd(j)).catch(j=>Q(j,_,S))}const Pe=_=>r.go(_);let ve;const Ut=new Set,Xn={currentRoute:c,listening:!0,addRoute:v,removeRoute:A,hasRoute:F,getRoutes:k,resolve:P,options:t,push:K,replace:ce,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:hn.add,isReady:J,install(_){const S=this;_.component("RouterLink",lf),_.component("RouterView",hf),_.config.globalProperties.$router=S,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(c)}),jt&&!ve&&c.value===rt&&(ve=!0,K(r.location).catch(W=>{}));const T={};for(const W in rt)T[W]=Re(()=>c.value[W]);_.provide(js,S),_.provide(Ba,Bn(T)),_.provide(Or,c);const x=_.unmount;Ut.add(_),_.unmount=function(){Ut.delete(_),Ut.size<1&&(u=rt,Fe&&Fe(),Fe=null,c.value=rt,ve=!1,re=!1),x()}}};return Xn}function Bt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gf(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>en(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>en(u,c))||r.push(c))}return[n,s,r]}function Vs(){return ze(js)}const Ws="/cuy-art-shop/assets/Logo-removebg-preview-23a31917.png",mf="/cuy-art-shop/assets/Puntos-b413704e.svg",_f="/cuy-art-shop/assets/search-8de85e52.svg",Hn="/cuy-art-shop/assets/person-c17a1bb8.svg",vf="/cuy-art-shop/assets/shopping_cart-2f426c23.svg",bf="/cuy-art-shop/assets/menu-fd7c077d.svg",yf="/cuy-art-shop/assets/close-4f1b1f2c.svg",zs=t=>(cn("data-v-31b4fc16"),t=t(),ln(),t),If={class:"head"},Ef=_t('<div class="lefthead" data-v-31b4fc16><button data-v-31b4fc16><img src="'+Ws+'" alt="Persona" data-v-31b4fc16></button></div><div class="centerhead" data-v-31b4fc16><input type="text" name="text" id="one" data-v-31b4fc16><div class="centersearch" data-v-31b4fc16><img src="'+mf+'" alt="Puntos" data-v-31b4fc16><button data-v-31b4fc16><img src="'+_f+'" alt="Busqueda" data-v-31b4fc16></button></div></div>',2),wf={class:"righthead"},Tf=zs(()=>C("img",{src:Hn,alt:"Persona"},null,-1)),Rf=[Tf],Cf=zs(()=>C("button",null,[C("img",{src:vf,alt:"Carro de compra"})],-1)),Af={class:"containmodal"},Sf={class:"contain"},Pf={class:"salir"},Of=zs(()=>C("img",{src:yf,alt:"Cerrar"},null,-1)),kf=[Of],Nf=zs(()=>C("h2",null,"Menu",-1)),xf=le({__name:"NavBar",setup(t){const e=kt(!1),n=Vs(),s=()=>{n.push("/about")},r=()=>{n.push("/login")},i=()=>{n.push("/micuenta")};return(o,a)=>(ae(),Ie(je,null,[C("header",If,[Ef,C("div",wf,[C("button",{onClick:r},Rf),Cf,C("button",null,[C("img",{src:bf,alt:"Menu",onClick:a[0]||(a[0]=c=>e.value=!e.value)})])])]),Nt(C("div",Af,[C("div",Sf,[C("div",Pf,[C("button",{onClick:a[1]||(a[1]=c=>e.value=!e.value)},kf)]),C("div",{class:"opciones"},[Nf,C("p",{href:"#",onClick:i},"Mi Cuenta"),C("p",{href:"#",onClick:s},"Acerca de nosotros")])])],512),[[Ar,e.value]])],64))}});const Mf=_e(xf,[["__scopeId","data-v-31b4fc16"]]),Df="/cuy-art-shop/assets/prom-071a18b4.jpg",Lf="/cuy-art-shop/assets/09757-BIG-2a63eeeb.jpg",$f="/cuy-art-shop/assets/taza-tradicional-523da630.webp",Uf="/cuy-art-shop/assets/9a0e8b4110eb49644003a6d56f7b1232-53097ca7.jpg",jn=t=>(cn("data-v-ec5a9432"),t=t(),ln(),t),Ff={class:"main"},Bf={class:"mainleft"},Hf={class:"mainleftleft"},jf=_t('<div class="categorias" data-v-ec5a9432><h2 data-v-ec5a9432>Catergorias</h2><div class="linea" data-v-ec5a9432></div><form data-v-ec5a9432><div data-v-ec5a9432><input type="checkbox" name="tipo1" id="tipo1" data-v-ec5a9432><label for="tipo1" data-v-ec5a9432>Ceràmica</label></div><div data-v-ec5a9432><input type="checkbox" name="tipo2" id="tipo2" data-v-ec5a9432><label for="tipo2" data-v-ec5a9432>Barro</label></div><div data-v-ec5a9432><input type="checkbox" name="tipo3" id="tipo3" data-v-ec5a9432><label for="tipo3" data-v-ec5a9432>Tela</label></div><div data-v-ec5a9432><input type="checkbox" name="tipo4" id="tipo4" data-v-ec5a9432><label for="tipo4" data-v-ec5a9432>Acuarela</label></div></form></div>',1),Vf={class:"precios"},Wf=jn(()=>C("h2",null,"Precios",-1)),zf=jn(()=>C("div",{class:"linea"},null,-1)),Kf={class:"precio"},qf=jn(()=>C("div",{class:"preciosss"},[C("h3",null,"20.000"),C("h3",null,"800.000")],-1)),Gf={class:"precioss"},Jf=jn(()=>C("span",null,"$",-1)),Yf=jn(()=>C("button",null,"OK",-1)),Xf=_t('<div class="mainright" data-v-ec5a9432><div class="promocion" data-v-ec5a9432><img src="'+Df+'" alt="promocion" data-v-ec5a9432></div><div class="targetas" data-v-ec5a9432><div class="targeta" data-v-ec5a9432><img src="'+Lf+'" alt="Primer Articulo" data-v-ec5a9432><div class="linea" data-v-ec5a9432></div><h2 data-v-ec5a9432>Vandola de Cafe</h2><div class="price" data-v-ec5a9432><p data-v-ec5a9432>$ 45.000</p><div class="lineap" data-v-ec5a9432></div></div><p data-v-ec5a9432>Ha, Pero que lindo</p></div><div class="targeta" data-v-ec5a9432><img src="'+$f+'" alt="Segundo Articulo" data-v-ec5a9432><div class="linea" data-v-ec5a9432></div><h2 data-v-ec5a9432>Taza personalizada de Ceramìca</h2><div class="price" data-v-ec5a9432><p data-v-ec5a9432>$ 25.000</p><div class="lineap" data-v-ec5a9432></div></div><p data-v-ec5a9432>Producto Tolimence, para tomar cafesito</p></div><div class="targeta" data-v-ec5a9432><img src="'+Uf+'" alt="Tercer Articulo" data-v-ec5a9432><div class="linea" data-v-ec5a9432></div><h2 data-v-ec5a9432>Calletero :v</h2><div class="price" data-v-ec5a9432><p data-v-ec5a9432>$ 40.000</p><div class="lineap" data-v-ec5a9432></div></div><p data-v-ec5a9432>Para Guardar tus deliciosas Galletas</p></div></div></div>',1),Qf=le({__name:"MainComponent",setup(t){const e=kt(2e4);return(n,s)=>(ae(),Ie("main",Ff,[C("div",Bf,[C("div",Hf,[jf,C("div",Vf,[Wf,zf,C("div",Kf,[qf,Nt(C("input",{type:"range",name:"rango",id:"rango",min:"20000",max:"800000","onUpdate:modelValue":s[0]||(s[0]=r=>e.value=r),step:"100"},null,512),[[ys,e.value]]),C("div",Gf,[Jf,Nt(C("input",{type:"number",name:"numero",id:"numero","onUpdate:modelValue":s[1]||(s[1]=r=>e.value=r),step:"100"},null,512),[[ys,e.value]]),Yf])])])])]),Xf]))}});const Zf=_e(Qf,[["__scopeId","data-v-ec5a9432"]]),eh={class:"container"},th=le({__name:"MainPage",setup(t){return(e,n)=>(ae(),Ie("div",eh,[te(Mf),te(Zf)]))}});const nh=_e(th,[["__scopeId","data-v-3eabb5b3"]]),sh=le({__name:"HomeView",setup(t){return(e,n)=>(ae(),un(nh))}}),rh="/cuy-art-shop/assets/salir-9650414e.svg",ri=t=>(cn("data-v-c873b83e"),t=t(),ln(),t),ih={class:"head"},oh=ri(()=>C("button",null,[C("img",{src:Ws,alt:"Persona"})],-1)),ah=ri(()=>C("h1",null,"CUYART-SHOP",-1)),ch=ri(()=>C("img",{src:rh,alt:"Menu"},null,-1)),lh=[ch],uh=le({__name:"NavBarUser",setup(t){const e=Vs(),n=()=>{e.push("/")};return(s,r)=>(ae(),Ie("header",ih,[oh,ah,C("button",{onClick:n},lh)]))}});const Ks=_e(uh,[["__scopeId","data-v-c873b83e"]]),Ha="/cuy-art-shop/assets/Logo-3a4a9f77.jpeg",ja="/cuy-art-shop/assets/youtube-375cd83e.png",qs="/cuy-art-shop/assets/facebook-193ba9b3.png",dh="/cuy-art-shop/assets/twitch-cf8e71de.png",ii="/cuy-art-shop/assets/gmail-6497f877.png",fh={class:"main"},hh=_t('<div class="mainleft" data-v-a8f0d743><div class="mainleftleft" data-v-a8f0d743><img class="logo" src="'+Ha+'" alt="El logo" data-v-a8f0d743><h1 data-v-a8f0d743>CUYART-SHOP</h1><h3 data-v-a8f0d743>Redes Sociales</h3><img src="'+ja+'" alt="Youtube" data-v-a8f0d743><img src="'+qs+'" alt="Facebook" data-v-a8f0d743><img src="'+dh+'" alt="Twitch" data-v-a8f0d743><h3 data-v-a8f0d743>Contàctanos</h3><img src="'+ii+'" alt="Gmail" data-v-a8f0d743></div></div><div class="mainright" data-v-a8f0d743><h1 data-v-a8f0d743>¿Quienes Somos?</h1><p data-v-a8f0d743>CUYART-SHOP es una tienda virtual de artesanìas que atraves del comercio electrònico busca conectar y ayudar a expandir los negocios de los artesanos a otras regiones del paìs</p><h1 data-v-a8f0d743>Misiòn</h1><p data-v-a8f0d743>La misiòn de la empresa Cuy Art Shop es brindar a los artesanos una conexiòn seguray de calidad con sus compradores promoviendo el comercio electrònico y extendiendo los negocios de nuestros artesanos</p><h1 data-v-a8f0d743>Visiòn</h1><p data-v-a8f0d743>Cuy Art Shop serà la empresa lìder en Colombia en venta y compra de artesanìas, siendo una de las màs importanes para expandir los negocios de los artesanos</p></div>',2),ph=[hh],gh=le({__name:"AboutComponent",setup(t){return kt(2e4),(e,n)=>(ae(),Ie("main",fh,ph))}});const mh=_e(gh,[["__scopeId","data-v-a8f0d743"]]),_h={class:"container"},vh=le({__name:"AboutPage",setup(t){return(e,n)=>(ae(),Ie("div",_h,[te(Ks),te(mh)]))}});const bh=_e(vh,[["__scopeId","data-v-dce66de8"]]),yh=le({__name:"AboutView",setup(t){return(e,n)=>(ae(),un(bh))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ih=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),s.push(n[d],n[h],n[p],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ih(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new Eh;const p=i<<2|a>>4;if(s.push(p),u!==64){const v=a<<4&240|u>>2;if(s.push(v),h!==64){const A=u<<6&192|h;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Eh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wh=function(t){const e=Va(t);return Wa.encodeByteArray(e,!0)},za=function(t){return wh(t).replace(/\./g,"")},Ka=function(t){try{return Wa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=()=>Th().__FIREBASE_DEFAULTS__,Ch=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ah=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ka(t[1]);return e&&JSON.parse(e)},oi=()=>{try{return Rh()||Ch()||Ah()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sh=t=>{var e,n;return(n=(e=oi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ph=()=>{var t;return(t=oi())===null||t===void 0?void 0:t.config},qa=t=>{var e;return(e=oi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Nh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mh(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Dh(){try{return typeof indexedDB=="object"}catch{return!1}}function Lh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="FirebaseError";class vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$h,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Uh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new vt(r,a,s)}}function Uh(t,e){return t.replace(Fh,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Fh=/\{\$([^}]+)}/g;function Bh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Es(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ho(i)&&ho(o)){if(!Es(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ho(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hh(t,e){const n=new jh(t,e);return n.subscribe.bind(n)}class jh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=or),r.error===void 0&&(r.error=or),r.complete===void 0&&(r.complete=or);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kh(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zh(t){return t===Tt?void 0:t}function Kh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Gh={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Jh=X.INFO,Yh={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Xh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Yh[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=Jh,this._logHandler=Xh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Qh=(t,e)=>e.some(n=>t instanceof n);let po,go;function Zh(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,kr=new WeakMap,Ya=new WeakMap,ar=new WeakMap,ai=new WeakMap;function tp(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ja.set(n,t)}).catch(()=>{}),ai.set(e,t),e}function np(t){if(kr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kr.set(t,e)}let Nr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ya.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sp(t){Nr=t(Nr)}function rp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cr(this),e,...n);return Ya.set(s,e.sort?e.sort():[e]),pt(s)}:ep().includes(t)?function(...e){return t.apply(cr(this),e),pt(Ja.get(this))}:function(...e){return pt(t.apply(cr(this),e))}}function ip(t){return typeof t=="function"?rp(t):(t instanceof IDBTransaction&&np(t),Qh(t,Zh())?new Proxy(t,Nr):t)}function pt(t){if(t instanceof IDBRequest)return tp(t);if(ar.has(t))return ar.get(t);const e=ip(t);return e!==t&&(ar.set(t,e),ai.set(e,t)),e}const cr=t=>ai.get(t);function op(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(pt(o.result),c.oldVersion,c.newVersion,pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ap=["get","getKey","getAll","getAllKeys","count"],cp=["put","add","delete","clear"],lr=new Map;function mo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=cp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ap.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return lr.set(e,i),i}sp(t=>({...t,get:(e,n,s)=>mo(e,n)||t.get(e,n,s),has:(e,n)=>!!mo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(up(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function up(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xr="@firebase/app",_o="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Ga("@firebase/app"),dp="@firebase/app-compat",fp="@firebase/analytics-compat",hp="@firebase/analytics",pp="@firebase/app-check-compat",gp="@firebase/app-check",mp="@firebase/auth",_p="@firebase/auth-compat",vp="@firebase/database",bp="@firebase/database-compat",yp="@firebase/functions",Ip="@firebase/functions-compat",Ep="@firebase/installations",wp="@firebase/installations-compat",Tp="@firebase/messaging",Rp="@firebase/messaging-compat",Cp="@firebase/performance",Ap="@firebase/performance-compat",Sp="@firebase/remote-config",Pp="@firebase/remote-config-compat",Op="@firebase/storage",kp="@firebase/storage-compat",Np="@firebase/firestore",xp="@firebase/firestore-compat",Mp="firebase",Dp="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]",Lp={[xr]:"fire-core",[dp]:"fire-core-compat",[hp]:"fire-analytics",[fp]:"fire-analytics-compat",[gp]:"fire-app-check",[pp]:"fire-app-check-compat",[mp]:"fire-auth",[_p]:"fire-auth-compat",[vp]:"fire-rtdb",[bp]:"fire-rtdb-compat",[yp]:"fire-fn",[Ip]:"fire-fn-compat",[Ep]:"fire-iid",[wp]:"fire-iid-compat",[Tp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Cp]:"fire-perf",[Ap]:"fire-perf-compat",[Sp]:"fire-rc",[Pp]:"fire-rc-compat",[Op]:"fire-gcs",[kp]:"fire-gcs-compat",[Np]:"fire-fst",[xp]:"fire-fst-compat","fire-js":"fire-js",[Mp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map,Dr=new Map;function $p(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Dr.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const n of ws.values())$p(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new Vn("app","Firebase",Up);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=Dp;function Qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw gt.create("bad-app-name",{appName:String(r)});if(n||(n=Ph()),!n)throw gt.create("no-options");const i=ws.get(r);if(i){if(Es(n,i.options)&&Es(s,i.config))return i;throw gt.create("duplicate-app",{appName:r})}const o=new qh(r);for(const c of Dr.values())o.addComponent(c);const a=new Fp(n,s,o);return ws.set(r,a),a}function Bp(t=Mr){const e=ws.get(t);if(!e&&t===Mr)return Qa();if(!e)throw gt.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let r=(s=Lp[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}Dn(new nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="firebase-heartbeat-database",jp=1,Ln="firebase-heartbeat-store";let ur=null;function Za(){return ur||(ur=op(Hp,jp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ln)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),ur}async function Vp(t){try{return(await Za()).transaction(Ln).objectStore(Ln).get(ec(t))}catch(e){if(e instanceof vt)xt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function vo(t,e){try{const s=(await Za()).transaction(Ln,"readwrite");return await s.objectStore(Ln).put(e,ec(t)),s.done}catch(n){if(n instanceof vt)xt.warn(n.message);else{const s=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(s.message)}}}function ec(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=1024,zp=30*24*60*60*1e3;class Kp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=zp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bo(),{heartbeatsToSend:n,unsentEntries:s}=qp(this._heartbeatsCache.heartbeats),r=za(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bo(){return new Date().toISOString().substring(0,10)}function qp(t,e=Wp){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),yo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Gp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dh()?Lh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yo(t){return za(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){Dn(new nn("platform-logger",e=>new lp(e),"PRIVATE")),Dn(new nn("heartbeat",e=>new Kp(e),"PRIVATE")),Gt(xr,_o,t),Gt(xr,_o,"esm2017"),Gt("fire-js","")}Jp("");function ci(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function tc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yp=tc,nc=new Vn("auth","Firebase",tc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Ga("@firebase/auth");function Xp(t,...e){Ts.logLevel<=X.WARN&&Ts.warn(`Auth (${zn}): ${t}`,...e)}function fs(t,...e){Ts.logLevel<=X.ERROR&&Ts.error(`Auth (${zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,...e){throw li(t,...e)}function Ke(t,...e){return li(t,...e)}function Qp(t,e,n){const s=Object.assign(Object.assign({},Yp()),{[e]:n});return new Vn("auth","Firebase",s).create(e,{appName:t.name})}function li(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return nc.create(t,...e)}function L(t,e,...n){if(!t)throw li(e,...n)}function Xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function et(t,e){t||Xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zp(){return Io()==="http:"||Io()==="https:"}function Io(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zp()||Nh()||"connection"in navigator)?navigator.onLine:!0}function tg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,et(n>e,"Short delay should be less than long delay!"),this.isMobile=kh()||xh()}get(){return eg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){et(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Kn(3e4,6e4);function qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,s,r={}){return rc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Wn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sc.fetch()(ic(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function rc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ng),e);try{const r=new rg(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rs(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qp(t,d,u);$e(t,d)}}catch(r){if(r instanceof vt)throw r;$e(t,"network-request-failed",{message:String(r)})}}async function Gs(t,e,n,s,r={}){const i=await dn(t,e,n,s,r);return"mfaPendingCredential"in i&&$e(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ic(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ui(t.config,r):`${t.config.apiScheme}://${r}`}class rg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ke(this.auth,"network-request-failed")),sg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ke(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function og(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ag(t,e=!1){const n=Dt(t),s=await n.getIdToken(e),r=di(s);L(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Cn(dr(r.auth_time)),issuedAtTime:Cn(dr(r.iat)),expirationTime:Cn(dr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function di(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ka(n);return r?JSON.parse(r):(fs("Failed to decode base64 JWT payload"),null)}catch(r){return fs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function cg(t){const e=di(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vt&&lg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function lg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cn(this.lastLoginAt),this.creationTime=Cn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await $n(t,og(n,{idToken:s}));L(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hg(i.providerUserInfo):[],a=fg(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function dg(t){const e=Dt(t);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hg(t){return t.map(e=>{var{providerId:n}=e,s=ci(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e){const n=await rc(t,{},async()=>{const s=Wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ic(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await pg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Un;return s&&(L(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(L(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ci(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $n(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ag(this,e)}reload(){return dg(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Rs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $n(this,ig(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,d;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:N,emailVerified:K,isAnonymous:ce,providerData:ue,stsTokenManager:Ee}=n;L(N&&Ee,e,"internal-error");const Ae=Un.fromJSON(this.name,Ee);L(typeof N=="string",e,"internal-error"),it(h,e.name),it(p,e.name),L(typeof K=="boolean",e,"internal-error"),L(typeof ce=="boolean",e,"internal-error"),it(v,e.name),it(A,e.name),it(k,e.name),it(F,e.name),it(P,e.name),it($,e.name);const Ue=new Ot({uid:N,auth:e,email:p,emailVerified:K,displayName:h,isAnonymous:ce,photoURL:A,phoneNumber:v,tenantId:k,stsTokenManager:Ae,createdAt:P,lastLoginAt:$});return ue&&Array.isArray(ue)&&(Ue.providerData=ue.map(Te=>Object.assign({},Te))),F&&(Ue._redirectEventId=F),Ue}static async _fromIdTokenResponse(e,n,s=!1){const r=new Un;r.updateFromServerResponse(n);const i=new Ot({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Rs(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map;function Qe(t){et(t instanceof Function,"Expected a class definition");let e=Eo.get(t);return e?(et(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ac.type="NONE";const wo=ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=hs(this.userKey,r.apiKey,i),this.fullPersistenceKey=hs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Jt(Qe(wo),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Qe(wo);const o=hs(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Ot._fromJSON(e,d);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Jt(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fc(e))return"Blackberry";if(hc(e))return"Webos";if(fi(e))return"Safari";if((e.includes("chrome/")||lc(e))&&!e.includes("edge/"))return"Chrome";if(dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cc(t=pe()){return/firefox\//i.test(t)}function fi(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lc(t=pe()){return/crios\//i.test(t)}function uc(t=pe()){return/iemobile/i.test(t)}function dc(t=pe()){return/android/i.test(t)}function fc(t=pe()){return/blackberry/i.test(t)}function hc(t=pe()){return/webos/i.test(t)}function Js(t=pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gg(t=pe()){var e;return Js(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mg(){return Mh()&&document.documentMode===10}function pc(t=pe()){return Js(t)||dc(t)||hc(t)||fc(t)||/windows phone/i.test(t)||uc(t)}function _g(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t,e=[]){let n;switch(t){case"Browser":n=To(pe());break;case"Worker":n=`${To(pe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${s}`}async function mc(t,e){return dn(t,"GET","/v2/recaptchaConfig",qn(t,e))}function Ro(t){return t!==void 0&&t.enterprise!==void 0}class _c{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vc(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ke("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",vg().appendChild(s)})}function bg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yg="https://www.google.com/recaptcha/enterprise.js?render=",Ig="recaptcha-enterprise",Eg="NO_RECAPTCHA";class bc{constructor(e){this.type=Ig,this.auth=Gn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{mc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _c(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ro(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Eg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ro(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vc(yg+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Co(t,e,n,s=!1){const r=new bc(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ao(this),this.idTokenSubscription=new Ao(this),this.beforeStateQueue=new wg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qe(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Dt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qe(e))})}async initializeRecaptchaConfig(){const e=await mc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _c(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new bc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qe(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[Qe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(t){return Dt(t)}class Ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hh(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Es(i,e??{}))return r;$e(r,"already-initialized")}return n.initialize({options:e})}function Cg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ag(t,e,n){const s=Gn(t);L(s._canInitEmulator,s,"emulator-config-failed"),L(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=yc(e),{host:o,port:a}=Sg(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Pg()}function yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sg(t){const e=yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:So(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:So(o)}}}function So(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xe("not implemented")}_getIdTokenResponse(e){return Xe("not implemented")}_linkToIdToken(e,n){return Xe("not implemented")}_getReauthenticationResolver(e){return Xe("not implemented")}}async function Og(t,e){return dn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e){return Gs(t,"POST","/v1/accounts:signInWithPassword",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}async function Ng(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends hi{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Fn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Fn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Co(e,s,"signInWithPassword");return fr(e,r)}else return fr(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Co(e,s,"signInWithPassword");return fr(e,i)}else return Promise.reject(r)});case"emailLink":return kg(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Og(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ng(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e){return Gs(t,"POST","/v1/accounts:signInWithIdp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="http://localhost";class Mt extends hi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ci(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Mt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Yt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yt(e,n)}buildRequest(){const e={requestUri:xg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dg(t){const e=bn(yn(t)).link,n=e?bn(yn(e)).deep_link_id:null,s=bn(yn(t)).deep_link_id;return(s?bn(yn(s)).link:null)||s||n||e||t}class pi{constructor(e){var n,s,r,i,o,a;const c=bn(yn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Mg((r=c.mode)!==null&&r!==void 0?r:null);L(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Dg(e);try{return new pi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,n){return Fn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pi.parseLink(n);return L(s,"argument-error"),Fn._fromEmailAndCode(e,s.code,s.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ic{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Jn{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return lt.credential(n,s)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Jn{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Jn{constructor(){super("twitter.com")}static credential(e,n){return Mt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dt.credential(n,s)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ot._fromIdTokenResponse(e,s,r),o=Po(s);return new sn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Po(s);return new sn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Po(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends vt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Cs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Cs(e,n,s,r)}}function Ec(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cs._fromErrorAndOperation(t,i,e,s):i})}async function Lg(t,e,n=!1){const s=await $n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await $n(t,Ec(s,r,e,t),n);L(i.idToken,s,"internal-error");const o=di(i.idToken);L(o,s,"internal-error");const{sub:a}=o;return L(t.uid===a,s,"user-mismatch"),sn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(t,e,n=!1){const s="signIn",r=await Ec(t,s,e),i=await sn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Ug(t,e){return wc(Gn(t),e)}function Fg(t,e,n){return Ug(Dt(t),fn.credential(e,n))}function Bg(t,e,n,s){return Dt(t).onIdTokenChanged(e,n,s)}function Hg(t,e,n){return Dt(t).beforeAuthStateChanged(e,n)}const As="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(){const t=pe();return fi(t)||Js(t)}const Vg=1e3,Wg=10;class Rc extends Tc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jg()&&_g(),this.fallbackToPolling=pc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);mg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Wg):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rc.type="LOCAL";const zg=Rc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Tc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cc.type="SESSION";const Ac=Cc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ys(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Kg(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=gi("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function Gg(t){qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Jg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xg(){return Sc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="firebaseLocalStorageDb",Qg=1,Ss="firebaseLocalStorage",Oc="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function Zg(){const t=indexedDB.deleteDatabase(Pc);return new Yn(t).toPromise()}function $r(){const t=indexedDB.open(Pc,Qg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ss,{keyPath:Oc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ss)?e(s):(s.close(),await Zg(),e(await $r()))})})}async function Oo(t,e,n){const s=Xs(t,!0).put({[Oc]:e,value:n});return new Yn(s).toPromise()}async function em(t,e){const n=Xs(t,!1).get(e),s=await new Yn(n).toPromise();return s===void 0?null:s.value}function ko(t,e){const n=Xs(t,!0).delete(e);return new Yn(n).toPromise()}const tm=800,nm=3;class kc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $r(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(Xg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jg(),!this.activeServiceWorker)return;this.sender=new qg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $r();return await Oo(e,As,"1"),await ko(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>em(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ko(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xs(r,!1).getAll();return new Yn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kc.type="LOCAL";const sm=kc;new Kn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t,e){return e?Qe(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends hi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function im(t){return wc(t.auth,new mi(t),t.bypassAuthState)}function om(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),$g(n,new mi(t),t.bypassAuthState)}async function am(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Lg(n,new mi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return im;case"linkViaPopup":case"linkViaRedirect":return am;case"reauthViaPopup":case"reauthViaRedirect":return om;default:$e(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=new Kn(2e3,1e4);class Vt extends Nc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=gi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cm.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="pendingRedirect",ps=new Map;class um extends Nc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ps.get(this.auth._key());if(!e){try{const s=await dm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ps.set(this.auth._key(),e)}return this.bypassAuthState||ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dm(t,e){const n=pm(e),s=hm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function fm(t,e){ps.set(t._key(),e)}function hm(t){return Qe(t._redirectPersistence)}function pm(t){return hs(lm,t.config.apiKey,t.name)}async function gm(t,e,n=!1){const s=Gn(t),r=rm(s,e),o=await new um(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=10*60*1e3;class _m{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!xc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mm&&this.cachedEventUids.clear(),this.cachedEventUids.has(No(e))}saveEventToCache(e){this.cachedEventUids.add(No(e)),this.lastProcessedEventTime=Date.now()}}function No(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Im=/^https?/;async function Em(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bm(t);for(const n of e)try{if(wm(n))return}catch{}$e(t,"unauthorized-domain")}function wm(t){const e=Lr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Im.test(n))return!1;if(ym.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new Kn(3e4,6e4);function xo(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rm(t){return new Promise((e,n)=>{var s,r,i;function o(){xo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xo(),n(Ke(t,"network-request-failed"))},timeout:Tm.get()})}if(!((r=(s=qe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const a=bg("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},vc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gs=null,e})}let gs=null;function Cm(t){return gs=gs||Rm(t),gs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Kn(5e3,15e3),Sm="__/auth/iframe",Pm="emulator/auth/iframe",Om={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},km=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nm(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ui(e,Pm):`https://${t.config.authDomain}/${Sm}`,s={apiKey:e.apiKey,appName:t.name,v:zn},r=km.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Wn(s).slice(1)}`}async function xm(t){const e=await Cm(t),n=qe().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Nm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Om,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=qe().setTimeout(()=>{i(o)},Am.get());function c(){qe().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dm=500,Lm=600,$m="_blank",Um="http://localhost";class Mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fm(t,e,n,s=Dm,r=Lm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Mm),{width:s.toString(),height:r.toString(),top:i,left:o}),u=pe().toLowerCase();n&&(a=lc(u)?$m:n),cc(u)&&(e=e||Um,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[v,A])=>`${p}${v}=${A},`,"");if(gg(u)&&a!=="_self")return Bm(e||"",a),new Mo(null);const h=window.open(e||"",a,d);L(h,t,"popup-blocked");try{h.focus()}catch{}return new Mo(h)}function Bm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="__/auth/handler",jm="emulator/auth/handler",Vm=encodeURIComponent("fac");async function Do(t,e,n,s,r,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:zn,eventId:r};if(e instanceof Ic){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(i||{}))o[d]=h}if(e instanceof Jn){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),u=c?`#${Vm}=${encodeURIComponent(c)}`:"";return`${Wm(t)}?${Wn(a).slice(1)}${u}`}function Wm({config:t}){return t.emulator?ui(t,jm):`https://${t.authDomain}/${Hm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="webStorageSupport";class zm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ac,this._completeRedirectFn=gm,this._overrideRedirectResult=fm}async _openPopup(e,n,s,r){var i;et((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Do(e,n,s,Lr(),r);return Fm(e,o,gi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Do(e,n,s,Lr(),r);return Gg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(et(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xm(e),s=new _m(e);return n.register("authEvent",r=>(L(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hr,{type:hr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[hr];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Em(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pc()||fi()||Js()}}const Km=zm;var Lo="@firebase/auth",$o="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jm(t){Dn(new nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),L(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gc(t)},u=new Tg(s,r,i,c);return Cg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Dn(new nn("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(s=>new qm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Lo,$o,Gm(t)),Gt(Lo,$o,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=5*60,Xm=qa("authIdTokenMaxAge")||Ym;let Uo=null;const Qm=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Xm)return;const r=n==null?void 0:n.token;Uo!==r&&(Uo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zm(t=Bp()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rg(t,{popupRedirectResolver:Km,persistence:[sm,zg,Ac]}),s=qa("authTokenSyncURL");if(s){const i=Qm(s);Hg(n,i,()=>i(n.currentUser)),Bg(n,o=>i(o))}const r=Sh("auth");return r&&Ag(n,`http://${r}`),n}Jm("Browser");const Lt=t=>(cn("data-v-323b388c"),t=t(),ln(),t),e_={class:"contain"},t_=Lt(()=>C("div",{class:"imgprofile"},[C("img",{src:Hn,alt:"Logo"})],-1)),n_=Lt(()=>C("div",{class:"reg"},[C("h1",null,"Login"),C("div",{class:"linea"})],-1)),s_={class:"in"},r_=Lt(()=>C("label",{for:""},"Correo",-1)),i_={class:"in"},o_=Lt(()=>C("label",{for:""},"Contraseña",-1)),a_=Lt(()=>C("div",{class:"goface"},[C("img",{src:ii,alt:"Google"}),C("img",{src:qs,alt:"Facebook"})],-1)),c_=Lt(()=>C("img",{src:Ws,alt:"Logo"},null,-1)),l_=Lt(()=>C("div",{class:"space"},null,-1)),u_=le({__name:"LoginComponent",setup(t){const e=Vs(),n=()=>{e.push("/registro")},s=kt(""),r=kt(""),i=()=>{const o=Zm();Fg(o,s.value,r.value).then(a=>{alert("Bienvenido")}).then(()=>{e.push("/micuenta")}).catch(a=>{alert("Intente de nuevo"),a.code,a.message})};return(o,a)=>(ae(),Ie("main",e_,[t_,n_,C("div",s_,[r_,Nt(C("input",{type:"text",name:"usuario",id:"usuario",placeholder:"hugoRicardo@gmail.con","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},null,512),[[ys,s.value]])]),C("div",i_,[o_,Nt(C("input",{type:"password",name:"pass",id:"pass",placeholder:"Contraseña","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[ys,r.value]])]),C("button",{onClick:i},"Ingresar"),a_,C("footer",null,[c_,C("button",{class:"bt-reg",onClick:n},"Regìstrate"),l_])]))}});const d_=_e(u_,[["__scopeId","data-v-323b388c"]]),f_={class:"container"},h_=le({__name:"LoginPage",setup(t){return(e,n)=>(ae(),Ie("div",f_,[te(Ks),te(d_)]))}});const p_=_e(h_,[["__scopeId","data-v-c896fb3a"]]),g_=le({__name:"LoginView",setup(t){return(e,n)=>(ae(),un(p_))}}),Mc=t=>(cn("data-v-3bdc2be4"),t=t(),ln(),t),m_={class:"contain"},__=_t('<div class="imgprofile" data-v-3bdc2be4><img src="'+Hn+'" alt="Logo" data-v-3bdc2be4></div><div class="reg" data-v-3bdc2be4><h1 data-v-3bdc2be4>Registrarse</h1><div class="linea" data-v-3bdc2be4></div></div><div class="in" data-v-3bdc2be4><label for="" data-v-3bdc2be4>Nombre Usuario</label><input type="text" name="usuario" id="usuario" placeholder="Hugo Ricardo" data-v-3bdc2be4></div><div class="in" data-v-3bdc2be4><label for="" data-v-3bdc2be4>Correo</label><input type="text" name="usuario" id="usuario" placeholder="hugoRicardo@gmail.con" data-v-3bdc2be4></div><div class="in" data-v-3bdc2be4><label for="" data-v-3bdc2be4>Contraseña</label><input type="password" name="pass" id="pass" placeholder="Contraseña" data-v-3bdc2be4></div><div class="in" data-v-3bdc2be4><label for="" data-v-3bdc2be4>Repite Contraseña</label><input type="password" name="pass" id="pass" placeholder="Contraseña" data-v-3bdc2be4></div><button data-v-3bdc2be4>Registrate</button><div class="goface" data-v-3bdc2be4><img src="'+ii+'" alt="Google" data-v-3bdc2be4><img src="'+qs+'" alt="Facebook" data-v-3bdc2be4></div><div class="linea" data-v-3bdc2be4></div>',9),v_=Mc(()=>C("img",{src:Ws,alt:"Logo"},null,-1)),b_=Mc(()=>C("div",{class:"space"},null,-1)),y_=le({__name:"RegistroComponent",setup(t){const e=Vs(),n=()=>{e.push("/login")};return(s,r)=>(ae(),Ie("main",m_,[__,C("footer",null,[v_,C("button",{class:"bt-reg",onClick:n},"Ingresa"),b_])]))}});const I_=_e(y_,[["__scopeId","data-v-3bdc2be4"]]),E_={class:"container"},w_=le({__name:"RegistroPage",setup(t){return(e,n)=>(ae(),Ie("div",E_,[te(Ks),te(I_)]))}});const T_=_e(w_,[["__scopeId","data-v-932305bb"]]),R_=le({__name:"RegistroView",setup(t){return(e,n)=>(ae(),un(T_))}});const C_={},A_={class:"contain"},S_=_t('<div class="imgprofile" data-v-6d3836bd><img src="'+Hn+'" alt="Logo" data-v-6d3836bd></div><div class="reg" data-v-6d3836bd><h1 data-v-6d3836bd>Informacion</h1><div class="linea" data-v-6d3836bd></div></div><div class="in" data-v-6d3836bd><label for="" data-v-6d3836bd>Nombre de Usuario</label><input type="text" name="usuario" id="usuario" placeholder="Hugo Ricardo" data-v-6d3836bd></div><div class="in" data-v-6d3836bd><label for="" data-v-6d3836bd>Correo</label><input type="text" name="usuario" id="usuario" placeholder="hugoRicardo@gmail.con" data-v-6d3836bd></div><div class="in" data-v-6d3836bd><label for="" data-v-6d3836bd>Telèfono</label><input type="text" name="usuario" id="usuario" data-v-6d3836bd></div><div class="in" data-v-6d3836bd><label for="" data-v-6d3836bd>Direcciòn</label><input type="text" name="usuario" id="usuario" data-v-6d3836bd></div>',6),P_=[S_];function O_(t,e){return ae(),Ie("main",A_,P_)}const k_=_e(C_,[["render",O_],["__scopeId","data-v-6d3836bd"]]);const N_={},x_={class:"contain"},M_=_t('<div class="imgprofile" data-v-762b3803><img src="'+Hn+'" alt="Logo" data-v-762b3803></div><div class="reg" data-v-762b3803><h1 data-v-762b3803>Informacion</h1><div class="linea" data-v-762b3803></div></div><div class="in" data-v-762b3803><label for="" data-v-762b3803>Nombre de Usuario</label><input type="text" name="usuario" id="usuario" placeholder="Hugo Ricardo" data-v-762b3803></div><div class="in" data-v-762b3803><label for="" data-v-762b3803>Correo</label><input type="text" name="usuario" id="usuario" placeholder="hugoRicardo@gmail.con" data-v-762b3803></div><div class="in" data-v-762b3803><label for="" data-v-762b3803>Telèfono</label><input type="text" name="usuario" id="usuario" data-v-762b3803></div><div class="in" data-v-762b3803><label for="" data-v-762b3803>Direcciòn</label><input type="text" name="usuario" id="usuario" data-v-762b3803></div><div class="actu" data-v-762b3803><button class="bt-act" data-v-762b3803>Actualizar</button><button class="bt-can" data-v-762b3803>Cancelar</button></div>',7),D_=[M_];function L_(t,e){return ae(),Ie("main",x_,D_)}const $_=_e(N_,[["render",L_],["__scopeId","data-v-762b3803"]]),_i=t=>(cn("data-v-725b5c66"),t=t(),ln(),t),U_={class:"main"},F_={class:"mainleft"},B_={class:"mainleftleft"},H_=_i(()=>C("h1",null,"Mi Cuenta",-1)),j_=_i(()=>C("div",{class:"linea1"},null,-1)),V_={class:"list"},W_=_i(()=>C("div",{class:"linea2"},null,-1)),z_=_t('<div class="list1" data-v-725b5c66><div class="linea3" data-v-725b5c66></div><label data-v-725b5c66>Vendedora</label></div><div class="linea" data-v-725b5c66></div><img class="logo" src="'+Ha+'" alt="El logo" data-v-725b5c66><h1 data-v-725b5c66>CUYART-SHOP</h1><img src="'+ja+'" alt="Youtube" data-v-725b5c66><img src="'+qs+'" alt="Facebook" data-v-725b5c66>',6),K_={class:"mainright"},q_=le({__name:"MiCuentaComponent",setup(t){const e=kt(!0);return(n,s)=>(ae(),Ie("main",U_,[C("div",F_,[C("div",B_,[H_,j_,C("div",V_,[W_,C("label",{onClick:s[0]||(s[0]=r=>e.value=!e.value)},"Actualizar Informacion")]),z_])]),C("div",K_,[Nt(te(k_,null,null,512),[[Ar,e.value]]),Nt(te($_,null,null,512),[[Ar,!e.value]])])]))}});const G_=_e(q_,[["__scopeId","data-v-725b5c66"]]),J_={class:"container"},Y_=le({__name:"MiCuentaPage",setup(t){return(e,n)=>(ae(),Ie("div",J_,[te(Ks),te(G_)]))}});const X_=_e(Y_,[["__scopeId","data-v-5b446284"]]),Q_=le({__name:"MiCuentaView",setup(t){return(e,n)=>(ae(),un(X_))}}),Z_=pf({history:Pd("/cuy-art-shop/"),routes:[{path:"/",name:"Home",component:sh},{path:"/about",name:"About",component:yh},{path:"/login",name:"Login",component:g_},{path:"/registro",name:"Registro",component:R_},{path:"/micuenta",name:"MiCuenta",component:Q_}]});var ev="firebase",tv="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(ev,tv,"app");const nv={apiKey:"AIzaSyCs4ob0qjeLAxY1Nr-dIXiwXxnqkeyBGc8",authDomain:"cuyart-shop.firebaseapp.com",projectId:"cuyart-shop",storageBucket:"cuyart-shop.appspot.com",messagingSenderId:"906331708937",appId:"1:906331708937:web:bbf3a749bd30b61b5d22d8"};Qa(nv);const Dc=ad(dd);Dc.use(Z_);Dc.mount("#app");
