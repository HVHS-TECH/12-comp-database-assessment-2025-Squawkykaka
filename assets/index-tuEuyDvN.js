(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var tf={exports:{}},Ja={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function OS(){if(Om)return Ja;Om=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var _ in o)_!=="key"&&(c[_]=o[_])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:h,ref:o!==void 0?o:null,props:c}}return Ja.Fragment=t,Ja.jsx=i,Ja.jsxs=i,Ja}var Dm;function DS(){return Dm||(Dm=1,tf.exports=OS()),tf.exports}var Ne=DS(),nf={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function MS(){if(Mm)return W;Mm=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function b(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,K={};function $(E,x,B){this.props=E,this.context=x,this.refs=K,this.updater=B||k}$.prototype.isReactComponent={},$.prototype.setState=function(E,x){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,x,"setState")},$.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Ue(){}Ue.prototype=$.prototype;function Oe(E,x,B){this.props=E,this.context=x,this.refs=K,this.updater=B||k}var _e=Oe.prototype=new Ue;_e.constructor=Oe,L(_e,$.prototype),_e.isPureReactComponent=!0;var Ge=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},Ze=Object.prototype.hasOwnProperty;function et(E,x,B,z,G,oe){return B=oe.ref,{$$typeof:a,type:E,key:x,ref:B!==void 0?B:null,props:oe}}function lt(E,x){return et(E.type,x,void 0,void 0,void 0,E.props)}function ft(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function In(E){var x={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(B){return x[B]})}var rn=/\/+/g;function tt(E,x){return typeof E=="object"&&E!==null&&E.key!=null?In(""+E.key):x.toString(36)}function gi(){}function vi(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(gi,gi):(E.status="pending",E.then(function(x){E.status==="pending"&&(E.status="fulfilled",E.value=x)},function(x){E.status==="pending"&&(E.status="rejected",E.reason=x)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function nt(E,x,B,z,G){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var Z=!1;if(E===null)Z=!0;else switch(oe){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(E.$$typeof){case a:case t:Z=!0;break;case y:return Z=E._init,nt(Z(E._payload),x,B,z,G)}}if(Z)return G=G(E),Z=z===""?"."+tt(E,0):z,Ge(G)?(B="",Z!=null&&(B=Z.replace(rn,"$&/")+"/"),nt(G,x,B,"",function(xn){return xn})):G!=null&&(ft(G)&&(G=lt(G,B+(G.key==null||E&&E.key===G.key?"":(""+G.key).replace(rn,"$&/")+"/")+Z)),x.push(G)),1;Z=0;var Et=z===""?".":z+":";if(Ge(E))for(var Ae=0;Ae<E.length;Ae++)z=E[Ae],oe=Et+tt(z,Ae),Z+=nt(z,x,B,oe,G);else if(Ae=b(E),typeof Ae=="function")for(E=Ae.call(E),Ae=0;!(z=E.next()).done;)z=z.value,oe=Et+tt(z,Ae++),Z+=nt(z,x,B,oe,G);else if(oe==="object"){if(typeof E.then=="function")return nt(vi(E),x,B,z,G);throw x=String(E),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return Z}function D(E,x,B){if(E==null)return E;var z=[],G=0;return nt(E,z,"","",function(oe){return x.call(B,oe,G++)}),z}function H(E){if(E._status===-1){var x=E._result;x=x(),x.then(function(B){(E._status===0||E._status===-1)&&(E._status=1,E._result=B)},function(B){(E._status===0||E._status===-1)&&(E._status=2,E._result=B)}),E._status===-1&&(E._status=0,E._result=x)}if(E._status===1)return E._result.default;throw E._result}var Y=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function ye(){}return W.Children={map:D,forEach:function(E,x,B){D(E,function(){x.apply(this,arguments)},B)},count:function(E){var x=0;return D(E,function(){x++}),x},toArray:function(E){return D(E,function(x){return x})||[]},only:function(E){if(!ft(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},W.Component=$,W.Fragment=i,W.Profiler=o,W.PureComponent=Oe,W.StrictMode=r,W.Suspense=p,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,W.__COMPILER_RUNTIME={__proto__:null,c:function(E){return re.H.useMemoCache(E)}},W.cache=function(E){return function(){return E.apply(null,arguments)}},W.cloneElement=function(E,x,B){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var z=L({},E.props),G=E.key,oe=void 0;if(x!=null)for(Z in x.ref!==void 0&&(oe=void 0),x.key!==void 0&&(G=""+x.key),x)!Ze.call(x,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&x.ref===void 0||(z[Z]=x[Z]);var Z=arguments.length-2;if(Z===1)z.children=B;else if(1<Z){for(var Et=Array(Z),Ae=0;Ae<Z;Ae++)Et[Ae]=arguments[Ae+2];z.children=Et}return et(E.type,G,void 0,void 0,oe,z)},W.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},W.createElement=function(E,x,B){var z,G={},oe=null;if(x!=null)for(z in x.key!==void 0&&(oe=""+x.key),x)Ze.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(G[z]=x[z]);var Z=arguments.length-2;if(Z===1)G.children=B;else if(1<Z){for(var Et=Array(Z),Ae=0;Ae<Z;Ae++)Et[Ae]=arguments[Ae+2];G.children=Et}if(E&&E.defaultProps)for(z in Z=E.defaultProps,Z)G[z]===void 0&&(G[z]=Z[z]);return et(E,oe,void 0,void 0,null,G)},W.createRef=function(){return{current:null}},W.forwardRef=function(E){return{$$typeof:_,render:E}},W.isValidElement=ft,W.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:H}},W.memo=function(E,x){return{$$typeof:m,type:E,compare:x===void 0?null:x}},W.startTransition=function(E){var x=re.T,B={};re.T=B;try{var z=E(),G=re.S;G!==null&&G(B,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(ye,Y)}catch(oe){Y(oe)}finally{re.T=x}},W.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},W.use=function(E){return re.H.use(E)},W.useActionState=function(E,x,B){return re.H.useActionState(E,x,B)},W.useCallback=function(E,x){return re.H.useCallback(E,x)},W.useContext=function(E){return re.H.useContext(E)},W.useDebugValue=function(){},W.useDeferredValue=function(E,x){return re.H.useDeferredValue(E,x)},W.useEffect=function(E,x,B){var z=re.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return z.useEffect(E,x)},W.useId=function(){return re.H.useId()},W.useImperativeHandle=function(E,x,B){return re.H.useImperativeHandle(E,x,B)},W.useInsertionEffect=function(E,x){return re.H.useInsertionEffect(E,x)},W.useLayoutEffect=function(E,x){return re.H.useLayoutEffect(E,x)},W.useMemo=function(E,x){return re.H.useMemo(E,x)},W.useOptimistic=function(E,x){return re.H.useOptimistic(E,x)},W.useReducer=function(E,x,B){return re.H.useReducer(E,x,B)},W.useRef=function(E){return re.H.useRef(E)},W.useState=function(E){return re.H.useState(E)},W.useSyncExternalStore=function(E,x,B){return re.H.useSyncExternalStore(E,x,B)},W.useTransition=function(){return re.H.useTransition()},W.version="19.1.0",W}var Im;function Vf(){return Im||(Im=1,nf.exports=MS()),nf.exports}var IS=Vf(),sf={exports:{}},$a={},af={exports:{}},rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function xS(){return xm||(xm=1,function(a){function t(D,H){var Y=D.length;D.push(H);e:for(;0<Y;){var ye=Y-1>>>1,E=D[ye];if(0<o(E,H))D[ye]=H,D[Y]=E,Y=ye;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],Y=D.pop();if(Y!==H){D[0]=Y;e:for(var ye=0,E=D.length,x=E>>>1;ye<x;){var B=2*(ye+1)-1,z=D[B],G=B+1,oe=D[G];if(0>o(z,Y))G<E&&0>o(oe,z)?(D[ye]=oe,D[G]=Y,ye=G):(D[ye]=z,D[B]=Y,ye=B);else if(G<E&&0>o(oe,Y))D[ye]=oe,D[G]=Y,ye=G;else break e}}return H}function o(D,H){var Y=D.sortIndex-H.sortIndex;return Y!==0?Y:D.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var h=Date,_=h.now();a.unstable_now=function(){return h.now()-_}}var p=[],m=[],y=1,T=null,b=3,k=!1,L=!1,K=!1,$=!1,Ue=typeof setTimeout=="function"?setTimeout:null,Oe=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;function Ge(D){for(var H=i(m);H!==null;){if(H.callback===null)r(m);else if(H.startTime<=D)r(m),H.sortIndex=H.expirationTime,t(p,H);else break;H=i(m)}}function re(D){if(K=!1,Ge(D),!L)if(i(p)!==null)L=!0,Ze||(Ze=!0,tt());else{var H=i(m);H!==null&&nt(re,H.startTime-D)}}var Ze=!1,et=-1,lt=5,ft=-1;function In(){return $?!0:!(a.unstable_now()-ft<lt)}function rn(){if($=!1,Ze){var D=a.unstable_now();ft=D;var H=!0;try{e:{L=!1,K&&(K=!1,Oe(et),et=-1),k=!0;var Y=b;try{t:{for(Ge(D),T=i(p);T!==null&&!(T.expirationTime>D&&In());){var ye=T.callback;if(typeof ye=="function"){T.callback=null,b=T.priorityLevel;var E=ye(T.expirationTime<=D);if(D=a.unstable_now(),typeof E=="function"){T.callback=E,Ge(D),H=!0;break t}T===i(p)&&r(p),Ge(D)}else r(p);T=i(p)}if(T!==null)H=!0;else{var x=i(m);x!==null&&nt(re,x.startTime-D),H=!1}}break e}finally{T=null,b=Y,k=!1}H=void 0}}finally{H?tt():Ze=!1}}}var tt;if(typeof _e=="function")tt=function(){_e(rn)};else if(typeof MessageChannel<"u"){var gi=new MessageChannel,vi=gi.port2;gi.port1.onmessage=rn,tt=function(){vi.postMessage(null)}}else tt=function(){Ue(rn,0)};function nt(D,H){et=Ue(function(){D(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return b},a.unstable_next=function(D){switch(b){case 1:case 2:case 3:var H=3;break;default:H=b}var Y=b;b=H;try{return D()}finally{b=Y}},a.unstable_requestPaint=function(){$=!0},a.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=b;b=D;try{return H()}finally{b=Y}},a.unstable_scheduleCallback=function(D,H,Y){var ye=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,D){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=Y+E,D={id:y++,callback:H,priorityLevel:D,startTime:Y,expirationTime:E,sortIndex:-1},Y>ye?(D.sortIndex=Y,t(m,D),i(p)===null&&D===i(m)&&(K?(Oe(et),et=-1):K=!0,nt(re,Y-ye))):(D.sortIndex=E,t(p,D),L||k||(L=!0,Ze||(Ze=!0,tt()))),D},a.unstable_shouldYield=In,a.unstable_wrapCallback=function(D){var H=b;return function(){var Y=b;b=H;try{return D.apply(this,arguments)}finally{b=Y}}}}(rf)),rf}var km;function kS(){return km||(km=1,af.exports=xS()),af.exports}var lf={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function US(){if(Um)return at;Um=1;var a=Vf();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:p,containerInfo:m,implementation:y}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,at.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,y)},at.flushSync=function(p){var m=h.T,y=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=y,r.d.f()}},at.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},at.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},at.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,T=_(y,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:k}):y==="script"&&r.d.X(p,{crossOrigin:T,integrity:b,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},at.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=_(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},at.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,T=_(y,m.crossOrigin);r.d.L(p,y,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},at.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=_(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},at.requestFormReset=function(p){r.d.r(p)},at.unstable_batchedUpdates=function(p,m){return p(m)},at.useFormState=function(p,m,y){return h.H.useFormState(p,m,y)},at.useFormStatus=function(){return h.H.useHostTransitionStatus()},at.version="19.1.0",at}var Lm;function LS(){if(Lm)return lf.exports;Lm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),lf.exports=US(),lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function zS(){if(zm)return $a;zm=1;var a=kS(),t=Vf(),i=LS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var s=e,l=n;;){var u=s.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===s)return _(u),e;if(f===l)return _(u),n;f=f.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=f;else{for(var d=!1,g=u.child;g;){if(g===s){d=!0,s=u,l=f;break}if(g===l){d=!0,l=u,s=f;break}g=g.sibling}if(!d){for(g=f.child;g;){if(g===s){d=!0,s=f,l=u;break}if(g===l){d=!0,l=f,s=u;break}g=g.sibling}if(!d)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),Oe=Symbol.for("react.consumer"),_e=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),ft=Symbol.for("react.activity"),In=Symbol.for("react.memo_cache_sentinel"),rn=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=rn&&e[rn]||e["@@iterator"],typeof e=="function"?e:null)}var gi=Symbol.for("react.client.reference");function vi(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gi?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case $:return"Profiler";case K:return"StrictMode";case re:return"Suspense";case Ze:return"SuspenseList";case ft:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case _e:return(e.displayName||"Context")+".Provider";case Oe:return(e._context.displayName||"Context")+".Consumer";case Ge:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return n=e.displayName||null,n!==null?n:vi(e.type)||"Memo";case lt:n=e._payload,e=e._init;try{return vi(e(n))}catch{}}return null}var nt=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ye=[],E=-1;function x(e){return{current:e}}function B(e){0>E||(e.current=ye[E],ye[E]=null,E--)}function z(e,n){E++,ye[E]=e.current,e.current=n}var G=x(null),oe=x(null),Z=x(null),Et=x(null);function Ae(e,n){switch(z(Z,n),z(oe,e),z(G,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?im(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=im(n),e=sm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(G),z(G,e)}function xn(){B(G),B(oe),B(Z)}function Po(e){e.memoizedState!==null&&z(Et,e);var n=G.current,s=sm(n,e.type);n!==s&&(z(oe,e),z(G,s))}function xr(e){oe.current===e&&(B(G),B(oe)),Et.current===e&&(B(Et),Fa._currentValue=Y)}var qo=Object.prototype.hasOwnProperty,Go=a.unstable_scheduleCallback,Vo=a.unstable_cancelCallback,l0=a.unstable_shouldYield,o0=a.unstable_requestPaint,Zt=a.unstable_now,u0=a.unstable_getCurrentPriorityLevel,zh=a.unstable_ImmediatePriority,Hh=a.unstable_UserBlockingPriority,kr=a.unstable_NormalPriority,c0=a.unstable_LowPriority,Bh=a.unstable_IdlePriority,f0=a.log,h0=a.unstable_setDisableYieldValue,ta=null,St=null;function kn(e){if(typeof f0=="function"&&h0(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(ta,e)}catch{}}var bt=Math.clz32?Math.clz32:p0,d0=Math.log,_0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(d0(e)/_0|0)|0}var Ur=256,Lr=4194304;function yi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zr(e,n,s){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~f,l!==0?u=yi(l):(d&=g,d!==0?u=yi(d):s||(s=g&~e,s!==0&&(u=yi(s))))):(g=l&~f,g!==0?u=yi(g):d!==0?u=yi(d):s||(s=l&~e,s!==0&&(u=yi(s)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:u}function na(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function m0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ph(){var e=Ur;return Ur<<=1,(Ur&4194048)===0&&(Ur=256),e}function qh(){var e=Lr;return Lr<<=1,(Lr&62914560)===0&&(Lr=4194304),e}function jo(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function ia(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g0(e,n,s,l,u,f){var d=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(s=d&~s;0<s;){var O=31-bt(s),I=1<<O;g[O]=0,v[O]=-1;var R=w[O];if(R!==null)for(w[O]=null,O=0;O<R.length;O++){var N=R[O];N!==null&&(N.lane&=-536870913)}s&=~I}l!==0&&Gh(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(d&~n))}function Gh(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-bt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function Vh(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var l=31-bt(s),u=1<<l;u&n|e[l]&n&&(e[l]|=n),s&=~u}}function Yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jh(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Tm(e.type))}function v0(e,n){var s=H.p;try{return H.p=e,n()}finally{H.p=s}}var Un=Math.random().toString(36).slice(2),it="__reactFiber$"+Un,ht="__reactProps$"+Un,Zi="__reactContainer$"+Un,Fo="__reactEvents$"+Un,y0="__reactListeners$"+Un,E0="__reactHandles$"+Un,Yh="__reactResources$"+Un,sa="__reactMarker$"+Un;function Xo(e){delete e[it],delete e[ht],delete e[Fo],delete e[y0],delete e[E0]}function Wi(e){var n=e[it];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Zi]||s[it]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=om(e);e!==null;){if(s=e[it])return s;e=om(e)}return n}e=s,s=e.parentNode}return null}function Ji(e){if(e=e[it]||e[Zi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function aa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function $i(e){var n=e[Yh];return n||(n=e[Yh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ve(e){e[sa]=!0}var Qh=new Set,Fh={};function Ei(e,n){es(e,n),es(e+"Capture",n)}function es(e,n){for(Fh[e]=n,e=0;e<n.length;e++)Qh.add(n[e])}var S0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xh={},Kh={};function b0(e){return qo.call(Kh,e)?!0:qo.call(Xh,e)?!1:S0.test(e)?Kh[e]=!0:(Xh[e]=!0,!1)}function Hr(e,n,s){if(b0(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Br(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function ln(e,n,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+l)}}var Ko,Zh;function ts(e){if(Ko===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Ko=n&&n[1]||"",Zh=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ko+e+Zh}var Zo=!1;function Wo(e,n){if(!e||Zo)return"";Zo=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(N){var R=N}Reflect.construct(e,[],I)}else{try{I.call()}catch(N){R=N}e.call(I.prototype)}}else{try{throw Error()}catch(N){R=N}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),d=f[0],g=f[1];if(d&&g){var v=d.split(`
`),w=g.split(`
`);for(u=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===v.length||u===w.length)for(l=v.length-1,u=w.length-1;1<=l&&0<=u&&v[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(v[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||v[l]!==w[u]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=u);break}}}finally{Zo=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ts(s):""}function T0(e){switch(e.tag){case 26:case 27:case 5:return ts(e.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 15:return Wo(e.type,!1);case 11:return Wo(e.type.render,!1);case 1:return Wo(e.type,!0);case 31:return ts("Activity");default:return""}}function Wh(e){try{var n="";do n+=T0(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jh(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function C0(e){var n=Jh(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){l=""+d,f.call(this,d)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(d){l=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pr(e){e._valueTracker||(e._valueTracker=C0(e))}function $h(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return e&&(l=Jh(e)?e.checked?"true":"false":e.value),e=l,e!==s?(n.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var A0=/[\n"\\]/g;function Mt(e){return e.replace(A0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Jo(e,n,s,l,u,f,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Dt(n)):e.value!==""+Dt(n)&&(e.value=""+Dt(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?$o(e,d,Dt(n)):s!=null?$o(e,d,Dt(s)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Dt(g):e.removeAttribute("name")}function ed(e,n,s,l,u,f,d,g){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;s=s!=null?""+Dt(s):"",n=n!=null?""+Dt(n):s,g||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function $o(e,n,s){n==="number"&&qr(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ns(e,n,s,l){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Dt(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function td(e,n,s){if(n!=null&&(n=""+Dt(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Dt(s):""}function nd(e,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(nt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Dt(n),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function is(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var w0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function id(e,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,s):typeof s!="number"||s===0||w0.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function sd(e,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&s[u]!==l&&id(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&id(e,f,n[f])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gr(e){return N0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tu=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,as=null;function ad(e){var n=Ji(e);if(n&&(e=n.stateNode)){var s=e[ht]||null;e:switch(e=n.stateNode,n.type){case"input":if(Jo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Mt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==e&&l.form===e.form){var u=l[ht]||null;if(!u)throw Error(r(90));Jo(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===e.form&&$h(l)}break e;case"textarea":td(e,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&ns(e,!!s.multiple,n,!1)}}}var iu=!1;function rd(e,n,s){if(iu)return e(n,s);iu=!0;try{var l=e(n);return l}finally{if(iu=!1,(ss!==null||as!==null)&&(Rl(),ss&&(n=ss,e=as,as=ss=null,ad(n),e)))for(n=0;n<e.length;n++)ad(e[n])}}function ra(e,n){var s=e.stateNode;if(s===null)return null;var l=s[ht]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(on)try{var la={};Object.defineProperty(la,"passive",{get:function(){su=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{su=!1}var Ln=null,au=null,Vr=null;function ld(){if(Vr)return Vr;var e,n=au,s=n.length,l,u="value"in Ln?Ln.value:Ln.textContent,f=u.length;for(e=0;e<s&&n[e]===u[e];e++);var d=s-e;for(l=1;l<=d&&n[s-l]===u[f-l];l++);return Vr=u.slice(e,1<l?1-l:void 0)}function jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function od(){return!1}function dt(e){function n(s,l,u,f,d){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(s=e[g],this[g]=s?s(f):f[g]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yr:od,this.isPropagationStopped=od,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),n}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qr=dt(Si),oa=y({},Si,{view:0,detail:0}),O0=dt(oa),ru,lu,ua,Fr=y({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ua&&(ua&&e.type==="mousemove"?(ru=e.screenX-ua.screenX,lu=e.screenY-ua.screenY):lu=ru=0,ua=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),ud=dt(Fr),D0=y({},Fr,{dataTransfer:0}),M0=dt(D0),I0=y({},oa,{relatedTarget:0}),ou=dt(I0),x0=y({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=dt(x0),U0=y({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L0=dt(U0),z0=y({},Si,{data:0}),cd=dt(z0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=P0[e])?!!n[e]:!1}function uu(){return q0}var G0=y({},oa,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=dt(G0),j0=y({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=dt(j0),Y0=y({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Q0=dt(Y0),F0=y({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=dt(F0),K0=y({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=dt(K0),W0=y({},Si,{newState:0,oldState:0}),J0=dt(W0),$0=[9,13,27,32],cu=on&&"CompositionEvent"in window,ca=null;on&&"documentMode"in document&&(ca=document.documentMode);var eE=on&&"TextEvent"in window&&!ca,hd=on&&(!cu||ca&&8<ca&&11>=ca),dd=" ",_d=!1;function pd(e,n){switch(e){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rs=!1;function tE(e,n){switch(e){case"compositionend":return md(n);case"keypress":return n.which!==32?null:(_d=!0,dd);case"textInput":return e=n.data,e===dd&&_d?null:e;default:return null}}function nE(e,n){if(rs)return e==="compositionend"||!cu&&pd(e,n)?(e=ld(),Vr=au=Ln=null,rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hd&&n.locale!=="ko"?null:n.data;default:return null}}var iE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!iE[e.type]:n==="textarea"}function vd(e,n,s,l){ss?as?as.push(l):as=[l]:ss=l,n=xl(n,"onChange"),0<n.length&&(s=new Qr("onChange","change",null,s,l),e.push({event:s,listeners:n}))}var fa=null,ha=null;function sE(e){Jp(e,0)}function Xr(e){var n=aa(e);if($h(n))return e}function yd(e,n){if(e==="change")return n}var Ed=!1;if(on){var fu;if(on){var hu="oninput"in document;if(!hu){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),hu=typeof Sd.oninput=="function"}fu=hu}else fu=!1;Ed=fu&&(!document.documentMode||9<document.documentMode)}function bd(){fa&&(fa.detachEvent("onpropertychange",Td),ha=fa=null)}function Td(e){if(e.propertyName==="value"&&Xr(ha)){var n=[];vd(n,ha,e,nu(e)),rd(sE,n)}}function aE(e,n,s){e==="focusin"?(bd(),fa=n,ha=s,fa.attachEvent("onpropertychange",Td)):e==="focusout"&&bd()}function rE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(ha)}function lE(e,n){if(e==="click")return Xr(n)}function oE(e,n){if(e==="input"||e==="change")return Xr(n)}function uE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Tt=typeof Object.is=="function"?Object.is:uE;function da(e,n){if(Tt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!qo.call(n,u)||!Tt(e[u],n[u]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,n){var s=Cd(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=n&&l>=n)return{node:s,offset:n-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Cd(s)}}function wd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qr(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=qr(e.document)}return n}function du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var cE=on&&"documentMode"in document&&11>=document.documentMode,ls=null,_u=null,_a=null,pu=!1;function Nd(e,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;pu||ls==null||ls!==qr(l)||(l=ls,"selectionStart"in l&&du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_a&&da(_a,l)||(_a=l,l=xl(_u,"onSelect"),0<l.length&&(n=new Qr("onSelect","select",null,n,s),e.push({event:n,listeners:l}),n.target=ls)))}function bi(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var os={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionrun:bi("Transition","TransitionRun"),transitionstart:bi("Transition","TransitionStart"),transitioncancel:bi("Transition","TransitionCancel"),transitionend:bi("Transition","TransitionEnd")},mu={},Od={};on&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Ti(e){if(mu[e])return mu[e];if(!os[e])return e;var n=os[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Od)return mu[e]=n[s];return e}var Dd=Ti("animationend"),Md=Ti("animationiteration"),Id=Ti("animationstart"),fE=Ti("transitionrun"),hE=Ti("transitionstart"),dE=Ti("transitioncancel"),xd=Ti("transitionend"),kd=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function Pt(e,n){kd.set(e,n),Ei(n,[e])}var Ud=new WeakMap;function It(e,n){if(typeof e=="object"&&e!==null){var s=Ud.get(e);return s!==void 0?s:(n={value:e,source:n,stack:Wh(n)},Ud.set(e,n),n)}return{value:e,source:n,stack:Wh(n)}}var xt=[],us=0,vu=0;function Kr(){for(var e=us,n=vu=us=0;n<e;){var s=xt[n];xt[n++]=null;var l=xt[n];xt[n++]=null;var u=xt[n];xt[n++]=null;var f=xt[n];if(xt[n++]=null,l!==null&&u!==null){var d=l.pending;d===null?u.next=u:(u.next=d.next,d.next=u),l.pending=u}f!==0&&Ld(s,u,f)}}function Zr(e,n,s,l){xt[us++]=e,xt[us++]=n,xt[us++]=s,xt[us++]=l,vu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function yu(e,n,s,l){return Zr(e,n,s,l),Wr(e)}function cs(e,n){return Zr(e,null,null,n),Wr(e)}function Ld(e,n,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-bt(s),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=s|536870912),f):null}function Wr(e){if(50<Ba)throw Ba=0,Ac=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var fs={};function _E(e,n,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,n,s,l){return new _E(e,n,s,l)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function un(e,n){var s=e.alternate;return s===null?(s=Ct(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function zd(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Jr(e,n,s,l,u,f){var d=0;if(l=e,typeof e=="function")Eu(e)&&(d=1);else if(typeof e=="string")d=mS(e,s,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ft:return e=Ct(31,s,n,u),e.elementType=ft,e.lanes=f,e;case L:return Ci(s.children,u,f,n);case K:d=8,u|=24;break;case $:return e=Ct(12,s,n,u|2),e.elementType=$,e.lanes=f,e;case re:return e=Ct(13,s,n,u),e.elementType=re,e.lanes=f,e;case Ze:return e=Ct(19,s,n,u),e.elementType=Ze,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:case _e:d=10;break e;case Oe:d=9;break e;case Ge:d=11;break e;case et:d=14;break e;case lt:d=16,l=null;break e}d=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=Ct(d,s,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Ci(e,n,s,l){return e=Ct(7,e,l,n),e.lanes=s,e}function Su(e,n,s){return e=Ct(6,e,null,n),e.lanes=s,e}function bu(e,n,s){return n=Ct(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hs=[],ds=0,$r=null,el=0,kt=[],Ut=0,Ai=null,cn=1,fn="";function wi(e,n){hs[ds++]=el,hs[ds++]=$r,$r=e,el=n}function Hd(e,n,s){kt[Ut++]=cn,kt[Ut++]=fn,kt[Ut++]=Ai,Ai=e;var l=cn;e=fn;var u=32-bt(l)-1;l&=~(1<<u),s+=1;var f=32-bt(n)+u;if(30<f){var d=u-u%5;f=(l&(1<<d)-1).toString(32),l>>=d,u-=d,cn=1<<32-bt(n)+u|s<<u|l,fn=f+e}else cn=1<<f|s<<u|l,fn=e}function Tu(e){e.return!==null&&(wi(e,1),Hd(e,1,0))}function Cu(e){for(;e===$r;)$r=hs[--ds],hs[ds]=null,el=hs[--ds],hs[ds]=null;for(;e===Ai;)Ai=kt[--Ut],kt[Ut]=null,fn=kt[--Ut],kt[Ut]=null,cn=kt[--Ut],kt[Ut]=null}var ot=null,De=null,fe=!1,Ri=null,Wt=!1,Au=Error(r(519));function Ni(e){var n=Error(r(418,""));throw ga(It(n,e)),Au}function Bd(e){var n=e.stateNode,s=e.type,l=e.memoizedProps;switch(n[it]=e,n[ht]=l,s){case"dialog":ie("cancel",n),ie("close",n);break;case"iframe":case"object":case"embed":ie("load",n);break;case"video":case"audio":for(s=0;s<qa.length;s++)ie(qa[s],n);break;case"source":ie("error",n);break;case"img":case"image":case"link":ie("error",n),ie("load",n);break;case"details":ie("toggle",n);break;case"input":ie("invalid",n),ed(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Pr(n);break;case"select":ie("invalid",n);break;case"textarea":ie("invalid",n),nd(n,l.value,l.defaultValue,l.children),Pr(n)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||nm(n.textContent,s)?(l.popover!=null&&(ie("beforetoggle",n),ie("toggle",n)),l.onScroll!=null&&ie("scroll",n),l.onScrollEnd!=null&&ie("scrollend",n),l.onClick!=null&&(n.onclick=kl),n=!0):n=!1,n||Ni(e)}function Pd(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:ot=ot.return}}function pa(e){if(e!==ot)return!1;if(!fe)return Pd(e),fe=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||qc(e.type,e.memoizedProps)),s=!s),s&&De&&Ni(e),Pd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){De=Gt(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}De=null}}else n===27?(n=De,Jn(e.type)?(e=Yc,Yc=null,De=e):De=n):De=ot?Gt(e.stateNode.nextSibling):null;return!0}function ma(){De=ot=null,fe=!1}function qd(){var e=Ri;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),Ri=null),e}function ga(e){Ri===null?Ri=[e]:Ri.push(e)}var wu=x(null),Oi=null,hn=null;function zn(e,n,s){z(wu,n._currentValue),n._currentValue=s}function dn(e){e._currentValue=wu.current,B(wu)}function Ru(e,n,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===s)break;e=e.return}}function Nu(e,n,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var d=u.child;f=f.firstContext;e:for(;f!==null;){var g=f;f=u;for(var v=0;v<n.length;v++)if(g.context===n[v]){f.lanes|=s,g=f.alternate,g!==null&&(g.lanes|=s),Ru(f.return,s,e),l||(d=null);break e}f=g.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(r(341));d.lanes|=s,f=d.alternate,f!==null&&(f.lanes|=s),Ru(d,s,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function va(e,n,s,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var g=u.type;Tt(u.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(u===Et.current){if(d=u.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fa):e=[Fa])}u=u.return}e!==null&&Nu(n,e,s,l),n.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Di(e){Oi=e,hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Gd(Oi,e)}function nl(e,n){return Oi===null&&Di(e),Gd(e,n)}function Gd(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},hn===null){if(e===null)throw Error(r(308));hn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else hn=hn.next=n;return s}var pE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},mE=a.unstable_scheduleCallback,gE=a.unstable_NormalPriority,He={$$typeof:_e,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new pE,data:new Map,refCount:0}}function ya(e){e.refCount--,e.refCount===0&&mE(gE,function(){e.controller.abort()})}var Ea=null,Du=0,_s=0,ps=null;function vE(e,n){if(Ea===null){var s=Ea=[];Du=0,_s=Ic(),ps={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Du++,n.then(Vd,Vd),n}function Vd(){if(--Du===0&&Ea!==null){ps!==null&&(ps.status="fulfilled");var e=Ea;Ea=null,_s=0,ps=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yE(e,n){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var jd=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vE(e,n),jd!==null&&jd(e,n)};var Mi=x(null);function Mu(){var e=Mi.current;return e!==null?e:be.pooledCache}function il(e,n){n===null?z(Mi,Mi.current):z(Mi,n.pool)}function Yd(){var e=Mu();return e===null?null:{parent:He._currentValue,pool:e}}var Sa=Error(r(460)),Qd=Error(r(474)),sl=Error(r(542)),Iu={then:function(){}};function Fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function al(){}function Xd(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(al,al),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zd(e),e;default:if(typeof n.status=="string")n.then(al,al);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zd(e),e}throw ba=n,Sa}}var ba=null;function Kd(){if(ba===null)throw Error(r(459));var e=ba;return ba=null,e}function Zd(e){if(e===Sa||e===sl)throw Error(r(483))}var Hn=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,n,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(he&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=Wr(e),Ld(e,null,s),n}return Zr(e,l,n,s),Wr(e)}function Ta(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,Vh(e,s)}}function Uu(e,n){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var d={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?u=f=d:f=f.next=d,s=s.next}while(s!==null);f===null?u=f=n:f=f.next=n}else u=f=n;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Lu=!1;function Ca(){if(Lu){var e=ps;if(e!==null)throw e}}function Aa(e,n,s,l){Lu=!1;var u=e.updateQueue;Hn=!1;var f=u.firstBaseUpdate,d=u.lastBaseUpdate,g=u.shared.pending;if(g!==null){u.shared.pending=null;var v=g,w=v.next;v.next=null,d===null?f=w:d.next=w,d=v;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==d&&(g===null?O.firstBaseUpdate=w:g.next=w,O.lastBaseUpdate=v))}if(f!==null){var I=u.baseState;d=0,O=w=v=null,g=f;do{var R=g.lane&-536870913,N=R!==g.lane;if(N?(le&R)===R:(l&R)===R){R!==0&&R===_s&&(Lu=!0),O!==null&&(O=O.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var F=e,V=g;R=n;var ge=s;switch(V.tag){case 1:if(F=V.payload,typeof F=="function"){I=F.call(ge,I,R);break e}I=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=V.payload,R=typeof F=="function"?F.call(ge,I,R):F,R==null)break e;I=y({},I,R);break e;case 2:Hn=!0}}R=g.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(w=O=N,v=I):O=O.next=N,d|=R;if(g=g.next,g===null){if(g=u.shared.pending,g===null)break;N=g,g=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);O===null&&(v=I),u.baseState=v,u.firstBaseUpdate=w,u.lastBaseUpdate=O,f===null&&(u.shared.lanes=0),Xn|=d,e.lanes=d,e.memoizedState=I}}function Wd(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Jd(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Wd(s[e],n)}var ms=x(null),rl=x(0);function $d(e,n){e=En,z(rl,e),z(ms,n),En=e|n.baseLanes}function zu(){z(rl,En),z(ms,ms.current)}function Hu(){En=rl.current,B(ms),B(rl)}var qn=0,J=null,pe=null,Le=null,ll=!1,gs=!1,Ii=!1,ol=0,wa=0,vs=null,EE=0;function xe(){throw Error(r(321))}function Bu(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Tt(e[s],n[s]))return!1;return!0}function Pu(e,n,s,l,u,f){return qn=f,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?L_:z_,Ii=!1,f=s(l,u),Ii=!1,gs&&(f=t_(n,s,l,u)),e_(e),f}function e_(e){D.H=_l;var n=pe!==null&&pe.next!==null;if(qn=0,Le=pe=J=null,ll=!1,wa=0,vs=null,n)throw Error(r(300));e===null||je||(e=e.dependencies,e!==null&&tl(e)&&(je=!0))}function t_(e,n,s,l){J=e;var u=0;do{if(gs&&(vs=null),wa=0,gs=!1,25<=u)throw Error(r(301));if(u+=1,Le=pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=RE,f=n(s,l)}while(gs);return f}function SE(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Ra(n):n,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(J.flags|=1024),n}function qu(){var e=ol!==0;return ol=0,e}function Gu(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Vu(e){if(ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ll=!1}qn=0,Le=pe=J=null,gs=!1,wa=ol=0,vs=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?J.memoizedState=Le=e:Le=Le.next=e,Le}function ze(){if(pe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=Le===null?J.memoizedState:Le.next;if(n!==null)Le=n,pe=e;else{if(e===null)throw J.alternate===null?Error(r(467)):Error(r(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Le===null?J.memoizedState=Le=e:Le=Le.next=e}return Le}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ra(e){var n=wa;return wa+=1,vs===null&&(vs=[]),e=Xd(vs,e,n),n=J,(Le===null?n.memoizedState:Le.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?L_:z_),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ra(e);if(e.$$typeof===_e)return st(e)}throw Error(r(438,String(e)))}function Yu(e){var n=null,s=J.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=J.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=ju(),J.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),l=0;l<e;l++)s[l]=In;return n.index++,s}function _n(e,n){return typeof n=="function"?n(e):n}function cl(e){var n=ze();return Qu(n,pe,e)}function Qu(e,n,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var d=u.next;u.next=f.next,f.next=d}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var g=d=null,v=null,w=n,O=!1;do{var I=w.lane&-536870913;if(I!==w.lane?(le&I)===I:(qn&I)===I){var R=w.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),I===_s&&(O=!0);else if((qn&R)===R){w=w.next,R===_s&&(O=!0);continue}else I={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=I,d=f):v=v.next=I,J.lanes|=R,Xn|=R;I=w.action,Ii&&s(f,I),f=w.hasEagerState?w.eagerState:s(f,I)}else R={lane:I,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=R,d=f):v=v.next=R,J.lanes|=I,Xn|=I;w=w.next}while(w!==null&&w!==n);if(v===null?d=f:v.next=g,!Tt(f,e.memoizedState)&&(je=!0,O&&(s=ps,s!==null)))throw s;e.memoizedState=f,e.baseState=d,e.baseQueue=v,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Fu(e){var n=ze(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,f=n.memoizedState;if(u!==null){s.pending=null;var d=u=u.next;do f=e(f,d.action),d=d.next;while(d!==u);Tt(f,n.memoizedState)||(je=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,l]}function n_(e,n,s){var l=J,u=ze(),f=fe;if(f){if(s===void 0)throw Error(r(407));s=s()}else s=n();var d=!Tt((pe||u).memoizedState,s);d&&(u.memoizedState=s,je=!0),u=u.queue;var g=a_.bind(null,l,u,e);if(Na(2048,8,g,[e]),u.getSnapshot!==n||d||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,ys(9,fl(),s_.bind(null,l,u,s,n),null),be===null)throw Error(r(349));f||(qn&124)!==0||i_(l,n,s)}return s}function i_(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=J.updateQueue,n===null?(n=ju(),J.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function s_(e,n,s,l){n.value=s,n.getSnapshot=l,r_(n)&&l_(e)}function a_(e,n,s){return s(function(){r_(n)&&l_(e)})}function r_(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Tt(e,s)}catch{return!0}}function l_(e){var n=cs(e,2);n!==null&&Ot(n,e,2)}function Xu(e){var n=_t();if(typeof e=="function"){var s=e;if(e=s(),Ii){kn(!0);try{s()}finally{kn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},n}function o_(e,n,s,l){return e.baseState=s,Qu(e,pe,typeof l=="function"?l:_n)}function bE(e,n,s,l,u){if(dl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){f.listeners.push(d)}};D.T!==null?s(!0):f.isTransition=!1,l(f),s=n.pending,s===null?(f.next=n.pending=f,u_(n,f)):(f.next=s.next,n.pending=s.next=f)}}function u_(e,n){var s=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=D.T,d={};D.T=d;try{var g=s(u,l),v=D.S;v!==null&&v(d,g),c_(e,n,g)}catch(w){Ku(e,n,w)}finally{D.T=f}}else try{f=s(u,l),c_(e,n,f)}catch(w){Ku(e,n,w)}}function c_(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){f_(e,n,l)},function(l){return Ku(e,n,l)}):f_(e,n,s)}function f_(e,n,s){n.status="fulfilled",n.value=s,h_(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,u_(e,s)))}function Ku(e,n,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,h_(n),n=n.next;while(n!==l)}e.action=null}function h_(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function d_(e,n){return n}function __(e,n){if(fe){var s=be.formState;if(s!==null){e:{var l=J;if(fe){if(De){t:{for(var u=De,f=Wt;u.nodeType!==8;){if(!f){u=null;break t}if(u=Gt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){De=Gt(u.nextSibling),l=u.data==="F!";break e}}Ni(l)}l=!1}l&&(n=s[0])}}return s=_t(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:d_,lastRenderedState:n},s.queue=l,s=x_.bind(null,J,l),l.dispatch=s,l=Xu(!1),f=ec.bind(null,J,!1,l.queue),l=_t(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,s=bE.bind(null,J,u,f,s),u.dispatch=s,l.memoizedState=e,[n,s,!1]}function p_(e){var n=ze();return m_(n,pe,e)}function m_(e,n,s){if(n=Qu(e,n,d_)[0],e=cl(_n)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ra(n)}catch(d){throw d===Sa?sl:d}else l=n;n=ze();var u=n.queue,f=u.dispatch;return s!==n.memoizedState&&(J.flags|=2048,ys(9,fl(),TE.bind(null,u,s),null)),[l,f,e]}function TE(e,n){e.action=n}function g_(e){var n=ze(),s=pe;if(s!==null)return m_(n,s,e);ze(),n=n.memoizedState,s=ze();var l=s.queue.dispatch;return s.memoizedState=e,[n,l,!1]}function ys(e,n,s,l){return e={tag:e,create:s,deps:l,inst:n,next:null},n=J.updateQueue,n===null&&(n=ju(),J.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,n.lastEffect=e),e}function fl(){return{destroy:void 0,resource:void 0}}function v_(){return ze().memoizedState}function hl(e,n,s,l){var u=_t();l=l===void 0?null:l,J.flags|=e,u.memoizedState=ys(1|n,fl(),s,l)}function Na(e,n,s,l){var u=ze();l=l===void 0?null:l;var f=u.memoizedState.inst;pe!==null&&l!==null&&Bu(l,pe.memoizedState.deps)?u.memoizedState=ys(n,f,s,l):(J.flags|=e,u.memoizedState=ys(1|n,f,s,l))}function y_(e,n){hl(8390656,8,e,n)}function E_(e,n){Na(2048,8,e,n)}function S_(e,n){return Na(4,2,e,n)}function b_(e,n){return Na(4,4,e,n)}function T_(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function C_(e,n,s){s=s!=null?s.concat([e]):null,Na(4,4,T_.bind(null,n,e),s)}function Zu(){}function A_(e,n){var s=ze();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Bu(n,l[1])?l[0]:(s.memoizedState=[e,n],e)}function w_(e,n){var s=ze();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Bu(n,l[1]))return l[0];if(l=e(),Ii){kn(!0);try{e()}finally{kn(!1)}}return s.memoizedState=[l,n],l}function Wu(e,n,s){return s===void 0||(qn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=Op(),J.lanes|=e,Xn|=e,s)}function R_(e,n,s,l){return Tt(s,n)?s:ms.current!==null?(e=Wu(e,s,l),Tt(e,n)||(je=!0),e):(qn&42)===0?(je=!0,e.memoizedState=s):(e=Op(),J.lanes|=e,Xn|=e,n)}function N_(e,n,s,l,u){var f=H.p;H.p=f!==0&&8>f?f:8;var d=D.T,g={};D.T=g,ec(e,!1,n,s);try{var v=u(),w=D.S;if(w!==null&&w(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=yE(v,l);Oa(e,n,O,Nt(e))}else Oa(e,n,l,Nt(e))}catch(I){Oa(e,n,{then:function(){},status:"rejected",reason:I},Nt())}finally{H.p=f,D.T=d}}function CE(){}function Ju(e,n,s,l){if(e.tag!==5)throw Error(r(476));var u=O_(e).queue;N_(e,u,n,Y,s===null?CE:function(){return D_(e),s(l)})}function O_(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:Y},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function D_(e){var n=O_(e).next.queue;Oa(e,n,{},Nt())}function $u(){return st(Fa)}function M_(){return ze().memoizedState}function I_(){return ze().memoizedState}function AE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Nt();e=Bn(s);var l=Pn(n,e,s);l!==null&&(Ot(l,n,s),Ta(l,n,s)),n={cache:Ou()},e.payload=n;return}n=n.return}}function wE(e,n,s){var l=Nt();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},dl(e)?k_(n,s):(s=yu(e,n,s,l),s!==null&&(Ot(s,e,l),U_(s,n,l)))}function x_(e,n,s){var l=Nt();Oa(e,n,s,l)}function Oa(e,n,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(dl(e))k_(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var d=n.lastRenderedState,g=f(d,s);if(u.hasEagerState=!0,u.eagerState=g,Tt(g,d))return Zr(e,n,u,0),be===null&&Kr(),!1}catch{}finally{}if(s=yu(e,n,u,l),s!==null)return Ot(s,e,l),U_(s,n,l),!0}return!1}function ec(e,n,s,l){if(l={lane:2,revertLane:Ic(),action:l,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(n)throw Error(r(479))}else n=yu(e,s,l,2),n!==null&&Ot(n,e,2)}function dl(e){var n=e.alternate;return e===J||n!==null&&n===J}function k_(e,n){gs=ll=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function U_(e,n,s){if((s&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,Vh(e,s)}}var _l={readContext:st,use:ul,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useLayoutEffect:xe,useInsertionEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useSyncExternalStore:xe,useId:xe,useHostTransitionStatus:xe,useFormState:xe,useActionState:xe,useOptimistic:xe,useMemoCache:xe,useCacheRefresh:xe},L_={readContext:st,use:ul,useCallback:function(e,n){return _t().memoizedState=[e,n===void 0?null:n],e},useContext:st,useEffect:y_,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,hl(4194308,4,T_.bind(null,n,e),s)},useLayoutEffect:function(e,n){return hl(4194308,4,e,n)},useInsertionEffect:function(e,n){hl(4,2,e,n)},useMemo:function(e,n){var s=_t();n=n===void 0?null:n;var l=e();if(Ii){kn(!0);try{e()}finally{kn(!1)}}return s.memoizedState=[l,n],l},useReducer:function(e,n,s){var l=_t();if(s!==void 0){var u=s(n);if(Ii){kn(!0);try{s(n)}finally{kn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=wE.bind(null,J,e),[l.memoizedState,e]},useRef:function(e){var n=_t();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,s=x_.bind(null,J,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Zu,useDeferredValue:function(e,n){var s=_t();return Wu(s,e,n)},useTransition:function(){var e=Xu(!1);return e=N_.bind(null,J,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var l=J,u=_t();if(fe){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),be===null)throw Error(r(349));(le&124)!==0||i_(l,n,s)}u.memoizedState=s;var f={value:s,getSnapshot:n};return u.queue=f,y_(a_.bind(null,l,f,e),[e]),l.flags|=2048,ys(9,fl(),s_.bind(null,l,f,s,n),null),s},useId:function(){var e=_t(),n=be.identifierPrefix;if(fe){var s=fn,l=cn;s=(l&~(1<<32-bt(l)-1)).toString(32)+s,n="«"+n+"R"+s,s=ol++,0<s&&(n+="H"+s.toString(32)),n+="»"}else s=EE++,n="«"+n+"r"+s.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:$u,useFormState:__,useActionState:__,useOptimistic:function(e){var n=_t();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ec.bind(null,J,!0,s),s.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return _t().memoizedState=AE.bind(null,J)}},z_={readContext:st,use:ul,useCallback:A_,useContext:st,useEffect:E_,useImperativeHandle:C_,useInsertionEffect:S_,useLayoutEffect:b_,useMemo:w_,useReducer:cl,useRef:v_,useState:function(){return cl(_n)},useDebugValue:Zu,useDeferredValue:function(e,n){var s=ze();return R_(s,pe.memoizedState,e,n)},useTransition:function(){var e=cl(_n)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Ra(e),n]},useSyncExternalStore:n_,useId:M_,useHostTransitionStatus:$u,useFormState:p_,useActionState:p_,useOptimistic:function(e,n){var s=ze();return o_(s,pe,e,n)},useMemoCache:Yu,useCacheRefresh:I_},RE={readContext:st,use:ul,useCallback:A_,useContext:st,useEffect:E_,useImperativeHandle:C_,useInsertionEffect:S_,useLayoutEffect:b_,useMemo:w_,useReducer:Fu,useRef:v_,useState:function(){return Fu(_n)},useDebugValue:Zu,useDeferredValue:function(e,n){var s=ze();return pe===null?Wu(s,e,n):R_(s,pe.memoizedState,e,n)},useTransition:function(){var e=Fu(_n)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Ra(e),n]},useSyncExternalStore:n_,useId:M_,useHostTransitionStatus:$u,useFormState:g_,useActionState:g_,useOptimistic:function(e,n){var s=ze();return pe!==null?o_(s,pe,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:I_},Es=null,Da=0;function pl(e){var n=Da;return Da+=1,Es===null&&(Es=[]),Xd(Es,e,n)}function Ma(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===T?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function H_(e){var n=e._init;return n(e._payload)}function B_(e){function n(C,S){if(e){var A=C.deletions;A===null?(C.deletions=[S],C.flags|=16):A.push(S)}}function s(C,S){if(!e)return null;for(;S!==null;)n(C,S),S=S.sibling;return null}function l(C){for(var S=new Map;C!==null;)C.key!==null?S.set(C.key,C):S.set(C.index,C),C=C.sibling;return S}function u(C,S){return C=un(C,S),C.index=0,C.sibling=null,C}function f(C,S,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<S?(C.flags|=67108866,S):A):(C.flags|=67108866,S)):(C.flags|=1048576,S)}function d(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function g(C,S,A,M){return S===null||S.tag!==6?(S=Su(A,C.mode,M),S.return=C,S):(S=u(S,A),S.return=C,S)}function v(C,S,A,M){var P=A.type;return P===L?O(C,S,A.props.children,M,A.key):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lt&&H_(P)===S.type)?(S=u(S,A.props),Ma(S,A),S.return=C,S):(S=Jr(A.type,A.key,A.props,null,C.mode,M),Ma(S,A),S.return=C,S)}function w(C,S,A,M){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=bu(A,C.mode,M),S.return=C,S):(S=u(S,A.children||[]),S.return=C,S)}function O(C,S,A,M,P){return S===null||S.tag!==7?(S=Ci(A,C.mode,M,P),S.return=C,S):(S=u(S,A),S.return=C,S)}function I(C,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Su(""+S,C.mode,A),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case b:return A=Jr(S.type,S.key,S.props,null,C.mode,A),Ma(A,S),A.return=C,A;case k:return S=bu(S,C.mode,A),S.return=C,S;case lt:var M=S._init;return S=M(S._payload),I(C,S,A)}if(nt(S)||tt(S))return S=Ci(S,C.mode,A,null),S.return=C,S;if(typeof S.then=="function")return I(C,pl(S),A);if(S.$$typeof===_e)return I(C,nl(C,S),A);ml(C,S)}return null}function R(C,S,A,M){var P=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return P!==null?null:g(C,S,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case b:return A.key===P?v(C,S,A,M):null;case k:return A.key===P?w(C,S,A,M):null;case lt:return P=A._init,A=P(A._payload),R(C,S,A,M)}if(nt(A)||tt(A))return P!==null?null:O(C,S,A,M,null);if(typeof A.then=="function")return R(C,S,pl(A),M);if(A.$$typeof===_e)return R(C,S,nl(C,A),M);ml(C,A)}return null}function N(C,S,A,M,P){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return C=C.get(A)||null,g(S,C,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case b:return C=C.get(M.key===null?A:M.key)||null,v(S,C,M,P);case k:return C=C.get(M.key===null?A:M.key)||null,w(S,C,M,P);case lt:var ee=M._init;return M=ee(M._payload),N(C,S,A,M,P)}if(nt(M)||tt(M))return C=C.get(A)||null,O(S,C,M,P,null);if(typeof M.then=="function")return N(C,S,A,pl(M),P);if(M.$$typeof===_e)return N(C,S,A,nl(S,M),P);ml(S,M)}return null}function F(C,S,A,M){for(var P=null,ee=null,q=S,j=S=0,Qe=null;q!==null&&j<A.length;j++){q.index>j?(Qe=q,q=null):Qe=q.sibling;var ue=R(C,q,A[j],M);if(ue===null){q===null&&(q=Qe);break}e&&q&&ue.alternate===null&&n(C,q),S=f(ue,S,j),ee===null?P=ue:ee.sibling=ue,ee=ue,q=Qe}if(j===A.length)return s(C,q),fe&&wi(C,j),P;if(q===null){for(;j<A.length;j++)q=I(C,A[j],M),q!==null&&(S=f(q,S,j),ee===null?P=q:ee.sibling=q,ee=q);return fe&&wi(C,j),P}for(q=l(q);j<A.length;j++)Qe=N(q,C,j,A[j],M),Qe!==null&&(e&&Qe.alternate!==null&&q.delete(Qe.key===null?j:Qe.key),S=f(Qe,S,j),ee===null?P=Qe:ee.sibling=Qe,ee=Qe);return e&&q.forEach(function(ii){return n(C,ii)}),fe&&wi(C,j),P}function V(C,S,A,M){if(A==null)throw Error(r(151));for(var P=null,ee=null,q=S,j=S=0,Qe=null,ue=A.next();q!==null&&!ue.done;j++,ue=A.next()){q.index>j?(Qe=q,q=null):Qe=q.sibling;var ii=R(C,q,ue.value,M);if(ii===null){q===null&&(q=Qe);break}e&&q&&ii.alternate===null&&n(C,q),S=f(ii,S,j),ee===null?P=ii:ee.sibling=ii,ee=ii,q=Qe}if(ue.done)return s(C,q),fe&&wi(C,j),P;if(q===null){for(;!ue.done;j++,ue=A.next())ue=I(C,ue.value,M),ue!==null&&(S=f(ue,S,j),ee===null?P=ue:ee.sibling=ue,ee=ue);return fe&&wi(C,j),P}for(q=l(q);!ue.done;j++,ue=A.next())ue=N(q,C,j,ue.value,M),ue!==null&&(e&&ue.alternate!==null&&q.delete(ue.key===null?j:ue.key),S=f(ue,S,j),ee===null?P=ue:ee.sibling=ue,ee=ue);return e&&q.forEach(function(NS){return n(C,NS)}),fe&&wi(C,j),P}function ge(C,S,A,M){if(typeof A=="object"&&A!==null&&A.type===L&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case b:e:{for(var P=A.key;S!==null;){if(S.key===P){if(P=A.type,P===L){if(S.tag===7){s(C,S.sibling),M=u(S,A.props.children),M.return=C,C=M;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lt&&H_(P)===S.type){s(C,S.sibling),M=u(S,A.props),Ma(M,A),M.return=C,C=M;break e}s(C,S);break}else n(C,S);S=S.sibling}A.type===L?(M=Ci(A.props.children,C.mode,M,A.key),M.return=C,C=M):(M=Jr(A.type,A.key,A.props,null,C.mode,M),Ma(M,A),M.return=C,C=M)}return d(C);case k:e:{for(P=A.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){s(C,S.sibling),M=u(S,A.children||[]),M.return=C,C=M;break e}else{s(C,S);break}else n(C,S);S=S.sibling}M=bu(A,C.mode,M),M.return=C,C=M}return d(C);case lt:return P=A._init,A=P(A._payload),ge(C,S,A,M)}if(nt(A))return F(C,S,A,M);if(tt(A)){if(P=tt(A),typeof P!="function")throw Error(r(150));return A=P.call(A),V(C,S,A,M)}if(typeof A.then=="function")return ge(C,S,pl(A),M);if(A.$$typeof===_e)return ge(C,S,nl(C,A),M);ml(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,S!==null&&S.tag===6?(s(C,S.sibling),M=u(S,A),M.return=C,C=M):(s(C,S),M=Su(A,C.mode,M),M.return=C,C=M),d(C)):s(C,S)}return function(C,S,A,M){try{Da=0;var P=ge(C,S,A,M);return Es=null,P}catch(q){if(q===Sa||q===sl)throw q;var ee=Ct(29,q,null,C.mode);return ee.lanes=M,ee.return=C,ee}finally{}}}var Ss=B_(!0),P_=B_(!1),Lt=x(null),Jt=null;function Gn(e){var n=e.alternate;z(Be,Be.current&1),z(Lt,e),Jt===null&&(n===null||ms.current!==null||n.memoizedState!==null)&&(Jt=e)}function q_(e){if(e.tag===22){if(z(Be,Be.current),z(Lt,e),Jt===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Jt=e)}}else Vn()}function Vn(){z(Be,Be.current),z(Lt,Lt.current)}function pn(e){B(Lt),Jt===e&&(Jt=null),B(Be)}var Be=x(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||jc(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function tc(e,n,s,l){n=e.memoizedState,s=s(l,n),s=s==null?n:y({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var nc={enqueueSetState:function(e,n,s){e=e._reactInternals;var l=Nt(),u=Bn(l);u.payload=n,s!=null&&(u.callback=s),n=Pn(e,u,l),n!==null&&(Ot(n,e,l),Ta(n,e,l))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var l=Nt(),u=Bn(l);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Pn(e,u,l),n!==null&&(Ot(n,e,l),Ta(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Nt(),l=Bn(s);l.tag=2,n!=null&&(l.callback=n),n=Pn(e,l,s),n!==null&&(Ot(n,e,s),Ta(n,e,s))}};function G_(e,n,s,l,u,f,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,d):n.prototype&&n.prototype.isPureReactComponent?!da(s,l)||!da(u,f):!0}function V_(e,n,s,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==e&&nc.enqueueReplaceState(n,n.state,null)}function xi(e,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(e=e.defaultProps){s===n&&(s=y({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function j_(e){vl(e)}function Y_(e){console.error(e)}function Q_(e){vl(e)}function yl(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function F_(e,n,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ic(e,n,s){return s=Bn(s),s.tag=3,s.payload={element:null},s.callback=function(){yl(e,n)},s}function X_(e){return e=Bn(e),e.tag=3,e}function K_(e,n,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){F_(n,s,l)}}var d=s.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){F_(n,s,l),typeof u!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function NE(e,n,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&va(n,s,u,!0),s=Lt.current,s!==null){switch(s.tag){case 13:return Jt===null?Rc():s.alternate===null&&Me===0&&(Me=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Iu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Oc(e,l,u)),!1;case 22:return s.flags|=65536,l===Iu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Oc(e,l,u)),!1}throw Error(r(435,s.tag))}return Oc(e,l,u),Rc(),!1}if(fe)return n=Lt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Au&&(e=Error(r(422),{cause:l}),ga(It(e,s)))):(l!==Au&&(n=Error(r(423),{cause:l}),ga(It(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=It(l,s),u=ic(e.stateNode,l,u),Uu(e,u),Me!==4&&(Me=2)),!1;var f=Error(r(520),{cause:l});if(f=It(f,s),Ha===null?Ha=[f]:Ha.push(f),Me!==4&&(Me=2),n===null)return!0;l=It(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=ic(s.stateNode,l,e),Uu(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Kn===null||!Kn.has(f))))return s.flags|=65536,u&=-u,s.lanes|=u,u=X_(u),K_(u,e,s,l),Uu(s,u),!1}s=s.return}while(s!==null);return!1}var Z_=Error(r(461)),je=!1;function We(e,n,s,l){n.child=e===null?P_(n,null,s,l):Ss(n,e.child,s,l)}function W_(e,n,s,l,u){s=s.render;var f=n.ref;if("ref"in l){var d={};for(var g in l)g!=="ref"&&(d[g]=l[g])}else d=l;return Di(n),l=Pu(e,n,s,d,f,u),g=qu(),e!==null&&!je?(Gu(e,n,u),mn(e,n,u)):(fe&&g&&Tu(n),n.flags|=1,We(e,n,l,u),n.child)}function J_(e,n,s,l,u){if(e===null){var f=s.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,$_(e,n,f,l,u)):(e=Jr(s.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!fc(e,u)){var d=f.memoizedProps;if(s=s.compare,s=s!==null?s:da,s(d,l)&&e.ref===n.ref)return mn(e,n,u)}return n.flags|=1,e=un(f,l),e.ref=n.ref,e.return=n,n.child=e}function $_(e,n,s,l,u){if(e!==null){var f=e.memoizedProps;if(da(f,l)&&e.ref===n.ref)if(je=!1,n.pendingProps=l=f,fc(e,u))(e.flags&131072)!==0&&(je=!0);else return n.lanes=e.lanes,mn(e,n,u)}return sc(e,n,s,l,u)}function ep(e,n,s){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return tp(e,n,l,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,f!==null?f.cachePool:null),f!==null?$d(n,f):zu(),q_(n);else return n.lanes=n.childLanes=536870912,tp(e,n,f!==null?f.baseLanes|s:s,s)}else f!==null?(il(n,f.cachePool),$d(n,f),Vn(),n.memoizedState=null):(e!==null&&il(n,null),zu(),Vn());return We(e,n,u,s),n.child}function tp(e,n,s,l){var u=Mu();return u=u===null?null:{parent:He._currentValue,pool:u},n.memoizedState={baseLanes:s,cachePool:u},e!==null&&il(n,null),zu(),q_(n),e!==null&&va(e,n,l,!0),null}function El(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function sc(e,n,s,l,u){return Di(n),s=Pu(e,n,s,l,void 0,u),l=qu(),e!==null&&!je?(Gu(e,n,u),mn(e,n,u)):(fe&&l&&Tu(n),n.flags|=1,We(e,n,s,u),n.child)}function np(e,n,s,l,u,f){return Di(n),n.updateQueue=null,s=t_(n,l,s,u),e_(e),l=qu(),e!==null&&!je?(Gu(e,n,f),mn(e,n,f)):(fe&&l&&Tu(n),n.flags|=1,We(e,n,s,f),n.child)}function ip(e,n,s,l,u){if(Di(n),n.stateNode===null){var f=fs,d=s.contextType;typeof d=="object"&&d!==null&&(f=st(d)),f=new s(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},xu(n),d=s.contextType,f.context=typeof d=="object"&&d!==null?st(d):fs,f.state=n.memoizedState,d=s.getDerivedStateFromProps,typeof d=="function"&&(tc(n,s,d,l),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(d=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),d!==f.state&&nc.enqueueReplaceState(f,f.state,null),Aa(n,l,f,u),Ca(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var g=n.memoizedProps,v=xi(s,g);f.props=v;var w=f.context,O=s.contextType;d=fs,typeof O=="object"&&O!==null&&(d=st(O));var I=s.getDerivedStateFromProps;O=typeof I=="function"||typeof f.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g||w!==d)&&V_(n,f,l,d),Hn=!1;var R=n.memoizedState;f.state=R,Aa(n,l,f,u),Ca(),w=n.memoizedState,g||R!==w||Hn?(typeof I=="function"&&(tc(n,s,I,l),w=n.memoizedState),(v=Hn||G_(n,s,v,l,R,w,d))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),f.props=l,f.state=w,f.context=d,l=v):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,ku(e,n),d=n.memoizedProps,O=xi(s,d),f.props=O,I=n.pendingProps,R=f.context,w=s.contextType,v=fs,typeof w=="object"&&w!==null&&(v=st(w)),g=s.getDerivedStateFromProps,(w=typeof g=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==I||R!==v)&&V_(n,f,l,v),Hn=!1,R=n.memoizedState,f.state=R,Aa(n,l,f,u),Ca();var N=n.memoizedState;d!==I||R!==N||Hn||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof g=="function"&&(tc(n,s,g,l),N=n.memoizedState),(O=Hn||G_(n,s,O,l,R,N,v)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,v),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,v)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=v,l=O):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,El(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Ss(n,e.child,null,u),n.child=Ss(n,null,s,u)):We(e,n,s,u),n.memoizedState=f.state,e=n.child):e=mn(e,n,u),e}function sp(e,n,s,l){return ma(),n.flags|=256,We(e,n,s,l),n.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:Yd()}}function lc(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=zt),e}function ap(e,n,s){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,d;if((d=f)||(d=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),d&&(u=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(fe){if(u?Gn(n):Vn(),fe){var g=De,v;if(v=g){e:{for(v=g,g=Wt;v.nodeType!==8;){if(!g){g=null;break e}if(v=Gt(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(n.memoizedState={dehydrated:g,treeContext:Ai!==null?{id:cn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},v=Ct(18,null,null,0),v.stateNode=g,v.return=n,n.child=v,ot=n,De=null,v=!0):v=!1}v||Ni(n)}if(g=n.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return jc(g)?n.lanes=32:n.lanes=536870912,null;pn(n)}return g=l.children,l=l.fallback,u?(Vn(),u=n.mode,g=Sl({mode:"hidden",children:g},u),l=Ci(l,u,s,null),g.return=n,l.return=n,g.sibling=l,n.child=g,u=n.child,u.memoizedState=rc(s),u.childLanes=lc(e,d,s),n.memoizedState=ac,l):(Gn(n),oc(n,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(f)n.flags&256?(Gn(n),n.flags&=-257,n=uc(e,n,s)):n.memoizedState!==null?(Vn(),n.child=e.child,n.flags|=128,n=null):(Vn(),u=l.fallback,g=n.mode,l=Sl({mode:"visible",children:l.children},g),u=Ci(u,g,s,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ss(n,e.child,null,s),l=n.child,l.memoizedState=rc(s),l.childLanes=lc(e,d,s),n.memoizedState=ac,n=u);else if(Gn(n),jc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var w=d.dgst;d=w,l=Error(r(419)),l.stack="",l.digest=d,ga({value:l,source:null,stack:null}),n=uc(e,n,s)}else if(je||va(e,n,s,!1),d=(s&e.childLanes)!==0,je||d){if(d=be,d!==null&&(l=s&-s,l=(l&42)!==0?1:Yo(l),l=(l&(d.suspendedLanes|s))!==0?0:l,l!==0&&l!==v.retryLane))throw v.retryLane=l,cs(e,l),Ot(d,e,l),Z_;g.data==="$?"||Rc(),n=uc(e,n,s)}else g.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,De=Gt(g.nextSibling),ot=n,fe=!0,Ri=null,Wt=!1,e!==null&&(kt[Ut++]=cn,kt[Ut++]=fn,kt[Ut++]=Ai,cn=e.id,fn=e.overflow,Ai=n),n=oc(n,l.children),n.flags|=4096);return n}return u?(Vn(),u=l.fallback,g=n.mode,v=e.child,w=v.sibling,l=un(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?u=un(w,u):(u=Ci(u,g,s,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,g=e.child.memoizedState,g===null?g=rc(s):(v=g.cachePool,v!==null?(w=He._currentValue,v=v.parent!==w?{parent:w,pool:w}:v):v=Yd(),g={baseLanes:g.baseLanes|s,cachePool:v}),u.memoizedState=g,u.childLanes=lc(e,d,s),n.memoizedState=ac,l):(Gn(n),s=e.child,e=s.sibling,s=un(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=s,n.memoizedState=null,s)}function oc(e,n){return n=Sl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Sl(e,n){return e=Ct(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function uc(e,n,s){return Ss(n,e.child,null,s),e=oc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rp(e,n,s){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Ru(e.return,n,s)}function cc(e,n,s,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=u)}function lp(e,n,s){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(We(e,n,l.children,s),l=Be.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,s,n);else if(e.tag===19)rp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(z(Be,l),u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&gl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),cc(n,!1,u,s,f);break;case"backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&gl(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}cc(n,!0,s,null,f);break;case"together":cc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mn(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(va(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,s=un(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=un(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function fc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function OE(e,n,s){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),zn(n,He,e.memoizedState.cache),ma();break;case 27:case 5:Po(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:zn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Gn(n),n.flags|=128,null):(s&n.child.childLanes)!==0?ap(e,n,s):(Gn(n),e=mn(e,n,s),e!==null?e.sibling:null);Gn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(va(e,n,s,!1),l=(s&n.childLanes)!==0),u){if(l)return lp(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(Be,Be.current),l)break;return null;case 22:case 23:return n.lanes=0,ep(e,n,s);case 24:zn(n,He,e.memoizedState.cache)}return mn(e,n,s)}function op(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)je=!0;else{if(!fc(e,s)&&(n.flags&128)===0)return je=!1,OE(e,n,s);je=(e.flags&131072)!==0}else je=!1,fe&&(n.flags&1048576)!==0&&Hd(n,el,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")Eu(l)?(e=xi(l,e),n.tag=1,n=ip(null,n,l,e,s)):(n.tag=0,n=sc(null,n,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===Ge){n.tag=11,n=W_(null,n,l,e,s);break e}else if(u===et){n.tag=14,n=J_(null,n,l,e,s);break e}}throw n=vi(l)||l,Error(r(306,n,""))}}return n;case 0:return sc(e,n,n.type,n.pendingProps,s);case 1:return l=n.type,u=xi(l,n.pendingProps),ip(e,n,l,u,s);case 3:e:{if(Ae(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,ku(e,n),Aa(n,l,null,s);var d=n.memoizedState;if(l=d.cache,zn(n,He,l),l!==f.cache&&Nu(n,[He],s,!0),Ca(),l=d.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=sp(e,n,l,s);break e}else if(l!==u){u=It(Error(r(424)),n),ga(u),n=sp(e,n,l,s);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Gt(e.firstChild),ot=n,fe=!0,Ri=null,Wt=!0,s=P_(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ma(),l===u){n=mn(e,n,s);break e}We(e,n,l,s)}n=n.child}return n;case 26:return El(e,n),e===null?(s=hm(n.type,null,n.pendingProps,null))?n.memoizedState=s:fe||(s=n.type,e=n.pendingProps,l=Ul(Z.current).createElement(s),l[it]=n,l[ht]=e,$e(l,s,e),Ve(l),n.stateNode=l):n.memoizedState=hm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Po(n),e===null&&fe&&(l=n.stateNode=um(n.type,n.pendingProps,Z.current),ot=n,Wt=!0,u=De,Jn(n.type)?(Yc=u,De=Gt(l.firstChild)):De=u),We(e,n,n.pendingProps.children,s),El(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&fe&&((u=l=De)&&(l=iS(l,n.type,n.pendingProps,Wt),l!==null?(n.stateNode=l,ot=n,De=Gt(l.firstChild),Wt=!1,u=!0):u=!1),u||Ni(n)),Po(n),u=n.type,f=n.pendingProps,d=e!==null?e.memoizedProps:null,l=f.children,qc(u,f)?l=null:d!==null&&qc(u,d)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,SE,null,null,s),Fa._currentValue=u),El(e,n),We(e,n,l,s),n.child;case 6:return e===null&&fe&&((e=s=De)&&(s=sS(s,n.pendingProps,Wt),s!==null?(n.stateNode=s,ot=n,De=null,e=!0):e=!1),e||Ni(n)),null;case 13:return ap(e,n,s);case 4:return Ae(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ss(n,null,l,s):We(e,n,l,s),n.child;case 11:return W_(e,n,n.type,n.pendingProps,s);case 7:return We(e,n,n.pendingProps,s),n.child;case 8:return We(e,n,n.pendingProps.children,s),n.child;case 12:return We(e,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,zn(n,n.type,l.value),We(e,n,l.children,s),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Di(n),u=st(u),l=l(u),n.flags|=1,We(e,n,l,s),n.child;case 14:return J_(e,n,n.type,n.pendingProps,s);case 15:return $_(e,n,n.type,n.pendingProps,s);case 19:return lp(e,n,s);case 31:return l=n.pendingProps,s=n.mode,l={mode:l.mode,children:l.children},e===null?(s=Sl(l,s),s.ref=n.ref,n.child=s,s.return=n,n=s):(s=un(e.child,l),s.ref=n.ref,n.child=s,s.return=n,n=s),n;case 22:return ep(e,n,s);case 24:return Di(n),l=st(He),e===null?(u=Mu(),u===null&&(u=be,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=s),u=f),n.memoizedState={parent:l,cache:u},xu(n),zn(n,He,u)):((e.lanes&s)!==0&&(ku(e,n),Aa(n,null,null,s),Ca()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),zn(n,He,l)):(l=f.cache,zn(n,He,l),l!==u.cache&&Nu(n,[He],s,!0))),We(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function gn(e){e.flags|=4}function up(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gm(n)){if(n=Lt.current,n!==null&&((le&4194048)===le?Jt!==null:(le&62914560)!==le&&(le&536870912)===0||n!==Jt))throw ba=Iu,Qd;e.flags|=8192}}function bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?qh():536870912,e.lanes|=n,As|=n)}function Ia(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,n}function DE(e,n,s){var l=n.pendingProps;switch(Cu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Re(n),null;case 3:return s=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),dn(He),xn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(pa(n)?gn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qd())),Re(n),null;case 26:return s=n.memoizedState,e===null?(gn(n),s!==null?(Re(n),up(n,s)):(Re(n),n.flags&=-16777217)):s?s!==e.memoizedState?(gn(n),Re(n),up(n,s)):(Re(n),n.flags&=-16777217):(e.memoizedProps!==l&&gn(n),Re(n),n.flags&=-16777217),null;case 27:xr(n),s=Z.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&gn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Re(n),null}e=G.current,pa(n)?Bd(n):(e=um(u,l,s),n.stateNode=e,gn(n))}return Re(n),null;case 5:if(xr(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&gn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Re(n),null}if(e=G.current,pa(n))Bd(n);else{switch(u=Ul(Z.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[it]=n,e[ht]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch($e(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&gn(n)}}return Re(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&gn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=Z.current,pa(n)){if(e=n.stateNode,s=n.memoizedProps,l=null,u=ot,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[it]=n,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||nm(e.nodeValue,s)),e||Ni(n)}else e=Ul(e).createTextNode(l),e[it]=n,n.stateNode=e}return Re(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=pa(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[it]=n}else ma(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),u=!1}else u=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pn(n),n):(pn(n),null)}if(pn(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),bl(n,n.updateQueue),Re(n),null;case 4:return xn(),e===null&&Lc(n.stateNode.containerInfo),Re(n),null;case 10:return dn(n.type),Re(n),null;case 19:if(B(Be),u=n.memoizedState,u===null)return Re(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)Ia(u,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,Ia(u,!1),e=f.updateQueue,n.updateQueue=e,bl(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)zd(s,e),s=s.sibling;return z(Be,Be.current&1|2),n.child}e=e.sibling}u.tail!==null&&Zt()>Al&&(n.flags|=128,l=!0,Ia(u,!1),n.lanes=4194304)}else{if(!l)if(e=gl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,bl(n,e),Ia(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!fe)return Re(n),null}else 2*Zt()-u.renderingStartTime>Al&&s!==536870912&&(n.flags|=128,l=!0,Ia(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Zt(),n.sibling=null,e=Be.current,z(Be,l?e&1|2:e&1),n):(Re(n),null);case 22:case 23:return pn(n),Hu(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),s=n.updateQueue,s!==null&&bl(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),e!==null&&B(Mi),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),dn(He),Re(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ME(e,n){switch(Cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dn(He),xn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xr(n),null;case 13:if(pn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ma()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(Be),null;case 4:return xn(),null;case 10:return dn(n.type),null;case 22:case 23:return pn(n),Hu(),e!==null&&B(Mi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return dn(He),null;case 25:return null;default:return null}}function cp(e,n){switch(Cu(n),n.tag){case 3:dn(He),xn();break;case 26:case 27:case 5:xr(n);break;case 4:xn();break;case 13:pn(n);break;case 19:B(Be);break;case 10:dn(n.type);break;case 22:case 23:pn(n),Hu(),e!==null&&B(Mi);break;case 24:dn(He)}}function xa(e,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var f=s.create,d=s.inst;l=f(),d.destroy=l}s=s.next}while(s!==u)}}catch(g){Ee(n,n.return,g)}}function jn(e,n,s){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var d=l.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,u=n;var v=s,w=g;try{w()}catch(O){Ee(u,v,O)}}}l=l.next}while(l!==f)}}catch(O){Ee(n,n.return,O)}}function fp(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Jd(n,s)}catch(l){Ee(e,e.return,l)}}}function hp(e,n,s){s.props=xi(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ee(e,n,l)}}function ka(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(u){Ee(e,n,u)}}function $t(e,n){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Ee(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ee(e,n,u)}else s.current=null}function dp(e){var n=e.type,s=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Ee(e,e.return,u)}}function hc(e,n,s){try{var l=e.stateNode;JE(l,e.type,s,n),l[ht]=n}catch(u){Ee(e,e.return,u)}}function _p(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _c(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=kl));else if(l!==4&&(l===27&&Jn(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(_c(e,n,s),e=e.sibling;e!==null;)_c(e,n,s),e=e.sibling}function Tl(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(l!==4&&(l===27&&Jn(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Tl(e,n,s),e=e.sibling;e!==null;)Tl(e,n,s),e=e.sibling}function pp(e){var n=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);$e(n,l,s),n[it]=e,n[ht]=s}catch(f){Ee(e,e.return,f)}}var vn=!1,ke=!1,pc=!1,mp=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function IE(e,n){if(e=e.containerInfo,Bc=ql,e=Rd(e),du(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var d=0,g=-1,v=-1,w=0,O=0,I=e,R=null;t:for(;;){for(var N;I!==s||u!==0&&I.nodeType!==3||(g=d+u),I!==f||l!==0&&I.nodeType!==3||(v=d+l),I.nodeType===3&&(d+=I.nodeValue.length),(N=I.firstChild)!==null;)R=I,I=N;for(;;){if(I===e)break t;if(R===s&&++w===u&&(g=d),R===f&&++O===l&&(v=d),(N=I.nextSibling)!==null)break;I=R,R=I.parentNode}I=N}s=g===-1||v===-1?null:{start:g,end:v}}else s=null}s=s||{start:0,end:0}}else s=null;for(Pc={focusedElem:e,selectionRange:s},ql=!1,Ye=n;Ye!==null;)if(n=Ye,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ye=e;else for(;Ye!==null;){switch(n=Ye,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,u=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var F=xi(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(F,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(V){Ee(s,s.return,V)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Vc(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Ye=e;break}Ye=n.return}}function gp(e,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Yn(e,s),l&4&&xa(5,s);break;case 1:if(Yn(e,s),l&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(d){Ee(s,s.return,d)}else{var u=xi(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ee(s,s.return,d)}}l&64&&fp(s),l&512&&ka(s,s.return);break;case 3:if(Yn(e,s),l&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Jd(e,n)}catch(d){Ee(s,s.return,d)}}break;case 27:n===null&&l&4&&pp(s);case 26:case 5:Yn(e,s),n===null&&l&4&&dp(s),l&512&&ka(s,s.return);break;case 12:Yn(e,s);break;case 13:Yn(e,s),l&4&&Ep(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=qE.bind(null,s),aS(e,s))));break;case 22:if(l=s.memoizedState!==null||vn,!l){n=n!==null&&n.memoizedState!==null||ke,u=vn;var f=ke;vn=l,(ke=n)&&!f?Qn(e,s,(s.subtreeFlags&8772)!==0):Yn(e,s),vn=u,ke=f}break;case 30:break;default:Yn(e,s)}}function vp(e){var n=e.alternate;n!==null&&(e.alternate=null,vp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,pt=!1;function yn(e,n,s){for(s=s.child;s!==null;)yp(e,n,s),s=s.sibling}function yp(e,n,s){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(ta,s)}catch{}switch(s.tag){case 26:ke||$t(s,n),yn(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ke||$t(s,n);var l=we,u=pt;Jn(s.type)&&(we=s.stateNode,pt=!1),yn(e,n,s),Va(s.stateNode),we=l,pt=u;break;case 5:ke||$t(s,n);case 6:if(l=we,u=pt,we=null,yn(e,n,s),we=l,pt=u,we!==null)if(pt)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(s.stateNode)}catch(f){Ee(s,n,f)}else try{we.removeChild(s.stateNode)}catch(f){Ee(s,n,f)}break;case 18:we!==null&&(pt?(e=we,lm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Wa(e)):lm(we,s.stateNode));break;case 4:l=we,u=pt,we=s.stateNode.containerInfo,pt=!0,yn(e,n,s),we=l,pt=u;break;case 0:case 11:case 14:case 15:ke||jn(2,s,n),ke||jn(4,s,n),yn(e,n,s);break;case 1:ke||($t(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&hp(s,n,l)),yn(e,n,s);break;case 21:yn(e,n,s);break;case 22:ke=(l=ke)||s.memoizedState!==null,yn(e,n,s),ke=l;break;default:yn(e,n,s)}}function Ep(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wa(e)}catch(s){Ee(n,n.return,s)}}function xE(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mp),n;default:throw Error(r(435,e.tag))}}function mc(e,n){var s=xE(e);n.forEach(function(l){var u=GE.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function At(e,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],f=e,d=n,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(Jn(g.type)){we=g.stateNode,pt=!1;break e}break;case 5:we=g.stateNode,pt=!1;break e;case 3:case 4:we=g.stateNode.containerInfo,pt=!0;break e}g=g.return}if(we===null)throw Error(r(160));yp(f,d,u),we=null,pt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Sp(n,e),n=n.sibling}var qt=null;function Sp(e,n){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(n,e),wt(e),l&4&&(jn(3,e,e.return),xa(3,e),jn(5,e,e.return));break;case 1:At(n,e),wt(e),l&512&&(ke||s===null||$t(s,s.return)),l&64&&vn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=qt;if(At(n,e),wt(e),l&512&&(ke||s===null||$t(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){e:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[sa]||f[it]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),$e(f,l,s),f[it]=e,Ve(f),l=f;break e;case"link":var d=pm("link","href",u).get(l+(s.href||""));if(d){for(var g=0;g<d.length;g++)if(f=d[g],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){d.splice(g,1);break t}}f=u.createElement(l),$e(f,l,s),u.head.appendChild(f);break;case"meta":if(d=pm("meta","content",u).get(l+(s.content||""))){for(g=0;g<d.length;g++)if(f=d[g],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){d.splice(g,1);break t}}f=u.createElement(l),$e(f,l,s),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[it]=e,Ve(f),l=f}e.stateNode=l}else mm(u,e.type,e.stateNode);else e.stateNode=_m(u,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?mm(u,e.type,e.stateNode):_m(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hc(e,e.memoizedProps,s.memoizedProps)}break;case 27:At(n,e),wt(e),l&512&&(ke||s===null||$t(s,s.return)),s!==null&&l&4&&hc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(At(n,e),wt(e),l&512&&(ke||s===null||$t(s,s.return)),e.flags&32){u=e.stateNode;try{is(u,"")}catch(N){Ee(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,hc(e,u,s!==null?s.memoizedProps:u)),l&1024&&(pc=!0);break;case 6:if(At(n,e),wt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(N){Ee(e,e.return,N)}}break;case 3:if(Hl=null,u=qt,qt=Ll(n.containerInfo),At(n,e),qt=u,wt(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Wa(n.containerInfo)}catch(N){Ee(e,e.return,N)}pc&&(pc=!1,bp(e));break;case 4:l=qt,qt=Ll(e.stateNode.containerInfo),At(n,e),wt(e),qt=l;break;case 12:At(n,e),wt(e);break;case 13:At(n,e),wt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(bc=Zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mc(e,l)));break;case 22:u=e.memoizedState!==null;var v=s!==null&&s.memoizedState!==null,w=vn,O=ke;if(vn=w||u,ke=O||v,At(n,e),ke=O,vn=w,wt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||v||vn||ke||ki(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){v=s=n;try{if(f=v.stateNode,u)d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=v.stateNode;var I=v.memoizedProps.style,R=I!=null&&I.hasOwnProperty("display")?I.display:null;g.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){Ee(v,v.return,N)}}}else if(n.tag===6){if(s===null){v=n;try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(N){Ee(v,v.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,mc(e,s))));break;case 19:At(n,e),wt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mc(e,l)));break;case 30:break;case 21:break;default:At(n,e),wt(e)}}function wt(e){var n=e.flags;if(n&2){try{for(var s,l=e.return;l!==null;){if(_p(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,f=dc(e);Tl(e,f,u);break;case 5:var d=s.stateNode;s.flags&32&&(is(d,""),s.flags&=-33);var g=dc(e);Tl(e,g,d);break;case 3:case 4:var v=s.stateNode.containerInfo,w=dc(e);_c(e,w,v);break;default:throw Error(r(161))}}catch(O){Ee(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;bp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gp(e,n.alternate,n),n=n.sibling}function ki(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:jn(4,n,n.return),ki(n);break;case 1:$t(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&hp(n,n.return,s),ki(n);break;case 27:Va(n.stateNode);case 26:case 5:$t(n,n.return),ki(n);break;case 22:n.memoizedState===null&&ki(n);break;case 30:ki(n);break;default:ki(n)}e=e.sibling}}function Qn(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,d=f.flags;switch(f.tag){case 0:case 11:case 15:Qn(u,f,s),xa(4,f);break;case 1:if(Qn(u,f,s),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){Ee(l,l.return,w)}if(l=f,u=l.updateQueue,u!==null){var g=l.stateNode;try{var v=u.shared.hiddenCallbacks;if(v!==null)for(u.shared.hiddenCallbacks=null,u=0;u<v.length;u++)Wd(v[u],g)}catch(w){Ee(l,l.return,w)}}s&&d&64&&fp(f),ka(f,f.return);break;case 27:pp(f);case 26:case 5:Qn(u,f,s),s&&l===null&&d&4&&dp(f),ka(f,f.return);break;case 12:Qn(u,f,s);break;case 13:Qn(u,f,s),s&&d&4&&Ep(u,f);break;case 22:f.memoizedState===null&&Qn(u,f,s),ka(f,f.return);break;case 30:break;default:Qn(u,f,s)}n=n.sibling}}function gc(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ya(s))}function vc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ya(e))}function en(e,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tp(e,n,s,l),n=n.sibling}function Tp(e,n,s,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:en(e,n,s,l),u&2048&&xa(9,n);break;case 1:en(e,n,s,l);break;case 3:en(e,n,s,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ya(e)));break;case 12:if(u&2048){en(e,n,s,l),e=n.stateNode;try{var f=n.memoizedProps,d=f.id,g=f.onPostCommit;typeof g=="function"&&g(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ee(n,n.return,v)}}else en(e,n,s,l);break;case 13:en(e,n,s,l);break;case 23:break;case 22:f=n.stateNode,d=n.alternate,n.memoizedState!==null?f._visibility&2?en(e,n,s,l):Ua(e,n):f._visibility&2?en(e,n,s,l):(f._visibility|=2,bs(e,n,s,l,(n.subtreeFlags&10256)!==0)),u&2048&&gc(d,n);break;case 24:en(e,n,s,l),u&2048&&vc(n.alternate,n);break;default:en(e,n,s,l)}}function bs(e,n,s,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,d=n,g=s,v=l,w=d.flags;switch(d.tag){case 0:case 11:case 15:bs(f,d,g,v,u),xa(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?bs(f,d,g,v,u):Ua(f,d):(O._visibility|=2,bs(f,d,g,v,u)),u&&w&2048&&gc(d.alternate,d);break;case 24:bs(f,d,g,v,u),u&&w&2048&&vc(d.alternate,d);break;default:bs(f,d,g,v,u)}n=n.sibling}}function Ua(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,l=n,u=l.flags;switch(l.tag){case 22:Ua(s,l),u&2048&&gc(l.alternate,l);break;case 24:Ua(s,l),u&2048&&vc(l.alternate,l);break;default:Ua(s,l)}n=n.sibling}}var La=8192;function Ts(e){if(e.subtreeFlags&La)for(e=e.child;e!==null;)Cp(e),e=e.sibling}function Cp(e){switch(e.tag){case 26:Ts(e),e.flags&La&&e.memoizedState!==null&&vS(qt,e.memoizedState,e.memoizedProps);break;case 5:Ts(e);break;case 3:case 4:var n=qt;qt=Ll(e.stateNode.containerInfo),Ts(e),qt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=La,La=16777216,Ts(e),La=n):Ts(e));break;default:Ts(e)}}function Ap(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function za(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ye=l,Rp(l,e)}Ap(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wp(e),e=e.sibling}function wp(e){switch(e.tag){case 0:case 11:case 15:za(e),e.flags&2048&&jn(9,e,e.return);break;case 3:za(e);break;case 12:za(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):za(e);break;default:za(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ye=l,Rp(l,e)}Ap(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:jn(8,n,n.return),Cl(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function Rp(e,n){for(;Ye!==null;){var s=Ye;switch(s.tag){case 0:case 11:case 15:jn(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ya(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ye=l;else e:for(s=e;Ye!==null;){l=Ye;var u=l.sibling,f=l.return;if(vp(l),l===s){Ye=null;break e}if(u!==null){u.return=f,Ye=u;break e}Ye=f}}}var kE={getCacheForType:function(e){var n=st(He),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},UE=typeof WeakMap=="function"?WeakMap:Map,he=0,be=null,ne=null,le=0,de=0,Rt=null,Fn=!1,Cs=!1,yc=!1,En=0,Me=0,Xn=0,Ui=0,Ec=0,zt=0,As=0,Ha=null,mt=null,Sc=!1,bc=0,Al=1/0,wl=null,Kn=null,Je=0,Zn=null,ws=null,Rs=0,Tc=0,Cc=null,Np=null,Ba=0,Ac=null;function Nt(){if((he&2)!==0&&le!==0)return le&-le;if(D.T!==null){var e=_s;return e!==0?e:Ic()}return jh()}function Op(){zt===0&&(zt=(le&536870912)===0||fe?Ph():536870912);var e=Lt.current;return e!==null&&(e.flags|=32),zt}function Ot(e,n,s){(e===be&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Ns(e,0),Wn(e,le,zt,!1)),ia(e,s),((he&2)===0||e!==be)&&(e===be&&((he&2)===0&&(Ui|=s),Me===4&&Wn(e,le,zt,!1)),tn(e))}function Dp(e,n,s){if((he&6)!==0)throw Error(r(327));var l=!s&&(n&124)===0&&(n&e.expiredLanes)===0||na(e,n),u=l?HE(e,n):Nc(e,n,!0),f=l;do{if(u===0){Cs&&!l&&Wn(e,n,0,!1);break}else{if(s=e.current.alternate,f&&!LE(s)){u=Nc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var g=e;u=Ha;var v=g.current.memoizedState.isDehydrated;if(v&&(Ns(g,d).flags|=256),d=Nc(g,d,!1),d!==2){if(yc&&!v){g.errorRecoveryDisabledLanes|=f,Ui|=f,u=4;break e}f=mt,mt=u,f!==null&&(mt===null?mt=f:mt.push.apply(mt,f))}u=d}if(f=!1,u!==2)continue}}if(u===1){Ns(e,0),Wn(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wn(l,n,zt,!Fn);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=bc+300-Zt(),10<u)){if(Wn(l,n,zt,!Fn),zr(l,0,!0)!==0)break e;l.timeoutHandle=am(Mp.bind(null,l,s,mt,wl,Sc,n,zt,Ui,As,Fn,f,2,-0,0),u);break e}Mp(l,s,mt,wl,Sc,n,zt,Ui,As,Fn,f,0,-0,0)}}break}while(!0);tn(e)}function Mp(e,n,s,l,u,f,d,g,v,w,O,I,R,N){if(e.timeoutHandle=-1,I=n.subtreeFlags,(I&8192||(I&16785408)===16785408)&&(Qa={stylesheets:null,count:0,unsuspend:gS},Cp(n),I=yS(),I!==null)){e.cancelPendingCommit=I(Hp.bind(null,e,n,f,s,l,u,d,g,v,O,1,R,N)),Wn(e,f,d,!w);return}Hp(e,n,f,s,l,u,d,g,v)}function LE(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],f=u.getSnapshot;u=u.value;try{if(!Tt(f(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wn(e,n,s,l){n&=~Ec,n&=~Ui,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-bt(u),d=1<<f;l[f]=-1,u&=~d}s!==0&&Gh(e,s,n)}function Rl(){return(he&6)===0?(Pa(0),!1):!0}function wc(){if(ne!==null){if(de===0)var e=ne.return;else e=ne,hn=Oi=null,Vu(e),Es=null,Da=0,e=ne;for(;e!==null;)cp(e.alternate,e),e=e.return;ne=null}}function Ns(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,eS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),wc(),be=e,ne=s=un(e.current,null),le=n,de=0,Rt=null,Fn=!1,Cs=na(e,n),yc=!1,As=zt=Ec=Ui=Xn=Me=0,mt=Ha=null,Sc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-bt(l),f=1<<u;n|=e[u],l&=~f}return En=n,Kr(),s}function Ip(e,n){J=null,D.H=_l,n===Sa||n===sl?(n=Kd(),de=3):n===Qd?(n=Kd(),de=4):de=n===Z_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Rt=n,ne===null&&(Me=1,yl(e,It(n,e.current)))}function xp(){var e=D.H;return D.H=_l,e===null?_l:e}function kp(){var e=D.A;return D.A=kE,e}function Rc(){Me=4,Fn||(le&4194048)!==le&&Lt.current!==null||(Cs=!0),(Xn&134217727)===0&&(Ui&134217727)===0||be===null||Wn(be,le,zt,!1)}function Nc(e,n,s){var l=he;he|=2;var u=xp(),f=kp();(be!==e||le!==n)&&(wl=null,Ns(e,n)),n=!1;var d=Me;e:do try{if(de!==0&&ne!==null){var g=ne,v=Rt;switch(de){case 8:wc(),d=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(n=!0);var w=de;if(de=0,Rt=null,Os(e,g,v,w),s&&Cs){d=0;break e}break;default:w=de,de=0,Rt=null,Os(e,g,v,w)}}zE(),d=Me;break}catch(O){Ip(e,O)}while(!0);return n&&e.shellSuspendCounter++,hn=Oi=null,he=l,D.H=u,D.A=f,ne===null&&(be=null,le=0,Kr()),d}function zE(){for(;ne!==null;)Up(ne)}function HE(e,n){var s=he;he|=2;var l=xp(),u=kp();be!==e||le!==n?(wl=null,Al=Zt()+500,Ns(e,n)):Cs=na(e,n);e:do try{if(de!==0&&ne!==null){n=ne;var f=Rt;t:switch(de){case 1:de=0,Rt=null,Os(e,n,f,1);break;case 2:case 9:if(Fd(f)){de=0,Rt=null,Lp(n);break}n=function(){de!==2&&de!==9||be!==e||(de=7),tn(e)},f.then(n,n);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Fd(f)?(de=0,Rt=null,Lp(n)):(de=0,Rt=null,Os(e,n,f,7));break;case 5:var d=null;switch(ne.tag){case 26:d=ne.memoizedState;case 5:case 27:var g=ne;if(!d||gm(d)){de=0,Rt=null;var v=g.sibling;if(v!==null)ne=v;else{var w=g.return;w!==null?(ne=w,Nl(w)):ne=null}break t}}de=0,Rt=null,Os(e,n,f,5);break;case 6:de=0,Rt=null,Os(e,n,f,6);break;case 8:wc(),Me=6;break e;default:throw Error(r(462))}}BE();break}catch(O){Ip(e,O)}while(!0);return hn=Oi=null,D.H=l,D.A=u,he=s,ne!==null?0:(be=null,le=0,Kr(),Me)}function BE(){for(;ne!==null&&!l0();)Up(ne)}function Up(e){var n=op(e.alternate,e,En);e.memoizedProps=e.pendingProps,n===null?Nl(e):ne=n}function Lp(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=np(s,n,n.pendingProps,n.type,void 0,le);break;case 11:n=np(s,n,n.pendingProps,n.type.render,n.ref,le);break;case 5:Vu(n);default:cp(s,n),n=ne=zd(n,En),n=op(s,n,En)}e.memoizedProps=e.pendingProps,n===null?Nl(e):ne=n}function Os(e,n,s,l){hn=Oi=null,Vu(n),Es=null,Da=0;var u=n.return;try{if(NE(e,u,n,s,le)){Me=1,yl(e,It(s,e.current)),ne=null;return}}catch(f){if(u!==null)throw ne=u,f;Me=1,yl(e,It(s,e.current)),ne=null;return}n.flags&32768?(fe||l===1?e=!0:Cs||(le&536870912)!==0?e=!1:(Fn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Lt.current,l!==null&&l.tag===13&&(l.flags|=16384))),zp(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){zp(n,Fn);return}e=n.return;var s=DE(n.alternate,n,En);if(s!==null){ne=s;return}if(n=n.sibling,n!==null){ne=n;return}ne=n=e}while(n!==null);Me===0&&(Me=5)}function zp(e,n){do{var s=ME(e.alternate,e);if(s!==null){s.flags&=32767,ne=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ne=e;return}ne=e=s}while(e!==null);Me=6,ne=null}function Hp(e,n,s,l,u,f,d,g,v){e.cancelPendingCommit=null;do Ol();while(Je!==0);if((he&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=vu,g0(e,s,f,d,g,v),e===be&&(ne=be=null,le=0),ws=n,Zn=e,Rs=s,Tc=f,Cc=u,Np=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,VE(kr,function(){return Vp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,u=H.p,H.p=2,d=he,he|=4;try{IE(e,n,s)}finally{he=d,H.p=u,D.T=l}}Je=1,Bp(),Pp(),qp()}}function Bp(){if(Je===1){Je=0;var e=Zn,n=ws,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var l=H.p;H.p=2;var u=he;he|=4;try{Sp(n,e);var f=Pc,d=Rd(e.containerInfo),g=f.focusedElem,v=f.selectionRange;if(d!==g&&g&&g.ownerDocument&&wd(g.ownerDocument.documentElement,g)){if(v!==null&&du(g)){var w=v.start,O=v.end;if(O===void 0&&(O=w),"selectionStart"in g)g.selectionStart=w,g.selectionEnd=Math.min(O,g.value.length);else{var I=g.ownerDocument||document,R=I&&I.defaultView||window;if(R.getSelection){var N=R.getSelection(),F=g.textContent.length,V=Math.min(v.start,F),ge=v.end===void 0?V:Math.min(v.end,F);!N.extend&&V>ge&&(d=ge,ge=V,V=d);var C=Ad(g,V),S=Ad(g,ge);if(C&&S&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==S.node||N.focusOffset!==S.offset)){var A=I.createRange();A.setStart(C.node,C.offset),N.removeAllRanges(),V>ge?(N.addRange(A),N.extend(S.node,S.offset)):(A.setEnd(S.node,S.offset),N.addRange(A))}}}}for(I=[],N=g;N=N.parentNode;)N.nodeType===1&&I.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<I.length;g++){var M=I[g];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ql=!!Bc,Pc=Bc=null}finally{he=u,H.p=l,D.T=s}}e.current=n,Je=2}}function Pp(){if(Je===2){Je=0;var e=Zn,n=ws,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var l=H.p;H.p=2;var u=he;he|=4;try{gp(e,n.alternate,n)}finally{he=u,H.p=l,D.T=s}}Je=3}}function qp(){if(Je===4||Je===3){Je=0,o0();var e=Zn,n=ws,s=Rs,l=Np;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Je=5:(Je=0,ws=Zn=null,Gp(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Kn=null),Qo(s),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(ta,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,u=H.p,H.p=2,D.T=null;try{for(var f=e.onRecoverableError,d=0;d<l.length;d++){var g=l[d];f(g.value,{componentStack:g.stack})}}finally{D.T=n,H.p=u}}(Rs&3)!==0&&Ol(),tn(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===Ac?Ba++:(Ba=0,Ac=e):Ba=0,Pa(0)}}function Gp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ya(n)))}function Ol(e){return Bp(),Pp(),qp(),Vp()}function Vp(){if(Je!==5)return!1;var e=Zn,n=Tc;Tc=0;var s=Qo(Rs),l=D.T,u=H.p;try{H.p=32>s?32:s,D.T=null,s=Cc,Cc=null;var f=Zn,d=Rs;if(Je=0,ws=Zn=null,Rs=0,(he&6)!==0)throw Error(r(331));var g=he;if(he|=4,wp(f.current),Tp(f,f.current,d,s),he=g,Pa(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(ta,f)}catch{}return!0}finally{H.p=u,D.T=l,Gp(e,n)}}function jp(e,n,s){n=It(s,n),n=ic(e.stateNode,n,2),e=Pn(e,n,2),e!==null&&(ia(e,2),tn(e))}function Ee(e,n,s){if(e.tag===3)jp(e,e,s);else for(;n!==null;){if(n.tag===3){jp(n,e,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Kn===null||!Kn.has(l))){e=It(s,e),s=X_(2),l=Pn(n,s,2),l!==null&&(K_(s,l,n,e),ia(l,2),tn(l));break}}n=n.return}}function Oc(e,n,s){var l=e.pingCache;if(l===null){l=e.pingCache=new UE;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(s)||(yc=!0,u.add(s),e=PE.bind(null,e,n,s),n.then(e,e))}function PE(e,n,s){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,be===e&&(le&s)===s&&(Me===4||Me===3&&(le&62914560)===le&&300>Zt()-bc?(he&2)===0&&Ns(e,0):Ec|=s,As===le&&(As=0)),tn(e)}function Yp(e,n){n===0&&(n=qh()),e=cs(e,n),e!==null&&(ia(e,n),tn(e))}function qE(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Yp(e,s)}function GE(e,n){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Yp(e,s)}function VE(e,n){return Go(e,n)}var Dl=null,Ds=null,Dc=!1,Ml=!1,Mc=!1,Li=0;function tn(e){e!==Ds&&e.next===null&&(Ds===null?Dl=Ds=e:Ds=Ds.next=e),Ml=!0,Dc||(Dc=!0,YE())}function Pa(e,n){if(!Mc&&Ml){Mc=!0;do for(var s=!1,l=Dl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var d=l.suspendedLanes,g=l.pingedLanes;f=(1<<31-bt(42|e)+1)-1,f&=u&~(d&~g),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,Kp(l,f))}else f=le,f=zr(l,l===be?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||na(l,f)||(s=!0,Kp(l,f));l=l.next}while(s);Mc=!1}}function jE(){Qp()}function Qp(){Ml=Dc=!1;var e=0;Li!==0&&($E()&&(e=Li),Li=0);for(var n=Zt(),s=null,l=Dl;l!==null;){var u=l.next,f=Fp(l,n);f===0?(l.next=null,s===null?Dl=u:s.next=u,u===null&&(Ds=s)):(s=l,(e!==0||(f&3)!==0)&&(Ml=!0)),l=u}Pa(e)}function Fp(e,n){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var d=31-bt(f),g=1<<d,v=u[d];v===-1?((g&s)===0||(g&l)!==0)&&(u[d]=m0(g,n)):v<=n&&(e.expiredLanes|=g),f&=~g}if(n=be,s=le,s=zr(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===n&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Vo(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||na(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(l!==null&&Vo(l),Qo(s)){case 2:case 8:s=Hh;break;case 32:s=kr;break;case 268435456:s=Bh;break;default:s=kr}return l=Xp.bind(null,e),s=Go(s,l),e.callbackPriority=n,e.callbackNode=s,n}return l!==null&&l!==null&&Vo(l),e.callbackPriority=2,e.callbackNode=null,2}function Xp(e,n){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Ol()&&e.callbackNode!==s)return null;var l=le;return l=zr(e,e===be?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Dp(e,l,n),Fp(e,Zt()),e.callbackNode!=null&&e.callbackNode===s?Xp.bind(null,e):null)}function Kp(e,n){if(Ol())return null;Dp(e,n,!0)}function YE(){tS(function(){(he&6)!==0?Go(zh,jE):Qp()})}function Ic(){return Li===0&&(Li=Ph()),Li}function Zp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gr(""+e)}function Wp(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function QE(e,n,s,l,u){if(n==="submit"&&s&&s.stateNode===u){var f=Zp((u[ht]||null).action),d=l.submitter;d&&(n=(n=d[ht]||null)?Zp(n.formAction):d.getAttribute("formAction"),n!==null&&(f=n,d=null));var g=new Qr("action","action",null,l,u);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Li!==0){var v=d?Wp(u,d):new FormData(u);Ju(s,{pending:!0,data:v,method:u.method,action:f},null,v)}}else typeof f=="function"&&(g.preventDefault(),v=d?Wp(u,d):new FormData(u),Ju(s,{pending:!0,data:v,method:u.method,action:f},f,v))},currentTarget:u}]})}}for(var xc=0;xc<gu.length;xc++){var kc=gu[xc],FE=kc.toLowerCase(),XE=kc[0].toUpperCase()+kc.slice(1);Pt(FE,"on"+XE)}Pt(Dd,"onAnimationEnd"),Pt(Md,"onAnimationIteration"),Pt(Id,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(fE,"onTransitionRun"),Pt(hE,"onTransitionStart"),Pt(dE,"onTransitionCancel"),Pt(xd,"onTransitionEnd"),es("onMouseEnter",["mouseout","mouseover"]),es("onMouseLeave",["mouseout","mouseover"]),es("onPointerEnter",["pointerout","pointerover"]),es("onPointerLeave",["pointerout","pointerover"]),Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa));function Jp(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var d=l.length-1;0<=d;d--){var g=l[d],v=g.instance,w=g.currentTarget;if(g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){vl(O)}u.currentTarget=null,f=v}else for(d=0;d<l.length;d++){if(g=l[d],v=g.instance,w=g.currentTarget,g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){vl(O)}u.currentTarget=null,f=v}}}}function ie(e,n){var s=n[Fo];s===void 0&&(s=n[Fo]=new Set);var l=e+"__bubble";s.has(l)||($p(n,e,2,!1),s.add(l))}function Uc(e,n,s){var l=0;n&&(l|=4),$p(s,e,l,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Lc(e){if(!e[Il]){e[Il]=!0,Qh.forEach(function(s){s!=="selectionchange"&&(KE.has(s)||Uc(s,!1,e),Uc(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Il]||(n[Il]=!0,Uc("selectionchange",!1,n))}}function $p(e,n,s,l){switch(Tm(n)){case 2:var u=bS;break;case 8:u=TS;break;default:u=Zc}s=u.bind(null,n,s,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function zc(e,n,s,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var g=l.stateNode.containerInfo;if(g===u)break;if(d===4)for(d=l.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;g!==null;){if(d=Wi(g),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){l=f=d;continue e}g=g.parentNode}}l=l.return}rd(function(){var w=f,O=nu(s),I=[];e:{var R=kd.get(e);if(R!==void 0){var N=Qr,F=e;switch(e){case"keypress":if(jr(s)===0)break e;case"keydown":case"keyup":N=V0;break;case"focusin":F="focus",N=ou;break;case"focusout":F="blur",N=ou;break;case"beforeblur":case"afterblur":N=ou;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Q0;break;case Dd:case Md:case Id:N=k0;break;case xd:N=X0;break;case"scroll":case"scrollend":N=O0;break;case"wheel":N=Z0;break;case"copy":case"cut":case"paste":N=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=fd;break;case"toggle":case"beforetoggle":N=J0}var V=(n&4)!==0,ge=!V&&(e==="scroll"||e==="scrollend"),C=V?R!==null?R+"Capture":null:R;V=[];for(var S=w,A;S!==null;){var M=S;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||C===null||(M=ra(S,C),M!=null&&V.push(Ga(S,M,A))),ge)break;S=S.return}0<V.length&&(R=new N(R,F,null,s,O),I.push({event:R,listeners:V}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&s!==tu&&(F=s.relatedTarget||s.fromElement)&&(Wi(F)||F[Zi]))break e;if((N||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,N?(F=s.relatedTarget||s.toElement,N=w,F=F?Wi(F):null,F!==null&&(ge=c(F),V=F.tag,F!==ge||V!==5&&V!==27&&V!==6)&&(F=null)):(N=null,F=w),N!==F)){if(V=ud,M="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(V=fd,M="onPointerLeave",C="onPointerEnter",S="pointer"),ge=N==null?R:aa(N),A=F==null?R:aa(F),R=new V(M,S+"leave",N,s,O),R.target=ge,R.relatedTarget=A,M=null,Wi(O)===w&&(V=new V(C,S+"enter",F,s,O),V.target=A,V.relatedTarget=ge,M=V),ge=M,N&&F)t:{for(V=N,C=F,S=0,A=V;A;A=Ms(A))S++;for(A=0,M=C;M;M=Ms(M))A++;for(;0<S-A;)V=Ms(V),S--;for(;0<A-S;)C=Ms(C),A--;for(;S--;){if(V===C||C!==null&&V===C.alternate)break t;V=Ms(V),C=Ms(C)}V=null}else V=null;N!==null&&em(I,R,N,V,!1),F!==null&&ge!==null&&em(I,ge,F,V,!0)}}e:{if(R=w?aa(w):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var P=yd;else if(gd(R))if(Ed)P=oE;else{P=rE;var ee=aE}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&eu(w.elementType)&&(P=yd):P=lE;if(P&&(P=P(e,w))){vd(I,P,s,O);break e}ee&&ee(e,R,w),e==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&$o(R,"number",R.value)}switch(ee=w?aa(w):window,e){case"focusin":(gd(ee)||ee.contentEditable==="true")&&(ls=ee,_u=w,_a=null);break;case"focusout":_a=_u=ls=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Nd(I,s,O);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":Nd(I,s,O)}var q;if(cu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else rs?pd(e,s)&&(j="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(j="onCompositionStart");j&&(hd&&s.locale!=="ko"&&(rs||j!=="onCompositionStart"?j==="onCompositionEnd"&&rs&&(q=ld()):(Ln=O,au="value"in Ln?Ln.value:Ln.textContent,rs=!0)),ee=xl(w,j),0<ee.length&&(j=new cd(j,e,null,s,O),I.push({event:j,listeners:ee}),q?j.data=q:(q=md(s),q!==null&&(j.data=q)))),(q=eE?tE(e,s):nE(e,s))&&(j=xl(w,"onBeforeInput"),0<j.length&&(ee=new cd("onBeforeInput","beforeinput",null,s,O),I.push({event:ee,listeners:j}),ee.data=q)),QE(I,e,w,s,O)}Jp(I,n)})}function Ga(e,n,s){return{instance:e,listener:n,currentTarget:s}}function xl(e,n){for(var s=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ra(e,s),u!=null&&l.unshift(Ga(e,u,f)),u=ra(e,n),u!=null&&l.push(Ga(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Ms(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function em(e,n,s,l,u){for(var f=n._reactName,d=[];s!==null&&s!==l;){var g=s,v=g.alternate,w=g.stateNode;if(g=g.tag,v!==null&&v===l)break;g!==5&&g!==26&&g!==27||w===null||(v=w,u?(w=ra(s,f),w!=null&&d.unshift(Ga(s,w,v))):u||(w=ra(s,f),w!=null&&d.push(Ga(s,w,v)))),s=s.return}d.length!==0&&e.push({event:n,listeners:d})}var ZE=/\r\n?/g,WE=/\u0000|\uFFFD/g;function tm(e){return(typeof e=="string"?e:""+e).replace(ZE,`
`).replace(WE,"")}function nm(e,n){return n=tm(n),tm(e)===n}function kl(){}function me(e,n,s,l,u,f){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||is(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&is(e,""+l);break;case"className":Br(e,"class",l);break;case"tabIndex":Br(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Br(e,s,l);break;case"style":sd(e,l,f);break;case"data":if(n!=="object"){Br(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Gr(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&me(e,n,"name",u.name,u,null),me(e,n,"formEncType",u.formEncType,u,null),me(e,n,"formMethod",u.formMethod,u,null),me(e,n,"formTarget",u.formTarget,u,null)):(me(e,n,"encType",u.encType,u,null),me(e,n,"method",u.method,u,null),me(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Gr(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=kl);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Gr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Hr(e,"popover",l);break;case"xlinkActuate":ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ln(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ln(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ln(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ln(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Hr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=R0.get(s)||s,Hr(e,s,l))}}function Hc(e,n,s,l,u,f){switch(s){case"style":sd(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?is(e,l):(typeof l=="number"||typeof l=="bigint")&&is(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fh.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),f=e[ht]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,l,u);break e}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Hr(e,s,l)}}}function $e(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,u=!1,f;for(f in s)if(s.hasOwnProperty(f)){var d=s[f];if(d!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:me(e,n,f,d,s,null)}}u&&me(e,n,"srcSet",s.srcSet,s,null),l&&me(e,n,"src",s.src,s,null);return;case"input":ie("invalid",e);var g=f=d=u=null,v=null,w=null;for(l in s)if(s.hasOwnProperty(l)){var O=s[l];if(O!=null)switch(l){case"name":u=O;break;case"type":d=O;break;case"checked":v=O;break;case"defaultChecked":w=O;break;case"value":f=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:me(e,n,l,O,s,null)}}ed(e,f,g,v,w,d,u,!1),Pr(e);return;case"select":ie("invalid",e),l=d=f=null;for(u in s)if(s.hasOwnProperty(u)&&(g=s[u],g!=null))switch(u){case"value":f=g;break;case"defaultValue":d=g;break;case"multiple":l=g;default:me(e,n,u,g,s,null)}n=f,s=d,e.multiple=!!l,n!=null?ns(e,!!l,n,!1):s!=null&&ns(e,!!l,s,!0);return;case"textarea":ie("invalid",e),f=u=l=null;for(d in s)if(s.hasOwnProperty(d)&&(g=s[d],g!=null))switch(d){case"value":l=g;break;case"defaultValue":u=g;break;case"children":f=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(r(91));break;default:me(e,n,d,g,s,null)}nd(e,l,u,f),Pr(e);return;case"option":for(v in s)if(s.hasOwnProperty(v)&&(l=s[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:me(e,n,v,l,s,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<qa.length;l++)ie(qa[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in s)if(s.hasOwnProperty(w)&&(l=s[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:me(e,n,w,l,s,null)}return;default:if(eu(n)){for(O in s)s.hasOwnProperty(O)&&(l=s[O],l!==void 0&&Hc(e,n,O,l,s,void 0));return}}for(g in s)s.hasOwnProperty(g)&&(l=s[g],l!=null&&me(e,n,g,l,s,null))}function JE(e,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,d=null,g=null,v=null,w=null,O=null;for(N in s){var I=s[N];if(s.hasOwnProperty(N)&&I!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=I;default:l.hasOwnProperty(N)||me(e,n,N,null,l,I)}}for(var R in l){var N=l[R];if(I=s[R],l.hasOwnProperty(R)&&(N!=null||I!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":w=N;break;case"defaultChecked":O=N;break;case"value":d=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:N!==I&&me(e,n,R,N,l,I)}}Jo(e,d,g,v,w,O,f,u);return;case"select":N=d=g=R=null;for(f in s)if(v=s[f],s.hasOwnProperty(f)&&v!=null)switch(f){case"value":break;case"multiple":N=v;default:l.hasOwnProperty(f)||me(e,n,f,null,l,v)}for(u in l)if(f=l[u],v=s[u],l.hasOwnProperty(u)&&(f!=null||v!=null))switch(u){case"value":R=f;break;case"defaultValue":g=f;break;case"multiple":d=f;default:f!==v&&me(e,n,u,f,l,v)}n=g,s=d,l=N,R!=null?ns(e,!!s,R,!1):!!l!=!!s&&(n!=null?ns(e,!!s,n,!0):ns(e,!!s,s?[]:"",!1));return;case"textarea":N=R=null;for(g in s)if(u=s[g],s.hasOwnProperty(g)&&u!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:me(e,n,g,null,l,u)}for(d in l)if(u=l[d],f=s[d],l.hasOwnProperty(d)&&(u!=null||f!=null))switch(d){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&me(e,n,d,u,l,f)}td(e,R,N);return;case"option":for(var F in s)if(R=s[F],s.hasOwnProperty(F)&&R!=null&&!l.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:me(e,n,F,null,l,R)}for(v in l)if(R=l[v],N=s[v],l.hasOwnProperty(v)&&R!==N&&(R!=null||N!=null))switch(v){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:me(e,n,v,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in s)R=s[V],s.hasOwnProperty(V)&&R!=null&&!l.hasOwnProperty(V)&&me(e,n,V,null,l,R);for(w in l)if(R=l[w],N=s[w],l.hasOwnProperty(w)&&R!==N&&(R!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,n));break;default:me(e,n,w,R,l,N)}return;default:if(eu(n)){for(var ge in s)R=s[ge],s.hasOwnProperty(ge)&&R!==void 0&&!l.hasOwnProperty(ge)&&Hc(e,n,ge,void 0,l,R);for(O in l)R=l[O],N=s[O],!l.hasOwnProperty(O)||R===N||R===void 0&&N===void 0||Hc(e,n,O,R,l,N);return}}for(var C in s)R=s[C],s.hasOwnProperty(C)&&R!=null&&!l.hasOwnProperty(C)&&me(e,n,C,null,l,R);for(I in l)R=l[I],N=s[I],!l.hasOwnProperty(I)||R===N||R==null&&N==null||me(e,n,I,R,l,N)}var Bc=null,Pc=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function im(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function qc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gc=null;function $E(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(e){return rm.resolve(null).then(e).catch(nS)}:am;function nS(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function lm(e,n){var s=n,l=0,u=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var d=e.ownerDocument;if(s&1&&Va(d.documentElement),s&2&&Va(d.body),s&4)for(s=d.head,Va(s),d=s.firstChild;d;){var g=d.nextSibling,v=d.nodeName;d[sa]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=g}}if(u===0){e.removeChild(f),Wa(n);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Wa(n)}function Vc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Vc(s),Xo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function iS(e,n,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[sa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function sS(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Gt(e.nextSibling),e===null))return null;return e}function jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function aS(e,n){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Yc=null;function om(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function um(e,n,s){switch(n=Ul(s),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Va(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xo(e)}var Ht=new Map,cm=new Set;function Ll(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=H.d;H.d={f:rS,r:lS,D:oS,C:uS,L:cS,m:fS,X:dS,S:hS,M:_S};function rS(){var e=Sn.f(),n=Rl();return e||n}function lS(e){var n=Ji(e);n!==null&&n.tag===5&&n.type==="form"?D_(n):Sn.r(e)}var Is=typeof document>"u"?null:document;function fm(e,n,s){var l=Is;if(l&&typeof n=="string"&&n){var u=Mt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),cm.has(u)||(cm.add(u),e={rel:e,crossOrigin:s,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),$e(n,"link",e),Ve(n),l.head.appendChild(n)))}}function oS(e){Sn.D(e),fm("dns-prefetch",e,null)}function uS(e,n){Sn.C(e,n),fm("preconnect",e,n)}function cS(e,n,s){Sn.L(e,n,s);var l=Is;if(l&&e&&n){var u='link[rel="preload"][as="'+Mt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Mt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Mt(s.imageSizes)+'"]')):u+='[href="'+Mt(e)+'"]';var f=u;switch(n){case"style":f=xs(e);break;case"script":f=ks(e)}Ht.has(f)||(e=y({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Ht.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(ja(f))||n==="script"&&l.querySelector(Ya(f))||(n=l.createElement("link"),$e(n,"link",e),Ve(n),l.head.appendChild(n)))}}function fS(e,n){Sn.m(e,n);var s=Is;if(s&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Mt(l)+'"][href="'+Mt(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ks(e)}if(!Ht.has(f)&&(e=y({rel:"modulepreload",href:e},n),Ht.set(f,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ya(f)))return}l=s.createElement("link"),$e(l,"link",e),Ve(l),s.head.appendChild(l)}}}function hS(e,n,s){Sn.S(e,n,s);var l=Is;if(l&&e){var u=$i(l).hoistableStyles,f=xs(e);n=n||"default";var d=u.get(f);if(!d){var g={loading:0,preload:null};if(d=l.querySelector(ja(f)))g.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Ht.get(f))&&Qc(e,s);var v=d=l.createElement("link");Ve(v),$e(v,"link",e),v._p=new Promise(function(w,O){v.onload=w,v.onerror=O}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,zl(d,n,l)}d={type:"stylesheet",instance:d,count:1,state:g},u.set(f,d)}}}function dS(e,n){Sn.X(e,n);var s=Is;if(s&&e){var l=$i(s).hoistableScripts,u=ks(e),f=l.get(u);f||(f=s.querySelector(Ya(u)),f||(e=y({src:e,async:!0},n),(n=Ht.get(u))&&Fc(e,n),f=s.createElement("script"),Ve(f),$e(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function _S(e,n){Sn.M(e,n);var s=Is;if(s&&e){var l=$i(s).hoistableScripts,u=ks(e),f=l.get(u);f||(f=s.querySelector(Ya(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=Ht.get(u))&&Fc(e,n),f=s.createElement("script"),Ve(f),$e(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function hm(e,n,s,l){var u=(u=Z.current)?Ll(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=xs(s.href),s=$i(u).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=xs(s.href);var f=$i(u).hoistableStyles,d=f.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,d),(f=u.querySelector(ja(e)))&&!f._p&&(d.instance=f,d.state.loading=5),Ht.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ht.set(e,s),f||pS(u,e,s,d.state))),n&&l===null)throw Error(r(528,""));return d}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ks(s),s=$i(u).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function xs(e){return'href="'+Mt(e)+'"'}function ja(e){return'link[rel="stylesheet"]['+e+"]"}function dm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function pS(e,n,s,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),$e(n,"link",s),Ve(n),e.head.appendChild(n))}function ks(e){return'[src="'+Mt(e)+'"]'}function Ya(e){return"script[async]"+e}function _m(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Mt(s.href)+'"]');if(l)return n.instance=l,Ve(l),l;var u=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ve(l),$e(l,"style",u),zl(l,s.precedence,e),n.instance=l;case"stylesheet":u=xs(s.href);var f=e.querySelector(ja(u));if(f)return n.state.loading|=4,n.instance=f,Ve(f),f;l=dm(s),(u=Ht.get(u))&&Qc(l,u),f=(e.ownerDocument||e).createElement("link"),Ve(f);var d=f;return d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),$e(f,"link",l),n.state.loading|=4,zl(f,s.precedence,e),n.instance=f;case"script":return f=ks(s.src),(u=e.querySelector(Ya(f)))?(n.instance=u,Ve(u),u):(l=s,(u=Ht.get(f))&&(l=y({},s),Fc(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ve(u),$e(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,zl(l,s.precedence,e));return n.instance}function zl(e,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,d=0;d<l.length;d++){var g=l[d];if(g.dataset.precedence===n)f=g;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Qc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Fc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hl=null;function pm(e,n,s){if(Hl===null){var l=new Map,u=Hl=new Map;u.set(s,l)}else u=Hl,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var f=s[u];if(!(f[sa]||f[it]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var d=f.getAttribute(n)||"";d=e+d;var g=l.get(d);g?g.push(f):l.set(d,[f])}}return l}function mm(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function mS(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function gm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qa=null;function gS(){}function vS(e,n,s){if(Qa===null)throw Error(r(475));var l=Qa;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=xs(s.href),f=e.querySelector(ja(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Bl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,Ve(f);return}f=e.ownerDocument||e,s=dm(s),(u=Ht.get(u))&&Qc(s,u),f=f.createElement("link"),Ve(f);var d=f;d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),$e(f,"link",s),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Bl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function yS(){if(Qa===null)throw Error(r(475));var e=Qa;return e.stylesheets&&e.count===0&&Xc(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Bl(){if(this.count--,this.count===0){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pl=null;function Xc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pl=new Map,n.forEach(ES,e),Pl=null,Bl.call(e))}function ES(e,n){if(!(n.state.loading&4)){var s=Pl.get(e);if(s)var l=s.get(null);else{s=new Map,Pl.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var d=u[f];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(s.set(d.dataset.precedence,d),l=d)}l&&s.set(null,l)}u=n.instance,d=u.getAttribute("data-precedence"),f=s.get(d)||l,f===l&&s.set(null,u),s.set(d,u),this.count++,l=Bl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fa={$$typeof:_e,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function SS(e,n,s,l,u,f,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.hiddenUpdates=jo(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function vm(e,n,s,l,u,f,d,g,v,w,O,I){return e=new SS(e,n,s,d,g,v,w,I),n=1,f===!0&&(n|=24),f=Ct(3,null,null,n),e.current=f,f.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:n},xu(f),e}function ym(e){return e?(e=fs,e):fs}function Em(e,n,s,l,u,f){u=ym(u),l.context===null?l.context=u:l.pendingContext=u,l=Bn(n),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Pn(e,l,n),s!==null&&(Ot(s,e,n),Ta(s,e,n))}function Sm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Kc(e,n){Sm(e,n),(e=e.alternate)&&Sm(e,n)}function bm(e){if(e.tag===13){var n=cs(e,67108864);n!==null&&Ot(n,e,67108864),Kc(e,67108864)}}var ql=!0;function bS(e,n,s,l){var u=D.T;D.T=null;var f=H.p;try{H.p=2,Zc(e,n,s,l)}finally{H.p=f,D.T=u}}function TS(e,n,s,l){var u=D.T;D.T=null;var f=H.p;try{H.p=8,Zc(e,n,s,l)}finally{H.p=f,D.T=u}}function Zc(e,n,s,l){if(ql){var u=Wc(l);if(u===null)zc(e,n,l,Gl,s),Cm(e,l);else if(AS(u,e,n,s,l))l.stopPropagation();else if(Cm(e,l),n&4&&-1<CS.indexOf(e)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var d=yi(f.pendingLanes);if(d!==0){var g=f;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var v=1<<31-bt(d);g.entanglements[1]|=v,d&=~v}tn(f),(he&6)===0&&(Al=Zt()+500,Pa(0))}}break;case 13:g=cs(f,2),g!==null&&Ot(g,f,2),Rl(),Kc(f,2)}if(f=Wc(l),f===null&&zc(e,n,l,Gl,s),f===u)break;u=f}u!==null&&l.stopPropagation()}else zc(e,n,l,null,s)}}function Wc(e){return e=nu(e),Jc(e)}var Gl=null;function Jc(e){if(Gl=null,e=Wi(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=h(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gl=e,null}function Tm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(u0()){case zh:return 2;case Hh:return 8;case kr:case c0:return 32;case Bh:return 268435456;default:return 32}default:return 32}}var $c=!1,$n=null,ei=null,ti=null,Xa=new Map,Ka=new Map,ni=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cm(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":Xa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(n.pointerId)}}function Za(e,n,s,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&bm(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function AS(e,n,s,l,u){switch(n){case"focusin":return $n=Za($n,e,n,s,l,u),!0;case"dragenter":return ei=Za(ei,e,n,s,l,u),!0;case"mouseover":return ti=Za(ti,e,n,s,l,u),!0;case"pointerover":var f=u.pointerId;return Xa.set(f,Za(Xa.get(f)||null,e,n,s,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Ka.set(f,Za(Ka.get(f)||null,e,n,s,l,u)),!0}return!1}function Am(e){var n=Wi(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=h(s),n!==null){e.blockedOn=n,v0(e.priority,function(){if(s.tag===13){var l=Nt();l=Yo(l);var u=cs(s,l);u!==null&&Ot(u,s,l),Kc(s,l)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Wc(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);tu=l,s.target.dispatchEvent(l),tu=null}else return n=Ji(s),n!==null&&bm(n),e.blockedOn=s,!1;n.shift()}return!0}function wm(e,n,s){Vl(e)&&s.delete(n)}function wS(){$c=!1,$n!==null&&Vl($n)&&($n=null),ei!==null&&Vl(ei)&&(ei=null),ti!==null&&Vl(ti)&&(ti=null),Xa.forEach(wm),Ka.forEach(wm)}function jl(e,n){e.blockedOn===n&&(e.blockedOn=null,$c||($c=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wS)))}var Yl=null;function Rm(e){Yl!==e&&(Yl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var n=0;n<e.length;n+=3){var s=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(Jc(l||s)===null)continue;break}var f=Ji(s);f!==null&&(e.splice(n,3),n-=3,Ju(f,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Wa(e){function n(v){return jl(v,e)}$n!==null&&jl($n,e),ei!==null&&jl(ei,e),ti!==null&&jl(ti,e),Xa.forEach(n),Ka.forEach(n);for(var s=0;s<ni.length;s++){var l=ni[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ni.length&&(s=ni[0],s.blockedOn===null);)Am(s),s.blockedOn===null&&ni.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],f=s[l+1],d=u[ht]||null;if(typeof f=="function")d||Rm(s);else if(d){var g=null;if(f&&f.hasAttribute("formAction")){if(u=f,d=f[ht]||null)g=d.formAction;else if(Jc(u)!==null)continue}else g=d.action;typeof g=="function"?s[l+1]=g:(s.splice(l,3),l-=3),Rm(s)}}}function ef(e){this._internalRoot=e}Ql.prototype.render=ef.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Nt();Em(s,l,e,n,null,null)},Ql.prototype.unmount=ef.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Em(e.current,2,null,e,null,null),Rl(),n[Zi]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=jh();e={blockedOn:null,target:e,priority:n};for(var s=0;s<ni.length&&n!==0&&n<ni[s].priority;s++);ni.splice(s,0,e),s===0&&Am(e)}};var Nm=t.version;if(Nm!=="19.1.0")throw Error(r(527,Nm,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var RS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{ta=Fl.inject(RS),St=Fl}catch{}}return $a.createRoot=function(e,n){if(!o(e))throw Error(r(299));var s=!1,l="",u=j_,f=Y_,d=Q_,g=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks)),n=vm(e,1,!1,null,null,s,l,u,f,d,g,null),e[Zi]=n.current,Lc(e),new ef(n)},$a.hydrateRoot=function(e,n,s){if(!o(e))throw Error(r(299));var l=!1,u="",f=j_,d=Y_,g=Q_,v=null,w=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(g=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(v=s.unstable_transitionCallbacks),s.formState!==void 0&&(w=s.formState)),n=vm(e,1,!0,n,s??null,l,u,f,d,g,v,w),n.context=ym(null),s=n.current,l=Nt(),l=Yo(l),u=Bn(l),u.callback=null,Pn(s,u,l),s=l,n.current.lanes=s,ia(n,s),tn(n),e[Zi]=n.current,Lc(e),new Ql(n)},$a.version="19.1.0",$a}var Hm;function HS(){if(Hm)return sf.exports;Hm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),sf.exports=zS(),sf.exports}var BS=HS();function PS(){return Ne.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center",children:[Ne.jsx("h1",{className:"text-5xl font-bold mb-10",children:"Squawky's Super Cool Gamez"}),Ne.jsxs("div",{className:"flex flex-wrap justify-center gap-10",children:[Ne.jsx(qS,{}),Ne.jsx(GS,{})]})]})}function qS(){return Ne.jsx("div",{className:"login-section",children:Ne.jsxs("form",{id:"loginForm",className:"flex flex-col gap-4",children:[Ne.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"Sign Up"}),Ne.jsx("label",{htmlFor:"username",className:"text-left font-medium",children:"Username:"}),Ne.jsx("input",{type:"text",name:"username",required:!0,id:"username",className:"p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"}),Ne.jsx("label",{htmlFor:"gender",className:"text-left font-medium",children:"Gender:"}),Ne.jsxs("select",{name:"gender",id:"gender",className:"p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",children:[Ne.jsx("option",{value:"male",children:"Male"}),Ne.jsx("option",{value:"female",children:"Female"}),Ne.jsx("option",{value:"other",children:"Other"}),Ne.jsx("option",{value:"prefer-not",children:"Prefer not to say"})]}),Ne.jsx("button",{type:"submit",children:"Sign up with Google"})]})})}function GS(){return Ne.jsxs("div",{className:"login-section",children:[Ne.jsx("h2",{className:"text-3xl font-semibold",children:"Login"}),Ne.jsx("div",{className:"flex-grow flex items-center justify-center",children:Ne.jsx("button",{children:"Login with Google"})})]})}BS.createRoot(document.getElementById("root")).render(Ne.jsx(IS.StrictMode,{children:Ne.jsx(PS,{})}));const VS=()=>{};var Bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(a,t){if(!a)throw Xs(t)},Xs=function(a){return new Error("Firebase Database ("+Kg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=function(a){const t=[];let i=0;for(let r=0;r<a.length;r++){let o=a.charCodeAt(r);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&r+1<a.length&&(a.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++r)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},jS=function(a){const t=[];let i=0,r=0;for(;i<a.length;){const o=a[i++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=a[i++];t[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=a[i++],h=a[i++],_=a[i++],p=((o&7)<<18|(c&63)<<12|(h&63)<<6|_&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const c=a[i++],h=a[i++];t[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},jf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,t){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<a.length;o+=3){const c=a[o],h=o+1<a.length,_=h?a[o+1]:0,p=o+2<a.length,m=p?a[o+2]:0,y=c>>2,T=(c&3)<<4|_>>4;let b=(_&15)<<2|m>>6,k=m&63;p||(k=64,h||(b=64)),r.push(i[y],i[T],i[b],i[k])}return r.join("")},encodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(a):this.encodeByteArray(Zg(a),t)},decodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(a):jS(this.decodeStringToByteArray(a,t))},decodeStringToByteArray(a,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<a.length;){const c=i[a.charAt(o++)],_=o<a.length?i[a.charAt(o)]:0;++o;const m=o<a.length?i[a.charAt(o)]:64;++o;const T=o<a.length?i[a.charAt(o)]:64;if(++o,c==null||_==null||m==null||T==null)throw new YS;const b=c<<2|_>>4;if(r.push(b),m!==64){const k=_<<4&240|m>>2;if(r.push(k),T!==64){const L=m<<6&192|T;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class YS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(a){const t=Zg(a);return jf.encodeByteArray(t,!0)},no=function(a){return Wg(a).replace(/\./g,"")},io=function(a){try{return jf.decodeString(a,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(a){return Jg(void 0,a)}function Jg(a,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!FS(i)||(a[i]=Jg(a[i],t[i]));return a}function FS(a){return a!=="__proto__"}/**
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
 */function XS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KS=()=>XS().__FIREBASE_DEFAULTS__,ZS=()=>{if(typeof process>"u"||typeof Bm>"u")return;const a=Bm.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},WS=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=a&&io(a[1]);return t&&JSON.parse(t)},Yf=()=>{try{return VS()||KS()||ZS()||WS()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},$g=a=>{var t,i;return(i=(t=Yf())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[a]},JS=a=>{const t=$g(a);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),r]:[t.substring(0,i),r]},ev=()=>{var a;return(a=Yf())===null||a===void 0?void 0:a.config},tv=a=>{var t;return(t=Yf())===null||t===void 0?void 0:t[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(a){return a.endsWith(".cloudworkstations.dev")}async function nv(a){return(await fetch(a,{credentials:"include"})).ok}/**
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
 */function $S(a,t){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=t||"demo-project",o=a.iat||0,c=a.sub||a.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},a);return[no(JSON.stringify(i)),no(JSON.stringify(h)),""].join(".")}const sr={};function eb(){const a={prod:[],emulator:[]};for(const t of Object.keys(sr))sr[t]?a.emulator.push(t):a.prod.push(t);return a}function tb(a){let t=document.getElementById(a),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",a),i=!0),{created:i,element:t}}let Pm=!1;function iv(a,t){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||sr[a]===t||sr[a]||Pm)return;sr[a]=t;function i(b){return`__firebase__banner__${b}`}const r="__firebase__banner",c=eb().prod.length>0;function h(){const b=document.getElementById(r);b&&b.remove()}function _(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function p(b,k){b.setAttribute("width","24"),b.setAttribute("id",k),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function m(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Pm=!0,h()},b}function y(b,k){b.setAttribute("id",k),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=tb(r),k=i("text"),L=document.getElementById(k)||document.createElement("span"),K=i("learnmore"),$=document.getElementById(K)||document.createElement("a"),Ue=i("preprendIcon"),Oe=document.getElementById(Ue)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const _e=b.element;_(_e),y($,K);const Ge=m();p(Oe,Ue),_e.append(Oe,L,$,Ge),document.body.appendChild(_e)}c?(L.innerText="Preview backend disconnected.",Oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function nb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ib(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sb(){const a=ct();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function ab(){return Kg.NODE_ADMIN===!0}function rb(){try{return typeof indexedDB=="object"}catch{return!1}}function lb(){return new Promise((a,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),a(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="FirebaseError";class mi extends Error{constructor(t,i,r){super(i),this.code=t,this.customData=r,this.name=ob,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(t,i,r){this.service=t,this.serviceName=i,this.errors=r}create(t,...i){const r=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?ub(c,r):"Error",_=`${this.serviceName}: ${h} (${o}).`;return new mi(o,_,r)}}function ub(a,t){return a.replace(cb,(i,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const cb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(a){return JSON.parse(a)}function Pe(a){return JSON.stringify(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=function(a){let t={},i={},r={},o="";try{const c=a.split(".");t=fr(io(c[0])||""),i=fr(io(c[1])||""),o=c[2],r=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:r,signature:o}},fb=function(a){const t=av(a),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},hb=function(a){const t=av(a).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(a,t){return Object.prototype.hasOwnProperty.call(a,t)}function Gs(a,t){if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}function bf(a){for(const t in a)if(Object.prototype.hasOwnProperty.call(a,t))return!1;return!0}function so(a,t,i){const r={};for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=t.call(i,a[o],o,a));return r}function Vi(a,t){if(a===t)return!0;const i=Object.keys(a),r=Object.keys(t);for(const o of i){if(!r.includes(o))return!1;const c=a[o],h=t[o];if(qm(c)&&qm(h)){if(!Vi(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function qm(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(a){const t=[];for(const[i,r]of Object.entries(a))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const r=this.W_;if(typeof t=="string")for(let T=0;T<16;T++)r[T]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let T=0;T<16;T++)r[T]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let T=16;T<80;T++){const b=r[T-3]^r[T-8]^r[T-14]^r[T-16];r[T]=(b<<1|b>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],_=this.chain_[3],p=this.chain_[4],m,y;for(let T=0;T<80;T++){T<40?T<20?(m=_^c&(h^_),y=1518500249):(m=c^h^_,y=1859775393):T<60?(m=c&h|_&(c|h),y=2400959708):(m=c^h^_,y=3395469782);const b=(o<<5|o>>>27)+m+p+y+r[T]&4294967295;p=_,_=h,h=(c<<30|c>>>2)&4294967295,c=o,o=b}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+_&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const r=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[r]=this.chain_[o]>>c&255,++r;return t}}function _b(a,t){const i=new pb(a,t);return i.subscribe.bind(i)}class pb{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,r){let o;if(t===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");mb(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:r},o.next===void 0&&(o.next=of),o.error===void 0&&(o.error=of),o.complete===void 0&&(o.complete=of);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mb(a,t){if(typeof a!="object"||a===null)return!1;for(const i of t)if(i in a&&typeof a[i]=="function")return!0;return!1}function of(){}function Ff(a,t){return`${a} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=function(a){const t=[];let i=0;for(let r=0;r<a.length;r++){let o=a.charCodeAt(r);if(o>=55296&&o<=56319){const c=o-55296;r++,U(r<a.length,"Surrogate pair missing trail surrogate.");const h=a.charCodeAt(r)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Ro=function(a){let t=0;for(let i=0;i<a.length;i++){const r=a.charCodeAt(i);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,i++):t+=3}return t};/**
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
 */function Bt(a){return a&&a._delegate?a._delegate:a}class ji{constructor(t,i,r){this.name=t,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const zi="[DEFAULT]";/**
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
 */class vb{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const r=new wo;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Eb(t))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(t=zi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zi){return this.instances.has(t)}getOptions(t=zi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(c);r===_&&h.resolve(o)}return o}onInit(t,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yb(t),options:i}),this.instances.set(t,r),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zi){return this.component?this.component.multipleInstances?t:zi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yb(a){return a===zi?void 0:a}function Eb(a){return a.instantiationMode==="EAGER"}/**
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
 */class Sb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new vb(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(ve||(ve={}));const bb={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Tb=ve.INFO,Cb={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Ab=(a,t,...i)=>{if(t<a.logLevel)return;const r=new Date().toISOString(),o=Cb[t];if(o)console[o](`[${r}]  ${a.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xf{constructor(t){this.name=t,this._logLevel=Tb,this._logHandler=Ab,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ve))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...t),this._logHandler(this,ve.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...t),this._logHandler(this,ve.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...t),this._logHandler(this,ve.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...t),this._logHandler(this,ve.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...t),this._logHandler(this,ve.ERROR,...t)}}const wb=(a,t)=>t.some(i=>a instanceof i);let Gm,Vm;function Rb(){return Gm||(Gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nb(){return Vm||(Vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rv=new WeakMap,Tf=new WeakMap,lv=new WeakMap,uf=new WeakMap,Kf=new WeakMap;function Ob(a){const t=new Promise((i,r)=>{const o=()=>{a.removeEventListener("success",c),a.removeEventListener("error",h)},c=()=>{i(oi(a.result)),o()},h=()=>{r(a.error),o()};a.addEventListener("success",c),a.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&rv.set(i,a)}).catch(()=>{}),Kf.set(t,a),t}function Db(a){if(Tf.has(a))return;const t=new Promise((i,r)=>{const o=()=>{a.removeEventListener("complete",c),a.removeEventListener("error",h),a.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",c),a.addEventListener("error",h),a.addEventListener("abort",h)});Tf.set(a,t)}let Cf={get(a,t,i){if(a instanceof IDBTransaction){if(t==="done")return Tf.get(a);if(t==="objectStoreNames")return a.objectStoreNames||lv.get(a);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return oi(a[t])},set(a,t,i){return a[t]=i,!0},has(a,t){return a instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in a}};function Mb(a){Cf=a(Cf)}function Ib(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const r=a.call(cf(this),t,...i);return lv.set(r,t.sort?t.sort():[t]),oi(r)}:Nb().includes(a)?function(...t){return a.apply(cf(this),t),oi(rv.get(this))}:function(...t){return oi(a.apply(cf(this),t))}}function xb(a){return typeof a=="function"?Ib(a):(a instanceof IDBTransaction&&Db(a),wb(a,Rb())?new Proxy(a,Cf):a)}function oi(a){if(a instanceof IDBRequest)return Ob(a);if(uf.has(a))return uf.get(a);const t=xb(a);return t!==a&&(uf.set(a,t),Kf.set(t,a)),t}const cf=a=>Kf.get(a);function kb(a,t,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(a,t),_=oi(h);return r&&h.addEventListener("upgradeneeded",p=>{r(oi(h.result),p.oldVersion,p.newVersion,oi(h.transaction),p)}),i&&h.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),_.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),_}const Ub=["get","getKey","getAll","getAllKeys","count"],Lb=["put","add","delete","clear"],ff=new Map;function jm(a,t){if(!(a instanceof IDBDatabase&&!(t in a)&&typeof t=="string"))return;if(ff.get(t))return ff.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,o=Lb.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ub.includes(i)))return;const c=async function(h,..._){const p=this.transaction(h,o?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(_.shift())),(await Promise.all([m[i](..._),o&&p.done]))[0]};return ff.set(t,c),c}Mb(a=>({...a,get:(t,i,r)=>jm(t,i)||a.get(t,i,r),has:(t,i)=>!!jm(t,i)||a.has(t,i)}));/**
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
 */class zb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Hb(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function Hb(a){const t=a.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Af="@firebase/app",Ym="0.13.1";/**
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
 */const Rn=new Xf("@firebase/app"),Bb="@firebase/app-compat",Pb="@firebase/analytics-compat",qb="@firebase/analytics",Gb="@firebase/app-check-compat",Vb="@firebase/app-check",jb="@firebase/auth",Yb="@firebase/auth-compat",Qb="@firebase/database",Fb="@firebase/data-connect",Xb="@firebase/database-compat",Kb="@firebase/functions",Zb="@firebase/functions-compat",Wb="@firebase/installations",Jb="@firebase/installations-compat",$b="@firebase/messaging",eT="@firebase/messaging-compat",tT="@firebase/performance",nT="@firebase/performance-compat",iT="@firebase/remote-config",sT="@firebase/remote-config-compat",aT="@firebase/storage",rT="@firebase/storage-compat",lT="@firebase/firestore",oT="@firebase/ai",uT="@firebase/firestore-compat",cT="firebase",fT="11.9.0";/**
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
 */const wf="[DEFAULT]",hT={[Af]:"fire-core",[Bb]:"fire-core-compat",[qb]:"fire-analytics",[Pb]:"fire-analytics-compat",[Vb]:"fire-app-check",[Gb]:"fire-app-check-compat",[jb]:"fire-auth",[Yb]:"fire-auth-compat",[Qb]:"fire-rtdb",[Fb]:"fire-data-connect",[Xb]:"fire-rtdb-compat",[Kb]:"fire-fn",[Zb]:"fire-fn-compat",[Wb]:"fire-iid",[Jb]:"fire-iid-compat",[$b]:"fire-fcm",[eT]:"fire-fcm-compat",[tT]:"fire-perf",[nT]:"fire-perf-compat",[iT]:"fire-rc",[sT]:"fire-rc-compat",[aT]:"fire-gcs",[rT]:"fire-gcs-compat",[lT]:"fire-fst",[uT]:"fire-fst-compat",[oT]:"fire-vertex","fire-js":"fire-js",[cT]:"fire-js-all"};/**
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
 */const ao=new Map,dT=new Map,Rf=new Map;function Qm(a,t){try{a.container.addComponent(t)}catch(i){Rn.debug(`Component ${t.name} failed to register with FirebaseApp ${a.name}`,i)}}function Vs(a){const t=a.name;if(Rf.has(t))return Rn.debug(`There were multiple attempts to register component ${t}.`),!1;Rf.set(t,a);for(const i of ao.values())Qm(i,a);for(const i of dT.values())Qm(i,a);return!0}function Zf(a,t){const i=a.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),a.container.getProvider(t)}function Vt(a){return a==null?!1:a.settings!==void 0}/**
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
 */const _T={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ui=new Tr("app","Firebase",_T);/**
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
 */class pT{constructor(t,i,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=fT;function ov(a,t={}){let i=a;typeof t!="object"&&(t={name:t});const r=Object.assign({name:wf,automaticDataCollectionEnabled:!0},t),o=r.name;if(typeof o!="string"||!o)throw ui.create("bad-app-name",{appName:String(o)});if(i||(i=ev()),!i)throw ui.create("no-options");const c=ao.get(o);if(c){if(Vi(i,c.options)&&Vi(r,c.config))return c;throw ui.create("duplicate-app",{appName:o})}const h=new Sb(o);for(const p of Rf.values())h.addComponent(p);const _=new pT(i,r,h);return ao.set(o,_),_}function uv(a=wf){const t=ao.get(a);if(!t&&a===wf&&ev())return ov();if(!t)throw ui.create("no-app",{appName:a});return t}function ci(a,t,i){var r;let o=(r=hT[a])!==null&&r!==void 0?r:a;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const _=[`Unable to register library "${o}" with version "${t}":`];c&&_.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&_.push("and"),h&&_.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rn.warn(_.join(" "));return}Vs(new ji(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const mT="firebase-heartbeat-database",gT=1,hr="firebase-heartbeat-store";let hf=null;function cv(){return hf||(hf=kb(mT,gT,{upgrade:(a,t)=>{switch(t){case 0:try{a.createObjectStore(hr)}catch(i){console.warn(i)}}}}).catch(a=>{throw ui.create("idb-open",{originalErrorMessage:a.message})})),hf}async function vT(a){try{const i=(await cv()).transaction(hr),r=await i.objectStore(hr).get(fv(a));return await i.done,r}catch(t){if(t instanceof mi)Rn.warn(t.message);else{const i=ui.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Rn.warn(i.message)}}}async function Fm(a,t){try{const r=(await cv()).transaction(hr,"readwrite");await r.objectStore(hr).put(t,fv(a)),await r.done}catch(i){if(i instanceof mi)Rn.warn(i.message);else{const r=ui.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Rn.warn(r.message)}}}function fv(a){return`${a.name}!${a.options.appId}`}/**
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
 */const yT=1024,ET=30;class ST{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new TT(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Xm();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>ET){const h=CT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Xm(),{heartbeatsToSend:r,unsentEntries:o}=bT(this._heartbeatsCache.heartbeats),c=no(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Rn.warn(i),""}}}function Xm(){return new Date().toISOString().substring(0,10)}function bT(a,t=yT){const i=[];let r=a.slice();for(const o of a){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Km(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Km(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class TT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rb()?lb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await vT(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Km(a){return no(JSON.stringify({version:2,heartbeats:a})).length}function CT(a){if(a.length===0)return-1;let t=0,i=a[0].date;for(let r=1;r<a.length;r++)a[r].date<i&&(i=a[r].date,t=r);return t}/**
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
 */function AT(a){Vs(new ji("platform-logger",t=>new zb(t),"PRIVATE")),Vs(new ji("heartbeat",t=>new ST(t),"PRIVATE")),ci(Af,Ym,a),ci(Af,Ym,"esm2017"),ci("fire-js","")}AT("");var wT="firebase",RT="11.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci(wT,RT,"app");function Wf(a,t){var i={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(i[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(a);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(i[r[o]]=a[r[o]]);return i}function hv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NT=hv,dv=new Tr("auth","Firebase",hv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Xf("@firebase/auth");function OT(a,...t){ro.logLevel<=ve.WARN&&ro.warn(`Auth (${Zs}): ${a}`,...t)}function Wl(a,...t){ro.logLevel<=ve.ERROR&&ro.error(`Auth (${Zs}): ${a}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(a,...t){throw $f(a,...t)}function Xt(a,...t){return $f(a,...t)}function Jf(a,t,i){const r=Object.assign(Object.assign({},NT()),{[t]:i});return new Tr("auth","Firebase",r).create(t,{appName:a.name})}function Gi(a){return Jf(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DT(a,t,i){const r=i;if(!(t instanceof r))throw r.name!==t.constructor.name&&sn(a,"argument-error"),Jf(a,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $f(a,...t){if(typeof a!="string"){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=a.name),a._errorFactory.create(i,...r)}return dv.create(a,...t)}function X(a,t,...i){if(!a)throw $f(t,...i)}function Tn(a){const t="INTERNAL ASSERTION FAILED: "+a;throw Wl(t),new Error(t)}function Nn(a,t){a||Tn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.href)||""}function MT(){return Zm()==="http:"||Zm()==="https:"}function Zm(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MT()||ib()||"connection"in navigator)?navigator.onLine:!0}function xT(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,i){this.shortDelay=t,this.longDelay=i,Nn(i>t,"Short delay should be less than long delay!"),this.isMobile=Qf()||sv()}get(){return IT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(a,t){Nn(a.emulator,"Emulator should always be set here");const{url:i}=a.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{static initialize(t,i,r){this.fetchImpl=t,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LT=new Cr(3e4,6e4);function th(a,t){return a.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:a.tenantId}):t}async function Ws(a,t,i,r,o={}){return pv(a,o,async()=>{let c={},h={};r&&(t==="GET"?h=r:c={body:JSON.stringify(r)});const _=Ks(Object.assign({key:a.config.apiKey},h)).slice(1),p=await a._getAdditionalHeaders();p["Content-Type"]="application/json",a.languageCode&&(p["X-Firebase-Locale"]=a.languageCode);const m=Object.assign({method:t,headers:p},c);return nb()||(m.referrerPolicy="no-referrer"),a.emulatorConfig&&br(a.emulatorConfig.host)&&(m.credentials="include"),_v.fetch()(await mv(a,a.config.apiHost,i,_),m)})}async function pv(a,t,i){a._canInitEmulator=!1;const r=Object.assign(Object.assign({},kT),t);try{const o=new HT(a),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Xl(a,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const _=c.ok?h.errorMessage:h.error.message,[p,m]=_.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(a,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Xl(a,"email-already-in-use",h);if(p==="USER_DISABLED")throw Xl(a,"user-disabled",h);const y=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Jf(a,y,m);sn(a,y)}}catch(o){if(o instanceof mi)throw o;sn(a,"network-request-failed",{message:String(o)})}}async function zT(a,t,i,r,o={}){const c=await Ws(a,t,i,r,o);return"mfaPendingCredential"in c&&sn(a,"multi-factor-auth-required",{_serverResponse:c}),c}async function mv(a,t,i,r){const o=`${t}${i}?${r}`,c=a,h=c.config.emulator?eh(a.config,o):`${a.config.apiScheme}://${o}`;return UT.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class HT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),LT.get())})}}function Xl(a,t,i){const r={appName:a.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=Xt(a,t,r);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(a,t){return Ws(a,"POST","/v1/accounts:delete",t)}async function lo(a,t){return Ws(a,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(a){if(a)try{const t=new Date(Number(a));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function PT(a,t=!1){const i=Bt(a),r=await i.getIdToken(t),o=nh(r);X(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:ar(df(o.auth_time)),issuedAtTime:ar(df(o.iat)),expirationTime:ar(df(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function df(a){return Number(a)*1e3}function nh(a){const[t,i,r]=a.split(".");if(t===void 0||i===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const o=io(i);return o?JSON.parse(o):(Wl("Failed to decode base64 JWT payload"),null)}catch(o){return Wl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wm(a){const t=nh(a);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(a,t,i=!1){if(i)return t;try{return await t}catch(r){throw r instanceof mi&&qT(r)&&a.auth.currentUser===a&&await a.auth.signOut(),r}}function qT({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oo(a){var t;const i=a.auth,r=await a.getIdToken(),o=await dr(a,lo(i,{idToken:r}));X(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];a._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?gv(c.providerUserInfo):[],_=jT(a.providerData,h),p=a.isAnonymous,m=!(a.email&&c.passwordHash)&&!(_!=null&&_.length),y=p?m:!1,T={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:_,metadata:new Of(c.createdAt,c.lastLoginAt),isAnonymous:y};Object.assign(a,T)}async function VT(a){const t=Bt(a);await oo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function jT(a,t){return[...a.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function gv(a){return a.map(t=>{var{providerId:i}=t,r=Wf(t,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(a,t){const i=await pv(a,{},async()=>{const r=Ks({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=a.config,h=await mv(a,o,"/v1/token",`key=${c}`),_=await a._getAdditionalHeaders();return _["Content-Type"]="application/x-www-form-urlencoded",_v.fetch()(h,{method:"POST",headers:_,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function QT(a,t){return Ws(a,"POST","/v2/accounts:revokeToken",th(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){X(t.length!==0,"internal-error");const i=Wm(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await YT(t,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(t,i,r){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new zs;return r&&(X(typeof r=="string","internal-error",{appName:t}),h.refreshToken=r),o&&(X(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(X(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(a,t){X(typeof a=="string"||typeof a>"u","internal-error",{appName:t})}class Yt{constructor(t){var{uid:i,auth:r,stsTokenManager:o}=t,c=Wf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Of(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await dr(this,this.stsTokenManager.getToken(this.auth,t));return X(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return PT(this,t)}reload(){return VT(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Yt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),i&&await oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Gi(this.auth));const t=await this.getIdToken();return await dr(this,BT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var r,o,c,h,_,p,m,y;const T=(r=i.displayName)!==null&&r!==void 0?r:void 0,b=(o=i.email)!==null&&o!==void 0?o:void 0,k=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,L=(h=i.photoURL)!==null&&h!==void 0?h:void 0,K=(_=i.tenantId)!==null&&_!==void 0?_:void 0,$=(p=i._redirectEventId)!==null&&p!==void 0?p:void 0,Ue=(m=i.createdAt)!==null&&m!==void 0?m:void 0,Oe=(y=i.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:_e,emailVerified:Ge,isAnonymous:re,providerData:Ze,stsTokenManager:et}=i;X(_e&&et,t,"internal-error");const lt=zs.fromJSON(this.name,et);X(typeof _e=="string",t,"internal-error"),si(T,t.name),si(b,t.name),X(typeof Ge=="boolean",t,"internal-error"),X(typeof re=="boolean",t,"internal-error"),si(k,t.name),si(L,t.name),si(K,t.name),si($,t.name),si(Ue,t.name),si(Oe,t.name);const ft=new Yt({uid:_e,auth:t,email:b,emailVerified:Ge,displayName:T,isAnonymous:re,photoURL:L,phoneNumber:k,tenantId:K,stsTokenManager:lt,createdAt:Ue,lastLoginAt:Oe});return Ze&&Array.isArray(Ze)&&(ft.providerData=Ze.map(In=>Object.assign({},In))),$&&(ft._redirectEventId=$),ft}static async _fromIdTokenResponse(t,i,r=!1){const o=new zs;o.updateFromServerResponse(i);const c=new Yt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await oo(c),c}static async _fromGetAccountInfoResponse(t,i,r){const o=i.users[0];X(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?gv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),_=new zs;_.updateFromIdToken(r);const p=new Yt({uid:o.localId,auth:t,stsTokenManager:_,isAnonymous:h}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Of(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Map;function Cn(a){Nn(a instanceof Function,"Expected a class definition");let t=Jm.get(a);return t?(Nn(t instanceof a,"Instance stored in cache mismatched with class"),t):(t=new a,Jm.set(a,t),t)}/**
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
 */class vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}vv.type="NONE";const $m=vv;/**
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
 */function Jl(a,t,i){return`firebase:${a}:${t}:${i}`}class Hs{constructor(t,i,r){this.persistence=t,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Jl(this.userKey,o.apiKey,c),this.fullPersistenceKey=Jl("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await lo(this.auth,{idToken:t}).catch(()=>{});return i?Yt._fromGetAccountInfoResponse(this.auth,i,t):null}return Yt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,r="authUser"){if(!i.length)return new Hs(Cn($m),t,r);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=o[0]||Cn($m);const h=Jl(r,t.config.apiKey,t.name);let _=null;for(const m of i)try{const y=await m._get(h);if(y){let T;if(typeof y=="string"){const b=await lo(t,{idToken:y}).catch(()=>{});if(!b)break;T=await Yt._fromGetAccountInfoResponse(t,b,y)}else T=Yt._fromJSON(t,y);m!==c&&(_=T),c=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Hs(c,t,r):(c=p[0],_&&await c._set(h,_.toJSON()),await Promise.all(i.map(async m=>{if(m!==c)try{await m._remove(h)}catch{}})),new Hs(c,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(a){const t=a.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cv(t))return"Blackberry";if(Av(t))return"Webos";if(Ev(t))return"Safari";if((t.includes("chrome/")||Sv(t))&&!t.includes("edge/"))return"Chrome";if(Tv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=a.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yv(a=ct()){return/firefox\//i.test(a)}function Ev(a=ct()){const t=a.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Sv(a=ct()){return/crios\//i.test(a)}function bv(a=ct()){return/iemobile/i.test(a)}function Tv(a=ct()){return/android/i.test(a)}function Cv(a=ct()){return/blackberry/i.test(a)}function Av(a=ct()){return/webos/i.test(a)}function ih(a=ct()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function FT(a=ct()){var t;return ih(a)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function XT(){return sb()&&document.documentMode===10}function wv(a=ct()){return ih(a)||Tv(a)||Av(a)||Cv(a)||/windows phone/i.test(a)||bv(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(a,t=[]){let i;switch(a){case"Browser":i=eg(ct());break;case"Worker":i=`${eg(ct())}-${a}`;break;default:i=a}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Zs}/${r}`}/**
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
 */class KT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const r=c=>new Promise((h,_)=>{try{const p=t(c);h(p)}catch(p){_(p)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const r of this.queue)await r(t),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZT(a,t={}){return Ws(a,"GET","/v2/passwordPolicy",th(a,t))}/**
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
 */const WT=6;class JT{constructor(t){var i,r,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:WT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,r,o,c,h,_;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(i=p.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(_=p.containsNonAlphanumericCharacter)!==null&&_!==void 0?_:!0),p}validatePasswordLengthOptions(t,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=t.length>=r),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(t,i,r,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tg(this),this.idTokenSubscription=new tg(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Cn(i)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await lo(this,{idToken:t}),r=await Yt._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Vt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(_=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(_,_))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,_=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!h||h===_)&&(p!=null&&p.user)&&(o=p.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await oo(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Vt(this.app))return Promise.reject(Gi(this));const i=t?Bt(t):null;return i&&X(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Vt(this.app)?Promise.reject(Gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ZT(this),i=new JT(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Tr("auth","Firebase",t())}onAuthStateChanged(t,i,r){return this.registerStateListener(this.authStateSubscription,t,i,r)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,r){return this.registerStateListener(this.idTokenSubscription,t,i,r)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await QT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const r=await this.getOrInitRedirectPersistenceManager(i);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Cn(t)||this._popupRedirectResolver;X(i,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Cn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(_,this,"internal-error"),_.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const p=t.addObserver(i,r,o);return()=>{h=!0,p()}}else{const p=t.addObserver(i);return()=>{h=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&OT(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function No(a){return Bt(a)}class tg{constructor(t){this.auth=t,this.observer=null,this.addObserver=_b(i=>this.observer=i)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function e1(a){sh=a}function t1(a){return sh.loadJS(a)}function n1(){return sh.gapiScript}function i1(a){return`__${a}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(a,t){const i=Zf(a,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Vi(c,t??{}))return o;sn(o,"already-initialized")}return i.initialize({options:t})}function a1(a,t){const i=(t==null?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Cn);t!=null&&t.errorMap&&a._updateErrorMap(t.errorMap),a._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function r1(a,t,i){const r=No(a);X(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,c=Nv(t),{host:h,port:_}=l1(t),p=_===null?"":`:${_}`,m={url:`${c}//${h}${p}/`},y=Object.freeze({host:h,port:_,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Vi(m,r.config.emulator)&&Vi(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,br(h)?(nv(`${c}//${h}${p}`),iv("Auth",!0)):o1()}function Nv(a){const t=a.indexOf(":");return t<0?"":a.substr(0,t+1)}function l1(a){const t=Nv(a),i=/(\/\/)?([^?#/]+)/.exec(a.substr(t.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:ng(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:ng(h)}}}function ng(a){if(!a)return null;const t=Number(a);return isNaN(t)?null:t}function o1(){function a(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Tn("not implemented")}_getIdTokenResponse(t){return Tn("not implemented")}_linkToIdToken(t,i){return Tn("not implemented")}_getReauthenticationResolver(t){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(a,t){return zT(a,"POST","/v1/accounts:signInWithIdp",th(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="http://localhost";class Yi extends Ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Yi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):sn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=i,c=Wf(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new Yi(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Bs(t,i)}_linkToIdToken(t,i){const r=this.buildRequest();return r.idToken=i,Bs(t,r)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Bs(t,i)}buildRequest(){const t={requestUri:u1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Ks(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ar extends ah{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Ar{constructor(){super("facebook.com")}static credential(t){return Yi._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ai.credentialFromTaggedObject(t)}static credentialFromError(t){return ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ai.credential(t.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ar{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Yi._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:r}=t;if(!i&&!r)return null;try{return bn.credential(i,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ar{constructor(){super("github.com")}static credential(t){return Yi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ri.credentialFromTaggedObject(t)}static credentialFromError(t){return ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ri.credential(t.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Ar{constructor(){super("twitter.com")}static credential(t,i){return Yi._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return li.credentialFromTaggedObject(t)}static credentialFromError(t){return li.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=t;if(!i||!r)return null;try{return li.credential(i,r)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,r,o=!1){const c=await Yt._fromIdTokenResponse(t,r,o),h=ig(r);return new js({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(t,i,r){await t._updateTokensIfNecessary(r,!0);const o=ig(r);return new js({user:t,providerId:o,_tokenResponse:r,operationType:i})}}function ig(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends mi{constructor(t,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,uo.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,i,r,o){return new uo(t,i,r,o)}}function Dv(a,t,i,r){return(t==="reauthenticate"?i._getReauthenticationResolver(a):i._getIdTokenResponse(a)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?uo._fromErrorAndOperation(a,c,t,r):c})}async function c1(a,t,i=!1){const r=await dr(a,t._linkToIdToken(a.auth,await a.getIdToken()),i);return js._forOperation(a,"link",r)}/**
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
 */async function f1(a,t,i=!1){const{auth:r}=a;if(Vt(r.app))return Promise.reject(Gi(r));const o="reauthenticate";try{const c=await dr(a,Dv(r,o,t,a),i);X(c.idToken,r,"internal-error");const h=nh(c.idToken);X(h,r,"internal-error");const{sub:_}=h;return X(a.uid===_,r,"user-mismatch"),js._forOperation(a,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(a,t,i=!1){if(Vt(a.app))return Promise.reject(Gi(a));const r="signIn",o=await Dv(a,r,t),c=await js._fromIdTokenResponse(a,r,o);return i||await a._updateCurrentUser(c.user),c}function d1(a,t,i,r){return Bt(a).onIdTokenChanged(t,i,r)}function _1(a,t,i){return Bt(a).beforeAuthStateChanged(t,i)}const co="__sak";/**
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
 */class Mv{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=1e3,m1=10;class Iv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&t(i,o,r)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,_,p)=>{this.notifyListeners(h,p)});return}const r=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);XT()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,m1):o()}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:r}),!0)})},p1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}Iv.type="LOCAL";const g1=Iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}xv.type="SESSION";const kv=xv;/**
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
 */function v1(a){return Promise.all(a.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Oo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const r=new Oo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const _=Array.from(h).map(async m=>m(i.origin,c)),p=await v1(_);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(a="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(Math.random()*10);return a+i}/**
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
 */class y1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((_,p)=>{const m=rh("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(T){const b=T;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),_(b.data.response);break;default:clearTimeout(y),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function E1(a){nn().location.href=a}/**
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
 */function Uv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function S1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b1(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)===null||a===void 0?void 0:a.controller)||null}function T1(){return Uv()?self:null}/**
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
 */const Lv="firebaseLocalStorageDb",C1=1,fo="firebaseLocalStorage",zv="fbase_key";class wr{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Do(a,t){return a.transaction([fo],t?"readwrite":"readonly").objectStore(fo)}function A1(){const a=indexedDB.deleteDatabase(Lv);return new wr(a).toPromise()}function Df(){const a=indexedDB.open(Lv,C1);return new Promise((t,i)=>{a.addEventListener("error",()=>{i(a.error)}),a.addEventListener("upgradeneeded",()=>{const r=a.result;try{r.createObjectStore(fo,{keyPath:zv})}catch(o){i(o)}}),a.addEventListener("success",async()=>{const r=a.result;r.objectStoreNames.contains(fo)?t(r):(r.close(),await A1(),t(await Df()))})})}async function sg(a,t,i){const r=Do(a,!0).put({[zv]:t,value:i});return new wr(r).toPromise()}async function w1(a,t){const i=Do(a,!1).get(t),r=await new wr(i).toPromise();return r===void 0?null:r.value}function ag(a,t){const i=Do(a,!0).delete(t);return new wr(i).toPromise()}const R1=800,N1=3;class Hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(t){let i=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(i++>N1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oo._getInstance(T1()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await S1(),!this.activeServiceWorker)return;this.sender=new y1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||b1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Df();return await sg(t,co,"1"),await ag(t,co),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>sg(r,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(r=>w1(r,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ag(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Do(o,!1).getAll();return new wr(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hv.type="LOCAL";const O1=Hv;new Cr(3e4,6e4);/**
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
 */function Bv(a,t){return t?Cn(t):(X(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
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
 */class lh extends Ov{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Bs(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Bs(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Bs(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function D1(a){return h1(a.auth,new lh(a),a.bypassAuthState)}function M1(a){const{auth:t,user:i}=a;return X(i,t,"internal-error"),f1(i,new lh(a),a.bypassAuthState)}async function I1(a){const{auth:t,user:i}=a;return X(i,t,"internal-error"),c1(i,new lh(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t,i,r,o,c=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:_}=t;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(_)(p))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return D1;case"linkViaPopup":case"linkViaRedirect":return I1;case"reauthViaPopup":case"reauthViaRedirect":return M1;default:sn(this.auth,"internal-error")}}resolve(t){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Cr(2e3,1e4);async function k1(a,t,i){if(Vt(a.app))return Promise.reject(Xt(a,"operation-not-supported-in-this-environment"));const r=No(a);DT(a,t,ah);const o=Bv(r,i);return new Bi(r,"signInViaPopup",t,o).executeNotNull()}class Bi extends Pv{constructor(t,i,r,o,c){super(t,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const t=rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,x1.get())};t()}}Bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="pendingRedirect",$l=new Map;class L1 extends Pv{constructor(t,i,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let t=$l.get(this.auth._key());if(!t){try{const r=await z1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(i){t=()=>Promise.reject(i)}$l.set(this.auth._key(),t)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z1(a,t){const i=P1(t),r=B1(a);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function H1(a,t){$l.set(a._key(),t)}function B1(a){return Cn(a._redirectPersistence)}function P1(a){return Jl(U1,a.config.apiKey,a.name)}async function q1(a,t,i=!1){if(Vt(a.app))return Promise.reject(Gi(a));const r=No(a),o=Bv(r,t),h=await new L1(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=10*60*1e3;class V1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(i=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!j1(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var r;if(t.error&&!qv(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(Xt(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const r=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=G1&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(t))}saveEventToCache(t){this.cachedEventUids.add(rg(t)),this.lastProcessedEventTime=Date.now()}}function rg(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(t=>t).join("-")}function qv({type:a,error:t}){return a==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function j1(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(a,t={}){return Ws(a,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F1=/^https?/;async function X1(a){if(a.config.emulator)return;const{authorizedDomains:t}=await Y1(a);for(const i of t)try{if(K1(i))return}catch{}sn(a,"unauthorized-domain")}function K1(a){const t=Nf(),{protocol:i,hostname:r}=new URL(t);if(a.startsWith("chrome-extension://")){const h=new URL(a);return h.hostname===""&&r===""?i==="chrome-extension:"&&a.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!F1.test(i))return!1;if(Q1.test(a))return r===a;const o=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const Z1=new Cr(3e4,6e4);function lg(){const a=nn().___jsl;if(a!=null&&a.H){for(const t of Object.keys(a.H))if(a.H[t].r=a.H[t].r||[],a.H[t].L=a.H[t].L||[],a.H[t].r=[...a.H[t].L],a.CP)for(let i=0;i<a.CP.length;i++)a.CP[i]=null}}function W1(a){return new Promise((t,i)=>{var r,o,c;function h(){lg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lg(),i(Xt(a,"network-request-failed"))},timeout:Z1.get()})}if(!((o=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=nn().gapi)===null||c===void 0)&&c.load)h();else{const _=i1("iframefcb");return nn()[_]=()=>{gapi.load?h():i(Xt(a,"network-request-failed"))},t1(`${n1()}?onload=${_}`).catch(p=>i(p))}}).catch(t=>{throw eo=null,t})}let eo=null;function J1(a){return eo=eo||W1(a),eo}/**
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
 */const $1=new Cr(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sC(a){const t=a.config;X(t.authDomain,a,"auth-domain-config-required");const i=t.emulator?eh(t,tC):`https://${a.config.authDomain}/${eC}`,r={apiKey:t.apiKey,appName:a.name,v:Zs},o=iC.get(a.config.apiHost);o&&(r.eid=o);const c=a._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${Ks(r).slice(1)}`}async function aC(a){const t=await J1(a),i=nn().gapi;return X(i,a,"internal-error"),t.open({where:document.body,url:sC(a),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=Xt(a,"network-request-failed"),_=nn().setTimeout(()=>{c(h)},$1.get());function p(){nn().clearTimeout(_),o(r)}r.ping(p).then(p,()=>{c(h)})}))}/**
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
 */const rC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lC=500,oC=600,uC="_blank",cC="http://localhost";class og{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fC(a,t,i,r=lC,o=oC){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let _="";const p=Object.assign(Object.assign({},rC),{width:r.toString(),height:o.toString(),top:c,left:h}),m=ct().toLowerCase();i&&(_=Sv(m)?uC:i),yv(m)&&(t=t||cC,p.scrollbars="yes");const y=Object.entries(p).reduce((b,[k,L])=>`${b}${k}=${L},`,"");if(FT(m)&&_!=="_self")return hC(t||"",_),new og(null);const T=window.open(t||"",_,y);X(T,a,"popup-blocked");try{T.focus()}catch{}return new og(T)}function hC(a,t){const i=document.createElement("a");i.href=a,i.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const dC="__/auth/handler",_C="emulator/auth/handler",pC=encodeURIComponent("fac");async function ug(a,t,i,r,o,c){X(a.config.authDomain,a,"auth-domain-config-required"),X(a.config.apiKey,a,"invalid-api-key");const h={apiKey:a.config.apiKey,appName:a.name,authType:i,redirectUrl:r,v:Zs,eventId:o};if(t instanceof ah){t.setDefaultLanguage(a.languageCode),h.providerId=t.providerId||"",bf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,T]of Object.entries({}))h[y]=T}if(t instanceof Ar){const y=t.getScopes().filter(T=>T!=="");y.length>0&&(h.scopes=y.join(","))}a.tenantId&&(h.tid=a.tenantId);const _=h;for(const y of Object.keys(_))_[y]===void 0&&delete _[y];const p=await a._getAppCheckToken(),m=p?`#${pC}=${encodeURIComponent(p)}`:"";return`${mC(a)}?${Ks(_).slice(1)}${m}`}function mC({config:a}){return a.emulator?eh(a,_C):`https://${a.authDomain}/${dC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="webStorageSupport";class gC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kv,this._completeRedirectFn=q1,this._overrideRedirectResult=H1}async _openPopup(t,i,r,o){var c;Nn((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await ug(t,i,r,Nf(),o);return fC(t,h,rh())}async _openRedirect(t,i,r,o){await this._originValidation(t);const c=await ug(t,i,r,Nf(),o);return E1(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Nn(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(t);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(t){const i=await aC(t),r=new V1(t);return i.register("authEvent",o=>(X(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=i,r}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(_f,{type:_f},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[_f];h!==void 0&&i(!!h),sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=X1(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return wv()||Ev()||ih()}}const vC=gC;var cg="@firebase/auth",fg="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SC(a){Vs(new ji("auth",(t,{options:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:_}=r.options;X(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:h,authDomain:_,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(a)},m=new $T(r,o,c,p);return a1(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,r)=>{t.getProvider("auth-internal").initialize()})),Vs(new ji("auth-internal",t=>{const i=No(t.getProvider("auth").getImmediate());return(r=>new yC(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(cg,fg,EC(a)),ci(cg,fg,"esm2017")}/**
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
 */const bC=5*60,TC=tv("authIdTokenMaxAge")||bC;let hg=null;const CC=a=>async t=>{const i=t&&await t.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>TC)return;const o=i==null?void 0:i.token;hg!==o&&(hg=o,await fetch(a,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Gv(a=uv()){const t=Zf(a,"auth");if(t.isInitialized())return t.getImmediate();const i=s1(a,{popupRedirectResolver:vC,persistence:[O1,g1,kv]}),r=tv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=CC(c.toString());_1(i,h,()=>h(i.currentUser)),d1(i,_=>h(_))}}const o=$g("auth");return o&&r1(i,`http://${o}`),i}function AC(){var a,t;return(t=(a=document.getElementsByTagName("head"))===null||a===void 0?void 0:a[0])!==null&&t!==void 0?t:document}e1({loadJS(a){return new Promise((t,i)=>{const r=document.createElement("script");r.setAttribute("src",a),r.onload=t,r.onerror=o=>{const c=Xt("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",AC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SC("Browser");var dg={};const _g="@firebase/database",pg="1.0.19";/**
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
 */let Vv="";function wC(a){Vv=a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Pe(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:fr(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return Dn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const t=window[a];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new RC(t)}}catch{}return new NC},Pi=jv("localStorage"),OC=jv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Xf("@firebase/database"),DC=function(){let a=1;return function(){return a++}}(),Yv=function(a){const t=gb(a),i=new db;i.update(t);const r=i.digest();return jf.encodeByteArray(r)},Rr=function(...a){let t="";for(let i=0;i<a.length;i++){const r=a[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Rr.apply(null,r):typeof r=="object"?t+=Pe(r):t+=r,t+=" "}return t};let rr=null,mg=!0;const MC=function(a,t){U(!0,"Can't turn on custom loggers persistently."),Ps.logLevel=ve.VERBOSE,rr=Ps.log.bind(Ps)},rt=function(...a){if(mg===!0&&(mg=!1,rr===null&&OC.get("logging_enabled")===!0&&MC()),rr){const t=Rr.apply(null,a);rr(t)}},Nr=function(a){return function(...t){rt(a,...t)}},Mf=function(...a){const t="FIREBASE INTERNAL ERROR: "+Rr(...a);Ps.error(t)},On=function(...a){const t=`FIREBASE FATAL ERROR: ${Rr(...a)}`;throw Ps.error(t),new Error(t)},vt=function(...a){const t="FIREBASE WARNING: "+Rr(...a);Ps.warn(t)},IC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qv=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},xC=function(a){if(document.readyState==="complete")a();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},Ys="[MIN_NAME]",Qi="[MAX_NAME]",Js=function(a,t){if(a===t)return 0;if(a===Ys||t===Qi)return-1;if(t===Ys||a===Qi)return 1;{const i=gg(a),r=gg(t);return i!==null?r!==null?i-r===0?a.length-t.length:i-r:-1:r!==null?1:a<t?-1:1}},kC=function(a,t){return a===t?0:a<t?-1:1},er=function(a,t){if(t&&a in t)return t[a];throw new Error("Missing required key ("+a+") in object: "+Pe(t))},oh=function(a){if(typeof a!="object"||a===null)return Pe(a);const t=[];for(const r in a)t.push(r);t.sort();let i="{";for(let r=0;r<t.length;r++)r!==0&&(i+=","),i+=Pe(t[r]),i+=":",i+=oh(a[t[r]]);return i+="}",i},Fv=function(a,t){const i=a.length;if(i<=t)return[a];const r=[];for(let o=0;o<i;o+=t)o+t>i?r.push(a.substring(o,i)):r.push(a.substring(o,o+t));return r};function yt(a,t){for(const i in a)a.hasOwnProperty(i)&&t(i,a[i])}const Xv=function(a){U(!Qv(a),"Invalid JSON number");const t=11,i=52,r=(1<<t-1)-1;let o,c,h,_,p;a===0?(c=0,h=0,o=1/a===-1/0?1:0):(o=a<0,a=Math.abs(a),a>=Math.pow(2,1-r)?(_=Math.min(Math.floor(Math.log(a)/Math.LN2),r),c=_+r,h=Math.round(a*Math.pow(2,i-_)-Math.pow(2,i))):(c=0,h=Math.round(a/Math.pow(2,1-r-i))));const m=[];for(p=i;p;p-=1)m.push(h%2?1:0),h=Math.floor(h/2);for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);m.push(o?1:0),m.reverse();const y=m.join("");let T="";for(p=0;p<64;p+=8){let b=parseInt(y.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},UC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zC(a,t){let i="Unknown Error";a==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?i="Client doesn't have permission to access the desired data.":a==="unavailable"&&(i="The service is unavailable");const r=new Error(a+" at "+t._path.toString()+": "+i);return r.code=a.toUpperCase(),r}const HC=new RegExp("^-?(0*)\\d{1,10}$"),BC=-2147483648,PC=2147483647,gg=function(a){if(HC.test(a)){const t=Number(a);if(t>=BC&&t<=PC)return t}return null},$s=function(a){try{a()}catch(t){setTimeout(()=>{const i=t.stack||"";throw vt("Exception was thrown by user callback.",i),t},Math.floor(0))}},qC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lr=function(a,t){const i=setTimeout(a,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
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
 */class GC{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Vt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(t,i,r){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(t)}}class to{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}to.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="5",Kv="v",Zv="s",Wv="r",Jv="f",$v=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ey="ls",ty="p",If="ac",ny="websocket",iy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,i,r,o,c=!1,h="",_=!1,p=!1,m=null){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=_,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Pi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function jC(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function ay(a,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let r;if(t===ny)r=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(t===iy)r=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);jC(a)&&(i.ns=a.namespace);const o=[];return yt(i,(c,h)=>{o.push(c+"="+h)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.counters_={}}incrementCounter(t,i=1){Dn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return QS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={},mf={};function ch(a){const t=a.toString();return pf[t]||(pf[t]=new YC),pf[t]}function QC(a,t){const i=a.toString();return mf[i]||(mf[i]=t()),mf[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&$s(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="start",XC="close",KC="pLPCommand",ZC="pRTLPCB",ry="id",ly="pw",oy="ser",WC="cb",JC="seg",$C="ts",eA="d",tA="dframe",uy=1870,cy=30,nA=uy-cy,iA=25e3,sA=3e4;class Ls{constructor(t,i,r,o,c,h,_){this.connId=t,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=_,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nr(t),this.stats_=ch(i),this.urlFn=p=>(this.appCheckToken&&(p[If]=this.appCheckToken),ay(i,iy,p))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new FC(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sA)),xC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fh((...c)=>{const[h,_,p,m,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===vg)this.id=_,this.password=p;else if(h===XC)_?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(_,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,_]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,_)},()=>{this.onClosed_()},this.urlFn);const r={};r[vg]="t",r[oy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Kv]=uh,this.transportSessionId&&(r[Zv]=this.transportSessionId),this.lastSessionId&&(r[ey]=this.lastSessionId),this.applicationId&&(r[ty]=this.applicationId),this.appCheckToken&&(r[If]=this.appCheckToken),typeof location<"u"&&location.hostname&&$v.test(location.hostname)&&(r[Wv]=Jv);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ls.forceAllow_=!0}static forceDisallow(){Ls.forceDisallow_=!0}static isAvailable(){return Ls.forceAllow_?!0:!Ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UC()&&!LC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=Pe(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Wg(i),o=Fv(r,nA);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[tA]="t",r[ry]=t,r[ly]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=Pe(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class fh{constructor(t,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=DC(),window[KC+this.uniqueCallbackIdentifier]=t,window[ZC+this.uniqueCallbackIdentifier]=i,this.myIFrame=fh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(_){rt("frame writing exception"),_.stack&&rt(_.stack),rt(_)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[ry]=this.myID,t[ly]=this.myPW,t[oy]=this.currentSerial;let i=this.urlFn(t),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cy+r.length<=uy;){const h=this.pendingSegs.shift();r=r+"&"+JC+o+"="+h.seg+"&"+$C+o+"="+h.ts+"&"+eA+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,r){this.pendingSegs.push({seg:t,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(iA)),c=()=>{clearTimeout(o),r()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{rt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=16384,rA=45e3;let ho=null;typeof MozWebSocket<"u"?ho=MozWebSocket:typeof WebSocket<"u"&&(ho=WebSocket);class jt{constructor(t,i,r,o,c,h,_){this.connId=t,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nr(this.connId),this.stats_=ch(i),this.connURL=jt.connectionURL_(i,h,_,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,r,o,c){const h={};return h[Kv]=uh,typeof location<"u"&&location.hostname&&$v.test(location.hostname)&&(h[Wv]=Jv),i&&(h[Zv]=i),r&&(h[ey]=r),o&&(h[If]=o),c&&(h[ty]=c),ay(t,ny,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pi.set("previous_websocket_failure",!0);try{let r;ab(),this.mySock=new ho(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&ho!==null&&!jt.forceDisallow_}static previouslyFailed(){return Pi.isInMemoryStorage||Pi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=fr(i);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const i=Pe(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Fv(i,aA);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rA))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jt.responsesRequiredToBeHealthy=2;jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static get ALL_TRANSPORTS(){return[Ls,jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=jt&&jt.isAvailable();let r=i&&!jt.previouslyFailed();if(t.webSocketOnly&&(i||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[jt];else{const o=this.transports_=[];for(const c of _r.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);_r.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_r.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=6e4,oA=5e3,uA=10*1024,cA=100*1024,gf="t",yg="d",fA="s",Eg="r",hA="e",Sg="o",bg="a",Tg="n",Cg="p",dA="h";class _A{constructor(t,i,r,o,c,h,_,p,m,y){this.id=t,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=_,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nr("c:"+this.id+":"),this.transportManager_=new _r(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=lr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(gf in t){const i=t[gf];i===bg?this.upgradeIfSecondaryHealthy_():i===Eg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Sg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=er("t",t),r=er("d",t);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=er("t",t),r=er("d",t);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=er(gf,t);if(yg in t){const r=t[yg];if(i===dA){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Tg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===fA?this.onConnectionShutdown_(r):i===Eg?this.onReset_(r):i===hA?Mf("Server Error: "+r):i===Sg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,r=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),uh!==r&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),lr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lA))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cg,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{put(t,i,r,o){}merge(t,i,r,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,r){}onDisconnectMerge(t,i,r){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(t,i,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:r});const o=this.getInitialEvent(t);o&&i.apply(r,o)}off(t,i,r){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!r||r===o[c].context)){o.splice(c,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends hy{static getInstance(){return new _o}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=32,wg=768;class Se{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function ce(){return new Se("")}function ae(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function di(a){return a.pieces_.length-a.pieceNum_}function Te(a){let t=a.pieceNum_;return t<a.pieces_.length&&t++,new Se(a.pieces_,t)}function dy(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function pA(a){let t="";for(let i=a.pieceNum_;i<a.pieces_.length;i++)a.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(a.pieces_[i])));return t||"/"}function _y(a,t=0){return a.pieces_.slice(a.pieceNum_+t)}function py(a){if(a.pieceNum_>=a.pieces_.length)return null;const t=[];for(let i=a.pieceNum_;i<a.pieces_.length-1;i++)t.push(a.pieces_[i]);return new Se(t,0)}function qe(a,t){const i=[];for(let r=a.pieceNum_;r<a.pieces_.length;r++)i.push(a.pieces_[r]);if(t instanceof Se)for(let r=t.pieceNum_;r<t.pieces_.length;r++)i.push(t.pieces_[r]);else{const r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Se(i,0)}function se(a){return a.pieceNum_>=a.pieces_.length}function ut(a,t){const i=ae(a),r=ae(t);if(i===null)return t;if(i===r)return ut(Te(a),Te(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+a+")")}function my(a,t){if(di(a)!==di(t))return!1;for(let i=a.pieceNum_,r=t.pieceNum_;i<=a.pieces_.length;i++,r++)if(a.pieces_[i]!==t.pieces_[r])return!1;return!0}function Qt(a,t){let i=a.pieceNum_,r=t.pieceNum_;if(di(a)>di(t))return!1;for(;i<a.pieces_.length;){if(a.pieces_[i]!==t.pieces_[r])return!1;++i,++r}return!0}class mA{constructor(t,i){this.errorPrefix_=i,this.parts_=_y(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ro(this.parts_[r]);gy(this)}}function gA(a,t){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(t),a.byteLength_+=Ro(t),gy(a)}function vA(a){const t=a.parts_.pop();a.byteLength_-=Ro(t),a.parts_.length>0&&(a.byteLength_-=1)}function gy(a){if(a.byteLength_>wg)throw new Error(a.errorPrefix_+"has a key path longer than "+wg+" bytes ("+a.byteLength_+").");if(a.parts_.length>Ag)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ag+") or object contains a cycle "+Hi(a))}function Hi(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends hy{static getInstance(){return new hh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=1e3,yA=60*5*1e3,Rg=30*1e3,EA=1.3,SA=3e4,bA="server_kill",Ng=3;class wn extends fy{constructor(t,i,r,o,c,h,_,p){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=_,this.authOverride_=p,this.id=wn.nextPersistentConnectionId_++,this.log_=Nr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tr,this.maxReconnectDelay_=yA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&_o.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,r){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(Pe(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),r&&(this.requestCBHash_[o]=r)}get(t){this.initConnection_();const i=new wo,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const _=h.d;h.s==="ok"?i.resolve(_):i.reject(_)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,r,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const _={onComplete:o,hashFn:i,query:t,tag:r};this.listens.get(h).set(c,_),this.connected_&&this.sendListen_(_)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(t){const i=t.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const c={p:r},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,_=>{const p=_.d,m=_.s;wn.warnOnListenWarnings_(p,i),(this.listens.get(r)&&this.listens.get(r).get(o))===t&&(this.log_("listen response",_),m!=="ok"&&this.removeListen_(r,o),t.onComplete&&t.onComplete(m,p))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&Dn(t,"w")){const r=Gs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||hb(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rg)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=fb(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,r=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(t,i){const r=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,t._queryObject,i)}sendUnlisten_(t,i,r,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=r,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:r})}onDisconnectMerge(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:r})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,r,o){const c={p:i,d:r};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,r,o){this.putInternal("p",t,i,r,o)}merge(t,i,r,o){this.putInternal("m",t,i,r,o)}putInternal(t,i,r,o,c){this.initConnection_();const h={p:i,d:r};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const _=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(_):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,r,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const c=r.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Pe(t));const i=t.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Mf("Unrecognized action received from server: "+Pe(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SA&&(this.reconnectDelay_=tr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+wn.nextConnectionId_++,c=this.lastSessionId;let h=!1,_=null;const p=function(){_?_.close():(h=!0,r())},m=function(T){U(_,"sendRequest call when we're not connected not allowed."),_.sendRequest(T)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);h?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,_=new _A(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,r,k=>{vt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(bA)},c))}catch(T){this.log_("Failed to get token: "+T),h||(this.repoInfo_.nodeAdmin&&vt(T),p())}}}interrupt(t){rt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){rt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],bf(this.interruptReasons_)&&(this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let r;i?r=i.map(c=>oh(c)).join("$"):r="default";const o=this.removeListen_(t,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const r=new Se(t).toString();let o;if(this.listens.has(r)){const c=this.listens.get(r);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(t,i){rt("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ng&&(this.reconnectDelay_=Rg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){rt("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ng&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+Vv.replace(/\./g,"-")]=1,Qf()?t["framework.cordova"]=1:sv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=_o.getInstance().currentlyOnline();return bf(this.interruptReasons_)&&t}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new te(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const r=new te(Ys,t),o=new te(Ys,i);return this.compare(r,o)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;class vy extends Mo{static get __EMPTY_NODE(){return Kl}static set __EMPTY_NODE(t){Kl=t}compare(t,i){return Js(t.name,i.name)}isDefinedOn(t){throw Xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return te.MIN}maxPost(){return new te(Qi,Kl)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new te(t,Kl)}toString(){return".key"}}const qs=new vy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,i,r,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?r(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Xe{constructor(t,i,r,o,c){this.key=t,this.value=i,this.color=r??Xe.RED,this.left=o??gt.EMPTY_NODE,this.right=c??gt.EMPTY_NODE}copy(t,i,r,o,c){return new Xe(t??this.key,i??this.value,r??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,r){let o=this;const c=r(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,r),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let r,o;if(r=this,i(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(t,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class TA{copy(t,i,r,o,c){return this}insert(t,i,r){return new Xe(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(t,i=gt.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new gt(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(t){return new gt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(t){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(t,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(t){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(t,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Zl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new Zl(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new Zl(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new Zl(this.root_,null,this.comparator_,!0,t)}}gt.EMPTY_NODE=new TA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(a,t){return Js(a.name,t.name)}function dh(a,t){return Js(a,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;function AA(a){xf=a}const yy=function(a){return typeof a=="number"?"number:"+Xv(a):"string:"+a},Ey=function(a){if(a.isLeafNode()){const t=a.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Dn(t,".sv"),"Priority must be a string or number.")}else U(a===xf||a.isEmpty(),"priority of unexpected type.");U(a===xf||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Og;class Fe{static set __childrenNodeConstructor(t){Og=t}static get __childrenNodeConstructor(){return Og}constructor(t,i=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ey(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Fe(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return se(t)?this:ae(t)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const r=ae(t);return r===null?i:i.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||di(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+yy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=Xv(this.value_):t+=this.value_,this.lazyHash_=Yv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Fe.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Fe.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,r=typeof this.value_,o=Fe.VALUE_TYPE_ORDER.indexOf(i),c=Fe.VALUE_TYPE_ORDER.indexOf(r);return U(o>=0,"Unknown leaf type: "+i),U(c>=0,"Unknown leaf type: "+r),o===c?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sy,by;function wA(a){Sy=a}function RA(a){by=a}class NA extends Mo{compare(t,i){const r=t.node.getPriority(),o=i.node.getPriority(),c=r.compareTo(o);return c===0?Js(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Qi,new Fe("[PRIORITY-POST]",by))}makePost(t,i){const r=Sy(t);return new te(i,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ie=new NA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=Math.log(2);class DA{constructor(t){const i=c=>parseInt(Math.log(c)/OA,10),r=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=r(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const po=function(a,t,i,r){a.sort(t);const o=function(p,m){const y=m-p;let T,b;if(y===0)return null;if(y===1)return T=a[p],b=i?i(T):T,new Xe(b,T.node,Xe.BLACK,null,null);{const k=parseInt(y/2,10)+p,L=o(p,k),K=o(k+1,m);return T=a[k],b=i?i(T):T,new Xe(b,T.node,Xe.BLACK,L,K)}},c=function(p){let m=null,y=null,T=a.length;const b=function(L,K){const $=T-L,Ue=T;T-=L;const Oe=o($+1,Ue),_e=a[$],Ge=i?i(_e):_e;k(new Xe(Ge,_e.node,K,null,Oe))},k=function(L){m?(m.left=L,m=L):(y=L,m=L)};for(let L=0;L<p.count;++L){const K=p.nextBitIsOne(),$=Math.pow(2,p.count-(L+1));K?b($,Xe.BLACK):(b($,Xe.BLACK),b($,Xe.RED))}return y},h=new DA(a.length),_=c(h);return new gt(r||t,_)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf;const Us={};class An{static get Default(){return U(Us&&Ie,"ChildrenNode.ts has not been loaded"),vf=vf||new An({".priority":Us},{".priority":Ie}),vf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Gs(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof gt?i:null}hasIndex(t){return Dn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==qs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const c=i.getIterator(te.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),r.push(h),h=c.getNext();let _;o?_=po(r,t.getCompare()):_=Us;const p=t.toString(),m=Object.assign({},this.indexSet_);m[p]=t;const y=Object.assign({},this.indexes_);return y[p]=_,new An(y,m)}addToIndexes(t,i){const r=so(this.indexes_,(o,c)=>{const h=Gs(this.indexSet_,c);if(U(h,"Missing index implementation for "+c),o===Us)if(h.isDefinedOn(t.node)){const _=[],p=i.getIterator(te.Wrap);let m=p.getNext();for(;m;)m.name!==t.name&&_.push(m),m=p.getNext();return _.push(t),po(_,h.getCompare())}else return Us;else{const _=i.get(t.name);let p=o;return _&&(p=p.remove(new te(t.name,_))),p.insert(t,t.node)}});return new An(r,this.indexSet_)}removeFromIndexes(t,i){const r=so(this.indexes_,o=>{if(o===Us)return o;{const c=i.get(t.name);return c?o.remove(new te(t.name,c)):o}});return new An(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;class Q{static get EMPTY_NODE(){return nr||(nr=new Q(new gt(dh),null,An.Default))}constructor(t,i,r){this.children_=t,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ey(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nr}updatePriority(t){return this.children_.isEmpty()?this:new Q(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?nr:i}}getChild(t){const i=ae(t);return i===null?this:this.getImmediateChild(i).getChild(Te(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const r=new te(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?nr:this.priorityNode_;return new Q(o,h,c)}}updateChild(t,i){const r=ae(t);if(r===null)return i;{U(ae(t)!==".priority"||di(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(Te(t),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let r=0,o=0,c=!0;if(this.forEachChild(Ie,(h,_)=>{i[h]=_.val(t),r++,c&&Q.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*r){const h=[];for(const _ in i)h[_]=i[_];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+yy(this.getPriority().val())+":"),this.forEachChild(Ie,(i,r)=>{const o=r.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":Yv(t)}return this.lazyHash_}getPredecessorChildName(t,i,r){const o=this.resolveIndex_(r);if(o){const c=o.getPredecessorKey(new te(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new te(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new te(i,this.children_.get(i)):null}forEachChild(t,i){const r=this.resolveIndex_(t);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,te.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,te.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Or?-1:0}withIndex(t){if(t===qs||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new Q(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===qs||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(Ie),o=i.getIterator(Ie);let c=r.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=r.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===qs?null:this.indexMap_.get(t.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MA extends Q{constructor(){super(new gt(dh),Q.EMPTY_NODE,An.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Q.EMPTY_NODE}isEmpty(){return!1}}const Or=new MA;Object.defineProperties(te,{MIN:{value:new te(Ys,Q.EMPTY_NODE)},MAX:{value:new te(Qi,Or)}});vy.__EMPTY_NODE=Q.EMPTY_NODE;Fe.__childrenNodeConstructor=Q;AA(Or);RA(Or);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=!0;function Ke(a,t=null){if(a===null)return Q.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(t=a[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const i=a;return new Fe(i,Ke(t))}if(!(a instanceof Array)&&IA){const i=[];let r=!1;if(yt(a,(h,_)=>{if(h.substring(0,1)!=="."){const p=Ke(_);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),i.push(new te(h,p)))}}),i.length===0)return Q.EMPTY_NODE;const c=po(i,CA,h=>h.name,dh);if(r){const h=po(i,Ie.getCompare());return new Q(c,Ke(t),new An({".priority":h},{".priority":Ie}))}else return new Q(c,Ke(t),An.Default)}else{let i=Q.EMPTY_NODE;return yt(a,(r,o)=>{if(Dn(a,r)&&r.substring(0,1)!=="."){const c=Ke(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(r,c))}}),i.updatePriority(Ke(t))}}wA(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA extends Mo{constructor(t){super(),this.indexPath_=t,U(!se(t)&&ae(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const r=this.extractChild(t.node),o=this.extractChild(i.node),c=r.compareTo(o);return c===0?Js(t.name,i.name):c}makePost(t,i){const r=Ke(t),o=Q.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(i,o)}maxPost(){const t=Q.EMPTY_NODE.updateChild(this.indexPath_,Or);return new te(Qi,t)}toString(){return _y(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA extends Mo{compare(t,i){const r=t.node.compareTo(i.node);return r===0?Js(t.name,i.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(t,i){const r=Ke(t);return new te(i,r)}toString(){return".value"}}const UA=new kA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(a){return{type:"value",snapshotNode:a}}function Qs(a,t){return{type:"child_added",snapshotNode:t,childName:a}}function pr(a,t){return{type:"child_removed",snapshotNode:t,childName:a}}function mr(a,t,i){return{type:"child_changed",snapshotNode:t,childName:a,oldSnap:i}}function LA(a,t){return{type:"child_moved",snapshotNode:t,childName:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.index_=t}updateChild(t,i,r,o,c,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const _=t.getImmediateChild(i);return _.getChild(o).equals(r.getChild(o))&&_.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?t.hasChild(i)?h.trackChildChange(pr(i,_)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):_.isEmpty()?h.trackChildChange(Qs(i,r)):h.trackChildChange(mr(i,r,_))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(t,i,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Ie,(o,c)=>{i.hasChild(o)||r.trackChildChange(pr(o,c))}),i.isLeafNode()||i.forEachChild(Ie,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||r.trackChildChange(mr(o,c,h))}else r.trackChildChange(Qs(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?Q.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.indexedFilter_=new _h(t.getIndex()),this.index_=t.getIndex(),this.startPost_=gr.getStartPost_(t),this.endPost_=gr.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&r}updateChild(t,i,r,o,c,h){return this.matches(new te(i,r))||(r=Q.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,r,o,c,h)}updateFullNode(t,i,r){i.isLeafNode()&&(i=Q.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(Q.EMPTY_NODE);const c=this;return i.forEachChild(Ie,(h,_)=>{c.matches(new te(h,_))||(o=o.updateImmediateChild(h,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new gr(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,r,o,c,h){return this.rangedFilter_.matches(new te(i,r))||(r=Q.EMPTY_NODE),t.getImmediateChild(i).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,r,o,c,h):this.fullLimitUpdateChild_(t,i,r,c,h)}updateFullNode(t,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=Q.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const _=c.getNext();if(this.withinDirectionalStart(_))if(this.withinDirectionalEnd(_))o=o.updateImmediateChild(_.name,_.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(Q.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const _=c.getNext();h<this.limit_&&this.withinDirectionalStart(_)&&this.withinDirectionalEnd(_)?h++:o=o.updateImmediateChild(_.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,r,o,c){let h;if(this.reverse_){const T=this.index_.getCompare();h=(b,k)=>T(k,b)}else h=this.index_.getCompare();const _=t;U(_.numChildren()===this.limit_,"");const p=new te(i,r),m=this.reverse_?_.getFirstChild(this.index_):_.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(_.hasChild(i)){const T=_.getImmediateChild(i);let b=o.getChildAfterChild(this.index_,m,this.reverse_);for(;b!=null&&(b.name===i||_.hasChild(b.name));)b=o.getChildAfterChild(this.index_,b,this.reverse_);const k=b==null?1:h(b,p);if(y&&!r.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(mr(i,r,T)),_.updateImmediateChild(i,r);{c!=null&&c.trackChildChange(pr(i,T));const K=_.updateImmediateChild(i,Q.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(c!=null&&c.trackChildChange(Qs(b.name,b.node)),K.updateImmediateChild(b.name,b.node)):K}}else return r.isEmpty()?t:y&&h(m,p)>=0?(c!=null&&(c.trackChildChange(pr(m.name,m.node)),c.trackChildChange(Qs(i,r))),_.updateImmediateChild(i,r).updateImmediateChild(m.name,Q.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ys}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const t=new ph;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function HA(a){return a.loadsAllData()?new _h(a.getIndex()):a.hasLimit()?new zA(a):new gr(a)}function Dg(a){const t={};if(a.isDefault())return t;let i;if(a.index_===Ie?i="$priority":a.index_===UA?i="$value":a.index_===qs?i="$key":(U(a.index_ instanceof xA,"Unrecognized index type!"),i=a.index_.toString()),t.orderBy=Pe(i),a.startSet_){const r=a.startAfterSet_?"startAfter":"startAt";t[r]=Pe(a.indexStartValue_),a.startNameSet_&&(t[r]+=","+Pe(a.indexStartName_))}if(a.endSet_){const r=a.endBeforeSet_?"endBefore":"endAt";t[r]=Pe(a.indexEndValue_),a.endNameSet_&&(t[r]+=","+Pe(a.indexEndName_))}return a.limitSet_&&(a.isViewFromLeft()?t.limitToFirst=a.limit_:t.limitToLast=a.limit_),t}function Mg(a){const t={};if(a.startSet_&&(t.sp=a.indexStartValue_,a.startNameSet_&&(t.sn=a.indexStartName_),t.sin=!a.startAfterSet_),a.endSet_&&(t.ep=a.indexEndValue_,a.endNameSet_&&(t.en=a.indexEndName_),t.ein=!a.endBeforeSet_),a.limitSet_){t.l=a.limit_;let i=a.viewFrom_;i===""&&(a.isViewFromLeft()?i="l":i="r"),t.vf=i}return a.index_!==Ie&&(t.i=a.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends fy{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,r,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Nr("p:rest:"),this.listens_={}}listen(t,i,r,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=mo.getListenId_(t,r),_={};this.listens_[h]=_;const p=Dg(t._queryParams);this.restRequest_(c+".json",p,(m,y)=>{let T=y;if(m===404&&(T=null,m=null),m===null&&this.onDataUpdate_(c,T,!1,r),Gs(this.listens_,h)===_){let b;m?m===401?b="permission_denied":b="rest_error:"+m:b="ok",o(b,null)}})}unlisten(t,i){const r=mo.getListenId_(t,i);delete this.listens_[r]}get(t){const i=Dg(t._queryParams),r=t._path.toString(),o=new wo;return this.restRequest_(r+".json",i,(c,h)=>{let _=h;c===404&&(_=null,c=null),c===null?(this.onDataUpdate_(r,_,!1,null),o.resolve(_)):o.reject(new Error(_))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ks(i);this.log_("Sending REST request for "+h);const _=new XMLHttpRequest;_.onreadystatechange=()=>{if(r&&_.readyState===4){this.log_("REST Response for "+h+" received. status:",_.status,"response:",_.responseText);let p=null;if(_.status>=200&&_.status<300){try{p=fr(_.responseText)}catch{vt("Failed to parse JSON response for "+h+": "+_.responseText)}r(null,p)}else _.status!==401&&_.status!==404&&vt("Got unsuccessful REST response for "+h+" Status: "+_.status),r(_.status);r=null}},_.open("GET",h,!0),_.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(){return{value:null,children:new Map}}function Cy(a,t,i){if(se(t))a.value=i,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(t,i);else{const r=ae(t);a.children.has(r)||a.children.set(r,go());const o=a.children.get(r);t=Te(t),Cy(o,t,i)}}function kf(a,t,i){a.value!==null?i(t,a.value):PA(a,(r,o)=>{const c=new Se(t.toString()+"/"+r);kf(o,c,i)})}function PA(a,t){a.children.forEach((i,r)=>{t(r,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&yt(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=10*1e3,GA=30*1e3,VA=5*60*1e3;class jA{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new qA(t);const r=Ig+(GA-Ig)*Math.random();lr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),i={};let r=!1;yt(t,(o,c)=>{c>0&&Dn(this.statsToReport_,o)&&(i[o]=c,r=!0)}),r&&this.server_.reportStats(i),lr(this.reportStats_.bind(this),Math.floor(Math.random()*2*VA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ft||(Ft={}));function Ay(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gh(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,i,r){this.path=t,this.affectedTree=i,this.revert=r,this.type=Ft.ACK_USER_WRITE,this.source=Ay()}operationForChild(t){if(se(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Se(t));return new vo(ce(),i,this.revert)}}else return U(ae(this.path)===t,"operationForChild called for unrelated child."),new vo(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,i){this.source=t,this.path=i,this.type=Ft.LISTEN_COMPLETE}operationForChild(t){return se(this.path)?new vr(this.source,ce()):new vr(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,i,r){this.source=t,this.path=i,this.snap=r,this.type=Ft.OVERWRITE}operationForChild(t){return se(this.path)?new Fi(this.source,ce(),this.snap.getImmediateChild(t)):new Fi(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,i,r){this.source=t,this.path=i,this.children=r,this.type=Ft.MERGE}operationForChild(t){if(se(this.path)){const i=this.children.subtree(new Se(t));return i.isEmpty()?null:i.value?new Fi(this.source,ce(),i.value):new yr(this.source,ce(),i)}else return U(ae(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new yr(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,i,r){this.node_=t,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(se(t))return this.isFullyInitialized()&&!this.filtered_;const i=ae(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function QA(a,t,i,r){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&a.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(LA(h.childName,h.snapshotNode))}),ir(a,o,"child_removed",t,r,i),ir(a,o,"child_added",t,r,i),ir(a,o,"child_moved",c,r,i),ir(a,o,"child_changed",t,r,i),ir(a,o,"value",t,r,i),o}function ir(a,t,i,r,o,c){const h=r.filter(_=>_.type===i);h.sort((_,p)=>XA(a,_,p)),h.forEach(_=>{const p=FA(a,_,c);o.forEach(m=>{m.respondsTo(_.type)&&t.push(m.createEvent(p,a.query_))})})}function FA(a,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,a.index_)),t}function XA(a,t,i){if(t.childName==null||i.childName==null)throw Xs("Should only compare child_ events.");const r=new te(t.childName,t.snapshotNode),o=new te(i.childName,i.snapshotNode);return a.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(a,t){return{eventCache:a,serverCache:t}}function or(a,t,i,r){return Io(new _i(t,i,r),a.serverCache)}function wy(a,t,i,r){return Io(a.eventCache,new _i(t,i,r))}function yo(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function Xi(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;const KA=()=>(yf||(yf=new gt(kC)),yf);class Ce{static fromObject(t){let i=new Ce(null);return yt(t,(r,o)=>{i=i.set(new Se(r),o)}),i}constructor(t,i=KA()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:ce(),value:this.value};if(se(t))return null;{const r=ae(t),o=this.children.get(r);if(o!==null){const c=o.findRootMostMatchingPathAndValue(Te(t),i);return c!=null?{path:qe(new Se(r),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(se(t))return this;{const i=ae(t),r=this.children.get(i);return r!==null?r.subtree(Te(t)):new Ce(null)}}set(t,i){if(se(t))return new Ce(i,this.children);{const r=ae(t),c=(this.children.get(r)||new Ce(null)).set(Te(t),i),h=this.children.insert(r,c);return new Ce(this.value,h)}}remove(t){if(se(t))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const i=ae(t),r=this.children.get(i);if(r){const o=r.remove(Te(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Ce(null):new Ce(this.value,c)}else return this}}get(t){if(se(t))return this.value;{const i=ae(t),r=this.children.get(i);return r?r.get(Te(t)):null}}setTree(t,i){if(se(t))return i;{const r=ae(t),c=(this.children.get(r)||new Ce(null)).setTree(Te(t),i);let h;return c.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,c),new Ce(this.value,h)}}fold(t){return this.fold_(ce(),t)}fold_(t,i){const r={};return this.children.inorderTraversal((o,c)=>{r[o]=c.fold_(qe(t,o),i)}),i(t,this.value,r)}findOnPath(t,i){return this.findOnPath_(t,ce(),i)}findOnPath_(t,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(se(t))return null;{const c=ae(t),h=this.children.get(c);return h?h.findOnPath_(Te(t),qe(i,c),r):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,ce(),i)}foreachOnPath_(t,i,r){if(se(t))return this;{this.value&&r(i,this.value);const o=ae(t),c=this.children.get(o);return c?c.foreachOnPath_(Te(t),qe(i,o),r):new Ce(null)}}foreach(t){this.foreach_(ce(),t)}foreach_(t,i){this.children.inorderTraversal((r,o)=>{o.foreach_(qe(t,r),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,r)=>{r.value&&t(i,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.writeTree_=t}static empty(){return new Kt(new Ce(null))}}function ur(a,t,i){if(se(t))return new Kt(new Ce(i));{const r=a.writeTree_.findRootMostValueAndPath(t);if(r!=null){const o=r.path;let c=r.value;const h=ut(o,t);return c=c.updateChild(h,i),new Kt(a.writeTree_.set(o,c))}else{const o=new Ce(i),c=a.writeTree_.setTree(t,o);return new Kt(c)}}}function xg(a,t,i){let r=a;return yt(i,(o,c)=>{r=ur(r,qe(t,o),c)}),r}function kg(a,t){if(se(t))return Kt.empty();{const i=a.writeTree_.setTree(t,new Ce(null));return new Kt(i)}}function Uf(a,t){return Ki(a,t)!=null}function Ki(a,t){const i=a.writeTree_.findRootMostValueAndPath(t);return i!=null?a.writeTree_.get(i.path).getChild(ut(i.path,t)):null}function Ug(a){const t=[],i=a.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{t.push(new te(r,o))}):a.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&t.push(new te(r,o.value))}),t}function fi(a,t){if(se(t))return a;{const i=Ki(a,t);return i!=null?new Kt(new Ce(i)):new Kt(a.writeTree_.subtree(t))}}function Lf(a){return a.writeTree_.isEmpty()}function Fs(a,t){return Ry(ce(),a.writeTree_,t)}function Ry(a,t,i){if(t.value!=null)return i.updateChild(a,t.value);{let r=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),r=c.value):i=Ry(qe(a,o),c,i)}),!i.getChild(a).isEmpty()&&r!==null&&(i=i.updateChild(qe(a,".priority"),r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(a,t){return My(t,a)}function ZA(a,t,i,r,o){U(r>a.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),a.allWrites.push({path:t,snap:i,writeId:r,visible:o}),o&&(a.visibleWrites=ur(a.visibleWrites,t,i)),a.lastWriteId=r}function WA(a,t){for(let i=0;i<a.allWrites.length;i++){const r=a.allWrites[i];if(r.writeId===t)return r}return null}function JA(a,t){const i=a.allWrites.findIndex(_=>_.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const r=a.allWrites[i];a.allWrites.splice(i,1);let o=r.visible,c=!1,h=a.allWrites.length-1;for(;o&&h>=0;){const _=a.allWrites[h];_.visible&&(h>=i&&$A(_,r.path)?o=!1:Qt(r.path,_.path)&&(c=!0)),h--}if(o){if(c)return ew(a),!0;if(r.snap)a.visibleWrites=kg(a.visibleWrites,r.path);else{const _=r.children;yt(_,p=>{a.visibleWrites=kg(a.visibleWrites,qe(r.path,p))})}return!0}else return!1}function $A(a,t){if(a.snap)return Qt(a.path,t);for(const i in a.children)if(a.children.hasOwnProperty(i)&&Qt(qe(a.path,i),t))return!0;return!1}function ew(a){a.visibleWrites=Ny(a.allWrites,tw,ce()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function tw(a){return a.visible}function Ny(a,t,i){let r=Kt.empty();for(let o=0;o<a.length;++o){const c=a[o];if(t(c)){const h=c.path;let _;if(c.snap)Qt(i,h)?(_=ut(i,h),r=ur(r,_,c.snap)):Qt(h,i)&&(_=ut(h,i),r=ur(r,ce(),c.snap.getChild(_)));else if(c.children){if(Qt(i,h))_=ut(i,h),r=xg(r,_,c.children);else if(Qt(h,i))if(_=ut(h,i),se(_))r=xg(r,ce(),c.children);else{const p=Gs(c.children,ae(_));if(p){const m=p.getChild(Te(_));r=ur(r,ce(),m)}}}else throw Xs("WriteRecord should have .snap or .children")}}return r}function Oy(a,t,i,r,o){if(!r&&!o){const c=Ki(a.visibleWrites,t);if(c!=null)return c;{const h=fi(a.visibleWrites,t);if(Lf(h))return i;if(i==null&&!Uf(h,ce()))return null;{const _=i||Q.EMPTY_NODE;return Fs(h,_)}}}else{const c=fi(a.visibleWrites,t);if(!o&&Lf(c))return i;if(!o&&i==null&&!Uf(c,ce()))return null;{const h=function(m){return(m.visible||o)&&(!r||!~r.indexOf(m.writeId))&&(Qt(m.path,t)||Qt(t,m.path))},_=Ny(a.allWrites,h,t),p=i||Q.EMPTY_NODE;return Fs(_,p)}}}function nw(a,t,i){let r=Q.EMPTY_NODE;const o=Ki(a.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Ie,(c,h)=>{r=r.updateImmediateChild(c,h)}),r;if(i){const c=fi(a.visibleWrites,t);return i.forEachChild(Ie,(h,_)=>{const p=Fs(fi(c,new Se(h)),_);r=r.updateImmediateChild(h,p)}),Ug(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const c=fi(a.visibleWrites,t);return Ug(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function iw(a,t,i,r,o){U(r||o,"Either existingEventSnap or existingServerSnap must exist");const c=qe(t,i);if(Uf(a.visibleWrites,c))return null;{const h=fi(a.visibleWrites,c);return Lf(h)?o.getChild(i):Fs(h,o.getChild(i))}}function sw(a,t,i,r){const o=qe(t,i),c=Ki(a.visibleWrites,o);if(c!=null)return c;if(r.isCompleteForChild(i)){const h=fi(a.visibleWrites,o);return Fs(h,r.getNode().getImmediateChild(i))}else return null}function aw(a,t){return Ki(a.visibleWrites,t)}function rw(a,t,i,r,o,c,h){let _;const p=fi(a.visibleWrites,t),m=Ki(p,ce());if(m!=null)_=m;else if(i!=null)_=Fs(p,i);else return[];if(_=_.withIndex(h),!_.isEmpty()&&!_.isLeafNode()){const y=[],T=h.getCompare(),b=c?_.getReverseIteratorFrom(r,h):_.getIteratorFrom(r,h);let k=b.getNext();for(;k&&y.length<o;)T(k,r)!==0&&y.push(k),k=b.getNext();return y}else return[]}function lw(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function Eo(a,t,i,r){return Oy(a.writeTree,a.treePath,t,i,r)}function vh(a,t){return nw(a.writeTree,a.treePath,t)}function Lg(a,t,i,r){return iw(a.writeTree,a.treePath,t,i,r)}function So(a,t){return aw(a.writeTree,qe(a.treePath,t))}function ow(a,t,i,r,o,c){return rw(a.writeTree,a.treePath,t,i,r,o,c)}function yh(a,t,i){return sw(a.writeTree,a.treePath,t,i)}function Dy(a,t){return My(qe(a.treePath,t),a.writeTree)}function My(a,t){return{treePath:a,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,r=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(r,mr(r,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(r,pr(r,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(r,Qs(r,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(r,mr(r,t.snapshotNode,o.oldSnap));else throw Xs("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{getCompleteChild(t){return null}getChildAfterChild(t,i,r){return null}}const Iy=new cw;class Eh{constructor(t,i,r=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new _i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yh(this.writes_,t,r)}}getChildAfterChild(t,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xi(this.viewCache_),c=ow(this.writes_,o,i,1,r,t);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(a){return{filter:a}}function hw(a,t){U(t.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function dw(a,t,i,r,o){const c=new uw;let h,_;if(i.type===Ft.OVERWRITE){const m=i;m.source.fromUser?h=zf(a,t,m.path,m.snap,r,o,c):(U(m.source.fromServer,"Unknown source."),_=m.source.tagged||t.serverCache.isFiltered()&&!se(m.path),h=bo(a,t,m.path,m.snap,r,o,_,c))}else if(i.type===Ft.MERGE){const m=i;m.source.fromUser?h=pw(a,t,m.path,m.children,r,o,c):(U(m.source.fromServer,"Unknown source."),_=m.source.tagged||t.serverCache.isFiltered(),h=Hf(a,t,m.path,m.children,r,o,_,c))}else if(i.type===Ft.ACK_USER_WRITE){const m=i;m.revert?h=vw(a,t,m.path,r,o,c):h=mw(a,t,m.path,m.affectedTree,r,o,c)}else if(i.type===Ft.LISTEN_COMPLETE)h=gw(a,t,i.path,r,c);else throw Xs("Unknown operation type: "+i.type);const p=c.getChanges();return _w(t,h,p),{viewCache:h,changes:p}}function _w(a,t,i){const r=t.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),c=yo(a);(i.length>0||!a.eventCache.isFullyInitialized()||o&&!r.getNode().equals(c)||!r.getNode().getPriority().equals(c.getPriority()))&&i.push(Ty(yo(t)))}}function xy(a,t,i,r,o,c){const h=t.eventCache;if(So(r,i)!=null)return t;{let _,p;if(se(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const m=Xi(t),y=m instanceof Q?m:Q.EMPTY_NODE,T=vh(r,y);_=a.filter.updateFullNode(t.eventCache.getNode(),T,c)}else{const m=Eo(r,Xi(t));_=a.filter.updateFullNode(t.eventCache.getNode(),m,c)}else{const m=ae(i);if(m===".priority"){U(di(i)===1,"Can't have a priority with additional path components");const y=h.getNode();p=t.serverCache.getNode();const T=Lg(r,i,y,p);T!=null?_=a.filter.updatePriority(y,T):_=h.getNode()}else{const y=Te(i);let T;if(h.isCompleteForChild(m)){p=t.serverCache.getNode();const b=Lg(r,i,h.getNode(),p);b!=null?T=h.getNode().getImmediateChild(m).updateChild(y,b):T=h.getNode().getImmediateChild(m)}else T=yh(r,m,t.serverCache);T!=null?_=a.filter.updateChild(h.getNode(),m,T,y,o,c):_=h.getNode()}}return or(t,_,h.isFullyInitialized()||se(i),a.filter.filtersNodes())}}function bo(a,t,i,r,o,c,h,_){const p=t.serverCache;let m;const y=h?a.filter:a.filter.getIndexedFilter();if(se(i))m=y.updateFullNode(p.getNode(),r,null);else if(y.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(i,r);m=y.updateFullNode(p.getNode(),k,null)}else{const k=ae(i);if(!p.isCompleteForPath(i)&&di(i)>1)return t;const L=Te(i),$=p.getNode().getImmediateChild(k).updateChild(L,r);k===".priority"?m=y.updatePriority(p.getNode(),$):m=y.updateChild(p.getNode(),k,$,L,Iy,null)}const T=wy(t,m,p.isFullyInitialized()||se(i),y.filtersNodes()),b=new Eh(o,T,c);return xy(a,T,i,o,b,_)}function zf(a,t,i,r,o,c,h){const _=t.eventCache;let p,m;const y=new Eh(o,t,c);if(se(i))m=a.filter.updateFullNode(t.eventCache.getNode(),r,h),p=or(t,m,!0,a.filter.filtersNodes());else{const T=ae(i);if(T===".priority")m=a.filter.updatePriority(t.eventCache.getNode(),r),p=or(t,m,_.isFullyInitialized(),_.isFiltered());else{const b=Te(i),k=_.getNode().getImmediateChild(T);let L;if(se(b))L=r;else{const K=y.getCompleteChild(T);K!=null?dy(b)===".priority"&&K.getChild(py(b)).isEmpty()?L=K:L=K.updateChild(b,r):L=Q.EMPTY_NODE}if(k.equals(L))p=t;else{const K=a.filter.updateChild(_.getNode(),T,L,b,y,h);p=or(t,K,_.isFullyInitialized(),a.filter.filtersNodes())}}}return p}function zg(a,t){return a.eventCache.isCompleteForChild(t)}function pw(a,t,i,r,o,c,h){let _=t;return r.foreach((p,m)=>{const y=qe(i,p);zg(t,ae(y))&&(_=zf(a,_,y,m,o,c,h))}),r.foreach((p,m)=>{const y=qe(i,p);zg(t,ae(y))||(_=zf(a,_,y,m,o,c,h))}),_}function Hg(a,t,i){return i.foreach((r,o)=>{t=t.updateChild(r,o)}),t}function Hf(a,t,i,r,o,c,h,_){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,m;se(i)?m=r:m=new Ce(null).setTree(i,r);const y=t.serverCache.getNode();return m.children.inorderTraversal((T,b)=>{if(y.hasChild(T)){const k=t.serverCache.getNode().getImmediateChild(T),L=Hg(a,k,b);p=bo(a,p,new Se(T),L,o,c,h,_)}}),m.children.inorderTraversal((T,b)=>{const k=!t.serverCache.isCompleteForChild(T)&&b.value===null;if(!y.hasChild(T)&&!k){const L=t.serverCache.getNode().getImmediateChild(T),K=Hg(a,L,b);p=bo(a,p,new Se(T),K,o,c,h,_)}}),p}function mw(a,t,i,r,o,c,h){if(So(o,i)!=null)return t;const _=t.serverCache.isFiltered(),p=t.serverCache;if(r.value!=null){if(se(i)&&p.isFullyInitialized()||p.isCompleteForPath(i))return bo(a,t,i,p.getNode().getChild(i),o,c,_,h);if(se(i)){let m=new Ce(null);return p.getNode().forEachChild(qs,(y,T)=>{m=m.set(new Se(y),T)}),Hf(a,t,i,m,o,c,_,h)}else return t}else{let m=new Ce(null);return r.foreach((y,T)=>{const b=qe(i,y);p.isCompleteForPath(b)&&(m=m.set(y,p.getNode().getChild(b)))}),Hf(a,t,i,m,o,c,_,h)}}function gw(a,t,i,r,o){const c=t.serverCache,h=wy(t,c.getNode(),c.isFullyInitialized()||se(i),c.isFiltered());return xy(a,h,i,r,Iy,o)}function vw(a,t,i,r,o,c){let h;if(So(r,i)!=null)return t;{const _=new Eh(r,t,o),p=t.eventCache.getNode();let m;if(se(i)||ae(i)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=Eo(r,Xi(t));else{const T=t.serverCache.getNode();U(T instanceof Q,"serverChildren would be complete if leaf node"),y=vh(r,T)}y=y,m=a.filter.updateFullNode(p,y,c)}else{const y=ae(i);let T=yh(r,y,t.serverCache);T==null&&t.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?m=a.filter.updateChild(p,y,T,Te(i),_,c):t.eventCache.getNode().hasChild(y)?m=a.filter.updateChild(p,y,Q.EMPTY_NODE,Te(i),_,c):m=p,m.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Eo(r,Xi(t)),h.isLeafNode()&&(m=a.filter.updateFullNode(m,h,c)))}return h=t.serverCache.isFullyInitialized()||So(r,ce())!=null,or(t,m,h,a.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new _h(r.getIndex()),c=HA(r);this.processor_=fw(c);const h=i.serverCache,_=i.eventCache,p=o.updateFullNode(Q.EMPTY_NODE,h.getNode(),null),m=c.updateFullNode(Q.EMPTY_NODE,_.getNode(),null),y=new _i(p,h.isFullyInitialized(),o.filtersNodes()),T=new _i(m,_.isFullyInitialized(),c.filtersNodes());this.viewCache_=Io(T,y),this.eventGenerator_=new YA(this.query_)}get query(){return this.query_}}function Ew(a){return a.viewCache_.serverCache.getNode()}function Sw(a){return yo(a.viewCache_)}function bw(a,t){const i=Xi(a.viewCache_);return i&&(a.query._queryParams.loadsAllData()||!se(t)&&!i.getImmediateChild(ae(t)).isEmpty())?i.getChild(t):null}function Bg(a){return a.eventRegistrations_.length===0}function Tw(a,t){a.eventRegistrations_.push(t)}function Pg(a,t,i){const r=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=a.query._path;a.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&r.push(h)})}if(t){let o=[];for(let c=0;c<a.eventRegistrations_.length;++c){const h=a.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(a.eventRegistrations_.slice(c+1));break}}a.eventRegistrations_=o}else a.eventRegistrations_=[];return r}function qg(a,t,i,r){t.type===Ft.MERGE&&t.source.queryId!==null&&(U(Xi(a.viewCache_),"We should always have a full cache before handling merges"),U(yo(a.viewCache_),"Missing event cache, even though we have a server cache"));const o=a.viewCache_,c=dw(a.processor_,o,t,i,r);return hw(a.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=c.viewCache,ky(a,c.changes,c.viewCache.eventCache.getNode(),null)}function Cw(a,t){const i=a.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Ie,(c,h)=>{r.push(Qs(c,h))}),i.isFullyInitialized()&&r.push(Ty(i.getNode())),ky(a,r,i.getNode(),t)}function ky(a,t,i,r){const o=r?[r]:a.eventRegistrations_;return QA(a.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;class Uy{constructor(){this.views=new Map}}function Aw(a){U(!To,"__referenceConstructor has already been defined"),To=a}function ww(){return U(To,"Reference.ts has not been loaded"),To}function Rw(a){return a.views.size===0}function Sh(a,t,i,r){const o=t.source.queryId;if(o!==null){const c=a.views.get(o);return U(c!=null,"SyncTree gave us an op for an invalid query."),qg(c,t,i,r)}else{let c=[];for(const h of a.views.values())c=c.concat(qg(h,t,i,r));return c}}function Ly(a,t,i,r,o){const c=t._queryIdentifier,h=a.views.get(c);if(!h){let _=Eo(i,o?r:null),p=!1;_?p=!0:r instanceof Q?(_=vh(i,r),p=!1):(_=Q.EMPTY_NODE,p=!1);const m=Io(new _i(_,p,!1),new _i(r,o,!1));return new yw(t,m)}return h}function Nw(a,t,i,r,o,c){const h=Ly(a,t,r,o,c);return a.views.has(t._queryIdentifier)||a.views.set(t._queryIdentifier,h),Tw(h,i),Cw(h,i)}function Ow(a,t,i,r){const o=t._queryIdentifier,c=[];let h=[];const _=pi(a);if(o==="default")for(const[p,m]of a.views.entries())h=h.concat(Pg(m,i,r)),Bg(m)&&(a.views.delete(p),m.query._queryParams.loadsAllData()||c.push(m.query));else{const p=a.views.get(o);p&&(h=h.concat(Pg(p,i,r)),Bg(p)&&(a.views.delete(o),p.query._queryParams.loadsAllData()||c.push(p.query)))}return _&&!pi(a)&&c.push(new(ww())(t._repo,t._path)),{removed:c,events:h}}function zy(a){const t=[];for(const i of a.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function hi(a,t){let i=null;for(const r of a.views.values())i=i||bw(r,t);return i}function Hy(a,t){if(t._queryParams.loadsAllData())return ko(a);{const r=t._queryIdentifier;return a.views.get(r)}}function By(a,t){return Hy(a,t)!=null}function pi(a){return ko(a)!=null}function ko(a){for(const t of a.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;function Dw(a){U(!Co,"__referenceConstructor has already been defined"),Co=a}function Mw(){return U(Co,"Reference.ts has not been loaded"),Co}let Iw=1;class Gg{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=lw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Py(a,t,i,r,o){return ZA(a.pendingWriteTree_,t,i,r,o),o?Mr(a,new Fi(Ay(),t,i)):[]}function qi(a,t,i=!1){const r=WA(a.pendingWriteTree_,t);if(JA(a.pendingWriteTree_,t)){let c=new Ce(null);return r.snap!=null?c=c.set(ce(),!0):yt(r.children,h=>{c=c.set(new Se(h),!0)}),Mr(a,new vo(r.path,c,i))}else return[]}function Dr(a,t,i){return Mr(a,new Fi(mh(),t,i))}function xw(a,t,i){const r=Ce.fromObject(i);return Mr(a,new yr(mh(),t,r))}function kw(a,t){return Mr(a,new vr(mh(),t))}function Uw(a,t,i){const r=Th(a,i);if(r){const o=Ch(r),c=o.path,h=o.queryId,_=ut(c,t),p=new vr(gh(h),_);return Ah(a,c,p)}else return[]}function qy(a,t,i,r,o=!1){const c=t._path,h=a.syncPointTree_.get(c);let _=[];if(h&&(t._queryIdentifier==="default"||By(h,t))){const p=Ow(h,t,i,r);Rw(h)&&(a.syncPointTree_=a.syncPointTree_.remove(c));const m=p.removed;if(_=p.events,!o){const y=m.findIndex(b=>b._queryParams.loadsAllData())!==-1,T=a.syncPointTree_.findOnPath(c,(b,k)=>pi(k));if(y&&!T){const b=a.syncPointTree_.subtree(c);if(!b.isEmpty()){const k=Bw(b);for(let L=0;L<k.length;++L){const K=k[L],$=K.query,Ue=Yy(a,K);a.listenProvider_.startListening(cr($),Er(a,$),Ue.hashFn,Ue.onComplete)}}}!T&&m.length>0&&!r&&(y?a.listenProvider_.stopListening(cr(t),null):m.forEach(b=>{const k=a.queryToTagMap.get(Uo(b));a.listenProvider_.stopListening(cr(b),k)}))}Pw(a,m)}return _}function Gy(a,t,i,r){const o=Th(a,r);if(o!=null){const c=Ch(o),h=c.path,_=c.queryId,p=ut(h,t),m=new Fi(gh(_),p,i);return Ah(a,h,m)}else return[]}function Lw(a,t,i,r){const o=Th(a,r);if(o){const c=Ch(o),h=c.path,_=c.queryId,p=ut(h,t),m=Ce.fromObject(i),y=new yr(gh(_),p,m);return Ah(a,h,y)}else return[]}function zw(a,t,i,r=!1){const o=t._path;let c=null,h=!1;a.syncPointTree_.foreachOnPath(o,(b,k)=>{const L=ut(b,o);c=c||hi(k,L),h=h||pi(k)});let _=a.syncPointTree_.get(o);_?(h=h||pi(_),c=c||hi(_,ce())):(_=new Uy,a.syncPointTree_=a.syncPointTree_.set(o,_));let p;c!=null?p=!0:(p=!1,c=Q.EMPTY_NODE,a.syncPointTree_.subtree(o).foreachChild((k,L)=>{const K=hi(L,ce());K&&(c=c.updateImmediateChild(k,K))}));const m=By(_,t);if(!m&&!t._queryParams.loadsAllData()){const b=Uo(t);U(!a.queryToTagMap.has(b),"View does not exist, but we have a tag");const k=qw();a.queryToTagMap.set(b,k),a.tagToQueryMap.set(k,b)}const y=xo(a.pendingWriteTree_,o);let T=Nw(_,t,i,y,c,p);if(!m&&!h&&!r){const b=Hy(_,t);T=T.concat(Gw(a,t,b))}return T}function bh(a,t,i){const o=a.pendingWriteTree_,c=a.syncPointTree_.findOnPath(t,(h,_)=>{const p=ut(h,t),m=hi(_,p);if(m)return m});return Oy(o,t,c,i,!0)}function Hw(a,t){const i=t._path;let r=null;a.syncPointTree_.foreachOnPath(i,(m,y)=>{const T=ut(m,i);r=r||hi(y,T)});let o=a.syncPointTree_.get(i);o?r=r||hi(o,ce()):(o=new Uy,a.syncPointTree_=a.syncPointTree_.set(i,o));const c=r!=null,h=c?new _i(r,!0,!1):null,_=xo(a.pendingWriteTree_,t._path),p=Ly(o,t,_,c?h.getNode():Q.EMPTY_NODE,c);return Sw(p)}function Mr(a,t){return Vy(t,a.syncPointTree_,null,xo(a.pendingWriteTree_,ce()))}function Vy(a,t,i,r){if(se(a.path))return jy(a,t,i,r);{const o=t.get(ce());i==null&&o!=null&&(i=hi(o,ce()));let c=[];const h=ae(a.path),_=a.operationForChild(h),p=t.children.get(h);if(p&&_){const m=i?i.getImmediateChild(h):null,y=Dy(r,h);c=c.concat(Vy(_,p,m,y))}return o&&(c=c.concat(Sh(o,a,r,i))),c}}function jy(a,t,i,r){const o=t.get(ce());i==null&&o!=null&&(i=hi(o,ce()));let c=[];return t.children.inorderTraversal((h,_)=>{const p=i?i.getImmediateChild(h):null,m=Dy(r,h),y=a.operationForChild(h);y&&(c=c.concat(jy(y,_,p,m)))}),o&&(c=c.concat(Sh(o,a,r,i))),c}function Yy(a,t){const i=t.query,r=Er(a,i);return{hashFn:()=>(Ew(t)||Q.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?Uw(a,i._path,r):kw(a,i._path);{const c=zC(o,i);return qy(a,i,null,c)}}}}function Er(a,t){const i=Uo(t);return a.queryToTagMap.get(i)}function Uo(a){return a._path.toString()+"$"+a._queryIdentifier}function Th(a,t){return a.tagToQueryMap.get(t)}function Ch(a){const t=a.indexOf("$");return U(t!==-1&&t<a.length-1,"Bad queryKey."),{queryId:a.substr(t+1),path:new Se(a.substr(0,t))}}function Ah(a,t,i){const r=a.syncPointTree_.get(t);U(r,"Missing sync point for query tag that we're tracking");const o=xo(a.pendingWriteTree_,t);return Sh(r,i,o,null)}function Bw(a){return a.fold((t,i,r)=>{if(i&&pi(i))return[ko(i)];{let o=[];return i&&(o=zy(i)),yt(r,(c,h)=>{o=o.concat(h)}),o}})}function cr(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(Mw())(a._repo,a._path):a}function Pw(a,t){for(let i=0;i<t.length;++i){const r=t[i];if(!r._queryParams.loadsAllData()){const o=Uo(r),c=a.queryToTagMap.get(o);a.queryToTagMap.delete(o),a.tagToQueryMap.delete(c)}}}function qw(){return Iw++}function Gw(a,t,i){const r=t._path,o=Er(a,t),c=Yy(a,i),h=a.listenProvider_.startListening(cr(t),o,c.hashFn,c.onComplete),_=a.syncPointTree_.subtree(r);if(o)U(!pi(_.value),"If we're adding a query, it shouldn't be shadowed");else{const p=_.fold((m,y,T)=>{if(!se(m)&&y&&pi(y))return[ko(y).query];{let b=[];return y&&(b=b.concat(zy(y).map(k=>k.query))),yt(T,(k,L)=>{b=b.concat(L)}),b}});for(let m=0;m<p.length;++m){const y=p[m];a.listenProvider_.stopListening(cr(y),Er(a,y))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new wh(i)}node(){return this.node_}}class Rh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=qe(this.path_,t);return new Rh(this.syncTree_,i)}node(){return bh(this.syncTree_,this.path_)}}const Vw=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},Vg=function(a,t,i){if(!a||typeof a!="object")return a;if(U(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return jw(a[".sv"],t,i);if(typeof a[".sv"]=="object")return Yw(a[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},jw=function(a,t,i){switch(a){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+a)}},Yw=function(a,t,i){a.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const r=a.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},Qw=function(a,t,i,r){return Nh(t,new Rh(i,a),r)},Qy=function(a,t,i){return Nh(a,new wh(t),i)};function Nh(a,t,i){const r=a.getPriority().val(),o=Vg(r,t.getImmediateChild(".priority"),i);let c;if(a.isLeafNode()){const h=a,_=Vg(h.getValue(),t,i);return _!==h.getValue()||o!==h.getPriority().val()?new Fe(_,Ke(o)):a}else{const h=a;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new Fe(o))),h.forEachChild(Ie,(_,p)=>{const m=Nh(p,t.getImmediateChild(_),i);m!==p&&(c=c.updateImmediateChild(_,m))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t="",i=null,r={children:{},childCount:0}){this.name=t,this.parent=i,this.node=r}}function Dh(a,t){let i=t instanceof Se?t:new Se(t),r=a,o=ae(i);for(;o!==null;){const c=Gs(r.node.children,o)||{children:{},childCount:0};r=new Oh(o,r,c),i=Te(i),o=ae(i)}return r}function ea(a){return a.node.value}function Fy(a,t){a.node.value=t,Bf(a)}function Xy(a){return a.node.childCount>0}function Fw(a){return ea(a)===void 0&&!Xy(a)}function Lo(a,t){yt(a.node.children,(i,r)=>{t(new Oh(i,a,r))})}function Ky(a,t,i,r){i&&t(a),Lo(a,o=>{Ky(o,t,!0)})}function Xw(a,t,i){let r=a.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Ir(a){return new Se(a.parent===null?a.name:Ir(a.parent)+"/"+a.name)}function Bf(a){a.parent!==null&&Kw(a.parent,a.name,a)}function Kw(a,t,i){const r=Fw(i),o=Dn(a.node.children,t);r&&o?(delete a.node.children[t],a.node.childCount--,Bf(a)):!r&&!o&&(a.node.children[t]=i.node,a.node.childCount++,Bf(a))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=/[\[\].#$\/\u0000-\u001F\u007F]/,Ww=/[\[\].#$\u0000-\u001F\u007F]/,Ef=10*1024*1024,Zy=function(a){return typeof a=="string"&&a.length!==0&&!Zw.test(a)},Wy=function(a){return typeof a=="string"&&a.length!==0&&!Ww.test(a)},Jw=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),Wy(a)},$w=function(a,t,i,r){Mh(Ff(a,"value"),t,i)},Mh=function(a,t,i){const r=i instanceof Se?new mA(i,a):i;if(t===void 0)throw new Error(a+"contains undefined "+Hi(r));if(typeof t=="function")throw new Error(a+"contains a function "+Hi(r)+" with contents = "+t.toString());if(Qv(t))throw new Error(a+"contains "+t.toString()+" "+Hi(r));if(typeof t=="string"&&t.length>Ef/3&&Ro(t)>Ef)throw new Error(a+"contains a string greater than "+Ef+" utf8 bytes "+Hi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(yt(t,(h,_)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Zy(h)))throw new Error(a+" contains an invalid key ("+h+") "+Hi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gA(r,h),Mh(a,_,r),vA(r)}),o&&c)throw new Error(a+' contains ".value" child '+Hi(r)+" in addition to actual children.")}},Jy=function(a,t,i,r){if(!Wy(i))throw new Error(Ff(a,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eR=function(a,t,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Jy(a,t,i)},tR=function(a,t){if(ae(t)===".info")throw new Error(a+" failed = Can't modify data under /.info/")},nR=function(a,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Zy(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!Jw(i))throw new Error(Ff(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $y(a,t){let i=null;for(let r=0;r<t.length;r++){const o=t[r],c=o.getPath();i!==null&&!my(c,i.path)&&(a.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&a.eventLists_.push(i)}function an(a,t,i){$y(a,i),sR(a,r=>Qt(r,t)||Qt(t,r))}function sR(a,t){a.recursionDepth_++;let i=!0;for(let r=0;r<a.eventLists_.length;r++){const o=a.eventLists_[r];if(o){const c=o.path;t(c)?(aR(a.eventLists_[r]),a.eventLists_[r]=null):i=!1}}i&&(a.eventLists_=[]),a.recursionDepth_--}function aR(a){for(let t=0;t<a.events.length;t++){const i=a.events[t];if(i!==null){a.events[t]=null;const r=i.getEventRunner();rr&&rt("event: "+i.toString()),$s(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="repo_interrupt",lR=25;class oR{constructor(t,i,r,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=go(),this.transactionQueueTree_=new Oh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uR(a,t,i){if(a.stats_=ch(a.repoInfo_),a.forceRestClient_||qC())a.server_=new mo(a.repoInfo_,(r,o,c,h)=>{jg(a,r,o,c,h)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>Yg(a,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}a.persistentConnection_=new wn(a.repoInfo_,t,(r,o,c,h)=>{jg(a,r,o,c,h)},r=>{Yg(a,r)},r=>{fR(a,r)},a.authTokenProvider_,a.appCheckProvider_,i),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(r=>{a.server_.refreshAuthToken(r)}),a.appCheckProvider_.addTokenChangeListener(r=>{a.server_.refreshAppCheckToken(r.token)}),a.statsReporter_=QC(a.repoInfo_,()=>new jA(a.stats_,a.server_)),a.infoData_=new BA,a.infoSyncTree_=new Gg({startListening:(r,o,c,h)=>{let _=[];const p=a.infoData_.getNode(r._path);return p.isEmpty()||(_=Dr(a.infoSyncTree_,r._path,p),setTimeout(()=>{h("ok")},0)),_},stopListening:()=>{}}),xh(a,"connected",!1),a.serverSyncTree_=new Gg({startListening:(r,o,c,h)=>(a.server_.listen(r,c,o,(_,p)=>{const m=h(_,p);an(a.eventQueue_,r._path,m)}),[]),stopListening:(r,o)=>{a.server_.unlisten(r,o)}})}function cR(a){const i=a.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Ih(a){return Vw({timestamp:cR(a)})}function jg(a,t,i,r,o){a.dataUpdateCount++;const c=new Se(t);i=a.interceptServerDataCallback_?a.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(r){const p=so(i,m=>Ke(m));h=Lw(a.serverSyncTree_,c,p,o)}else{const p=Ke(i);h=Gy(a.serverSyncTree_,c,p,o)}else if(r){const p=so(i,m=>Ke(m));h=xw(a.serverSyncTree_,c,p)}else{const p=Ke(i);h=Dr(a.serverSyncTree_,c,p)}let _=c;h.length>0&&(_=Ho(a,c)),an(a.eventQueue_,_,h)}function Yg(a,t){xh(a,"connected",t),t===!1&&_R(a)}function fR(a,t){yt(t,(i,r)=>{xh(a,i,r)})}function xh(a,t,i){const r=new Se("/.info/"+t),o=Ke(i);a.infoData_.updateSnapshot(r,o);const c=Dr(a.infoSyncTree_,r,o);an(a.eventQueue_,r,c)}function e0(a){return a.nextWriteId_++}function hR(a,t,i){const r=Hw(a.serverSyncTree_,t);return r!=null?Promise.resolve(r):a.server_.get(t).then(o=>{const c=Ke(o).withIndex(t._queryParams.getIndex());zw(a.serverSyncTree_,t,i,!0);let h;if(t._queryParams.loadsAllData())h=Dr(a.serverSyncTree_,t._path,c);else{const _=Er(a.serverSyncTree_,t);h=Gy(a.serverSyncTree_,t._path,c,_)}return an(a.eventQueue_,t._path,h),qy(a.serverSyncTree_,t,i,null,!0),c},o=>(zo(a,"get for query "+Pe(t)+" failed: "+o),Promise.reject(new Error(o))))}function dR(a,t,i,r,o){zo(a,"set",{path:t.toString(),value:i,priority:r});const c=Ih(a),h=Ke(i,r),_=bh(a.serverSyncTree_,t),p=Qy(h,_,c),m=e0(a),y=Py(a.serverSyncTree_,t,p,m,!0);$y(a.eventQueue_,y),a.server_.put(t.toString(),h.val(!0),(b,k)=>{const L=b==="ok";L||vt("set at "+t+" failed: "+b);const K=qi(a.serverSyncTree_,m,!L);an(a.eventQueue_,t,K),mR(a,o,b,k)});const T=a0(a,t);Ho(a,T),an(a.eventQueue_,T,[])}function _R(a){zo(a,"onDisconnectEvents");const t=Ih(a),i=go();kf(a.onDisconnect_,ce(),(o,c)=>{const h=Qw(o,c,a.serverSyncTree_,t);Cy(i,o,h)});let r=[];kf(i,ce(),(o,c)=>{r=r.concat(Dr(a.serverSyncTree_,o,c));const h=a0(a,o);Ho(a,h)}),a.onDisconnect_=go(),an(a.eventQueue_,ce(),r)}function pR(a){a.persistentConnection_&&a.persistentConnection_.interrupt(rR)}function zo(a,...t){let i="";a.persistentConnection_&&(i=a.persistentConnection_.id+":"),rt(i,...t)}function mR(a,t,i,r){t&&$s(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;r&&(c+=": "+r);const h=new Error(c);h.code=o,t(h)}})}function t0(a,t,i){return bh(a.serverSyncTree_,t,i)||Q.EMPTY_NODE}function kh(a,t=a.transactionQueueTree_){if(t||Bo(a,t),ea(t)){const i=i0(a,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&gR(a,Ir(t),i)}else Xy(t)&&Lo(t,i=>{kh(a,i)})}function gR(a,t,i){const r=i.map(m=>m.currentWriteId),o=t0(a,t,r);let c=o;const h=o.hash();for(let m=0;m<i.length;m++){const y=i[m];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=ut(t,y.path);c=c.updateChild(T,y.currentOutputSnapshotRaw)}const _=c.val(!0),p=t;a.server_.put(p.toString(),_,m=>{zo(a,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const T=[];for(let b=0;b<i.length;b++)i[b].status=2,y=y.concat(qi(a.serverSyncTree_,i[b].currentWriteId)),i[b].onComplete&&T.push(()=>i[b].onComplete(null,!0,i[b].currentOutputSnapshotResolved)),i[b].unwatcher();Bo(a,Dh(a.transactionQueueTree_,t)),kh(a,a.transactionQueueTree_),an(a.eventQueue_,t,y);for(let b=0;b<T.length;b++)$s(T[b])}else{if(m==="datastale")for(let T=0;T<i.length;T++)i[T].status===3?i[T].status=4:i[T].status=0;else{vt("transaction at "+p.toString()+" failed: "+m);for(let T=0;T<i.length;T++)i[T].status=4,i[T].abortReason=m}Ho(a,t)}},h)}function Ho(a,t){const i=n0(a,t),r=Ir(i),o=i0(a,i);return vR(a,o,r),r}function vR(a,t,i){if(t.length===0)return;const r=[];let o=[];const h=t.filter(_=>_.status===0).map(_=>_.currentWriteId);for(let _=0;_<t.length;_++){const p=t[_],m=ut(i,p.path);let y=!1,T;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,o=o.concat(qi(a.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=lR)y=!0,T="maxretry",o=o.concat(qi(a.serverSyncTree_,p.currentWriteId,!0));else{const b=t0(a,p.path,h);p.currentInputSnapshot=b;const k=t[_].update(b.val());if(k!==void 0){Mh("transaction failed: Data returned ",k,p.path);let L=Ke(k);typeof k=="object"&&k!=null&&Dn(k,".priority")||(L=L.updatePriority(b.getPriority()));const $=p.currentWriteId,Ue=Ih(a),Oe=Qy(L,b,Ue);p.currentOutputSnapshotRaw=L,p.currentOutputSnapshotResolved=Oe,p.currentWriteId=e0(a),h.splice(h.indexOf($),1),o=o.concat(Py(a.serverSyncTree_,p.path,Oe,p.currentWriteId,p.applyLocally)),o=o.concat(qi(a.serverSyncTree_,$,!0))}else y=!0,T="nodata",o=o.concat(qi(a.serverSyncTree_,p.currentWriteId,!0))}an(a.eventQueue_,i,o),o=[],y&&(t[_].status=2,function(b){setTimeout(b,Math.floor(0))}(t[_].unwatcher),t[_].onComplete&&(T==="nodata"?r.push(()=>t[_].onComplete(null,!1,t[_].currentInputSnapshot)):r.push(()=>t[_].onComplete(new Error(T),!1,null))))}Bo(a,a.transactionQueueTree_);for(let _=0;_<r.length;_++)$s(r[_]);kh(a,a.transactionQueueTree_)}function n0(a,t){let i,r=a.transactionQueueTree_;for(i=ae(t);i!==null&&ea(r)===void 0;)r=Dh(r,i),t=Te(t),i=ae(t);return r}function i0(a,t){const i=[];return s0(a,t,i),i.sort((r,o)=>r.order-o.order),i}function s0(a,t,i){const r=ea(t);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);Lo(t,o=>{s0(a,o,i)})}function Bo(a,t){const i=ea(t);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,Fy(t,i.length>0?i:void 0)}Lo(t,r=>{Bo(a,r)})}function a0(a,t){const i=Ir(n0(a,t)),r=Dh(a.transactionQueueTree_,t);return Xw(r,o=>{Sf(a,o)}),Sf(a,r),Ky(r,o=>{Sf(a,o)}),i}function Sf(a,t){const i=ea(t);if(i){const r=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(qi(a.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Fy(t,void 0):i.length=c+1,an(a.eventQueue_,Ir(t),o);for(let h=0;h<r.length;h++)$s(r[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(a){let t="";const i=a.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function ER(a){const t={};a.charAt(0)==="?"&&(a=a.substring(1));for(const i of a.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vt(`Invalid query segment '${i}' in query '${a}'`)}return t}const Qg=function(a,t){const i=SR(a),r=i.namespace;i.domain==="firebase.com"&&On(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&On("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||IC();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new sy(i.host,i.secure,r,o,t,"",r!==i.subdomain),path:new Se(i.pathString)}},SR=function(a){let t="",i="",r="",o="",c="",h=!0,_="https",p=443;if(typeof a=="string"){let m=a.indexOf("//");m>=0&&(_=a.substring(0,m-1),a=a.substring(m+2));let y=a.indexOf("/");y===-1&&(y=a.length);let T=a.indexOf("?");T===-1&&(T=a.length),t=a.substring(0,Math.min(y,T)),y<T&&(o=yR(a.substring(y,T)));const b=ER(a.substring(Math.min(a.length,T)));m=t.indexOf(":"),m>=0?(h=_==="https"||_==="wss",p=parseInt(t.substring(m+1),10)):m=t.length;const k=t.slice(0,m);if(k.toLowerCase()==="localhost")i="localhost";else if(k.split(".").length<=2)i=k;else{const L=t.indexOf(".");r=t.substring(0,L).toLowerCase(),i=t.substring(L+1),c=r}"ns"in b&&(c=b.ns)}return{host:t,port:p,domain:i,subdomain:r,secure:h,scheme:_,pathString:o,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(t,i,r,o){this.eventType=t,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class TR{constructor(t,i,r){this.eventRegistration=t,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,i,r,o){this._repo=t,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return se(this._path)?null:dy(this._path)}get ref(){return new Mn(this._repo,this._path)}get _queryIdentifier(){const t=Mg(this._queryParams),i=oh(t);return i==="{}"?"default":i}get _queryObject(){return Mg(this._queryParams)}isEqual(t){if(t=Bt(t),!(t instanceof Uh))return!1;const i=this._repo===t._repo,r=my(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+pA(this._path)}}class Mn extends Uh{constructor(t,i){super(t,i,new ph,!1)}get parent(){const t=py(this._path);return t===null?null:new Mn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Sr{constructor(t,i,r){this._node=t,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Se(t),r=qf(this.ref,t);return new Sr(this._node.getChild(i),r,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>t(new Sr(o,qf(this.ref,r),Ie)))}hasChild(t){const i=new Se(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pf(a,t){return a=Bt(a),a._checkNotDeleted("ref"),t!==void 0?qf(a._root,t):a._root}function qf(a,t){return a=Bt(a),ae(a._path)===null?eR("child","path",t):Jy("child","path",t),new Mn(a._repo,qe(a._path,t))}function Fg(a,t){a=Bt(a),tR("set",a._path),$w("set",t,a._path);const i=new wo;return dR(a._repo,a._path,t,null,i.wrapCallback(()=>{})),i.promise}function AR(a){a=Bt(a);const t=new CR(()=>{}),i=new Lh(t);return hR(a._repo,a,i).then(r=>new Sr(r,new Mn(a._repo,a._path),a._queryParams.getIndex()))}class Lh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const r=i._queryParams.getIndex();return new bR("value",this,new Sr(t.snapshotNode,new Mn(i._repo,i._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new TR(this,t,i):null}matches(t){return t instanceof Lh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Aw(Mn);Dw(Mn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="FIREBASE_DATABASE_EMULATOR_HOST",Gf={};let RR=!1;function NR(a,t,i,r){const o=t.lastIndexOf(":"),c=t.substring(0,o),h=br(c);a.repoInfo_=new sy(t,h,a.repoInfo_.namespace,a.repoInfo_.webSocketOnly,a.repoInfo_.nodeAdmin,a.repoInfo_.persistenceKey,a.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(a.authTokenProvider_=r)}function OR(a,t,i,r,o){let c=r||a.options.databaseURL;c===void 0&&(a.options.projectId||On("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",a.options.projectId),c=`${a.options.projectId}-default-rtdb.firebaseio.com`);let h=Qg(c,o),_=h.repoInfo,p;typeof process<"u"&&dg&&(p=dg[wR]),p?(c=`http://${p}?ns=${_.namespace}`,h=Qg(c,o),_=h.repoInfo):h.repoInfo.secure;const m=new VC(a.name,a.options,t);nR("Invalid Firebase Database URL",h),se(h.path)||On("Database URL must point to the root of a Firebase Database (not including a child path).");const y=MR(_,a,m,new GC(a,i));return new IR(y,a)}function DR(a,t){const i=Gf[t];(!i||i[a.key]!==a)&&On(`Database ${t}(${a.repoInfo_}) has already been deleted.`),pR(a),delete i[a.key]}function MR(a,t,i,r){let o=Gf[t.name];o||(o={},Gf[t.name]=o);let c=o[a.toURLString()];return c&&On("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new oR(a,RR,i,r),o[a.toURLString()]=c,c}class IR{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mn(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&On("Cannot call "+t+" on a deleted database.")}}function xR(a=uv(),t){const i=Zf(a,"database").getImmediate({identifier:t});if(!i._instanceStarted){const r=JS("database");r&&kR(i,...r)}return i}function kR(a,t,i,r={}){a=Bt(a),a._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=a._repoInternal;if(a._instanceStarted){if(o===a._repoInternal.repoInfo_.host&&Vi(r,c.repoInfo_.emulatorOptions))return;On("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)r.mockUserToken&&On('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new to(to.OWNER);else if(r.mockUserToken){const _=typeof r.mockUserToken=="string"?r.mockUserToken:$S(r.mockUserToken,a.app.options.projectId);h=new to(_)}br(t)&&(nv(t),iv("Database",!0)),NR(c,o,r,h)}/**
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
 */function UR(a){wC(Zs),Vs(new ji("database",(t,{instanceIdentifier:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return OR(r,o,c,i)},"PUBLIC").setMultipleInstances(!0)),ci(_g,pg,a),ci(_g,pg,"esm2017")}wn.prototype.simpleListen=function(a,t){this.sendRequest("q",{p:a},t)};wn.prototype.echo=function(a,t){this.sendRequest("echo",{d:a},t)};UR();let Xg,Ao;const LR={apiKey:"AIzaSyAKJ4yC-PXdQfaWMQRMWumS85GaGPpvbLE",authDomain:"comp-2025-george-leask.firebaseapp.com",projectId:"comp-2025-george-leask",storageBucket:"comp-2025-george-leask.firebasestorage.app",messagingSenderId:"727231405255",appId:"1:727231405255:web:9f4f51e64681939067b2e2",measurementId:"G-3LTSMW0XGY",databaseURL:"https://comp-2025-george-leask-default-rtdb.asia-southeast1.firebasedatabase.app/"};function zR(){Xg=ov(LR),Ao=xR(Xg),console.log("Database loaded!")}async function HR(){const a=Gv(),t=new bn;t.setCustomParameters({prompt:"select_account"});try{const i=await k1(a,t);return console.info("authentication success, result: "+i),i}catch(i){throw console.info("authentication fail, error: "+i),i}}function BR(){const a=document.getElementById("loginForm");a.addEventListener("submit",t=>{t.preventDefault();const i={};new FormData(a).forEach((r,o)=>{typeof r=="string"&&(i[o]=r.toLowerCase())}),console.log(i),PR(i)})}async function PR(a){try{const t=await HR();console.log(t),qR(a),document.cookie=`auth=${t}`}catch(t){console.log("Login failed: "+t)}}async function qR(a){const i=(await AR(Pf(Ao,"/panel/public/"))).val();console.log(i);const r=r0();var o=i.hasOwnProperty(r.uid);o&&GR(a)}function GR(a){let t;try{t=r0()}catch(h){console.error(h);return}const i=t.uid,r={username:a.username,photourl:t.photoURL||""},o={email:t.email||"",realName:t.displayName||""};async function c(h,_){try{await Fg(Pf(Ao,`/panel/public/${i}`),h),await Fg(Pf(Ao,`/panel/users/${i}`),_)}catch(p){console.error(p)}}c(r,o)}function r0(){const t=Gv().currentUser;if(!t)throw new Error("No user is currently signed in.");return t}document.addEventListener("DOMContentLoaded",()=>{BR(),zR()});
