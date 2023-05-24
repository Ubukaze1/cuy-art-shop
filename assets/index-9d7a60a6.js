(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ru(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function iu(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=et(s)?my(s):iu(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(et(t))return t;if(ke(t))return t}}const fy=/;(?![^(]*\))/g,py=/:([^]+)/,gy=/\/\*.*?\*\//gs;function my(t){const e={};return t.replace(gy,"").split(fy).forEach(n=>{if(n){const s=n.split(py);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bs(t){let e="";if(et(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=bs(t[n]);s&&(e+=s+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_y=ru(vy);function Ep(t){return!!t||t===""}function yy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=fr(t[s],e[s]);return n}function fr(t,e){if(t===e)return!0;let n=Xh(t),s=Xh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ei(t),s=Ei(e),n||s)return t===e;if(n=J(t),s=J(e),n||s)return n&&s?yy(t,e):!1;if(n=ke(t),s=ke(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!fr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ip(t,e){return t.findIndex(n=>fr(n,e))}const Xe=t=>et(t)?t:t==null?"":J(t)||ke(t)&&(t.toString===Cp||!ae(t.toString))?JSON.stringify(t,Tp,2):String(t),Tp=(t,e)=>e&&e.__v_isRef?Tp(t,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Pa(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!J(e)&&!Sp(e)?String(e):e,Ne={},rr=[],Yt=()=>{},wy=()=>!1,Ey=/^on[^a-z]/,Na=t=>Ey.test(t),ou=t=>t.startsWith("onUpdate:"),St=Object.assign,au=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iy=Object.prototype.hasOwnProperty,me=(t,e)=>Iy.call(t,e),J=Array.isArray,ir=t=>Hi(t)==="[object Map]",Pa=t=>Hi(t)==="[object Set]",Xh=t=>Hi(t)==="[object Date]",ae=t=>typeof t=="function",et=t=>typeof t=="string",Ei=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",bp=t=>ke(t)&&ae(t.then)&&ae(t.catch),Cp=Object.prototype.toString,Hi=t=>Cp.call(t),Ty=t=>Hi(t).slice(8,-1),Sp=t=>Hi(t)==="[object Object]",cu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Uo=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},by=/-(\w)/g,vn=Da(t=>t.replace(by,(e,n)=>n?n.toUpperCase():"")),Cy=/\B([A-Z])/g,Nr=Da(t=>t.replace(Cy,"-$1").toLowerCase()),Oa=Da(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rc=Da(t=>t?`on${Oa(t)}`:""),Ii=(t,e)=>!Object.is(t,e),Fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Jo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ol=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yh;const Sy=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $t;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Rp(t){return new Ap(t)}function Ay(t,e=$t){e&&e.active&&e.effects.push(t)}function kp(){return $t}function Ry(t){$t&&$t.cleanups.push(t)}const lu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Np=t=>(t.w&rs)>0,Pp=t=>(t.n&rs)>0,ky=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rs},Ny=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Np(r)&&!Pp(r)?r.delete(t):e[n++]=r,r.w&=~rs,r.n&=~rs}e.length=n}},Zo=new WeakMap;let ni=0,rs=1;const al=30;let Qt;const ks=Symbol(""),cl=Symbol("");class uu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ay(this,s)}run(){if(!this.active)return this.fn();let e=Qt,n=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,Yn=!0,rs=1<<++ni,ni<=al?ky(this):Jh(this),this.fn()}finally{ni<=al&&Ny(this),rs=1<<--ni,Qt=this.parent,Yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(Jh(this),this.onStop&&this.onStop(),this.active=!1)}}function Jh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yn=!0;const Dp=[];function Pr(){Dp.push(Yn),Yn=!1}function Dr(){const t=Dp.pop();Yn=t===void 0?!0:t}function Dt(t,e,n){if(Yn&&Qt){let s=Zo.get(t);s||Zo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=lu()),Op(r)}}function Op(t,e){let n=!1;ni<=al?Pp(t)||(t.n|=rs,n=!Np(t)):n=!t.has(Qt),n&&(t.add(Qt),Qt.deps.push(t))}function kn(t,e,n,s,r,i){const o=Zo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?cu(n)&&a.push(o.get("length")):(a.push(o.get(ks)),ir(t)&&a.push(o.get(cl)));break;case"delete":J(t)||(a.push(o.get(ks)),ir(t)&&a.push(o.get(cl)));break;case"set":ir(t)&&a.push(o.get(ks));break}if(a.length===1)a[0]&&ll(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ll(lu(c))}}function ll(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&Zh(s);for(const s of n)s.computed||Zh(s)}function Zh(t,e){(t!==Qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Py(t,e){var n;return(n=Zo.get(t))===null||n===void 0?void 0:n.get(e)}const Dy=ru("__proto__,__v_isRef,__isVue"),xp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ei)),Oy=hu(),xy=hu(!1,!0),My=hu(!0),ed=Ly();function Ly(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ve(this);for(let i=0,o=this.length;i<o;i++)Dt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pr();const s=ve(this)[e].apply(this,n);return Dr(),s}}),t}function $y(t){const e=ve(this);return Dt(e,"has",t),e.hasOwnProperty(t)}function hu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Zy:Fp:e?Up:$p).get(s))return s;const o=J(s);if(!t){if(o&&me(ed,r))return Reflect.get(ed,r,i);if(r==="hasOwnProperty")return $y}const a=Reflect.get(s,r,i);return(Ei(r)?xp.has(r):Dy(r))||(t||Dt(s,"get",r),e)?a:Ue(a)?o&&cu(r)?a:a.value:ke(a)?t?Vp(a):Or(a):a}}const Uy=Mp(),Fy=Mp(!0);function Mp(t=!1){return function(n,s,r,i){let o=n[s];if(pr(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&(!ea(r)&&!pr(r)&&(o=ve(o),r=ve(r)),!J(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=J(n)&&cu(s)?Number(s)<n.length:me(n,s),c=Reflect.set(n,s,r,i);return n===ve(i)&&(a?Ii(r,o)&&kn(n,"set",s,r):kn(n,"add",s,r)),c}}function Vy(t,e){const n=me(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&kn(t,"delete",e,void 0),s}function By(t,e){const n=Reflect.has(t,e);return(!Ei(e)||!xp.has(e))&&Dt(t,"has",e),n}function jy(t){return Dt(t,"iterate",J(t)?"length":ks),Reflect.ownKeys(t)}const Lp={get:Oy,set:Uy,deleteProperty:Vy,has:By,ownKeys:jy},qy={get:My,set(t,e){return!0},deleteProperty(t,e){return!0}},Hy=St({},Lp,{get:xy,set:Fy}),du=t=>t,xa=t=>Reflect.getPrototypeOf(t);function _o(t,e,n=!1,s=!1){t=t.__v_raw;const r=ve(t),i=ve(e);n||(e!==i&&Dt(r,"get",e),Dt(r,"get",i));const{has:o}=xa(r),a=s?du:n?gu:Ti;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function yo(t,e=!1){const n=this.__v_raw,s=ve(n),r=ve(t);return e||(t!==r&&Dt(s,"has",t),Dt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function wo(t,e=!1){return t=t.__v_raw,!e&&Dt(ve(t),"iterate",ks),Reflect.get(t,"size",t)}function td(t){t=ve(t);const e=ve(this);return xa(e).has.call(e,t)||(e.add(t),kn(e,"add",t,t)),this}function nd(t,e){e=ve(e);const n=ve(this),{has:s,get:r}=xa(n);let i=s.call(n,t);i||(t=ve(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ii(e,o)&&kn(n,"set",t,e):kn(n,"add",t,e),this}function sd(t){const e=ve(this),{has:n,get:s}=xa(e);let r=n.call(e,t);r||(t=ve(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&kn(e,"delete",t,void 0),i}function rd(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&kn(t,"clear",void 0,void 0),n}function Eo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ve(o),c=e?du:t?gu:Ti;return!t&&Dt(a,"iterate",ks),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Io(t,e,n){return function(...s){const r=this.__v_raw,i=ve(r),o=ir(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?du:e?gu:Ti;return!e&&Dt(i,"iterate",c?cl:ks),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Ln(t){return function(...e){return t==="delete"?!1:this}}function zy(){const t={get(i){return _o(this,i)},get size(){return wo(this)},has:yo,add:td,set:nd,delete:sd,clear:rd,forEach:Eo(!1,!1)},e={get(i){return _o(this,i,!1,!0)},get size(){return wo(this)},has:yo,add:td,set:nd,delete:sd,clear:rd,forEach:Eo(!1,!0)},n={get(i){return _o(this,i,!0)},get size(){return wo(this,!0)},has(i){return yo.call(this,i,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Eo(!0,!1)},s={get(i){return _o(this,i,!0,!0)},get size(){return wo(this,!0)},has(i){return yo.call(this,i,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Io(i,!1,!1),n[i]=Io(i,!0,!1),e[i]=Io(i,!1,!0),s[i]=Io(i,!0,!0)}),[t,n,e,s]}const[Ky,Wy,Gy,Qy]=zy();function fu(t,e){const n=e?t?Qy:Gy:t?Wy:Ky;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(me(n,r)&&r in s?n:s,r,i)}const Xy={get:fu(!1,!1)},Yy={get:fu(!1,!0)},Jy={get:fu(!0,!1)},$p=new WeakMap,Up=new WeakMap,Fp=new WeakMap,Zy=new WeakMap;function ew(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tw(t){return t.__v_skip||!Object.isExtensible(t)?0:ew(Ty(t))}function Or(t){return pr(t)?t:pu(t,!1,Lp,Xy,$p)}function nw(t){return pu(t,!1,Hy,Yy,Up)}function Vp(t){return pu(t,!0,qy,Jy,Fp)}function pu(t,e,n,s,r){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=tw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Jn(t){return pr(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function ea(t){return!!(t&&t.__v_isShallow)}function Bp(t){return Jn(t)||pr(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function gr(t){return Jo(t,"__v_skip",!0),t}const Ti=t=>ke(t)?Or(t):t,gu=t=>ke(t)?Vp(t):t;function jp(t){Yn&&Qt&&(t=ve(t),Op(t.dep||(t.dep=lu())))}function qp(t,e){t=ve(t);const n=t.dep;n&&ll(n)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function K(t){return Hp(t,!1)}function sw(t){return Hp(t,!0)}function Hp(t,e){return Ue(t)?t:new rw(t,e)}class rw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:Ti(e)}get value(){return jp(this),this._value}set value(e){const n=this.__v_isShallow||ea(e)||pr(e);e=n?e:ve(e),Ii(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ti(e),qp(this))}}function Me(t){return Ue(t)?t.value:t}const iw={get:(t,e,n)=>Me(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function zp(t){return Jn(t)?t:new Proxy(t,iw)}function ow(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=cw(t,n);return e}class aw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Py(ve(this._object),this._key)}}function cw(t,e,n){const s=t[e];return Ue(s)?s:new aw(t,e,n)}var Kp;class lw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Kp]=!1,this._dirty=!0,this.effect=new uu(e,()=>{this._dirty||(this._dirty=!0,qp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ve(this);return jp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Kp="__v_isReadonly";function uw(t,e,n=!1){let s,r;const i=ae(t);return i?(s=t,r=Yt):(s=t.get,r=t.set),new lw(s,r,i||!r,n)}function Zn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ma(i,e,n)}return r}function Jt(t,e,n,s){if(ae(t)){const i=Zn(t,e,n,s);return i&&bp(i)&&i.catch(o=>{Ma(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Jt(t[i],e,n,s));return r}function Ma(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Zn(c,null,10,[t,o,a]);return}}hw(t,n,r,s)}function hw(t,e,n,s=!0){console.error(t)}let bi=!1,ul=!1;const mt=[];let cn=0;const or=[];let bn=null,Is=0;const Wp=Promise.resolve();let mu=null;function vu(t){const e=mu||Wp;return t?e.then(this?t.bind(this):t):e}function dw(t){let e=cn+1,n=mt.length;for(;e<n;){const s=e+n>>>1;Ci(mt[s])<t?e=s+1:n=s}return e}function _u(t){(!mt.length||!mt.includes(t,bi&&t.allowRecurse?cn+1:cn))&&(t.id==null?mt.push(t):mt.splice(dw(t.id),0,t),Gp())}function Gp(){!bi&&!ul&&(ul=!0,mu=Wp.then(Xp))}function fw(t){const e=mt.indexOf(t);e>cn&&mt.splice(e,1)}function pw(t){J(t)?or.push(...t):(!bn||!bn.includes(t,t.allowRecurse?Is+1:Is))&&or.push(t),Gp()}function id(t,e=bi?cn+1:0){for(;e<mt.length;e++){const n=mt[e];n&&n.pre&&(mt.splice(e,1),e--,n())}}function Qp(t){if(or.length){const e=[...new Set(or)];if(or.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((n,s)=>Ci(n)-Ci(s)),Is=0;Is<bn.length;Is++)bn[Is]();bn=null,Is=0}}const Ci=t=>t.id==null?1/0:t.id,gw=(t,e)=>{const n=Ci(t)-Ci(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Xp(t){ul=!1,bi=!0,mt.sort(gw);const e=Yt;try{for(cn=0;cn<mt.length;cn++){const n=mt[cn];n&&n.active!==!1&&Zn(n,null,14)}}finally{cn=0,mt.length=0,Qp(),bi=!1,mu=null,(mt.length||or.length)&&Xp()}}function mw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Ne;h&&(r=n.map(p=>et(p)?p.trim():p)),d&&(r=n.map(ol))}let a,c=s[a=Rc(e)]||s[a=Rc(vn(e))];!c&&i&&(c=s[a=Rc(Nr(e))]),c&&Jt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jt(l,t,6,r)}}function Yp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ae(t)){const c=l=>{const u=Yp(l,e,!0);u&&(a=!0,St(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ke(t)&&s.set(t,null),null):(J(i)?i.forEach(c=>o[c]=null):St(o,i),ke(t)&&s.set(t,o),o)}function La(t,e){return!t||!Na(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Nr(e))||me(t,e))}let Ft=null,$a=null;function ta(t){const e=Ft;return Ft=t,$a=t&&t.type.__scopeId||null,e}function Ot(t){$a=t}function xt(){$a=null}function vw(t,e=Ft,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&pd(-1);const i=ta(e);let o;try{o=t(...r)}finally{ta(i),s._d&&pd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function kc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:p,ctx:_,inheritAttrs:v}=t;let y,T;const I=ta(t);try{if(n.shapeFlag&4){const U=r||s;y=an(u.call(U,U,d,i,p,h,_)),T=c}else{const U=e;y=an(U.length>1?U(i,{attrs:c,slots:a,emit:l}):U(i,null)),T=e.props?c:_w(c)}}catch(U){ui.length=0,Ma(U,t,1),y=be(Si)}let S=y;if(T&&v!==!1){const U=Object.keys(T),{shapeFlag:z}=S;U.length&&z&7&&(o&&U.some(ou)&&(T=yw(T,o)),S=mr(S,T))}return n.dirs&&(S=mr(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),y=S,ta(I),y}const _w=t=>{let e;for(const n in t)(n==="class"||n==="style"||Na(n))&&((e||(e={}))[n]=t[n]);return e},yw=(t,e)=>{const n={};for(const s in t)(!ou(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ww(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?od(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!La(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?od(s,o,l):!0:!!o;return!1}function od(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!La(n,i))return!0}return!1}function Ew({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Iw=t=>t.__isSuspense;function Tw(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):pw(t)}function Vo(t,e){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=Ke||Ft;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ae(e)?e.call(s.proxy):e}}const To={};function ln(t,e,n){return Jp(t,e,n)}function Jp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ne){const a=kp()===(Ke==null?void 0:Ke.scope)?Ke:null;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=ea(t)):Jn(t)?(c=()=>t,s=!0):J(t)?(u=!0,l=t.some(S=>Jn(S)||ea(S)),c=()=>t.map(S=>{if(Ue(S))return S.value;if(Jn(S))return Cs(S);if(ae(S))return Zn(S,a,2)})):ae(t)?e?c=()=>Zn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Jt(t,a,3,[h])}:c=Yt,e&&s){const S=c;c=()=>Cs(S())}let d,h=S=>{d=T.onStop=()=>{Zn(S,a,4)}},p;if(Ri)if(h=Yt,e?n&&Jt(e,a,3,[c(),u?[]:void 0,h]):c(),r==="sync"){const S=m0();p=S.__watcherHandles||(S.__watcherHandles=[])}else return Yt;let _=u?new Array(t.length).fill(To):To;const v=()=>{if(T.active)if(e){const S=T.run();(s||l||(u?S.some((U,z)=>Ii(U,_[z])):Ii(S,_)))&&(d&&d(),Jt(e,a,3,[S,_===To?void 0:u&&_[0]===To?[]:_,h]),_=S)}else T.run()};v.allowRecurse=!!e;let y;r==="sync"?y=v:r==="post"?y=()=>Rt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),y=()=>_u(v));const T=new uu(c,y);e?n?v():_=T.run():r==="post"?Rt(T.run.bind(T),a&&a.suspense):T.run();const I=()=>{T.stop(),a&&a.scope&&au(a.scope.effects,T)};return p&&p.push(I),I}function bw(t,e,n){const s=this.proxy,r=et(t)?t.includes(".")?Zp(s,t):()=>s[t]:t.bind(s,s);let i;ae(e)?i=e:(i=e.handler,n=e);const o=Ke;vr(this);const a=Jp(r,i.bind(s),n);return o?vr(o):Ns(),a}function Zp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Cs(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Cs(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)Cs(t[n],e);else if(Pa(t)||ir(t))t.forEach(n=>{Cs(n,e)});else if(Sp(t))for(const n in t)Cs(t[n],e);return t}function Ce(t){return ae(t)?{setup:t,name:t.name}:t}const Bo=t=>!!t.type.__asyncLoader,eg=t=>t.type.__isKeepAlive;function Cw(t,e){tg(t,"a",e)}function Sw(t,e){tg(t,"da",e)}function tg(t,e,n=Ke){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)eg(r.parent.vnode)&&Aw(s,e,n,r),r=r.parent}}function Aw(t,e,n,s){const r=Ua(e,t,s,!0);yu(()=>{au(s[e],r)},n)}function Ua(t,e,n=Ke,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pr(),vr(n);const a=Jt(e,n,t,o);return Ns(),Dr(),a});return s?r.unshift(i):r.push(i),i}}const Mn=t=>(e,n=Ke)=>(!Ri||t==="sp")&&Ua(t,(...s)=>e(...s),n),ng=Mn("bm"),sg=Mn("m"),Rw=Mn("bu"),kw=Mn("u"),Nw=Mn("bum"),yu=Mn("um"),Pw=Mn("sp"),Dw=Mn("rtg"),Ow=Mn("rtc");function xw(t,e=Ke){Ua("ec",t,e)}function Z(t,e){const n=Ft;if(n===null)return t;const s=Ba(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ne]=e[i];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&Cs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function _s(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Pr(),Jt(c,n,8,[t.el,a,t,e]),Dr())}}const rg="components";function ig(t,e){return Lw(rg,t,!0,e)||t}const Mw=Symbol();function Lw(t,e,n=!0,s=!1){const r=Ft||Ke;if(r){const i=r.type;if(t===rg){const a=f0(i,!1);if(a&&(a===e||a===vn(e)||a===Oa(vn(e))))return i}const o=ad(r[t]||i[t],e)||ad(r.appContext[t],e);return!o&&s?i:o}}function ad(t,e){return t&&(t[e]||t[vn(e)]||t[Oa(vn(e))])}function js(t,e,n,s){let r;const i=n&&n[s];if(J(t)||et(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ke(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const hl=t=>t?mg(t)?Ba(t)||t.proxy:hl(t.parent):null,li=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hl(t.parent),$root:t=>hl(t.root),$emit:t=>t.emit,$options:t=>wu(t),$forceUpdate:t=>t.f||(t.f=()=>_u(t.update)),$nextTick:t=>t.n||(t.n=vu.bind(t.proxy)),$watch:t=>bw.bind(t)}),Nc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&me(t,e),$w={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Nc(s,e))return o[e]=1,s[e];if(r!==Ne&&me(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&me(l,e))return o[e]=3,i[e];if(n!==Ne&&me(n,e))return o[e]=4,n[e];dl&&(o[e]=0)}}const u=li[e];let d,h;if(u)return e==="$attrs"&&Dt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ne&&me(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,me(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Nc(r,e)?(r[e]=n,!0):s!==Ne&&me(s,e)?(s[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&me(t,o)||Nc(e,o)||(a=i[0])&&me(a,o)||me(s,o)||me(li,o)||me(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let dl=!0;function Uw(t){const e=wu(t),n=t.proxy,s=t.ctx;dl=!1,e.beforeCreate&&cd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:y,beforeDestroy:T,beforeUnmount:I,destroyed:S,unmounted:U,render:z,renderTracked:Y,renderTriggered:M,errorCaptured:E,serverPrefetch:N,expose:X,inheritAttrs:ie,components:Le,directives:it,filters:Be}=e;if(l&&Fw(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const _e in o){const fe=o[_e];ae(fe)&&(s[_e]=fe.bind(n))}if(r){const _e=r.call(n,n);ke(_e)&&(t.data=Or(_e))}if(dl=!0,i)for(const _e in i){const fe=i[_e],ot=ae(fe)?fe.bind(n,n):ae(fe.get)?fe.get.bind(n,n):Yt,Mt=!ae(fe)&&ae(fe.set)?fe.set.bind(n):Yt,At=Ut({get:ot,set:Mt});Object.defineProperty(s,_e,{enumerable:!0,configurable:!0,get:()=>At.value,set:at=>At.value=at})}if(a)for(const _e in a)og(a[_e],s,n,_e);if(c){const _e=ae(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(fe=>{Vo(fe,_e[fe])})}u&&cd(u,t,"c");function Se(_e,fe){J(fe)?fe.forEach(ot=>_e(ot.bind(n))):fe&&_e(fe.bind(n))}if(Se(ng,d),Se(sg,h),Se(Rw,p),Se(kw,_),Se(Cw,v),Se(Sw,y),Se(xw,E),Se(Ow,Y),Se(Dw,M),Se(Nw,I),Se(yu,U),Se(Pw,N),J(X))if(X.length){const _e=t.exposed||(t.exposed={});X.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:ot=>n[fe]=ot})})}else t.exposed||(t.exposed={});z&&t.render===Yt&&(t.render=z),ie!=null&&(t.inheritAttrs=ie),Le&&(t.components=Le),it&&(t.directives=it)}function Fw(t,e,n=Yt,s=!1){J(t)&&(t=fl(t));for(const r in t){const i=t[r];let o;ke(i)?"default"in i?o=Ht(i.from||r,i.default,!0):o=Ht(i.from||r):o=Ht(i),Ue(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function cd(t,e,n){Jt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function og(t,e,n,s){const r=s.includes(".")?Zp(n,s):()=>n[s];if(et(t)){const i=e[t];ae(i)&&ln(r,i)}else if(ae(t))ln(r,t.bind(n));else if(ke(t))if(J(t))t.forEach(i=>og(i,e,n,s));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&ln(r,i,t)}}function wu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>na(c,l,o,!0)),na(c,e,o)),ke(e)&&i.set(e,c),c}function na(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&na(t,i,n,!0),r&&r.forEach(o=>na(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Vw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vw={data:ld,props:ws,emits:ws,methods:ws,computed:ws,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:ws,directives:ws,watch:jw,provide:ld,inject:Bw};function ld(t,e){return e?t?function(){return St(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function Bw(t,e){return ws(fl(t),fl(e))}function fl(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function ws(t,e){return t?St(St(Object.create(null),t),e):e}function jw(t,e){if(!t)return e;if(!e)return t;const n=St(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function qw(t,e,n,s=!1){const r={},i={};Jo(i,Va,1),t.propsDefaults=Object.create(null),ag(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:nw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Hw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ve(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(La(t.emitsOptions,h))continue;const p=e[h];if(c)if(me(i,h))p!==i[h]&&(i[h]=p,l=!0);else{const _=vn(h);r[_]=pl(c,a,_,p,t,!1)}else p!==i[h]&&(i[h]=p,l=!0)}}}else{ag(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!me(e,d)&&((u=Nr(d))===d||!me(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=pl(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!me(e,d))&&(delete i[d],l=!0)}l&&kn(t,"set","$attrs")}function ag(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Uo(c))continue;const l=e[c];let u;r&&me(r,u=vn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:La(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ve(n),l=a||Ne;for(let u=0;u<i.length;u++){const d=i[u];n[d]=pl(r,c,d,l[d],t,!me(l,d))}}return o}function pl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ae(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(vr(r),s=l[n]=c.call(null,e),Ns())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Nr(n))&&(s=!0))}return s}function cg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ae(t)){const u=d=>{c=!0;const[h,p]=cg(d,e,!0);St(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ke(t)&&s.set(t,rr),rr;if(J(i))for(let u=0;u<i.length;u++){const d=vn(i[u]);ud(d)&&(o[d]=Ne)}else if(i)for(const u in i){const d=vn(u);if(ud(d)){const h=i[u],p=o[d]=J(h)||ae(h)?{type:h}:Object.assign({},h);if(p){const _=fd(Boolean,p.type),v=fd(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||me(p,"default"))&&a.push(d)}}}const l=[o,a];return ke(t)&&s.set(t,l),l}function ud(t){return t[0]!=="$"}function hd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function dd(t,e){return hd(t)===hd(e)}function fd(t,e){return J(e)?e.findIndex(n=>dd(n,t)):ae(e)&&dd(e,t)?0:-1}const lg=t=>t[0]==="_"||t==="$stable",Eu=t=>J(t)?t.map(an):[an(t)],zw=(t,e,n)=>{if(e._n)return e;const s=vw((...r)=>Eu(e(...r)),n);return s._c=!1,s},ug=(t,e,n)=>{const s=t._ctx;for(const r in t){if(lg(r))continue;const i=t[r];if(ae(i))e[r]=zw(r,i,s);else if(i!=null){const o=Eu(i);e[r]=()=>o}}},hg=(t,e)=>{const n=Eu(e);t.slots.default=()=>n},Kw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),Jo(e,"_",n)):ug(e,t.slots={})}else t.slots={},e&&hg(t,e);Jo(t.slots,Va,1)},Ww=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(St(r,e),!n&&a===1&&delete r._):(i=!e.$stable,ug(e,r)),o=e}else e&&(hg(t,e),o={default:1});if(i)for(const a in r)!lg(a)&&!(a in o)&&delete r[a]};function dg(){return{app:null,config:{isNativeTag:wy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gw=0;function Qw(t,e){return function(s,r=null){ae(s)||(s=Object.assign({},s)),r!=null&&!ke(r)&&(r=null);const i=dg(),o=new Set;let a=!1;const c=i.app={_uid:Gw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:v0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ae(l.install)?(o.add(l),l.install(c,...u)):ae(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=be(s,r);return h.appContext=i,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Ba(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function gl(t,e,n,s,r=!1){if(J(t)){t.forEach((h,p)=>gl(h,e&&(J(e)?e[p]:e),n,s,r));return}if(Bo(s)&&!r)return;const i=s.shapeFlag&4?Ba(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(et(l)?(u[l]=null,me(d,l)&&(d[l]=null)):Ue(l)&&(l.value=null)),ae(c))Zn(c,a,12,[o,u]);else{const h=et(c),p=Ue(c);if(h||p){const _=()=>{if(t.f){const v=h?me(d,c)?d[c]:u[c]:c.value;r?J(v)&&au(v,i):J(v)?v.includes(i)||v.push(i):h?(u[c]=[i],me(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,me(d,c)&&(d[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Rt(_,n)):_()}}}const Rt=Tw;function Xw(t){return Yw(t)}function Yw(t,e){const n=Sy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Yt,insertStaticContent:_}=t,v=(g,m,w,b=null,R=null,O=null,B=!1,D=null,L=!!m.dynamicChildren)=>{if(g===m)return;g&&!Xr(g,m)&&(b=$(g),at(g,R,O,!0),g=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:k,ref:G,shapeFlag:q}=m;switch(k){case Fa:y(g,m,w,b);break;case Si:T(g,m,w,b);break;case jo:g==null&&I(m,w,b,B);break;case lt:Le(g,m,w,b,R,O,B,D,L);break;default:q&1?z(g,m,w,b,R,O,B,D,L):q&6?it(g,m,w,b,R,O,B,D,L):(q&64||q&128)&&k.process(g,m,w,b,R,O,B,D,L,ge)}G!=null&&R&&gl(G,g&&g.ref,O,m||g,!m)},y=(g,m,w,b)=>{if(g==null)s(m.el=a(m.children),w,b);else{const R=m.el=g.el;m.children!==g.children&&l(R,m.children)}},T=(g,m,w,b)=>{g==null?s(m.el=c(m.children||""),w,b):m.el=g.el},I=(g,m,w,b)=>{[g.el,g.anchor]=_(g.children,m,w,b,g.el,g.anchor)},S=({el:g,anchor:m},w,b)=>{let R;for(;g&&g!==m;)R=h(g),s(g,w,b),g=R;s(m,w,b)},U=({el:g,anchor:m})=>{let w;for(;g&&g!==m;)w=h(g),r(g),g=w;r(m)},z=(g,m,w,b,R,O,B,D,L)=>{B=B||m.type==="svg",g==null?Y(m,w,b,R,O,B,D,L):N(g,m,R,O,B,D,L)},Y=(g,m,w,b,R,O,B,D)=>{let L,k;const{type:G,props:q,shapeFlag:Q,transition:se,dirs:ue}=g;if(L=g.el=o(g.type,O,q&&q.is,q),Q&8?u(L,g.children):Q&16&&E(g.children,L,null,b,R,O&&G!=="foreignObject",B,D),ue&&_s(g,null,b,"created"),M(L,g,g.scopeId,B,b),q){for(const Te in q)Te!=="value"&&!Uo(Te)&&i(L,Te,null,q[Te],O,g.children,b,R,V);"value"in q&&i(L,"value",null,q.value),(k=q.onVnodeBeforeMount)&&on(k,b,g)}ue&&_s(g,null,b,"beforeMount");const Ae=(!R||R&&!R.pendingBranch)&&se&&!se.persisted;Ae&&se.beforeEnter(L),s(L,m,w),((k=q&&q.onVnodeMounted)||Ae||ue)&&Rt(()=>{k&&on(k,b,g),Ae&&se.enter(L),ue&&_s(g,null,b,"mounted")},R)},M=(g,m,w,b,R)=>{if(w&&p(g,w),b)for(let O=0;O<b.length;O++)p(g,b[O]);if(R){let O=R.subTree;if(m===O){const B=R.vnode;M(g,B,B.scopeId,B.slotScopeIds,R.parent)}}},E=(g,m,w,b,R,O,B,D,L=0)=>{for(let k=L;k<g.length;k++){const G=g[k]=D?Bn(g[k]):an(g[k]);v(null,G,m,w,b,R,O,B,D)}},N=(g,m,w,b,R,O,B)=>{const D=m.el=g.el;let{patchFlag:L,dynamicChildren:k,dirs:G}=m;L|=g.patchFlag&16;const q=g.props||Ne,Q=m.props||Ne;let se;w&&ys(w,!1),(se=Q.onVnodeBeforeUpdate)&&on(se,w,m,g),G&&_s(m,g,w,"beforeUpdate"),w&&ys(w,!0);const ue=R&&m.type!=="foreignObject";if(k?X(g.dynamicChildren,k,D,w,b,ue,O):B||fe(g,m,D,null,w,b,ue,O,!1),L>0){if(L&16)ie(D,m,q,Q,w,b,R);else if(L&2&&q.class!==Q.class&&i(D,"class",null,Q.class,R),L&4&&i(D,"style",q.style,Q.style,R),L&8){const Ae=m.dynamicProps;for(let Te=0;Te<Ae.length;Te++){const We=Ae[Te],Gt=q[We],Qs=Q[We];(Qs!==Gt||We==="value")&&i(D,We,Gt,Qs,R,g.children,w,b,V)}}L&1&&g.children!==m.children&&u(D,m.children)}else!B&&k==null&&ie(D,m,q,Q,w,b,R);((se=Q.onVnodeUpdated)||G)&&Rt(()=>{se&&on(se,w,m,g),G&&_s(m,g,w,"updated")},b)},X=(g,m,w,b,R,O,B)=>{for(let D=0;D<m.length;D++){const L=g[D],k=m[D],G=L.el&&(L.type===lt||!Xr(L,k)||L.shapeFlag&70)?d(L.el):w;v(L,k,G,null,b,R,O,B,!0)}},ie=(g,m,w,b,R,O,B)=>{if(w!==b){if(w!==Ne)for(const D in w)!Uo(D)&&!(D in b)&&i(g,D,w[D],null,B,m.children,R,O,V);for(const D in b){if(Uo(D))continue;const L=b[D],k=w[D];L!==k&&D!=="value"&&i(g,D,k,L,B,m.children,R,O,V)}"value"in b&&i(g,"value",w.value,b.value)}},Le=(g,m,w,b,R,O,B,D,L)=>{const k=m.el=g?g.el:a(""),G=m.anchor=g?g.anchor:a("");let{patchFlag:q,dynamicChildren:Q,slotScopeIds:se}=m;se&&(D=D?D.concat(se):se),g==null?(s(k,w,b),s(G,w,b),E(m.children,w,G,R,O,B,D,L)):q>0&&q&64&&Q&&g.dynamicChildren?(X(g.dynamicChildren,Q,w,R,O,B,D),(m.key!=null||R&&m===R.subTree)&&fg(g,m,!0)):fe(g,m,w,G,R,O,B,D,L)},it=(g,m,w,b,R,O,B,D,L)=>{m.slotScopeIds=D,g==null?m.shapeFlag&512?R.ctx.activate(m,w,b,B,L):Be(m,w,b,R,O,B,L):Oe(g,m,L)},Be=(g,m,w,b,R,O,B)=>{const D=g.component=a0(g,b,R);if(eg(g)&&(D.ctx.renderer=ge),l0(D),D.asyncDep){if(R&&R.registerDep(D,Se),!g.el){const L=D.subTree=be(Si);T(null,L,m,w)}return}Se(D,g,m,w,R,O,B)},Oe=(g,m,w)=>{const b=m.component=g.component;if(ww(g,m,w))if(b.asyncDep&&!b.asyncResolved){_e(b,m,w);return}else b.next=m,fw(b.update),b.update();else m.el=g.el,b.vnode=m},Se=(g,m,w,b,R,O,B)=>{const D=()=>{if(g.isMounted){let{next:G,bu:q,u:Q,parent:se,vnode:ue}=g,Ae=G,Te;ys(g,!1),G?(G.el=ue.el,_e(g,G,B)):G=ue,q&&Fo(q),(Te=G.props&&G.props.onVnodeBeforeUpdate)&&on(Te,se,G,ue),ys(g,!0);const We=kc(g),Gt=g.subTree;g.subTree=We,v(Gt,We,d(Gt.el),$(Gt),g,R,O),G.el=We.el,Ae===null&&Ew(g,We.el),Q&&Rt(Q,R),(Te=G.props&&G.props.onVnodeUpdated)&&Rt(()=>on(Te,se,G,ue),R)}else{let G;const{el:q,props:Q}=m,{bm:se,m:ue,parent:Ae}=g,Te=Bo(m);if(ys(g,!1),se&&Fo(se),!Te&&(G=Q&&Q.onVnodeBeforeMount)&&on(G,Ae,m),ys(g,!0),q&&le){const We=()=>{g.subTree=kc(g),le(q,g.subTree,g,R,null)};Te?m.type.__asyncLoader().then(()=>!g.isUnmounted&&We()):We()}else{const We=g.subTree=kc(g);v(null,We,w,b,g,R,O),m.el=We.el}if(ue&&Rt(ue,R),!Te&&(G=Q&&Q.onVnodeMounted)){const We=m;Rt(()=>on(G,Ae,We),R)}(m.shapeFlag&256||Ae&&Bo(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&g.a&&Rt(g.a,R),g.isMounted=!0,m=w=b=null}},L=g.effect=new uu(D,()=>_u(k),g.scope),k=g.update=()=>L.run();k.id=g.uid,ys(g,!0),k()},_e=(g,m,w)=>{m.component=g;const b=g.vnode.props;g.vnode=m,g.next=null,Hw(g,m.props,b,w),Ww(g,m.children,w),Pr(),id(),Dr()},fe=(g,m,w,b,R,O,B,D,L=!1)=>{const k=g&&g.children,G=g?g.shapeFlag:0,q=m.children,{patchFlag:Q,shapeFlag:se}=m;if(Q>0){if(Q&128){Mt(k,q,w,b,R,O,B,D,L);return}else if(Q&256){ot(k,q,w,b,R,O,B,D,L);return}}se&8?(G&16&&V(k,R,O),q!==k&&u(w,q)):G&16?se&16?Mt(k,q,w,b,R,O,B,D,L):V(k,R,O,!0):(G&8&&u(w,""),se&16&&E(q,w,b,R,O,B,D,L))},ot=(g,m,w,b,R,O,B,D,L)=>{g=g||rr,m=m||rr;const k=g.length,G=m.length,q=Math.min(k,G);let Q;for(Q=0;Q<q;Q++){const se=m[Q]=L?Bn(m[Q]):an(m[Q]);v(g[Q],se,w,null,R,O,B,D,L)}k>G?V(g,R,O,!0,!1,q):E(m,w,b,R,O,B,D,L,q)},Mt=(g,m,w,b,R,O,B,D,L)=>{let k=0;const G=m.length;let q=g.length-1,Q=G-1;for(;k<=q&&k<=Q;){const se=g[k],ue=m[k]=L?Bn(m[k]):an(m[k]);if(Xr(se,ue))v(se,ue,w,null,R,O,B,D,L);else break;k++}for(;k<=q&&k<=Q;){const se=g[q],ue=m[Q]=L?Bn(m[Q]):an(m[Q]);if(Xr(se,ue))v(se,ue,w,null,R,O,B,D,L);else break;q--,Q--}if(k>q){if(k<=Q){const se=Q+1,ue=se<G?m[se].el:b;for(;k<=Q;)v(null,m[k]=L?Bn(m[k]):an(m[k]),w,ue,R,O,B,D,L),k++}}else if(k>Q)for(;k<=q;)at(g[k],R,O,!0),k++;else{const se=k,ue=k,Ae=new Map;for(k=ue;k<=Q;k++){const Lt=m[k]=L?Bn(m[k]):an(m[k]);Lt.key!=null&&Ae.set(Lt.key,k)}let Te,We=0;const Gt=Q-ue+1;let Qs=!1,Wh=0;const Qr=new Array(Gt);for(k=0;k<Gt;k++)Qr[k]=0;for(k=se;k<=q;k++){const Lt=g[k];if(We>=Gt){at(Lt,R,O,!0);continue}let rn;if(Lt.key!=null)rn=Ae.get(Lt.key);else for(Te=ue;Te<=Q;Te++)if(Qr[Te-ue]===0&&Xr(Lt,m[Te])){rn=Te;break}rn===void 0?at(Lt,R,O,!0):(Qr[rn-ue]=k+1,rn>=Wh?Wh=rn:Qs=!0,v(Lt,m[rn],w,null,R,O,B,D,L),We++)}const Gh=Qs?Jw(Qr):rr;for(Te=Gh.length-1,k=Gt-1;k>=0;k--){const Lt=ue+k,rn=m[Lt],Qh=Lt+1<G?m[Lt+1].el:b;Qr[k]===0?v(null,rn,w,Qh,R,O,B,D,L):Qs&&(Te<0||k!==Gh[Te]?At(rn,w,Qh,2):Te--)}}},At=(g,m,w,b,R=null)=>{const{el:O,type:B,transition:D,children:L,shapeFlag:k}=g;if(k&6){At(g.component.subTree,m,w,b);return}if(k&128){g.suspense.move(m,w,b);return}if(k&64){B.move(g,m,w,ge);return}if(B===lt){s(O,m,w);for(let q=0;q<L.length;q++)At(L[q],m,w,b);s(g.anchor,m,w);return}if(B===jo){S(g,m,w);return}if(b!==2&&k&1&&D)if(b===0)D.beforeEnter(O),s(O,m,w),Rt(()=>D.enter(O),R);else{const{leave:q,delayLeave:Q,afterLeave:se}=D,ue=()=>s(O,m,w),Ae=()=>{q(O,()=>{ue(),se&&se()})};Q?Q(O,ue,Ae):Ae()}else s(O,m,w)},at=(g,m,w,b=!1,R=!1)=>{const{type:O,props:B,ref:D,children:L,dynamicChildren:k,shapeFlag:G,patchFlag:q,dirs:Q}=g;if(D!=null&&gl(D,null,w,g,!0),G&256){m.ctx.deactivate(g);return}const se=G&1&&Q,ue=!Bo(g);let Ae;if(ue&&(Ae=B&&B.onVnodeBeforeUnmount)&&on(Ae,m,g),G&6)C(g.component,w,b);else{if(G&128){g.suspense.unmount(w,b);return}se&&_s(g,null,m,"beforeUnmount"),G&64?g.type.remove(g,m,w,R,ge,b):k&&(O!==lt||q>0&&q&64)?V(k,m,w,!1,!0):(O===lt&&q&384||!R&&G&16)&&V(L,m,w),b&&En(g)}(ue&&(Ae=B&&B.onVnodeUnmounted)||se)&&Rt(()=>{Ae&&on(Ae,m,g),se&&_s(g,null,m,"unmounted")},w)},En=g=>{const{type:m,el:w,anchor:b,transition:R}=g;if(m===lt){vs(w,b);return}if(m===jo){U(g);return}const O=()=>{r(w),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:B,delayLeave:D}=R,L=()=>B(w,O);D?D(g.el,O,L):L()}else O()},vs=(g,m)=>{let w;for(;g!==m;)w=h(g),r(g),g=w;r(m)},C=(g,m,w)=>{const{bum:b,scope:R,update:O,subTree:B,um:D}=g;b&&Fo(b),R.stop(),O&&(O.active=!1,at(B,g,m,w)),D&&Rt(D,m),Rt(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},V=(g,m,w,b=!1,R=!1,O=0)=>{for(let B=O;B<g.length;B++)at(g[B],m,w,b,R)},$=g=>g.shapeFlag&6?$(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),x=(g,m,w)=>{g==null?m._vnode&&at(m._vnode,null,null,!0):v(m._vnode||null,g,m,null,null,null,w),id(),Qp(),m._vnode=g},ge={p:v,um:at,m:At,r:En,mt:Be,mc:E,pc:fe,pbc:X,n:$,o:t};let $e,le;return e&&([$e,le]=e(ge)),{render:x,hydrate:$e,createApp:Qw(x,$e)}}function ys({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fg(t,e,n=!1){const s=t.children,r=e.children;if(J(s)&&J(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Bn(r[i]),a.el=o.el),n||fg(o,a)),a.type===Fa&&(a.el=o.el)}}function Jw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Zw=t=>t.__isTeleport,lt=Symbol(void 0),Fa=Symbol(void 0),Si=Symbol(void 0),jo=Symbol(void 0),ui=[];let Xt=null;function ce(t=!1){ui.push(Xt=t?null:[])}function e0(){ui.pop(),Xt=ui[ui.length-1]||null}let Ai=1;function pd(t){Ai+=t}function pg(t){return t.dynamicChildren=Ai>0?Xt||rr:null,e0(),Ai>0&&Xt&&Xt.push(t),t}function de(t,e,n,s,r,i){return pg(f(t,e,n,s,r,i,!0))}function xr(t,e,n,s,r){return pg(be(t,e,n,s,r,!0))}function ml(t){return t?t.__v_isVNode===!0:!1}function Xr(t,e){return t.type===e.type&&t.key===e.key}const Va="__vInternal",gg=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>t!=null?et(t)||Ue(t)||ae(t)?{i:Ft,r:t,k:e,f:!!n}:t:null;function f(t,e=null,n=null,s=0,r=null,i=t===lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gg(e),ref:e&&qo(e),scopeId:$a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ft};return a?(Tu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Ai>0&&!o&&Xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xt.push(c),c}const be=t0;function t0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Mw)&&(t=Si),ml(t)){const a=mr(t,e,!0);return n&&Tu(a,n),Ai>0&&!i&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(t)]=a:Xt.push(a)),a.patchFlag|=-2,a}if(p0(t)&&(t=t.__vccOpts),e){e=n0(e);let{class:a,style:c}=e;a&&!et(a)&&(e.class=bs(a)),ke(c)&&(Bp(c)&&!J(c)&&(c=St({},c)),e.style=iu(c))}const o=et(t)?1:Iw(t)?128:Zw(t)?64:ke(t)?4:ae(t)?2:0;return f(t,e,n,s,r,o,i,!0)}function n0(t){return t?Bp(t)||Va in t?St({},t):t:null}function mr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?r0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&gg(a),ref:e&&e.ref?n&&r?J(r)?r.concat(qo(e)):[r,qo(e)]:qo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function s0(t=" ",e=0){return be(Fa,null,t,e)}function Iu(t,e){const n=be(jo,null,t);return n.staticCount=e,n}function an(t){return t==null||typeof t=="boolean"?be(Si):J(t)?be(lt,null,t.slice()):typeof t=="object"?Bn(t):be(Fa,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function Tu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Tu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Va in e)?e._ctx=Ft:r===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Ft},n=32):(e=String(e),s&64?(n=16,e=[s0(e)]):n=8);t.children=e,t.shapeFlag|=n}function r0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bs([e.class,s.class]));else if(r==="style")e.style=iu([e.style,s.style]);else if(Na(r)){const i=e[r],o=s[r];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function on(t,e,n,s=null){Jt(t,e,7,[n,s])}const i0=dg();let o0=0;function a0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||i0,i={uid:o0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cg(s,r),emitsOptions:Yp(s,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mw.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const c0=()=>Ke||Ft,vr=t=>{Ke=t,t.scope.on()},Ns=()=>{Ke&&Ke.scope.off(),Ke=null};function mg(t){return t.vnode.shapeFlag&4}let Ri=!1;function l0(t,e=!1){Ri=e;const{props:n,children:s}=t.vnode,r=mg(t);qw(t,n,r,e),Kw(t,s);const i=r?u0(t,e):void 0;return Ri=!1,i}function u0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gr(new Proxy(t.ctx,$w));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?d0(t):null;vr(t),Pr();const i=Zn(s,t,0,[t.props,r]);if(Dr(),Ns(),bp(i)){if(i.then(Ns,Ns),e)return i.then(o=>{gd(t,o,e)}).catch(o=>{Ma(o,t,0)});t.asyncDep=i}else gd(t,i,e)}else vg(t,e)}function gd(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=zp(e)),vg(t,n)}let md;function vg(t,e,n){const s=t.type;if(!t.render){if(!e&&md&&!s.render){const r=s.template||wu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=St(St({isCustomElement:i,delimiters:a},o),c);s.render=md(r,l)}}t.render=s.render||Yt}vr(t),Pr(),Uw(t),Dr(),Ns()}function h0(t){return new Proxy(t.attrs,{get(e,n){return Dt(t,"get","$attrs"),e[n]}})}function d0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=h0(t))},slots:t.slots,emit:t.emit,expose:e}}function Ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zp(gr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}}))}function f0(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function p0(t){return ae(t)&&"__vccOpts"in t}const Ut=(t,e)=>uw(t,e,Ri);function _g(t,e,n){const s=arguments.length;return s===2?ke(e)&&!J(e)?ml(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ml(n)&&(n=[n]),be(t,e,n))}const g0=Symbol(""),m0=()=>Ht(g0),v0="3.2.47",_0="http://www.w3.org/2000/svg",Ts=typeof document<"u"?document:null,vd=Ts&&Ts.createElement("template"),y0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ts.createElementNS(_0,t):Ts.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ts.createTextNode(t),createComment:t=>Ts.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ts.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{vd.innerHTML=s?`<svg>${t}</svg>`:t;const a=vd.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function w0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function E0(t,e,n){const s=t.style,r=et(n);if(n&&!r){if(e&&!et(e))for(const i in e)n[i]==null&&vl(s,i,"");for(const i in n)vl(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const _d=/\s*!important$/;function vl(t,e,n){if(J(n))n.forEach(s=>vl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=I0(t,e);_d.test(n)?t.setProperty(Nr(s),n.replace(_d,""),"important"):t[s]=n}}const yd=["Webkit","Moz","ms"],Pc={};function I0(t,e){const n=Pc[e];if(n)return n;let s=vn(e);if(s!=="filter"&&s in t)return Pc[e]=s;s=Oa(s);for(let r=0;r<yd.length;r++){const i=yd[r]+s;if(i in t)return Pc[e]=i}return e}const wd="http://www.w3.org/1999/xlink";function T0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wd,e.slice(6,e.length)):t.setAttributeNS(wd,e,n);else{const i=_y(e);n==null||i&&!Ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function b0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ep(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function qn(t,e,n,s){t.addEventListener(e,n,s)}function C0(t,e,n,s){t.removeEventListener(e,n,s)}function S0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=A0(e);if(s){const l=i[e]=N0(s,r);qn(t,a,l,c)}else o&&(C0(t,a,o,c),i[e]=void 0)}}const Ed=/(?:Once|Passive|Capture)$/;function A0(t){let e;if(Ed.test(t)){e={};let s;for(;s=t.match(Ed);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let Dc=0;const R0=Promise.resolve(),k0=()=>Dc||(R0.then(()=>Dc=0),Dc=Date.now());function N0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Jt(P0(s,n.value),e,5,[s])};return n.value=t,n.attached=k0(),n}function P0(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Id=/^on[a-z]/,D0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?w0(t,s,r):e==="style"?E0(t,n,s):Na(e)?ou(e)||S0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O0(t,e,s,r))?b0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),T0(t,e,s,r))};function O0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Id.test(e)&&ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Id.test(e)&&et(n)?!1:e in t}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>Fo(e,n):e};function x0(t){t.target.composing=!0}function Td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Re={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=_r(r);const i=s||r.props&&r.props.type==="number";qn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ol(a)),t._assign(a)}),n&&qn(t,"change",()=>{t.value=t.value.trim()}),e||(qn(t,"compositionstart",x0),qn(t,"compositionend",Td),qn(t,"change",Td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=_r(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ol(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},bo={deep:!0,created(t,e,n){t._assign=_r(n),qn(t,"change",()=>{const s=t._modelValue,r=yg(t),i=t.checked,o=t._assign;if(J(s)){const a=Ip(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(Pa(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(wg(t,i))})},mounted:bd,beforeUpdate(t,e,n){t._assign=_r(n),bd(t,e,n)}};function bd(t,{value:e,oldValue:n},s){t._modelValue=e,J(e)?t.checked=Ip(e,s.props.value)>-1:Pa(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=fr(e,wg(t,!0)))}const Qn={created(t,{value:e},n){t.checked=fr(e,n.props.value),t._assign=_r(n),qn(t,"change",()=>{t._assign(yg(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=_r(s),e!==n&&(t.checked=fr(e,s.props.value))}};function yg(t){return"_value"in t?t._value:t.value}function wg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tn={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Yr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Yr(t,!0),s.enter(t)):s.leave(t,()=>{Yr(t,!1)}):Yr(t,e))},beforeUnmount(t,{value:e}){Yr(t,e)}};function Yr(t,e){t.style.display=e?t._vod:"none"}const M0=St({patchProp:D0},y0);let Cd;function L0(){return Cd||(Cd=Xw(M0))}const $0=(...t)=>{const e=L0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=U0(s);if(!r)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function U0(t){return et(t)?document.querySelector(t):t}var F0=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Eg;const ja=t=>Eg=t,Ig=Symbol();function _l(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hi||(hi={}));function V0(){const t=Rp(!0),e=t.run(()=>K({}));let n=[],s=[];const r=gr({install(i){ja(r),r._a=i,i.provide(Ig,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!F0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Tg=()=>{};function Sd(t,e,n,s=Tg){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&kp()&&Ry(r),r}function Xs(t,...e){t.slice().forEach(n=>{n(...e)})}function yl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];_l(r)&&_l(s)&&t.hasOwnProperty(n)&&!Ue(s)&&!Jn(s)?t[n]=yl(r,s):t[n]=s}return t}const B0=Symbol();function j0(t){return!_l(t)||!t.hasOwnProperty(B0)}const{assign:Vn}=Object;function q0(t){return!!(Ue(t)&&t.effect)}function H0(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=ow(n.state.value[t]);return Vn(u,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=gr(Ut(()=>{ja(n);const p=n._s.get(t);return o[h].call(p,p)})),d),{}))}return c=bg(t,l,e,n,s,!0),c}function bg(t,e,n={},s,r,i){let o;const a=Vn({actions:{}},n),c={deep:!0};let l,u,d=gr([]),h=gr([]),p;const _=s.state.value[t];!i&&!_&&(s.state.value[t]={}),K({});let v;function y(M){let E;l=u=!1,typeof M=="function"?(M(s.state.value[t]),E={type:hi.patchFunction,storeId:t,events:p}):(yl(s.state.value[t],M),E={type:hi.patchObject,payload:M,storeId:t,events:p});const N=v=Symbol();vu().then(()=>{v===N&&(l=!0)}),u=!0,Xs(d,E,s.state.value[t])}const T=i?function(){const{state:E}=n,N=E?E():{};this.$patch(X=>{Vn(X,N)})}:Tg;function I(){o.stop(),d=[],h=[],s._s.delete(t)}function S(M,E){return function(){ja(s);const N=Array.from(arguments),X=[],ie=[];function Le(Oe){X.push(Oe)}function it(Oe){ie.push(Oe)}Xs(h,{args:N,name:M,store:z,after:Le,onError:it});let Be;try{Be=E.apply(this&&this.$id===t?this:z,N)}catch(Oe){throw Xs(ie,Oe),Oe}return Be instanceof Promise?Be.then(Oe=>(Xs(X,Oe),Oe)).catch(Oe=>(Xs(ie,Oe),Promise.reject(Oe))):(Xs(X,Be),Be)}}const U={_p:s,$id:t,$onAction:Sd.bind(null,h),$patch:y,$reset:T,$subscribe(M,E={}){const N=Sd(d,M,E.detached,()=>X()),X=o.run(()=>ln(()=>s.state.value[t],ie=>{(E.flush==="sync"?u:l)&&M({storeId:t,type:hi.direct,events:p},ie)},Vn({},c,E)));return N},$dispose:I},z=Or(U);s._s.set(t,z);const Y=s._e.run(()=>(o=Rp(),o.run(()=>e())));for(const M in Y){const E=Y[M];if(Ue(E)&&!q0(E)||Jn(E))i||(_&&j0(E)&&(Ue(E)?E.value=_[M]:yl(E,_[M])),s.state.value[t][M]=E);else if(typeof E=="function"){const N=S(M,E);Y[M]=N,a.actions[M]=E}}return Vn(z,Y),Vn(ve(z),Y),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:M=>{y(E=>{Vn(E,M)})}}),s._p.forEach(M=>{Vn(z,o.run(()=>M({store:z,app:s._a,pinia:s,options:a})))}),_&&i&&n.hydrate&&n.hydrate(z.$state,_),l=!0,u=!0,z}function z0(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=c0();return a=a||l&&Ht(Ig,null),a&&ja(a),a=Eg,a._s.has(s)||(i?bg(s,e,r,a):H0(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const Cg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},K0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),s.push(n[u],n[d],n[h],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new W0;const h=i<<2|a>>4;if(s.push(h),l!==64){const p=a<<4&240|l>>2;if(s.push(p),d!==64){const _=l<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G0=function(t){const e=Cg(t);return Sg.encodeByteArray(e,!0)},sa=function(t){return G0(t).replace(/\./g,"")},Ag=function(t){try{return Sg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Q0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const X0=()=>Q0().__FIREBASE_DEFAULTS__,Y0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},J0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ag(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return X0()||Y0()||J0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rg=t=>{var e,n;return(n=(e=qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kg=t=>{const e=Rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Z0=()=>{var t;return(t=qa())===null||t===void 0?void 0:t.config},Ng=t=>{var e;return(e=qa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class eE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Pg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sa(JSON.stringify(n)),sa(JSON.stringify(o)),a].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function nE(){var t;const e=(t=qa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iE(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function aE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const cE="FirebaseError";class yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cE,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?lE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yn(r,a,s)}}function lE(t,e){return t.replace(uE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const uE=/\{\$([^}]+)}/g;function hE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ad(i)&&Ad(o)){if(!ra(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ad(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dE(t,e){const n=new fE(t,e);return n.subscribe.bind(n)}class fE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Oc),r.error===void 0&&(r.error=Oc),r.complete===void 0&&(r.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oc(){}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class gE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new eE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vE(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mE(t){return t===Es?void 0:t}function vE(t){return t.instantiationMode==="EAGER"}/**
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
 */class _E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const yE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},wE=ye.INFO,EE={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},IE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=EE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=wE,this._logHandler=IE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const TE=(t,e)=>e.some(n=>t instanceof n);let Rd,kd;function bE(){return Rd||(Rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CE(){return kd||(kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dg=new WeakMap,wl=new WeakMap,Og=new WeakMap,xc=new WeakMap,Cu=new WeakMap;function SE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(es(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dg.set(n,t)}).catch(()=>{}),Cu.set(e,t),e}function AE(t){if(wl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wl.set(t,e)}let El={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Og.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RE(t){El=t(El)}function kE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Mc(this),e,...n);return Og.set(s,e.sort?e.sort():[e]),es(s)}:CE().includes(t)?function(...e){return t.apply(Mc(this),e),es(Dg.get(this))}:function(...e){return es(t.apply(Mc(this),e))}}function NE(t){return typeof t=="function"?kE(t):(t instanceof IDBTransaction&&AE(t),TE(t,bE())?new Proxy(t,El):t)}function es(t){if(t instanceof IDBRequest)return SE(t);if(xc.has(t))return xc.get(t);const e=NE(t);return e!==t&&(xc.set(t,e),Cu.set(e,t)),e}const Mc=t=>Cu.get(t);function PE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=es(o);return s&&o.addEventListener("upgradeneeded",c=>{s(es(o.result),c.oldVersion,c.newVersion,es(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const DE=["get","getKey","getAll","getAllKeys","count"],OE=["put","add","delete","clear"],Lc=new Map;function Nd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=OE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||DE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Lc.set(e,i),i}RE(t=>({...t,get:(e,n,s)=>Nd(e,n)||t.get(e,n,s),has:(e,n)=>!!Nd(e,n)||t.has(e,n)}));/**
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
 */class xE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ME(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ME(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Il="@firebase/app",Pd="0.9.9";/**
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
 */const xs=new bu("@firebase/app"),LE="@firebase/app-compat",$E="@firebase/analytics-compat",UE="@firebase/analytics",FE="@firebase/app-check-compat",VE="@firebase/app-check",BE="@firebase/auth",jE="@firebase/auth-compat",qE="@firebase/database",HE="@firebase/database-compat",zE="@firebase/functions",KE="@firebase/functions-compat",WE="@firebase/installations",GE="@firebase/installations-compat",QE="@firebase/messaging",XE="@firebase/messaging-compat",YE="@firebase/performance",JE="@firebase/performance-compat",ZE="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",sI="@firebase/firestore",rI="@firebase/firestore-compat",iI="firebase",oI="9.21.0";/**
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
 */const Tl="[DEFAULT]",aI={[Il]:"fire-core",[LE]:"fire-core-compat",[UE]:"fire-analytics",[$E]:"fire-analytics-compat",[VE]:"fire-app-check",[FE]:"fire-app-check-compat",[BE]:"fire-auth",[jE]:"fire-auth-compat",[qE]:"fire-rtdb",[HE]:"fire-rtdb-compat",[zE]:"fire-fn",[KE]:"fire-fn-compat",[WE]:"fire-iid",[GE]:"fire-iid-compat",[QE]:"fire-fcm",[XE]:"fire-fcm-compat",[YE]:"fire-perf",[JE]:"fire-perf-compat",[ZE]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[sI]:"fire-fst",[rI]:"fire-fst-compat","fire-js":"fire-js",[iI]:"fire-js-all"};/**
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
 */const ia=new Map,bl=new Map;function cI(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if(bl.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;bl.set(e,t);for(const n of ia.values())cI(n,t);return!0}function Ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ts=new zi("app","Firebase",lI);/**
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
 */class uI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=oI;function xg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Tl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ts.create("bad-app-name",{appName:String(r)});if(n||(n=Z0()),!n)throw ts.create("no-options");const i=ia.get(r);if(i){if(ra(n,i.options)&&ra(s,i.config))return i;throw ts.create("duplicate-app",{appName:r})}const o=new _E(r);for(const c of bl.values())o.addComponent(c);const a=new uI(n,s,o);return ia.set(r,a),a}function Su(t=Tl){const e=ia.get(t);if(!e&&t===Tl)return xg();if(!e)throw ts.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let r=(s=aI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Ms(new is(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hI="firebase-heartbeat-database",dI=1,ki="firebase-heartbeat-store";let $c=null;function Mg(){return $c||($c=PE(hI,dI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}}).catch(t=>{throw ts.create("idb-open",{originalErrorMessage:t.message})})),$c}async function fI(t){try{return(await Mg()).transaction(ki).objectStore(ki).get(Lg(t))}catch(e){if(e instanceof yn)xs.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function Dd(t,e){try{const s=(await Mg()).transaction(ki,"readwrite");return await s.objectStore(ki).put(e,Lg(t)),s.done}catch(n){if(n instanceof yn)xs.warn(n.message);else{const s=ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(s.message)}}}function Lg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pI=1024,gI=30*24*60*60*1e3;class mI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _I(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Od();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=gI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Od(),{heartbeatsToSend:n,unsentEntries:s}=vI(this._heartbeatsCache.heartbeats),r=sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Od(){return new Date().toISOString().substring(0,10)}function vI(t,e=pI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),xd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xd(t){return sa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yI(t){Ms(new is("platform-logger",e=>new xE(e),"PRIVATE")),Ms(new is("heartbeat",e=>new mI(e),"PRIVATE")),fn(Il,Pd,t),fn(Il,Pd,"esm2017"),fn("fire-js","")}yI("");var wI="firebase",EI="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(wI,EI,"app");var II=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Au=Au||{},ne=II||self;function oa(){}function za(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TI(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++bI)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),bI=0;function CI(t,e,n){return t.call.apply(t.bind,arguments)}function SI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=CI:_t=SI,_t.apply(null,arguments)}function Co(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function us(){this.s=this.s,this.o=this.o}var AI=0;us.prototype.s=!1;us.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),AI!=0)&&TI(this)};us.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $g=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ru(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Md(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(za(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var RI=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",oa,e),ne.removeEventListener("test",oa,e)}catch{}return t}();function aa(t){return/^[\s\xa0]*$/.test(t)}var Ld=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fc(t,e){return t<e?-1:t>e?1:0}function Ka(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return Ka().indexOf(t)!=-1}function ku(t){return ku[" "](t),t}ku[" "]=oa;function Ug(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var kI=un("Opera"),yr=un("Trident")||un("MSIE"),Fg=un("Edge"),Cl=Fg||yr,Vg=un("Gecko")&&!(Ka().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),NI=Ka().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function Bg(){var t=ne.document;return t?t.documentMode:void 0}var ca;e:{var Vc="",Bc=function(){var t=Ka();if(Vg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fg)return/Edge\/([\d\.]+)/.exec(t);if(yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(NI)return/WebKit\/(\S+)/.exec(t);if(kI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&(Vc=Bc?Bc[1]:""),yr){var jc=Bg();if(jc!=null&&jc>parseFloat(Vc)){ca=String(jc);break e}}ca=Vc}var PI={};function DI(){return Ug(PI,9,function(){let t=0;const e=Ld(String(ca)).split("."),n=Ld("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Fc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Fc(r[2].length==0,i[2].length==0)||Fc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Sl;if(ne.document&&yr){var $d=Bg();Sl=$d||parseInt(ca,10)||void 0}else Sl=void 0;var OI=Sl;function Ni(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vg){e:{try{ku(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ni.$.h.call(this)}}rt(Ni,yt);var xI={2:"touch",3:"pen",4:"mouse"};Ni.prototype.h=function(){Ni.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gi="closure_listenable_"+(1e6*Math.random()|0),MI=0;function LI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++MI,this.fa=this.ia=!1}function Wa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Nu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function jg(t){const e={};for(const n in t)e[n]=t[n];return e}const Ud="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ud.length;i++)n=Ud[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ga(t){this.src=t,this.g={},this.h=0}Ga.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LI(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Al(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=$g(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Pu="closure_lm_"+(1e6*Math.random()|0),qc={};function Hg(t,e,n,s,r){if(s&&s.once)return Kg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hg(t,e[i],n,s,r);return null}return n=xu(n),t&&t[Gi]?t.O(e,n,Wi(s)?!!s.capture:!!s,r):zg(t,e,n,!1,s,r)}function zg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Wi(r)?!!r.capture:!!r,a=Ou(t);if(a||(t[Pu]=a=new Ga(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=$I(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)RI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Gg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $I(){function t(n){return e.call(t.src,t.listener,n)}const e=UI;return t}function Kg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kg(t,e[i],n,s,r);return null}return n=xu(n),t&&t[Gi]?t.P(e,n,Wi(s)?!!s.capture:!!s,r):zg(t,e,n,!0,s,r)}function Wg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wg(t,e[i],n,s,r);else s=Wi(s)?!!s.capture:!!s,n=xu(n),t&&t[Gi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rl(i,n,s,r),-1<n&&(Wa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ou(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rl(e,n,s,r)),(n=-1<t?e[t]:null)&&Du(n))}function Du(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Gi])Al(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ou(e))?(Al(n,t),n.h==0&&(n.src=null,e[Pu]=null)):Wa(t)}}}function Gg(t){return t in qc?qc[t]:qc[t]="on"+t}function UI(t,e){if(t.fa)t=!0;else{e=new Ni(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Du(t),t=n.call(s,e)}return t}function Ou(t){return t=t[Pu],t instanceof Ga?t:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function xu(t){return typeof t=="function"?t:(t[Hc]||(t[Hc]=function(e){return t.handleEvent(e)}),t[Hc])}function st(){us.call(this),this.i=new Ga(this),this.S=this,this.J=null}rt(st,us);st.prototype[Gi]=!0;st.prototype.removeEventListener=function(t,e,n,s){Wg(this,t,e,n,s)};function ht(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var r=e;e=new yt(s,t),qg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=So(o,s,!0,e)&&r}if(o=e.g=t,r=So(o,s,!0,e)&&r,r=So(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=So(o,s,!1,e)&&r}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wa(n[s]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};st.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function So(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Al(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Mu=ne.JSON.stringify;function FI(){var t=Yg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VI{constructor(){this.h=this.g=null}add(e,n){const s=Qg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Qg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new BI,t=>t.reset());class BI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jI(t){ne.setTimeout(()=>{throw t},0)}function Xg(t,e){kl||qI(),Nl||(kl(),Nl=!0),Yg.add(t,e)}var kl;function qI(){var t=ne.Promise.resolve(void 0);kl=function(){t.then(HI)}}var Nl=!1,Yg=new VI;function HI(){for(var t;t=FI();){try{t.h.call(t.g)}catch(n){jI(n)}var e=Qg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nl=!1}function Qa(t,e){st.call(this),this.h=t||1,this.g=e||ne,this.j=_t(this.qb,this),this.l=Date.now()}rt(Qa,st);F=Qa.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(Lu(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){Qa.$.N.call(this),Lu(this),delete this.g};function $u(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Jg(t){t.g=$u(()=>{t.g=null,t.i&&(t.i=!1,Jg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zI extends us{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jg(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(t){us.call(this),this.h=t,this.g={}}rt(Pi,us);var Fd=[];function Zg(t,e,n,s){Array.isArray(n)||(n&&(Fd[0]=n.toString()),n=Fd);for(var r=0;r<n.length;r++){var i=Hg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function em(t){Nu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Du(e)},t),t.g={}}Pi.prototype.N=function(){Pi.$.N.call(this),em(this)};Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xa(){this.g=!0}Xa.prototype.Ea=function(){this.g=!1};function KI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function WI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function nr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QI(t,n)+(s?" "+s:"")})}function GI(t,e){t.info(function(){return"TIMEOUT: "+e})}Xa.prototype.info=function(){};function QI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Mu(n)}catch{return e}}var Hs={},Vd=null;function Ya(){return Vd=Vd||new st}Hs.Ta="serverreachability";function tm(t){yt.call(this,Hs.Ta,t)}rt(tm,yt);function Di(t){const e=Ya();ht(e,new tm(e))}Hs.STAT_EVENT="statevent";function nm(t,e){yt.call(this,Hs.STAT_EVENT,t),this.stat=e}rt(nm,yt);function Ct(t){const e=Ya();ht(e,new nm(e,t))}Hs.Ua="timingevent";function sm(t,e){yt.call(this,Hs.Ua,t),this.size=e}rt(sm,yt);function Qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Ja={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Uu(){}Uu.prototype.h=null;function Bd(t){return t.h||(t.h=t.i())}function im(){}var Xi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fu(){yt.call(this,"d")}rt(Fu,yt);function Vu(){yt.call(this,"c")}rt(Vu,yt);var Pl;function Za(){}rt(Za,Uu);Za.prototype.g=function(){return new XMLHttpRequest};Za.prototype.i=function(){return{}};Pl=new Za;function Yi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Pi(this),this.P=XI,t=Cl?125:void 0,this.V=new Qa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new om}function om(){this.i=null,this.g="",this.h=!1}var XI=45e3,Dl={},la={};F=Yi.prototype;F.setTimeout=function(t){this.P=t};function Ol(t,e,n){t.L=1,t.v=tc(Nn(e)),t.s=n,t.S=!0,am(t,null)}function am(t,e){t.G=Date.now(),Ji(t),t.A=Nn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),gm(n.i,"t",s),t.C=0,n=t.l.I,t.h=new om,t.g=Lm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zI(_t(t.Pa,t,t.g),t.O)),Zg(t.U,t.g,"readystatechange",t.nb),e=t.I?jg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Di(),KI(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&Cn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const u=Cn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Cl||this.g&&(this.h.h||this.g.ja()||zd(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?Di(3):Di(2)),ec(this);var n=this.g.da();this.aa=n;t:if(cm(this)){var s=zd(this.g);t="";var r=s.length,i=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ss(this),di(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,WI(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!aa(a)){var l=a;break t}}l=null}if(n=l)nr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xl(this,n);else{this.i=!1,this.o=3,Ct(12),Ss(this),di(this);break e}}this.S?(lm(this,u,o),Cl&&this.i&&u==3&&(Zg(this.U,this.V,"tick",this.mb),this.V.start())):(nr(this.j,this.m,o,null),xl(this,o)),u==4&&Ss(this),this.i&&!this.J&&(u==4?Dm(this.l,this):(this.i=!1,Ji(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),Ss(this),di(this)}}}catch{}finally{}};function cm(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function lm(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=YI(t,n),r==la){e==4&&(t.o=4,Ct(14),s=!1),nr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Dl){t.o=4,Ct(15),nr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else nr(t.j,t.m,r,null),xl(t,r);cm(t)&&r!=la&&r!=Dl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wu(e),e.L=!0,Ct(11))):(nr(t.j,t.m,n,"[Invalid Chunked Response]"),Ss(t),di(t))}F.mb=function(){if(this.g){var t=Cn(this.g),e=this.g.ja();this.C<e.length&&(ec(this),lm(this,t,e),this.i&&t!=4&&Ji(this))}};function YI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?la:(n=Number(e.substring(n,s)),isNaN(n)?Dl:(s+=1,s+n>e.length?la:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.J=!0,Ss(this)};function Ji(t){t.Y=Date.now()+t.P,um(t,t.P)}function um(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qi(_t(t.lb,t),e)}function ec(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(GI(this.j,this.A),this.L!=2&&(Di(),Ct(17)),Ss(this),this.o=2,di(this)):um(this,this.Y-t)};function di(t){t.l.H==0||t.J||Dm(t.l,t)}function Ss(t){ec(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Lu(t.V),em(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function xl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ml(n.h,t))){if(!t.K&&Ml(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)da(n),rc(n);else break e;Ku(n),Ct(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Qi(_t(n.ib,n),6e3));if(1>=_m(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else As(n,11)}else if((t.K||n.g==t)&&da(n),!aa(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const d=l[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.h;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Bu(i,i.h),i.h=null))}if(s.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,xe(s.G,s.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Mm(s,s.I?s.oa:null,s.Y),o.K){ym(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ec(a),Ji(a)),s.g=o}else Nm(s);0<n.i.length&&ic(n)}else l[0]!="stop"&&l[0]!="close"||As(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?As(n,7):zu(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}Di(4)}catch{}}function JI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(za(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ZI(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(za(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function hm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(za(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZI(t),s=JI(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var dm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ps(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ps){this.h=e!==void 0?e:t.h,ua(this,t.j),this.s=t.s,this.g=t.g,ha(this,t.m),this.l=t.l,e=t.i;var n=new Oi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jd(this,n),this.o=t.o}else t&&(n=String(t).match(dm))?(this.h=!!e,ua(this,n[1]||"",!0),this.s=ii(n[2]||""),this.g=ii(n[3]||"",!0),ha(this,n[4]),this.l=ii(n[5]||"",!0),jd(this,n[6]||"",!0),this.o=ii(n[7]||"")):(this.h=!!e,this.i=new Oi(null,this.h))}Ps.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oi(e,qd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oi(e,qd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oi(n,n.charAt(0)=="/"?sT:nT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oi(n,iT)),t.join("")};function Nn(t){return new Ps(t)}function ua(t,e,n){t.j=n?ii(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jd(t,e,n){e instanceof Oi?(t.i=e,oT(t.i,t.h)):(n||(e=oi(e,rT)),t.i=new Oi(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function tc(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ii(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qd=/[#\/\?@]/g,nT=/[#\?:]/g,sT=/[#\?]/g,rT=/[#\?@]/g,iT=/#/g;function Oi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hs(t){t.g||(t.g=new Map,t.h=0,t.i&&eT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Oi.prototype;F.add=function(t,e){hs(this),this.i=null,t=Mr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fm(t,e){hs(t),e=Mr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pm(t,e){return hs(t),e=Mr(t,e),t.g.has(e)}F.forEach=function(t,e){hs(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.sa=function(){hs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.Z=function(t){hs(this);let e=[];if(typeof t=="string")pm(this,t)&&(e=e.concat(this.g.get(Mr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return hs(this),this.i=null,t=Mr(this,t),pm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gm(t,e,n){fm(t,e),0<n.length&&(t.i=null,t.g.set(Mr(t,e),Ru(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Mr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oT(t,e){e&&!t.j&&(hs(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(fm(this,s),gm(this,r,n))},t)),t.j=e}var aT=class{constructor(t,e){this.h=t,this.g=e}};function mm(t){this.l=t||cT,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cT=10;function vm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _m(t){return t.h?1:t.g?t.g.size:0}function Ml(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bu(t,e){t.g?t.g.add(e):t.h=e}function ym(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mm.prototype.cancel=function(){if(this.i=wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ru(t.i)}function ju(){}ju.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};ju.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function lT(){this.g=new ju}function uT(t,e,n){const s=n||"";try{hm(t,function(r,i){let o=r;Wi(r)&&(o=Mu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function hT(t,e){const n=new Xa;if(ne.Image){const s=new Image;s.onload=Co(Ao,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Co(Ao,n,s,"TestLoadImage: error",!1,e),s.onabort=Co(Ao,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Co(Ao,n,s,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ao(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Zi(t){this.l=t.fc||null,this.j=t.ob||!1}rt(Zi,Uu);Zi.prototype.g=function(){return new nc(this.l,this.j)};Zi.prototype.i=function(t){return function(){return t}}({});function nc(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(nc,st);var qu=0;F=nc.prototype;F.open=function(t,e){if(this.readyState!=qu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xi(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=qu};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Em(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Em(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eo(this):xi(this),this.readyState==3&&Em(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,eo(this))};F.Ya=function(t){this.g&&(this.response=t,eo(this))};F.ka=function(){this.g&&eo(this)};function eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xi(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dT=ne.JSON.parse;function je(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Im,this.L=this.M=!1}rt(je,st);var Im="",fT=/^https?$/i,pT=["POST","PUT"];F=je.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pl.g(),this.C=this.u?Bd(this.u):Bd(Pl),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Hd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ne.FormData&&t instanceof ne.FormData,!(0<=$g(pT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cm(this),0<this.B&&((this.L=gT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=$u(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Hd(this,i)}};function gT(t){return yr&&DI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Au<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Hd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tm(t),sc(t)}function Tm(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),sc(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sc(this,!0)),je.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?bm(this):this.kb())};F.kb=function(){bm(this)};function bm(t){if(t.h&&typeof Au<"u"&&(!t.C[1]||Cn(t)!=4||t.da()!=2)){if(t.v&&Cn(t)==4)$u(t.La,0,t);else if(ht(t,"readystatechange"),Cn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(dm)[1]||null;if(!r&&ne.self&&ne.self.location){var i=ne.self.location.protocol;r=i.substr(0,i.length-1)}s=!fT.test(r?r.toLowerCase():"")}n=s}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var o=2<Cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Tm(t)}}finally{sc(t)}}}}function sc(t,e){if(t.g){Cm(t);const n=t.g,s=t.C[0]?oa:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=s}catch{}}}function Cm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function Cn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dT(e)}};function zd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Im:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sm(t){let e="";return Nu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Hu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Sm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Jr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Am(t){this.Ga=0,this.i=[],this.j=new Xa,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Jr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Jr("baseRetryDelayMs",5e3,t),this.hb=Jr("retryDelaySeedMs",1e4,t),this.eb=Jr("forwardChannelMaxRetries",2,t),this.xa=Jr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new mm(t&&t.concurrentRequestLimit),this.Ja=new lT,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}F=Am.prototype;F.qa=8;F.H=1;function zu(t){if(Rm(t),t.H==3){var e=t.W++,n=Nn(t.G);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),to(t,n),e=new Yi(t,t.j,e,void 0),e.L=2,e.v=tc(Nn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ji(e)}xm(t)}function rc(t){t.g&&(Wu(t),t.g.cancel(),t.g=null)}function Rm(t){rc(t),t.u&&(ne.clearTimeout(t.u),t.u=null),da(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function ic(t){vm(t.h)||t.m||(t.m=!0,Xg(t.Na,t),t.C=0)}function mT(t,e){return _m(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qi(_t(t.Na,t,e),Om(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Yi(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=jg(i),qg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=km(this,r,e),n=Nn(this.G),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),to(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Sm(i)))+"&"+e:this.o&&Hu(n,this.o,i)),Bu(this.h,r),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),r.ba=!0,Ol(r,n,null)):Ol(r,n,e),this.H=2}}else this.H==3&&(t?Kd(this,t):this.i.length==0||vm(this.h)||Kd(this))};function Kd(t,e){var n;e?n=e.m:n=t.W++;const s=Nn(t.G);xe(s,"SID",t.J),xe(s,"RID",n),xe(s,"AID",t.V),to(t,s),t.o&&t.s&&Hu(s,t.o,t.s),n=new Yi(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=km(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bu(t.h,n),Ol(n,s,e)}function to(t,e){t.ma&&Nu(t.ma,function(n,s){xe(e,s,n)}),t.l&&hm({},function(n,s){xe(e,s,n)})}function km(t,e,n){n=Math.min(t.i.length,n);var s=t.l?_t(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{uT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Nm(t){t.g||t.u||(t.ba=1,Xg(t.Ma,t),t.A=0)}function Ku(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qi(_t(t.Ma,t),Om(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,Pm(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Qi(_t(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ct(10),rc(this),Pm(this))};function Wu(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function Pm(t){t.g=new Yi(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nn(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.M?"0":"1"),xe(e,"AID",t.V),xe(e,"TYPE","xmlhttp"),to(t,e),t.o&&t.s&&Hu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=tc(Nn(e)),n.s=null,n.S=!0,am(n,t)}F.ib=function(){this.v!=null&&(this.v=null,rc(this),Ku(this),Ct(19))};function da(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function Dm(t,e){var n=null;if(t.g==e){da(t),Wu(t),t.g=null;var s=2}else if(Ml(t.h,e))n=e.F,ym(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ya(),ht(s,new sm(s,n)),ic(t)}else Nm(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&mT(t,e)||s==2&&Ku(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:As(t,5);break;case 4:As(t,10);break;case 3:As(t,6);break;default:As(t,2)}}}function Om(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function As(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=_t(t.pb,t);n||(n=new Ps("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||ua(n,"https"),tc(n)),hT(n.toString(),s)}else Ct(2);t.H=0,t.l&&t.l.za(e),xm(t),Rm(t)}F.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function xm(t){if(t.H=0,t.pa=[],t.l){const e=wm(t.h);(e.length!=0||t.i.length!=0)&&(Md(t.pa,e),Md(t.pa,t.i),t.h.i.length=0,Ru(t.i),t.i.length=0),t.l.ya()}}function Mm(t,e,n){var s=n instanceof Ps?Nn(n):new Ps(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ha(s,s.m);else{var r=ne.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ps(null,void 0);s&&ua(i,s),e&&(i.g=e),r&&ha(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&xe(s,n,e),xe(s,"VER",t.qa),to(t,s),s}function Lm(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new Zi({ob:!0})):new je(t.va),e.Oa(t.I),e}function $m(){}F=$m.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.Va=function(){};function fa(){if(yr&&!(10<=Number(OI)))throw Error("Environmental error: no available transport.")}fa.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){st.call(this),this.g=new Am(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!aa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Lr(this)}rt(jt,st);jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Mm(t,null,t.Y),ic(t)};jt.prototype.close=function(){zu(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mu(t),t=n);e.i.push(new aT(e.fb++,t)),e.H==3&&ic(e)};jt.prototype.N=function(){this.g.l=null,delete this.j,zu(this.g),delete this.g,jt.$.N.call(this)};function Um(t){Fu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(Um,Fu);function Fm(){Vu.call(this),this.status=1}rt(Fm,Vu);function Lr(t){this.g=t}rt(Lr,$m);Lr.prototype.Ba=function(){ht(this.g,"a")};Lr.prototype.Aa=function(t){ht(this.g,new Um(t))};Lr.prototype.za=function(t){ht(this.g,new Fm)};Lr.prototype.ya=function(){ht(this.g,"b")};function vT(){this.blockSize=-1}function en(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(en,vT);en.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}en.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)zc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){zc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){zc(this,s),r=0;break}}this.h=r,this.i+=e};en.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ie(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var _T={};function Gu(t){return-128<=t&&128>t?Ug(_T,t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function hn(t){if(isNaN(t)||!isFinite(t))return ar;if(0>t)return ut(hn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ll;return new Ie(e,0)}function Vm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(Vm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=hn(Math.pow(e,8)),s=ar,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=hn(Math.pow(e,i)),s=s.R(i).add(hn(o))):(s=s.R(n),s=s.add(hn(o)))}return s}var Ll=4294967296,ar=Gu(0),$l=Gu(1),Wd=Gu(16777216);F=Ie.prototype;F.ea=function(){if(qt(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ll+s)*e,e*=Ll}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if(qt(this))return"-"+ut(this).toString(t);for(var e=hn(Math.pow(t,6)),n=this,s="";;){var r=ga(n,e).g;n=pa(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Sn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function qt(t){return t.h==-1}F.X=function(t){return t=pa(this,t),qt(t)?-1:Sn(t)?0:1};function ut(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ie(n,~t.h).add($l)}F.abs=function(){return qt(this)?ut(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function pa(t,e){return t.add(ut(e))}F.R=function(t){if(Sn(this)||Sn(t))return ar;if(qt(this))return qt(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(qt(t))return ut(this.R(ut(t)));if(0>this.X(Wd)&&0>t.X(Wd))return hn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Ro(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Ro(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Ro(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Ro(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ie(n,0)};function Ro(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Zr(t,e){this.g=t,this.h=e}function ga(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new Zr(ar,ar);if(qt(t))return e=ga(ut(t),e),new Zr(ut(e.g),ut(e.h));if(qt(e))return e=ga(t,ut(e)),new Zr(ut(e.g),e.h);if(30<t.g.length){if(qt(t)||qt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$l,s=e;0>=s.X(t);)n=Gd(n),s=Gd(s);var r=Ys(n,1),i=Ys(s,1);for(s=Ys(s,2),n=Ys(n,2);!Sn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ys(s,1),n=Ys(n,1)}return e=pa(t,r.R(e)),new Zr(r,e)}for(r=ar;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=hn(n),o=i.R(e);qt(o)||0<o.X(t);)n-=s,i=hn(n),o=i.R(e);Sn(i)&&(i=$l),r=r.add(i),t=pa(t,o)}return new Zr(r,t)}F.gb=function(t){return ga(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ie(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ie(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ie(n,this.h^t.h)};function Gd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ie(n,t.h)}function Ys(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(r,t.h)}fa.prototype.createWebChannel=fa.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Ja.NO_ERROR=0;Ja.TIMEOUT=8;Ja.HTTP_ERROR=6;rm.COMPLETE="complete";im.EventType=Xi;Xi.OPEN="a";Xi.CLOSE="b";Xi.ERROR="c";Xi.MESSAGE="d";st.prototype.listen=st.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;en.prototype.digest=en.prototype.l;en.prototype.reset=en.prototype.reset;en.prototype.update=en.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=hn;Ie.fromString=Vm;var yT=function(){return new fa},wT=function(){return Ya()},Kc=Ja,ET=rm,IT=Hs,Qd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},TT=Zi,ko=im,bT=je,CT=en,cr=Ie;const Xd="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let $r="9.21.0";/**
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
 */const Ls=new bu("@firebase/firestore");function Yd(){return Ls.logLevel}function H(t,...e){if(Ls.logLevel<=ye.DEBUG){const n=e.map(Qu);Ls.debug(`Firestore (${$r}): ${t}`,...n)}}function Pn(t,...e){if(Ls.logLevel<=ye.ERROR){const n=e.map(Qu);Ls.error(`Firestore (${$r}): ${t}`,...n)}}function wr(t,...e){if(Ls.logLevel<=ye.WARN){const n=e.map(Qu);Ls.warn(`Firestore (${$r}): ${t}`,...n)}}function Qu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function De(t,e){t||te()}function oe(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ns{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Bm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ST{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RT{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ns,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ns)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new Bm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new pt(e)}}class kT{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class NT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new kT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DT{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new PT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class jm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=OT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function we(t,e){return t<e?-1:t>e?1:0}function Er(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ze(0,0))}static max(){return new re(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Mi{constructor(e,n,s){n===void 0?n=0:n>e.length&&te(),s===void 0?s=e.length-n:s>e.length-n&&te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Mi{construct(e,n,s){return new Pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const xT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Mi{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return xT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Pe.fromString(e))}static fromName(e){return new W(Pe.fromString(e).popFirst(5))}static empty(){return new W(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Pe(e.slice()))}}function MT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new os(r,W.empty(),e)}function LT(t){return new os(t.readTime,t.key,-1)}class os{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new os(re.min(),W.empty(),-1)}static max(){return new os(re.max(),W.empty(),-1)}}function $T(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function no(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==UT)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function so(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Xu.ct=-1;function oc(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function VT(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ct.RED,this.left=r??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ct(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zd(this.data.getIterator())}getIteratorFrom(e){return new Zd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class Zd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new wt(vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Hm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Hm("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const BT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(t){if(De(!!t),typeof t=="string"){let e=0;const n=BT.exec(t);if(De(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ju(t){const e=t.mapValue.fields.__previous_value__;return Yu(e)?Ju(e):e}function Li(t){const e=as(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class jT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $i{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yu(t)?4:qT(t)?9007199254740991:10:te()}function _n(t,e){if(t===e)return!0;const n=Us(t);if(n!==Us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Li(t).isEqual(Li(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=as(s.timestampValue),o=as(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return $s(s.bytesValue).isEqual($s(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Qe(s.geoPointValue.latitude)===Qe(r.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Qe(s.integerValue)===Qe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Qe(s.doubleValue),o=Qe(r.doubleValue);return i===o?ma(i)===ma(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Er(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Jd(i)!==Jd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!_n(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function Ui(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Ir(t,e){if(t===e)return 0;const n=Us(t),s=Us(e);if(n!==s)return we(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Qe(r.integerValue||r.doubleValue),a=Qe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(Li(t),Li(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(r,i){const o=$s(r),a=$s(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=we(o[c],a[c]);if(l!==0)return l}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=we(Qe(r.latitude),Qe(i.latitude));return o!==0?o:we(Qe(r.longitude),Qe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ir(o[c],a[c]);if(l)return l}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Po.mapValue&&i===Po.mapValue)return 0;if(r===Po.mapValue)return 1;if(i===Po.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const d=we(a[u],l[u]);if(d!==0)return d;const h=Ir(o[a[u]],c[l[u]]);if(h!==0)return h}return we(a.length,l.length)}(t.mapValue,e.mapValue);default:throw te()}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=as(t),s=as(e),r=we(n.seconds,s.seconds);return r!==0?r:we(n.nanos,s.nanos)}function Tr(t){return Ul(t)}function Ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=as(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ul(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ul(s.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function tf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fl(t){return!!t&&"integerValue"in t}function Zu(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ho(t){return!!t&&"mapValue"in t}function fi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=fi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(n)}setAll(e){let n=vt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=fi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ho(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){zs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new kt(fi(this.value))}}function zm(t){const e=[];return zs(t.fields,(n,s)=>{const r=new vt([n]);if(Ho(s)){const i=zm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Vt(e)}/**
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
 */class gt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,re.min(),re.min(),re.min(),kt.empty(),0)}static newFoundDocument(e,n,s,r){return new gt(e,1,n,re.min(),s,r,0)}static newNoDocument(e,n){return new gt(e,2,n,re.min(),re.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,re.min(),re.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function rf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=Ir(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function HT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Km{}class Ye extends Km{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new KT(e,n,s):n==="array-contains"?new QT(e,s):n==="in"?new XT(e,s):n==="not-in"?new YT(e,s):n==="array-contains-any"?new JT(e,s):new Ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new WT(e,s):new GT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ir(n,this.value)):n!==null&&Us(this.value)===Us(n)&&this.matchesComparison(Ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tn extends Km{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new tn(e,n)}matches(e){return Wm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Wm(t){return t.op==="and"}function Gm(t){return zT(t)&&Wm(t)}function zT(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Vl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Tr(t.value);if(Gm(t))return t.filters.map(e=>Vl(e)).join(",");{const e=t.filters.map(n=>Vl(n)).join(",");return`${t.op}(${e})`}}function Qm(t,e){return t instanceof Ye?function(n,s){return s instanceof Ye&&n.op===s.op&&n.field.isEqual(s.field)&&_n(n.value,s.value)}(t,e):t instanceof tn?function(n,s){return s instanceof tn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Qm(i,s.filters[o]),!0):!1}(t,e):void te()}function Xm(t){return t instanceof Ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Tr(e.value)}`}(t):t instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(Xm).join(" ,")+"}"}(t):"Filter"}class KT extends Ye{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class WT extends Ye{constructor(e,n){super(e,"in",n),this.keys=Ym("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GT extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Ym("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ym(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class QT extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zu(n)&&Ui(n.arrayValue,this.value)}}class XT extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ui(this.value.arrayValue,n)}}class YT extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ui(this.value.arrayValue,n)}}class JT extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ui(this.value.arrayValue,s))}}/**
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
 */class ZT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function af(t,e=null,n=[],s=[],r=null,i=null,o=null){return new ZT(t,e,n,s,r,i,o)}function eh(t){const e=oe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Vl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tr(s)).join(",")),e.ft=n}return e.ft}function th(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!of(t.startAt,e.startAt)&&of(t.endAt,e.endAt)}function Bl(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ro{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function e1(t,e,n,s,r,i,o,a){return new ro(t,e,n,s,r,i,o,a)}function Jm(t){return new ro(t)}function cf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ev(t){return t.collectionGroup!==null}function lr(t){const e=oe(t);if(e.dt===null){e.dt=[];const n=nh(e),s=Zm(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new pi(n)),e.dt.push(new pi(vt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new pi(vt.keyField(),i))}}}return e.dt}function Dn(t){const e=oe(t);if(!e._t)if(e.limitType==="F")e._t=af(e.path,e.collectionGroup,lr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of lr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new pi(i.field,o))}const s=e.endAt?new va(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new va(e.startAt.position,e.startAt.inclusive):null;e._t=af(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function jl(t,e){e.getFirstInequalityField(),nh(t);const n=t.filters.concat([e]);return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ql(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return th(Dn(t),Dn(e))&&t.limitType===e.limitType}function tv(t){return`${eh(Dn(t))}|lt:${t.limitType}`}function Hl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Xm(s)).join(", ")}]`),oc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tr(s)).join(",")),`Target(${n})`}(Dn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):W.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of lr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=rf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,lr(n),s)||n.endAt&&!function(r,i,o){const a=rf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,lr(n),s))}(t,e)}function t1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nv(t){return(e,n)=>{let s=!1;for(const r of lr(t)){const i=n1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function n1(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ir(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return te()}}/**
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
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return qm(this.inner)}size(){return this.innerSize}}/**
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
 */const s1=new Ve(W.comparator);function On(){return s1}const sv=new Ve(W.comparator);function ai(...t){let e=sv;for(const n of t)e=e.insert(n.key,n);return e}function rv(t){let e=sv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Rs(){return gi()}function iv(){return gi()}function gi(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const r1=new Ve(W.comparator),i1=new wt(W.comparator);function he(...t){let e=i1;for(const n of t)e=e.add(n);return e}const o1=new wt(we);function a1(){return o1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function av(t){return{integerValue:""+t}}function c1(t,e){return VT(e)?av(e):ov(t,e)}/**
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
 */class lc{constructor(){this._=void 0}}function l1(t,e,n){return t instanceof _a?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Yu(r)&&(r=Ju(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Fi?lv(t,e):t instanceof Vi?uv(t,e):function(s,r){const i=cv(s,r),o=lf(i)+lf(s.wt);return Fl(i)&&Fl(s.wt)?av(o):ov(s.serializer,o)}(t,e)}function u1(t,e,n){return t instanceof Fi?lv(t,e):t instanceof Vi?uv(t,e):n}function cv(t,e){return t instanceof ya?Fl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class _a extends lc{}class Fi extends lc{constructor(e){super(),this.elements=e}}function lv(t,e){const n=hv(e);for(const s of t.elements)n.some(r=>_n(r,s))||n.push(s);return{arrayValue:{values:n}}}class Vi extends lc{constructor(e){super(),this.elements=e}}function uv(t,e){let n=hv(e);for(const s of t.elements)n=n.filter(r=>!_n(r,s));return{arrayValue:{values:n}}}class ya extends lc{constructor(e,n){super(),this.serializer=e,this.wt=n}}function lf(t){return Qe(t.integerValue||t.doubleValue)}function hv(t){return Zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function h1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fi&&s instanceof Fi||n instanceof Vi&&s instanceof Vi?Er(n.elements,s.elements,_n):n instanceof ya&&s instanceof ya?_n(n.wt,s.wt):n instanceof _a&&s instanceof _a}(t.transform,e.transform)}class d1{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function dv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sh(t.key,Zt.none()):new io(t.key,t.data,Zt.none());{const n=t.data,s=kt.empty();let r=new wt(vt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ds(t.key,s,new Vt(r.toArray()),Zt.none())}}function f1(t,e,n){t instanceof io?function(s,r,i){const o=s.value.clone(),a=hf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ds?function(s,r,i){if(!zo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=hf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fv(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function mi(t,e,n,s){return t instanceof io?function(r,i,o,a){if(!zo(r.precondition,i))return o;const c=r.value.clone(),l=df(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ds?function(r,i,o,a){if(!zo(r.precondition,i))return o;const c=df(r.fieldTransforms,a,i),l=i.data;return l.setAll(fv(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return zo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function p1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=cv(s.transform,r||null);i!=null&&(n===null&&(n=kt.empty()),n.set(s.field,i))}return n||null}function uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Er(n,s,(r,i)=>h1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class io extends uc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ds extends uc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function hf(t,e,n){const s=new Map;De(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,u1(o,a,n[r]))}return s}function df(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,l1(i,o,e))}return s}class sh extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g1 extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class m1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&f1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=mi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=mi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=iv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=dv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,(n,s)=>uf(n,s))&&Er(this.baseMutations,e.baseMutations,(n,s)=>uf(n,s))}}class rh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){De(e.mutations.length===s.length);let r=r1;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new rh(e,n,s,r)}}/**
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
 */class v1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,pe;function y1(t){switch(t){default:return te();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function pv(t){if(t===void 0)return Pn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ge.OK:return A.OK;case Ge.CANCELLED:return A.CANCELLED;case Ge.UNKNOWN:return A.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return A.INTERNAL;case Ge.UNAVAILABLE:return A.UNAVAILABLE;case Ge.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ge.NOT_FOUND:return A.NOT_FOUND;case Ge.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ge.ABORTED:return A.ABORTED;case Ge.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ge.DATA_LOSS:return A.DATA_LOSS;default:return te()}}(pe=Ge||(Ge={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ih{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Do}static getOrCreateInstance(){return Do===null&&(Do=new ih),Do}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Do=null;/**
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
 */function w1(){return new TextEncoder}/**
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
 */const E1=new cr([4294967295,4294967295],0);function ff(t){const e=w1().encode(t),n=new CT;return n.update(e),new Uint8Array(n.digest())}function pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cr([n,s],0),new cr([r,i],0)]}class oh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ci(`Invalid padding: ${n}`);if(s<0)throw new ci(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ci(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ci(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=cr.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(cr.fromNumber(s)));return r.compare(E1)===1&&(r=new cr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=ff(e),[s,r]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new oh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=ff(e),[s,r]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new hc(re.min(),r,new Ve(we),On(),he())}}class oo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new oo(s,n,he(),he(),he())}}/**
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
 */class Ko{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class gv{constructor(e,n){this.targetId=e,this.bt=n}}class mv{constructor(e,n,s=It.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class gf{constructor(){this.Vt=0,this.St=vf(),this.Dt=It.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=he(),n=he(),s=he();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:te()}}),new oo(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=vf()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class I1{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=On(),this.jt=mf(),this.zt=new Ve(we)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(Bl(o))if(r===0){const a=new W(o.path);this.Jt(s,a,gt.newNoDocument(a,re.min()))}else De(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=ih.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,d){var h,p,_,v,y,T;const I={localCacheCount:u,existenceFilterCount:d.count},S=d.unchangedNames;return S&&(I.bloomFilter={applied:l===0,hashCount:(h=S==null?void 0:S.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(v=(_=(p=S==null?void 0:S.bits)===null||p===void 0?void 0:p.bitmap)===null||_===void 0?void 0:_.length)!==null&&v!==void 0?v:0,padding:(T=(y=S==null?void 0:S.bits)===null||y===void 0?void 0:y.padding)!==null&&T!==void 0?T:0}),I}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=$s(i).toUint8Array()}catch(u){if(u instanceof Hm)return wr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new oh(c,o,a)}catch(u){return wr(u instanceof ci?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&Bl(a.target)){const c=new W(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,gt.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=he();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new hc(e,n,this.zt,this.Qt,s);return this.Qt=On(),this.jt=mf(),this.zt=new Ve(we),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new gf,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new wt(we),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new gf),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function mf(){return new Ve(W.comparator)}function vf(){return new Ve(W.comparator)}const T1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),b1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),C1=(()=>({and:"AND",or:"OR"}))();class S1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zl(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function wa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function A1(t,e){return wa(t,e.toTimestamp())}function pn(t){return De(!!t),re.fromTimestamp(function(e){const n=as(e);return new Ze(n.seconds,n.nanos)}(t))}function ah(t,e){return function(n){return new Pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _v(t){const e=Pe.fromString(t);return De(Iv(e)),e}function Kl(t,e){return ah(t.databaseId,e.path)}function Wc(t,e){const n=_v(e);if(n.get(1)!==t.databaseId.projectId)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(yv(n))}function Wl(t,e){return ah(t.databaseId,e)}function R1(t){const e=_v(t);return e.length===4?Pe.emptyPath():yv(e)}function Gl(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yv(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _f(t,e,n){return{name:Kl(t,e),fields:n.value.mapValue.fields}}function k1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(De(l===void 0||typeof l=="string"),It.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),It.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:pv(c.code);return new j(l,c.message||"")}(o);n=new mv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Wc(t,s.document.name),i=pn(s.document.updateTime),o=s.document.createTime?pn(s.document.createTime):re.min(),a=new kt({mapValue:{fields:s.document.fields}}),c=gt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ko(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Wc(t,s.document),i=s.readTime?pn(s.readTime):re.min(),o=gt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ko([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Wc(t,s.document),i=s.removedTargetIds||[];n=new Ko([],i,r,null)}else{if(!("filter"in e))return te();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new _1(r,i),a=s.targetId;n=new gv(a,o)}}return n}function N1(t,e){let n;if(e instanceof io)n={update:_f(t,e.key,e.value)};else if(e instanceof sh)n={delete:Kl(t,e.key)};else if(e instanceof ds)n={update:_f(t,e.key,e.data),updateMask:F1(e.fieldMask)};else{if(!(e instanceof g1))return te();n={verify:Kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof _a)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ya)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:A1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:te()}(t,e.precondition)),n}function P1(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?pn(s.updateTime):pn(r);return i.isEqual(re.min())&&(i=pn(r)),new d1(i,s.transformResults||[])}(n,e))):[]}function D1(t,e){return{documents:[Wl(t,e.path)]}}function O1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Wl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Ev(tn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Zs(u.field),direction:L1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=zl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function x1(t){let e=R1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=wv(u);return d instanceof tn&&Gm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new pi(er(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,oc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(u){const d=!!u.before,h=u.values||[];return new va(h,d)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const d=!u.before,h=u.values||[];return new va(h,d)}(n.endAt)),e1(e,r,o,i,a,"F",c,l)}function M1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=er(e.unaryFilter.field);return Ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=er(e.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=er(e.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=er(e.unaryFilter.field);return Ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(e){return Ye.create(er(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(n=>wv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te()}}(e.compositeFilter.op))}(t):te()}function L1(t){return T1[t]}function $1(t){return b1[t]}function U1(t){return C1[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function er(t){return vt.fromServerFormat(t.fieldPath)}function Ev(t){return t instanceof Ye?function(e){if(e.op==="=="){if(sf(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NAN"}};if(nf(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sf(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NOT_NAN"}};if(nf(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(e.field),op:$1(e.op),value:e.value}}}(t):t instanceof tn?function(e){const n=e.getFilters().map(s=>Ev(s));return n.length===1?n[0]:{compositeFilter:{op:U1(e.op),filters:n}}}(t):te()}function F1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Iv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Xn{constructor(e,n,s,r,i=re.min(),o=re.min(),a=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class V1{constructor(e){this.le=e}}function B1(t){const e=x1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ql(e,e.limit,"L"):e}/**
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
 */class j1{constructor(){this.sn=new q1}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(os.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(os.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class q1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new wt(Pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new wt(Pe.comparator)).toArray()}}/**
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
 */class H1{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class z1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class K1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&mi(s.mutation,r,Vt.empty(),Ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,n,s=he()){const r=Rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ai();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,he()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=On();const o=gi(),a=gi();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ds)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),mi(u.mutation,l,u.mutation.getFieldMask(),Ze.now())):o.set(l.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var d;return a.set(l,new z1(u,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=gi();let r=new Ve((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Vt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const d=(r.get(a.batchId)||he()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,d=iv();u.forEach(h=>{if(!i.has(h)){const p=dv(n.get(h),s.get(h));p!==null&&d.set(h,p),i=i.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ev(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(Rs());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:rv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let r=ai();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ai();return this.indexManager.getCollectionParents(e,r).next(o=>P.forEach(o,a=>{const c=function(l,u){return new ro(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,gt.newInvalidDocument(l)))});let o=ai();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&mi(l.mutation,c,Vt.empty(),Ze.now()),cc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return P.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:pn(s.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:B1(s.bundledQuery),readTime:pn(s.readTime)}}(n)),P.resolve()}}/**
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
 */class G1{constructor(){this.overlays=new Ve(W.comparator),this.hs=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Rs();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=Rs(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Rs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Rs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return P.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new v1(n,s));let i=this.hs.get(n);i===void 0&&(i=he(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
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
 */class ch{constructor(){this.ls=new wt(tt.fs),this.ds=new wt(tt._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new tt(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new tt(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new W(new Pe([])),s=new tt(n,e),r=new tt(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new W(new Pe([])),s=new tt(n,e),r=new tt(n,e+1);let i=he();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tt{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return W.comparator(e.key,n.key)||we(e.Es,n.Es)}static _s(e,n){return we(e.Es,n.Es)||W.comparator(e.key,n.key)}}/**
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
 */class Q1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new wt(tt.fs)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new m1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tt(n,0),r=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new wt(we);return n.forEach(r=>{const i=new tt(r,0),o=new tt(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),P.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;W.isDocumentKey(i)||(i=i.child(""));const o=new tt(new W(i),0);let a=new wt(we);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),P.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){De(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return P.forEach(n.mutations,r=>{const i=new tt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new tt(n,0),r=this.Rs.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class X1{constructor(e){this.Ss=e,this.docs=new Ve(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let s=On();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():gt.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=On();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||$T(LT(u),s)<=0||(r.has(u.key)||cc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,s,r){te()}Ds(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Y1(this)}getSize(e){return P.resolve(this.size)}}class Y1 extends H1{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class J1{constructor(e){this.persistence=e,this.Cs=new Ur(n=>eh(n),th),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.xs=0,this.Ns=new ch,this.targetCount=0,this.ks=br.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),P.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new br(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.$n(n),P.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Ns.containsKey(n))}}/**
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
 */class Z1{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Xu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new J1(this),this.indexManager=new j1,this.remoteDocumentCache=function(s){return new X1(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new V1(n),this.Ls=new W1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new G1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new Q1(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){H("MemoryPersistence","Starting transaction:",e);const r=new eb(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return P.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class eb extends FT{constructor(e){super(),this.currentSequenceNumber=e}}class lh{constructor(e){this.persistence=e,this.Gs=new ch,this.Qs=null}static js(e){return new lh(e)}get zs(){if(this.Qs)return this.Qs;throw te()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.zs,s=>{const r=W.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,re.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return P.or([()=>P.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class uh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=he(),r=he();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new uh(e,n.fromCache,s,r)}}/**
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
 */class tb{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(cf(n))return P.resolve(null);let s=Dn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ql(n,null,"F"),s=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=he(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,ql(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return cf(n)||r.isEqual(re.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(Yd()<=ye.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hl(n)),this.zi(e,o,n,MT(r,-1)))})}Qi(e,n){let s=new wt(nv(e));return n.forEach((r,i)=>{cc(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return Yd()<=ye.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Hl(n)),this.qi.getDocumentsMatchingQuery(e,n,os.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new Ve(we),this.Ji=new Ur(i=>eh(i),th),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function sb(t,e,n,s){return new nb(t,e,n,s)}async function Tv(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=he();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function rb(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,d=u.keys();let h=P.resolve();return d.forEach(p=>{h=h.next(()=>l.getEntry(a,p)).next(_=>{const v=c.docVersions.get(p);De(v!==null),_.version.compareTo(v)<0&&(u.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),l.addEntry(_)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=he();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function bv(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function ib(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,d)=>{const h=r.get(d);if(!h)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,d)));let p=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(It.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(d,p),function(_,v,y){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,p,u)&&a.push(n.Fs.updateTargetData(i,p))});let c=On(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ob(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(re.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(d=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function ob(t,e,n){let s=he(),r=he();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=On();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function ab(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function cb(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Xn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function Ql(t,e,n){const s=oe(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!so(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function yf(t,e,n){const s=oe(t);let r=re.min(),i=he();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),d=u.Ji.get(l);return d!==void 0?P.resolve(u.Hi.get(d)):u.Fs.getTargetData(c,l)}(s,o,Dn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?i:he())).next(a=>(lb(s,t1(e),a),{documents:a,sr:i})))}function lb(t,e,n){let s=t.Yi.get(e)||re.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class wf{constructor(){this.activeTargetIds=a1()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ub{constructor(){this.Wr=new wf,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new wf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hb{Jr(e){}shutdown(){}}/**
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
 */class Ef{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oo=null;function Gc(){return Oo===null?Oo=268435456+Math.round(2147483648*Math.random()):Oo++,"0x"+Oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fb{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const ft="WebChannelConnection";class pb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=Gc(),a=this.Io(e,n);H("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>(H("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw wr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+$r,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=db[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=Gc();return new Promise((o,a)=>{const c=new bT;c.setWithCredentials(!0),c.listenOnce(ET.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kc.NO_ERROR:const u=c.getResponseJson();H(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Kc.TIMEOUT:H(ft,`RPC '${e}' ${i} timed out`),a(new j(A.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const d=c.getStatus();if(H(ft,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let h=c.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const _=function(v){const y=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(y)>=0?y:A.UNKNOWN}(p.status);a(new j(_,p.message))}else a(new j(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(A.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{H(ft,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);H(ft,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Gc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yT(),a=wT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new TT({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");H(ft,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let d=!1,h=!1;const p=new fb({io:v=>{h?H(ft,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(d||(H(ft,`Opening RPC '${e}' stream ${r} transport.`),u.open(),d=!0),H(ft,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},ro:()=>u.close()}),_=(v,y,T)=>{v.listen(y,I=>{try{T(I)}catch(S){setTimeout(()=>{throw S},0)}})};return _(u,ko.EventType.OPEN,()=>{h||H(ft,`RPC '${e}' stream ${r} transport opened.`)}),_(u,ko.EventType.CLOSE,()=>{h||(h=!0,H(ft,`RPC '${e}' stream ${r} transport closed`),p.fo())}),_(u,ko.EventType.ERROR,v=>{h||(h=!0,wr(ft,`RPC '${e}' stream ${r} transport errored:`,v),p.fo(new j(A.UNAVAILABLE,"The operation could not be completed")))}),_(u,ko.EventType.MESSAGE,v=>{var y;if(!h){const T=v.data[0];De(!!T);const I=T,S=I.error||((y=I[0])===null||y===void 0?void 0:y.error);if(S){H(ft,`RPC '${e}' stream ${r} received error:`,S);const U=S.status;let z=function(M){const E=Ge[M];if(E!==void 0)return pv(E)}(U),Y=S.message;z===void 0&&(z=A.INTERNAL,Y="Unknown error status: "+U+" with message "+S.message),h=!0,p.fo(new j(z,Y)),u.close()}else H(ft,`RPC '${e}' stream ${r} received:`,T),p._o(T)}}),_(a,IT.STAT_EVENT,v=>{v.stat===Qd.PROXY?H(ft,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Qd.NOPROXY&&H(ft,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new S1(t,!0)}/**
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
 */class Cv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class Sv{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Cv(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new j(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gb extends Sv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=k1(this.serializer,e),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?pn(i.readTime):re.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=Gl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Bl(a)?{documents:D1(r,a)}:{query:O1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=vv(r,i.resumeToken);const c=zl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(re.min())>0){o.readTime=wa(r,i.snapshotVersion.toTimestamp());const c=zl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=M1(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=Gl(this.serializer),n.removeTarget=e,this.zo(n)}}class mb extends Sv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=P1(e.writeResults,e.commitTime),s=pn(e.commitTime);return this.listener.uu(s,n)}return De(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Gl(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>N1(this.serializer,s))};this.zo(n)}}/**
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
 */class vb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(A.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(A.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class _b{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Pn(n),this.wu=!1):H("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class yb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{Ks(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c.Au.add(4),await ao(c),c.Pu.set("Unknown"),c.Au.delete(4),await fc(c)}(this))})}),this.Pu=new _b(s,r)}}async function fc(t){if(Ks(t))for(const e of t.Ru)await e(!0)}async function ao(t){for(const e of t.Ru)await e(!1)}function Av(t,e){const n=oe(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),fh(n)?dh(n):Fr(n).Uo()&&hh(n,e))}function Rv(t,e){const n=oe(t),s=Fr(n);n.Eu.delete(e),s.Uo()&&kv(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():Ks(n)&&n.Pu.set("Unknown"))}function hh(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fr(t).nu(e)}function kv(t,e){t.bu.Lt(e),Fr(t).su(e)}function dh(t){t.bu=new I1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Fr(t).start(),t.Pu.mu()}function fh(t){return Ks(t)&&!Fr(t).qo()&&t.Eu.size>0}function Ks(t){return oe(t).Au.size===0}function Nv(t){t.bu=void 0}async function wb(t){t.Eu.forEach((e,n)=>{hh(t,e)})}async function Eb(t,e){Nv(t),fh(t)?(t.Pu.pu(e),dh(t)):t.Pu.set("Unknown")}async function Ib(t,e,n){if(t.Pu.set("Online"),e instanceof mv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ea(t,s)}else if(e instanceof Ko?t.bu.Wt(e):e instanceof gv?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(re.min()))try{const s=await bv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(It.EMPTY_BYTE_STRING,l.snapshotVersion)),kv(r,a);const u=new Xn(l.target,a,c,l.sequenceNumber);hh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await Ea(t,s)}}async function Ea(t,e,n){if(!so(e))throw e;t.Au.add(1),await ao(t),t.Pu.set("Offline"),n||(n=()=>bv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await fc(t)})}function Pv(t,e){return e().catch(n=>Ea(t,n,e))}async function pc(t){const e=oe(t),n=cs(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Tb(e);)try{const r=await ab(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,bb(e,r)}catch(r){await Ea(e,r)}Dv(e)&&Ov(e)}function Tb(t){return Ks(t)&&t.Tu.length<10}function bb(t,e){t.Tu.push(e);const n=cs(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Dv(t){return Ks(t)&&!cs(t).qo()&&t.Tu.length>0}function Ov(t){cs(t).start()}async function Cb(t){cs(t).au()}async function Sb(t){const e=cs(t);for(const n of t.Tu)e.ou(n.mutations)}async function Ab(t,e,n){const s=t.Tu.shift(),r=rh.from(s,e,n);await Pv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await pc(t)}async function Rb(t,e){e&&cs(t).ru&&await async function(n,s){if(r=s.code,y1(r)&&r!==A.ABORTED){const i=n.Tu.shift();cs(n).Go(),await Pv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pc(n)}var r}(t,e),Dv(t)&&Ov(t)}async function If(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=Ks(n);n.Au.add(3),await ao(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await fc(n)}async function kb(t,e){const n=oe(t);e?(n.Au.delete(2),await fc(n)):e||(n.Au.add(2),await ao(n),n.Pu.set("Unknown"))}function Fr(t){return t.Vu||(t.Vu=function(e,n,s){const r=oe(e);return r.lu(),new gb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:wb.bind(null,t),co:Eb.bind(null,t),eu:Ib.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),fh(t)?dh(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Nv(t))})),t.Vu}function cs(t){return t.Su||(t.Su=function(e,n,s){const r=oe(e);return r.lu(),new mb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:Cb.bind(null,t),co:Rb.bind(null,t),cu:Sb.bind(null,t),uu:Ab.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await pc(t)):(await t.Su.stop(),t.Tu.length>0&&(H("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class ph{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ph(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gh(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),so(t))return new j(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ur{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=ai(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ur;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Tf{constructor(){this.Du=new Ve(W.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):te():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Cr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cr(e,n,ur.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Nb{constructor(){this.xu=void 0,this.listeners=[]}}class Pb{constructor(){this.queries=new Ur(e=>tv(e),ac),this.onlineState="Unknown",this.Nu=new Set}}async function Db(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Nb),r)try{i.xu=await n.onListen(s)}catch(o){const a=gh(o,`Initialization of query '${Hl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&mh(n)}async function Ob(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function xb(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&mh(n)}function Mb(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function mh(t){t.Nu.forEach(e=>{e.next()})}class Lb{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Cr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class xv{constructor(e){this.key=e}}class Mv{constructor(e){this.key=e}}class $b{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=he(),this.mutatedKeys=he(),this.Zu=nv(e),this.tc=new ur(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new Tf,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,d)=>{const h=r.get(u),p=cc(this.query,d)?d:null,_=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;h&&p?h.data.isEqual(p.data)?_!==v&&(s.track({type:3,doc:p}),y=!0):this.ic(h,p)||(s.track({type:2,doc:p}),y=!0,(c&&this.Zu(p,c)>0||l&&this.Zu(p,l)<0)&&(a=!0)):!h&&p?(s.track({type:0,doc:p}),y=!0):h&&!p&&(s.track({type:1,doc:h}),y=!0,(c||l)&&(a=!0)),y&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(d,h){const p=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return p(d)-p(h)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new Cr(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Tf,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=he(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new Mv(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new xv(s))}),n}ac(e){this.Ju=e.sr,this.Xu=he();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Cr.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Ub{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Fb{constructor(e){this.key=e,this.lc=!1}}class Vb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Ur(a=>tv(a),ac),this._c=new Map,this.wc=new Set,this.mc=new Ve(W.comparator),this.gc=new Map,this.yc=new ch,this.Ic={},this.Tc=new Map,this.Ec=br.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Bb(t,e){const n=Yb(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await cb(n.localStore,Dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await jb(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Av(n.remoteStore,o)}return r}async function jb(t,e,n,s,r){t.Rc=(d,h,p)=>async function(_,v,y,T){let I=v.view.nc(y);I.ji&&(I=await yf(_.localStore,v.query,!1).then(({documents:z})=>v.view.nc(z,I)));const S=T&&T.targetChanges.get(v.targetId),U=v.view.applyChanges(I,_.isPrimaryClient,S);return Cf(_,v.targetId,U.uc),U.snapshot}(t,d,h,p);const i=await yf(t.localStore,e,!0),o=new $b(e,i.sr),a=o.nc(i.documents),c=oo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Cf(t,n,l.uc);const u=new Ub(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function qb(t,e){const n=oe(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!ac(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ql(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Rv(n.remoteStore,s.targetId),Xl(n,s.targetId)}).catch(no)):(Xl(n,s.targetId),await Ql(n.localStore,s.targetId,!0))}async function Hb(t,e,n){const s=Jb(t);try{const r=await function(i,o){const a=oe(i),c=Ze.now(),l=o.reduce((h,p)=>h.add(p.key),he());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=On(),_=he();return a.Xi.getEntries(h,l).next(v=>{p=v,p.forEach((y,T)=>{T.isValidDocument()||(_=_.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,p)).next(v=>{u=v;const y=[];for(const T of o){const I=p1(T,u.get(T.key).overlayedDocument);I!=null&&y.push(new ds(T.key,I,zm(I.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,y,o)}).next(v=>{d=v;const y=v.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(h,v.batchId,y)})}).then(()=>({batchId:d.batchId,changes:rv(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new Ve(we)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await co(s,r.changes),await pc(s.remoteStore)}catch(r){const i=gh(r,"Failed to persist write");n.reject(i)}}async function Lv(t,e){const n=oe(t);try{const s=await ib(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?De(o.lc):r.removedDocuments.size>0&&(De(o.lc),o.lc=!1))}),await co(n,s,e)}catch(s){await no(s)}}function bf(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const d of u.listeners)d.ku(o)&&(c=!0)}),c&&mh(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zb(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new Ve(W.comparator);o=o.insert(i,gt.newNoDocument(i,re.min()));const a=he().add(i),c=new hc(re.min(),new Map,new Ve(we),o,a);await Lv(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),vh(s)}else await Ql(s.localStore,e,!1).then(()=>Xl(s,e,n)).catch(no)}async function Kb(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await rb(n.localStore,e);Uv(n,s,null),$v(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await co(n,r)}catch(r){await no(r)}}async function Wb(t,e,n){const s=oe(t);try{const r=await function(i,o){const a=oe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(De(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Uv(s,e,n),$v(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await co(s,r)}catch(r){await no(r)}}function $v(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Uv(t,e,n){const s=oe(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||Fv(t,s)})}function Fv(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Rv(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),vh(t))}function Cf(t,e,n){for(const s of n)s instanceof xv?(t.yc.addReference(s.key,e),Gb(t,s)):s instanceof Mv?(H("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||Fv(t,s.key)):te()}function Gb(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(H("SyncEngine","New document in limbo: "+n),t.wc.add(s),vh(t))}function vh(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new W(Pe.fromString(e)),s=t.Ec.next();t.gc.set(s,new Fb(n)),t.mc=t.mc.insert(n,s),Av(t.remoteStore,new Xn(Dn(Jm(n.path)),s,"TargetPurposeLimboResolution",Xu.ct))}}async function co(t,e,n){const s=oe(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=uh.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,d=>P.forEach(d.$i,h=>l.persistence.referenceDelegate.addReference(u,d.targetId,h)).next(()=>P.forEach(d.Fi,h=>l.persistence.referenceDelegate.removeReference(u,d.targetId,h)))))}catch(u){if(!so(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const d=u.targetId;if(!u.fromCache){const h=l.Hi.get(d),p=h.snapshotVersion,_=h.withLastLimboFreeSnapshotVersion(p);l.Hi=l.Hi.insert(d,_)}}}(s.localStore,i))}async function Qb(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const s=await Tv(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new j(A.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await co(n,s.tr)}}function Xb(t,e){const n=oe(t),s=n.gc.get(e);if(s&&s.lc)return he().add(s.key);{let r=he();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function Yb(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zb.bind(null,e),e.fc.eu=xb.bind(null,e.eventManager),e.fc.vc=Mb.bind(null,e.eventManager),e}function Jb(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wb.bind(null,e),e}class Sf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sb(this.persistence,new tb,e.initialUser,this.serializer)}createPersistence(e){return new Z1(lh.js,this.serializer)}createSharedClientState(e){return new ub}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qb.bind(null,this.syncEngine),await kb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Pb}createDatastore(e){const n=dc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new pb(r));var r;return function(i,o,a,c){return new vb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>bf(this.syncEngine,a,0),o=Ef.D()?new Ef:new hb,new yb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Vb(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);H("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await ao(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=jm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=gh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Tv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Af(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sC(t);H("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>If(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>If(e.remoteStore,i)),t._onlineComponents=e}function nC(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function sC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nC(n))throw n;wr("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new Sf)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Xc(t,new Sf);return t._offlineComponents}async function Vv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Af(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Af(t,new Zb))),t._onlineComponents}function rC(t){return Vv(t).then(e=>e.syncEngine)}async function iC(t){const e=await Vv(t),n=e.eventManager;return n.onListen=Bb.bind(null,e.syncEngine),n.onUnlisten=qb.bind(null,e.syncEngine),n}function oC(t,e,n={}){const s=new ns;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new eC({next:d=>{i.enqueueAndForget(()=>Ob(r,u)),d.fromCache&&a.source==="server"?c.reject(new j(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),u=new Lb(o,l,{includeMetadataChanges:!0,Uu:!0});return Db(r,u)}(await iC(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Map;/**
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
 */function Bv(t,e,n){if(!n)throw new j(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aC(t,e,n,s){if(e===!0&&s===!0)throw new j(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kf(t){if(!W.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nf(t){if(W.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new j(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ST;switch(n.type){case"firstParty":return new NT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rf.get(e);n&&(H("ComponentProvider","Removing Datastore"),Rf.delete(e),n.terminate())}(this),Promise.resolve()}}function cC(t,e,n,s={}){var r;const i=(t=ls(t,mc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&wr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=pt.MOCK_USER;else{o=Pg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new j(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pt(c)}t._authCredentials=new AT(new Bm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Vr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class ss extends Vr{constructor(e,n,s){super(e,n,Jm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new W(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function lC(t,e,...n){if(t=Fe(t),Bv("collection","path",e),t instanceof mc){const s=Pe.fromString(e,...n);return Nf(s),new ss(t,null,s)}{if(!(t instanceof Pt||t instanceof ss))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Nf(s),new ss(t.firestore,null,s)}}function nt(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=jm.A()),Bv("doc","path",e),t instanceof mc){const s=Pe.fromString(e,...n);return kf(s),new Pt(t,null,new W(s))}{if(!(t instanceof Pt||t instanceof ss))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return kf(s),new Pt(t.firestore,t instanceof ss?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Cv(this,"async_queue_retry"),this.Yc=()=>{const n=Qc();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Qc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new ns;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!so(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Pn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=ph.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&te()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class lo extends mc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new uC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qv(this),this._firestoreClient.terminate()}}function hC(t,e){const n=typeof t=="object"?t:Su(),s=typeof t=="string"?t:e||"(default)",r=Ha(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=kg("firestore");i&&cC(r,...i)}return r}function jv(t){return t._firestoreClient||qv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qv(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new jT(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new tC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(It.fromBase64String(e))}catch(n){throw new j(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sr(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this._methodName=e}}/**
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
 */class yh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const dC=/^__.*__$/;class fC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new io(e,this.data,n,this.fieldTransforms)}}class Hv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class wh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new wh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Ia(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(zv(this.ua)&&dC.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class pC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||dc(e)}ga(e,n,s,r=!1){return new wh({ua:e,methodName:n,ma:s,path:vt.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eh(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new pC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gC(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);Ih("Data must be an object, but it was:",o,s);const a=Kv(s,o);let c,l;if(i.merge)c=new Vt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const h=Yl(e,d,n);if(!o.contains(h))throw new j(A.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Gv(u,h)||u.push(h)}c=new Vt(u),l=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=o.fieldTransforms;return new fC(new kt(a),c,l)}class _c extends _h{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _c}}function mC(t,e,n,s){const r=t.ga(1,e,n);Ih("Data must be an object, but it was:",r,s);const i=[],o=kt.empty();zs(s,(c,l)=>{const u=Th(e,c,n);l=Fe(l);const d=r.fa(u);if(l instanceof _c)i.push(u);else{const h=uo(l,d);h!=null&&(i.push(u),o.set(u,h))}});const a=new Vt(i);return new Hv(o,a,r.fieldTransforms)}function vC(t,e,n,s,r,i){const o=t.ga(1,e,n),a=[Yl(e,s,n)],c=[r];if(i.length%2!=0)throw new j(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<i.length;h+=2)a.push(Yl(e,i[h])),c.push(i[h+1]);const l=[],u=kt.empty();for(let h=a.length-1;h>=0;--h)if(!Gv(l,a[h])){const p=a[h];let _=c[h];_=Fe(_);const v=o.fa(p);if(_ instanceof _c)l.push(p);else{const y=uo(_,v);y!=null&&(l.push(p),u.set(p,y))}}const d=new Vt(l);return new Hv(u,d,o.fieldTransforms)}function _C(t,e,n,s=!1){return uo(n,t.ga(s?4:3,e))}function uo(t,e){if(Wv(t=Fe(t)))return Ih("Unsupported field value:",e,t),Kv(t,e);if(t instanceof _h)return function(n,s){if(!zv(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=uo(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return c1(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ze.fromDate(n);return{timestampValue:wa(s.serializer,r)}}if(n instanceof Ze){const r=new Ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wa(s.serializer,r)}}if(n instanceof yh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sr)return{bytesValue:vv(s.serializer,n._byteString)};if(n instanceof Pt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ah(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${gc(n)}`)}(t,e)}function Kv(t,e){const n={};return qm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(t,(s,r)=>{const i=uo(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Wv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof yh||t instanceof Sr||t instanceof Pt||t instanceof _h)}function Ih(t,e,n){if(!Wv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=gc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Yl(t,e,n){if((e=Fe(e))instanceof vc)return e._internalPath;if(typeof e=="string")return Th(t,e);throw Ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const yC=new RegExp("[~\\*/\\[\\]]");function Th(t,e,n){if(e.search(yC)>=0)throw Ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vc(...e.split("."))._internalPath}catch{throw Ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ia(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(A.INVALID_ARGUMENT,a+t+c)}function Gv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wC extends Qv{data(){return super.data()}}function bh(t,e){return typeof e=="string"?Th(t,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ch{}class IC extends Ch{}function TC(t,e,...n){let s=[];e instanceof Ch&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Sh).length,o=r.filter(a=>a instanceof yc).length;if(i>1||i>0&&o>0)throw new j(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class yc extends IC{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new yc(e,n,s)}_apply(e){const n=this._parse(e);return Xv(e._query,n),new Vr(e.firestore,e.converter,jl(e._query,n))}_parse(e){const n=Eh(e.firestore);return function(r,i,o,a,c,l,u){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new j(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Of(u,l);const h=[];for(const p of u)h.push(Df(a,r,p));d={arrayValue:{values:h}}}else d=Df(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Of(u,l),d=_C(o,i,u,l==="in"||l==="not-in");return Ye.create(c,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bC(t,e,n){const s=e,r=bh("where",t);return yc._create(r,s,n)}class Sh extends Ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Xv(i,a),i=jl(i,a)}(e._query,n),new Vr(e.firestore,e.converter,jl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Df(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new j(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ev(e)&&n.indexOf("/")!==-1)throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Pe.fromString(n));if(!W.isDocumentKey(s))throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return tf(t,new W(s))}if(n instanceof Pt)return tf(t,n._key);throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(n)}.`)}function Of(t,e){if(!Array.isArray(t)||t.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xv(t,e){if(e.isInequality()){const s=nh(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new j(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Zm(t);i!==null&&CC(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function CC(t,e,n){if(!n.isEqual(e))throw new j(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class SC{convertValue(e,n="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return zs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new yh(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ju(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const n=as(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Pe.fromString(e);De(Iv(s));const r=new $i(s.get(1),s.get(3)),i=new W(s.popFirst(5));return r.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RC extends Qv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(bh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Wo extends RC{data(e={}){return super.data(e)}}class kC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new xo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Wo(this._firestore,this._userDataWriter,s.key,s,new xo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Wo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Wo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:NC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class PC extends SC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function DC(t){t=ls(t,Vr);const e=ls(t.firestore,lo),n=jv(e),s=new PC(e);return EC(t._query),oC(n,t._query).then(r=>new kC(e,s,t,r))}function Yv(t,e,n){t=ls(t,Pt);const s=ls(t.firestore,lo),r=AC(t.converter,e,n);return Ah(s,[gC(Eh(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Zt.none())])}function Nt(t,e,n,...s){t=ls(t,Pt);const r=ls(t.firestore,lo),i=Eh(r);let o;return o=typeof(e=Fe(e))=="string"||e instanceof vc?vC(i,"updateDoc",t._key,e,n,s):mC(i,"updateDoc",t._key,e),Ah(r,[o.toMutation(t._key,Zt.exists(!0))])}function OC(t){return Ah(ls(t.firestore,lo),[new sh(t._key,Zt.none())])}function Ah(t,e){return function(n,s){const r=new ns;return n.asyncQueue.enqueueAndForget(async()=>Hb(await rC(n),s,r)),r.promise}(jv(t),e)}(function(t,e=!0){(function(n){$r=n})(qs),Ms(new is("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new lo(new RT(n.getProvider("auth-internal")),new DT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new j(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),fn(Xd,"3.11.0",t),fn(Xd,"3.11.0","esm2017")})();/**
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
 */const Jv="firebasestorage.googleapis.com",Zv="storageBucket",xC=2*60*1e3,MC=10*60*1e3;/**
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
 */class He extends yn{constructor(e,n,s=0){super(Yc(e),`Firebase Storage: ${n} (${Yc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function Yc(t){return"storage/"+t}function Rh(){const t="An unknown error occurred, please check the error payload for server response.";return new He(qe.UNKNOWN,t)}function LC(t){return new He(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function $C(t){return new He(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(qe.UNAUTHENTICATED,t)}function FC(){return new He(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function VC(t){return new He(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function BC(){return new He(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jC(){return new He(qe.CANCELED,"User canceled the upload/download.")}function qC(t){return new He(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function HC(t){return new He(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zC(){return new He(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Zv+"' property when initializing the app?")}function KC(){return new He(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WC(){return new He(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function GC(t){return new He(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jl(t){return new He(qe.INVALID_ARGUMENT,t)}function e_(){return new He(qe.APP_DELETED,"The Firebase app was deleted.")}function QC(t){return new He(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vi(t,e){return new He(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ei(t){throw new He(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(s.path==="")return s;throw HC(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(U){U.path_=decodeURIComponent(U.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${r}/o${h}`,"i"),_={bucket:1,path:3},v=n===Jv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",T=new RegExp(`^https?://${v}/${r}/${y}`,"i"),S=[{regex:a,indices:c,postModify:i},{regex:p,indices:_,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let U=0;U<S.length;U++){const z=S[U],Y=z.regex.exec(e);if(Y){const M=Y[z.indices.bucket];let E=Y[z.indices.path];E||(E=""),s=new Bt(M,E),z.postModify(s);break}}if(s==null)throw qC(e);return s}}class XC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function YC(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function d(y){r=setTimeout(()=>{r=null,t(p,c())},y)}function h(){i&&clearTimeout(i)}function p(y,...T){if(l){h();return}if(y){h(),u.call(null,y,...T);return}if(c()||o){h(),u.call(null,y,...T);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,d(S)}let _=!1;function v(y){_||(_=!0,h(),!l&&(r!==null?(y||(a=2),clearTimeout(r),d(0)):y||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function JC(t){t(!1)}/**
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
 */function ZC(t){return t!==void 0}function eS(t){return typeof t=="object"&&!Array.isArray(t)}function kh(t){return typeof t=="string"||t instanceof String}function xf(t){return Nh()&&t instanceof Blob}function Nh(){return typeof Blob<"u"&&!nE()}function Mf(t,e,n,s){if(s<e)throw Jl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Jl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ph(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function t_(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */function tS(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class nS{constructor(e,n,s,r,i,o,a,c,l,u,d,h=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Mo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ds.NO_ERROR,c=i.getStatus();if(!a||tS(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ds.ABORT;s(!1,new Mo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Mo(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());ZC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Rh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?e_():jC();o(c)}else{const c=BC();o(c)}};this.canceled_?n(!1,new Mo(!1,null,!0)):this.backoffId_=YC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&JC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function sS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aS(t,e,n,s,r,i,o=!0){const a=t_(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return iS(l,e),sS(l,n),rS(l,i),oS(l,s),new nS(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function cS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lS(...t){const e=cS();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Nh())return new Blob(t);throw new He(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function hS(t){if(typeof atob>"u")throw GC("base-64");return atob(t)}/**
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
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Jc{constructor(e,n){this.data=e,this.contentType=n||null}}function dS(t,e){switch(t){case dn.RAW:return new Jc(n_(e));case dn.BASE64:case dn.BASE64URL:return new Jc(s_(t,e));case dn.DATA_URL:return new Jc(pS(e),gS(e))}throw Rh()}function n_(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function fS(t){let e;try{e=decodeURIComponent(t)}catch{throw vi(dn.DATA_URL,"Malformed data URL.")}return n_(e)}function s_(t,e){switch(t){case dn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw vi(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw vi(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=hS(e)}catch(r){throw r.message.includes("polyfill")?r:vi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class r_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vi(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=mS(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function pS(t){const e=new r_(t);return e.base64?s_(dn.BASE64,e.rest):fS(e.rest)}function gS(t){return new r_(t).contentType}function mS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Hn{constructor(e,n){let s=0,r="";xf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(xf(this.data_)){const s=this.data_,r=uS(s,e,n);return r===null?null:new Hn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Hn(s,!0)}}static getBlob(...e){if(Nh()){const n=e.map(s=>s instanceof Hn?s.data_:s);return new Hn(lS.apply(null,n))}else{const n=e.map(o=>kh(o)?dS(dn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Hn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function i_(t){let e;try{e=JSON.parse(t)}catch{return null}return eS(e)?e:null}/**
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
 */function vS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _S(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function o_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function yS(t,e){return e}class Tt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||yS}}let Lo=null;function wS(t){return!kh(t)||t.length<2?t:o_(t)}function a_(){if(Lo)return Lo;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return wS(o)}const n=new Tt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Tt("size");return r.xform=s,t.push(r),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),Lo=t,Lo}function ES(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Bt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function IS(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return ES(s,t),s}function c_(t,e,n){const s=i_(e);return s===null?null:IS(t,s,n)}function TS(t,e,n,s){const r=i_(e);if(r===null||!kh(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,d=t.fullPath,h="/b/"+o(u)+"/o/"+o(d),p=Ph(h,n,s),_=t_({alt:"media",token:l});return p+_})[0]}function bS(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class l_{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function u_(t){if(!t)throw Rh()}function CS(t,e){function n(s,r){const i=c_(t,r,e);return u_(i!==null),i}return n}function SS(t,e){function n(s,r){const i=c_(t,r,e);return u_(i!==null),TS(i,r,t.host,t._protocol)}return n}function h_(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=FC():r=UC():n.getStatus()===402?r=$C(t.bucket):n.getStatus()===403?r=VC(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function AS(t){const e=h_(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=LC(t.path)),i.serverResponse=r.serverResponse,i}return n}function RS(t,e,n){const s=e.fullServerUrl(),r=Ph(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new l_(r,i,SS(t,n),o);return a.errorHandler=AS(e),a}function kS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function NS(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=kS(null,e)),s}function PS(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let U=0;U<2;U++)S=S+Math.random().toString().slice(2);return S}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=NS(e,s,r),u=bS(l,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+c+"--",p=Hn.getBlob(d,s,h);if(p===null)throw KC();const _={name:l.fullPath},v=Ph(i,t.host,t._protocol),y="POST",T=t.maxUploadRetryTime,I=new l_(v,y,CS(t,n),T);return I.urlParams=_,I.headers=o,I.body=p.uploadData(),I.errorHandler=h_(e),I}class DS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw ei("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ei("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ei("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ei("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ei("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OS extends DS{initXhr(){this.xhr_.responseType="text"}}function d_(){return new OS}/**
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
 */class Fs{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fs(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return o_(this._location.path)}get storage(){return this._service}get parent(){const e=vS(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw QC(e)}}function xS(t,e,n){t._throwIfRoot("uploadBytes");const s=PS(t.storage,t._location,a_(),new Hn(e,!0),n);return t.storage.makeRequestWithTokens(s,d_).then(r=>({metadata:r,ref:t}))}function MS(t){t._throwIfRoot("getDownloadURL");const e=RS(t.storage,t._location,a_());return t.storage.makeRequestWithTokens(e,d_).then(n=>{if(n===null)throw WC();return n})}function LS(t,e){const n=_S(t._location.path,e),s=new Bt(t._location.bucket,n);return new Fs(t.storage,s)}/**
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
 */function $S(t){return/^[A-Za-z]+:\/\//.test(t)}function US(t,e){return new Fs(t,e)}function f_(t,e){if(t instanceof Dh){const n=t;if(n._bucket==null)throw zC();const s=new Fs(n,n._bucket);return e!=null?f_(s,e):s}else return e!==void 0?LS(t,e):t}function FS(t,e){if(e&&$S(e)){if(t instanceof Dh)return US(t,e);throw Jl("To use ref(service, url), the first argument must be a Storage instance.")}else return f_(t,e)}function Lf(t,e){const n=e==null?void 0:e[Zv];return n==null?null:Bt.makeFromBucketSpec(n,t)}function VS(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Pg(r,t.app.options.projectId))}class Dh{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Jv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xC,this._maxUploadRetryTime=MC,this._requests=new Set,r!=null?this._bucket=Bt.makeFromBucketSpec(r,this._host):this._bucket=Lf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=Lf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new XC(e_());{const o=aS(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const $f="@firebase/storage",Uf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="storage";function BS(t,e,n){return t=Fe(t),xS(t,e,n)}function jS(t){return t=Fe(t),MS(t)}function qS(t,e){return t=Fe(t),FS(t,e)}function HS(t=Su(),e){t=Fe(t);const s=Ha(t,p_).getImmediate({identifier:e}),r=kg("storage");return r&&zS(s,...r),s}function zS(t,e,n,s={}){VS(t,e,n,s)}function KS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Dh(n,s,r,e,qs)}function WS(){Ms(new is(p_,KS,"PUBLIC").setMultipleInstances(!0)),fn($f,Uf,""),fn($f,Uf,"esm2017")}WS();const GS={apiKey:"AIzaSyCs4ob0qjeLAxY1Nr-dIXiwXxnqkeyBGc8",authDomain:"cuyart-shop.firebaseapp.com",projectId:"cuyart-shop",storageBucket:"cuyart-shop.appspot.com",messagingSenderId:"906331708937",appId:"1:906331708937:web:bbf3a749bd30b61b5d22d8"},g_=xg(GS),Je=hC(g_),QS=HS(g_);async function XS(t,e){const n=qS(QS,`${e}/${t.name}`);return await BS(n,t),await jS(n)}function YS(t){return typeof t=="object"&&t!==null}function Ff(t,e){return t=YS(t)?t:Object.create(null),new Proxy(t,{get(n,s,r){return s==="key"?Reflect.get(n,s,r):Reflect.get(n,s,r)||Reflect.get(e,s,r)}})}function JS(t,e){return e.reduce((n,s)=>n==null?void 0:n[s],t)}function ZS(t,e,n){return e.slice(0,-1).reduce((s,r)=>/^(__proto__)$/.test(r)?{}:s[r]=s[r]||{},t)[e[e.length-1]]=n,t}function eA(t,e){return e.reduce((n,s)=>{const r=s.split(".");return ZS(n,r,JS(t,r))},{})}function Vf(t,{storage:e,serializer:n,key:s,debug:r}){try{const i=e==null?void 0:e.getItem(s);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){r&&console.error(i)}}function Bf(t,{storage:e,serializer:n,key:s,paths:r,debug:i}){try{const o=Array.isArray(r)?eA(t,r):t;e.setItem(s,n.serialize(o))}catch(o){i&&console.error(o)}}function tA(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:r}=e;if(!s)return;const i=(Array.isArray(s)?s.map(o=>Ff(o,t)):[Ff(s,t)]).map(({storage:o=localStorage,beforeRestore:a=null,afterRestore:c=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:u=r.$id,paths:d=null,debug:h=!1})=>{var p;return{storage:o,beforeRestore:a,afterRestore:c,serializer:l,key:((p=t.key)!=null?p:_=>_)(u),paths:d,debug:h}});r.$persist=()=>{i.forEach(o=>{Bf(r.$state,o)})},r.$hydrate=({runHooks:o=!0}={})=>{i.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;o&&(c==null||c(e)),Vf(r,a),o&&(l==null||l(e))})},i.forEach(o=>{const{beforeRestore:a,afterRestore:c}=o;a==null||a(e),Vf(r,o),c==null||c(e),r.$subscribe((l,u)=>{Bf(u,o)},{detached:!0})})}}var nA=tA();const ze=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},sA={};function rA(t,e){const n=ig("RouterView");return ce(),xr(n)}const iA=ze(sA,[["render",rA]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tr=typeof window<"u";function oA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Zc(t,e){const n={};for(const s in e){const r=e[s];n[s]=nn(r)?r.map(t):t(r)}return n}const _i=()=>{},nn=Array.isArray,aA=/\/$/,cA=t=>t.replace(aA,"");function el(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=dA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function lA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ar(e.matched[s],n.matched[r])&&m_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ar(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function m_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hA(t[n],e[n]))return!1;return!0}function hA(t,e){return nn(t)?qf(t,e):nn(e)?qf(e,t):t===e}function qf(t,e){return nn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function dA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yi||(yi={}));function fA(t){if(!t)if(tr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cA(t)}const pA=/^[^#]+#/;function gA(t,e){return t.replace(pA,"#")+e}function mA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const wc=()=>({left:window.pageXOffset,top:window.pageYOffset});function vA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=mA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hf(t,e){return(history.state?history.state.position-e:-1)+t}const Zl=new Map;function _A(t,e){Zl.set(t,e)}function yA(t){const e=Zl.get(t);return Zl.delete(t),e}let wA=()=>location.protocol+"//"+location.host;function v_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),jf(c,"")}return jf(n,t)+s+r}function EA(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const p=v_(t,location),_=n.value,v=e.value;let y=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}y=v?h.position-v.position:0}else s(p);r.forEach(T=>{T(n.value,_,{delta:y,type:Bi.pop,direction:y?y>0?yi.forward:yi.back:yi.unknown})})};function c(){o=n.value}function l(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return i.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(Ee({},h.state,{scroll:wc()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function zf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?wc():null}}function IA(t){const{history:e,location:n}=window,s={value:v_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:wA()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(c,l){const u=Ee({},e.state,zf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ee({},r.value,e.state,{forward:c,scroll:wc()});i(u.current,u,!0);const d=Ee({},zf(s.value,c,null),{position:u.position+1},l);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function TA(t){t=fA(t);const e=IA(t),n=EA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ee({location:"",base:t,go:s,createHref:gA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function bA(t){return typeof t=="string"||t&&typeof t=="object"}function __(t){return typeof t=="string"||typeof t=="symbol"}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},y_=Symbol("");var Kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kf||(Kf={}));function Rr(t,e){return Ee(new Error,{type:t,[y_]:!0},e)}function In(t,e){return t instanceof Error&&y_ in t&&(e==null||!!(t.type&e))}const Wf="[^/]+?",CA={sensitive:!1,strict:!1,start:!0,end:!0},SA=/[.+*?^${}()[\]/\\]/g;function AA(t,e){const n=Ee({},CA,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const h=l[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(SA,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:v,optional:y,regexp:T}=h;i.push({name:_,repeatable:v,optional:y});const I=T||Wf;if(I!==Wf){p+=10;try{new RegExp(`(${I})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${_}" (${I}): `+U.message)}}let S=v?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;d||(S=y&&l.length<2?`(?:/${S})`:"/"+S),y&&(S+="?"),r+=S,p+=20,y&&(p+=-8),v&&(p+=-20),I===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=i[h-1];d[_.name]=p&&_.repeatable?p.split("/"):p}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:y}=p,T=_ in l?l[_]:"";if(nn(T)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const I=nn(T)?T.join("/"):T;if(!I)if(y)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=I}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function RA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function kA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=RA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Gf(s))return 1;if(Gf(r))return-1}return r.length-s.length}function Gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NA={type:0,value:""},PA=/[a-zA-Z0-9_]/;function DA(t){if(!t)return[[]];if(t==="/")return[[NA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:PA.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function OA(t,e,n){const s=AA(DA(t.path),n),r=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function xA(t,e){const n=[],s=new Map;e=Yf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,h){const p=!h,_=MA(u);_.aliasOf=h&&h.record;const v=Yf(e,u),y=[_];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of S)y.push(Ee({},_,{components:h?h.record.components:_.components,path:U,aliasOf:h?h.record:_}))}let T,I;for(const S of y){const{path:U}=S;if(d&&U[0]!=="/"){const z=d.record.path,Y=z[z.length-1]==="/"?"":"/";S.path=d.record.path+(U&&Y+U)}if(T=OA(S,d,v),h?h.alias.push(T):(I=I||T,I!==T&&I.alias.push(T),p&&u.name&&!Xf(T)&&o(u.name)),_.children){const z=_.children;for(let Y=0;Y<z.length;Y++)i(z[Y],T,h&&h.children[Y])}h=h||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return I?()=>{o(I)}:_i}function o(u){if(__(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&kA(u,n[d])>=0&&(u.record.path!==n[d].record.path||!w_(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Xf(u)&&s.set(u.record.name,u)}function l(u,d){let h,p={},_,v;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Rr(1,{location:u});v=h.record.name,p=Ee(Qf(d.params,h.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&Qf(u.params,h.keys.map(I=>I.name))),_=h.stringify(p)}else if("path"in u)_=u.path,h=n.find(I=>I.re.test(_)),h&&(p=h.parse(_),v=h.record.name);else{if(h=d.name?s.get(d.name):n.find(I=>I.re.test(d.path)),!h)throw Rr(1,{location:u,currentLocation:d});v=h.record.name,p=Ee({},d.params,u.params),_=h.stringify(p)}const y=[];let T=h;for(;T;)y.unshift(T.record),T=T.parent;return{name:v,path:_,params:p,matched:y,meta:$A(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Qf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function MA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $A(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Yf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function w_(t,e){return e.children.some(n=>n===t||w_(t,n))}const E_=/#/g,UA=/&/g,FA=/\//g,VA=/=/g,BA=/\?/g,I_=/\+/g,jA=/%5B/g,qA=/%5D/g,T_=/%5E/g,HA=/%60/g,b_=/%7B/g,zA=/%7C/g,C_=/%7D/g,KA=/%20/g;function Oh(t){return encodeURI(""+t).replace(zA,"|").replace(jA,"[").replace(qA,"]")}function WA(t){return Oh(t).replace(b_,"{").replace(C_,"}").replace(T_,"^")}function eu(t){return Oh(t).replace(I_,"%2B").replace(KA,"+").replace(E_,"%23").replace(UA,"%26").replace(HA,"`").replace(b_,"{").replace(C_,"}").replace(T_,"^")}function GA(t){return eu(t).replace(VA,"%3D")}function QA(t){return Oh(t).replace(E_,"%23").replace(BA,"%3F")}function XA(t){return t==null?"":QA(t).replace(FA,"%2F")}function Ta(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function YA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(I_," "),o=i.indexOf("="),a=Ta(o<0?i:i.slice(0,o)),c=o<0?null:Ta(i.slice(o+1));if(a in e){let l=e[a];nn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Jf(t){let e="";for(let n in t){const s=t[n];if(n=GA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(s)?s.map(i=>i&&eu(i)):[s&&eu(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function JA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=nn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const ZA=Symbol(""),Zf=Symbol(""),Ec=Symbol(""),xh=Symbol(""),tu=Symbol("");function ti(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function jn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(Rr(4,{from:n,to:e})):d instanceof Error?a(d):bA(d)?a(Rr(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function tl(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(eR(a)){const l=(a.__vccOpts||a)[e];l&&r.push(jn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=oA(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&jn(h,n,s,i,o)()}))}}return r}function eR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ep(t){const e=Ht(Ec),n=Ht(xh),s=Ut(()=>e.resolve(Me(t.to))),r=Ut(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ar.bind(null,u));if(h>-1)return h;const p=tp(c[l-2]);return l>1&&tp(u)===p&&d[d.length-1].path!==p?d.findIndex(Ar.bind(null,c[l-2])):h}),i=Ut(()=>r.value>-1&&rR(n.params,s.value.params)),o=Ut(()=>r.value>-1&&r.value===n.matched.length-1&&m_(n.params,s.value.params));function a(c={}){return sR(c)?e[Me(t.replace)?"replace":"push"](Me(t.to)).catch(_i):Promise.resolve()}return{route:s,href:Ut(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const tR=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ep,setup(t,{slots:e}){const n=Or(ep(t)),{options:s}=Ht(Ec),r=Ut(()=>({[np(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[np(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:_g("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),nR=tR;function sR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rR(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!nn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function tp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const np=(t,e,n)=>t??e??n,iR=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(tu),r=Ut(()=>t.route||s.value),i=Ht(Zf,0),o=Ut(()=>{let l=Me(i);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ut(()=>r.value.matched[o.value]);Vo(Zf,Ut(()=>o.value+1)),Vo(ZA,a),Vo(tu,r);const c=K();return ln(()=>[c.value,a.value,t.name],([l,u,d],[h,p,_])=>{u&&(u.instances[d]=l,p&&p!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Ar(u,p)||!h)&&(u.enterCallbacks[d]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return sp(n.default,{Component:h,route:l});const p=d.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,y=_g(h,Ee({},_,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return sp(n.default,{Component:y,route:l})||y}}});function sp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oR=iR;function aR(t){const e=xA(t.routes,t),n=t.parseQuery||YA,s=t.stringifyQuery||Jf,r=t.history,i=ti(),o=ti(),a=ti(),c=sw($n);let l=$n;tr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zc.bind(null,C=>""+C),d=Zc.bind(null,XA),h=Zc.bind(null,Ta);function p(C,V){let $,x;return __(C)?($=e.getRecordMatcher(C),x=V):x=C,e.addRoute(x,$)}function _(C){const V=e.getRecordMatcher(C);V&&e.removeRoute(V)}function v(){return e.getRoutes().map(C=>C.record)}function y(C){return!!e.getRecordMatcher(C)}function T(C,V){if(V=Ee({},V||c.value),typeof C=="string"){const g=el(n,C,V.path),m=e.resolve({path:g.path},V),w=r.createHref(g.fullPath);return Ee(g,m,{params:h(m.params),hash:Ta(g.hash),redirectedFrom:void 0,href:w})}let $;if("path"in C)$=Ee({},C,{path:el(n,C.path,V.path).path});else{const g=Ee({},C.params);for(const m in g)g[m]==null&&delete g[m];$=Ee({},C,{params:d(C.params)}),V.params=d(V.params)}const x=e.resolve($,V),ge=C.hash||"";x.params=u(h(x.params));const $e=lA(s,Ee({},C,{hash:WA(ge),path:x.path})),le=r.createHref($e);return Ee({fullPath:$e,hash:ge,query:s===Jf?JA(C.query):C.query||{}},x,{redirectedFrom:void 0,href:le})}function I(C){return typeof C=="string"?el(n,C,c.value.path):Ee({},C)}function S(C,V){if(l!==C)return Rr(8,{from:V,to:C})}function U(C){return M(C)}function z(C){return U(Ee(I(C),{replace:!0}))}function Y(C){const V=C.matched[C.matched.length-1];if(V&&V.redirect){const{redirect:$}=V;let x=typeof $=="function"?$(C):$;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=I(x):{path:x},x.params={}),Ee({query:C.query,hash:C.hash,params:"path"in x?{}:C.params},x)}}function M(C,V){const $=l=T(C),x=c.value,ge=C.state,$e=C.force,le=C.replace===!0,g=Y($);if(g)return M(Ee(I(g),{state:typeof g=="object"?Ee({},ge,g.state):ge,force:$e,replace:le}),V||$);const m=$;m.redirectedFrom=V;let w;return!$e&&uA(s,x,$)&&(w=Rr(16,{to:m,from:x}),Mt(x,x,!0,!1)),(w?Promise.resolve(w):N(m,x)).catch(b=>In(b)?In(b,2)?b:ot(b):_e(b,m,x)).then(b=>{if(b){if(In(b,2))return M(Ee({replace:le},I(b.to),{state:typeof b.to=="object"?Ee({},ge,b.to.state):ge,force:$e}),V||m)}else b=ie(m,x,!0,le,ge);return X(m,x,b),b})}function E(C,V){const $=S(C,V);return $?Promise.reject($):Promise.resolve()}function N(C,V){let $;const[x,ge,$e]=cR(C,V);$=tl(x.reverse(),"beforeRouteLeave",C,V);for(const g of x)g.leaveGuards.forEach(m=>{$.push(jn(m,C,V))});const le=E.bind(null,C,V);return $.push(le),Js($).then(()=>{$=[];for(const g of i.list())$.push(jn(g,C,V));return $.push(le),Js($)}).then(()=>{$=tl(ge,"beforeRouteUpdate",C,V);for(const g of ge)g.updateGuards.forEach(m=>{$.push(jn(m,C,V))});return $.push(le),Js($)}).then(()=>{$=[];for(const g of C.matched)if(g.beforeEnter&&!V.matched.includes(g))if(nn(g.beforeEnter))for(const m of g.beforeEnter)$.push(jn(m,C,V));else $.push(jn(g.beforeEnter,C,V));return $.push(le),Js($)}).then(()=>(C.matched.forEach(g=>g.enterCallbacks={}),$=tl($e,"beforeRouteEnter",C,V),$.push(le),Js($))).then(()=>{$=[];for(const g of o.list())$.push(jn(g,C,V));return $.push(le),Js($)}).catch(g=>In(g,8)?g:Promise.reject(g))}function X(C,V,$){for(const x of a.list())x(C,V,$)}function ie(C,V,$,x,ge){const $e=S(C,V);if($e)return $e;const le=V===$n,g=tr?history.state:{};$&&(x||le?r.replace(C.fullPath,Ee({scroll:le&&g&&g.scroll},ge)):r.push(C.fullPath,ge)),c.value=C,Mt(C,V,$,le),ot()}let Le;function it(){Le||(Le=r.listen((C,V,$)=>{if(!vs.listening)return;const x=T(C),ge=Y(x);if(ge){M(Ee(ge,{replace:!0}),x).catch(_i);return}l=x;const $e=c.value;tr&&_A(Hf($e.fullPath,$.delta),wc()),N(x,$e).catch(le=>In(le,12)?le:In(le,2)?(M(le.to,x).then(g=>{In(g,20)&&!$.delta&&$.type===Bi.pop&&r.go(-1,!1)}).catch(_i),Promise.reject()):($.delta&&r.go(-$.delta,!1),_e(le,x,$e))).then(le=>{le=le||ie(x,$e,!1),le&&($.delta&&!In(le,8)?r.go(-$.delta,!1):$.type===Bi.pop&&In(le,20)&&r.go(-1,!1)),X(x,$e,le)}).catch(_i)}))}let Be=ti(),Oe=ti(),Se;function _e(C,V,$){ot(C);const x=Oe.list();return x.length?x.forEach(ge=>ge(C,V,$)):console.error(C),Promise.reject(C)}function fe(){return Se&&c.value!==$n?Promise.resolve():new Promise((C,V)=>{Be.add([C,V])})}function ot(C){return Se||(Se=!C,it(),Be.list().forEach(([V,$])=>C?$(C):V()),Be.reset()),C}function Mt(C,V,$,x){const{scrollBehavior:ge}=t;if(!tr||!ge)return Promise.resolve();const $e=!$&&yA(Hf(C.fullPath,0))||(x||!$)&&history.state&&history.state.scroll||null;return vu().then(()=>ge(C,V,$e)).then(le=>le&&vA(le)).catch(le=>_e(le,C,V))}const At=C=>r.go(C);let at;const En=new Set,vs={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:y,getRoutes:v,resolve:T,options:t,push:U,replace:z,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Oe.add,isReady:fe,install(C){const V=this;C.component("RouterLink",nR),C.component("RouterView",oR),C.config.globalProperties.$router=V,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Me(c)}),tr&&!at&&c.value===$n&&(at=!0,U(r.location).catch(ge=>{}));const $={};for(const ge in $n)$[ge]=Ut(()=>c.value[ge]);C.provide(Ec,V),C.provide(xh,Or($)),C.provide(tu,c);const x=C.unmount;En.add(C),C.unmount=function(){En.delete(C),En.size<1&&(l=$n,Le&&Le(),Le=null,c.value=$n,at=!1,Se=!1),x()}}};return vs}function Js(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function cR(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ar(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ar(l,c))||r.push(c))}return[n,s,r]}function Kt(){return Ht(Ec)}function lR(){return Ht(xh)}const Ic="/cuy-art-shop/assets/Logo-removebg-preview-23a31917.png",uR="/cuy-art-shop/assets/Puntos-b413704e.svg",hR="/cuy-art-shop/assets/search-8de85e52.svg",fs="/cuy-art-shop/assets/person-c17a1bb8.svg",dR="/cuy-art-shop/assets/shopping_cart-2f426c23.svg",fR="/cuy-art-shop/assets/menu-fd7c077d.svg",pR="/cuy-art-shop/assets/close-4f1b1f2c.svg";function Mh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function S_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gR=S_,A_=new zi("auth","Firebase",S_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new bu("@firebase/auth");function mR(t,...e){ba.logLevel<=ye.WARN&&ba.warn(`Auth (${qs}): ${t}`,...e)}function Go(t,...e){ba.logLevel<=ye.ERROR&&ba.error(`Auth (${qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw Lh(t,...e)}function gn(t,...e){return Lh(t,...e)}function vR(t,e,n){const s=Object.assign(Object.assign({},gR()),{[e]:n});return new zi("auth","Firebase",s).create(e,{appName:t.name})}function Lh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return A_.create(t,...e)}function ee(t,e,...n){if(!t)throw Lh(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function xn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _R(){return rp()==="http:"||rp()==="https:"}function rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_R()||sE()||"connection"in navigator)?navigator.onLine:!0}function wR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=tE()||rE()}get(){return yR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new ho(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jr(t,e,n,s,r={}){return k_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),R_.fetch()(N_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function k_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ER),e);try{const r=new TR(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw $o(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vR(t,u,l);sn(t,u)}}catch(r){if(r instanceof yn)throw r;sn(t,"network-request-failed",{message:String(r)})}}async function fo(t,e,n,s,r={}){const i=await jr(t,e,n,s,r);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function N_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?$h(t.config,r):`${t.config.apiScheme}://${r}`}class TR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),IR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=gn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function CR(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SR(t,e=!1){const n=Fe(t),s=await n.getIdToken(e),r=Uh(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:wi(nl(r.auth_time)),issuedAtTime:wi(nl(r.iat)),expirationTime:wi(nl(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nl(t){return Number(t)*1e3}function Uh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ag(n);return r?JSON.parse(r):(Go("Failed to decode base64 JWT payload"),null)}catch(r){return Go("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function AR(t){const e=Uh(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yn&&RR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function RR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(t){var e;const n=t.auth,s=await t.getIdToken(),r=await kr(t,CR(n,{idToken:s}));ee(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DR(i.providerUserInfo):[],a=PR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new P_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function NR(t){const e=Fe(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PR(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function DR(t){return t.map(e=>{var{providerId:n}=e,s=Mh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){const n=await k_(t,{},async()=>{const s=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=N_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await OR(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ji;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Os{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new P_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await kr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SR(this,e)}reload(){return NR(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kr(this,bR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:U,isAnonymous:z,providerData:Y,stsTokenManager:M}=n;ee(S&&M,e,"internal-error");const E=ji.fromJSON(this.name,M);ee(typeof S=="string",e,"internal-error"),Un(d,e.name),Un(h,e.name),ee(typeof U=="boolean",e,"internal-error"),ee(typeof z=="boolean",e,"internal-error"),Un(p,e.name),Un(_,e.name),Un(v,e.name),Un(y,e.name),Un(T,e.name),Un(I,e.name);const N=new Os({uid:S,auth:e,email:h,emailVerified:U,displayName:d,isAnonymous:z,photoURL:_,phoneNumber:p,tenantId:v,stsTokenManager:E,createdAt:T,lastLoginAt:I});return Y&&Array.isArray(Y)&&(N.providerData=Y.map(X=>Object.assign({},X))),y&&(N._redirectEventId=y),N}static async _fromIdTokenResponse(e,n,s=!1){const r=new ji;r.updateFromServerResponse(n);const i=new Os({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ca(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Map;function Rn(t){xn(t instanceof Function,"Expected a class definition");let e=ip.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ip.set(t,e),e)}/**
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
 */class D_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D_.type="NONE";const op=D_;/**
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
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class hr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Qo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hr(Rn(op),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Rn(op);const o=Qo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Os._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(O_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(U_(e))return"Webos";if(Fh(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(L_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function O_(t=Et()){return/firefox\//i.test(t)}function Fh(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(t=Et()){return/crios\//i.test(t)}function M_(t=Et()){return/iemobile/i.test(t)}function L_(t=Et()){return/android/i.test(t)}function $_(t=Et()){return/blackberry/i.test(t)}function U_(t=Et()){return/webos/i.test(t)}function Tc(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xR(t=Et()){var e;return Tc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MR(){return iE()&&document.documentMode===10}function F_(t=Et()){return Tc(t)||L_(t)||U_(t)||$_(t)||/windows phone/i.test(t)||M_(t)}function LR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e=[]){let n;switch(t){case"Browser":n=ap(Et());break;case"Worker":n=`${ap(Et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${s}`}async function B_(t,e){return jr(t,"GET","/v2/recaptchaConfig",Br(t,e))}function cp(t){return t!==void 0&&t.enterprise!==void 0}class j_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function q_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=gn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",$R().appendChild(s)})}function UR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FR="https://www.google.com/recaptcha/enterprise.js?render=",VR="recaptcha-enterprise",BR="NO_RECAPTCHA";class H_{constructor(e){this.type=VR,this.auth=qr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{B_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new j_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;cp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(BR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&cp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}q_(FR+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Sa(t,e,n,s=!1){const r=new H_(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class jR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lp(this),this.idTokenSubscription=new lp(this),this.beforeStateQueue=new jR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}async initializeRecaptchaConfig(){const e=await B_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new j_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new H_(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qr(t){return Fe(t)}class lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=dE(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t,e){const n=Ha(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ra(i,e??{}))return r;sn(r,"already-initialized")}return n.initialize({options:e})}function zR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function KR(t,e,n){const s=qr(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=z_(e),{host:o,port:a}=WR(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||GR()}function z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WR(t){const e=z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:up(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:up(o)}}}function up(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function K_(t,e){return jr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function XR(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Vh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new qi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Sa(e,s,"signInWithPassword");return sl(e,r)}else return sl(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Sa(e,s,"signInWithPassword");return sl(e,i)}else return Promise.reject(r)});case"emailLink":return QR(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return K_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XR(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR="http://localhost";class Vs extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Mh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Vs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dr(e,n)}buildRequest(){const e={requestUri:YR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZR(t){const e=si(ri(t)).link,n=e?si(ri(e)).deep_link_id:null,s=si(ri(t)).deep_link_id;return(s?si(ri(s)).link:null)||s||n||e||t}class Bh{constructor(e){var n,s,r,i,o,a;const c=si(ri(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,d=JR((r=c.mode)!==null&&r!==void 0?r:null);ee(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZR(e);try{return new Bh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(e,n){return qi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bh.parseLink(n);return ee(s,"argument-error"),qi._fromEmailAndCode(e,s.code,s.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends W_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends po{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends po{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends po{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Gn.credential(n,s)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t,e){return fo(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Os._fromIdTokenResponse(e,s,r),o=hp(s);return new Bs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=hp(s);return new Bs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends yn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Aa(e,n,s,r)}}function G_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,i,e,s):i})}async function ek(t,e,n=!1){const s=await kr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",s)}/**
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
 */async function tk(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await kr(t,G_(s,r,e,t),n);ee(i.idToken,s,"internal-error");const o=Uh(i.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),Bs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(t,e,n=!1){const s="signIn",r=await G_(t,s,e),i=await Bs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function nk(t,e){return Q_(qr(t),e)}async function sk(t,e,n){var s;const r=qr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await Sa(r,i,"signUpPassword");o=rl(r,l)}else o=rl(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Sa(r,i,"signUpPassword");return rl(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Bs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function rk(t,e,n){return nk(Fe(t),Hr.credential(e,n))}function ik(t,e){return X_(Fe(t),e,null)}function ok(t,e){return X_(Fe(t),null,e)}async function X_(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await kr(t,K_(s,i));await t._updateTokensIfNecessary(o,!0)}function ak(t,e,n,s){return Fe(t).onIdTokenChanged(e,n,s)}function ck(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function lk(t){return Fe(t).signOut()}const Ra="__sak";/**
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
 */class Y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(){const t=Et();return Fh(t)||Tc(t)}const hk=1e3,dk=10;class J_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uk()&&LR(),this.fallbackToPolling=F_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);MR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,dk):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const fk=J_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Z_.type="SESSION";const ey=Z_;/**
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
 */function pk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new bc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await pk(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=jh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function mk(t){mn().location.href=t}/**
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
 */function ty(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function vk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _k(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yk(){return ty()?self:null}/**
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
 */const ny="firebaseLocalStorageDb",wk=1,ka="firebaseLocalStorage",sy="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function Ek(){const t=indexedDB.deleteDatabase(ny);return new go(t).toPromise()}function su(){const t=indexedDB.open(ny,wk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ka,{keyPath:sy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ka)?e(s):(s.close(),await Ek(),e(await su()))})})}async function dp(t,e,n){const s=Cc(t,!0).put({[sy]:e,value:n});return new go(s).toPromise()}async function Ik(t,e){const n=Cc(t,!1).get(e),s=await new go(n).toPromise();return s===void 0?null:s.value}function fp(t,e){const n=Cc(t,!0).delete(e);return new go(n).toPromise()}const Tk=800,bk=3;class ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ty()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(yk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vk(),!this.activeServiceWorker)return;this.sender=new gk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_k()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await su();return await dp(e,Ra,"1"),await fp(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ik(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Cc(r,!1).getAll();return new go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ry.type="LOCAL";const Ck=ry;new ho(3e4,6e4);/**
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
 */function Sk(t,e){return e?Rn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qh extends Vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ak(t){return Q_(t.auth,new qh(t),t.bypassAuthState)}function Rk(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),tk(n,new qh(t),t.bypassAuthState)}async function kk(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),ek(n,new qh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ak;case"linkViaPopup":case"linkViaRedirect":return kk;case"reauthViaPopup":case"reauthViaRedirect":return Rk;default:sn(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new ho(2e3,1e4);class sr extends iy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nk.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="pendingRedirect",Xo=new Map;class Dk extends iy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Xo.get(this.auth._key());if(!e){try{const s=await Ok(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Xo.set(this.auth._key(),e)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ok(t,e){const n=Lk(e),s=Mk(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function xk(t,e){Xo.set(t._key(),e)}function Mk(t){return Rn(t._redirectPersistence)}function Lk(t){return Qo(Pk,t.config.apiKey,t.name)}async function $k(t,e,n=!1){const s=qr(t),r=Sk(s,e),o=await new Dk(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=10*60*1e3;class Fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!oy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(pp(e))}saveEventToCache(e){this.cachedEventUids.add(pp(e)),this.lastProcessedEventTime=Date.now()}}function pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e={}){return jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qk=/^https?/;async function Hk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bk(t);for(const n of e)try{if(zk(n))return}catch{}sn(t,"unauthorized-domain")}function zk(t){const e=nu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!qk.test(n))return!1;if(jk.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Kk=new ho(3e4,6e4);function gp(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wk(t){return new Promise((e,n)=>{var s,r,i;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gp(),n(gn(t,"network-request-failed"))},timeout:Kk.get()})}if(!((r=(s=mn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const a=UR("iframefcb");return mn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},q_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Yo=null,e})}let Yo=null;function Gk(t){return Yo=Yo||Wk(t),Yo}/**
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
 */const Qk=new ho(5e3,15e3),Xk="__/auth/iframe",Yk="emulator/auth/iframe",Jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eN(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$h(e,Yk):`https://${t.config.authDomain}/${Xk}`,s={apiKey:e.apiKey,appName:t.name,v:qs},r=Zk.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ki(s).slice(1)}`}async function tN(t){const e=await Gk(t),n=mn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:eN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=mn().setTimeout(()=>{i(o)},Qk.get());function c(){mn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const nN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sN=500,rN=600,iN="_blank",oN="http://localhost";class mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aN(t,e,n,s=sN,r=rN){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nN),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Et().toLowerCase();n&&(a=x_(l)?iN:n),O_(l)&&(e=e||oN,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(xR(l)&&a!=="_self")return cN(e||"",a),new mp(null);const d=window.open(e||"",a,u);ee(d,t,"popup-blocked");try{d.focus()}catch{}return new mp(d)}function cN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const lN="__/auth/handler",uN="emulator/auth/handler",hN=encodeURIComponent("fac");async function vp(t,e,n,s,r,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:qs,eventId:r};if(e instanceof W_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof po){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${hN}=${encodeURIComponent(c)}`:"";return`${dN(t)}?${Ki(a).slice(1)}${l}`}function dN({config:t}){return t.emulator?$h(t,uN):`https://${t.authDomain}/${lN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="webStorageSupport";class fN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ey,this._completeRedirectFn=$k,this._overrideRedirectResult=xk}async _openPopup(e,n,s,r){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vp(e,n,s,nu(),r);return aN(e,o,jh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await vp(e,n,s,nu(),r);return mk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(xn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tN(e),s=new Fk(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(il,{type:il},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[il];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return F_()||Fh()||Tc()}}const pN=fN;var _p="@firebase/auth",yp="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vN(t){Ms(new is("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),ee(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V_(t)},l=new qR(s,r,i,c);return zR(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ms(new is("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(s=>new gN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(_p,yp,mN(t)),fn(_p,yp,"esm2017")}/**
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
 */const _N=5*60,yN=Ng("authIdTokenMaxAge")||_N;let wp=null;const wN=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yN)return;const r=n==null?void 0:n.token;wp!==r&&(wp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function dt(t=Su()){const e=Ha(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HR(t,{popupRedirectResolver:pN,persistence:[Ck,fk,ey]}),s=Ng("authTokenSyncURL");if(s){const i=wN(s);ck(n,i,()=>i(n.currentUser)),ak(n,o=>i(o))}const r=Rg("auth");return r&&KR(n,`http://${r}`),n}vN("Browser");const mo=t=>(Ot("data-v-f3a632b4"),t=t(),xt(),t),EN={class:"head"},IN=mo(()=>f("img",{src:Ic,alt:"Persona"},null,-1)),TN=[IN],bN=Iu('<div class="centerhead" data-v-f3a632b4><input type="text" name="text" id="one" data-v-f3a632b4><div class="centersearch" data-v-f3a632b4><img src="'+uR+'" alt="Puntos" data-v-f3a632b4><button data-v-f3a632b4><img src="'+hR+'" alt="Busqueda" data-v-f3a632b4></button></div></div>',1),CN={class:"righthead"},SN=mo(()=>f("img",{src:fs,alt:"Persona"},null,-1)),AN=[SN],RN=mo(()=>f("img",{src:dR,alt:"Carro de compra"},null,-1)),kN=[RN],NN={class:"containmodal"},PN={class:"contain"},DN={class:"salir"},ON=mo(()=>f("img",{src:pR,alt:"Cerrar"},null,-1)),xN=[ON],MN=mo(()=>f("h2",null,"Menu",-1)),LN=Ce({__name:"NavBar",setup(t){const e=K(!1),n=Kt(),s=()=>{n.push("/about")},r=()=>{dt().currentUser!=null?n.push({name:"Informacion"}):n.push("/login")},i=()=>{n.push({name:"Home"})},o=()=>{if(dt().currentUser==null){n.push("/login");return}n.push({name:"Carrito"}),console.log("Carroo")},a=()=>{dt().currentUser!=null?n.push({name:"Informacion"}):n.push("/login")};return(c,l)=>(ce(),de(lt,null,[f("header",EN,[f("div",{class:"lefthead"},[f("button",{onClick:i},TN)]),bN,f("div",CN,[f("button",{onClick:r},AN),f("button",{onClick:o},kN),f("button",null,[f("img",{src:fR,alt:"Menu",onClick:l[0]||(l[0]=u=>e.value=!e.value)})])])]),Z(f("div",NN,[f("div",PN,[f("div",DN,[f("button",{onClick:l[1]||(l[1]=u=>e.value=!e.value)},xN)]),f("div",{class:"opciones"},[MN,f("p",{href:"#",onClick:a},"Mi Cuenta"),f("p",{href:"#",onClick:s},"Acerca de nosotros")])])],512),[[Tn,e.value]])],64))}});const ay=ze(LN,[["__scopeId","data-v-f3a632b4"]]);let cy=0;const $N=t=>{cy=t},Fn=()=>cy,zt=z0("registro",{state:()=>({datos:[{nombre:"Juan",correo:"juan@juan.com",password:"123456",telefono:"1234567890",direccion:"Calle 123",productos:[{nombre:"Producto 1",precio:"100",stock:10,img:[" "],desc:"Descripcion del producto 2",tipo:"Barro"}],carro:[{nombre:"Producto 1",precio:"100",stock:10,img:[" "],desc:"Descripcion del producto 2",tipo:"Barro"}],uso:!0}]}),actions:{addRegistro(t){this.datos.push(t)},getRegistro(t){for(let e=0;e<this.datos.length;e++)if(this.datos[e].correo==t)return this.datos[e]},addtelefono(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].telefono=e)},adddireccion(t,e){for(let n=0;n<this.datos.length;n++)this.datos[n].correo==t&&(this.datos[n].direccion=e)},getAll(){for(let t=0;t<this.datos.length;t++)console.log(this.datos[t])},getCorreo(t){for(let e=0;e<this.datos.length;e++)if(this.datos[e].productos!=null){for(let n=0;n<this.datos[e].productos.length;n++)for(let s=0;s<this.datos[e].productos[n].img.length;s++)if(this.datos[e].productos[n].img[s]==t)return this.datos[e].correo}},getIndeximg(t){let e=0;for(let n=0;n<this.datos.length;n++){if(this.datos[n].productos==null){console.log("undefined");continue}for(let s=0;s<this.datos[n].productos.length;s++)for(let r=0;r<this.datos[n].productos[s].img.length;r++)if(this.datos[n].productos[s].img[r].toLocaleLowerCase().toString()==t.toLocaleLowerCase().toString())return s}return e},async setAll(){try{const t=TC(lC(Je,"usuarios"),bC("uso","==",!0));(await DC(t)).forEach(n=>{const s={nombre:n.data().nombre,correo:n.data().correo,password:n.data().password,telefono:n.data().telefono,direccion:n.data().direccion,productos:n.data().productos,carro:n.data().carro,uso:n.data().uso};this.addRegistro(s)})}catch{}},clearAll(){this.datos=[]},getAllProductos(){let t=[];for(let e=0;e<this.datos.length;e++)for(let n=0;n<this.datos[e].productos.length;n++)t.push(this.datos[e].productos[n]);return t}},persist:!0}),Wt=t=>(Ot("data-v-7d3735ad"),t=t(),xt(),t),UN={class:"main"},FN={class:"mainleft"},VN={class:"mainleftleft"},BN={class:"categorias"},jN=Wt(()=>f("h2",null,"Catergorias",-1)),qN=Wt(()=>f("div",{class:"linea"},null,-1)),HN=Wt(()=>f("label",{for:"tipo1"},"Ceràmica",-1)),zN=Wt(()=>f("label",{for:"tipo2"},"Barro",-1)),KN=Wt(()=>f("label",{for:"tipo3"},"Tela",-1)),WN=Wt(()=>f("label",{for:"tipo4"},"Acuarela",-1)),GN={class:"precios"},QN=Wt(()=>f("h2",null,"Precios",-1)),XN=Wt(()=>f("div",{class:"linea"},null,-1)),YN={class:"precio"},JN=Wt(()=>f("div",{class:"preciosss"},[f("h3",null,"20.000"),f("h3",null,"800.000")],-1)),ZN={class:"precioss"},eP=Wt(()=>f("span",null,"$",-1)),tP={class:"mainright"},nP={class:"targetas"},sP=["onClick"],rP=["src"],iP=Wt(()=>f("div",{class:"linea"},null,-1)),oP={class:"price"},aP=Wt(()=>f("div",{class:"lineap"},null,-1)),cP={class:"po"},lP=Ce({__name:"MainComponent",setup(t){const e=zt(),n=K(2e4),s=K(!1),r=K(!1),i=K(!1),o=K(!1);let a=[],c=[];for(let u=0;u<e.datos.length;u++)if(e.datos[u].productos!=null)for(let d=0;d<e.datos[u].productos.length;d++)e.datos[u].productos[d].stock!=0&&(a.push(e.datos[u].productos[d]),c.push(e.datos[u].productos[d]));console.log(a);const l=u=>{dy.push({name:"Producto",params:{id:u}})};return yu(async()=>{e.clearAll(),await e.setAll()}),ln(s,(u,d)=>{u?(c=a.filter(h=>h.tipo=="Ceràmica"),r.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro")),i.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela")),o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Acuarela")),r.value&&i.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Tela")),r.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Acuarela")),i.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela"||h.tipo=="Acuarela")),r.value&&i.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela")),console.log("Verdad")):(c=a,r.value&&(c=a.filter(h=>h.tipo=="Barro")),i.value&&(c=a.filter(h=>h.tipo=="Tela")),o.value&&(c=a.filter(h=>h.tipo=="Acuarela")),r.value&&i.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela")),r.value&&o.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Acuarela")),i.value&&o.value&&(c=a.filter(h=>h.tipo=="Tela"||h.tipo=="Acuarela")),r.value&&i.value&&o.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela")))}),ln(r,(u,d)=>{u?(c=a.filter(h=>h.tipo=="Barro"),s.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Ceràmica")),i.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela")),o.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Acuarela")),s.value&&i.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Ceràmica"||h.tipo=="Tela")),s.value&&o.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Ceràmica"||h.tipo=="Acuarela")),i.value&&o.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela")),s.value&&i.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela"))):(c=a,s.value&&(c=a.filter(h=>h.tipo=="Ceràmica")),i.value&&(c=a.filter(h=>h.tipo=="Tela")),o.value&&(c=a.filter(h=>h.tipo=="Acuarela")),s.value&&i.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela")),s.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Acuarela")),i.value&&o.value&&(c=a.filter(h=>h.tipo=="Tela"||h.tipo=="Acuarela")),s.value&&i.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela"||h.tipo=="Acuarela")))}),ln(i,(u,d)=>{u?(c=a.filter(h=>h.tipo=="Tela"),s.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela")),r.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela")),o.value&&(c=a.filter(h=>h.tipo=="Tela"||h.tipo=="Acuarela")),s.value&&r.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Tela")),s.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela"||h.tipo=="Acuarela")),r.value&&o.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela")),s.value&&r.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela"))):(c=a,s.value&&(c=a.filter(h=>h.tipo=="Ceràmica")),r.value&&(c=a.filter(h=>h.tipo=="Barro")),o.value&&(c=a.filter(h=>h.tipo=="Tela")),s.value&&r.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro")),s.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Acuarela")),r.value&&o.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Acuarela")),s.value&&r.value&&o.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Acuarela")))}),ln(o,(u,d)=>{u?(c=a.filter(h=>h.tipo=="Acuarela"),s.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Acuarela")),r.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Acuarela")),i.value&&(c=a.filter(h=>h.tipo=="Tela"||h.tipo=="Acuarela")),s.value&&r.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Acuarela")),s.value&&i.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela"||h.tipo=="Acuarela")),r.value&&i.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela")),s.value&&r.value&&i.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Tela"||h.tipo=="Acuarela"))):(c=a,s.value&&(c=a.filter(h=>h.tipo=="Ceràmica")),r.value&&(c=a.filter(h=>h.tipo=="Barro")),i.value&&(c=a.filter(h=>h.tipo=="Tela")),s.value&&r.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro")),s.value&&i.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Tela")),r.value&&i.value&&(c=a.filter(h=>h.tipo=="Barro"||h.tipo=="Tela")),s.value&&r.value&&i.value&&(c=a.filter(h=>h.tipo=="Ceràmica"||h.tipo=="Barro"||h.tipo=="Tela")))}),ln(n,(u,d)=>{c=a.filter(h=>parseInt(h.precio)>=u),console.log(u),u==2e4&&(c=a)}),(u,d)=>(ce(),de("main",UN,[f("div",FN,[f("div",VN,[f("div",BN,[jN,qN,f("form",null,[f("div",null,[Z(f("input",{type:"checkbox",name:"tipo1",id:"tipo1","onUpdate:modelValue":d[0]||(d[0]=h=>s.value=h)},null,512),[[bo,s.value]]),HN]),f("div",null,[Z(f("input",{type:"checkbox",name:"tipo2",id:"tipo2","onUpdate:modelValue":d[1]||(d[1]=h=>r.value=h)},null,512),[[bo,r.value]]),zN]),f("div",null,[Z(f("input",{type:"checkbox",name:"tipo3",id:"tipo3","onUpdate:modelValue":d[2]||(d[2]=h=>i.value=h)},null,512),[[bo,i.value]]),KN]),f("div",null,[Z(f("input",{type:"checkbox",name:"tipo4",id:"tipo4","onUpdate:modelValue":d[3]||(d[3]=h=>o.value=h)},null,512),[[bo,o.value]]),WN])])]),f("div",GN,[QN,XN,f("div",YN,[JN,Z(f("input",{type:"range",name:"rango",id:"rango",min:"20000",max:"800000","onUpdate:modelValue":d[4]||(d[4]=h=>n.value=h),step:"100"},null,512),[[Re,n.value]]),f("div",ZN,[eP,Z(f("input",{type:"number",name:"numero",id:"numero","onUpdate:modelValue":d[5]||(d[5]=h=>n.value=h),step:"100"},null,512),[[Re,n.value]])])])])])]),f("div",tP,[f("div",nP,[(ce(!0),de(lt,null,js(Me(c),(h,p)=>(ce(),de("div",{class:"targeta",key:p,onClick:_=>l(p)},[f("img",{src:h.img[0],alt:"Primer Articulo"},null,8,rP),iP,f("h2",null,Xe(h.nombre),1),f("div",oP,[f("p",null,"$ "+Xe(h.precio),1),aP]),f("p",cP,Xe(h.desc),1)],8,sP))),128))])])]))}});const uP=ze(lP,[["__scopeId","data-v-7d3735ad"]]),hP={class:"container"},dP=Ce({__name:"MainPage",setup(t){return(e,n)=>(ce(),de("div",hP,[be(ay),be(uP)]))}});const fP=ze(dP,[["__scopeId","data-v-883e9751"]]),pP=Ce({__name:"HomeView",setup(t){return(e,n)=>(ce(),xr(fP))}}),gP="/cuy-art-shop/assets/salir-9650414e.svg",ly=t=>(Ot("data-v-388b0909"),t=t(),xt(),t),mP={class:"head"},vP=ly(()=>f("img",{src:Ic,alt:"Persona"},null,-1)),_P=[vP],yP=ly(()=>f("img",{src:gP,alt:"Menu"},null,-1)),wP=[yP],EP=Ce({__name:"NavBarUser",setup(t){const e=Kt(),n=async()=>{await lk(dt()),alert("Sesion Cerrada"),e.push("/")},s=()=>{e.push("/")},r=()=>{dt().currentUser!=null?e.push({name:"Informacion"}):e.push("/login")};return(i,o)=>(ce(),de("header",mP,[f("button",{onClick:r},_P),f("h1",{onClick:s},"CUYART-SHOP"),f("button",{onClick:n},wP)]))}});const zr=ze(EP,[["__scopeId","data-v-388b0909"]]),uy="/cuy-art-shop/assets/Logo-3a4a9f77.jpeg",hy="/cuy-art-shop/assets/youtube-375cd83e.png",Sc="/cuy-art-shop/assets/facebook-193ba9b3.png",IP="/cuy-art-shop/assets/twitch-cf8e71de.png",Hh="/cuy-art-shop/assets/gmail-6497f877.png",TP={class:"main"},bP=Iu('<div class="mainleft" data-v-c51c6a31><div class="mainleftleft" data-v-c51c6a31><img class="logo" src="'+uy+'" alt="El logo" data-v-c51c6a31><h1 data-v-c51c6a31>CUYART-SHOP</h1><h3 data-v-c51c6a31>Redes Sociales</h3><img src="'+hy+'" alt="Youtube" data-v-c51c6a31><img src="'+Sc+'" alt="Facebook" data-v-c51c6a31><img src="'+IP+'" alt="Twitch" data-v-c51c6a31><h3 data-v-c51c6a31>Contàctanos</h3><img src="'+Hh+'" alt="Gmail" data-v-c51c6a31></div></div><div class="mainright" data-v-c51c6a31><h1 data-v-c51c6a31>¿Quienes Somos?</h1><p data-v-c51c6a31>CUYART-SHOP es una tienda virtual de artesanìas que atraves del comercio electrònico busca conectar y ayudar a expandir los negocios de los artesanos a otras regiones del paìs</p><h1 data-v-c51c6a31>Misiòn</h1><p data-v-c51c6a31>La misiòn de la empresa Cuy Art Shop es brindar a los artesanos una conexiòn seguray de calidad con sus compradores promoviendo el comercio electrònico y extendiendo los negocios de nuestros artesanos</p><h1 data-v-c51c6a31>Visiòn</h1><p data-v-c51c6a31>Cuy Art Shop serà la empresa lìder en Colombia en venta y compra de artesanìas, siendo una de las màs importanes para expandir los negocios de los artesanos</p></div>',2),CP=[bP],SP=Ce({__name:"AboutComponent",setup(t){return K(2e4),(e,n)=>(ce(),de("main",TP,CP))}});const AP=ze(SP,[["__scopeId","data-v-c51c6a31"]]),RP={class:"container"},kP=Ce({__name:"AboutPage",setup(t){return(e,n)=>(ce(),de("div",RP,[be(zr),be(AP)]))}});const NP=ze(kP,[["__scopeId","data-v-cebccc49"]]),PP=Ce({__name:"AboutView",setup(t){return(e,n)=>(ce(),xr(NP))}}),Ws=t=>(Ot("data-v-de7848bb"),t=t(),xt(),t),DP={class:"contain"},OP=Ws(()=>f("div",{class:"imgprofile"},[f("img",{src:fs,alt:"Logo"})],-1)),xP=Ws(()=>f("div",{class:"reg"},[f("h1",null,"Login"),f("div",{class:"linea"})],-1)),MP={class:"in"},LP=Ws(()=>f("label",{for:""},"Correo",-1)),$P={class:"in"},UP=Ws(()=>f("label",{for:""},"Contraseña",-1)),FP=Ws(()=>f("div",{class:"goface"},[f("img",{src:Hh,alt:"Google"}),f("img",{src:Sc,alt:"Facebook"})],-1)),VP=Ws(()=>f("img",{src:Ic,alt:"Logo"},null,-1)),BP=Ws(()=>f("div",{class:"space"},null,-1)),jP=Ce({__name:"LoginComponent",setup(t){const e=Kt(),n=()=>{e.push("/registro")},s=K(""),r=K(""),i=()=>{const o=dt();rk(o,s.value,r.value).then(a=>{a.user,alert("Bienvenido")}).then(()=>{e.push({name:"Informacion"})}).catch(a=>{alert("Intente de nuevo"),a.code,a.message})};return(o,a)=>(ce(),de("main",DP,[OP,xP,f("div",MP,[LP,Z(f("input",{type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},null,512),[[Re,s.value]])]),f("div",$P,[UP,Z(f("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[Re,r.value]])]),f("button",{onClick:i},"Ingresar"),FP,f("footer",null,[VP,f("button",{class:"bt-reg",onClick:n},"Regìstrate"),BP])]))}});const qP=ze(jP,[["__scopeId","data-v-de7848bb"]]),HP={class:"container"},zP=Ce({__name:"LoginPage",setup(t){return(e,n)=>(ce(),de("div",HP,[be(zr),be(qP)]))}});const KP=ze(zP,[["__scopeId","data-v-2ca58d31"]]),WP=Ce({__name:"LoginView",setup(t){return(e,n)=>(ce(),xr(KP))}}),wn=t=>(Ot("data-v-fbc0e9eb"),t=t(),xt(),t),GP={class:"contain"},QP=wn(()=>f("div",{class:"imgprofile"},[f("img",{src:fs,alt:"Logo"})],-1)),XP=wn(()=>f("div",{class:"reg"},[f("h1",null,"Registrarse"),f("div",{class:"linea"})],-1)),YP={class:"in"},JP=wn(()=>f("label",{for:""},"Nombre Usuario",-1)),ZP={class:"in"},eD=wn(()=>f("label",{for:""},"Correo",-1)),tD={class:"in"},nD=wn(()=>f("label",{for:""},"Contraseña",-1)),sD={class:"in"},rD=wn(()=>f("label",{for:""},"Repite Contraseña",-1)),iD=wn(()=>f("div",{class:"goface"},[f("img",{src:Hh,alt:"Google"}),f("img",{src:Sc,alt:"Facebook"})],-1)),oD=wn(()=>f("div",{class:"linea"},null,-1)),aD=wn(()=>f("img",{src:Ic,alt:"Logo"},null,-1)),cD=wn(()=>f("div",{class:"space"},null,-1)),lD=Ce({__name:"RegistroComponent",setup(t){const e=zt(),n=K(""),s=K(""),r=K(""),i=K(""),o=Kt(),a=()=>{o.push("/login")},c=async()=>{if(n.value.trim()==""&&r.value.trim()==""&&s.value.trim()==""&&i.value.trim()==""){console.log("Llenar todos los datos");return}if(s.value!==i.value){console.log("mal rey");return}console.log("adentro");try{await Yv(nt(Je,"usuarios",r.value.toString()),{nombre:n.value.toString(),correo:r.value.toString(),password:s.value.toString(),uso:!0}).then(()=>{console.log("Document successfully written!")}),console.log("Document written with ID: ",nt(Je,"usuarios",r.value.toString()).id)}catch(l){console.log("Error adding document: ",l)}await sk(dt(),r.value.toString(),s.value.toString()).then(l=>{}),e.clearAll(),await e.setAll(),o.push({name:"Informacion"})};return(l,u)=>(ce(),de("main",GP,[QP,XP,f("div",YP,[JP,Z(f("input",{type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":u[0]||(u[0]=d=>n.value=d),required:""},null,512),[[Re,n.value]])]),f("div",ZP,[eD,Z(f("input",{type:"email",name:"usuario",id:"usuario","onUpdate:modelValue":u[1]||(u[1]=d=>r.value=d),required:""},null,512),[[Re,r.value]])]),f("div",tD,[nD,Z(f("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":u[2]||(u[2]=d=>s.value=d),required:""},null,512),[[Re,s.value]])]),f("div",sD,[rD,Z(f("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":u[3]||(u[3]=d=>i.value=d),required:""},null,512),[[Re,i.value]])]),f("button",{onClick:c},"Registrate"),iD,oD,f("footer",null,[aD,f("button",{class:"bt-reg",onClick:a},"Ingresa"),cD])]))}});const uD=ze(lD,[["__scopeId","data-v-fbc0e9eb"]]),hD={class:"container"},dD=Ce({__name:"RegistroPage",setup(t){return(e,n)=>(ce(),de("div",hD,[be(zr),be(uD)]))}});const fD=ze(dD,[["__scopeId","data-v-dfd7fadc"]]),pD=Ce({__name:"RegistroView",setup(t){return(e,n)=>(ce(),xr(fD))}}),Gs=t=>(Ot("data-v-7e870382"),t=t(),xt(),t),gD={class:"main"},mD={class:"mainleft"},vD={class:"mainleftleft"},_D=Gs(()=>f("h1",null,"Mi Cuenta",-1)),yD=Gs(()=>f("div",{class:"linea1"},null,-1)),wD={class:"list"},ED={class:"lineaa2"},ID={class:"list1"},TD={class:"lineaa3"},bD={class:"opc"},CD={class:"list3"},SD={class:"lineaa4"},AD={class:"list4"},RD={class:"lineaa5"},kD=Gs(()=>f("div",{class:"linea"},null,-1)),ND=Gs(()=>f("img",{class:"logo",src:uy,alt:"El logo"},null,-1)),PD=Gs(()=>f("h1",null,"CUYART-SHOP",-1)),DD=Gs(()=>f("img",{src:hy,alt:"Youtube"},null,-1)),OD=Gs(()=>f("img",{src:Sc,alt:"Facebook"},null,-1)),xD={class:"mainright"},MD=Ce({__name:"MiCuentaComponent",setup(t){const e=Kt();ng(()=>{var h,p,_,v,y,T,I,S,U,z;const u=zt(),d=dt().currentUser;(p=u.getRegistro(((h=d==null?void 0:d.email)==null?void 0:h.toString())||" "))!=null&&p.nombre,(v=u.getRegistro(((_=d==null?void 0:d.email)==null?void 0:_.toString())||""))!=null&&v.correo,(T=u.getRegistro(((y=d==null?void 0:d.email)==null?void 0:y.toString())||""))!=null&&T.password,(S=u.getRegistro(((I=d==null?void 0:d.email)==null?void 0:I.toString())||""))!=null&&S.telefono,(z=u.getRegistro(((U=d==null?void 0:d.email)==null?void 0:U.toString())||""))!=null&&z.direccion});const n=K(!0),s=K(!1),r=K(!1),i=K(!1),o=()=>{s.value===!1?n.value=!n.value:(s.value=!1,n.value=!0,e.push({name:"Informacion"})),n.value===!0?e.push({name:"Informacion"}):e.push({name:"Actualizar"})},a=()=>{n.value===!0||(n.value=!0),s.value||(s.value=!s.value),s.value===!1&&(r.value=!1,i.value=!1),s.value===!0&&(r.value=!1,i.value=!1),e.push({name:"Vendedor"})},c=()=>{r.value===!1||(r.value=!1),i.value=!i.value,e.push({name:"ActualizarProd"})},l=()=>{i.value===!1||(i.value=!1),r.value=!r.value,e.push({name:"Añadir"})};return(u,d)=>{const h=ig("RouterView");return ce(),de("main",gD,[f("div",mD,[f("div",vD,[_D,yD,f("div",wD,[f("div",null,[f("div",{class:bs(["linea2",n.value?"":"rot"])},null,2),Z(f("div",ED,null,512),[[Tn,!n.value]])]),f("label",{onClick:o},"Actualizar Informacion")]),f("div",ID,[f("div",null,[f("div",{class:bs(["linea3",s.value?"rot":""])},null,2),Z(f("div",TD,null,512),[[Tn,s.value]])]),f("label",{onClick:a},"Vendedora")]),f("div",bD,[f("div",CD,[f("div",null,[Z(f("div",{class:bs(["linea4",r.value?"rot":""])},null,2),[[Tn,s.value]]),Z(f("div",SD,null,512),[[Tn,r.value]])]),Z(f("label",{onClick:l},"Añadir Producto",512),[[Tn,s.value]])]),f("div",AD,[f("div",null,[Z(f("div",{class:bs(["linea5",i.value?"rot":""])},null,2),[[Tn,s.value]]),Z(f("div",RD,null,512),[[Tn,i.value]])]),Z(f("label",null,"Actualizar Producto",512),[[Tn,s.value]])])]),kD,ND,PD,DD,OD])]),f("div",xD,[be(h,{onCambio:c})])])}}});const LD=ze(MD,[["__scopeId","data-v-7e870382"]]),$D={class:"container"},UD=Ce({__name:"MiCuentaPage",setup(t){return(e,n)=>(ce(),de("div",$D,[be(zr),be(LD)]))}});const FD=ze(UD,[["__scopeId","data-v-732d1fb6"]]),VD=Ce({__name:"MiCuentaView",setup(t){return(e,n)=>(ce(),xr(FD))}}),Kr=t=>(Ot("data-v-50c61b18"),t=t(),xt(),t),BD={class:"contain"},jD=Kr(()=>f("div",{class:"imgprofile"},[f("img",{src:fs,alt:"Logo"})],-1)),qD=Kr(()=>f("div",{class:"reg"},[f("h1",null,"Informacion"),f("div",{class:"linea"})],-1)),HD={class:"in"},zD=Kr(()=>f("label",{for:""},"Nombre de Usuario",-1)),KD=["placeholder"],WD={class:"in"},GD=Kr(()=>f("label",{for:""},"Correo",-1)),QD=["placeholder"],XD={class:"in"},YD=Kr(()=>f("label",{for:""},"Telèfono",-1)),JD=["placeholder"],ZD={class:"in"},eO=Kr(()=>f("label",{for:""},"Direcciòn",-1)),tO=["placeholder"],nO=Ce({__name:"MiCuentaInformacion",setup(t){var d,h,p,_,v,y,T,I,S,U;const e=zt(),n=dt().currentUser;let s=((h=e.getRegistro(((d=n==null?void 0:n.email)==null?void 0:d.toString())||""))==null?void 0:h.nombre)||"",r=((_=e.getRegistro(((p=n==null?void 0:n.email)==null?void 0:p.toString())||""))==null?void 0:_.correo)||"";(y=e.getRegistro(((v=n==null?void 0:n.email)==null?void 0:v.toString())||""))!=null&&y.password;let i=((I=e.getRegistro(((T=n==null?void 0:n.email)==null?void 0:T.toString())||""))==null?void 0:I.telefono)||"",o=((U=e.getRegistro(((S=n==null?void 0:n.email)==null?void 0:S.toString())||""))==null?void 0:U.direccion)||"";const a=K(""),c=K(""),l=K(""),u=K("");return(z,Y)=>(ce(),de("main",BD,[jD,qD,f("div",HD,[zD,Z(f("input",{type:"text",name:"usuario",id:"usuario1",placeholder:Me(s),disabled:"","onUpdate:modelValue":Y[0]||(Y[0]=M=>a.value=M)},null,8,KD),[[Re,a.value]])]),f("div",WD,[GD,Z(f("input",{type:"email",name:"correo",id:"correo",placeholder:Me(r),disabled:"","onUpdate:modelValue":Y[1]||(Y[1]=M=>c.value=M)},null,8,QD),[[Re,c.value]])]),f("div",XD,[YD,Z(f("input",{placeholder:Me(i),type:"number",name:"telefono",id:"telefono",disabled:"","onUpdate:modelValue":Y[2]||(Y[2]=M=>l.value=M)},null,8,JD),[[Re,l.value]])]),f("div",ZD,[eO,Z(f("input",{placeholder:Me(o),type:"text",name:"direccion",id:"dirrecion",disabled:"","onUpdate:modelValue":Y[3]||(Y[3]=M=>u.value=M)},null,8,tO),[[Re,u.value]])])]))}});const sO=ze(nO,[["__scopeId","data-v-50c61b18"]]),ps=t=>(Ot("data-v-d4f73737"),t=t(),xt(),t),rO={class:"contain"},iO=ps(()=>f("div",{class:"imgprofile"},[f("img",{src:fs,alt:"Logo"})],-1)),oO=ps(()=>f("div",{class:"reg"},[f("h1",null,"Informacion"),f("div",{class:"linea"})],-1)),aO={class:"in"},cO=ps(()=>f("label",{for:""},"Nombre de Usuario",-1)),lO=["placeholder"],uO={class:"in"},hO=ps(()=>f("label",{for:""},"Correo",-1)),dO=["placeholder"],fO={class:"in"},pO=ps(()=>f("label",{for:""},"Contraseña",-1)),gO=["placeholder"],mO={class:"in"},vO=ps(()=>f("label",{for:""},"Telèfono",-1)),_O=["placeholder"],yO={class:"in"},wO=ps(()=>f("label",{for:""},"Direcciòn",-1)),EO=["placeholder"],IO=ps(()=>f("button",{class:"bt-can"},"Cancelar",-1)),TO=Ce({__name:"MiCuentaActualizar",setup(t){var v,y,T,I,S,U,z,Y,M,E;const e=Kt(),n=zt(),s=dt().currentUser,r=K(""),i=K(""),o=K(""),a=K(""),c=K("");let l=((y=n.getRegistro(((v=s==null?void 0:s.email)==null?void 0:v.toString())||""))==null?void 0:y.nombre)||"",u=((I=n.getRegistro(((T=s==null?void 0:s.email)==null?void 0:T.toString())||""))==null?void 0:I.correo)||"",d=((U=n.getRegistro(((S=s==null?void 0:s.email)==null?void 0:S.toString())||""))==null?void 0:U.password)||"",h=((Y=n.getRegistro(((z=s==null?void 0:s.email)==null?void 0:z.toString())||""))==null?void 0:Y.telefono)||"",p=((E=n.getRegistro(((M=s==null?void 0:s.email)==null?void 0:M.toString())||""))==null?void 0:E.direccion)||"";const _=async()=>{var Oe,Se,_e,fe,ot,Mt,At,at,En,vs,C,V,$;let N=!1;if(s==null)return;console.log(s);let X=(Oe=s==null?void 0:s.email)==null?void 0:Oe.toString(),ie=((_e=n.getRegistro(((Se=s.email)==null?void 0:Se.toString())||""))==null?void 0:_e.nombre)||"",Le=((ot=n.getRegistro(((fe=s.email)==null?void 0:fe.toString())||""))==null?void 0:ot.password)||"",it=((At=n.getRegistro(((Mt=s.email)==null?void 0:Mt.toString())||""))==null?void 0:At.telefono)||"",Be=((En=n.getRegistro(((at=s.email)==null?void 0:at.toString())||""))==null?void 0:En.direccion)||"";if(((C=n.getRegistro(((vs=s==null?void 0:s.email)==null?void 0:vs.toString())||""))==null?void 0:C.correo)!=i.value&&i.value.trim()!="")try{await ik(s,i.value.toString()).then(()=>{console.log("correo actualizado"),N=!0}).catch(x=>{console.log("error al actualizar correo")}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}if((($=n.getRegistro(((V=s==null?void 0:s.email)==null?void 0:V.toString())||""))==null?void 0:$.password)!=o.value&&o.value.trim()!=""){try{await ok(s,o.value.toString()).then(()=>{console.log("Contraseña actualizado")}).catch(x=>{console.log("error al actualizar la contraseña")}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}try{await Nt(nt(Je,"usuarios",X||""),{password:o.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}}if(N)try{await OC(nt(Je,"usuarios",X||"")).then(()=>{console.log("documento eliminado")}).catch(x=>{console.log("error al eliminar el documento")}),await Yv(nt(Je,"usuarios",i.value.toString()),{nombre:r.value.toString().trim()!=""?r.value.toString():ie.toString(),correo:i.value.toString(),password:o.value.toString().trim()!=""?o.value.toString():Le.toString(),telefono:a.value.toString().trim()!=""?a.value.toString():it.toString(),direccion:c.value.toString().trim()!=""?c.value.toString():Be.toString(),uso:!0}).then(()=>{console.log("documento creado")}).catch(x=>{console.log("error al crear el documento")})}catch(x){console.log(x)}if(r.value.toString().trim()!="")try{await Nt(nt(Je,"usuarios",X||""),{nombre:r.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")})}catch(x){console.log(x)}if(a.value.toString().trim()!="")try{await Nt(nt(Je,"usuarios",X||""),{telefono:a.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")})}catch(x){console.log(x)}if(c.value.toString().trim()!="")try{await Nt(nt(Je,"usuarios",X||""),{direccion:c.value}).then(()=>{console.log("documento actualizado")}).catch(x=>{console.log("error al actualizar el documento")})}catch(x){console.log(x)}n.clearAll(),await n.setAll(),e.push({name:"Informacion"})};return(N,X)=>(ce(),de("main",rO,[iO,oO,f("div",aO,[cO,Z(f("input",{placeholder:Me(l),type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":X[0]||(X[0]=ie=>r.value=ie)},null,8,lO),[[Re,r.value]])]),f("div",uO,[hO,Z(f("input",{placeholder:Me(u),type:"email",name:"correo",id:"correo1","onUpdate:modelValue":X[1]||(X[1]=ie=>i.value=ie)},null,8,dO),[[Re,i.value]])]),f("div",fO,[pO,Z(f("input",{placeholder:Me(d),type:"password",name:"password",id:"password","onUpdate:modelValue":X[2]||(X[2]=ie=>o.value=ie)},null,8,gO),[[Re,o.value]])]),f("div",mO,[vO,Z(f("input",{placeholder:Me(h),type:"number",name:"telefono",id:"telefono","onUpdate:modelValue":X[3]||(X[3]=ie=>a.value=ie)},null,8,_O),[[Re,a.value]])]),f("div",yO,[wO,Z(f("input",{placeholder:Me(p),type:"text",name:"dirreccion",id:"dirreccion","onUpdate:modelValue":X[4]||(X[4]=ie=>c.value=ie)},null,8,EO),[[Re,c.value]])]),f("div",{class:"actu"},[f("button",{class:"bt-act",onClick:_},"Actualizar"),IO])]))}});const bO=ze(TO,[["__scopeId","data-v-d4f73737"]]),CO="/cuy-art-shop/assets/settings-a5f050a0.svg",zh="/cuy-art-shop/assets/delete-49766517.svg",Ac=t=>(Ot("data-v-763bc19a"),t=t(),xt(),t),SO={class:"main"},AO={class:"left"},RO=Ac(()=>f("div",{class:"top"},[f("h1",null,"Productos"),f("div",{class:"linea"})],-1)),kO={class:"center"},NO=["src"],PO=["id"],DO={class:"desc"},OO=["onClick"],xO=Ac(()=>f("img",{src:CO,alt:"settings"},null,-1)),MO=[xO],LO=["onClick"],$O=Ac(()=>f("img",{src:zh,alt:"Delete"},null,-1)),UO=[$O],FO={class:"right"},VO={class:"rightop"},BO=Ac(()=>f("div",{class:"imgprof"},[f("img",{src:fs,alt:"Persona"})],-1)),jO=Ce({__name:"VendedorMain",emits:["cambio"],setup(t,{emit:e}){var u,d,h,p,_,v;const n=zt(),s=dt().currentUser,r=Kt(),i=K(((d=n.getRegistro(((u=s==null?void 0:s.email)==null?void 0:u.toString())||""))==null?void 0:d.nombre)||""),o=((p=n.getRegistro(((h=s==null?void 0:s.email)==null?void 0:h.toString())||""))==null?void 0:p.correo)||"",a=((v=n.getRegistro(((_=s==null?void 0:s.email)==null?void 0:_.toString())||""))==null?void 0:v.productos)||[];console.log(a);const c=y=>{console.log("este es el numero"+y),r.push({name:"ActualizarProd"}),e("cambio"),$N(y)},l=async y=>{a.splice(y,1);try{await Nt(nt(Je,"usuarios",o||""),{productos:a}).then(()=>{console.log("documento creado")}).catch(T=>{console.log("error al crear el documento")})}catch(T){console.log(T)}};return(y,T)=>(ce(),de("main",SO,[f("div",AO,[RO,f("div",kO,[(ce(!0),de(lt,null,js(Me(a),(I,S)=>(ce(),de("div",{class:"pp",key:I.desc},[f("img",{src:I.img[0],alt:"Un Cuy"},null,8,NO),f("div",{class:"produc",id:I.stock==0?"cero":" "},[f("div",DO,[f("p",null,Xe(I.nombre),1),f("p",null,Xe(I.desc),1)]),f("div",null,[f("button",{onClick:U=>c(S)},MO,8,OO),f("button",{onClick:U=>l(S)},UO,8,LO)])],8,PO)]))),128))])]),f("div",FO,[f("div",VO,[BO,f("h1",null,Xe(i.value),1)])])]))}});const qO=ze(jO,[["__scopeId","data-v-763bc19a"]]),gs=t=>(Ot("data-v-98450ee7"),t=t(),xt(),t),HO={class:"main"},zO={class:"left"},KO=gs(()=>f("div",{class:"top"},[f("h1",null,"Añadir Productos"),f("div",{class:"linea"})],-1)),WO={class:"center"},GO=gs(()=>f("div",{class:"leftcenter"},[f("h2",null,"Nombre del Producto"),f("h2",null,"Precio del producto"),f("h2",null,"Stock del Producto"),f("h2",null,"Categorias"),f("h2",null,"Imàgenes del producto"),f("h2",{class:"dee"},"Descripciòn")],-1)),QO={class:"rightcenter"},XO={class:"cat"},YO=gs(()=>f("label",{for:"tipo1",class:"che"},"Ceràmica",-1)),JO=gs(()=>f("label",{for:"tipo2",class:"che"},"Barro",-1)),ZO=gs(()=>f("label",{for:"tipo3",class:"che"},"Tela",-1)),ex=gs(()=>f("label",{for:"tipo4",class:"che"},"Acuarela",-1)),tx={class:"anaimg"},nx={class:"ii"},sx=["src"],rx=["onClick"],ix=gs(()=>f("label",{for:"file",class:"add"},"Añadir",-1)),ox={class:"bt"},ax={class:"right"},cx={class:"rightop"},lx=gs(()=>f("div",{class:"imgprof"},[f("img",{src:fs,alt:"Persona"})],-1)),ux=Ce({__name:"VendedorAñadir",setup(t){var T,I,S,U,z,Y;const e=Kt(),n=()=>{e.push({name:"Vendedor"})},s=zt(),r=dt().currentUser,i=K(((I=s.getRegistro(((T=r==null?void 0:r.email)==null?void 0:T.toString())||""))==null?void 0:I.nombre)||""),o=K(((U=s.getRegistro(((S=r==null?void 0:r.email)==null?void 0:S.toString())||""))==null?void 0:U.correo)||""),a=((Y=s.getRegistro(((z=r==null?void 0:r.email)==null?void 0:z.toString())||""))==null?void 0:Y.productos)||[],c=K(""),l=K(""),u=K(0);let d=K([]);const h=K(""),p=K(""),_=async M=>{const E=await XS(M.target.files[0],o.value||"");console.log(M.target.files[0]);const N=new FileReader;N.readAsDataURL(M.target.files[0]),d.value.length<3&&(N.onload=X=>{d.value.push(E)}),console.log("URL: ",E)},v=M=>{d.value=d.value.filter(E=>!M)},y=async()=>{const M={nombre:c.value.toString(),precio:l.value.toString(),stock:u.value,img:d.value,desc:h.value.toString(),tipo:p.value.toString()};a.push(M),await Nt(nt(Je,"usuarios",o.value||""),{productos:a}).then(()=>{console.log("documento actualizado")}).catch(E=>{console.error("Error adding document: ",E)}),e.push({name:"Vendedor"})};return(M,E)=>(ce(),de("main",HO,[f("div",zO,[KO,f("div",WO,[GO,f("div",QO,[Z(f("input",{type:"text","onUpdate:modelValue":E[0]||(E[0]=N=>c.value=N)},null,512),[[Re,c.value]]),Z(f("input",{type:"text","onUpdate:modelValue":E[1]||(E[1]=N=>l.value=N)},null,512),[[Re,l.value]]),Z(f("input",{type:"text","onUpdate:modelValue":E[2]||(E[2]=N=>u.value=N)},null,512),[[Re,u.value]]),f("div",XO,[f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo1",class:"check",value:"Ceràmica","onUpdate:modelValue":E[3]||(E[3]=N=>p.value=N)},null,512),[[Qn,p.value]]),YO]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo2",class:"check",value:"Barro","onUpdate:modelValue":E[4]||(E[4]=N=>p.value=N)},null,512),[[Qn,p.value]]),JO]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo3",class:"check",value:"Tela","onUpdate:modelValue":E[5]||(E[5]=N=>p.value=N)},null,512),[[Qn,p.value]]),ZO]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo4",class:"check",value:"Acuarela","onUpdate:modelValue":E[6]||(E[6]=N=>p.value=N)},null,512),[[Qn,p.value]]),ex])]),f("div",tx,[(ce(!0),de(lt,null,js(Me(d),(N,X)=>(ce(),de("div",nx,[f("img",{src:N,alt:"Es un cuy"},null,8,sx),f("label",{class:"bor",onClick:ie=>v(N)},"x",8,rx)]))),256)),ix,f("input",{type:"file",name:"file",id:"file",onChange:E[7]||(E[7]=N=>_(N))},null,32)]),Z(f("textarea",{"onUpdate:modelValue":E[8]||(E[8]=N=>h.value=N)},null,512),[[Re,h.value]])])]),f("div",ox,[f("button",{class:"bt-add",onClick:E[9]||(E[9]=(...N)=>y&&y(...N))},"Añadir"),f("button",{class:"bt-can",onClick:E[10]||(E[10]=N=>n())},"Cancelar")])]),f("div",ax,[f("div",cx,[lx,f("h1",null,Xe(i.value),1)])])]))}});const hx=ze(ux,[["__scopeId","data-v-98450ee7"]]),ms=t=>(Ot("data-v-7baf673c"),t=t(),xt(),t),dx={class:"main"},fx={class:"left"},px=ms(()=>f("div",{class:"top"},[f("h1",null,"Actualizar Productos"),f("div",{class:"linea"})],-1)),gx={class:"center"},mx=ms(()=>f("div",{class:"leftcenter"},[f("h2",null,"Nombre del Producto"),f("h2",null,"Precio del producto"),f("h2",null,"Stock del Producto"),f("h2",null,"Categorias"),f("h2",null,"Imàgenes del producto"),f("h2",{class:"dee"},"Descripciòn")],-1)),vx={class:"rightcenter"},_x={class:"cat"},yx=ms(()=>f("label",{for:"tipo1",class:"che"},"Ceràmica",-1)),wx=ms(()=>f("label",{for:"tipo2",class:"che"},"Barro",-1)),Ex=ms(()=>f("label",{for:"tipo3",class:"che"},"Tela",-1)),Ix=ms(()=>f("label",{for:"tipo4",class:"che"},"Acuarela",-1)),Tx={class:"anaimg"},bx={class:"ii"},Cx=["src"],Sx=["onClick"],Ax=ms(()=>f("label",{for:"file",class:"add"},"Añadir",-1)),Rx={class:"bt"},kx={class:"right"},Nx={class:"rightop"},Px=ms(()=>f("div",{class:"imgprof"},[f("img",{src:fs,alt:"Persona"})],-1)),Dx=Ce({__name:"VendedorActualizar",setup(t){var T,I,S,U,z,Y;const e=zt(),n=dt().currentUser,s=Kt(),r=()=>{s.push({name:"Vendedor"})};sg(()=>{var N,X,ie,Le,it,Be,Oe,Se,_e,fe,ot,Mt;const M=zt(),E=dt().currentUser;console.log(Fn()),u.value="",d.value="",h.value=0,p.value=[],_.value="",v.value="",u.value=((X=M.getRegistro(((N=E==null?void 0:E.email)==null?void 0:N.toString())||""))==null?void 0:X.productos[Fn()].nombre)||"",d.value=((Le=M.getRegistro(((ie=E==null?void 0:E.email)==null?void 0:ie.toString())||""))==null?void 0:Le.productos[Fn()].precio)||"",h.value=((Be=M.getRegistro(((it=E==null?void 0:E.email)==null?void 0:it.toString())||""))==null?void 0:Be.productos[Fn()].stock)||0,p.value=((Se=M.getRegistro(((Oe=E==null?void 0:E.email)==null?void 0:Oe.toString())||""))==null?void 0:Se.productos[Fn()].img)||[],_.value=((fe=M.getRegistro(((_e=E==null?void 0:E.email)==null?void 0:_e.toString())||""))==null?void 0:fe.productos[Fn()].desc)||"",v.value=((Mt=M.getRegistro(((ot=E==null?void 0:E.email)==null?void 0:ot.toString())||""))==null?void 0:Mt.productos[Fn()].tipo)||""});const i=M=>{console.log(M.target.files[0]);const E=new FileReader;E.readAsDataURL(M.target.files[0]),p.value.length<3&&(E.onload=N=>{p.value.push(N.target.result)})},o=M=>{p.value=p.value.filter(E=>!M)},a=K(((I=e.getRegistro(((T=n==null?void 0:n.email)==null?void 0:T.toString())||""))==null?void 0:I.nombre)||""),c=K(((U=e.getRegistro(((S=n==null?void 0:n.email)==null?void 0:S.toString())||""))==null?void 0:U.correo)||""),l=((Y=e.getRegistro(((z=n==null?void 0:n.email)==null?void 0:z.toString())||""))==null?void 0:Y.productos)||[],u=K(""),d=K(""),h=K(0);let p=K([]);const _=K(""),v=K(""),y=async()=>{const M={nombre:u.value.toString(),precio:d.value.toString(),stock:h.value,img:p.value,desc:_.value.toString(),tipo:v.value.toString()};l.splice(Fn(),1,M),await Nt(nt(Je,"usuarios",c.value||""),{productos:l}).then(()=>{console.log("documento actualizado")}).catch(E=>{console.error("Error adding document: ",E)}),s.push({name:"Vendedor"})};return(M,E)=>(ce(),de("main",dx,[f("div",fx,[px,f("div",gx,[mx,f("div",vx,[Z(f("input",{type:"text","onUpdate:modelValue":E[0]||(E[0]=N=>u.value=N)},null,512),[[Re,u.value]]),Z(f("input",{type:"text","onUpdate:modelValue":E[1]||(E[1]=N=>d.value=N)},null,512),[[Re,d.value]]),Z(f("input",{type:"text","onUpdate:modelValue":E[2]||(E[2]=N=>h.value=N)},null,512),[[Re,h.value]]),f("div",_x,[f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo1",class:"check",value:"Ceràmica","onUpdate:modelValue":E[3]||(E[3]=N=>v.value=N)},null,512),[[Qn,v.value]]),yx]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo2",class:"check",value:"Barro","onUpdate:modelValue":E[4]||(E[4]=N=>v.value=N)},null,512),[[Qn,v.value]]),wx]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo3",class:"check",value:"Tela","onUpdate:modelValue":E[5]||(E[5]=N=>v.value=N)},null,512),[[Qn,v.value]]),Ex]),f("div",null,[Z(f("input",{type:"radio",name:"tipo",id:"tipo4",class:"check",value:"Acuarela","onUpdate:modelValue":E[6]||(E[6]=N=>v.value=N)},null,512),[[Qn,v.value]]),Ix])]),f("div",Tx,[(ce(!0),de(lt,null,js(Me(p),(N,X)=>(ce(),de("div",bx,[f("img",{src:N,alt:"Es un cuy"},null,8,Cx),f("label",{class:"bor",onClick:ie=>o(N)},"x",8,Sx)]))),256)),Ax,f("input",{type:"file",name:"file",id:"file",onChange:E[7]||(E[7]=N=>i(N))},null,32)]),Z(f("textarea",{"onUpdate:modelValue":E[8]||(E[8]=N=>_.value=N)},null,512),[[Re,_.value]])])]),f("div",Rx,[f("button",{class:"bt-add",onClick:y},"Actualizar"),f("button",{class:"bt-can",onClick:E[9]||(E[9]=N=>r())},"Cancelar")])]),f("div",kx,[f("div",Nx,[Px,f("h1",null,Xe(a.value),1)])])]))}});const Ox=ze(Dx,[["__scopeId","data-v-7baf673c"]]),vo=t=>(Ot("data-v-b23ed754"),t=t(),xt(),t),xx={class:"main"},Mx={class:"left"},Lx={class:"center"},$x=["src"],Ux={class:"produc"},Fx={class:"desc"},Vx=["onClick"],Bx=vo(()=>f("img",{src:zh,alt:"Delete"},null,-1)),jx=[Bx],qx={class:"right"},Hx={class:"rightop"},zx=vo(()=>f("div",{class:"top"},[f("h1",null,"Carrito de Compra"),f("div",{class:"linea"})],-1)),Kx={class:"valor"},Wx=vo(()=>f("div",null,[f("h2",null,"Descuento de la oferta"),f("h3",null,"$ 0.0")],-1)),Gx=vo(()=>f("div",null,[f("h2",null,"Envìo"),f("h3",null,"$ 10.000")],-1)),Qx=vo(()=>f("h2",null,"Subtotal",-1)),Xx=Ce({__name:"CarroMain",setup(t){var l,u,d,h;const e=dt().currentUser,n=zt();let s=K(0);const r=((u=n.getRegistro(((l=e==null?void 0:e.email)==null?void 0:l.toString())||""))==null?void 0:u.carro)||[],i=Kt(),o=((h=n.getRegistro(((d=e==null?void 0:e.email)==null?void 0:d.toString())||""))==null?void 0:h.correo)||"",a=()=>{i.push({name:"Compra"})},c=async p=>{var T;const _=((T=n.getRegistro(n.getCorreo(r[p].img[0])||""))==null?void 0:T.productos)||[];let v=n.getIndeximg(r[p].img[0].toString()||"");const y={nombre:r[p].nombre.toString(),precio:r[p].precio.toString(),stock:r[p].stock+_[v].stock,img:r[p].img,desc:r[p].desc,tipo:r[p].tipo};_.splice(v,1,y),await Nt(nt(Je,"usuarios",n.getCorreo(r[p].img[0])||""),{productos:_}).then(()=>{console.log("documento actualizado")}).catch(I=>{console.error("Error adding document: ",I)}),r.splice(p,1);try{await Nt(nt(Je,"usuarios",o||""),{carro:r}).then(()=>{console.log("documento creado")}).catch(I=>{console.log("error al crear el documento")})}catch(I){console.log(I)}if(r.length===0)s.value=0;else{for(let I=0;I<r.length;I++)s.value+=parseInt(r[I].precio)*r[I].stock;s.value+=1e4}};if(r.length===0)s.value=0;else{for(let p=0;p<r.length;p++)s.value+=parseInt(r[p].precio)*r[p].stock;s.value+=1e4}return(p,_)=>(ce(),de("main",xx,[f("div",Mx,[f("div",Lx,[(ce(!0),de(lt,null,js(Me(r),(v,y)=>(ce(),de("div",{class:"pp",key:y},[f("img",{src:v.img[0],alt:"Un Cuy"},null,8,$x),f("div",Ux,[f("div",Fx,[f("p",null,Xe(v.nombre),1),f("p",null,Xe(v.desc),1)]),f("div",null,[f("button",{onClick:T=>c(y)},jx,8,Vx)])])]))),128))])]),f("div",qx,[f("div",Hx,[zx,f("div",Kx,[Wx,Gx,f("div",null,[Qx,f("h3",null,"$ "+Xe(Me(s)),1)]),f("div",{class:"bt"},[f("button",{class:"bt-comp",onClick:a},"Comprar")])])])])]))}});const Yx=ze(Xx,[["__scopeId","data-v-b23ed754"]]),Jx={class:"container"},Zx=Ce({__name:"CarroPage",setup(t){return(e,n)=>(ce(),de("div",Jx,[be(zr),be(Yx)]))}});const eM=ze(Zx,[["__scopeId","data-v-d3a22c7e"]]),Wr=t=>(Ot("data-v-f4a16cdb"),t=t(),xt(),t),tM={class:"container"},nM={class:"main"},sM={class:"left"},rM={class:"center"},iM=["src"],oM=Wr(()=>f("div",{class:"linea"},null,-1)),aM={class:"info"},cM=Wr(()=>f("h2",null,"Descripcion",-1)),lM={class:"right"},uM={class:"rightop"},hM={class:"top"},dM=Wr(()=>f("div",{class:"linea"},null,-1)),fM={class:"sto"},pM=Wr(()=>f("h2",null,"Stock",-1)),gM=Wr(()=>f("button",{class:"bt-comp"},"Comprar",-1)),mM={class:"valor"},vM=["onClick"],_M=["src"],yM={class:"price"},wM={class:"ppp"},EM=Wr(()=>f("div",{class:"lineap"},null,-1)),IM=Ce({__name:"PaginaProducto",setup(t){var z,Y,M,E;const e=dt().currentUser,n=zt(),s=lR(),r=Kt();let i=[],o=parseInt(s.params.id[0])||0,a=((Y=n.getRegistro(((z=e==null?void 0:e.email)==null?void 0:z.toString())||""))==null?void 0:Y.correo)||"";const c=K(""),l=K(""),u=K(1),d=K(""),h=K([]),p=K(""),_=K("");let v=K(1);const y=((E=n.getRegistro(((M=e==null?void 0:e.email)==null?void 0:M.toString())||""))==null?void 0:E.carro)||[];for(let N=0;N<n.datos.length;N++)if(n.datos[N].productos!=null)for(let X=0;X<n.datos[N].productos.length;X++)i.push(n.datos[N].productos[X]);const T=async()=>{var it;if(e==null){r.push({name:"Login"});return}const N={nombre:p.value.toString(),precio:l.value.toString(),stock:v.value,img:h.value,desc:c.value.toString(),tipo:_.value.toString()};u.value-v.value;const X={nombre:p.value.toString(),precio:l.value.toString(),stock:u.value-v.value,img:h.value,desc:c.value.toString(),tipo:_.value.toString()};console.log(N),console.log(y),y.push(N),await Nt(nt(Je,"usuarios",a||""),{carro:y}).then(()=>{console.log("documento actualizado")}).catch(Be=>{console.error("Error adding document: ",Be)});const ie=((it=n.getRegistro(n.getCorreo(N.img[0])||""))==null?void 0:it.productos)||[];let Le=n.getIndeximg(N.img[0].toString()||"");ie.splice(Le,1,X),await Nt(nt(Je,"usuarios",n.getCorreo(N.img[0])||""),{productos:ie}).then(()=>{console.log("documento actualizado")}).catch(Be=>{console.error("Error adding document: ",Be)}),r.push({name:"Compra"})};let I=i[o];c.value=I.desc,l.value=I.precio,u.value=I.stock,d.value=I.img[0],h.value=I.img,p.value=I.nombre,console.log(I);const S=()=>{v.value>0&&v.value--},U=()=>{v.value<u.value&&v.value++};return(N,X)=>(ce(),de("div",tM,[be(ay),f("main",nM,[f("div",sM,[f("div",rM,[f("img",{src:d.value,alt:"Un Cuy"},null,8,iM),oM,f("div",aM,[cM,f("p",null,Xe(c.value),1)])])]),f("div",lM,[f("div",uM,[f("div",hM,[f("h1",null,Xe(p.value),1),dM,f("h2",null,"$ "+Xe(l.value),1),f("div",fM,[pM,Z(f("input",{type:"number",name:"stock",id:"stock","onUpdate:modelValue":X[0]||(X[0]=ie=>Ue(v)?v.value=ie:v=ie)},null,512),[[Re,Me(v)]])]),f("div",{class:"masmen"},[f("button",{onClick:U},"+"),f("button",{onClick:S},"-")]),f("div",{class:"agrecom"},[f("button",{class:"bt-add",onClick:T},"Agregar"),gM])]),f("div",mM,[(ce(!0),de(lt,null,js(Me(i),(ie,Le)=>(ce(),de("div",{class:"targeta",key:Le,onClick:it=>Ue(o)?o.value=Le:o=Le},[f("img",{src:ie.img[0],alt:"Primer Articulo"},null,8,_M),f("div",yM,[f("div",wM,[f("h2",null,Xe(ie.nombre),1),f("div",null,[f("p",null,"$ "+Xe(ie.precio),1),EM]),f("p",null,Xe(ie.desc),1)])])],8,vM))),128))])])])])]))}});const TM=ze(IM,[["__scopeId","data-v-f4a16cdb"]]),Gr=t=>(Ot("data-v-33c56400"),t=t(),xt(),t),bM={class:"container"},CM={class:"main"},SM=Gr(()=>f("div",{class:"leftleft"},[f("h2",null,"Direccìon"),f("h4",null,"Otra:"),f("h2",{class:"hh"},"Metodo de Pago")],-1)),AM=Iu('<input type="text" name="dir" id="dir" class="dir" data-v-33c56400><textarea name="otra" id="otra" data-v-33c56400></textarea><input type="text" name="pago" id="pago" data-v-33c56400><div class="more" data-v-33c56400><h4 data-v-33c56400>Numero Targeta</h4><input type="text" name="tar" id="tar" data-v-33c56400><h4 data-v-33c56400>Nombre Titular</h4><input type="text" name="tit" id="tit" data-v-33c56400><h4 data-v-33c56400>Expira</h4><input type="date" name="ex" id="ex" class="da" data-v-33c56400><h4 data-v-33c56400>CVV</h4><input type="text" name="cv" id="cv" data-v-33c56400></div>',4),RM=Gr(()=>f("button",{class:"bt-can"},"Cancelar",-1)),kM={class:"right"},NM={class:"rightop"},PM=["src"],DM={class:"produc"},OM={class:"desc"},xM=["onClick"],MM=Gr(()=>f("img",{src:zh,alt:"Delete"},null,-1)),LM=[MM],$M={class:"rightbottom"},UM={class:"valor"},FM=Gr(()=>f("div",null,[f("h2",null,"Descuento de la oferta"),f("h3",null,"$ 0.0")],-1)),VM=Gr(()=>f("div",null,[f("h2",null,"Envìo"),f("h3",null,"$ 10.000")],-1)),BM=Gr(()=>f("h2",null,"Subtotal",-1)),jM=Ce({__name:"CarroCompra",setup(t){var l,u,d,h;const e=Kt(),n=dt().currentUser,s=zt(),r=K(0),i=((u=s.getRegistro(((l=n==null?void 0:n.email)==null?void 0:l.toString())||""))==null?void 0:u.correo)||"";let o=((h=s.getRegistro(((d=n==null?void 0:n.email)==null?void 0:d.toString())||""))==null?void 0:h.carro)||[];if(o.length===0)r.value=0;else{for(let p=0;p<o.length;p++)r.value+=parseInt(o[p].precio)*o[p].stock;r.value+=1e4}const a=async p=>{var T;const _=((T=s.getRegistro(s.getCorreo(o[p].img[0])||""))==null?void 0:T.productos)||[];let v=s.getIndeximg(o[p].img[0].toString()||"");const y={nombre:o[p].nombre.toString(),precio:o[p].precio.toString(),stock:o[p].stock+_[v].stock,img:o[p].img,desc:o[p].desc,tipo:o[p].tipo};_.splice(v,1,y),await Nt(nt(Je,"usuarios",s.getCorreo(o[p].img[0])||""),{productos:_}).then(()=>{console.log("documento actualizado")}).catch(I=>{console.error("Error adding document: ",I)}),o.splice(p,1);try{await Nt(nt(Je,"usuarios",i||""),{carro:o}).then(()=>{console.log("documento creado")}).catch(I=>{console.log("error al crear el documento")})}catch(I){console.log(I)}if(o.length===0)r.value=0;else{for(let I=0;I<o.length;I++)r.value+=parseInt(o[I].precio)*o[I].stock;r.value+=1e4}},c=async()=>{o=[];try{await Nt(nt(Je,"usuarios",i||""),{carro:o}).then(()=>{console.log("documento creado")}).catch(p=>{console.log("error al crear el documento")})}catch(p){console.log(p)}alert("Compra realizada con exito"),e.push({name:"Home"})};return(p,_)=>(ce(),de("div",bM,[be(zr),f("main",CM,[f("div",{class:"left"},[SM,f("div",{class:"leftright"},[AM,f("div",{class:"bt"},[f("button",{class:"bt-comp",onClick:c},"Comprar"),RM])])]),f("div",kM,[f("div",NM,[(ce(!0),de(lt,null,js(Me(o),(v,y)=>(ce(),de("div",{class:"pp",key:y},[f("img",{src:v.img[0],alt:"Un Cuy"},null,8,PM),f("div",DM,[f("div",OM,[f("p",null,Xe(v.nombre),1),f("p",null,Xe(v.desc),1)]),f("div",null,[f("button",{onClick:T=>a(y)},LM,8,xM)])])]))),128))]),f("div",$M,[f("div",UM,[FM,VM,f("div",null,[BM,f("h3",null,"$ "+Xe(r.value),1)])])])])])]))}});const qM=ze(jM,[["__scopeId","data-v-33c56400"]]),dy=aR({history:TA("/cuy-art-shop/"),routes:[{path:"/",name:"Home",component:pP},{path:"/about",name:"About",component:PP},{path:"/login",name:"Login",component:WP},{path:"/registro",name:"Registro",component:pD},{path:"/micuenta",name:"MiCuenta",component:VD,children:[{path:"informacion",name:"Informacion",component:sO},{path:"actualizar",name:"Actualizar",component:bO},{path:"vendedor",name:"Vendedor",component:qO},{path:"añadir-producto",name:"Añadir",component:hx},{path:"actualizar-producto",name:"ActualizarProd",component:Ox}]},{path:"/carrito",name:"Carrito",component:eM},{path:"/producto/:id",name:"Producto",component:TM},{path:"/compra",name:"Compra",component:qM}]}),Kh=$0(iA);Kh.use(V0().use(nA));Kh.use(dy);Kh.mount("#app");
