(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Rl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function kl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=et(s)?ny(s):kl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(et(t))return t;if(Fe(t))return t}}const Zv=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*.*?\*\//gs;function ny(t){const e={};return t.replace(ty,"").split(Zv).forEach(n=>{if(n){const s=n.split(ey);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function cs(t){let e="";if(et(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const s=cs(t[n]);s&&(e+=s+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ry=Rl(sy);function xf(t){return!!t||t===""}const Te={},Us=[],xt=()=>{},iy=()=>!1,oy=/^on[^a-z]/,ia=t=>oy.test(t),Pl=t=>t.startsWith("onUpdate:"),gt=Object.assign,Nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ay=Object.prototype.hasOwnProperty,le=(t,e)=>ay.call(t,e),ee=Array.isArray,Br=t=>oa(t)==="[object Map]",cy=t=>oa(t)==="[object Set]",te=t=>typeof t=="function",et=t=>typeof t=="string",Dl=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Of=t=>Fe(t)&&te(t.then)&&te(t.catch),ly=Object.prototype.toString,oa=t=>ly.call(t),uy=t=>oa(t).slice(8,-1),hy=t=>oa(t)==="[object Object]",xl=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fo=Rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dy=/-(\w)/g,Zt=aa(t=>t.replace(dy,(e,n)=>n?n.toUpperCase():"")),fy=/\B([A-Z])/g,lr=aa(t=>t.replace(fy,"-$1").toLowerCase()),ca=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=aa(t=>t?`on${ca(t)}`:""),ei=(t,e)=>!Object.is(t,e),po=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ph;const py=()=>ph||(ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Tt;class Mf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Lf(t){return new Mf(t)}function gy(t,e=Tt){e&&e.active&&e.effects.push(t)}function $f(){return Tt}function my(t){Tt&&Tt.cleanups.push(t)}const Ol=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ff=t=>(t.w&qn)>0,Uf=t=>(t.n&qn)>0,vy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qn},yy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ff(r)&&!Uf(r)?r.delete(t):e[n++]=r,r.w&=~qn,r.n&=~qn}e.length=n}},Ro=new WeakMap;let Or=0,qn=1;const Dc=30;let Nt;const fs=Symbol(""),xc=Symbol("");class Ml{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gy(this,s)}run(){if(!this.active)return this.fn();let e=Nt,n=Mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,Mn=!0,qn=1<<++Or,Or<=Dc?vy(this):gh(this),this.fn()}finally{Or<=Dc&&yy(this),qn=1<<--Or,Nt=this.parent,Mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(gh(this),this.onStop&&this.onStop(),this.active=!1)}}function gh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mn=!0;const Vf=[];function ur(){Vf.push(Mn),Mn=!1}function hr(){const t=Vf.pop();Mn=t===void 0?!0:t}function It(t,e,n){if(Mn&&Nt){let s=Ro.get(t);s||Ro.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ol()),Bf(r)}}function Bf(t,e){let n=!1;Or<=Dc?Uf(t)||(t.n|=qn,n=!Ff(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function fn(t,e,n,s,r,i){const o=Ro.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?xl(n)&&a.push(o.get("length")):(a.push(o.get(fs)),Br(t)&&a.push(o.get(xc)));break;case"delete":ee(t)||(a.push(o.get(fs)),Br(t)&&a.push(o.get(xc)));break;case"set":Br(t)&&a.push(o.get(fs));break}if(a.length===1)a[0]&&Oc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Oc(Ol(c))}}function Oc(t,e){const n=ee(t)?t:[...t];for(const s of n)s.computed&&mh(s);for(const s of n)s.computed||mh(s)}function mh(t,e){(t!==Nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function _y(t,e){var n;return(n=Ro.get(t))===null||n===void 0?void 0:n.get(e)}const wy=Rl("__proto__,__v_isRef,__isVue"),jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dl)),Ey=Ll(),Iy=Ll(!1,!0),by=Ll(!0),vh=Ty();function Ty(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)It(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ur();const s=ue(this)[e].apply(this,n);return hr(),s}}),t}function Cy(t){const e=ue(this);return It(e,"has",t),e.hasOwnProperty(t)}function Ll(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?By:Wf:e?Kf:zf).get(s))return s;const o=ee(s);if(!t){if(o&&le(vh,r))return Reflect.get(vh,r,i);if(r==="hasOwnProperty")return Cy}const a=Reflect.get(s,r,i);return(Dl(r)?jf.has(r):wy(r))||(t||It(s,"get",r),e)?a:$e(a)?o&&xl(r)?a:a.value:Fe(a)?t?Gf(a):dr(a):a}}const Sy=qf(),Ay=qf(!0);function qf(t=!1){return function(n,s,r,i){let o=n[s];if(Ws(o)&&$e(o)&&!$e(r))return!1;if(!t&&(!ko(r)&&!Ws(r)&&(o=ue(o),r=ue(r)),!ee(n)&&$e(o)&&!$e(r)))return o.value=r,!0;const a=ee(n)&&xl(s)?Number(s)<n.length:le(n,s),c=Reflect.set(n,s,r,i);return n===ue(i)&&(a?ei(r,o)&&fn(n,"set",s,r):fn(n,"add",s,r)),c}}function Ry(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&fn(t,"delete",e,void 0),s}function ky(t,e){const n=Reflect.has(t,e);return(!Dl(e)||!jf.has(e))&&It(t,"has",e),n}function Py(t){return It(t,"iterate",ee(t)?"length":fs),Reflect.ownKeys(t)}const Hf={get:Ey,set:Sy,deleteProperty:Ry,has:ky,ownKeys:Py},Ny={get:by,set(t,e){return!0},deleteProperty(t,e){return!0}},Dy=gt({},Hf,{get:Iy,set:Ay}),$l=t=>t,la=t=>Reflect.getPrototypeOf(t);function Gi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);n||(e!==i&&It(r,"get",e),It(r,"get",i));const{has:o}=la(r),a=s?$l:n?Vl:ti;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Qi(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return e||(t!==r&&It(s,"has",t),It(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Yi(t,e=!1){return t=t.__v_raw,!e&&It(ue(t),"iterate",fs),Reflect.get(t,"size",t)}function yh(t){t=ue(t);const e=ue(this);return la(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function _h(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=la(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ei(e,o)&&fn(n,"set",t,e):fn(n,"add",t,e),this}function wh(t){const e=ue(this),{has:n,get:s}=la(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&fn(e,"delete",t,void 0),i}function Eh(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function Xi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),c=e?$l:t?Vl:ti;return!t&&It(a,"iterate",fs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ji(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=Br(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?$l:e?Vl:ti;return!e&&It(i,"iterate",c?xc:fs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function xy(){const t={get(i){return Gi(this,i)},get size(){return Yi(this)},has:Qi,add:yh,set:_h,delete:wh,clear:Eh,forEach:Xi(!1,!1)},e={get(i){return Gi(this,i,!1,!0)},get size(){return Yi(this)},has:Qi,add:yh,set:_h,delete:wh,clear:Eh,forEach:Xi(!1,!0)},n={get(i){return Gi(this,i,!0)},get size(){return Yi(this,!0)},has(i){return Qi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Xi(!0,!1)},s={get(i){return Gi(this,i,!0,!0)},get size(){return Yi(this,!0)},has(i){return Qi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ji(i,!1,!1),n[i]=Ji(i,!0,!1),e[i]=Ji(i,!1,!0),s[i]=Ji(i,!0,!0)}),[t,n,e,s]}const[Oy,My,Ly,$y]=xy();function Fl(t,e){const n=e?t?$y:Ly:t?My:Oy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const Fy={get:Fl(!1,!1)},Uy={get:Fl(!1,!0)},Vy={get:Fl(!0,!1)},zf=new WeakMap,Kf=new WeakMap,Wf=new WeakMap,By=new WeakMap;function jy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qy(t){return t.__v_skip||!Object.isExtensible(t)?0:jy(uy(t))}function dr(t){return Ws(t)?t:Ul(t,!1,Hf,Fy,zf)}function Hy(t){return Ul(t,!1,Dy,Uy,Kf)}function Gf(t){return Ul(t,!0,Ny,Vy,Wf)}function Ul(t,e,n,s,r){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=qy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ln(t){return Ws(t)?Ln(t.__v_raw):!!(t&&t.__v_isReactive)}function Ws(t){return!!(t&&t.__v_isReadonly)}function ko(t){return!!(t&&t.__v_isShallow)}function Qf(t){return Ln(t)||Ws(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Gs(t){return Ao(t,"__v_skip",!0),t}const ti=t=>Fe(t)?dr(t):t,Vl=t=>Fe(t)?Gf(t):t;function Yf(t){Mn&&Nt&&(t=ue(t),Bf(t.dep||(t.dep=Ol())))}function Xf(t,e){t=ue(t);const n=t.dep;n&&Oc(n)}function $e(t){return!!(t&&t.__v_isRef===!0)}function Se(t){return Jf(t,!1)}function zy(t){return Jf(t,!0)}function Jf(t,e){return $e(t)?t:new Ky(t,e)}class Ky{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:ti(e)}get value(){return Yf(this),this._value}set value(e){const n=this.__v_isShallow||ko(e)||Ws(e);e=n?e:ue(e),ei(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ti(e),Xf(this))}}function ft(t){return $e(t)?t.value:t}const Wy={get:(t,e,n)=>ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Zf(t){return Ln(t)?t:new Proxy(t,Wy)}function Gy(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=Yy(t,n);return e}class Qy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _y(ue(this._object),this._key)}}function Yy(t,e,n){const s=t[e];return $e(s)?s:new Qy(t,e,n)}var ep;class Xy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ep]=!1,this._dirty=!0,this.effect=new Ml(e,()=>{this._dirty||(this._dirty=!0,Xf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return Yf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ep="__v_isReadonly";function Jy(t,e,n=!1){let s,r;const i=te(t);return i?(s=t,r=xt):(s=t.get,r=t.set),new Xy(s,r,i||!r,n)}function $n(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ua(i,e,n)}return r}function Ot(t,e,n,s){if(te(t)){const i=$n(t,e,n,s);return i&&Of(i)&&i.catch(o=>{ua(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ot(t[i],e,n,s));return r}function ua(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$n(c,null,10,[t,o,a]);return}}Zy(t,n,r,s)}function Zy(t,e,n,s=!0){console.error(t)}let ni=!1,Mc=!1;const rt=[];let Wt=0;const Vs=[];let an=null,os=0;const tp=Promise.resolve();let Bl=null;function jl(t){const e=Bl||tp;return t?e.then(this?t.bind(this):t):e}function e_(t){let e=Wt+1,n=rt.length;for(;e<n;){const s=e+n>>>1;si(rt[s])<t?e=s+1:n=s}return e}function ql(t){(!rt.length||!rt.includes(t,ni&&t.allowRecurse?Wt+1:Wt))&&(t.id==null?rt.push(t):rt.splice(e_(t.id),0,t),np())}function np(){!ni&&!Mc&&(Mc=!0,Bl=tp.then(rp))}function t_(t){const e=rt.indexOf(t);e>Wt&&rt.splice(e,1)}function n_(t){ee(t)?Vs.push(...t):(!an||!an.includes(t,t.allowRecurse?os+1:os))&&Vs.push(t),np()}function Ih(t,e=ni?Wt+1:0){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function sp(t){if(Vs.length){const e=[...new Set(Vs)];if(Vs.length=0,an){an.push(...e);return}for(an=e,an.sort((n,s)=>si(n)-si(s)),os=0;os<an.length;os++)an[os]();an=null,os=0}}const si=t=>t.id==null?1/0:t.id,s_=(t,e)=>{const n=si(t)-si(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rp(t){Mc=!1,ni=!0,rt.sort(s_);const e=xt;try{for(Wt=0;Wt<rt.length;Wt++){const n=rt[Wt];n&&n.active!==!1&&$n(n,null,14)}}finally{Wt=0,rt.length=0,sp(),ni=!1,Bl=null,(rt.length||Vs.length)&&rp()}}function r_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Te;d&&(r=n.map(g=>et(g)?g.trim():g)),h&&(r=n.map(Nc))}let a,c=s[a=tc(e)]||s[a=tc(Zt(e))];!c&&i&&(c=s[a=tc(lr(e))]),c&&Ot(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(l,t,6,r)}}function ip(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=ip(l,e,!0);u&&(a=!0,gt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Fe(t)&&s.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):gt(o,i),Fe(t)&&s.set(t,o),o)}function ha(t,e){return!t||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,lr(e))||le(t,e))}let St=null,da=null;function Po(t){const e=St;return St=t,da=t&&t.type.__scopeId||null,e}function Gn(t){da=t}function Qn(){da=null}function i_(t,e=St,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Nh(-1);const i=Po(e);let o;try{o=t(...r)}finally{Po(i),s._d&&Nh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function nc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:_}=t;let A,C;const O=Po(t);try{if(n.shapeFlag&4){const H=r||s;A=Kt(u.call(H,H,h,i,g,d,v)),C=c}else{const H=e;A=Kt(H.length>1?H(i,{attrs:c,slots:a,emit:l}):H(i,null)),C=e.props?c:o_(c)}}catch(H){Hr.length=0,ua(H,t,1),A=ye(ri)}let k=A;if(C&&_!==!1){const H=Object.keys(C),{shapeFlag:J}=k;H.length&&J&7&&(o&&H.some(Pl)&&(C=a_(C,o)),k=Qs(k,C))}return n.dirs&&(k=Qs(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),A=k,Po(O),A}const o_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ia(n))&&((e||(e={}))[n]=t[n]);return e},a_=(t,e)=>{const n={};for(const s in t)(!Pl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function c_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ha(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bh(s,o,l):!0:!!o;return!1}function bh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ha(n,i))return!0}return!1}function l_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const u_=t=>t.__isSuspense;function h_(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):n_(t)}function go(t,e){if(Le){let n=Le.provides;const s=Le.parent&&Le.parent.provides;s===n&&(n=Le.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=Le||St;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}const Zi={};function jr(t,e,n){return op(t,e,n)}function op(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Te){const a=$f()===(Le==null?void 0:Le.scope)?Le:null;let c,l=!1,u=!1;if($e(t)?(c=()=>t.value,l=ko(t)):Ln(t)?(c=()=>t,s=!0):ee(t)?(u=!0,l=t.some(k=>Ln(k)||ko(k)),c=()=>t.map(k=>{if($e(k))return k.value;if(Ln(k))return ls(k);if(te(k))return $n(k,a,2)})):te(t)?e?c=()=>$n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ot(t,a,3,[d])}:c=xt,e&&s){const k=c;c=()=>ls(k())}let h,d=k=>{h=C.onStop=()=>{$n(k,a,4)}},g;if(oi)if(d=xt,e?n&&Ot(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const k=iw();g=k.__watcherHandles||(k.__watcherHandles=[])}else return xt;let v=u?new Array(t.length).fill(Zi):Zi;const _=()=>{if(C.active)if(e){const k=C.run();(s||l||(u?k.some((H,J)=>ei(H,v[J])):ei(k,v)))&&(h&&h(),Ot(e,a,3,[k,v===Zi?void 0:u&&v[0]===Zi?[]:v,d]),v=k)}else C.run()};_.allowRecurse=!!e;let A;r==="sync"?A=_:r==="post"?A=()=>_t(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),A=()=>ql(_));const C=new Ml(c,A);e?n?_():v=C.run():r==="post"?_t(C.run.bind(C),a&&a.suspense):C.run();const O=()=>{C.stop(),a&&a.scope&&Nl(a.scope.effects,C)};return g&&g.push(O),O}function d_(t,e,n){const s=this.proxy,r=et(t)?t.includes(".")?ap(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=Le;Ys(this);const a=op(r,i.bind(s),n);return o?Ys(o):ps(),a}function ap(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ls(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$e(t))ls(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)ls(t[n],e);else if(cy(t)||Br(t))t.forEach(n=>{ls(n,e)});else if(hy(t))for(const n in t)ls(t[n],e);return t}function ke(t){return te(t)?{setup:t,name:t.name}:t}const mo=t=>!!t.type.__asyncLoader,cp=t=>t.type.__isKeepAlive;function f_(t,e){lp(t,"a",e)}function p_(t,e){lp(t,"da",e)}function lp(t,e,n=Le){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(fa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)cp(r.parent.vnode)&&g_(s,e,n,r),r=r.parent}}function g_(t,e,n,s){const r=fa(e,t,s,!0);up(()=>{Nl(s[e],r)},n)}function fa(t,e,n=Le,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ur(),Ys(n);const a=Ot(e,n,t,o);return ps(),hr(),a});return s?r.unshift(i):r.push(i),i}}const En=t=>(e,n=Le)=>(!oi||t==="sp")&&fa(t,(...s)=>e(...s),n),Hl=En("bm"),m_=En("m"),v_=En("bu"),y_=En("u"),__=En("bum"),up=En("um"),w_=En("sp"),E_=En("rtg"),I_=En("rtc");function b_(t,e=Le){fa("ec",t,e)}function Ie(t,e){const n=St;if(n===null)return t;const s=ma(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Te]=e[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&ls(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ns(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ur(),Ot(c,n,8,[t.el,a,t,e]),hr())}}const hp="components";function dp(t,e){return C_(hp,t,!0,e)||t}const T_=Symbol();function C_(t,e,n=!0,s=!1){const r=St||Le;if(r){const i=r.type;if(t===hp){const a=nw(i,!1);if(a&&(a===e||a===Zt(e)||a===ca(Zt(e))))return i}const o=Th(r[t]||i[t],e)||Th(r.appContext[t],e);return!o&&s?i:o}}function Th(t,e){return t&&(t[e]||t[Zt(e)]||t[ca(Zt(e))])}const Lc=t=>t?bp(t)?ma(t)||t.proxy:Lc(t.parent):null,qr=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lc(t.parent),$root:t=>Lc(t.root),$emit:t=>t.emit,$options:t=>zl(t),$forceUpdate:t=>t.f||(t.f=()=>ql(t.update)),$nextTick:t=>t.n||(t.n=jl.bind(t.proxy)),$watch:t=>d_.bind(t)}),sc=(t,e)=>t!==Te&&!t.__isScriptSetup&&le(t,e),S_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(sc(s,e))return o[e]=1,s[e];if(r!==Te&&le(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==Te&&le(n,e))return o[e]=4,n[e];$c&&(o[e]=0)}}const u=qr[e];let h,d;if(u)return e==="$attrs"&&It(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return sc(r,e)?(r[e]=n,!0):s!==Te&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&le(t,o)||sc(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(qr,o)||le(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let $c=!0;function A_(t){const e=zl(t),n=t.proxy,s=t.ctx;$c=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:_,deactivated:A,beforeDestroy:C,beforeUnmount:O,destroyed:k,unmounted:H,render:J,renderTracked:ne,renderTriggered:z,errorCaptured:Q,serverPrefetch:be,expose:re,inheritAttrs:we,components:mt,directives:Bt,filters:ht}=e;if(l&&R_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const de=o[pe];te(de)&&(s[pe]=de.bind(n))}if(r){const pe=r.call(n,n);Fe(pe)&&(t.data=dr(pe))}if($c=!0,i)for(const pe in i){const de=i[pe],vt=te(de)?de.bind(n,n):te(de.get)?de.get.bind(n,n):xt,jt=!te(de)&&te(de.set)?de.set.bind(n):xt,yt=Ct({get:vt,set:jt});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Qe=>yt.value=Qe})}if(a)for(const pe in a)fp(a[pe],s,n,pe);if(c){const pe=te(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(de=>{go(de,pe[de])})}u&&Ch(u,t,"c");function Pe(pe,de){ee(de)?de.forEach(vt=>pe(vt.bind(n))):de&&pe(de.bind(n))}if(Pe(Hl,h),Pe(m_,d),Pe(v_,g),Pe(y_,v),Pe(f_,_),Pe(p_,A),Pe(b_,Q),Pe(I_,ne),Pe(E_,z),Pe(__,O),Pe(up,H),Pe(w_,be),ee(re))if(re.length){const pe=t.exposed||(t.exposed={});re.forEach(de=>{Object.defineProperty(pe,de,{get:()=>n[de],set:vt=>n[de]=vt})})}else t.exposed||(t.exposed={});J&&t.render===xt&&(t.render=J),we!=null&&(t.inheritAttrs=we),mt&&(t.components=mt),Bt&&(t.directives=Bt)}function R_(t,e,n=xt,s=!1){ee(t)&&(t=Fc(t));for(const r in t){const i=t[r];let o;Fe(i)?"default"in i?o=Mt(i.from||r,i.default,!0):o=Mt(i.from||r):o=Mt(i),$e(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ch(t,e,n){Ot(ee(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fp(t,e,n,s){const r=s.includes(".")?ap(n,s):()=>n[s];if(et(t)){const i=e[t];te(i)&&jr(r,i)}else if(te(t))jr(r,t.bind(n));else if(Fe(t))if(ee(t))t.forEach(i=>fp(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&jr(r,i,t)}}function zl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>No(c,l,o,!0)),No(c,e,o)),Fe(e)&&i.set(e,c),c}function No(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&No(t,i,n,!0),r&&r.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=k_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const k_={data:Sh,props:rs,emits:rs,methods:rs,computed:rs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:rs,directives:rs,watch:N_,provide:Sh,inject:P_};function Sh(t,e){return e?t?function(){return gt(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function P_(t,e){return rs(Fc(t),Fc(e))}function Fc(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function rs(t,e){return t?gt(gt(Object.create(null),t),e):e}function N_(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const s in e)n[s]=dt(t[s],e[s]);return n}function D_(t,e,n,s=!1){const r={},i={};Ao(i,ga,1),t.propsDefaults=Object.create(null),pp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Hy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function x_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ha(t.emitsOptions,d))continue;const g=e[d];if(c)if(le(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=Zt(d);r[v]=Uc(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{pp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=lr(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Uc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&fn(t,"set","$attrs")}function pp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fo(c))continue;const l=e[c];let u;r&&le(r,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ha(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ue(n),l=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Uc(r,c,h,l[h],t,!le(l,h))}}return o}function Uc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ys(r),s=l[n]=c.call(null,e),ps())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===lr(n))&&(s=!0))}return s}function gp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[d,g]=gp(h,e,!0);gt(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Fe(t)&&s.set(t,Us),Us;if(ee(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);Ah(h)&&(o[h]=Te)}else if(i)for(const u in i){const h=Zt(u);if(Ah(h)){const d=i[u],g=o[h]=ee(d)||te(d)?{type:d}:Object.assign({},d);if(g){const v=Ph(Boolean,g.type),_=Ph(String,g.type);g[0]=v>-1,g[1]=_<0||v<_,(v>-1||le(g,"default"))&&a.push(h)}}}const l=[o,a];return Fe(t)&&s.set(t,l),l}function Ah(t){return t[0]!=="$"}function Rh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function kh(t,e){return Rh(t)===Rh(e)}function Ph(t,e){return ee(e)?e.findIndex(n=>kh(n,t)):te(e)&&kh(e,t)?0:-1}const mp=t=>t[0]==="_"||t==="$stable",Kl=t=>ee(t)?t.map(Kt):[Kt(t)],O_=(t,e,n)=>{if(e._n)return e;const s=i_((...r)=>Kl(e(...r)),n);return s._c=!1,s},vp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(mp(r))continue;const i=t[r];if(te(i))e[r]=O_(r,i,s);else if(i!=null){const o=Kl(i);e[r]=()=>o}}},yp=(t,e)=>{const n=Kl(e);t.slots.default=()=>n},M_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Ao(e,"_",n)):vp(e,t.slots={})}else t.slots={},e&&yp(t,e);Ao(t.slots,ga,1)},L_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(gt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,vp(e,r)),o=e}else e&&(yp(t,e),o={default:1});if(i)for(const a in r)!mp(a)&&!(a in o)&&delete r[a]};function _p(){return{app:null,config:{isNativeTag:iy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $_=0;function F_(t,e){return function(s,r=null){te(s)||(s=Object.assign({},s)),r!=null&&!Fe(r)&&(r=null);const i=_p(),o=new Set;let a=!1;const c=i.app={_uid:$_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ow,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ye(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ma(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Vc(t,e,n,s,r=!1){if(ee(t)){t.forEach((d,g)=>Vc(d,e&&(ee(e)?e[g]:e),n,s,r));return}if(mo(s)&&!r)return;const i=s.shapeFlag&4?ma(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(et(l)?(u[l]=null,le(h,l)&&(h[l]=null)):$e(l)&&(l.value=null)),te(c))$n(c,a,12,[o,u]);else{const d=et(c),g=$e(c);if(d||g){const v=()=>{if(t.f){const _=d?le(h,c)?h[c]:u[c]:c.value;r?ee(_)&&Nl(_,i):ee(_)?_.includes(i)||_.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,_t(v,n)):v()}}}const _t=h_;function U_(t){return V_(t)}function V_(t,e){const n=py();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=xt,insertStaticContent:v}=t,_=(f,p,y,w=null,b=null,P=null,$=!1,R=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!kr(f,p)&&(w=x(f),Qe(f,b,P,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:T,ref:j,shapeFlag:U}=p;switch(T){case pa:A(f,p,y,w);break;case ri:C(f,p,y,w);break;case vo:f==null&&O(p,y,w,$);break;case zt:mt(f,p,y,w,b,P,$,R,D);break;default:U&1?J(f,p,y,w,b,P,$,R,D):U&6?Bt(f,p,y,w,b,P,$,R,D):(U&64||U&128)&&T.process(f,p,y,w,b,P,$,R,D,ce)}j!=null&&b&&Vc(j,f&&f.ref,P,p||f,!p)},A=(f,p,y,w)=>{if(f==null)s(p.el=a(p.children),y,w);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},C=(f,p,y,w)=>{f==null?s(p.el=c(p.children||""),y,w):p.el=f.el},O=(f,p,y,w)=>{[f.el,f.anchor]=v(f.children,p,y,w,f.el,f.anchor)},k=({el:f,anchor:p},y,w)=>{let b;for(;f&&f!==p;)b=d(f),s(f,y,w),f=b;s(p,y,w)},H=({el:f,anchor:p})=>{let y;for(;f&&f!==p;)y=d(f),r(f),f=y;r(p)},J=(f,p,y,w,b,P,$,R,D)=>{$=$||p.type==="svg",f==null?ne(p,y,w,b,P,$,R,D):be(f,p,b,P,$,R,D)},ne=(f,p,y,w,b,P,$,R)=>{let D,T;const{type:j,props:U,shapeFlag:q,transition:Y,dirs:ie}=f;if(D=f.el=o(f.type,P,U&&U.is,U),q&8?u(D,f.children):q&16&&Q(f.children,D,null,w,b,P&&j!=="foreignObject",$,R),ie&&ns(f,null,w,"created"),z(D,f,f.scopeId,$,w),U){for(const ve in U)ve!=="value"&&!fo(ve)&&i(D,ve,null,U[ve],P,f.children,w,b,L);"value"in U&&i(D,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Ht(T,w,f)}ie&&ns(f,null,w,"beforeMount");const Ee=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;Ee&&Y.beforeEnter(D),s(D,p,y),((T=U&&U.onVnodeMounted)||Ee||ie)&&_t(()=>{T&&Ht(T,w,f),Ee&&Y.enter(D),ie&&ns(f,null,w,"mounted")},b)},z=(f,p,y,w,b)=>{if(y&&g(f,y),w)for(let P=0;P<w.length;P++)g(f,w[P]);if(b){let P=b.subTree;if(p===P){const $=b.vnode;z(f,$,$.scopeId,$.slotScopeIds,b.parent)}}},Q=(f,p,y,w,b,P,$,R,D=0)=>{for(let T=D;T<f.length;T++){const j=f[T]=R?An(f[T]):Kt(f[T]);_(null,j,p,y,w,b,P,$,R)}},be=(f,p,y,w,b,P,$)=>{const R=p.el=f.el;let{patchFlag:D,dynamicChildren:T,dirs:j}=p;D|=f.patchFlag&16;const U=f.props||Te,q=p.props||Te;let Y;y&&ss(y,!1),(Y=q.onVnodeBeforeUpdate)&&Ht(Y,y,p,f),j&&ns(p,f,y,"beforeUpdate"),y&&ss(y,!0);const ie=b&&p.type!=="foreignObject";if(T?re(f.dynamicChildren,T,R,y,w,ie,P):$||de(f,p,R,null,y,w,ie,P,!1),D>0){if(D&16)we(R,p,U,q,y,w,b);else if(D&2&&U.class!==q.class&&i(R,"class",null,q.class,b),D&4&&i(R,"style",U.style,q.style,b),D&8){const Ee=p.dynamicProps;for(let ve=0;ve<Ee.length;ve++){const Ve=Ee[ve],Pt=U[Ve],ks=q[Ve];(ks!==Pt||Ve==="value")&&i(R,Ve,Pt,ks,b,f.children,y,w,L)}}D&1&&f.children!==p.children&&u(R,p.children)}else!$&&T==null&&we(R,p,U,q,y,w,b);((Y=q.onVnodeUpdated)||j)&&_t(()=>{Y&&Ht(Y,y,p,f),j&&ns(p,f,y,"updated")},w)},re=(f,p,y,w,b,P,$)=>{for(let R=0;R<p.length;R++){const D=f[R],T=p[R],j=D.el&&(D.type===zt||!kr(D,T)||D.shapeFlag&70)?h(D.el):y;_(D,T,j,null,w,b,P,$,!0)}},we=(f,p,y,w,b,P,$)=>{if(y!==w){if(y!==Te)for(const R in y)!fo(R)&&!(R in w)&&i(f,R,y[R],null,$,p.children,b,P,L);for(const R in w){if(fo(R))continue;const D=w[R],T=y[R];D!==T&&R!=="value"&&i(f,R,T,D,$,p.children,b,P,L)}"value"in w&&i(f,"value",y.value,w.value)}},mt=(f,p,y,w,b,P,$,R,D)=>{const T=p.el=f?f.el:a(""),j=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:Y}=p;Y&&(R=R?R.concat(Y):Y),f==null?(s(T,y,w),s(j,y,w),Q(p.children,y,j,b,P,$,R,D)):U>0&&U&64&&q&&f.dynamicChildren?(re(f.dynamicChildren,q,y,b,P,$,R),(p.key!=null||b&&p===b.subTree)&&wp(f,p,!0)):de(f,p,y,j,b,P,$,R,D)},Bt=(f,p,y,w,b,P,$,R,D)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?b.ctx.activate(p,y,w,$,D):ht(p,y,w,b,P,$,D):Me(f,p,D)},ht=(f,p,y,w,b,P,$)=>{const R=f.component=Y_(f,w,b);if(cp(f)&&(R.ctx.renderer=ce),J_(R),R.asyncDep){if(b&&b.registerDep(R,Pe),!f.el){const D=R.subTree=ye(ri);C(null,D,p,y)}return}Pe(R,f,p,y,b,P,$)},Me=(f,p,y)=>{const w=p.component=f.component;if(c_(f,p,y))if(w.asyncDep&&!w.asyncResolved){pe(w,p,y);return}else w.next=p,t_(w.update),w.update();else p.el=f.el,w.vnode=p},Pe=(f,p,y,w,b,P,$)=>{const R=()=>{if(f.isMounted){let{next:j,bu:U,u:q,parent:Y,vnode:ie}=f,Ee=j,ve;ss(f,!1),j?(j.el=ie.el,pe(f,j,$)):j=ie,U&&po(U),(ve=j.props&&j.props.onVnodeBeforeUpdate)&&Ht(ve,Y,j,ie),ss(f,!0);const Ve=nc(f),Pt=f.subTree;f.subTree=Ve,_(Pt,Ve,h(Pt.el),x(Pt),f,b,P),j.el=Ve.el,Ee===null&&l_(f,Ve.el),q&&_t(q,b),(ve=j.props&&j.props.onVnodeUpdated)&&_t(()=>Ht(ve,Y,j,ie),b)}else{let j;const{el:U,props:q}=p,{bm:Y,m:ie,parent:Ee}=f,ve=mo(p);if(ss(f,!1),Y&&po(Y),!ve&&(j=q&&q.onVnodeBeforeMount)&&Ht(j,Ee,p),ss(f,!0),U&&se){const Ve=()=>{f.subTree=nc(f),se(U,f.subTree,f,b,null)};ve?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ve()):Ve()}else{const Ve=f.subTree=nc(f);_(null,Ve,y,w,f,b,P),p.el=Ve.el}if(ie&&_t(ie,b),!ve&&(j=q&&q.onVnodeMounted)){const Ve=p;_t(()=>Ht(j,Ee,Ve),b)}(p.shapeFlag&256||Ee&&mo(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&_t(f.a,b),f.isMounted=!0,p=y=w=null}},D=f.effect=new Ml(R,()=>ql(T),f.scope),T=f.update=()=>D.run();T.id=f.uid,ss(f,!0),T()},pe=(f,p,y)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,x_(f,p.props,w,y),L_(f,p.children,y),ur(),Ih(),hr()},de=(f,p,y,w,b,P,$,R,D=!1)=>{const T=f&&f.children,j=f?f.shapeFlag:0,U=p.children,{patchFlag:q,shapeFlag:Y}=p;if(q>0){if(q&128){jt(T,U,y,w,b,P,$,R,D);return}else if(q&256){vt(T,U,y,w,b,P,$,R,D);return}}Y&8?(j&16&&L(T,b,P),U!==T&&u(y,U)):j&16?Y&16?jt(T,U,y,w,b,P,$,R,D):L(T,b,P,!0):(j&8&&u(y,""),Y&16&&Q(U,y,w,b,P,$,R,D))},vt=(f,p,y,w,b,P,$,R,D)=>{f=f||Us,p=p||Us;const T=f.length,j=p.length,U=Math.min(T,j);let q;for(q=0;q<U;q++){const Y=p[q]=D?An(p[q]):Kt(p[q]);_(f[q],Y,y,null,b,P,$,R,D)}T>j?L(f,b,P,!0,!1,U):Q(p,y,w,b,P,$,R,D,U)},jt=(f,p,y,w,b,P,$,R,D)=>{let T=0;const j=p.length;let U=f.length-1,q=j-1;for(;T<=U&&T<=q;){const Y=f[T],ie=p[T]=D?An(p[T]):Kt(p[T]);if(kr(Y,ie))_(Y,ie,y,null,b,P,$,R,D);else break;T++}for(;T<=U&&T<=q;){const Y=f[U],ie=p[q]=D?An(p[q]):Kt(p[q]);if(kr(Y,ie))_(Y,ie,y,null,b,P,$,R,D);else break;U--,q--}if(T>U){if(T<=q){const Y=q+1,ie=Y<j?p[Y].el:w;for(;T<=q;)_(null,p[T]=D?An(p[T]):Kt(p[T]),y,ie,b,P,$,R,D),T++}}else if(T>q)for(;T<=U;)Qe(f[T],b,P,!0),T++;else{const Y=T,ie=T,Ee=new Map;for(T=ie;T<=q;T++){const bt=p[T]=D?An(p[T]):Kt(p[T]);bt.key!=null&&Ee.set(bt.key,T)}let ve,Ve=0;const Pt=q-ie+1;let ks=!1,hh=0;const Rr=new Array(Pt);for(T=0;T<Pt;T++)Rr[T]=0;for(T=Y;T<=U;T++){const bt=f[T];if(Ve>=Pt){Qe(bt,b,P,!0);continue}let qt;if(bt.key!=null)qt=Ee.get(bt.key);else for(ve=ie;ve<=q;ve++)if(Rr[ve-ie]===0&&kr(bt,p[ve])){qt=ve;break}qt===void 0?Qe(bt,b,P,!0):(Rr[qt-ie]=T+1,qt>=hh?hh=qt:ks=!0,_(bt,p[qt],y,null,b,P,$,R,D),Ve++)}const dh=ks?B_(Rr):Us;for(ve=dh.length-1,T=Pt-1;T>=0;T--){const bt=ie+T,qt=p[bt],fh=bt+1<j?p[bt+1].el:w;Rr[T]===0?_(null,qt,y,fh,b,P,$,R,D):ks&&(ve<0||T!==dh[ve]?yt(qt,y,fh,2):ve--)}}},yt=(f,p,y,w,b=null)=>{const{el:P,type:$,transition:R,children:D,shapeFlag:T}=f;if(T&6){yt(f.component.subTree,p,y,w);return}if(T&128){f.suspense.move(p,y,w);return}if(T&64){$.move(f,p,y,ce);return}if($===zt){s(P,p,y);for(let U=0;U<D.length;U++)yt(D[U],p,y,w);s(f.anchor,p,y);return}if($===vo){k(f,p,y);return}if(w!==2&&T&1&&R)if(w===0)R.beforeEnter(P),s(P,p,y),_t(()=>R.enter(P),b);else{const{leave:U,delayLeave:q,afterLeave:Y}=R,ie=()=>s(P,p,y),Ee=()=>{U(P,()=>{ie(),Y&&Y()})};q?q(P,ie,Ee):Ee()}else s(P,p,y)},Qe=(f,p,y,w=!1,b=!1)=>{const{type:P,props:$,ref:R,children:D,dynamicChildren:T,shapeFlag:j,patchFlag:U,dirs:q}=f;if(R!=null&&Vc(R,null,y,f,!0),j&256){p.ctx.deactivate(f);return}const Y=j&1&&q,ie=!mo(f);let Ee;if(ie&&(Ee=$&&$.onVnodeBeforeUnmount)&&Ht(Ee,p,f),j&6)E(f.component,y,w);else{if(j&128){f.suspense.unmount(y,w);return}Y&&ns(f,null,p,"beforeUnmount"),j&64?f.type.remove(f,p,y,b,ce,w):T&&(P!==zt||U>0&&U&64)?L(T,p,y,!1,!0):(P===zt&&U&384||!b&&j&16)&&L(D,p,y),w&&sn(f)}(ie&&(Ee=$&&$.onVnodeUnmounted)||Y)&&_t(()=>{Ee&&Ht(Ee,p,f),Y&&ns(f,null,p,"unmounted")},y)},sn=f=>{const{type:p,el:y,anchor:w,transition:b}=f;if(p===zt){ts(y,w);return}if(p===vo){H(f);return}const P=()=>{r(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:$,delayLeave:R}=b,D=()=>$(y,P);R?R(f.el,P,D):D()}else P()},ts=(f,p)=>{let y;for(;f!==p;)y=d(f),r(f),f=y;r(p)},E=(f,p,y)=>{const{bum:w,scope:b,update:P,subTree:$,um:R}=f;w&&po(w),b.stop(),P&&(P.active=!1,Qe($,f,p,y)),R&&_t(R,p),_t(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},L=(f,p,y,w=!1,b=!1,P=0)=>{for(let $=P;$<f.length;$++)Qe(f[$],p,y,w,b)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),N=(f,p,y)=>{f==null?p._vnode&&Qe(p._vnode,null,null,!0):_(p._vnode||null,f,p,null,null,null,y),Ih(),sp(),p._vnode=f},ce={p:_,um:Qe,m:yt,r:sn,mt:ht,mc:Q,pc:de,pbc:re,n:x,o:t};let Ne,se;return e&&([Ne,se]=e(ce)),{render:N,hydrate:Ne,createApp:F_(N,Ne)}}function ss({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wp(t,e,n=!1){const s=t.children,r=e.children;if(ee(s)&&ee(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=An(r[i]),a.el=o.el),n||wp(o,a)),a.type===pa&&(a.el=o.el)}}function B_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const j_=t=>t.__isTeleport,zt=Symbol(void 0),pa=Symbol(void 0),ri=Symbol(void 0),vo=Symbol(void 0),Hr=[];let Dt=null;function _e(t=!1){Hr.push(Dt=t?null:[])}function q_(){Hr.pop(),Dt=Hr[Hr.length-1]||null}let ii=1;function Nh(t){ii+=t}function Ep(t){return t.dynamicChildren=ii>0?Dt||Us:null,q_(),ii>0&&Dt&&Dt.push(t),t}function Ue(t,e,n,s,r,i){return Ep(m(t,e,n,s,r,i,!0))}function fr(t,e,n,s,r){return Ep(ye(t,e,n,s,r,!0))}function Bc(t){return t?t.__v_isVNode===!0:!1}function kr(t,e){return t.type===e.type&&t.key===e.key}const ga="__vInternal",Ip=({key:t})=>t??null,yo=({ref:t,ref_key:e,ref_for:n})=>t!=null?et(t)||$e(t)||te(t)?{i:St,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,i=t===zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ip(e),ref:e&&yo(e),scopeId:da,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:St};return a?(Wl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),ii>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const ye=H_;function H_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===T_)&&(t=ri),Bc(t)){const a=Qs(t,e,!0);return n&&Wl(a,n),ii>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(sw(t)&&(t=t.__vccOpts),e){e=z_(e);let{class:a,style:c}=e;a&&!et(a)&&(e.class=cs(a)),Fe(c)&&(Qf(c)&&!ee(c)&&(c=gt({},c)),e.style=kl(c))}const o=et(t)?1:u_(t)?128:j_(t)?64:Fe(t)?4:te(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function z_(t){return t?Qf(t)||ga in t?gt({},t):t:null}function Qs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?W_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ip(a),ref:e&&e.ref?n&&r?ee(r)?r.concat(yo(e)):[r,yo(e)]:yo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qs(t.ssContent),ssFallback:t.ssFallback&&Qs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function K_(t=" ",e=0){return ye(pa,null,t,e)}function tn(t,e){const n=ye(vo,null,t);return n.staticCount=e,n}function Kt(t){return t==null||typeof t=="boolean"?ye(ri):ee(t)?ye(zt,null,t.slice()):typeof t=="object"?An(t):ye(pa,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qs(t)}function Wl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Wl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ga in e)?e._ctx=St:r===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:St},n=32):(e=String(e),s&64?(n=16,e=[K_(e)]):n=8);t.children=e,t.shapeFlag|=n}function W_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=cs([e.class,s.class]));else if(r==="style")e.style=kl([e.style,s.style]);else if(ia(r)){const i=e[r],o=s[r];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){Ot(t,e,7,[n,s])}const G_=_p();let Q_=0;function Y_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||G_,i={uid:Q_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(s,r),emitsOptions:ip(s,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=r_.bind(null,i),t.ce&&t.ce(i),i}let Le=null;const X_=()=>Le||St,Ys=t=>{Le=t,t.scope.on()},ps=()=>{Le&&Le.scope.off(),Le=null};function bp(t){return t.vnode.shapeFlag&4}let oi=!1;function J_(t,e=!1){oi=e;const{props:n,children:s}=t.vnode,r=bp(t);D_(t,n,r,e),M_(t,s);const i=r?Z_(t,e):void 0;return oi=!1,i}function Z_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gs(new Proxy(t.ctx,S_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?tw(t):null;Ys(t),ur();const i=$n(s,t,0,[t.props,r]);if(hr(),ps(),Of(i)){if(i.then(ps,ps),e)return i.then(o=>{Dh(t,o,e)}).catch(o=>{ua(o,t,0)});t.asyncDep=i}else Dh(t,i,e)}else Tp(t,e)}function Dh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Zf(e)),Tp(t,n)}let xh;function Tp(t,e,n){const s=t.type;if(!t.render){if(!e&&xh&&!s.render){const r=s.template||zl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=gt(gt({isCustomElement:i,delimiters:a},o),c);s.render=xh(r,l)}}t.render=s.render||xt}Ys(t),ur(),A_(t),hr(),ps()}function ew(t){return new Proxy(t.attrs,{get(e,n){return It(t,"get","$attrs"),e[n]}})}function tw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ew(t))},slots:t.slots,emit:t.emit,expose:e}}function ma(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zf(Gs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qr)return qr[n](t)},has(e,n){return n in e||n in qr}}))}function nw(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function sw(t){return te(t)&&"__vccOpts"in t}const Ct=(t,e)=>Jy(t,e,oi);function Cp(t,e,n){const s=arguments.length;return s===2?Fe(e)&&!ee(e)?Bc(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Bc(n)&&(n=[n]),ye(t,e,n))}const rw=Symbol(""),iw=()=>Mt(rw),ow="3.2.47",aw="http://www.w3.org/2000/svg",as=typeof document<"u"?document:null,Oh=as&&as.createElement("template"),cw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?as.createElementNS(aw,t):as.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Oh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Oh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uw(t,e,n){const s=t.style,r=et(n);if(n&&!r){if(e&&!et(e))for(const i in e)n[i]==null&&jc(s,i,"");for(const i in n)jc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Mh=/\s*!important$/;function jc(t,e,n){if(ee(n))n.forEach(s=>jc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hw(t,e);Mh.test(n)?t.setProperty(lr(s),n.replace(Mh,""),"important"):t[s]=n}}const Lh=["Webkit","Moz","ms"],rc={};function hw(t,e){const n=rc[e];if(n)return n;let s=Zt(e);if(s!=="filter"&&s in t)return rc[e]=s;s=ca(s);for(let r=0;r<Lh.length;r++){const i=Lh[r]+s;if(i in t)return rc[e]=i}return e}const $h="http://www.w3.org/1999/xlink";function dw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($h,e.slice(6,e.length)):t.setAttributeNS($h,e,n);else{const i=ry(e);n==null||i&&!xf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xs(t,e,n,s){t.addEventListener(e,n,s)}function pw(t,e,n,s){t.removeEventListener(e,n,s)}function gw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=mw(e);if(s){const l=i[e]=_w(s,r);xs(t,a,l,c)}else o&&(pw(t,a,o,c),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function mw(t){let e;if(Fh.test(t)){e={};let s;for(;s=t.match(Fh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lr(t.slice(2)),e]}let ic=0;const vw=Promise.resolve(),yw=()=>ic||(vw.then(()=>ic=0),ic=Date.now());function _w(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ot(ww(s,n.value),e,5,[s])};return n.value=t,n.attached=yw(),n}function ww(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Uh=/^on[a-z]/,Ew=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?lw(t,s,r):e==="style"?uw(t,n,s):ia(e)?Pl(e)||gw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(t,e,s,r))?fw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dw(t,e,s,r))};function Iw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Uh.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uh.test(e)&&et(n)?!1:e in t}const Vh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>po(e,n):e};function bw(t){t.target.composing=!0}function Bh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Je={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Vh(r);const i=s||r.props&&r.props.type==="number";xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Nc(a)),t._assign(a)}),n&&xs(t,"change",()=>{t.value=t.value.trim()}),e||(xs(t,"compositionstart",bw),xs(t,"compositionend",Bh),xs(t,"change",Bh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Vh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Nc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},on={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Pr(t,!0),s.enter(t)):s.leave(t,()=>{Pr(t,!1)}):Pr(t,e))},beforeUnmount(t,{value:e}){Pr(t,e)}};function Pr(t,e){t.style.display=e?t._vod:"none"}const Tw=gt({patchProp:Ew},cw);let jh;function Cw(){return jh||(jh=U_(Tw))}const Sw=(...t)=>{const e=Cw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Aw(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Aw(t){return et(t)?document.querySelector(t):t}var Rw=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Sp;const va=t=>Sp=t,Ap=Symbol();function qc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zr||(zr={}));function kw(){const t=Lf(!0),e=t.run(()=>Se({}));let n=[],s=[];const r=Gs({install(i){va(r),r._a=i,i.provide(Ap,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Rw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Rp=()=>{};function qh(t,e,n,s=Rp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&$f()&&my(r),r}function Ps(t,...e){t.slice().forEach(n=>{n(...e)})}function Hc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];qc(r)&&qc(s)&&t.hasOwnProperty(n)&&!$e(s)&&!Ln(s)?t[n]=Hc(r,s):t[n]=s}return t}const Pw=Symbol();function Nw(t){return!qc(t)||!t.hasOwnProperty(Pw)}const{assign:Sn}=Object;function Dw(t){return!!($e(t)&&t.effect)}function xw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Gy(n.state.value[t]);return Sn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Gs(Ct(()=>{va(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=kp(t,l,e,n,s,!0),c}function kp(t,e,n={},s,r,i){let o;const a=Sn({actions:{}},n),c={deep:!0};let l,u,h=Gs([]),d=Gs([]),g;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),Se({});let _;function A(z){let Q;l=u=!1,typeof z=="function"?(z(s.state.value[t]),Q={type:zr.patchFunction,storeId:t,events:g}):(Hc(s.state.value[t],z),Q={type:zr.patchObject,payload:z,storeId:t,events:g});const be=_=Symbol();jl().then(()=>{_===be&&(l=!0)}),u=!0,Ps(h,Q,s.state.value[t])}const C=i?function(){const{state:Q}=n,be=Q?Q():{};this.$patch(re=>{Sn(re,be)})}:Rp;function O(){o.stop(),h=[],d=[],s._s.delete(t)}function k(z,Q){return function(){va(s);const be=Array.from(arguments),re=[],we=[];function mt(Me){re.push(Me)}function Bt(Me){we.push(Me)}Ps(d,{args:be,name:z,store:J,after:mt,onError:Bt});let ht;try{ht=Q.apply(this&&this.$id===t?this:J,be)}catch(Me){throw Ps(we,Me),Me}return ht instanceof Promise?ht.then(Me=>(Ps(re,Me),Me)).catch(Me=>(Ps(we,Me),Promise.reject(Me))):(Ps(re,ht),ht)}}const H={_p:s,$id:t,$onAction:qh.bind(null,d),$patch:A,$reset:C,$subscribe(z,Q={}){const be=qh(h,z,Q.detached,()=>re()),re=o.run(()=>jr(()=>s.state.value[t],we=>{(Q.flush==="sync"?u:l)&&z({storeId:t,type:zr.direct,events:g},we)},Sn({},c,Q)));return be},$dispose:O},J=dr(H);s._s.set(t,J);const ne=s._e.run(()=>(o=Lf(),o.run(()=>e())));for(const z in ne){const Q=ne[z];if($e(Q)&&!Dw(Q)||Ln(Q))i||(v&&Nw(Q)&&($e(Q)?Q.value=v[z]:Hc(Q,v[z])),s.state.value[t][z]=Q);else if(typeof Q=="function"){const be=k(z,Q);ne[z]=be,a.actions[z]=Q}}return Sn(J,ne),Sn(ue(J),ne),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:z=>{A(Q=>{Sn(Q,z)})}}),s._p.forEach(z=>{Sn(J,o.run(()=>z({store:J,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(J.$state,v),l=!0,u=!0,J}function Ow(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=X_();return a=a||l&&Mt(Ap,null),a&&va(a),a=Sp,a._s.has(s)||(i?kp(s,e,r,a):xw(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const Pp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Mw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Lw;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $w=function(t){const e=Pp(t);return Np.encodeByteArray(e,!0)},Do=function(t){return $w(t).replace(/\./g,"")},Dp=function(t){try{return Np.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uw=()=>Fw().__FIREBASE_DEFAULTS__,Vw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dp(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return Uw()||Vw()||Bw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xp=t=>{var e,n;return(n=(e=Gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jw=t=>{const e=xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qw=()=>{var t;return(t=Gl())===null||t===void 0?void 0:t.config},Op=t=>{var e;return(e=Gl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Hw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),a].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Ww(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qw(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yw(){try{return typeof indexedDB=="object"}catch{return!1}}function Xw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jw="FirebaseError";class In extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jw,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Zw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new In(r,a,s)}}function Zw(t,e){return t.replace(e0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;function t0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Hh(i)&&Hh(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Hh(t){return t!==null&&typeof t=="object"}/**
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
 */function bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function n0(t,e){const n=new s0(t,e);return n.subscribe.bind(n)}class s0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=oc),r.error===void 0&&(r.error=oc),r.complete===void 0&&(r.complete=oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class vs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class i0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Hw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a0(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o0(t){return t===is?void 0:t}function a0(t){return t.instantiationMode==="EAGER"}/**
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
 */class c0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const l0={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},u0=he.INFO,h0={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},d0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=h0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=u0,this._logHandler=d0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const f0=(t,e)=>e.some(n=>t instanceof n);let zh,Kh;function p0(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g0(){return Kh||(Kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,zc=new WeakMap,Lp=new WeakMap,ac=new WeakMap,Yl=new WeakMap;function m0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mp.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function v0(t){if(zc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zc.set(t,e)}let Kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y0(t){Kc=t(Kc)}function _0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cc(this),e,...n);return Lp.set(s,e.sort?e.sort():[e]),Fn(s)}:g0().includes(t)?function(...e){return t.apply(cc(this),e),Fn(Mp.get(this))}:function(...e){return Fn(t.apply(cc(this),e))}}function w0(t){return typeof t=="function"?_0(t):(t instanceof IDBTransaction&&v0(t),f0(t,p0())?new Proxy(t,Kc):t)}function Fn(t){if(t instanceof IDBRequest)return m0(t);if(ac.has(t))return ac.get(t);const e=w0(t);return e!==t&&(ac.set(t,e),Yl.set(e,t)),e}const cc=t=>Yl.get(t);function E0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Fn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const I0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],lc=new Map;function Wh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=b0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||I0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return lc.set(e,i),i}y0(t=>({...t,get:(e,n,s)=>Wh(e,n)||t.get(e,n,s),has:(e,n)=>!!Wh(e,n)||t.has(e,n)}));/**
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
 */class T0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(C0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function C0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",Gh="0.9.9";/**
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
 */const ys=new Ql("@firebase/app"),S0="@firebase/app-compat",A0="@firebase/analytics-compat",R0="@firebase/analytics",k0="@firebase/app-check-compat",P0="@firebase/app-check",N0="@firebase/auth",D0="@firebase/auth-compat",x0="@firebase/database",O0="@firebase/database-compat",M0="@firebase/functions",L0="@firebase/functions-compat",$0="@firebase/installations",F0="@firebase/installations-compat",U0="@firebase/messaging",V0="@firebase/messaging-compat",B0="@firebase/performance",j0="@firebase/performance-compat",q0="@firebase/remote-config",H0="@firebase/remote-config-compat",z0="@firebase/storage",K0="@firebase/storage-compat",W0="@firebase/firestore",G0="@firebase/firestore-compat",Q0="firebase",Y0="9.21.0";/**
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
 */const Gc="[DEFAULT]",X0={[Wc]:"fire-core",[S0]:"fire-core-compat",[R0]:"fire-analytics",[A0]:"fire-analytics-compat",[P0]:"fire-app-check",[k0]:"fire-app-check-compat",[N0]:"fire-auth",[D0]:"fire-auth-compat",[x0]:"fire-rtdb",[O0]:"fire-rtdb-compat",[M0]:"fire-fn",[L0]:"fire-fn-compat",[$0]:"fire-iid",[F0]:"fire-iid-compat",[U0]:"fire-fcm",[V0]:"fire-fcm-compat",[B0]:"fire-perf",[j0]:"fire-perf-compat",[q0]:"fire-rc",[H0]:"fire-rc-compat",[z0]:"fire-gcs",[K0]:"fire-gcs-compat",[W0]:"fire-fst",[G0]:"fire-fst-compat","fire-js":"fire-js",[Q0]:"fire-js-all"};/**
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
 */const Oo=new Map,Qc=new Map;function J0(t,e){try{t.container.addComponent(e)}catch(n){ys.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xs(t){const e=t.name;if(Qc.has(e))return ys.debug(`There were multiple attempts to register component ${e}.`),!1;Qc.set(e,t);for(const n of Oo.values())J0(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Z0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new Ii("app","Firebase",Z0);/**
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
 */class eE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=Y0;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Un.create("bad-app-name",{appName:String(r)});if(n||(n=qw()),!n)throw Un.create("no-options");const i=Oo.get(r);if(i){if(xo(n,i.options)&&xo(s,i.config))return i;throw Un.create("duplicate-app",{appName:r})}const o=new c0(r);for(const c of Qc.values())o.addComponent(c);const a=new eE(n,s,o);return Oo.set(r,a),a}function Fp(t=Gc){const e=Oo.get(t);if(!e&&t===Gc)return $p();if(!e)throw Un.create("no-app",{appName:t});return e}function Vn(t,e,n){var s;let r=(s=X0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ys.warn(a.join(" "));return}Xs(new vs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tE="firebase-heartbeat-database",nE=1,ai="firebase-heartbeat-store";let uc=null;function Up(){return uc||(uc=E0(tE,nE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ai)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),uc}async function sE(t){try{return(await Up()).transaction(ai).objectStore(ai).get(Vp(t))}catch(e){if(e instanceof In)ys.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ys.warn(n.message)}}}async function Qh(t,e){try{const s=(await Up()).transaction(ai,"readwrite");return await s.objectStore(ai).put(e,Vp(t)),s.done}catch(n){if(n instanceof In)ys.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ys.warn(s.message)}}}function Vp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rE=1024,iE=30*24*60*60*1e3;class oE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=iE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yh(),{heartbeatsToSend:n,unsentEntries:s}=aE(this._heartbeatsCache.heartbeats),r=Do(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yh(){return new Date().toISOString().substring(0,10)}function aE(t,e=rE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Xh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yw()?Xw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xh(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lE(t){Xs(new vs("platform-logger",e=>new T0(e),"PRIVATE")),Xs(new vs("heartbeat",e=>new oE(e),"PRIVATE")),Vn(Wc,Gh,t),Vn(Wc,Gh,"esm2017"),Vn("fire-js","")}lE("");var uE="firebase",hE="9.21.0";/**
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
 */Vn(uE,hE,"app");var dE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Jl=Jl||{},G=dE||self;function Mo(){}function ya(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ti(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fE(t){return Object.prototype.hasOwnProperty.call(t,hc)&&t[hc]||(t[hc]=++pE)}var hc="closure_uid_"+(1e9*Math.random()>>>0),pE=0;function gE(t,e,n){return t.call.apply(t.bind,arguments)}function mE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=gE:ot=mE,ot.apply(null,arguments)}function eo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Yn(){this.s=this.s,this.o=this.o}var vE=0;Yn.prototype.s=!1;Yn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),vE!=0)&&fE(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Jh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ya(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var yE=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Mo,e),G.removeEventListener("test",Mo,e)}catch{}return t}();function Lo(t){return/^[\s\xa0]*$/.test(t)}var Zh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dc(t,e){return t<e?-1:t>e?1:0}function _a(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Gt(t){return _a().indexOf(t)!=-1}function eu(t){return eu[" "](t),t}eu[" "]=Mo;function jp(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var _E=Gt("Opera"),Js=Gt("Trident")||Gt("MSIE"),qp=Gt("Edge"),Yc=qp||Js,Hp=Gt("Gecko")&&!(_a().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge"))&&!(Gt("Trident")||Gt("MSIE"))&&!Gt("Edge"),wE=_a().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge");function zp(){var t=G.document;return t?t.documentMode:void 0}var $o;e:{var fc="",pc=function(){var t=_a();if(Hp)return/rv:([^\);]+)(\)|;)/.exec(t);if(qp)return/Edge\/([\d\.]+)/.exec(t);if(Js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wE)return/WebKit\/(\S+)/.exec(t);if(_E)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pc&&(fc=pc?pc[1]:""),Js){var gc=zp();if(gc!=null&&gc>parseFloat(fc)){$o=String(gc);break e}}$o=fc}var EE={};function IE(){return jp(EE,9,function(){let t=0;const e=Zh(String($o)).split("."),n=Zh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=dc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||dc(r[2].length==0,i[2].length==0)||dc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Xc;if(G.document&&Js){var ed=zp();Xc=ed||parseInt($o,10)||void 0}else Xc=void 0;var bE=Xc;function ci(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hp){e:{try{eu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ci.$.h.call(this)}}Ge(ci,at);var TE={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ci="closure_listenable_"+(1e6*Math.random()|0),CE=0;function SE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++CE,this.fa=this.ia=!1}function wa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Kp(t){const e={};for(const n in t)e[n]=t[n];return e}const td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<td.length;i++)n=td[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ea(t){this.src=t,this.g={},this.h=0}Ea.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Zc(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SE(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Jc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Bp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),mc={};function Gp(t,e,n,s,r){if(s&&s.once)return Yp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gp(t,e[i],n,s,r);return null}return n=iu(n),t&&t[Ci]?t.O(e,n,Ti(s)?!!s.capture:!!s,r):Qp(t,e,n,!1,s,r)}function Qp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ti(r)?!!r.capture:!!r,a=ru(t);if(a||(t[nu]=a=new Ea(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=AE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)yE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Jp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AE(){function t(n){return e.call(t.src,t.listener,n)}const e=RE;return t}function Yp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yp(t,e[i],n,s,r);return null}return n=iu(n),t&&t[Ci]?t.P(e,n,Ti(s)?!!s.capture:!!s,r):Qp(t,e,n,!0,s,r)}function Xp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Xp(t,e[i],n,s,r);else s=Ti(s)?!!s.capture:!!s,n=iu(n),t&&t[Ci]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Zc(i,n,s,r),-1<n&&(wa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ru(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zc(e,n,s,r)),(n=-1<t?e[t]:null)&&su(n))}function su(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ci])Jc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Jp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ru(e))?(Jc(n,t),n.h==0&&(n.src=null,e[nu]=null)):wa(t)}}}function Jp(t){return t in mc?mc[t]:mc[t]="on"+t}function RE(t,e){if(t.fa)t=!0;else{e=new ci(e,this);var n=t.listener,s=t.la||t.src;t.ia&&su(t),t=n.call(s,e)}return t}function ru(t){return t=t[nu],t instanceof Ea?t:null}var vc="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(t){return typeof t=="function"?t:(t[vc]||(t[vc]=function(e){return t.handleEvent(e)}),t[vc])}function We(){Yn.call(this),this.i=new Ea(this),this.S=this,this.J=null}Ge(We,Yn);We.prototype[Ci]=!0;We.prototype.removeEventListener=function(t,e,n,s){Xp(this,t,e,n,s)};function Ze(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(s,t),Wp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=to(o,s,!0,e)&&r}if(o=e.g=t,r=to(o,s,!0,e)&&r,r=to(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=to(o,s,!1,e)&&r}We.prototype.N=function(){if(We.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)wa(n[s]);delete t.g[e],t.h--}}this.J=null};We.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};We.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function to(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Jc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ou=G.JSON.stringify;function kE(){var t=tg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PE{constructor(){this.h=this.g=null}add(e,n){const s=Zp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new NE,t=>t.reset());class NE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DE(t){G.setTimeout(()=>{throw t},0)}function eg(t,e){el||xE(),tl||(el(),tl=!0),tg.add(t,e)}var el;function xE(){var t=G.Promise.resolve(void 0);el=function(){t.then(OE)}}var tl=!1,tg=new PE;function OE(){for(var t;t=kE();){try{t.h.call(t.g)}catch(n){DE(n)}var e=Zp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tl=!1}function Ia(t,e){We.call(this),this.h=t||1,this.g=e||G,this.j=ot(this.qb,this),this.l=Date.now()}Ge(Ia,We);M=Ia.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(au(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function au(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Ia.$.N.call(this),au(this),delete this.g};function cu(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function ng(t){t.g=cu(()=>{t.g=null,t.i&&(t.i=!1,ng(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ME extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ng(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(t){Yn.call(this),this.h=t,this.g={}}Ge(li,Yn);var nd=[];function sg(t,e,n,s){Array.isArray(n)||(n&&(nd[0]=n.toString()),n=nd);for(var r=0;r<n.length;r++){var i=Gp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rg(t){tu(t.g,function(e,n){this.g.hasOwnProperty(n)&&su(e)},t),t.g={}}li.prototype.N=function(){li.$.N.call(this),rg(this)};li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ba(){this.g=!0}ba.prototype.Ea=function(){this.g=!1};function LE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function $E(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function $s(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UE(t,n)+(s?" "+s:"")})}function FE(t,e){t.info(function(){return"TIMEOUT: "+e})}ba.prototype.info=function(){};function UE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ou(n)}catch{return e}}var Ts={},sd=null;function Ta(){return sd=sd||new We}Ts.Ta="serverreachability";function ig(t){at.call(this,Ts.Ta,t)}Ge(ig,at);function ui(t){const e=Ta();Ze(e,new ig(e))}Ts.STAT_EVENT="statevent";function og(t,e){at.call(this,Ts.STAT_EVENT,t),this.stat=e}Ge(og,at);function pt(t){const e=Ta();Ze(e,new og(e,t))}Ts.Ua="timingevent";function ag(t,e){at.call(this,Ts.Ua,t),this.size=e}Ge(ag,at);function Si(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Ca={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lu(){}lu.prototype.h=null;function rd(t){return t.h||(t.h=t.i())}function lg(){}var Ai={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function uu(){at.call(this,"d")}Ge(uu,at);function hu(){at.call(this,"c")}Ge(hu,at);var nl;function Sa(){}Ge(Sa,lu);Sa.prototype.g=function(){return new XMLHttpRequest};Sa.prototype.i=function(){return{}};nl=new Sa;function Ri(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new li(this),this.P=VE,t=Yc?125:void 0,this.V=new Ia(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ug}function ug(){this.i=null,this.g="",this.h=!1}var VE=45e3,sl={},Fo={};M=Ri.prototype;M.setTimeout=function(t){this.P=t};function rl(t,e,n){t.L=1,t.v=Ra(pn(e)),t.s=n,t.S=!0,hg(t,null)}function hg(t,e){t.G=Date.now(),ki(t),t.A=pn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),_g(n.i,"t",s),t.C=0,n=t.l.I,t.h=new ug,t.g=Vg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ME(ot(t.Pa,t,t.g),t.O)),sg(t.U,t.g,"readystatechange",t.nb),e=t.I?Kp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ui(),LE(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&ln(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Yc||this.g&&(this.h.h||this.g.ja()||cd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ui(3):ui(2)),Aa(this);var n=this.g.da();this.aa=n;t:if(dg(this)){var s=cd(this.g);t="";var r=s.length,i=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),Kr(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,$E(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lo(a)){var l=a;break t}}l=null}if(n=l)$s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,il(this,n);else{this.i=!1,this.o=3,pt(12),us(this),Kr(this);break e}}this.S?(fg(this,u,o),Yc&&this.i&&u==3&&(sg(this.U,this.V,"tick",this.mb),this.V.start())):($s(this.j,this.m,o,null),il(this,o)),u==4&&us(this),this.i&&!this.J&&(u==4?Lg(this.l,this):(this.i=!1,ki(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),us(this),Kr(this)}}}catch{}finally{}};function dg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function fg(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=BE(t,n),r==Fo){e==4&&(t.o=4,pt(14),s=!1),$s(t.j,t.m,null,"[Incomplete Response]");break}else if(r==sl){t.o=4,pt(15),$s(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else $s(t.j,t.m,r,null),il(t,r);dg(t)&&r!=Fo&&r!=sl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yu(e),e.L=!0,pt(11))):($s(t.j,t.m,n,"[Invalid Chunked Response]"),us(t),Kr(t))}M.mb=function(){if(this.g){var t=ln(this.g),e=this.g.ja();this.C<e.length&&(Aa(this),fg(this,t,e),this.i&&t!=4&&ki(this))}};function BE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fo:(n=Number(e.substring(n,s)),isNaN(n)?sl:(s+=1,s+n>e.length?Fo:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,us(this)};function ki(t){t.Y=Date.now()+t.P,pg(t,t.P)}function pg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Si(ot(t.lb,t),e)}function Aa(t){t.B&&(G.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FE(this.j,this.A),this.L!=2&&(ui(),pt(17)),us(this),this.o=2,Kr(this)):pg(this,this.Y-t)};function Kr(t){t.l.H==0||t.J||Lg(t.l,t)}function us(t){Aa(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,au(t.V),rg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function il(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ol(n.h,t))){if(!t.K&&ol(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Bo(n),Na(n);else break e;vu(n),pt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Si(ot(n.ib,n),6e3));if(1>=Ig(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else hs(n,11)}else if((t.K||n.g==t)&&Bo(n),!Lo(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(du(i,i.h),i.h=null))}if(s.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,Re(s.G,s.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Ug(s,s.I?s.oa:null,s.Y),o.K){bg(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Aa(a),ki(a)),s.g=o}else Og(s);0<n.i.length&&Da(n)}else l[0]!="stop"&&l[0]!="close"||hs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hs(n,7):mu(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}ui(4)}catch{}}function jE(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ya(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function qE(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ya(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ya(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qE(t),s=jE(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gs){this.h=e!==void 0?e:t.h,Uo(this,t.j),this.s=t.s,this.g=t.g,Vo(this,t.m),this.l=t.l,e=t.i;var n=new hi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),id(this,n),this.o=t.o}else t&&(n=String(t).match(mg))?(this.h=!!e,Uo(this,n[1]||"",!0),this.s=$r(n[2]||""),this.g=$r(n[3]||"",!0),Vo(this,n[4]),this.l=$r(n[5]||"",!0),id(this,n[6]||"",!0),this.o=$r(n[7]||"")):(this.h=!!e,this.i=new hi(null,this.h))}gs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fr(e,od,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fr(e,od,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fr(n,n.charAt(0)=="/"?WE:KE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fr(n,QE)),t.join("")};function pn(t){return new gs(t)}function Uo(t,e,n){t.j=n?$r(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function id(t,e,n){e instanceof hi?(t.i=e,YE(t.i,t.h)):(n||(e=Fr(e,GE)),t.i=new hi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ra(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $r(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var od=/[#\/\?@]/g,KE=/[#\?:]/g,WE=/[#\?]/g,GE=/[#\?@]/g,QE=/#/g;function hi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&HE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=hi.prototype;M.add=function(t,e){Xn(this),this.i=null,t=gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vg(t,e){Xn(t),e=gr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function yg(t,e){return Xn(t),e=gr(t,e),t.g.has(e)}M.forEach=function(t,e){Xn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.sa=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.Z=function(t){Xn(this);let e=[];if(typeof t=="string")yg(this,t)&&(e=e.concat(this.g.get(gr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Xn(this),this.i=null,t=gr(this,t),yg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function _g(t,e,n){vg(t,e),0<n.length&&(t.i=null,t.g.set(gr(t,e),Zl(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function YE(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vg(this,s),_g(this,r,n))},t)),t.j=e}var XE=class{constructor(t,e){this.h=t,this.g=e}};function wg(t){this.l=t||JE,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JE=10;function Eg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ig(t){return t.h?1:t.g?t.g.size:0}function ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function du(t,e){t.g?t.g.add(e):t.h=e}function bg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wg.prototype.cancel=function(){if(this.i=Tg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zl(t.i)}function fu(){}fu.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};fu.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function ZE(){this.g=new fu}function eI(t,e,n){const s=n||"";try{gg(t,function(r,i){let o=r;Ti(r)&&(o=ou(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function tI(t,e){const n=new ba;if(G.Image){const s=new Image;s.onload=eo(no,n,s,"TestLoadImage: loaded",!0,e),s.onerror=eo(no,n,s,"TestLoadImage: error",!1,e),s.onabort=eo(no,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=eo(no,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function no(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Pi(t){this.l=t.fc||null,this.j=t.ob||!1}Ge(Pi,lu);Pi.prototype.g=function(){return new ka(this.l,this.j)};Pi.prototype.i=function(t){return function(){return t}}({});function ka(t,e){We.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(ka,We);var pu=0;M=ka.prototype;M.open=function(t,e){if(this.readyState!=pu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=pu};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Cg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ni(this):di(this),this.readyState==3&&Cg(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Ni(this))};M.Ya=function(t){this.g&&(this.response=t,Ni(this))};M.ka=function(){this.g&&Ni(this)};function Ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nI=G.JSON.parse;function xe(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Sg,this.L=this.M=!1}Ge(xe,We);var Sg="",sI=/^https?$/i,rI=["POST","PUT"];M=xe.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nl.g(),this.C=this.u?rd(this.u):rd(nl),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ad(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=G.FormData&&t instanceof G.FormData,!(0<=Bp(rI,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kg(this),0<this.B&&((this.L=iI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=cu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ad(this,i)}};function iI(t){return Js&&IE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Jl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function ad(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ag(t),Pa(t)}function Ag(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),Pa(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pa(this,!0)),xe.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?Rg(this):this.kb())};M.kb=function(){Rg(this)};function Rg(t){if(t.h&&typeof Jl<"u"&&(!t.C[1]||ln(t)!=4||t.da()!=2)){if(t.v&&ln(t)==4)cu(t.La,0,t);else if(Ze(t,"readystatechange"),ln(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(mg)[1]||null;if(!r&&G.self&&G.self.location){var i=G.self.location.protocol;r=i.substr(0,i.length-1)}s=!sI.test(r?r.toLowerCase():"")}n=s}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<ln(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Ag(t)}}finally{Pa(t)}}}}function Pa(t,e){if(t.g){kg(t);const n=t.g,s=t.C[0]?Mo:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function kg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function ln(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nI(e)}};function cd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Sg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pg(t){let e="";return tu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Pg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ng(t){this.Ga=0,this.i=[],this.j=new ba,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Nr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Nr("baseRetryDelayMs",5e3,t),this.hb=Nr("retryDelaySeedMs",1e4,t),this.eb=Nr("forwardChannelMaxRetries",2,t),this.xa=Nr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new wg(t&&t.concurrentRequestLimit),this.Ja=new ZE,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}M=Ng.prototype;M.qa=8;M.H=1;function mu(t){if(Dg(t),t.H==3){var e=t.W++,n=pn(t.G);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),Di(t,n),e=new Ri(t,t.j,e,void 0),e.L=2,e.v=Ra(pn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ki(e)}Fg(t)}function Na(t){t.g&&(yu(t),t.g.cancel(),t.g=null)}function Dg(t){Na(t),t.u&&(G.clearTimeout(t.u),t.u=null),Bo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Da(t){Eg(t.h)||t.m||(t.m=!0,eg(t.Na,t),t.C=0)}function oI(t,e){return Ig(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Si(ot(t.Na,t,e),$g(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ri(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Kp(i),Wp(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xg(this,r,e),n=pn(this.G),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Di(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Pg(i)))+"&"+e:this.o&&gu(n,this.o,i)),du(this.h,r),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),r.ba=!0,rl(r,n,null)):rl(r,n,e),this.H=2}}else this.H==3&&(t?ld(this,t):this.i.length==0||Eg(this.h)||ld(this))};function ld(t,e){var n;e?n=e.m:n=t.W++;const s=pn(t.G);Re(s,"SID",t.J),Re(s,"RID",n),Re(s,"AID",t.V),Di(t,s),t.o&&t.s&&gu(s,t.o,t.s),n=new Ri(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=xg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),du(t.h,n),rl(n,s,e)}function Di(t,e){t.ma&&tu(t.ma,function(n,s){Re(e,s,n)}),t.l&&gg({},function(n,s){Re(e,s,n)})}function xg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ot(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{eI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Og(t){t.g||t.u||(t.ba=1,eg(t.Ma,t),t.A=0)}function vu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Si(ot(t.Ma,t),$g(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Mg(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Si(ot(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,pt(10),Na(this),Mg(this))};function yu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new Ri(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=pn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.M?"0":"1"),Re(e,"AID",t.V),Re(e,"TYPE","xmlhttp"),Di(t,e),t.o&&t.s&&gu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ra(pn(e)),n.s=null,n.S=!0,hg(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Na(this),vu(this),pt(19))};function Bo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Lg(t,e){var n=null;if(t.g==e){Bo(t),yu(t),t.g=null;var s=2}else if(ol(t.h,e))n=e.F,bg(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ta(),Ze(s,new ag(s,n)),Da(t)}else Og(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&oI(t,e)||s==2&&vu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:hs(t,5);break;case 4:hs(t,10);break;case 3:hs(t,6);break;default:hs(t,2)}}}function $g(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function hs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ot(t.pb,t);n||(n=new gs("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Uo(n,"https"),Ra(n)),tI(n.toString(),s)}else pt(2);t.H=0,t.l&&t.l.za(e),Fg(t),Dg(t)}M.pb=function(t){t?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Fg(t){if(t.H=0,t.pa=[],t.l){const e=Tg(t.h);(e.length!=0||t.i.length!=0)&&(Jh(t.pa,e),Jh(t.pa,t.i),t.h.i.length=0,Zl(t.i),t.i.length=0),t.l.ya()}}function Ug(t,e,n){var s=n instanceof gs?pn(n):new gs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Vo(s,s.m);else{var r=G.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new gs(null,void 0);s&&Uo(i,s),e&&(i.g=e),r&&Vo(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Re(s,n,e),Re(s,"VER",t.qa),Di(t,s),s}function Vg(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new Pi({ob:!0})):new xe(t.va),e.Oa(t.I),e}function Bg(){}M=Bg.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.Va=function(){};function jo(){if(Js&&!(10<=Number(bE)))throw Error("Environmental error: no available transport.")}jo.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){We.call(this),this.g=new Ng(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mr(this)}Ge(Rt,We);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Ug(t,null,t.Y),Da(t)};Rt.prototype.close=function(){mu(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ou(t),t=n);e.i.push(new XE(e.fb++,t)),e.H==3&&Da(e)};Rt.prototype.N=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,Rt.$.N.call(this)};function jg(t){uu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(jg,uu);function qg(){hu.call(this),this.status=1}Ge(qg,hu);function mr(t){this.g=t}Ge(mr,Bg);mr.prototype.Ba=function(){Ze(this.g,"a")};mr.prototype.Aa=function(t){Ze(this.g,new jg(t))};mr.prototype.za=function(t){Ze(this.g,new qg)};mr.prototype.ya=function(){Ze(this.g,"b")};function aI(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ge($t,aI);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function yc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}$t.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)yc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){yc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){yc(this,s),r=0;break}}this.h=r,this.i+=e};$t.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function me(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var cI={};function _u(t){return-128<=t&&128>t?jp(cI,t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return Bs;if(0>t)return Xe(Qt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=al;return new me(e,0)}function Hg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(Hg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),s=Bs,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Qt(Math.pow(e,i)),s=s.R(i).add(Qt(o))):(s=s.R(n),s=s.add(Qt(o)))}return s}var al=4294967296,Bs=_u(0),cl=_u(1),ud=_u(16777216);M=me.prototype;M.ea=function(){if(kt(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:al+s)*e,e*=al}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(un(this))return"0";if(kt(this))return"-"+Xe(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,s="";;){var r=Ho(n,e).g;n=qo(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,un(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}M.X=function(t){return t=qo(this,t),kt(t)?-1:un(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new me(n,~t.h).add(cl)}M.abs=function(){return kt(this)?Xe(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function qo(t,e){return t.add(Xe(e))}M.R=function(t){if(un(this)||un(t))return Bs;if(kt(this))return kt(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(kt(t))return Xe(this.R(Xe(t)));if(0>this.X(ud)&&0>t.X(ud))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,so(n,2*s+2*r),n[2*s+2*r+1]+=i*c,so(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,so(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,so(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new me(n,0)};function so(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Dr(t,e){this.g=t,this.h=e}function Ho(t,e){if(un(e))throw Error("division by zero");if(un(t))return new Dr(Bs,Bs);if(kt(t))return e=Ho(Xe(t),e),new Dr(Xe(e.g),Xe(e.h));if(kt(e))return e=Ho(t,Xe(e)),new Dr(Xe(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=cl,s=e;0>=s.X(t);)n=hd(n),s=hd(s);var r=Ns(n,1),i=Ns(s,1);for(s=Ns(s,2),n=Ns(n,2);!un(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ns(s,1),n=Ns(n,1)}return e=qo(t,r.R(e)),new Dr(r,e)}for(r=Bs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Qt(n),o=i.R(e);kt(o)||0<o.X(t);)n-=s,i=Qt(n),o=i.R(e);un(i)&&(i=cl),r=r.add(i),t=qo(t,o)}return new Dr(r,t)}M.gb=function(t){return Ho(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new me(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new me(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new me(n,this.h^t.h)};function hd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new me(n,t.h)}function Ns(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(r,t.h)}jo.prototype.createWebChannel=jo.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Ca.NO_ERROR=0;Ca.TIMEOUT=8;Ca.HTTP_ERROR=6;cg.COMPLETE="complete";lg.EventType=Ai;Ai.OPEN="a";Ai.CLOSE="b";Ai.ERROR="c";Ai.MESSAGE="d";We.prototype.listen=We.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Qt;me.fromString=Hg;var lI=function(){return new jo},uI=function(){return Ta()},_c=Ca,hI=cg,dI=Ts,dd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fI=Pi,ro=lg,pI=xe,gI=$t,js=me;const fd="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let vr="9.21.0";/**
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
 */const _s=new Ql("@firebase/firestore");function pd(){return _s.logLevel}function V(t,...e){if(_s.logLevel<=he.DEBUG){const n=e.map(wu);_s.debug(`Firestore (${vr}): ${t}`,...n)}}function gn(t,...e){if(_s.logLevel<=he.ERROR){const n=e.map(wu);_s.error(`Firestore (${vr}): ${t}`,...n)}}function Zs(t,...e){if(_s.logLevel<=he.WARN){const n=e.map(wu);_s.warn(`Firestore (${vr}): ${t}`,...n)}}function wu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function Ae(t,e){t||W()}function Z(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class vI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yI{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new zg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new nt(e)}}class _I{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new _I(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class II{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.T=n.token,new EI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Kg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=bI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function fe(t,e){return t<e?-1:t>e?1:0}function er(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new He(0,0))}static max(){return new X(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fi{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends fi{construct(e,n,s){return new Ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const TI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends fi{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return TI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ce.fromString(e))}static fromName(e){return new B(Ce.fromString(e).popFirst(5))}static empty(){return new B(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ce(e.slice()))}}function CI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new Hn(r,B.empty(),e)}function SI(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Hn(X.min(),B.empty(),-1)}static max(){return new Hn(X.max(),B.empty(),-1)}}function AI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const RI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==RI)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Oi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Eu.ct=-1;function xa(t){return t==null}function zo(t){return t===0&&1/t==-1/0}function PI(t){return typeof t=="number"&&Number.isInteger(t)&&!zo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=r??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ye(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new At([])}unionWith(e){let n=new ct(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Gg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Gg("Invalid base64 string: "+r):r}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const NI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=NI.exec(t);if(Ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function Iu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bu(t){const e=t.mapValue.fields.__previous_value__;return Iu(e)?bu(e):e}function pi(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class DI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const oo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Iu(t)?4:xI(t)?9007199254740991:10:W()}function en(t,e){if(t===e)return!0;const n=Es(t);if(n!==Es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=zn(s.timestampValue),o=zn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ws(s.bytesValue).isEqual(ws(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return je(s.geoPointValue.latitude)===je(r.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return je(s.integerValue)===je(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=je(s.doubleValue),o=je(r.doubleValue);return i===o?zo(i)===zo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return er(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(gd(i)!==gd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!en(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function mi(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function tr(t,e){if(t===e)return 0;const n=Es(t),s=Es(e);if(n!==s)return fe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=je(r.integerValue||r.doubleValue),a=je(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vd(t.timestampValue,e.timestampValue);case 4:return vd(pi(t),pi(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ws(r),a=ws(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=fe(o[c],a[c]);if(l!==0)return l}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=fe(je(r.latitude),je(i.latitude));return o!==0?o:fe(je(r.longitude),je(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=tr(o[c],a[c]);if(l)return l}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===oo.mapValue&&i===oo.mapValue)return 0;if(r===oo.mapValue)return 1;if(i===oo.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=fe(a[u],l[u]);if(h!==0)return h;const d=tr(o[a[u]],c[l[u]]);if(d!==0)return d}return fe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function vd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=zn(t),s=zn(e),r=fe(n.seconds,s.seconds);return r!==0?r:fe(n.nanos,s.nanos)}function nr(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=zn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ws(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ll(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ll(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function yd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ul(t){return!!t&&"integerValue"in t}function Tu(t){return!!t&&"arrayValue"in t}function _d(t){return!!t&&"nullValue"in t}function wd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _o(t){return!!t&&"mapValue"in t}function Wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Wr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!_o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Wr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());_o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];_o(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Cs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new wt(Wr(this.value))}}function Qg(t){const e=[];return Cs(t.fields,(n,s)=>{const r=new it([n]);if(_o(s)){const i=Qg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new At(e)}/**
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
 */class st{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,X.min(),X.min(),X.min(),wt.empty(),0)}static newFoundDocument(e,n,s,r){return new st(e,1,n,X.min(),s,r,0)}static newNoDocument(e,n){return new st(e,2,n,X.min(),X.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,X.min(),X.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=tr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Id(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gr{constructor(e,n="asc"){this.field=e,this.dir=n}}function OI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yg{}class qe extends Yg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new LI(e,n,s):n==="array-contains"?new UI(e,s):n==="in"?new VI(e,s):n==="not-in"?new BI(e,s):n==="array-contains-any"?new jI(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new $I(e,s):new FI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(tr(n,this.value)):n!==null&&Es(this.value)===Es(n)&&this.matchesComparison(tr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ft extends Yg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ft(e,n)}matches(e){return Xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xg(t){return t.op==="and"}function Jg(t){return MI(t)&&Xg(t)}function MI(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function hl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+nr(t.value);if(Jg(t))return t.filters.map(e=>hl(e)).join(",");{const e=t.filters.map(n=>hl(n)).join(",");return`${t.op}(${e})`}}function Zg(t,e){return t instanceof qe?function(n,s){return s instanceof qe&&n.op===s.op&&n.field.isEqual(s.field)&&en(n.value,s.value)}(t,e):t instanceof Ft?function(n,s){return s instanceof Ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Zg(i,s.filters[o]),!0):!1}(t,e):void W()}function em(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${nr(e.value)}`}(t):t instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(em).join(" ,")+"}"}(t):"Filter"}class LI extends qe{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class $I extends qe{constructor(e,n){super(e,"in",n),this.keys=tm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FI extends qe{constructor(e,n){super(e,"not-in",n),this.keys=tm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class UI extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tu(n)&&mi(n.arrayValue,this.value)}}class VI extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mi(this.value.arrayValue,n)}}class BI extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mi(this.value.arrayValue,n)}}class jI extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>mi(this.value.arrayValue,s))}}/**
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
 */class qI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function bd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new qI(t,e,n,s,r,i,o)}function Cu(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>hl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),e.ft=n}return e.ft}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Id(t.startAt,e.startAt)&&Id(t.endAt,e.endAt)}function dl(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Mi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function HI(t,e,n,s,r,i,o,a){return new Mi(t,e,n,s,r,i,o,a)}function nm(t){return new Mi(t)}function Td(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Au(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rm(t){return t.collectionGroup!==null}function qs(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=Au(e),s=sm(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Gr(n)),e.dt.push(new Gr(it.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Gr(it.keyField(),i))}}}return e.dt}function mn(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=bd(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of qs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gr(i.field,o))}const s=e.endAt?new Ko(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ko(e.startAt.position,e.startAt.inclusive):null;e._t=bd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function fl(t,e){e.getFirstInequalityField(),Au(t);const n=t.filters.concat([e]);return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pl(t,e,n){return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oa(t,e){return Su(mn(t),mn(e))&&t.limitType===e.limitType}function im(t){return`${Cu(mn(t))}|lt:${t.limitType}`}function gl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>em(s)).join(", ")}]`),xa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),`Target(${n})`}(mn(t))}; limitType=${t.limitType})`}function Ma(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of qs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ed(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,qs(n),s)||n.endAt&&!function(r,i,o){const a=Ed(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,qs(n),s))}(t,e)}function zI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function om(t){return(e,n)=>{let s=!1;for(const r of qs(t)){const i=KI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function KI(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?tr(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
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
 */class yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Wg(this.inner)}size(){return this.innerSize}}/**
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
 */const WI=new De(B.comparator);function vn(){return WI}const am=new De(B.comparator);function Ur(...t){let e=am;for(const n of t)e=e.insert(n.key,n);return e}function cm(t){let e=am;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ds(){return Qr()}function lm(){return Qr()}function Qr(){return new yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const GI=new De(B.comparator),QI=new ct(B.comparator);function oe(...t){let e=QI;for(const n of t)e=e.add(n);return e}const YI=new ct(fe);function XI(){return YI}/**
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
 */function um(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function hm(t){return{integerValue:""+t}}function JI(t,e){return PI(e)?hm(e):um(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class La{constructor(){this._=void 0}}function ZI(t,e,n){return t instanceof Wo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Iu(r)&&(r=bu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof vi?fm(t,e):t instanceof yi?pm(t,e):function(s,r){const i=dm(s,r),o=Cd(i)+Cd(s.wt);return ul(i)&&ul(s.wt)?hm(o):um(s.serializer,o)}(t,e)}function eb(t,e,n){return t instanceof vi?fm(t,e):t instanceof yi?pm(t,e):n}function dm(t,e){return t instanceof Go?ul(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Wo extends La{}class vi extends La{constructor(e){super(),this.elements=e}}function fm(t,e){const n=gm(e);for(const s of t.elements)n.some(r=>en(r,s))||n.push(s);return{arrayValue:{values:n}}}class yi extends La{constructor(e){super(),this.elements=e}}function pm(t,e){let n=gm(e);for(const s of t.elements)n=n.filter(r=>!en(r,s));return{arrayValue:{values:n}}}class Go extends La{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Cd(t){return je(t.integerValue||t.doubleValue)}function gm(t){return Tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof vi&&s instanceof vi||n instanceof yi&&s instanceof yi?er(n.elements,s.elements,en):n instanceof Go&&s instanceof Go?en(n.wt,s.wt):n instanceof Wo&&s instanceof Wo}(t.transform,e.transform)}class nb{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $a{}function mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ru(t.key,Lt.none()):new Li(t.key,t.data,Lt.none());{const n=t.data,s=wt.empty();let r=new ct(it.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Jn(t.key,s,new At(r.toArray()),Lt.none())}}function sb(t,e,n){t instanceof Li?function(s,r,i){const o=s.value.clone(),a=Ad(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Jn?function(s,r,i){if(!wo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ad(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Yr(t,e,n,s){return t instanceof Li?function(r,i,o,a){if(!wo(r.precondition,i))return o;const c=r.value.clone(),l=Rd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Jn?function(r,i,o,a){if(!wo(r.precondition,i))return o;const c=Rd(r.fieldTransforms,a,i),l=i.data;return l.setAll(vm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return wo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function rb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=dm(s.transform,r||null);i!=null&&(n===null&&(n=wt.empty()),n.set(s.field,i))}return n||null}function Sd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&er(n,s,(r,i)=>tb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Li extends $a{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Jn extends $a{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ad(t,e,n){const s=new Map;Ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,eb(o,a,n[r]))}return s}function Rd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ZI(i,o,e))}return s}class Ru extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ib extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ob{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&sb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Yr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Yr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=mm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(n,s)=>Sd(n,s))&&er(this.baseMutations,e.baseMutations,(n,s)=>Sd(n,s))}}class ku{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ae(e.mutations.length===s.length);let r=GI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ku(e,n,s,r)}}/**
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
 */class ab{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class cb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,ae;function lb(t){switch(t){default:return W();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function ym(t){if(t===void 0)return gn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Be.OK:return I.OK;case Be.CANCELLED:return I.CANCELLED;case Be.UNKNOWN:return I.UNKNOWN;case Be.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Be.INTERNAL:return I.INTERNAL;case Be.UNAVAILABLE:return I.UNAVAILABLE;case Be.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Be.NOT_FOUND:return I.NOT_FOUND;case Be.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Be.ABORTED:return I.ABORTED;case Be.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Be.DATA_LOSS:return I.DATA_LOSS;default:return W()}}(ae=Be||(Be={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Pu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ao}static getOrCreateInstance(){return ao===null&&(ao=new Pu),ao}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ao=null;/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ub(){return new TextEncoder}/**
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
 */const hb=new js([4294967295,4294967295],0);function kd(t){const e=ub().encode(t),n=new gI;return n.update(e),new Uint8Array(n.digest())}function Pd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new js([n,s],0),new js([r,i],0)]}class Nu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Vr(`Invalid padding: ${n}`);if(s<0)throw new Vr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Vr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Vr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=js.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(js.fromNumber(s)));return r.compare(hb)===1&&(r=new js([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=kd(e),[s,r]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nu(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=kd(e),[s,r]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Fa(X.min(),r,new De(fe),vn(),oe())}}class $i{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new $i(s,n,oe(),oe(),oe())}}/**
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
 */class Eo{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class _m{constructor(e,n){this.targetId=e,this.bt=n}}class wm{constructor(e,n,s=ut.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Nd{constructor(){this.Vt=0,this.St=xd(),this.Dt=ut.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=oe(),n=oe(),s=oe();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new $i(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=xd()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class db{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=vn(),this.jt=Dd(),this.zt=new De(fe)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(dl(o))if(r===0){const a=new B(o.path);this.Jt(s,a,st.newNoDocument(a,X.min()))}else Ae(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=Pu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,g,v,_,A,C;const O={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(O.bloomFilter={applied:l===0,hashCount:(d=k==null?void 0:k.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(v=(g=k==null?void 0:k.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&_!==void 0?_:0,padding:(C=(A=k==null?void 0:k.bits)===null||A===void 0?void 0:A.padding)!==null&&C!==void 0?C:0}),O}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=ws(i).toUint8Array()}catch(u){if(u instanceof Gg)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Nu(c,o,a)}catch(u){return Zs(u instanceof Vr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&dl(a.target)){const c=new B(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,st.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=oe();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new Fa(e,n,this.zt,this.Qt,s);return this.Qt=vn(),this.jt=Dd(),this.zt=new De(fe),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Nd,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ct(fe),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Nd),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Dd(){return new De(B.comparator)}function xd(){return new De(B.comparator)}const fb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gb=(()=>({and:"AND",or:"OR"}))();class mb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ml(t,e){return t.useProto3Json||xa(e)?e:{value:e}}function Qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vb(t,e){return Qo(t,e.toTimestamp())}function Yt(t){return Ae(!!t),X.fromTimestamp(function(e){const n=zn(e);return new He(n.seconds,n.nanos)}(t))}function Du(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Im(t){const e=Ce.fromString(t);return Ae(Sm(e)),e}function vl(t,e){return Du(t.databaseId,e.path)}function wc(t,e){const n=Im(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(bm(n))}function yl(t,e){return Du(t.databaseId,e)}function yb(t){const e=Im(t);return e.length===4?Ce.emptyPath():bm(e)}function _l(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bm(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Od(t,e,n){return{name:vl(t,e),fields:n.value.mapValue.fields}}function _b(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ae(l===void 0||typeof l=="string"),ut.fromBase64String(l||"")):(Ae(l===void 0||l instanceof Uint8Array),ut.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:ym(c.code);return new F(l,c.message||"")}(o);n=new wm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wc(t,s.document.name),i=Yt(s.document.updateTime),o=s.document.createTime?Yt(s.document.createTime):X.min(),a=new wt({mapValue:{fields:s.document.fields}}),c=st.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Eo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wc(t,s.document),i=s.readTime?Yt(s.readTime):X.min(),o=st.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Eo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wc(t,s.document),i=s.removedTargetIds||[];n=new Eo([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new cb(r,i),a=s.targetId;n=new _m(a,o)}}return n}function wb(t,e){let n;if(e instanceof Li)n={update:Od(t,e.key,e.value)};else if(e instanceof Ru)n={delete:vl(t,e.key)};else if(e instanceof Jn)n={update:Od(t,e.key,e.data),updateMask:kb(e.fieldMask)};else{if(!(e instanceof ib))return W();n={verify:vl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Wo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Go)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:vb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function Eb(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Yt(s.updateTime):Yt(r);return i.isEqual(X.min())&&(i=Yt(r)),new nb(i,s.transformResults||[])}(n,e))):[]}function Ib(t,e){return{documents:[yl(t,e.path)]}}function bb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=yl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Cm(Ft.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Os(u.field),direction:Sb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ml(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Tb(t){let e=yb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Tm(u);return h instanceof Ft&&Jg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Gr(Ms(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,xa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ko(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ko(d,h)}(n.endAt)),HI(e,r,o,i,a,"F",c,l)}function Cb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ms(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ms(e.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ms(e.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ms(e.unaryFilter.field);return qe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(e){return qe.create(Ms(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(n=>Tm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(t):W()}function Sb(t){return fb[t]}function Ab(t){return pb[t]}function Rb(t){return gb[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ms(t){return it.fromServerFormat(t.fieldPath)}function Cm(t){return t instanceof qe?function(e){if(e.op==="=="){if(wd(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NAN"}};if(_d(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wd(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NAN"}};if(_d(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(e.field),op:Ab(e.op),value:e.value}}}(t):t instanceof Ft?function(e){const n=e.getFilters().map(s=>Cm(s));return n.length===1?n[0]:{compositeFilter:{op:Rb(e.op),filters:n}}}(t):W()}function kb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class On{constructor(e,n,s,r,i=X.min(),o=X.min(),a=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Pb{constructor(e){this.le=e}}function Nb(t){const e=Tb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pl(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.sn=new xb}addToCollectionParentIndex(e,n){return this.sn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Hn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class xb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ct(Ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ct(Ce.comparator)).toArray()}}/**
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
 */class sr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new sr(0)}static kn(){return new sr(-1)}}/**
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
 */class Ob{constructor(){this.changes=new yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Mb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Lb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Yr(s.mutation,r,At.empty(),He.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=oe()){const r=ds();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ur();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ds();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,oe()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=vn();const o=Qr(),a=Qr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Jn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Yr(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Mb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Qr();let r=new De((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||At.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||oe()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=lm();u.forEach(d=>{if(!i.has(d)){const g=mm(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(ds());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:cm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=Ur();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ur();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Mi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,st.newInvalidDocument(l)))});let o=Ur();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Yr(l.mutation,c,At.empty(),He.now()),Ma(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class $b{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return S.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:Yt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:Nb(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class Fb{constructor(){this.overlays=new De(B.comparator),this.hs=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ds();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=ds(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ds(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ds(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ab(n,s));let i=this.hs.get(n);i===void 0&&(i=oe(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
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
 */class xu{constructor(){this.ls=new ct(Ke.fs),this.ds=new ct(Ke._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new Ke(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new B(new Ce([])),s=new Ke(n,e),r=new Ke(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new B(new Ce([])),s=new Ke(n,e),r=new Ke(n,e+1);let i=oe();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return B.comparator(e.key,n.key)||fe(e.Es,n.Es)}static _s(e,n){return fe(e.Es,n.Es)||B.comparator(e.key,n.key)}}/**
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
 */class Ub{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ct(Ke.fs)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ob(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),r=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ct(fe);return n.forEach(r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),S.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new B(i),0);let a=new ct(fe);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),S.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ae(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return S.forEach(n.mutations,r=>{const i=new Ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new Ke(n,0),r=this.Rs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Vb{constructor(e){this.Ss=e,this.docs=new De(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let s=vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():st.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=vn();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||AI(SI(u),s)<=0||(r.has(u.key)||Ma(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){W()}Ds(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Bb(this)}getSize(e){return S.resolve(this.size)}}class Bb extends Ob{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class jb{constructor(e){this.persistence=e,this.Cs=new yr(n=>Cu(n),Su),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.xs=0,this.Ns=new xu,this.targetCount=0,this.ks=sr.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),S.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new sr(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.$n(n),S.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ns.containsKey(n))}}/**
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
 */class qb{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Eu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new jb(this),this.indexManager=new Db,this.remoteDocumentCache=function(s){return new Vb(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new Pb(n),this.Ls=new $b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Fb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new Ub(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new Hb(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return S.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class Hb extends kI{constructor(e){super(),this.currentSequenceNumber=e}}class Ou{constructor(e){this.persistence=e,this.Gs=new xu,this.Qs=null}static js(e){return new Ou(e)}get zs(){if(this.Qs)return this.Qs;throw W()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.zs,s=>{const r=B.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return S.or([()=>S.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Mu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=oe(),r=oe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mu(e,n.fromCache,s,r)}}/**
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
 */class zb{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(Td(n))return S.resolve(null);let s=mn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=pl(n,null,"F"),s=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=oe(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,pl(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return Td(n)||r.isEqual(X.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(pd()<=he.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),gl(n)),this.zi(e,o,n,CI(r,-1)))})}Qi(e,n){let s=new ct(om(e));return n.forEach((r,i)=>{Ma(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return pd()<=he.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",gl(n)),this.qi.getDocumentsMatchingQuery(e,n,Hn.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Kb{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new De(fe),this.Ji=new yr(i=>Cu(i),Su),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lb(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function Wb(t,e,n,s){return new Kb(t,e,n,s)}async function Am(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=oe();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function Gb(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(v=>{const _=c.docVersions.get(g);Ae(_!==null),v.version.compareTo(_)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=oe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Rm(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function Qb(t,e){const n=Z(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(ut.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(v,_,A){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,g,u)&&a.push(n.Fs.updateTargetData(i,g))});let c=vn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Yb(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(X.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function Yb(t,e,n){let s=oe(),r=oe();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function Xb(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Jb(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new On(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function wl(t,e,n){const s=Z(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Oi(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function Md(t,e,n){const s=Z(t);let r=X.min(),i=oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Ji.get(l);return h!==void 0?S.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,mn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:oe())).next(a=>(Zb(s,zI(e),a),{documents:a,sr:i})))}function Zb(t,e,n){let s=t.Yi.get(e)||X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class Ld{constructor(){this.activeTargetIds=XI()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class e1{constructor(){this.Wr=new Ld,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Ld,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class t1{Jr(e){}shutdown(){}}/**
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
 */class $d{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let co=null;function Ec(){return co===null?co=268435456+Math.round(2147483648*Math.random()):co++,"0x"+co.toString(16)}/**
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
 */const n1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class s1{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const tt="WebChannelConnection";class r1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=Ec(),a=this.Io(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Zs("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+vr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=n1[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=Ec();return new Promise((o,a)=>{const c=new pI;c.setWithCredentials(!0),c.listenOnce(hI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _c.NO_ERROR:const u=c.getResponseJson();V(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case _c.TIMEOUT:V(tt,`RPC '${e}' ${i} timed out`),a(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const h=c.getStatus();if(V(tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(_){const A=_.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(g.status);a(new F(v,g.message))}else a(new F(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(I.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{V(tt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);V(tt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Ec(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lI(),a=uI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new fI({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");V(tt,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new s1({io:_=>{d?V(tt,`Not sending because RPC '${e}' stream ${r} is closed:`,_):(h||(V(tt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),V(tt,`RPC '${e}' stream ${r} sending:`,_),u.send(_))},ro:()=>u.close()}),v=(_,A,C)=>{_.listen(A,O=>{try{C(O)}catch(k){setTimeout(()=>{throw k},0)}})};return v(u,ro.EventType.OPEN,()=>{d||V(tt,`RPC '${e}' stream ${r} transport opened.`)}),v(u,ro.EventType.CLOSE,()=>{d||(d=!0,V(tt,`RPC '${e}' stream ${r} transport closed`),g.fo())}),v(u,ro.EventType.ERROR,_=>{d||(d=!0,Zs(tt,`RPC '${e}' stream ${r} transport errored:`,_),g.fo(new F(I.UNAVAILABLE,"The operation could not be completed")))}),v(u,ro.EventType.MESSAGE,_=>{var A;if(!d){const C=_.data[0];Ae(!!C);const O=C,k=O.error||((A=O[0])===null||A===void 0?void 0:A.error);if(k){V(tt,`RPC '${e}' stream ${r} received error:`,k);const H=k.status;let J=function(z){const Q=Be[z];if(Q!==void 0)return ym(Q)}(H),ne=k.message;J===void 0&&(J=I.INTERNAL,ne="Unknown error status: "+H+" with message "+k.message),d=!0,g.fo(new F(J,ne)),u.close()}else V(tt,`RPC '${e}' stream ${r} received:`,C),g._o(C)}}),v(a,dI.STAT_EVENT,_=>{_.stat===dd.PROXY?V(tt,`RPC '${e}' stream ${r} detected buffering proxy`):_.stat===dd.NOPROXY&&V(tt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Ic(){return typeof document<"u"?document:null}/**
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
 */function Ua(t){return new mb(t,!0)}/**
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
 */class km{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class Pm{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new km(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new F(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i1 extends Pm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=_b(this.serializer,e),s=function(r){if(!("targetChange"in r))return X.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?Yt(i.readTime):X.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=_l(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=dl(a)?{documents:Ib(r,a)}:{query:bb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Em(r,i.resumeToken);const c=ml(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(X.min())>0){o.readTime=Qo(r,i.snapshotVersion.toTimestamp());const c=ml(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=Cb(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=_l(this.serializer),n.removeTarget=e,this.zo(n)}}class o1 extends Pm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=Eb(e.writeResults,e.commitTime),s=Yt(e.commitTime);return this.listener.uu(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=_l(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>wb(this.serializer,s))};this.zo(n)}}/**
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
 */class a1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(I.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class c1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(gn(n),this.wu=!1):V("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class l1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{Ss(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.Au.add(4),await Fi(c),c.Pu.set("Unknown"),c.Au.delete(4),await Va(c)}(this))})}),this.Pu=new c1(s,r)}}async function Va(t){if(Ss(t))for(const e of t.Ru)await e(!0)}async function Fi(t){for(const e of t.Ru)await e(!1)}function Nm(t,e){const n=Z(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Fu(n)?$u(n):_r(n).Uo()&&Lu(n,e))}function Dm(t,e){const n=Z(t),s=_r(n);n.Eu.delete(e),s.Uo()&&xm(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():Ss(n)&&n.Pu.set("Unknown"))}function Lu(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_r(t).nu(e)}function xm(t,e){t.bu.Lt(e),_r(t).su(e)}function $u(t){t.bu=new db({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),_r(t).start(),t.Pu.mu()}function Fu(t){return Ss(t)&&!_r(t).qo()&&t.Eu.size>0}function Ss(t){return Z(t).Au.size===0}function Om(t){t.bu=void 0}async function u1(t){t.Eu.forEach((e,n)=>{Lu(t,e)})}async function h1(t,e){Om(t),Fu(t)?(t.Pu.pu(e),$u(t)):t.Pu.set("Unknown")}async function d1(t,e,n){if(t.Pu.set("Online"),e instanceof wm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yo(t,s)}else if(e instanceof Eo?t.bu.Wt(e):e instanceof _m?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(X.min()))try{const s=await Rm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(ut.EMPTY_BYTE_STRING,l.snapshotVersion)),xm(r,a);const u=new On(l.target,a,c,l.sequenceNumber);Lu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await Yo(t,s)}}async function Yo(t,e,n){if(!Oi(e))throw e;t.Au.add(1),await Fi(t),t.Pu.set("Offline"),n||(n=()=>Rm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Va(t)})}function Mm(t,e){return e().catch(n=>Yo(t,n,e))}async function Ba(t){const e=Z(t),n=Kn(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;f1(e);)try{const r=await Xb(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,p1(e,r)}catch(r){await Yo(e,r)}Lm(e)&&$m(e)}function f1(t){return Ss(t)&&t.Tu.length<10}function p1(t,e){t.Tu.push(e);const n=Kn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Lm(t){return Ss(t)&&!Kn(t).qo()&&t.Tu.length>0}function $m(t){Kn(t).start()}async function g1(t){Kn(t).au()}async function m1(t){const e=Kn(t);for(const n of t.Tu)e.ou(n.mutations)}async function v1(t,e,n){const s=t.Tu.shift(),r=ku.from(s,e,n);await Mm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ba(t)}async function y1(t,e){e&&Kn(t).ru&&await async function(n,s){if(r=s.code,lb(r)&&r!==I.ABORTED){const i=n.Tu.shift();Kn(n).Go(),await Mm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ba(n)}var r}(t,e),Lm(t)&&$m(t)}async function Fd(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=Ss(n);n.Au.add(3),await Fi(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Va(n)}async function _1(t,e){const n=Z(t);e?(n.Au.delete(2),await Va(n)):e||(n.Au.add(2),await Fi(n),n.Pu.set("Unknown"))}function _r(t){return t.Vu||(t.Vu=function(e,n,s){const r=Z(e);return r.lu(),new i1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:u1.bind(null,t),co:h1.bind(null,t),eu:d1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Fu(t)?$u(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Om(t))})),t.Vu}function Kn(t){return t.Su||(t.Su=function(e,n,s){const r=Z(e);return r.lu(),new o1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:g1.bind(null,t),co:y1.bind(null,t),cu:m1.bind(null,t),uu:v1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Ba(t)):(await t.Su.stop(),t.Tu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Uu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Uu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vu(t,e){if(gn("AsyncQueue",`${e}: ${t}`),Oi(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=Ur(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Hs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ud{constructor(){this.Du=new De(B.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):W():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class rr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rr(e,n,Hs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class w1{constructor(){this.xu=void 0,this.listeners=[]}}class E1{constructor(){this.queries=new yr(e=>im(e),Oa),this.onlineState="Unknown",this.Nu=new Set}}async function I1(t,e){const n=Z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new w1),r)try{i.xu=await n.onListen(s)}catch(o){const a=Vu(o,`Initialization of query '${gl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Bu(n)}async function b1(t,e){const n=Z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function T1(t,e){const n=Z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&Bu(n)}function C1(t,e,n){const s=Z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Bu(t){t.Nu.forEach(e=>{e.next()})}class S1{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class Fm{constructor(e){this.key=e}}class Um{constructor(e){this.key=e}}class A1{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=oe(),this.mutatedKeys=oe(),this.Zu=om(e),this.tc=new Hs(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new Ud,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Ma(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?v!==_&&(s.track({type:3,doc:g}),A=!0):this.ic(d,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.Zu(g,c)>0||l&&this.Zu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),A=!0):d&&!g&&(s.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(g?(o=o.add(g),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(d)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new rr(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Ud,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=oe(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new Um(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new Fm(s))}),n}ac(e){this.Ju=e.sr,this.Xu=oe();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return rr.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class R1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class k1{constructor(e){this.key=e,this.lc=!1}}class P1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new yr(a=>im(a),Oa),this._c=new Map,this.wc=new Set,this.mc=new De(B.comparator),this.gc=new Map,this.yc=new xu,this.Ic={},this.Tc=new Map,this.Ec=sr.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function N1(t,e){const n=B1(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await Jb(n.localStore,mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await D1(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Nm(n.remoteStore,o)}return r}async function D1(t,e,n,s,r){t.Rc=(h,d,g)=>async function(v,_,A,C){let O=_.view.nc(A);O.ji&&(O=await Md(v.localStore,_.query,!1).then(({documents:J})=>_.view.nc(J,O)));const k=C&&C.targetChanges.get(_.targetId),H=_.view.applyChanges(O,v.isPrimaryClient,k);return Bd(v,_.targetId,H.uc),H.snapshot}(t,h,d,g);const i=await Md(t.localStore,e,!0),o=new A1(e,i.sr),a=o.nc(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Bd(t,n,l.uc);const u=new R1(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function x1(t,e){const n=Z(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Oa(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Dm(n.remoteStore,s.targetId),El(n,s.targetId)}).catch(xi)):(El(n,s.targetId),await wl(n.localStore,s.targetId,!0))}async function O1(t,e,n){const s=j1(t);try{const r=await function(i,o){const a=Z(i),c=He.now(),l=o.reduce((d,g)=>d.add(g.key),oe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=vn(),v=oe();return a.Xi.getEntries(d,l).next(_=>{g=_,g.forEach((A,C)=>{C.isValidDocument()||(v=v.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(_=>{u=_;const A=[];for(const C of o){const O=rb(C,u.get(C.key).overlayedDocument);O!=null&&A.push(new Jn(C.key,O,Qg(O.value.mapValue),Lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,A,o)}).next(_=>{h=_;const A=_.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,_.batchId,A)})}).then(()=>({batchId:h.batchId,changes:cm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new De(fe)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ui(s,r.changes),await Ba(s.remoteStore)}catch(r){const i=Vu(r,"Failed to persist write");n.reject(i)}}async function Vm(t,e){const n=Z(t);try{const s=await Qb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(Ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?Ae(o.lc):r.removedDocuments.size>0&&(Ae(o.lc),o.lc=!1))}),await Ui(n,s,e)}catch(s){await xi(s)}}function Vd(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&Bu(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function M1(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new De(B.comparator);o=o.insert(i,st.newNoDocument(i,X.min()));const a=oe().add(i),c=new Fa(X.min(),new Map,new De(fe),o,a);await Vm(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),ju(s)}else await wl(s.localStore,e,!1).then(()=>El(s,e,n)).catch(xi)}async function L1(t,e){const n=Z(t),s=e.batch.batchId;try{const r=await Gb(n.localStore,e);jm(n,s,null),Bm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ui(n,r)}catch(r){await xi(r)}}async function $1(t,e,n){const s=Z(t);try{const r=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);jm(s,e,n),Bm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ui(s,r)}catch(r){await xi(r)}}function Bm(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function jm(t,e,n){const s=Z(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function El(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||qm(t,s)})}function qm(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Dm(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),ju(t))}function Bd(t,e,n){for(const s of n)s instanceof Fm?(t.yc.addReference(s.key,e),F1(t,s)):s instanceof Um?(V("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||qm(t,s.key)):W()}function F1(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.wc.add(s),ju(t))}function ju(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new B(Ce.fromString(e)),s=t.Ec.next();t.gc.set(s,new k1(n)),t.mc=t.mc.insert(n,s),Nm(t.remoteStore,new On(mn(nm(n.path)),s,"TargetPurposeLimboResolution",Eu.ct))}}async function Ui(t,e,n){const s=Z(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Mu.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Oi(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Hi.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);l.Hi=l.Hi.insert(h,v)}}}(s.localStore,i))}async function U1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Am(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new F(I.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ui(n,s.tr)}}function V1(t,e){const n=Z(t),s=n.gc.get(e);if(s&&s.lc)return oe().add(s.key);{let r=oe();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function B1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=V1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=M1.bind(null,e),e.fc.eu=T1.bind(null,e.eventManager),e.fc.vc=C1.bind(null,e.eventManager),e}function j1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=L1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$1.bind(null,e),e}class jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ua(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Wb(this.persistence,new zb,e.initialUser,this.serializer)}createPersistence(e){return new qb(Ou.js,this.serializer)}createSharedClientState(e){return new e1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class q1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=U1.bind(null,this.syncEngine),await _1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new E1}createDatastore(e){const n=Ua(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new r1(r));var r;return function(i,o,a,c){return new a1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Vd(this.syncEngine,a,0),o=$d.D()?new $d:new t1,new l1(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new P1(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);V("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Fi(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class H1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class z1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=Kg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Am(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await W1(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Fd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fd(e.remoteStore,i)),t._onlineComponents=e}function K1(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function W1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!K1(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await bc(t,new jd)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await bc(t,new jd);return t._offlineComponents}async function Hm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await qd(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await qd(t,new q1))),t._onlineComponents}function G1(t){return Hm(t).then(e=>e.syncEngine)}async function Q1(t){const e=await Hm(t),n=e.eventManager;return n.onListen=N1.bind(null,e.syncEngine),n.onUnlisten=x1.bind(null,e.syncEngine),n}function Y1(t,e,n={}){const s=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new H1({next:h=>{i.enqueueAndForget(()=>b1(r,u)),h.fromCache&&a.source==="server"?c.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new S1(o,l,{includeMetadataChanges:!0,Uu:!0});return I1(r,u)}(await Q1(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Hd=new Map;/**
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
 */function zm(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function X1(t,e,n,s){if(e===!0&&s===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zd(t){if(!B.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kd(t){if(B.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ja(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ja(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class qa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mI;switch(n.type){case"firstParty":return new wI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hd.get(e);n&&(V("ComponentProvider","Removing Datastore"),Hd.delete(e),n.terminate())}(this),Promise.resolve()}}function J1(t,e,n,s={}){var r;const i=(t=Wn(t,qa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=nt.MOCK_USER;else{o=zw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(c)}t._authCredentials=new vI(new zg(o,a))}}/**
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
 */class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class wr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class jn extends wr{constructor(e,n,s){super(e,n,nm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new B(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function Z1(t,e,...n){if(t=ze(t),zm("collection","path",e),t instanceof qa){const s=Ce.fromString(e,...n);return Kd(s),new jn(t,null,s)}{if(!(t instanceof Et||t instanceof jn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return Kd(s),new jn(t.firestore,null,s)}}function Rn(t,e,...n){if(t=ze(t),arguments.length===1&&(e=Kg.A()),zm("doc","path",e),t instanceof qa){const s=Ce.fromString(e,...n);return zd(s),new Et(t,null,new B(s))}{if(!(t instanceof Et||t instanceof jn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return zd(s),new Et(t.firestore,t instanceof jn?t.converter:null,new B(s))}}/**
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
 */class eT{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new km(this,"async_queue_retry"),this.Yc=()=>{const n=Ic();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Bn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Oi(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw gn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=Uu.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&W()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Vi extends qa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new eT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wm(this),this._firestoreClient.terminate()}}function tT(t,e){const n=typeof t=="object"?t:Fp(),s=typeof t=="string"?t:e||"(default)",r=Xl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=jw("firestore");i&&J1(r,...i)}return r}function Km(t){return t._firestoreClient||Wm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wm(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new DI(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new z1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(ut.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ir(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qu{constructor(e){this._methodName=e}}/**
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
 */class Hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */const nT=/^__.*__$/;class sT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Li(e,this.data,n,this.fieldTransforms)}}class Gm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Jn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Qm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class zu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Xo(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Qm(this.ua)&&nT.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class rT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ua(e)}ga(e,n,s,r=!1){return new zu({ua:e,methodName:n,ma:s,path:it.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ku(t){const e=t._freezeSettings(),n=Ua(t._databaseId);return new rT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iT(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);Wu("Data must be an object, but it was:",o,s);const a=Ym(s,o);let c,l;if(i.merge)c=new At(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Il(e,h,n);if(!o.contains(d))throw new F(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Jm(u,d)||u.push(d)}c=new At(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new sT(new wt(a),c,l)}class za extends qu{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof za}}function oT(t,e,n,s){const r=t.ga(1,e,n);Wu("Data must be an object, but it was:",r,s);const i=[],o=wt.empty();Cs(s,(c,l)=>{const u=Gu(e,c,n);l=ze(l);const h=r.fa(u);if(l instanceof za)i.push(u);else{const d=Bi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new At(i);return new Gm(o,a,r.fieldTransforms)}function aT(t,e,n,s,r,i){const o=t.ga(1,e,n),a=[Il(e,s,n)],c=[r];if(i.length%2!=0)throw new F(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Il(e,i[d])),c.push(i[d+1]);const l=[],u=wt.empty();for(let d=a.length-1;d>=0;--d)if(!Jm(l,a[d])){const g=a[d];let v=c[d];v=ze(v);const _=o.fa(g);if(v instanceof za)l.push(g);else{const A=Bi(v,_);A!=null&&(l.push(g),u.set(g,A))}}const h=new At(l);return new Gm(u,h,o.fieldTransforms)}function cT(t,e,n,s=!1){return Bi(n,t.ga(s?4:3,e))}function Bi(t,e){if(Xm(t=ze(t)))return Wu("Unsupported field value:",e,t),Ym(t,e);if(t instanceof qu)return function(n,s){if(!Qm(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Bi(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return JI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=He.fromDate(n);return{timestampValue:Qo(s.serializer,r)}}if(n instanceof He){const r=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qo(s.serializer,r)}}if(n instanceof Hu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ir)return{bytesValue:Em(s.serializer,n._byteString)};if(n instanceof Et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Du(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ja(n)}`)}(t,e)}function Ym(t,e){const n={};return Wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(s,r)=>{const i=Bi(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Xm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Hu||t instanceof ir||t instanceof Et||t instanceof qu)}function Wu(t,e,n){if(!Xm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ja(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Il(t,e,n){if((e=ze(e))instanceof Ha)return e._internalPath;if(typeof e=="string")return Gu(t,e);throw Xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const lT=new RegExp("[~\\*/\\[\\]]");function Gu(t,e,n){if(e.search(lT)>=0)throw Xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ha(...e.split("."))._internalPath}catch{throw Xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(I.INVALID_ARGUMENT,a+t+c)}function Jm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Zm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uT extends Zm{data(){return super.data()}}function Qu(t,e){return typeof e=="string"?Gu(t,e):e instanceof Ha?e._internalPath:e._delegate._internalPath}/**
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
 */function hT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}class dT extends Yu{}function fT(t,e,...n){let s=[];e instanceof Yu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Xu).length,o=r.filter(a=>a instanceof Ka).length;if(i>1||i>0&&o>0)throw new F(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ka extends dT{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ka(e,n,s)}_apply(e){const n=this._parse(e);return ev(e._query,n),new wr(e.firestore,e.converter,fl(e._query,n))}_parse(e){const n=Ku(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Qd(u,l);const d=[];for(const g of u)d.push(Gd(a,r,g));h={arrayValue:{values:d}}}else h=Gd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Qd(u,l),h=cT(o,i,u,l==="in"||l==="not-in");return qe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function pT(t,e,n){const s=e,r=Qu("where",t);return Ka._create(r,s,n)}class Xu extends Yu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)ev(i,a),i=fl(i,a)}(e._query,n),new wr(e.firestore,e.converter,fl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gd(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new F(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rm(e)&&n.indexOf("/")!==-1)throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ce.fromString(n));if(!B.isDocumentKey(s))throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return yd(t,new B(s))}if(n instanceof Et)return yd(t,n._key);throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ja(n)}.`)}function Qd(t,e){if(!Array.isArray(t)||t.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ev(t,e){if(e.isInequality()){const s=Au(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=sm(t);i!==null&&gT(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function gT(t,e,n){if(!n.isEqual(e))throw new F(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class mT{convertValue(e,n="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Cs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Hu(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=zn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ce.fromString(e);Ae(Sm(s));const r=new gi(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||gn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yT extends Zm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Io extends yT{data(e={}){return super.data(e)}}class _T{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new lo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Io(this._firestore,this._userDataWriter,s.key,s,new lo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Io(s._firestore,s._userDataWriter,o.doc.key,o.doc,new lo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Io(s._firestore,s._userDataWriter,o.doc.key,o.doc,new lo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:wT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class ET extends mT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function IT(t){t=Wn(t,wr);const e=Wn(t.firestore,Vi),n=Km(e),s=new ET(e);return hT(t._query),Y1(n,t._query).then(r=>new _T(e,s,t,r))}function tv(t,e,n){t=Wn(t,Et);const s=Wn(t.firestore,Vi),r=vT(t.converter,e,n);return Ju(s,[iT(Ku(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Lt.none())])}function uo(t,e,n,...s){t=Wn(t,Et);const r=Wn(t.firestore,Vi),i=Ku(r);let o;return o=typeof(e=ze(e))=="string"||e instanceof Ha?aT(i,"updateDoc",t._key,e,n,s):oT(i,"updateDoc",t._key,e),Ju(r,[o.toMutation(t._key,Lt.exists(!0))])}function bT(t){return Ju(Wn(t.firestore,Vi),[new Ru(t._key,Lt.none())])}function Ju(t,e){return function(n,s){const r=new Bn;return n.asyncQueue.enqueueAndForget(async()=>O1(await G1(n),s,r)),r.promise}(Km(t),e)}(function(t,e=!0){(function(n){vr=n})(pr),Xs(new vs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Vi(new yI(n.getProvider("auth-internal")),new II(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Vn(fd,"3.11.0",t),Vn(fd,"3.11.0","esm2017")})();const TT={apiKey:"AIzaSyCs4ob0qjeLAxY1Nr-dIXiwXxnqkeyBGc8",authDomain:"cuyart-shop.firebaseapp.com",projectId:"cuyart-shop",storageBucket:"cuyart-shop.appspot.com",messagingSenderId:"906331708937",appId:"1:906331708937:web:bbf3a749bd30b61b5d22d8"},CT=$p(TT),cn=tT(CT);function ST(t){return typeof t=="object"&&t!==null}function Yd(t,e){return t=ST(t)?t:Object.create(null),new Proxy(t,{get(n,s,r){return s==="key"?Reflect.get(n,s,r):Reflect.get(n,s,r)||Reflect.get(e,s,r)}})}function AT(t,e){return e.reduce((n,s)=>n==null?void 0:n[s],t)}function RT(t,e,n){return e.slice(0,-1).reduce((s,r)=>/^(__proto__)$/.test(r)?{}:s[r]=s[r]||{},t)[e[e.length-1]]=n,t}function kT(t,e){return e.reduce((n,s)=>{const r=s.split(".");return RT(n,r,AT(t,r))},{})}function Xd(t,{storage:e,serializer:n,key:s,debug:r}){try{const i=e==null?void 0:e.getItem(s);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){r&&console.error(i)}}function Jd(t,{storage:e,serializer:n,key:s,paths:r,debug:i}){try{const o=Array.isArray(r)?kT(t,r):t;e.setItem(s,n.serialize(o))}catch(o){i&&console.error(o)}}function PT(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:r}=e;if(!s)return;const i=(Array.isArray(s)?s.map(o=>Yd(o,t)):[Yd(s,t)]).map(({storage:o=localStorage,beforeRestore:a=null,afterRestore:c=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:u=r.$id,paths:h=null,debug:d=!1})=>{var g;return{storage:o,beforeRestore:a,afterRestore:c,serializer:l,key:((g=t.key)!=null?g:v=>v)(u),paths:h,debug:d}});r.$persist=()=>{i.forEach(o=>{Jd(r.$state,o)})},r.$hydrate=({runHooks:o=!0}={})=>{i.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;o&&(c==null||c(e)),Xd(r,a),o&&(l==null||l(e))})},i.forEach(o=>{const{beforeRestore:a,afterRestore:c}=o;a==null||a(e),Xd(r,o),c==null||c(e),r.$subscribe((l,u)=>{Jd(u,o)},{detached:!0})})}}var NT=PT();const Oe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},DT={};function xT(t,e){const n=dp("RouterView");return _e(),fr(n)}const OT=Oe(DT,[["render",xT]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof window<"u";function MT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Tc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ut(r)?r.map(t):t(r)}return n}const Xr=()=>{},Ut=Array.isArray,LT=/\/$/,$T=t=>t.replace(LT,"");function Cc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=BT(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function FT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UT(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&or(e.matched[s],n.matched[r])&&nv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VT(t[n],e[n]))return!1;return!0}function VT(t,e){return Ut(t)?ef(t,e):Ut(e)?ef(e,t):t===e}function ef(t,e){return Ut(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function BT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var Jr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jr||(Jr={}));function jT(t){if(!t)if(Ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$T(t)}const qT=/^[^#]+#/;function HT(t,e){return t.replace(qT,"#")+e}function zT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function KT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=zT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tf(t,e){return(history.state?history.state.position-e:-1)+t}const bl=new Map;function WT(t,e){bl.set(t,e)}function GT(t){const e=bl.get(t);return bl.delete(t),e}let QT=()=>location.protocol+"//"+location.host;function sv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Zd(c,"")}return Zd(n,t)+s+r}function YT(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=sv(t,location),v=n.value,_=e.value;let A=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}A=_?d.position-_.position:0}else s(g);r.forEach(C=>{C(n.value,v,{delta:A,type:_i.pop,direction:A?A>0?Jr.forward:Jr.back:Jr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:Wa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function nf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Wa():null}}function XT(t){const{history:e,location:n}=window,s={value:sv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:QT()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ge({},e.state,nf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ge({},r.value,e.state,{forward:c,scroll:Wa()});i(u.current,u,!0);const h=ge({},nf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function JT(t){t=jT(t);const e=XT(t),n=YT(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:HT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ZT(t){return typeof t=="string"||t&&typeof t=="object"}function rv(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iv=Symbol("");var sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sf||(sf={}));function ar(t,e){return ge(new Error,{type:t,[iv]:!0},e)}function rn(t,e){return t instanceof Error&&iv in t&&(e==null||!!(t.type&e))}const rf="[^/]+?",eC={sensitive:!1,strict:!1,start:!0,end:!0},tC=/[.+*?^${}()[\]/\\]/g;function nC(t,e){const n=ge({},eC,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(tC,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:_,optional:A,regexp:C}=d;i.push({name:v,repeatable:_,optional:A});const O=C||rf;if(O!==rf){g+=10;try{new RegExp(`(${O})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${v}" (${O}): `+H.message)}}let k=_?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(k=A&&l.length<2?`(?:/${k})`:"/"+k),A&&(k+="?"),r+=k,g+=20,A&&(g+=-8),_&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:_,optional:A}=g,C=v in l?l[v]:"";if(Ut(C)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const O=Ut(C)?C.join("/"):C;if(!O)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function sC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=sC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(of(s))return 1;if(of(r))return-1}return r.length-s.length}function of(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iC={type:0,value:""},oC=/[a-zA-Z0-9_]/;function aC(t){if(!t)return[[]];if(t==="/")return[[iC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:oC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function cC(t,e,n){const s=nC(aC(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lC(t,e){const n=[],s=new Map;e=lf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,v=uC(u);v.aliasOf=d&&d.record;const _=lf(e,u),A=[v];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of k)A.push(ge({},v,{components:d?d.record.components:v.components,path:H,aliasOf:d?d.record:v}))}let C,O;for(const k of A){const{path:H}=k;if(h&&H[0]!=="/"){const J=h.record.path,ne=J[J.length-1]==="/"?"":"/";k.path=h.record.path+(H&&ne+H)}if(C=cC(k,h,_),d?d.alias.push(C):(O=O||C,O!==C&&O.alias.push(C),g&&u.name&&!cf(C)&&o(u.name)),v.children){const J=v.children;for(let ne=0;ne<J.length;ne++)i(J[ne],C,d&&d.children[ne])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return O?()=>{o(O)}:Xr}function o(u){if(rv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&rC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ov(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!cf(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},v,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ar(1,{location:u});_=d.record.name,g=ge(af(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&af(u.params,d.keys.map(O=>O.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(O=>O.re.test(v)),d&&(g=d.parse(v),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw ar(1,{location:u,currentLocation:h});_=d.record.name,g=ge({},h.params,u.params),v=d.stringify(g)}const A=[];let C=d;for(;C;)A.unshift(C.record),C=C.parent;return{name:_,path:v,params:g,matched:A,meta:dC(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function af(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function uC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function cf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dC(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function lf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ov(t,e){return e.children.some(n=>n===t||ov(t,n))}const av=/#/g,fC=/&/g,pC=/\//g,gC=/=/g,mC=/\?/g,cv=/\+/g,vC=/%5B/g,yC=/%5D/g,lv=/%5E/g,_C=/%60/g,uv=/%7B/g,wC=/%7C/g,hv=/%7D/g,EC=/%20/g;function Zu(t){return encodeURI(""+t).replace(wC,"|").replace(vC,"[").replace(yC,"]")}function IC(t){return Zu(t).replace(uv,"{").replace(hv,"}").replace(lv,"^")}function Tl(t){return Zu(t).replace(cv,"%2B").replace(EC,"+").replace(av,"%23").replace(fC,"%26").replace(_C,"`").replace(uv,"{").replace(hv,"}").replace(lv,"^")}function bC(t){return Tl(t).replace(gC,"%3D")}function TC(t){return Zu(t).replace(av,"%23").replace(mC,"%3F")}function CC(t){return t==null?"":TC(t).replace(pC,"%2F")}function Jo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cv," "),o=i.indexOf("="),a=Jo(o<0?i:i.slice(0,o)),c=o<0?null:Jo(i.slice(o+1));if(a in e){let l=e[a];Ut(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function uf(t){let e="";for(let n in t){const s=t[n];if(n=bC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(s)?s.map(i=>i&&Tl(i)):[s&&Tl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function AC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ut(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const RC=Symbol(""),hf=Symbol(""),Ga=Symbol(""),dv=Symbol(""),Cl=Symbol("");function xr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function kn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ar(4,{from:n,to:e})):h instanceof Error?a(h):ZT(h)?a(ar(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Sc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(kC(a)){const l=(a.__vccOpts||a)[e];l&&r.push(kn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=MT(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&kn(d,n,s,i,o)()}))}}return r}function kC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function df(t){const e=Mt(Ga),n=Mt(dv),s=Ct(()=>e.resolve(ft(t.to))),r=Ct(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(or.bind(null,u));if(d>-1)return d;const g=ff(c[l-2]);return l>1&&ff(u)===g&&h[h.length-1].path!==g?h.findIndex(or.bind(null,c[l-2])):d}),i=Ct(()=>r.value>-1&&xC(n.params,s.value.params)),o=Ct(()=>r.value>-1&&r.value===n.matched.length-1&&nv(n.params,s.value.params));function a(c={}){return DC(c)?e[ft(t.replace)?"replace":"push"](ft(t.to)).catch(Xr):Promise.resolve()}return{route:s,href:Ct(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const PC=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:df,setup(t,{slots:e}){const n=dr(df(t)),{options:s}=Mt(Ga),r=Ct(()=>({[pf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[pf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),NC=PC;function DC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xC(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ut(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ff(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pf=(t,e,n)=>t??e??n,OC=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Cl),r=Ct(()=>t.route||s.value),i=Mt(hf,0),o=Ct(()=>{let l=ft(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ct(()=>r.value.matched[o.value]);go(hf,Ct(()=>o.value+1)),go(RC,a),go(Cl,r);const c=Se();return jr(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!or(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return gf(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,A=Cp(d,ge({},v,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return gf(n.default,{Component:A,route:l})||A}}});function gf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const MC=OC;function LC(t){const e=lC(t.routes,t),n=t.parseQuery||SC,s=t.stringifyQuery||uf,r=t.history,i=xr(),o=xr(),a=xr(),c=zy(Tn);let l=Tn;Ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tc.bind(null,E=>""+E),h=Tc.bind(null,CC),d=Tc.bind(null,Jo);function g(E,L){let x,N;return rv(E)?(x=e.getRecordMatcher(E),N=L):N=E,e.addRoute(N,x)}function v(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(E=>E.record)}function A(E){return!!e.getRecordMatcher(E)}function C(E,L){if(L=ge({},L||c.value),typeof E=="string"){const f=Cc(n,E,L.path),p=e.resolve({path:f.path},L),y=r.createHref(f.fullPath);return ge(f,p,{params:d(p.params),hash:Jo(f.hash),redirectedFrom:void 0,href:y})}let x;if("path"in E)x=ge({},E,{path:Cc(n,E.path,L.path).path});else{const f=ge({},E.params);for(const p in f)f[p]==null&&delete f[p];x=ge({},E,{params:h(E.params)}),L.params=h(L.params)}const N=e.resolve(x,L),ce=E.hash||"";N.params=u(d(N.params));const Ne=FT(s,ge({},E,{hash:IC(ce),path:N.path})),se=r.createHref(Ne);return ge({fullPath:Ne,hash:ce,query:s===uf?AC(E.query):E.query||{}},N,{redirectedFrom:void 0,href:se})}function O(E){return typeof E=="string"?Cc(n,E,c.value.path):ge({},E)}function k(E,L){if(l!==E)return ar(8,{from:L,to:E})}function H(E){return z(E)}function J(E){return H(ge(O(E),{replace:!0}))}function ne(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let N=typeof x=="function"?x(E):x;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=O(N):{path:N},N.params={}),ge({query:E.query,hash:E.hash,params:"path"in N?{}:E.params},N)}}function z(E,L){const x=l=C(E),N=c.value,ce=E.state,Ne=E.force,se=E.replace===!0,f=ne(x);if(f)return z(ge(O(f),{state:typeof f=="object"?ge({},ce,f.state):ce,force:Ne,replace:se}),L||x);const p=x;p.redirectedFrom=L;let y;return!Ne&&UT(s,N,x)&&(y=ar(16,{to:p,from:N}),jt(N,N,!0,!1)),(y?Promise.resolve(y):be(p,N)).catch(w=>rn(w)?rn(w,2)?w:vt(w):pe(w,p,N)).then(w=>{if(w){if(rn(w,2))return z(ge({replace:se},O(w.to),{state:typeof w.to=="object"?ge({},ce,w.to.state):ce,force:Ne}),L||p)}else w=we(p,N,!0,se,ce);return re(p,N,w),w})}function Q(E,L){const x=k(E,L);return x?Promise.reject(x):Promise.resolve()}function be(E,L){let x;const[N,ce,Ne]=$C(E,L);x=Sc(N.reverse(),"beforeRouteLeave",E,L);for(const f of N)f.leaveGuards.forEach(p=>{x.push(kn(p,E,L))});const se=Q.bind(null,E,L);return x.push(se),Ds(x).then(()=>{x=[];for(const f of i.list())x.push(kn(f,E,L));return x.push(se),Ds(x)}).then(()=>{x=Sc(ce,"beforeRouteUpdate",E,L);for(const f of ce)f.updateGuards.forEach(p=>{x.push(kn(p,E,L))});return x.push(se),Ds(x)}).then(()=>{x=[];for(const f of E.matched)if(f.beforeEnter&&!L.matched.includes(f))if(Ut(f.beforeEnter))for(const p of f.beforeEnter)x.push(kn(p,E,L));else x.push(kn(f.beforeEnter,E,L));return x.push(se),Ds(x)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),x=Sc(Ne,"beforeRouteEnter",E,L),x.push(se),Ds(x))).then(()=>{x=[];for(const f of o.list())x.push(kn(f,E,L));return x.push(se),Ds(x)}).catch(f=>rn(f,8)?f:Promise.reject(f))}function re(E,L,x){for(const N of a.list())N(E,L,x)}function we(E,L,x,N,ce){const Ne=k(E,L);if(Ne)return Ne;const se=L===Tn,f=Ls?history.state:{};x&&(N||se?r.replace(E.fullPath,ge({scroll:se&&f&&f.scroll},ce)):r.push(E.fullPath,ce)),c.value=E,jt(E,L,x,se),vt()}let mt;function Bt(){mt||(mt=r.listen((E,L,x)=>{if(!ts.listening)return;const N=C(E),ce=ne(N);if(ce){z(ge(ce,{replace:!0}),N).catch(Xr);return}l=N;const Ne=c.value;Ls&&WT(tf(Ne.fullPath,x.delta),Wa()),be(N,Ne).catch(se=>rn(se,12)?se:rn(se,2)?(z(se.to,N).then(f=>{rn(f,20)&&!x.delta&&x.type===_i.pop&&r.go(-1,!1)}).catch(Xr),Promise.reject()):(x.delta&&r.go(-x.delta,!1),pe(se,N,Ne))).then(se=>{se=se||we(N,Ne,!1),se&&(x.delta&&!rn(se,8)?r.go(-x.delta,!1):x.type===_i.pop&&rn(se,20)&&r.go(-1,!1)),re(N,Ne,se)}).catch(Xr)}))}let ht=xr(),Me=xr(),Pe;function pe(E,L,x){vt(E);const N=Me.list();return N.length?N.forEach(ce=>ce(E,L,x)):console.error(E),Promise.reject(E)}function de(){return Pe&&c.value!==Tn?Promise.resolve():new Promise((E,L)=>{ht.add([E,L])})}function vt(E){return Pe||(Pe=!E,Bt(),ht.list().forEach(([L,x])=>E?x(E):L()),ht.reset()),E}function jt(E,L,x,N){const{scrollBehavior:ce}=t;if(!Ls||!ce)return Promise.resolve();const Ne=!x&&GT(tf(E.fullPath,0))||(N||!x)&&history.state&&history.state.scroll||null;return jl().then(()=>ce(E,L,Ne)).then(se=>se&&KT(se)).catch(se=>pe(se,E,L))}const yt=E=>r.go(E);let Qe;const sn=new Set,ts={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:A,getRoutes:_,resolve:C,options:t,push:H,replace:J,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:de,install(E){const L=this;E.component("RouterLink",NC),E.component("RouterView",MC),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(c)}),Ls&&!Qe&&c.value===Tn&&(Qe=!0,H(r.location).catch(ce=>{}));const x={};for(const ce in Tn)x[ce]=Ct(()=>c.value[ce]);E.provide(Ga,L),E.provide(dv,dr(x)),E.provide(Cl,c);const N=E.unmount;sn.add(E),E.unmount=function(){sn.delete(E),sn.size<1&&(l=Tn,mt&&mt(),mt=null,c.value=Tn,Qe=!1,Pe=!1),N()}}};return ts}function Ds(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $C(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>or(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>or(l,c))||r.push(c))}return[n,s,r]}function Er(){return Mt(Ga)}const Qa="/cuy-art-shop/assets/Logo-removebg-preview-23a31917.png",FC="/cuy-art-shop/assets/Puntos-b413704e.svg",UC="/cuy-art-shop/assets/search-8de85e52.svg",Zn="/cuy-art-shop/assets/person-c17a1bb8.svg",VC="/cuy-art-shop/assets/shopping_cart-2f426c23.svg",BC="/cuy-art-shop/assets/menu-fd7c077d.svg",jC="/cuy-art-shop/assets/close-4f1b1f2c.svg";function eh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function fv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qC=fv,pv=new Ii("auth","Firebase",fv());/**
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
 */const Zo=new Ql("@firebase/auth");function HC(t,...e){Zo.logLevel<=he.WARN&&Zo.warn(`Auth (${pr}): ${t}`,...e)}function bo(t,...e){Zo.logLevel<=he.ERROR&&Zo.error(`Auth (${pr}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw th(t,...e)}function Xt(t,...e){return th(t,...e)}function zC(t,e,n){const s=Object.assign(Object.assign({},qC()),{[e]:n});return new Ii("auth","Firebase",s).create(e,{appName:t.name})}function th(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return pv.create(t,...e)}function K(t,e,...n){if(!t)throw th(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bo(e),new Error(e)}function yn(t,e){t||hn(e)}/**
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
 */function Sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KC(){return mf()==="http:"||mf()==="https:"}function mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KC()||Ww()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kw()||Gw()}get(){return WC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nh(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YC=new ji(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function br(t,e,n,s,r={}){return mv(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=bi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gv.fetch()(vv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function mv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},QC),e);try{const r=new XC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ho(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw zC(t,u,l);Vt(t,u)}}catch(r){if(r instanceof In)throw r;Vt(t,"network-request-failed",{message:String(r)})}}async function qi(t,e,n,s,r={}){const i=await br(t,e,n,s,r);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vv(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?nh(t.config,r):`${t.config.apiScheme}://${r}`}class XC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xt(this.auth,"network-request-failed")),YC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Xt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function JC(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function ZC(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eS(t,e=!1){const n=ze(t),s=await n.getIdToken(e),r=sh(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Zr(Ac(r.auth_time)),issuedAtTime:Zr(Ac(r.iat)),expirationTime:Zr(Ac(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function sh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Dp(n);return r?JSON.parse(r):(bo("Failed to decode base64 JWT payload"),null)}catch(r){return bo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function tS(t){const e=sh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof In&&nS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function nS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zr(this.lastLoginAt),this.creationTime=Zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ea(t){var e;const n=t.auth,s=await t.getIdToken(),r=await cr(t,ZC(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?oS(i.providerUserInfo):[],a=iS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new yv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function rS(t){const e=ze(t);await ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function oS(t){return t.map(e=>{var{providerId:n}=e,s=eh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function aS(t,e){const n=await mv(t,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=vv(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await aS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new wi;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function Cn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eS(this,e)}reload(){return rS(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ea(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,JC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:H,isAnonymous:J,providerData:ne,stsTokenManager:z}=n;K(k&&z,e,"internal-error");const Q=wi.fromJSON(this.name,z);K(typeof k=="string",e,"internal-error"),Cn(h,e.name),Cn(d,e.name),K(typeof H=="boolean",e,"internal-error"),K(typeof J=="boolean",e,"internal-error"),Cn(g,e.name),Cn(v,e.name),Cn(_,e.name),Cn(A,e.name),Cn(C,e.name),Cn(O,e.name);const be=new ms({uid:k,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:J,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:Q,createdAt:C,lastLoginAt:O});return ne&&Array.isArray(ne)&&(be.providerData=ne.map(re=>Object.assign({},re))),A&&(be._redirectEventId=A),be}static async _fromIdTokenResponse(e,n,s=!1){const r=new wi;r.updateFromServerResponse(n);const i=new ms({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ea(i),i}}/**
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
 */const vf=new Map;function dn(t){yn(t instanceof Function,"Expected a class definition");let e=vf.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vf.set(t,e),e)}/**
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
 */class _v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_v.type="NONE";const yf=_v;/**
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
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=To(this.userKey,r.apiKey,i),this.fullPersistenceKey=To("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new zs(dn(yf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||dn(yf);const o=To(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ms._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new zs(i,e,s))}}/**
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
 */function _f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tv(e))return"Blackberry";if(Cv(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||Ev(e))&&!e.includes("edge/"))return"Chrome";if(bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function wv(t=lt()){return/firefox\//i.test(t)}function rh(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ev(t=lt()){return/crios\//i.test(t)}function Iv(t=lt()){return/iemobile/i.test(t)}function bv(t=lt()){return/android/i.test(t)}function Tv(t=lt()){return/blackberry/i.test(t)}function Cv(t=lt()){return/webos/i.test(t)}function Ya(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cS(t=lt()){var e;return Ya(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lS(){return Qw()&&document.documentMode===10}function Sv(t=lt()){return Ya(t)||bv(t)||Cv(t)||Tv(t)||/windows phone/i.test(t)||Iv(t)}function uS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Av(t,e=[]){let n;switch(t){case"Browser":n=_f(lt());break;case"Worker":n=`${_f(lt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${s}`}async function Rv(t,e){return br(t,"GET","/v2/recaptchaConfig",Ir(t,e))}function wf(t){return t!==void 0&&t.enterprise!==void 0}class kv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function hS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Xt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",hS().appendChild(s)})}function dS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fS="https://www.google.com/recaptcha/enterprise.js?render=",pS="recaptcha-enterprise",gS="NO_RECAPTCHA";class Nv{constructor(e){this.type=pS,this.auth=Tr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Rv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new kv(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;wf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(gS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&wf(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Pv(fS+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ta(t,e,n,s=!1){const r=new Nv(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class mS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class vS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ef(this),this.idTokenSubscription=new Ef(this),this.beforeStateQueue=new mS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}async initializeRecaptchaConfig(){const e=await Rv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new kv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Nv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return ze(t)}class Ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=n0(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function yS(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return r;Vt(r,"already-initialized")}return n.initialize({options:e})}function _S(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function wS(t,e,n){const s=Tr(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Dv(e),{host:o,port:a}=ES(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||IS()}function Dv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ES(t){const e=Dv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:If(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:If(o)}}}function If(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function xv(t,e){return br(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Rc(t,e){return qi(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
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
 */async function bS(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function TS(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
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
 */class Ei extends ih{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await ta(e,s,"signInWithPassword");return Rc(e,r)}else return Rc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ta(e,s,"signInWithPassword");return Rc(e,i)}else return Promise.reject(r)});case"emailLink":return bS(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return xv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TS(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ks(t,e){return qi(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
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
 */const CS="http://localhost";class Is extends ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=eh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Is(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ks(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
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
 */function SS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AS(t){const e=Mr(Lr(t)).link,n=e?Mr(Lr(e)).deep_link_id:null,s=Mr(Lr(t)).deep_link_id;return(s?Mr(Lr(s)).link:null)||s||n||e||t}class oh{constructor(e){var n,s,r,i,o,a;const c=Mr(Lr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=SS((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AS(e);try{return new oh(n)}catch{return null}}}/**
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
 */class Cr{constructor(){this.providerId=Cr.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=oh.parseLink(n);return K(s,"argument-error"),Ei._fromEmailAndCode(e,s.code,s.tenantId)}}Cr.PROVIDER_ID="password";Cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ov{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hi extends Ov{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pn extends Hi{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nn.credential(n,s)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Dn extends Hi{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */class xn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return xn.credential(n,s)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function kc(t,e){return qi(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
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
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ms._fromIdTokenResponse(e,s,r),o=bf(s);return new bs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=bf(s);return new bs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class na extends In{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new na(e,n,s,r)}}function Mv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,s):i})}async function RS(t,e,n=!1){const s=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",s)}/**
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
 */async function kS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await cr(t,Mv(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=sh(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),bs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(s,"user-mismatch"),i}}/**
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
 */async function Lv(t,e,n=!1){const s="signIn",r=await Mv(t,s,e),i=await bs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function PS(t,e){return Lv(Tr(t),e)}async function NS(t,e,n){var s;const r=Tr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await ta(r,i,"signUpPassword");o=kc(r,l)}else o=kc(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ta(r,i,"signUpPassword");return kc(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await bs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function DS(t,e,n){return PS(ze(t),Cr.credential(e,n))}function xS(t,e){return $v(ze(t),e,null)}function OS(t,e){return $v(ze(t),null,e)}async function $v(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await cr(t,xv(s,i));await t._updateTokensIfNecessary(o,!0)}function MS(t,e,n,s){return ze(t).onIdTokenChanged(e,n,s)}function LS(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function $S(t){return ze(t).signOut()}const sa="__sak";/**
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
 */class Fv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FS(){const t=lt();return rh(t)||Ya(t)}const US=1e3,VS=10;class Uv extends Fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FS()&&uS(),this.fallbackToPolling=Sv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);lS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,VS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uv.type="LOCAL";const BS=Uv;/**
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
 */class Vv extends Fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vv.type="SESSION";const Bv=Vv;/**
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
 */function jS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Xa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await jS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xa.receivers=[];/**
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
 */function ah(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ah("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function HS(t){Jt().location.href=t}/**
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
 */function jv(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function zS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WS(){return jv()?self:null}/**
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
 */const qv="firebaseLocalStorageDb",GS=1,ra="firebaseLocalStorage",Hv="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ja(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function QS(){const t=indexedDB.deleteDatabase(qv);return new zi(t).toPromise()}function Al(){const t=indexedDB.open(qv,GS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ra,{keyPath:Hv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ra)?e(s):(s.close(),await QS(),e(await Al()))})})}async function Tf(t,e,n){const s=Ja(t,!0).put({[Hv]:e,value:n});return new zi(s).toPromise()}async function YS(t,e){const n=Ja(t,!1).get(e),s=await new zi(n).toPromise();return s===void 0?null:s.value}function Cf(t,e){const n=Ja(t,!0).delete(e);return new zi(n).toPromise()}const XS=800,JS=3;class zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>JS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xa._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zS(),!this.activeServiceWorker)return;this.sender=new qS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Al();return await Tf(e,sa,"1"),await Cf(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>YS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ja(r,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zv.type="LOCAL";const ZS=zv;new ji(3e4,6e4);/**
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
 */function eA(t,e){return e?dn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ch extends ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tA(t){return Lv(t.auth,new ch(t),t.bypassAuthState)}function nA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),kS(n,new ch(t),t.bypassAuthState)}async function sA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),RS(n,new ch(t),t.bypassAuthState)}/**
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
 */class Kv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tA;case"linkViaPopup":case"linkViaRedirect":return sA;case"reauthViaPopup":case"reauthViaRedirect":return nA;default:Vt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rA=new ji(2e3,1e4);class Fs extends Kv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rA.get())};e()}}Fs.currentPopupAction=null;/**
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
 */const iA="pendingRedirect",Co=new Map;class oA extends Kv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const s=await aA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aA(t,e){const n=uA(e),s=lA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function cA(t,e){Co.set(t._key(),e)}function lA(t){return dn(t._redirectPersistence)}function uA(t){return To(iA,t.config.apiKey,t.name)}async function hA(t,e,n=!1){const s=Tr(t),r=eA(s,e),o=await new oA(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dA=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wv(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wv(t);default:return!1}}/**
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
 */async function gA(t,e={}){return br(t,"GET","/v1/projects",e)}/**
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
 */const mA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vA=/^https?/;async function yA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gA(t);for(const n of e)try{if(_A(n))return}catch{}Vt(t,"unauthorized-domain")}function _A(t){const e=Sl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!vA.test(n))return!1;if(mA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const wA=new ji(3e4,6e4);function Af(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EA(t){return new Promise((e,n)=>{var s,r,i;function o(){Af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Af(),n(Xt(t,"network-request-failed"))},timeout:wA.get()})}if(!((r=(s=Jt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)o();else{const a=dS("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Pv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw So=null,e})}let So=null;function IA(t){return So=So||EA(t),So}/**
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
 */const bA=new ji(5e3,15e3),TA="__/auth/iframe",CA="emulator/auth/iframe",SA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RA(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nh(e,CA):`https://${t.config.authDomain}/${TA}`,s={apiKey:e.apiKey,appName:t.name,v:pr},r=AA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${bi(s).slice(1)}`}async function kA(t){const e=await IA(t),n=Jt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:RA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Jt().setTimeout(()=>{i(o)},bA.get());function c(){Jt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const PA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NA=500,DA=600,xA="_blank",OA="http://localhost";class Rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MA(t,e,n,s=NA,r=DA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},PA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=lt().toLowerCase();n&&(a=Ev(l)?xA:n),wv(l)&&(e=e||OA,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(cS(l)&&a!=="_self")return LA(e||"",a),new Rf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Rf(h)}function LA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $A="__/auth/handler",FA="emulator/auth/handler",UA=encodeURIComponent("fac");async function kf(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:pr,eventId:r};if(e instanceof Ov){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",t0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Hi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${UA}=${encodeURIComponent(c)}`:"";return`${VA(t)}?${bi(a).slice(1)}${l}`}function VA({config:t}){return t.emulator?nh(t,FA):`https://${t.authDomain}/${$A}`}/**
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
 */const Pc="webStorageSupport";class BA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bv,this._completeRedirectFn=hA,this._overrideRedirectResult=cA}async _openPopup(e,n,s,r){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kf(e,n,s,Sl(),r);return MA(e,o,ah())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await kf(e,n,s,Sl(),r);return HS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(yn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await kA(e),s=new fA(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Pc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sv()||rh()||Ya()}}const jA=BA;var Pf="@firebase/auth",Nf="0.23.1";/**
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
 */class qA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zA(t){Xs(new vs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),K(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Av(t)},l=new vS(s,r,i,c);return _S(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xs(new vs("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(s=>new qA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(Pf,Nf,HA(t)),Vn(Pf,Nf,"esm2017")}/**
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
 */const KA=5*60,WA=Op("authIdTokenMaxAge")||KA;let Df=null;const GA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>WA)return;const r=n==null?void 0:n.token;Df!==r&&(Df=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _n(t=Fp()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yS(t,{popupRedirectResolver:jA,persistence:[ZS,BS,Bv]}),s=Op("authTokenSyncURL");if(s){const i=GA(s);LS(n,i,()=>i(n.currentUser)),MS(n,o=>i(o))}const r=xp("auth");return r&&wS(n,`http://${r}`),n}zA("Browser");const Za=t=>(Gn("data-v-25f1e63c"),t=t(),Qn(),t),QA={class:"head"},YA=tn('<div class="lefthead" data-v-25f1e63c><button data-v-25f1e63c><img src="'+Qa+'" alt="Persona" data-v-25f1e63c></button></div><div class="centerhead" data-v-25f1e63c><input type="text" name="text" id="one" data-v-25f1e63c><div class="centersearch" data-v-25f1e63c><img src="'+FC+'" alt="Puntos" data-v-25f1e63c><button data-v-25f1e63c><img src="'+UC+'" alt="Busqueda" data-v-25f1e63c></button></div></div>',2),XA={class:"righthead"},JA=Za(()=>m("img",{src:Zn,alt:"Persona"},null,-1)),ZA=[JA],eR=Za(()=>m("img",{src:VC,alt:"Carro de compra"},null,-1)),tR=[eR],nR={class:"containmodal"},sR={class:"contain"},rR={class:"salir"},iR=Za(()=>m("img",{src:jC,alt:"Cerrar"},null,-1)),oR=[iR],aR=Za(()=>m("h2",null,"Menu",-1)),cR=ke({__name:"NavBar",setup(t){const e=Se(!1),n=Er(),s=()=>{n.push("/about")},r=()=>{_n().currentUser!=null?n.push({name:"Informacion"}):n.push("/login")},i=()=>{n.push({name:"Carrito"}),console.log("Carroo")},o=()=>{_n().currentUser!=null?n.push({name:"Informacion"}):n.push("/login")};return(a,c)=>(_e(),Ue(zt,null,[m("header",QA,[YA,m("div",XA,[m("button",{onClick:r},ZA),m("button",{onClick:i},tR),m("button",null,[m("img",{src:BC,alt:"Menu",onClick:c[0]||(c[0]=l=>e.value=!e.value)})])])]),Ie(m("div",nR,[m("div",sR,[m("div",rR,[m("button",{onClick:c[1]||(c[1]=l=>e.value=!e.value)},oR)]),m("div",{class:"opciones"},[aR,m("p",{href:"#",onClick:o},"Mi Cuenta"),m("p",{href:"#",onClick:s},"Acerca de nosotros")])])],512),[[on,e.value]])],64))}});const Gv=Oe(cR,[["__scopeId","data-v-25f1e63c"]]),lR="/cuy-art-shop/assets/prom-071a18b4.jpg",Qv="/cuy-art-shop/assets/09757-BIG-2a63eeeb.jpg",uR="/cuy-art-shop/assets/taza-tradicional-523da630.webp",hR="/cuy-art-shop/assets/9a0e8b4110eb49644003a6d56f7b1232-53097ca7.jpg",Ki=Ow("registro",{state:()=>({datos:[{nombre:"Juan",correo:"juan@juan.com",password:"123456",telefono:"1234567890",direccion:"Calle 123",uso:!0}]}),actions:{addRegistro(t){this.datos.push(t)},getRegistro(t){for(let e=0;e<this.datos.length;e++)if(this.datos[e].correo==t)return this.datos[e]},addtelefono(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].telefono=e)},adddireccion(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].direccion=e)},getAll(){for(let t=0;t<this.datos.length;t++)console.log(this.datos[t])},async setAll(){try{const t=fT(Z1(cn,"usuarios"),pT("uso","==",!0));(await IT(t)).forEach(n=>{const s={nombre:n.data().nombre,correo:n.data().correo,password:n.data().password,telefono:n.data().telefono,direccion:n.data().direccion,uso:n.data().uso};this.addRegistro(s)})}catch{}},clearAll(){this.datos=[]}},persist:!0}),Wi=t=>(Gn("data-v-4c927725"),t=t(),Qn(),t),dR={class:"main"},fR={class:"mainleft"},pR={class:"mainleftleft"},gR=tn('<div class="categorias" data-v-4c927725><h2 data-v-4c927725>Catergorias</h2><div class="linea" data-v-4c927725></div><form data-v-4c927725><div data-v-4c927725><input type="checkbox" name="tipo1" id="tipo1" data-v-4c927725><label for="tipo1" data-v-4c927725>Ceràmica</label></div><div data-v-4c927725><input type="checkbox" name="tipo2" id="tipo2" data-v-4c927725><label for="tipo2" data-v-4c927725>Barro</label></div><div data-v-4c927725><input type="checkbox" name="tipo3" id="tipo3" data-v-4c927725><label for="tipo3" data-v-4c927725>Tela</label></div><div data-v-4c927725><input type="checkbox" name="tipo4" id="tipo4" data-v-4c927725><label for="tipo4" data-v-4c927725>Acuarela</label></div></form></div>',1),mR={class:"precios"},vR=Wi(()=>m("h2",null,"Precios",-1)),yR=Wi(()=>m("div",{class:"linea"},null,-1)),_R={class:"precio"},wR=Wi(()=>m("div",{class:"preciosss"},[m("h3",null,"20.000"),m("h3",null,"800.000")],-1)),ER={class:"precioss"},IR=Wi(()=>m("span",null,"$",-1)),bR=Wi(()=>m("button",null,"OK",-1)),TR=tn('<div class="mainright" data-v-4c927725><div class="promocion" data-v-4c927725><img src="'+lR+'" alt="promocion" data-v-4c927725></div><div class="targetas" data-v-4c927725><div class="targeta" data-v-4c927725><img src="'+Qv+'" alt="Primer Articulo" data-v-4c927725><div class="linea" data-v-4c927725></div><h2 data-v-4c927725>Vandola de Cafe</h2><div class="price" data-v-4c927725><p data-v-4c927725>$ 45.000</p><div class="lineap" data-v-4c927725></div></div><p data-v-4c927725>Ha, Pero que lindo</p></div><div class="targeta" data-v-4c927725><img src="'+uR+'" alt="Segundo Articulo" data-v-4c927725><div class="linea" data-v-4c927725></div><h2 data-v-4c927725>Taza personalizada de Ceramìca</h2><div class="price" data-v-4c927725><p data-v-4c927725>$ 25.000</p><div class="lineap" data-v-4c927725></div></div><p data-v-4c927725>Producto Tolimence, para tomar cafesito</p></div><div class="targeta" data-v-4c927725><img src="'+hR+'" alt="Tercer Articulo" data-v-4c927725><div class="linea" data-v-4c927725></div><h2 data-v-4c927725>Calletero :v</h2><div class="price" data-v-4c927725><p data-v-4c927725>$ 40.000</p><div class="lineap" data-v-4c927725></div></div><p data-v-4c927725>Para Guardar tus deliciosas Galletas</p></div></div></div>',1),CR=ke({__name:"MainComponent",setup(t){const e=Ki(),n=Se(2e4);return Hl(async()=>{e.clearAll(),await e.setAll(),e.getAll()}),(s,r)=>(_e(),Ue("main",dR,[m("div",fR,[m("div",pR,[gR,m("div",mR,[vR,yR,m("div",_R,[wR,Ie(m("input",{type:"range",name:"rango",id:"rango",min:"20000",max:"800000","onUpdate:modelValue":r[0]||(r[0]=i=>n.value=i),step:"100"},null,512),[[Je,n.value]]),m("div",ER,[IR,Ie(m("input",{type:"number",name:"numero",id:"numero","onUpdate:modelValue":r[1]||(r[1]=i=>n.value=i),step:"100"},null,512),[[Je,n.value]]),bR])])])])]),TR]))}});const SR=Oe(CR,[["__scopeId","data-v-4c927725"]]),AR={class:"container"},RR=ke({__name:"MainPage",setup(t){return(e,n)=>(_e(),Ue("div",AR,[ye(Gv),ye(SR)]))}});const kR=Oe(RR,[["__scopeId","data-v-3eabb5b3"]]),PR=ke({__name:"HomeView",setup(t){return(e,n)=>(_e(),fr(kR))}}),NR="/cuy-art-shop/assets/salir-9650414e.svg",Yv=t=>(Gn("data-v-19ba7e99"),t=t(),Qn(),t),DR={class:"head"},xR=Yv(()=>m("img",{src:Qa,alt:"Persona"},null,-1)),OR=[xR],MR=Yv(()=>m("img",{src:NR,alt:"Menu"},null,-1)),LR=[MR],$R=ke({__name:"NavBarUser",setup(t){const e=Er(),n=async()=>{await $S(_n()),e.push("/")},s=()=>{e.push("/")},r=()=>{_n().currentUser!=null?e.push({name:"Informacion"}):e.push("/login")};return(i,o)=>(_e(),Ue("header",DR,[m("button",{onClick:r},OR),m("h1",{onClick:s},"CUYART-SHOP"),m("button",{onClick:n},LR)]))}});const Sr=Oe($R,[["__scopeId","data-v-19ba7e99"]]),Xv="/cuy-art-shop/assets/Logo-3a4a9f77.jpeg",Jv="/cuy-art-shop/assets/youtube-375cd83e.png",ec="/cuy-art-shop/assets/facebook-193ba9b3.png",FR="/cuy-art-shop/assets/twitch-cf8e71de.png",lh="/cuy-art-shop/assets/gmail-6497f877.png",UR={class:"main"},VR=tn('<div class="mainleft" data-v-a8f0d743><div class="mainleftleft" data-v-a8f0d743><img class="logo" src="'+Xv+'" alt="El logo" data-v-a8f0d743><h1 data-v-a8f0d743>CUYART-SHOP</h1><h3 data-v-a8f0d743>Redes Sociales</h3><img src="'+Jv+'" alt="Youtube" data-v-a8f0d743><img src="'+ec+'" alt="Facebook" data-v-a8f0d743><img src="'+FR+'" alt="Twitch" data-v-a8f0d743><h3 data-v-a8f0d743>Contàctanos</h3><img src="'+lh+'" alt="Gmail" data-v-a8f0d743></div></div><div class="mainright" data-v-a8f0d743><h1 data-v-a8f0d743>¿Quienes Somos?</h1><p data-v-a8f0d743>CUYART-SHOP es una tienda virtual de artesanìas que atraves del comercio electrònico busca conectar y ayudar a expandir los negocios de los artesanos a otras regiones del paìs</p><h1 data-v-a8f0d743>Misiòn</h1><p data-v-a8f0d743>La misiòn de la empresa Cuy Art Shop es brindar a los artesanos una conexiòn seguray de calidad con sus compradores promoviendo el comercio electrònico y extendiendo los negocios de nuestros artesanos</p><h1 data-v-a8f0d743>Visiòn</h1><p data-v-a8f0d743>Cuy Art Shop serà la empresa lìder en Colombia en venta y compra de artesanìas, siendo una de las màs importanes para expandir los negocios de los artesanos</p></div>',2),BR=[VR],jR=ke({__name:"AboutComponent",setup(t){return Se(2e4),(e,n)=>(_e(),Ue("main",UR,BR))}});const qR=Oe(jR,[["__scopeId","data-v-a8f0d743"]]),HR={class:"container"},zR=ke({__name:"AboutPage",setup(t){return(e,n)=>(_e(),Ue("div",HR,[ye(Sr),ye(qR)]))}});const KR=Oe(zR,[["__scopeId","data-v-dce66de8"]]),WR=ke({__name:"AboutView",setup(t){return(e,n)=>(_e(),fr(KR))}}),As=t=>(Gn("data-v-5d31f7d7"),t=t(),Qn(),t),GR={class:"contain"},QR=As(()=>m("div",{class:"imgprofile"},[m("img",{src:Zn,alt:"Logo"})],-1)),YR=As(()=>m("div",{class:"reg"},[m("h1",null,"Login"),m("div",{class:"linea"})],-1)),XR={class:"in"},JR=As(()=>m("label",{for:""},"Correo",-1)),ZR={class:"in"},ek=As(()=>m("label",{for:""},"Contraseña",-1)),tk=As(()=>m("div",{class:"goface"},[m("img",{src:lh,alt:"Google"}),m("img",{src:ec,alt:"Facebook"})],-1)),nk=As(()=>m("img",{src:Qa,alt:"Logo"},null,-1)),sk=As(()=>m("div",{class:"space"},null,-1)),rk=ke({__name:"LoginComponent",setup(t){const e=Er(),n=()=>{e.push("/registro")},s=Se(""),r=Se(""),i=()=>{const o=_n();DS(o,s.value,r.value).then(a=>{a.user,alert("Bienvenido")}).then(()=>{e.push({name:"Informacion"})}).catch(a=>{alert("Intente de nuevo"),a.code,a.message})};return(o,a)=>(_e(),Ue("main",GR,[QR,YR,m("div",XR,[JR,Ie(m("input",{type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},null,512),[[Je,s.value]])]),m("div",ZR,[ek,Ie(m("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[Je,r.value]])]),m("button",{onClick:i},"Ingresar"),tk,m("footer",null,[nk,m("button",{class:"bt-reg",onClick:n},"Regìstrate"),sk])]))}});const ik=Oe(rk,[["__scopeId","data-v-5d31f7d7"]]),ok={class:"container"},ak=ke({__name:"LoginPage",setup(t){return(e,n)=>(_e(),Ue("div",ok,[ye(Sr),ye(ik)]))}});const ck=Oe(ak,[["__scopeId","data-v-c896fb3a"]]),lk=ke({__name:"LoginView",setup(t){return(e,n)=>(_e(),fr(ck))}}),nn=t=>(Gn("data-v-0416743c"),t=t(),Qn(),t),uk={class:"contain"},hk=nn(()=>m("div",{class:"imgprofile"},[m("img",{src:Zn,alt:"Logo"})],-1)),dk=nn(()=>m("div",{class:"reg"},[m("h1",null,"Registrarse"),m("div",{class:"linea"})],-1)),fk={class:"in"},pk=nn(()=>m("label",{for:""},"Nombre Usuario",-1)),gk={class:"in"},mk=nn(()=>m("label",{for:""},"Correo",-1)),vk={class:"in"},yk=nn(()=>m("label",{for:""},"Contraseña",-1)),_k={class:"in"},wk=nn(()=>m("label",{for:""},"Repite Contraseña",-1)),Ek=nn(()=>m("div",{class:"goface"},[m("img",{src:lh,alt:"Google"}),m("img",{src:ec,alt:"Facebook"})],-1)),Ik=nn(()=>m("div",{class:"linea"},null,-1)),bk=nn(()=>m("img",{src:Qa,alt:"Logo"},null,-1)),Tk=nn(()=>m("div",{class:"space"},null,-1)),Ck=ke({__name:"RegistroComponent",setup(t){const e=Ki(),n=Se(""),s=Se(""),r=Se(""),i=Se(""),o=Er(),a=()=>{o.push("/login")},c=async()=>{if(n.value.trim()==""&&r.value.trim()==""&&s.value.trim()==""&&i.value.trim()==""){console.log("Llenar todos los datos");return}if(s.value!==i.value){console.log("mal rey");return}console.log("adentro");try{await tv(Rn(cn,"usuarios",r.value.toString()),{nombre:n.value.toString(),correo:r.value.toString(),password:s.value.toString(),uso:!0}).then(()=>{console.log("Document successfully written!")}),console.log("Document written with ID: ",Rn(cn,"usuarios",r.value.toString()).id)}catch(l){console.log("Error adding document: ",l)}await NS(_n(),r.value.toString(),s.value.toString()).then(l=>{}),e.clearAll(),await e.setAll(),o.push({name:"Informacion"})};return(l,u)=>(_e(),Ue("main",uk,[hk,dk,m("div",fk,[pk,Ie(m("input",{type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h),required:""},null,512),[[Je,n.value]])]),m("div",gk,[mk,Ie(m("input",{type:"email",name:"usuario",id:"usuario","onUpdate:modelValue":u[1]||(u[1]=h=>r.value=h),required:""},null,512),[[Je,r.value]])]),m("div",vk,[yk,Ie(m("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":u[2]||(u[2]=h=>s.value=h),required:""},null,512),[[Je,s.value]])]),m("div",_k,[wk,Ie(m("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":u[3]||(u[3]=h=>i.value=h),required:""},null,512),[[Je,i.value]])]),m("button",{onClick:c},"Registrate"),Ek,Ik,m("footer",null,[bk,m("button",{class:"bt-reg",onClick:a},"Ingresa"),Tk])]))}});const Sk=Oe(Ck,[["__scopeId","data-v-0416743c"]]),Ak={class:"container"},Rk=ke({__name:"RegistroPage",setup(t){return(e,n)=>(_e(),Ue("div",Ak,[ye(Sr),ye(Sk)]))}});const kk=Oe(Rk,[["__scopeId","data-v-932305bb"]]),Pk=ke({__name:"RegistroView",setup(t){return(e,n)=>(_e(),fr(kk))}}),Rs=t=>(Gn("data-v-8e07762b"),t=t(),Qn(),t),Nk={class:"main"},Dk={class:"mainleft"},xk={class:"mainleftleft"},Ok=Rs(()=>m("h1",null,"Mi Cuenta",-1)),Mk=Rs(()=>m("div",{class:"linea1"},null,-1)),Lk={class:"list"},$k={class:"lineaa2"},Fk={class:"list1"},Uk={class:"lineaa3"},Vk={class:"opc"},Bk={class:"list3"},jk={class:"lineaa4"},qk={class:"list4"},Hk={class:"lineaa5"},zk=Rs(()=>m("div",{class:"linea"},null,-1)),Kk=Rs(()=>m("img",{class:"logo",src:Xv,alt:"El logo"},null,-1)),Wk=Rs(()=>m("h1",null,"CUYART-SHOP",-1)),Gk=Rs(()=>m("img",{src:Jv,alt:"Youtube"},null,-1)),Qk=Rs(()=>m("img",{src:ec,alt:"Facebook"},null,-1)),Yk={class:"mainright"},Xk=ke({__name:"MiCuentaComponent",setup(t){const e=Er();Hl(()=>{var d,g,v,_,A,C,O,k,H,J;const u=Ki(),h=_n().currentUser;(g=u.getRegistro(((d=h==null?void 0:h.email)==null?void 0:d.toString())||" "))!=null&&g.nombre,(_=u.getRegistro(((v=h==null?void 0:h.email)==null?void 0:v.toString())||""))!=null&&_.correo,(C=u.getRegistro(((A=h==null?void 0:h.email)==null?void 0:A.toString())||""))!=null&&C.password,(k=u.getRegistro(((O=h==null?void 0:h.email)==null?void 0:O.toString())||""))!=null&&k.telefono,(J=u.getRegistro(((H=h==null?void 0:h.email)==null?void 0:H.toString())||""))!=null&&J.direccion});const n=Se(!0),s=Se(!1),r=Se(!1),i=Se(!1),o=()=>{s.value===!1?n.value=!n.value:(s.value=!1,n.value=!0,e.push({name:"Informacion"})),n.value===!0?e.push({name:"Informacion"}):e.push({name:"Actualizar"})},a=()=>{n.value===!0||(n.value=!0),s.value||(s.value=!s.value),s.value===!1&&(r.value=!1,i.value=!1),s.value===!0&&(r.value=!1,i.value=!1),e.push({name:"Vendedor"})},c=()=>{r.value===!1||(r.value=!1),i.value=!i.value,e.push({name:"ActualizarProd"})},l=()=>{i.value===!1||(i.value=!1),r.value=!r.value,e.push({name:"Añadir"})};return(u,h)=>{const d=dp("RouterView");return _e(),Ue("main",Nk,[m("div",Dk,[m("div",xk,[Ok,Mk,m("div",Lk,[m("div",null,[m("div",{class:cs(["linea2",n.value?"":"rot"])},null,2),Ie(m("div",$k,null,512),[[on,!n.value]])]),m("label",{onClick:o},"Actualizar Informacion")]),m("div",Fk,[m("div",null,[m("div",{class:cs(["linea3",s.value?"rot":""])},null,2),Ie(m("div",Uk,null,512),[[on,s.value]])]),m("label",{onClick:a},"Vendedora")]),m("div",Vk,[m("div",Bk,[m("div",null,[Ie(m("div",{class:cs(["linea4",r.value?"rot":""])},null,2),[[on,s.value]]),Ie(m("div",jk,null,512),[[on,r.value]])]),Ie(m("label",{onClick:l},"Añadir Producto",512),[[on,s.value]])]),m("div",qk,[m("div",null,[Ie(m("div",{class:cs(["linea5",i.value?"rot":""])},null,2),[[on,s.value]]),Ie(m("div",Hk,null,512),[[on,i.value]])]),Ie(m("label",{onClick:c},"Actualizar Producto",512),[[on,s.value]])])]),zk,Kk,Wk,Gk,Qk])]),m("div",Yk,[ye(d)])])}}});const Jk=Oe(Xk,[["__scopeId","data-v-8e07762b"]]),Zk={class:"container"},e2=ke({__name:"MiCuentaPage",setup(t){return(e,n)=>(_e(),Ue("div",Zk,[ye(Sr),ye(Jk)]))}});const t2=Oe(e2,[["__scopeId","data-v-5b446284"]]),n2=ke({__name:"MiCuentaView",setup(t){return(e,n)=>(_e(),fr(t2))}}),Ar=t=>(Gn("data-v-8443db14"),t=t(),Qn(),t),s2={class:"contain"},r2=Ar(()=>m("div",{class:"imgprofile"},[m("img",{src:Zn,alt:"Logo"})],-1)),i2=Ar(()=>m("div",{class:"reg"},[m("h1",null,"Informacion"),m("div",{class:"linea"})],-1)),o2={class:"in"},a2=Ar(()=>m("label",{for:""},"Nombre de Usuario",-1)),c2=["placeholder"],l2={class:"in"},u2=Ar(()=>m("label",{for:""},"Correo",-1)),h2=["placeholder"],d2={class:"in"},f2=Ar(()=>m("label",{for:""},"Telèfono",-1)),p2=["placeholder"],g2={class:"in"},m2=Ar(()=>m("label",{for:""},"Direcciòn",-1)),v2=["placeholder"],y2=ke({__name:"MiCuentaInformacion",setup(t){var h,d,g,v,_,A,C,O,k,H;const e=Ki(),n=_n().currentUser;let s=((d=e.getRegistro(((h=n==null?void 0:n.email)==null?void 0:h.toString())||""))==null?void 0:d.nombre)||"",r=((v=e.getRegistro(((g=n==null?void 0:n.email)==null?void 0:g.toString())||""))==null?void 0:v.correo)||"";(A=e.getRegistro(((_=n==null?void 0:n.email)==null?void 0:_.toString())||""))!=null&&A.password;let i=((O=e.getRegistro(((C=n==null?void 0:n.email)==null?void 0:C.toString())||""))==null?void 0:O.telefono)||"",o=((H=e.getRegistro(((k=n==null?void 0:n.email)==null?void 0:k.toString())||""))==null?void 0:H.direccion)||"";const a=Se(""),c=Se(""),l=Se(""),u=Se("");return(J,ne)=>(_e(),Ue("main",s2,[r2,i2,m("div",o2,[a2,Ie(m("input",{type:"text",name:"usuario",id:"usuario1",placeholder:ft(s),disabled:"","onUpdate:modelValue":ne[0]||(ne[0]=z=>a.value=z)},null,8,c2),[[Je,a.value]])]),m("div",l2,[u2,Ie(m("input",{type:"email",name:"correo",id:"correo",placeholder:ft(r),disabled:"","onUpdate:modelValue":ne[1]||(ne[1]=z=>c.value=z)},null,8,h2),[[Je,c.value]])]),m("div",d2,[f2,Ie(m("input",{placeholder:ft(i),type:"number",name:"telefono",id:"telefono",disabled:"","onUpdate:modelValue":ne[2]||(ne[2]=z=>l.value=z)},null,8,p2),[[Je,l.value]])]),m("div",g2,[m2,Ie(m("input",{placeholder:ft(o),type:"text",name:"direccion",id:"dirrecion",disabled:"","onUpdate:modelValue":ne[3]||(ne[3]=z=>u.value=z)},null,8,v2),[[Je,u.value]])])]))}});const _2=Oe(y2,[["__scopeId","data-v-8443db14"]]),es=t=>(Gn("data-v-7aac8959"),t=t(),Qn(),t),w2={class:"contain"},E2=es(()=>m("div",{class:"imgprofile"},[m("img",{src:Zn,alt:"Logo"})],-1)),I2=es(()=>m("div",{class:"reg"},[m("h1",null,"Informacion"),m("div",{class:"linea"})],-1)),b2={class:"in"},T2=es(()=>m("label",{for:""},"Nombre de Usuario",-1)),C2=["placeholder"],S2={class:"in"},A2=es(()=>m("label",{for:""},"Correo",-1)),R2=["placeholder"],k2={class:"in"},P2=es(()=>m("label",{for:""},"Contraseña",-1)),N2=["placeholder"],D2={class:"in"},x2=es(()=>m("label",{for:""},"Telèfono",-1)),O2=["placeholder"],M2={class:"in"},L2=es(()=>m("label",{for:""},"Direcciòn",-1)),$2=["placeholder"],F2=es(()=>m("button",{class:"bt-can"},"Cancelar",-1)),U2=ke({__name:"MiCuentaActualizar",setup(t){var _,A,C,O,k,H,J,ne,z,Q;const e=Er(),n=Ki(),s=_n().currentUser,r=Se(""),i=Se(""),o=Se(""),a=Se(""),c=Se("");let l=((A=n.getRegistro(((_=s==null?void 0:s.email)==null?void 0:_.toString())||""))==null?void 0:A.nombre)||"",u=((O=n.getRegistro(((C=s==null?void 0:s.email)==null?void 0:C.toString())||""))==null?void 0:O.correo)||"",h=((H=n.getRegistro(((k=s==null?void 0:s.email)==null?void 0:k.toString())||""))==null?void 0:H.password)||"",d=((ne=n.getRegistro(((J=s==null?void 0:s.email)==null?void 0:J.toString())||""))==null?void 0:ne.telefono)||"",g=((Q=n.getRegistro(((z=s==null?void 0:s.email)==null?void 0:z.toString())||""))==null?void 0:Q.direccion)||"";const v=async()=>{var Me,Pe,pe,de,vt,jt,yt,Qe,sn,ts,E,L,x;let be=!1;if(s==null)return;console.log(s);let re=(Me=s==null?void 0:s.email)==null?void 0:Me.toString(),we=((pe=n.getRegistro(((Pe=s.email)==null?void 0:Pe.toString())||""))==null?void 0:pe.nombre)||"",mt=((vt=n.getRegistro(((de=s.email)==null?void 0:de.toString())||""))==null?void 0:vt.password)||"",Bt=((yt=n.getRegistro(((jt=s.email)==null?void 0:jt.toString())||""))==null?void 0:yt.telefono)||"",ht=((sn=n.getRegistro(((Qe=s.email)==null?void 0:Qe.toString())||""))==null?void 0:sn.direccion)||"";if(((E=n.getRegistro(((ts=s==null?void 0:s.email)==null?void 0:ts.toString())||""))==null?void 0:E.correo)!=i.value&&i.value.trim()!="")try{await xS(s,i.value.toString()).then(()=>{console.log("correo actualizado"),be=!0}).catch(N=>{console.log("error al actualizar correo")}).then(()=>{console.log("documento creado")}).catch(N=>{console.log("error al crear el documento")})}catch(N){console.log(N)}if(((x=n.getRegistro(((L=s==null?void 0:s.email)==null?void 0:L.toString())||""))==null?void 0:x.password)!=o.value&&o.value.trim()!=""){try{await OS(s,o.value.toString()).then(()=>{console.log("Contraseña actualizado")}).catch(N=>{console.log("error al actualizar la contraseña")}).then(()=>{console.log("documento creado")}).catch(N=>{console.log("error al crear el documento")})}catch(N){console.log(N)}try{await uo(Rn(cn,"usuarios",re||""),{password:o.value}).then(()=>{console.log("documento actualizado")}).catch(N=>{console.log("error al actualizar el documento")}).then(()=>{console.log("documento creado")}).catch(N=>{console.log("error al crear el documento")})}catch(N){console.log(N)}}if(be)try{await bT(Rn(cn,"usuarios",re||"")).then(()=>{console.log("documento eliminado")}).catch(N=>{console.log("error al eliminar el documento")}),await tv(Rn(cn,"usuarios",i.value.toString()),{nombre:r.value.toString().trim()!=""?r.value.toString():we.toString(),correo:i.value.toString(),password:o.value.toString().trim()!=""?o.value.toString():mt.toString(),telefono:a.value.toString().trim()!=""?a.value.toString():Bt.toString(),direccion:c.value.toString().trim()!=""?c.value.toString():ht.toString(),uso:!0}).then(()=>{console.log("documento creado")}).catch(N=>{console.log("error al crear el documento")})}catch(N){console.log(N)}if(r.value.toString().trim()!="")try{await uo(Rn(cn,"usuarios",re||""),{nombre:r.value}).then(()=>{console.log("documento actualizado")}).catch(N=>{console.log("error al actualizar el documento")})}catch(N){console.log(N)}if(a.value.toString().trim()!="")try{await uo(Rn(cn,"usuarios",re||""),{telefono:a.value}).then(()=>{console.log("documento actualizado")}).catch(N=>{console.log("error al actualizar el documento")})}catch(N){console.log(N)}if(c.value.toString().trim()!="")try{await uo(Rn(cn,"usuarios",re||""),{direccion:c.value}).then(()=>{console.log("documento actualizado")}).catch(N=>{console.log("error al actualizar el documento")})}catch(N){console.log(N)}n.clearAll(),await n.setAll(),e.push({name:"Informacion"})};return(be,re)=>(_e(),Ue("main",w2,[E2,I2,m("div",b2,[T2,Ie(m("input",{placeholder:ft(l),type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":re[0]||(re[0]=we=>r.value=we)},null,8,C2),[[Je,r.value]])]),m("div",S2,[A2,Ie(m("input",{placeholder:ft(u),type:"email",name:"correo",id:"correo1","onUpdate:modelValue":re[1]||(re[1]=we=>i.value=we)},null,8,R2),[[Je,i.value]])]),m("div",k2,[P2,Ie(m("input",{placeholder:ft(h),type:"password",name:"password",id:"password","onUpdate:modelValue":re[2]||(re[2]=we=>o.value=we)},null,8,N2),[[Je,o.value]])]),m("div",D2,[x2,Ie(m("input",{placeholder:ft(d),type:"number",name:"telefono",id:"telefono","onUpdate:modelValue":re[3]||(re[3]=we=>a.value=we)},null,8,O2),[[Je,a.value]])]),m("div",M2,[L2,Ie(m("input",{placeholder:ft(g),type:"text",name:"dirreccion",id:"dirreccion","onUpdate:modelValue":re[4]||(re[4]=we=>c.value=we)},null,8,$2),[[Je,c.value]])]),m("div",{class:"actu"},[m("button",{class:"bt-act",onClick:v},"Actualizar"),F2])]))}});const V2=Oe(U2,[["__scopeId","data-v-7aac8959"]]),wn="/cuy-art-shop/assets/cuy-a46bd5f5.jpeg";const B2={},j2={class:"main"},q2=tn('<div class="left" data-v-6296c0ef><div class="top" data-v-6296c0ef><h1 data-v-6296c0ef>Productos</h1><div class="linea" data-v-6296c0ef></div></div><div class="center" data-v-6296c0ef><div class="pp" data-v-6296c0ef><img src="'+wn+'" alt="Un Cuy" data-v-6296c0ef><div class="produc" data-v-6296c0ef><div class="desc" data-v-6296c0ef><p data-v-6296c0ef>Figura Cuy - Graduado</p><p data-v-6296c0ef>(Producto Nariñense decorado a mano)</p></div><div data-v-6296c0ef><button data-v-6296c0ef>eliminar</button></div></div></div><div class="pp" data-v-6296c0ef><img src="'+wn+'" alt="Un Cuy" data-v-6296c0ef><div class="produc" data-v-6296c0ef><div class="desc" data-v-6296c0ef><p data-v-6296c0ef>Figura Cuy - Graduado</p><p data-v-6296c0ef>(Producto Nariñense decorado a mano)</p></div><div data-v-6296c0ef><button data-v-6296c0ef>eliminar</button></div></div></div></div></div><div class="right" data-v-6296c0ef><div class="rightop" data-v-6296c0ef><div class="imgprof" data-v-6296c0ef><img src="'+Zn+'" alt="Persona" data-v-6296c0ef></div><h1 data-v-6296c0ef>Nombre :V</h1></div></div>',2),H2=[q2];function z2(t,e){return _e(),Ue("main",j2,H2)}const K2=Oe(B2,[["render",z2],["__scopeId","data-v-6296c0ef"]]);const W2={},G2={class:"main"},Q2=tn('<div class="left" data-v-a8202516><div class="top" data-v-a8202516><h1 data-v-a8202516>Añadir Productos</h1><div class="linea" data-v-a8202516></div></div><div class="center" data-v-a8202516><div class="leftcenter" data-v-a8202516><h2 data-v-a8202516>Nombre del Producto</h2><h2 data-v-a8202516>Precio del producto</h2><h2 data-v-a8202516>Stock del Producto</h2><h2 data-v-a8202516>Imàgenes del producto</h2><h2 class="dee" data-v-a8202516>Descripciòn</h2></div><div class="rightcenter" data-v-a8202516><input type="text" data-v-a8202516><input type="text" data-v-a8202516><input type="text" data-v-a8202516><div class="añaimg" data-v-a8202516><img src="'+wn+'" alt="Es un cuy" data-v-a8202516><button data-v-a8202516>añadir</button></div><textarea data-v-a8202516></textarea></div></div><div class="bt" data-v-a8202516><button class="bt-add" data-v-a8202516>Añadir</button><button class="bt-can" data-v-a8202516>Cancelar</button></div></div><div class="right" data-v-a8202516><div class="rightop" data-v-a8202516><div class="imgprof" data-v-a8202516><img src="'+Zn+'" alt="Persona" data-v-a8202516></div><h1 data-v-a8202516>Nombre :V</h1></div></div>',2),Y2=[Q2];function X2(t,e){return _e(),Ue("main",G2,Y2)}const J2=Oe(W2,[["render",X2],["__scopeId","data-v-a8202516"]]);const Z2={},eP={class:"main"},tP=tn('<div class="left" data-v-a2bd50f8><div class="top" data-v-a2bd50f8><h1 data-v-a2bd50f8>Actualizar Productos</h1><div class="linea" data-v-a2bd50f8></div></div><div class="center" data-v-a2bd50f8><div class="leftcenter" data-v-a2bd50f8><h2 data-v-a2bd50f8>Nombre del Producto</h2><h2 data-v-a2bd50f8>Precio del producto</h2><h2 data-v-a2bd50f8>Stock del Producto</h2><h2 data-v-a2bd50f8>Imàgenes del producto</h2><h2 class="dee" data-v-a2bd50f8>Descripciòn</h2></div><div class="rightcenter" data-v-a2bd50f8><input type="text" data-v-a2bd50f8><input type="text" data-v-a2bd50f8><input type="text" data-v-a2bd50f8><div class="añaimg" data-v-a2bd50f8><img src="'+wn+'" alt="Es un cuy" data-v-a2bd50f8><button data-v-a2bd50f8>añadir</button></div><textarea data-v-a2bd50f8></textarea></div></div><div class="bt" data-v-a2bd50f8><button class="bt-add" data-v-a2bd50f8>Actualizar</button><button class="bt-can" data-v-a2bd50f8>Cancelar</button></div></div><div class="right" data-v-a2bd50f8><div class="rightop" data-v-a2bd50f8><div class="imgprof" data-v-a2bd50f8><img src="'+Zn+'" alt="Persona" data-v-a2bd50f8></div><h1 data-v-a2bd50f8>Nombre :V</h1></div></div>',2),nP=[tP];function sP(t,e){return _e(),Ue("main",eP,nP)}const rP=Oe(Z2,[["render",sP],["__scopeId","data-v-a2bd50f8"]]);const iP={},oP={class:"main"},aP=tn('<div class="left" data-v-3a891a9f><div class="center" data-v-3a891a9f><div class="pp" data-v-3a891a9f><img src="'+wn+'" alt="Un Cuy" data-v-3a891a9f><div class="produc" data-v-3a891a9f><div class="desc" data-v-3a891a9f><p data-v-3a891a9f>Figura Cuy - Graduado</p><p data-v-3a891a9f>(Producto Nariñense decorado a mano)</p></div><div data-v-3a891a9f><button data-v-3a891a9f>eliminar</button></div></div></div><div class="pp" data-v-3a891a9f><img src="'+wn+'" alt="Un Cuy" data-v-3a891a9f><div class="produc" data-v-3a891a9f><div class="desc" data-v-3a891a9f><p data-v-3a891a9f>Figura Cuy - Graduado</p><p data-v-3a891a9f>(Producto Nariñense decorado a mano)</p></div><div data-v-3a891a9f><button data-v-3a891a9f>eliminar</button></div></div></div></div></div><div class="right" data-v-3a891a9f><div class="rightop" data-v-3a891a9f><div class="top" data-v-3a891a9f><h1 data-v-3a891a9f>Carrito de Compra</h1><div class="linea" data-v-3a891a9f></div></div><div class="valor" data-v-3a891a9f><div data-v-3a891a9f><h2 data-v-3a891a9f>Precio</h2><h3 data-v-3a891a9f>$ 50.000</h3></div><div data-v-3a891a9f><h2 data-v-3a891a9f>Descuento de la oferta</h2><h3 data-v-3a891a9f>$ 0.0</h3></div><div data-v-3a891a9f><h2 data-v-3a891a9f>Envìo</h2><h3 data-v-3a891a9f>$ 10.000</h3></div><div data-v-3a891a9f><h2 data-v-3a891a9f>Subtotal</h2><h3 data-v-3a891a9f>$ 60.000</h3></div><div class="bt" data-v-3a891a9f><button class="bt-comp" data-v-3a891a9f>Comprar</button></div></div></div></div>',2),cP=[aP];function lP(t,e){return _e(),Ue("main",oP,cP)}const uP=Oe(iP,[["render",lP],["__scopeId","data-v-3a891a9f"]]),hP={class:"container"},dP=ke({__name:"CarroPage",setup(t){return(e,n)=>(_e(),Ue("div",hP,[ye(Sr),ye(uP)]))}});const fP=Oe(dP,[["__scopeId","data-v-19f39c00"]]),pP={class:"container"},gP=tn('<main class="main" data-v-8338ad93><div class="left" data-v-8338ad93><div class="center" data-v-8338ad93><img src="'+wn+'" alt="Un Cuy" data-v-8338ad93><div class="linea" data-v-8338ad93></div><div class="info" data-v-8338ad93><h2 data-v-8338ad93>Descripcion</h2><p data-v-8338ad93>Cerdito de Ceramica blanco con salpicadura de colores.</p><p data-v-8338ad93>Producto tolimence</p><p data-v-8338ad93>Perfecto regalo para tu pareja o amig@</p><p data-v-8338ad93>Entrègale a esa persona un recuerdo del tolima y de nuestros artesanos, pequeño, lindo y con carisma</p></div></div></div><div class="right" data-v-8338ad93><div class="rightop" data-v-8338ad93><div class="top" data-v-8338ad93><h1 data-v-8338ad93>Cerdito personalizado de ceramica</h1><div class="linea" data-v-8338ad93></div><h2 data-v-8338ad93>$ 25.000</h2><div class="sto" data-v-8338ad93><h2 data-v-8338ad93>Stock</h2><input type="number" name="stock" id="stock" data-v-8338ad93></div><div class="masmen" data-v-8338ad93><button data-v-8338ad93>+</button><button data-v-8338ad93>-</button></div><div class="agrecom" data-v-8338ad93><button class="bt-add" data-v-8338ad93>Agregar</button><button class="bt-comp" data-v-8338ad93>Comprar</button></div></div><div class="valor" data-v-8338ad93><div class="targeta" data-v-8338ad93><img src="'+Qv+'" alt="Primer Articulo" data-v-8338ad93><div class="price" data-v-8338ad93><div class="ppp" data-v-8338ad93><h2 data-v-8338ad93>Vandola de Cafe</h2><div data-v-8338ad93><p data-v-8338ad93>$ 45.000</p><div class="lineap" data-v-8338ad93></div></div><p data-v-8338ad93>Ha, Pero que lindo</p></div></div></div></div></div></div></main>',1),mP=ke({__name:"PaginaProducto",setup(t){return(e,n)=>(_e(),Ue("div",pP,[ye(Gv),gP]))}});const vP=Oe(mP,[["__scopeId","data-v-8338ad93"]]),yP={class:"container"},_P=tn('<main class="main" data-v-a6daa7a1><div class="left" data-v-a6daa7a1><div class="leftleft" data-v-a6daa7a1><h2 data-v-a6daa7a1>Direccìon</h2><h4 data-v-a6daa7a1>Otra:</h4><h2 class="hh" data-v-a6daa7a1>Metodo de Pago</h2></div><div class="leftright" data-v-a6daa7a1><input type="text" name="dir" id="dir" class="dir" data-v-a6daa7a1><textarea name="otra" id="otra" data-v-a6daa7a1></textarea><input type="text" name="pago" id="pago" data-v-a6daa7a1><div class="more" data-v-a6daa7a1><h4 data-v-a6daa7a1>Numero Targeta</h4><input type="text" name="tar" id="tar" data-v-a6daa7a1><h4 data-v-a6daa7a1>Nombre Titular</h4><input type="text" name="tit" id="tit" data-v-a6daa7a1><h4 data-v-a6daa7a1>Expira</h4><input type="date" name="ex" id="ex" class="da" data-v-a6daa7a1><h4 data-v-a6daa7a1>CVV</h4><input type="text" name="cv" id="cv" data-v-a6daa7a1></div><div class="bt" data-v-a6daa7a1><button class="bt-comp" data-v-a6daa7a1>Comprar</button><button class="bt-can" data-v-a6daa7a1>Cancelar</button></div></div></div><div class="right" data-v-a6daa7a1><div class="rightop" data-v-a6daa7a1><div class="pp" data-v-a6daa7a1><img src="'+wn+'" alt="Un Cuy" data-v-a6daa7a1><div class="produc" data-v-a6daa7a1><div class="desc" data-v-a6daa7a1><p data-v-a6daa7a1>Figura Cuy - Graduado</p><p data-v-a6daa7a1>(Producto Nariñense decorado a mano)</p></div><div data-v-a6daa7a1><button data-v-a6daa7a1>eliminar</button></div></div></div><div class="pp" data-v-a6daa7a1><img src="'+wn+'" alt="Un Cuy" data-v-a6daa7a1><div class="produc" data-v-a6daa7a1><div class="desc" data-v-a6daa7a1><p data-v-a6daa7a1>Figura Cuy - Graduado</p><p data-v-a6daa7a1>(Producto Nariñense decorado a mano)</p></div><div data-v-a6daa7a1><button data-v-a6daa7a1>eliminar</button></div></div></div></div><div class="rightbottom" data-v-a6daa7a1><div class="valor" data-v-a6daa7a1><div class="one" data-v-a6daa7a1><h2 data-v-a6daa7a1>Precio</h2><h3 data-v-a6daa7a1>$ 50.000</h3></div><div data-v-a6daa7a1><h2 data-v-a6daa7a1>Descuento de la oferta</h2><h3 data-v-a6daa7a1>$ 0.0</h3></div><div data-v-a6daa7a1><h2 data-v-a6daa7a1>Envìo</h2><h3 data-v-a6daa7a1>$ 10.000</h3></div><div data-v-a6daa7a1><h2 data-v-a6daa7a1>Subtotal</h2><h3 data-v-a6daa7a1>$ 60.000</h3></div></div></div></div></main>',1),wP=ke({__name:"CarroCompra",setup(t){return(e,n)=>(_e(),Ue("div",yP,[ye(Sr),_P]))}});const EP=Oe(wP,[["__scopeId","data-v-a6daa7a1"]]),IP=LC({history:JT("/cuy-art-shop/"),routes:[{path:"/",name:"Home",component:PR},{path:"/about",name:"About",component:WR},{path:"/login",name:"Login",component:lk},{path:"/registro",name:"Registro",component:Pk},{path:"/micuenta",name:"MiCuenta",component:n2,children:[{path:"informacion",name:"Informacion",component:_2},{path:"actualizar",name:"Actualizar",component:V2},{path:"vendedor",name:"Vendedor",component:K2},{path:"añadir-producto",name:"Añadir",component:J2},{path:"actualizar-producto",name:"ActualizarProd",component:rP}]},{path:"/carrito",name:"Carrito",component:fP},{path:"/producto",name:"Producto",component:vP},{path:"/compra",name:"Compra",component:EP}]}),uh=Sw(OT);uh.use(kw().use(NT));uh.use(IP);uh.mount("#app");
