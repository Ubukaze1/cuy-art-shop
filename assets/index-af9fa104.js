(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ni(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Vs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=be(s)?ul(s):Vs(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(be(t))return t;if(fe(t))return t}}const al=/;(?![^(]*\))/g,cl=/:([^]+)/,ll=/\/\*.*?\*\//gs;function ul(t){const e={};return t.replace(ll,"").split(al).forEach(n=>{if(n){const s=n.split(cl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Et(t){let e="";if(be(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Et(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function $i(t){if(!t)return null;let{class:e,style:n}=t;return e&&!be(e)&&(t.class=Et(e)),n&&(t.style=Vs(n)),t}const dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fl=ni(dl);function ia(t){return!!t||t===""}const re={},rn=[],Ve=()=>{},hl=()=>!1,pl=/^on[^a-z]/,Ws=t=>pl.test(t),si=t=>t.startsWith("onUpdate:"),Te=Object.assign,ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gl=Object.prototype.hasOwnProperty,J=(t,e)=>gl.call(t,e),B=Array.isArray,xn=t=>zs(t)==="[object Map]",ml=t=>zs(t)==="[object Set]",H=t=>typeof t=="function",be=t=>typeof t=="string",ii=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",oa=t=>fe(t)&&H(t.then)&&H(t.catch),_l=Object.prototype.toString,zs=t=>_l.call(t),vl=t=>zs(t).slice(8,-1),bl=t=>zs(t)==="[object Object]",oi=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bs=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ks=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yl=/-(\w)/g,tt=Ks(t=>t.replace(yl,(e,n)=>n?n.toUpperCase():"")),Il=/\B([A-Z])/g,_n=Ks(t=>t.replace(Il,"-$1").toLowerCase()),qs=Ks(t=>t.charAt(0).toUpperCase()+t.slice(1)),pr=Ks(t=>t?`on${qs(t)}`:""),jn=(t,e)=>!Object.is(t,e),ys=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ps=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},kr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ui;const El=()=>Ui||(Ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class aa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ca(t){return new aa(t)}function wl(t,e=Me){e&&e.active&&e.effects.push(t)}function la(){return Me}function Tl(t){Me&&Me.cleanups.push(t)}const ai=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ua=t=>(t.w&Pt)>0,da=t=>(t.n&Pt)>0,Rl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},Cl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ua(r)&&!da(r)?r.delete(t):e[n++]=r,r.w&=~Pt,r.n&=~Pt}e.length=n}},Os=new WeakMap;let kn=0,Pt=1;const Nr=30;let He;const Vt=Symbol(""),Mr=Symbol("");class ci{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wl(this,s)}run(){if(!this.active)return this.fn();let e=He,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,wt=!0,Pt=1<<++kn,kn<=Nr?Rl(this):Fi(this),this.fn()}finally{kn<=Nr&&Cl(this),Pt=1<<--kn,He=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Fi(this),this.onStop&&this.onStop(),this.active=!1)}}function Fi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const fa=[];function vn(){fa.push(wt),wt=!1}function bn(){const t=fa.pop();wt=t===void 0?!0:t}function Pe(t,e,n){if(wt&&He){let s=Os.get(t);s||Os.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ai()),ha(r)}}function ha(t,e){let n=!1;kn<=Nr?da(t)||(t.n|=Pt,n=!ua(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function ct(t,e,n,s,r,i){const o=Os.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?oi(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),xn(t)&&a.push(o.get(Mr)));break;case"delete":B(t)||(a.push(o.get(Vt)),xn(t)&&a.push(o.get(Mr)));break;case"set":xn(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&xr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);xr(ai(c))}}function xr(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&Bi(s);for(const s of n)s.computed||Bi(s)}function Bi(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Sl(t,e){var n;return(n=Os.get(t))===null||n===void 0?void 0:n.get(e)}const Al=ni("__proto__,__v_isRef,__isVue"),pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ii)),Pl=li(),Ol=li(!1,!0),kl=li(!0),Hi=Nl();function Nl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)Pe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vn();const s=Y(this)[e].apply(this,n);return bn(),s}}),t}function Ml(t){const e=Y(this);return Pe(e,"has",t),e.hasOwnProperty(t)}function li(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Jl:ba:e?va:_a).get(s))return s;const o=B(s);if(!t){if(o&&J(Hi,r))return Reflect.get(Hi,r,i);if(r==="hasOwnProperty")return Ml}const a=Reflect.get(s,r,i);return(ii(r)?pa.has(r):Al(r))||(t||Pe(s,"get",r),e)?a:de(a)?o&&oi(r)?a:a.value:fe(a)?t?ya(a):yn(a):a}}const xl=ga(),Dl=ga(!0);function ga(t=!1){return function(n,s,r,i){let o=n[s];if(un(o)&&de(o)&&!de(r))return!1;if(!t&&(!ks(r)&&!un(r)&&(o=Y(o),r=Y(r)),!B(n)&&de(o)&&!de(r)))return o.value=r,!0;const a=B(n)&&oi(s)?Number(s)<n.length:J(n,s),c=Reflect.set(n,s,r,i);return n===Y(i)&&(a?jn(r,o)&&ct(n,"set",s,r):ct(n,"add",s,r)),c}}function Ll(t,e){const n=J(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ct(t,"delete",e,void 0),s}function $l(t,e){const n=Reflect.has(t,e);return(!ii(e)||!pa.has(e))&&Pe(t,"has",e),n}function Ul(t){return Pe(t,"iterate",B(t)?"length":Vt),Reflect.ownKeys(t)}const ma={get:Pl,set:xl,deleteProperty:Ll,has:$l,ownKeys:Ul},Fl={get:kl,set(t,e){return!0},deleteProperty(t,e){return!0}},Bl=Te({},ma,{get:Ol,set:Dl}),ui=t=>t,Gs=t=>Reflect.getPrototypeOf(t);function fs(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),i=Y(e);n||(e!==i&&Pe(r,"get",e),Pe(r,"get",i));const{has:o}=Gs(r),a=s?ui:n?hi:Vn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function hs(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(t!==r&&Pe(s,"has",t),Pe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ps(t,e=!1){return t=t.__v_raw,!e&&Pe(Y(t),"iterate",Vt),Reflect.get(t,"size",t)}function ji(t){t=Y(t);const e=Y(this);return Gs(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function Vi(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=Gs(n);let i=s.call(n,t);i||(t=Y(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?jn(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function Wi(t){const e=Y(this),{has:n,get:s}=Gs(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ct(e,"delete",t,void 0),i}function zi(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function gs(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Y(o),c=e?ui:t?hi:Vn;return!t&&Pe(a,"iterate",Vt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ms(t,e,n){return function(...s){const r=this.__v_raw,i=Y(r),o=xn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ui:e?hi:Vn;return!e&&Pe(i,"iterate",c?Mr:Vt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function ft(t){return function(...e){return t==="delete"?!1:this}}function Hl(){const t={get(i){return fs(this,i)},get size(){return ps(this)},has:hs,add:ji,set:Vi,delete:Wi,clear:zi,forEach:gs(!1,!1)},e={get(i){return fs(this,i,!1,!0)},get size(){return ps(this)},has:hs,add:ji,set:Vi,delete:Wi,clear:zi,forEach:gs(!1,!0)},n={get(i){return fs(this,i,!0)},get size(){return ps(this,!0)},has(i){return hs.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:gs(!0,!1)},s={get(i){return fs(this,i,!0,!0)},get size(){return ps(this,!0)},has(i){return hs.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ms(i,!1,!1),n[i]=ms(i,!0,!1),e[i]=ms(i,!1,!0),s[i]=ms(i,!0,!0)}),[t,n,e,s]}const[jl,Vl,Wl,zl]=Hl();function di(t,e){const n=e?t?zl:Wl:t?Vl:jl;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(J(n,r)&&r in s?n:s,r,i)}const Kl={get:di(!1,!1)},ql={get:di(!1,!0)},Gl={get:di(!0,!1)},_a=new WeakMap,va=new WeakMap,ba=new WeakMap,Jl=new WeakMap;function Yl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xl(t){return t.__v_skip||!Object.isExtensible(t)?0:Yl(vl(t))}function yn(t){return un(t)?t:fi(t,!1,ma,Kl,_a)}function Ql(t){return fi(t,!1,Bl,ql,va)}function ya(t){return fi(t,!0,Fl,Gl,ba)}function fi(t,e,n,s,r){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Xl(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Tt(t){return un(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function un(t){return!!(t&&t.__v_isReadonly)}function ks(t){return!!(t&&t.__v_isShallow)}function Ia(t){return Tt(t)||un(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function dn(t){return Ps(t,"__v_skip",!0),t}const Vn=t=>fe(t)?yn(t):t,hi=t=>fe(t)?ya(t):t;function Ea(t){wt&&He&&(t=Y(t),ha(t.dep||(t.dep=ai())))}function wa(t,e){t=Y(t);const n=t.dep;n&&xr(n)}function de(t){return!!(t&&t.__v_isRef===!0)}function ie(t){return Ta(t,!1)}function Zl(t){return Ta(t,!0)}function Ta(t,e){return de(t)?t:new eu(t,e)}class eu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Vn(e)}get value(){return Ea(this),this._value}set value(e){const n=this.__v_isShallow||ks(e)||un(e);e=n?e:Y(e),jn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vn(e),wa(this))}}function Rt(t){return de(t)?t.value:t}const tu={get:(t,e,n)=>Rt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ra(t){return Tt(t)?t:new Proxy(t,tu)}function nu(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=ru(t,n);return e}class su{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Sl(Y(this._object),this._key)}}function ru(t,e,n){const s=t[e];return de(s)?s:new su(t,e,n)}var Ca;class iu{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ca]=!1,this._dirty=!0,this.effect=new ci(e,()=>{this._dirty||(this._dirty=!0,wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return Ea(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ca="__v_isReadonly";function ou(t,e,n=!1){let s,r;const i=H(t);return i?(s=t,r=Ve):(s=t.get,r=t.set),new iu(s,r,i||!r,n)}function Ct(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Js(i,e,n)}return r}function We(t,e,n,s){if(H(t)){const i=Ct(t,e,n,s);return i&&oa(i)&&i.catch(o=>{Js(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(We(t[i],e,n,s));return r}function Js(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ct(c,null,10,[t,o,a]);return}}au(t,n,r,s)}function au(t,e,n,s=!0){console.error(t)}let Wn=!1,Dr=!1;const Ie=[];let Qe=0;const on=[];let it=null,Bt=0;const Sa=Promise.resolve();let pi=null;function gi(t){const e=pi||Sa;return t?e.then(this?t.bind(this):t):e}function cu(t){let e=Qe+1,n=Ie.length;for(;e<n;){const s=e+n>>>1;zn(Ie[s])<t?e=s+1:n=s}return e}function mi(t){(!Ie.length||!Ie.includes(t,Wn&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Ie.push(t):Ie.splice(cu(t.id),0,t),Aa())}function Aa(){!Wn&&!Dr&&(Dr=!0,pi=Sa.then(Oa))}function lu(t){const e=Ie.indexOf(t);e>Qe&&Ie.splice(e,1)}function uu(t){B(t)?on.push(...t):(!it||!it.includes(t,t.allowRecurse?Bt+1:Bt))&&on.push(t),Aa()}function Ki(t,e=Wn?Qe+1:0){for(;e<Ie.length;e++){const n=Ie[e];n&&n.pre&&(Ie.splice(e,1),e--,n())}}function Pa(t){if(on.length){const e=[...new Set(on)];if(on.length=0,it){it.push(...e);return}for(it=e,it.sort((n,s)=>zn(n)-zn(s)),Bt=0;Bt<it.length;Bt++)it[Bt]();it=null,Bt=0}}const zn=t=>t.id==null?1/0:t.id,du=(t,e)=>{const n=zn(t)-zn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Oa(t){Dr=!1,Wn=!0,Ie.sort(du);const e=Ve;try{for(Qe=0;Qe<Ie.length;Qe++){const n=Ie[Qe];n&&n.active!==!1&&Ct(n,null,14)}}finally{Qe=0,Ie.length=0,Pa(),Wn=!1,pi=null,(Ie.length||on.length)&&Oa()}}function fu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||re;p&&(r=n.map(_=>be(_)?_.trim():_)),f&&(r=n.map(kr))}let a,c=s[a=pr(e)]||s[a=pr(tt(e))];!c&&i&&(c=s[a=pr(_n(e))]),c&&We(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,We(l,t,6,r)}}function ka(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=ka(l,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(fe(t)&&s.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Te(o,i),fe(t)&&s.set(t,o),o)}function Ys(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,_n(e))||J(t,e))}let De=null,Xs=null;function Ns(t){const e=De;return De=t,Xs=t&&t.type.__scopeId||null,e}function Ot(t){Xs=t}function kt(){Xs=null}function hu(t,e=De,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&to(-1);const i=Ns(e);let o;try{o=t(...r)}finally{Ns(i),s._d&&to(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function gr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:_,ctx:T,inheritAttrs:O}=t;let L,P;const $=Ns(t);try{if(n.shapeFlag&4){const W=r||s;L=Xe(u.call(W,W,f,i,_,p,T)),P=c}else{const W=e;L=Xe(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),P=e.props?c:pu(c)}}catch(W){$n.length=0,Js(W,t,1),L=oe(Kn)}let N=L;if(P&&O!==!1){const W=Object.keys(P),{shapeFlag:q}=N;W.length&&q&7&&(o&&W.some(si)&&(P=gu(P,o)),N=fn(N,P))}return n.dirs&&(N=fn(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),L=N,Ns($),L}const pu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},gu=(t,e)=>{const n={};for(const s in t)(!si(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function mu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?qi(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Ys(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?qi(s,o,l):!0:!!o;return!1}function qi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ys(n,i))return!0}return!1}function _u({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const vu=t=>t.__isSuspense;function bu(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):uu(t)}function Is(t,e){if(ue){let n=ue.provides;const s=ue.parent&&ue.parent.provides;s===n&&(n=ue.provides=Object.create(s)),n[t]=e}}function ze(t,e,n=!1){const s=ue||De;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const _s={};function Dn(t,e,n){return Na(t,e,n)}function Na(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=re){const a=la()===(ue==null?void 0:ue.scope)?ue:null;let c,l=!1,u=!1;if(de(t)?(c=()=>t.value,l=ks(t)):Tt(t)?(c=()=>t,s=!0):B(t)?(u=!0,l=t.some(N=>Tt(N)||ks(N)),c=()=>t.map(N=>{if(de(N))return N.value;if(Tt(N))return jt(N);if(H(N))return Ct(N,a,2)})):H(t)?e?c=()=>Ct(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),We(t,a,3,[p])}:c=Ve,e&&s){const N=c;c=()=>jt(N())}let f,p=N=>{f=P.onStop=()=>{Ct(N,a,4)}},_;if(Gn)if(p=Ve,e?n&&We(e,a,3,[c(),u?[]:void 0,p]):c(),r==="sync"){const N=hd();_=N.__watcherHandles||(N.__watcherHandles=[])}else return Ve;let T=u?new Array(t.length).fill(_s):_s;const O=()=>{if(P.active)if(e){const N=P.run();(s||l||(u?N.some((W,q)=>jn(W,T[q])):jn(N,T)))&&(f&&f(),We(e,a,3,[N,T===_s?void 0:u&&T[0]===_s?[]:T,p]),T=N)}else P.run()};O.allowRecurse=!!e;let L;r==="sync"?L=O:r==="post"?L=()=>Ae(O,a&&a.suspense):(O.pre=!0,a&&(O.id=a.uid),L=()=>mi(O));const P=new ci(c,L);e?n?O():T=P.run():r==="post"?Ae(P.run.bind(P),a&&a.suspense):P.run();const $=()=>{P.stop(),a&&a.scope&&ri(a.scope.effects,P)};return _&&_.push($),$}function yu(t,e,n){const s=this.proxy,r=be(t)?t.includes(".")?Ma(s,t):()=>s[t]:t.bind(s,s);let i;H(e)?i=e:(i=e.handler,n=e);const o=ue;hn(this);const a=Na(r,i.bind(s),n);return o?hn(o):Wt(),a}function Ma(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function jt(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))jt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)jt(t[n],e);else if(ml(t)||xn(t))t.forEach(n=>{jt(n,e)});else if(bl(t))for(const n in t)jt(t[n],e);return t}function he(t){return H(t)?{setup:t,name:t.name}:t}const Es=t=>!!t.type.__asyncLoader,xa=t=>t.type.__isKeepAlive;function Iu(t,e){Da(t,"a",e)}function Eu(t,e){Da(t,"da",e)}function Da(t,e,n=ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Qs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)xa(r.parent.vnode)&&wu(s,e,n,r),r=r.parent}}function wu(t,e,n,s){const r=Qs(e,t,s,!0);$a(()=>{ri(s[e],r)},n)}function Qs(t,e,n=ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vn(),hn(n);const a=We(e,n,t,o);return Wt(),bn(),a});return s?r.unshift(i):r.push(i),i}}const ut=t=>(e,n=ue)=>(!Gn||t==="sp")&&Qs(t,(...s)=>e(...s),n),La=ut("bm"),Tu=ut("m"),Ru=ut("bu"),Cu=ut("u"),Su=ut("bum"),$a=ut("um"),Au=ut("sp"),Pu=ut("rtg"),Ou=ut("rtc");function ku(t,e=ue){Qs("ec",t,e)}function ee(t,e){const n=De;if(n===null)return t;const s=nr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&jt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Lt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(vn(),We(c,n,8,[t.el,a,t,e]),bn())}}const Ua="components";function Nu(t,e){return xu(Ua,t,!0,e)||t}const Mu=Symbol();function xu(t,e,n=!0,s=!1){const r=De||ue;if(r){const i=r.type;if(t===Ua){const a=ud(i,!1);if(a&&(a===e||a===tt(e)||a===qs(tt(e))))return i}const o=Gi(r[t]||i[t],e)||Gi(r.appContext[t],e);return!o&&s?i:o}}function Gi(t,e){return t&&(t[e]||t[tt(e)]||t[qs(tt(e))])}const Lr=t=>t?Ja(t)?nr(t)||t.proxy:Lr(t.parent):null,Ln=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lr(t.parent),$root:t=>Lr(t.root),$emit:t=>t.emit,$options:t=>_i(t),$forceUpdate:t=>t.f||(t.f=()=>mi(t.update)),$nextTick:t=>t.n||(t.n=gi.bind(t.proxy)),$watch:t=>yu.bind(t)}),mr=(t,e)=>t!==re&&!t.__isScriptSetup&&J(t,e),Du={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(mr(s,e))return o[e]=1,s[e];if(r!==re&&J(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==re&&J(n,e))return o[e]=4,n[e];$r&&(o[e]=0)}}const u=Ln[e];let f,p;if(u)return e==="$attrs"&&Pe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&J(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return mr(r,e)?(r[e]=n,!0):s!==re&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==re&&J(t,o)||mr(e,o)||(a=i[0])&&J(a,o)||J(s,o)||J(Ln,o)||J(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let $r=!0;function Lu(t){const e=_i(t),n=t.proxy,s=t.ctx;$r=!1,e.beforeCreate&&Ji(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:_,updated:T,activated:O,deactivated:L,beforeDestroy:P,beforeUnmount:$,destroyed:N,unmounted:W,render:q,renderTracked:ae,renderTriggered:z,errorCaptured:j,serverPrefetch:le,expose:pe,inheritAttrs:Ce,components:Le,directives:dt,filters:ke}=e;if(l&&$u(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Q=o[ne];H(Q)&&(s[ne]=Q.bind(n))}if(r){const ne=r.call(n,n);fe(ne)&&(t.data=yn(ne))}if($r=!0,i)for(const ne in i){const Q=i[ne],$e=H(Q)?Q.bind(n,n):H(Q.get)?Q.get.bind(n,n):Ve,Dt=!H(Q)&&H(Q.set)?Q.set.bind(n):Ve,Ue=xe({get:$e,set:Dt});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Se=>Ue.value=Se})}if(a)for(const ne in a)Fa(a[ne],s,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Q=>{Is(Q,ne[Q])})}u&&Ji(u,t,"c");function ge(ne,Q){B(Q)?Q.forEach($e=>ne($e.bind(n))):Q&&ne(Q.bind(n))}if(ge(La,f),ge(Tu,p),ge(Ru,_),ge(Cu,T),ge(Iu,O),ge(Eu,L),ge(ku,j),ge(Ou,ae),ge(Pu,z),ge(Su,$),ge($a,W),ge(Au,le),B(pe))if(pe.length){const ne=t.exposed||(t.exposed={});pe.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:$e=>n[Q]=$e})})}else t.exposed||(t.exposed={});q&&t.render===Ve&&(t.render=q),Ce!=null&&(t.inheritAttrs=Ce),Le&&(t.components=Le),dt&&(t.directives=dt)}function $u(t,e,n=Ve,s=!1){B(t)&&(t=Ur(t));for(const r in t){const i=t[r];let o;fe(i)?"default"in i?o=ze(i.from||r,i.default,!0):o=ze(i.from||r):o=ze(i),de(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ji(t,e,n){We(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fa(t,e,n,s){const r=s.includes(".")?Ma(n,s):()=>n[s];if(be(t)){const i=e[t];H(i)&&Dn(r,i)}else if(H(t))Dn(r,t.bind(n));else if(fe(t))if(B(t))t.forEach(i=>Fa(i,e,n,s));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Dn(r,i,t)}}function _i(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ms(c,l,o,!0)),Ms(c,e,o)),fe(e)&&i.set(e,c),c}function Ms(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ms(t,i,n,!0),r&&r.forEach(o=>Ms(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Uu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Uu={data:Yi,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Ut,directives:Ut,watch:Bu,provide:Yi,inject:Fu};function Yi(t,e){return e?t?function(){return Te(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Fu(t,e){return Ut(Ur(t),Ur(e))}function Ur(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?Te(Te(Object.create(null),t),e):e}function Bu(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function Hu(t,e,n,s=!1){const r={},i={};Ps(i,er,1),t.propsDefaults=Object.create(null),Ba(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ql(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ju(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Y(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Ys(t.emitsOptions,p))continue;const _=e[p];if(c)if(J(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const T=tt(p);r[T]=Fr(c,a,T,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Ba(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!J(e,f)&&((u=_n(f))===f||!J(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Fr(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!J(e,f))&&(delete i[f],l=!0)}l&&ct(t,"set","$attrs")}function Ba(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(bs(c))continue;const l=e[c];let u;r&&J(r,u=tt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ys(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Y(n),l=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Fr(r,c,f,l[f],t,!J(l,f))}}return o}function Fr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(hn(r),s=l[n]=c.call(null,e),Wt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===_n(n))&&(s=!0))}return s}function Ha(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[p,_]=Ha(f,e,!0);Te(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return fe(t)&&s.set(t,rn),rn;if(B(i))for(let u=0;u<i.length;u++){const f=tt(i[u]);Xi(f)&&(o[f]=re)}else if(i)for(const u in i){const f=tt(u);if(Xi(f)){const p=i[u],_=o[f]=B(p)||H(p)?{type:p}:Object.assign({},p);if(_){const T=eo(Boolean,_.type),O=eo(String,_.type);_[0]=T>-1,_[1]=O<0||T<O,(T>-1||J(_,"default"))&&a.push(f)}}}const l=[o,a];return fe(t)&&s.set(t,l),l}function Xi(t){return t[0]!=="$"}function Qi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zi(t,e){return Qi(t)===Qi(e)}function eo(t,e){return B(e)?e.findIndex(n=>Zi(n,t)):H(e)&&Zi(e,t)?0:-1}const ja=t=>t[0]==="_"||t==="$stable",vi=t=>B(t)?t.map(Xe):[Xe(t)],Vu=(t,e,n)=>{if(e._n)return e;const s=hu((...r)=>vi(e(...r)),n);return s._c=!1,s},Va=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ja(r))continue;const i=t[r];if(H(i))e[r]=Vu(r,i,s);else if(i!=null){const o=vi(i);e[r]=()=>o}}},Wa=(t,e)=>{const n=vi(e);t.slots.default=()=>n},Wu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Ps(e,"_",n)):Va(e,t.slots={})}else t.slots={},e&&Wa(t,e);Ps(t.slots,er,1)},zu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Te(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Va(e,r)),o=e}else e&&(Wa(t,e),o={default:1});if(i)for(const a in r)!ja(a)&&!(a in o)&&delete r[a]};function za(){return{app:null,config:{isNativeTag:hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ku=0;function qu(t,e){return function(s,r=null){H(s)||(s=Object.assign({},s)),r!=null&&!fe(r)&&(r=null);const i=za(),o=new Set;let a=!1;const c=i.app={_uid:Ku++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:pd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=oe(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,nr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Br(t,e,n,s,r=!1){if(B(t)){t.forEach((p,_)=>Br(p,e&&(B(e)?e[_]:e),n,s,r));return}if(Es(s)&&!r)return;const i=s.shapeFlag&4?nr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,J(f,l)&&(f[l]=null)):de(l)&&(l.value=null)),H(c))Ct(c,a,12,[o,u]);else{const p=be(c),_=de(c);if(p||_){const T=()=>{if(t.f){const O=p?J(f,c)?f[c]:u[c]:c.value;r?B(O)&&ri(O,i):B(O)?O.includes(i)||O.push(i):p?(u[c]=[i],J(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,J(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,Ae(T,n)):T()}}}const Ae=bu;function Gu(t){return Ju(t)}function Ju(t,e){const n=El();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:_=Ve,insertStaticContent:T}=t,O=(d,h,m,v=null,y=null,w=null,S=!1,E=null,R=!!h.dynamicChildren)=>{if(d===h)return;d&&!An(d,h)&&(v=C(d),Se(d,y,w,!0),d=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:I,ref:x,shapeFlag:k}=h;switch(I){case Zs:L(d,h,m,v);break;case Kn:P(d,h,m,v);break;case ws:d==null&&$(h,m,v,S);break;case Ye:Le(d,h,m,v,y,w,S,E,R);break;default:k&1?q(d,h,m,v,y,w,S,E,R):k&6?dt(d,h,m,v,y,w,S,E,R):(k&64||k&128)&&I.process(d,h,m,v,y,w,S,E,R,G)}x!=null&&y&&Br(x,d&&d.ref,w,h||d,!h)},L=(d,h,m,v)=>{if(d==null)s(h.el=a(h.children),m,v);else{const y=h.el=d.el;h.children!==d.children&&l(y,h.children)}},P=(d,h,m,v)=>{d==null?s(h.el=c(h.children||""),m,v):h.el=d.el},$=(d,h,m,v)=>{[d.el,d.anchor]=T(d.children,h,m,v,d.el,d.anchor)},N=({el:d,anchor:h},m,v)=>{let y;for(;d&&d!==h;)y=p(d),s(d,m,v),d=y;s(h,m,v)},W=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),r(d),d=m;r(h)},q=(d,h,m,v,y,w,S,E,R)=>{S=S||h.type==="svg",d==null?ae(h,m,v,y,w,S,E,R):le(d,h,y,w,S,E,R)},ae=(d,h,m,v,y,w,S,E)=>{let R,I;const{type:x,props:k,shapeFlag:D,transition:F,dirs:K}=d;if(R=d.el=o(d.type,w,k&&k.is,k),D&8?u(R,d.children):D&16&&j(d.children,R,null,v,y,w&&x!=="foreignObject",S,E),K&&Lt(d,null,v,"created"),z(R,d,d.scopeId,S,v),k){for(const Z in k)Z!=="value"&&!bs(Z)&&i(R,Z,null,k[Z],w,d.children,v,y,A);"value"in k&&i(R,"value",null,k.value),(I=k.onVnodeBeforeMount)&&Je(I,v,d)}K&&Lt(d,null,v,"beforeMount");const se=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;se&&F.beforeEnter(R),s(R,h,m),((I=k&&k.onVnodeMounted)||se||K)&&Ae(()=>{I&&Je(I,v,d),se&&F.enter(R),K&&Lt(d,null,v,"mounted")},y)},z=(d,h,m,v,y)=>{if(m&&_(d,m),v)for(let w=0;w<v.length;w++)_(d,v[w]);if(y){let w=y.subTree;if(h===w){const S=y.vnode;z(d,S,S.scopeId,S.slotScopeIds,y.parent)}}},j=(d,h,m,v,y,w,S,E,R=0)=>{for(let I=R;I<d.length;I++){const x=d[I]=E?mt(d[I]):Xe(d[I]);O(null,x,h,m,v,y,w,S,E)}},le=(d,h,m,v,y,w,S)=>{const E=h.el=d.el;let{patchFlag:R,dynamicChildren:I,dirs:x}=h;R|=d.patchFlag&16;const k=d.props||re,D=h.props||re;let F;m&&$t(m,!1),(F=D.onVnodeBeforeUpdate)&&Je(F,m,h,d),x&&Lt(h,d,m,"beforeUpdate"),m&&$t(m,!0);const K=y&&h.type!=="foreignObject";if(I?pe(d.dynamicChildren,I,E,m,v,K,w):S||Q(d,h,E,null,m,v,K,w,!1),R>0){if(R&16)Ce(E,h,k,D,m,v,y);else if(R&2&&k.class!==D.class&&i(E,"class",null,D.class,y),R&4&&i(E,"style",k.style,D.style,y),R&8){const se=h.dynamicProps;for(let Z=0;Z<se.length;Z++){const me=se[Z],Fe=k[me],Qt=D[me];(Qt!==Fe||me==="value")&&i(E,me,Fe,Qt,y,d.children,m,v,A)}}R&1&&d.children!==h.children&&u(E,h.children)}else!S&&I==null&&Ce(E,h,k,D,m,v,y);((F=D.onVnodeUpdated)||x)&&Ae(()=>{F&&Je(F,m,h,d),x&&Lt(h,d,m,"updated")},v)},pe=(d,h,m,v,y,w,S)=>{for(let E=0;E<h.length;E++){const R=d[E],I=h[E],x=R.el&&(R.type===Ye||!An(R,I)||R.shapeFlag&70)?f(R.el):m;O(R,I,x,null,v,y,w,S,!0)}},Ce=(d,h,m,v,y,w,S)=>{if(m!==v){if(m!==re)for(const E in m)!bs(E)&&!(E in v)&&i(d,E,m[E],null,S,h.children,y,w,A);for(const E in v){if(bs(E))continue;const R=v[E],I=m[E];R!==I&&E!=="value"&&i(d,E,I,R,S,h.children,y,w,A)}"value"in v&&i(d,"value",m.value,v.value)}},Le=(d,h,m,v,y,w,S,E,R)=>{const I=h.el=d?d.el:a(""),x=h.anchor=d?d.anchor:a("");let{patchFlag:k,dynamicChildren:D,slotScopeIds:F}=h;F&&(E=E?E.concat(F):F),d==null?(s(I,m,v),s(x,m,v),j(h.children,m,x,y,w,S,E,R)):k>0&&k&64&&D&&d.dynamicChildren?(pe(d.dynamicChildren,D,m,y,w,S,E),(h.key!=null||y&&h===y.subTree)&&Ka(d,h,!0)):Q(d,h,m,x,y,w,S,E,R)},dt=(d,h,m,v,y,w,S,E,R)=>{h.slotScopeIds=E,d==null?h.shapeFlag&512?y.ctx.activate(h,m,v,S,R):ke(h,m,v,y,w,S,R):ve(d,h,R)},ke=(d,h,m,v,y,w,S)=>{const E=d.component=rd(d,v,y);if(xa(d)&&(E.ctx.renderer=G),od(E),E.asyncDep){if(y&&y.registerDep(E,ge),!d.el){const R=E.subTree=oe(Kn);P(null,R,h,m)}return}ge(E,d,h,m,y,w,S)},ve=(d,h,m)=>{const v=h.component=d.component;if(mu(d,h,m))if(v.asyncDep&&!v.asyncResolved){ne(v,h,m);return}else v.next=h,lu(v.update),v.update();else h.el=d.el,v.vnode=h},ge=(d,h,m,v,y,w,S)=>{const E=()=>{if(d.isMounted){let{next:x,bu:k,u:D,parent:F,vnode:K}=d,se=x,Z;$t(d,!1),x?(x.el=K.el,ne(d,x,S)):x=K,k&&ys(k),(Z=x.props&&x.props.onVnodeBeforeUpdate)&&Je(Z,F,x,K),$t(d,!0);const me=gr(d),Fe=d.subTree;d.subTree=me,O(Fe,me,f(Fe.el),C(Fe),d,y,w),x.el=me.el,se===null&&_u(d,me.el),D&&Ae(D,y),(Z=x.props&&x.props.onVnodeUpdated)&&Ae(()=>Je(Z,F,x,K),y)}else{let x;const{el:k,props:D}=h,{bm:F,m:K,parent:se}=d,Z=Es(h);if($t(d,!1),F&&ys(F),!Z&&(x=D&&D.onVnodeBeforeMount)&&Je(x,se,h),$t(d,!0),k&&V){const me=()=>{d.subTree=gr(d),V(k,d.subTree,d,y,null)};Z?h.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=gr(d);O(null,me,m,v,d,y,w),h.el=me.el}if(K&&Ae(K,y),!Z&&(x=D&&D.onVnodeMounted)){const me=h;Ae(()=>Je(x,se,me),y)}(h.shapeFlag&256||se&&Es(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Ae(d.a,y),d.isMounted=!0,h=m=v=null}},R=d.effect=new ci(E,()=>mi(I),d.scope),I=d.update=()=>R.run();I.id=d.uid,$t(d,!0),I()},ne=(d,h,m)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,ju(d,h.props,v,m),zu(d,h.children,m),vn(),Ki(),bn()},Q=(d,h,m,v,y,w,S,E,R=!1)=>{const I=d&&d.children,x=d?d.shapeFlag:0,k=h.children,{patchFlag:D,shapeFlag:F}=h;if(D>0){if(D&128){Dt(I,k,m,v,y,w,S,E,R);return}else if(D&256){$e(I,k,m,v,y,w,S,E,R);return}}F&8?(x&16&&A(I,y,w),k!==I&&u(m,k)):x&16?F&16?Dt(I,k,m,v,y,w,S,E,R):A(I,y,w,!0):(x&8&&u(m,""),F&16&&j(k,m,v,y,w,S,E,R))},$e=(d,h,m,v,y,w,S,E,R)=>{d=d||rn,h=h||rn;const I=d.length,x=h.length,k=Math.min(I,x);let D;for(D=0;D<k;D++){const F=h[D]=R?mt(h[D]):Xe(h[D]);O(d[D],F,m,null,y,w,S,E,R)}I>x?A(d,y,w,!0,!1,k):j(h,m,v,y,w,S,E,R,k)},Dt=(d,h,m,v,y,w,S,E,R)=>{let I=0;const x=h.length;let k=d.length-1,D=x-1;for(;I<=k&&I<=D;){const F=d[I],K=h[I]=R?mt(h[I]):Xe(h[I]);if(An(F,K))O(F,K,m,null,y,w,S,E,R);else break;I++}for(;I<=k&&I<=D;){const F=d[k],K=h[D]=R?mt(h[D]):Xe(h[D]);if(An(F,K))O(F,K,m,null,y,w,S,E,R);else break;k--,D--}if(I>k){if(I<=D){const F=D+1,K=F<x?h[F].el:v;for(;I<=D;)O(null,h[I]=R?mt(h[I]):Xe(h[I]),m,K,y,w,S,E,R),I++}}else if(I>D)for(;I<=k;)Se(d[I],y,w,!0),I++;else{const F=I,K=I,se=new Map;for(I=K;I<=D;I++){const Ne=h[I]=R?mt(h[I]):Xe(h[I]);Ne.key!=null&&se.set(Ne.key,I)}let Z,me=0;const Fe=D-K+1;let Qt=!1,xi=0;const Sn=new Array(Fe);for(I=0;I<Fe;I++)Sn[I]=0;for(I=F;I<=k;I++){const Ne=d[I];if(me>=Fe){Se(Ne,y,w,!0);continue}let Ge;if(Ne.key!=null)Ge=se.get(Ne.key);else for(Z=K;Z<=D;Z++)if(Sn[Z-K]===0&&An(Ne,h[Z])){Ge=Z;break}Ge===void 0?Se(Ne,y,w,!0):(Sn[Ge-K]=I+1,Ge>=xi?xi=Ge:Qt=!0,O(Ne,h[Ge],m,null,y,w,S,E,R),me++)}const Di=Qt?Yu(Sn):rn;for(Z=Di.length-1,I=Fe-1;I>=0;I--){const Ne=K+I,Ge=h[Ne],Li=Ne+1<x?h[Ne+1].el:v;Sn[I]===0?O(null,Ge,m,Li,y,w,S,E,R):Qt&&(Z<0||I!==Di[Z]?Ue(Ge,m,Li,2):Z--)}}},Ue=(d,h,m,v,y=null)=>{const{el:w,type:S,transition:E,children:R,shapeFlag:I}=d;if(I&6){Ue(d.component.subTree,h,m,v);return}if(I&128){d.suspense.move(h,m,v);return}if(I&64){S.move(d,h,m,G);return}if(S===Ye){s(w,h,m);for(let k=0;k<R.length;k++)Ue(R[k],h,m,v);s(d.anchor,h,m);return}if(S===ws){N(d,h,m);return}if(v!==2&&I&1&&E)if(v===0)E.beforeEnter(w),s(w,h,m),Ae(()=>E.enter(w),y);else{const{leave:k,delayLeave:D,afterLeave:F}=E,K=()=>s(w,h,m),se=()=>{k(w,()=>{K(),F&&F()})};D?D(w,K,se):se()}else s(w,h,m)},Se=(d,h,m,v=!1,y=!1)=>{const{type:w,props:S,ref:E,children:R,dynamicChildren:I,shapeFlag:x,patchFlag:k,dirs:D}=d;if(E!=null&&Br(E,null,m,d,!0),x&256){h.ctx.deactivate(d);return}const F=x&1&&D,K=!Es(d);let se;if(K&&(se=S&&S.onVnodeBeforeUnmount)&&Je(se,h,d),x&6)b(d.component,m,v);else{if(x&128){d.suspense.unmount(m,v);return}F&&Lt(d,null,h,"beforeUnmount"),x&64?d.type.remove(d,h,m,y,G,v):I&&(w!==Ye||k>0&&k&64)?A(I,h,m,!1,!0):(w===Ye&&k&384||!y&&x&16)&&A(R,h,m),v&&Xt(d)}(K&&(se=S&&S.onVnodeUnmounted)||F)&&Ae(()=>{se&&Je(se,h,d),F&&Lt(d,null,h,"unmounted")},m)},Xt=d=>{const{type:h,el:m,anchor:v,transition:y}=d;if(h===Ye){ds(m,v);return}if(h===ws){W(d);return}const w=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,R=()=>S(m,w);E?E(d.el,w,R):R()}else w()},ds=(d,h)=>{let m;for(;d!==h;)m=p(d),r(d),d=m;r(h)},b=(d,h,m)=>{const{bum:v,scope:y,update:w,subTree:S,um:E}=d;v&&ys(v),y.stop(),w&&(w.active=!1,Se(S,d,h,m)),E&&Ae(E,h),Ae(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},A=(d,h,m,v=!1,y=!1,w=0)=>{for(let S=w;S<d.length;S++)Se(d[S],h,m,v,y)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),M=(d,h,m)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):O(h._vnode||null,d,h,null,null,null,m),Ki(),Pa(),h._vnode=d},G={p:O,um:Se,m:Ue,r:Xt,mt:ke,mc:j,pc:Q,pbc:pe,n:C,o:t};let ce,V;return e&&([ce,V]=e(G)),{render:M,hydrate:ce,createApp:qu(M,ce)}}function $t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ka(t,e,n=!1){const s=t.children,r=e.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=mt(r[i]),a.el=o.el),n||Ka(o,a)),a.type===Zs&&(a.el=o.el)}}function Yu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Xu=t=>t.__isTeleport,Ye=Symbol(void 0),Zs=Symbol(void 0),Kn=Symbol(void 0),ws=Symbol(void 0),$n=[];let je=null;function _e(t=!1){$n.push(je=t?null:[])}function Qu(){$n.pop(),je=$n[$n.length-1]||null}let qn=1;function to(t){qn+=t}function qa(t){return t.dynamicChildren=qn>0?je||rn:null,Qu(),qn>0&&je&&je.push(t),t}function Oe(t,e,n,s,r,i){return qa(g(t,e,n,s,r,i,!0))}function In(t,e,n,s,r){return qa(oe(t,e,n,s,r,!0))}function Hr(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",Ga=({key:t})=>t??null,Ts=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||de(t)||H(t)?{i:De,r:t,k:e,f:!!n}:t:null;function g(t,e=null,n=null,s=0,r=null,i=t===Ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ga(e),ref:e&&Ts(e),scopeId:Xs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:De};return a?(bi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),qn>0&&!o&&je&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&je.push(c),c}const oe=Zu;function Zu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Mu)&&(t=Kn),Hr(t)){const a=fn(t,e,!0);return n&&bi(a,n),qn>0&&!i&&je&&(a.shapeFlag&6?je[je.indexOf(t)]=a:je.push(a)),a.patchFlag|=-2,a}if(dd(t)&&(t=t.__vccOpts),e){e=jr(e);let{class:a,style:c}=e;a&&!be(a)&&(e.class=Et(a)),fe(c)&&(Ia(c)&&!B(c)&&(c=Te({},c)),e.style=Vs(c))}const o=be(t)?1:vu(t)?128:Xu(t)?64:fe(t)?4:H(t)?2:0;return g(t,e,n,s,r,o,i,!0)}function jr(t){return t?Ia(t)||er in t?Te({},t):t:null}function fn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?td(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ga(a),ref:e&&e.ref?n&&r?B(r)?r.concat(Ts(e)):[r,Ts(e)]:Ts(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fn(t.ssContent),ssFallback:t.ssFallback&&fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ed(t=" ",e=0){return oe(Zs,null,t,e)}function tr(t,e){const n=oe(ws,null,t);return n.staticCount=e,n}function Xe(t){return t==null||typeof t=="boolean"?oe(Kn):B(t)?oe(Ye,null,t.slice()):typeof t=="object"?mt(t):oe(Zs,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fn(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(er in e)?e._ctx=De:r===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[ed(e)]):n=8);t.children=e,t.shapeFlag|=n}function td(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Et([e.class,s.class]));else if(r==="style")e.style=Vs([e.style,s.style]);else if(Ws(r)){const i=e[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Je(t,e,n,s=null){We(t,e,7,[n,s])}const nd=za();let sd=0;function rd(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||nd,i={uid:sd++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new aa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ha(s,r),emitsOptions:ka(s,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fu.bind(null,i),t.ce&&t.ce(i),i}let ue=null;const id=()=>ue||De,hn=t=>{ue=t,t.scope.on()},Wt=()=>{ue&&ue.scope.off(),ue=null};function Ja(t){return t.vnode.shapeFlag&4}let Gn=!1;function od(t,e=!1){Gn=e;const{props:n,children:s}=t.vnode,r=Ja(t);Hu(t,n,r,e),Wu(t,s);const i=r?ad(t,e):void 0;return Gn=!1,i}function ad(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=dn(new Proxy(t.ctx,Du));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?ld(t):null;hn(t),vn();const i=Ct(s,t,0,[t.props,r]);if(bn(),Wt(),oa(i)){if(i.then(Wt,Wt),e)return i.then(o=>{no(t,o,e)}).catch(o=>{Js(o,t,0)});t.asyncDep=i}else no(t,i,e)}else Ya(t,e)}function no(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Ra(e)),Ya(t,n)}let so;function Ya(t,e,n){const s=t.type;if(!t.render){if(!e&&so&&!s.render){const r=s.template||_i(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Te(Te({isCustomElement:i,delimiters:a},o),c);s.render=so(r,l)}}t.render=s.render||Ve}hn(t),vn(),Lu(t),bn(),Wt()}function cd(t){return new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}})}function ld(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=cd(t))},slots:t.slots,emit:t.emit,expose:e}}function nr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ra(dn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function ud(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function dd(t){return H(t)&&"__vccOpts"in t}const xe=(t,e)=>ou(t,e,Gn);function Xa(t,e,n){const s=arguments.length;return s===2?fe(e)&&!B(e)?Hr(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Hr(n)&&(n=[n]),oe(t,e,n))}const fd=Symbol(""),hd=()=>ze(fd),pd="3.2.47",gd="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,ro=Ht&&Ht.createElement("template"),md={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ht.createElementNS(gd,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ro.innerHTML=s?`<svg>${t}</svg>`:t;const a=ro.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _d(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vd(t,e,n){const s=t.style,r=be(n);if(n&&!r){if(e&&!be(e))for(const i in e)n[i]==null&&Vr(s,i,"");for(const i in n)Vr(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const io=/\s*!important$/;function Vr(t,e,n){if(B(n))n.forEach(s=>Vr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bd(t,e);io.test(n)?t.setProperty(_n(s),n.replace(io,""),"important"):t[s]=n}}const oo=["Webkit","Moz","ms"],_r={};function bd(t,e){const n=_r[e];if(n)return n;let s=tt(e);if(s!=="filter"&&s in t)return _r[e]=s;s=qs(s);for(let r=0;r<oo.length;r++){const i=oo[r]+s;if(i in t)return _r[e]=i}return e}const ao="http://www.w3.org/1999/xlink";function yd(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ao,e.slice(6,e.length)):t.setAttributeNS(ao,e,n);else{const i=fl(e);n==null||i&&!ia(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Id(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ia(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function tn(t,e,n,s){t.addEventListener(e,n,s)}function Ed(t,e,n,s){t.removeEventListener(e,n,s)}function wd(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Td(e);if(s){const l=i[e]=Sd(s,r);tn(t,a,l,c)}else o&&(Ed(t,a,o,c),i[e]=void 0)}}const co=/(?:Once|Passive|Capture)$/;function Td(t){let e;if(co.test(t)){e={};let s;for(;s=t.match(co);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),e]}let vr=0;const Rd=Promise.resolve(),Cd=()=>vr||(Rd.then(()=>vr=0),vr=Date.now());function Sd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;We(Ad(s,n.value),e,5,[s])};return n.value=t,n.attached=Cd(),n}function Ad(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const lo=/^on[a-z]/,Pd=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?_d(t,s,r):e==="style"?vd(t,n,s):Ws(e)?si(e)||wd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Od(t,e,s,r))?Id(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yd(t,e,s,r))};function Od(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&lo.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||lo.test(e)&&be(n)?!1:e in t}const uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>ys(e,n):e};function kd(t){t.target.composing=!0}function fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ye={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=uo(r);const i=s||r.props&&r.props.type==="number";tn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=kr(a)),t._assign(a)}),n&&tn(t,"change",()=>{t.value=t.value.trim()}),e||(tn(t,"compositionstart",kd),tn(t,"compositionend",fo),tn(t,"change",fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=uo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&kr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Be={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Pn(t,!0),s.enter(t)):s.leave(t,()=>{Pn(t,!1)}):Pn(t,e))},beforeUnmount(t,{value:e}){Pn(t,e)}};function Pn(t,e){t.style.display=e?t._vod:"none"}const Nd=Te({patchProp:Pd},md);let ho;function Md(){return ho||(ho=Gu(Nd))}const xd=(...t)=>{const e=Md().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dd(s);if(!r)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dd(t){return be(t)?document.querySelector(t):t}var Ld=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Qa;const sr=t=>Qa=t,Za=Symbol();function Wr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Un||(Un={}));function $d(){const t=ca(!0),e=t.run(()=>ie({}));let n=[],s=[];const r=dn({install(i){sr(r),r._a=i,i.provide(Za,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Ld?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const ec=()=>{};function po(t,e,n,s=ec){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&la()&&Tl(r),r}function Zt(t,...e){t.slice().forEach(n=>{n(...e)})}function zr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Wr(r)&&Wr(s)&&t.hasOwnProperty(n)&&!de(s)&&!Tt(s)?t[n]=zr(r,s):t[n]=s}return t}const Ud=Symbol();function Fd(t){return!Wr(t)||!t.hasOwnProperty(Ud)}const{assign:gt}=Object;function Bd(t){return!!(de(t)&&t.effect)}function Hd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=nu(n.state.value[t]);return gt(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=dn(xe(()=>{sr(n);const _=n._s.get(t);return o[p].call(_,_)})),f),{}))}return c=tc(t,l,e,n,s,!0),c}function tc(t,e,n={},s,r,i){let o;const a=gt({actions:{}},n),c={deep:!0};let l,u,f=dn([]),p=dn([]),_;const T=s.state.value[t];!i&&!T&&(s.state.value[t]={}),ie({});let O;function L(z){let j;l=u=!1,typeof z=="function"?(z(s.state.value[t]),j={type:Un.patchFunction,storeId:t,events:_}):(zr(s.state.value[t],z),j={type:Un.patchObject,payload:z,storeId:t,events:_});const le=O=Symbol();gi().then(()=>{O===le&&(l=!0)}),u=!0,Zt(f,j,s.state.value[t])}const P=i?function(){const{state:j}=n,le=j?j():{};this.$patch(pe=>{gt(pe,le)})}:ec;function $(){o.stop(),f=[],p=[],s._s.delete(t)}function N(z,j){return function(){sr(s);const le=Array.from(arguments),pe=[],Ce=[];function Le(ve){pe.push(ve)}function dt(ve){Ce.push(ve)}Zt(p,{args:le,name:z,store:q,after:Le,onError:dt});let ke;try{ke=j.apply(this&&this.$id===t?this:q,le)}catch(ve){throw Zt(Ce,ve),ve}return ke instanceof Promise?ke.then(ve=>(Zt(pe,ve),ve)).catch(ve=>(Zt(Ce,ve),Promise.reject(ve))):(Zt(pe,ke),ke)}}const W={_p:s,$id:t,$onAction:po.bind(null,p),$patch:L,$reset:P,$subscribe(z,j={}){const le=po(f,z,j.detached,()=>pe()),pe=o.run(()=>Dn(()=>s.state.value[t],Ce=>{(j.flush==="sync"?u:l)&&z({storeId:t,type:Un.direct,events:_},Ce)},gt({},c,j)));return le},$dispose:$},q=yn(W);s._s.set(t,q);const ae=s._e.run(()=>(o=ca(),o.run(()=>e())));for(const z in ae){const j=ae[z];if(de(j)&&!Bd(j)||Tt(j))i||(T&&Fd(j)&&(de(j)?j.value=T[z]:zr(j,T[z])),s.state.value[t][z]=j);else if(typeof j=="function"){const le=N(z,j);ae[z]=le,a.actions[z]=j}}return gt(q,ae),gt(Y(q),ae),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:z=>{L(j=>{gt(j,z)})}}),s._p.forEach(z=>{gt(q,o.run(()=>z({store:q,app:s._a,pinia:s,options:a})))}),T&&i&&n.hydrate&&n.hydrate(q.$state,T),l=!0,u=!0,q}function jd(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=id();return a=a||l&&ze(Za,null),a&&sr(a),a=Qa,a._s.has(s)||(i?tc(s,e,r,a):Hd(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const nc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Vd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),s.push(n[u],n[f],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new Wd;const p=i<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),f!==64){const T=l<<6&192|f;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zd=function(t){const e=nc(t);return sc.encodeByteArray(e,!0)},rc=function(t){return zd(t).replace(/\./g,"")},ic=function(t){try{return sc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qd=()=>Kd().__FIREBASE_DEFAULTS__,Gd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},yi=()=>{try{return qd()||Gd()||Jd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yd=t=>{var e,n;return(n=(e=yi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xd=()=>{var t;return(t=yi())===null||t===void 0?void 0:t.config},oc=t=>{var e;return(e=yi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ef(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nf(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sf(){try{return typeof indexedDB=="object"}catch{return!1}}function rf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const of="FirebaseError";class Nt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=of,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?af(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Nt(r,a,s)}}function af(t,e){return t.replace(cf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const cf=/\{\$([^}]+)}/g;function lf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(go(i)&&go(o)){if(!xs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function go(t){return t!==null&&typeof t=="object"}/**
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
 */function ss(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uf(t,e){const n=new df(t,e);return n.subscribe.bind(n)}class df{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ff(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=br),r.error===void 0&&(r.error=br),r.complete===void 0&&(r.complete=br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ff(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function br(){}/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class hf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gf(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pf(t){return t===Ft?void 0:t}function gf(t){return t.instantiationMode==="EAGER"}/**
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
 */class mf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const _f={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},vf=te.INFO,bf={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},yf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=bf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ac{constructor(e){this.name=e,this._logLevel=vf,this._logHandler=yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const If=(t,e)=>e.some(n=>t instanceof n);let mo,_o;function Ef(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wf(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cc=new WeakMap,Kr=new WeakMap,lc=new WeakMap,yr=new WeakMap,Ii=new WeakMap;function Tf(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cc.set(n,t)}).catch(()=>{}),Ii.set(e,t),e}function Rf(t){if(Kr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cf(t){qr=t(qr)}function Sf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ir(this),e,...n);return lc.set(s,e.sort?e.sort():[e]),St(s)}:wf().includes(t)?function(...e){return t.apply(Ir(this),e),St(cc.get(this))}:function(...e){return St(t.apply(Ir(this),e))}}function Af(t){return typeof t=="function"?Sf(t):(t instanceof IDBTransaction&&Rf(t),If(t,Ef())?new Proxy(t,qr):t)}function St(t){if(t instanceof IDBRequest)return Tf(t);if(yr.has(t))return yr.get(t);const e=Af(t);return e!==t&&(yr.set(t,e),Ii.set(e,t)),e}const Ir=t=>Ii.get(t);function Pf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return s&&o.addEventListener("upgradeneeded",c=>{s(St(o.result),c.oldVersion,c.newVersion,St(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Of=["get","getKey","getAll","getAllKeys","count"],kf=["put","add","delete","clear"],Er=new Map;function vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Er.get(e))return Er.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=kf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Of.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Er.set(e,i),i}Cf(t=>({...t,get:(e,n,s)=>vo(e,n)||t.get(e,n,s),has:(e,n)=>!!vo(e,n)||t.has(e,n)}));/**
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
 */class Nf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gr="@firebase/app",bo="0.9.9";/**
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
 */const Kt=new ac("@firebase/app"),xf="@firebase/app-compat",Df="@firebase/analytics-compat",Lf="@firebase/analytics",$f="@firebase/app-check-compat",Uf="@firebase/app-check",Ff="@firebase/auth",Bf="@firebase/auth-compat",Hf="@firebase/database",jf="@firebase/database-compat",Vf="@firebase/functions",Wf="@firebase/functions-compat",zf="@firebase/installations",Kf="@firebase/installations-compat",qf="@firebase/messaging",Gf="@firebase/messaging-compat",Jf="@firebase/performance",Yf="@firebase/performance-compat",Xf="@firebase/remote-config",Qf="@firebase/remote-config-compat",Zf="@firebase/storage",eh="@firebase/storage-compat",th="@firebase/firestore",nh="@firebase/firestore-compat",sh="firebase",rh="9.21.0";/**
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
 */const Jr="[DEFAULT]",ih={[Gr]:"fire-core",[xf]:"fire-core-compat",[Lf]:"fire-analytics",[Df]:"fire-analytics-compat",[Uf]:"fire-app-check",[$f]:"fire-app-check-compat",[Ff]:"fire-auth",[Bf]:"fire-auth-compat",[Hf]:"fire-rtdb",[jf]:"fire-rtdb-compat",[Vf]:"fire-fn",[Wf]:"fire-fn-compat",[zf]:"fire-iid",[Kf]:"fire-iid-compat",[qf]:"fire-fcm",[Gf]:"fire-fcm-compat",[Jf]:"fire-perf",[Yf]:"fire-perf-compat",[Xf]:"fire-rc",[Qf]:"fire-rc-compat",[Zf]:"fire-gcs",[eh]:"fire-gcs-compat",[th]:"fire-fst",[nh]:"fire-fst-compat","fire-js":"fire-js",[sh]:"fire-js-all"};/**
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
 */const Ds=new Map,Yr=new Map;function oh(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(Yr.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,t);for(const n of Ds.values())oh(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ah={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new ns("app","Firebase",ah);/**
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
 */class ch{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=rh;function dc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw At.create("bad-app-name",{appName:String(r)});if(n||(n=Xd()),!n)throw At.create("no-options");const i=Ds.get(r);if(i){if(xs(n,i.options)&&xs(s,i.config))return i;throw At.create("duplicate-app",{appName:r})}const o=new mf(r);for(const c of Yr.values())o.addComponent(c);const a=new ch(n,s,o);return Ds.set(r,a),a}function lh(t=Jr){const e=Ds.get(t);if(!e&&t===Jr)return dc();if(!e)throw At.create("no-app",{appName:t});return e}function an(t,e,n){var s;let r=(s=ih[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}Jn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uh="firebase-heartbeat-database",dh=1,Yn="firebase-heartbeat-store";let wr=null;function fc(){return wr||(wr=Pf(uh,dh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yn)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),wr}async function fh(t){try{return(await fc()).transaction(Yn).objectStore(Yn).get(hc(t))}catch(e){if(e instanceof Nt)Kt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function yo(t,e){try{const s=(await fc()).transaction(Yn,"readwrite");return await s.objectStore(Yn).put(e,hc(t)),s.done}catch(n){if(n instanceof Nt)Kt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(s.message)}}}function hc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hh=1024,ph=30*24*60*60*1e3;class gh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _h(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Io();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ph}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Io(),{heartbeatsToSend:n,unsentEntries:s}=mh(this._heartbeatsCache.heartbeats),r=rc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Io(){return new Date().toISOString().substring(0,10)}function mh(t,e=hh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Eo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Eo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _h{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sf()?rf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Eo(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vh(t){Jn(new pn("platform-logger",e=>new Nf(e),"PRIVATE")),Jn(new pn("heartbeat",e=>new gh(e),"PRIVATE")),an(Gr,bo,t),an(Gr,bo,"esm2017"),an("fire-js","")}vh("");var bh="firebase",yh="9.21.0";/**
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
 */an(bh,yh,"app");const Ih={apiKey:"AIzaSyCs4ob0qjeLAxY1Nr-dIXiwXxnqkeyBGc8",authDomain:"cuyart-shop.firebaseapp.com",projectId:"cuyart-shop",storageBucket:"cuyart-shop.appspot.com",messagingSenderId:"906331708937",appId:"1:906331708937:web:bbf3a749bd30b61b5d22d8"};dc(Ih);function Eh(t){return typeof t=="object"&&t!==null}function wo(t,e){return t=Eh(t)?t:Object.create(null),new Proxy(t,{get(n,s,r){return s==="key"?Reflect.get(n,s,r):Reflect.get(n,s,r)||Reflect.get(e,s,r)}})}function wh(t,e){return e.reduce((n,s)=>n==null?void 0:n[s],t)}function Th(t,e,n){return e.slice(0,-1).reduce((s,r)=>/^(__proto__)$/.test(r)?{}:s[r]=s[r]||{},t)[e[e.length-1]]=n,t}function Rh(t,e){return e.reduce((n,s)=>{const r=s.split(".");return Th(n,r,wh(t,r))},{})}function To(t,{storage:e,serializer:n,key:s,debug:r}){try{const i=e==null?void 0:e.getItem(s);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){r&&console.error(i)}}function Ro(t,{storage:e,serializer:n,key:s,paths:r,debug:i}){try{const o=Array.isArray(r)?Rh(t,r):t;e.setItem(s,n.serialize(o))}catch(o){i&&console.error(o)}}function Ch(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:r}=e;if(!s)return;const i=(Array.isArray(s)?s.map(o=>wo(o,t)):[wo(s,t)]).map(({storage:o=localStorage,beforeRestore:a=null,afterRestore:c=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:u=r.$id,paths:f=null,debug:p=!1})=>{var _;return{storage:o,beforeRestore:a,afterRestore:c,serializer:l,key:((_=t.key)!=null?_:T=>T)(u),paths:f,debug:p}});r.$persist=()=>{i.forEach(o=>{Ro(r.$state,o)})},r.$hydrate=({runHooks:o=!0}={})=>{i.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;o&&(c==null||c(e)),To(r,a),o&&(l==null||l(e))})},i.forEach(o=>{const{beforeRestore:a,afterRestore:c}=o;a==null||a(e),To(r,o),c==null||c(e),r.$subscribe((l,u)=>{Ro(u,o)},{detached:!0})})}}var Sh=Ch();const Re=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Ah={};function Ph(t,e){const n=Nu("RouterView");return _e(),In(n)}const Oh=Re(Ah,[["render",Ph]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const nn=typeof window<"u";function kh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Tr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ke(r)?r.map(t):t(r)}return n}const Fn=()=>{},Ke=Array.isArray,Nh=/\/$/,Mh=t=>t.replace(Nh,"");function Rr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=$h(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function xh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Co(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Dh(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&gn(e.matched[s],n.matched[r])&&pc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lh(t[n],e[n]))return!1;return!0}function Lh(t,e){return Ke(t)?So(t,e):Ke(e)?So(e,t):t===e}function So(t,e){return Ke(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function $h(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Xn;(function(t){t.pop="pop",t.push="push"})(Xn||(Xn={}));var Bn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bn||(Bn={}));function Uh(t){if(!t)if(nn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mh(t)}const Fh=/^[^#]+#/;function Bh(t,e){return t.replace(Fh,"#")+e}function Hh(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const rr=()=>({left:window.pageXOffset,top:window.pageYOffset});function jh(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Hh(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ao(t,e){return(history.state?history.state.position-e:-1)+t}const Xr=new Map;function Vh(t,e){Xr.set(t,e)}function Wh(t){const e=Xr.get(t);return Xr.delete(t),e}let zh=()=>location.protocol+"//"+location.host;function gc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Co(c,"")}return Co(n,t)+s+r}function Kh(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const _=gc(t,location),T=n.value,O=e.value;let L=0;if(p){if(n.value=_,e.value=p,o&&o===T){o=null;return}L=O?p.position-O.position:0}else s(_);r.forEach(P=>{P(n.value,T,{delta:L,type:Xn.pop,direction:L?L>0?Bn.forward:Bn.back:Bn.unknown})})};function c(){o=n.value}function l(p){r.push(p);const _=()=>{const T=r.indexOf(p);T>-1&&r.splice(T,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:rr()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Po(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?rr():null}}function qh(t){const{history:e,location:n}=window,s={value:gc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:zh()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),r.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=X({},e.state,Po(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=X({},r.value,e.state,{forward:c,scroll:rr()});i(u.current,u,!0);const f=X({},Po(s.value,c,null),{position:u.position+1},l);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Gh(t){t=Uh(t);const e=qh(t),n=Kh(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=X({location:"",base:t,go:s,createHref:Bh.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Jh(t){return typeof t=="string"||t&&typeof t=="object"}function mc(t){return typeof t=="string"||typeof t=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_c=Symbol("");var Oo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oo||(Oo={}));function mn(t,e){return X(new Error,{type:t,[_c]:!0},e)}function rt(t,e){return t instanceof Error&&_c in t&&(e==null||!!(t.type&e))}const ko="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0},Xh=/[.+*?^${}()[\]/\\]/g;function Qh(t,e){const n=X({},Yh,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(Xh,"\\$&"),_+=40;else if(p.type===1){const{value:T,repeatable:O,optional:L,regexp:P}=p;i.push({name:T,repeatable:O,optional:L});const $=P||ko;if($!==ko){_+=10;try{new RegExp(`(${$})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${T}" (${$}): `+W.message)}}let N=O?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;f||(N=L&&l.length<2?`(?:/${N})`:"/"+N),L&&(N+="?"),r+=N,_+=20,L&&(_+=-8),O&&(_+=-20),$===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",T=i[p-1];f[T.name]=_&&T.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:T,repeatable:O,optional:L}=_,P=T in l?l[T]:"";if(Ke(P)&&!O)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const $=Ke(P)?P.join("/"):P;if(!$)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${T}"`);u+=$}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Zh(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ep(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Zh(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(No(s))return 1;if(No(r))return-1}return r.length-s.length}function No(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tp={type:0,value:""},np=/[a-zA-Z0-9_]/;function sp(t){if(!t)return[[]];if(t==="/")return[[tp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:np.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function rp(t,e,n){const s=Qh(sp(t.path),n),r=X(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ip(t,e){const n=[],s=new Map;e=Do({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,f,p){const _=!p,T=op(u);T.aliasOf=p&&p.record;const O=Do(e,u),L=[T];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of N)L.push(X({},T,{components:p?p.record.components:T.components,path:W,aliasOf:p?p.record:T}))}let P,$;for(const N of L){const{path:W}=N;if(f&&W[0]!=="/"){const q=f.record.path,ae=q[q.length-1]==="/"?"":"/";N.path=f.record.path+(W&&ae+W)}if(P=rp(N,f,O),p?p.alias.push(P):($=$||P,$!==P&&$.alias.push(P),_&&u.name&&!xo(P)&&o(u.name)),T.children){const q=T.children;for(let ae=0;ae<q.length;ae++)i(q[ae],P,p&&p.children[ae])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return $?()=>{o($)}:Fn}function o(u){if(mc(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&ep(u,n[f])>=0&&(u.record.path!==n[f].record.path||!vc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!xo(u)&&s.set(u.record.name,u)}function l(u,f){let p,_={},T,O;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw mn(1,{location:u});O=p.record.name,_=X(Mo(f.params,p.keys.filter($=>!$.optional).map($=>$.name)),u.params&&Mo(u.params,p.keys.map($=>$.name))),T=p.stringify(_)}else if("path"in u)T=u.path,p=n.find($=>$.re.test(T)),p&&(_=p.parse(T),O=p.record.name);else{if(p=f.name?s.get(f.name):n.find($=>$.re.test(f.path)),!p)throw mn(1,{location:u,currentLocation:f});O=p.record.name,_=X({},f.params,u.params),T=p.stringify(_)}const L=[];let P=p;for(;P;)L.unshift(P.record),P=P.parent;return{name:O,path:T,params:_,matched:L,meta:cp(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Mo(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function op(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ap(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ap(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function xo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cp(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Do(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function vc(t,e){return e.children.some(n=>n===t||vc(t,n))}const bc=/#/g,lp=/&/g,up=/\//g,dp=/=/g,fp=/\?/g,yc=/\+/g,hp=/%5B/g,pp=/%5D/g,Ic=/%5E/g,gp=/%60/g,Ec=/%7B/g,mp=/%7C/g,wc=/%7D/g,_p=/%20/g;function Ei(t){return encodeURI(""+t).replace(mp,"|").replace(hp,"[").replace(pp,"]")}function vp(t){return Ei(t).replace(Ec,"{").replace(wc,"}").replace(Ic,"^")}function Qr(t){return Ei(t).replace(yc,"%2B").replace(_p,"+").replace(bc,"%23").replace(lp,"%26").replace(gp,"`").replace(Ec,"{").replace(wc,"}").replace(Ic,"^")}function bp(t){return Qr(t).replace(dp,"%3D")}function yp(t){return Ei(t).replace(bc,"%23").replace(fp,"%3F")}function Ip(t){return t==null?"":yp(t).replace(up,"%2F")}function Ls(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ep(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(yc," "),o=i.indexOf("="),a=Ls(o<0?i:i.slice(0,o)),c=o<0?null:Ls(i.slice(o+1));if(a in e){let l=e[a];Ke(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lo(t){let e="";for(let n in t){const s=t[n];if(n=bp(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(s)?s.map(i=>i&&Qr(i)):[s&&Qr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wp(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ke(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Tp=Symbol(""),$o=Symbol(""),ir=Symbol(""),Tc=Symbol(""),Zr=Symbol("");function On(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function _t(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(mn(4,{from:n,to:e})):f instanceof Error?a(f):Jh(f)?a(mn(2,{from:e,to:f})):(i&&s.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Cr(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rp(a)){const l=(a.__vccOpts||a)[e];l&&r.push(_t(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=kh(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&_t(p,n,s,i,o)()}))}}return r}function Rp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uo(t){const e=ze(ir),n=ze(Tc),s=xe(()=>e.resolve(Rt(t.to))),r=xe(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(gn.bind(null,u));if(p>-1)return p;const _=Fo(c[l-2]);return l>1&&Fo(u)===_&&f[f.length-1].path!==_?f.findIndex(gn.bind(null,c[l-2])):p}),i=xe(()=>r.value>-1&&Pp(n.params,s.value.params)),o=xe(()=>r.value>-1&&r.value===n.matched.length-1&&pc(n.params,s.value.params));function a(c={}){return Ap(c)?e[Rt(t.replace)?"replace":"push"](Rt(t.to)).catch(Fn):Promise.resolve()}return{route:s,href:xe(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Cp=he({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uo,setup(t,{slots:e}){const n=yn(Uo(t)),{options:s}=ze(ir),r=xe(()=>({[Bo(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bo(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Xa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Sp=Cp;function Ap(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Pp(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ke(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Fo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bo=(t,e,n)=>t??e??n,Op=he({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ze(Zr),r=xe(()=>t.route||s.value),i=ze($o,0),o=xe(()=>{let l=Rt(i);const{matched:u}=r.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=xe(()=>r.value.matched[o.value]);Is($o,xe(()=>o.value+1)),Is(Tp,a),Is(Zr,r);const c=ie();return Dn(()=>[c.value,a.value,t.name],([l,u,f],[p,_,T])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!gn(u,_)||!p)&&(u.enterCallbacks[f]||[]).forEach(O=>O(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return Ho(n.default,{Component:p,route:l});const _=f.props[u],T=_?_===!0?l.params:typeof _=="function"?_(l):_:null,L=Xa(p,X({},T,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ho(n.default,{Component:L,route:l})||L}}});function Ho(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kp=Op;function Np(t){const e=ip(t.routes,t),n=t.parseQuery||Ep,s=t.stringifyQuery||Lo,r=t.history,i=On(),o=On(),a=On(),c=Zl(ht);let l=ht;nn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tr.bind(null,b=>""+b),f=Tr.bind(null,Ip),p=Tr.bind(null,Ls);function _(b,A){let C,M;return mc(b)?(C=e.getRecordMatcher(b),M=A):M=b,e.addRoute(M,C)}function T(b){const A=e.getRecordMatcher(b);A&&e.removeRoute(A)}function O(){return e.getRoutes().map(b=>b.record)}function L(b){return!!e.getRecordMatcher(b)}function P(b,A){if(A=X({},A||c.value),typeof b=="string"){const d=Rr(n,b,A.path),h=e.resolve({path:d.path},A),m=r.createHref(d.fullPath);return X(d,h,{params:p(h.params),hash:Ls(d.hash),redirectedFrom:void 0,href:m})}let C;if("path"in b)C=X({},b,{path:Rr(n,b.path,A.path).path});else{const d=X({},b.params);for(const h in d)d[h]==null&&delete d[h];C=X({},b,{params:f(b.params)}),A.params=f(A.params)}const M=e.resolve(C,A),G=b.hash||"";M.params=u(p(M.params));const ce=xh(s,X({},b,{hash:vp(G),path:M.path})),V=r.createHref(ce);return X({fullPath:ce,hash:G,query:s===Lo?wp(b.query):b.query||{}},M,{redirectedFrom:void 0,href:V})}function $(b){return typeof b=="string"?Rr(n,b,c.value.path):X({},b)}function N(b,A){if(l!==b)return mn(8,{from:A,to:b})}function W(b){return z(b)}function q(b){return W(X($(b),{replace:!0}))}function ae(b){const A=b.matched[b.matched.length-1];if(A&&A.redirect){const{redirect:C}=A;let M=typeof C=="function"?C(b):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=$(M):{path:M},M.params={}),X({query:b.query,hash:b.hash,params:"path"in M?{}:b.params},M)}}function z(b,A){const C=l=P(b),M=c.value,G=b.state,ce=b.force,V=b.replace===!0,d=ae(C);if(d)return z(X($(d),{state:typeof d=="object"?X({},G,d.state):G,force:ce,replace:V}),A||C);const h=C;h.redirectedFrom=A;let m;return!ce&&Dh(s,M,C)&&(m=mn(16,{to:h,from:M}),Dt(M,M,!0,!1)),(m?Promise.resolve(m):le(h,M)).catch(v=>rt(v)?rt(v,2)?v:$e(v):ne(v,h,M)).then(v=>{if(v){if(rt(v,2))return z(X({replace:V},$(v.to),{state:typeof v.to=="object"?X({},G,v.to.state):G,force:ce}),A||h)}else v=Ce(h,M,!0,V,G);return pe(h,M,v),v})}function j(b,A){const C=N(b,A);return C?Promise.reject(C):Promise.resolve()}function le(b,A){let C;const[M,G,ce]=Mp(b,A);C=Cr(M.reverse(),"beforeRouteLeave",b,A);for(const d of M)d.leaveGuards.forEach(h=>{C.push(_t(h,b,A))});const V=j.bind(null,b,A);return C.push(V),en(C).then(()=>{C=[];for(const d of i.list())C.push(_t(d,b,A));return C.push(V),en(C)}).then(()=>{C=Cr(G,"beforeRouteUpdate",b,A);for(const d of G)d.updateGuards.forEach(h=>{C.push(_t(h,b,A))});return C.push(V),en(C)}).then(()=>{C=[];for(const d of b.matched)if(d.beforeEnter&&!A.matched.includes(d))if(Ke(d.beforeEnter))for(const h of d.beforeEnter)C.push(_t(h,b,A));else C.push(_t(d.beforeEnter,b,A));return C.push(V),en(C)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),C=Cr(ce,"beforeRouteEnter",b,A),C.push(V),en(C))).then(()=>{C=[];for(const d of o.list())C.push(_t(d,b,A));return C.push(V),en(C)}).catch(d=>rt(d,8)?d:Promise.reject(d))}function pe(b,A,C){for(const M of a.list())M(b,A,C)}function Ce(b,A,C,M,G){const ce=N(b,A);if(ce)return ce;const V=A===ht,d=nn?history.state:{};C&&(M||V?r.replace(b.fullPath,X({scroll:V&&d&&d.scroll},G)):r.push(b.fullPath,G)),c.value=b,Dt(b,A,C,V),$e()}let Le;function dt(){Le||(Le=r.listen((b,A,C)=>{if(!ds.listening)return;const M=P(b),G=ae(M);if(G){z(X(G,{replace:!0}),M).catch(Fn);return}l=M;const ce=c.value;nn&&Vh(Ao(ce.fullPath,C.delta),rr()),le(M,ce).catch(V=>rt(V,12)?V:rt(V,2)?(z(V.to,M).then(d=>{rt(d,20)&&!C.delta&&C.type===Xn.pop&&r.go(-1,!1)}).catch(Fn),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ne(V,M,ce))).then(V=>{V=V||Ce(M,ce,!1),V&&(C.delta&&!rt(V,8)?r.go(-C.delta,!1):C.type===Xn.pop&&rt(V,20)&&r.go(-1,!1)),pe(M,ce,V)}).catch(Fn)}))}let ke=On(),ve=On(),ge;function ne(b,A,C){$e(b);const M=ve.list();return M.length?M.forEach(G=>G(b,A,C)):console.error(b),Promise.reject(b)}function Q(){return ge&&c.value!==ht?Promise.resolve():new Promise((b,A)=>{ke.add([b,A])})}function $e(b){return ge||(ge=!b,dt(),ke.list().forEach(([A,C])=>b?C(b):A()),ke.reset()),b}function Dt(b,A,C,M){const{scrollBehavior:G}=t;if(!nn||!G)return Promise.resolve();const ce=!C&&Wh(Ao(b.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return gi().then(()=>G(b,A,ce)).then(V=>V&&jh(V)).catch(V=>ne(V,b,A))}const Ue=b=>r.go(b);let Se;const Xt=new Set,ds={currentRoute:c,listening:!0,addRoute:_,removeRoute:T,hasRoute:L,getRoutes:O,resolve:P,options:t,push:W,replace:q,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:Q,install(b){const A=this;b.component("RouterLink",Sp),b.component("RouterView",kp),b.config.globalProperties.$router=A,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(c)}),nn&&!Se&&c.value===ht&&(Se=!0,W(r.location).catch(G=>{}));const C={};for(const G in ht)C[G]=xe(()=>c.value[G]);b.provide(ir,A),b.provide(Tc,yn(C)),b.provide(Zr,c);const M=b.unmount;Xt.add(b),b.unmount=function(){Xt.delete(b),Xt.size<1&&(l=ht,Le&&Le(),Le=null,c.value=ht,Se=!1,ge=!1),M()}}};return ds}function en(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Mp(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gn(l,c))||r.push(c))}return[n,s,r]}function or(){return ze(ir)}const ar="/cuy-art-shop/assets/Logo-removebg-preview-23a31917.png",xp="/cuy-art-shop/assets/Puntos-b413704e.svg",Dp="/cuy-art-shop/assets/search-8de85e52.svg",is="/cuy-art-shop/assets/person-c17a1bb8.svg",Lp="/cuy-art-shop/assets/shopping_cart-2f426c23.svg",$p="/cuy-art-shop/assets/menu-fd7c077d.svg",Up="/cuy-art-shop/assets/close-4f1b1f2c.svg";function wi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Rc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fp=Rc,Cc=new ns("auth","Firebase",Rc());/**
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
 */const $s=new ac("@firebase/auth");function Bp(t,...e){$s.logLevel<=te.WARN&&$s.warn(`Auth (${rs}): ${t}`,...e)}function Rs(t,...e){$s.logLevel<=te.ERROR&&$s.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw Ti(t,...e)}function Ze(t,...e){return Ti(t,...e)}function Hp(t,e,n){const s=Object.assign(Object.assign({},Fp()),{[e]:n});return new ns("auth","Firebase",s).create(e,{appName:t.name})}function Ti(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cc.create(t,...e)}function U(t,e,...n){if(!t)throw Ti(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rs(e),new Error(e)}function lt(t,e){t||ot(e)}/**
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
 */function ei(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jp(){return jo()==="http:"||jo()==="https:"}function jo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||ef()||"connection"in navigator)?navigator.onLine:!0}function Wp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class os{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||tf()}get(){return Vp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ri(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kp=new os(3e4,6e4);function En(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wn(t,e,n,s,r={}){return Ac(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ss(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Sc.fetch()(Pc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ac(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},zp),e);try{const r=new qp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hp(t,u,l);qe(t,u)}}catch(r){if(r instanceof Nt)throw r;qe(t,"network-request-failed",{message:String(r)})}}async function as(t,e,n,s,r={}){const i=await wn(t,e,n,s,r);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pc(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ri(t.config,r):`${t.config.apiScheme}://${r}`}class qp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),Kp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ze(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Gp(t,e){return wn(t,"POST","/v1/accounts:delete",e)}async function Jp(t,e){return wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yp(t,e=!1){const n=Mt(t),s=await n.getIdToken(e),r=Ci(s);U(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Hn(Sr(r.auth_time)),issuedAtTime:Hn(Sr(r.iat)),expirationTime:Hn(Sr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sr(t){return Number(t)*1e3}function Ci(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{const r=ic(n);return r?JSON.parse(r):(Rs("Failed to decode base64 JWT payload"),null)}catch(r){return Rs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Xp(t){const e=Ci(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nt&&Qp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Qp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Zp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Us(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Qn(t,Jp(n,{idToken:s}));U(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ng(i.providerUserInfo):[],a=tg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function eg(t){const e=Mt(t);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ng(t){return t.map(e=>{var{providerId:n}=e,s=wi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sg(t,e){const n=await Ac(t,{},async()=>{const s=ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Pc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await sg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Zn;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(U(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function pt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yp(this,e)}reload(){return eg(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Us(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qn(this,Gp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:W,isAnonymous:q,providerData:ae,stsTokenManager:z}=n;U(N&&z,e,"internal-error");const j=Zn.fromJSON(this.name,z);U(typeof N=="string",e,"internal-error"),pt(f,e.name),pt(p,e.name),U(typeof W=="boolean",e,"internal-error"),U(typeof q=="boolean",e,"internal-error"),pt(_,e.name),pt(T,e.name),pt(O,e.name),pt(L,e.name),pt(P,e.name),pt($,e.name);const le=new zt({uid:N,auth:e,email:p,emailVerified:W,displayName:f,isAnonymous:q,photoURL:T,phoneNumber:_,tenantId:O,stsTokenManager:j,createdAt:P,lastLoginAt:$});return ae&&Array.isArray(ae)&&(le.providerData=ae.map(pe=>Object.assign({},pe))),L&&(le._redirectEventId=L),le}static async _fromIdTokenResponse(e,n,s=!1){const r=new Zn;r.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Us(i),i}}/**
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
 */const Vo=new Map;function at(t){lt(t instanceof Function,"Expected a class definition");let e=Vo.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vo.set(t,e),e)}/**
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
 */class kc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kc.type="NONE";const Wo=kc;/**
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
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new cn(at(Wo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||at(Wo);const o=Cs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=zt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cn(i,e,s))}}/**
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
 */function zo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lc(e))return"Blackberry";if($c(e))return"Webos";if(Si(e))return"Safari";if((e.includes("chrome/")||Mc(e))&&!e.includes("edge/"))return"Chrome";if(Dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nc(t=Ee()){return/firefox\//i.test(t)}function Si(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mc(t=Ee()){return/crios\//i.test(t)}function xc(t=Ee()){return/iemobile/i.test(t)}function Dc(t=Ee()){return/android/i.test(t)}function Lc(t=Ee()){return/blackberry/i.test(t)}function $c(t=Ee()){return/webos/i.test(t)}function cr(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rg(t=Ee()){var e;return cr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ig(){return nf()&&document.documentMode===10}function Uc(t=Ee()){return cr(t)||Dc(t)||$c(t)||Lc(t)||/windows phone/i.test(t)||xc(t)}function og(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Fc(t,e=[]){let n;switch(t){case"Browser":n=zo(Ee());break;case"Worker":n=`${zo(Ee())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${s}`}async function Bc(t,e){return wn(t,"GET","/v2/recaptchaConfig",En(t,e))}function Ko(t){return t!==void 0&&t.enterprise!==void 0}class Hc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function ag(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jc(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ze("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",ag().appendChild(s)})}function cg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lg="https://www.google.com/recaptcha/enterprise.js?render=",ug="recaptcha-enterprise",dg="NO_RECAPTCHA";class Vc{constructor(e){this.type=ug,this.auth=Tn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Bc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Hc(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ko(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(dg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ko(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}jc(lg+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Fs(t,e,n,s=!1){const r=new Vc(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class hg{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qo(this),this.idTokenSubscription=new qo(this),this.beforeStateQueue=new fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}async initializeRecaptchaConfig(){const e=await Bc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Hc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Vc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return Mt(t)}class qo{constructor(e){this.auth=e,this.observer=null,this.addObserver=uf(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function pg(t,e){const n=uc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(xs(i,e??{}))return r;qe(r,"already-initialized")}return n.initialize({options:e})}function gg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function mg(t,e,n){const s=Tn(t);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wc(e),{host:o,port:a}=_g(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||vg()}function Wc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _g(t){const e=Wc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Go(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Go(o)}}}function Go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ai{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function bg(t,e){return wn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ar(t,e){return as(t,"POST","/v1/accounts:signInWithPassword",En(t,e))}/**
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
 */async function yg(t,e){return as(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}async function Ig(t,e){return as(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}/**
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
 */class es extends Ai{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new es(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new es(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Fs(e,s,"signInWithPassword");return Ar(e,r)}else return Ar(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Fs(e,s,"signInWithPassword");return Ar(e,i)}else return Promise.reject(r)});case"emailLink":return yg(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ig(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ln(t,e){return as(t,"POST","/v1/accounts:signInWithIdp",En(t,e))}/**
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
 */const Eg="http://localhost";class qt extends Ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ln(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:Eg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ss(n)}return e}}/**
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
 */function wg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tg(t){const e=Nn(Mn(t)).link,n=e?Nn(Mn(e)).deep_link_id:null,s=Nn(Mn(t)).deep_link_id;return(s?Nn(Mn(s)).link:null)||s||n||e||t}class Pi{constructor(e){var n,s,r,i,o,a;const c=Nn(Mn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,f=wg((r=c.mode)!==null&&r!==void 0?r:null);U(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Tg(e);try{return new Pi(n)}catch{return null}}}/**
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
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Pi.parseLink(n);return U(s,"argument-error"),es._fromEmailAndCode(e,s.code,s.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cs extends zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends cs{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return bt.credential(n,s)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class yt extends cs{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
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
 */class It extends cs{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return It.credential(n,s)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */async function Pr(t,e){return as(t,"POST","/v1/accounts:signUp",En(t,e))}/**
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
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await zt._fromIdTokenResponse(e,s,r),o=Jo(s);return new Gt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Jo(s);return new Gt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Jo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bs extends Nt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Bs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Bs(e,n,s,r)}}function Kc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bs._fromErrorAndOperation(t,i,e,s):i})}async function Rg(t,e,n=!1){const s=await Qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",s)}/**
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
 */async function Cg(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Qn(t,Kc(s,r,e,t),n);U(i.idToken,s,"internal-error");const o=Ci(i.idToken);U(o,s,"internal-error");const{sub:a}=o;return U(t.uid===a,s,"user-mismatch"),Gt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(s,"user-mismatch"),i}}/**
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
 */async function qc(t,e,n=!1){const s="signIn",r=await Kc(t,s,e),i=await Gt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Sg(t,e){return qc(Tn(t),e)}async function Ag(t,e,n){var s;const r=Tn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await Fs(r,i,"signUpPassword");o=Pr(r,l)}else o=Pr(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Fs(r,i,"signUpPassword");return Pr(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Gt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Pg(t,e,n){return Sg(Mt(t),Rn.credential(e,n))}function Og(t,e,n,s){return Mt(t).onIdTokenChanged(e,n,s)}function kg(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}function Ng(t){return Mt(t).signOut()}const Hs="__sak";/**
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
 */class Gc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mg(){const t=Ee();return Si(t)||cr(t)}const xg=1e3,Dg=10;class Jc extends Gc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mg()&&og(),this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ig()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Dg):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jc.type="LOCAL";const Lg=Jc;/**
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
 */class Yc extends Gc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yc.type="SESSION";const Xc=Yc;/**
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
 */function $g(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new lr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await $g(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lr.receivers=[];/**
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
 */function Oi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ug{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Oi("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function et(){return window}function Fg(t){et().location.href=t}/**
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
 */function Qc(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function Bg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jg(){return Qc()?self:null}/**
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
 */const Zc="firebaseLocalStorageDb",Vg=1,js="firebaseLocalStorage",el="fbase_key";class ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ur(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function Wg(){const t=indexedDB.deleteDatabase(Zc);return new ls(t).toPromise()}function ti(){const t=indexedDB.open(Zc,Vg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(js,{keyPath:el})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(js)?e(s):(s.close(),await Wg(),e(await ti()))})})}async function Yo(t,e,n){const s=ur(t,!0).put({[el]:e,value:n});return new ls(s).toPromise()}async function zg(t,e){const n=ur(t,!1).get(e),s=await new ls(n).toPromise();return s===void 0?null:s.value}function Xo(t,e){const n=ur(t,!0).delete(e);return new ls(n).toPromise()}const Kg=800,qg=3;class tl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ti(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>qg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lr._getInstance(jg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bg(),!this.activeServiceWorker)return;this.sender=new Ug(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await Yo(e,Hs,"1"),await Xo(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>zg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ur(r,!1).getAll();return new ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tl.type="LOCAL";const Gg=tl;new os(3e4,6e4);/**
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
 */function Jg(t,e){return e?at(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ki extends Ai{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yg(t){return qc(t.auth,new ki(t),t.bypassAuthState)}function Xg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Cg(n,new ki(t),t.bypassAuthState)}async function Qg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Rg(n,new ki(t),t.bypassAuthState)}/**
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
 */class nl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yg;case"linkViaPopup":case"linkViaRedirect":return Qg;case"reauthViaPopup":case"reauthViaRedirect":return Xg;default:qe(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zg=new os(2e3,1e4);class sn extends nl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Oi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zg.get())};e()}}sn.currentPopupAction=null;/**
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
 */const em="pendingRedirect",Ss=new Map;class tm extends nl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ss.get(this.auth._key());if(!e){try{const s=await nm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ss.set(this.auth._key(),e)}return this.bypassAuthState||Ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nm(t,e){const n=im(e),s=rm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function sm(t,e){Ss.set(t._key(),e)}function rm(t){return at(t._redirectPersistence)}function im(t){return Cs(em,t.config.apiKey,t.name)}async function om(t,e,n=!1){const s=Tn(t),r=Jg(s,e),o=await new tm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const am=10*60*1e3;class cm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=am&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qo(e))}saveEventToCache(e){this.cachedEventUids.add(Qo(e)),this.lastProcessedEventTime=Date.now()}}function Qo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sl(t);default:return!1}}/**
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
 */async function um(t,e={}){return wn(t,"GET","/v1/projects",e)}/**
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
 */const dm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fm=/^https?/;async function hm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await um(t);for(const n of e)try{if(pm(n))return}catch{}qe(t,"unauthorized-domain")}function pm(t){const e=ei(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fm.test(n))return!1;if(dm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const gm=new os(3e4,6e4);function Zo(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mm(t){return new Promise((e,n)=>{var s,r,i;function o(){Zo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zo(),n(Ze(t,"network-request-failed"))},timeout:gm.get()})}if(!((r=(s=et().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const a=cg("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},jc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw As=null,e})}let As=null;function _m(t){return As=As||mm(t),As}/**
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
 */const vm=new os(5e3,15e3),bm="__/auth/iframe",ym="emulator/auth/iframe",Im={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Em=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wm(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ri(e,ym):`https://${t.config.authDomain}/${bm}`,s={apiKey:e.apiKey,appName:t.name,v:rs},r=Em.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ss(s).slice(1)}`}async function Tm(t){const e=await _m(t),n=et().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:wm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Im,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=et().setTimeout(()=>{i(o)},vm.get());function c(){et().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cm=500,Sm=600,Am="_blank",Pm="http://localhost";class ea{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Om(t,e,n,s=Cm,r=Sm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Rm),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=Mc(l)?Am:n),Nc(l)&&(e=e||Pm,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,T])=>`${p}${_}=${T},`,"");if(rg(l)&&a!=="_self")return km(e||"",a),new ea(null);const f=window.open(e||"",a,u);U(f,t,"popup-blocked");try{f.focus()}catch{}return new ea(f)}function km(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Nm="__/auth/handler",Mm="emulator/auth/handler",xm=encodeURIComponent("fac");async function ta(t,e,n,s,r,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:rs,eventId:r};if(e instanceof zc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof cs){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${xm}=${encodeURIComponent(c)}`:"";return`${Dm(t)}?${ss(a).slice(1)}${l}`}function Dm({config:t}){return t.emulator?Ri(t,Mm):`https://${t.authDomain}/${Nm}`}/**
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
 */const Or="webStorageSupport";class Lm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xc,this._completeRedirectFn=om,this._overrideRedirectResult=sm}async _openPopup(e,n,s,r){var i;lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ta(e,n,s,ei(),r);return Om(e,o,Oi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ta(e,n,s,ei(),r);return Fg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(lt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Tm(e),s=new cm(e);return n.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Or,{type:Or},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Or];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uc()||Si()||cr()}}const $m=Lm;var na="@firebase/auth",sa="0.23.1";/**
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
 */class Um{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Fm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Bm(t){Jn(new pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),U(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(t)},l=new hg(s,r,i,c);return gg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Jn(new pn("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(s=>new Um(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(na,sa,Fm(t)),an(na,sa,"esm2017")}/**
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
 */const Hm=5*60,jm=oc("authIdTokenMaxAge")||Hm;let ra=null;const Vm=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jm)return;const r=n==null?void 0:n.token;ra!==r&&(ra=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function nt(t=lh()){const e=uc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pg(t,{popupRedirectResolver:$m,persistence:[Gg,Lg,Xc]}),s=oc("authTokenSyncURL");if(s){const i=Vm(s);kg(n,i,()=>i(n.currentUser)),Og(n,o=>i(o))}const r=Yd("auth");return r&&mg(n,`http://${r}`),n}Bm("Browser");const dr=t=>(Ot("data-v-b88a7ed0"),t=t(),kt(),t),Wm={class:"head"},zm=tr('<div class="lefthead" data-v-b88a7ed0><button data-v-b88a7ed0><img src="'+ar+'" alt="Persona" data-v-b88a7ed0></button></div><div class="centerhead" data-v-b88a7ed0><input type="text" name="text" id="one" data-v-b88a7ed0><div class="centersearch" data-v-b88a7ed0><img src="'+xp+'" alt="Puntos" data-v-b88a7ed0><button data-v-b88a7ed0><img src="'+Dp+'" alt="Busqueda" data-v-b88a7ed0></button></div></div>',2),Km={class:"righthead"},qm=dr(()=>g("img",{src:is,alt:"Persona"},null,-1)),Gm=[qm],Jm=dr(()=>g("button",null,[g("img",{src:Lp,alt:"Carro de compra"})],-1)),Ym={class:"containmodal"},Xm={class:"contain"},Qm={class:"salir"},Zm=dr(()=>g("img",{src:Up,alt:"Cerrar"},null,-1)),e_=[Zm],t_=dr(()=>g("h2",null,"Menu",-1)),n_=he({__name:"NavBar",setup(t){const e=ie(!1),n=or(),s=()=>{n.push("/about")},r=()=>{nt().currentUser!=null?n.push("/micuenta"):n.push("/login")},i=()=>{nt().currentUser!=null?n.push("/micuenta"):n.push("/login")};return(o,a)=>(_e(),Oe(Ye,null,[g("header",Wm,[zm,g("div",Km,[g("button",{onClick:r},Gm),Jm,g("button",null,[g("img",{src:$p,alt:"Menu",onClick:a[0]||(a[0]=c=>e.value=!e.value)})])])]),ee(g("div",Ym,[g("div",Xm,[g("div",Qm,[g("button",{onClick:a[1]||(a[1]=c=>e.value=!e.value)},e_)]),g("div",{class:"opciones"},[t_,g("p",{href:"#",onClick:i},"Mi Cuenta"),g("p",{href:"#",onClick:s},"Acerca de nosotros")])])],512),[[Be,e.value]])],64))}});const s_=Re(n_,[["__scopeId","data-v-b88a7ed0"]]),r_="/cuy-art-shop/assets/prom-071a18b4.jpg",i_="/cuy-art-shop/assets/09757-BIG-2a63eeeb.jpg",o_="/cuy-art-shop/assets/taza-tradicional-523da630.webp",a_="/cuy-art-shop/assets/9a0e8b4110eb49644003a6d56f7b1232-53097ca7.jpg",ts=jd("registro",{state:()=>({datos:[{nombre:"Juan",correo:"juan@juan.com",password:"123456",telefono:"1234567890",direccion:"Calle 123"}]}),actions:{addRegistro(t){this.datos.push(t)},getRegistro(t){for(let e=0;e<this.datos.length;e++)if(this.datos[e].correo==t)return this.datos[e]},addtelefono(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].telefono=e)},adddireccion(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].direccion=e)},getAll(){for(let t=0;t<this.datos.length;t++)return this.datos[1]}},persist:!0}),us=t=>(Ot("data-v-88edb551"),t=t(),kt(),t),c_={class:"main"},l_={class:"mainleft"},u_={class:"mainleftleft"},d_=tr('<div class="categorias" data-v-88edb551><h2 data-v-88edb551>Catergorias</h2><div class="linea" data-v-88edb551></div><form data-v-88edb551><div data-v-88edb551><input type="checkbox" name="tipo1" id="tipo1" data-v-88edb551><label for="tipo1" data-v-88edb551>Ceràmica</label></div><div data-v-88edb551><input type="checkbox" name="tipo2" id="tipo2" data-v-88edb551><label for="tipo2" data-v-88edb551>Barro</label></div><div data-v-88edb551><input type="checkbox" name="tipo3" id="tipo3" data-v-88edb551><label for="tipo3" data-v-88edb551>Tela</label></div><div data-v-88edb551><input type="checkbox" name="tipo4" id="tipo4" data-v-88edb551><label for="tipo4" data-v-88edb551>Acuarela</label></div></form></div>',1),f_={class:"precios"},h_=us(()=>g("h2",null,"Precios",-1)),p_=us(()=>g("div",{class:"linea"},null,-1)),g_={class:"precio"},m_=us(()=>g("div",{class:"preciosss"},[g("h3",null,"20.000"),g("h3",null,"800.000")],-1)),__={class:"precioss"},v_=us(()=>g("span",null,"$",-1)),b_=us(()=>g("button",null,"OK",-1)),y_=tr('<div class="mainright" data-v-88edb551><div class="promocion" data-v-88edb551><img src="'+r_+'" alt="promocion" data-v-88edb551></div><div class="targetas" data-v-88edb551><div class="targeta" data-v-88edb551><img src="'+i_+'" alt="Primer Articulo" data-v-88edb551><div class="linea" data-v-88edb551></div><h2 data-v-88edb551>Vandola de Cafe</h2><div class="price" data-v-88edb551><p data-v-88edb551>$ 45.000</p><div class="lineap" data-v-88edb551></div></div><p data-v-88edb551>Ha, Pero que lindo</p></div><div class="targeta" data-v-88edb551><img src="'+o_+'" alt="Segundo Articulo" data-v-88edb551><div class="linea" data-v-88edb551></div><h2 data-v-88edb551>Taza personalizada de Ceramìca</h2><div class="price" data-v-88edb551><p data-v-88edb551>$ 25.000</p><div class="lineap" data-v-88edb551></div></div><p data-v-88edb551>Producto Tolimence, para tomar cafesito</p></div><div class="targeta" data-v-88edb551><img src="'+a_+'" alt="Tercer Articulo" data-v-88edb551><div class="linea" data-v-88edb551></div><h2 data-v-88edb551>Calletero :v</h2><div class="price" data-v-88edb551><p data-v-88edb551>$ 40.000</p><div class="lineap" data-v-88edb551></div></div><p data-v-88edb551>Para Guardar tus deliciosas Galletas</p></div></div></div>',1),I_=he({__name:"MainComponent",setup(t){const e=ts(),n=ie(2e4);return console.log(e.getAll()),(s,r)=>(_e(),Oe("main",c_,[g("div",l_,[g("div",u_,[d_,g("div",f_,[h_,p_,g("div",g_,[m_,ee(g("input",{type:"range",name:"rango",id:"rango",min:"20000",max:"800000","onUpdate:modelValue":r[0]||(r[0]=i=>n.value=i),step:"100"},null,512),[[ye,n.value]]),g("div",__,[v_,ee(g("input",{type:"number",name:"numero",id:"numero","onUpdate:modelValue":r[1]||(r[1]=i=>n.value=i),step:"100"},null,512),[[ye,n.value]]),b_])])])])]),y_]))}});const E_=Re(I_,[["__scopeId","data-v-88edb551"]]),w_={class:"container"},T_=he({__name:"MainPage",setup(t){return(e,n)=>(_e(),Oe("div",w_,[oe(s_),oe(E_)]))}});const R_=Re(T_,[["__scopeId","data-v-3eabb5b3"]]),C_=he({__name:"HomeView",setup(t){return(e,n)=>(_e(),In(R_))}}),S_="/cuy-art-shop/assets/salir-9650414e.svg",rl=t=>(Ot("data-v-217e06d2"),t=t(),kt(),t),A_={class:"head"},P_=rl(()=>g("img",{src:ar,alt:"Persona"},null,-1)),O_=[P_],k_=rl(()=>g("img",{src:S_,alt:"Menu"},null,-1)),N_=[k_],M_=he({__name:"NavBarUser",setup(t){const e=or(),n=()=>{Ng(nt()),e.push("/")},s=()=>{e.push("/")},r=()=>{nt().currentUser!=null?e.push("/micuenta"):e.push("/login")};return(i,o)=>(_e(),Oe("header",A_,[g("button",{onClick:r},O_),g("h1",{onClick:s},"CUYART-SHOP"),g("button",{onClick:n},N_)]))}});const fr=Re(M_,[["__scopeId","data-v-217e06d2"]]),il="/cuy-art-shop/assets/Logo-3a4a9f77.jpeg",ol="/cuy-art-shop/assets/youtube-375cd83e.png",hr="/cuy-art-shop/assets/facebook-193ba9b3.png",x_="/cuy-art-shop/assets/twitch-cf8e71de.png",Ni="/cuy-art-shop/assets/gmail-6497f877.png",D_={class:"main"},L_=tr('<div class="mainleft" data-v-a8f0d743><div class="mainleftleft" data-v-a8f0d743><img class="logo" src="'+il+'" alt="El logo" data-v-a8f0d743><h1 data-v-a8f0d743>CUYART-SHOP</h1><h3 data-v-a8f0d743>Redes Sociales</h3><img src="'+ol+'" alt="Youtube" data-v-a8f0d743><img src="'+hr+'" alt="Facebook" data-v-a8f0d743><img src="'+x_+'" alt="Twitch" data-v-a8f0d743><h3 data-v-a8f0d743>Contàctanos</h3><img src="'+Ni+'" alt="Gmail" data-v-a8f0d743></div></div><div class="mainright" data-v-a8f0d743><h1 data-v-a8f0d743>¿Quienes Somos?</h1><p data-v-a8f0d743>CUYART-SHOP es una tienda virtual de artesanìas que atraves del comercio electrònico busca conectar y ayudar a expandir los negocios de los artesanos a otras regiones del paìs</p><h1 data-v-a8f0d743>Misiòn</h1><p data-v-a8f0d743>La misiòn de la empresa Cuy Art Shop es brindar a los artesanos una conexiòn seguray de calidad con sus compradores promoviendo el comercio electrònico y extendiendo los negocios de nuestros artesanos</p><h1 data-v-a8f0d743>Visiòn</h1><p data-v-a8f0d743>Cuy Art Shop serà la empresa lìder en Colombia en venta y compra de artesanìas, siendo una de las màs importanes para expandir los negocios de los artesanos</p></div>',2),$_=[L_],U_=he({__name:"AboutComponent",setup(t){return ie(2e4),(e,n)=>(_e(),Oe("main",D_,$_))}});const F_=Re(U_,[["__scopeId","data-v-a8f0d743"]]),B_={class:"container"},H_=he({__name:"AboutPage",setup(t){return(e,n)=>(_e(),Oe("div",B_,[oe(fr),oe(F_)]))}});const j_=Re(H_,[["__scopeId","data-v-dce66de8"]]),V_=he({__name:"AboutView",setup(t){return(e,n)=>(_e(),In(j_))}}),Jt=t=>(Ot("data-v-be535ad1"),t=t(),kt(),t),W_={class:"contain"},z_=Jt(()=>g("div",{class:"imgprofile"},[g("img",{src:is,alt:"Logo"})],-1)),K_=Jt(()=>g("div",{class:"reg"},[g("h1",null,"Login"),g("div",{class:"linea"})],-1)),q_={class:"in"},G_=Jt(()=>g("label",{for:""},"Correo",-1)),J_={class:"in"},Y_=Jt(()=>g("label",{for:""},"Contraseña",-1)),X_=Jt(()=>g("div",{class:"goface"},[g("img",{src:Ni,alt:"Google"}),g("img",{src:hr,alt:"Facebook"})],-1)),Q_=Jt(()=>g("img",{src:ar,alt:"Logo"},null,-1)),Z_=Jt(()=>g("div",{class:"space"},null,-1)),ev=he({__name:"LoginComponent",setup(t){const e=or(),n=()=>{e.push("/registro")},s=ie(""),r=ie(""),i=()=>{const o=nt();Pg(o,s.value,r.value).then(a=>{a.user,alert("Bienvenido")}).then(()=>{e.push("/micuenta")}).catch(a=>{alert("Intente de nuevo"),a.code,a.message})};return(o,a)=>(_e(),Oe("main",W_,[z_,K_,g("div",q_,[G_,ee(g("input",{type:"text",name:"usuario",id:"usuario",placeholder:"hugoRicardo@gmail.con","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},null,512),[[ye,s.value]])]),g("div",J_,[Y_,ee(g("input",{type:"password",name:"pass",id:"pass",placeholder:"Contraseña","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[ye,r.value]])]),g("button",{onClick:i},"Ingresar"),X_,g("footer",null,[Q_,g("button",{class:"bt-reg",onClick:n},"Regìstrate"),Z_])]))}});const tv=Re(ev,[["__scopeId","data-v-be535ad1"]]),nv={class:"container"},sv=he({__name:"LoginPage",setup(t){return(e,n)=>(_e(),Oe("div",nv,[oe(fr),oe(tv)]))}});const rv=Re(sv,[["__scopeId","data-v-c896fb3a"]]),iv=he({__name:"LoginView",setup(t){return(e,n)=>(_e(),In(rv))}}),st=t=>(Ot("data-v-2bdf2768"),t=t(),kt(),t),ov={class:"contain"},av=st(()=>g("div",{class:"imgprofile"},[g("img",{src:is,alt:"Logo"})],-1)),cv=st(()=>g("div",{class:"reg"},[g("h1",null,"Registrarse"),g("div",{class:"linea"})],-1)),lv={class:"in"},uv=st(()=>g("label",{for:""},"Nombre Usuario",-1)),dv={class:"in"},fv=st(()=>g("label",{for:""},"Correo",-1)),hv={class:"in"},pv=st(()=>g("label",{for:""},"Contraseña",-1)),gv={class:"in"},mv=st(()=>g("label",{for:""},"Repite Contraseña",-1)),_v=st(()=>g("div",{class:"goface"},[g("img",{src:Ni,alt:"Google"}),g("img",{src:hr,alt:"Facebook"})],-1)),vv=st(()=>g("div",{class:"linea"},null,-1)),bv=st(()=>g("img",{src:ar,alt:"Logo"},null,-1)),yv=st(()=>g("div",{class:"space"},null,-1)),Iv=he({__name:"RegistroComponent",setup(t){const e=ts(),n=ie(""),s=ie(""),r=ie(""),i=ie(""),o=or(),a=()=>{o.push("/login")},c=async()=>{if(n.value.trim()==""&&r.value.trim()==""&&s.value.trim()==""&&i.value.trim()==""){console.log("Llenar todos los datos");return}if(s.value!==i.value){console.log("mal rey");return}e.addRegistro({nombre:n.value.toString(),correo:r.value.toString(),password:s.value.toString(),telefono:"",direccion:""}),console.log("adentro"),await Ag(nt(),r.value,s.value).then(l=>{}),o.push("/micuenta")};return(l,u)=>(_e(),Oe("main",ov,[av,cv,g("div",lv,[uv,ee(g("input",{type:"text",name:"usuario",id:"usuario",placeholder:"Hugo Ricardo","onUpdate:modelValue":u[0]||(u[0]=f=>n.value=f),required:""},null,512),[[ye,n.value]])]),g("div",dv,[fv,ee(g("input",{type:"email",name:"usuario",id:"usuario",placeholder:"hugoRicardo@gmail.con","onUpdate:modelValue":u[1]||(u[1]=f=>r.value=f),required:""},null,512),[[ye,r.value]])]),g("div",hv,[pv,ee(g("input",{type:"password",name:"pass",id:"pass",placeholder:"Contraseña","onUpdate:modelValue":u[2]||(u[2]=f=>s.value=f),required:""},null,512),[[ye,s.value]])]),g("div",gv,[mv,ee(g("input",{type:"password",name:"pass",id:"pass",placeholder:"Contraseña","onUpdate:modelValue":u[3]||(u[3]=f=>i.value=f),required:""},null,512),[[ye,i.value]])]),g("button",{onClick:c},"Registrate"),_v,vv,g("footer",null,[bv,g("button",{class:"bt-reg",onClick:a},"Ingresa"),yv])]))}});const Ev=Re(Iv,[["__scopeId","data-v-2bdf2768"]]),wv={class:"container"},Tv=he({__name:"RegistroPage",setup(t){return(e,n)=>(_e(),Oe("div",wv,[oe(fr),oe(Ev)]))}});const Rv=Re(Tv,[["__scopeId","data-v-932305bb"]]),Cv=he({__name:"RegistroView",setup(t){return(e,n)=>(_e(),In(Rv))}}),Cn=t=>(Ot("data-v-3473bc56"),t=t(),kt(),t),Sv={class:"contain"},Av=Cn(()=>g("div",{class:"imgprofile"},[g("img",{src:is,alt:"Logo"})],-1)),Pv=Cn(()=>g("div",{class:"reg"},[g("h1",null,"Informacion"),g("div",{class:"linea"})],-1)),Ov={class:"in"},kv=Cn(()=>g("label",{for:""},"Nombre de Usuario",-1)),Nv=["placeholder"],Mv={class:"in"},xv=Cn(()=>g("label",{for:""},"Correo",-1)),Dv=["placeholder"],Lv={class:"in"},$v=Cn(()=>g("label",{for:""},"Telèfono",-1)),Uv=["placeholder"],Fv={class:"in"},Bv=Cn(()=>g("label",{for:""},"Direcciòn",-1)),Hv=["placeholder"],jv=he({__name:"MiCuentaInformacion",props:{nom:String,cor:String,pas:String,tel:String,dir:String},setup(t){const e=ie(""),n=ie(""),s=ie(""),r=ie("");return(i,o)=>(_e(),Oe("main",Sv,[Av,Pv,g("div",Ov,[kv,ee(g("input",{type:"text",name:"usuario",id:"usuario1",placeholder:t.nom,disabled:"","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,8,Nv),[[ye,e.value]])]),g("div",Mv,[xv,ee(g("input",{type:"email",name:"correo",id:"correo",placeholder:t.cor,disabled:"","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,8,Dv),[[ye,n.value]])]),g("div",Lv,[$v,ee(g("input",{placeholder:t.tel,type:"number",name:"telefono",id:"telefono",disabled:"","onUpdate:modelValue":o[2]||(o[2]=a=>s.value=a)},null,8,Uv),[[ye,s.value]])]),g("div",Fv,[Bv,ee(g("input",{placeholder:t.dir,type:"text",name:"direccion",id:"dirrecion",disabled:"","onUpdate:modelValue":o[3]||(o[3]=a=>r.value=a)},null,8,Hv),[[ye,r.value]])])]))}});const Vv=Re(jv,[["__scopeId","data-v-3473bc56"]]),xt=t=>(Ot("data-v-a8084c91"),t=t(),kt(),t),Wv={class:"contain"},zv=xt(()=>g("div",{class:"imgprofile"},[g("img",{src:is,alt:"Logo"})],-1)),Kv=xt(()=>g("div",{class:"reg"},[g("h1",null,"Informacion"),g("div",{class:"linea"})],-1)),qv={class:"in"},Gv=xt(()=>g("label",{for:""},"Nombre de Usuario",-1)),Jv=["placeholder"],Yv={class:"in"},Xv=xt(()=>g("label",{for:""},"Correo",-1)),Qv=["placeholder"],Zv={class:"in"},eb=xt(()=>g("label",{for:""},"Contraseña",-1)),tb=["placeholder"],nb={class:"in"},sb=xt(()=>g("label",{for:""},"Telèfono",-1)),rb=["placeholder"],ib={class:"in"},ob=xt(()=>g("label",{for:""},"Direcciòn",-1)),ab=["placeholder"],cb=xt(()=>g("button",{class:"bt-can"},"Cancelar",-1)),lb=he({__name:"MiCuentaActualizar",props:{nom:String,cor:String,pas:String,tel:String,dir:String},setup(t){const e=ts(),n=nt().currentUser,s=ie(""),r=ie(""),i=ie(""),o=ie(""),a=ie(""),c=()=>{var l,u;nt().currentUser!=null?(e.adddireccion(((l=n==null?void 0:n.email)==null?void 0:l.toString())||"",a.value),e.addtelefono(((u=n==null?void 0:n.email)==null?void 0:u.toString())||"",o.value)):console.log("Nada")};return(l,u)=>(_e(),Oe("main",Wv,[zv,Kv,g("div",qv,[Gv,ee(g("input",{placeholder:t.nom,type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f)},null,8,Jv),[[ye,s.value]])]),g("div",Yv,[Xv,ee(g("input",{placeholder:t.cor,type:"email",name:"correo",id:"correo1","onUpdate:modelValue":u[1]||(u[1]=f=>r.value=f)},null,8,Qv),[[ye,r.value]])]),g("div",Zv,[eb,ee(g("input",{placeholder:t.pas,type:"password",name:"password",id:"password","onUpdate:modelValue":u[2]||(u[2]=f=>i.value=f)},null,8,tb),[[ye,i.value]])]),g("div",nb,[sb,ee(g("input",{placeholder:t.tel,type:"number",name:"telefono",id:"telefono","onUpdate:modelValue":u[3]||(u[3]=f=>o.value=f)},null,8,rb),[[ye,o.value]])]),g("div",ib,[ob,ee(g("input",{placeholder:t.dir,type:"text",name:"dirreccion",id:"dirreccion","onUpdate:modelValue":u[4]||(u[4]=f=>a.value=f)},null,8,ab),[[ye,a.value]])]),g("div",{class:"actu"},[g("button",{class:"bt-act",onClick:c},"Actualizar"),cb])]))}});const ub=Re(lb,[["__scopeId","data-v-a8084c91"]]),Yt=t=>(Ot("data-v-753c79b9"),t=t(),kt(),t),db={class:"main"},fb={class:"mainleft"},hb={class:"mainleftleft"},pb=Yt(()=>g("h1",null,"Mi Cuenta",-1)),gb=Yt(()=>g("div",{class:"linea1"},null,-1)),mb={class:"list"},_b={class:"lineaa2"},vb={class:"list1"},bb={class:"lineaa3"},yb={class:"opc"},Ib={class:"list3"},Eb={class:"lineaa4"},wb={class:"list4"},Tb={class:"lineaa5"},Rb=Yt(()=>g("div",{class:"linea"},null,-1)),Cb=Yt(()=>g("img",{class:"logo",src:il,alt:"El logo"},null,-1)),Sb=Yt(()=>g("h1",null,"CUYART-SHOP",-1)),Ab=Yt(()=>g("img",{src:ol,alt:"Youtube"},null,-1)),Pb=Yt(()=>g("img",{src:hr,alt:"Facebook"},null,-1)),Ob={class:"mainright"},kb=he({__name:"MiCuentaComponent",setup(t){ts(),nt().currentUser;let e={};La(()=>{var p,_,T,O,L,P,$,N,W,q;const u=ts(),f=nt().currentUser;e={nom:((_=u.getRegistro(((p=f==null?void 0:f.email)==null?void 0:p.toString())||" "))==null?void 0:_.nombre)||" ",cor:((O=u.getRegistro(((T=f==null?void 0:f.email)==null?void 0:T.toString())||""))==null?void 0:O.correo)||"",pas:((P=u.getRegistro(((L=f==null?void 0:f.email)==null?void 0:L.toString())||""))==null?void 0:P.password)||"",tel:((N=u.getRegistro((($=f==null?void 0:f.email)==null?void 0:$.toString())||""))==null?void 0:N.telefono)||"",dir:((q=u.getRegistro(((W=f==null?void 0:f.email)==null?void 0:W.toString())||""))==null?void 0:q.direccion)||""}});const n=ie(!0),s=()=>{(a.value=!1)||(a.value=!1),n.value=!n.value},r=()=>{(n.value=!0)||(n.value=!0),a.value=!a.value,(a.value=!1)&&(c.value=!1,l.value=!1),(a.value=!0)&&(c.value=!1,l.value=!1)},i=()=>{(c.value=!1)||(c.value=!1),l.value=!l.value},o=()=>{(l.value=!1)||(l.value=!1),c.value=!c.value},a=ie(!1),c=ie(!1),l=ie(!1);return(u,f)=>(_e(),Oe("main",db,[g("div",fb,[g("div",hb,[pb,gb,g("div",mb,[g("div",null,[g("div",{class:Et(["linea2",n.value?"":"rot"])},null,2),ee(g("div",_b,null,512),[[Be,!n.value]])]),g("label",{onClick:s},"Actualizar Informacion")]),g("div",vb,[g("div",null,[g("div",{class:Et(["linea3",a.value?"rot":""])},null,2),ee(g("div",bb,null,512),[[Be,a.value]])]),g("label",{onClick:r},"Vendedora")]),g("div",yb,[g("div",Ib,[g("div",null,[ee(g("div",{class:Et(["linea4",c.value?"rot":""])},null,2),[[Be,a.value]]),ee(g("div",Eb,null,512),[[Be,c.value]])]),ee(g("label",{onClick:o},"Añadir Producto",512),[[Be,a.value]])]),g("div",wb,[g("div",null,[ee(g("div",{class:Et(["linea5",l.value?"rot":""])},null,2),[[Be,a.value]]),ee(g("div",Tb,null,512),[[Be,l.value]])]),ee(g("label",{onClick:i},"Actualizar Producto",512),[[Be,a.value]])])]),Rb,Cb,Sb,Ab,Pb])]),g("div",Ob,[ee(oe(Vv,$i(jr(Rt(e))),null,16),[[Be,n.value]]),ee(oe(ub,$i(jr(Rt(e))),null,16),[[Be,!n.value]])])]))}});const Nb=Re(kb,[["__scopeId","data-v-753c79b9"]]),Mb={class:"container"},xb=he({__name:"MiCuentaPage",setup(t){return(e,n)=>(_e(),Oe("div",Mb,[oe(fr),oe(Nb)]))}});const Db=Re(xb,[["__scopeId","data-v-5b446284"]]),Lb=he({__name:"MiCuentaView",setup(t){return(e,n)=>(_e(),In(Db))}}),$b=Np({history:Gh("/cuy-art-shop/"),routes:[{path:"/",name:"Home",component:C_},{path:"/about",name:"About",component:V_},{path:"/login",name:"Login",component:iv},{path:"/registro",name:"Registro",component:Cv},{path:"/micuenta",name:"MiCuenta",component:Lb}]}),Mi=xd(Oh);Mi.use($d().use(Sh));Mi.use($b);Mi.mount("#app");
