(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function kl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ta(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ze(s)?ev(s):ta(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(ze(t))return t;if(Oe(t))return t}}const Xy=/;(?![^(]*\))/g,Jy=/:([^]+)/,Zy=/\/\*.*?\*\//gs;function ev(t){const e={};return t.replace(Zy,"").split(Xy).forEach(n=>{if(n){const s=n.split(Jy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kn(t){let e="";if(ze(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const s=kn(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ph(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=kn(e)),n&&(t.style=ta(n)),t}const tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nv=kl(tv);function xf(t){return!!t||t===""}const we={},Ms=[],Ot=()=>{},sv=()=>!1,rv=/^on[^a-z]/,na=t=>rv.test(t),Nl=t=>t.startsWith("onUpdate:"),ht=Object.assign,Dl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iv=Object.prototype.hasOwnProperty,ce=(t,e)=>iv.call(t,e),ee=Array.isArray,Mr=t=>sa(t)==="[object Map]",ov=t=>sa(t)==="[object Set]",te=t=>typeof t=="function",ze=t=>typeof t=="string",Pl=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Mf=t=>Oe(t)&&te(t.then)&&te(t.catch),av=Object.prototype.toString,sa=t=>av.call(t),cv=t=>sa(t).slice(8,-1),lv=t=>sa(t)==="[object Object]",Ol=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,co=kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uv=/-(\w)/g,Xt=ra(t=>t.replace(uv,(e,n)=>n?n.toUpperCase():"")),hv=/\B([A-Z])/g,ir=ra(t=>t.replace(hv,"-$1").toLowerCase()),ia=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=ra(t=>t?`on${ia(t)}`:""),Gr=(t,e)=>!Object.is(t,e),lo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},To=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gh;const dv=()=>gh||(gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Et;class Lf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function $f(t){return new Lf(t)}function fv(t,e=Et){e&&e.active&&e.effects.push(t)}function Ff(){return Et}function pv(t){Et&&Et.cleanups.push(t)}const xl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Uf=t=>(t.w&Vn)>0,Vf=t=>(t.n&Vn)>0,gv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vn},mv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Uf(r)&&!Vf(r)?r.delete(t):e[n++]=r,r.w&=~Vn,r.n&=~Vn}e.length=n}},bo=new WeakMap;let Rr=0,Vn=1;const Pc=30;let Dt;const cs=Symbol(""),Oc=Symbol("");class Ml{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fv(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Dn=!0,Vn=1<<++Rr,Rr<=Pc?gv(this):mh(this),this.fn()}finally{Rr<=Pc&&mv(this),Vn=1<<--Rr,Dt=this.parent,Dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(mh(this),this.onStop&&this.onStop(),this.active=!1)}}function mh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const Bf=[];function or(){Bf.push(Dn),Dn=!1}function ar(){const t=Bf.pop();Dn=t===void 0?!0:t}function yt(t,e,n){if(Dn&&Dt){let s=bo.get(t);s||bo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=xl()),jf(r)}}function jf(t,e){let n=!1;Rr<=Pc?Vf(t)||(t.n|=Vn,n=!Uf(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function cn(t,e,n,s,r,i){const o=bo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Ol(n)&&a.push(o.get("length")):(a.push(o.get(cs)),Mr(t)&&a.push(o.get(Oc)));break;case"delete":ee(t)||(a.push(o.get(cs)),Mr(t)&&a.push(o.get(Oc)));break;case"set":Mr(t)&&a.push(o.get(cs));break}if(a.length===1)a[0]&&xc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);xc(xl(c))}}function xc(t,e){const n=ee(t)?t:[...t];for(const s of n)s.computed&&yh(s);for(const s of n)s.computed||yh(s)}function yh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function yv(t,e){var n;return(n=bo.get(t))===null||n===void 0?void 0:n.get(e)}const vv=kl("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pl)),_v=Ll(),wv=Ll(!1,!0),Ev=Ll(!0),vh=Iv();function Iv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let i=0,o=this.length;i<o;i++)yt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(le)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){or();const s=le(this)[e].apply(this,n);return ar(),s}}),t}function Tv(t){const e=le(this);return yt(e,"has",t),e.hasOwnProperty(t)}function Ll(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Uv:Gf:e?Wf:Kf).get(s))return s;const o=ee(s);if(!t){if(o&&ce(vh,r))return Reflect.get(vh,r,i);if(r==="hasOwnProperty")return Tv}const a=Reflect.get(s,r,i);return(Pl(r)?qf.has(r):vv(r))||(t||yt(s,"get",r),e)?a:Pe(a)?o&&Ol(r)?a:a.value:Oe(a)?t?Qf(a):cr(a):a}}const bv=Hf(),Sv=Hf(!0);function Hf(t=!1){return function(n,s,r,i){let o=n[s];if(qs(o)&&Pe(o)&&!Pe(r))return!1;if(!t&&(!So(r)&&!qs(r)&&(o=le(o),r=le(r)),!ee(n)&&Pe(o)&&!Pe(r)))return o.value=r,!0;const a=ee(n)&&Ol(s)?Number(s)<n.length:ce(n,s),c=Reflect.set(n,s,r,i);return n===le(i)&&(a?Gr(r,o)&&cn(n,"set",s,r):cn(n,"add",s,r)),c}}function Cv(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&cn(t,"delete",e,void 0),s}function Av(t,e){const n=Reflect.has(t,e);return(!Pl(e)||!qf.has(e))&&yt(t,"has",e),n}function Rv(t){return yt(t,"iterate",ee(t)?"length":cs),Reflect.ownKeys(t)}const zf={get:_v,set:bv,deleteProperty:Cv,has:Av,ownKeys:Rv},kv={get:Ev,set(t,e){return!0},deleteProperty(t,e){return!0}},Nv=ht({},zf,{get:wv,set:Sv}),$l=t=>t,oa=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,s=!1){t=t.__v_raw;const r=le(t),i=le(e);n||(e!==i&&yt(r,"get",e),yt(r,"get",i));const{has:o}=oa(r),a=s?$l:n?Vl:Qr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,s=le(n),r=le(t);return e||(t!==r&&yt(s,"has",t),yt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ki(t,e=!1){return t=t.__v_raw,!e&&yt(le(t),"iterate",cs),Reflect.get(t,"size",t)}function _h(t){t=le(t);const e=le(this);return oa(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function wh(t,e){e=le(e);const n=le(this),{has:s,get:r}=oa(n);let i=s.call(n,t);i||(t=le(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Gr(e,o)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function Eh(t){const e=le(this),{has:n,get:s}=oa(e);let r=n.call(e,t);r||(t=le(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&cn(e,"delete",t,void 0),i}function Ih(){const t=le(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Wi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=le(o),c=e?$l:t?Vl:Qr;return!t&&yt(a,"iterate",cs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Gi(t,e,n){return function(...s){const r=this.__v_raw,i=le(r),o=Mr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?$l:e?Vl:Qr;return!e&&yt(i,"iterate",c?Oc:cs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:this}}function Dv(){const t={get(i){return Hi(this,i)},get size(){return Ki(this)},has:zi,add:_h,set:wh,delete:Eh,clear:Ih,forEach:Wi(!1,!1)},e={get(i){return Hi(this,i,!1,!0)},get size(){return Ki(this)},has:zi,add:_h,set:wh,delete:Eh,clear:Ih,forEach:Wi(!1,!0)},n={get(i){return Hi(this,i,!0)},get size(){return Ki(this,!0)},has(i){return zi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Wi(!0,!1)},s={get(i){return Hi(this,i,!0,!0)},get size(){return Ki(this,!0)},has(i){return zi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gi(i,!1,!1),n[i]=Gi(i,!0,!1),e[i]=Gi(i,!1,!0),s[i]=Gi(i,!0,!0)}),[t,n,e,s]}const[Pv,Ov,xv,Mv]=Dv();function Fl(t,e){const n=e?t?Mv:xv:t?Ov:Pv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ce(n,r)&&r in s?n:s,r,i)}const Lv={get:Fl(!1,!1)},$v={get:Fl(!1,!0)},Fv={get:Fl(!0,!1)},Kf=new WeakMap,Wf=new WeakMap,Gf=new WeakMap,Uv=new WeakMap;function Vv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bv(t){return t.__v_skip||!Object.isExtensible(t)?0:Vv(cv(t))}function cr(t){return qs(t)?t:Ul(t,!1,zf,Lv,Kf)}function jv(t){return Ul(t,!1,Nv,$v,Wf)}function Qf(t){return Ul(t,!0,kv,Fv,Gf)}function Ul(t,e,n,s,r){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Bv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Pn(t){return qs(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function qs(t){return!!(t&&t.__v_isReadonly)}function So(t){return!!(t&&t.__v_isShallow)}function Yf(t){return Pn(t)||qs(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Hs(t){return To(t,"__v_skip",!0),t}const Qr=t=>Oe(t)?cr(t):t,Vl=t=>Oe(t)?Qf(t):t;function Xf(t){Dn&&Dt&&(t=le(t),jf(t.dep||(t.dep=xl())))}function Jf(t,e){t=le(t);const n=t.dep;n&&xc(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Ie(t){return Zf(t,!1)}function qv(t){return Zf(t,!0)}function Zf(t,e){return Pe(t)?t:new Hv(t,e)}class Hv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Qr(e)}get value(){return Xf(this),this._value}set value(e){const n=this.__v_isShallow||So(e)||qs(e);e=n?e:le(e),Gr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qr(e),Jf(this))}}function On(t){return Pe(t)?t.value:t}const zv={get:(t,e,n)=>On(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Pe(r)&&!Pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ep(t){return Pn(t)?t:new Proxy(t,zv)}function Kv(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=Gv(t,n);return e}class Wv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return yv(le(this._object),this._key)}}function Gv(t,e,n){const s=t[e];return Pe(s)?s:new Wv(t,e,n)}var tp;class Qv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[tp]=!1,this._dirty=!0,this.effect=new Ml(e,()=>{this._dirty||(this._dirty=!0,Jf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=le(this);return Xf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}tp="__v_isReadonly";function Yv(t,e,n=!1){let s,r;const i=te(t);return i?(s=t,r=Ot):(s=t.get,r=t.set),new Qv(s,r,i||!r,n)}function xn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){aa(i,e,n)}return r}function xt(t,e,n,s){if(te(t)){const i=xn(t,e,n,s);return i&&Mf(i)&&i.catch(o=>{aa(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(xt(t[i],e,n,s));return r}function aa(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}Xv(t,n,r,s)}function Xv(t,e,n,s=!0){console.error(t)}let Yr=!1,Mc=!1;const nt=[];let zt=0;const Ls=[];let tn=null,ns=0;const np=Promise.resolve();let Bl=null;function jl(t){const e=Bl||np;return t?e.then(this?t.bind(this):t):e}function Jv(t){let e=zt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;Xr(nt[s])<t?e=s+1:n=s}return e}function ql(t){(!nt.length||!nt.includes(t,Yr&&t.allowRecurse?zt+1:zt))&&(t.id==null?nt.push(t):nt.splice(Jv(t.id),0,t),sp())}function sp(){!Yr&&!Mc&&(Mc=!0,Bl=np.then(ip))}function Zv(t){const e=nt.indexOf(t);e>zt&&nt.splice(e,1)}function e_(t){ee(t)?Ls.push(...t):(!tn||!tn.includes(t,t.allowRecurse?ns+1:ns))&&Ls.push(t),sp()}function Th(t,e=Yr?zt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function rp(t){if(Ls.length){const e=[...new Set(Ls)];if(Ls.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,s)=>Xr(n)-Xr(s)),ns=0;ns<tn.length;ns++)tn[ns]();tn=null,ns=0}}const Xr=t=>t.id==null?1/0:t.id,t_=(t,e)=>{const n=Xr(t)-Xr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ip(t){Mc=!1,Yr=!0,nt.sort(t_);const e=Ot;try{for(zt=0;zt<nt.length;zt++){const n=nt[zt];n&&n.active!==!1&&xn(n,null,14)}}finally{zt=0,nt.length=0,rp(),Yr=!1,Bl=null,(nt.length||Ls.length)&&ip()}}function n_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(r=n.map(g=>ze(g)?g.trim():g)),h&&(r=n.map(Dc))}let a,c=s[a=tc(e)]||s[a=tc(Xt(e))];!c&&i&&(c=s[a=tc(ir(e))]),c&&xt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(l,t,6,r)}}function op(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=op(l,e,!0);u&&(a=!0,ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Oe(t)&&s.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):ht(o,i),Oe(t)&&s.set(t,o),o)}function ca(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,ir(e))||ce(t,e))}let Tt=null,la=null;function Co(t){const e=Tt;return Tt=t,la=t&&t.type.__scopeId||null,e}function zn(t){la=t}function Kn(){la=null}function s_(t,e=Tt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ph(-1);const i=Co(e);let o;try{o=t(...r)}finally{Co(i),s._d&&Ph(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function nc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:w}=t;let A,C;const M=Co(t);try{if(n.shapeFlag&4){const z=r||s;A=Ht(u.call(z,z,h,i,g,d,v)),C=c}else{const z=e;A=Ht(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),C=e.props?c:r_(c)}}catch(z){Fr.length=0,aa(z,t,1),A=Te(Jr)}let N=A;if(C&&w!==!1){const z=Object.keys(C),{shapeFlag:X}=N;z.length&&X&7&&(o&&z.some(Nl)&&(C=i_(C,o)),N=zs(N,C))}return n.dirs&&(N=zs(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),A=N,Co(M),A}const r_=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},i_=(t,e)=>{const n={};for(const s in t)(!Nl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function o_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ca(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bh(s,o,l):!0:!!o;return!1}function bh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ca(n,i))return!0}return!1}function a_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const c_=t=>t.__isSuspense;function l_(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):e_(t)}function uo(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=De||Tt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}const Qi={};function Lr(t,e,n){return ap(t,e,n)}function ap(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){const a=Ff()===(De==null?void 0:De.scope)?De:null;let c,l=!1,u=!1;if(Pe(t)?(c=()=>t.value,l=So(t)):Pn(t)?(c=()=>t,s=!0):ee(t)?(u=!0,l=t.some(N=>Pn(N)||So(N)),c=()=>t.map(N=>{if(Pe(N))return N.value;if(Pn(N))return rs(N);if(te(N))return xn(N,a,2)})):te(t)?e?c=()=>xn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),xt(t,a,3,[d])}:c=Ot,e&&s){const N=c;c=()=>rs(N())}let h,d=N=>{h=C.onStop=()=>{xn(N,a,4)}},g;if(ei)if(d=Ot,e?n&&xt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const N=sw();g=N.__watcherHandles||(N.__watcherHandles=[])}else return Ot;let v=u?new Array(t.length).fill(Qi):Qi;const w=()=>{if(C.active)if(e){const N=C.run();(s||l||(u?N.some((z,X)=>Gr(z,v[X])):Gr(N,v)))&&(h&&h(),xt(e,a,3,[N,v===Qi?void 0:u&&v[0]===Qi?[]:v,d]),v=N)}else C.run()};w.allowRecurse=!!e;let A;r==="sync"?A=w:r==="post"?A=()=>pt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),A=()=>ql(w));const C=new Ml(c,A);e?n?w():v=C.run():r==="post"?pt(C.run.bind(C),a&&a.suspense):C.run();const M=()=>{C.stop(),a&&a.scope&&Dl(a.scope.effects,C)};return g&&g.push(M),M}function u_(t,e,n){const s=this.proxy,r=ze(t)?t.includes(".")?cp(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=De;Ks(this);const a=ap(r,i.bind(s),n);return o?Ks(o):ls(),a}function cp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function rs(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))rs(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)rs(t[n],e);else if(ov(t)||Mr(t))t.forEach(n=>{rs(n,e)});else if(lv(t))for(const n in t)rs(t[n],e);return t}function xe(t){return te(t)?{setup:t,name:t.name}:t}const ho=t=>!!t.type.__asyncLoader,lp=t=>t.type.__isKeepAlive;function h_(t,e){up(t,"a",e)}function d_(t,e){up(t,"da",e)}function up(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)lp(r.parent.vnode)&&f_(s,e,n,r),r=r.parent}}function f_(t,e,n,s){const r=ua(e,t,s,!0);hp(()=>{Dl(s[e],r)},n)}function ua(t,e,n=De,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;or(),Ks(n);const a=xt(e,n,t,o);return ls(),ar(),a});return s?r.unshift(i):r.push(i),i}}const gn=t=>(e,n=De)=>(!ei||t==="sp")&&ua(t,(...s)=>e(...s),n),Hl=gn("bm"),p_=gn("m"),g_=gn("bu"),m_=gn("u"),y_=gn("bum"),hp=gn("um"),v_=gn("sp"),__=gn("rtg"),w_=gn("rtc");function E_(t,e=De){ua("ec",t,e)}function ye(t,e){const n=Tt;if(n===null)return t;const s=pa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&rs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Jn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(or(),xt(c,n,8,[t.el,a,t,e]),ar())}}const dp="components";function I_(t,e){return b_(dp,t,!0,e)||t}const T_=Symbol();function b_(t,e,n=!0,s=!1){const r=Tt||De;if(r){const i=r.type;if(t===dp){const a=ew(i,!1);if(a&&(a===e||a===Xt(e)||a===ia(Xt(e))))return i}const o=Sh(r[t]||i[t],e)||Sh(r.appContext[t],e);return!o&&s?i:o}}function Sh(t,e){return t&&(t[e]||t[Xt(e)]||t[ia(Xt(e))])}const Lc=t=>t?Tp(t)?pa(t)||t.proxy:Lc(t.parent):null,$r=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lc(t.parent),$root:t=>Lc(t.root),$emit:t=>t.emit,$options:t=>zl(t),$forceUpdate:t=>t.f||(t.f=()=>ql(t.update)),$nextTick:t=>t.n||(t.n=jl.bind(t.proxy)),$watch:t=>u_.bind(t)}),sc=(t,e)=>t!==we&&!t.__isScriptSetup&&ce(t,e),S_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(sc(s,e))return o[e]=1,s[e];if(r!==we&&ce(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==we&&ce(n,e))return o[e]=4,n[e];$c&&(o[e]=0)}}const u=$r[e];let h,d;if(u)return e==="$attrs"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return sc(r,e)?(r[e]=n,!0):s!==we&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ce(t,o)||sc(e,o)||(a=i[0])&&ce(a,o)||ce(s,o)||ce($r,o)||ce(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let $c=!0;function C_(t){const e=zl(t),n=t.proxy,s=t.ctx;$c=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:w,deactivated:A,beforeDestroy:C,beforeUnmount:M,destroyed:N,unmounted:z,render:X,renderTracked:de,renderTriggered:Z,errorCaptured:G,serverPrefetch:Se,expose:Ae,inheritAttrs:Ge,components:se,directives:yn,filters:_t}=e;if(l&&A_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const ge=o[ve];te(ge)&&(s[ve]=ge.bind(n))}if(r){const ve=r.call(n,n);Oe(ve)&&(t.data=cr(ve))}if($c=!0,i)for(const ve in i){const ge=i[ve],At=te(ge)?ge.bind(n,n):te(ge.get)?ge.get.bind(n,n):Ot,Xn=!te(ge)&&te(ge.set)?ge.set.bind(n):Ot,Rt=It({get:At,set:Xn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:ft=>Rt.value=ft})}if(a)for(const ve in a)fp(a[ve],s,n,ve);if(c){const ve=te(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{uo(ge,ve[ge])})}u&&Ch(u,t,"c");function Me(ve,ge){ee(ge)?ge.forEach(At=>ve(At.bind(n))):ge&&ve(ge.bind(n))}if(Me(Hl,h),Me(p_,d),Me(g_,g),Me(m_,v),Me(h_,w),Me(d_,A),Me(E_,G),Me(w_,de),Me(__,Z),Me(y_,M),Me(hp,z),Me(v_,Se),ee(Ae))if(Ae.length){const ve=t.exposed||(t.exposed={});Ae.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:At=>n[ge]=At})})}else t.exposed||(t.exposed={});X&&t.render===Ot&&(t.render=X),Ge!=null&&(t.inheritAttrs=Ge),se&&(t.components=se),yn&&(t.directives=yn)}function A_(t,e,n=Ot,s=!1){ee(t)&&(t=Fc(t));for(const r in t){const i=t[r];let o;Oe(i)?"default"in i?o=Mt(i.from||r,i.default,!0):o=Mt(i.from||r):o=Mt(i),Pe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ch(t,e,n){xt(ee(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fp(t,e,n,s){const r=s.includes(".")?cp(n,s):()=>n[s];if(ze(t)){const i=e[t];te(i)&&Lr(r,i)}else if(te(t))Lr(r,t.bind(n));else if(Oe(t))if(ee(t))t.forEach(i=>fp(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Lr(r,i,t)}}function zl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ao(c,l,o,!0)),Ao(c,e,o)),Oe(e)&&i.set(e,c),c}function Ao(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ao(t,i,n,!0),r&&r.forEach(o=>Ao(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=R_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const R_={data:Ah,props:es,emits:es,methods:es,computed:es,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:es,directives:es,watch:N_,provide:Ah,inject:k_};function Ah(t,e){return e?t?function(){return ht(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function k_(t,e){return es(Fc(t),Fc(e))}function Fc(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function es(t,e){return t?ht(ht(Object.create(null),t),e):e}function N_(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const s in e)n[s]=lt(t[s],e[s]);return n}function D_(t,e,n,s=!1){const r={},i={};To(i,da,1),t.propsDefaults=Object.create(null),pp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:jv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function P_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=le(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ca(t.emitsOptions,d))continue;const g=e[d];if(c)if(ce(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=Xt(d);r[v]=Uc(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{pp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=ir(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Uc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&cn(t,"set","$attrs")}function pp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(co(c))continue;const l=e[c];let u;r&&ce(r,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ca(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=le(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Uc(r,c,h,l[h],t,!ce(l,h))}}return o}function Uc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ks(r),s=l[n]=c.call(null,e),ls())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ir(n))&&(s=!0))}return s}function gp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[d,g]=gp(h,e,!0);ht(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Oe(t)&&s.set(t,Ms),Ms;if(ee(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);Rh(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Xt(u);if(Rh(h)){const d=i[u],g=o[h]=ee(d)||te(d)?{type:d}:Object.assign({},d);if(g){const v=Dh(Boolean,g.type),w=Dh(String,g.type);g[0]=v>-1,g[1]=w<0||v<w,(v>-1||ce(g,"default"))&&a.push(h)}}}const l=[o,a];return Oe(t)&&s.set(t,l),l}function Rh(t){return t[0]!=="$"}function kh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Nh(t,e){return kh(t)===kh(e)}function Dh(t,e){return ee(e)?e.findIndex(n=>Nh(n,t)):te(e)&&Nh(e,t)?0:-1}const mp=t=>t[0]==="_"||t==="$stable",Kl=t=>ee(t)?t.map(Ht):[Ht(t)],O_=(t,e,n)=>{if(e._n)return e;const s=s_((...r)=>Kl(e(...r)),n);return s._c=!1,s},yp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(mp(r))continue;const i=t[r];if(te(i))e[r]=O_(r,i,s);else if(i!=null){const o=Kl(i);e[r]=()=>o}}},vp=(t,e)=>{const n=Kl(e);t.slots.default=()=>n},x_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),To(e,"_",n)):yp(e,t.slots={})}else t.slots={},e&&vp(t,e);To(t.slots,da,1)},M_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ht(r,e),!n&&a===1&&delete r._):(i=!e.$stable,yp(e,r)),o=e}else e&&(vp(t,e),o={default:1});if(i)for(const a in r)!mp(a)&&!(a in o)&&delete r[a]};function _p(){return{app:null,config:{isNativeTag:sv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L_=0;function $_(t,e){return function(s,r=null){te(s)||(s=Object.assign({},s)),r!=null&&!Oe(r)&&(r=null);const i=_p(),o=new Set;let a=!1;const c=i.app={_uid:L_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:rw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Te(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,pa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Vc(t,e,n,s,r=!1){if(ee(t)){t.forEach((d,g)=>Vc(d,e&&(ee(e)?e[g]:e),n,s,r));return}if(ho(s)&&!r)return;const i=s.shapeFlag&4?pa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ze(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):Pe(l)&&(l.value=null)),te(c))xn(c,a,12,[o,u]);else{const d=ze(c),g=Pe(c);if(d||g){const v=()=>{if(t.f){const w=d?ce(h,c)?h[c]:u[c]:c.value;r?ee(w)&&Dl(w,i):ee(w)?w.includes(i)||w.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,pt(v,n)):v()}}}const pt=l_;function F_(t){return U_(t)}function U_(t,e){const n=dv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ot,insertStaticContent:v}=t,w=(f,p,y,_=null,T=null,k=null,x=!1,R=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!Tr(f,p)&&(_=P(f),ft(f,T,k,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:b,ref:j,shapeFlag:F}=p;switch(b){case ha:A(f,p,y,_);break;case Jr:C(f,p,y,_);break;case fo:f==null&&M(p,y,_,x);break;case qt:se(f,p,y,_,T,k,x,R,D);break;default:F&1?X(f,p,y,_,T,k,x,R,D):F&6?yn(f,p,y,_,T,k,x,R,D):(F&64||F&128)&&b.process(f,p,y,_,T,k,x,R,D,ae)}j!=null&&T&&Vc(j,f&&f.ref,k,p||f,!p)},A=(f,p,y,_)=>{if(f==null)s(p.el=a(p.children),y,_);else{const T=p.el=f.el;p.children!==f.children&&l(T,p.children)}},C=(f,p,y,_)=>{f==null?s(p.el=c(p.children||""),y,_):p.el=f.el},M=(f,p,y,_)=>{[f.el,f.anchor]=v(f.children,p,y,_,f.el,f.anchor)},N=({el:f,anchor:p},y,_)=>{let T;for(;f&&f!==p;)T=d(f),s(f,y,_),f=T;s(p,y,_)},z=({el:f,anchor:p})=>{let y;for(;f&&f!==p;)y=d(f),r(f),f=y;r(p)},X=(f,p,y,_,T,k,x,R,D)=>{x=x||p.type==="svg",f==null?de(p,y,_,T,k,x,R,D):Se(f,p,T,k,x,R,D)},de=(f,p,y,_,T,k,x,R)=>{let D,b;const{type:j,props:F,shapeFlag:q,transition:Q,dirs:re}=f;if(D=f.el=o(f.type,k,F&&F.is,F),q&8?u(D,f.children):q&16&&G(f.children,D,null,_,T,k&&j!=="foreignObject",x,R),re&&Jn(f,null,_,"created"),Z(D,f,f.scopeId,x,_),F){for(const me in F)me!=="value"&&!co(me)&&i(D,me,null,F[me],k,f.children,_,T,L);"value"in F&&i(D,"value",null,F.value),(b=F.onVnodeBeforeMount)&&jt(b,_,f)}re&&Jn(f,null,_,"beforeMount");const _e=(!T||T&&!T.pendingBranch)&&Q&&!Q.persisted;_e&&Q.beforeEnter(D),s(D,p,y),((b=F&&F.onVnodeMounted)||_e||re)&&pt(()=>{b&&jt(b,_,f),_e&&Q.enter(D),re&&Jn(f,null,_,"mounted")},T)},Z=(f,p,y,_,T)=>{if(y&&g(f,y),_)for(let k=0;k<_.length;k++)g(f,_[k]);if(T){let k=T.subTree;if(p===k){const x=T.vnode;Z(f,x,x.scopeId,x.slotScopeIds,T.parent)}}},G=(f,p,y,_,T,k,x,R,D=0)=>{for(let b=D;b<f.length;b++){const j=f[b]=R?In(f[b]):Ht(f[b]);w(null,j,p,y,_,T,k,x,R)}},Se=(f,p,y,_,T,k,x)=>{const R=p.el=f.el;let{patchFlag:D,dynamicChildren:b,dirs:j}=p;D|=f.patchFlag&16;const F=f.props||we,q=p.props||we;let Q;y&&Zn(y,!1),(Q=q.onVnodeBeforeUpdate)&&jt(Q,y,p,f),j&&Jn(p,f,y,"beforeUpdate"),y&&Zn(y,!0);const re=T&&p.type!=="foreignObject";if(b?Ae(f.dynamicChildren,b,R,y,_,re,k):x||ge(f,p,R,null,y,_,re,k,!1),D>0){if(D&16)Ge(R,p,F,q,y,_,T);else if(D&2&&F.class!==q.class&&i(R,"class",null,q.class,T),D&4&&i(R,"style",F.style,q.style,T),D&8){const _e=p.dynamicProps;for(let me=0;me<_e.length;me++){const Le=_e[me],kt=F[Le],Ss=q[Le];(Ss!==kt||Le==="value")&&i(R,Le,kt,Ss,T,f.children,y,_,L)}}D&1&&f.children!==p.children&&u(R,p.children)}else!x&&b==null&&Ge(R,p,F,q,y,_,T);((Q=q.onVnodeUpdated)||j)&&pt(()=>{Q&&jt(Q,y,p,f),j&&Jn(p,f,y,"updated")},_)},Ae=(f,p,y,_,T,k,x)=>{for(let R=0;R<p.length;R++){const D=f[R],b=p[R],j=D.el&&(D.type===qt||!Tr(D,b)||D.shapeFlag&70)?h(D.el):y;w(D,b,j,null,_,T,k,x,!0)}},Ge=(f,p,y,_,T,k,x)=>{if(y!==_){if(y!==we)for(const R in y)!co(R)&&!(R in _)&&i(f,R,y[R],null,x,p.children,T,k,L);for(const R in _){if(co(R))continue;const D=_[R],b=y[R];D!==b&&R!=="value"&&i(f,R,b,D,x,p.children,T,k,L)}"value"in _&&i(f,"value",y.value,_.value)}},se=(f,p,y,_,T,k,x,R,D)=>{const b=p.el=f?f.el:a(""),j=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:Q}=p;Q&&(R=R?R.concat(Q):Q),f==null?(s(b,y,_),s(j,y,_),G(p.children,y,j,T,k,x,R,D)):F>0&&F&64&&q&&f.dynamicChildren?(Ae(f.dynamicChildren,q,y,T,k,x,R),(p.key!=null||T&&p===T.subTree)&&wp(f,p,!0)):ge(f,p,y,j,T,k,x,R,D)},yn=(f,p,y,_,T,k,x,R,D)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?T.ctx.activate(p,y,_,x,D):_t(p,y,_,T,k,x,D):qe(f,p,D)},_t=(f,p,y,_,T,k,x)=>{const R=f.component=G_(f,_,T);if(lp(f)&&(R.ctx.renderer=ae),Y_(R),R.asyncDep){if(T&&T.registerDep(R,Me),!f.el){const D=R.subTree=Te(Jr);C(null,D,p,y)}return}Me(R,f,p,y,T,k,x)},qe=(f,p,y)=>{const _=p.component=f.component;if(o_(f,p,y))if(_.asyncDep&&!_.asyncResolved){ve(_,p,y);return}else _.next=p,Zv(_.update),_.update();else p.el=f.el,_.vnode=p},Me=(f,p,y,_,T,k,x)=>{const R=()=>{if(f.isMounted){let{next:j,bu:F,u:q,parent:Q,vnode:re}=f,_e=j,me;Zn(f,!1),j?(j.el=re.el,ve(f,j,x)):j=re,F&&lo(F),(me=j.props&&j.props.onVnodeBeforeUpdate)&&jt(me,Q,j,re),Zn(f,!0);const Le=nc(f),kt=f.subTree;f.subTree=Le,w(kt,Le,h(kt.el),P(kt),f,T,k),j.el=Le.el,_e===null&&a_(f,Le.el),q&&pt(q,T),(me=j.props&&j.props.onVnodeUpdated)&&pt(()=>jt(me,Q,j,re),T)}else{let j;const{el:F,props:q}=p,{bm:Q,m:re,parent:_e}=f,me=ho(p);if(Zn(f,!1),Q&&lo(Q),!me&&(j=q&&q.onVnodeBeforeMount)&&jt(j,_e,p),Zn(f,!0),F&&ne){const Le=()=>{f.subTree=nc(f),ne(F,f.subTree,f,T,null)};me?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Le()):Le()}else{const Le=f.subTree=nc(f);w(null,Le,y,_,f,T,k),p.el=Le.el}if(re&&pt(re,T),!me&&(j=q&&q.onVnodeMounted)){const Le=p;pt(()=>jt(j,_e,Le),T)}(p.shapeFlag&256||_e&&ho(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&pt(f.a,T),f.isMounted=!0,p=y=_=null}},D=f.effect=new Ml(R,()=>ql(b),f.scope),b=f.update=()=>D.run();b.id=f.uid,Zn(f,!0),b()},ve=(f,p,y)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,P_(f,p.props,_,y),M_(f,p.children,y),or(),Th(),ar()},ge=(f,p,y,_,T,k,x,R,D=!1)=>{const b=f&&f.children,j=f?f.shapeFlag:0,F=p.children,{patchFlag:q,shapeFlag:Q}=p;if(q>0){if(q&128){Xn(b,F,y,_,T,k,x,R,D);return}else if(q&256){At(b,F,y,_,T,k,x,R,D);return}}Q&8?(j&16&&L(b,T,k),F!==b&&u(y,F)):j&16?Q&16?Xn(b,F,y,_,T,k,x,R,D):L(b,T,k,!0):(j&8&&u(y,""),Q&16&&G(F,y,_,T,k,x,R,D))},At=(f,p,y,_,T,k,x,R,D)=>{f=f||Ms,p=p||Ms;const b=f.length,j=p.length,F=Math.min(b,j);let q;for(q=0;q<F;q++){const Q=p[q]=D?In(p[q]):Ht(p[q]);w(f[q],Q,y,null,T,k,x,R,D)}b>j?L(f,T,k,!0,!1,F):G(p,y,_,T,k,x,R,D,F)},Xn=(f,p,y,_,T,k,x,R,D)=>{let b=0;const j=p.length;let F=f.length-1,q=j-1;for(;b<=F&&b<=q;){const Q=f[b],re=p[b]=D?In(p[b]):Ht(p[b]);if(Tr(Q,re))w(Q,re,y,null,T,k,x,R,D);else break;b++}for(;b<=F&&b<=q;){const Q=f[F],re=p[q]=D?In(p[q]):Ht(p[q]);if(Tr(Q,re))w(Q,re,y,null,T,k,x,R,D);else break;F--,q--}if(b>F){if(b<=q){const Q=q+1,re=Q<j?p[Q].el:_;for(;b<=q;)w(null,p[b]=D?In(p[b]):Ht(p[b]),y,re,T,k,x,R,D),b++}}else if(b>q)for(;b<=F;)ft(f[b],T,k,!0),b++;else{const Q=b,re=b,_e=new Map;for(b=re;b<=q;b++){const wt=p[b]=D?In(p[b]):Ht(p[b]);wt.key!=null&&_e.set(wt.key,b)}let me,Le=0;const kt=q-re+1;let Ss=!1,hh=0;const Ir=new Array(kt);for(b=0;b<kt;b++)Ir[b]=0;for(b=Q;b<=F;b++){const wt=f[b];if(Le>=kt){ft(wt,T,k,!0);continue}let Bt;if(wt.key!=null)Bt=_e.get(wt.key);else for(me=re;me<=q;me++)if(Ir[me-re]===0&&Tr(wt,p[me])){Bt=me;break}Bt===void 0?ft(wt,T,k,!0):(Ir[Bt-re]=b+1,Bt>=hh?hh=Bt:Ss=!0,w(wt,p[Bt],y,null,T,k,x,R,D),Le++)}const dh=Ss?V_(Ir):Ms;for(me=dh.length-1,b=kt-1;b>=0;b--){const wt=re+b,Bt=p[wt],fh=wt+1<j?p[wt+1].el:_;Ir[b]===0?w(null,Bt,y,fh,T,k,x,R,D):Ss&&(me<0||b!==dh[me]?Rt(Bt,y,fh,2):me--)}}},Rt=(f,p,y,_,T=null)=>{const{el:k,type:x,transition:R,children:D,shapeFlag:b}=f;if(b&6){Rt(f.component.subTree,p,y,_);return}if(b&128){f.suspense.move(p,y,_);return}if(b&64){x.move(f,p,y,ae);return}if(x===qt){s(k,p,y);for(let F=0;F<D.length;F++)Rt(D[F],p,y,_);s(f.anchor,p,y);return}if(x===fo){N(f,p,y);return}if(_!==2&&b&1&&R)if(_===0)R.beforeEnter(k),s(k,p,y),pt(()=>R.enter(k),T);else{const{leave:F,delayLeave:q,afterLeave:Q}=R,re=()=>s(k,p,y),_e=()=>{F(k,()=>{re(),Q&&Q()})};q?q(k,re,_e):_e()}else s(k,p,y)},ft=(f,p,y,_=!1,T=!1)=>{const{type:k,props:x,ref:R,children:D,dynamicChildren:b,shapeFlag:j,patchFlag:F,dirs:q}=f;if(R!=null&&Vc(R,null,y,f,!0),j&256){p.ctx.deactivate(f);return}const Q=j&1&&q,re=!ho(f);let _e;if(re&&(_e=x&&x.onVnodeBeforeUnmount)&&jt(_e,p,f),j&6)E(f.component,y,_);else{if(j&128){f.suspense.unmount(y,_);return}Q&&Jn(f,null,p,"beforeUnmount"),j&64?f.type.remove(f,p,y,T,ae,_):b&&(k!==qt||F>0&&F&64)?L(b,p,y,!1,!0):(k===qt&&F&384||!T&&j&16)&&L(D,p,y),_&&bs(f)}(re&&(_e=x&&x.onVnodeUnmounted)||Q)&&pt(()=>{_e&&jt(_e,p,f),Q&&Jn(f,null,p,"unmounted")},y)},bs=f=>{const{type:p,el:y,anchor:_,transition:T}=f;if(p===qt){qi(y,_);return}if(p===fo){z(f);return}const k=()=>{r(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:x,delayLeave:R}=T,D=()=>x(y,k);R?R(f.el,k,D):D()}else k()},qi=(f,p)=>{let y;for(;f!==p;)y=d(f),r(f),f=y;r(p)},E=(f,p,y)=>{const{bum:_,scope:T,update:k,subTree:x,um:R}=f;_&&lo(_),T.stop(),k&&(k.active=!1,ft(x,f,p,y)),R&&pt(R,p),pt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},L=(f,p,y,_=!1,T=!1,k=0)=>{for(let x=k;x<f.length;x++)ft(f[x],p,y,_,T)},P=f=>f.shapeFlag&6?P(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,p,y)=>{f==null?p._vnode&&ft(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,y),Th(),rp(),p._vnode=f},ae={p:w,um:ft,m:Rt,r:bs,mt:_t,mc:G,pc:ge,pbc:Ae,n:P,o:t};let Re,ne;return e&&([Re,ne]=e(ae)),{render:V,hydrate:Re,createApp:$_(V,Re)}}function Zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wp(t,e,n=!1){const s=t.children,r=e.children;if(ee(s)&&ee(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=In(r[i]),a.el=o.el),n||wp(o,a)),a.type===ha&&(a.el=o.el)}}function V_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const B_=t=>t.__isTeleport,qt=Symbol(void 0),ha=Symbol(void 0),Jr=Symbol(void 0),fo=Symbol(void 0),Fr=[];let Pt=null;function Ve(t=!1){Fr.push(Pt=t?null:[])}function j_(){Fr.pop(),Pt=Fr[Fr.length-1]||null}let Zr=1;function Ph(t){Zr+=t}function Ep(t){return t.dynamicChildren=Zr>0?Pt||Ms:null,j_(),Zr>0&&Pt&&Pt.push(t),t}function vt(t,e,n,s,r,i){return Ep(m(t,e,n,s,r,i,!0))}function lr(t,e,n,s,r){return Ep(Te(t,e,n,s,r,!0))}function Bc(t){return t?t.__v_isVNode===!0:!1}function Tr(t,e){return t.type===e.type&&t.key===e.key}const da="__vInternal",Ip=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>t!=null?ze(t)||Pe(t)||te(t)?{i:Tt,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,i=t===qt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ip(e),ref:e&&po(e),scopeId:la,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Wl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),Zr>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Te=q_;function q_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===T_)&&(t=Jr),Bc(t)){const a=zs(t,e,!0);return n&&Wl(a,n),Zr>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(tw(t)&&(t=t.__vccOpts),e){e=jc(e);let{class:a,style:c}=e;a&&!ze(a)&&(e.class=kn(a)),Oe(c)&&(Yf(c)&&!ee(c)&&(c=ht({},c)),e.style=ta(c))}const o=ze(t)?1:c_(t)?128:B_(t)?64:Oe(t)?4:te(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function jc(t){return t?Yf(t)||da in t?ht({},t):t:null}function zs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?z_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ip(a),ref:e&&e.ref?n&&r?ee(r)?r.concat(po(e)):[r,po(e)]:po(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zs(t.ssContent),ssFallback:t.ssFallback&&zs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function H_(t=" ",e=0){return Te(ha,null,t,e)}function fa(t,e){const n=Te(fo,null,t);return n.staticCount=e,n}function Ht(t){return t==null||typeof t=="boolean"?Te(Jr):ee(t)?Te(qt,null,t.slice()):typeof t=="object"?In(t):Te(ha,null,String(t))}function In(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zs(t)}function Wl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Wl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(da in e)?e._ctx=Tt:r===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),s&64?(n=16,e=[H_(e)]):n=8);t.children=e,t.shapeFlag|=n}function z_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=kn([e.class,s.class]));else if(r==="style")e.style=ta([e.style,s.style]);else if(na(r)){const i=e[r],o=s[r];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function jt(t,e,n,s=null){xt(t,e,7,[n,s])}const K_=_p();let W_=0;function G_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||K_,i={uid:W_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(s,r),emitsOptions:op(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=n_.bind(null,i),t.ce&&t.ce(i),i}let De=null;const Q_=()=>De||Tt,Ks=t=>{De=t,t.scope.on()},ls=()=>{De&&De.scope.off(),De=null};function Tp(t){return t.vnode.shapeFlag&4}let ei=!1;function Y_(t,e=!1){ei=e;const{props:n,children:s}=t.vnode,r=Tp(t);D_(t,n,r,e),x_(t,s);const i=r?X_(t,e):void 0;return ei=!1,i}function X_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hs(new Proxy(t.ctx,S_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Z_(t):null;Ks(t),or();const i=xn(s,t,0,[t.props,r]);if(ar(),ls(),Mf(i)){if(i.then(ls,ls),e)return i.then(o=>{Oh(t,o,e)}).catch(o=>{aa(o,t,0)});t.asyncDep=i}else Oh(t,i,e)}else bp(t,e)}function Oh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=ep(e)),bp(t,n)}let xh;function bp(t,e,n){const s=t.type;if(!t.render){if(!e&&xh&&!s.render){const r=s.template||zl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ht(ht({isCustomElement:i,delimiters:a},o),c);s.render=xh(r,l)}}t.render=s.render||Ot}Ks(t),or(),C_(t),ar(),ls()}function J_(t){return new Proxy(t.attrs,{get(e,n){return yt(t,"get","$attrs"),e[n]}})}function Z_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=J_(t))},slots:t.slots,emit:t.emit,expose:e}}function pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ep(Hs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $r)return $r[n](t)},has(e,n){return n in e||n in $r}}))}function ew(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function tw(t){return te(t)&&"__vccOpts"in t}const It=(t,e)=>Yv(t,e,ei);function Sp(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!ee(e)?Bc(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Bc(n)&&(n=[n]),Te(t,e,n))}const nw=Symbol(""),sw=()=>Mt(nw),rw="3.2.47",iw="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,Mh=ss&&ss.createElement("template"),ow={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ss.createElementNS(iw,t):ss.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ss.createTextNode(t),createComment:t=>ss.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ss.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Mh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Mh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function aw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cw(t,e,n){const s=t.style,r=ze(n);if(n&&!r){if(e&&!ze(e))for(const i in e)n[i]==null&&qc(s,i,"");for(const i in n)qc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Lh=/\s*!important$/;function qc(t,e,n){if(ee(n))n.forEach(s=>qc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lw(t,e);Lh.test(n)?t.setProperty(ir(s),n.replace(Lh,""),"important"):t[s]=n}}const $h=["Webkit","Moz","ms"],rc={};function lw(t,e){const n=rc[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return rc[e]=s;s=ia(s);for(let r=0;r<$h.length;r++){const i=$h[r]+s;if(i in t)return rc[e]=i}return e}const Fh="http://www.w3.org/1999/xlink";function uw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fh,e.slice(6,e.length)):t.setAttributeNS(Fh,e,n);else{const i=nv(e);n==null||i&&!xf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ks(t,e,n,s){t.addEventListener(e,n,s)}function dw(t,e,n,s){t.removeEventListener(e,n,s)}function fw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=pw(e);if(s){const l=i[e]=yw(s,r);ks(t,a,l,c)}else o&&(dw(t,a,o,c),i[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function pw(t){let e;if(Uh.test(t)){e={};let s;for(;s=t.match(Uh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ir(t.slice(2)),e]}let ic=0;const gw=Promise.resolve(),mw=()=>ic||(gw.then(()=>ic=0),ic=Date.now());function yw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;xt(vw(s,n.value),e,5,[s])};return n.value=t,n.attached=mw(),n}function vw(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Vh=/^on[a-z]/,_w=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?aw(t,s,r):e==="style"?cw(t,n,s):na(e)?Nl(e)||fw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ww(t,e,s,r))?hw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uw(t,e,s,r))};function ww(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Vh.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vh.test(e)&&ze(n)?!1:e in t}const Bh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>lo(e,n):e};function Ew(t){t.target.composing=!0}function jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xe={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Bh(r);const i=s||r.props&&r.props.type==="number";ks(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Dc(a)),t._assign(a)}),n&&ks(t,"change",()=>{t.value=t.value.trim()}),e||(ks(t,"compositionstart",Ew),ks(t,"compositionend",jh),ks(t,"change",jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Bh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Dc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Nt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):br(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),br(t,!0),s.enter(t)):s.leave(t,()=>{br(t,!1)}):br(t,e))},beforeUnmount(t,{value:e}){br(t,e)}};function br(t,e){t.style.display=e?t._vod:"none"}const Iw=ht({patchProp:_w},ow);let qh;function Tw(){return qh||(qh=F_(Iw))}const bw=(...t)=>{const e=Tw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Sw(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sw(t){return ze(t)?document.querySelector(t):t}var Cw=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Cp;const ga=t=>Cp=t,Ap=Symbol();function Hc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ur;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ur||(Ur={}));function Aw(){const t=$f(!0),e=t.run(()=>Ie({}));let n=[],s=[];const r=Hs({install(i){ga(r),r._a=i,i.provide(Ap,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Cw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Rp=()=>{};function Hh(t,e,n,s=Rp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Ff()&&pv(r),r}function Cs(t,...e){t.slice().forEach(n=>{n(...e)})}function zc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Hc(r)&&Hc(s)&&t.hasOwnProperty(n)&&!Pe(s)&&!Pn(s)?t[n]=zc(r,s):t[n]=s}return t}const Rw=Symbol();function kw(t){return!Hc(t)||!t.hasOwnProperty(Rw)}const{assign:En}=Object;function Nw(t){return!!(Pe(t)&&t.effect)}function Dw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Kv(n.state.value[t]);return En(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Hs(It(()=>{ga(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=kp(t,l,e,n,s,!0),c}function kp(t,e,n={},s,r,i){let o;const a=En({actions:{}},n),c={deep:!0};let l,u,h=Hs([]),d=Hs([]),g;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),Ie({});let w;function A(Z){let G;l=u=!1,typeof Z=="function"?(Z(s.state.value[t]),G={type:Ur.patchFunction,storeId:t,events:g}):(zc(s.state.value[t],Z),G={type:Ur.patchObject,payload:Z,storeId:t,events:g});const Se=w=Symbol();jl().then(()=>{w===Se&&(l=!0)}),u=!0,Cs(h,G,s.state.value[t])}const C=i?function(){const{state:G}=n,Se=G?G():{};this.$patch(Ae=>{En(Ae,Se)})}:Rp;function M(){o.stop(),h=[],d=[],s._s.delete(t)}function N(Z,G){return function(){ga(s);const Se=Array.from(arguments),Ae=[],Ge=[];function se(qe){Ae.push(qe)}function yn(qe){Ge.push(qe)}Cs(d,{args:Se,name:Z,store:X,after:se,onError:yn});let _t;try{_t=G.apply(this&&this.$id===t?this:X,Se)}catch(qe){throw Cs(Ge,qe),qe}return _t instanceof Promise?_t.then(qe=>(Cs(Ae,qe),qe)).catch(qe=>(Cs(Ge,qe),Promise.reject(qe))):(Cs(Ae,_t),_t)}}const z={_p:s,$id:t,$onAction:Hh.bind(null,d),$patch:A,$reset:C,$subscribe(Z,G={}){const Se=Hh(h,Z,G.detached,()=>Ae()),Ae=o.run(()=>Lr(()=>s.state.value[t],Ge=>{(G.flush==="sync"?u:l)&&Z({storeId:t,type:Ur.direct,events:g},Ge)},En({},c,G)));return Se},$dispose:M},X=cr(z);s._s.set(t,X);const de=s._e.run(()=>(o=$f(),o.run(()=>e())));for(const Z in de){const G=de[Z];if(Pe(G)&&!Nw(G)||Pn(G))i||(v&&kw(G)&&(Pe(G)?G.value=v[Z]:zc(G,v[Z])),s.state.value[t][Z]=G);else if(typeof G=="function"){const Se=N(Z,G);de[Z]=Se,a.actions[Z]=G}}return En(X,de),En(le(X),de),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:Z=>{A(G=>{En(G,Z)})}}),s._p.forEach(Z=>{En(X,o.run(()=>Z({store:X,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(X.$state,v),l=!0,u=!0,X}function Pw(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Q_();return a=a||l&&Mt(Ap,null),a&&ga(a),a=Cp,a._s.has(s)||(i?kp(s,e,r,a):Dw(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const Np=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ow=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Np(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ow(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new xw;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mw=function(t){const e=Np(t);return Dp.encodeByteArray(e,!0)},Ro=function(t){return Mw(t).replace(/\./g,"")},Pp=function(t){try{return Dp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $w=()=>Lw().__FIREBASE_DEFAULTS__,Fw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pp(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return $w()||Fw()||Uw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Op=t=>{var e,n;return(n=(e=Gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vw=t=>{const e=Op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Bw=()=>{var t;return(t=Gl())===null||t===void 0?void 0:t.config},xp=t=>{var e;return(e=Gl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ro(JSON.stringify(n)),Ro(JSON.stringify(o)),a].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function zw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ww(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gw(){try{return typeof indexedDB=="object"}catch{return!1}}function Qw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Yw="FirebaseError";class mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yw,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Xw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new mn(r,a,s)}}function Xw(t,e){return t.replace(Jw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jw=/\{\$([^}]+)}/g;function Zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(zh(i)&&zh(o)){if(!ko(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function zh(t){return t!==null&&typeof t=="object"}/**
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
 */function vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function e0(t,e){const n=new t0(t,e);return n.subscribe.bind(n)}class t0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");n0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=oc),r.error===void 0&&(r.error=oc),r.complete===void 0&&(r.complete=oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class s0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i0(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:r0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r0(t){return t===ts?void 0:t}function i0(t){return t.instantiationMode==="EAGER"}/**
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
 */class o0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const a0={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},c0=ue.INFO,l0={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},u0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=l0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=c0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const h0=(t,e)=>e.some(n=>t instanceof n);let Kh,Wh;function d0(){return Kh||(Kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return Wh||(Wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,Kc=new WeakMap,Lp=new WeakMap,ac=new WeakMap,Yl=new WeakMap;function p0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mp.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function g0(t){if(Kc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m0(t){Wc=t(Wc)}function y0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cc(this),e,...n);return Lp.set(s,e.sort?e.sort():[e]),Mn(s)}:f0().includes(t)?function(...e){return t.apply(cc(this),e),Mn(Mp.get(this))}:function(...e){return Mn(t.apply(cc(this),e))}}function v0(t){return typeof t=="function"?y0(t):(t instanceof IDBTransaction&&g0(t),h0(t,d0())?new Proxy(t,Wc):t)}function Mn(t){if(t instanceof IDBRequest)return p0(t);if(ac.has(t))return ac.get(t);const e=v0(t);return e!==t&&(ac.set(t,e),Yl.set(e,t)),e}const cc=t=>Yl.get(t);function _0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const w0=["get","getKey","getAll","getAllKeys","count"],E0=["put","add","delete","clear"],lc=new Map;function Gh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=E0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||w0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return lc.set(e,i),i}m0(t=>({...t,get:(e,n,s)=>Gh(e,n)||t.get(e,n,s),has:(e,n)=>!!Gh(e,n)||t.has(e,n)}));/**
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
 */class I0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function T0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gc="@firebase/app",Qh="0.9.9";/**
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
 */const fs=new Ql("@firebase/app"),b0="@firebase/app-compat",S0="@firebase/analytics-compat",C0="@firebase/analytics",A0="@firebase/app-check-compat",R0="@firebase/app-check",k0="@firebase/auth",N0="@firebase/auth-compat",D0="@firebase/database",P0="@firebase/database-compat",O0="@firebase/functions",x0="@firebase/functions-compat",M0="@firebase/installations",L0="@firebase/installations-compat",$0="@firebase/messaging",F0="@firebase/messaging-compat",U0="@firebase/performance",V0="@firebase/performance-compat",B0="@firebase/remote-config",j0="@firebase/remote-config-compat",q0="@firebase/storage",H0="@firebase/storage-compat",z0="@firebase/firestore",K0="@firebase/firestore-compat",W0="firebase",G0="9.21.0";/**
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
 */const Qc="[DEFAULT]",Q0={[Gc]:"fire-core",[b0]:"fire-core-compat",[C0]:"fire-analytics",[S0]:"fire-analytics-compat",[R0]:"fire-app-check",[A0]:"fire-app-check-compat",[k0]:"fire-auth",[N0]:"fire-auth-compat",[D0]:"fire-rtdb",[P0]:"fire-rtdb-compat",[O0]:"fire-fn",[x0]:"fire-fn-compat",[M0]:"fire-iid",[L0]:"fire-iid-compat",[$0]:"fire-fcm",[F0]:"fire-fcm-compat",[U0]:"fire-perf",[V0]:"fire-perf-compat",[B0]:"fire-rc",[j0]:"fire-rc-compat",[q0]:"fire-gcs",[H0]:"fire-gcs-compat",[z0]:"fire-fst",[K0]:"fire-fst-compat","fire-js":"fire-js",[W0]:"fire-js-all"};/**
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
 */const No=new Map,Yc=new Map;function Y0(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ws(t){const e=t.name;if(Yc.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;Yc.set(e,t);for(const n of No.values())Y0(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const X0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new yi("app","Firebase",X0);/**
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
 */class J0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=G0;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ln.create("bad-app-name",{appName:String(r)});if(n||(n=Bw()),!n)throw Ln.create("no-options");const i=No.get(r);if(i){if(ko(n,i.options)&&ko(s,i.config))return i;throw Ln.create("duplicate-app",{appName:r})}const o=new o0(r);for(const c of Yc.values())o.addComponent(c);const a=new J0(n,s,o);return No.set(r,a),a}function Fp(t=Qc){const e=No.get(t);if(!e&&t===Qc)return $p();if(!e)throw Ln.create("no-app",{appName:t});return e}function $n(t,e,n){var s;let r=(s=Q0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}Ws(new ds(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Z0="firebase-heartbeat-database",eE=1,ti="firebase-heartbeat-store";let uc=null;function Up(){return uc||(uc=_0(Z0,eE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),uc}async function tE(t){try{return(await Up()).transaction(ti).objectStore(ti).get(Vp(t))}catch(e){if(e instanceof mn)fs.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fs.warn(n.message)}}}async function Yh(t,e){try{const s=(await Up()).transaction(ti,"readwrite");return await s.objectStore(ti).put(e,Vp(t)),s.done}catch(n){if(n instanceof mn)fs.warn(n.message);else{const s=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fs.warn(s.message)}}}function Vp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nE=1024,sE=30*24*60*60*1e3;class rE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=sE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xh(),{heartbeatsToSend:n,unsentEntries:s}=iE(this._heartbeatsCache.heartbeats),r=Ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xh(){return new Date().toISOString().substring(0,10)}function iE(t,e=nE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Jh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jh(t){return Ro(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aE(t){Ws(new ds("platform-logger",e=>new I0(e),"PRIVATE")),Ws(new ds("heartbeat",e=>new rE(e),"PRIVATE")),$n(Gc,Qh,t),$n(Gc,Qh,"esm2017"),$n("fire-js","")}aE("");var cE="firebase",lE="9.21.0";/**
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
 */$n(cE,lE,"app");var uE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Jl=Jl||{},W=uE||self;function Do(){}function ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _i(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hE(t){return Object.prototype.hasOwnProperty.call(t,hc)&&t[hc]||(t[hc]=++dE)}var hc="closure_uid_"+(1e9*Math.random()>>>0),dE=0;function fE(t,e,n){return t.call.apply(t.bind,arguments)}function pE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=fE:rt=pE,rt.apply(null,arguments)}function Yi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Wn(){this.s=this.s,this.o=this.o}var gE=0;Wn.prototype.s=!1;Wn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),gE!=0)&&hE(this)};Wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ma(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var mE=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Do,e),W.removeEventListener("test",Do,e)}catch{}return t}();function Po(t){return/^[\s\xa0]*$/.test(t)}var ed=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dc(t,e){return t<e?-1:t>e?1:0}function ya(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return ya().indexOf(t)!=-1}function eu(t){return eu[" "](t),t}eu[" "]=Do;function jp(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var yE=Kt("Opera"),Gs=Kt("Trident")||Kt("MSIE"),qp=Kt("Edge"),Xc=qp||Gs,Hp=Kt("Gecko")&&!(ya().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),vE=ya().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function zp(){var t=W.document;return t?t.documentMode:void 0}var Oo;e:{var fc="",pc=function(){var t=ya();if(Hp)return/rv:([^\);]+)(\)|;)/.exec(t);if(qp)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vE)return/WebKit\/(\S+)/.exec(t);if(yE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pc&&(fc=pc?pc[1]:""),Gs){var gc=zp();if(gc!=null&&gc>parseFloat(fc)){Oo=String(gc);break e}}Oo=fc}var _E={};function wE(){return jp(_E,9,function(){let t=0;const e=ed(String(Oo)).split("."),n=ed("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=dc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||dc(r[2].length==0,i[2].length==0)||dc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Jc;if(W.document&&Gs){var td=zp();Jc=td||parseInt(Oo,10)||void 0}else Jc=void 0;var EE=Jc;function ni(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hp){e:{try{eu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ni.$.h.call(this)}}We(ni,it);var IE={2:"touch",3:"pen",4:"mouse"};ni.prototype.h=function(){ni.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wi="closure_listenable_"+(1e6*Math.random()|0),TE=0;function bE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++TE,this.fa=this.ia=!1}function va(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Kp(t){const e={};for(const n in t)e[n]=t[n];return e}const nd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<nd.length;i++)n=nd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function _a(t){this.src=t,this.g={},this.h=0}_a.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=el(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bE(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Zc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Bp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(va(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function el(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),mc={};function Gp(t,e,n,s,r){if(s&&s.once)return Yp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gp(t,e[i],n,s,r);return null}return n=iu(n),t&&t[wi]?t.O(e,n,_i(s)?!!s.capture:!!s,r):Qp(t,e,n,!1,s,r)}function Qp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=_i(r)?!!r.capture:!!r,a=ru(t);if(a||(t[nu]=a=new _a(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=SE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)mE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Jp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SE(){function t(n){return e.call(t.src,t.listener,n)}const e=CE;return t}function Yp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yp(t,e[i],n,s,r);return null}return n=iu(n),t&&t[wi]?t.P(e,n,_i(s)?!!s.capture:!!s,r):Qp(t,e,n,!0,s,r)}function Xp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Xp(t,e[i],n,s,r);else s=_i(s)?!!s.capture:!!s,n=iu(n),t&&t[wi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=el(i,n,s,r),-1<n&&(va(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ru(t))&&(e=t.g[e.toString()],t=-1,e&&(t=el(e,n,s,r)),(n=-1<t?e[t]:null)&&su(n))}function su(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[wi])Zc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Jp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ru(e))?(Zc(n,t),n.h==0&&(n.src=null,e[nu]=null)):va(t)}}}function Jp(t){return t in mc?mc[t]:mc[t]="on"+t}function CE(t,e){if(t.fa)t=!0;else{e=new ni(e,this);var n=t.listener,s=t.la||t.src;t.ia&&su(t),t=n.call(s,e)}return t}function ru(t){return t=t[nu],t instanceof _a?t:null}var yc="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(t){return typeof t=="function"?t:(t[yc]||(t[yc]=function(e){return t.handleEvent(e)}),t[yc])}function Ke(){Wn.call(this),this.i=new _a(this),this.S=this,this.J=null}We(Ke,Wn);Ke.prototype[wi]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){Xp(this,t,e,n,s)};function Je(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(s,t),Wp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Xi(o,s,!0,e)&&r}if(o=e.g=t,r=Xi(o,s,!0,e)&&r,r=Xi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Xi(o,s,!1,e)&&r}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)va(n[s]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Zc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ou=W.JSON.stringify;function AE(){var t=tg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class RE{constructor(){this.h=this.g=null}add(e,n){const s=Zp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kE,t=>t.reset());class kE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NE(t){W.setTimeout(()=>{throw t},0)}function eg(t,e){tl||DE(),nl||(tl(),nl=!0),tg.add(t,e)}var tl;function DE(){var t=W.Promise.resolve(void 0);tl=function(){t.then(PE)}}var nl=!1,tg=new RE;function PE(){for(var t;t=AE();){try{t.h.call(t.g)}catch(n){NE(n)}var e=Zp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}nl=!1}function wa(t,e){Ke.call(this),this.h=t||1,this.g=e||W,this.j=rt(this.qb,this),this.l=Date.now()}We(wa,Ke);O=wa.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Je(this,"tick"),this.ga&&(au(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function au(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){wa.$.N.call(this),au(this),delete this.g};function cu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function ng(t){t.g=cu(()=>{t.g=null,t.i&&(t.i=!1,ng(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class OE extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ng(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(t){Wn.call(this),this.h=t,this.g={}}We(si,Wn);var sd=[];function sg(t,e,n,s){Array.isArray(n)||(n&&(sd[0]=n.toString()),n=sd);for(var r=0;r<n.length;r++){var i=Gp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rg(t){tu(t.g,function(e,n){this.g.hasOwnProperty(n)&&su(e)},t),t.g={}}si.prototype.N=function(){si.$.N.call(this),rg(this)};si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ea(){this.g=!0}Ea.prototype.Ea=function(){this.g=!1};function xE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function ME(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Os(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$E(t,n)+(s?" "+s:"")})}function LE(t,e){t.info(function(){return"TIMEOUT: "+e})}Ea.prototype.info=function(){};function $E(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ou(n)}catch{return e}}var _s={},rd=null;function Ia(){return rd=rd||new Ke}_s.Ta="serverreachability";function ig(t){it.call(this,_s.Ta,t)}We(ig,it);function ri(t){const e=Ia();Je(e,new ig(e))}_s.STAT_EVENT="statevent";function og(t,e){it.call(this,_s.STAT_EVENT,t),this.stat=e}We(og,it);function ut(t){const e=Ia();Je(e,new og(e,t))}_s.Ua="timingevent";function ag(t,e){it.call(this,_s.Ua,t),this.size=e}We(ag,it);function Ei(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Ta={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lu(){}lu.prototype.h=null;function id(t){return t.h||(t.h=t.i())}function lg(){}var Ii={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function uu(){it.call(this,"d")}We(uu,it);function hu(){it.call(this,"c")}We(hu,it);var sl;function ba(){}We(ba,lu);ba.prototype.g=function(){return new XMLHttpRequest};ba.prototype.i=function(){return{}};sl=new ba;function Ti(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new si(this),this.P=FE,t=Xc?125:void 0,this.V=new wa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ug}function ug(){this.i=null,this.g="",this.h=!1}var FE=45e3,rl={},xo={};O=Ti.prototype;O.setTimeout=function(t){this.P=t};function il(t,e,n){t.L=1,t.v=Ca(ln(e)),t.s=n,t.S=!0,hg(t,null)}function hg(t,e){t.G=Date.now(),bi(t),t.A=ln(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),_g(n.i,"t",s),t.C=0,n=t.l.I,t.h=new ug,t.g=Vg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new OE(rt(t.Pa,t,t.g),t.O)),sg(t.U,t.g,"readystatechange",t.nb),e=t.I?Kp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ri(),xE(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&sn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Xc||this.g&&(this.h.h||this.g.ja()||ld(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ri(3):ri(2)),Sa(this);var n=this.g.da();this.aa=n;t:if(dg(this)){var s=ld(this.g);t="";var r=s.length,i=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),Vr(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ME(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Po(a)){var l=a;break t}}l=null}if(n=l)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ol(this,n);else{this.i=!1,this.o=3,ut(12),is(this),Vr(this);break e}}this.S?(fg(this,u,o),Xc&&this.i&&u==3&&(sg(this.U,this.V,"tick",this.mb),this.V.start())):(Os(this.j,this.m,o,null),ol(this,o)),u==4&&is(this),this.i&&!this.J&&(u==4?Lg(this.l,this):(this.i=!1,bi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),is(this),Vr(this)}}}catch{}finally{}};function dg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function fg(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=UE(t,n),r==xo){e==4&&(t.o=4,ut(14),s=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(r==rl){t.o=4,ut(15),Os(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Os(t.j,t.m,r,null),ol(t,r);dg(t)&&r!=xo&&r!=rl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vu(e),e.L=!0,ut(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),is(t),Vr(t))}O.mb=function(){if(this.g){var t=sn(this.g),e=this.g.ja();this.C<e.length&&(Sa(this),fg(this,t,e),this.i&&t!=4&&bi(this))}};function UE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?xo:(n=Number(e.substring(n,s)),isNaN(n)?rl:(s+=1,s+n>e.length?xo:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.J=!0,is(this)};function bi(t){t.Y=Date.now()+t.P,pg(t,t.P)}function pg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ei(rt(t.lb,t),e)}function Sa(t){t.B&&(W.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(LE(this.j,this.A),this.L!=2&&(ri(),ut(17)),is(this),this.o=2,Vr(this)):pg(this,this.Y-t)};function Vr(t){t.l.H==0||t.J||Lg(t.l,t)}function is(t){Sa(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,au(t.V),rg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function ol(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||al(n.h,t))){if(!t.K&&al(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$o(n),ka(n);else break e;yu(n),ut(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Ei(rt(n.ib,n),6e3));if(1>=Ig(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else os(n,11)}else if((t.K||n.g==t)&&$o(n),!Po(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(du(i,i.h),i.h=null))}if(s.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.Da=w,Ce(s.G,s.F,w))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Ug(s,s.I?s.oa:null,s.Y),o.K){Tg(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Sa(a),bi(a)),s.g=o}else xg(s);0<n.i.length&&Na(n)}else l[0]!="stop"&&l[0]!="close"||os(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?os(n,7):mu(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}ri(4)}catch{}}function VE(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ma(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function BE(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BE(t),s=VE(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=e!==void 0?e:t.h,Mo(this,t.j),this.s=t.s,this.g=t.g,Lo(this,t.m),this.l=t.l,e=t.i;var n=new ii;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),od(this,n),this.o=t.o}else t&&(n=String(t).match(mg))?(this.h=!!e,Mo(this,n[1]||"",!0),this.s=Dr(n[2]||""),this.g=Dr(n[3]||"",!0),Lo(this,n[4]),this.l=Dr(n[5]||"",!0),od(this,n[6]||"",!0),this.o=Dr(n[7]||"")):(this.h=!!e,this.i=new ii(null,this.h))}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Pr(e,ad,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Pr(e,ad,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Pr(n,n.charAt(0)=="/"?zE:HE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Pr(n,WE)),t.join("")};function ln(t){return new us(t)}function Mo(t,e,n){t.j=n?Dr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Lo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function od(t,e,n){e instanceof ii?(t.i=e,GE(t.i,t.h)):(n||(e=Pr(e,KE)),t.i=new ii(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Ca(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ad=/[#\/\?@]/g,HE=/[#\?:]/g,zE=/[#\?]/g,KE=/[#\?@]/g,WE=/#/g;function ii(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&jE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ii.prototype;O.add=function(t,e){Gn(this),this.i=null,t=hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yg(t,e){Gn(t),e=hr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vg(t,e){return Gn(t),e=hr(t,e),t.g.has(e)}O.forEach=function(t,e){Gn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};O.sa=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};O.Z=function(t){Gn(this);let e=[];if(typeof t=="string")vg(this,t)&&(e=e.concat(this.g.get(hr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Gn(this),this.i=null,t=hr(this,t),vg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function _g(t,e,n){yg(t,e),0<n.length&&(t.i=null,t.g.set(hr(t,e),Zl(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GE(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(yg(this,s),_g(this,r,n))},t)),t.j=e}var QE=class{constructor(t,e){this.h=t,this.g=e}};function wg(t){this.l=t||YE,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YE=10;function Eg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ig(t){return t.h?1:t.g?t.g.size:0}function al(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function du(t,e){t.g?t.g.add(e):t.h=e}function Tg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wg.prototype.cancel=function(){if(this.i=bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zl(t.i)}function fu(){}fu.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};fu.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function XE(){this.g=new fu}function JE(t,e,n){const s=n||"";try{gg(t,function(r,i){let o=r;_i(r)&&(o=ou(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ZE(t,e){const n=new Ea;if(W.Image){const s=new Image;s.onload=Yi(Ji,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Yi(Ji,n,s,"TestLoadImage: error",!1,e),s.onabort=Yi(Ji,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Yi(Ji,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ji(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Si(t){this.l=t.fc||null,this.j=t.ob||!1}We(Si,lu);Si.prototype.g=function(){return new Aa(this.l,this.j)};Si.prototype.i=function(t){return function(){return t}}({});function Aa(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Aa,Ke);var pu=0;O=Aa.prototype;O.open=function(t,e){if(this.readyState!=pu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oi(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=pu};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Sg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ci(this):oi(this),this.readyState==3&&Sg(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Ci(this))};O.Ya=function(t){this.g&&(this.response=t,Ci(this))};O.ka=function(){this.g&&Ci(this)};function Ci(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oi(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eI=W.JSON.parse;function Ne(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cg,this.L=this.M=!1}We(Ne,Ke);var Cg="",tI=/^https?$/i,nI=["POST","PUT"];O=Ne.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sl.g(),this.C=this.u?id(this.u):id(sl),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){cd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&t instanceof W.FormData,!(0<=Bp(nI,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kg(this),0<this.B&&((this.L=sI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=cu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){cd(this,i)}};function sI(t){return Gs&&wE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Jl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function cd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ag(t),Ra(t)}function Ag(t){t.F||(t.F=!0,Je(t,"complete"),Je(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Ra(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ra(this,!0)),Ne.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Rg(this):this.kb())};O.kb=function(){Rg(this)};function Rg(t){if(t.h&&typeof Jl<"u"&&(!t.C[1]||sn(t)!=4||t.da()!=2)){if(t.v&&sn(t)==4)cu(t.La,0,t);else if(Je(t,"readystatechange"),sn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(mg)[1]||null;if(!r&&W.self&&W.self.location){var i=W.self.location.protocol;r=i.substr(0,i.length-1)}s=!tI.test(r?r.toLowerCase():"")}n=s}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<sn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Ag(t)}}finally{Ra(t)}}}}function Ra(t,e){if(t.g){kg(t);const n=t.g,s=t.C[0]?Do:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=s}catch{}}}function kg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function sn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eI(e)}};function ld(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Cg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ng(t){let e="";return tu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ng(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dg(t){this.Ga=0,this.i=[],this.j=new Ea,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sr("baseRetryDelayMs",5e3,t),this.hb=Sr("retryDelaySeedMs",1e4,t),this.eb=Sr("forwardChannelMaxRetries",2,t),this.xa=Sr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new wg(t&&t.concurrentRequestLimit),this.Ja=new XE,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}O=Dg.prototype;O.qa=8;O.H=1;function mu(t){if(Pg(t),t.H==3){var e=t.W++,n=ln(t.G);Ce(n,"SID",t.J),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Ai(t,n),e=new Ti(t,t.j,e,void 0),e.L=2,e.v=Ca(ln(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),bi(e)}Fg(t)}function ka(t){t.g&&(vu(t),t.g.cancel(),t.g=null)}function Pg(t){ka(t),t.u&&(W.clearTimeout(t.u),t.u=null),$o(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Na(t){Eg(t.h)||t.m||(t.m=!0,eg(t.Na,t),t.C=0)}function rI(t,e){return Ig(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ei(rt(t.Na,t,e),$g(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ti(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Kp(i),Wp(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Og(this,r,e),n=ln(this.G),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),Ai(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ng(i)))+"&"+e:this.o&&gu(n,this.o,i)),du(this.h,r),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),r.ba=!0,il(r,n,null)):il(r,n,e),this.H=2}}else this.H==3&&(t?ud(this,t):this.i.length==0||Eg(this.h)||ud(this))};function ud(t,e){var n;e?n=e.m:n=t.W++;const s=ln(t.G);Ce(s,"SID",t.J),Ce(s,"RID",n),Ce(s,"AID",t.V),Ai(t,s),t.o&&t.s&&gu(s,t.o,t.s),n=new Ti(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Og(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),du(t.h,n),il(n,s,e)}function Ai(t,e){t.ma&&tu(t.ma,function(n,s){Ce(e,s,n)}),t.l&&gg({},function(n,s){Ce(e,s,n)})}function Og(t,e,n){n=Math.min(t.i.length,n);var s=t.l?rt(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{JE(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function xg(t){t.g||t.u||(t.ba=1,eg(t.Ma,t),t.A=0)}function yu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ei(rt(t.Ma,t),$g(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,Mg(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Ei(rt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ut(10),ka(this),Mg(this))};function vu(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new Ti(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ln(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.J),Ce(e,"CI",t.M?"0":"1"),Ce(e,"AID",t.V),Ce(e,"TYPE","xmlhttp"),Ai(t,e),t.o&&t.s&&gu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ca(ln(e)),n.s=null,n.S=!0,hg(n,t)}O.ib=function(){this.v!=null&&(this.v=null,ka(this),yu(this),ut(19))};function $o(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Lg(t,e){var n=null;if(t.g==e){$o(t),vu(t),t.g=null;var s=2}else if(al(t.h,e))n=e.F,Tg(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ia(),Je(s,new ag(s,n)),Na(t)}else xg(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&rI(t,e)||s==2&&yu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}}function $g(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function os(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=rt(t.pb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Mo(n,"https"),Ca(n)),ZE(n.toString(),s)}else ut(2);t.H=0,t.l&&t.l.za(e),Fg(t),Pg(t)}O.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Fg(t){if(t.H=0,t.pa=[],t.l){const e=bg(t.h);(e.length!=0||t.i.length!=0)&&(Zh(t.pa,e),Zh(t.pa,t.i),t.h.i.length=0,Zl(t.i),t.i.length=0),t.l.ya()}}function Ug(t,e,n){var s=n instanceof us?ln(n):new us(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Lo(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new us(null,void 0);s&&Mo(i,s),e&&(i.g=e),r&&Lo(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Ce(s,n,e),Ce(s,"VER",t.qa),Ai(t,s),s}function Vg(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new Si({ob:!0})):new Ne(t.va),e.Oa(t.I),e}function Bg(){}O=Bg.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.Va=function(){};function Fo(){if(Gs&&!(10<=Number(EE)))throw Error("Environmental error: no available transport.")}Fo.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Ke.call(this),this.g=new Dg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Po(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Po(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new dr(this)}We(St,Ke);St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Ug(t,null,t.Y),Na(t)};St.prototype.close=function(){mu(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ou(t),t=n);e.i.push(new QE(e.fb++,t)),e.H==3&&Na(e)};St.prototype.N=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,St.$.N.call(this)};function jg(t){uu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(jg,uu);function qg(){hu.call(this),this.status=1}We(qg,hu);function dr(t){this.g=t}We(dr,Bg);dr.prototype.Ba=function(){Je(this.g,"a")};dr.prototype.Aa=function(t){Je(this.g,new jg(t))};dr.prototype.za=function(t){Je(this.g,new qg)};dr.prototype.ya=function(){Je(this.g,"b")};function iI(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We($t,iI);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}$t.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)vc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){vc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){vc(this,s),r=0;break}}this.h=r,this.i+=e};$t.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function pe(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var oI={};function _u(t){return-128<=t&&128>t?jp(oI,t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function Wt(t){if(isNaN(t)||!isFinite(t))return $s;if(0>t)return Ye(Wt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=cl;return new pe(e,0)}function Hg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ye(Hg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Wt(Math.pow(e,8)),s=$s,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Wt(Math.pow(e,i)),s=s.R(i).add(Wt(o))):(s=s.R(n),s=s.add(Wt(o)))}return s}var cl=4294967296,$s=_u(0),ll=_u(1),hd=_u(16777216);O=pe.prototype;O.ea=function(){if(Ct(this))return-Ye(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:cl+s)*e,e*=cl}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(rn(this))return"0";if(Ct(this))return"-"+Ye(this).toString(t);for(var e=Wt(Math.pow(t,6)),n=this,s="";;){var r=Vo(n,e).g;n=Uo(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,rn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ct(t){return t.h==-1}O.X=function(t){return t=Uo(this,t),Ct(t)?-1:rn(t)?0:1};function Ye(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new pe(n,~t.h).add(ll)}O.abs=function(){return Ct(this)?Ye(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Uo(t,e){return t.add(Ye(e))}O.R=function(t){if(rn(this)||rn(t))return $s;if(Ct(this))return Ct(t)?Ye(this).R(Ye(t)):Ye(Ye(this).R(t));if(Ct(t))return Ye(this.R(Ye(t)));if(0>this.X(hd)&&0>t.X(hd))return Wt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Zi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Zi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Zi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Zi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new pe(n,0)};function Zi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Cr(t,e){this.g=t,this.h=e}function Vo(t,e){if(rn(e))throw Error("division by zero");if(rn(t))return new Cr($s,$s);if(Ct(t))return e=Vo(Ye(t),e),new Cr(Ye(e.g),Ye(e.h));if(Ct(e))return e=Vo(t,Ye(e)),new Cr(Ye(e.g),e.h);if(30<t.g.length){if(Ct(t)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ll,s=e;0>=s.X(t);)n=dd(n),s=dd(s);var r=As(n,1),i=As(s,1);for(s=As(s,2),n=As(n,2);!rn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=As(s,1),n=As(n,1)}return e=Uo(t,r.R(e)),new Cr(r,e)}for(r=$s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Wt(n),o=i.R(e);Ct(o)||0<o.X(t);)n-=s,i=Wt(n),o=i.R(e);rn(i)&&(i=ll),r=r.add(i),t=Uo(t,o)}return new Cr(r,t)}O.gb=function(t){return Vo(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new pe(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new pe(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new pe(n,this.h^t.h)};function dd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new pe(n,t.h)}function As(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new pe(r,t.h)}Fo.prototype.createWebChannel=Fo.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Ta.NO_ERROR=0;Ta.TIMEOUT=8;Ta.HTTP_ERROR=6;cg.COMPLETE="complete";lg.EventType=Ii;Ii.OPEN="a";Ii.CLOSE="b";Ii.ERROR="c";Ii.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Wt;pe.fromString=Hg;var aI=function(){return new Fo},cI=function(){return Ia()},_c=Ta,lI=cg,uI=_s,fd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hI=Si,eo=lg,dI=Ne,fI=$t,Fs=pe;const pd="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let fr="9.21.0";/**
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
 */const ps=new Ql("@firebase/firestore");function gd(){return ps.logLevel}function U(t,...e){if(ps.logLevel<=ue.DEBUG){const n=e.map(wu);ps.debug(`Firestore (${fr}): ${t}`,...n)}}function un(t,...e){if(ps.logLevel<=ue.ERROR){const n=e.map(wu);ps.error(`Firestore (${fr}): ${t}`,...n)}}function Qs(t,...e){if(ps.logLevel<=ue.WARN){const n=e.map(wu);ps.warn(`Firestore (${fr}): ${t}`,...n)}}function wu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function be(t,e){t||K()}function J(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class gI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mI{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new zg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new et(e)}}class yI{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class vI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new yI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _I{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.T=n.token,new _I(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function EI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Kg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=EI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Be(0,0))}static max(){return new Y(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ai{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends ai{construct(e,n,s){return new Ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const II=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ai{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return II.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ee.fromString(e))}static fromName(e){return new B(Ee.fromString(e).popFirst(5))}static empty(){return new B(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ee(e.slice()))}}function TI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(s===1e9?new Be(n+1,0):new Be(n,s));return new Bn(r,B.empty(),e)}function bI(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Bn(Y.min(),B.empty(),-1)}static max(){return new Bn(Y.max(),B.empty(),-1)}}function SI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const CI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==CI)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ki(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Eu.ct=-1;function Da(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function RI(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=r??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Qe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yd(this.data.getIterator())}getIteratorFrom(e){return new yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new bt([])}unionWith(e){let n=new ot(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Gg("Invalid base64 string: "+r):r}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(t){if(be(!!t),typeof t=="string"){let e=0;const n=kI.exec(t);if(be(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function Iu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tu(t){const e=t.mapValue.fields.__previous_value__;return Iu(e)?Tu(e):e}function ci(t){const e=jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class NI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Iu(t)?4:DI(t)?9007199254740991:10:K()}function Jt(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ci(t).isEqual(ci(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=jn(s.timestampValue),o=jn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return gs(s.bytesValue).isEqual(gs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Fe(s.geoPointValue.latitude)===Fe(r.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Fe(s.integerValue)===Fe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Fe(s.doubleValue),o=Fe(r.doubleValue);return i===o?Bo(i)===Bo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(md(i)!==md(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Jt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function ui(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=ms(t),s=ms(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Fe(r.integerValue||r.doubleValue),a=Fe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vd(t.timestampValue,e.timestampValue);case 4:return vd(ci(t),ci(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(r,i){const o=gs(r),a=gs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=he(o[c],a[c]);if(l!==0)return l}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=he(Fe(r.latitude),Fe(i.latitude));return o!==0?o:he(Fe(r.longitude),Fe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Xs(o[c],a[c]);if(l)return l}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===no.mapValue&&i===no.mapValue)return 0;if(r===no.mapValue)return 1;if(i===no.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=he(a[u],l[u]);if(h!==0)return h;const d=Xs(o[a[u]],c[l[u]]);if(d!==0)return d}return he(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function vd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=jn(t),s=jn(e),r=he(n.seconds,s.seconds);return r!==0?r:he(n.nanos,s.nanos)}function Js(t){return ul(t)}function ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=jn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ul(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ul(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function _d(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hl(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function wd(t){return!!t&&"nullValue"in t}function Ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function Br(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Br(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Br(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Br(n)}setAll(e){let n=st.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Br(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];go(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ws(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new gt(Br(this.value))}}function Qg(t){const e=[];return ws(t.fields,(n,s)=>{const r=new st([n]);if(go(s)){const i=Qg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new bt(e)}/**
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
 */class tt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),gt.empty(),0)}static newFoundDocument(e,n,s,r){return new tt(e,1,n,Y.min(),s,r,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jo{constructor(e,n){this.position=e,this.inclusive=n}}function Id(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=Xs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Td(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jr{constructor(e,n="asc"){this.field=e,this.dir=n}}function PI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yg{}class Ue extends Yg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new xI(e,n,s):n==="array-contains"?new $I(e,s):n==="in"?new FI(e,s):n==="not-in"?new UI(e,s):n==="array-contains-any"?new VI(e,s):new Ue(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new MI(e,s):new LI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ft extends Yg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ft(e,n)}matches(e){return Xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xg(t){return t.op==="and"}function Jg(t){return OI(t)&&Xg(t)}function OI(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function dl(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(Jg(t))return t.filters.map(e=>dl(e)).join(",");{const e=t.filters.map(n=>dl(n)).join(",");return`${t.op}(${e})`}}function Zg(t,e){return t instanceof Ue?function(n,s){return s instanceof Ue&&n.op===s.op&&n.field.isEqual(s.field)&&Jt(n.value,s.value)}(t,e):t instanceof Ft?function(n,s){return s instanceof Ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Zg(i,s.filters[o]),!0):!1}(t,e):void K()}function em(t){return t instanceof Ue?function(e){return`${e.field.canonicalString()} ${e.op} ${Js(e.value)}`}(t):t instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(em).join(" ,")+"}"}(t):"Filter"}class xI extends Ue{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class MI extends Ue{constructor(e,n){super(e,"in",n),this.keys=tm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LI extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=tm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class $I extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&ui(n.arrayValue,this.value)}}class FI extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class UI extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ui(this.value.arrayValue,n)}}class VI extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ui(this.value.arrayValue,s))}}/**
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
 */class BI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function bd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new BI(t,e,n,s,r,i,o)}function Su(t){const e=J(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>dl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Js(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Js(s)).join(",")),e.ft=n}return e.ft}function Cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Td(t.startAt,e.startAt)&&Td(t.endAt,e.endAt)}function fl(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ni{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function jI(t,e,n,s,r,i,o,a){return new Ni(t,e,n,s,r,i,o,a)}function nm(t){return new Ni(t)}function Sd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Au(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rm(t){return t.collectionGroup!==null}function Us(t){const e=J(t);if(e.dt===null){e.dt=[];const n=Au(e),s=sm(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new jr(n)),e.dt.push(new jr(st.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new jr(st.keyField(),i))}}}return e.dt}function hn(t){const e=J(t);if(!e._t)if(e.limitType==="F")e._t=bd(e.path,e.collectionGroup,Us(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Us(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new jr(i.field,o))}const s=e.endAt?new jo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new jo(e.startAt.position,e.startAt.inclusive):null;e._t=bd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function pl(t,e){e.getFirstInequalityField(),Au(t);const n=t.filters.concat([e]);return new Ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gl(t,e,n){return new Ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pa(t,e){return Cu(hn(t),hn(e))&&t.limitType===e.limitType}function im(t){return`${Su(hn(t))}|lt:${t.limitType}`}function ml(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>em(s)).join(", ")}]`),Da(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Js(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Js(s)).join(",")),`Target(${n})`}(hn(t))}; limitType=${t.limitType})`}function Oa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Us(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Id(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Us(n),s)||n.endAt&&!function(r,i,o){const a=Id(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Us(n),s))}(t,e)}function qI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function om(t){return(e,n)=>{let s=!1;for(const r of Us(t)){const i=HI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function HI(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Xs(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
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
 */class pr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Wg(this.inner)}size(){return this.innerSize}}/**
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
 */const zI=new ke(B.comparator);function dn(){return zI}const am=new ke(B.comparator);function Or(...t){let e=am;for(const n of t)e=e.insert(n.key,n);return e}function cm(t){let e=am;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function as(){return qr()}function lm(){return qr()}function qr(){return new pr(t=>t.toString(),(t,e)=>t.isEqual(e))}const KI=new ke(B.comparator),WI=new ot(B.comparator);function ie(...t){let e=WI;for(const n of t)e=e.add(n);return e}const GI=new ot(he);function QI(){return GI}/**
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
 */function um(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function hm(t){return{integerValue:""+t}}function YI(t,e){return RI(e)?hm(e):um(t,e)}/**
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
 */class xa{constructor(){this._=void 0}}function XI(t,e,n){return t instanceof qo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Iu(r)&&(r=Tu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof hi?fm(t,e):t instanceof di?pm(t,e):function(s,r){const i=dm(s,r),o=Cd(i)+Cd(s.wt);return hl(i)&&hl(s.wt)?hm(o):um(s.serializer,o)}(t,e)}function JI(t,e,n){return t instanceof hi?fm(t,e):t instanceof di?pm(t,e):n}function dm(t,e){return t instanceof Ho?hl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class qo extends xa{}class hi extends xa{constructor(e){super(),this.elements=e}}function fm(t,e){const n=gm(e);for(const s of t.elements)n.some(r=>Jt(r,s))||n.push(s);return{arrayValue:{values:n}}}class di extends xa{constructor(e){super(),this.elements=e}}function pm(t,e){let n=gm(e);for(const s of t.elements)n=n.filter(r=>!Jt(r,s));return{arrayValue:{values:n}}}class Ho extends xa{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Cd(t){return Fe(t.integerValue||t.doubleValue)}function gm(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ZI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof hi&&s instanceof hi||n instanceof di&&s instanceof di?Ys(n.elements,s.elements,Jt):n instanceof Ho&&s instanceof Ho?Jt(n.wt,s.wt):n instanceof qo&&s instanceof qo}(t.transform,e.transform)}class eT{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ma{}function mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ru(t.key,Lt.none()):new Di(t.key,t.data,Lt.none());{const n=t.data,s=gt.empty();let r=new ot(st.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Qn(t.key,s,new bt(r.toArray()),Lt.none())}}function tT(t,e,n){t instanceof Di?function(s,r,i){const o=s.value.clone(),a=Rd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qn?function(s,r,i){if(!mo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Rd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ym(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Hr(t,e,n,s){return t instanceof Di?function(r,i,o,a){if(!mo(r.precondition,i))return o;const c=r.value.clone(),l=kd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Qn?function(r,i,o,a){if(!mo(r.precondition,i))return o;const c=kd(r.fieldTransforms,a,i),l=i.data;return l.setAll(ym(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return mo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function nT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=dm(s.transform,r||null);i!=null&&(n===null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function Ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ys(n,s,(r,i)=>ZI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Di extends Ma{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qn extends Ma{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ym(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Rd(t,e,n){const s=new Map;be(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,JI(o,a,n[r]))}return s}function kd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,XI(i,o,e))}return s}class Ru extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sT extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&tT(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Hr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Hr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=mm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,s)=>Ad(n,s))&&Ys(this.baseMutations,e.baseMutations,(n,s)=>Ad(n,s))}}class ku{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length);let r=KI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ku(e,n,s,r)}}/**
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
 */class iT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,oe;function aT(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function vm(t){if(t===void 0)return un("GRPC error has no .code"),I.UNKNOWN;switch(t){case $e.OK:return I.OK;case $e.CANCELLED:return I.CANCELLED;case $e.UNKNOWN:return I.UNKNOWN;case $e.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case $e.INTERNAL:return I.INTERNAL;case $e.UNAVAILABLE:return I.UNAVAILABLE;case $e.UNAUTHENTICATED:return I.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case $e.NOT_FOUND:return I.NOT_FOUND;case $e.ALREADY_EXISTS:return I.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return I.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case $e.ABORTED:return I.ABORTED;case $e.OUT_OF_RANGE:return I.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return I.UNIMPLEMENTED;case $e.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(oe=$e||($e={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Nu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return so}static getOrCreateInstance(){return so===null&&(so=new Nu),so}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let so=null;/**
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
 */function cT(){return new TextEncoder}/**
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
 */const lT=new Fs([4294967295,4294967295],0);function Nd(t){const e=cT().encode(t),n=new fI;return n.update(e),new Uint8Array(n.digest())}function Dd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fs([n,s],0),new Fs([r,i],0)]}class Du{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new xr(`Invalid padding: ${n}`);if(s<0)throw new xr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new xr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Fs.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(Fs.fromNumber(s)));return r.compare(lT)===1&&(r=new Fs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Nd(e),[s,r]=Dd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Du(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Nd(e),[s,r]=Dd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class La{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new La(Y.min(),r,new ke(he),dn(),ie())}}class Pi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Pi(s,n,ie(),ie(),ie())}}/**
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
 */class yo{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class _m{constructor(e,n){this.targetId=e,this.bt=n}}class wm{constructor(e,n,s=ct.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Pd{constructor(){this.Vt=0,this.St=xd(),this.Dt=ct.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ie(),n=ie(),s=ie();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new Pi(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=xd()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class uT{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=dn(),this.jt=Od(),this.zt=new ke(he)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(fl(o))if(r===0){const a=new B(o.path);this.Jt(s,a,tt.newNoDocument(a,Y.min()))}else be(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=Nu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,g,v,w,A,C;const M={localCacheCount:u,existenceFilterCount:h.count},N=h.unchangedNames;return N&&(M.bloomFilter={applied:l===0,hashCount:(d=N==null?void 0:N.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(w=(v=(g=N==null?void 0:N.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&w!==void 0?w:0,padding:(C=(A=N==null?void 0:N.bits)===null||A===void 0?void 0:A.padding)!==null&&C!==void 0?C:0}),M}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=gs(i).toUint8Array()}catch(u){if(u instanceof Gg)return Qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Du(c,o,a)}catch(u){return Qs(u instanceof xr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&fl(a.target)){const c=new B(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,tt.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=ie();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new La(e,n,this.zt,this.Qt,s);return this.Qt=dn(),this.jt=Od(),this.zt=new ke(he),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Pd,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ot(he),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Pd),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Od(){return new ke(B.comparator)}function xd(){return new ke(B.comparator)}const hT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fT=(()=>({and:"AND",or:"OR"}))();class pT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yl(t,e){return t.useProto3Json||Da(e)?e:{value:e}}function zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gT(t,e){return zo(t,e.toTimestamp())}function Gt(t){return be(!!t),Y.fromTimestamp(function(e){const n=jn(e);return new Be(n.seconds,n.nanos)}(t))}function Pu(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Im(t){const e=Ee.fromString(t);return be(Cm(e)),e}function vl(t,e){return Pu(t.databaseId,e.path)}function wc(t,e){const n=Im(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Tm(n))}function _l(t,e){return Pu(t.databaseId,e)}function mT(t){const e=Im(t);return e.length===4?Ee.emptyPath():Tm(e)}function wl(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Md(t,e,n){return{name:vl(t,e),fields:n.value.mapValue.fields}}function yT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(be(l===void 0||typeof l=="string"),ct.fromBase64String(l||"")):(be(l===void 0||l instanceof Uint8Array),ct.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:vm(c.code);return new $(l,c.message||"")}(o);n=new wm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wc(t,s.document.name),i=Gt(s.document.updateTime),o=s.document.createTime?Gt(s.document.createTime):Y.min(),a=new gt({mapValue:{fields:s.document.fields}}),c=tt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new yo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wc(t,s.document),i=s.readTime?Gt(s.readTime):Y.min(),o=tt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new yo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wc(t,s.document),i=s.removedTargetIds||[];n=new yo([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new oT(r,i),a=s.targetId;n=new _m(a,o)}}return n}function vT(t,e){let n;if(e instanceof Di)n={update:Md(t,e.key,e.value)};else if(e instanceof Ru)n={delete:vl(t,e.key)};else if(e instanceof Qn)n={update:Md(t,e.key,e.data),updateMask:AT(e.fieldMask)};else{if(!(e instanceof sT))return K();n={verify:vl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof qo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof di)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ho)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:gT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function _T(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Gt(s.updateTime):Gt(r);return i.isEqual(Y.min())&&(i=Gt(r)),new eT(i,s.transformResults||[])}(n,e))):[]}function wT(t,e){return{documents:[_l(t,e.path)]}}function ET(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_l(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_l(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Sm(Ft.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ns(u.field),direction:bT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=yl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function IT(t){let e=mT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=bm(u);return h instanceof Ft&&Jg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new jr(Ds(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Da(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new jo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new jo(d,h)}(n.endAt)),jI(e,r,o,i,a,"F",c,l)}function TT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ds(e.unaryFilter.field);return Ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(e.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ds(e.unaryFilter.field);return Ue.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ds(e.unaryFilter.field);return Ue.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Ue.create(Ds(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(n=>bm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function bT(t){return hT[t]}function ST(t){return dT[t]}function CT(t){return fT[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Ds(t){return st.fromServerFormat(t.fieldPath)}function Sm(t){return t instanceof Ue?function(e){if(e.op==="=="){if(Ed(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NAN"}};if(wd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ed(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NAN"}};if(wd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(e.field),op:ST(e.op),value:e.value}}}(t):t instanceof Ft?function(e){const n=e.getFilters().map(s=>Sm(s));return n.length===1?n[0]:{compositeFilter:{op:CT(e.op),filters:n}}}(t):K()}function AT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nn{constructor(e,n,s,r,i=Y.min(),o=Y.min(),a=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RT{constructor(e){this.le=e}}function kT(t){const e=IT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gl(e,e.limit,"L"):e}/**
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
 */class NT{constructor(){this.sn=new DT}addToCollectionParentIndex(e,n){return this.sn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Bn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class DT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ot(Ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ot(Ee.comparator)).toArray()}}/**
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
 */class Zs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Zs(0)}static kn(){return new Zs(-1)}}/**
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
 */class PT{constructor(){this.changes=new pr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Hr(s.mutation,r,bt.empty(),Be.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Or();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=as();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=dn();const o=qr(),a=qr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Qn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hr(u.mutation,l,u.mutation.getFieldMask(),Be.now())):o.set(l.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new OT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=qr();let r=new ke((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||bt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ie()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=lm();u.forEach(d=>{if(!i.has(d)){const g=mm(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(as());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:cm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=Or();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Or();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Ni(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=Or();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Hr(l.mutation,c,bt.empty(),Be.now()),Oa(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class MT{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return S.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:Gt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:kT(s.bundledQuery),readTime:Gt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class LT{constructor(){this.overlays=new ke(B.comparator),this.hs=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=as();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=as(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=as(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=as(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new iT(n,s));let i=this.hs.get(n);i===void 0&&(i=ie(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
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
 */class Ou{constructor(){this.ls=new ot(He.fs),this.ds=new ot(He._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new He(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new He(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new B(new Ee([])),s=new He(n,e),r=new He(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new B(new Ee([])),s=new He(n,e),r=new He(n,e+1);let i=ie();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class He{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return B.comparator(e.key,n.key)||he(e.Es,n.Es)}static _s(e,n){return he(e.Es,n.Es)||B.comparator(e.key,n.key)}}/**
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
 */class $T{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ot(He.fs)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new He(n,0),r=new He(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ot(he);return n.forEach(r=>{const i=new He(r,0),o=new He(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),S.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new He(new B(i),0);let a=new ot(he);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),S.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){be(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return S.forEach(n.mutations,r=>{const i=new He(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new He(n,0),r=this.Rs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FT{constructor(e){this.Ss=e,this.docs=new ke(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=dn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=dn();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||SI(bI(u),s)<=0||(r.has(u.key)||Oa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}Ds(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new UT(this)}getSize(e){return S.resolve(this.size)}}class UT extends PT{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class VT{constructor(e){this.persistence=e,this.Cs=new pr(n=>Su(n),Cu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Ou,this.targetCount=0,this.ks=Zs.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),S.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.$n(n),S.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ns.containsKey(n))}}/**
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
 */class BT{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Eu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new VT(this),this.indexManager=new NT,this.remoteDocumentCache=function(s){return new FT(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new RT(n),this.Ls=new MT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new $T(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new jT(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return S.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class jT extends AI{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Gs=new Ou,this.Qs=null}static js(e){return new xu(e)}get zs(){if(this.Qs)return this.Qs;throw K()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.zs,s=>{const r=B.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,Y.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return S.or([()=>S.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Mu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=ie(),r=ie();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mu(e,n.fromCache,s,r)}}/**
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
 */class qT{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(Sd(n))return S.resolve(null);let s=hn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=gl(n,null,"F"),s=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ie(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,gl(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return Sd(n)||r.isEqual(Y.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(gd()<=ue.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ml(n)),this.zi(e,o,n,TI(r,-1)))})}Qi(e,n){let s=new ot(om(e));return n.forEach((r,i)=>{Oa(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return gd()<=ue.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ml(n)),this.qi.getDocumentsMatchingQuery(e,n,Bn.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class HT{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new ke(he),this.Ji=new pr(i=>Su(i),Cu),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xT(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function zT(t,e,n,s){return new HT(t,e,n,s)}async function Am(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ie();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function KT(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(v=>{const w=c.docVersions.get(g);be(w!==null),v.version.compareTo(w)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Rm(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function WT(t,e){const n=J(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(ct.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(v,w,A){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,g,u)&&a.push(n.Fs.updateTargetData(i,g))});let c=dn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(GT(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(Y.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function GT(t,e,n){let s=ie(),r=ie();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=dn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function QT(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function YT(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Nn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function El(t,e,n){const s=J(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ki(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function Ld(t,e,n){const s=J(t);let r=Y.min(),i=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Ji.get(l);return h!==void 0?S.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,hn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:Y.min(),n?i:ie())).next(a=>(XT(s,qI(e),a),{documents:a,sr:i})))}function XT(t,e,n){let s=t.Yi.get(e)||Y.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class $d{constructor(){this.activeTargetIds=QI()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JT{constructor(){this.Wr=new $d,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new $d,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZT{Jr(e){}shutdown(){}}/**
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
 */class Fd{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ro=null;function Ec(){return ro===null?ro=268435456+Math.round(2147483648*Math.random()):ro++,"0x"+ro.toString(16)}/**
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
 */const eb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tb{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const Ze="WebChannelConnection";class nb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=Ec(),a=this.Io(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>(U("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Qs("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+fr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=eb[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=Ec();return new Promise((o,a)=>{const c=new dI;c.setWithCredentials(!0),c.listenOnce(lI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _c.NO_ERROR:const u=c.getResponseJson();U(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case _c.TIMEOUT:U(Ze,`RPC '${e}' ${i} timed out`),a(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const h=c.getStatus();if(U(Ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(w){const A=w.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(g.status);a(new $(v,g.message))}else a(new $(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(Ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);U(Ze,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Ec(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aI(),a=cI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new hI({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");U(Ze,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new tb({io:w=>{d?U(Ze,`Not sending because RPC '${e}' stream ${r} is closed:`,w):(h||(U(Ze,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),U(Ze,`RPC '${e}' stream ${r} sending:`,w),u.send(w))},ro:()=>u.close()}),v=(w,A,C)=>{w.listen(A,M=>{try{C(M)}catch(N){setTimeout(()=>{throw N},0)}})};return v(u,eo.EventType.OPEN,()=>{d||U(Ze,`RPC '${e}' stream ${r} transport opened.`)}),v(u,eo.EventType.CLOSE,()=>{d||(d=!0,U(Ze,`RPC '${e}' stream ${r} transport closed`),g.fo())}),v(u,eo.EventType.ERROR,w=>{d||(d=!0,Qs(Ze,`RPC '${e}' stream ${r} transport errored:`,w),g.fo(new $(I.UNAVAILABLE,"The operation could not be completed")))}),v(u,eo.EventType.MESSAGE,w=>{var A;if(!d){const C=w.data[0];be(!!C);const M=C,N=M.error||((A=M[0])===null||A===void 0?void 0:A.error);if(N){U(Ze,`RPC '${e}' stream ${r} received error:`,N);const z=N.status;let X=function(Z){const G=$e[Z];if(G!==void 0)return vm(G)}(z),de=N.message;X===void 0&&(X=I.INTERNAL,de="Unknown error status: "+z+" with message "+N.message),d=!0,g.fo(new $(X,de)),u.close()}else U(Ze,`RPC '${e}' stream ${r} received:`,C),g._o(C)}}),v(a,uI.STAT_EVENT,w=>{w.stat===fd.PROXY?U(Ze,`RPC '${e}' stream ${r} detected buffering proxy`):w.stat===fd.NOPROXY&&U(Ze,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Ic(){return typeof document<"u"?document:null}/**
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
 */function $a(t){return new pT(t,!0)}/**
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
 */class km{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class Nm{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new km(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new $(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sb extends Nm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=yT(this.serializer,e),s=function(r){if(!("targetChange"in r))return Y.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Y.min():i.readTime?Gt(i.readTime):Y.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=wl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=fl(a)?{documents:wT(r,a)}:{query:ET(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Em(r,i.resumeToken);const c=yl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(Y.min())>0){o.readTime=zo(r,i.snapshotVersion.toTimestamp());const c=yl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=TT(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=wl(this.serializer),n.removeTarget=e,this.zo(n)}}class rb extends Nm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=_T(e.writeResults,e.commitTime),s=Gt(e.commitTime);return this.listener.uu(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=wl(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>vT(this.serializer,s))};this.zo(n)}}/**
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
 */class ib extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(I.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(I.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class ob{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(un(n),this.wu=!1):U("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class ab{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{Es(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.Au.add(4),await Oi(c),c.Pu.set("Unknown"),c.Au.delete(4),await Fa(c)}(this))})}),this.Pu=new ob(s,r)}}async function Fa(t){if(Es(t))for(const e of t.Ru)await e(!0)}async function Oi(t){for(const e of t.Ru)await e(!1)}function Dm(t,e){const n=J(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Fu(n)?$u(n):gr(n).Uo()&&Lu(n,e))}function Pm(t,e){const n=J(t),s=gr(n);n.Eu.delete(e),s.Uo()&&Om(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():Es(n)&&n.Pu.set("Unknown"))}function Lu(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gr(t).nu(e)}function Om(t,e){t.bu.Lt(e),gr(t).su(e)}function $u(t){t.bu=new uT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),gr(t).start(),t.Pu.mu()}function Fu(t){return Es(t)&&!gr(t).qo()&&t.Eu.size>0}function Es(t){return J(t).Au.size===0}function xm(t){t.bu=void 0}async function cb(t){t.Eu.forEach((e,n)=>{Lu(t,e)})}async function lb(t,e){xm(t),Fu(t)?(t.Pu.pu(e),$u(t)):t.Pu.set("Unknown")}async function ub(t,e,n){if(t.Pu.set("Online"),e instanceof wm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ko(t,s)}else if(e instanceof yo?t.bu.Wt(e):e instanceof _m?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Y.min()))try{const s=await Rm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(ct.EMPTY_BYTE_STRING,l.snapshotVersion)),Om(r,a);const u=new Nn(l.target,a,c,l.sequenceNumber);Lu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Ko(t,s)}}async function Ko(t,e,n){if(!ki(e))throw e;t.Au.add(1),await Oi(t),t.Pu.set("Offline"),n||(n=()=>Rm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Fa(t)})}function Mm(t,e){return e().catch(n=>Ko(t,n,e))}async function Ua(t){const e=J(t),n=qn(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;hb(e);)try{const r=await QT(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,db(e,r)}catch(r){await Ko(e,r)}Lm(e)&&$m(e)}function hb(t){return Es(t)&&t.Tu.length<10}function db(t,e){t.Tu.push(e);const n=qn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Lm(t){return Es(t)&&!qn(t).qo()&&t.Tu.length>0}function $m(t){qn(t).start()}async function fb(t){qn(t).au()}async function pb(t){const e=qn(t);for(const n of t.Tu)e.ou(n.mutations)}async function gb(t,e,n){const s=t.Tu.shift(),r=ku.from(s,e,n);await Mm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ua(t)}async function mb(t,e){e&&qn(t).ru&&await async function(n,s){if(r=s.code,aT(r)&&r!==I.ABORTED){const i=n.Tu.shift();qn(n).Go(),await Mm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ua(n)}var r}(t,e),Lm(t)&&$m(t)}async function Ud(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Es(n);n.Au.add(3),await Oi(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Fa(n)}async function yb(t,e){const n=J(t);e?(n.Au.delete(2),await Fa(n)):e||(n.Au.add(2),await Oi(n),n.Pu.set("Unknown"))}function gr(t){return t.Vu||(t.Vu=function(e,n,s){const r=J(e);return r.lu(),new sb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:cb.bind(null,t),co:lb.bind(null,t),eu:ub.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Fu(t)?$u(t):t.Pu.set("Unknown")):(await t.Vu.stop(),xm(t))})),t.Vu}function qn(t){return t.Su||(t.Su=function(e,n,s){const r=J(e);return r.lu(),new rb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:fb.bind(null,t),co:mb.bind(null,t),cu:pb.bind(null,t),uu:gb.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Ua(t)):(await t.Su.stop(),t.Tu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Uu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Uu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vu(t,e){if(un("AsyncQueue",`${e}: ${t}`),ki(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=Or(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Vs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Vd{constructor(){this.Du=new ke(B.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):K():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class er{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new er(e,n,Vs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class vb{constructor(){this.xu=void 0,this.listeners=[]}}class _b{constructor(){this.queries=new pr(e=>im(e),Pa),this.onlineState="Unknown",this.Nu=new Set}}async function wb(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new vb),r)try{i.xu=await n.onListen(s)}catch(o){const a=Vu(o,`Initialization of query '${ml(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Bu(n)}async function Eb(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ib(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&Bu(n)}function Tb(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Bu(t){t.Nu.forEach(e=>{e.next()})}class bb{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new er(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class Fm{constructor(e){this.key=e}}class Um{constructor(e){this.key=e}}class Sb{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ie(),this.mutatedKeys=ie(),this.Zu=om(e),this.tc=new Vs(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new Vd,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Oa(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?v!==w&&(s.track({type:3,doc:g}),A=!0):this.ic(d,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.Zu(g,c)>0||l&&this.Zu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),A=!0):d&&!g&&(s.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(g?(o=o.add(g),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(d)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new er(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Vd,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=ie(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new Um(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new Fm(s))}),n}ac(e){this.Ju=e.sr,this.Xu=ie();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return er.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Cb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ab{constructor(e){this.key=e,this.lc=!1}}class Rb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new pr(a=>im(a),Pa),this._c=new Map,this.wc=new Set,this.mc=new ke(B.comparator),this.gc=new Map,this.yc=new Ou,this.Ic={},this.Tc=new Map,this.Ec=Zs.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function kb(t,e){const n=Ub(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await YT(n.localStore,hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Nb(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Dm(n.remoteStore,o)}return r}async function Nb(t,e,n,s,r){t.Rc=(h,d,g)=>async function(v,w,A,C){let M=w.view.nc(A);M.ji&&(M=await Ld(v.localStore,w.query,!1).then(({documents:X})=>w.view.nc(X,M)));const N=C&&C.targetChanges.get(w.targetId),z=w.view.applyChanges(M,v.isPrimaryClient,N);return jd(v,w.targetId,z.uc),z.snapshot}(t,h,d,g);const i=await Ld(t.localStore,e,!0),o=new Sb(e,i.sr),a=o.nc(i.documents),c=Pi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);jd(t,n,l.uc);const u=new Cb(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function Db(t,e){const n=J(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Pa(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await El(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Pm(n.remoteStore,s.targetId),Il(n,s.targetId)}).catch(Ri)):(Il(n,s.targetId),await El(n.localStore,s.targetId,!0))}async function Pb(t,e,n){const s=Vb(t);try{const r=await function(i,o){const a=J(i),c=Be.now(),l=o.reduce((d,g)=>d.add(g.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=dn(),v=ie();return a.Xi.getEntries(d,l).next(w=>{g=w,g.forEach((A,C)=>{C.isValidDocument()||(v=v.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(w=>{u=w;const A=[];for(const C of o){const M=nT(C,u.get(C.key).overlayedDocument);M!=null&&A.push(new Qn(C.key,M,Qg(M.value.mapValue),Lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,A,o)}).next(w=>{h=w;const A=w.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,A)})}).then(()=>({batchId:h.batchId,changes:cm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new ke(he)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await xi(s,r.changes),await Ua(s.remoteStore)}catch(r){const i=Vu(r,"Failed to persist write");n.reject(i)}}async function Vm(t,e){const n=J(t);try{const s=await WT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?be(o.lc):r.removedDocuments.size>0&&(be(o.lc),o.lc=!1))}),await xi(n,s,e)}catch(s){await Ri(s)}}function Bd(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&Bu(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ob(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new ke(B.comparator);o=o.insert(i,tt.newNoDocument(i,Y.min()));const a=ie().add(i),c=new La(Y.min(),new Map,new ke(he),o,a);await Vm(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),ju(s)}else await El(s.localStore,e,!1).then(()=>Il(s,e,n)).catch(Ri)}async function xb(t,e){const n=J(t),s=e.batch.batchId;try{const r=await KT(n.localStore,e);jm(n,s,null),Bm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await xi(n,r)}catch(r){await Ri(r)}}async function Mb(t,e,n){const s=J(t);try{const r=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(be(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);jm(s,e,n),Bm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await xi(s,r)}catch(r){await Ri(r)}}function Bm(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function jm(t,e,n){const s=J(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function Il(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||qm(t,s)})}function qm(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Pm(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),ju(t))}function jd(t,e,n){for(const s of n)s instanceof Fm?(t.yc.addReference(s.key,e),Lb(t,s)):s instanceof Um?(U("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||qm(t,s.key)):K()}function Lb(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.wc.add(s),ju(t))}function ju(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new B(Ee.fromString(e)),s=t.Ec.next();t.gc.set(s,new Ab(n)),t.mc=t.mc.insert(n,s),Dm(t.remoteStore,new Nn(hn(nm(n.path)),s,"TargetPurposeLimboResolution",Eu.ct))}}async function xi(t,e,n){const s=J(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Mu.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ki(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Hi.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);l.Hi=l.Hi.insert(h,v)}}}(s.localStore,i))}async function $b(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await Am(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new $(I.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await xi(n,s.tr)}}function Fb(t,e){const n=J(t),s=n.gc.get(e);if(s&&s.lc)return ie().add(s.key);{let r=ie();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function Ub(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ob.bind(null,e),e.fc.eu=Ib.bind(null,e.eventManager),e.fc.vc=Tb.bind(null,e.eventManager),e}function Vb(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mb.bind(null,e),e}class qd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$a(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return zT(this.persistence,new qT,e.initialUser,this.serializer)}createPersistence(e){return new BT(xu.js,this.serializer)}createSharedClientState(e){return new JT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$b.bind(null,this.syncEngine),await yb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _b}createDatastore(e){const n=$a(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new nb(r));var r;return function(i,o,a,c){return new ib(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Bd(this.syncEngine,a,0),o=Fd.D()?new Fd:new ZT,new ab(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Rb(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);U("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Oi(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class jb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qb{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=Kg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Tc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Am(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zb(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ud(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ud(e.remoteStore,i)),t._onlineComponents=e}function Hb(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Hb(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await Tc(t,new qd)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Tc(t,new qd);return t._offlineComponents}async function Hm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Hd(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Hd(t,new Bb))),t._onlineComponents}function Kb(t){return Hm(t).then(e=>e.syncEngine)}async function Wb(t){const e=await Hm(t),n=e.eventManager;return n.onListen=kb.bind(null,e.syncEngine),n.onUnlisten=Db.bind(null,e.syncEngine),n}function Gb(t,e,n={}){const s=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new jb({next:h=>{i.enqueueAndForget(()=>Eb(r,u)),h.fromCache&&a.source==="server"?c.reject(new $(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new bb(o,l,{includeMetadataChanges:!0,Uu:!0});return wb(r,u)}(await Wb(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const zd=new Map;/**
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
 */function zm(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qb(t,e,n,s){if(e===!0&&s===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kd(t){if(!B.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wd(t){if(B.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Va(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Gd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ba{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pI;switch(n.type){case"firstParty":return new vI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zd.get(e);n&&(U("ComponentProvider","Removing Datastore"),zd.delete(e),n.terminate())}(this),Promise.resolve()}}function Yb(t,e,n,s={}){var r;const i=(t=Hn(t,Ba))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Qs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=et.MOCK_USER;else{o=qw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new $(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}t._authCredentials=new gI(new zg(o,a))}}/**
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
 */class mt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class mr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mr(this.firestore,e,this._query)}}class Un extends mr{constructor(e,n,s){super(e,n,nm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new B(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function Xb(t,e,...n){if(t=je(t),zm("collection","path",e),t instanceof Ba){const s=Ee.fromString(e,...n);return Wd(s),new Un(t,null,s)}{if(!(t instanceof mt||t instanceof Un))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return Wd(s),new Un(t.firestore,null,s)}}function Tn(t,e,...n){if(t=je(t),arguments.length===1&&(e=Kg.A()),zm("doc","path",e),t instanceof Ba){const s=Ee.fromString(e,...n);return Kd(s),new mt(t,null,new B(s))}{if(!(t instanceof mt||t instanceof Un))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return Kd(s),new mt(t.firestore,t instanceof Un?t.converter:null,new B(s))}}/**
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
 */class Jb{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new km(this,"async_queue_retry"),this.Yc=()=>{const n=Ic();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Fn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!ki(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw un("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=Uu.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&K()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Mi extends Ba{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Jb,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wm(this),this._firestoreClient.terminate()}}function Zb(t,e){const n=typeof t=="object"?t:Fp(),s=typeof t=="string"?t:e||"(default)",r=Xl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Vw("firestore");i&&Yb(r,...i)}return r}function Km(t){return t._firestoreClient||Wm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wm(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new NI(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new qb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tr(ct.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tr(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const e1=/^__.*__$/;class t1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Di(e,this.data,n,this.fieldTransforms)}}class Gm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Qm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class zu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Wo(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Qm(this.ua)&&e1.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class n1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||$a(e)}ga(e,n,s,r=!1){return new zu({ua:e,methodName:n,ma:s,path:st.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ku(t){const e=t._freezeSettings(),n=$a(t._databaseId);return new n1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function s1(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);Wu("Data must be an object, but it was:",o,s);const a=Ym(s,o);let c,l;if(i.merge)c=new bt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Tl(e,h,n);if(!o.contains(d))throw new $(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Jm(u,d)||u.push(d)}c=new bt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new t1(new gt(a),c,l)}class qa extends qu{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qa}}function r1(t,e,n,s){const r=t.ga(1,e,n);Wu("Data must be an object, but it was:",r,s);const i=[],o=gt.empty();ws(s,(c,l)=>{const u=Gu(e,c,n);l=je(l);const h=r.fa(u);if(l instanceof qa)i.push(u);else{const d=Li(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new bt(i);return new Gm(o,a,r.fieldTransforms)}function i1(t,e,n,s,r,i){const o=t.ga(1,e,n),a=[Tl(e,s,n)],c=[r];if(i.length%2!=0)throw new $(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Tl(e,i[d])),c.push(i[d+1]);const l=[],u=gt.empty();for(let d=a.length-1;d>=0;--d)if(!Jm(l,a[d])){const g=a[d];let v=c[d];v=je(v);const w=o.fa(g);if(v instanceof qa)l.push(g);else{const A=Li(v,w);A!=null&&(l.push(g),u.set(g,A))}}const h=new bt(l);return new Gm(u,h,o.fieldTransforms)}function o1(t,e,n,s=!1){return Li(n,t.ga(s?4:3,e))}function Li(t,e){if(Xm(t=je(t)))return Wu("Unsupported field value:",e,t),Ym(t,e);if(t instanceof qu)return function(n,s){if(!Qm(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Li(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return YI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Be.fromDate(n);return{timestampValue:zo(s.serializer,r)}}if(n instanceof Be){const r=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zo(s.serializer,r)}}if(n instanceof Hu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof tr)return{bytesValue:Em(s.serializer,n._byteString)};if(n instanceof mt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Pu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Va(n)}`)}(t,e)}function Ym(t,e){const n={};return Wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(s,r)=>{const i=Li(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Xm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Hu||t instanceof tr||t instanceof mt||t instanceof qu)}function Wu(t,e,n){if(!Xm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Va(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Tl(t,e,n){if((e=je(e))instanceof ja)return e._internalPath;if(typeof e=="string")return Gu(t,e);throw Wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const a1=new RegExp("[~\\*/\\[\\]]");function Gu(t,e,n){if(e.search(a1)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ja(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(I.INVALID_ARGUMENT,a+t+c)}function Jm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Zm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c1 extends Zm{data(){return super.data()}}function Qu(t,e){return typeof e=="string"?Gu(t,e):e instanceof ja?e._internalPath:e._delegate._internalPath}/**
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
 */function l1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}class u1 extends Yu{}function h1(t,e,...n){let s=[];e instanceof Yu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Xu).length,o=r.filter(a=>a instanceof Ha).length;if(i>1||i>0&&o>0)throw new $(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ha extends u1{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ha(e,n,s)}_apply(e){const n=this._parse(e);return ey(e._query,n),new mr(e.firestore,e.converter,pl(e._query,n))}_parse(e){const n=Ku(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new $(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Yd(u,l);const d=[];for(const g of u)d.push(Qd(a,r,g));h={arrayValue:{values:d}}}else h=Qd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yd(u,l),h=o1(o,i,u,l==="in"||l==="not-in");return Ue.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function d1(t,e,n){const s=e,r=Qu("where",t);return Ha._create(r,s,n)}class Xu extends Yu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)ey(i,a),i=pl(i,a)}(e._query,n),new mr(e.firestore,e.converter,pl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qd(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new $(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rm(e)&&n.indexOf("/")!==-1)throw new $(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ee.fromString(n));if(!B.isDocumentKey(s))throw new $(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _d(t,new B(s))}if(n instanceof mt)return _d(t,n._key);throw new $(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Va(n)}.`)}function Yd(t,e){if(!Array.isArray(t)||t.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ey(t,e){if(e.isInequality()){const s=Au(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new $(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=sm(t);i!==null&&f1(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function f1(t,e,n){if(!n.isEqual(e))throw new $(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class p1{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ws(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Hu(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Tu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const n=jn(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ee.fromString(e);be(Cm(s));const r=new li(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function g1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class m1 extends Zm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vo extends m1{data(e={}){return super.data(e)}}class y1{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new io(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vo(this._firestore,this._userDataWriter,s.key,s,new io(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new io(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new io(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:v1(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class _1 extends p1{constructor(e){super(),this.firestore=e}convertBytes(e){return new tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function w1(t){t=Hn(t,mr);const e=Hn(t.firestore,Mi),n=Km(e),s=new _1(e);return l1(t._query),Gb(n,t._query).then(r=>new y1(e,s,t,r))}function ty(t,e,n){t=Hn(t,mt);const s=Hn(t.firestore,Mi),r=g1(t.converter,e,n);return Ju(s,[s1(Ku(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Lt.none())])}function oo(t,e,n,...s){t=Hn(t,mt);const r=Hn(t.firestore,Mi),i=Ku(r);let o;return o=typeof(e=je(e))=="string"||e instanceof ja?i1(i,"updateDoc",t._key,e,n,s):r1(i,"updateDoc",t._key,e),Ju(r,[o.toMutation(t._key,Lt.exists(!0))])}function E1(t){return Ju(Hn(t.firestore,Mi),[new Ru(t._key,Lt.none())])}function Ju(t,e){return function(n,s){const r=new Fn;return n.asyncQueue.enqueueAndForget(async()=>Pb(await Kb(n),s,r)),r.promise}(Km(t),e)}(function(t,e=!0){(function(n){fr=n})(ur),Ws(new ds("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Mi(new mI(n.getProvider("auth-internal")),new wI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),$n(pd,"3.11.0",t),$n(pd,"3.11.0","esm2017")})();const I1={apiKey:"AIzaSyCs4ob0qjeLAxY1Nr-dIXiwXxnqkeyBGc8",authDomain:"cuyart-shop.firebaseapp.com",projectId:"cuyart-shop",storageBucket:"cuyart-shop.appspot.com",messagingSenderId:"906331708937",appId:"1:906331708937:web:bbf3a749bd30b61b5d22d8"},T1=$p(I1),nn=Zb(T1);function b1(t){return typeof t=="object"&&t!==null}function Xd(t,e){return t=b1(t)?t:Object.create(null),new Proxy(t,{get(n,s,r){return s==="key"?Reflect.get(n,s,r):Reflect.get(n,s,r)||Reflect.get(e,s,r)}})}function S1(t,e){return e.reduce((n,s)=>n==null?void 0:n[s],t)}function C1(t,e,n){return e.slice(0,-1).reduce((s,r)=>/^(__proto__)$/.test(r)?{}:s[r]=s[r]||{},t)[e[e.length-1]]=n,t}function A1(t,e){return e.reduce((n,s)=>{const r=s.split(".");return C1(n,r,S1(t,r))},{})}function Jd(t,{storage:e,serializer:n,key:s,debug:r}){try{const i=e==null?void 0:e.getItem(s);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){r&&console.error(i)}}function Zd(t,{storage:e,serializer:n,key:s,paths:r,debug:i}){try{const o=Array.isArray(r)?A1(t,r):t;e.setItem(s,n.serialize(o))}catch(o){i&&console.error(o)}}function R1(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:r}=e;if(!s)return;const i=(Array.isArray(s)?s.map(o=>Xd(o,t)):[Xd(s,t)]).map(({storage:o=localStorage,beforeRestore:a=null,afterRestore:c=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:u=r.$id,paths:h=null,debug:d=!1})=>{var g;return{storage:o,beforeRestore:a,afterRestore:c,serializer:l,key:((g=t.key)!=null?g:v=>v)(u),paths:h,debug:d}});r.$persist=()=>{i.forEach(o=>{Zd(r.$state,o)})},r.$hydrate=({runHooks:o=!0}={})=>{i.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;o&&(c==null||c(e)),Jd(r,a),o&&(l==null||l(e))})},i.forEach(o=>{const{beforeRestore:a,afterRestore:c}=o;a==null||a(e),Jd(r,o),c==null||c(e),r.$subscribe((l,u)=>{Zd(u,o)},{detached:!0})})}}var k1=R1();const dt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},N1={};function D1(t,e){const n=I_("RouterView");return Ve(),lr(n)}const P1=dt(N1,[["render",D1]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof window<"u";function O1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function bc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ut(r)?r.map(t):t(r)}return n}const zr=()=>{},Ut=Array.isArray,x1=/\/$/,M1=t=>t.replace(x1,"");function Sc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=U1(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function L1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $1(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&nr(e.matched[s],n.matched[r])&&ny(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function nr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ny(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!F1(t[n],e[n]))return!1;return!0}function F1(t,e){return Ut(t)?tf(t,e):Ut(e)?tf(e,t):t===e}function tf(t,e){return Ut(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function U1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kr||(Kr={}));function V1(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),M1(t)}const B1=/^[^#]+#/;function j1(t,e){return t.replace(B1,"#")+e}function q1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const za=()=>({left:window.pageXOffset,top:window.pageYOffset});function H1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=q1(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function nf(t,e){return(history.state?history.state.position-e:-1)+t}const bl=new Map;function z1(t,e){bl.set(t,e)}function K1(t){const e=bl.get(t);return bl.delete(t),e}let W1=()=>location.protocol+"//"+location.host;function sy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ef(c,"")}return ef(n,t)+s+r}function G1(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=sy(t,location),v=n.value,w=e.value;let A=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}A=w?d.position-w.position:0}else s(g);r.forEach(C=>{C(n.value,v,{delta:A,type:fi.pop,direction:A?A>0?Kr.forward:Kr.back:Kr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:za()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function sf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?za():null}}function Q1(t){const{history:e,location:n}=window,s={value:sy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:W1()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,sf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=fe({},r.value,e.state,{forward:c,scroll:za()});i(u.current,u,!0);const h=fe({},sf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Y1(t){t=V1(t);const e=Q1(t),n=G1(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=fe({location:"",base:t,go:s,createHref:j1.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function X1(t){return typeof t=="string"||t&&typeof t=="object"}function ry(t){return typeof t=="string"||typeof t=="symbol"}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iy=Symbol("");var rf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rf||(rf={}));function sr(t,e){return fe(new Error,{type:t,[iy]:!0},e)}function en(t,e){return t instanceof Error&&iy in t&&(e==null||!!(t.type&e))}const of="[^/]+?",J1={sensitive:!1,strict:!1,start:!0,end:!0},Z1=/[.+*?^${}()[\]/\\]/g;function eS(t,e){const n=fe({},J1,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Z1,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:w,optional:A,regexp:C}=d;i.push({name:v,repeatable:w,optional:A});const M=C||of;if(M!==of){g+=10;try{new RegExp(`(${M})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+z.message)}}let N=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(N=A&&l.length<2?`(?:/${N})`:"/"+N),A&&(N+="?"),r+=N,g+=20,A&&(g+=-8),w&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:w,optional:A}=g,C=v in l?l[v]:"";if(Ut(C)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Ut(C)?C.join("/"):C;if(!M)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function tS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nS(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=tS(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(af(s))return 1;if(af(r))return-1}return r.length-s.length}function af(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sS={type:0,value:""},rS=/[a-zA-Z0-9_]/;function iS(t){if(!t)return[[]];if(t==="/")return[[sS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:rS.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function oS(t,e,n){const s=eS(iS(t.path),n),r=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function aS(t,e){const n=[],s=new Map;e=uf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,v=cS(u);v.aliasOf=d&&d.record;const w=uf(e,u),A=[v];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of N)A.push(fe({},v,{components:d?d.record.components:v.components,path:z,aliasOf:d?d.record:v}))}let C,M;for(const N of A){const{path:z}=N;if(h&&z[0]!=="/"){const X=h.record.path,de=X[X.length-1]==="/"?"":"/";N.path=h.record.path+(z&&de+z)}if(C=oS(N,h,w),d?d.alias.push(C):(M=M||C,M!==C&&M.alias.push(C),g&&u.name&&!lf(C)&&o(u.name)),v.children){const X=v.children;for(let de=0;de<X.length;de++)i(X[de],C,d&&d.children[de])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return M?()=>{o(M)}:zr}function o(u){if(ry(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&nS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!oy(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!lf(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},v,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw sr(1,{location:u});w=d.record.name,g=fe(cf(h.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&cf(u.params,d.keys.map(M=>M.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(M=>M.re.test(v)),d&&(g=d.parse(v),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!d)throw sr(1,{location:u,currentLocation:h});w=d.record.name,g=fe({},h.params,u.params),v=d.stringify(g)}const A=[];let C=d;for(;C;)A.unshift(C.record),C=C.parent;return{name:w,path:v,params:g,matched:A,meta:uS(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function cf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uS(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function uf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function oy(t,e){return e.children.some(n=>n===t||oy(t,n))}const ay=/#/g,hS=/&/g,dS=/\//g,fS=/=/g,pS=/\?/g,cy=/\+/g,gS=/%5B/g,mS=/%5D/g,ly=/%5E/g,yS=/%60/g,uy=/%7B/g,vS=/%7C/g,hy=/%7D/g,_S=/%20/g;function Zu(t){return encodeURI(""+t).replace(vS,"|").replace(gS,"[").replace(mS,"]")}function wS(t){return Zu(t).replace(uy,"{").replace(hy,"}").replace(ly,"^")}function Sl(t){return Zu(t).replace(cy,"%2B").replace(_S,"+").replace(ay,"%23").replace(hS,"%26").replace(yS,"`").replace(uy,"{").replace(hy,"}").replace(ly,"^")}function ES(t){return Sl(t).replace(fS,"%3D")}function IS(t){return Zu(t).replace(ay,"%23").replace(pS,"%3F")}function TS(t){return t==null?"":IS(t).replace(dS,"%2F")}function Go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function bS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cy," "),o=i.indexOf("="),a=Go(o<0?i:i.slice(0,o)),c=o<0?null:Go(i.slice(o+1));if(a in e){let l=e[a];Ut(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function hf(t){let e="";for(let n in t){const s=t[n];if(n=ES(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(s)?s.map(i=>i&&Sl(i)):[s&&Sl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function SS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ut(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const CS=Symbol(""),df=Symbol(""),Ka=Symbol(""),dy=Symbol(""),Cl=Symbol("");function Ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(sr(4,{from:n,to:e})):h instanceof Error?a(h):X1(h)?a(sr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Cc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(AS(a)){const l=(a.__vccOpts||a)[e];l&&r.push(bn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=O1(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,i,o)()}))}}return r}function AS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ff(t){const e=Mt(Ka),n=Mt(dy),s=It(()=>e.resolve(On(t.to))),r=It(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(nr.bind(null,u));if(d>-1)return d;const g=pf(c[l-2]);return l>1&&pf(u)===g&&h[h.length-1].path!==g?h.findIndex(nr.bind(null,c[l-2])):d}),i=It(()=>r.value>-1&&DS(n.params,s.value.params)),o=It(()=>r.value>-1&&r.value===n.matched.length-1&&ny(n.params,s.value.params));function a(c={}){return NS(c)?e[On(t.replace)?"replace":"push"](On(t.to)).catch(zr):Promise.resolve()}return{route:s,href:It(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const RS=xe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ff,setup(t,{slots:e}){const n=cr(ff(t)),{options:s}=Mt(Ka),r=It(()=>({[gf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Sp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),kS=RS;function NS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DS(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ut(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gf=(t,e,n)=>t??e??n,PS=xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Cl),r=It(()=>t.route||s.value),i=Mt(df,0),o=It(()=>{let l=On(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=It(()=>r.value.matched[o.value]);uo(df,It(()=>o.value+1)),uo(CS,a),uo(Cl,r);const c=Ie();return Lr(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!nr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return mf(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,A=Sp(d,fe({},v,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return mf(n.default,{Component:A,route:l})||A}}});function mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const OS=PS;function xS(t){const e=aS(t.routes,t),n=t.parseQuery||bS,s=t.stringifyQuery||hf,r=t.history,i=Ar(),o=Ar(),a=Ar(),c=qv(_n);let l=_n;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=bc.bind(null,E=>""+E),h=bc.bind(null,TS),d=bc.bind(null,Go);function g(E,L){let P,V;return ry(E)?(P=e.getRecordMatcher(E),V=L):V=E,e.addRoute(V,P)}function v(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function w(){return e.getRoutes().map(E=>E.record)}function A(E){return!!e.getRecordMatcher(E)}function C(E,L){if(L=fe({},L||c.value),typeof E=="string"){const f=Sc(n,E,L.path),p=e.resolve({path:f.path},L),y=r.createHref(f.fullPath);return fe(f,p,{params:d(p.params),hash:Go(f.hash),redirectedFrom:void 0,href:y})}let P;if("path"in E)P=fe({},E,{path:Sc(n,E.path,L.path).path});else{const f=fe({},E.params);for(const p in f)f[p]==null&&delete f[p];P=fe({},E,{params:h(E.params)}),L.params=h(L.params)}const V=e.resolve(P,L),ae=E.hash||"";V.params=u(d(V.params));const Re=L1(s,fe({},E,{hash:wS(ae),path:V.path})),ne=r.createHref(Re);return fe({fullPath:Re,hash:ae,query:s===hf?SS(E.query):E.query||{}},V,{redirectedFrom:void 0,href:ne})}function M(E){return typeof E=="string"?Sc(n,E,c.value.path):fe({},E)}function N(E,L){if(l!==E)return sr(8,{from:L,to:E})}function z(E){return Z(E)}function X(E){return z(fe(M(E),{replace:!0}))}function de(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:P}=L;let V=typeof P=="function"?P(E):P;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=M(V):{path:V},V.params={}),fe({query:E.query,hash:E.hash,params:"path"in V?{}:E.params},V)}}function Z(E,L){const P=l=C(E),V=c.value,ae=E.state,Re=E.force,ne=E.replace===!0,f=de(P);if(f)return Z(fe(M(f),{state:typeof f=="object"?fe({},ae,f.state):ae,force:Re,replace:ne}),L||P);const p=P;p.redirectedFrom=L;let y;return!Re&&$1(s,V,P)&&(y=sr(16,{to:p,from:V}),Xn(V,V,!0,!1)),(y?Promise.resolve(y):Se(p,V)).catch(_=>en(_)?en(_,2)?_:At(_):ve(_,p,V)).then(_=>{if(_){if(en(_,2))return Z(fe({replace:ne},M(_.to),{state:typeof _.to=="object"?fe({},ae,_.to.state):ae,force:Re}),L||p)}else _=Ge(p,V,!0,ne,ae);return Ae(p,V,_),_})}function G(E,L){const P=N(E,L);return P?Promise.reject(P):Promise.resolve()}function Se(E,L){let P;const[V,ae,Re]=MS(E,L);P=Cc(V.reverse(),"beforeRouteLeave",E,L);for(const f of V)f.leaveGuards.forEach(p=>{P.push(bn(p,E,L))});const ne=G.bind(null,E,L);return P.push(ne),Rs(P).then(()=>{P=[];for(const f of i.list())P.push(bn(f,E,L));return P.push(ne),Rs(P)}).then(()=>{P=Cc(ae,"beforeRouteUpdate",E,L);for(const f of ae)f.updateGuards.forEach(p=>{P.push(bn(p,E,L))});return P.push(ne),Rs(P)}).then(()=>{P=[];for(const f of E.matched)if(f.beforeEnter&&!L.matched.includes(f))if(Ut(f.beforeEnter))for(const p of f.beforeEnter)P.push(bn(p,E,L));else P.push(bn(f.beforeEnter,E,L));return P.push(ne),Rs(P)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),P=Cc(Re,"beforeRouteEnter",E,L),P.push(ne),Rs(P))).then(()=>{P=[];for(const f of o.list())P.push(bn(f,E,L));return P.push(ne),Rs(P)}).catch(f=>en(f,8)?f:Promise.reject(f))}function Ae(E,L,P){for(const V of a.list())V(E,L,P)}function Ge(E,L,P,V,ae){const Re=N(E,L);if(Re)return Re;const ne=L===_n,f=Ps?history.state:{};P&&(V||ne?r.replace(E.fullPath,fe({scroll:ne&&f&&f.scroll},ae)):r.push(E.fullPath,ae)),c.value=E,Xn(E,L,P,ne),At()}let se;function yn(){se||(se=r.listen((E,L,P)=>{if(!qi.listening)return;const V=C(E),ae=de(V);if(ae){Z(fe(ae,{replace:!0}),V).catch(zr);return}l=V;const Re=c.value;Ps&&z1(nf(Re.fullPath,P.delta),za()),Se(V,Re).catch(ne=>en(ne,12)?ne:en(ne,2)?(Z(ne.to,V).then(f=>{en(f,20)&&!P.delta&&P.type===fi.pop&&r.go(-1,!1)}).catch(zr),Promise.reject()):(P.delta&&r.go(-P.delta,!1),ve(ne,V,Re))).then(ne=>{ne=ne||Ge(V,Re,!1),ne&&(P.delta&&!en(ne,8)?r.go(-P.delta,!1):P.type===fi.pop&&en(ne,20)&&r.go(-1,!1)),Ae(V,Re,ne)}).catch(zr)}))}let _t=Ar(),qe=Ar(),Me;function ve(E,L,P){At(E);const V=qe.list();return V.length?V.forEach(ae=>ae(E,L,P)):console.error(E),Promise.reject(E)}function ge(){return Me&&c.value!==_n?Promise.resolve():new Promise((E,L)=>{_t.add([E,L])})}function At(E){return Me||(Me=!E,yn(),_t.list().forEach(([L,P])=>E?P(E):L()),_t.reset()),E}function Xn(E,L,P,V){const{scrollBehavior:ae}=t;if(!Ps||!ae)return Promise.resolve();const Re=!P&&K1(nf(E.fullPath,0))||(V||!P)&&history.state&&history.state.scroll||null;return jl().then(()=>ae(E,L,Re)).then(ne=>ne&&H1(ne)).catch(ne=>ve(ne,E,L))}const Rt=E=>r.go(E);let ft;const bs=new Set,qi={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:A,getRoutes:w,resolve:C,options:t,push:z,replace:X,go:Rt,back:()=>Rt(-1),forward:()=>Rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:qe.add,isReady:ge,install(E){const L=this;E.component("RouterLink",kS),E.component("RouterView",OS),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>On(c)}),Ps&&!ft&&c.value===_n&&(ft=!0,z(r.location).catch(ae=>{}));const P={};for(const ae in _n)P[ae]=It(()=>c.value[ae]);E.provide(Ka,L),E.provide(dy,cr(P)),E.provide(Cl,c);const V=E.unmount;bs.add(E),E.unmount=function(){bs.delete(E),bs.size<1&&(l=_n,se&&se(),se=null,c.value=_n,ft=!1,Me=!1),V()}}};return qi}function Rs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function MS(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>nr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>nr(l,c))||r.push(c))}return[n,s,r]}function Wa(){return Mt(Ka)}const Ga="/cuy-art-shop/assets/Logo-removebg-preview-23a31917.png",LS="/cuy-art-shop/assets/Puntos-b413704e.svg",$S="/cuy-art-shop/assets/search-8de85e52.svg",$i="/cuy-art-shop/assets/person-c17a1bb8.svg",FS="/cuy-art-shop/assets/shopping_cart-2f426c23.svg",US="/cuy-art-shop/assets/menu-fd7c077d.svg",VS="/cuy-art-shop/assets/close-4f1b1f2c.svg";function eh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function fy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BS=fy,py=new yi("auth","Firebase",fy());/**
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
 */const Qo=new Ql("@firebase/auth");function jS(t,...e){Qo.logLevel<=ue.WARN&&Qo.warn(`Auth (${ur}): ${t}`,...e)}function _o(t,...e){Qo.logLevel<=ue.ERROR&&Qo.error(`Auth (${ur}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw th(t,...e)}function Qt(t,...e){return th(t,...e)}function qS(t,e,n){const s=Object.assign(Object.assign({},BS()),{[e]:n});return new yi("auth","Firebase",s).create(e,{appName:t.name})}function th(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return py.create(t,...e)}function H(t,e,...n){if(!t)throw th(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function fn(t,e){t||on(e)}/**
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
 */function Al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HS(){return yf()==="http:"||yf()==="https:"}function yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HS()||zw()||"connection"in navigator)?navigator.onLine:!0}function KS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hw()||Kw()}get(){return zS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nh(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GS=new Fi(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,s,r={}){return my(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gy.fetch()(yy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function my(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},WS),e);try{const r=new QS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ao(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ao(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qS(t,u,l);Vt(t,u)}}catch(r){if(r instanceof mn)throw r;Vt(t,"network-request-failed",{message:String(r)})}}async function Ui(t,e,n,s,r={}){const i=await vr(t,e,n,s,r);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yy(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?nh(t.config,r):`${t.config.apiScheme}://${r}`}class QS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),GS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ao(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function YS(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function XS(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JS(t,e=!1){const n=je(t),s=await n.getIdToken(e),r=sh(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Wr(Ac(r.auth_time)),issuedAtTime:Wr(Ac(r.iat)),expirationTime:Wr(Ac(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function sh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const r=Pp(n);return r?JSON.parse(r):(_o("Failed to decode base64 JWT payload"),null)}catch(r){return _o("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ZS(t){const e=sh(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof mn&&eC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function eC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await rr(t,XS(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rC(i.providerUserInfo):[],a=sC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function nC(t){const e=je(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function rC(t){return t.map(e=>{var{providerId:n}=e,s=eh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function iC(t,e){const n=await my(t,{},async()=>{const s=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=yy(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await iC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new pi;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
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
 */function wn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JS(this,e)}reload(){return nC(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rr(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:z,isAnonymous:X,providerData:de,stsTokenManager:Z}=n;H(N&&Z,e,"internal-error");const G=pi.fromJSON(this.name,Z);H(typeof N=="string",e,"internal-error"),wn(h,e.name),wn(d,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof X=="boolean",e,"internal-error"),wn(g,e.name),wn(v,e.name),wn(w,e.name),wn(A,e.name),wn(C,e.name),wn(M,e.name);const Se=new hs({uid:N,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:X,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:G,createdAt:C,lastLoginAt:M});return de&&Array.isArray(de)&&(Se.providerData=de.map(Ae=>Object.assign({},Ae))),A&&(Se._redirectEventId=A),Se}static async _fromIdTokenResponse(e,n,s=!1){const r=new pi;r.updateFromServerResponse(n);const i=new hs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yo(i),i}}/**
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
 */const vf=new Map;function an(t){fn(t instanceof Function,"Expected a class definition");let e=vf.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vf.set(t,e),e)}/**
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
 */class _y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_y.type="NONE";const _f=_y;/**
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
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=wo(this.userKey,r.apiKey,i),this.fullPersistenceKey=wo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bs(an(_f),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||an(_f);const o=wo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=hs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Bs(i,e,s))}}/**
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
 */function wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Sy(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||Ey(e))&&!e.includes("edge/"))return"Chrome";if(Ty(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function wy(t=at()){return/firefox\//i.test(t)}function rh(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ey(t=at()){return/crios\//i.test(t)}function Iy(t=at()){return/iemobile/i.test(t)}function Ty(t=at()){return/android/i.test(t)}function by(t=at()){return/blackberry/i.test(t)}function Sy(t=at()){return/webos/i.test(t)}function Qa(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oC(t=at()){var e;return Qa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aC(){return Ww()&&document.documentMode===10}function Cy(t=at()){return Qa(t)||Ty(t)||Sy(t)||by(t)||/windows phone/i.test(t)||Iy(t)}function cC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ay(t,e=[]){let n;switch(t){case"Browser":n=wf(at());break;case"Worker":n=`${wf(at())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${s}`}async function Ry(t,e){return vr(t,"GET","/v2/recaptchaConfig",yr(t,e))}function Ef(t){return t!==void 0&&t.enterprise!==void 0}class ky{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function lC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ny(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",lC().appendChild(s)})}function uC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hC="https://www.google.com/recaptcha/enterprise.js?render=",dC="recaptcha-enterprise",fC="NO_RECAPTCHA";class Dy{constructor(e){this.type=dC,this.auth=_r(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ry(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ky(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ef(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(fC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ef(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ny(hC+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xo(t,e,n,s=!1){const r=new Dy(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class pC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class gC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new If(this),this.idTokenSubscription=new If(this),this.beforeStateQueue=new pC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}async initializeRecaptchaConfig(){const e=await Ry(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ky(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Dy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _r(t){return je(t)}class If{constructor(e){this.auth=e,this.observer=null,this.addObserver=e0(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mC(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ko(i,e??{}))return r;Vt(r,"already-initialized")}return n.initialize({options:e})}function yC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vC(t,e,n){const s=_r(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Py(e),{host:o,port:a}=_C(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||wC()}function Py(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _C(t){const e=Py(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Tf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Tf(o)}}}function Tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function Oy(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Rc(t,e){return Ui(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}/**
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
 */async function EC(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function IC(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
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
 */class gi extends ih{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new gi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Xo(e,s,"signInWithPassword");return Rc(e,r)}else return Rc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Xo(e,s,"signInWithPassword");return Rc(e,i)}else return Promise.reject(r)});case"emailLink":return EC(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Oy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IC(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function js(t,e){return Ui(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
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
 */const TC="http://localhost";class ys extends ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=eh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ys(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:TC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */function bC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SC(t){const e=kr(Nr(t)).link,n=e?kr(Nr(e)).deep_link_id:null,s=kr(Nr(t)).deep_link_id;return(s?kr(Nr(s)).link:null)||s||n||e||t}class oh{constructor(e){var n,s,r,i,o,a;const c=kr(Nr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=bC((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SC(e);try{return new oh(n)}catch{return null}}}/**
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
 */class wr{constructor(){this.providerId=wr.PROVIDER_ID}static credential(e,n){return gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=oh.parseLink(n);return H(s,"argument-error"),gi._fromEmailAndCode(e,s.code,s.tenantId)}}wr.PROVIDER_ID="password";wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vi extends xy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends Vi{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class An extends Vi{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
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
 */class Rn extends Vi{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rn.credential(n,s)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */async function kc(t,e){return Ui(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await hs._fromIdTokenResponse(e,s,r),o=bf(s);return new vs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=bf(s);return new vs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends mn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Jo(e,n,s,r)}}function My(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,s):i})}async function CC(t,e,n=!1){const s=await rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",s)}/**
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
 */async function AC(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await rr(t,My(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=sh(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),vs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(s,"user-mismatch"),i}}/**
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
 */async function Ly(t,e,n=!1){const s="signIn",r=await My(t,s,e),i=await vs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function RC(t,e){return Ly(_r(t),e)}async function kC(t,e,n){var s;const r=_r(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await Xo(r,i,"signUpPassword");o=kc(r,l)}else o=kc(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Xo(r,i,"signUpPassword");return kc(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await vs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function NC(t,e,n){return RC(je(t),wr.credential(e,n))}function DC(t,e){return $y(je(t),e,null)}function PC(t,e){return $y(je(t),null,e)}async function $y(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await rr(t,Oy(s,i));await t._updateTokensIfNecessary(o,!0)}function OC(t,e,n,s){return je(t).onIdTokenChanged(e,n,s)}function xC(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function MC(t){return je(t).signOut()}const Zo="__sak";/**
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
 */class Fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function LC(){const t=at();return rh(t)||Qa(t)}const $C=1e3,FC=10;class Uy extends Fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LC()&&cC(),this.fallbackToPolling=Cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);aC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,FC):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uy.type="LOCAL";const UC=Uy;/**
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
 */class Vy extends Fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vy.type="SESSION";const By=Vy;/**
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
 */function VC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ya(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await VC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ya.receivers=[];/**
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
 */class BC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ah("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yt(){return window}function jC(t){Yt().location.href=t}/**
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
 */function jy(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function qC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zC(){return jy()?self:null}/**
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
 */const qy="firebaseLocalStorageDb",KC=1,ea="firebaseLocalStorage",Hy="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function WC(){const t=indexedDB.deleteDatabase(qy);return new Bi(t).toPromise()}function Rl(){const t=indexedDB.open(qy,KC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ea,{keyPath:Hy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ea)?e(s):(s.close(),await WC(),e(await Rl()))})})}async function Sf(t,e,n){const s=Xa(t,!0).put({[Hy]:e,value:n});return new Bi(s).toPromise()}async function GC(t,e){const n=Xa(t,!1).get(e),s=await new Bi(n).toPromise();return s===void 0?null:s.value}function Cf(t,e){const n=Xa(t,!0).delete(e);return new Bi(n).toPromise()}const QC=800,YC=3;class zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>YC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ya._getInstance(zC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qC(),!this.activeServiceWorker)return;this.sender=new BC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rl();return await Sf(e,Zo,"1"),await Cf(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>GC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xa(r,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zy.type="LOCAL";const XC=zy;new Fi(3e4,6e4);/**
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
 */function JC(t,e){return e?an(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ch extends ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZC(t){return Ly(t.auth,new ch(t),t.bypassAuthState)}function eA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),AC(n,new ch(t),t.bypassAuthState)}async function tA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),CC(n,new ch(t),t.bypassAuthState)}/**
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
 */class Ky{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZC;case"linkViaPopup":case"linkViaRedirect":return tA;case"reauthViaPopup":case"reauthViaRedirect":return eA;default:Vt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nA=new Fi(2e3,1e4);class xs extends Ky{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nA.get())};e()}}xs.currentPopupAction=null;/**
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
 */const sA="pendingRedirect",Eo=new Map;class rA extends Ky{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const s=await iA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iA(t,e){const n=cA(e),s=aA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function oA(t,e){Eo.set(t._key(),e)}function aA(t){return an(t._redirectPersistence)}function cA(t){return wo(sA,t.config.apiKey,t.name)}async function lA(t,e,n=!1){const s=_r(t),r=JC(s,e),o=await new rA(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const uA=10*60*1e3;class hA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wy(t);default:return!1}}/**
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
 */async function fA(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
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
 */const pA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gA=/^https?/;async function mA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fA(t);for(const n of e)try{if(yA(n))return}catch{}Vt(t,"unauthorized-domain")}function yA(t){const e=Al(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gA.test(n))return!1;if(pA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const vA=new Fi(3e4,6e4);function Rf(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _A(t){return new Promise((e,n)=>{var s,r,i;function o(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(Qt(t,"network-request-failed"))},timeout:vA.get()})}if(!((r=(s=Yt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=uC("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},Ny(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function wA(t){return Io=Io||_A(t),Io}/**
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
 */const EA=new Fi(5e3,15e3),IA="__/auth/iframe",TA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CA(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nh(e,TA):`https://${t.config.authDomain}/${IA}`,s={apiKey:e.apiKey,appName:t.name,v:ur},r=SA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${vi(s).slice(1)}`}async function AA(t){const e=await wA(t),n=Yt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:CA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},EA.get());function c(){Yt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const RA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kA=500,NA=600,DA="_blank",PA="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OA(t,e,n,s=kA,r=NA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},RA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=at().toLowerCase();n&&(a=Ey(l)?DA:n),wy(l)&&(e=e||PA,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(oC(l)&&a!=="_self")return xA(e||"",a),new kf(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new kf(h)}function xA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const MA="__/auth/handler",LA="emulator/auth/handler",$A=encodeURIComponent("fac");async function Nf(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ur,eventId:r};if(e instanceof xy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Vi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$A}=${encodeURIComponent(c)}`:"";return`${FA(t)}?${vi(a).slice(1)}${l}`}function FA({config:t}){return t.emulator?nh(t,LA):`https://${t.authDomain}/${MA}`}/**
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
 */const Nc="webStorageSupport";class UA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=By,this._completeRedirectFn=lA,this._overrideRedirectResult=oA}async _openPopup(e,n,s,r){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nf(e,n,s,Al(),r);return OA(e,o,ah())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Nf(e,n,s,Al(),r);return jC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(fn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await AA(e),s=new hA(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Nc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cy()||rh()||Qa()}}const VA=UA;var Df="@firebase/auth",Pf="0.23.1";/**
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
 */class BA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qA(t){Ws(new ds("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),H(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ay(t)},l=new gC(s,r,i,c);return yC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ws(new ds("auth-internal",e=>{const n=_r(e.getProvider("auth").getImmediate());return(s=>new BA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(Df,Pf,jA(t)),$n(Df,Pf,"esm2017")}/**
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
 */const HA=5*60,zA=xp("authIdTokenMaxAge")||HA;let Of=null;const KA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zA)return;const r=n==null?void 0:n.token;Of!==r&&(Of=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function pn(t=Fp()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mC(t,{popupRedirectResolver:VA,persistence:[XC,UC,By]}),s=xp("authTokenSyncURL");if(s){const i=KA(s);xC(n,i,()=>i(n.currentUser)),OC(n,o=>i(o))}const r=Op("auth");return r&&vC(n,`http://${r}`),n}qA("Browser");const Ja=t=>(zn("data-v-b88a7ed0"),t=t(),Kn(),t),WA={class:"head"},GA=fa('<div class="lefthead" data-v-b88a7ed0><button data-v-b88a7ed0><img src="'+Ga+'" alt="Persona" data-v-b88a7ed0></button></div><div class="centerhead" data-v-b88a7ed0><input type="text" name="text" id="one" data-v-b88a7ed0><div class="centersearch" data-v-b88a7ed0><img src="'+LS+'" alt="Puntos" data-v-b88a7ed0><button data-v-b88a7ed0><img src="'+$S+'" alt="Busqueda" data-v-b88a7ed0></button></div></div>',2),QA={class:"righthead"},YA=Ja(()=>m("img",{src:$i,alt:"Persona"},null,-1)),XA=[YA],JA=Ja(()=>m("button",null,[m("img",{src:FS,alt:"Carro de compra"})],-1)),ZA={class:"containmodal"},eR={class:"contain"},tR={class:"salir"},nR=Ja(()=>m("img",{src:VS,alt:"Cerrar"},null,-1)),sR=[nR],rR=Ja(()=>m("h2",null,"Menu",-1)),iR=xe({__name:"NavBar",setup(t){const e=Ie(!1),n=Wa(),s=()=>{n.push("/about")},r=()=>{pn().currentUser!=null?n.push("/micuenta"):n.push("/login")},i=()=>{pn().currentUser!=null?n.push("/micuenta"):n.push("/login")};return(o,a)=>(Ve(),vt(qt,null,[m("header",WA,[GA,m("div",QA,[m("button",{onClick:r},XA),JA,m("button",null,[m("img",{src:US,alt:"Menu",onClick:a[0]||(a[0]=c=>e.value=!e.value)})])])]),ye(m("div",ZA,[m("div",eR,[m("div",tR,[m("button",{onClick:a[1]||(a[1]=c=>e.value=!e.value)},sR)]),m("div",{class:"opciones"},[rR,m("p",{href:"#",onClick:i},"Mi Cuenta"),m("p",{href:"#",onClick:s},"Acerca de nosotros")])])],512),[[Nt,e.value]])],64))}});const oR=dt(iR,[["__scopeId","data-v-b88a7ed0"]]),aR="/cuy-art-shop/assets/prom-071a18b4.jpg",cR="/cuy-art-shop/assets/09757-BIG-2a63eeeb.jpg",lR="/cuy-art-shop/assets/taza-tradicional-523da630.webp",uR="/cuy-art-shop/assets/9a0e8b4110eb49644003a6d56f7b1232-53097ca7.jpg",mi=Pw("registro",{state:()=>({datos:[{nombre:"Juan",correo:"juan@juan.com",password:"123456",telefono:"1234567890",direccion:"Calle 123",uso:!0}]}),actions:{addRegistro(t){this.datos.push(t)},getRegistro(t){for(let e=0;e<this.datos.length;e++)if(this.datos[e].correo==t)return this.datos[e]},addtelefono(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].telefono=e)},adddireccion(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].direccion=e)},getAll(){for(let t=0;t<this.datos.length;t++)console.log(this.datos[t])},async setAll(){try{const t=h1(Xb(nn,"usuarios"),d1("uso","==",!0));(await w1(t)).forEach(n=>{const s={nombre:n.data().nombre,correo:n.data().correo,password:n.data().password,telefono:n.data().telefono,direccion:n.data().direccion,uso:n.data().uso};this.addRegistro(s)})}catch{}},clearAll(){this.datos=[]}},persist:!0}),ji=t=>(zn("data-v-4c927725"),t=t(),Kn(),t),hR={class:"main"},dR={class:"mainleft"},fR={class:"mainleftleft"},pR=fa('<div class="categorias" data-v-4c927725><h2 data-v-4c927725>Catergorias</h2><div class="linea" data-v-4c927725></div><form data-v-4c927725><div data-v-4c927725><input type="checkbox" name="tipo1" id="tipo1" data-v-4c927725><label for="tipo1" data-v-4c927725>Ceràmica</label></div><div data-v-4c927725><input type="checkbox" name="tipo2" id="tipo2" data-v-4c927725><label for="tipo2" data-v-4c927725>Barro</label></div><div data-v-4c927725><input type="checkbox" name="tipo3" id="tipo3" data-v-4c927725><label for="tipo3" data-v-4c927725>Tela</label></div><div data-v-4c927725><input type="checkbox" name="tipo4" id="tipo4" data-v-4c927725><label for="tipo4" data-v-4c927725>Acuarela</label></div></form></div>',1),gR={class:"precios"},mR=ji(()=>m("h2",null,"Precios",-1)),yR=ji(()=>m("div",{class:"linea"},null,-1)),vR={class:"precio"},_R=ji(()=>m("div",{class:"preciosss"},[m("h3",null,"20.000"),m("h3",null,"800.000")],-1)),wR={class:"precioss"},ER=ji(()=>m("span",null,"$",-1)),IR=ji(()=>m("button",null,"OK",-1)),TR=fa('<div class="mainright" data-v-4c927725><div class="promocion" data-v-4c927725><img src="'+aR+'" alt="promocion" data-v-4c927725></div><div class="targetas" data-v-4c927725><div class="targeta" data-v-4c927725><img src="'+cR+'" alt="Primer Articulo" data-v-4c927725><div class="linea" data-v-4c927725></div><h2 data-v-4c927725>Vandola de Cafe</h2><div class="price" data-v-4c927725><p data-v-4c927725>$ 45.000</p><div class="lineap" data-v-4c927725></div></div><p data-v-4c927725>Ha, Pero que lindo</p></div><div class="targeta" data-v-4c927725><img src="'+lR+'" alt="Segundo Articulo" data-v-4c927725><div class="linea" data-v-4c927725></div><h2 data-v-4c927725>Taza personalizada de Ceramìca</h2><div class="price" data-v-4c927725><p data-v-4c927725>$ 25.000</p><div class="lineap" data-v-4c927725></div></div><p data-v-4c927725>Producto Tolimence, para tomar cafesito</p></div><div class="targeta" data-v-4c927725><img src="'+uR+'" alt="Tercer Articulo" data-v-4c927725><div class="linea" data-v-4c927725></div><h2 data-v-4c927725>Calletero :v</h2><div class="price" data-v-4c927725><p data-v-4c927725>$ 40.000</p><div class="lineap" data-v-4c927725></div></div><p data-v-4c927725>Para Guardar tus deliciosas Galletas</p></div></div></div>',1),bR=xe({__name:"MainComponent",setup(t){const e=mi(),n=Ie(2e4);return Hl(async()=>{e.clearAll(),await e.setAll(),e.getAll()}),(s,r)=>(Ve(),vt("main",hR,[m("div",dR,[m("div",fR,[pR,m("div",gR,[mR,yR,m("div",vR,[_R,ye(m("input",{type:"range",name:"rango",id:"rango",min:"20000",max:"800000","onUpdate:modelValue":r[0]||(r[0]=i=>n.value=i),step:"100"},null,512),[[Xe,n.value]]),m("div",wR,[ER,ye(m("input",{type:"number",name:"numero",id:"numero","onUpdate:modelValue":r[1]||(r[1]=i=>n.value=i),step:"100"},null,512),[[Xe,n.value]]),IR])])])])]),TR]))}});const SR=dt(bR,[["__scopeId","data-v-4c927725"]]),CR={class:"container"},AR=xe({__name:"MainPage",setup(t){return(e,n)=>(Ve(),vt("div",CR,[Te(oR),Te(SR)]))}});const RR=dt(AR,[["__scopeId","data-v-3eabb5b3"]]),kR=xe({__name:"HomeView",setup(t){return(e,n)=>(Ve(),lr(RR))}}),NR="/cuy-art-shop/assets/salir-9650414e.svg",Gy=t=>(zn("data-v-c4af7afc"),t=t(),Kn(),t),DR={class:"head"},PR=Gy(()=>m("img",{src:Ga,alt:"Persona"},null,-1)),OR=[PR],xR=Gy(()=>m("img",{src:NR,alt:"Menu"},null,-1)),MR=[xR],LR=xe({__name:"NavBarUser",setup(t){const e=Wa(),n=async()=>{await MC(pn()),e.push("/")},s=()=>{e.push("/")},r=()=>{pn().currentUser!=null?e.push("/micuenta"):e.push("/login")};return(i,o)=>(Ve(),vt("header",DR,[m("button",{onClick:r},OR),m("h1",{onClick:s},"CUYART-SHOP"),m("button",{onClick:n},MR)]))}});const Za=dt(LR,[["__scopeId","data-v-c4af7afc"]]),Qy="/cuy-art-shop/assets/Logo-3a4a9f77.jpeg",Yy="/cuy-art-shop/assets/youtube-375cd83e.png",ec="/cuy-art-shop/assets/facebook-193ba9b3.png",$R="/cuy-art-shop/assets/twitch-cf8e71de.png",lh="/cuy-art-shop/assets/gmail-6497f877.png",FR={class:"main"},UR=fa('<div class="mainleft" data-v-a8f0d743><div class="mainleftleft" data-v-a8f0d743><img class="logo" src="'+Qy+'" alt="El logo" data-v-a8f0d743><h1 data-v-a8f0d743>CUYART-SHOP</h1><h3 data-v-a8f0d743>Redes Sociales</h3><img src="'+Yy+'" alt="Youtube" data-v-a8f0d743><img src="'+ec+'" alt="Facebook" data-v-a8f0d743><img src="'+$R+'" alt="Twitch" data-v-a8f0d743><h3 data-v-a8f0d743>Contàctanos</h3><img src="'+lh+'" alt="Gmail" data-v-a8f0d743></div></div><div class="mainright" data-v-a8f0d743><h1 data-v-a8f0d743>¿Quienes Somos?</h1><p data-v-a8f0d743>CUYART-SHOP es una tienda virtual de artesanìas que atraves del comercio electrònico busca conectar y ayudar a expandir los negocios de los artesanos a otras regiones del paìs</p><h1 data-v-a8f0d743>Misiòn</h1><p data-v-a8f0d743>La misiòn de la empresa Cuy Art Shop es brindar a los artesanos una conexiòn seguray de calidad con sus compradores promoviendo el comercio electrònico y extendiendo los negocios de nuestros artesanos</p><h1 data-v-a8f0d743>Visiòn</h1><p data-v-a8f0d743>Cuy Art Shop serà la empresa lìder en Colombia en venta y compra de artesanìas, siendo una de las màs importanes para expandir los negocios de los artesanos</p></div>',2),VR=[UR],BR=xe({__name:"AboutComponent",setup(t){return Ie(2e4),(e,n)=>(Ve(),vt("main",FR,VR))}});const jR=dt(BR,[["__scopeId","data-v-a8f0d743"]]),qR={class:"container"},HR=xe({__name:"AboutPage",setup(t){return(e,n)=>(Ve(),vt("div",qR,[Te(Za),Te(jR)]))}});const zR=dt(HR,[["__scopeId","data-v-dce66de8"]]),KR=xe({__name:"AboutView",setup(t){return(e,n)=>(Ve(),lr(zR))}}),Is=t=>(zn("data-v-be535ad1"),t=t(),Kn(),t),WR={class:"contain"},GR=Is(()=>m("div",{class:"imgprofile"},[m("img",{src:$i,alt:"Logo"})],-1)),QR=Is(()=>m("div",{class:"reg"},[m("h1",null,"Login"),m("div",{class:"linea"})],-1)),YR={class:"in"},XR=Is(()=>m("label",{for:""},"Correo",-1)),JR={class:"in"},ZR=Is(()=>m("label",{for:""},"Contraseña",-1)),ek=Is(()=>m("div",{class:"goface"},[m("img",{src:lh,alt:"Google"}),m("img",{src:ec,alt:"Facebook"})],-1)),tk=Is(()=>m("img",{src:Ga,alt:"Logo"},null,-1)),nk=Is(()=>m("div",{class:"space"},null,-1)),sk=xe({__name:"LoginComponent",setup(t){const e=Wa(),n=()=>{e.push("/registro")},s=Ie(""),r=Ie(""),i=()=>{const o=pn();NC(o,s.value,r.value).then(a=>{a.user,alert("Bienvenido")}).then(()=>{e.push("/micuenta")}).catch(a=>{alert("Intente de nuevo"),a.code,a.message})};return(o,a)=>(Ve(),vt("main",WR,[GR,QR,m("div",YR,[XR,ye(m("input",{type:"text",name:"usuario",id:"usuario",placeholder:"hugoRicardo@gmail.con","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},null,512),[[Xe,s.value]])]),m("div",JR,[ZR,ye(m("input",{type:"password",name:"pass",id:"pass",placeholder:"Contraseña","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[Xe,r.value]])]),m("button",{onClick:i},"Ingresar"),ek,m("footer",null,[tk,m("button",{class:"bt-reg",onClick:n},"Regìstrate"),nk])]))}});const rk=dt(sk,[["__scopeId","data-v-be535ad1"]]),ik={class:"container"},ok=xe({__name:"LoginPage",setup(t){return(e,n)=>(Ve(),vt("div",ik,[Te(Za),Te(rk)]))}});const ak=dt(ok,[["__scopeId","data-v-c896fb3a"]]),ck=xe({__name:"LoginView",setup(t){return(e,n)=>(Ve(),lr(ak))}}),Zt=t=>(zn("data-v-6946e49f"),t=t(),Kn(),t),lk={class:"contain"},uk=Zt(()=>m("div",{class:"imgprofile"},[m("img",{src:$i,alt:"Logo"})],-1)),hk=Zt(()=>m("div",{class:"reg"},[m("h1",null,"Registrarse"),m("div",{class:"linea"})],-1)),dk={class:"in"},fk=Zt(()=>m("label",{for:""},"Nombre Usuario",-1)),pk={class:"in"},gk=Zt(()=>m("label",{for:""},"Correo",-1)),mk={class:"in"},yk=Zt(()=>m("label",{for:""},"Contraseña",-1)),vk={class:"in"},_k=Zt(()=>m("label",{for:""},"Repite Contraseña",-1)),wk=Zt(()=>m("div",{class:"goface"},[m("img",{src:lh,alt:"Google"}),m("img",{src:ec,alt:"Facebook"})],-1)),Ek=Zt(()=>m("div",{class:"linea"},null,-1)),Ik=Zt(()=>m("img",{src:Ga,alt:"Logo"},null,-1)),Tk=Zt(()=>m("div",{class:"space"},null,-1)),bk=xe({__name:"RegistroComponent",setup(t){const e=mi(),n=Ie(""),s=Ie(""),r=Ie(""),i=Ie(""),o=Wa(),a=()=>{o.push("/login")},c=async()=>{if(n.value.trim()==""&&r.value.trim()==""&&s.value.trim()==""&&i.value.trim()==""){console.log("Llenar todos los datos");return}if(s.value!==i.value){console.log("mal rey");return}console.log("adentro");try{await ty(Tn(nn,"usuarios",r.value.toString()),{nombre:n.value.toString(),correo:r.value.toString(),password:s.value.toString(),uso:!0}).then(()=>{console.log("Document successfully written!")}),console.log("Document written with ID: ",Tn(nn,"usuarios",r.value.toString()).id)}catch(l){console.log("Error adding document: ",l)}await kC(pn(),r.value.toString(),s.value.toString()).then(l=>{}),e.clearAll(),await e.setAll(),o.push("/micuenta")};return(l,u)=>(Ve(),vt("main",lk,[uk,hk,m("div",dk,[fk,ye(m("input",{type:"text",name:"usuario",id:"usuario",placeholder:"Hugo Ricardo","onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h),required:""},null,512),[[Xe,n.value]])]),m("div",pk,[gk,ye(m("input",{type:"email",name:"usuario",id:"usuario",placeholder:"hugoRicardo@gmail.con","onUpdate:modelValue":u[1]||(u[1]=h=>r.value=h),required:""},null,512),[[Xe,r.value]])]),m("div",mk,[yk,ye(m("input",{type:"password",name:"pass",id:"pass",placeholder:"Contraseña","onUpdate:modelValue":u[2]||(u[2]=h=>s.value=h),required:""},null,512),[[Xe,s.value]])]),m("div",vk,[_k,ye(m("input",{type:"password",name:"pass",id:"pass",placeholder:"Contraseña","onUpdate:modelValue":u[3]||(u[3]=h=>i.value=h),required:""},null,512),[[Xe,i.value]])]),m("button",{onClick:c},"Registrate"),wk,Ek,m("footer",null,[Ik,m("button",{class:"bt-reg",onClick:a},"Ingresa"),Tk])]))}});const Sk=dt(bk,[["__scopeId","data-v-6946e49f"]]),Ck={class:"container"},Ak=xe({__name:"RegistroPage",setup(t){return(e,n)=>(Ve(),vt("div",Ck,[Te(Za),Te(Sk)]))}});const Rk=dt(Ak,[["__scopeId","data-v-932305bb"]]),kk=xe({__name:"RegistroView",setup(t){return(e,n)=>(Ve(),lr(Rk))}}),Er=t=>(zn("data-v-3473bc56"),t=t(),Kn(),t),Nk={class:"contain"},Dk=Er(()=>m("div",{class:"imgprofile"},[m("img",{src:$i,alt:"Logo"})],-1)),Pk=Er(()=>m("div",{class:"reg"},[m("h1",null,"Informacion"),m("div",{class:"linea"})],-1)),Ok={class:"in"},xk=Er(()=>m("label",{for:""},"Nombre de Usuario",-1)),Mk=["placeholder"],Lk={class:"in"},$k=Er(()=>m("label",{for:""},"Correo",-1)),Fk=["placeholder"],Uk={class:"in"},Vk=Er(()=>m("label",{for:""},"Telèfono",-1)),Bk=["placeholder"],jk={class:"in"},qk=Er(()=>m("label",{for:""},"Direcciòn",-1)),Hk=["placeholder"],zk=xe({__name:"MiCuentaInformacion",props:{nom:String,cor:String,pas:String,tel:String,dir:String},setup(t){const e=Ie(""),n=Ie(""),s=Ie(""),r=Ie("");return(i,o)=>(Ve(),vt("main",Nk,[Dk,Pk,m("div",Ok,[xk,ye(m("input",{type:"text",name:"usuario",id:"usuario1",placeholder:t.nom,disabled:"","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,8,Mk),[[Xe,e.value]])]),m("div",Lk,[$k,ye(m("input",{type:"email",name:"correo",id:"correo",placeholder:t.cor,disabled:"","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,8,Fk),[[Xe,n.value]])]),m("div",Uk,[Vk,ye(m("input",{placeholder:t.tel,type:"number",name:"telefono",id:"telefono",disabled:"","onUpdate:modelValue":o[2]||(o[2]=a=>s.value=a)},null,8,Bk),[[Xe,s.value]])]),m("div",jk,[qk,ye(m("input",{placeholder:t.dir,type:"text",name:"direccion",id:"dirrecion",disabled:"","onUpdate:modelValue":o[3]||(o[3]=a=>r.value=a)},null,8,Hk),[[Xe,r.value]])])]))}});const Kk=dt(zk,[["__scopeId","data-v-3473bc56"]]),Yn=t=>(zn("data-v-a24bf9a1"),t=t(),Kn(),t),Wk={class:"contain"},Gk=Yn(()=>m("div",{class:"imgprofile"},[m("img",{src:$i,alt:"Logo"})],-1)),Qk=Yn(()=>m("div",{class:"reg"},[m("h1",null,"Informacion"),m("div",{class:"linea"})],-1)),Yk={class:"in"},Xk=Yn(()=>m("label",{for:""},"Nombre de Usuario",-1)),Jk=["placeholder"],Zk={class:"in"},eN=Yn(()=>m("label",{for:""},"Correo",-1)),tN=["placeholder"],nN={class:"in"},sN=Yn(()=>m("label",{for:""},"Contraseña",-1)),rN=["placeholder"],iN={class:"in"},oN=Yn(()=>m("label",{for:""},"Telèfono",-1)),aN=["placeholder"],cN={class:"in"},lN=Yn(()=>m("label",{for:""},"Direcciòn",-1)),uN=["placeholder"],hN=Yn(()=>m("button",{class:"bt-can"},"Cancelar",-1)),dN=xe({__name:"MiCuentaActualizar",props:{nom:String,cor:String,pas:String,tel:String,dir:String},setup(t){const e=mi(),n=pn().currentUser,s=Ie(""),r=Ie(""),i=Ie(""),o=Ie(""),a=Ie(""),c=async()=>{var w,A,C,M,N,z,X,de,Z,G,Se,Ae,Ge;let l=!1;if(n==null)return;console.log(n);let u=(w=n==null?void 0:n.email)==null?void 0:w.toString(),h=((C=e.getRegistro(((A=n.email)==null?void 0:A.toString())||""))==null?void 0:C.nombre)||"",d=((N=e.getRegistro(((M=n.email)==null?void 0:M.toString())||""))==null?void 0:N.password)||"",g=((X=e.getRegistro(((z=n.email)==null?void 0:z.toString())||""))==null?void 0:X.telefono)||"",v=((Z=e.getRegistro(((de=n.email)==null?void 0:de.toString())||""))==null?void 0:Z.direccion)||"";if(((Se=e.getRegistro(((G=n==null?void 0:n.email)==null?void 0:G.toString())||""))==null?void 0:Se.correo)!=r.value&&r.value.trim()!="")try{await DC(n,r.value.toString()).then(()=>{console.log("correo actualizado"),l=!0}).catch(se=>{console.log("error al actualizar correo")}).then(()=>{console.log("documento creado")}).catch(se=>{console.log("error al crear el documento")})}catch(se){console.log(se)}if(((Ge=e.getRegistro(((Ae=n==null?void 0:n.email)==null?void 0:Ae.toString())||""))==null?void 0:Ge.password)!=i.value&&i.value.trim()!=""){try{await PC(n,i.value.toString()).then(()=>{console.log("Contraseña actualizado")}).catch(se=>{console.log("error al actualizar la contraseña")}).then(()=>{console.log("documento creado")}).catch(se=>{console.log("error al crear el documento")})}catch(se){console.log(se)}try{await oo(Tn(nn,"usuarios",u||""),{password:i.value}).then(()=>{console.log("documento actualizado")}).catch(se=>{console.log("error al actualizar el documento")}).then(()=>{console.log("documento creado")}).catch(se=>{console.log("error al crear el documento")})}catch(se){console.log(se)}}if(l)try{await E1(Tn(nn,"usuarios",u||"")).then(()=>{console.log("documento eliminado")}).catch(se=>{console.log("error al eliminar el documento")}),await ty(Tn(nn,"usuarios",r.value.toString()),{nombre:s.value.toString().trim()!=""?s.value.toString():h.toString(),correo:r.value.toString(),password:i.value.toString().trim()!=""?i.value.toString():d.toString(),telefono:o.value.toString().trim()!=""?o.value.toString():g.toString(),direccion:a.value.toString().trim()!=""?a.value.toString():v.toString(),uso:!0}).then(()=>{console.log("documento creado")}).catch(se=>{console.log("error al crear el documento")})}catch(se){console.log(se)}if(s.value.toString().trim()!="")try{await oo(Tn(nn,"usuarios",u||""),{nombre:s.value}).then(()=>{console.log("documento actualizado")}).catch(se=>{console.log("error al actualizar el documento")})}catch(se){console.log(se)}if(o.value.toString().trim()!="")try{await oo(Tn(nn,"usuarios",u||""),{telefono:o.value}).then(()=>{console.log("documento actualizado")}).catch(se=>{console.log("error al actualizar el documento")})}catch(se){console.log(se)}if(a.value.toString().trim()!="")try{await oo(Tn(nn,"usuarios",u||""),{direccion:a.value}).then(()=>{console.log("documento actualizado")}).catch(se=>{console.log("error al actualizar el documento")})}catch(se){console.log(se)}e.clearAll(),await e.setAll()};return(l,u)=>(Ve(),vt("main",Wk,[Gk,Qk,m("div",Yk,[Xk,ye(m("input",{placeholder:t.nom,type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":u[0]||(u[0]=h=>s.value=h)},null,8,Jk),[[Xe,s.value]])]),m("div",Zk,[eN,ye(m("input",{placeholder:t.cor,type:"email",name:"correo",id:"correo1","onUpdate:modelValue":u[1]||(u[1]=h=>r.value=h)},null,8,tN),[[Xe,r.value]])]),m("div",nN,[sN,ye(m("input",{placeholder:t.pas,type:"password",name:"password",id:"password","onUpdate:modelValue":u[2]||(u[2]=h=>i.value=h)},null,8,rN),[[Xe,i.value]])]),m("div",iN,[oN,ye(m("input",{placeholder:t.tel,type:"number",name:"telefono",id:"telefono","onUpdate:modelValue":u[3]||(u[3]=h=>o.value=h)},null,8,aN),[[Xe,o.value]])]),m("div",cN,[lN,ye(m("input",{placeholder:t.dir,type:"text",name:"dirreccion",id:"dirreccion","onUpdate:modelValue":u[4]||(u[4]=h=>a.value=h)},null,8,uN),[[Xe,a.value]])]),m("div",{class:"actu"},[m("button",{class:"bt-act",onClick:c},"Actualizar"),hN])]))}});const fN=dt(dN,[["__scopeId","data-v-a24bf9a1"]]),Ts=t=>(zn("data-v-753c79b9"),t=t(),Kn(),t),pN={class:"main"},gN={class:"mainleft"},mN={class:"mainleftleft"},yN=Ts(()=>m("h1",null,"Mi Cuenta",-1)),vN=Ts(()=>m("div",{class:"linea1"},null,-1)),_N={class:"list"},wN={class:"lineaa2"},EN={class:"list1"},IN={class:"lineaa3"},TN={class:"opc"},bN={class:"list3"},SN={class:"lineaa4"},CN={class:"list4"},AN={class:"lineaa5"},RN=Ts(()=>m("div",{class:"linea"},null,-1)),kN=Ts(()=>m("img",{class:"logo",src:Qy,alt:"El logo"},null,-1)),NN=Ts(()=>m("h1",null,"CUYART-SHOP",-1)),DN=Ts(()=>m("img",{src:Yy,alt:"Youtube"},null,-1)),PN=Ts(()=>m("img",{src:ec,alt:"Facebook"},null,-1)),ON={class:"mainright"},xN=xe({__name:"MiCuentaComponent",setup(t){mi(),pn().currentUser;let e={};Hl(()=>{var d,g,v,w,A,C,M,N,z,X;const u=mi(),h=pn().currentUser;e={nom:((g=u.getRegistro(((d=h==null?void 0:h.email)==null?void 0:d.toString())||" "))==null?void 0:g.nombre)||" ",cor:((w=u.getRegistro(((v=h==null?void 0:h.email)==null?void 0:v.toString())||""))==null?void 0:w.correo)||"",pas:((C=u.getRegistro(((A=h==null?void 0:h.email)==null?void 0:A.toString())||""))==null?void 0:C.password)||"",tel:((N=u.getRegistro(((M=h==null?void 0:h.email)==null?void 0:M.toString())||""))==null?void 0:N.telefono)||"",dir:((X=u.getRegistro(((z=h==null?void 0:h.email)==null?void 0:z.toString())||""))==null?void 0:X.direccion)||""}});const n=Ie(!0),s=()=>{(a.value=!1)||(a.value=!1),n.value=!n.value},r=()=>{(n.value=!0)||(n.value=!0),a.value=!a.value,(a.value=!1)&&(c.value=!1,l.value=!1),(a.value=!0)&&(c.value=!1,l.value=!1)},i=()=>{(c.value=!1)||(c.value=!1),l.value=!l.value},o=()=>{(l.value=!1)||(l.value=!1),c.value=!c.value},a=Ie(!1),c=Ie(!1),l=Ie(!1);return(u,h)=>(Ve(),vt("main",pN,[m("div",gN,[m("div",mN,[yN,vN,m("div",_N,[m("div",null,[m("div",{class:kn(["linea2",n.value?"":"rot"])},null,2),ye(m("div",wN,null,512),[[Nt,!n.value]])]),m("label",{onClick:s},"Actualizar Informacion")]),m("div",EN,[m("div",null,[m("div",{class:kn(["linea3",a.value?"rot":""])},null,2),ye(m("div",IN,null,512),[[Nt,a.value]])]),m("label",{onClick:r},"Vendedora")]),m("div",TN,[m("div",bN,[m("div",null,[ye(m("div",{class:kn(["linea4",c.value?"rot":""])},null,2),[[Nt,a.value]]),ye(m("div",SN,null,512),[[Nt,c.value]])]),ye(m("label",{onClick:o},"Añadir Producto",512),[[Nt,a.value]])]),m("div",CN,[m("div",null,[ye(m("div",{class:kn(["linea5",l.value?"rot":""])},null,2),[[Nt,a.value]]),ye(m("div",AN,null,512),[[Nt,l.value]])]),ye(m("label",{onClick:i},"Actualizar Producto",512),[[Nt,a.value]])])]),RN,kN,NN,DN,PN])]),m("div",ON,[ye(Te(Kk,ph(jc(On(e))),null,16),[[Nt,n.value]]),ye(Te(fN,ph(jc(On(e))),null,16),[[Nt,!n.value]])])]))}});const MN=dt(xN,[["__scopeId","data-v-753c79b9"]]),LN={class:"container"},$N=xe({__name:"MiCuentaPage",setup(t){return(e,n)=>(Ve(),vt("div",LN,[Te(Za),Te(MN)]))}});const FN=dt($N,[["__scopeId","data-v-5b446284"]]),UN=xe({__name:"MiCuentaView",setup(t){return(e,n)=>(Ve(),lr(FN))}}),VN=xS({history:Y1("/cuy-art-shop/"),routes:[{path:"/",name:"Home",component:kR},{path:"/about",name:"About",component:KR},{path:"/login",name:"Login",component:ck},{path:"/registro",name:"Registro",component:kk},{path:"/micuenta",name:"MiCuenta",component:UN}]}),uh=bw(P1);uh.use(Aw().use(k1));uh.use(VN);uh.mount("#app");
