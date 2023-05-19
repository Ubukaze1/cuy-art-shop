(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function su(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ru(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Xe(s)?d_(s):ru(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Xe(t))return t;if(Re(t))return t}}const l_=/;(?![^(]*\))/g,u_=/:([^]+)/,h_=/\/\*.*?\*\//gs;function d_(t){const e={};return t.replace(h_,"").split(l_).forEach(n=>{if(n){const s=n.split(u_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bs(t){let e="";if(Xe(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=bs(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const f_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p_=su(f_);function vp(t){return!!t||t===""}function g_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=dr(t[s],e[s]);return n}function dr(t,e){if(t===e)return!0;let n=Kh(t),s=Kh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=yi(t),s=yi(e),n||s)return t===e;if(n=X(t),s=X(e),n||s)return n&&s?g_(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!dr(t[o],e[o]))return!1}}return String(t)===String(e)}function yp(t,e){return t.findIndex(n=>dr(n,e))}const Qn=t=>Xe(t)?t:t==null?"":X(t)||Re(t)&&(t.toString===Ep||!oe(t.toString))?JSON.stringify(t,_p,2):String(t),_p=(t,e)=>e&&e.__v_isRef?_p(t,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ra(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!X(e)&&!Ip(e)?String(e):e,ke={},sr=[],Ht=()=>{},m_=()=>!1,v_=/^on[^a-z]/,Aa=t=>v_.test(t),iu=t=>t.startsWith("onUpdate:"),wt=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y_=Object.prototype.hasOwnProperty,pe=(t,e)=>y_.call(t,e),X=Array.isArray,rr=t=>ji(t)==="[object Map]",Ra=t=>ji(t)==="[object Set]",Kh=t=>ji(t)==="[object Date]",oe=t=>typeof t=="function",Xe=t=>typeof t=="string",yi=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",wp=t=>Re(t)&&oe(t.then)&&oe(t.catch),Ep=Object.prototype.toString,ji=t=>Ep.call(t),__=t=>ji(t).slice(8,-1),Ip=t=>ji(t)==="[object Object]",au=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mo=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},w_=/-(\w)/g,fn=ka(t=>t.replace(w_,(e,n)=>n?n.toUpperCase():"")),E_=/\B([A-Z])/g,kr=ka(t=>t.replace(E_,"-$1").toLowerCase()),Pa=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=ka(t=>t?`on${Pa(t)}`:""),_i=(t,e)=>!Object.is(t,e),Lo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},il=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wh;const I_=()=>Wh||(Wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class bp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Tp(t){return new bp(t)}function b_(t,e=Pt){e&&e.active&&e.effects.push(t)}function Cp(){return Pt}function T_(t){Pt&&Pt.cleanups.push(t)}const cu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sp=t=>(t.w&ss)>0,Ap=t=>(t.n&ss)>0,C_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ss},S_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Sp(r)&&!Ap(r)?r.delete(t):e[n++]=r,r.w&=~ss,r.n&=~ss}e.length=n}},Xo=new WeakMap;let Zr=0,ss=1;const ol=30;let jt;const ks=Symbol(""),al=Symbol("");class lu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,b_(this,s)}run(){if(!this.active)return this.fn();let e=jt,n=Xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Xn=!0,ss=1<<++Zr,Zr<=ol?C_(this):Gh(this),this.fn()}finally{Zr<=ol&&S_(this),ss=1<<--Zr,jt=this.parent,Xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(Gh(this),this.onStop&&this.onStop(),this.active=!1)}}function Gh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xn=!0;const Rp=[];function Pr(){Rp.push(Xn),Xn=!1}function Nr(){const t=Rp.pop();Xn=t===void 0?!0:t}function St(t,e,n){if(Xn&&jt){let s=Xo.get(t);s||Xo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=cu()),kp(r)}}function kp(t,e){let n=!1;Zr<=ol?Ap(t)||(t.n|=ss,n=!Sp(t)):n=!t.has(jt),n&&(t.add(jt),jt.deps.push(t))}function Cn(t,e,n,s,r,i){const o=Xo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?au(n)&&a.push(o.get("length")):(a.push(o.get(ks)),rr(t)&&a.push(o.get(al)));break;case"delete":X(t)||(a.push(o.get(ks)),rr(t)&&a.push(o.get(al)));break;case"set":rr(t)&&a.push(o.get(ks));break}if(a.length===1)a[0]&&cl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);cl(cu(c))}}function cl(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&Qh(s);for(const s of n)s.computed||Qh(s)}function Qh(t,e){(t!==jt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function A_(t,e){var n;return(n=Xo.get(t))===null||n===void 0?void 0:n.get(e)}const R_=su("__proto__,__v_isRef,__isVue"),Pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yi)),k_=uu(),P_=uu(!1,!0),N_=uu(!0),Xh=D_();function D_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ge(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pr();const s=ge(this)[e].apply(this,n);return Nr(),s}}),t}function O_(t){const e=ge(this);return St(e,"has",t),e.hasOwnProperty(t)}function uu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Q_:Mp:e?xp:Op).get(s))return s;const o=X(s);if(!t){if(o&&pe(Xh,r))return Reflect.get(Xh,r,i);if(r==="hasOwnProperty")return O_}const a=Reflect.get(s,r,i);return(yi(r)?Pp.has(r):R_(r))||(t||St(s,"get",r),e)?a:qe(a)?o&&au(r)?a:a.value:Re(a)?t?Lp(a):Dr(a):a}}const x_=Np(),M_=Np(!0);function Np(t=!1){return function(n,s,r,i){let o=n[s];if(fr(o)&&qe(o)&&!qe(r))return!1;if(!t&&(!Yo(r)&&!fr(r)&&(o=ge(o),r=ge(r)),!X(n)&&qe(o)&&!qe(r)))return o.value=r,!0;const a=X(n)&&au(s)?Number(s)<n.length:pe(n,s),c=Reflect.set(n,s,r,i);return n===ge(i)&&(a?_i(r,o)&&Cn(n,"set",s,r):Cn(n,"add",s,r)),c}}function L_(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Cn(t,"delete",e,void 0),s}function $_(t,e){const n=Reflect.has(t,e);return(!yi(e)||!Pp.has(e))&&St(t,"has",e),n}function U_(t){return St(t,"iterate",X(t)?"length":ks),Reflect.ownKeys(t)}const Dp={get:k_,set:x_,deleteProperty:L_,has:$_,ownKeys:U_},F_={get:N_,set(t,e){return!0},deleteProperty(t,e){return!0}},V_=wt({},Dp,{get:P_,set:M_}),hu=t=>t,Na=t=>Reflect.getPrototypeOf(t);function go(t,e,n=!1,s=!1){t=t.__v_raw;const r=ge(t),i=ge(e);n||(e!==i&&St(r,"get",e),St(r,"get",i));const{has:o}=Na(r),a=s?hu:n?pu:wi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,s=ge(n),r=ge(t);return e||(t!==r&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function vo(t,e=!1){return t=t.__v_raw,!e&&St(ge(t),"iterate",ks),Reflect.get(t,"size",t)}function Yh(t){t=ge(t);const e=ge(this);return Na(e).has.call(e,t)||(e.add(t),Cn(e,"add",t,t)),this}function Jh(t,e){e=ge(e);const n=ge(this),{has:s,get:r}=Na(n);let i=s.call(n,t);i||(t=ge(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?_i(e,o)&&Cn(n,"set",t,e):Cn(n,"add",t,e),this}function Zh(t){const e=ge(this),{has:n,get:s}=Na(e);let r=n.call(e,t);r||(t=ge(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Cn(e,"delete",t,void 0),i}function ed(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&Cn(t,"clear",void 0,void 0),n}function yo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ge(o),c=e?hu:t?pu:wi;return!t&&St(a,"iterate",ks),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function _o(t,e,n){return function(...s){const r=this.__v_raw,i=ge(r),o=rr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?hu:e?pu:wi;return!e&&St(i,"iterate",c?al:ks),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:this}}function B_(){const t={get(i){return go(this,i)},get size(){return vo(this)},has:mo,add:Yh,set:Jh,delete:Zh,clear:ed,forEach:yo(!1,!1)},e={get(i){return go(this,i,!1,!0)},get size(){return vo(this)},has:mo,add:Yh,set:Jh,delete:Zh,clear:ed,forEach:yo(!1,!0)},n={get(i){return go(this,i,!0)},get size(){return vo(this,!0)},has(i){return mo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:yo(!0,!1)},s={get(i){return go(this,i,!0,!0)},get size(){return vo(this,!0)},has(i){return mo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:yo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=_o(i,!1,!1),n[i]=_o(i,!0,!1),e[i]=_o(i,!1,!0),s[i]=_o(i,!0,!0)}),[t,n,e,s]}const[j_,q_,H_,z_]=B_();function du(t,e){const n=e?t?z_:H_:t?q_:j_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(pe(n,r)&&r in s?n:s,r,i)}const K_={get:du(!1,!1)},W_={get:du(!1,!0)},G_={get:du(!0,!1)},Op=new WeakMap,xp=new WeakMap,Mp=new WeakMap,Q_=new WeakMap;function X_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Y_(t){return t.__v_skip||!Object.isExtensible(t)?0:X_(__(t))}function Dr(t){return fr(t)?t:fu(t,!1,Dp,K_,Op)}function J_(t){return fu(t,!1,V_,W_,xp)}function Lp(t){return fu(t,!0,F_,G_,Mp)}function fu(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Y_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Yn(t){return fr(t)?Yn(t.__v_raw):!!(t&&t.__v_isReactive)}function fr(t){return!!(t&&t.__v_isReadonly)}function Yo(t){return!!(t&&t.__v_isShallow)}function $p(t){return Yn(t)||fr(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function pr(t){return Qo(t,"__v_skip",!0),t}const wi=t=>Re(t)?Dr(t):t,pu=t=>Re(t)?Lp(t):t;function Up(t){Xn&&jt&&(t=ge(t),kp(t.dep||(t.dep=cu())))}function Fp(t,e){t=ge(t);const n=t.dep;n&&cl(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function J(t){return Vp(t,!1)}function Z_(t){return Vp(t,!0)}function Vp(t,e){return qe(t)?t:new ew(t,e)}class ew{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:wi(e)}get value(){return Up(this),this._value}set value(e){const n=this.__v_isShallow||Yo(e)||fr(e);e=n?e:ge(e),_i(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wi(e),Fp(this))}}function Ge(t){return qe(t)?t.value:t}const tw={get:(t,e,n)=>Ge(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return qe(r)&&!qe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Bp(t){return Yn(t)?t:new Proxy(t,tw)}function nw(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=rw(t,n);return e}class sw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return A_(ge(this._object),this._key)}}function rw(t,e,n){const s=t[e];return qe(s)?s:new sw(t,e,n)}var jp;class iw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[jp]=!1,this._dirty=!0,this.effect=new lu(e,()=>{this._dirty||(this._dirty=!0,Fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ge(this);return Up(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}jp="__v_isReadonly";function ow(t,e,n=!1){let s,r;const i=oe(t);return i?(s=t,r=Ht):(s=t.get,r=t.set),new iw(s,r,i||!r,n)}function Jn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Da(i,e,n)}return r}function zt(t,e,n,s){if(oe(t)){const i=Jn(t,e,n,s);return i&&wp(i)&&i.catch(o=>{Da(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(zt(t[i],e,n,s));return r}function Da(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Jn(c,null,10,[t,o,a]);return}}aw(t,n,r,s)}function aw(t,e,n,s=!0){console.error(t)}let Ei=!1,ll=!1;const ut=[];let sn=0;const ir=[];let wn=null,Es=0;const qp=Promise.resolve();let gu=null;function mu(t){const e=gu||qp;return t?e.then(this?t.bind(this):t):e}function cw(t){let e=sn+1,n=ut.length;for(;e<n;){const s=e+n>>>1;Ii(ut[s])<t?e=s+1:n=s}return e}function vu(t){(!ut.length||!ut.includes(t,Ei&&t.allowRecurse?sn+1:sn))&&(t.id==null?ut.push(t):ut.splice(cw(t.id),0,t),Hp())}function Hp(){!Ei&&!ll&&(ll=!0,gu=qp.then(Kp))}function lw(t){const e=ut.indexOf(t);e>sn&&ut.splice(e,1)}function uw(t){X(t)?ir.push(...t):(!wn||!wn.includes(t,t.allowRecurse?Es+1:Es))&&ir.push(t),Hp()}function td(t,e=Ei?sn+1:0){for(;e<ut.length;e++){const n=ut[e];n&&n.pre&&(ut.splice(e,1),e--,n())}}function zp(t){if(ir.length){const e=[...new Set(ir)];if(ir.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((n,s)=>Ii(n)-Ii(s)),Es=0;Es<wn.length;Es++)wn[Es]();wn=null,Es=0}}const Ii=t=>t.id==null?1/0:t.id,hw=(t,e)=>{const n=Ii(t)-Ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Kp(t){ll=!1,Ei=!0,ut.sort(hw);const e=Ht;try{for(sn=0;sn<ut.length;sn++){const n=ut[sn];n&&n.active!==!1&&Jn(n,null,14)}}finally{sn=0,ut.length=0,zp(),Ei=!1,gu=null,(ut.length||ir.length)&&Kp()}}function dw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ke;d&&(r=n.map(g=>Xe(g)?g.trim():g)),h&&(r=n.map(il))}let a,c=s[a=Ac(e)]||s[a=Ac(fn(e))];!c&&i&&(c=s[a=Ac(kr(e))]),c&&zt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(l,t,6,r)}}function Wp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=Wp(l,e,!0);u&&(a=!0,wt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&s.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):wt(o,i),Re(t)&&s.set(t,o),o)}function Oa(t,e){return!t||!Aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,kr(e))||pe(t,e))}let Dt=null,xa=null;function Jo(t){const e=Dt;return Dt=t,xa=t&&t.type.__scopeId||null,e}function Jt(t){xa=t}function Zt(){xa=null}function fw(t,e=Dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ud(-1);const i=Jo(e);let o;try{o=t(...r)}finally{Jo(i),s._d&&ud(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Rc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:y}=t;let E,b;const k=Jo(t);try{if(n.shapeFlag&4){const U=r||s;E=nn(u.call(U,U,h,i,g,d,v)),b=c}else{const U=e;E=nn(U.length>1?U(i,{attrs:c,slots:a,emit:l}):U(i,null)),b=e.props?c:pw(c)}}catch(U){ai.length=0,Da(U,t,1),E=Te(bi)}let S=E;if(b&&y!==!1){const U=Object.keys(b),{shapeFlag:z}=S;U.length&&z&7&&(o&&U.some(iu)&&(b=gw(b,o)),S=gr(S,b))}return n.dirs&&(S=gr(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),E=S,Jo(k),E}const pw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Aa(n))&&((e||(e={}))[n]=t[n]);return e},gw=(t,e)=>{const n={};for(const s in t)(!iu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function mw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?nd(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Oa(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?nd(s,o,l):!0:!!o;return!1}function nd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Oa(n,i))return!0}return!1}function vw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yw=t=>t.__isSuspense;function _w(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):uw(t)}function $o(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function Kt(t,e,n=!1){const s=je||Dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&oe(e)?e.call(s.proxy):e}}const wo={};function rn(t,e,n){return Gp(t,e,n)}function Gp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ke){const a=Cp()===(je==null?void 0:je.scope)?je:null;let c,l=!1,u=!1;if(qe(t)?(c=()=>t.value,l=Yo(t)):Yn(t)?(c=()=>t,s=!0):X(t)?(u=!0,l=t.some(S=>Yn(S)||Yo(S)),c=()=>t.map(S=>{if(qe(S))return S.value;if(Yn(S))return Ts(S);if(oe(S))return Jn(S,a,2)})):oe(t)?e?c=()=>Jn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),zt(t,a,3,[d])}:c=Ht,e&&s){const S=c;c=()=>Ts(S())}let h,d=S=>{h=b.onStop=()=>{Jn(S,a,4)}},g;if(Ci)if(d=Ht,e?n&&zt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const S=d0();g=S.__watcherHandles||(S.__watcherHandles=[])}else return Ht;let v=u?new Array(t.length).fill(wo):wo;const y=()=>{if(b.active)if(e){const S=b.run();(s||l||(u?S.some((U,z)=>_i(U,v[z])):_i(S,v)))&&(h&&h(),zt(e,a,3,[S,v===wo?void 0:u&&v[0]===wo?[]:v,d]),v=S)}else b.run()};y.allowRecurse=!!e;let E;r==="sync"?E=y:r==="post"?E=()=>It(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),E=()=>vu(y));const b=new lu(c,E);e?n?y():v=b.run():r==="post"?It(b.run.bind(b),a&&a.suspense):b.run();const k=()=>{b.stop(),a&&a.scope&&ou(a.scope.effects,b)};return g&&g.push(k),k}function ww(t,e,n){const s=this.proxy,r=Xe(t)?t.includes(".")?Qp(s,t):()=>s[t]:t.bind(s,s);let i;oe(e)?i=e:(i=e.handler,n=e);const o=je;mr(this);const a=Gp(r,i.bind(s),n);return o?mr(o):Ps(),a}function Qp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ts(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))Ts(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Ts(t[n],e);else if(Ra(t)||rr(t))t.forEach(n=>{Ts(n,e)});else if(Ip(t))for(const n in t)Ts(t[n],e);return t}function Ce(t){return oe(t)?{setup:t,name:t.name}:t}const Uo=t=>!!t.type.__asyncLoader,Xp=t=>t.type.__isKeepAlive;function Ew(t,e){Yp(t,"a",e)}function Iw(t,e){Yp(t,"da",e)}function Yp(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ma(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Xp(r.parent.vnode)&&bw(s,e,n,r),r=r.parent}}function bw(t,e,n,s){const r=Ma(e,t,s,!0);yu(()=>{ou(s[e],r)},n)}function Ma(t,e,n=je,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pr(),mr(n);const a=zt(e,n,t,o);return Ps(),Nr(),a});return s?r.unshift(i):r.push(i),i}}const Dn=t=>(e,n=je)=>(!Ci||t==="sp")&&Ma(t,(...s)=>e(...s),n),Jp=Dn("bm"),Zp=Dn("m"),Tw=Dn("bu"),Cw=Dn("u"),Sw=Dn("bum"),yu=Dn("um"),Aw=Dn("sp"),Rw=Dn("rtg"),kw=Dn("rtc");function Pw(t,e=je){Ma("ec",t,e)}function Z(t,e){const n=Dt;if(n===null)return t;const s=Fa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ke]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&Ts(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function vs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Pr(),zt(c,n,8,[t.el,a,t,e]),Nr())}}const eg="components";function tg(t,e){return Dw(eg,t,!0,e)||t}const Nw=Symbol();function Dw(t,e,n=!0,s=!1){const r=Dt||je;if(r){const i=r.type;if(t===eg){const a=l0(i,!1);if(a&&(a===e||a===fn(e)||a===Pa(fn(e))))return i}const o=sd(r[t]||i[t],e)||sd(r.appContext[t],e);return!o&&s?i:o}}function sd(t,e){return t&&(t[e]||t[fn(e)]||t[Pa(fn(e))])}function La(t,e,n,s){let r;const i=n&&n[s];if(X(t)||Xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ul=t=>t?dg(t)?Fa(t)||t.proxy:ul(t.parent):null,oi=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ul(t.parent),$root:t=>ul(t.root),$emit:t=>t.emit,$options:t=>_u(t),$forceUpdate:t=>t.f||(t.f=()=>vu(t.update)),$nextTick:t=>t.n||(t.n=mu.bind(t.proxy)),$watch:t=>ww.bind(t)}),kc=(t,e)=>t!==ke&&!t.__isScriptSetup&&pe(t,e),Ow={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(kc(s,e))return o[e]=1,s[e];if(r!==ke&&pe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,i[e];if(n!==ke&&pe(n,e))return o[e]=4,n[e];hl&&(o[e]=0)}}const u=oi[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&pe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return kc(r,e)?(r[e]=n,!0):s!==ke&&pe(s,e)?(s[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&pe(t,o)||kc(e,o)||(a=i[0])&&pe(a,o)||pe(s,o)||pe(oi,o)||pe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let hl=!0;function xw(t){const e=_u(t),n=t.proxy,s=t.ctx;hl=!1,e.beforeCreate&&rd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:y,deactivated:E,beforeDestroy:b,beforeUnmount:k,destroyed:S,unmounted:U,render:z,renderTracked:Q,renderTriggered:L,errorCaptured:w,serverPrefetch:O,expose:re,inheritAttrs:ye,components:tt,directives:At,filters:Ye}=e;if(l&&Mw(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const he=o[me];oe(he)&&(s[me]=he.bind(n))}if(r){const me=r.call(n,n);Re(me)&&(t.data=Dr(me))}if(hl=!0,i)for(const me in i){const he=i[me],nt=oe(he)?he.bind(n,n):oe(he.get)?he.get.bind(n,n):Ht,Rt=!oe(he)&&oe(he.set)?he.set.bind(n):Ht,Et=Nt({get:nt,set:Rt});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Et.value,set:st=>Et.value=st})}if(a)for(const me in a)ng(a[me],s,n,me);if(c){const me=oe(c)?c.call(n):c;Reflect.ownKeys(me).forEach(he=>{$o(he,me[he])})}u&&rd(u,t,"c");function Se(me,he){X(he)?he.forEach(nt=>me(nt.bind(n))):he&&me(he.bind(n))}if(Se(Jp,h),Se(Zp,d),Se(Tw,g),Se(Cw,v),Se(Ew,y),Se(Iw,E),Se(Pw,w),Se(kw,Q),Se(Rw,L),Se(Sw,k),Se(yu,U),Se(Aw,O),X(re))if(re.length){const me=t.exposed||(t.exposed={});re.forEach(he=>{Object.defineProperty(me,he,{get:()=>n[he],set:nt=>n[he]=nt})})}else t.exposed||(t.exposed={});z&&t.render===Ht&&(t.render=z),ye!=null&&(t.inheritAttrs=ye),tt&&(t.components=tt),At&&(t.directives=At)}function Mw(t,e,n=Ht,s=!1){X(t)&&(t=dl(t));for(const r in t){const i=t[r];let o;Re(i)?"default"in i?o=Kt(i.from||r,i.default,!0):o=Kt(i.from||r):o=Kt(i),qe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function rd(t,e,n){zt(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ng(t,e,n,s){const r=s.includes(".")?Qp(n,s):()=>n[s];if(Xe(t)){const i=e[t];oe(i)&&rn(r,i)}else if(oe(t))rn(r,t.bind(n));else if(Re(t))if(X(t))t.forEach(i=>ng(i,e,n,s));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&rn(r,i,t)}}function _u(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Zo(c,l,o,!0)),Zo(c,e,o)),Re(e)&&i.set(e,c),c}function Zo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Zo(t,i,n,!0),r&&r.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Lw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lw={data:id,props:_s,emits:_s,methods:_s,computed:_s,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:_s,directives:_s,watch:Uw,provide:id,inject:$w};function id(t,e){return e?t?function(){return wt(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function $w(t,e){return _s(dl(t),dl(e))}function dl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function _s(t,e){return t?wt(wt(Object.create(null),t),e):e}function Uw(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function Fw(t,e,n,s=!1){const r={},i={};Qo(i,Ua,1),t.propsDefaults=Object.create(null),sg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:J_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Vw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ge(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Oa(t.emitsOptions,d))continue;const g=e[d];if(c)if(pe(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=fn(d);r[v]=fl(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{sg(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=kr(h))===h||!pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=fl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!pe(e,h))&&(delete i[h],l=!0)}l&&Cn(t,"set","$attrs")}function sg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mo(c))continue;const l=e[c];let u;r&&pe(r,u=fn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Oa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ge(n),l=a||ke;for(let u=0;u<i.length;u++){const h=i[u];n[h]=fl(r,c,h,l[h],t,!pe(l,h))}}return o}function fl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&oe(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(mr(r),s=l[n]=c.call(null,e),Ps())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===kr(n))&&(s=!0))}return s}function rg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=h=>{c=!0;const[d,g]=rg(h,e,!0);wt(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Re(t)&&s.set(t,sr),sr;if(X(i))for(let u=0;u<i.length;u++){const h=fn(i[u]);od(h)&&(o[h]=ke)}else if(i)for(const u in i){const h=fn(u);if(od(h)){const d=i[u],g=o[h]=X(d)||oe(d)?{type:d}:Object.assign({},d);if(g){const v=ld(Boolean,g.type),y=ld(String,g.type);g[0]=v>-1,g[1]=y<0||v<y,(v>-1||pe(g,"default"))&&a.push(h)}}}const l=[o,a];return Re(t)&&s.set(t,l),l}function od(t){return t[0]!=="$"}function ad(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cd(t,e){return ad(t)===ad(e)}function ld(t,e){return X(e)?e.findIndex(n=>cd(n,t)):oe(e)&&cd(e,t)?0:-1}const ig=t=>t[0]==="_"||t==="$stable",wu=t=>X(t)?t.map(nn):[nn(t)],Bw=(t,e,n)=>{if(e._n)return e;const s=fw((...r)=>wu(e(...r)),n);return s._c=!1,s},og=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ig(r))continue;const i=t[r];if(oe(i))e[r]=Bw(r,i,s);else if(i!=null){const o=wu(i);e[r]=()=>o}}},ag=(t,e)=>{const n=wu(e);t.slots.default=()=>n},jw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Qo(e,"_",n)):og(e,t.slots={})}else t.slots={},e&&ag(t,e);Qo(t.slots,Ua,1)},qw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(wt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,og(e,r)),o=e}else e&&(ag(t,e),o={default:1});if(i)for(const a in r)!ig(a)&&!(a in o)&&delete r[a]};function cg(){return{app:null,config:{isNativeTag:m_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hw=0;function zw(t,e){return function(s,r=null){oe(s)||(s=Object.assign({},s)),r!=null&&!Re(r)&&(r=null);const i=cg(),o=new Set;let a=!1;const c=i.app={_uid:Hw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:f0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Te(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Fa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function pl(t,e,n,s,r=!1){if(X(t)){t.forEach((d,g)=>pl(d,e&&(X(e)?e[g]:e),n,s,r));return}if(Uo(s)&&!r)return;const i=s.shapeFlag&4?Fa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Xe(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):qe(l)&&(l.value=null)),oe(c))Jn(c,a,12,[o,u]);else{const d=Xe(c),g=qe(c);if(d||g){const v=()=>{if(t.f){const y=d?pe(h,c)?h[c]:u[c]:c.value;r?X(y)&&ou(y,i):X(y)?y.includes(i)||y.push(i):d?(u[c]=[i],pe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,pe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,It(v,n)):v()}}}const It=_w;function Kw(t){return Ww(t)}function Ww(t,e){const n=I_();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ht,insertStaticContent:v}=t,y=(p,m,_,I=null,A=null,D=null,B=!1,N=null,M=!!m.dynamicChildren)=>{if(p===m)return;p&&!Wr(p,m)&&(I=$(p),st(p,A,D,!0),p=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:R,ref:W,shapeFlag:q}=m;switch(R){case $a:E(p,m,_,I);break;case bi:b(p,m,_,I);break;case Fo:p==null&&k(m,_,I,B);break;case bt:tt(p,m,_,I,A,D,B,N,M);break;default:q&1?z(p,m,_,I,A,D,B,N,M):q&6?At(p,m,_,I,A,D,B,N,M):(q&64||q&128)&&R.process(p,m,_,I,A,D,B,N,M,fe)}W!=null&&A&&pl(W,p&&p.ref,D,m||p,!m)},E=(p,m,_,I)=>{if(p==null)s(m.el=a(m.children),_,I);else{const A=m.el=p.el;m.children!==p.children&&l(A,m.children)}},b=(p,m,_,I)=>{p==null?s(m.el=c(m.children||""),_,I):m.el=p.el},k=(p,m,_,I)=>{[p.el,p.anchor]=v(p.children,m,_,I,p.el,p.anchor)},S=({el:p,anchor:m},_,I)=>{let A;for(;p&&p!==m;)A=d(p),s(p,_,I),p=A;s(m,_,I)},U=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),r(p),p=_;r(m)},z=(p,m,_,I,A,D,B,N,M)=>{B=B||m.type==="svg",p==null?Q(m,_,I,A,D,B,N,M):O(p,m,A,D,B,N,M)},Q=(p,m,_,I,A,D,B,N)=>{let M,R;const{type:W,props:q,shapeFlag:G,transition:ne,dirs:ce}=p;if(M=p.el=o(p.type,D,q&&q.is,q),G&8?u(M,p.children):G&16&&w(p.children,M,null,I,A,D&&W!=="foreignObject",B,N),ce&&vs(p,null,I,"created"),L(M,p,p.scopeId,B,I),q){for(const be in q)be!=="value"&&!Mo(be)&&i(M,be,null,q[be],D,p.children,I,A,V);"value"in q&&i(M,"value",null,q.value),(R=q.onVnodeBeforeMount)&&tn(R,I,p)}ce&&vs(p,null,I,"beforeMount");const Ae=(!A||A&&!A.pendingBranch)&&ne&&!ne.persisted;Ae&&ne.beforeEnter(M),s(M,m,_),((R=q&&q.onVnodeMounted)||Ae||ce)&&It(()=>{R&&tn(R,I,p),Ae&&ne.enter(M),ce&&vs(p,null,I,"mounted")},A)},L=(p,m,_,I,A)=>{if(_&&g(p,_),I)for(let D=0;D<I.length;D++)g(p,I[D]);if(A){let D=A.subTree;if(m===D){const B=A.vnode;L(p,B,B.scopeId,B.slotScopeIds,A.parent)}}},w=(p,m,_,I,A,D,B,N,M=0)=>{for(let R=M;R<p.length;R++){const W=p[R]=N?Fn(p[R]):nn(p[R]);y(null,W,m,_,I,A,D,B,N)}},O=(p,m,_,I,A,D,B)=>{const N=m.el=p.el;let{patchFlag:M,dynamicChildren:R,dirs:W}=m;M|=p.patchFlag&16;const q=p.props||ke,G=m.props||ke;let ne;_&&ys(_,!1),(ne=G.onVnodeBeforeUpdate)&&tn(ne,_,m,p),W&&vs(m,p,_,"beforeUpdate"),_&&ys(_,!0);const ce=A&&m.type!=="foreignObject";if(R?re(p.dynamicChildren,R,N,_,I,ce,D):B||he(p,m,N,null,_,I,ce,D,!1),M>0){if(M&16)ye(N,m,q,G,_,I,A);else if(M&2&&q.class!==G.class&&i(N,"class",null,G.class,A),M&4&&i(N,"style",q.style,G.style,A),M&8){const Ae=m.dynamicProps;for(let be=0;be<Ae.length;be++){const He=Ae[be],Vt=q[He],Gs=G[He];(Gs!==Vt||He==="value")&&i(N,He,Vt,Gs,A,p.children,_,I,V)}}M&1&&p.children!==m.children&&u(N,m.children)}else!B&&R==null&&ye(N,m,q,G,_,I,A);((ne=G.onVnodeUpdated)||W)&&It(()=>{ne&&tn(ne,_,m,p),W&&vs(m,p,_,"updated")},I)},re=(p,m,_,I,A,D,B)=>{for(let N=0;N<m.length;N++){const M=p[N],R=m[N],W=M.el&&(M.type===bt||!Wr(M,R)||M.shapeFlag&70)?h(M.el):_;y(M,R,W,null,I,A,D,B,!0)}},ye=(p,m,_,I,A,D,B)=>{if(_!==I){if(_!==ke)for(const N in _)!Mo(N)&&!(N in I)&&i(p,N,_[N],null,B,m.children,A,D,V);for(const N in I){if(Mo(N))continue;const M=I[N],R=_[N];M!==R&&N!=="value"&&i(p,N,R,M,B,m.children,A,D,V)}"value"in I&&i(p,"value",_.value,I.value)}},tt=(p,m,_,I,A,D,B,N,M)=>{const R=m.el=p?p.el:a(""),W=m.anchor=p?p.anchor:a("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:ne}=m;ne&&(N=N?N.concat(ne):ne),p==null?(s(R,_,I),s(W,_,I),w(m.children,_,W,A,D,B,N,M)):q>0&&q&64&&G&&p.dynamicChildren?(re(p.dynamicChildren,G,_,A,D,B,N),(m.key!=null||A&&m===A.subTree)&&lg(p,m,!0)):he(p,m,_,W,A,D,B,N,M)},At=(p,m,_,I,A,D,B,N,M)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?A.ctx.activate(m,_,I,B,M):Ye(m,_,I,A,D,B,M):Oe(p,m,M)},Ye=(p,m,_,I,A,D,B)=>{const N=p.component=s0(p,I,A);if(Xp(p)&&(N.ctx.renderer=fe),i0(N),N.asyncDep){if(A&&A.registerDep(N,Se),!p.el){const M=N.subTree=Te(bi);b(null,M,m,_)}return}Se(N,p,m,_,A,D,B)},Oe=(p,m,_)=>{const I=m.component=p.component;if(mw(p,m,_))if(I.asyncDep&&!I.asyncResolved){me(I,m,_);return}else I.next=m,lw(I.update),I.update();else m.el=p.el,I.vnode=m},Se=(p,m,_,I,A,D,B)=>{const N=()=>{if(p.isMounted){let{next:W,bu:q,u:G,parent:ne,vnode:ce}=p,Ae=W,be;ys(p,!1),W?(W.el=ce.el,me(p,W,B)):W=ce,q&&Lo(q),(be=W.props&&W.props.onVnodeBeforeUpdate)&&tn(be,ne,W,ce),ys(p,!0);const He=Rc(p),Vt=p.subTree;p.subTree=He,y(Vt,He,h(Vt.el),$(Vt),p,A,D),W.el=He.el,Ae===null&&vw(p,He.el),G&&It(G,A),(be=W.props&&W.props.onVnodeUpdated)&&It(()=>tn(be,ne,W,ce),A)}else{let W;const{el:q,props:G}=m,{bm:ne,m:ce,parent:Ae}=p,be=Uo(m);if(ys(p,!1),ne&&Lo(ne),!be&&(W=G&&G.onVnodeBeforeMount)&&tn(W,Ae,m),ys(p,!0),q&&ae){const He=()=>{p.subTree=Rc(p),ae(q,p.subTree,p,A,null)};be?m.type.__asyncLoader().then(()=>!p.isUnmounted&&He()):He()}else{const He=p.subTree=Rc(p);y(null,He,_,I,p,A,D),m.el=He.el}if(ce&&It(ce,A),!be&&(W=G&&G.onVnodeMounted)){const He=m;It(()=>tn(W,Ae,He),A)}(m.shapeFlag&256||Ae&&Uo(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&It(p.a,A),p.isMounted=!0,m=_=I=null}},M=p.effect=new lu(N,()=>vu(R),p.scope),R=p.update=()=>M.run();R.id=p.uid,ys(p,!0),R()},me=(p,m,_)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,Vw(p,m.props,I,_),qw(p,m.children,_),Pr(),td(),Nr()},he=(p,m,_,I,A,D,B,N,M=!1)=>{const R=p&&p.children,W=p?p.shapeFlag:0,q=m.children,{patchFlag:G,shapeFlag:ne}=m;if(G>0){if(G&128){Rt(R,q,_,I,A,D,B,N,M);return}else if(G&256){nt(R,q,_,I,A,D,B,N,M);return}}ne&8?(W&16&&V(R,A,D),q!==R&&u(_,q)):W&16?ne&16?Rt(R,q,_,I,A,D,B,N,M):V(R,A,D,!0):(W&8&&u(_,""),ne&16&&w(q,_,I,A,D,B,N,M))},nt=(p,m,_,I,A,D,B,N,M)=>{p=p||sr,m=m||sr;const R=p.length,W=m.length,q=Math.min(R,W);let G;for(G=0;G<q;G++){const ne=m[G]=M?Fn(m[G]):nn(m[G]);y(p[G],ne,_,null,A,D,B,N,M)}R>W?V(p,A,D,!0,!1,q):w(m,_,I,A,D,B,N,M,q)},Rt=(p,m,_,I,A,D,B,N,M)=>{let R=0;const W=m.length;let q=p.length-1,G=W-1;for(;R<=q&&R<=G;){const ne=p[R],ce=m[R]=M?Fn(m[R]):nn(m[R]);if(Wr(ne,ce))y(ne,ce,_,null,A,D,B,N,M);else break;R++}for(;R<=q&&R<=G;){const ne=p[q],ce=m[G]=M?Fn(m[G]):nn(m[G]);if(Wr(ne,ce))y(ne,ce,_,null,A,D,B,N,M);else break;q--,G--}if(R>q){if(R<=G){const ne=G+1,ce=ne<W?m[ne].el:I;for(;R<=G;)y(null,m[R]=M?Fn(m[R]):nn(m[R]),_,ce,A,D,B,N,M),R++}}else if(R>G)for(;R<=q;)st(p[R],A,D,!0),R++;else{const ne=R,ce=R,Ae=new Map;for(R=ce;R<=G;R++){const kt=m[R]=M?Fn(m[R]):nn(m[R]);kt.key!=null&&Ae.set(kt.key,R)}let be,He=0;const Vt=G-ce+1;let Gs=!1,qh=0;const Kr=new Array(Vt);for(R=0;R<Vt;R++)Kr[R]=0;for(R=ne;R<=q;R++){const kt=p[R];if(He>=Vt){st(kt,A,D,!0);continue}let en;if(kt.key!=null)en=Ae.get(kt.key);else for(be=ce;be<=G;be++)if(Kr[be-ce]===0&&Wr(kt,m[be])){en=be;break}en===void 0?st(kt,A,D,!0):(Kr[en-ce]=R+1,en>=qh?qh=en:Gs=!0,y(kt,m[en],_,null,A,D,B,N,M),He++)}const Hh=Gs?Gw(Kr):sr;for(be=Hh.length-1,R=Vt-1;R>=0;R--){const kt=ce+R,en=m[kt],zh=kt+1<W?m[kt+1].el:I;Kr[R]===0?y(null,en,_,zh,A,D,B,N,M):Gs&&(be<0||R!==Hh[be]?Et(en,_,zh,2):be--)}}},Et=(p,m,_,I,A=null)=>{const{el:D,type:B,transition:N,children:M,shapeFlag:R}=p;if(R&6){Et(p.component.subTree,m,_,I);return}if(R&128){p.suspense.move(m,_,I);return}if(R&64){B.move(p,m,_,fe);return}if(B===bt){s(D,m,_);for(let q=0;q<M.length;q++)Et(M[q],m,_,I);s(p.anchor,m,_);return}if(B===Fo){S(p,m,_);return}if(I!==2&&R&1&&N)if(I===0)N.beforeEnter(D),s(D,m,_),It(()=>N.enter(D),A);else{const{leave:q,delayLeave:G,afterLeave:ne}=N,ce=()=>s(D,m,_),Ae=()=>{q(D,()=>{ce(),ne&&ne()})};G?G(D,ce,Ae):Ae()}else s(D,m,_)},st=(p,m,_,I=!1,A=!1)=>{const{type:D,props:B,ref:N,children:M,dynamicChildren:R,shapeFlag:W,patchFlag:q,dirs:G}=p;if(N!=null&&pl(N,null,_,p,!0),W&256){m.ctx.deactivate(p);return}const ne=W&1&&G,ce=!Uo(p);let Ae;if(ce&&(Ae=B&&B.onVnodeBeforeUnmount)&&tn(Ae,m,p),W&6)T(p.component,_,I);else{if(W&128){p.suspense.unmount(_,I);return}ne&&vs(p,null,m,"beforeUnmount"),W&64?p.type.remove(p,m,_,A,fe,I):R&&(D!==bt||q>0&&q&64)?V(R,m,_,!1,!0):(D===bt&&q&384||!A&&W&16)&&V(M,m,_),I&&vn(p)}(ce&&(Ae=B&&B.onVnodeUnmounted)||ne)&&It(()=>{Ae&&tn(Ae,m,p),ne&&vs(p,null,m,"unmounted")},_)},vn=p=>{const{type:m,el:_,anchor:I,transition:A}=p;if(m===bt){ms(_,I);return}if(m===Fo){U(p);return}const D=()=>{r(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:B,delayLeave:N}=A,M=()=>B(_,D);N?N(p.el,D,M):M()}else D()},ms=(p,m)=>{let _;for(;p!==m;)_=d(p),r(p),p=_;r(m)},T=(p,m,_)=>{const{bum:I,scope:A,update:D,subTree:B,um:N}=p;I&&Lo(I),A.stop(),D&&(D.active=!1,st(B,p,m,_)),N&&It(N,m),It(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},V=(p,m,_,I=!1,A=!1,D=0)=>{for(let B=D;B<p.length;B++)st(p[B],m,_,I,A)},$=p=>p.shapeFlag&6?$(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),x=(p,m,_)=>{p==null?m._vnode&&st(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),td(),zp(),m._vnode=p},fe={p:y,um:st,m:Et,r:vn,mt:Ye,mc:w,pc:he,pbc:re,n:$,o:t};let Me,ae;return e&&([Me,ae]=e(fe)),{render:x,hydrate:Me,createApp:zw(x,Me)}}function ys({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lg(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Fn(r[i]),a.el=o.el),n||lg(o,a)),a.type===$a&&(a.el=o.el)}}function Gw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Qw=t=>t.__isTeleport,bt=Symbol(void 0),$a=Symbol(void 0),bi=Symbol(void 0),Fo=Symbol(void 0),ai=[];let qt=null;function ue(t=!1){ai.push(qt=t?null:[])}function Xw(){ai.pop(),qt=ai[ai.length-1]||null}let Ti=1;function ud(t){Ti+=t}function ug(t){return t.dynamicChildren=Ti>0?qt||sr:null,Xw(),Ti>0&&qt&&qt.push(t),t}function Ee(t,e,n,s,r,i){return ug(f(t,e,n,s,r,i,!0))}function Or(t,e,n,s,r){return ug(Te(t,e,n,s,r,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function Wr(t,e){return t.type===e.type&&t.key===e.key}const Ua="__vInternal",hg=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Xe(t)||qe(t)||oe(t)?{i:Dt,r:t,k:e,f:!!n}:t:null;function f(t,e=null,n=null,s=0,r=null,i=t===bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hg(e),ref:e&&Vo(e),scopeId:xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dt};return a?(Eu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),Ti>0&&!o&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const Te=Yw;function Yw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Nw)&&(t=bi),gl(t)){const a=gr(t,e,!0);return n&&Eu(a,n),Ti>0&&!i&&qt&&(a.shapeFlag&6?qt[qt.indexOf(t)]=a:qt.push(a)),a.patchFlag|=-2,a}if(u0(t)&&(t=t.__vccOpts),e){e=Jw(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=bs(a)),Re(c)&&($p(c)&&!X(c)&&(c=wt({},c)),e.style=ru(c))}const o=Xe(t)?1:yw(t)?128:Qw(t)?64:Re(t)?4:oe(t)?2:0;return f(t,e,n,s,r,o,i,!0)}function Jw(t){return t?$p(t)||Ua in t?wt({},t):t:null}function gr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?e0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hg(a),ref:e&&e.ref?n&&r?X(r)?r.concat(Vo(e)):[r,Vo(e)]:Vo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Zw(t=" ",e=0){return Te($a,null,t,e)}function qi(t,e){const n=Te(Fo,null,t);return n.staticCount=e,n}function nn(t){return t==null||typeof t=="boolean"?Te(bi):X(t)?Te(bt,null,t.slice()):typeof t=="object"?Fn(t):Te($a,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function Eu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Eu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ua in e)?e._ctx=Dt:r===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),s&64?(n=16,e=[Zw(e)]):n=8);t.children=e,t.shapeFlag|=n}function e0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bs([e.class,s.class]));else if(r==="style")e.style=ru([e.style,s.style]);else if(Aa(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function tn(t,e,n,s=null){zt(t,e,7,[n,s])}const t0=cg();let n0=0;function s0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||t0,i={uid:n0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(s,r),emitsOptions:Wp(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dw.bind(null,i),t.ce&&t.ce(i),i}let je=null;const r0=()=>je||Dt,mr=t=>{je=t,t.scope.on()},Ps=()=>{je&&je.scope.off(),je=null};function dg(t){return t.vnode.shapeFlag&4}let Ci=!1;function i0(t,e=!1){Ci=e;const{props:n,children:s}=t.vnode,r=dg(t);Fw(t,n,r,e),jw(t,s);const i=r?o0(t,e):void 0;return Ci=!1,i}function o0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pr(new Proxy(t.ctx,Ow));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?c0(t):null;mr(t),Pr();const i=Jn(s,t,0,[t.props,r]);if(Nr(),Ps(),wp(i)){if(i.then(Ps,Ps),e)return i.then(o=>{hd(t,o,e)}).catch(o=>{Da(o,t,0)});t.asyncDep=i}else hd(t,i,e)}else fg(t,e)}function hd(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Bp(e)),fg(t,n)}let dd;function fg(t,e,n){const s=t.type;if(!t.render){if(!e&&dd&&!s.render){const r=s.template||_u(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=wt(wt({isCustomElement:i,delimiters:a},o),c);s.render=dd(r,l)}}t.render=s.render||Ht}mr(t),Pr(),xw(t),Nr(),Ps()}function a0(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function c0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=a0(t))},slots:t.slots,emit:t.emit,expose:e}}function Fa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bp(pr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oi)return oi[n](t)},has(e,n){return n in e||n in oi}}))}function l0(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function u0(t){return oe(t)&&"__vccOpts"in t}const Nt=(t,e)=>ow(t,e,Ci);function pg(t,e,n){const s=arguments.length;return s===2?Re(e)&&!X(e)?gl(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gl(n)&&(n=[n]),Te(t,e,n))}const h0=Symbol(""),d0=()=>Kt(h0),f0="3.2.47",p0="http://www.w3.org/2000/svg",Is=typeof document<"u"?document:null,fd=Is&&Is.createElement("template"),g0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Is.createElementNS(p0,t):Is.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Is.createTextNode(t),createComment:t=>Is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{fd.innerHTML=s?`<svg>${t}</svg>`:t;const a=fd.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function m0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function v0(t,e,n){const s=t.style,r=Xe(n);if(n&&!r){if(e&&!Xe(e))for(const i in e)n[i]==null&&ml(s,i,"");for(const i in n)ml(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const pd=/\s*!important$/;function ml(t,e,n){if(X(n))n.forEach(s=>ml(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=y0(t,e);pd.test(n)?t.setProperty(kr(s),n.replace(pd,""),"important"):t[s]=n}}const gd=["Webkit","Moz","ms"],Pc={};function y0(t,e){const n=Pc[e];if(n)return n;let s=fn(e);if(s!=="filter"&&s in t)return Pc[e]=s;s=Pa(s);for(let r=0;r<gd.length;r++){const i=gd[r]+s;if(i in t)return Pc[e]=i}return e}const md="http://www.w3.org/1999/xlink";function _0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(md,e.slice(6,e.length)):t.setAttributeNS(md,e,n);else{const i=p_(e);n==null||i&&!vp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function w0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=vp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Bn(t,e,n,s){t.addEventListener(e,n,s)}function E0(t,e,n,s){t.removeEventListener(e,n,s)}function I0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=b0(e);if(s){const l=i[e]=S0(s,r);Bn(t,a,l,c)}else o&&(E0(t,a,o,c),i[e]=void 0)}}const vd=/(?:Once|Passive|Capture)$/;function b0(t){let e;if(vd.test(t)){e={};let s;for(;s=t.match(vd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kr(t.slice(2)),e]}let Nc=0;const T0=Promise.resolve(),C0=()=>Nc||(T0.then(()=>Nc=0),Nc=Date.now());function S0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(A0(s,n.value),e,5,[s])};return n.value=t,n.attached=C0(),n}function A0(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const yd=/^on[a-z]/,R0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?m0(t,s,r):e==="style"?v0(t,n,s):Aa(e)?iu(e)||I0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):k0(t,e,s,r))?w0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_0(t,e,s,r))};function k0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&yd.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||yd.test(e)&&Xe(n)?!1:e in t}const vr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Lo(e,n):e};function P0(t){t.target.composing=!0}function _d(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ne={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=vr(r);const i=s||r.props&&r.props.type==="number";Bn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=il(a)),t._assign(a)}),n&&Bn(t,"change",()=>{t.value=t.value.trim()}),e||(Bn(t,"compositionstart",P0),Bn(t,"compositionend",_d),Bn(t,"change",_d))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=vr(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&il(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Eo={deep:!0,created(t,e,n){t._assign=vr(n),Bn(t,"change",()=>{const s=t._modelValue,r=gg(t),i=t.checked,o=t._assign;if(X(s)){const a=yp(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(Ra(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(mg(t,i))})},mounted:wd,beforeUpdate(t,e,n){t._assign=vr(n),wd(t,e,n)}};function wd(t,{value:e,oldValue:n},s){t._modelValue=e,X(e)?t.checked=yp(e,s.props.value)>-1:Ra(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=dr(e,mg(t,!0)))}const Wn={created(t,{value:e},n){t.checked=dr(e,n.props.value),t._assign=vr(n),Bn(t,"change",()=>{t._assign(gg(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=vr(s),e!==n&&(t.checked=dr(e,s.props.value))}};function gg(t){return"_value"in t?t._value:t.value}function mg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const _n={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Gr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Gr(t,!0),s.enter(t)):s.leave(t,()=>{Gr(t,!1)}):Gr(t,e))},beforeUnmount(t,{value:e}){Gr(t,e)}};function Gr(t,e){t.style.display=e?t._vod:"none"}const N0=wt({patchProp:R0},g0);let Ed;function D0(){return Ed||(Ed=Kw(N0))}const O0=(...t)=>{const e=D0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=x0(s);if(!r)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function x0(t){return Xe(t)?document.querySelector(t):t}var M0=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let vg;const Va=t=>vg=t,yg=Symbol();function vl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ci;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ci||(ci={}));function L0(){const t=Tp(!0),e=t.run(()=>J({}));let n=[],s=[];const r=pr({install(i){Va(r),r._a=i,i.provide(yg,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!M0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const _g=()=>{};function Id(t,e,n,s=_g){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Cp()&&T_(r),r}function Qs(t,...e){t.slice().forEach(n=>{n(...e)})}function yl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];vl(r)&&vl(s)&&t.hasOwnProperty(n)&&!qe(s)&&!Yn(s)?t[n]=yl(r,s):t[n]=s}return t}const $0=Symbol();function U0(t){return!vl(t)||!t.hasOwnProperty($0)}const{assign:Un}=Object;function F0(t){return!!(qe(t)&&t.effect)}function V0(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=nw(n.state.value[t]);return Un(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=pr(Nt(()=>{Va(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=wg(t,l,e,n,s,!0),c}function wg(t,e,n={},s,r,i){let o;const a=Un({actions:{}},n),c={deep:!0};let l,u,h=pr([]),d=pr([]),g;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),J({});let y;function E(L){let w;l=u=!1,typeof L=="function"?(L(s.state.value[t]),w={type:ci.patchFunction,storeId:t,events:g}):(yl(s.state.value[t],L),w={type:ci.patchObject,payload:L,storeId:t,events:g});const O=y=Symbol();mu().then(()=>{y===O&&(l=!0)}),u=!0,Qs(h,w,s.state.value[t])}const b=i?function(){const{state:w}=n,O=w?w():{};this.$patch(re=>{Un(re,O)})}:_g;function k(){o.stop(),h=[],d=[],s._s.delete(t)}function S(L,w){return function(){Va(s);const O=Array.from(arguments),re=[],ye=[];function tt(Oe){re.push(Oe)}function At(Oe){ye.push(Oe)}Qs(d,{args:O,name:L,store:z,after:tt,onError:At});let Ye;try{Ye=w.apply(this&&this.$id===t?this:z,O)}catch(Oe){throw Qs(ye,Oe),Oe}return Ye instanceof Promise?Ye.then(Oe=>(Qs(re,Oe),Oe)).catch(Oe=>(Qs(ye,Oe),Promise.reject(Oe))):(Qs(re,Ye),Ye)}}const U={_p:s,$id:t,$onAction:Id.bind(null,d),$patch:E,$reset:b,$subscribe(L,w={}){const O=Id(h,L,w.detached,()=>re()),re=o.run(()=>rn(()=>s.state.value[t],ye=>{(w.flush==="sync"?u:l)&&L({storeId:t,type:ci.direct,events:g},ye)},Un({},c,w)));return O},$dispose:k},z=Dr(U);s._s.set(t,z);const Q=s._e.run(()=>(o=Tp(),o.run(()=>e())));for(const L in Q){const w=Q[L];if(qe(w)&&!F0(w)||Yn(w))i||(v&&U0(w)&&(qe(w)?w.value=v[L]:yl(w,v[L])),s.state.value[t][L]=w);else if(typeof w=="function"){const O=S(L,w);Q[L]=O,a.actions[L]=w}}return Un(z,Q),Un(ge(z),Q),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:L=>{E(w=>{Un(w,L)})}}),s._p.forEach(L=>{Un(z,o.run(()=>L({store:z,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(z.$state,v),l=!0,u=!0,z}function B0(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=r0();return a=a||l&&Kt(yg,null),a&&Va(a),a=vg,a._s.has(s)||(i?wg(s,e,r,a):V0(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const Eg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},j0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Eg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):j0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new q0;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class q0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H0=function(t){const e=Eg(t);return Ig.encodeByteArray(e,!0)},ea=function(t){return H0(t).replace(/\./g,"")},bg=function(t){try{return Ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function z0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const K0=()=>z0().__FIREBASE_DEFAULTS__,W0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},G0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bg(t[1]);return e&&JSON.parse(e)},Ba=()=>{try{return K0()||W0()||G0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tg=t=>{var e,n;return(n=(e=Ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cg=t=>{const e=Tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Q0=()=>{var t;return(t=Ba())===null||t===void 0?void 0:t.config},Sg=t=>{var e;return(e=Ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class X0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ag(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ea(JSON.stringify(n)),ea(JSON.stringify(o)),a].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function J0(){var t;const e=(t=Ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Z0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tE(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nE(){try{return typeof indexedDB=="object"}catch{return!1}}function sE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const rE="FirebaseError";class gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rE,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?iE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new gn(r,a,s)}}function iE(t,e){return t.replace(oE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const oE=/\{\$([^}]+)}/g;function aE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(bd(i)&&bd(o)){if(!ta(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function bd(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cE(t,e){const n=new lE(t,e);return n.subscribe.bind(n)}class lE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");uE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Dc),r.error===void 0&&(r.error=Dc),r.complete===void 0&&(r.complete=Dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class rs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class hE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new X0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fE(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dE(t){return t===ws?void 0:t}function fE(t){return t.instantiationMode==="EAGER"}/**
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
 */class pE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const gE={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},mE=ve.INFO,vE={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},yE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=vE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Iu{constructor(e){this.name=e,this._logLevel=mE,this._logHandler=yE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const _E=(t,e)=>e.some(n=>t instanceof n);let Td,Cd;function wE(){return Td||(Td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EE(){return Cd||(Cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rg=new WeakMap,_l=new WeakMap,kg=new WeakMap,Oc=new WeakMap,bu=new WeakMap;function IE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rg.set(n,t)}).catch(()=>{}),bu.set(e,t),e}function bE(t){if(_l.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_l.set(t,e)}let wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TE(t){wl=t(wl)}function CE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xc(this),e,...n);return kg.set(s,e.sort?e.sort():[e]),Zn(s)}:EE().includes(t)?function(...e){return t.apply(xc(this),e),Zn(Rg.get(this))}:function(...e){return Zn(t.apply(xc(this),e))}}function SE(t){return typeof t=="function"?CE(t):(t instanceof IDBTransaction&&bE(t),_E(t,wE())?new Proxy(t,wl):t)}function Zn(t){if(t instanceof IDBRequest)return IE(t);if(Oc.has(t))return Oc.get(t);const e=SE(t);return e!==t&&(Oc.set(t,e),bu.set(e,t)),e}const xc=t=>bu.get(t);function AE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Zn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Zn(o.result),c.oldVersion,c.newVersion,Zn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const RE=["get","getKey","getAll","getAllKeys","count"],kE=["put","add","delete","clear"],Mc=new Map;function Sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=kE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||RE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Mc.set(e,i),i}TE(t=>({...t,get:(e,n,s)=>Sd(e,n)||t.get(e,n,s),has:(e,n)=>!!Sd(e,n)||t.has(e,n)}));/**
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
 */class PE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function NE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const El="@firebase/app",Ad="0.9.9";/**
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
 */const xs=new Iu("@firebase/app"),DE="@firebase/app-compat",OE="@firebase/analytics-compat",xE="@firebase/analytics",ME="@firebase/app-check-compat",LE="@firebase/app-check",$E="@firebase/auth",UE="@firebase/auth-compat",FE="@firebase/database",VE="@firebase/database-compat",BE="@firebase/functions",jE="@firebase/functions-compat",qE="@firebase/installations",HE="@firebase/installations-compat",zE="@firebase/messaging",KE="@firebase/messaging-compat",WE="@firebase/performance",GE="@firebase/performance-compat",QE="@firebase/remote-config",XE="@firebase/remote-config-compat",YE="@firebase/storage",JE="@firebase/storage-compat",ZE="@firebase/firestore",eI="@firebase/firestore-compat",tI="firebase",nI="9.21.0";/**
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
 */const Il="[DEFAULT]",sI={[El]:"fire-core",[DE]:"fire-core-compat",[xE]:"fire-analytics",[OE]:"fire-analytics-compat",[LE]:"fire-app-check",[ME]:"fire-app-check-compat",[$E]:"fire-auth",[UE]:"fire-auth-compat",[FE]:"fire-rtdb",[VE]:"fire-rtdb-compat",[BE]:"fire-fn",[jE]:"fire-fn-compat",[qE]:"fire-iid",[HE]:"fire-iid-compat",[zE]:"fire-fcm",[KE]:"fire-fcm-compat",[WE]:"fire-perf",[GE]:"fire-perf-compat",[QE]:"fire-rc",[XE]:"fire-rc-compat",[YE]:"fire-gcs",[JE]:"fire-gcs-compat",[ZE]:"fire-fst",[eI]:"fire-fst-compat","fire-js":"fire-js",[tI]:"fire-js-all"};/**
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
 */const na=new Map,bl=new Map;function rI(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if(bl.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;bl.set(e,t);for(const n of na.values())rI(n,t);return!0}function ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const iI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},es=new Hi("app","Firebase",iI);/**
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
 */class oI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const js=nI;function Pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Il,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw es.create("bad-app-name",{appName:String(r)});if(n||(n=Q0()),!n)throw es.create("no-options");const i=na.get(r);if(i){if(ta(n,i.options)&&ta(s,i.config))return i;throw es.create("duplicate-app",{appName:r})}const o=new pE(r);for(const c of bl.values())o.addComponent(c);const a=new oI(n,s,o);return na.set(r,a),a}function Tu(t=Il){const e=na.get(t);if(!e&&t===Il)return Pg();if(!e)throw es.create("no-app",{appName:t});return e}function ln(t,e,n){var s;let r=(s=sI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Ms(new rs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",cI=1,Si="firebase-heartbeat-store";let Lc=null;function Ng(){return Lc||(Lc=AE(aI,cI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Si)}}}).catch(t=>{throw es.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function lI(t){try{return(await Ng()).transaction(Si).objectStore(Si).get(Dg(t))}catch(e){if(e instanceof gn)xs.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function Rd(t,e){try{const s=(await Ng()).transaction(Si,"readwrite");return await s.objectStore(Si).put(e,Dg(t)),s.done}catch(n){if(n instanceof gn)xs.warn(n.message);else{const s=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(s.message)}}}function Dg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uI=1024,hI=30*24*60*60*1e3;class dI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=hI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kd(),{heartbeatsToSend:n,unsentEntries:s}=fI(this._heartbeatsCache.heartbeats),r=ea(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function kd(){return new Date().toISOString().substring(0,10)}function fI(t,e=uI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Pd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nE()?sE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pd(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gI(t){Ms(new rs("platform-logger",e=>new PE(e),"PRIVATE")),Ms(new rs("heartbeat",e=>new dI(e),"PRIVATE")),ln(El,Ad,t),ln(El,Ad,"esm2017"),ln("fire-js","")}gI("");var mI="firebase",vI="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(mI,vI,"app");var yI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Cu=Cu||{},te=yI||self;function sa(){}function qa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ki(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _I(t){return Object.prototype.hasOwnProperty.call(t,$c)&&t[$c]||(t[$c]=++wI)}var $c="closure_uid_"+(1e9*Math.random()>>>0),wI=0;function EI(t,e,n){return t.call.apply(t.bind,arguments)}function II(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=EI:dt=II,dt.apply(null,arguments)}function Io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ls(){this.s=this.s,this.o=this.o}var bI=0;ls.prototype.s=!1;ls.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),bI!=0)&&_I(this)};ls.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Og=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Su(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Nd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qa(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var TI=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",sa,e),te.removeEventListener("test",sa,e)}catch{}return t}();function ra(t){return/^[\s\xa0]*$/.test(t)}var Dd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Uc(t,e){return t<e?-1:t>e?1:0}function Ha(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function on(t){return Ha().indexOf(t)!=-1}function Au(t){return Au[" "](t),t}Au[" "]=sa;function xg(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var CI=on("Opera"),yr=on("Trident")||on("MSIE"),Mg=on("Edge"),Tl=Mg||yr,Lg=on("Gecko")&&!(Ha().toLowerCase().indexOf("webkit")!=-1&&!on("Edge"))&&!(on("Trident")||on("MSIE"))&&!on("Edge"),SI=Ha().toLowerCase().indexOf("webkit")!=-1&&!on("Edge");function $g(){var t=te.document;return t?t.documentMode:void 0}var ia;e:{var Fc="",Vc=function(){var t=Ha();if(Lg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mg)return/Edge\/([\d\.]+)/.exec(t);if(yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SI)return/WebKit\/(\S+)/.exec(t);if(CI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vc&&(Fc=Vc?Vc[1]:""),yr){var Bc=$g();if(Bc!=null&&Bc>parseFloat(Fc)){ia=String(Bc);break e}}ia=Fc}var AI={};function RI(){return xg(AI,9,function(){let t=0;const e=Dd(String(ia)).split("."),n=Dd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Uc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Uc(r[2].length==0,i[2].length==0)||Uc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Cl;if(te.document&&yr){var Od=$g();Cl=Od||parseInt(ia,10)||void 0}else Cl=void 0;var kI=Cl;function Ai(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lg){e:{try{Au(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ai.$.h.call(this)}}et(Ai,ft);var PI={2:"touch",3:"pen",4:"mouse"};Ai.prototype.h=function(){Ai.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wi="closure_listenable_"+(1e6*Math.random()|0),NI=0;function DI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++NI,this.fa=this.ia=!1}function za(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ru(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ug(t){const e={};for(const n in t)e[n]=t[n];return e}const xd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<xd.length;i++)n=xd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ka(t){this.src=t,this.g={},this.h=0}Ka.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Al(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new DI(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Sl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Og(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(za(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Al(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var ku="closure_lm_"+(1e6*Math.random()|0),jc={};function Vg(t,e,n,s,r){if(s&&s.once)return jg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vg(t,e[i],n,s,r);return null}return n=Du(n),t&&t[Wi]?t.O(e,n,Ki(s)?!!s.capture:!!s,r):Bg(t,e,n,!1,s,r)}function Bg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ki(r)?!!r.capture:!!r,a=Nu(t);if(a||(t[ku]=a=new Ka(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=OI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)TI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Hg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OI(){function t(n){return e.call(t.src,t.listener,n)}const e=xI;return t}function jg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)jg(t,e[i],n,s,r);return null}return n=Du(n),t&&t[Wi]?t.P(e,n,Ki(s)?!!s.capture:!!s,r):Bg(t,e,n,!0,s,r)}function qg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)qg(t,e[i],n,s,r);else s=Ki(s)?!!s.capture:!!s,n=Du(n),t&&t[Wi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Al(i,n,s,r),-1<n&&(za(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Al(e,n,s,r)),(n=-1<t?e[t]:null)&&Pu(n))}function Pu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wi])Sl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Hg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Nu(e))?(Sl(n,t),n.h==0&&(n.src=null,e[ku]=null)):za(t)}}}function Hg(t){return t in jc?jc[t]:jc[t]="on"+t}function xI(t,e){if(t.fa)t=!0;else{e=new Ai(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Pu(t),t=n.call(s,e)}return t}function Nu(t){return t=t[ku],t instanceof Ka?t:null}var qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Du(t){return typeof t=="function"?t:(t[qc]||(t[qc]=function(e){return t.handleEvent(e)}),t[qc])}function Ze(){ls.call(this),this.i=new Ka(this),this.S=this,this.J=null}et(Ze,ls);Ze.prototype[Wi]=!0;Ze.prototype.removeEventListener=function(t,e,n,s){qg(this,t,e,n,s)};function ot(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var r=e;e=new ft(s,t),Fg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=bo(o,s,!0,e)&&r}if(o=e.g=t,r=bo(o,s,!0,e)&&r,r=bo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=bo(o,s,!1,e)&&r}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)za(n[s]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ze.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function bo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Sl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ou=te.JSON.stringify;function MI(){var t=Wg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LI{constructor(){this.h=this.g=null}add(e,n){const s=zg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var zg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $I,t=>t.reset());class $I{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UI(t){te.setTimeout(()=>{throw t},0)}function Kg(t,e){Rl||FI(),kl||(Rl(),kl=!0),Wg.add(t,e)}var Rl;function FI(){var t=te.Promise.resolve(void 0);Rl=function(){t.then(VI)}}var kl=!1,Wg=new LI;function VI(){for(var t;t=MI();){try{t.h.call(t.g)}catch(n){UI(n)}var e=zg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kl=!1}function Wa(t,e){Ze.call(this),this.h=t||1,this.g=e||te,this.j=dt(this.qb,this),this.l=Date.now()}et(Wa,Ze);F=Wa.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(xu(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){Wa.$.N.call(this),xu(this),delete this.g};function Mu(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Gg(t){t.g=Mu(()=>{t.g=null,t.i&&(t.i=!1,Gg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BI extends ls{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gg(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){ls.call(this),this.h=t,this.g={}}et(Ri,ls);var Md=[];function Qg(t,e,n,s){Array.isArray(n)||(n&&(Md[0]=n.toString()),n=Md);for(var r=0;r<n.length;r++){var i=Vg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Xg(t){Ru(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pu(e)},t),t.g={}}Ri.prototype.N=function(){Ri.$.N.call(this),Xg(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ga(){this.g=!0}Ga.prototype.Ea=function(){this.g=!1};function jI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function qI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function tr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zI(t,n)+(s?" "+s:"")})}function HI(t,e){t.info(function(){return"TIMEOUT: "+e})}Ga.prototype.info=function(){};function zI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ou(n)}catch{return e}}var qs={},Ld=null;function Qa(){return Ld=Ld||new Ze}qs.Ta="serverreachability";function Yg(t){ft.call(this,qs.Ta,t)}et(Yg,ft);function ki(t){const e=Qa();ot(e,new Yg(e))}qs.STAT_EVENT="statevent";function Jg(t,e){ft.call(this,qs.STAT_EVENT,t),this.stat=e}et(Jg,ft);function _t(t){const e=Qa();ot(e,new Jg(e,t))}qs.Ua="timingevent";function Zg(t,e){ft.call(this,qs.Ua,t),this.size=e}et(Zg,ft);function Gi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Xa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},em={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Lu(){}Lu.prototype.h=null;function $d(t){return t.h||(t.h=t.i())}function tm(){}var Qi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $u(){ft.call(this,"d")}et($u,ft);function Uu(){ft.call(this,"c")}et(Uu,ft);var Pl;function Ya(){}et(Ya,Lu);Ya.prototype.g=function(){return new XMLHttpRequest};Ya.prototype.i=function(){return{}};Pl=new Ya;function Xi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ri(this),this.P=KI,t=Tl?125:void 0,this.V=new Wa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new nm}function nm(){this.i=null,this.g="",this.h=!1}var KI=45e3,Nl={},oa={};F=Xi.prototype;F.setTimeout=function(t){this.P=t};function Dl(t,e,n){t.L=1,t.v=Za(Sn(e)),t.s=n,t.S=!0,sm(t,null)}function sm(t,e){t.G=Date.now(),Yi(t),t.A=Sn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),hm(n.i,"t",s),t.C=0,n=t.l.I,t.h=new nm,t.g=Dm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new BI(dt(t.Pa,t,t.g),t.O)),Qg(t.U,t.g,"readystatechange",t.nb),e=t.I?Ug(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ki(),jI(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&En(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const u=En(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Tl||this.g&&(this.h.h||this.g.ja()||Bd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ki(3):ki(2)),Ja(this);var n=this.g.da();this.aa=n;t:if(rm(this)){var s=Bd(this.g);t="";var r=s.length,i=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cs(this),li(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,qI(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ra(a)){var l=a;break t}}l=null}if(n=l)tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ol(this,n);else{this.i=!1,this.o=3,_t(12),Cs(this),li(this);break e}}this.S?(im(this,u,o),Tl&&this.i&&u==3&&(Qg(this.U,this.V,"tick",this.mb),this.V.start())):(tr(this.j,this.m,o,null),Ol(this,o)),u==4&&Cs(this),this.i&&!this.J&&(u==4?Rm(this.l,this):(this.i=!1,Yi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),Cs(this),li(this)}}}catch{}finally{}};function rm(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function im(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=WI(t,n),r==oa){e==4&&(t.o=4,_t(14),s=!1),tr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Nl){t.o=4,_t(15),tr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else tr(t.j,t.m,r,null),Ol(t,r);rm(t)&&r!=oa&&r!=Nl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),zu(e),e.L=!0,_t(11))):(tr(t.j,t.m,n,"[Invalid Chunked Response]"),Cs(t),li(t))}F.mb=function(){if(this.g){var t=En(this.g),e=this.g.ja();this.C<e.length&&(Ja(this),im(this,t,e),this.i&&t!=4&&Yi(this))}};function WI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?oa:(n=Number(e.substring(n,s)),isNaN(n)?Nl:(s+=1,s+n>e.length?oa:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.J=!0,Cs(this)};function Yi(t){t.Y=Date.now()+t.P,om(t,t.P)}function om(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gi(dt(t.lb,t),e)}function Ja(t){t.B&&(te.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(HI(this.j,this.A),this.L!=2&&(ki(),_t(17)),Cs(this),this.o=2,li(this)):om(this,this.Y-t)};function li(t){t.l.H==0||t.J||Rm(t.l,t)}function Cs(t){Ja(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,xu(t.V),Xg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Ol(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xl(n.h,t))){if(!t.K&&xl(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)la(n),nc(n);else break e;Hu(n),_t(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Gi(dt(n.ib,n),6e3));if(1>=pm(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ss(n,11)}else if((t.K||n.g==t)&&la(n),!ra(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fu(i,i.h),i.h=null))}if(s.F){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,xe(s.G,s.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Nm(s,s.I?s.oa:null,s.Y),o.K){gm(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ja(a),Yi(a)),s.g=o}else Sm(s);0<n.i.length&&sc(n)}else l[0]!="stop"&&l[0]!="close"||Ss(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ss(n,7):qu(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}ki(4)}catch{}}function GI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function QI(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function am(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QI(t),s=GI(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var cm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ns(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ns){this.h=e!==void 0?e:t.h,aa(this,t.j),this.s=t.s,this.g=t.g,ca(this,t.m),this.l=t.l,e=t.i;var n=new Pi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ud(this,n),this.o=t.o}else t&&(n=String(t).match(cm))?(this.h=!!e,aa(this,n[1]||"",!0),this.s=ni(n[2]||""),this.g=ni(n[3]||"",!0),ca(this,n[4]),this.l=ni(n[5]||"",!0),Ud(this,n[6]||"",!0),this.o=ni(n[7]||"")):(this.h=!!e,this.i=new Pi(null,this.h))}Ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(si(e,Fd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(si(e,Fd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(si(n,n.charAt(0)=="/"?ZI:JI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",si(n,tb)),t.join("")};function Sn(t){return new Ns(t)}function aa(t,e,n){t.j=n?ni(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ud(t,e,n){e instanceof Pi?(t.i=e,nb(t.i,t.h)):(n||(e=si(e,eb)),t.i=new Pi(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function Za(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ni(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function si(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fd=/[#\/\?@]/g,JI=/[#\?:]/g,ZI=/[#\?]/g,eb=/[#\?@]/g,tb=/#/g;function Pi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function us(t){t.g||(t.g=new Map,t.h=0,t.i&&XI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Pi.prototype;F.add=function(t,e){us(this),this.i=null,t=xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lm(t,e){us(t),e=xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function um(t,e){return us(t),e=xr(t,e),t.g.has(e)}F.forEach=function(t,e){us(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.sa=function(){us(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.Z=function(t){us(this);let e=[];if(typeof t=="string")um(this,t)&&(e=e.concat(this.g.get(xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return us(this),this.i=null,t=xr(this,t),um(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function hm(t,e,n){lm(t,e),0<n.length&&(t.i=null,t.g.set(xr(t,e),Su(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nb(t,e){e&&!t.j&&(us(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(lm(this,s),hm(this,r,n))},t)),t.j=e}var sb=class{constructor(t,e){this.h=t,this.g=e}};function dm(t){this.l=t||rb,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rb=10;function fm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pm(t){return t.h?1:t.g?t.g.size:0}function xl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fu(t,e){t.g?t.g.add(e):t.h=e}function gm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}dm.prototype.cancel=function(){if(this.i=mm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Su(t.i)}function Vu(){}Vu.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};Vu.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function ib(){this.g=new Vu}function ob(t,e,n){const s=n||"";try{am(t,function(r,i){let o=r;Ki(r)&&(o=Ou(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ab(t,e){const n=new Ga;if(te.Image){const s=new Image;s.onload=Io(To,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Io(To,n,s,"TestLoadImage: error",!1,e),s.onabort=Io(To,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Io(To,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function To(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ji(t){this.l=t.fc||null,this.j=t.ob||!1}et(Ji,Lu);Ji.prototype.g=function(){return new ec(this.l,this.j)};Ji.prototype.i=function(t){return function(){return t}}({});function ec(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(ec,Ze);var Bu=0;F=ec.prototype;F.open=function(t,e){if(this.readyState!=Bu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ni(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=Bu};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zi(this):Ni(this),this.readyState==3&&vm(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,Zi(this))};F.Ya=function(t){this.g&&(this.response=t,Zi(this))};F.ka=function(){this.g&&Zi(this)};function Zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ni(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ni(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var cb=te.JSON.parse;function Ue(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ym,this.L=this.M=!1}et(Ue,Ze);var ym="",lb=/^https?$/i,ub=["POST","PUT"];F=Ue.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pl.g(),this.C=this.u?$d(this.u):$d(Pl),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Vd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=te.FormData&&t instanceof te.FormData,!(0<=Og(ub,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Em(this),0<this.B&&((this.L=hb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Mu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Vd(this,i)}};function hb(t){return yr&&RI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Cu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function Vd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_m(t),tc(t)}function _m(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),tc(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tc(this,!0)),Ue.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?wm(this):this.kb())};F.kb=function(){wm(this)};function wm(t){if(t.h&&typeof Cu<"u"&&(!t.C[1]||En(t)!=4||t.da()!=2)){if(t.v&&En(t)==4)Mu(t.La,0,t);else if(ot(t,"readystatechange"),En(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(cm)[1]||null;if(!r&&te.self&&te.self.location){var i=te.self.location.protocol;r=i.substr(0,i.length-1)}s=!lb.test(r?r.toLowerCase():"")}n=s}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var o=2<En(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",_m(t)}}finally{tc(t)}}}}function tc(t,e){if(t.g){Em(t);const n=t.g,s=t.C[0]?sa:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=s}catch{}}}function Em(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function En(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cb(e)}};function Bd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ym:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Im(t){let e="";return Ru(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ju(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Im(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Qr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bm(t){this.Ga=0,this.i=[],this.j=new Ga,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qr("baseRetryDelayMs",5e3,t),this.hb=Qr("retryDelaySeedMs",1e4,t),this.eb=Qr("forwardChannelMaxRetries",2,t),this.xa=Qr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new dm(t&&t.concurrentRequestLimit),this.Ja=new ib,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}F=bm.prototype;F.qa=8;F.H=1;function qu(t){if(Tm(t),t.H==3){var e=t.W++,n=Sn(t.G);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),eo(t,n),e=new Xi(t,t.j,e,void 0),e.L=2,e.v=Za(Sn(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Dm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yi(e)}Pm(t)}function nc(t){t.g&&(zu(t),t.g.cancel(),t.g=null)}function Tm(t){nc(t),t.u&&(te.clearTimeout(t.u),t.u=null),la(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function sc(t){fm(t.h)||t.m||(t.m=!0,Kg(t.Na,t),t.C=0)}function db(t,e){return pm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Gi(dt(t.Na,t,e),km(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Xi(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Ug(i),Fg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cm(this,r,e),n=Sn(this.G),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),eo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Im(i)))+"&"+e:this.o&&ju(n,this.o,i)),Fu(this.h,r),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),r.ba=!0,Dl(r,n,null)):Dl(r,n,e),this.H=2}}else this.H==3&&(t?jd(this,t):this.i.length==0||fm(this.h)||jd(this))};function jd(t,e){var n;e?n=e.m:n=t.W++;const s=Sn(t.G);xe(s,"SID",t.J),xe(s,"RID",n),xe(s,"AID",t.V),eo(t,s),t.o&&t.s&&ju(s,t.o,t.s),n=new Xi(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Cm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fu(t.h,n),Dl(n,s,e)}function eo(t,e){t.ma&&Ru(t.ma,function(n,s){xe(e,s,n)}),t.l&&am({},function(n,s){xe(e,s,n)})}function Cm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?dt(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{ob(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Sm(t){t.g||t.u||(t.ba=1,Kg(t.Ma,t),t.A=0)}function Hu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Gi(dt(t.Ma,t),km(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,Am(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Gi(dt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,_t(10),nc(this),Am(this))};function zu(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function Am(t){t.g=new Xi(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Sn(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.M?"0":"1"),xe(e,"AID",t.V),xe(e,"TYPE","xmlhttp"),eo(t,e),t.o&&t.s&&ju(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Za(Sn(e)),n.s=null,n.S=!0,sm(n,t)}F.ib=function(){this.v!=null&&(this.v=null,nc(this),Hu(this),_t(19))};function la(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Rm(t,e){var n=null;if(t.g==e){la(t),zu(t),t.g=null;var s=2}else if(xl(t.h,e))n=e.F,gm(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Qa(),ot(s,new Zg(s,n)),sc(t)}else Sm(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&db(t,e)||s==2&&Hu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ss(t,5);break;case 4:Ss(t,10);break;case 3:Ss(t,6);break;default:Ss(t,2)}}}function km(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Ss(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=dt(t.pb,t);n||(n=new Ns("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||aa(n,"https"),Za(n)),ab(n.toString(),s)}else _t(2);t.H=0,t.l&&t.l.za(e),Pm(t),Tm(t)}F.pb=function(t){t?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Pm(t){if(t.H=0,t.pa=[],t.l){const e=mm(t.h);(e.length!=0||t.i.length!=0)&&(Nd(t.pa,e),Nd(t.pa,t.i),t.h.i.length=0,Su(t.i),t.i.length=0),t.l.ya()}}function Nm(t,e,n){var s=n instanceof Ns?Sn(n):new Ns(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ca(s,s.m);else{var r=te.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ns(null,void 0);s&&aa(i,s),e&&(i.g=e),r&&ca(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&xe(s,n,e),xe(s,"VER",t.qa),eo(t,s),s}function Dm(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new Ji({ob:!0})):new Ue(t.va),e.Oa(t.I),e}function Om(){}F=Om.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.Va=function(){};function ua(){if(yr&&!(10<=Number(kI)))throw Error("Environmental error: no available transport.")}ua.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Ze.call(this),this.g=new bm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ra(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ra(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Mr(this)}et(Mt,Ze);Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Nm(t,null,t.Y),sc(t)};Mt.prototype.close=function(){qu(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ou(t),t=n);e.i.push(new sb(e.fb++,t)),e.H==3&&sc(e)};Mt.prototype.N=function(){this.g.l=null,delete this.j,qu(this.g),delete this.g,Mt.$.N.call(this)};function xm(t){$u.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(xm,$u);function Mm(){Uu.call(this),this.status=1}et(Mm,Uu);function Mr(t){this.g=t}et(Mr,Om);Mr.prototype.Ba=function(){ot(this.g,"a")};Mr.prototype.Aa=function(t){ot(this.g,new xm(t))};Mr.prototype.za=function(t){ot(this.g,new Mm)};Mr.prototype.ya=function(){ot(this.g,"b")};function fb(){this.blockSize=-1}function Gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(Gt,fb);Gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Gt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Hc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Hc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Hc(this,s),r=0;break}}this.h=r,this.i+=e};Gt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ie(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var pb={};function Ku(t){return-128<=t&&128>t?xg(pb,t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function an(t){if(isNaN(t)||!isFinite(t))return or;if(0>t)return it(an(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ml;return new Ie(e,0)}function Lm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return it(Lm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=an(Math.pow(e,8)),s=or,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=an(Math.pow(e,i)),s=s.R(i).add(an(o))):(s=s.R(n),s=s.add(an(o)))}return s}var Ml=4294967296,or=Ku(0),Ll=Ku(1),qd=Ku(16777216);F=Ie.prototype;F.ea=function(){if(Ut(this))return-it(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ml+s)*e,e*=Ml}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(In(this))return"0";if(Ut(this))return"-"+it(this).toString(t);for(var e=an(Math.pow(t,6)),n=this,s="";;){var r=da(n,e).g;n=ha(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,In(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function In(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}F.X=function(t){return t=ha(this,t),Ut(t)?-1:In(t)?0:1};function it(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ie(n,~t.h).add(Ll)}F.abs=function(){return Ut(this)?it(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function ha(t,e){return t.add(it(e))}F.R=function(t){if(In(this)||In(t))return or;if(Ut(this))return Ut(t)?it(this).R(it(t)):it(it(this).R(t));if(Ut(t))return it(this.R(it(t)));if(0>this.X(qd)&&0>t.X(qd))return an(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Co(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Co(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Co(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Co(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ie(n,0)};function Co(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xr(t,e){this.g=t,this.h=e}function da(t,e){if(In(e))throw Error("division by zero");if(In(t))return new Xr(or,or);if(Ut(t))return e=da(it(t),e),new Xr(it(e.g),it(e.h));if(Ut(e))return e=da(t,it(e)),new Xr(it(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ll,s=e;0>=s.X(t);)n=Hd(n),s=Hd(s);var r=Xs(n,1),i=Xs(s,1);for(s=Xs(s,2),n=Xs(n,2);!In(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Xs(s,1),n=Xs(n,1)}return e=ha(t,r.R(e)),new Xr(r,e)}for(r=or;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=an(n),o=i.R(e);Ut(o)||0<o.X(t);)n-=s,i=an(n),o=i.R(e);In(i)&&(i=Ll),r=r.add(i),t=ha(t,o)}return new Xr(r,t)}F.gb=function(t){return da(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ie(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ie(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ie(n,this.h^t.h)};function Hd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ie(n,t.h)}function Xs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(r,t.h)}ua.prototype.createWebChannel=ua.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Xa.NO_ERROR=0;Xa.TIMEOUT=8;Xa.HTTP_ERROR=6;em.COMPLETE="complete";tm.EventType=Qi;Qi.OPEN="a";Qi.CLOSE="b";Qi.ERROR="c";Qi.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;Gt.prototype.digest=Gt.prototype.l;Gt.prototype.reset=Gt.prototype.reset;Gt.prototype.update=Gt.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=an;Ie.fromString=Lm;var gb=function(){return new ua},mb=function(){return Qa()},zc=Xa,vb=em,yb=qs,zd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_b=Ji,So=tm,wb=Ue,Eb=Gt,ar=Ie;const Kd="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Lr="9.21.0";/**
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
 */const Ls=new Iu("@firebase/firestore");function Wd(){return Ls.logLevel}function H(t,...e){if(Ls.logLevel<=ve.DEBUG){const n=e.map(Wu);Ls.debug(`Firestore (${Lr}): ${t}`,...n)}}function An(t,...e){if(Ls.logLevel<=ve.ERROR){const n=e.map(Wu);Ls.error(`Firestore (${Lr}): ${t}`,...n)}}function _r(t,...e){if(Ls.logLevel<=ve.WARN){const n=e.map(Wu);Ls.warn(`Firestore (${Lr}): ${t}`,...n)}}function Wu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function De(t,e){t||ee()}function ie(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ts{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $m{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ib{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class bb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tb{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ts;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ts,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ts)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new $m(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new ct(e)}}class Cb{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Sb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Cb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ab{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new Ab(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Um{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=kb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function wr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Qe(0,0))}static max(){return new se(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Di{constructor(e,n,s){n===void 0?n=0:n>e.length&&ee(),s===void 0?s=e.length-n:s>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Di{construct(e,n,s){return new Pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const Pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Di{construct(e,n,s){return new ht(e,n,s)}static isValidIdentifier(e){return Pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Pe.fromString(e))}static fromName(e){return new K(Pe.fromString(e).popFirst(5))}static empty(){return new K(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Pe(e.slice()))}}function Nb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=se.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new is(r,K.empty(),e)}function Db(t){return new is(t.readTime,t.key,-1)}class is{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new is(se.min(),K.empty(),-1)}static max(){return new is(se.max(),K.empty(),-1)}}function Ob(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function to(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==xb)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function no(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Gu.ct=-1;function rc(t){return t==null}function fa(t){return t===0&&1/t==-1/0}function Lb(t){return typeof t=="number"&&Number.isInteger(t)&&!fa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ao(this.root,e,this.comparator,!0)}}class Ao{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??rt.RED,this.left=r??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new rt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return rt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,s,r){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qd(this.data.getIterator())}getIteratorFrom(e){return new Qd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Qd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new pt(ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Vm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Vm("Invalid base64 string: "+r):r}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const $b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(t){if(De(!!t),typeof t=="string"){let e=0;const n=$b.exec(t);if(De(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xu(t){const e=t.mapValue.fields.__previous_value__;return Qu(e)?Xu(e):e}function Oi(t){const e=os(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class Ub{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qu(t)?4:Fb(t)?9007199254740991:10:ee()}function pn(t,e){if(t===e)return!0;const n=Us(t);if(n!==Us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=os(s.timestampValue),o=os(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return $s(s.bytesValue).isEqual($s(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ke(s.geoPointValue.latitude)===Ke(r.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ke(s.integerValue)===Ke(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ke(s.doubleValue),o=Ke(r.doubleValue);return i===o?fa(i)===fa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return wr(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Gd(i)!==Gd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pn(i[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function Mi(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function Er(t,e){if(t===e)return 0;const n=Us(t),s=Us(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ke(r.integerValue||r.doubleValue),a=Ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(Oi(t),Oi(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(r,i){const o=$s(r),a=$s(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=_e(o[c],a[c]);if(l!==0)return l}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=_e(Ke(r.latitude),Ke(i.latitude));return o!==0?o:_e(Ke(r.longitude),Ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Er(o[c],a[c]);if(l)return l}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ro.mapValue&&i===Ro.mapValue)return 0;if(r===Ro.mapValue)return 1;if(i===Ro.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=_e(a[u],l[u]);if(h!==0)return h;const d=Er(o[a[u]],c[l[u]]);if(d!==0)return d}return _e(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=os(t),s=os(e),r=_e(n.seconds,s.seconds);return r!==0?r:_e(n.nanos,s.nanos)}function Ir(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=os(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$l(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$l(s.fields[a])}`;return i+"}"}(t.mapValue):ee();var e,n}function Yd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ul(t){return!!t&&"integerValue"in t}function Yu(t){return!!t&&"arrayValue"in t}function Jd(t){return!!t&&"nullValue"in t}function Zd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ui(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(n)}setAll(e){let n=ht.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ui(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Bo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Hs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Tt(ui(this.value))}}function Bm(t){const e=[];return Hs(t.fields,(n,s)=>{const r=new ht([n]);if(Bo(s)){const i=Bm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ot(e)}/**
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
 */class lt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,se.min(),se.min(),se.min(),Tt.empty(),0)}static newFoundDocument(e,n,s,r){return new lt(e,1,n,se.min(),s,r,0)}static newNoDocument(e,n){return new lt(e,2,n,se.min(),se.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,se.min(),se.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pa{constructor(e,n){this.position=e,this.inclusive=n}}function ef(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Er(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function tf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jm{}class We extends jm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new jb(e,n,s):n==="array-contains"?new zb(e,s):n==="in"?new Kb(e,s):n==="not-in"?new Wb(e,s):n==="array-contains-any"?new Gb(e,s):new We(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new qb(e,s):new Hb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Er(n,this.value)):n!==null&&Us(this.value)===Us(n)&&this.matchesComparison(Er(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qt extends jm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Qt(e,n)}matches(e){return qm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qm(t){return t.op==="and"}function Hm(t){return Bb(t)&&qm(t)}function Bb(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function Fl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Ir(t.value);if(Hm(t))return t.filters.map(e=>Fl(e)).join(",");{const e=t.filters.map(n=>Fl(n)).join(",");return`${t.op}(${e})`}}function zm(t,e){return t instanceof We?function(n,s){return s instanceof We&&n.op===s.op&&n.field.isEqual(s.field)&&pn(n.value,s.value)}(t,e):t instanceof Qt?function(n,s){return s instanceof Qt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&zm(i,s.filters[o]),!0):!1}(t,e):void ee()}function Km(t){return t instanceof We?function(e){return`${e.field.canonicalString()} ${e.op} ${Ir(e.value)}`}(t):t instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Km).join(" ,")+"}"}(t):"Filter"}class jb extends We{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class qb extends We{constructor(e,n){super(e,"in",n),this.keys=Wm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hb extends We{constructor(e,n){super(e,"not-in",n),this.keys=Wm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class zb extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yu(n)&&Mi(n.arrayValue,this.value)}}class Kb extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mi(this.value.arrayValue,n)}}class Wb extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mi(this.value.arrayValue,n)}}class Gb extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Mi(this.value.arrayValue,s))}}/**
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
 */class Qb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function nf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Qb(t,e,n,s,r,i,o)}function Ju(t){const e=ie(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Fl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ir(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ir(s)).join(",")),e.ft=n}return e.ft}function Zu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Vb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tf(t.startAt,e.startAt)&&tf(t.endAt,e.endAt)}function Vl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class so{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Xb(t,e,n,s,r,i,o,a){return new so(t,e,n,s,r,i,o,a)}function Gm(t){return new so(t)}function sf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function eh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Xm(t){return t.collectionGroup!==null}function cr(t){const e=ie(t);if(e.dt===null){e.dt=[];const n=eh(e),s=Qm(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new hi(n)),e.dt.push(new hi(ht.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new hi(ht.keyField(),i))}}}return e.dt}function Rn(t){const e=ie(t);if(!e._t)if(e.limitType==="F")e._t=nf(e.path,e.collectionGroup,cr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of cr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new hi(i.field,o))}const s=e.endAt?new pa(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new pa(e.startAt.position,e.startAt.inclusive):null;e._t=nf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Bl(t,e){e.getFirstInequalityField(),eh(t);const n=t.filters.concat([e]);return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jl(t,e,n){return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ic(t,e){return Zu(Rn(t),Rn(e))&&t.limitType===e.limitType}function Ym(t){return`${Ju(Rn(t))}|lt:${t.limitType}`}function ql(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Km(s)).join(", ")}]`),rc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ir(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ir(s)).join(",")),`Target(${n})`}(Rn(t))}; limitType=${t.limitType})`}function oc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):K.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of cr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ef(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,cr(n),s)||n.endAt&&!function(r,i,o){const a=ef(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,cr(n),s))}(t,e)}function Yb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jm(t){return(e,n)=>{let s=!1;for(const r of cr(t)){const i=Jb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Jb(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Er(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ee()}}/**
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
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Fm(this.inner)}size(){return this.innerSize}}/**
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
 */const Zb=new $e(K.comparator);function kn(){return Zb}const Zm=new $e(K.comparator);function ri(...t){let e=Zm;for(const n of t)e=e.insert(n.key,n);return e}function ev(t){let e=Zm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function As(){return di()}function tv(){return di()}function di(){return new $r(t=>t.toString(),(t,e)=>t.isEqual(e))}const e1=new $e(K.comparator),t1=new pt(K.comparator);function le(...t){let e=t1;for(const n of t)e=e.add(n);return e}const n1=new pt(_e);function s1(){return n1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function sv(t){return{integerValue:""+t}}function r1(t,e){return Lb(e)?sv(e):nv(t,e)}/**
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
 */class ac{constructor(){this._=void 0}}function i1(t,e,n){return t instanceof ga?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Qu(r)&&(r=Xu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Li?iv(t,e):t instanceof $i?ov(t,e):function(s,r){const i=rv(s,r),o=rf(i)+rf(s.wt);return Ul(i)&&Ul(s.wt)?sv(o):nv(s.serializer,o)}(t,e)}function o1(t,e,n){return t instanceof Li?iv(t,e):t instanceof $i?ov(t,e):n}function rv(t,e){return t instanceof ma?Ul(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ga extends ac{}class Li extends ac{constructor(e){super(),this.elements=e}}function iv(t,e){const n=av(e);for(const s of t.elements)n.some(r=>pn(r,s))||n.push(s);return{arrayValue:{values:n}}}class $i extends ac{constructor(e){super(),this.elements=e}}function ov(t,e){let n=av(e);for(const s of t.elements)n=n.filter(r=>!pn(r,s));return{arrayValue:{values:n}}}class ma extends ac{constructor(e,n){super(),this.serializer=e,this.wt=n}}function rf(t){return Ke(t.integerValue||t.doubleValue)}function av(t){return Yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function a1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Li&&s instanceof Li||n instanceof $i&&s instanceof $i?wr(n.elements,s.elements,pn):n instanceof ma&&s instanceof ma?pn(n.wt,s.wt):n instanceof ga&&s instanceof ga}(t.transform,e.transform)}class c1{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function cv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new th(t.key,Wt.none()):new ro(t.key,t.data,Wt.none());{const n=t.data,s=Tt.empty();let r=new pt(ht.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new hs(t.key,s,new Ot(r.toArray()),Wt.none())}}function l1(t,e,n){t instanceof ro?function(s,r,i){const o=s.value.clone(),a=af(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hs?function(s,r,i){if(!jo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=af(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(lv(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function fi(t,e,n,s){return t instanceof ro?function(r,i,o,a){if(!jo(r.precondition,i))return o;const c=r.value.clone(),l=cf(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof hs?function(r,i,o,a){if(!jo(r.precondition,i))return o;const c=cf(r.fieldTransforms,a,i),l=i.data;return l.setAll(lv(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return jo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function u1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=rv(s.transform,r||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(s.field,i))}return n||null}function of(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wr(n,s,(r,i)=>a1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends cc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hs extends cc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function af(t,e,n){const s=new Map;De(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,o1(o,a,n[r]))}return s}function cf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,i1(i,o,e))}return s}class th extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h1 extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class d1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&l1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=cv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,(n,s)=>of(n,s))&&wr(this.baseMutations,e.baseMutations,(n,s)=>of(n,s))}}class nh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){De(e.mutations.length===s.length);let r=e1;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new nh(e,n,s,r)}}/**
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
 */class f1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class p1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,de;function g1(t){switch(t){default:return ee();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function uv(t){if(t===void 0)return An("GRPC error has no .code"),C.UNKNOWN;switch(t){case ze.OK:return C.OK;case ze.CANCELLED:return C.CANCELLED;case ze.UNKNOWN:return C.UNKNOWN;case ze.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ze.INTERNAL:return C.INTERNAL;case ze.UNAVAILABLE:return C.UNAVAILABLE;case ze.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ze.NOT_FOUND:return C.NOT_FOUND;case ze.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ze.ABORTED:return C.ABORTED;case ze.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ze.DATA_LOSS:return C.DATA_LOSS;default:return ee()}}(de=ze||(ze={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class sh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ko}static getOrCreateInstance(){return ko===null&&(ko=new sh),ko}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ko=null;/**
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
 */function m1(){return new TextEncoder}/**
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
 */const v1=new ar([4294967295,4294967295],0);function lf(t){const e=m1().encode(t),n=new Eb;return n.update(e),new Uint8Array(n.digest())}function uf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([n,s],0),new ar([r,i],0)]}class rh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(s<0)throw new ii(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=ar.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(ar.fromNumber(s)));return r.compare(v1)===1&&(r=new ar([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=lf(e),[s,r]=uf(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new rh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=lf(e),[s,r]=uf(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new lc(se.min(),r,new $e(_e),kn(),le())}}class io{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new io(s,n,le(),le(),le())}}/**
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
 */class qo{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class hv{constructor(e,n){this.targetId=e,this.bt=n}}class dv{constructor(e,n,s=mt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class hf{constructor(){this.Vt=0,this.St=ff(),this.Dt=mt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=le(),n=le(),s=le();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ee()}}),new io(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=ff()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class y1{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=kn(),this.jt=df(),this.zt=new $e(_e)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(Vl(o))if(r===0){const a=new K(o.path);this.Jt(s,a,lt.newNoDocument(a,se.min()))}else De(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=sh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,g,v,y,E,b;const k={localCacheCount:u,existenceFilterCount:h.count},S=h.unchangedNames;return S&&(k.bloomFilter={applied:l===0,hashCount:(d=S==null?void 0:S.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(v=(g=S==null?void 0:S.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&y!==void 0?y:0,padding:(b=(E=S==null?void 0:S.bits)===null||E===void 0?void 0:E.padding)!==null&&b!==void 0?b:0}),k}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=$s(i).toUint8Array()}catch(u){if(u instanceof Vm)return _r("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new rh(c,o,a)}catch(u){return _r(u instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&Vl(a.target)){const c=new K(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,lt.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=le();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new lc(e,n,this.zt,this.Qt,s);return this.Qt=kn(),this.jt=df(),this.zt=new $e(_e),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new hf,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new pt(_e),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new hf),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function df(){return new $e(K.comparator)}function ff(){return new $e(K.comparator)}const _1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),w1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),E1=(()=>({and:"AND",or:"OR"}))();class I1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hl(t,e){return t.useProto3Json||rc(e)?e:{value:e}}function va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b1(t,e){return va(t,e.toTimestamp())}function un(t){return De(!!t),se.fromTimestamp(function(e){const n=os(e);return new Qe(n.seconds,n.nanos)}(t))}function ih(t,e){return function(n){return new Pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function pv(t){const e=Pe.fromString(t);return De(yv(e)),e}function zl(t,e){return ih(t.databaseId,e.path)}function Kc(t,e){const n=pv(e);if(n.get(1)!==t.databaseId.projectId)throw new j(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(gv(n))}function Kl(t,e){return ih(t.databaseId,e)}function T1(t){const e=pv(t);return e.length===4?Pe.emptyPath():gv(e)}function Wl(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gv(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pf(t,e,n){return{name:zl(t,e),fields:n.value.mapValue.fields}}function C1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(De(l===void 0||typeof l=="string"),mt.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),mt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?C.UNKNOWN:uv(c.code);return new j(l,c.message||"")}(o);n=new dv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Kc(t,s.document.name),i=un(s.document.updateTime),o=s.document.createTime?un(s.document.createTime):se.min(),a=new Tt({mapValue:{fields:s.document.fields}}),c=lt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new qo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Kc(t,s.document),i=s.readTime?un(s.readTime):se.min(),o=lt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new qo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Kc(t,s.document),i=s.removedTargetIds||[];n=new qo([],i,r,null)}else{if(!("filter"in e))return ee();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new p1(r,i),a=s.targetId;n=new hv(a,o)}}return n}function S1(t,e){let n;if(e instanceof ro)n={update:pf(t,e.key,e.value)};else if(e instanceof th)n={delete:zl(t,e.key)};else if(e instanceof hs)n={update:pf(t,e.key,e.data),updateMask:M1(e.fieldMask)};else{if(!(e instanceof h1))return ee();n={verify:zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ga)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Li)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $i)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ma)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw ee()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:b1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ee()}(t,e.precondition)),n}function A1(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?un(s.updateTime):un(r);return i.isEqual(se.min())&&(i=un(r)),new c1(i,s.transformResults||[])}(n,e))):[]}function R1(t,e){return{documents:[Kl(t,e.path)]}}function k1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Kl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return vv(Qt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Js(u.field),direction:D1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Hl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function P1(t){let e=T1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=mv(u);return h instanceof Qt&&Hm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new hi(Zs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,rc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new pa(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new pa(d,h)}(n.endAt)),Xb(e,r,o,i,a,"F",c,l)}function N1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Zs(e.unaryFilter.field);return We.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Zs(e.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zs(e.unaryFilter.field);return We.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Zs(e.unaryFilter.field);return We.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(e){return We.create(Zs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Qt.create(e.compositeFilter.filters.map(n=>mv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ee()}}(e.compositeFilter.op))}(t):ee()}function D1(t){return _1[t]}function O1(t){return w1[t]}function x1(t){return E1[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return ht.fromServerFormat(t.fieldPath)}function vv(t){return t instanceof We?function(e){if(e.op==="=="){if(Zd(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NAN"}};if(Jd(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zd(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NAN"}};if(Jd(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(e.field),op:O1(e.op),value:e.value}}}(t):t instanceof Qt?function(e){const n=e.getFilters().map(s=>vv(s));return n.length===1?n[0]:{compositeFilter:{op:x1(e.op),filters:n}}}(t):ee()}function M1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gn{constructor(e,n,s,r,i=se.min(),o=se.min(),a=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class L1{constructor(e){this.le=e}}function $1(t){const e=P1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jl(e,e.limit,"L"):e}/**
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
 */class U1{constructor(){this.sn=new F1}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(is.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(is.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class F1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new pt(Pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new pt(Pe.comparator)).toArray()}}/**
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
 */class br{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new br(0)}static kn(){return new br(-1)}}/**
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
 */class V1{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class B1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class j1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&fi(s.mutation,r,Ot.empty(),Qe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const r=As();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ri();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=kn();const o=di(),a=di();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof hs)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),fi(u.mutation,l,u.mutation.getFieldMask(),Qe.now())):o.set(l.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new B1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=di();let r=new $e((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ot.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||le()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=tv();u.forEach(d=>{if(!i.has(d)){const g=cv(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(As());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:ev(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=ri();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ri();return this.indexManager.getCollectionParents(e,r).next(o=>P.forEach(o,a=>{const c=function(l,u){return new so(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,lt.newInvalidDocument(l)))});let o=ri();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&fi(l.mutation,c,Ot.empty(),Qe.now()),oc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return P.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:un(s.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:$1(s.bundledQuery),readTime:un(s.readTime)}}(n)),P.resolve()}}/**
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
 */class H1{constructor(){this.overlays=new $e(K.comparator),this.hs=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=As();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=As(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=As(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=As(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return P.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new f1(n,s));let i=this.hs.get(n);i===void 0&&(i=le(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
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
 */class oh{constructor(){this.ls=new pt(Je.fs),this.ds=new pt(Je._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new Je(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new Je(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new K(new Pe([])),s=new Je(n,e),r=new Je(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new K(new Pe([])),s=new Je(n,e),r=new Je(n,e+1);let i=le();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Je{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return K.comparator(e.key,n.key)||_e(e.Es,n.Es)}static _s(e,n){return _e(e.Es,n.Es)||K.comparator(e.key,n.key)}}/**
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
 */class z1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new pt(Je.fs)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Je(n,0),r=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new pt(_e);return n.forEach(r=>{const i=new Je(r,0),o=new Je(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),P.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new Je(new K(i),0);let a=new pt(_e);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),P.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){De(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return P.forEach(n.mutations,r=>{const i=new Je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new Je(n,0),r=this.Rs.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K1{constructor(e){this.Ss=e,this.docs=new $e(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let s=kn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():lt.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=kn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Ob(Db(u),s)<=0||(r.has(u.key)||oc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ee()}Ds(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new W1(this)}getSize(e){return P.resolve(this.size)}}class W1 extends V1{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class G1{constructor(e){this.persistence=e,this.Cs=new $r(n=>Ju(n),Zu),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.xs=0,this.Ns=new oh,this.targetCount=0,this.ks=br.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),P.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new br(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.$n(n),P.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Ns.containsKey(n))}}/**
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
 */class Q1{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Gu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new G1(this),this.indexManager=new U1,this.remoteDocumentCache=function(s){return new K1(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new L1(n),this.Ls=new q1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new z1(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){H("MemoryPersistence","Starting transaction:",e);const r=new X1(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return P.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class X1 extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class ah{constructor(e){this.persistence=e,this.Gs=new oh,this.Qs=null}static js(e){return new ah(e)}get zs(){if(this.Qs)return this.Qs;throw ee()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.zs,s=>{const r=K.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,se.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return P.or([()=>P.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class ch{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=le(),r=le();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ch(e,n.fromCache,s,r)}}/**
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
 */class Y1{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(sf(n))return P.resolve(null);let s=Rn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=jl(n,null,"F"),s=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=le(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,jl(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return sf(n)||r.isEqual(se.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(Wd()<=ve.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ql(n)),this.zi(e,o,n,Nb(r,-1)))})}Qi(e,n){let s=new pt(Jm(e));return n.forEach((r,i)=>{oc(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return Wd()<=ve.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ql(n)),this.qi.getDocumentsMatchingQuery(e,n,is.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new $e(_e),this.Ji=new $r(i=>Ju(i),Zu),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function Z1(t,e,n,s){return new J1(t,e,n,s)}async function _v(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=le();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function eT(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=P.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(v=>{const y=c.docVersions.get(g);De(y!==null),v.version.compareTo(y)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=le();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function wv(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function tT(t,e){const n=ie(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(v,y,E){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,u)&&a.push(n.Fs.updateTargetData(i,g))});let c=kn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(nT(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(se.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function nT(t,e,n){let s=le(),r=le();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=kn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function sT(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function rT(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Gn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function Gl(t,e,n){const s=ie(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!no(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function gf(t,e,n){const s=ie(t);let r=se.min(),i=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),h=u.Ji.get(l);return h!==void 0?P.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,Rn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:se.min(),n?i:le())).next(a=>(iT(s,Yb(e),a),{documents:a,sr:i})))}function iT(t,e,n){let s=t.Yi.get(e)||se.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class mf{constructor(){this.activeTargetIds=s1()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oT{constructor(){this.Wr=new mf,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new mf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aT{Jr(e){}shutdown(){}}/**
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
 */class vf{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Po=null;function Wc(){return Po===null?Po=268435456+Math.round(2147483648*Math.random()):Po++,"0x"+Po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lT{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const at="WebChannelConnection";class uT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=Wc(),a=this.Io(e,n);H("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>(H("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw _r("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=cT[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=Wc();return new Promise((o,a)=>{const c=new wb;c.setWithCredentials(!0),c.listenOnce(vb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zc.NO_ERROR:const u=c.getResponseJson();H(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case zc.TIMEOUT:H(at,`RPC '${e}' ${i} timed out`),a(new j(C.DEADLINE_EXCEEDED,"Request time out"));break;case zc.HTTP_ERROR:const h=c.getStatus();if(H(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(E)>=0?E:C.UNKNOWN}(g.status);a(new j(v,g.message))}else a(new j(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(C.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(at,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);H(at,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Wc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gb(),a=mb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new _b({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");H(at,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new lT({io:y=>{d?H(at,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(H(at,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),H(at,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},ro:()=>u.close()}),v=(y,E,b)=>{y.listen(E,k=>{try{b(k)}catch(S){setTimeout(()=>{throw S},0)}})};return v(u,So.EventType.OPEN,()=>{d||H(at,`RPC '${e}' stream ${r} transport opened.`)}),v(u,So.EventType.CLOSE,()=>{d||(d=!0,H(at,`RPC '${e}' stream ${r} transport closed`),g.fo())}),v(u,So.EventType.ERROR,y=>{d||(d=!0,_r(at,`RPC '${e}' stream ${r} transport errored:`,y),g.fo(new j(C.UNAVAILABLE,"The operation could not be completed")))}),v(u,So.EventType.MESSAGE,y=>{var E;if(!d){const b=y.data[0];De(!!b);const k=b,S=k.error||((E=k[0])===null||E===void 0?void 0:E.error);if(S){H(at,`RPC '${e}' stream ${r} received error:`,S);const U=S.status;let z=function(L){const w=ze[L];if(w!==void 0)return uv(w)}(U),Q=S.message;z===void 0&&(z=C.INTERNAL,Q="Unknown error status: "+U+" with message "+S.message),d=!0,g.fo(new j(z,Q)),u.close()}else H(at,`RPC '${e}' stream ${r} received:`,b),g._o(b)}}),v(a,yb.STAT_EVENT,y=>{y.stat===zd.PROXY?H(at,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===zd.NOPROXY&&H(at,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new I1(t,!0)}/**
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
 */class Ev{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class Iv{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Ev(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new j(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hT extends Iv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=C1(this.serializer,e),s=function(r){if(!("targetChange"in r))return se.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?se.min():i.readTime?un(i.readTime):se.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=Wl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Vl(a)?{documents:R1(r,a)}:{query:k1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=fv(r,i.resumeToken);const c=Hl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(se.min())>0){o.readTime=va(r,i.snapshotVersion.toTimestamp());const c=Hl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=N1(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=Wl(this.serializer),n.removeTarget=e,this.zo(n)}}class dT extends Iv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=A1(e.writeResults,e.commitTime),s=un(e.commitTime);return this.listener.uu(s,n)}return De(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Wl(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>S1(this.serializer,s))};this.zo(n)}}/**
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
 */class fT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new j(C.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(C.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(C.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class pT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(An(n),this.wu=!1):H("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class gT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{zs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c.Au.add(4),await oo(c),c.Pu.set("Unknown"),c.Au.delete(4),await hc(c)}(this))})}),this.Pu=new pT(s,r)}}async function hc(t){if(zs(t))for(const e of t.Ru)await e(!0)}async function oo(t){for(const e of t.Ru)await e(!1)}function bv(t,e){const n=ie(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),hh(n)?uh(n):Ur(n).Uo()&&lh(n,e))}function Tv(t,e){const n=ie(t),s=Ur(n);n.Eu.delete(e),s.Uo()&&Cv(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():zs(n)&&n.Pu.set("Unknown"))}function lh(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ur(t).nu(e)}function Cv(t,e){t.bu.Lt(e),Ur(t).su(e)}function uh(t){t.bu=new y1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Ur(t).start(),t.Pu.mu()}function hh(t){return zs(t)&&!Ur(t).qo()&&t.Eu.size>0}function zs(t){return ie(t).Au.size===0}function Sv(t){t.bu=void 0}async function mT(t){t.Eu.forEach((e,n)=>{lh(t,e)})}async function vT(t,e){Sv(t),hh(t)?(t.Pu.pu(e),uh(t)):t.Pu.set("Unknown")}async function yT(t,e,n){if(t.Pu.set("Online"),e instanceof dv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ya(t,s)}else if(e instanceof qo?t.bu.Wt(e):e instanceof hv?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(se.min()))try{const s=await wv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(mt.EMPTY_BYTE_STRING,l.snapshotVersion)),Cv(r,a);const u=new Gn(l.target,a,c,l.sequenceNumber);lh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await ya(t,s)}}async function ya(t,e,n){if(!no(e))throw e;t.Au.add(1),await oo(t),t.Pu.set("Offline"),n||(n=()=>wv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await hc(t)})}function Av(t,e){return e().catch(n=>ya(t,n,e))}async function dc(t){const e=ie(t),n=as(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;_T(e);)try{const r=await sT(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,wT(e,r)}catch(r){await ya(e,r)}Rv(e)&&kv(e)}function _T(t){return zs(t)&&t.Tu.length<10}function wT(t,e){t.Tu.push(e);const n=as(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Rv(t){return zs(t)&&!as(t).qo()&&t.Tu.length>0}function kv(t){as(t).start()}async function ET(t){as(t).au()}async function IT(t){const e=as(t);for(const n of t.Tu)e.ou(n.mutations)}async function bT(t,e,n){const s=t.Tu.shift(),r=nh.from(s,e,n);await Av(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await dc(t)}async function TT(t,e){e&&as(t).ru&&await async function(n,s){if(r=s.code,g1(r)&&r!==C.ABORTED){const i=n.Tu.shift();as(n).Go(),await Av(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await dc(n)}var r}(t,e),Rv(t)&&kv(t)}async function yf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=zs(n);n.Au.add(3),await oo(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await hc(n)}async function CT(t,e){const n=ie(t);e?(n.Au.delete(2),await hc(n)):e||(n.Au.add(2),await oo(n),n.Pu.set("Unknown"))}function Ur(t){return t.Vu||(t.Vu=function(e,n,s){const r=ie(e);return r.lu(),new hT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:mT.bind(null,t),co:vT.bind(null,t),eu:yT.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),hh(t)?uh(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Sv(t))})),t.Vu}function as(t){return t.Su||(t.Su=function(e,n,s){const r=ie(e);return r.lu(),new dT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:ET.bind(null,t),co:TT.bind(null,t),cu:IT.bind(null,t),uu:bT.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await dc(t)):(await t.Su.stop(),t.Tu.length>0&&(H("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class dh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new dh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fh(t,e){if(An("AsyncQueue",`${e}: ${t}`),no(t))return new j(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class lr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=ri(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new lr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class _f{constructor(){this.Du=new $e(K.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):ee():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Tr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Tr(e,n,lr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class ST{constructor(){this.xu=void 0,this.listeners=[]}}class AT{constructor(){this.queries=new $r(e=>Ym(e),ic),this.onlineState="Unknown",this.Nu=new Set}}async function RT(t,e){const n=ie(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ST),r)try{i.xu=await n.onListen(s)}catch(o){const a=fh(o,`Initialization of query '${ql(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&ph(n)}async function kT(t,e){const n=ie(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function PT(t,e){const n=ie(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&ph(n)}function NT(t,e,n){const s=ie(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ph(t){t.Nu.forEach(e=>{e.next()})}class DT{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Tr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class Pv{constructor(e){this.key=e}}class Nv{constructor(e){this.key=e}}class OT{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=le(),this.mutatedKeys=le(),this.Zu=Jm(e),this.tc=new lr(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new _f,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=oc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?v!==y&&(s.track({type:3,doc:g}),E=!0):this.ic(d,g)||(s.track({type:2,doc:g}),E=!0,(c&&this.Zu(g,c)>0||l&&this.Zu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),E=!0):d&&!g&&(s.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(g?(o=o.add(g),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return g(h)-g(d)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new Tr(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new _f,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=le(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new Nv(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new Pv(s))}),n}ac(e){this.Ju=e.sr,this.Xu=le();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Tr.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class xT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class MT{constructor(e){this.key=e,this.lc=!1}}class LT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new $r(a=>Ym(a),ic),this._c=new Map,this.wc=new Set,this.mc=new $e(K.comparator),this.gc=new Map,this.yc=new oh,this.Ic={},this.Tc=new Map,this.Ec=br.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function $T(t,e){const n=WT(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await rT(n.localStore,Rn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await UT(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&bv(n.remoteStore,o)}return r}async function UT(t,e,n,s,r){t.Rc=(h,d,g)=>async function(v,y,E,b){let k=y.view.nc(E);k.ji&&(k=await gf(v.localStore,y.query,!1).then(({documents:z})=>y.view.nc(z,k)));const S=b&&b.targetChanges.get(y.targetId),U=y.view.applyChanges(k,v.isPrimaryClient,S);return Ef(v,y.targetId,U.uc),U.snapshot}(t,h,d,g);const i=await gf(t.localStore,e,!0),o=new OT(e,i.sr),a=o.nc(i.documents),c=io.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Ef(t,n,l.uc);const u=new xT(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function FT(t,e){const n=ie(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!ic(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Tv(n.remoteStore,s.targetId),Ql(n,s.targetId)}).catch(to)):(Ql(n,s.targetId),await Gl(n.localStore,s.targetId,!0))}async function VT(t,e,n){const s=GT(t);try{const r=await function(i,o){const a=ie(i),c=Qe.now(),l=o.reduce((d,g)=>d.add(g.key),le());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=kn(),v=le();return a.Xi.getEntries(d,l).next(y=>{g=y,g.forEach((E,b)=>{b.isValidDocument()||(v=v.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{u=y;const E=[];for(const b of o){const k=u1(b,u.get(b.key).overlayedDocument);k!=null&&E.push(new hs(b.key,k,Bm(k.value.mapValue),Wt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(y=>{h=y;const E=y.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,y.batchId,E)})}).then(()=>({batchId:h.batchId,changes:ev(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new $e(_e)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await ao(s,r.changes),await dc(s.remoteStore)}catch(r){const i=fh(r,"Failed to persist write");n.reject(i)}}async function Dv(t,e){const n=ie(t);try{const s=await tT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?De(o.lc):r.removedDocuments.size>0&&(De(o.lc),o.lc=!1))}),await ao(n,s,e)}catch(s){await to(s)}}function wf(t,e,n){const s=ie(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ie(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&ph(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function BT(t,e,n){const s=ie(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new $e(K.comparator);o=o.insert(i,lt.newNoDocument(i,se.min()));const a=le().add(i),c=new lc(se.min(),new Map,new $e(_e),o,a);await Dv(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),gh(s)}else await Gl(s.localStore,e,!1).then(()=>Ql(s,e,n)).catch(to)}async function jT(t,e){const n=ie(t),s=e.batch.batchId;try{const r=await eT(n.localStore,e);xv(n,s,null),Ov(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ao(n,r)}catch(r){await to(r)}}async function qT(t,e,n){const s=ie(t);try{const r=await function(i,o){const a=ie(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(De(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);xv(s,e,n),Ov(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ao(s,r)}catch(r){await to(r)}}function Ov(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function xv(t,e,n){const s=ie(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function Ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||Mv(t,s)})}function Mv(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Tv(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),gh(t))}function Ef(t,e,n){for(const s of n)s instanceof Pv?(t.yc.addReference(s.key,e),HT(t,s)):s instanceof Nv?(H("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||Mv(t,s.key)):ee()}function HT(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(H("SyncEngine","New document in limbo: "+n),t.wc.add(s),gh(t))}function gh(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new K(Pe.fromString(e)),s=t.Ec.next();t.gc.set(s,new MT(n)),t.mc=t.mc.insert(n,s),bv(t.remoteStore,new Gn(Rn(Gm(n.path)),s,"TargetPurposeLimboResolution",Gu.ct))}}async function ao(t,e,n){const s=ie(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ch.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,h=>P.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>P.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!no(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Hi.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);l.Hi=l.Hi.insert(h,v)}}}(s.localStore,i))}async function zT(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const s=await _v(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new j(C.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ao(n,s.tr)}}function KT(t,e){const n=ie(t),s=n.gc.get(e);if(s&&s.lc)return le().add(s.key);{let r=le();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function WT(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BT.bind(null,e),e.fc.eu=PT.bind(null,e.eventManager),e.fc.vc=NT.bind(null,e.eventManager),e}function GT(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qT.bind(null,e),e}class If{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Z1(this.persistence,new Y1,e.initialUser,this.serializer)}createPersistence(e){return new Q1(ah.js,this.serializer)}createSharedClientState(e){return new oT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>wf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zT.bind(null,this.syncEngine),await CT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new AT}createDatastore(e){const n=uc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new uT(r));var r;return function(i,o,a,c){return new fT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>wf(this.syncEngine,a,0),o=vf.D()?new vf:new aT,new gT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new LT(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);H("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await oo(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ct.UNAUTHENTICATED,this.clientId=Um.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=fh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await _v(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZT(t);H("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>yf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yf(e.remoteStore,i)),t._onlineComponents=e}function JT(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JT(n))throw n;_r("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new If)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Qc(t,new If);return t._offlineComponents}async function Lv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await bf(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await bf(t,new QT))),t._onlineComponents}function eC(t){return Lv(t).then(e=>e.syncEngine)}async function tC(t){const e=await Lv(t),n=e.eventManager;return n.onListen=$T.bind(null,e.syncEngine),n.onUnlisten=FT.bind(null,e.syncEngine),n}function nC(t,e,n={}){const s=new ts;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new XT({next:h=>{i.enqueueAndForget(()=>kT(r,u)),h.fromCache&&a.source==="server"?c.reject(new j(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new DT(o,l,{includeMetadataChanges:!0,Uu:!0});return RT(r,u)}(await tC(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;/**
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
 */function $v(t,e,n){if(!n)throw new j(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,s){if(e===!0&&s===!0)throw new j(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cf(t){if(!K.isDocumentKey(t))throw new j(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(K.isDocumentKey(t))throw new j(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function cs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fc(t);throw new j(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ib;switch(n.type){case"firstParty":return new Sb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tf.get(e);n&&(H("ComponentProvider","Removing Datastore"),Tf.delete(e),n.terminate())}(this),Promise.resolve()}}function rC(t,e,n,s={}){var r;const i=(t=cs(t,pc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&_r("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ct.MOCK_USER;else{o=Ag(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new j(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(c)}t._authCredentials=new bb(new $m(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Fr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class ns extends Fr{constructor(e,n,s){super(e,n,Gm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new K(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function iC(t,e,...n){if(t=Le(t),$v("collection","path",e),t instanceof pc){const s=Pe.fromString(e,...n);return Sf(s),new ns(t,null,s)}{if(!(t instanceof Ct||t instanceof ns))throw new j(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Sf(s),new ns(t.firestore,null,s)}}function Bt(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Um.A()),$v("doc","path",e),t instanceof pc){const s=Pe.fromString(e,...n);return Cf(s),new Ct(t,null,new K(s))}{if(!(t instanceof Ct||t instanceof ns))throw new j(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Cf(s),new Ct(t.firestore,t instanceof ns?t.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Ev(this,"async_queue_retry"),this.Yc=()=>{const n=Gc();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new ts;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!no(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw An("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=dh.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&ee()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class co extends pc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fv(this),this._firestoreClient.terminate()}}function aC(t,e){const n=typeof t=="object"?t:Tu(),s=typeof t=="string"?t:e||"(default)",r=ja(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Cg("firestore");i&&rC(r,...i)}return r}function Uv(t){return t._firestoreClient||Fv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fv(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new Ub(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new YT(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cr(mt.fromBase64String(e))}catch(n){throw new j(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cr(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this._methodName=e}}/**
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
 */class vh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const cC=/^__.*__$/;class lC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class Vv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class yh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return _a(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Bv(this.ua)&&cC.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class uC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||uc(e)}ga(e,n,s,r=!1){return new yh({ua:e,methodName:n,ma:s,path:ht.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _h(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new uC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hC(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);wh("Data must be an object, but it was:",o,s);const a=jv(s,o);let c,l;if(i.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Xl(e,h,n);if(!o.contains(d))throw new j(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Hv(u,d)||u.push(d)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new lC(new Tt(a),c,l)}class mc extends mh{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function dC(t,e,n,s){const r=t.ga(1,e,n);wh("Data must be an object, but it was:",r,s);const i=[],o=Tt.empty();Hs(s,(c,l)=>{const u=Eh(e,c,n);l=Le(l);const h=r.fa(u);if(l instanceof mc)i.push(u);else{const d=lo(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ot(i);return new Vv(o,a,r.fieldTransforms)}function fC(t,e,n,s,r,i){const o=t.ga(1,e,n),a=[Xl(e,s,n)],c=[r];if(i.length%2!=0)throw new j(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Xl(e,i[d])),c.push(i[d+1]);const l=[],u=Tt.empty();for(let d=a.length-1;d>=0;--d)if(!Hv(l,a[d])){const g=a[d];let v=c[d];v=Le(v);const y=o.fa(g);if(v instanceof mc)l.push(g);else{const E=lo(v,y);E!=null&&(l.push(g),u.set(g,E))}}const h=new Ot(l);return new Vv(u,h,o.fieldTransforms)}function pC(t,e,n,s=!1){return lo(n,t.ga(s?4:3,e))}function lo(t,e){if(qv(t=Le(t)))return wh("Unsupported field value:",e,t),jv(t,e);if(t instanceof mh)return function(n,s){if(!Bv(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=lo(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return r1(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Qe.fromDate(n);return{timestampValue:va(s.serializer,r)}}if(n instanceof Qe){const r=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:va(s.serializer,r)}}if(n instanceof vh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cr)return{bytesValue:fv(s.serializer,n._byteString)};if(n instanceof Ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ih(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${fc(n)}`)}(t,e)}function jv(t,e){const n={};return Fm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(t,(s,r)=>{const i=lo(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function qv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof vh||t instanceof Cr||t instanceof Ct||t instanceof mh)}function wh(t,e,n){if(!qv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=fc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Xl(t,e,n){if((e=Le(e))instanceof gc)return e._internalPath;if(typeof e=="string")return Eh(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const gC=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(gC)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(C.INVALID_ARGUMENT,a+t+c)}function Hv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ih("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends zv{data(){return super.data()}}function Ih(t,e){return typeof e=="string"?Eh(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bh{}class yC extends bh{}function _C(t,e,...n){let s=[];e instanceof bh&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Th).length,o=r.filter(a=>a instanceof vc).length;if(i>1||i>0&&o>0)throw new j(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class vc extends yC{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new vc(e,n,s)}_apply(e){const n=this._parse(e);return Kv(e._query,n),new Fr(e.firestore,e.converter,Bl(e._query,n))}_parse(e){const n=_h(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new j(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){kf(u,l);const d=[];for(const g of u)d.push(Rf(a,r,g));h={arrayValue:{values:d}}}else h=Rf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||kf(u,l),h=pC(o,i,u,l==="in"||l==="not-in");return We.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wC(t,e,n){const s=e,r=Ih("where",t);return vc._create(r,s,n)}class Th extends bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Th(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Kv(i,a),i=Bl(i,a)}(e._query,n),new Fr(e.firestore,e.converter,Bl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Rf(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new j(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xm(e)&&n.indexOf("/")!==-1)throw new j(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Pe.fromString(n));if(!K.isDocumentKey(s))throw new j(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Yd(t,new K(s))}if(n instanceof Ct)return Yd(t,n._key);throw new j(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(n)}.`)}function kf(t,e){if(!Array.isArray(t)||t.length===0)throw new j(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kv(t,e){if(e.isInequality()){const s=eh(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new j(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Qm(t);i!==null&&EC(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function EC(t,e,n){if(!n.isEqual(e))throw new j(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class IC{convertValue(e,n="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Hs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new vh(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=os(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Pe.fromString(e);De(yv(s));const r=new xi(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TC extends zv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ih("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ho extends TC{data(e={}){return super.data(e)}}class CC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new No(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ho(this._firestore,this._userDataWriter,s.key,s,new No(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new No(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new No(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:SC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class AC extends IC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function RC(t){t=cs(t,Fr);const e=cs(t.firestore,co),n=Uv(e),s=new AC(e);return vC(t._query),nC(n,t._query).then(r=>new CC(e,s,t,r))}function Wv(t,e,n){t=cs(t,Ct);const s=cs(t.firestore,co),r=bC(t.converter,e,n);return Ch(s,[hC(_h(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Wt.none())])}function Rs(t,e,n,...s){t=cs(t,Ct);const r=cs(t.firestore,co),i=_h(r);let o;return o=typeof(e=Le(e))=="string"||e instanceof gc?fC(i,"updateDoc",t._key,e,n,s):dC(i,"updateDoc",t._key,e),Ch(r,[o.toMutation(t._key,Wt.exists(!0))])}function kC(t){return Ch(cs(t.firestore,co),[new th(t._key,Wt.none())])}function Ch(t,e){return function(n,s){const r=new ts;return n.asyncQueue.enqueueAndForget(async()=>VT(await eC(n),s,r)),r.promise}(Uv(t),e)}(function(t,e=!0){(function(n){Lr=n})(js),Ms(new rs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new co(new Tb(n.getProvider("auth-internal")),new Rb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new j(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ln(Kd,"3.11.0",t),ln(Kd,"3.11.0","esm2017")})();/**
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
 */const Gv="firebasestorage.googleapis.com",Qv="storageBucket",PC=2*60*1e3,NC=10*60*1e3;/**
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
 */class Ve extends gn{constructor(e,n,s=0){super(Xc(e),`Firebase Storage: ${n} (${Xc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Xc(t){return"storage/"+t}function Sh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Fe.UNKNOWN,t)}function DC(t){return new Ve(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function OC(t){return new Ve(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Fe.UNAUTHENTICATED,t)}function MC(){return new Ve(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LC(t){return new Ve(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $C(){return new Ve(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UC(){return new Ve(Fe.CANCELED,"User canceled the upload/download.")}function FC(t){return new Ve(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function VC(t){return new Ve(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function BC(){return new Ve(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Qv+"' property when initializing the app?")}function jC(){return new Ve(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qC(){return new Ve(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HC(t){return new Ve(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yl(t){return new Ve(Fe.INVALID_ARGUMENT,t)}function Xv(){return new Ve(Fe.APP_DELETED,"The Firebase app was deleted.")}function zC(t){return new Ve(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pi(t,e){return new Ve(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Yr(t){throw new Ve(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(s.path==="")return s;throw VC(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(U){U.path_=decodeURIComponent(U.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),v={bucket:1,path:3},y=n===Gv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",b=new RegExp(`^https?://${y}/${r}/${E}`,"i"),S=[{regex:a,indices:c,postModify:i},{regex:g,indices:v,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let U=0;U<S.length;U++){const z=S[U],Q=z.regex.exec(e);if(Q){const L=Q[z.indices.bucket];let w=Q[z.indices.path];w||(w=""),s=new xt(L,w),z.postModify(s);break}}if(s==null)throw FC(e);return s}}class KC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function WC(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){r=setTimeout(()=>{r=null,t(g,c())},E)}function d(){i&&clearTimeout(i)}function g(E,...b){if(l){d();return}if(E){d(),u.call(null,E,...b);return}if(c()||o){d(),u.call(null,E,...b);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,h(S)}let v=!1;function y(E){v||(v=!0,d(),!l&&(r!==null?(E||(a=2),clearTimeout(r),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function GC(t){t(!1)}/**
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
 */function QC(t){return t!==void 0}function XC(t){return typeof t=="object"&&!Array.isArray(t)}function Ah(t){return typeof t=="string"||t instanceof String}function Pf(t){return Rh()&&t instanceof Blob}function Rh(){return typeof Blob<"u"&&!J0()}function Nf(t,e,n,s){if(s<e)throw Yl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Yl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function kh(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Yv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ds;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ds||(Ds={}));/**
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
 */function YC(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class JC{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Do(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ds.NO_ERROR,c=i.getStatus();if(!a||YC(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ds.ABORT;s(!1,new Do(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Do(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());QC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Sh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Xv():UC();o(c)}else{const c=$C();o(c)}};this.canceled_?n(!1,new Do(!1,null,!0)):this.backoffId_=WC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Do{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ZC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sS(t,e,n,s,r,i,o=!0){const a=Yv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return tS(l,e),ZC(l,n),eS(l,i),nS(l,s),new JC(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function rS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iS(...t){const e=rS();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Rh())return new Blob(t);throw new Ve(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aS(t){if(typeof atob>"u")throw HC("base-64");return atob(t)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yc{constructor(e,n){this.data=e,this.contentType=n||null}}function cS(t,e){switch(t){case cn.RAW:return new Yc(Jv(e));case cn.BASE64:case cn.BASE64URL:return new Yc(Zv(t,e));case cn.DATA_URL:return new Yc(uS(e),hS(e))}throw Sh()}function Jv(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function lS(t){let e;try{e=decodeURIComponent(t)}catch{throw pi(cn.DATA_URL,"Malformed data URL.")}return Jv(e)}function Zv(t,e){switch(t){case cn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw pi(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw pi(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aS(e)}catch(r){throw r.message.includes("polyfill")?r:pi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ey{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw pi(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=dS(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function uS(t){const e=new ey(t);return e.base64?Zv(cn.BASE64,e.rest):lS(e.rest)}function hS(t){return new ey(t).contentType}function dS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class jn{constructor(e,n){let s=0,r="";Pf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Pf(this.data_)){const s=this.data_,r=oS(s,e,n);return r===null?null:new jn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new jn(s,!0)}}static getBlob(...e){if(Rh()){const n=e.map(s=>s instanceof jn?s.data_:s);return new jn(iS.apply(null,n))}else{const n=e.map(o=>Ah(o)?cS(cn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new jn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ty(t){let e;try{e=JSON.parse(t)}catch{return null}return XC(e)?e:null}/**
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
 */function fS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pS(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function ny(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gS(t,e){return e}class vt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||gS}}let Oo=null;function mS(t){return!Ah(t)||t.length<2?t:ny(t)}function sy(){if(Oo)return Oo;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(i,o){return mS(o)}const n=new vt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new vt("size");return r.xform=s,t.push(r),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),Oo=t,Oo}function vS(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new xt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function yS(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return vS(s,t),s}function ry(t,e,n){const s=ty(e);return s===null?null:yS(t,s,n)}function _S(t,e,n,s){const r=ty(e);if(r===null||!Ah(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),g=kh(d,n,s),v=Yv({alt:"media",token:l});return g+v})[0]}function wS(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class iy{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function oy(t){if(!t)throw Sh()}function ES(t,e){function n(s,r){const i=ry(t,r,e);return oy(i!==null),i}return n}function IS(t,e){function n(s,r){const i=ry(t,r,e);return oy(i!==null),_S(i,r,t.host,t._protocol)}return n}function ay(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=MC():r=xC():n.getStatus()===402?r=OC(t.bucket):n.getStatus()===403?r=LC(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function bS(t){const e=ay(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=DC(t.path)),i.serverResponse=r.serverResponse,i}return n}function TS(t,e,n){const s=e.fullServerUrl(),r=kh(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new iy(r,i,IS(t,n),o);return a.errorHandler=bS(e),a}function CS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function SS(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=CS(null,e)),s}function AS(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let U=0;U<2;U++)S=S+Math.random().toString().slice(2);return S}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=SS(e,s,r),u=wS(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=jn.getBlob(h,s,d);if(g===null)throw jC();const v={name:l.fullPath},y=kh(i,t.host,t._protocol),E="POST",b=t.maxUploadRetryTime,k=new iy(y,E,ES(t,n),b);return k.urlParams=v,k.headers=o,k.body=g.uploadData(),k.errorHandler=ay(e),k}class RS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Yr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kS extends RS{initXhr(){this.xhr_.responseType="text"}}function cy(){return new kS}/**
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
 */class Fs{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fs(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ny(this._location.path)}get storage(){return this._service}get parent(){const e=fS(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new Fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zC(e)}}function PS(t,e,n){t._throwIfRoot("uploadBytes");const s=AS(t.storage,t._location,sy(),new jn(e,!0),n);return t.storage.makeRequestWithTokens(s,cy).then(r=>({metadata:r,ref:t}))}function NS(t){t._throwIfRoot("getDownloadURL");const e=TS(t.storage,t._location,sy());return t.storage.makeRequestWithTokens(e,cy).then(n=>{if(n===null)throw qC();return n})}function DS(t,e){const n=pS(t._location.path,e),s=new xt(t._location.bucket,n);return new Fs(t.storage,s)}/**
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
 */function OS(t){return/^[A-Za-z]+:\/\//.test(t)}function xS(t,e){return new Fs(t,e)}function ly(t,e){if(t instanceof Ph){const n=t;if(n._bucket==null)throw BC();const s=new Fs(n,n._bucket);return e!=null?ly(s,e):s}else return e!==void 0?DS(t,e):t}function MS(t,e){if(e&&OS(e)){if(t instanceof Ph)return xS(t,e);throw Yl("To use ref(service, url), the first argument must be a Storage instance.")}else return ly(t,e)}function Df(t,e){const n=e==null?void 0:e[Qv];return n==null?null:xt.makeFromBucketSpec(n,t)}function LS(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Ag(r,t.app.options.projectId))}class Ph{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Gv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PC,this._maxUploadRetryTime=NC,this._requests=new Set,r!=null?this._bucket=xt.makeFromBucketSpec(r,this._host):this._bucket=Df(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=Df(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new KC(Xv());{const o=sS(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Of="@firebase/storage",xf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="storage";function $S(t,e,n){return t=Le(t),PS(t,e,n)}function US(t){return t=Le(t),NS(t)}function FS(t,e){return t=Le(t),MS(t,e)}function VS(t=Tu(),e){t=Le(t);const s=ja(t,uy).getImmediate({identifier:e}),r=Cg("storage");return r&&BS(s,...r),s}function BS(t,e,n,s={}){LS(t,e,n,s)}function jS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ph(n,s,r,e,js)}function qS(){Ms(new rs(uy,jS,"PUBLIC").setMultipleInstances(!0)),ln(Of,xf,""),ln(Of,xf,"esm2017")}qS();const HS={apiKey:"AIzaSyCs4ob0qjeLAxY1Nr-dIXiwXxnqkeyBGc8",authDomain:"cuyart-shop.firebaseapp.com",projectId:"cuyart-shop",storageBucket:"cuyart-shop.appspot.com",messagingSenderId:"906331708937",appId:"1:906331708937:web:bbf3a749bd30b61b5d22d8"},hy=Pg(HS),$t=aC(hy),zS=VS(hy);async function KS(t,e){const n=FS(zS,`${e}/${t.name}`);return await $S(n,t),await US(n)}function WS(t){return typeof t=="object"&&t!==null}function Mf(t,e){return t=WS(t)?t:Object.create(null),new Proxy(t,{get(n,s,r){return s==="key"?Reflect.get(n,s,r):Reflect.get(n,s,r)||Reflect.get(e,s,r)}})}function GS(t,e){return e.reduce((n,s)=>n==null?void 0:n[s],t)}function QS(t,e,n){return e.slice(0,-1).reduce((s,r)=>/^(__proto__)$/.test(r)?{}:s[r]=s[r]||{},t)[e[e.length-1]]=n,t}function XS(t,e){return e.reduce((n,s)=>{const r=s.split(".");return QS(n,r,GS(t,r))},{})}function Lf(t,{storage:e,serializer:n,key:s,debug:r}){try{const i=e==null?void 0:e.getItem(s);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){r&&console.error(i)}}function $f(t,{storage:e,serializer:n,key:s,paths:r,debug:i}){try{const o=Array.isArray(r)?XS(t,r):t;e.setItem(s,n.serialize(o))}catch(o){i&&console.error(o)}}function YS(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:r}=e;if(!s)return;const i=(Array.isArray(s)?s.map(o=>Mf(o,t)):[Mf(s,t)]).map(({storage:o=localStorage,beforeRestore:a=null,afterRestore:c=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:u=r.$id,paths:h=null,debug:d=!1})=>{var g;return{storage:o,beforeRestore:a,afterRestore:c,serializer:l,key:((g=t.key)!=null?g:v=>v)(u),paths:h,debug:d}});r.$persist=()=>{i.forEach(o=>{$f(r.$state,o)})},r.$hydrate=({runHooks:o=!0}={})=>{i.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;o&&(c==null||c(e)),Lf(r,a),o&&(l==null||l(e))})},i.forEach(o=>{const{beforeRestore:a,afterRestore:c}=o;a==null||a(e),Lf(r,o),c==null||c(e),r.$subscribe((l,u)=>{$f(u,o)},{detached:!0})})}}var JS=YS();const Be=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ZS={};function eA(t,e){const n=tg("RouterView");return ue(),Or(n)}const tA=Be(ZS,[["render",eA]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const er=typeof window<"u";function nA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Jc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Xt(r)?r.map(t):t(r)}return n}const gi=()=>{},Xt=Array.isArray,sA=/\/$/,rA=t=>t.replace(sA,"");function Zc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=cA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function iA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Sr(e.matched[s],n.matched[r])&&dy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!aA(t[n],e[n]))return!1;return!0}function aA(t,e){return Xt(t)?Ff(t,e):Xt(e)?Ff(e,t):t===e}function Ff(t,e){return Xt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function cA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ui;(function(t){t.pop="pop",t.push="push"})(Ui||(Ui={}));var mi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mi||(mi={}));function lA(t){if(!t)if(er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rA(t)}const uA=/^[^#]+#/;function hA(t,e){return t.replace(uA,"#")+e}function dA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const yc=()=>({left:window.pageXOffset,top:window.pageYOffset});function fA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=dA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vf(t,e){return(history.state?history.state.position-e:-1)+t}const Jl=new Map;function pA(t,e){Jl.set(t,e)}function gA(t){const e=Jl.get(t);return Jl.delete(t),e}let mA=()=>location.protocol+"//"+location.host;function fy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Uf(c,"")}return Uf(n,t)+s+r}function vA(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=fy(t,location),v=n.value,y=e.value;let E=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}E=y?d.position-y.position:0}else s(g);r.forEach(b=>{b(n.value,v,{delta:E,type:Ui.pop,direction:E?E>0?mi.forward:mi.back:mi.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:yc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Bf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?yc():null}}function yA(t){const{history:e,location:n}=window,s={value:fy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:mA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=we({},e.state,Bf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=we({},r.value,e.state,{forward:c,scroll:yc()});i(u.current,u,!0);const h=we({},Bf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function _A(t){t=lA(t);const e=yA(t),n=vA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=we({location:"",base:t,go:s,createHref:hA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function wA(t){return typeof t=="string"||t&&typeof t=="object"}function py(t){return typeof t=="string"||typeof t=="symbol"}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gy=Symbol("");var jf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jf||(jf={}));function Ar(t,e){return we(new Error,{type:t,[gy]:!0},e)}function yn(t,e){return t instanceof Error&&gy in t&&(e==null||!!(t.type&e))}const qf="[^/]+?",EA={sensitive:!1,strict:!1,start:!0,end:!0},IA=/[.+*?^${}()[\]/\\]/g;function bA(t,e){const n=we({},EA,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(IA,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:y,optional:E,regexp:b}=d;i.push({name:v,repeatable:y,optional:E});const k=b||qf;if(k!==qf){g+=10;try{new RegExp(`(${k})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+U.message)}}let S=y?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(S=E&&l.length<2?`(?:/${S})`:"/"+S),E&&(S+="?"),r+=S,g+=20,E&&(g+=-8),y&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:y,optional:E}=g,b=v in l?l[v]:"";if(Xt(b)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=Xt(b)?b.join("/"):b;if(!k)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function TA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=TA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Hf(s))return 1;if(Hf(r))return-1}return r.length-s.length}function Hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const SA={type:0,value:""},AA=/[a-zA-Z0-9_]/;function RA(t){if(!t)return[[]];if(t==="/")return[[SA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:AA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function kA(t,e,n){const s=bA(RA(t.path),n),r=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function PA(t,e){const n=[],s=new Map;e=Wf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,v=NA(u);v.aliasOf=d&&d.record;const y=Wf(e,u),E=[v];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of S)E.push(we({},v,{components:d?d.record.components:v.components,path:U,aliasOf:d?d.record:v}))}let b,k;for(const S of E){const{path:U}=S;if(h&&U[0]!=="/"){const z=h.record.path,Q=z[z.length-1]==="/"?"":"/";S.path=h.record.path+(U&&Q+U)}if(b=kA(S,h,y),d?d.alias.push(b):(k=k||b,k!==b&&k.alias.push(b),g&&u.name&&!Kf(b)&&o(u.name)),v.children){const z=v.children;for(let Q=0;Q<z.length;Q++)i(z[Q],b,d&&d.children[Q])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return k?()=>{o(k)}:gi}function o(u){if(py(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&CA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!my(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Kf(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},v,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ar(1,{location:u});y=d.record.name,g=we(zf(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&zf(u.params,d.keys.map(k=>k.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(k=>k.re.test(v)),d&&(g=d.parse(v),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw Ar(1,{location:u,currentLocation:h});y=d.record.name,g=we({},h.params,u.params),v=d.stringify(g)}const E=[];let b=d;for(;b;)E.unshift(b.record),b=b.parent;return{name:y,path:v,params:g,matched:E,meta:OA(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function zf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function NA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:DA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function DA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Kf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OA(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Wf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function my(t,e){return e.children.some(n=>n===t||my(t,n))}const vy=/#/g,xA=/&/g,MA=/\//g,LA=/=/g,$A=/\?/g,yy=/\+/g,UA=/%5B/g,FA=/%5D/g,_y=/%5E/g,VA=/%60/g,wy=/%7B/g,BA=/%7C/g,Ey=/%7D/g,jA=/%20/g;function Nh(t){return encodeURI(""+t).replace(BA,"|").replace(UA,"[").replace(FA,"]")}function qA(t){return Nh(t).replace(wy,"{").replace(Ey,"}").replace(_y,"^")}function Zl(t){return Nh(t).replace(yy,"%2B").replace(jA,"+").replace(vy,"%23").replace(xA,"%26").replace(VA,"`").replace(wy,"{").replace(Ey,"}").replace(_y,"^")}function HA(t){return Zl(t).replace(LA,"%3D")}function zA(t){return Nh(t).replace(vy,"%23").replace($A,"%3F")}function KA(t){return t==null?"":zA(t).replace(MA,"%2F")}function wa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function WA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(yy," "),o=i.indexOf("="),a=wa(o<0?i:i.slice(0,o)),c=o<0?null:wa(i.slice(o+1));if(a in e){let l=e[a];Xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Gf(t){let e="";for(let n in t){const s=t[n];if(n=HA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(s)?s.map(i=>i&&Zl(i)):[s&&Zl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function GA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Xt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const QA=Symbol(""),Qf=Symbol(""),_c=Symbol(""),Iy=Symbol(""),eu=Symbol("");function Jr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ar(4,{from:n,to:e})):h instanceof Error?a(h):wA(h)?a(Ar(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function el(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(XA(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Vn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=nA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Vn(d,n,s,i,o)()}))}}return r}function XA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xf(t){const e=Kt(_c),n=Kt(Iy),s=Nt(()=>e.resolve(Ge(t.to))),r=Nt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Sr.bind(null,u));if(d>-1)return d;const g=Yf(c[l-2]);return l>1&&Yf(u)===g&&h[h.length-1].path!==g?h.findIndex(Sr.bind(null,c[l-2])):d}),i=Nt(()=>r.value>-1&&eR(n.params,s.value.params)),o=Nt(()=>r.value>-1&&r.value===n.matched.length-1&&dy(n.params,s.value.params));function a(c={}){return ZA(c)?e[Ge(t.replace)?"replace":"push"](Ge(t.to)).catch(gi):Promise.resolve()}return{route:s,href:Nt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const YA=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xf,setup(t,{slots:e}){const n=Dr(Xf(t)),{options:s}=Kt(_c),r=Nt(()=>({[Jf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),JA=YA;function ZA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eR(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Xt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jf=(t,e,n)=>t??e??n,tR=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Kt(eu),r=Nt(()=>t.route||s.value),i=Kt(Qf,0),o=Nt(()=>{let l=Ge(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Nt(()=>r.value.matched[o.value]);$o(Qf,Nt(()=>o.value+1)),$o(QA,a),$o(eu,r);const c=J();return rn(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Sr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Zf(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,E=pg(d,we({},v,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Zf(n.default,{Component:E,route:l})||E}}});function Zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nR=tR;function sR(t){const e=PA(t.routes,t),n=t.parseQuery||WA,s=t.stringifyQuery||Gf,r=t.history,i=Jr(),o=Jr(),a=Jr(),c=Z_(Mn);let l=Mn;er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Jc.bind(null,T=>""+T),h=Jc.bind(null,KA),d=Jc.bind(null,wa);function g(T,V){let $,x;return py(T)?($=e.getRecordMatcher(T),x=V):x=T,e.addRoute(x,$)}function v(T){const V=e.getRecordMatcher(T);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function b(T,V){if(V=we({},V||c.value),typeof T=="string"){const p=Zc(n,T,V.path),m=e.resolve({path:p.path},V),_=r.createHref(p.fullPath);return we(p,m,{params:d(m.params),hash:wa(p.hash),redirectedFrom:void 0,href:_})}let $;if("path"in T)$=we({},T,{path:Zc(n,T.path,V.path).path});else{const p=we({},T.params);for(const m in p)p[m]==null&&delete p[m];$=we({},T,{params:h(T.params)}),V.params=h(V.params)}const x=e.resolve($,V),fe=T.hash||"";x.params=u(d(x.params));const Me=iA(s,we({},T,{hash:qA(fe),path:x.path})),ae=r.createHref(Me);return we({fullPath:Me,hash:fe,query:s===Gf?GA(T.query):T.query||{}},x,{redirectedFrom:void 0,href:ae})}function k(T){return typeof T=="string"?Zc(n,T,c.value.path):we({},T)}function S(T,V){if(l!==T)return Ar(8,{from:V,to:T})}function U(T){return L(T)}function z(T){return U(we(k(T),{replace:!0}))}function Q(T){const V=T.matched[T.matched.length-1];if(V&&V.redirect){const{redirect:$}=V;let x=typeof $=="function"?$(T):$;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=k(x):{path:x},x.params={}),we({query:T.query,hash:T.hash,params:"path"in x?{}:T.params},x)}}function L(T,V){const $=l=b(T),x=c.value,fe=T.state,Me=T.force,ae=T.replace===!0,p=Q($);if(p)return L(we(k(p),{state:typeof p=="object"?we({},fe,p.state):fe,force:Me,replace:ae}),V||$);const m=$;m.redirectedFrom=V;let _;return!Me&&oA(s,x,$)&&(_=Ar(16,{to:m,from:x}),Rt(x,x,!0,!1)),(_?Promise.resolve(_):O(m,x)).catch(I=>yn(I)?yn(I,2)?I:nt(I):me(I,m,x)).then(I=>{if(I){if(yn(I,2))return L(we({replace:ae},k(I.to),{state:typeof I.to=="object"?we({},fe,I.to.state):fe,force:Me}),V||m)}else I=ye(m,x,!0,ae,fe);return re(m,x,I),I})}function w(T,V){const $=S(T,V);return $?Promise.reject($):Promise.resolve()}function O(T,V){let $;const[x,fe,Me]=rR(T,V);$=el(x.reverse(),"beforeRouteLeave",T,V);for(const p of x)p.leaveGuards.forEach(m=>{$.push(Vn(m,T,V))});const ae=w.bind(null,T,V);return $.push(ae),Ys($).then(()=>{$=[];for(const p of i.list())$.push(Vn(p,T,V));return $.push(ae),Ys($)}).then(()=>{$=el(fe,"beforeRouteUpdate",T,V);for(const p of fe)p.updateGuards.forEach(m=>{$.push(Vn(m,T,V))});return $.push(ae),Ys($)}).then(()=>{$=[];for(const p of T.matched)if(p.beforeEnter&&!V.matched.includes(p))if(Xt(p.beforeEnter))for(const m of p.beforeEnter)$.push(Vn(m,T,V));else $.push(Vn(p.beforeEnter,T,V));return $.push(ae),Ys($)}).then(()=>(T.matched.forEach(p=>p.enterCallbacks={}),$=el(Me,"beforeRouteEnter",T,V),$.push(ae),Ys($))).then(()=>{$=[];for(const p of o.list())$.push(Vn(p,T,V));return $.push(ae),Ys($)}).catch(p=>yn(p,8)?p:Promise.reject(p))}function re(T,V,$){for(const x of a.list())x(T,V,$)}function ye(T,V,$,x,fe){const Me=S(T,V);if(Me)return Me;const ae=V===Mn,p=er?history.state:{};$&&(x||ae?r.replace(T.fullPath,we({scroll:ae&&p&&p.scroll},fe)):r.push(T.fullPath,fe)),c.value=T,Rt(T,V,$,ae),nt()}let tt;function At(){tt||(tt=r.listen((T,V,$)=>{if(!ms.listening)return;const x=b(T),fe=Q(x);if(fe){L(we(fe,{replace:!0}),x).catch(gi);return}l=x;const Me=c.value;er&&pA(Vf(Me.fullPath,$.delta),yc()),O(x,Me).catch(ae=>yn(ae,12)?ae:yn(ae,2)?(L(ae.to,x).then(p=>{yn(p,20)&&!$.delta&&$.type===Ui.pop&&r.go(-1,!1)}).catch(gi),Promise.reject()):($.delta&&r.go(-$.delta,!1),me(ae,x,Me))).then(ae=>{ae=ae||ye(x,Me,!1),ae&&($.delta&&!yn(ae,8)?r.go(-$.delta,!1):$.type===Ui.pop&&yn(ae,20)&&r.go(-1,!1)),re(x,Me,ae)}).catch(gi)}))}let Ye=Jr(),Oe=Jr(),Se;function me(T,V,$){nt(T);const x=Oe.list();return x.length?x.forEach(fe=>fe(T,V,$)):console.error(T),Promise.reject(T)}function he(){return Se&&c.value!==Mn?Promise.resolve():new Promise((T,V)=>{Ye.add([T,V])})}function nt(T){return Se||(Se=!T,At(),Ye.list().forEach(([V,$])=>T?$(T):V()),Ye.reset()),T}function Rt(T,V,$,x){const{scrollBehavior:fe}=t;if(!er||!fe)return Promise.resolve();const Me=!$&&gA(Vf(T.fullPath,0))||(x||!$)&&history.state&&history.state.scroll||null;return mu().then(()=>fe(T,V,Me)).then(ae=>ae&&fA(ae)).catch(ae=>me(ae,T,V))}const Et=T=>r.go(T);let st;const vn=new Set,ms={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:E,getRoutes:y,resolve:b,options:t,push:U,replace:z,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Oe.add,isReady:he,install(T){const V=this;T.component("RouterLink",JA),T.component("RouterView",nR),T.config.globalProperties.$router=V,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(c)}),er&&!st&&c.value===Mn&&(st=!0,U(r.location).catch(fe=>{}));const $={};for(const fe in Mn)$[fe]=Nt(()=>c.value[fe]);T.provide(_c,V),T.provide(Iy,Dr($)),T.provide(eu,c);const x=T.unmount;vn.add(T),T.unmount=function(){vn.delete(T),vn.size<1&&(l=Mn,tt&&tt(),tt=null,c.value=Mn,st=!1,Se=!1),x()}}};return ms}function Ys(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function rR(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Sr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Sr(l,c))||r.push(c))}return[n,s,r]}function On(){return Kt(_c)}const wc="/cuy-art-shop/assets/Logo-removebg-preview-23a31917.png",iR="/cuy-art-shop/assets/Puntos-b413704e.svg",oR="/cuy-art-shop/assets/search-8de85e52.svg",ds="/cuy-art-shop/assets/person-c17a1bb8.svg",aR="/cuy-art-shop/assets/shopping_cart-2f426c23.svg",cR="/cuy-art-shop/assets/menu-fd7c077d.svg",lR="/cuy-art-shop/assets/close-4f1b1f2c.svg";function Dh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function by(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uR=by,Ty=new Hi("auth","Firebase",by());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Iu("@firebase/auth");function hR(t,...e){Ea.logLevel<=ve.WARN&&Ea.warn(`Auth (${js}): ${t}`,...e)}function zo(t,...e){Ea.logLevel<=ve.ERROR&&Ea.error(`Auth (${js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Oh(t,...e)}function hn(t,...e){return Oh(t,...e)}function dR(t,e,n){const s=Object.assign(Object.assign({},uR()),{[e]:n});return new Hi("auth","Firebase",s).create(e,{appName:t.name})}function Oh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ty.create(t,...e)}function Y(t,e,...n){if(!t)throw Oh(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function Pn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fR(){return ep()==="http:"||ep()==="https:"}function ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fR()||Z0()||"connection"in navigator)?navigator.onLine:!0}function gR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=Y0()||eE()}get(){return pR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=new uo(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,s,r={}){return Sy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Cy.fetch()(Ay(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Sy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},mR),e);try{const r=new yR(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw dR(t,u,l);Yt(t,u)}}catch(r){if(r instanceof gn)throw r;Yt(t,"network-request-failed",{message:String(r)})}}async function ho(t,e,n,s,r={}){const i=await Br(t,e,n,s,r);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ay(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?xh(t.config,r):`${t.config.apiScheme}://${r}`}class yR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hn(this.auth,"network-request-failed")),vR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=hn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function wR(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ER(t,e=!1){const n=Le(t),s=await n.getIdToken(e),r=Mh(s);Y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:vi(tl(r.auth_time)),issuedAtTime:vi(tl(r.iat)),expirationTime:vi(tl(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tl(t){return Number(t)*1e3}function Mh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const r=bg(n);return r?JSON.parse(r):(zo("Failed to decode base64 JWT payload"),null)}catch(r){return zo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function IR(t){const e=Mh(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof gn&&bR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function bR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ia(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Rr(t,wR(n,{idToken:s}));Y(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?AR(i.providerUserInfo):[],a=SR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ry(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function CR(t){const e=Le(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SR(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function AR(t){return t.map(e=>{var{providerId:n}=e,s=Dh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e){const n=await Sy(t,{},async()=>{const s=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ay(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await RR(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Fi;return s&&(Y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Y(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Os{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Dh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ry(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rr(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ER(this,e)}reload(){return CR(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rr(this,_R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:U,isAnonymous:z,providerData:Q,stsTokenManager:L}=n;Y(S&&L,e,"internal-error");const w=Fi.fromJSON(this.name,L);Y(typeof S=="string",e,"internal-error"),Ln(h,e.name),Ln(d,e.name),Y(typeof U=="boolean",e,"internal-error"),Y(typeof z=="boolean",e,"internal-error"),Ln(g,e.name),Ln(v,e.name),Ln(y,e.name),Ln(E,e.name),Ln(b,e.name),Ln(k,e.name);const O=new Os({uid:S,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:z,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:w,createdAt:b,lastLoginAt:k});return Q&&Array.isArray(Q)&&(O.providerData=Q.map(re=>Object.assign({},re))),E&&(O._redirectEventId=E),O}static async _fromIdTokenResponse(e,n,s=!1){const r=new Fi;r.updateFromServerResponse(n);const i=new Os({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ia(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;function Tn(t){Pn(t instanceof Function,"Expected a class definition");let e=tp.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tp.set(t,e),e)}/**
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
 */class ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ky.type="NONE";const np=ky;/**
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
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class ur{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ko(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ko("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ur(Tn(np),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Tn(np);const o=Ko(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Os._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ur(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ur(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xy(e))return"Blackberry";if(My(e))return"Webos";if(Lh(e))return"Safari";if((e.includes("chrome/")||Ny(e))&&!e.includes("edge/"))return"Chrome";if(Oy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Py(t=gt()){return/firefox\//i.test(t)}function Lh(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ny(t=gt()){return/crios\//i.test(t)}function Dy(t=gt()){return/iemobile/i.test(t)}function Oy(t=gt()){return/android/i.test(t)}function xy(t=gt()){return/blackberry/i.test(t)}function My(t=gt()){return/webos/i.test(t)}function Ec(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kR(t=gt()){var e;return Ec(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PR(){return tE()&&document.documentMode===10}function Ly(t=gt()){return Ec(t)||Oy(t)||My(t)||xy(t)||/windows phone/i.test(t)||Dy(t)}function NR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e=[]){let n;switch(t){case"Browser":n=sp(gt());break;case"Worker":n=`${sp(gt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${s}`}async function Uy(t,e){return Br(t,"GET","/v2/recaptchaConfig",Vr(t,e))}function rp(t){return t!==void 0&&t.enterprise!==void 0}class Fy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=hn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",DR().appendChild(s)})}function OR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xR="https://www.google.com/recaptcha/enterprise.js?render=",MR="recaptcha-enterprise",LR="NO_RECAPTCHA";class By{constructor(e){this.type=MR,this.auth=jr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Uy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Fy(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;rp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(LR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&rp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Vy(xR+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ba(t,e,n,s=!1){const r=new By(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class $R{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ip(this),this.idTokenSubscription=new ip(this),this.beforeStateQueue=new $R(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ty,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}async initializeRecaptchaConfig(){const e=await Uy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Fy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new By(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$y(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jr(t){return Le(t)}class ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=cE(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t,e){const n=ja(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ta(i,e??{}))return r;Yt(r,"already-initialized")}return n.initialize({options:e})}function VR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BR(t,e,n){const s=jr(t);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=jy(e),{host:o,port:a}=jR(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qR()}function jy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jR(t){const e=jy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:op(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:op(o)}}}function op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function qy(t,e){return Br(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t,e){return ho(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e){return ho(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function zR(t,e){return ho(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends $h{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Vi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await ba(e,s,"signInWithPassword");return nl(e,r)}else return nl(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ba(e,s,"signInWithPassword");return nl(e,i)}else return Promise.reject(r)});case"emailLink":return HR(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zR(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t,e){return ho(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="http://localhost";class Vs extends $h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Dh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Vs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hr(e,n)}buildRequest(){const e={requestUri:KR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GR(t){const e=ei(ti(t)).link,n=e?ei(ti(e)).deep_link_id:null,s=ei(ti(t)).deep_link_id;return(s?ei(ti(s)).link:null)||s||n||e||t}class Uh{constructor(e){var n,s,r,i,o,a;const c=ei(ti(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=WR((r=c.mode)!==null&&r!==void 0?r:null);Y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GR(e);try{return new Uh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Uh.parseLink(n);return Y(s,"argument-error"),Vi._fromEmailAndCode(e,s.code,s.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fo extends Hy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends fo{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Hn.credential(n,s)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends fo{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends fo{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t,e){return ho(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Os._fromIdTokenResponse(e,s,r),o=ap(s);return new Bs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ap(s);return new Bs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends gn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ta(e,n,s,r)}}function zy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(t,i,e,s):i})}async function QR(t,e,n=!1){const s=await Rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",s)}/**
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
 */async function XR(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Rr(t,zy(s,r,e,t),n);Y(i.idToken,s,"internal-error");const o=Mh(i.idToken);Y(o,s,"internal-error");const{sub:a}=o;return Y(t.uid===a,s,"user-mismatch"),Bs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(t,e,n=!1){const s="signIn",r=await zy(t,s,e),i=await Bs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function YR(t,e){return Ky(jr(t),e)}async function JR(t,e,n){var s;const r=jr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await ba(r,i,"signUpPassword");o=sl(r,l)}else o=sl(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ba(r,i,"signUpPassword");return sl(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Bs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function ZR(t,e,n){return YR(Le(t),qr.credential(e,n))}function ek(t,e){return Wy(Le(t),e,null)}function tk(t,e){return Wy(Le(t),null,e)}async function Wy(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Rr(t,qy(s,i));await t._updateTokensIfNecessary(o,!0)}function nk(t,e,n,s){return Le(t).onIdTokenChanged(e,n,s)}function sk(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function rk(t){return Le(t).signOut()}const Ca="__sak";/**
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
 */class Gy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(){const t=gt();return Lh(t)||Ec(t)}const ok=1e3,ak=10;class Qy extends Gy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ik()&&NR(),this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);PR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ak):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qy.type="LOCAL";const ck=Qy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends Gy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xy.type="SESSION";const Yy=Xy;/**
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
 */function lk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await lk(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Fh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function hk(t){dn().location.href=t}/**
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
 */function Jy(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function dk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pk(){return Jy()?self:null}/**
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
 */const Zy="firebaseLocalStorageDb",gk=1,Sa="firebaseLocalStorage",e_="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bc(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function mk(){const t=indexedDB.deleteDatabase(Zy);return new po(t).toPromise()}function nu(){const t=indexedDB.open(Zy,gk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Sa,{keyPath:e_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Sa)?e(s):(s.close(),await mk(),e(await nu()))})})}async function cp(t,e,n){const s=bc(t,!0).put({[e_]:e,value:n});return new po(s).toPromise()}async function vk(t,e){const n=bc(t,!1).get(e),s=await new po(n).toPromise();return s===void 0?null:s.value}function lp(t,e){const n=bc(t,!0).delete(e);return new po(n).toPromise()}const yk=800,_k=3;class t_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_k)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(pk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dk(),!this.activeServiceWorker)return;this.sender=new uk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await cp(e,Ca,"1"),await lp(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>cp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=bc(r,!1).getAll();return new po(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t_.type="LOCAL";const wk=t_;new uo(3e4,6e4);/**
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
 */function Ek(t,e){return e?Tn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vh extends $h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ik(t){return Ky(t.auth,new Vh(t),t.bypassAuthState)}function bk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),XR(n,new Vh(t),t.bypassAuthState)}async function Tk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),QR(n,new Vh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ik;case"linkViaPopup":case"linkViaRedirect":return Tk;case"reauthViaPopup":case"reauthViaRedirect":return bk;default:Yt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new uo(2e3,1e4);class nr extends n_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ck.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="pendingRedirect",Wo=new Map;class Ak extends n_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const s=await Rk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rk(t,e){const n=Nk(e),s=Pk(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function kk(t,e){Wo.set(t._key(),e)}function Pk(t){return Tn(t._redirectPersistence)}function Nk(t){return Ko(Sk,t.config.apiKey,t.name)}async function Dk(t,e,n=!1){const s=jr(t),r=Ek(s,e),o=await new Ak(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=10*60*1e3;class xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!s_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uk=/^https?/;async function Fk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lk(t);for(const n of e)try{if(Vk(n))return}catch{}Yt(t,"unauthorized-domain")}function Vk(t){const e=tu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Uk.test(n))return!1;if($k.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Bk=new uo(3e4,6e4);function hp(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jk(t){return new Promise((e,n)=>{var s,r,i;function o(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(hn(t,"network-request-failed"))},timeout:Bk.get()})}if(!((r=(s=dn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const a=OR("iframefcb");return dn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},Vy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Go=null,e})}let Go=null;function qk(t){return Go=Go||jk(t),Go}/**
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
 */const Hk=new uo(5e3,15e3),zk="__/auth/iframe",Kk="emulator/auth/iframe",Wk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qk(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xh(e,Kk):`https://${t.config.authDomain}/${zk}`,s={apiKey:e.apiKey,appName:t.name,v:js},r=Gk.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${zi(s).slice(1)}`}async function Xk(t){const e=await qk(t),n=dn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:Qk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=dn().setTimeout(()=>{i(o)},Hk.get());function c(){dn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jk=500,Zk=600,eP="_blank",tP="http://localhost";class dp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nP(t,e,n,s=Jk,r=Zk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yk),{width:s.toString(),height:r.toString(),top:i,left:o}),l=gt().toLowerCase();n&&(a=Ny(l)?eP:n),Py(l)&&(e=e||tP,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(kR(l)&&a!=="_self")return sP(e||"",a),new dp(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new dp(h)}function sP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const rP="__/auth/handler",iP="emulator/auth/handler",oP=encodeURIComponent("fac");async function fp(t,e,n,s,r,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:js,eventId:r};if(e instanceof Hy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof fo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${oP}=${encodeURIComponent(c)}`:"";return`${aP(t)}?${zi(a).slice(1)}${l}`}function aP({config:t}){return t.emulator?xh(t,iP):`https://${t.authDomain}/${rP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="webStorageSupport";class cP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yy,this._completeRedirectFn=Dk,this._overrideRedirectResult=kk}async _openPopup(e,n,s,r){var i;Pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fp(e,n,s,tu(),r);return nP(e,o,Fh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await fp(e,n,s,tu(),r);return hk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Pn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Xk(e),s=new xk(e);return n.register("authEvent",r=>(Y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rl,{type:rl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[rl];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ly()||Lh()||Ec()}}const lP=cP;var pp="@firebase/auth",gp="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dP(t){Ms(new rs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),Y(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$y(t)},l=new UR(s,r,i,c);return VR(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ms(new rs("auth-internal",e=>{const n=jr(e.getProvider("auth").getImmediate());return(s=>new uP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(pp,gp,hP(t)),ln(pp,gp,"esm2017")}/**
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
 */const fP=5*60,pP=Sg("authIdTokenMaxAge")||fP;let mp=null;const gP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>pP)return;const r=n==null?void 0:n.token;mp!==r&&(mp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Lt(t=Tu()){const e=ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FR(t,{popupRedirectResolver:lP,persistence:[wk,ck,Yy]}),s=Sg("authTokenSyncURL");if(s){const i=gP(s);sk(n,i,()=>i(n.currentUser)),nk(n,o=>i(o))}const r=Tg("auth");return r&&BR(n,`http://${r}`),n}dP("Browser");const Tc=t=>(Jt("data-v-25f1e63c"),t=t(),Zt(),t),mP={class:"head"},vP=qi('<div class="lefthead" data-v-25f1e63c><button data-v-25f1e63c><img src="'+wc+'" alt="Persona" data-v-25f1e63c></button></div><div class="centerhead" data-v-25f1e63c><input type="text" name="text" id="one" data-v-25f1e63c><div class="centersearch" data-v-25f1e63c><img src="'+iR+'" alt="Puntos" data-v-25f1e63c><button data-v-25f1e63c><img src="'+oR+'" alt="Busqueda" data-v-25f1e63c></button></div></div>',2),yP={class:"righthead"},_P=Tc(()=>f("img",{src:ds,alt:"Persona"},null,-1)),wP=[_P],EP=Tc(()=>f("img",{src:aR,alt:"Carro de compra"},null,-1)),IP=[EP],bP={class:"containmodal"},TP={class:"contain"},CP={class:"salir"},SP=Tc(()=>f("img",{src:lR,alt:"Cerrar"},null,-1)),AP=[SP],RP=Tc(()=>f("h2",null,"Menu",-1)),kP=Ce({__name:"NavBar",setup(t){const e=J(!1),n=On(),s=()=>{n.push("/about")},r=()=>{Lt().currentUser!=null?n.push({name:"Informacion"}):n.push("/login")},i=()=>{n.push({name:"Carrito"}),console.log("Carroo")},o=()=>{Lt().currentUser!=null?n.push({name:"Informacion"}):n.push("/login")};return(a,c)=>(ue(),Ee(bt,null,[f("header",mP,[vP,f("div",yP,[f("button",{onClick:r},wP),f("button",{onClick:i},IP),f("button",null,[f("img",{src:cR,alt:"Menu",onClick:c[0]||(c[0]=l=>e.value=!e.value)})])])]),Z(f("div",bP,[f("div",TP,[f("div",CP,[f("button",{onClick:c[1]||(c[1]=l=>e.value=!e.value)},AP)]),f("div",{class:"opciones"},[RP,f("p",{href:"#",onClick:o},"Mi Cuenta"),f("p",{href:"#",onClick:s},"Acerca de nosotros")])])],512),[[_n,e.value]])],64))}});const r_=Be(kP,[["__scopeId","data-v-25f1e63c"]]);let i_=0;const PP=t=>{i_=t},$n=()=>i_,Nn=B0("registro",{state:()=>({datos:[{nombre:"Juan",correo:"juan@juan.com",password:"123456",telefono:"1234567890",direccion:"Calle 123",productos:[{nombre:"Producto 1",precio:"100",stock:10,img:[" "],desc:"Descripcion del producto 2",tipo:"Barro"}],uso:!0}]}),actions:{addRegistro(t){this.datos.push(t)},getRegistro(t){for(let e=0;e<this.datos.length;e++)if(this.datos[e].correo==t)return this.datos[e]},addtelefono(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].telefono=e)},adddireccion(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].direccion=e)},getAll(){for(let t=0;t<this.datos.length;t++)console.log(this.datos[t])},async setAll(){try{const t=_C(iC($t,"usuarios"),wC("uso","==",!0));(await RC(t)).forEach(n=>{const s={nombre:n.data().nombre,correo:n.data().correo,password:n.data().password,telefono:n.data().telefono,direccion:n.data().direccion,productos:n.data().productos,uso:n.data().uso};this.addRegistro(s)})}catch{}},clearAll(){this.datos=[]},getAllProductos(){let t=[];for(let e=0;e<this.datos.length;e++)for(let n=0;n<this.datos[e].productos.length;n++)t.push(this.datos[e].productos[n]);return t}},persist:!0}),Ft=t=>(Jt("data-v-25f5d247"),t=t(),Zt(),t),NP={class:"main"},DP={class:"mainleft"},OP={class:"mainleftleft"},xP={class:"categorias"},MP=Ft(()=>f("h2",null,"Catergorias",-1)),LP=Ft(()=>f("div",{class:"linea"},null,-1)),$P=Ft(()=>f("label",{for:"tipo1"},"Ceràmica",-1)),UP=Ft(()=>f("label",{for:"tipo2"},"Barro",-1)),FP=Ft(()=>f("label",{for:"tipo3"},"Tela",-1)),VP=Ft(()=>f("label",{for:"tipo4"},"Acuarela",-1)),BP={class:"precios"},jP=Ft(()=>f("h2",null,"Precios",-1)),qP=Ft(()=>f("div",{class:"linea"},null,-1)),HP={class:"precio"},zP=Ft(()=>f("div",{class:"preciosss"},[f("h3",null,"20.000"),f("h3",null,"800.000")],-1)),KP={class:"precioss"},WP=Ft(()=>f("span",null,"$",-1)),GP={class:"mainright"},QP={class:"targetas"},XP=["src"],YP=Ft(()=>f("div",{class:"linea"},null,-1)),JP={class:"price"},ZP=Ft(()=>f("div",{class:"lineap"},null,-1)),eN={class:"po"},tN=Ce({__name:"MainComponent",setup(t){const e=Nn(),n=J(2e4),s=J(!1),r=J(!1),i=J(!1),o=J(!1);let a=[],c=[];for(let l=0;l<e.datos.length;l++)for(let u=0;u<e.datos[l].productos.length;u++)a.push(e.datos[l].productos[u]),c.push(e.datos[l].productos[u]);return console.log(a),yu(async()=>{e.clearAll(),await e.setAll()}),rn(s,(l,u)=>{l?c=a.filter(h=>h.tipo=="Ceràmica"):c=a}),rn(r,(l,u)=>{l?c=a.filter(h=>h.tipo=="Barro"):c=a}),rn(i,(l,u)=>{l?c=a.filter(h=>h.tipo=="Tela"):c=a}),rn(o,(l,u)=>{l?c=a.filter(h=>h.tipo=="Acuarela"):c=a}),rn(n,(l,u)=>{c=a.filter(h=>parseInt(h.precio)<=l),console.log(l),l==2e4&&(c=a)}),(l,u)=>(ue(),Ee("main",NP,[f("div",DP,[f("div",OP,[f("div",xP,[MP,LP,f("form",null,[f("div",null,[Z(f("input",{type:"checkbox",name:"tipo1",id:"tipo1","onUpdate:modelValue":u[0]||(u[0]=h=>s.value=h)},null,512),[[Eo,s.value]]),$P]),f("div",null,[Z(f("input",{type:"checkbox",name:"tipo2",id:"tipo2","onUpdate:modelValue":u[1]||(u[1]=h=>r.value=h)},null,512),[[Eo,r.value]]),UP]),f("div",null,[Z(f("input",{type:"checkbox",name:"tipo3",id:"tipo3","onUpdate:modelValue":u[2]||(u[2]=h=>i.value=h)},null,512),[[Eo,i.value]]),FP]),f("div",null,[Z(f("input",{type:"checkbox",name:"tipo4",id:"tipo4","onUpdate:modelValue":u[3]||(u[3]=h=>o.value=h)},null,512),[[Eo,o.value]]),VP])])]),f("div",BP,[jP,qP,f("div",HP,[zP,Z(f("input",{type:"range",name:"rango",id:"rango",min:"20000",max:"800000","onUpdate:modelValue":u[4]||(u[4]=h=>n.value=h),step:"100"},null,512),[[Ne,n.value]]),f("div",KP,[WP,Z(f("input",{type:"number",name:"numero",id:"numero","onUpdate:modelValue":u[5]||(u[5]=h=>n.value=h),step:"100"},null,512),[[Ne,n.value]])])])])])]),f("div",GP,[f("div",QP,[(ue(!0),Ee(bt,null,La(Ge(c),(h,d)=>(ue(),Ee("div",{class:"targeta",key:d},[f("img",{src:h.img[0],alt:"Primer Articulo"},null,8,XP),YP,f("h2",null,Qn(h.nombre),1),f("div",JP,[f("p",null,"$ "+Qn(h.precio),1),ZP]),f("p",eN,Qn(h.desc),1)]))),128))])])]))}});const nN=Be(tN,[["__scopeId","data-v-25f5d247"]]),sN={class:"container"},rN=Ce({__name:"MainPage",setup(t){return(e,n)=>(ue(),Ee("div",sN,[Te(r_),Te(nN)]))}});const iN=Be(rN,[["__scopeId","data-v-3eabb5b3"]]),oN=Ce({__name:"HomeView",setup(t){return(e,n)=>(ue(),Or(iN))}}),aN="/cuy-art-shop/assets/salir-9650414e.svg",o_=t=>(Jt("data-v-19ba7e99"),t=t(),Zt(),t),cN={class:"head"},lN=o_(()=>f("img",{src:wc,alt:"Persona"},null,-1)),uN=[lN],hN=o_(()=>f("img",{src:aN,alt:"Menu"},null,-1)),dN=[hN],fN=Ce({__name:"NavBarUser",setup(t){const e=On(),n=async()=>{await rk(Lt()),e.push("/")},s=()=>{e.push("/")},r=()=>{Lt().currentUser!=null?e.push({name:"Informacion"}):e.push("/login")};return(i,o)=>(ue(),Ee("header",cN,[f("button",{onClick:r},uN),f("h1",{onClick:s},"CUYART-SHOP"),f("button",{onClick:n},dN)]))}});const Hr=Be(fN,[["__scopeId","data-v-19ba7e99"]]),a_="/cuy-art-shop/assets/Logo-3a4a9f77.jpeg",c_="/cuy-art-shop/assets/youtube-375cd83e.png",Cc="/cuy-art-shop/assets/facebook-193ba9b3.png",pN="/cuy-art-shop/assets/twitch-cf8e71de.png",Bh="/cuy-art-shop/assets/gmail-6497f877.png",gN={class:"main"},mN=qi('<div class="mainleft" data-v-a8f0d743><div class="mainleftleft" data-v-a8f0d743><img class="logo" src="'+a_+'" alt="El logo" data-v-a8f0d743><h1 data-v-a8f0d743>CUYART-SHOP</h1><h3 data-v-a8f0d743>Redes Sociales</h3><img src="'+c_+'" alt="Youtube" data-v-a8f0d743><img src="'+Cc+'" alt="Facebook" data-v-a8f0d743><img src="'+pN+'" alt="Twitch" data-v-a8f0d743><h3 data-v-a8f0d743>Contàctanos</h3><img src="'+Bh+'" alt="Gmail" data-v-a8f0d743></div></div><div class="mainright" data-v-a8f0d743><h1 data-v-a8f0d743>¿Quienes Somos?</h1><p data-v-a8f0d743>CUYART-SHOP es una tienda virtual de artesanìas que atraves del comercio electrònico busca conectar y ayudar a expandir los negocios de los artesanos a otras regiones del paìs</p><h1 data-v-a8f0d743>Misiòn</h1><p data-v-a8f0d743>La misiòn de la empresa Cuy Art Shop es brindar a los artesanos una conexiòn seguray de calidad con sus compradores promoviendo el comercio electrònico y extendiendo los negocios de nuestros artesanos</p><h1 data-v-a8f0d743>Visiòn</h1><p data-v-a8f0d743>Cuy Art Shop serà la empresa lìder en Colombia en venta y compra de artesanìas, siendo una de las màs importanes para expandir los negocios de los artesanos</p></div>',2),vN=[mN],yN=Ce({__name:"AboutComponent",setup(t){return J(2e4),(e,n)=>(ue(),Ee("main",gN,vN))}});const _N=Be(yN,[["__scopeId","data-v-a8f0d743"]]),wN={class:"container"},EN=Ce({__name:"AboutPage",setup(t){return(e,n)=>(ue(),Ee("div",wN,[Te(Hr),Te(_N)]))}});const IN=Be(EN,[["__scopeId","data-v-dce66de8"]]),bN=Ce({__name:"AboutView",setup(t){return(e,n)=>(ue(),Or(IN))}}),Ks=t=>(Jt("data-v-5d31f7d7"),t=t(),Zt(),t),TN={class:"contain"},CN=Ks(()=>f("div",{class:"imgprofile"},[f("img",{src:ds,alt:"Logo"})],-1)),SN=Ks(()=>f("div",{class:"reg"},[f("h1",null,"Login"),f("div",{class:"linea"})],-1)),AN={class:"in"},RN=Ks(()=>f("label",{for:""},"Correo",-1)),kN={class:"in"},PN=Ks(()=>f("label",{for:""},"Contraseña",-1)),NN=Ks(()=>f("div",{class:"goface"},[f("img",{src:Bh,alt:"Google"}),f("img",{src:Cc,alt:"Facebook"})],-1)),DN=Ks(()=>f("img",{src:wc,alt:"Logo"},null,-1)),ON=Ks(()=>f("div",{class:"space"},null,-1)),xN=Ce({__name:"LoginComponent",setup(t){const e=On(),n=()=>{e.push("/registro")},s=J(""),r=J(""),i=()=>{const o=Lt();ZR(o,s.value,r.value).then(a=>{a.user,alert("Bienvenido")}).then(()=>{e.push({name:"Informacion"})}).catch(a=>{alert("Intente de nuevo"),a.code,a.message})};return(o,a)=>(ue(),Ee("main",TN,[CN,SN,f("div",AN,[RN,Z(f("input",{type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},null,512),[[Ne,s.value]])]),f("div",kN,[PN,Z(f("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[Ne,r.value]])]),f("button",{onClick:i},"Ingresar"),NN,f("footer",null,[DN,f("button",{class:"bt-reg",onClick:n},"Regìstrate"),ON])]))}});const MN=Be(xN,[["__scopeId","data-v-5d31f7d7"]]),LN={class:"container"},$N=Ce({__name:"LoginPage",setup(t){return(e,n)=>(ue(),Ee("div",LN,[Te(Hr),Te(MN)]))}});const UN=Be($N,[["__scopeId","data-v-c896fb3a"]]),FN=Ce({__name:"LoginView",setup(t){return(e,n)=>(ue(),Or(UN))}}),mn=t=>(Jt("data-v-0416743c"),t=t(),Zt(),t),VN={class:"contain"},BN=mn(()=>f("div",{class:"imgprofile"},[f("img",{src:ds,alt:"Logo"})],-1)),jN=mn(()=>f("div",{class:"reg"},[f("h1",null,"Registrarse"),f("div",{class:"linea"})],-1)),qN={class:"in"},HN=mn(()=>f("label",{for:""},"Nombre Usuario",-1)),zN={class:"in"},KN=mn(()=>f("label",{for:""},"Correo",-1)),WN={class:"in"},GN=mn(()=>f("label",{for:""},"Contraseña",-1)),QN={class:"in"},XN=mn(()=>f("label",{for:""},"Repite Contraseña",-1)),YN=mn(()=>f("div",{class:"goface"},[f("img",{src:Bh,alt:"Google"}),f("img",{src:Cc,alt:"Facebook"})],-1)),JN=mn(()=>f("div",{class:"linea"},null,-1)),ZN=mn(()=>f("img",{src:wc,alt:"Logo"},null,-1)),eD=mn(()=>f("div",{class:"space"},null,-1)),tD=Ce({__name:"RegistroComponent",setup(t){const e=Nn(),n=J(""),s=J(""),r=J(""),i=J(""),o=On(),a=()=>{o.push("/login")},c=async()=>{if(n.value.trim()==""&&r.value.trim()==""&&s.value.trim()==""&&i.value.trim()==""){console.log("Llenar todos los datos");return}if(s.value!==i.value){console.log("mal rey");return}console.log("adentro");try{await Wv(Bt($t,"usuarios",r.value.toString()),{nombre:n.value.toString(),correo:r.value.toString(),password:s.value.toString(),uso:!0}).then(()=>{console.log("Document successfully written!")}),console.log("Document written with ID: ",Bt($t,"usuarios",r.value.toString()).id)}catch(l){console.log("Error adding document: ",l)}await JR(Lt(),r.value.toString(),s.value.toString()).then(l=>{}),e.clearAll(),await e.setAll(),o.push({name:"Informacion"})};return(l,u)=>(ue(),Ee("main",VN,[BN,jN,f("div",qN,[HN,Z(f("input",{type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h),required:""},null,512),[[Ne,n.value]])]),f("div",zN,[KN,Z(f("input",{type:"email",name:"usuario",id:"usuario","onUpdate:modelValue":u[1]||(u[1]=h=>r.value=h),required:""},null,512),[[Ne,r.value]])]),f("div",WN,[GN,Z(f("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":u[2]||(u[2]=h=>s.value=h),required:""},null,512),[[Ne,s.value]])]),f("div",QN,[XN,Z(f("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":u[3]||(u[3]=h=>i.value=h),required:""},null,512),[[Ne,i.value]])]),f("button",{onClick:c},"Registrate"),YN,JN,f("footer",null,[ZN,f("button",{class:"bt-reg",onClick:a},"Ingresa"),eD])]))}});const nD=Be(tD,[["__scopeId","data-v-0416743c"]]),sD={class:"container"},rD=Ce({__name:"RegistroPage",setup(t){return(e,n)=>(ue(),Ee("div",sD,[Te(Hr),Te(nD)]))}});const iD=Be(rD,[["__scopeId","data-v-932305bb"]]),oD=Ce({__name:"RegistroView",setup(t){return(e,n)=>(ue(),Or(iD))}}),Ws=t=>(Jt("data-v-c30a76a9"),t=t(),Zt(),t),aD={class:"main"},cD={class:"mainleft"},lD={class:"mainleftleft"},uD=Ws(()=>f("h1",null,"Mi Cuenta",-1)),hD=Ws(()=>f("div",{class:"linea1"},null,-1)),dD={class:"list"},fD={class:"lineaa2"},pD={class:"list1"},gD={class:"lineaa3"},mD={class:"opc"},vD={class:"list3"},yD={class:"lineaa4"},_D={class:"list4"},wD={class:"lineaa5"},ED=Ws(()=>f("div",{class:"linea"},null,-1)),ID=Ws(()=>f("img",{class:"logo",src:a_,alt:"El logo"},null,-1)),bD=Ws(()=>f("h1",null,"CUYART-SHOP",-1)),TD=Ws(()=>f("img",{src:c_,alt:"Youtube"},null,-1)),CD=Ws(()=>f("img",{src:Cc,alt:"Facebook"},null,-1)),SD={class:"mainright"},AD=Ce({__name:"MiCuentaComponent",setup(t){const e=On();Jp(()=>{var d,g,v,y,E,b,k,S,U,z;const u=Nn(),h=Lt().currentUser;(g=u.getRegistro(((d=h==null?void 0:h.email)==null?void 0:d.toString())||" "))!=null&&g.nombre,(y=u.getRegistro(((v=h==null?void 0:h.email)==null?void 0:v.toString())||""))!=null&&y.correo,(b=u.getRegistro(((E=h==null?void 0:h.email)==null?void 0:E.toString())||""))!=null&&b.password,(S=u.getRegistro(((k=h==null?void 0:h.email)==null?void 0:k.toString())||""))!=null&&S.telefono,(z=u.getRegistro(((U=h==null?void 0:h.email)==null?void 0:U.toString())||""))!=null&&z.direccion});const n=J(!0),s=J(!1),r=J(!1),i=J(!1),o=()=>{s.value===!1?n.value=!n.value:(s.value=!1,n.value=!0,e.push({name:"Informacion"})),n.value===!0?e.push({name:"Informacion"}):e.push({name:"Actualizar"})},a=()=>{n.value===!0||(n.value=!0),s.value||(s.value=!s.value),s.value===!1&&(r.value=!1,i.value=!1),s.value===!0&&(r.value=!1,i.value=!1),e.push({name:"Vendedor"})},c=()=>{r.value===!1||(r.value=!1),i.value=!i.value,e.push({name:"ActualizarProd"})},l=()=>{i.value===!1||(i.value=!1),r.value=!r.value,e.push({name:"Añadir"})};return(u,h)=>{const d=tg("RouterView");return ue(),Ee("main",aD,[f("div",cD,[f("div",lD,[uD,hD,f("div",dD,[f("div",null,[f("div",{class:bs(["linea2",n.value?"":"rot"])},null,2),Z(f("div",fD,null,512),[[_n,!n.value]])]),f("label",{onClick:o},"Actualizar Informacion")]),f("div",pD,[f("div",null,[f("div",{class:bs(["linea3",s.value?"rot":""])},null,2),Z(f("div",gD,null,512),[[_n,s.value]])]),f("label",{onClick:a},"Vendedora")]),f("div",mD,[f("div",vD,[f("div",null,[Z(f("div",{class:bs(["linea4",r.value?"rot":""])},null,2),[[_n,s.value]]),Z(f("div",yD,null,512),[[_n,r.value]])]),Z(f("label",{onClick:l},"Añadir Producto",512),[[_n,s.value]])]),f("div",_D,[f("div",null,[Z(f("div",{class:bs(["linea5",i.value?"rot":""])},null,2),[[_n,s.value]]),Z(f("div",wD,null,512),[[_n,i.value]])]),Z(f("label",null,"Actualizar Producto",512),[[_n,s.value]])])]),ED,ID,bD,TD,CD])]),f("div",SD,[Te(d,{onCambio:c})])])}}});const RD=Be(AD,[["__scopeId","data-v-c30a76a9"]]),kD={class:"container"},PD=Ce({__name:"MiCuentaPage",setup(t){return(e,n)=>(ue(),Ee("div",kD,[Te(Hr),Te(RD)]))}});const ND=Be(PD,[["__scopeId","data-v-5b446284"]]),DD=Ce({__name:"MiCuentaView",setup(t){return(e,n)=>(ue(),Or(ND))}}),zr=t=>(Jt("data-v-8443db14"),t=t(),Zt(),t),OD={class:"contain"},xD=zr(()=>f("div",{class:"imgprofile"},[f("img",{src:ds,alt:"Logo"})],-1)),MD=zr(()=>f("div",{class:"reg"},[f("h1",null,"Informacion"),f("div",{class:"linea"})],-1)),LD={class:"in"},$D=zr(()=>f("label",{for:""},"Nombre de Usuario",-1)),UD=["placeholder"],FD={class:"in"},VD=zr(()=>f("label",{for:""},"Correo",-1)),BD=["placeholder"],jD={class:"in"},qD=zr(()=>f("label",{for:""},"Telèfono",-1)),HD=["placeholder"],zD={class:"in"},KD=zr(()=>f("label",{for:""},"Direcciòn",-1)),WD=["placeholder"],GD=Ce({__name:"MiCuentaInformacion",setup(t){var h,d,g,v,y,E,b,k,S,U;const e=Nn(),n=Lt().currentUser;let s=((d=e.getRegistro(((h=n==null?void 0:n.email)==null?void 0:h.toString())||""))==null?void 0:d.nombre)||"",r=((v=e.getRegistro(((g=n==null?void 0:n.email)==null?void 0:g.toString())||""))==null?void 0:v.correo)||"";(E=e.getRegistro(((y=n==null?void 0:n.email)==null?void 0:y.toString())||""))!=null&&E.password;let i=((k=e.getRegistro(((b=n==null?void 0:n.email)==null?void 0:b.toString())||""))==null?void 0:k.telefono)||"",o=((U=e.getRegistro(((S=n==null?void 0:n.email)==null?void 0:S.toString())||""))==null?void 0:U.direccion)||"";const a=J(""),c=J(""),l=J(""),u=J("");return(z,Q)=>(ue(),Ee("main",OD,[xD,MD,f("div",LD,[$D,Z(f("input",{type:"text",name:"usuario",id:"usuario1",placeholder:Ge(s),disabled:"","onUpdate:modelValue":Q[0]||(Q[0]=L=>a.value=L)},null,8,UD),[[Ne,a.value]])]),f("div",FD,[VD,Z(f("input",{type:"email",name:"correo",id:"correo",placeholder:Ge(r),disabled:"","onUpdate:modelValue":Q[1]||(Q[1]=L=>c.value=L)},null,8,BD),[[Ne,c.value]])]),f("div",jD,[qD,Z(f("input",{placeholder:Ge(i),type:"number",name:"telefono",id:"telefono",disabled:"","onUpdate:modelValue":Q[2]||(Q[2]=L=>l.value=L)},null,8,HD),[[Ne,l.value]])]),f("div",zD,[KD,Z(f("input",{placeholder:Ge(o),type:"text",name:"direccion",id:"dirrecion",disabled:"","onUpdate:modelValue":Q[3]||(Q[3]=L=>u.value=L)},null,8,WD),[[Ne,u.value]])])]))}});const QD=Be(GD,[["__scopeId","data-v-8443db14"]]),fs=t=>(Jt("data-v-7aac8959"),t=t(),Zt(),t),XD={class:"contain"},YD=fs(()=>f("div",{class:"imgprofile"},[f("img",{src:ds,alt:"Logo"})],-1)),JD=fs(()=>f("div",{class:"reg"},[f("h1",null,"Informacion"),f("div",{class:"linea"})],-1)),ZD={class:"in"},eO=fs(()=>f("label",{for:""},"Nombre de Usuario",-1)),tO=["placeholder"],nO={class:"in"},sO=fs(()=>f("label",{for:""},"Correo",-1)),rO=["placeholder"],iO={class:"in"},oO=fs(()=>f("label",{for:""},"Contraseña",-1)),aO=["placeholder"],cO={class:"in"},lO=fs(()=>f("label",{for:""},"Telèfono",-1)),uO=["placeholder"],hO={class:"in"},dO=fs(()=>f("label",{for:""},"Direcciòn",-1)),fO=["placeholder"],pO=fs(()=>f("button",{class:"bt-can"},"Cancelar",-1)),gO=Ce({__name:"MiCuentaActualizar",setup(t){var y,E,b,k,S,U,z,Q,L,w;const e=On(),n=Nn(),s=Lt().currentUser,r=J(""),i=J(""),o=J(""),a=J(""),c=J("");let l=((E=n.getRegistro(((y=s==null?void 0:s.email)==null?void 0:y.toString())||""))==null?void 0:E.nombre)||"",u=((k=n.getRegistro(((b=s==null?void 0:s.email)==null?void 0:b.toString())||""))==null?void 0:k.correo)||"",h=((U=n.getRegistro(((S=s==null?void 0:s.email)==null?void 0:S.toString())||""))==null?void 0:U.password)||"",d=((Q=n.getRegistro(((z=s==null?void 0:s.email)==null?void 0:z.toString())||""))==null?void 0:Q.telefono)||"",g=((w=n.getRegistro(((L=s==null?void 0:s.email)==null?void 0:L.toString())||""))==null?void 0:w.direccion)||"";const v=async()=>{var Oe,Se,me,he,nt,Rt,Et,st,vn,ms,T,V,$;let O=!1;if(s==null)return;console.log(s);let re=(Oe=s==null?void 0:s.email)==null?void 0:Oe.toString(),ye=((me=n.getRegistro(((Se=s.email)==null?void 0:Se.toString())||""))==null?void 0:me.nombre)||"",tt=((nt=n.getRegistro(((he=s.email)==null?void 0:he.toString())||""))==null?void 0:nt.password)||"",At=((Et=n.getRegistro(((Rt=s.email)==null?void 0:Rt.toString())||""))==null?void 0:Et.telefono)||"",Ye=((vn=n.getRegistro(((st=s.email)==null?void 0:st.toString())||""))==null?void 0:vn.direccion)||"";if(((T=n.getRegistro(((ms=s==null?void 0:s.email)==null?void 0:ms.toString())||""))==null?void 0:T.correo)!=i.value&&i.value.trim()!="")try{await ek(s,i.value.toString()).then(()=>{console.log("correo actualizado"),O=!0}).catch(x=>{console.log("error al actualizar correo")}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}if((($=n.getRegistro(((V=s==null?void 0:s.email)==null?void 0:V.toString())||""))==null?void 0:$.password)!=o.value&&o.value.trim()!=""){try{await tk(s,o.value.toString()).then(()=>{console.log("Contraseña actualizado")}).catch(x=>{console.log("error al actualizar la contraseña")}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}try{await Rs(Bt($t,"usuarios",re||""),{password:o.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}}if(O)try{await kC(Bt($t,"usuarios",re||"")).then(()=>{console.log("documento eliminado")}).catch(x=>{console.log("error al eliminar el documento")}),await Wv(Bt($t,"usuarios",i.value.toString()),{nombre:r.value.toString().trim()!=""?r.value.toString():ye.toString(),correo:i.value.toString(),password:o.value.toString().trim()!=""?o.value.toString():tt.toString(),telefono:a.value.toString().trim()!=""?a.value.toString():At.toString(),direccion:c.value.toString().trim()!=""?c.value.toString():Ye.toString(),uso:!0}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}if(r.value.toString().trim()!="")try{await Rs(Bt($t,"usuarios",re||""),{nombre:r.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")})}catch(x){console.log(x)}if(a.value.toString().trim()!="")try{await Rs(Bt($t,"usuarios",re||""),{telefono:a.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")})}catch(x){console.log(x)}if(c.value.toString().trim()!="")try{await Rs(Bt($t,"usuarios",re||""),{direccion:c.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")})}catch(x){console.log(x)}n.clearAll(),await n.setAll(),e.push({name:"Informacion"})};return(O,re)=>(ue(),Ee("main",XD,[YD,JD,f("div",ZD,[eO,Z(f("input",{placeholder:Ge(l),type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":re[0]||(re[0]=ye=>r.value=ye)},null,8,tO),[[Ne,r.value]])]),f("div",nO,[sO,Z(f("input",{placeholder:Ge(u),type:"email",name:"correo",id:"correo1","onUpdate:modelValue":re[1]||(re[1]=ye=>i.value=ye)},null,8,rO),[[Ne,i.value]])]),f("div",iO,[oO,Z(f("input",{placeholder:Ge(h),type:"password",name:"password",id:"password","onUpdate:modelValue":re[2]||(re[2]=ye=>o.value=ye)},null,8,aO),[[Ne,o.value]])]),f("div",cO,[lO,Z(f("input",{placeholder:Ge(d),type:"number",name:"telefono",id:"telefono","onUpdate:modelValue":re[3]||(re[3]=ye=>a.value=ye)},null,8,uO),[[Ne,a.value]])]),f("div",hO,[dO,Z(f("input",{placeholder:Ge(g),type:"text",name:"dirreccion",id:"dirreccion","onUpdate:modelValue":re[4]||(re[4]=ye=>c.value=ye)},null,8,fO),[[Ne,c.value]])]),f("div",{class:"actu"},[f("button",{class:"bt-act",onClick:v},"Actualizar"),pO])]))}});const mO=Be(gO,[["__scopeId","data-v-7aac8959"]]),vO="/cuy-art-shop/assets/settings-a5f050a0.svg",yO="/cuy-art-shop/assets/delete-49766517.svg",Sc=t=>(Jt("data-v-72a4ac5c"),t=t(),Zt(),t),_O={class:"main"},wO={class:"left"},EO=Sc(()=>f("div",{class:"top"},[f("h1",null,"Productos"),f("div",{class:"linea"})],-1)),IO={class:"center"},bO=["src"],TO={class:"produc"},CO={class:"desc"},SO=["onClick"],AO=Sc(()=>f("img",{src:vO,alt:"settings"},null,-1)),RO=[AO],kO=["onClick"],PO=Sc(()=>f("img",{src:yO,alt:"Delete"},null,-1)),NO=[PO],DO={class:"right"},OO={class:"rightop"},xO=Sc(()=>f("div",{class:"imgprof"},[f("img",{src:ds,alt:"Persona"})],-1)),MO=Ce({__name:"VendedorMain",emits:["cambio"],setup(t,{emit:e}){var u,h,d,g,v,y;const n=Nn(),s=Lt().currentUser,r=On(),i=J(((h=n.getRegistro(((u=s==null?void 0:s.email)==null?void 0:u.toString())||""))==null?void 0:h.nombre)||""),o=((g=n.getRegistro(((d=s==null?void 0:s.email)==null?void 0:d.toString())||""))==null?void 0:g.correo)||"",a=((y=n.getRegistro(((v=s==null?void 0:s.email)==null?void 0:v.toString())||""))==null?void 0:y.productos)||[];console.log(a);const c=E=>{console.log("este es el numero"+E),r.push({name:"ActualizarProd"}),e("cambio"),PP(E)},l=async E=>{a.splice(E,1);try{await Rs(Bt($t,"usuarios",o||""),{productos:a}).then(()=>{console.log("documento creado")}).catch(b=>{console.log("error al crear el documento")})}catch(b){console.log(b)}};return(E,b)=>(ue(),Ee("main",_O,[f("div",wO,[EO,f("div",IO,[(ue(!0),Ee(bt,null,La(Ge(a),(k,S)=>(ue(),Ee("div",{class:"pp",key:k.desc},[f("img",{src:k.img[0],alt:"Un Cuy"},null,8,bO),f("div",TO,[f("div",CO,[f("p",null,Qn(k.nombre),1),f("p",null,Qn(k.desc),1)]),f("div",null,[f("button",{onClick:U=>c(S)},RO,8,SO),f("button",{onClick:U=>l(S)},NO,8,kO)])])]))),128))])]),f("div",DO,[f("div",OO,[xO,f("h1",null,Qn(i.value),1)])])]))}});const LO=Be(MO,[["__scopeId","data-v-72a4ac5c"]]),ps=t=>(Jt("data-v-f27ba4a5"),t=t(),Zt(),t),$O={class:"main"},UO={class:"left"},FO=ps(()=>f("div",{class:"top"},[f("h1",null,"Añadir Productos"),f("div",{class:"linea"})],-1)),VO={class:"center"},BO=ps(()=>f("div",{class:"leftcenter"},[f("h2",null,"Nombre del Producto"),f("h2",null,"Precio del producto"),f("h2",null,"Stock del Producto"),f("h2",null,"Categorias"),f("h2",null,"Imàgenes del producto"),f("h2",{class:"dee"},"Descripciòn")],-1)),jO={class:"rightcenter"},qO={class:"cat"},HO=ps(()=>f("label",{for:"tipo1",class:"che"},"Ceràmica",-1)),zO=ps(()=>f("label",{for:"tipo2",class:"che"},"Barro",-1)),KO=ps(()=>f("label",{for:"tipo3",class:"che"},"Tela",-1)),WO=ps(()=>f("label",{for:"tipo4",class:"che"},"Acuarela",-1)),GO={class:"anaimg"},QO={class:"ii"},XO=["src"],YO=["onClick"],JO=ps(()=>f("label",{for:"file",class:"add"},"Añadir",-1)),ZO={class:"bt"},ex={class:"right"},tx={class:"rightop"},nx=ps(()=>f("div",{class:"imgprof"},[f("img",{src:ds,alt:"Persona"})],-1)),sx=Ce({__name:"VendedorAñadir",setup(t){var b,k,S,U,z,Q;const e=On(),n=()=>{e.push({name:"Vendedor"})},s=Nn(),r=Lt().currentUser,i=J(((k=s.getRegistro(((b=r==null?void 0:r.email)==null?void 0:b.toString())||""))==null?void 0:k.nombre)||""),o=J(((U=s.getRegistro(((S=r==null?void 0:r.email)==null?void 0:S.toString())||""))==null?void 0:U.correo)||""),a=((Q=s.getRegistro(((z=r==null?void 0:r.email)==null?void 0:z.toString())||""))==null?void 0:Q.productos)||[],c=J(""),l=J(""),u=J(0);let h=J([]);const d=J(""),g=J(""),v=async L=>{const w=await KS(L.target.files[0],o.value||"");console.log(L.target.files[0]);const O=new FileReader;O.readAsDataURL(L.target.files[0]),h.value.length<3&&(O.onload=re=>{h.value.push(w)}),console.log("URL: ",w)},y=L=>{h.value=h.value.filter(w=>!L)},E=async()=>{const L={nombre:c.value.toString(),precio:l.value.toString(),stock:u.value,img:h.value,desc:d.value.toString(),tipo:g.value.toString()};a.push(L),await Rs(Bt($t,"usuarios",o.value||""),{productos:a}).then(()=>{console.log("documento actualizado")}).catch(w=>{console.error("Error adding document: ",w)})};return(L,w)=>(ue(),Ee("main",$O,[f("div",UO,[FO,f("div",VO,[BO,f("div",jO,[Z(f("input",{type:"text","onUpdate:modelValue":w[0]||(w[0]=O=>c.value=O)},null,512),[[Ne,c.value]]),Z(f("input",{type:"text","onUpdate:modelValue":w[1]||(w[1]=O=>l.value=O)},null,512),[[Ne,l.value]]),Z(f("input",{type:"text","onUpdate:modelValue":w[2]||(w[2]=O=>u.value=O)},null,512),[[Ne,u.value]]),f("div",qO,[f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo1",class:"check",value:"Ceràmica","onUpdate:modelValue":w[3]||(w[3]=O=>g.value=O)},null,512),[[Wn,g.value]]),HO]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo2",class:"check",value:"Barro","onUpdate:modelValue":w[4]||(w[4]=O=>g.value=O)},null,512),[[Wn,g.value]]),zO]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo3",class:"check",value:"Tela","onUpdate:modelValue":w[5]||(w[5]=O=>g.value=O)},null,512),[[Wn,g.value]]),KO]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo4",class:"check",value:"Acuarela","onUpdate:modelValue":w[6]||(w[6]=O=>g.value=O)},null,512),[[Wn,g.value]]),WO])]),f("div",GO,[(ue(!0),Ee(bt,null,La(Ge(h),(O,re)=>(ue(),Ee("div",QO,[f("img",{src:O,alt:"Es un cuy"},null,8,XO),f("label",{class:"bor",onClick:ye=>y(O)},"x",8,YO)]))),256)),JO,f("input",{type:"file",name:"file",id:"file",onChange:w[7]||(w[7]=O=>v(O))},null,32)]),Z(f("textarea",{"onUpdate:modelValue":w[8]||(w[8]=O=>d.value=O)},null,512),[[Ne,d.value]])])]),f("div",ZO,[f("button",{class:"bt-add",onClick:w[9]||(w[9]=(...O)=>E&&E(...O))},"Añadir"),f("button",{class:"bt-can",onClick:w[10]||(w[10]=O=>n())},"Cancelar")])]),f("div",ex,[f("div",tx,[nx,f("h1",null,Qn(i.value),1)])])]))}});const rx=Be(sx,[["__scopeId","data-v-f27ba4a5"]]),gs=t=>(Jt("data-v-0df5956c"),t=t(),Zt(),t),ix={class:"main"},ox={class:"left"},ax=gs(()=>f("div",{class:"top"},[f("h1",null,"Actualizar Productos"),f("div",{class:"linea"})],-1)),cx={class:"center"},lx=gs(()=>f("div",{class:"leftcenter"},[f("h2",null,"Nombre del Producto"),f("h2",null,"Precio del producto"),f("h2",null,"Stock del Producto"),f("h2",null,"Categorias"),f("h2",null,"Imàgenes del producto"),f("h2",{class:"dee"},"Descripciòn")],-1)),ux={class:"rightcenter"},hx={class:"cat"},dx=gs(()=>f("label",{for:"tipo1",class:"che"},"Ceràmica",-1)),fx=gs(()=>f("label",{for:"tipo2",class:"che"},"Barro",-1)),px=gs(()=>f("label",{for:"tipo3",class:"che"},"Tela",-1)),gx=gs(()=>f("label",{for:"tipo4",class:"che"},"Acuarela",-1)),mx={class:"anaimg"},vx={class:"ii"},yx=["src"],_x=["onClick"],wx=gs(()=>f("label",{for:"file",class:"add"},"Añadir",-1)),Ex={class:"bt"},Ix={class:"right"},bx={class:"rightop"},Tx=gs(()=>f("div",{class:"imgprof"},[f("img",{src:ds,alt:"Persona"})],-1)),Cx=Ce({__name:"VendedorActualizar",setup(t){var b,k,S,U,z,Q;const e=Nn(),n=Lt().currentUser,s=On(),r=()=>{s.push({name:"Vendedor"})};Zp(()=>{var O,re,ye,tt,At,Ye,Oe,Se,me,he,nt,Rt;const L=Nn(),w=Lt().currentUser;console.log($n()),u.value="",h.value="",d.value=0,g.value=[],v.value="",y.value="",u.value=((re=L.getRegistro(((O=w==null?void 0:w.email)==null?void 0:O.toString())||""))==null?void 0:re.productos[$n()].nombre)||"",h.value=((tt=L.getRegistro(((ye=w==null?void 0:w.email)==null?void 0:ye.toString())||""))==null?void 0:tt.productos[$n()].precio)||"",d.value=((Ye=L.getRegistro(((At=w==null?void 0:w.email)==null?void 0:At.toString())||""))==null?void 0:Ye.productos[$n()].stock)||0,g.value=((Se=L.getRegistro(((Oe=w==null?void 0:w.email)==null?void 0:Oe.toString())||""))==null?void 0:Se.productos[$n()].img)||[],v.value=((he=L.getRegistro(((me=w==null?void 0:w.email)==null?void 0:me.toString())||""))==null?void 0:he.productos[$n()].desc)||"",y.value=((Rt=L.getRegistro(((nt=w==null?void 0:w.email)==null?void 0:nt.toString())||""))==null?void 0:Rt.productos[$n()].tipo)||""});const i=L=>{console.log(L.target.files[0]);const w=new FileReader;w.readAsDataURL(L.target.files[0]),g.value.length<3&&(w.onload=O=>{g.value.push(O.target.result)})},o=L=>{g.value=g.value.filter(w=>!L)},a=J(((k=e.getRegistro(((b=n==null?void 0:n.email)==null?void 0:b.toString())||""))==null?void 0:k.nombre)||""),c=J(((U=e.getRegistro(((S=n==null?void 0:n.email)==null?void 0:S.toString())||""))==null?void 0:U.correo)||""),l=((Q=e.getRegistro(((z=n==null?void 0:n.email)==null?void 0:z.toString())||""))==null?void 0:Q.productos)||[],u=J(""),h=J(""),d=J(0);let g=J([]);const v=J(""),y=J(""),E=async()=>{const L={nombre:u.value.toString(),precio:h.value.toString(),stock:d.value,img:g.value,desc:v.value.toString(),tipo:y.value.toString()};l.splice($n(),1,L),await Rs(Bt($t,"usuarios",c.value||""),{productos:l}).then(()=>{console.log("documento actualizado")}).catch(w=>{console.error("Error adding document: ",w)})};return(L,w)=>(ue(),Ee("main",ix,[f("div",ox,[ax,f("div",cx,[lx,f("div",ux,[Z(f("input",{type:"text","onUpdate:modelValue":w[0]||(w[0]=O=>u.value=O)},null,512),[[Ne,u.value]]),Z(f("input",{type:"text","onUpdate:modelValue":w[1]||(w[1]=O=>h.value=O)},null,512),[[Ne,h.value]]),Z(f("input",{type:"text","onUpdate:modelValue":w[2]||(w[2]=O=>d.value=O)},null,512),[[Ne,d.value]]),f("div",hx,[f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo1",class:"check",value:"Ceràmica","onUpdate:modelValue":w[3]||(w[3]=O=>y.value=O)},null,512),[[Wn,y.value]]),dx]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo2",class:"check",value:"Barro","onUpdate:modelValue":w[4]||(w[4]=O=>y.value=O)},null,512),[[Wn,y.value]]),fx]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo3",class:"check",value:"Tela","onUpdate:modelValue":w[5]||(w[5]=O=>y.value=O)},null,512),[[Wn,y.value]]),px]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo4",class:"check",value:"Acuarela","onUpdate:modelValue":w[6]||(w[6]=O=>y.value=O)},null,512),[[Wn,y.value]]),gx])]),f("div",mx,[(ue(!0),Ee(bt,null,La(Ge(g),(O,re)=>(ue(),Ee("div",vx,[f("img",{src:O,alt:"Es un cuy"},null,8,yx),f("label",{class:"bor",onClick:ye=>o(O)},"x",8,_x)]))),256)),wx,f("input",{type:"file",name:"file",id:"file",onChange:w[7]||(w[7]=O=>i(O))},null,32)]),Z(f("textarea",{"onUpdate:modelValue":w[8]||(w[8]=O=>v.value=O)},null,512),[[Ne,v.value]])])]),f("div",Ex,[f("button",{class:"bt-add",onClick:E},"Actualizar"),f("button",{class:"bt-can",onClick:w[9]||(w[9]=O=>r())},"Cancelar")])]),f("div",Ix,[f("div",bx,[Tx,f("h1",null,Qn(a.value),1)])])]))}});const Sx=Be(Cx,[["__scopeId","data-v-0df5956c"]]),Bi="/cuy-art-shop/assets/cuy-a46bd5f5.jpeg";const Ax={},Rx={class:"main"},kx=qi('<div class="left" data-v-3a891a9f><div class="center" data-v-3a891a9f><div class="pp" data-v-3a891a9f><img src="'+Bi+'" alt="Un Cuy" data-v-3a891a9f><div class="produc" data-v-3a891a9f><div class="desc" data-v-3a891a9f><p data-v-3a891a9f>Figura Cuy - Graduado</p><p data-v-3a891a9f>(Producto Nariñense decorado a mano)</p></div><div data-v-3a891a9f><button data-v-3a891a9f>eliminar</button></div></div></div><div class="pp" data-v-3a891a9f><img src="'+Bi+'" alt="Un Cuy" data-v-3a891a9f><div class="produc" data-v-3a891a9f><div class="desc" data-v-3a891a9f><p data-v-3a891a9f>Figura Cuy - Graduado</p><p data-v-3a891a9f>(Producto Nariñense decorado a mano)</p></div><div data-v-3a891a9f><button data-v-3a891a9f>eliminar</button></div></div></div></div></div><div class="right" data-v-3a891a9f><div class="rightop" data-v-3a891a9f><div class="top" data-v-3a891a9f><h1 data-v-3a891a9f>Carrito de Compra</h1><div class="linea" data-v-3a891a9f></div></div><div class="valor" data-v-3a891a9f><div data-v-3a891a9f><h2 data-v-3a891a9f>Precio</h2><h3 data-v-3a891a9f>$ 50.000</h3></div><div data-v-3a891a9f><h2 data-v-3a891a9f>Descuento de la oferta</h2><h3 data-v-3a891a9f>$ 0.0</h3></div><div data-v-3a891a9f><h2 data-v-3a891a9f>Envìo</h2><h3 data-v-3a891a9f>$ 10.000</h3></div><div data-v-3a891a9f><h2 data-v-3a891a9f>Subtotal</h2><h3 data-v-3a891a9f>$ 60.000</h3></div><div class="bt" data-v-3a891a9f><button class="bt-comp" data-v-3a891a9f>Comprar</button></div></div></div></div>',2),Px=[kx];function Nx(t,e){return ue(),Ee("main",Rx,Px)}const Dx=Be(Ax,[["render",Nx],["__scopeId","data-v-3a891a9f"]]),Ox={class:"container"},xx=Ce({__name:"CarroPage",setup(t){return(e,n)=>(ue(),Ee("div",Ox,[Te(Hr),Te(Dx)]))}});const Mx=Be(xx,[["__scopeId","data-v-19f39c00"]]),Lx="/cuy-art-shop/assets/09757-BIG-2a63eeeb.jpg",$x={class:"container"},Ux=qi('<main class="main" data-v-8338ad93><div class="left" data-v-8338ad93><div class="center" data-v-8338ad93><img src="'+Bi+'" alt="Un Cuy" data-v-8338ad93><div class="linea" data-v-8338ad93></div><div class="info" data-v-8338ad93><h2 data-v-8338ad93>Descripcion</h2><p data-v-8338ad93>Cerdito de Ceramica blanco con salpicadura de colores.</p><p data-v-8338ad93>Producto tolimence</p><p data-v-8338ad93>Perfecto regalo para tu pareja o amig@</p><p data-v-8338ad93>Entrègale a esa persona un recuerdo del tolima y de nuestros artesanos, pequeño, lindo y con carisma</p></div></div></div><div class="right" data-v-8338ad93><div class="rightop" data-v-8338ad93><div class="top" data-v-8338ad93><h1 data-v-8338ad93>Cerdito personalizado de ceramica</h1><div class="linea" data-v-8338ad93></div><h2 data-v-8338ad93>$ 25.000</h2><div class="sto" data-v-8338ad93><h2 data-v-8338ad93>Stock</h2><input type="number" name="stock" id="stock" data-v-8338ad93></div><div class="masmen" data-v-8338ad93><button data-v-8338ad93>+</button><button data-v-8338ad93>-</button></div><div class="agrecom" data-v-8338ad93><button class="bt-add" data-v-8338ad93>Agregar</button><button class="bt-comp" data-v-8338ad93>Comprar</button></div></div><div class="valor" data-v-8338ad93><div class="targeta" data-v-8338ad93><img src="'+Lx+'" alt="Primer Articulo" data-v-8338ad93><div class="price" data-v-8338ad93><div class="ppp" data-v-8338ad93><h2 data-v-8338ad93>Vandola de Cafe</h2><div data-v-8338ad93><p data-v-8338ad93>$ 45.000</p><div class="lineap" data-v-8338ad93></div></div><p data-v-8338ad93>Ha, Pero que lindo</p></div></div></div></div></div></div></main>',1),Fx=Ce({__name:"PaginaProducto",setup(t){return(e,n)=>(ue(),Ee("div",$x,[Te(r_),Ux]))}});const Vx=Be(Fx,[["__scopeId","data-v-8338ad93"]]),Bx={class:"container"},jx=qi('<main class="main" data-v-a6daa7a1><div class="left" data-v-a6daa7a1><div class="leftleft" data-v-a6daa7a1><h2 data-v-a6daa7a1>Direccìon</h2><h4 data-v-a6daa7a1>Otra:</h4><h2 class="hh" data-v-a6daa7a1>Metodo de Pago</h2></div><div class="leftright" data-v-a6daa7a1><input type="text" name="dir" id="dir" class="dir" data-v-a6daa7a1><textarea name="otra" id="otra" data-v-a6daa7a1></textarea><input type="text" name="pago" id="pago" data-v-a6daa7a1><div class="more" data-v-a6daa7a1><h4 data-v-a6daa7a1>Numero Targeta</h4><input type="text" name="tar" id="tar" data-v-a6daa7a1><h4 data-v-a6daa7a1>Nombre Titular</h4><input type="text" name="tit" id="tit" data-v-a6daa7a1><h4 data-v-a6daa7a1>Expira</h4><input type="date" name="ex" id="ex" class="da" data-v-a6daa7a1><h4 data-v-a6daa7a1>CVV</h4><input type="text" name="cv" id="cv" data-v-a6daa7a1></div><div class="bt" data-v-a6daa7a1><button class="bt-comp" data-v-a6daa7a1>Comprar</button><button class="bt-can" data-v-a6daa7a1>Cancelar</button></div></div></div><div class="right" data-v-a6daa7a1><div class="rightop" data-v-a6daa7a1><div class="pp" data-v-a6daa7a1><img src="'+Bi+'" alt="Un Cuy" data-v-a6daa7a1><div class="produc" data-v-a6daa7a1><div class="desc" data-v-a6daa7a1><p data-v-a6daa7a1>Figura Cuy - Graduado</p><p data-v-a6daa7a1>(Producto Nariñense decorado a mano)</p></div><div data-v-a6daa7a1><button data-v-a6daa7a1>eliminar</button></div></div></div><div class="pp" data-v-a6daa7a1><img src="'+Bi+'" alt="Un Cuy" data-v-a6daa7a1><div class="produc" data-v-a6daa7a1><div class="desc" data-v-a6daa7a1><p data-v-a6daa7a1>Figura Cuy - Graduado</p><p data-v-a6daa7a1>(Producto Nariñense decorado a mano)</p></div><div data-v-a6daa7a1><button data-v-a6daa7a1>eliminar</button></div></div></div></div><div class="rightbottom" data-v-a6daa7a1><div class="valor" data-v-a6daa7a1><div class="one" data-v-a6daa7a1><h2 data-v-a6daa7a1>Precio</h2><h3 data-v-a6daa7a1>$ 50.000</h3></div><div data-v-a6daa7a1><h2 data-v-a6daa7a1>Descuento de la oferta</h2><h3 data-v-a6daa7a1>$ 0.0</h3></div><div data-v-a6daa7a1><h2 data-v-a6daa7a1>Envìo</h2><h3 data-v-a6daa7a1>$ 10.000</h3></div><div data-v-a6daa7a1><h2 data-v-a6daa7a1>Subtotal</h2><h3 data-v-a6daa7a1>$ 60.000</h3></div></div></div></div></main>',1),qx=Ce({__name:"CarroCompra",setup(t){return(e,n)=>(ue(),Ee("div",Bx,[Te(Hr),jx]))}});const Hx=Be(qx,[["__scopeId","data-v-a6daa7a1"]]),zx=sR({history:_A("/cuy-art-shop/"),routes:[{path:"/",name:"Home",component:oN},{path:"/about",name:"About",component:bN},{path:"/login",name:"Login",component:FN},{path:"/registro",name:"Registro",component:oD},{path:"/micuenta",name:"MiCuenta",component:DD,children:[{path:"informacion",name:"Informacion",component:QD},{path:"actualizar",name:"Actualizar",component:mO},{path:"vendedor",name:"Vendedor",component:LO},{path:"añadir-producto",name:"Añadir",component:rx},{path:"actualizar-producto",name:"ActualizarProd",component:Sx}]},{path:"/carrito",name:"Carrito",component:Mx},{path:"/producto",name:"Producto",component:Vx},{path:"/compra",name:"Compra",component:Hx}]}),jh=O0(tA);jh.use(L0().use(JS));jh.use(zx);jh.mount("#app");
