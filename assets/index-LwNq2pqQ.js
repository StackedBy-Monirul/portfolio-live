(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function CM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qv={exports:{}},zc={},Kv={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),RM=Symbol.for("react.portal"),PM=Symbol.for("react.fragment"),DM=Symbol.for("react.strict_mode"),LM=Symbol.for("react.profiler"),NM=Symbol.for("react.provider"),IM=Symbol.for("react.context"),UM=Symbol.for("react.forward_ref"),FM=Symbol.for("react.suspense"),OM=Symbol.for("react.memo"),kM=Symbol.for("react.lazy"),bm=Symbol.iterator;function BM(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qv=Object.assign,Jv={};function uo(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Zv}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ex(){}ex.prototype=uo.prototype;function Uh(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Zv}var Fh=Uh.prototype=new ex;Fh.constructor=Uh;Qv(Fh,uo.prototype);Fh.isPureReactComponent=!0;var Cm=Array.isArray,tx=Object.prototype.hasOwnProperty,Oh={current:null},nx={key:!0,ref:!0,__self:!0,__source:!0};function ix(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tx.call(e,i)&&!nx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ra,type:t,key:s,ref:o,props:r,_owner:Oh.current}}function VM(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function zM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rm=/\/+/g;function pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zM(""+t.key):e.toString(36)}function Bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case RM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pu(o,0):i,Cm(r)?(n="",t!=null&&(n=t.replace(Rm,"$&/")+"/"),Bl(r,e,n,"",function(c){return c})):r!=null&&(kh(r)&&(r=VM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pu(s,a);o+=Bl(s,e,n,l,r)}else if(l=BM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pu(s,a++),o+=Bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function HM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Vl={transition:null},GM={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:Oh};function rx(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=uo;Xe.Fragment=PM;Xe.Profiler=LM;Xe.PureComponent=Uh;Xe.StrictMode=DM;Xe.Suspense=FM;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GM;Xe.act=rx;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Qv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tx.call(e,l)&&!nx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:IM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NM,_context:t},t.Consumer=t};Xe.createElement=ix;Xe.createFactory=function(t){var e=ix.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:UM,render:t}};Xe.isValidElement=kh;Xe.lazy=function(t){return{$$typeof:kM,_payload:{_status:-1,_result:t},_init:HM}};Xe.memo=function(t,e){return{$$typeof:OM,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Vl.transition;Vl.transition={};try{t()}finally{Vl.transition=e}};Xe.unstable_act=rx;Xe.useCallback=function(t,e){return sn.current.useCallback(t,e)};Xe.useContext=function(t){return sn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return sn.current.useEffect(t,e)};Xe.useId=function(){return sn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return sn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Xe.useRef=function(t){return sn.current.useRef(t)};Xe.useState=function(t){return sn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return sn.current.useTransition()};Xe.version="18.3.1";Kv.exports=Xe;var Q=Kv.exports;const Pm=CM(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WM=Q,jM=Symbol.for("react.element"),XM=Symbol.for("react.fragment"),YM=Object.prototype.hasOwnProperty,$M=WM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qM={key:!0,ref:!0,__self:!0,__source:!0};function sx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)YM.call(e,i)&&!qM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jM,type:t,key:s,ref:o,props:r,_owner:$M.current}}zc.Fragment=XM;zc.jsx=sx;zc.jsxs=sx;qv.exports=zc;var C=qv.exports,ox={exports:{}},An={},ax={exports:{}},lx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var q=L.length;L.push(W);e:for(;0<q;){var ue=q-1>>>1,oe=L[ue];if(0<r(oe,W))L[ue]=W,L[q]=oe,q=ue;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],q=L.pop();if(q!==W){L[0]=q;e:for(var ue=0,oe=L.length,Be=oe>>>1;ue<Be;){var ke=2*(ue+1)-1,X=L[ke],te=ke+1,J=L[te];if(0>r(X,q))te<oe&&0>r(J,X)?(L[ue]=J,L[te]=q,ue=te):(L[ue]=X,L[ke]=q,ue=ke);else if(te<oe&&0>r(J,q))L[ue]=J,L[te]=q,ue=te;else break e}}return W}function r(L,W){var q=L.sortIndex-W.sortIndex;return q!==0?q:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=L)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function _(L){if(y=!1,v(L),!x)if(n(l)!==null)x=!0,G(T);else{var W=n(c);W!==null&&Y(_,W.startTime-L)}}function T(L,W){x=!1,y&&(y=!1,h(R),R=-1),p=!0;var q=f;try{for(v(W),d=n(l);d!==null&&(!(d.expirationTime>W)||L&&!D());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var oe=ue(d.expirationTime<=W);W=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),v(W)}else i(l);d=n(l)}if(d!==null)var Be=!0;else{var ke=n(c);ke!==null&&Y(_,ke.startTime-W),Be=!1}return Be}finally{d=null,f=q,p=!1}}var b=!1,A=null,R=-1,E=5,M=-1;function D(){return!(t.unstable_now()-M<E)}function z(){if(A!==null){var L=t.unstable_now();M=L;var W=!0;try{W=A(!0,L)}finally{W?H():(b=!1,A=null)}}else b=!1}var H;if(typeof g=="function")H=function(){g(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,j=$.port2;$.port1.onmessage=z,H=function(){j.postMessage(null)}}else H=function(){m(z,0)};function G(L){A=L,b||(b=!0,H())}function Y(L,W){R=m(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,G(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var q=f;f=W;try{return L()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=f;f=L;try{return W()}finally{f=q}},t.unstable_scheduleCallback=function(L,W,q){var ue=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ue+q:ue):q=ue,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=q+oe,L={id:u++,callback:W,priorityLevel:L,startTime:q,expirationTime:oe,sortIndex:-1},q>ue?(L.sortIndex=q,e(c,L),n(l)===null&&L===n(c)&&(y?(h(R),R=-1):y=!0,Y(_,q-ue))):(L.sortIndex=oe,e(l,L),x||p||(x=!0,G(T))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var W=f;return function(){var q=f;f=W;try{return L.apply(this,arguments)}finally{f=q}}}})(lx);ax.exports=lx;var KM=ax.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZM=Q,wn=KM;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cx=new Set,ta={};function is(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(ta[t]=e,t=0;t<e.length;t++)cx.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ld=Object.prototype.hasOwnProperty,QM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Lm={};function JM(t){return Ld.call(Lm,t)?!0:Ld.call(Dm,t)?!1:QM.test(t)?Lm[t]=!0:(Dm[t]=!0,!1)}function e1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t1(t,e,n,i){if(e===null||typeof e>"u"||e1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Vh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Vh);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Vh);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Vh);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function zh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t1(e,n,r,i)&&(n=null),i||r===null?JM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=ZM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Nd=Symbol.for("react.profiler"),ux=Symbol.for("react.provider"),dx=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),fx=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,mu;function Uo(t){if(mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mu=e&&e[1]||""}return`
`+mu+t}var gu=!1;function vu(t,e){if(!t||gu)return"";gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function n1(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=vu(t.type,!1),t;case 11:return t=vu(t.type.render,!1),t;case 1:return t=vu(t.type,!0),t;default:return""}}function Fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Ss:return"Portal";case Nd:return"Profiler";case Hh:return"StrictMode";case Id:return"Suspense";case Ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dx:return(t.displayName||"Context")+".Consumer";case ux:return(t._context.displayName||"Context")+".Provider";case Gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:Fd(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Fd(t(e))}catch{}}return null}function i1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r1(t){var e=hx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=r1(t))}function px(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=hx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Od(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Im(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mx(t,e){e=e.checked,e!=null&&zh(t,"checked",e,!1)}function kd(t,e){mx(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bd(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Um(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bd(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Fo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function gx(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,xx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){s1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function yx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function _x(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=yx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o1=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hd(t,e){if(e){if(o1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jd=null,zs=null,Hs=null;function km(t){if(t=La(t)){if(typeof jd!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Xc(e),jd(t.stateNode,t.type,e))}}function Sx(t){zs?Hs?Hs.push(t):Hs=[t]:zs=t}function Mx(){if(zs){var t=zs,e=Hs;if(Hs=zs=null,km(t),e)for(t=0;t<e.length;t++)km(e[t])}}function Ex(t,e){return t(e)}function Tx(){}var xu=!1;function wx(t,e,n){if(xu)return t(e,n);xu=!0;try{return Ex(t,e,n)}finally{xu=!1,(zs!==null||Hs!==null)&&(Tx(),Mx())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Xd=!1;if(Ni)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Xd=!1}function a1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ho=!1,lc=null,cc=!1,Yd=null,l1={onError:function(t){Ho=!0,lc=t}};function c1(t,e,n,i,r,s,o,a,l){Ho=!1,lc=null,a1.apply(l1,arguments)}function u1(t,e,n,i,r,s,o,a,l){if(c1.apply(this,arguments),Ho){if(Ho){var c=lc;Ho=!1,lc=null}else throw Error(ie(198));cc||(cc=!0,Yd=c)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ax(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(t){if(rs(t)!==t)throw Error(ie(188))}function d1(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bm(r),t;if(s===i)return Bm(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function bx(t){return t=d1(t),t!==null?Cx(t):null}function Cx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cx(t);if(e!==null)return e;t=t.sibling}return null}var Rx=wn.unstable_scheduleCallback,Vm=wn.unstable_cancelCallback,f1=wn.unstable_shouldYield,h1=wn.unstable_requestPaint,bt=wn.unstable_now,p1=wn.unstable_getCurrentPriorityLevel,Xh=wn.unstable_ImmediatePriority,Px=wn.unstable_UserBlockingPriority,uc=wn.unstable_NormalPriority,m1=wn.unstable_LowPriority,Dx=wn.unstable_IdlePriority,Hc=null,di=null;function g1(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Hc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:y1,v1=Math.log,x1=Math.LN2;function y1(t){return t>>>=0,t===0?32:31-(v1(t)/x1|0)|0}var Za=64,Qa=4194304;function Oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Oo(a):(s&=o,s!==0&&(i=Oo(s)))}else o=n&~r,o!==0?i=Oo(o):s!==0&&(i=Oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function _1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lx(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function M1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Nx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ix,$h,Ux,Fx,Ox,qd=!1,Ja=[],ir=null,rr=null,sr=null,ra=new Map,sa=new Map,Qi=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function T1(t,e,n,i,r){switch(e){case"focusin":return ir=Eo(ir,t,e,n,i,r),!0;case"dragenter":return rr=Eo(rr,t,e,n,i,r),!0;case"mouseover":return sr=Eo(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,Eo(ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,Eo(sa.get(s)||null,t,e,n,i,r)),!0}return!1}function kx(t){var e=Br(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ax(n),e!==null){t.blockedOn=e,Ox(t.priority,function(){Ux(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wd=i,n.target.dispatchEvent(i),Wd=null}else return e=La(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){zl(t)&&n.delete(e)}function w1(){qd=!1,ir!==null&&zl(ir)&&(ir=null),rr!==null&&zl(rr)&&(rr=null),sr!==null&&zl(sr)&&(sr=null),ra.forEach(Hm),sa.forEach(Hm)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,qd||(qd=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,w1)))}function oa(t){function e(r){return To(r,t)}if(0<Ja.length){To(Ja[0],t);for(var n=1;n<Ja.length;n++){var i=Ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&To(ir,t),rr!==null&&To(rr,t),sr!==null&&To(sr,t),ra.forEach(e),sa.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)kx(n),n.blockedOn===null&&Qi.shift()}var Gs=zi.ReactCurrentBatchConfig,fc=!0;function A1(t,e,n,i){var r=it,s=Gs.transition;Gs.transition=null;try{it=1,qh(t,e,n,i)}finally{it=r,Gs.transition=s}}function b1(t,e,n,i){var r=it,s=Gs.transition;Gs.transition=null;try{it=4,qh(t,e,n,i)}finally{it=r,Gs.transition=s}}function qh(t,e,n,i){if(fc){var r=Kd(t,e,n,i);if(r===null)Ru(t,e,i,hc,n),zm(t,i);else if(T1(r,t,e,n,i))i.stopPropagation();else if(zm(t,i),e&4&&-1<E1.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&Ix(s),s=Kd(t,e,n,i),s===null&&Ru(t,e,i,hc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ru(t,e,i,null,n)}}var hc=null;function Kd(t,e,n,i){if(hc=null,t=jh(i),t=Br(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ax(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function Bx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p1()){case Xh:return 1;case Px:return 4;case uc:case m1:return 16;case Dx:return 536870912;default:return 16}default:return 16}}var tr=null,Kh=null,Hl=null;function Vx(){if(Hl)return Hl;var t,e=Kh,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Hl=r.slice(t,1<i?1-i:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Gm(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:Gm,this.isPropagationStopped=Gm,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=bn(fo),Da=St({},fo,{view:0,detail:0}),C1=bn(Da),_u,Su,wo,Gc=St({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(_u=t.screenX-wo.screenX,Su=t.screenY-wo.screenY):Su=_u=0,wo=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Wm=bn(Gc),R1=St({},Gc,{dataTransfer:0}),P1=bn(R1),D1=St({},Da,{relatedTarget:0}),Mu=bn(D1),L1=St({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),N1=bn(L1),I1=St({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U1=bn(I1),F1=St({},fo,{data:0}),jm=bn(F1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function Qh(){return V1}var z1=St({},Da,{key:function(t){if(t.key){var e=O1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H1=bn(z1),G1=St({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=bn(G1),W1=St({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),j1=bn(W1),X1=St({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y1=bn(X1),$1=St({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=bn($1),K1=[9,13,27,32],Jh=Ni&&"CompositionEvent"in window,Go=null;Ni&&"documentMode"in document&&(Go=document.documentMode);var Z1=Ni&&"TextEvent"in window&&!Go,zx=Ni&&(!Jh||Go&&8<Go&&11>=Go),Ym=" ",$m=!1;function Hx(t,e){switch(t){case"keyup":return K1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function Q1(t,e){switch(t){case"compositionend":return Gx(e);case"keypress":return e.which!==32?null:($m=!0,Ym);case"textInput":return t=e.data,t===Ym&&$m?null:t;default:return null}}function J1(t,e){if(Es)return t==="compositionend"||!Jh&&Hx(t,e)?(t=Vx(),Hl=Kh=tr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zx&&e.locale!=="ko"?null:e.data;default:return null}}var eE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eE[t.type]:e==="textarea"}function Wx(t,e,n,i){Sx(i),e=pc(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,aa=null;function tE(t){ty(t,0)}function Wc(t){var e=As(t);if(px(e))return t}function nE(t,e){if(t==="change")return e}var jx=!1;if(Ni){var Eu;if(Ni){var Tu="oninput"in document;if(!Tu){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Tu=typeof Km.oninput=="function"}Eu=Tu}else Eu=!1;jx=Eu&&(!document.documentMode||9<document.documentMode)}function Zm(){Wo&&(Wo.detachEvent("onpropertychange",Xx),aa=Wo=null)}function Xx(t){if(t.propertyName==="value"&&Wc(aa)){var e=[];Wx(e,aa,t,jh(t)),wx(tE,e)}}function iE(t,e,n){t==="focusin"?(Zm(),Wo=e,aa=n,Wo.attachEvent("onpropertychange",Xx)):t==="focusout"&&Zm()}function rE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(aa)}function sE(t,e){if(t==="click")return Wc(e)}function oE(t,e){if(t==="input"||t==="change")return Wc(e)}function aE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:aE;function la(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ld.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Qm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function Yx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $x(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lE(t){var e=$x(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yx(n.ownerDocument.documentElement,n)){if(i!==null&&ep(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jm(n,s);var o=Jm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cE=Ni&&"documentMode"in document&&11>=document.documentMode,Ts=null,Zd=null,jo=null,Qd=!1;function eg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||Ts==null||Ts!==ac(i)||(i=Ts,"selectionStart"in i&&ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&la(jo,i)||(jo=i,i=pc(Zd,"onSelect"),0<i.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},wu={},qx={};Ni&&(qx=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function jc(t){if(wu[t])return wu[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qx)return wu[t]=e[n];return t}var Kx=jc("animationend"),Zx=jc("animationiteration"),Qx=jc("animationstart"),Jx=jc("transitionend"),ey=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){ey.set(t,e),is(e,[t])}for(var Au=0;Au<tg.length;Au++){var bu=tg[Au],uE=bu.toLowerCase(),dE=bu[0].toUpperCase()+bu.slice(1);yr(uE,"on"+dE)}yr(Kx,"onAnimationEnd");yr(Zx,"onAnimationIteration");yr(Qx,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(Jx,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function ng(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,u1(i,e,void 0,t),t.currentTarget=null}function ty(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ng(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ng(r,a,c),s=l}}}if(cc)throw t=Yd,cc=!1,Yd=null,t}function ut(t,e){var n=e[rf];n===void 0&&(n=e[rf]=new Set);var i=t+"__bubble";n.has(i)||(ny(e,t,2,!1),n.add(i))}function Cu(t,e,n){var i=0;e&&(i|=4),ny(n,t,i,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[nl]){t[nl]=!0,cx.forEach(function(n){n!=="selectionchange"&&(fE.has(n)||Cu(n,!1,t),Cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Cu("selectionchange",!1,e))}}function ny(t,e,n,i){switch(Bx(e)){case 1:var r=A1;break;case 4:r=b1;break;default:r=qh}n=r.bind(null,e,n,t),r=void 0,!Xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ru(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wx(function(){var c=s,u=jh(n),d=[];e:{var f=ey.get(t);if(f!==void 0){var p=Zh,x=t;switch(t){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":p=H1;break;case"focusin":x="focus",p=Mu;break;case"focusout":x="blur",p=Mu;break;case"beforeblur":case"afterblur":p=Mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=j1;break;case Kx:case Zx:case Qx:p=N1;break;case Jx:p=Y1;break;case"scroll":p=C1;break;case"wheel":p=q1;break;case"copy":case"cut":case"paste":p=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xm}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,v;g!==null;){v=g;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,h!==null&&(_=ia(g,h),_!=null&&y.push(ua(g,_,v)))),m)break;g=g.return}0<y.length&&(f=new p(f,x,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Wd&&(x=n.relatedTarget||n.fromElement)&&(Br(x)||x[Ii]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Br(x):null,x!==null&&(m=rs(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=Wm,_="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xm,_="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:As(p),v=x==null?f:As(x),f=new y(_,g+"leave",p,n,u),f.target=m,f.relatedTarget=v,_=null,Br(u)===c&&(y=new y(h,g+"enter",x,n,u),y.target=v,y.relatedTarget=m,_=y),m=_,p&&x)t:{for(y=p,h=x,g=0,v=y;v;v=os(v))g++;for(v=0,_=h;_;_=os(_))v++;for(;0<g-v;)y=os(y),g--;for(;0<v-g;)h=os(h),v--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=os(y),h=os(h)}y=null}else y=null;p!==null&&ig(d,f,p,y,!1),x!==null&&m!==null&&ig(d,m,x,y,!0)}}e:{if(f=c?As(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=nE;else if(qm(f))if(jx)T=oE;else{T=rE;var b=iE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=sE);if(T&&(T=T(t,c))){Wx(d,T,n,u);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Bd(f,"number",f.value)}switch(b=c?As(c):window,t){case"focusin":(qm(b)||b.contentEditable==="true")&&(Ts=b,Zd=c,jo=null);break;case"focusout":jo=Zd=Ts=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,eg(d,n,u);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":eg(d,n,u)}var A;if(Jh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Es?Hx(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(zx&&n.locale!=="ko"&&(Es||R!=="onCompositionStart"?R==="onCompositionEnd"&&Es&&(A=Vx()):(tr=u,Kh="value"in tr?tr.value:tr.textContent,Es=!0)),b=pc(c,R),0<b.length&&(R=new jm(R,t,null,n,u),d.push({event:R,listeners:b}),A?R.data=A:(A=Gx(n),A!==null&&(R.data=A)))),(A=Z1?Q1(t,n):J1(t,n))&&(c=pc(c,"onBeforeInput"),0<c.length&&(u=new jm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}ty(d,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(t,n),s!=null&&i.unshift(ua(t,s,r)),s=ia(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ia(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=ia(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(hE,`
`).replace(pE,"")}function il(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(ie(425))}function mc(){}var Jd=null,ef=null;function tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nf=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(vE)}:nf;function vE(t){setTimeout(function(){throw t})}function Pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oa(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),ai="__reactFiber$"+ho,da="__reactProps$"+ho,Ii="__reactContainer$"+ho,rf="__reactEvents$"+ho,xE="__reactListeners$"+ho,yE="__reactHandles$"+ho;function Br(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=og(t);t!==null;){if(n=t[ai])return n;t=og(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[ai]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Xc(t){return t[da]||null}var sf=[],bs=-1;function _r(t){return{current:t}}function dt(t){0>bs||(t.current=sf[bs],sf[bs]=null,bs--)}function lt(t,e){bs++,sf[bs]=t.current,t.current=e}var pr={},Qt=_r(pr),fn=_r(!1),Kr=pr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function gc(){dt(fn),dt(Qt)}function ag(t,e,n){if(Qt.current!==pr)throw Error(ie(168));lt(Qt,e),lt(fn,n)}function iy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,i1(t)||"Unknown",r));return St({},n,i)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Kr=Qt.current,lt(Qt,t),lt(fn,fn.current),!0}function lg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=iy(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,dt(fn),dt(Qt),lt(Qt,t)):dt(fn),lt(fn,n)}var Ai=null,Yc=!1,Du=!1;function ry(t){Ai===null?Ai=[t]:Ai.push(t)}function _E(t){Yc=!0,ry(t)}function Sr(){if(!Du&&Ai!==null){Du=!0;var t=0,e=it;try{var n=Ai;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,Yc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Rx(Xh,Sr),r}finally{it=e,Du=!1}}return null}var Cs=[],Rs=0,xc=null,yc=0,In=[],Un=0,Zr=null,Ci=1,Ri="";function Lr(t,e){Cs[Rs++]=yc,Cs[Rs++]=xc,xc=t,yc=e}function sy(t,e,n){In[Un++]=Ci,In[Un++]=Ri,In[Un++]=Zr,Zr=t;var i=Ci;t=Ri;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-Qn(e)+r|n<<r|i,Ri=s+t}else Ci=1<<s|n<<r|i,Ri=t}function tp(t){t.return!==null&&(Lr(t,1),sy(t,1,0))}function np(t){for(;t===xc;)xc=Cs[--Rs],Cs[Rs]=null,yc=Cs[--Rs],Cs[Rs]=null;for(;t===Zr;)Zr=In[--Un],In[Un]=null,Ri=In[--Un],In[Un]=null,Ci=In[--Un],In[Un]=null}var Tn=null,En=null,pt=!1,qn=null;function oy(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function af(t){if(pt){var e=En;if(e){var n=e;if(!cg(t,e)){if(of(t))throw Error(ie(418));e=or(n.nextSibling);var i=Tn;e&&cg(t,e)?oy(i,n):(t.flags=t.flags&-4097|2,pt=!1,Tn=t)}}else{if(of(t))throw Error(ie(418));t.flags=t.flags&-4097|2,pt=!1,Tn=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function rl(t){if(t!==Tn)return!1;if(!pt)return ug(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tf(t.type,t.memoizedProps)),e&&(e=En)){if(of(t))throw ay(),Error(ie(418));for(;e;)oy(t,e),e=or(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?or(t.stateNode.nextSibling):null;return!0}function ay(){for(var t=En;t;)t=or(t.nextSibling)}function Qs(){En=Tn=null,pt=!1}function ip(t){qn===null?qn=[t]:qn.push(t)}var SE=zi.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dg(t){var e=t._init;return e(t._payload)}function ly(t){function e(h,g){if(t){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=ur(h,g),h.index=0,h.sibling=null,h}function s(h,g,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,v,_){return g===null||g.tag!==6?(g=ku(v,h.mode,_),g.return=h,g):(g=r(g,v),g.return=h,g)}function l(h,g,v,_){var T=v.type;return T===Ms?u(h,g,v.props.children,_,v.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&dg(T)===g.type)?(_=r(g,v.props),_.ref=Ao(h,g,v),_.return=h,_):(_=Kl(v.type,v.key,v.props,null,h.mode,_),_.ref=Ao(h,g,v),_.return=h,_)}function c(h,g,v,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Bu(v,h.mode,_),g.return=h,g):(g=r(g,v.children||[]),g.return=h,g)}function u(h,g,v,_,T){return g===null||g.tag!==7?(g=Yr(v,h.mode,_,T),g.return=h,g):(g=r(g,v),g.return=h,g)}function d(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ku(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $a:return v=Kl(g.type,g.key,g.props,null,h.mode,v),v.ref=Ao(h,null,g),v.return=h,v;case Ss:return g=Bu(g,h.mode,v),g.return=h,g;case Ki:var _=g._init;return d(h,_(g._payload),v)}if(Fo(g)||So(g))return g=Yr(g,h.mode,v,null),g.return=h,g;sl(h,g)}return null}function f(h,g,v,_){var T=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(h,g,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return v.key===T?l(h,g,v,_):null;case Ss:return v.key===T?c(h,g,v,_):null;case Ki:return T=v._init,f(h,g,T(v._payload),_)}if(Fo(v)||So(v))return T!==null?null:u(h,g,v,_,null);sl(h,v)}return null}function p(h,g,v,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(v)||null,a(g,h,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:return h=h.get(_.key===null?v:_.key)||null,l(g,h,_,T);case Ss:return h=h.get(_.key===null?v:_.key)||null,c(g,h,_,T);case Ki:var b=_._init;return p(h,g,v,b(_._payload),T)}if(Fo(_)||So(_))return h=h.get(v)||null,u(g,h,_,T,null);sl(g,_)}return null}function x(h,g,v,_){for(var T=null,b=null,A=g,R=g=0,E=null;A!==null&&R<v.length;R++){A.index>R?(E=A,A=null):E=A.sibling;var M=f(h,A,v[R],_);if(M===null){A===null&&(A=E);break}t&&A&&M.alternate===null&&e(h,A),g=s(M,g,R),b===null?T=M:b.sibling=M,b=M,A=E}if(R===v.length)return n(h,A),pt&&Lr(h,R),T;if(A===null){for(;R<v.length;R++)A=d(h,v[R],_),A!==null&&(g=s(A,g,R),b===null?T=A:b.sibling=A,b=A);return pt&&Lr(h,R),T}for(A=i(h,A);R<v.length;R++)E=p(A,h,R,v[R],_),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?R:E.key),g=s(E,g,R),b===null?T=E:b.sibling=E,b=E);return t&&A.forEach(function(D){return e(h,D)}),pt&&Lr(h,R),T}function y(h,g,v,_){var T=So(v);if(typeof T!="function")throw Error(ie(150));if(v=T.call(v),v==null)throw Error(ie(151));for(var b=T=null,A=g,R=g=0,E=null,M=v.next();A!==null&&!M.done;R++,M=v.next()){A.index>R?(E=A,A=null):E=A.sibling;var D=f(h,A,M.value,_);if(D===null){A===null&&(A=E);break}t&&A&&D.alternate===null&&e(h,A),g=s(D,g,R),b===null?T=D:b.sibling=D,b=D,A=E}if(M.done)return n(h,A),pt&&Lr(h,R),T;if(A===null){for(;!M.done;R++,M=v.next())M=d(h,M.value,_),M!==null&&(g=s(M,g,R),b===null?T=M:b.sibling=M,b=M);return pt&&Lr(h,R),T}for(A=i(h,A);!M.done;R++,M=v.next())M=p(A,h,R,M.value,_),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),g=s(M,g,R),b===null?T=M:b.sibling=M,b=M);return t&&A.forEach(function(z){return e(h,z)}),pt&&Lr(h,R),T}function m(h,g,v,_){if(typeof v=="object"&&v!==null&&v.type===Ms&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:e:{for(var T=v.key,b=g;b!==null;){if(b.key===T){if(T=v.type,T===Ms){if(b.tag===7){n(h,b.sibling),g=r(b,v.props.children),g.return=h,h=g;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&dg(T)===b.type){n(h,b.sibling),g=r(b,v.props),g.ref=Ao(h,b,v),g.return=h,h=g;break e}n(h,b);break}else e(h,b);b=b.sibling}v.type===Ms?(g=Yr(v.props.children,h.mode,_,v.key),g.return=h,h=g):(_=Kl(v.type,v.key,v.props,null,h.mode,_),_.ref=Ao(h,g,v),_.return=h,h=_)}return o(h);case Ss:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),g=r(g,v.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Bu(v,h.mode,_),g.return=h,h=g}return o(h);case Ki:return b=v._init,m(h,g,b(v._payload),_)}if(Fo(v))return x(h,g,v,_);if(So(v))return y(h,g,v,_);sl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,v),g.return=h,h=g):(n(h,g),g=ku(v,h.mode,_),g.return=h,h=g),o(h)):n(h,g)}return m}var Js=ly(!0),cy=ly(!1),_c=_r(null),Sc=null,Ps=null,rp=null;function sp(){rp=Ps=Sc=null}function op(t){var e=_c.current;dt(_c),t._currentValue=e}function lf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Sc=t,rp=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(rp!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Sc===null)throw Error(ie(308));Ps=t,Sc.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Vr=null;function ap(t){Vr===null?Vr=[t]:Vr.push(t)}function uy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ap(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,ap(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yh(t,n)}}function fg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(f=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(p,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(p,d,f):x,f==null)break e;d=St({},d,f);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=d}}function hg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Na={},fi=_r(Na),fa=_r(Na),ha=_r(Na);function zr(t){if(t===Na)throw Error(ie(174));return t}function cp(t,e){switch(lt(ha,e),lt(fa,t),lt(fi,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zd(e,t)}dt(fi),lt(fi,e)}function eo(){dt(fi),dt(fa),dt(ha)}function fy(t){zr(ha.current);var e=zr(fi.current),n=zd(e,t.type);e!==n&&(lt(fa,t),lt(fi,n))}function up(t){fa.current===t&&(dt(fi),dt(fa))}var xt=_r(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function dp(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var jl=zi.ReactCurrentDispatcher,Nu=zi.ReactCurrentBatchConfig,Qr=0,_t=null,It=null,Vt=null,Tc=!1,Xo=!1,pa=0,ME=0;function Xt(){throw Error(ie(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function hp(t,e,n,i,r,s){if(Qr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?AE:bE,t=n(i,r),Xo){s=0;do{if(Xo=!1,pa=0,25<=s)throw Error(ie(301));s+=1,Vt=It=null,e.updateQueue=null,jl.current=CE,t=n(i,r)}while(Xo)}if(jl.current=wc,e=It!==null&&It.next!==null,Qr=0,Vt=It=_t=null,Tc=!1,e)throw Error(ie(300));return t}function pp(){var t=pa!==0;return pa=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?_t.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function zn(){if(It===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Vt===null?_t.memoizedState:Vt.next;if(e!==null)Vt=e,It=t;else{if(t===null)throw Error(ie(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Vt===null?_t.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function ma(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Qr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=u,Jr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hy(){}function py(t,e){var n=_t,i=zn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,mp(vy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,ga(9,gy.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ie(349));Qr&30||my(n,e,r)}return r}function my(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gy(t,e,n,i){e.value=n,e.getSnapshot=i,xy(e)&&yy(t)}function vy(t,e,n){return n(function(){xy(e)&&yy(t)})}function xy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function yy(t){var e=Ui(t,1);e!==null&&Jn(e,t,1,-1)}function pg(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=wE.bind(null,_t,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _y(){return zn().memoizedState}function Xl(t,e,n,i){var r=si();_t.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function $c(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&fp(i,o.deps)){r.memoizedState=ga(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ga(1|e,n,s,i)}function mg(t,e){return Xl(8390656,8,t,e)}function mp(t,e){return $c(2048,8,t,e)}function Sy(t,e){return $c(4,2,t,e)}function My(t,e){return $c(4,4,t,e)}function Ey(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ty(t,e,n){return n=n!=null?n.concat([t]):null,$c(4,4,Ey.bind(null,e,t),n)}function gp(){}function wy(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ay(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function by(t,e,n){return Qr&21?(ni(n,e)||(n=Lx(),_t.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function EE(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{it=n,Nu.transition=i}}function Cy(){return zn().memoizedState}function TE(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ry(t))Py(e,n);else if(n=uy(t,e,n,i),n!==null){var r=rn();Jn(n,t,i,r),Dy(n,e,i)}}function wE(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ry(t))Py(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,ap(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=uy(t,e,r,i),n!==null&&(r=rn(),Jn(n,t,i,r),Dy(n,e,i))}}function Ry(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function Py(t,e){Xo=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yh(t,n)}}var wc={readContext:Vn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},AE={readContext:Vn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,Ey.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=TE.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:pg,useDebugValue:gp,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=pg(!1),e=t[0];return t=EE.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=si();if(pt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),zt===null)throw Error(ie(349));Qr&30||my(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mg(vy.bind(null,i,s,t),[t]),i.flags|=2048,ga(9,gy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=zt.identifierPrefix;if(pt){var n=Ri,i=Ci;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ME++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bE={readContext:Vn,useCallback:wy,useContext:Vn,useEffect:mp,useImperativeHandle:Ty,useInsertionEffect:Sy,useLayoutEffect:My,useMemo:Ay,useReducer:Iu,useRef:_y,useState:function(){return Iu(ma)},useDebugValue:gp,useDeferredValue:function(t){var e=zn();return by(e,It.memoizedState,t)},useTransition:function(){var t=Iu(ma)[0],e=zn().memoizedState;return[t,e]},useMutableSource:hy,useSyncExternalStore:py,useId:Cy,unstable_isNewReconciler:!1},CE={readContext:Vn,useCallback:wy,useContext:Vn,useEffect:mp,useImperativeHandle:Ty,useInsertionEffect:Sy,useLayoutEffect:My,useMemo:Ay,useReducer:Uu,useRef:_y,useState:function(){return Uu(ma)},useDebugValue:gp,useDeferredValue:function(t){var e=zn();return It===null?e.memoizedState=t:by(e,It.memoizedState,t)},useTransition:function(){var t=Uu(ma)[0],e=zn().memoizedState;return[t,e]},useMutableSource:hy,useSyncExternalStore:py,useId:Cy,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=cr(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Jn(e,t,r,i),Wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=cr(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Jn(e,t,r,i),Wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=cr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Jn(e,t,i,n),Wl(e,t,i))}};function gg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,s):!0}function Ly(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=hn(e)?Kr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function uf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},lp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=hn(e)?Kr:Qt.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qc.enqueueReplaceState(r,r.state,null),Mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function to(t,e){try{var n="",i=e;do n+=n1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RE=typeof WeakMap=="function"?WeakMap:Map;function Ny(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bc||(bc=!0,Sf=i),df(t,e)},n}function Iy(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){df(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new RE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=GE.bind(null,t,e,n),e.then(t,t))}function yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _g(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var PE=zi.ReactCurrentOwner,un=!1;function tn(t,e,n,i){e.child=t===null?cy(e,null,n,i):Js(e,t.child,n,i)}function Sg(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=hp(t,e,n,i,s,r),n=pp(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(pt&&n&&tp(e),e.flags|=1,tn(t,e,i,r),e.child)}function Mg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uy(t,e,s,i,r)):(t=Kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function Uy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(la(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return ff(t,e,n,i,r)}function Fy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ls,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Ls,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Ls,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Ls,Mn),Mn|=i;return tn(t,e,r,n),e.child}function Oy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ff(t,e,n,i,r){var s=hn(n)?Kr:Qt.current;return s=Zs(e,s),Ws(e,r),n=hp(t,e,n,i,s,r),i=pp(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(pt&&i&&tp(e),e.flags|=1,tn(t,e,n,r),e.child)}function Eg(t,e,n,i,r){if(hn(n)){var s=!0;vc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)Yl(t,e),Ly(e,n,i),uf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=hn(n)?Kr:Qt.current,c=Zs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&vg(e,o,i,c),Zi=!1;var f=e.memoizedState;o.state=f,Mc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||fn.current||Zi?(typeof u=="function"&&(cf(e,n,u,i),l=e.memoizedState),(a=Zi||gg(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,dy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=hn(n)?Kr:Qt.current,l=Zs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&vg(e,o,i,l),Zi=!1,f=e.memoizedState,o.state=f,Mc(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||fn.current||Zi?(typeof p=="function"&&(cf(e,n,p,i),x=e.memoizedState),(c=Zi||gg(e,n,c,i,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return hf(t,e,n,i,s,r)}function hf(t,e,n,i,r,s){Oy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lg(e,n,!1),Fi(t,e,s);i=e.stateNode,PE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&lg(e,n,!0),e.child}function ky(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),cp(t,e.containerInfo)}function Tg(t,e,n,i,r){return Qs(),ip(r),e.flags|=256,tn(t,e,n,i),e.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function By(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(xt,r&1),t===null)return af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,i,0,null),t=Yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mf(n),e.memoizedState=pf,t):vp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return DE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pf,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function vp(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,i){return i!==null&&ip(i),Js(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Fu(Error(ie(422))),ol(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Qc({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=mf(o),e.memoizedState=pf,s);if(!(e.mode&1))return ol(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Fu(s,i,void 0),ol(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Jn(i,t,r,-1))}return Ep(),i=Fu(Error(ie(421))),ol(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=WE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=or(r.nextSibling),Tn=e,pt=!0,qn=null,t!==null&&(In[Un++]=Ci,In[Un++]=Ri,In[Un++]=Zr,Ci=t.id,Ri=t.overflow,Zr=e),e=vp(e,i.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lf(t.return,e,n)}function Ou(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Vy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ou(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ec(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ou(e,!0,n,null,s);break;case"together":Ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LE(t,e,n){switch(e.tag){case 3:ky(e),Qs();break;case 5:fy(e);break;case 1:hn(e.type)&&vc(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(_c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?By(t,e,n):(lt(xt,xt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);lt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Vy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Fy(t,e,n)}return Fi(t,e,n)}var zy,gf,Hy,Gy;zy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};Hy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(fi.current);var s=null;switch(n){case"input":r=Od(t,r),i=Od(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Vd(t,r),i=Vd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=mc)}Hd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gy=function(t,e,n,i){n!==i&&(e.flags|=4)};function bo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function NE(t,e,n){var i=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return hn(e.type)&&gc(),Yt(e),null;case 3:return i=e.stateNode,eo(),dt(fn),dt(Qt),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Tf(qn),qn=null))),gf(t,e),Yt(e),null;case 5:up(e);var r=zr(ha.current);if(n=e.type,t!==null&&e.stateNode!=null)Hy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Yt(e),null}if(t=zr(fi.current),rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)ut(ko[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Im(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Fm(i,s),ut("invalid",i)}Hd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(i.textContent,a,t),r=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":qa(i),Um(i,s,!0);break;case"textarea":qa(i),Om(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[da]=i,zy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gd(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)ut(ko[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Im(t,i),r=Od(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Fm(t,i),r=Vd(t,i),ut("invalid",t);break;default:r=i}Hd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_x(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&zh(t,s,l,o))}switch(n){case"input":qa(t),Um(t,i,!1);break;case"textarea":qa(t),Om(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Gy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=zr(ha.current),zr(fi.current),rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:il(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Yt(e),null;case 13:if(dt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&En!==null&&e.mode&1&&!(e.flags&128))ay(),Qs(),e.flags|=98560,s=!1;else if(s=rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ai]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else qn!==null&&(Tf(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Ut===0&&(Ut=3):Ep())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return eo(),gf(t,e),t===null&&ca(e.stateNode.containerInfo),Yt(e),null;case 10:return op(e.type._context),Yt(e),null;case 17:return hn(e.type)&&gc(),Yt(e),null;case 19:if(dt(xt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>no&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ec(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Yt(e),null}else 2*bt()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=xt.current,lt(xt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function IE(t,e){switch(np(e),e.tag){case 1:return hn(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),dt(fn),dt(Qt),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return up(e),null;case 13:if(dt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(xt),null;case 4:return eo(),null;case 10:return op(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var al=!1,Kt=!1,UE=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function vf(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Ag=!1;function FE(t,e){if(Jd=fc,t=$x(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ef={focusedElem:t,selectionRange:n},fc=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(_){Tt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=Ag,Ag=!1,x}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vf(e,n,s)}r=r.next}while(r!==i)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wy(t){var e=t.alternate;e!==null&&(t.alternate=null,Wy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[da],delete e[rf],delete e[xE],delete e[yE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jy(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(i!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}function _f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_f(t,e,n),t=t.sibling;t!==null;)_f(t,e,n),t=t.sibling}var Ht=null,$n=!1;function Hi(t,e,n){for(n=n.child;n!==null;)Xy(t,e,n),n=n.sibling}function Xy(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Hc,n)}catch{}switch(n.tag){case 5:Kt||Ds(n,e);case 6:var i=Ht,r=$n;Ht=null,Hi(t,e,n),Ht=i,$n=r,Ht!==null&&($n?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&($n?(t=Ht,n=n.stateNode,t.nodeType===8?Pu(t.parentNode,n):t.nodeType===1&&Pu(t,n),oa(t)):Pu(Ht,n.stateNode));break;case 4:i=Ht,r=$n,Ht=n.stateNode.containerInfo,$n=!0,Hi(t,e,n),Ht=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vf(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!Kt&&(Ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Hi(t,e,n),Kt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UE),e.forEach(function(i){var r=jE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,$n=!1;break e;case 3:Ht=a.stateNode.containerInfo,$n=!0;break e;case 4:Ht=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Ht===null)throw Error(ie(160));Xy(s,o,r),Ht=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yy(e,t),e=e.sibling}function Yy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ri(t),i&4){try{Yo(3,t,t.return),Kc(3,t)}catch(y){Tt(t,t.return,y)}try{Yo(5,t,t.return)}catch(y){Tt(t,t.return,y)}}break;case 1:Hn(e,t),ri(t),i&512&&n!==null&&Ds(n,n.return);break;case 5:if(Hn(e,t),ri(t),i&512&&n!==null&&Ds(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(y){Tt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mx(r,s),Gd(a,o);var c=Gd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?_x(r,d):u==="dangerouslySetInnerHTML"?xx(r,d):u==="children"?na(r,d):zh(r,u,d,c)}switch(a){case"input":kd(r,s);break;case"textarea":gx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(y){Tt(t,t.return,y)}}break;case 6:if(Hn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Tt(t,t.return,y)}}break;case 3:if(Hn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(y){Tt(t,t.return,y)}break;case 4:Hn(e,t),ri(t);break;case 13:Hn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_p=bt())),i&4&&Cg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||u,Hn(e,t),Kt=c):Hn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(d=ve=u;ve!==null;){switch(f=ve,p=f.child,f.tag){case 0:case 11:case 14:case 15:Yo(4,f,f.return);break;case 1:Ds(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){Tt(i,n,y)}}break;case 5:Ds(f,f.return);break;case 22:if(f.memoizedState!==null){Pg(d);continue}}p!==null?(p.return=f,ve=p):Pg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yx("display",o))}catch(y){Tt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Tt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(e,t),ri(t),i&4&&Cg(t);break;case 21:break;default:Hn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jy(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=bg(t);_f(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bg(t);yf(t,a,o);break;default:throw Error(ie(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OE(t,e,n){ve=t,$y(t)}function $y(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||al;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=al;var c=Kt;if(al=o,(Kt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Dg(r):l!==null?(l.return=o,ve=l):Dg(r);for(;s!==null;)ve=s,$y(s),s=s.sibling;ve=r,al=a,Kt=c}Rg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Rg(t)}}function Rg(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&oa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Kt||e.flags&512&&xf(e)}catch(f){Tt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Pg(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Dg(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{xf(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{xf(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var kE=Math.ceil,Ac=zi.ReactCurrentDispatcher,xp=zi.ReactCurrentOwner,kn=zi.ReactCurrentBatchConfig,qe=0,zt=null,Lt=null,Wt=0,Mn=0,Ls=_r(0),Ut=0,va=null,Jr=0,Zc=0,yp=0,$o=null,cn=null,_p=0,no=1/0,wi=null,bc=!1,Sf=null,lr=null,ll=!1,nr=null,Cc=0,qo=0,Mf=null,$l=-1,ql=0;function rn(){return qe&6?bt():$l!==-1?$l:$l=bt()}function cr(t){return t.mode&1?qe&2&&Wt!==0?Wt&-Wt:SE.transition!==null?(ql===0&&(ql=Lx()),ql):(t=it,t!==0||(t=window.event,t=t===void 0?16:Bx(t.type)),t):1}function Jn(t,e,n,i){if(50<qo)throw qo=0,Mf=null,Error(ie(185));Pa(t,n,i),(!(qe&2)||t!==zt)&&(t===zt&&(!(qe&2)&&(Zc|=n),Ut===4&&Ji(t,Wt)),pn(t,i),n===1&&qe===0&&!(e.mode&1)&&(no=bt()+500,Yc&&Sr()))}function pn(t,e){var n=t.callbackNode;S1(t,e);var i=dc(t,t===zt?Wt:0);if(i===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?_E(Lg.bind(null,t)):ry(Lg.bind(null,t)),gE(function(){!(qe&6)&&Sr()}),n=null;else{switch(Nx(i)){case 1:n=Xh;break;case 4:n=Px;break;case 16:n=uc;break;case 536870912:n=Dx;break;default:n=uc}n=n_(n,qy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qy(t,e){if($l=-1,ql=0,qe&6)throw Error(ie(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=dc(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rc(t,i);else{e=i;var r=qe;qe|=2;var s=Zy();(zt!==t||Wt!==e)&&(wi=null,no=bt()+500,Xr(t,e));do try{zE();break}catch(a){Ky(t,a)}while(!0);sp(),Ac.current=s,qe=r,Lt!==null?e=0:(zt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=$d(t),r!==0&&(i=r,e=Ef(t,r))),e===1)throw n=va,Xr(t,0),Ji(t,i),pn(t,bt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!BE(r)&&(e=Rc(t,i),e===2&&(s=$d(t),s!==0&&(i=s,e=Ef(t,s))),e===1))throw n=va,Xr(t,0),Ji(t,i),pn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Nr(t,cn,wi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=_p+500-bt(),10<e)){if(dc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nf(Nr.bind(null,t,cn,wi),e);break}Nr(t,cn,wi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kE(i/1960))-i,10<i){t.timeoutHandle=nf(Nr.bind(null,t,cn,wi),i);break}Nr(t,cn,wi);break;case 5:Nr(t,cn,wi);break;default:throw Error(ie(329))}}}return pn(t,bt()),t.callbackNode===n?qy.bind(null,t):null}function Ef(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Rc(t,e),t!==2&&(e=cn,cn=n,e!==null&&Tf(e)),t}function Tf(t){cn===null?cn=t:cn.push.apply(cn,t)}function BE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~yp,e&=~Zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function Lg(t){if(qe&6)throw Error(ie(327));js();var e=dc(t,0);if(!(e&1))return pn(t,bt()),null;var n=Rc(t,e);if(t.tag!==0&&n===2){var i=$d(t);i!==0&&(e=i,n=Ef(t,i))}if(n===1)throw n=va,Xr(t,0),Ji(t,e),pn(t,bt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,cn,wi),pn(t,bt()),null}function Sp(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(no=bt()+500,Yc&&Sr())}}function es(t){nr!==null&&nr.tag===0&&!(qe&6)&&js();var e=qe;qe|=1;var n=kn.transition,i=it;try{if(kn.transition=null,it=1,t)return t()}finally{it=i,kn.transition=n,qe=e,!(qe&6)&&Sr()}}function Mp(){Mn=Ls.current,dt(Ls)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mE(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(np(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gc();break;case 3:eo(),dt(fn),dt(Qt),dp();break;case 5:up(i);break;case 4:eo();break;case 13:dt(xt);break;case 19:dt(xt);break;case 10:op(i.type._context);break;case 22:case 23:Mp()}n=n.return}if(zt=t,Lt=t=ur(t.current,null),Wt=Mn=e,Ut=0,va=null,yp=Zc=Jr=0,cn=$o=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function Ky(t,e){do{var n=Lt;try{if(sp(),jl.current=wc,Tc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tc=!1}if(Qr=0,Vt=It=_t=null,Xo=!1,pa=0,xp.current=null,n===null||n.return===null){Ut=1,va=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=yg(o);if(p!==null){p.flags&=-257,_g(p,o,a,s,e),p.mode&1&&xg(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){xg(s,c,e),Ep();break e}l=Error(ie(426))}}else if(pt&&a.mode&1){var m=yg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),_g(m,o,a,s,e),ip(to(l,a));break e}}s=l=to(l,a),Ut!==4&&(Ut=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Ny(s,l,e);fg(s,h);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Iy(s,a,e);fg(s,_);break e}}s=s.return}while(s!==null)}Jy(n)}catch(T){e=T,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Zy(){var t=Ac.current;return Ac.current=wc,t===null?wc:t}function Ep(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(Jr&268435455)&&!(Zc&268435455)||Ji(zt,Wt)}function Rc(t,e){var n=qe;qe|=2;var i=Zy();(zt!==t||Wt!==e)&&(wi=null,Xr(t,e));do try{VE();break}catch(r){Ky(t,r)}while(!0);if(sp(),qe=n,Ac.current=i,Lt!==null)throw Error(ie(261));return zt=null,Wt=0,Ut}function VE(){for(;Lt!==null;)Qy(Lt)}function zE(){for(;Lt!==null&&!f1();)Qy(Lt)}function Qy(t){var e=t_(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Jy(t):Lt=e,xp.current=null}function Jy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IE(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=NE(n,e,Mn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Nr(t,e,n){var i=it,r=kn.transition;try{kn.transition=null,it=1,HE(t,e,n,i)}finally{kn.transition=r,it=i}return null}function HE(t,e,n,i){do js();while(nr!==null);if(qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M1(t,s),t===zt&&(Lt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,n_(uc,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=it;it=1;var a=qe;qe|=4,xp.current=null,FE(t,n),Yy(n,t),lE(ef),fc=!!Jd,ef=Jd=null,t.current=n,OE(n),h1(),qe=a,it=o,kn.transition=s}else t.current=n;if(ll&&(ll=!1,nr=t,Cc=r),s=t.pendingLanes,s===0&&(lr=null),g1(n.stateNode),pn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bc)throw bc=!1,t=Sf,Sf=null,t;return Cc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===Mf?qo++:(qo=0,Mf=t):qo=0,Sr(),null}function js(){if(nr!==null){var t=Nx(Cc),e=kn.transition,n=it;try{if(kn.transition=null,it=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Cc=0,qe&6)throw Error(ie(331));var r=qe;for(qe|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Yo(8,u,s)}var d=u.child;if(d!==null)d.return=u,ve=d;else for(;ve!==null;){u=ve;var f=u.sibling,p=u.return;if(Wy(u),u===c){ve=null;break}if(f!==null){f.return=p,ve=f;break}ve=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){o=ve;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ve=v;else e:for(o=g;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(T){Tt(a,a.return,T)}if(a===o){ve=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,ve=_;break e}ve=a.return}}if(qe=r,Sr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Hc,t)}catch{}i=!0}return i}finally{it=n,kn.transition=e}}return!1}function Ng(t,e,n){e=to(n,e),e=Ny(t,e,1),t=ar(t,e,1),e=rn(),t!==null&&(Pa(t,1,e),pn(t,e))}function Tt(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=to(n,t),t=Iy(e,t,1),e=ar(e,t,1),t=rn(),e!==null&&(Pa(e,1,t),pn(e,t));break}}e=e.return}}function GE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>bt()-_p?Xr(t,0):yp|=n),pn(t,e)}function e_(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=rn();t=Ui(t,e),t!==null&&(Pa(t,e,n),pn(t,n))}function WE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e_(t,n)}function jE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),e_(t,n)}var t_;t_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,LE(t,e,n);un=!!(t.flags&131072)}else un=!1,pt&&e.flags&1048576&&sy(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yl(t,e),t=e.pendingProps;var r=Zs(e,Qt.current);Ws(e,n),r=hp(null,e,i,t,r,n);var s=pp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,lp(e),r.updater=qc,e.stateNode=r,r._reactInternals=e,uf(e,i,t,n),e=hf(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&tp(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=YE(i),t=Yn(i,t),r){case 0:e=ff(null,e,i,t,n);break e;case 1:e=Eg(null,e,i,t,n);break e;case 11:e=Sg(null,e,i,t,n);break e;case 14:e=Mg(null,e,i,Yn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),ff(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Eg(t,e,i,r,n);case 3:e:{if(ky(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dy(t,e),Mc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=to(Error(ie(423)),e),e=Tg(t,e,i,n,r);break e}else if(i!==r){r=to(Error(ie(424)),e),e=Tg(t,e,i,n,r);break e}else for(En=or(e.stateNode.containerInfo.firstChild),Tn=e,pt=!0,qn=null,n=cy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=Fi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return fy(e),t===null&&af(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,tf(i,r)?o=null:s!==null&&tf(i,s)&&(e.flags|=32),Oy(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&af(e),null;case 13:return By(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Sg(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(_c,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!fn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=Vn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Mg(t,e,i,r,n);case 15:return Uy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Yl(t,e),e.tag=1,hn(i)?(t=!0,vc(e)):t=!1,Ws(e,n),Ly(e,i,r),uf(e,i,r,n),hf(null,e,i,!0,t,n);case 19:return Vy(t,e,n);case 22:return Fy(t,e,n)}throw Error(ie(156,e.tag))};function n_(t,e){return Rx(t,e)}function XE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new XE(t,e,n,i)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YE(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gh)return 11;if(t===Wh)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return Yr(n.children,r,s,e);case Hh:o=8,r|=8;break;case Nd:return t=On(12,n,e,r|2),t.elementType=Nd,t.lanes=s,t;case Id:return t=On(13,n,e,r),t.elementType=Id,t.lanes=s,t;case Ud:return t=On(19,n,e,r),t.elementType=Ud,t.lanes=s,t;case fx:return Qc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ux:o=10;break e;case dx:o=9;break e;case Gh:o=11;break e;case Wh:o=14;break e;case Ki:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Qc(t,e,n,i){return t=On(22,t,i,e),t.elementType=fx,t.lanes=n,t.stateNode={isHidden:!1},t}function ku(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $E(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yu(0),this.expirationTimes=yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wp(t,e,n,i,r,s,o,a,l){return t=new $E(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function qE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function i_(t){if(!t)return pr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(hn(n))return iy(t,n,e)}return e}function r_(t,e,n,i,r,s,o,a,l){return t=wp(n,i,!0,t,r,s,o,a,l),t.context=i_(null),n=t.current,i=rn(),r=cr(n),s=Di(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,Pa(t,r,i),pn(t,i),t}function Jc(t,e,n,i){var r=e.current,s=rn(),o=cr(r);return n=i_(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(Jn(t,r,o,s),Wl(t,r,o)),o}function Pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ig(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){Ig(t,e),(t=t.alternate)&&Ig(t,e)}function KE(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}eu.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Jc(t,e,null,null)};eu.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){Jc(null,t,null,null)}),e[Ii]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&kx(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function ZE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pc(o);s.call(c)}}var o=r_(e,i,t,0,null,!1,!1,"",Ug);return t._reactRootContainer=o,t[Ii]=o.current,ca(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Pc(l);a.call(c)}}var l=wp(t,0,!1,null,null,!1,!1,"",Ug);return t._reactRootContainer=l,t[Ii]=l.current,ca(t.nodeType===8?t.parentNode:t),es(function(){Jc(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Pc(o);a.call(l)}}Jc(e,o,t,r)}else o=ZE(n,e,t,r,i);return Pc(o)}Ix=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oo(e.pendingLanes);n!==0&&(Yh(e,n|1),pn(e,bt()),!(qe&6)&&(no=bt()+500,Sr()))}break;case 13:es(function(){var i=Ui(t,1);if(i!==null){var r=rn();Jn(i,t,1,r)}}),Ap(t,1)}};$h=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=rn();Jn(e,t,134217728,n)}Ap(t,134217728)}};Ux=function(t){if(t.tag===13){var e=cr(t),n=Ui(t,e);if(n!==null){var i=rn();Jn(n,t,e,i)}Ap(t,e)}};Fx=function(){return it};Ox=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};jd=function(t,e,n){switch(e){case"input":if(kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xc(i);if(!r)throw Error(ie(90));px(i),kd(i,r)}}}break;case"textarea":gx(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};Ex=Sp;Tx=es;var QE={usingClientEntryPoint:!1,Events:[La,As,Xc,Sx,Mx,Sp]},Co={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JE={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bx(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||KE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Hc=cl.inject(JE),di=cl}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(ie(200));return qE(t,e,null,n)};An.createRoot=function(t,e){if(!Cp(t))throw Error(ie(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wp(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,ca(t.nodeType===8?t.parentNode:t),new bp(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=bx(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return es(t)};An.hydrate=function(t,e,n){if(!tu(e))throw Error(ie(200));return nu(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r_(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};An.render=function(t,e,n){if(!tu(e))throw Error(ie(200));return nu(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!tu(t))throw Error(ie(40));return t._reactRootContainer?(es(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};An.unstable_batchedUpdates=Sp;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return nu(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function o_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o_)}catch(t){console.error(t)}}o_(),ox.exports=An;var eT=ox.exports,a_,Fg=eT;a_=Fg.createRoot,Fg.hydrateRoot;const Rp=Q.createContext({});function Pp(t){const e=Q.useRef(null);return e.current===null&&(e.current=t()),e.current}const Dp=typeof window<"u",l_=Dp?Q.useLayoutEffect:Q.useEffect,iu=Q.createContext(null);function Lp(t,e){t.indexOf(e)===-1&&t.push(e)}function Np(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Oi=(t,e,n)=>n>e?e:n<t?t:n;let Dc=()=>{};const ki={},c_=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function u_(t){return typeof t=="object"&&t!==null}const d_=t=>/^0[^.\s]+$/u.test(t);function Ip(t){let e;return()=>(e===void 0&&(e=t()),e)}const Bn=t=>t,tT=(t,e)=>n=>e(t(n)),Ia=(...t)=>t.reduce(tT),xa=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Up{constructor(){this.subscriptions=[]}add(e){return Lp(this.subscriptions,e),()=>Np(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const hi=t=>t*1e3,pi=t=>t/1e3;function f_(t,e){return e?t*(1e3/e):0}const h_=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,nT=1e-7,iT=12;function rT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=h_(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>nT&&++a<iT);return o}function Ua(t,e,n,i){if(t===e&&n===i)return Bn;const r=s=>rT(s,0,1,t,n);return s=>s===0||s===1?s:h_(r(s),e,i)}const p_=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,m_=t=>e=>1-t(1-e),g_=Ua(.33,1.53,.69,.99),Fp=m_(g_),v_=p_(Fp),x_=t=>(t*=2)<1?.5*Fp(t):.5*(2-Math.pow(2,-10*(t-1))),Op=t=>1-Math.sin(Math.acos(t)),y_=m_(Op),__=p_(Op),sT=Ua(.42,0,1,1),oT=Ua(0,0,.58,1),S_=Ua(.42,0,.58,1),aT=t=>Array.isArray(t)&&typeof t[0]!="number",M_=t=>Array.isArray(t)&&typeof t[0]=="number",Og={linear:Bn,easeIn:sT,easeInOut:S_,easeOut:oT,circIn:Op,circInOut:__,circOut:y_,backIn:Fp,backInOut:v_,backOut:g_,anticipate:x_},lT=t=>typeof t=="string",kg=t=>{if(M_(t)){Dc(t.length===4);const[e,n,i,r]=t;return Ua(e,n,i,r)}else if(lT(t))return Dc(Og[t]!==void 0),Og[t];return t},ul=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Bg={value:null,addProjectionMetrics:null};function cT(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(d){o.has(d)&&(u.schedule(d),t()),l++,d(a)}const u={schedule:(d,f=!1,p=!1)=>{const y=p&&r?n:i;return f&&o.add(d),y.has(d)||y.add(d),d},cancel:d=>{i.delete(d),o.delete(d)},process:d=>{if(a=d,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(c),e&&Bg.value&&Bg.value.frameloop[e].push(l),l=0,n.clear(),r=!1,s&&(s=!1,u.process(d))}};return u}const uT=40;function E_(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ul.reduce((v,_)=>(v[_]=cT(s,e?_:void 0),v),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:p,postRender:x}=o,y=()=>{const v=ki.useManualTiming?r.timestamp:performance.now();n=!1,ki.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(v-r.timestamp,uT),1)),r.timestamp=v,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),p.process(r),x.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},m=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:ul.reduce((v,_)=>{const T=o[_];return v[_]=(b,A=!1,R=!1)=>(n||m(),T.schedule(b,A,R)),v},{}),cancel:v=>{for(let _=0;_<ul.length;_++)o[ul[_]].cancel(v)},state:r,steps:o}}const{schedule:mt,cancel:mr,state:Gt,steps:Vu}=E_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Bn,!0);let Zl;function dT(){Zl=void 0}const dn={now:()=>(Zl===void 0&&dn.set(Gt.isProcessing||ki.useManualTiming?Gt.timestamp:performance.now()),Zl),set:t=>{Zl=t,queueMicrotask(dT)}},T_=t=>e=>typeof e=="string"&&e.startsWith(t),kp=T_("--"),fT=T_("var(--"),Bp=t=>fT(t)?hT.test(t.split("/*")[0].trim()):!1,hT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,po={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ya={...po,transform:t=>Oi(0,1,t)},dl={...po,default:1},Ko=t=>Math.round(t*1e5)/1e5,Vp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function pT(t){return t==null}const mT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,zp=(t,e)=>n=>!!(typeof n=="string"&&mT.test(n)&&n.startsWith(t)||e&&!pT(n)&&Object.prototype.hasOwnProperty.call(n,e)),w_=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Vp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},gT=t=>Oi(0,255,t),zu={...po,transform:t=>Math.round(gT(t))},Hr={test:zp("rgb","red"),parse:w_("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+zu.transform(t)+", "+zu.transform(e)+", "+zu.transform(n)+", "+Ko(ya.transform(i))+")"};function vT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const wf={test:zp("#"),parse:vT,transform:Hr.transform},Fa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),qi=Fa("deg"),mi=Fa("%"),Fe=Fa("px"),xT=Fa("vh"),yT=Fa("vw"),Vg={...mi,parse:t=>mi.parse(t)/100,transform:t=>mi.transform(t*100)},Ns={test:zp("hsl","hue"),parse:w_("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+mi.transform(Ko(e))+", "+mi.transform(Ko(n))+", "+Ko(ya.transform(i))+")"},Dt={test:t=>Hr.test(t)||wf.test(t)||Ns.test(t),parse:t=>Hr.test(t)?Hr.parse(t):Ns.test(t)?Ns.parse(t):wf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Hr.transform(t):Ns.transform(t),getAnimatableNone:t=>{const e=Dt.parse(t);return e.alpha=0,Dt.transform(e)}},_T=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ST(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Vp))==null?void 0:e.length)||0)+(((n=t.match(_T))==null?void 0:n.length)||0)>0}const A_="number",b_="color",MT="var",ET="var(",zg="${}",TT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _a(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(TT,l=>(Dt.test(l)?(i.color.push(s),r.push(b_),n.push(Dt.parse(l))):l.startsWith(ET)?(i.var.push(s),r.push(MT),n.push(l)):(i.number.push(s),r.push(A_),n.push(parseFloat(l))),++s,zg)).split(zg);return{values:n,split:a,indexes:i,types:r}}function C_(t){return _a(t).values}function R_(t){const{split:e,types:n}=_a(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===A_?s+=Ko(r[o]):a===b_?s+=Dt.transform(r[o]):s+=r[o]}return s}}const wT=t=>typeof t=="number"?0:Dt.test(t)?Dt.getAnimatableNone(t):t;function AT(t){const e=C_(t);return R_(t)(e.map(wT))}const gr={test:ST,parse:C_,createTransformer:R_,getAnimatableNone:AT};function Hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function bT({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Hu(l,a,t+1/3),s=Hu(l,a,t),o=Hu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Lc(t,e){return n=>n>0?e:t}const yt=(t,e,n)=>t+(e-t)*n,Gu=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},CT=[wf,Hr,Ns],RT=t=>CT.find(e=>e.test(t));function Hg(t){const e=RT(t);if(!e)return!1;let n=e.parse(t);return e===Ns&&(n=bT(n)),n}const Gg=(t,e)=>{const n=Hg(t),i=Hg(e);if(!n||!i)return Lc(t,e);const r={...n};return s=>(r.red=Gu(n.red,i.red,s),r.green=Gu(n.green,i.green,s),r.blue=Gu(n.blue,i.blue,s),r.alpha=yt(n.alpha,i.alpha,s),Hr.transform(r))},Af=new Set(["none","hidden"]);function PT(t,e){return Af.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function DT(t,e){return n=>yt(t,e,n)}function Hp(t){return typeof t=="number"?DT:typeof t=="string"?Bp(t)?Lc:Dt.test(t)?Gg:IT:Array.isArray(t)?P_:typeof t=="object"?Dt.test(t)?Gg:LT:Lc}function P_(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Hp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function LT(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Hp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function NT(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const IT=(t,e)=>{const n=gr.createTransformer(e),i=_a(t),r=_a(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Af.has(t)&&!r.values.length||Af.has(e)&&!i.values.length?PT(t,e):Ia(P_(NT(i,r),r.values),n):Lc(t,e)};function D_(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?yt(t,e,n):Hp(t)(t,e)}const UT=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>mt.update(e,n),stop:()=>mr(e),now:()=>Gt.isProcessing?Gt.timestamp:dn.now()}},L_=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Nc=2e4;function Gp(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Nc;)e+=n,i=t.next(e);return e>=Nc?1/0:e}function FT(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Gp(i),Nc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:pi(r)}}const OT=5;function N_(t,e,n){const i=Math.max(e-OT,0);return f_(n-t(i),e-i)}const Et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Wu=.001;function kT({duration:t=Et.duration,bounce:e=Et.bounce,velocity:n=Et.velocity,mass:i=Et.mass}){let r,s,o=1-e;o=Oi(Et.minDamping,Et.maxDamping,o),t=Oi(Et.minDuration,Et.maxDuration,pi(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=bf(c,o),x=Math.exp(-d);return Wu-f/p*x},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-d),y=bf(Math.pow(c,2),o);return(-r(c)+Wu>0?-1:1)*((f-p)*x)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Wu+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=VT(r,s,a);if(t=hi(t),isNaN(l))return{stiffness:Et.stiffness,damping:Et.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const BT=12;function VT(t,e,n){let i=n;for(let r=1;r<BT;r++)i=i-t(i)/e(i);return i}function bf(t,e){return t*Math.sqrt(1-e*e)}const zT=["duration","bounce"],HT=["stiffness","damping","mass"];function Wg(t,e){return e.some(n=>t[n]!==void 0)}function GT(t){let e={velocity:Et.velocity,stiffness:Et.stiffness,damping:Et.damping,mass:Et.mass,isResolvedFromDuration:!1,...t};if(!Wg(t,HT)&&Wg(t,zT))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Oi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Et.mass,stiffness:r,damping:s}}else{const n=kT(t);e={...e,...n,mass:Et.mass},e.isResolvedFromDuration=!0}return e}function Ic(t=Et.visualDuration,e=Et.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=GT({...n,velocity:-pi(n.velocity||0)}),x=f||0,y=c/(2*Math.sqrt(l*u)),m=o-s,h=pi(Math.sqrt(l/u)),g=Math.abs(m)<5;i||(i=g?Et.restSpeed.granular:Et.restSpeed.default),r||(r=g?Et.restDelta.granular:Et.restDelta.default);let v;if(y<1){const T=bf(h,y);v=b=>{const A=Math.exp(-y*h*b);return o-A*((x+y*h*m)/T*Math.sin(T*b)+m*Math.cos(T*b))}}else if(y===1)v=T=>o-Math.exp(-h*T)*(m+(x+h*m)*T);else{const T=h*Math.sqrt(y*y-1);v=b=>{const A=Math.exp(-y*h*b),R=Math.min(T*b,300);return o-A*((x+y*h*m)*Math.sinh(R)+T*m*Math.cosh(R))/T}}const _={calculatedDuration:p&&d||null,next:T=>{const b=v(T);if(p)a.done=T>=d;else{let A=T===0?x:0;y<1&&(A=T===0?hi(x):N_(v,T,b));const R=Math.abs(A)<=i,E=Math.abs(o-b)<=r;a.done=R&&E}return a.value=a.done?o:b,a},toString:()=>{const T=Math.min(Gp(_),Nc),b=L_(A=>_.next(T*A).value,T,30);return T+"ms "+b},toTransition:()=>{}};return _}Ic.applyToOptions=t=>{const e=FT(t,100,Ic);return t.ease=e.ease,t.duration=hi(e.duration),t.type="keyframes",t};function Cf({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,x=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let y=n*e;const m=d+y,h=o===void 0?m:o(m);h!==m&&(y=h-d);const g=R=>-y*Math.exp(-R/i),v=R=>h+g(R),_=R=>{const E=g(R),M=v(R);f.done=Math.abs(E)<=c,f.value=f.done?h:M};let T,b;const A=R=>{p(f.value)&&(T=R,b=Ic({keyframes:[f.value,x(f.value)],velocity:N_(v,R,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:R=>{let E=!1;return!b&&T===void 0&&(E=!0,_(R),A(R)),T!==void 0&&R>=T?b.next(R-T):(!E&&_(R),f)}}}function WT(t,e,n){const i=[],r=n||ki.mix||D_,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Bn:e;a=Ia(l,a)}i.push(a)}return i}function jT(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Dc(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=WT(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=xa(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Oi(t[0],t[s-1],u)):c}function XT(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=xa(0,e,i);t.push(yt(n,1,r))}}function YT(t){const e=[0];return XT(e,t.length-1),e}function $T(t,e){return t.map(n=>n*e)}function qT(t,e){return t.map(()=>e||S_).splice(0,t.length-1)}function Zo({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=aT(i)?i.map(kg):kg(i),s={done:!1,value:e[0]},o=$T(n&&n.length===e.length?n:YT(e),t),a=jT(o,e,{ease:Array.isArray(r)?r:qT(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const KT=t=>t!==null;function Wp(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(KT),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const ZT={decay:Cf,inertia:Cf,tween:Zo,keyframes:Zo,spring:Ic};function I_(t){typeof t.type=="string"&&(t.type=ZT[t.type])}class jp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const QT=t=>t/100;class Xp extends jp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==dn.now()&&this.tick(dn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;I_(e);const{type:n=Zo,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Zo;l!==Zo&&typeof a[0]!="number"&&(this.mixKeyframes=Ia(QT,D_(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Gp(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:x,onUpdate:y,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,_=i;if(d){const R=Math.min(this.currentTime,r)/a;let E=Math.floor(R),M=R%1;!M&&R>=1&&(M=1),M===1&&E--,E=Math.min(E,d+1),!!(E%2)&&(f==="reverse"?(M=1-M,p&&(M-=p/a)):f==="mirror"&&(_=o)),v=Oi(0,1,M)*a}const T=g?{done:!1,value:u[0]}:_.next(v);s&&(T.value=s(T.value));let{done:b}=T;!g&&l!==null&&(b=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return A&&x!==Cf&&(T.value=Wp(u,this.options,m,this.speed)),y&&y(T.value),A&&this.finish(),T}then(e,n){return this.finished.then(e,n)}get duration(){return pi(this.calculatedDuration)}get time(){return pi(this.currentTime)}set time(e){var n;e=hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(dn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=pi(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=UT,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(dn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function JT(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Gr=t=>t*180/Math.PI,Rf=t=>{const e=Gr(Math.atan2(t[1],t[0]));return Pf(e)},ew={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Rf,rotateZ:Rf,skewX:t=>Gr(Math.atan(t[1])),skewY:t=>Gr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Pf=t=>(t=t%360,t<0&&(t+=360),t),jg=Rf,Xg=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Yg=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),tw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xg,scaleY:Yg,scale:t=>(Xg(t)+Yg(t))/2,rotateX:t=>Pf(Gr(Math.atan2(t[6],t[5]))),rotateY:t=>Pf(Gr(Math.atan2(-t[2],t[0]))),rotateZ:jg,rotate:jg,skewX:t=>Gr(Math.atan(t[4])),skewY:t=>Gr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Df(t){return t.includes("scale")?1:0}function Lf(t,e){if(!t||t==="none")return Df(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=tw,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=ew,r=a}if(!r)return Df(e);const s=i[e],o=r[1].split(",").map(iw);return typeof s=="function"?s(o):o[s]}const nw=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Lf(n,e)};function iw(t){return parseFloat(t.trim())}const mo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],go=new Set(mo),$g=t=>t===po||t===Fe,rw=new Set(["x","y","z"]),sw=mo.filter(t=>!rw.has(t));function ow(t){const e=[];return sw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const $r={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Lf(e,"x"),y:(t,{transform:e})=>Lf(e,"y")};$r.translateX=$r.x;$r.translateY=$r.y;const qr=new Set;let Nf=!1,If=!1,Uf=!1;function U_(){if(If){const t=Array.from(qr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=ow(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}If=!1,Nf=!1,qr.forEach(t=>t.complete(Uf)),qr.clear()}function F_(){qr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(If=!0)})}function aw(){Uf=!0,F_(),U_(),Uf=!1}class Yp{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(qr.add(this),Nf||(Nf=!0,mt.read(F_),mt.resolveKeyframes(U_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}JT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),qr.delete(this)}cancel(){this.state==="scheduled"&&(qr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const lw=t=>t.startsWith("--");function cw(t,e,n){lw(e)?t.style.setProperty(e,n):t.style[e]=n}const uw=Ip(()=>window.ScrollTimeline!==void 0),dw={};function fw(t,e){const n=Ip(t);return()=>dw[e]??n()}const O_=fw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Bo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,qg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bo([0,.65,.55,1]),circOut:Bo([.55,0,1,.45]),backIn:Bo([.31,.01,.66,-.59]),backOut:Bo([.33,1.53,.69,.99])};function k_(t,e){if(t)return typeof t=="function"?O_()?L_(t,e):"ease-out":M_(t)?Bo(t):Array.isArray(t)?t.map(n=>k_(n,e)||qg.easeOut):qg[t]}function hw(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=k_(a,r);Array.isArray(d)&&(u.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function B_(t){return typeof t=="function"&&"applyToOptions"in t}function pw({type:t,...e}){return B_(t)&&O_()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class mw extends jp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Dc(typeof e.type!="string");const c=pw(e);this.animation=hw(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Wp(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):cw(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return pi(Number(e))}get time(){return pi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=hi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&uw()?(this.animation.timeline=e,Bn):n(this)}}const V_={anticipate:x_,backInOut:v_,circInOut:__};function gw(t){return t in V_}function vw(t){typeof t.ease=="string"&&gw(t.ease)&&(t.ease=V_[t.ease])}const Kg=10;class xw extends mw{constructor(e){vw(e),I_(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new Xp({...o,autoplay:!1}),l=hi(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-Kg).value,a.sample(l).value,Kg),a.stop()}}const Zg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(gr.test(t)||t==="0")&&!t.startsWith("url("));function yw(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function _w(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Zg(r,e),a=Zg(s,e);return!o||!a?!1:yw(t)||(n==="spring"||B_(n))&&i}function Ff(t){t.duration=0,t.type}const Sw=new Set(["opacity","clipPath","filter","transform"]),Mw=Ip(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Ew(t){var u;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(((u=e==null?void 0:e.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return Mw()&&n&&Sw.has(n)&&(n!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const Tw=40;class ww extends jp{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var x;super(),this.stop=()=>{var y,m;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=dn.now();const f={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||Yp;this.keyframeResolver=new p(a,(y,m,h)=>this.onKeyframesResolved(y,m,f,!h),l,c,u),(x=this.keyframeResolver)==null||x.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=dn.now(),_w(e,s,o,a)||((ki.instantAnimations||!l)&&(u==null||u(Wp(e,i,n))),e[0]=e[e.length-1],Ff(i),i.repeat=0);const f={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>Tw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!c&&Ew(f)?new xw({...f,element:f.motionValue.owner.current}):new Xp(f);p.finished.then(()=>this.notifyFinished()).catch(Bn),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),aw()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const Aw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function bw(t){const e=Aw.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function z_(t,e,n=1){const[i,r]=bw(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return c_(o)?parseFloat(o):o}return Bp(r)?z_(r,e,n+1):r}function $p(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const H_=new Set(["width","height","top","left","right","bottom",...mo]),Cw={test:t=>t==="auto",parse:t=>t},G_=t=>e=>e.test(t),W_=[po,Fe,mi,qi,yT,xT,Cw],Qg=t=>W_.find(G_(t));function Rw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||d_(t):!0}const Pw=new Set(["brightness","contrast","saturate","opacity"]);function Dw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Vp)||[];if(!i)return t;const r=n.replace(i,"");let s=Pw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Lw=/\b([a-z-]*)\(.*?\)/gu,Of={...gr,getAnimatableNone:t=>{const e=t.match(Lw);return e?e.map(Dw).join(" "):t}},Jg={...po,transform:Math.round},Nw={rotate:qi,rotateX:qi,rotateY:qi,rotateZ:qi,scale:dl,scaleX:dl,scaleY:dl,scaleZ:dl,skew:qi,skewX:qi,skewY:qi,distance:Fe,translateX:Fe,translateY:Fe,translateZ:Fe,x:Fe,y:Fe,z:Fe,perspective:Fe,transformPerspective:Fe,opacity:ya,originX:Vg,originY:Vg,originZ:Fe},qp={borderWidth:Fe,borderTopWidth:Fe,borderRightWidth:Fe,borderBottomWidth:Fe,borderLeftWidth:Fe,borderRadius:Fe,radius:Fe,borderTopLeftRadius:Fe,borderTopRightRadius:Fe,borderBottomRightRadius:Fe,borderBottomLeftRadius:Fe,width:Fe,maxWidth:Fe,height:Fe,maxHeight:Fe,top:Fe,right:Fe,bottom:Fe,left:Fe,padding:Fe,paddingTop:Fe,paddingRight:Fe,paddingBottom:Fe,paddingLeft:Fe,margin:Fe,marginTop:Fe,marginRight:Fe,marginBottom:Fe,marginLeft:Fe,backgroundPositionX:Fe,backgroundPositionY:Fe,...Nw,zIndex:Jg,fillOpacity:ya,strokeOpacity:ya,numOctaves:Jg},Iw={...qp,color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,filter:Of,WebkitFilter:Of},j_=t=>Iw[t];function X_(t,e){let n=j_(t);return n!==Of&&(n=gr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Uw=new Set(["auto","none","0"]);function Fw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Uw.has(s)&&_a(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=X_(n,r)}class Ow extends Yp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Bp(c))){const u=z_(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!H_.has(i)||e.length!==2)return;const[r,s]=e,o=Qg(r),a=Qg(s);if(o!==a)if($g(o)&&$g(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else $r[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||Rw(e[r]))&&i.push(r);i.length&&Fw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$r[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=$r[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function kw(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const Y_=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function $_(t){return u_(t)&&"offsetHeight"in t}const e0=30,Bw=t=>!isNaN(parseFloat(t));class Vw{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=dn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=dn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Bw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Up);const i=this.events[e].add(n);return e==="change"?()=>{i(),mt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=dn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>e0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,e0);return f_(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function io(t,e){return new Vw(t,e)}const{schedule:Kp,cancel:vN}=E_(queueMicrotask,!1),Xn={x:!1,y:!1};function q_(){return Xn.x||Xn.y}function zw(t){return t==="x"||t==="y"?Xn[t]?null:(Xn[t]=!0,()=>{Xn[t]=!1}):Xn.x||Xn.y?null:(Xn.x=Xn.y=!0,()=>{Xn.x=Xn.y=!1})}function K_(t,e){const n=kw(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function t0(t){return!(t.pointerType==="touch"||q_())}function Hw(t,e,n={}){const[i,r,s]=K_(t,n),o=a=>{if(!t0(a))return;const{target:l}=a,c=e(l,a);if(typeof c!="function"||!l)return;const u=d=>{t0(d)&&(c(d),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,r)};return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Z_=(t,e)=>e?t===e?!0:Z_(t,e.parentElement):!1,Zp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Gw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ww(t){return Gw.has(t.tagName)||t.tabIndex!==-1}const Ql=new WeakSet;function n0(t){return e=>{e.key==="Enter"&&t(e)}}function ju(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const jw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=n0(()=>{if(Ql.has(n))return;ju(n,"down");const r=n0(()=>{ju(n,"up")}),s=()=>ju(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function i0(t){return Zp(t)&&!q_()}function Xw(t,e,n={}){const[i,r,s]=K_(t,n),o=a=>{const l=a.currentTarget;if(!i0(a))return;Ql.add(l);const c=e(l,a),u=(p,x)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),Ql.has(l)&&Ql.delete(l),i0(p)&&typeof c=="function"&&c(p,{success:x})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||Z_(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),$_(a)&&(a.addEventListener("focus",c=>jw(c,r)),!Ww(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Q_(t){return u_(t)&&"ownerSVGElement"in t}function Yw(t){return Q_(t)&&t.tagName==="svg"}const Zt=t=>!!(t&&t.getVelocity),$w=[...W_,Dt,gr],qw=t=>$w.find(G_(t)),Qp=Q.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Kw extends Q.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=n.offsetParent,r=$_(i)&&i.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=r-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Zw({children:t,isPresent:e,anchorX:n,root:i}){const r=Q.useId(),s=Q.useRef(null),o=Q.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=Q.useContext(Qp);return Q.useInsertionEffect(()=>{const{width:l,height:c,top:u,left:d,right:f}=o.current;if(e||!s.current||!l||!c)return;const p=n==="left"?`left: ${d}`:`right: ${f}`;s.current.dataset.motionPopId=r;const x=document.createElement("style");a&&(x.nonce=a);const y=i??document.head;return y.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            ${p}px !important;
            top: ${u}px !important;
          }
        `),()=>{y.contains(x)&&y.removeChild(x)}},[e]),C.jsx(Kw,{isPresent:e,childRef:s,sizeRef:o,children:Q.cloneElement(t,{ref:s})})}const Qw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,root:l})=>{const c=Pp(Jw),u=Q.useId();let d=!0,f=Q.useMemo(()=>(d=!1,{id:u,initial:e,isPresent:n,custom:r,onExitComplete:p=>{c.set(p,!0);for(const x of c.values())if(!x)return;i&&i()},register:p=>(c.set(p,!1),()=>c.delete(p))}),[n,c,i]);return s&&d&&(f={...f}),Q.useMemo(()=>{c.forEach((p,x)=>c.set(x,!1))},[n]),Q.useEffect(()=>{!n&&!c.size&&i&&i()},[n]),o==="popLayout"&&(t=C.jsx(Zw,{isPresent:n,anchorX:a,root:l,children:t})),C.jsx(iu.Provider,{value:f,children:t})};function Jw(){return new Map}function J_(t=!0){const e=Q.useContext(iu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=Q.useId();Q.useEffect(()=>{if(t)return r(s)},[t]);const o=Q.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const fl=t=>t.key||"";function r0(t){const e=[];return Q.Children.forEach(t,n=>{Q.isValidElement(n)&&e.push(n)}),e}const Uc=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",root:l})=>{const[c,u]=J_(o),d=Q.useMemo(()=>r0(t),[t]),f=o&&!c?[]:d.map(fl),p=Q.useRef(!0),x=Q.useRef(d),y=Pp(()=>new Map),[m,h]=Q.useState(d),[g,v]=Q.useState(d);l_(()=>{p.current=!1,x.current=d;for(let b=0;b<g.length;b++){const A=fl(g[b]);f.includes(A)?y.delete(A):y.get(A)!==!0&&y.set(A,!1)}},[g,f.length,f.join("-")]);const _=[];if(d!==m){let b=[...d];for(let A=0;A<g.length;A++){const R=g[A],E=fl(R);f.includes(E)||(b.splice(A,0,R),_.push(R))}return s==="wait"&&_.length&&(b=_),v(r0(b)),h(d),null}const{forceRender:T}=Q.useContext(Rp);return C.jsx(C.Fragment,{children:g.map(b=>{const A=fl(b),R=o&&!c?!1:d===g||f.includes(A),E=()=>{if(y.has(A))y.set(A,!0);else return;let M=!0;y.forEach(D=>{D||(M=!1)}),M&&(T==null||T(),v(x.current),o&&(u==null||u()),i&&i())};return C.jsx(Qw,{isPresent:R,initial:!p.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:l,onExitComplete:R?void 0:E,anchorX:a,children:b},A)})})},eS=Q.createContext({strict:!1}),s0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ro={};for(const t in s0)ro[t]={isEnabled:e=>s0[t].some(n=>!!e[n])};function eA(t){for(const e in t)ro[e]={...ro[e],...t[e]}}const tA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Fc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||tA.has(t)}let tS=t=>!Fc(t);function nA(t){typeof t=="function"&&(tS=e=>e.startsWith("on")?!Fc(e):t(e))}try{nA(require("@emotion/is-prop-valid").default)}catch{}function iA(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(tS(r)||n===!0&&Fc(r)||!e&&!Fc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const ru=Q.createContext({});function su(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Sa(t){return typeof t=="string"||Array.isArray(t)}const Jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],em=["initial",...Jp];function ou(t){return su(t.animate)||em.some(e=>Sa(t[e]))}function nS(t){return!!(ou(t)||t.variants)}function rA(t,e){if(ou(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Sa(n)?n:void 0,animate:Sa(i)?i:void 0}}return t.inherit!==!1?e:{}}function sA(t){const{initial:e,animate:n}=rA(t,Q.useContext(ru));return Q.useMemo(()=>({initial:e,animate:n}),[o0(e),o0(n)])}function o0(t){return Array.isArray(t)?t.join(" "):t}const Ma={};function oA(t){for(const e in t)Ma[e]=t[e],kp(e)&&(Ma[e].isCSSVariable=!0)}function iS(t,{layout:e,layoutId:n}){return go.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ma[t]||t==="opacity")}const aA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lA=mo.length;function cA(t,e,n){let i="",r=!0;for(let s=0;s<lA;s++){const o=mo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Y_(a,qp[o]);if(!l){r=!1;const u=aA[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function tm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(go.has(l)){o=!0;continue}else if(kp(l)){r[l]=c;continue}else{const u=Y_(c,qp[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=cA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const nm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rS(t,e,n){for(const i in e)!Zt(e[i])&&!iS(i,n)&&(t[i]=e[i])}function uA({transformTemplate:t},e){return Q.useMemo(()=>{const n=nm();return tm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function dA(t,e){const n=t.style||{},i={};return rS(i,n,t),Object.assign(i,uA(t,e)),i}function fA(t,e){const n={},i=dA(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const hA={offset:"stroke-dashoffset",array:"stroke-dasharray"},pA={offset:"strokeDashoffset",array:"strokeDasharray"};function mA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?hA:pA;t[s.offset]=Fe.transform(-i);const o=Fe.transform(e),a=Fe.transform(n);t[s.array]=`${o} ${a}`}function sS(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(tm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&mA(d,r,s,o,!1)}const oS=()=>({...nm(),attrs:{}}),aS=t=>typeof t=="string"&&t.toLowerCase()==="svg";function gA(t,e,n,i){const r=Q.useMemo(()=>{const s=oS();return sS(s,e,aS(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};rS(s,t.style,t),r.style={...s,...r.style}}return r}const vA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function im(t){return typeof t!="string"||t.includes("-")?!1:!!(vA.indexOf(t)>-1||/[A-Z]/u.test(t))}function xA(t,e,n,{latestValues:i},r,s=!1){const a=(im(t)?gA:fA)(e,i,r,t),l=iA(e,typeof t=="string",s),c=t!==Q.Fragment?{...l,...a,ref:n}:{},{children:u}=e,d=Q.useMemo(()=>Zt(u)?u.get():u,[u]);return Q.createElement(t,{...c,children:d})}function a0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function rm(t,e,n,i){if(typeof e=="function"){const[r,s]=a0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=a0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function Jl(t){return Zt(t)?t.get():t}function yA({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:_A(n,i,r,t),renderState:e()}}function _A(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Jl(s[f]);let{initial:o,animate:a}=t;const l=ou(t),c=nS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!su(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const x=rm(t,f[p]);if(x){const{transitionEnd:y,transition:m,...h}=x;for(const g in h){let v=h[g];if(Array.isArray(v)){const _=u?v.length-1:0;v=v[_]}v!==null&&(r[g]=v)}for(const g in y)r[g]=y[g]}}}return r}const lS=t=>(e,n)=>{const i=Q.useContext(ru),r=Q.useContext(iu),s=()=>yA(t,e,i,r);return n?s():Pp(s)};function sm(t,e,n){var s;const{style:i}=t,r={};for(const o in i)(Zt(i[o])||e.style&&Zt(e.style[o])||iS(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(r[o]=i[o]);return r}const SA=lS({scrapeMotionValuesFromProps:sm,createRenderState:nm});function cS(t,e,n){const i=sm(t,e,n);for(const r in t)if(Zt(t[r])||Zt(e[r])){const s=mo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}const MA=lS({scrapeMotionValuesFromProps:cS,createRenderState:oS}),EA=Symbol.for("motionComponentSymbol");function Is(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function TA(t,e,n){return Q.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Is(n)&&(n.current=i))},[e])}const om=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),wA="framerAppearId",uS="data-"+om(wA),dS=Q.createContext({});function AA(t,e,n,i,r){var y,m;const{visualElement:s}=Q.useContext(ru),o=Q.useContext(eS),a=Q.useContext(iu),l=Q.useContext(Qp).reducedMotion,c=Q.useRef(null);i=i||o.renderer,!c.current&&i&&(c.current=i(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,d=Q.useContext(dS);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&bA(c.current,n,r,d);const f=Q.useRef(!1);Q.useInsertionEffect(()=>{u&&f.current&&u.update(n,a)});const p=n[uS],x=Q.useRef(!!p&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,p))&&((m=window.MotionHasOptimisedAnimation)==null?void 0:m.call(window,p)));return l_(()=>{u&&(f.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),x.current&&u.animationState&&u.animationState.animateChanges())}),Q.useEffect(()=>{u&&(!x.current&&u.animationState&&u.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)==null||h.call(window,p)}),x.current=!1),u.enteringChildren=void 0)}),u}function bA(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:fS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Is(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function fS(t){if(t)return t.options.allowProjection!==!1?t.projection:fS(t.parent)}function Xu(t,{forwardMotionProps:e=!1}={},n,i){n&&eA(n);const r=im(t)?MA:SA;function s(a,l){let c;const u={...Q.useContext(Qp),...a,layoutId:CA(a)},{isStatic:d}=u,f=sA(a),p=r(a,d);if(!d&&Dp){RA();const x=PA(u);c=x.MeasureLayout,f.visualElement=AA(t,p,u,i,x.ProjectionNode)}return C.jsxs(ru.Provider,{value:f,children:[c&&f.visualElement?C.jsx(c,{visualElement:f.visualElement,...u}):null,xA(t,a,TA(p,f.visualElement,l),p,d,e)]})}s.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const o=Q.forwardRef(s);return o[EA]=t,o}function CA({layoutId:t}){const e=Q.useContext(Rp).id;return e&&t!==void 0?e+"-"+t:t}function RA(t,e){Q.useContext(eS).strict}function PA(t){const{drag:e,layout:n}=ro;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function DA(t,e){if(typeof Proxy>"u")return Xu;const n=new Map,i=(s,o)=>Xu(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Xu(o,void 0,t,e)),n.get(o))})}function hS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function LA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function NA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Yu(t){return t===void 0||t===1}function kf({scale:t,scaleX:e,scaleY:n}){return!Yu(t)||!Yu(e)||!Yu(n)}function Ir(t){return kf(t)||pS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function pS(t){return l0(t.x)||l0(t.y)}function l0(t){return t&&t!=="0%"}function Oc(t,e,n){const i=t-n,r=e*i;return n+r}function c0(t,e,n,i,r){return r!==void 0&&(t=Oc(t,r,i)),Oc(t,n,i)+e}function Bf(t,e=0,n=1,i,r){t.min=c0(t.min,e,n,i,r),t.max=c0(t.max,e,n,i,r)}function mS(t,{x:e,y:n}){Bf(t.x,e.translate,e.scale,e.originPoint),Bf(t.y,n.translate,n.scale,n.originPoint)}const u0=.999999999999,d0=1.0000000000001;function IA(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,mS(t,o)),i&&Ir(s.latestValues)&&Fs(t,s.latestValues))}e.x<d0&&e.x>u0&&(e.x=1),e.y<d0&&e.y>u0&&(e.y=1)}function Us(t,e){t.min=t.min+e,t.max=t.max+e}function f0(t,e,n,i,r=.5){const s=yt(t.min,t.max,r);Bf(t,e,n,s,i)}function Fs(t,e){f0(t.x,e.x,e.scaleX,e.scale,e.originX),f0(t.y,e.y,e.scaleY,e.scale,e.originY)}function gS(t,e){return hS(NA(t.getBoundingClientRect(),e))}function UA(t,e,n){const i=gS(t,n),{scroll:r}=e;return r&&(Us(i.x,r.offset.x),Us(i.y,r.offset.y)),i}const h0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Os=()=>({x:h0(),y:h0()}),p0=()=>({min:0,max:0}),At=()=>({x:p0(),y:p0()}),Vf={current:null},vS={current:!1};function FA(){if(vS.current=!0,!!Dp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Vf.current=t.matches;t.addEventListener("change",e),e()}else Vf.current=!1}const OA=new WeakMap;function kA(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Zt(r))t.addValue(i,r);else if(Zt(s))t.addValue(i,io(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,io(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const m0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class BA{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Yp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=dn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,mt.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=ou(n),this.isVariantNode=nS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const p=d[f];l[f]!==void 0&&Zt(p)&&p.set(l[f])}}mount(e){var n;this.current=e,OA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),vS.current||FA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vf.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),mr(this.notifyUpdate),mr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=go.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&mt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ro){const n=ro[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):At()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<m0.length;i++){const r=m0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=kA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=io(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(c_(i)||d_(i))?i=parseFloat(i):!qw(i)&&gr.test(n)&&(i=X_(e,n)),this.setBaseTarget(e,Zt(i)?i.get():i)),Zt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=rm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Zt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Up),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Kp.render(this.render)}}class xS extends BA{constructor(){super(...arguments),this.KeyframeResolver=Ow}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Zt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function yS(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function VA(t){return window.getComputedStyle(t)}class zA extends xS{constructor(){super(...arguments),this.type="html",this.renderInstance=yS}readValueFromInstance(e,n){var i;if(go.has(n))return(i=this.projection)!=null&&i.isProjecting?Df(n):nw(e,n);{const r=VA(e),s=(kp(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return gS(e,n)}build(e,n,i){tm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return sm(e,n,i)}}const _S=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function HA(t,e,n,i){yS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(_S.has(r)?r:om(r),e.attrs[r])}class GA extends xS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=At}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(go.has(n)){const i=j_(n);return i&&i.default||0}return n=_S.has(n)?n:om(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return cS(e,n,i)}build(e,n,i){sS(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){HA(e,n,i,r)}mount(e){this.isSVGTag=aS(e.tagName),super.mount(e)}}const WA=(t,e)=>im(t)?new GA(e):new zA(e,{allowProjection:t!==Q.Fragment});function Xs(t,e,n){const i=t.getProps();return rm(i,e,n!==void 0?n:i.custom,t)}const zf=t=>Array.isArray(t);function jA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,io(n))}function XA(t){return zf(t)?t[t.length-1]||0:t}function YA(t,e){const n=Xs(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=XA(s[o]);jA(t,o,a)}}function $A(t){return!!(Zt(t)&&t.add)}function Hf(t,e){const n=t.getValue("willChange");if($A(n))return n.add(e);if(!n&&ki.WillChange){const i=new ki.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function SS(t){return t.props[uS]}const qA=t=>t!==null;function KA(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(qA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const ZA={type:"spring",stiffness:500,damping:25,restSpeed:10},QA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),JA={type:"keyframes",duration:.8},eb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},tb=(t,{keyframes:e})=>e.length>2?JA:go.has(t)?t.startsWith("scale")?QA(e[1]):ZA:eb;function nb({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const am=(t,e,n,i={},r,s)=>o=>{const a=$p(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-hi(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};nb(a)||Object.assign(u,tb(t,u)),u.duration&&(u.duration=hi(u.duration)),u.repeatDelay&&(u.repeatDelay=hi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Ff(u),u.delay===0&&(d=!0)),(ki.instantAnimations||ki.skipAnimations)&&(d=!0,Ff(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=KA(u.keyframes,a);if(f!==void 0){mt.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new Xp(u):new ww(u)};function ib({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function MS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=e;i&&(s=i);const l=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const d=t.getValue(u,t.latestValues[u]??null),f=a[u];if(f===void 0||c&&ib(c,u))continue;const p={delay:n,...$p(s||{},u)},x=d.get();if(x!==void 0&&!d.isAnimating&&!Array.isArray(f)&&f===x&&!p.velocity)continue;let y=!1;if(window.MotionHandoffAnimation){const h=SS(t);if(h){const g=window.MotionHandoffAnimation(h,u,mt);g!==null&&(p.startTime=g,y=!0)}}Hf(t,u),d.start(am(u,d,f,t.shouldReduceMotion&&H_.has(u)?{type:!1}:p,t,y));const m=d.animation;m&&l.push(m)}return o&&Promise.all(l).then(()=>{mt.update(()=>{o&&YA(t,o)})}),l}function ES(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}function Gf(t,e,n={}){var l;const i=Xs(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(MS(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=r;return rb(t,e,c,u,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function rb(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Gf(l,e,{...o,delay:n+(typeof i=="function"?0:i)+ES(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function sb(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Gf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Gf(t,e,n);else{const r=typeof e=="function"?Xs(t,e,n.custom):e;i=Promise.all(MS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function TS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const ob=em.length;function wS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?wS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<ob;n++){const i=em[n],r=t.props[i];(Sa(r)||r===!1)&&(e[i]=r)}return e}const ab=[...Jp].reverse(),lb=Jp.length;function cb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>sb(t,n,i)))}function ub(t){let e=cb(t),n=g0(),i=!0;const r=l=>(c,u)=>{var f;const d=Xs(t,u,l==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:x,...y}=d;c={...c,...y,...x}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=wS(t.parent)||{},d=[],f=new Set;let p={},x=1/0;for(let m=0;m<lb;m++){const h=ab[m],g=n[h],v=c[h]!==void 0?c[h]:u[h],_=Sa(v),T=h===l?g.isActive:null;T===!1&&(x=m);let b=v===u[h]&&v!==c[h]&&_;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),g.protectedKeys={...p},!g.isActive&&T===null||!v&&!g.prevProp||su(v)||typeof v=="boolean")continue;const A=db(g.prevProp,v);let R=A||h===l&&g.isActive&&!b&&_||m>x&&_,E=!1;const M=Array.isArray(v)?v:[v];let D=M.reduce(r(h),{});T===!1&&(D={});const{prevResolvedValues:z={}}=g,H={...z,...D},$=Y=>{R=!0,f.has(Y)&&(E=!0,f.delete(Y)),g.needsAnimating[Y]=!0;const L=t.getValue(Y);L&&(L.liveStyle=!1)};for(const Y in H){const L=D[Y],W=z[Y];if(p.hasOwnProperty(Y))continue;let q=!1;zf(L)&&zf(W)?q=!TS(L,W):q=L!==W,q?L!=null?$(Y):f.add(Y):L!==void 0&&f.has(Y)?$(Y):g.protectedKeys[Y]=!0}g.prevProp=v,g.prevResolvedValues=D,g.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(R=!1);const j=b&&A;R&&(!j||E)&&d.push(...M.map(Y=>{const L={type:h};if(typeof Y=="string"&&i&&!j&&t.manuallyAnimateOnMount&&t.parent){const{parent:W}=t,q=Xs(W,Y);if(W.enteringChildren&&q){const{delayChildren:ue}=q.transition||{};L.delay=ES(W.enteringChildren,t,ue)}}return{animation:Y,options:L}}))}if(f.size){const m={};if(typeof c.initial!="boolean"){const h=Xs(t,Array.isArray(c.initial)?c.initial[0]:c.initial);h&&h.transition&&(m.transition=h.transition)}f.forEach(h=>{const g=t.getBaseTarget(h),v=t.getValue(h);v&&(v.liveStyle=!0),m[h]=g??null}),d.push({animation:m})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(f=>{var p;return(p=f.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const u=o(l);for(const f in n)n[f].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=g0(),i=!0}}}function db(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!TS(e,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function g0(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}class Mr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class fb extends Mr{constructor(e){super(e),e.animationState||(e.animationState=ub(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();su(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let hb=0;class pb extends Mr{constructor(){super(...arguments),this.id=hb++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const mb={animation:{Feature:fb},exit:{Feature:pb}};function Ea(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Oa(t){return{point:{x:t.pageX,y:t.pageY}}}const gb=t=>e=>Zp(e)&&t(e,Oa(e));function Qo(t,e,n,i){return Ea(t,e,gb(n),i)}const AS=1e-4,vb=1-AS,xb=1+AS,bS=.01,yb=0-bS,_b=0+bS;function nn(t){return t.max-t.min}function Sb(t,e,n){return Math.abs(t-e)<=n}function v0(t,e,n,i=.5){t.origin=i,t.originPoint=yt(e.min,e.max,t.origin),t.scale=nn(n)/nn(e),t.translate=yt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=vb&&t.scale<=xb||isNaN(t.scale))&&(t.scale=1),(t.translate>=yb&&t.translate<=_b||isNaN(t.translate))&&(t.translate=0)}function Jo(t,e,n,i){v0(t.x,e.x,n.x,i?i.originX:void 0),v0(t.y,e.y,n.y,i?i.originY:void 0)}function x0(t,e,n){t.min=n.min+e.min,t.max=t.min+nn(e)}function Mb(t,e,n){x0(t.x,e.x,n.x),x0(t.y,e.y,n.y)}function y0(t,e,n){t.min=e.min-n.min,t.max=t.min+nn(e)}function ea(t,e,n){y0(t.x,e.x,n.x),y0(t.y,e.y,n.y)}function Ln(t){return[t("x"),t("y")]}const CS=({current:t})=>t?t.ownerDocument.defaultView:null,_0=(t,e)=>Math.abs(t-e);function Eb(t,e){const n=_0(t.x,e.x),i=_0(t.y,e.y);return Math.sqrt(n**2+i**2)}class RS{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=qu(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,x=Eb(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!p&&!x)return;const{point:y}=f,{timestamp:m}=Gt;this.history.push({...y,timestamp:m});const{onStart:h,onMove:g}=this.handlers;p||(h&&h(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=$u(p,this.transformPagePoint),mt.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:x,onSessionEnd:y,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=qu(f.type==="pointercancel"?this.lastMoveEventInfo:$u(p,this.transformPagePoint),this.history);this.startEvent&&x&&x(f,h),y&&y(f,h)},!Zp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const a=Oa(e),l=$u(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=Gt;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(e,qu(l,this.history)),this.removeListeners=Ia(Qo(this.contextWindow,"pointermove",this.handlePointerMove),Qo(this.contextWindow,"pointerup",this.handlePointerUp),Qo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),mr(this.updatePoint)}}function $u(t,e){return e?{point:e(t.point)}:t}function S0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function qu({point:t},e){return{point:t,delta:S0(t,PS(e)),offset:S0(t,Tb(e)),velocity:wb(e,.1)}}function Tb(t){return t[0]}function PS(t){return t[t.length-1]}function wb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=PS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>hi(e)));)n--;if(!i)return{x:0,y:0};const s=pi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ab(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?yt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?yt(n,t,i.max):Math.min(t,n)),t}function M0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function bb(t,{top:e,left:n,bottom:i,right:r}){return{x:M0(t.x,n,r),y:M0(t.y,e,i)}}function E0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Cb(t,e){return{x:E0(t.x,e.x),y:E0(t.y,e.y)}}function Rb(t,e){let n=.5;const i=nn(t),r=nn(e);return r>i?n=xa(e.min,e.max-i,t.min):i>r&&(n=xa(t.min,t.max-r,e.min)),Oi(0,1,n)}function Pb(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Wf=.35;function Db(t=Wf){return t===!1?t=0:t===!0&&(t=Wf),{x:T0(t,"left","right"),y:T0(t,"top","bottom")}}function T0(t,e,n){return{min:w0(t,e),max:w0(t,n)}}function w0(t,e){return typeof t=="number"?t:t[e]||0}const Lb=new WeakMap;class Nb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=At(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Oa(d).point)},o=(d,f)=>{const{drag:p,dragPropagation:x,onDragStart:y}=this.getProps();if(p&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=zw(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ln(h=>{let g=this.getAxisMotionValue(h).get()||0;if(mi.test(g)){const{projection:v}=this.visualElement;if(v&&v.layout){const _=v.layout.layoutBox[h];_&&(g=nn(_)*(parseFloat(g)/100))}}this.originPoint[h]=g}),y&&mt.postRender(()=>y(d,f)),Hf(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:x,onDirectionLock:y,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=f;if(x&&this.currentDirection===null){this.currentDirection=Ib(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,h),this.updateAxis("y",f.point,h),this.visualElement.render(),m&&m(d,f)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Ln(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)==null?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new RS(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:CS(this.visualElement)})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&mt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!hl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Ab(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Is(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=bb(i.layoutBox,e):this.constraints=!1,this.elastic=Db(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ln(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Pb(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Is(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=UA(i,r.root,this.visualElement.getTransformPagePoint());let o=Cb(r.layout.layoutBox,s);if(n){const a=n(LA(o));this.hasMutatedConstraints=!!a,a&&(o=hS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ln(u=>{if(!hl(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Hf(this.visualElement,e),i.start(am(e,i,0,n,this.visualElement,!1))}stopAnimation(){Ln(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ln(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Ln(n=>{const{drag:i}=this.getProps();if(!hl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-yt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Is(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ln(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=Rb({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ln(o=>{if(!hl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(yt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;Lb.set(this.visualElement,this);const e=this.visualElement.current,n=Qo(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Is(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),mt.read(i);const o=Ea(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ln(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Wf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function hl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Ib(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Ub extends Mr{constructor(e){super(e),this.removeGroupControls=Bn,this.removeListeners=Bn,this.controls=new Nb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Bn}unmount(){this.removeGroupControls(),this.removeListeners()}}const A0=t=>(e,n)=>{t&&mt.postRender(()=>t(e,n))};class Fb extends Mr{constructor(){super(...arguments),this.removePointerDownListener=Bn}onPointerDown(e){this.session=new RS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:CS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:A0(e),onStart:A0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&mt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Qo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ec={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function b0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ro={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Fe.test(t))t=parseFloat(t);else return t;const n=b0(t,e.target.x),i=b0(t,e.target.y);return`${n}% ${i}%`}},Ob={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=gr.parse(t);if(r.length>5)return i;const s=gr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=yt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};let Ku=!1;class kb extends Q.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;oA(Bb),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Ku&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ec.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,Ku=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||mt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Kp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Ku=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function DS(t){const[e,n]=J_(),i=Q.useContext(Rp);return C.jsx(kb,{...t,layoutGroup:i,switchLayoutGroup:Q.useContext(dS),isPresent:e,safeToRemove:n})}const Bb={borderRadius:{...Ro,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ro,borderTopRightRadius:Ro,borderBottomLeftRadius:Ro,borderBottomRightRadius:Ro,boxShadow:Ob};function Vb(t,e,n){const i=Zt(t)?t:io(t);return i.start(am("",i,e,n)),i.animation}const zb=(t,e)=>t.depth-e.depth;class Hb{constructor(){this.children=[],this.isDirty=!1}add(e){Lp(this.children,e),this.isDirty=!0}remove(e){Np(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(zb),this.isDirty=!1,this.children.forEach(e)}}function Gb(t,e){const n=dn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(mr(i),t(s-e))};return mt.setup(i,!0),()=>mr(i)}const LS=["TopLeft","TopRight","BottomLeft","BottomRight"],Wb=LS.length,C0=t=>typeof t=="string"?parseFloat(t):t,R0=t=>typeof t=="number"||Fe.test(t);function jb(t,e,n,i,r,s){r?(t.opacity=yt(0,n.opacity??1,Xb(i)),t.opacityExit=yt(e.opacity??1,0,Yb(i))):s&&(t.opacity=yt(e.opacity??1,n.opacity??1,i));for(let o=0;o<Wb;o++){const a=`border${LS[o]}Radius`;let l=P0(e,a),c=P0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||R0(l)===R0(c)?(t[a]=Math.max(yt(C0(l),C0(c),i),0),(mi.test(c)||mi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=yt(e.rotate||0,n.rotate||0,i))}function P0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Xb=NS(0,.5,y_),Yb=NS(.5,.95,Bn);function NS(t,e,n){return i=>i<t?0:i>e?1:n(xa(t,e,i))}function D0(t,e){t.min=e.min,t.max=e.max}function Pn(t,e){D0(t.x,e.x),D0(t.y,e.y)}function L0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function N0(t,e,n,i,r){return t-=e,t=Oc(t,1/n,i),r!==void 0&&(t=Oc(t,1/r,i)),t}function $b(t,e=0,n=1,i=.5,r,s=t,o=t){if(mi.test(e)&&(e=parseFloat(e),e=yt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=yt(s.min,s.max,i);t===s&&(a-=e),t.min=N0(t.min,e,n,a,r),t.max=N0(t.max,e,n,a,r)}function I0(t,e,[n,i,r],s,o){$b(t,e[n],e[i],e[r],e.scale,s,o)}const qb=["x","scaleX","originX"],Kb=["y","scaleY","originY"];function U0(t,e,n,i){I0(t.x,e,qb,n?n.x:void 0,i?i.x:void 0),I0(t.y,e,Kb,n?n.y:void 0,i?i.y:void 0)}function F0(t){return t.translate===0&&t.scale===1}function IS(t){return F0(t.x)&&F0(t.y)}function O0(t,e){return t.min===e.min&&t.max===e.max}function Zb(t,e){return O0(t.x,e.x)&&O0(t.y,e.y)}function k0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function US(t,e){return k0(t.x,e.x)&&k0(t.y,e.y)}function B0(t){return nn(t.x)/nn(t.y)}function V0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Qb{constructor(){this.members=[]}add(e){Lp(this.members,e),e.scheduleRender()}remove(e){if(Np(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Jb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Zu=["","X","Y","Z"],eC=1e3;let tC=0;function Qu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function FS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=SS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",mt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&FS(i)}function OS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=tC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(rC),this.nodes.forEach(lC),this.nodes.forEach(cC),this.nodes.forEach(sC)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Hb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Up),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Q_(o)&&!Yw(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;mt.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,u&&u(),u=Gb(f,250),ec.hasAnimatedSinceResize&&(ec.hasAnimatedSinceResize=!1,this.nodes.forEach(G0)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||pC,{onLayoutAnimationStart:y,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!US(this.targetLayout,p),g=!d&&f;if(this.options.layoutRoot||this.resumeFrom||g||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...$p(x,"layout"),onPlay:y,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(u,g)}else d||G0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uC),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&FS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(z0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(H0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(aC),this.nodes.forEach(nC),this.nodes.forEach(iC)):this.nodes.forEach(H0),this.clearAllSnapshots();const a=dn.now();Gt.delta=Oi(0,1e3/60,a-Gt.timestamp),Gt.timestamp=a,Gt.isProcessing=!0,Vu.update.process(Gt),Vu.preRender.process(Gt),Vu.render.process(Gt),Gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Kp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oC),this.sharedNodes.forEach(dC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,mt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){mt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!nn(this.snapshot.measuredBox.x)&&!nn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=At(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!IS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Ir(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),mC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return At();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(gC))){const{scroll:u}=this.root;u&&(Us(a.x,u.offset.x),Us(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=At();if(Pn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Pn(a,o),Us(a.x,d.offset.x),Us(a.y,d.offset.y))}return a}applyTransform(o,a=!1){const l=At();Pn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Fs(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ir(u.latestValues)&&Fs(l,u.latestValues)}return Ir(this.latestValues)&&Fs(l,this.latestValues),l}removeTransform(o){const a=At();Pn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ir(c.latestValues))continue;kf(c.latestValues)&&c.updateSnapshot();const u=At(),d=c.measurePageBox();Pn(u,d),U0(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ir(this.latestValues)&&U0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!(!this.layout||!(u||d))){if(this.resolvedRelativeTargetAt=Gt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),ea(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Pn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=At(),this.targetWithTransforms=At()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Mb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Pn(this.target,this.layout.layoutBox),mS(this.target,this.targetDelta)):Pn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),ea(this.relativeTargetOrigin,this.target,p.target),Pn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||kf(this.parent.latestValues)||pS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var x;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Gt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Pn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;IA(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=At());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(L0(this.prevProjectionDelta.x,this.projectionDelta.x),L0(this.prevProjectionDelta.y,this.projectionDelta.y)),Jo(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!V0(this.projectionDelta.x,this.prevProjectionDelta.x)||!V0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Os(),this.projectionDelta=Os(),this.projectionDeltaWithTransform=Os()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Os();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=At(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=p!==x,m=this.getStack(),h=!m||m.members.length<=1,g=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(hC));this.animationProgress=0;let v;this.mixTargetDelta=_=>{const T=_/1e3;W0(d.x,o.x,T),W0(d.y,o.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ea(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fC(this.relativeTarget,this.relativeTargetOrigin,f,T),v&&Zb(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=At()),Pn(v,this.relativeTarget)),y&&(this.animationValues=u,jb(u,c,this.latestValues,T,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=mt.update(()=>{ec.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=io(0)),this.currentAnimation=Vb(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(eC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&kS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||At();const d=nn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=nn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Pn(a,l),Fs(a,u),Jo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Qb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Qu("z",o,c,this.animationValues);for(let u=0;u<Zu.length;u++)Qu(`rotate${Zu[u]}`,o,c,this.animationValues),Qu(`skew${Zu[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Jl(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Jl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Ir(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=Jb(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:f,y:p}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const x in Ma){if(u[x]===void 0)continue;const{correct:y,applyTo:m,isCSSVariable:h}=Ma[x],g=d==="none"?u[x]:y(u[x],c);if(m){const v=m.length;for(let _=0;_<v;_++)o[m[_]]=g}else h?this.options.visualElement.renderState.vars[x]=g:o[x]=g}this.options.layoutId&&(o.pointerEvents=c===this?Jl(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(z0),this.root.sharedNodes.clear()}}}function nC(t){t.updateLayout()}function iC(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Ln(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=nn(f);f.min=i[d].min,f.max=f.min+p}):kS(s,e.layoutBox,i)&&Ln(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=nn(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Os();Jo(a,i,e.layoutBox);const l=Os();o?Jo(l,t.applyTransform(r,!0),e.measuredBox):Jo(l,i,e.layoutBox);const c=!IS(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const x=At();ea(x,e.layoutBox,f.layoutBox);const y=At();ea(y,i,p.layoutBox),US(x,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=x,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function rC(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function sC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function oC(t){t.clearSnapshot()}function z0(t){t.clearMeasurements()}function H0(t){t.isLayoutDirty=!1}function aC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function G0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function lC(t){t.resolveTargetDelta()}function cC(t){t.calcProjection()}function uC(t){t.resetSkewAndRotation()}function dC(t){t.removeLeadSnapshot()}function W0(t,e,n){t.translate=yt(e.translate,0,n),t.scale=yt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function j0(t,e,n,i){t.min=yt(e.min,n.min,i),t.max=yt(e.max,n.max,i)}function fC(t,e,n,i){j0(t.x,e.x,n.x,i),j0(t.y,e.y,n.y,i)}function hC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const pC={duration:.45,ease:[.4,0,.1,1]},X0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Y0=X0("applewebkit/")&&!X0("chrome/")?Math.round:Bn;function $0(t){t.min=Y0(t.min),t.max=Y0(t.max)}function mC(t){$0(t.x),$0(t.y)}function kS(t,e,n){return t==="position"||t==="preserve-aspect"&&!Sb(B0(e),B0(n),.2)}function gC(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const vC=OS({attachResizeListener:(t,e)=>Ea(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ju={current:void 0},BS=OS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ju.current){const t=new vC({});t.mount(window),t.setOptions({layoutScroll:!0}),Ju.current=t}return Ju.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),xC={pan:{Feature:Fb},drag:{Feature:Ub,ProjectionNode:BS,MeasureLayout:DS}};function q0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&mt.postRender(()=>s(e,Oa(e)))}class yC extends Mr{mount(){const{current:e}=this.node;e&&(this.unmount=Hw(e,(n,i)=>(q0(this.node,i,"Start"),r=>q0(this.node,r,"End"))))}unmount(){}}class _C extends Mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ia(Ea(this.node.current,"focus",()=>this.onFocus()),Ea(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function K0(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&mt.postRender(()=>s(e,Oa(e)))}class SC extends Mr{mount(){const{current:e}=this.node;e&&(this.unmount=Xw(e,(n,i)=>(K0(this.node,i,"Start"),(r,{success:s})=>K0(this.node,r,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const jf=new WeakMap,ed=new WeakMap,MC=t=>{const e=jf.get(t.target);e&&e(t)},EC=t=>{t.forEach(MC)};function TC({root:t,...e}){const n=t||document;ed.has(n)||ed.set(n,{});const i=ed.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(EC,{root:t,...e})),i[r]}function wC(t,e,n){const i=TC(e);return jf.set(t,n),i.observe(t),()=>{jf.delete(t),i.unobserve(t)}}const AC={some:0,all:1};class bC extends Mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:AC[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return wC(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(CC(e,n))&&this.startObserver()}unmount(){}}function CC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const RC={inView:{Feature:bC},tap:{Feature:SC},focus:{Feature:_C},hover:{Feature:yC}},PC={layout:{ProjectionNode:BS,MeasureLayout:DS}},DC={...mb,...RC,...xC,...PC},ge=DA(DC,WA);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Rt=(t,e)=>{const n=Q.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>Q.createElement("svg",{ref:u,...LC,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${NC(t)}`,a].join(" "),...c},[...e.map(([d,f])=>Q.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=Rt("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=Rt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=Rt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=Rt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=Rt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=Rt("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=Rt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=Rt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=Rt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=Rt("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=Rt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Rt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=Rt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=Rt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=Rt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=Rt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=Rt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=Rt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=Rt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=Rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Rt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),qC=()=>{const[t,e]=Q.useState(!1),[n,i]=Q.useState(!1);Q.useEffect(()=>{const l=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const r=[{id:"hero",label:"Home",icon:zC},{id:"about",label:"About",icon:$C},{id:"skills",label:"Skills",icon:Ta},{id:"portfolio",label:"Portfolio",icon:IC},{id:"contact",label:"Contact",icon:zS}],s=l=>{const c=document.getElementById(l);c&&(c.scrollIntoView({behavior:"smooth"}),e(!1))},o={closed:{x:"100%",transition:{type:"spring",stiffness:400,damping:40}},open:{x:0,transition:{type:"spring",stiffness:400,damping:40}}},a={closed:{x:50,opacity:0},open:l=>({x:0,opacity:1,transition:{delay:l*.1,type:"spring",stiffness:300,damping:24}})};return C.jsxs(C.Fragment,{children:[C.jsx(ge.button,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:2,duration:.5},onClick:()=>e(!0),className:`fixed top-6 right-6 z-40 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${n?"bg-gray-800/90 backdrop-blur-md border border-cyan-500/50":"bg-gray-800/60 backdrop-blur-sm border border-cyan-500/30"}`,whileHover:{scale:1.1},whileTap:{scale:.95},style:{boxShadow:n?"0 0 30px rgba(0, 255, 255, 0.3)":"0 0 20px rgba(0, 255, 255, 0.2)"},children:C.jsx(GC,{className:"w-6 h-6 text-cyan-400"})}),C.jsx(Uc,{children:t&&C.jsx(ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50",onClick:()=>e(!1)})}),C.jsx(Uc,{children:t&&C.jsx(ge.div,{variants:o,initial:"closed",animate:"open",exit:"closed",className:"fixed top-0 right-0 h-full w-72 md:w-80 bg-gray-900/95 backdrop-blur-xl z-50 border-l border-cyan-500/30",style:{boxShadow:"0 0 50px rgba(0, 255, 255, 0.2)"},children:C.jsxs("div",{className:"p-4 md:p-6",children:[C.jsx(ge.button,{onClick:()=>e(!1),className:"absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-800/60 hover:bg-gray-700/60 flex items-center justify-center transition-colors border border-cyan-500/30",whileHover:{scale:1.1},whileTap:{scale:.95},style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.2)"},children:C.jsx(HS,{className:"w-5 h-5 text-cyan-400"})}),C.jsxs(ge.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.2},className:"mb-8 md:mb-12 pt-4",children:[C.jsxs("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3",children:[C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",children:"Monirul"}),C.jsx("br",{}),C.jsx("span",{className:"text-white",children:"Islam"})]}),C.jsx("p",{className:"text-cyan-300 text-xs md:text-sm",children:"Full-Stack Developer"})]}),C.jsx("nav",{className:"space-y-2 md:space-y-3",children:r.map((l,c)=>C.jsxs(ge.button,{custom:c,variants:a,initial:"closed",animate:"open",onClick:()=>s(l.id),className:"w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-800/60 transition-colors text-left group border border-transparent hover:border-cyan-500/30",whileHover:{x:10},style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.05)"},children:[C.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.3)"},children:C.jsx(l.icon,{className:"w-4 h-4 md:w-5 md:h-5 text-white"})}),C.jsx("span",{className:"text-white font-medium group-hover:text-cyan-300 transition-colors text-base md:text-lg",children:l.label})]},l.id))}),C.jsx(ge.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6",children:C.jsxs("div",{className:"text-center text-xs md:text-sm text-cyan-400",children:[C.jsxs("p",{children:["© ",new Date().getFullYear()," Monirul Islam"]}),C.jsx("p",{children:"Full-Stack Developer"})]})})]})})})]})},KC=({currentSection:t,onScrollToTop:e,isScrolling:n=!1})=>{const[i,r]=Q.useState(!1);return Q.useEffect(()=>{r(t>0)},[t]),C.jsx(Uc,{children:i&&C.jsxs(ge.button,{initial:{opacity:0,scale:0,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:0,y:20},transition:{type:"spring",stiffness:400,damping:25},onClick:e,disabled:n,className:`fixed bottom-8 right-8 z-30 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full flex items-center justify-center group border-2 border-cyan-400 transition-all duration-300 ${n?"opacity-70 cursor-not-allowed":"hover:scale-110"}`,whileHover:n?{}:{scale:1.1,boxShadow:"0 20px 40px rgba(0, 255, 255, 0.4)"},whileTap:n?{}:{scale:.95},style:{boxShadow:n?"0 0 40px rgba(0, 255, 255, 0.6)":"0 0 30px rgba(0, 255, 255, 0.3)"},children:[C.jsx(OC,{className:`w-6 h-6 transition-transform duration-200 ${n?"animate-pulse":"group-hover:animate-bounce"}`}),n?C.jsx(ge.div,{className:"absolute inset-0 rounded-full border-2 border-cyan-300",initial:{scale:1,opacity:1},animate:{scale:1.5,opacity:0},transition:{duration:1,repeat:1/0,ease:"easeOut"}}):C.jsx(ge.div,{className:"absolute inset-0 rounded-full bg-cyan-400/20",initial:{scale:0,opacity:1},animate:{scale:2,opacity:0},transition:{duration:1.5,repeat:1/0,ease:"easeOut"}})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lm="179",ZC=0,Z0=1,QC=2,WS=1,JC=2,Ti=3,vr=0,mn=1,bi=2,dr=0,Ys=1,Q0=2,J0=3,ev=4,eR=5,Or=100,tR=101,nR=102,iR=103,rR=104,sR=200,oR=201,aR=202,lR=203,Xf=204,Yf=205,cR=206,uR=207,dR=208,fR=209,hR=210,pR=211,mR=212,gR=213,vR=214,$f=0,qf=1,Kf=2,so=3,Zf=4,Qf=5,Jf=6,eh=7,jS=0,xR=1,yR=2,fr=0,_R=1,SR=2,MR=3,ER=4,TR=5,wR=6,AR=7,XS=300,oo=301,ao=302,th=303,nh=304,lu=306,ih=1e3,Wr=1001,rh=1002,ei=1003,bR=1004,pl=1005,li=1006,td=1007,jr=1008,Bi=1009,YS=1010,$S=1011,wa=1012,cm=1013,ts=1014,Pi=1015,ka=1016,um=1017,dm=1018,Aa=1020,qS=35902,KS=1021,ZS=1022,Zn=1023,ba=1026,Ca=1027,QS=1028,fm=1029,JS=1030,hm=1031,pm=1033,tc=33776,nc=33777,ic=33778,rc=33779,sh=35840,oh=35841,ah=35842,lh=35843,ch=36196,uh=37492,dh=37496,fh=37808,hh=37809,ph=37810,mh=37811,gh=37812,vh=37813,xh=37814,yh=37815,_h=37816,Sh=37817,Mh=37818,Eh=37819,Th=37820,wh=37821,sc=36492,Ah=36494,bh=36495,eM=36283,Ch=36284,Rh=36285,Ph=36286,CR=3200,RR=3201,PR=0,DR=1,er="",Nn="srgb",lo="srgb-linear",kc="linear",st="srgb",as=7680,tv=519,LR=512,NR=513,IR=514,tM=515,UR=516,FR=517,OR=518,kR=519,nv=35044,iv="300 es",ci=2e3,Bc=2001;class vo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,Dh=180/Math.PI;function Ba(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function BR(t,e){return(t%e+e)%e}function id(t,e,n){return(1-n)*t+n*e}function Po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Va{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==f||c!==p||u!==x){let m=1-a;const h=l*f+c*p+u*x+d*y,g=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,h*g);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const _=a*g;if(l=l*m+f*_,c=c*m+p*_,u=u*m+x*_,d=d*m+y*_,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*p-c*f,e[n+1]=l*x+u*f+c*d-a*p,e[n+2]=c*x+u*p+a*f-l*d,e[n+3]=u*x-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"YXZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"ZXY":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"ZYX":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"YZX":this._x=f*u*d+c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d-f*p*x;break;case"XZY":this._x=f*u*d-c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new k,rv=new Va;class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],x=i[8],y=r[0],m=r[3],h=r[6],g=r[1],v=r[4],_=r[7],T=r[2],b=r[5],A=r[8];return s[0]=o*y+a*g+l*T,s[3]=o*m+a*v+l*b,s[6]=o*h+a*_+l*A,s[1]=c*y+u*g+d*T,s[4]=c*m+u*v+d*b,s[7]=c*h+u*_+d*A,s[2]=f*y+p*g+x*T,s[5]=f*m+p*v+x*b,s[8]=f*h+p*_+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,x=n*d+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(sd.makeScale(e,n)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,n){return this.premultiply(sd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new He;function nM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VR(){const t=Vc("canvas");return t.style.display="block",t}const sv={};function $s(t){t in sv||(sv[t]=!0,console.warn(t))}function zR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ov=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),av=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HR(){const t={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?kc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[lo]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:ov,fromXYZ:av,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:ov,fromXYZ:av,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const Qe=HR();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class GR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Vc("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WR=0;class mm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WR++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(od(r[o].image)):s.push(od(r[o]))}else s=od(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function od(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?GR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jR=0;const ad=new k;class gn extends vo{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Wr,r=Wr,s=li,o=jr,a=Zn,l=Bi,c=gn.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=Ba(),this.name="",this.source=new mm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=XS;gn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],x=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,_=(p+1)/2,T=(h+1)/2,b=(u+f)/4,A=(d+y)/4,R=(x+m)/4;return v>_&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=b/r,s=R/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-y)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XR extends vo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new gn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new mm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends XR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iM extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YR extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),gl.subVectors(this.max,Do),cs.subVectors(e.a,Do),us.subVectors(e.b,Do),ds.subVectors(e.c,Do),Gi.subVectors(us,cs),Wi.subVectors(ds,us),Ar.subVectors(cs,ds);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Ar.z,Ar.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Ar.z,0,-Ar.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Ar.y,Ar.x,0];return!ld(n,cs,us,ds,gl)||(n=[1,0,0,0,1,0,0,0,1],!ld(n,cs,us,ds,gl))?!1:(vl.crossVectors(Gi,Wi),n=[vl.x,vl.y,vl.z],ld(n,cs,us,ds,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new k,new k,new k,new k,new k,new k,new k,new k],Gn=new k,ml=new za,cs=new k,us=new k,ds=new k,Gi=new k,Wi=new k,Ar=new k,Do=new k,gl=new k,vl=new k,br=new k;function ld(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $R=new za,Lo=new k,cd=new k;class cu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$R.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(cd)),this.expandByPoint(Lo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _i=new k,ud=new k,xl=new k,ji=new k,dd=new k,yl=new k,fd=new k;class rM{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ud.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(ud);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xl),a=ji.dot(this.direction),l=-ji.dot(xl),c=ji.lengthSq(),u=Math.abs(1-o*o);let d,f,p,x;if(u>0)if(d=o*l-a,f=o*a-l,x=s*u,d>=0)if(f>=-x)if(f<=x){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ud).addScaledVector(xl,f),p}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){dd.subVectors(n,e),yl.subVectors(i,e),fd.crossVectors(dd,yl);let o=this.direction.dot(fd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(yl.crossVectors(ji,yl));if(l<0)return null;const c=a*this.direction.dot(dd.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(fd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,x,y,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,x,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,x,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=x,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,x=c*u,y=c*d;n[0]=f+y*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,x=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=x*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=x*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+x,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qR,e,KR)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Xi.crossVectors(i,_n),Xi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Xi.crossVectors(i,_n)),Xi.normalize(),_l.crossVectors(_n,Xi),r[0]=Xi.x,r[4]=_l.x,r[8]=_n.x,r[1]=Xi.y,r[5]=_l.y,r[9]=_n.y,r[2]=Xi.z,r[6]=_l.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],x=i[2],y=i[6],m=i[10],h=i[14],g=i[3],v=i[7],_=i[11],T=i[15],b=r[0],A=r[4],R=r[8],E=r[12],M=r[1],D=r[5],z=r[9],H=r[13],$=r[2],j=r[6],G=r[10],Y=r[14],L=r[3],W=r[7],q=r[11],ue=r[15];return s[0]=o*b+a*M+l*$+c*L,s[4]=o*A+a*D+l*j+c*W,s[8]=o*R+a*z+l*G+c*q,s[12]=o*E+a*H+l*Y+c*ue,s[1]=u*b+d*M+f*$+p*L,s[5]=u*A+d*D+f*j+p*W,s[9]=u*R+d*z+f*G+p*q,s[13]=u*E+d*H+f*Y+p*ue,s[2]=x*b+y*M+m*$+h*L,s[6]=x*A+y*D+m*j+h*W,s[10]=x*R+y*z+m*G+h*q,s[14]=x*E+y*H+m*Y+h*ue,s[3]=g*b+v*M+_*$+T*L,s[7]=g*A+v*D+_*j+T*W,s[11]=g*R+v*z+_*G+T*q,s[15]=g*E+v*H+_*Y+T*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],x=e[3],y=e[7],m=e[11],h=e[15];return x*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],x=e[12],y=e[13],m=e[14],h=e[15],g=d*m*c-y*f*c+y*l*p-a*m*p-d*l*h+a*f*h,v=x*f*c-u*m*c-x*l*p+o*m*p+u*l*h-o*f*h,_=u*y*c-x*d*c+x*a*p-o*y*p-u*a*h+o*d*h,T=x*d*l-u*y*l-x*a*f+o*y*f+u*a*m-o*d*m,b=n*g+i*v+r*_+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*m*s-x*f*s+x*r*p-n*m*p-u*r*h+n*f*h)*A,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*h-n*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=_*A,e[9]=(x*d*s-u*y*s-x*i*p+n*y*p+u*i*h-n*d*h)*A,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=T*A,e[13]=(u*y*r-x*d*r+x*i*f-n*y*f-u*i*m+n*d*m)*A,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,x=s*d,y=o*u,m=o*d,h=a*d,g=l*c,v=l*u,_=l*d,T=i.x,b=i.y,A=i.z;return r[0]=(1-(y+h))*T,r[1]=(p+_)*T,r[2]=(x-v)*T,r[3]=0,r[4]=(p-_)*b,r[5]=(1-(f+h))*b,r[6]=(m+g)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(m-g)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,d=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ci,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let x,y;if(l)x=s/(o-s),y=o*s/(o-s);else if(a===ci)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Bc)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ci,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,y;if(l)x=1/(o-s),y=o/(o-s);else if(a===ci)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===Bc)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fs=new k,Wn=new Nt,qR=new k(0,0,0),KR=new k(1,1,1),Xi=new k,_l=new k,_n=new k,lv=new Nt,cv=new Va;class Vi{constructor(e=0,n=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cv.setFromEuler(this),this.setFromQuaternion(cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class sM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZR=0;const uv=new k,hs=new Va,Si=new Nt,Sl=new k,No=new k,QR=new k,JR=new Va,dv=new k(1,0,0),fv=new k(0,1,0),hv=new k(0,0,1),pv={type:"added"},e2={type:"removed"},ps={type:"childadded",child:null},hd={type:"childremoved",child:null};class vn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new k,n=new Vi,i=new Va,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new He}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(dv,e)}rotateY(e){return this.rotateOnAxis(fv,e)}rotateZ(e){return this.rotateOnAxis(hv,e)}translateOnAxis(e,n){return uv.copy(e).applyQuaternion(this.quaternion),this.position.add(uv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dv,e)}translateY(e){return this.translateOnAxis(fv,e)}translateZ(e){return this.translateOnAxis(hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sl.copy(e):Sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(No,Sl,this.up):Si.lookAt(Sl,No,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Si),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pv),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(e2),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pv),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,QR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,JR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new k(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new k,Mi=new k,pd=new k,Ei=new k,ms=new k,gs=new k,mv=new k,md=new k,gd=new k,vd=new k,xd=new Ct,yd=new Ct,_d=new Ct;class Kn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Mi.subVectors(i,n),pd.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Mi),l=jn.dot(pd),c=Mi.dot(Mi),u=Mi.dot(pd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return xd.setScalar(0),yd.setScalar(0),_d.setScalar(0),xd.fromBufferAttribute(e,n),yd.fromBufferAttribute(e,i),_d.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xd,s.x),o.addScaledVector(yd,s.y),o.addScaledVector(_d,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Mi.subVectors(e,n),jn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),gs.subVectors(s,i),md.subVectors(e,i);const l=ms.dot(md),c=gs.dot(md);if(l<=0&&c<=0)return n.copy(i);gd.subVectors(e,r);const u=ms.dot(gd),d=gs.dot(gd);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ms,o);vd.subVectors(e,s);const p=ms.dot(vd),x=gs.dot(vd);if(x>=0&&p<=x)return n.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(gs,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return mv.subVectors(s,r),a=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(mv,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function Sd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=BR(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Sd(o,s,e+1/3),this.g=Sd(o,s,e),this.b=Sd(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=oM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Qe.workingToColorSpace(qt.copy(this),e),Math.round($e(qt.r*255,0,255))*65536+Math.round($e(qt.g*255,0,255))*256+Math.round($e(qt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Nn){Qe.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Ml);const i=id(Yi.h,Ml.h,n),r=id(Yi.s,Ml.s,n),s=id(Yi.l,Ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new nt;nt.NAMES=oM;let t2=0;class Ha extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=Ys,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=Yf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xf&&(i.blendSrc=this.blendSrc),this.blendDst!==Yf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ks extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=jS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new k,El=new et;let n2=0;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nv,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Po(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Po(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Po(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nv&&(e.usage=this.usage),e}}class aM extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class lM extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gi extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let i2=0;const Dn=new Nt,Md=new vn,vs=new k,Sn=new za,Io=new za,Bt=new k;class vi extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i2++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nM(e)?lM:aM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Sn.min,Io.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,Io.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(Io.min),Sn.expandByPoint(Io.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Bt.add(vs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new k,l[R]=new k;const c=new k,u=new k,d=new k,f=new et,p=new et,x=new et,y=new k,m=new k;function h(R,E,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),a[R].add(y),a[E].add(y),a[M].add(y),l[R].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,E=g.length;R<E;++R){const M=g[R],D=M.start,z=M.count;for(let H=D,$=D+z;H<$;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new k,_=new k,T=new k,b=new k;function A(R){T.fromBufferAttribute(r,R),b.copy(T);const E=a[R];v.copy(E),v.sub(T.multiplyScalar(T.dot(E))).normalize(),_.crossVectors(b,E);const D=_.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,D)}for(let R=0,E=g.length;R<E;++R){const M=g[R],D=M.start,z=M.count;for(let H=D,$=D+z;H<$;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[x++]=c[p++]}return new ti(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gv=new Nt,Cr=new rM,Tl=new cu,vv=new k,wl=new k,Al=new k,bl=new k,Ed=new k,Cl=new k,xv=new k,Rl=new k;class ui extends vn{constructor(e=new vi,n=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ed.fromBufferAttribute(d,e),o?Cl.addScaledVector(Ed,u):Cl.addScaledVector(Ed.sub(n),u))}n.add(Cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Tl,vv)===null||Cr.origin.distanceToSquared(vv)>(e.far-e.near)**2))&&(gv.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(gv),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=g,T=v;_<T;_+=3){const b=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);r=Pl(this,h,e,i,c,u,d,b,A,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,h=y;m<h;m+=3){const g=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=Pl(this,o,e,i,c,u,d,g,v,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=g,T=v;_<T;_+=3){const b=_,A=_+1,R=_+2;r=Pl(this,h,e,i,c,u,d,b,A,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,h=y;m<h;m+=3){const g=m,v=m+1,_=m+2;r=Pl(this,o,e,i,c,u,d,g,v,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function r2(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vr,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Rl);return c<n.near||c>n.far?null:{distance:c,point:Rl.clone(),object:t}}function Pl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,wl),t.getVertexPosition(l,Al),t.getVertexPosition(c,bl);const u=r2(t,e,n,i,wl,Al,bl,xv);if(u){const d=new k;Kn.getBarycoord(xv,wl,Al,bl,d),r&&(u.uv=Kn.getInterpolatedAttribute(r,a,l,c,d,new et)),s&&(u.uv1=Kn.getInterpolatedAttribute(s,a,l,c,d,new et)),o&&(u.normal=Kn.getInterpolatedAttribute(o,a,l,c,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Kn.getNormal(wl,Al,bl,f.normal),u.face=f,u.barycoord=d}return u}class Ga extends vi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(d,2));function x(y,m,h,g,v,_,T,b,A,R,E){const M=_/A,D=T/R,z=_/2,H=T/2,$=b/2,j=A+1,G=R+1;let Y=0,L=0;const W=new k;for(let q=0;q<G;q++){const ue=q*D-H;for(let oe=0;oe<j;oe++){const Be=oe*M-z;W[y]=Be*g,W[m]=ue*v,W[h]=$,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[h]=b>0?1:-1,u.push(W.x,W.y,W.z),d.push(oe/A),d.push(1-q/R),Y+=1}}for(let q=0;q<R;q++)for(let ue=0;ue<A;ue++){const oe=f+ue+j*q,Be=f+ue+j*(q+1),ke=f+(ue+1)+j*(q+1),X=f+(ue+1)+j*q;l.push(oe,Be,X),l.push(Be,ke,X),L+=6}a.addGroup(p,L,E),p+=L,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=co(t[n]);for(const r in i)e[r]=i[r]}return e}function s2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const o2={clone:co,merge:en};var a2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a2,this.fragmentShader=l2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=s2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class uM extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new k,yv=new et,_v=new et;class Fn extends uM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,yv,_v),n.subVectors(_v,yv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xs=-90,ys=1;class c2 extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(xs,ys,e,n);r.layers=this.layers,this.add(r);const s=new Fn(xs,ys,e,n);s.layers=this.layers,this.add(s);const o=new Fn(xs,ys,e,n);o.layers=this.layers,this.add(o);const a=new Fn(xs,ys,e,n);a.layers=this.layers,this.add(a);const l=new Fn(xs,ys,e,n);l.layers=this.layers,this.add(l);const c=new Fn(xs,ys,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class dM extends gn{constructor(e=[],n=oo,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u2 extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ga(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:dr});s.uniforms.tEquirect.value=n;const o=new ui(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=li),new c2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Dl extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d2={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Dl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class f2 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const wd=new k,h2=new k,p2=new He;class Ur{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wd.subVectors(i,n).cross(h2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||p2.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new cu,m2=new et(.5,.5),Ll=new k;class fM{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],x=s[8],y=s[9],m=s[10],h=s[11],g=s[12],v=s[13],_=s[14],T=s[15];if(r[0].setComponents(c-o,p-u,h-x,T-g).normalize(),r[1].setComponents(c+o,p+u,h+x,T+g).normalize(),r[2].setComponents(c+a,p+d,h+y,T+v).normalize(),r[3].setComponents(c-a,p-d,h-y,T-v).normalize(),i)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,p-f,h-m,T-_).normalize();else if(r[4].setComponents(c-l,p-f,h-m,T-_).normalize(),n===ci)r[5].setComponents(c+l,p+f,h+m,T+_).normalize();else if(n===Bc)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const n=m2.distanceTo(e.center);return Rr.radius=.7071067811865476+n,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hM extends Ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sv=new Nt,Lh=new rM,Nl=new cu,Il=new k;class g2 extends vn{constructor(e=new vi,n=new hM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;Sv.copy(r).invert(),Lh.copy(e.ray).applyMatrix4(Sv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=f,y=p;x<y;x++){const m=c.getX(x);Il.fromBufferAttribute(d,m),Mv(Il,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,y=p;x<y;x++)Il.fromBufferAttribute(d,x),Mv(Il,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mv(t,e,n,i,r,s,o){const a=Lh.distanceSqToPoint(t);if(a<n){const l=new k;Lh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class pM extends gn{constructor(e,n,i=ts,r,s,o,a=ei,l=ei,c,u=ba,d=1){if(u!==ba&&u!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xo extends vi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new gi(s,3)),this.setAttribute("normal",new gi(s.slice(),3)),this.setAttribute("uv",new gi(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new k,_=new k,T=new k;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],_),p(n[b+2],T),l(v,_,T,g)}function l(g,v,_,T){const b=T+1,A=[];for(let R=0;R<=b;R++){A[R]=[];const E=g.clone().lerp(_,R/b),M=v.clone().lerp(_,R/b),D=b-R;for(let z=0;z<=D;z++)z===0&&R===b?A[R][z]=E:A[R][z]=E.clone().lerp(M,z/D)}for(let R=0;R<b;R++)for(let E=0;E<2*(b-R)-1;E++){const M=Math.floor(E/2);E%2===0?(f(A[R][M+1]),f(A[R+1][M]),f(A[R][M])):(f(A[R][M+1]),f(A[R+1][M+1]),f(A[R+1][M]))}}function c(g){const v=new k;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(g),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function u(){const g=new k;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const _=m(g)/2/Math.PI+.5,T=h(g)/Math.PI+.5;o.push(_,1-T)}x(),d()}function d(){for(let g=0;g<o.length;g+=6){const v=o[g+0],_=o[g+2],T=o[g+4],b=Math.max(v,_,T),A=Math.min(v,_,T);b>.9&&A<.1&&(v<.2&&(o[g+0]+=1),_<.2&&(o[g+2]+=1),T<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,v){const _=g*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function x(){const g=new k,v=new k,_=new k,T=new k,b=new et,A=new et,R=new et;for(let E=0,M=0;E<s.length;E+=9,M+=6){g.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),b.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),T.copy(g).add(v).add(_).divideScalar(3);const D=m(T);y(b,M+0,g,D),y(A,M+2,v,D),y(R,M+4,_,D)}}function y(g,v,_,T){T<0&&g.x===1&&(o[v]=g.x-1),_.x===0&&_.z===0&&(o[v]=T/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.vertices,e.indices,e.radius,e.details)}}class gm extends xo{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new gm(e.radius,e.detail)}}class vm extends xo{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new vm(e.radius,e.detail)}}class xm extends xo{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new xm(e.radius,e.detail)}}class uu extends vi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],x=[],y=[],m=[];for(let h=0;h<u;h++){const g=h*f-o;for(let v=0;v<c;v++){const _=v*d-s;x.push(_,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const v=g+c*h,_=g+c*(h+1),T=g+1+c*(h+1),b=g+1+c*h;p.push(v,_,b),p.push(_,T,b)}this.setIndex(p),this.setAttribute("position",new gi(x,3)),this.setAttribute("normal",new gi(y,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ym extends xo{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ym(e.radius,e.detail)}}class v2 extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x2 extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class y2 extends uM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _2 extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ev(t,e,n,i){const r=S2(i);switch(n){case KS:return t*e;case QS:return t*e/r.components*r.byteLength;case fm:return t*e/r.components*r.byteLength;case JS:return t*e*2/r.components*r.byteLength;case hm:return t*e*2/r.components*r.byteLength;case ZS:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case pm:return t*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:case lh:return Math.max(t,16)*Math.max(e,8)/4;case sh:case ah:return Math.max(t,8)*Math.max(e,8)/2;case ch:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sc:case Ah:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case eM:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function S2(t){switch(t){case Bi:case YS:return{byteLength:1,components:1};case wa:case $S:case ka:return{byteLength:2,components:1};case um:case dm:return{byteLength:2,components:4};case ts:case cm:case Pi:return{byteLength:4,components:1};case qS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function M2(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var E2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J2="gl_FragColor = linearToOutputTexel( gl_FragColor );",eP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_P=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$P=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ED=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ND=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ID=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$D=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:E2,alphahash_pars_fragment:T2,alphamap_fragment:w2,alphamap_pars_fragment:A2,alphatest_fragment:b2,alphatest_pars_fragment:C2,aomap_fragment:R2,aomap_pars_fragment:P2,batching_pars_vertex:D2,batching_vertex:L2,begin_vertex:N2,beginnormal_vertex:I2,bsdfs:U2,iridescence_fragment:F2,bumpmap_pars_fragment:O2,clipping_planes_fragment:k2,clipping_planes_pars_fragment:B2,clipping_planes_pars_vertex:V2,clipping_planes_vertex:z2,color_fragment:H2,color_pars_fragment:G2,color_pars_vertex:W2,color_vertex:j2,common:X2,cube_uv_reflection_fragment:Y2,defaultnormal_vertex:$2,displacementmap_pars_vertex:q2,displacementmap_vertex:K2,emissivemap_fragment:Z2,emissivemap_pars_fragment:Q2,colorspace_fragment:J2,colorspace_pars_fragment:eP,envmap_fragment:tP,envmap_common_pars_fragment:nP,envmap_pars_fragment:iP,envmap_pars_vertex:rP,envmap_physical_pars_fragment:mP,envmap_vertex:sP,fog_vertex:oP,fog_pars_vertex:aP,fog_fragment:lP,fog_pars_fragment:cP,gradientmap_pars_fragment:uP,lightmap_pars_fragment:dP,lights_lambert_fragment:fP,lights_lambert_pars_fragment:hP,lights_pars_begin:pP,lights_toon_fragment:gP,lights_toon_pars_fragment:vP,lights_phong_fragment:xP,lights_phong_pars_fragment:yP,lights_physical_fragment:_P,lights_physical_pars_fragment:SP,lights_fragment_begin:MP,lights_fragment_maps:EP,lights_fragment_end:TP,logdepthbuf_fragment:wP,logdepthbuf_pars_fragment:AP,logdepthbuf_pars_vertex:bP,logdepthbuf_vertex:CP,map_fragment:RP,map_pars_fragment:PP,map_particle_fragment:DP,map_particle_pars_fragment:LP,metalnessmap_fragment:NP,metalnessmap_pars_fragment:IP,morphinstance_vertex:UP,morphcolor_vertex:FP,morphnormal_vertex:OP,morphtarget_pars_vertex:kP,morphtarget_vertex:BP,normal_fragment_begin:VP,normal_fragment_maps:zP,normal_pars_fragment:HP,normal_pars_vertex:GP,normal_vertex:WP,normalmap_pars_fragment:jP,clearcoat_normal_fragment_begin:XP,clearcoat_normal_fragment_maps:YP,clearcoat_pars_fragment:$P,iridescence_pars_fragment:qP,opaque_fragment:KP,packing:ZP,premultiplied_alpha_fragment:QP,project_vertex:JP,dithering_fragment:eD,dithering_pars_fragment:tD,roughnessmap_fragment:nD,roughnessmap_pars_fragment:iD,shadowmap_pars_fragment:rD,shadowmap_pars_vertex:sD,shadowmap_vertex:oD,shadowmask_pars_fragment:aD,skinbase_vertex:lD,skinning_pars_vertex:cD,skinning_vertex:uD,skinnormal_vertex:dD,specularmap_fragment:fD,specularmap_pars_fragment:hD,tonemapping_fragment:pD,tonemapping_pars_fragment:mD,transmission_fragment:gD,transmission_pars_fragment:vD,uv_pars_fragment:xD,uv_pars_vertex:yD,uv_vertex:_D,worldpos_vertex:SD,background_vert:MD,background_frag:ED,backgroundCube_vert:TD,backgroundCube_frag:wD,cube_vert:AD,cube_frag:bD,depth_vert:CD,depth_frag:RD,distanceRGBA_vert:PD,distanceRGBA_frag:DD,equirect_vert:LD,equirect_frag:ND,linedashed_vert:ID,linedashed_frag:UD,meshbasic_vert:FD,meshbasic_frag:OD,meshlambert_vert:kD,meshlambert_frag:BD,meshmatcap_vert:VD,meshmatcap_frag:zD,meshnormal_vert:HD,meshnormal_frag:GD,meshphong_vert:WD,meshphong_frag:jD,meshphysical_vert:XD,meshphysical_frag:YD,meshtoon_vert:$D,meshtoon_frag:qD,points_vert:KD,points_frag:ZD,shadow_vert:QD,shadow_frag:JD,sprite_vert:eL,sprite_frag:tL},fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},oi={basic:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:en([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:en([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:en([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:en([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:en([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:en([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:en([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:en([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:en([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:en([fe.lights,fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};oi.physical={uniforms:en([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ul={r:0,b:0,g:0},Pr=new Vi,nL=new Nt;function iL(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const T=x(v);T===null?h(a,l):T&&T.isColor&&(h(T,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const T=x(_);T&&(T.isCubeTexture||T.mapping===lu)?(u===void 0&&(u=new ui(new Ga(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:co(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(_.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nL.makeRotationFromEuler(Pr)),u.material.toneMapped=Qe.getTransfer(T.colorSpace)!==st,(d!==T||f!==T.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ui(new uu(2,2),new xr({name:"BackgroundMaterial",uniforms:co(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,_){v.getRGB(Ul,cM(t)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,_,o)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:y,addToRenderList:m,dispose:g}}function rL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,D,z,H,$){let j=!1;const G=d(H,z,D);s!==G&&(s=G,c(s.object)),j=p(M,H,z,$),j&&x(M,H,z,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(M,D,z,H),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,D,z){const H=z.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let j=$[D.id];j===void 0&&(j={},$[D.id]=j);let G=j[H];return G===void 0&&(G=f(l()),j[H]=G),G}function f(M){const D=[],z=[],H=[];for(let $=0;$<n;$++)D[$]=0,z[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,D,z,H){const $=s.attributes,j=D.attributes;let G=0;const Y=z.getAttributes();for(const L in Y)if(Y[L].location>=0){const q=$[L];let ue=j[L];if(ue===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),q===void 0||q.attribute!==ue||ue&&q.data!==ue.data)return!0;G++}return s.attributesNum!==G||s.index!==H}function x(M,D,z,H){const $={},j=D.attributes;let G=0;const Y=z.getAttributes();for(const L in Y)if(Y[L].location>=0){let q=j[L];q===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const ue={};ue.attribute=q,q&&q.data&&(ue.data=q.data),$[L]=ue,G++}s.attributes=$,s.attributesNum=G,s.index=H}function y(){const M=s.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){h(M,0)}function h(M,D){const z=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;z[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),$[M]!==D&&(t.vertexAttribDivisor(M,D),$[M]=D)}function g(){const M=s.newAttributes,D=s.enabledAttributes;for(let z=0,H=D.length;z<H;z++)D[z]!==M[z]&&(t.disableVertexAttribArray(z),D[z]=0)}function v(M,D,z,H,$,j,G){G===!0?t.vertexAttribIPointer(M,D,z,$,j):t.vertexAttribPointer(M,D,z,H,$,j)}function _(M,D,z,H){y();const $=H.attributes,j=z.getAttributes(),G=D.defaultAttributeValues;for(const Y in j){const L=j[Y];if(L.location>=0){let W=$[Y];if(W===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const q=W.normalized,ue=W.itemSize,oe=e.get(W);if(oe===void 0)continue;const Be=oe.buffer,ke=oe.type,X=oe.bytesPerElement,te=ke===t.INT||ke===t.UNSIGNED_INT||W.gpuType===cm;if(W.isInterleavedBufferAttribute){const J=W.data,Me=J.stride,we=W.offset;if(J.isInstancedInterleavedBuffer){for(let De=0;De<L.locationSize;De++)h(L.location+De,J.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let De=0;De<L.locationSize;De++)m(L.location+De);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let De=0;De<L.locationSize;De++)v(L.location+De,ue/L.locationSize,ke,q,Me*X,(we+ue/L.locationSize*De)*X,te)}else{if(W.isInstancedBufferAttribute){for(let J=0;J<L.locationSize;J++)h(L.location+J,W.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let J=0;J<L.locationSize;J++)m(L.location+J);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let J=0;J<L.locationSize;J++)v(L.location+J,ue/L.locationSize,ke,q,ue*X,ue/L.locationSize*J*X,te)}}else if(G!==void 0){const q=G[Y];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(L.location,q);break;case 3:t.vertexAttrib3fv(L.location,q);break;case 4:t.vertexAttrib4fv(L.location,q);break;default:t.vertexAttrib1fv(L.location,q)}}}}g()}function T(){R();for(const M in i){const D=i[M];for(const z in D){const H=D[z];for(const $ in H)u(H[$].object),delete H[$];delete D[z]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const z in D){const H=D[z];for(const $ in H)u(H[$].object),delete H[$];delete D[z]}delete i[M.id]}function A(M){for(const D in i){const z=i[D];if(z[M.id]===void 0)continue;const H=z[M.id];for(const $ in H)u(H[$].object),delete H[$];delete z[M.id]}}function R(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function sL(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y]*f[y];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pi&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:b}}function aL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ur,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let _=h.clippingState||null;l.value=_,_=u(x,f,v,p);for(let T=0;T!==v;++T)_[T]=n[T];h.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,x){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const h=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,_=p;v!==y;++v,_+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function lL(t){let e=new WeakMap;function n(o,a){return a===th?o.mapping=oo:a===nh&&(o.mapping=ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===th||a===nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new u2(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Bs=4,Tv=[.125,.215,.35,.446,.526,.582],kr=20,Ad=new y2,wv=new nt;let bd=null,Cd=0,Rd=0,Pd=!1;const Fr=(1+Math.sqrt(5))/2,_s=1/Fr,Av=[new k(-Fr,_s,0),new k(Fr,_s,0),new k(-_s,0,Fr),new k(_s,0,Fr),new k(0,Fr,-_s),new k(0,Fr,_s),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],cL=new k;class bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=cL}=s;bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Cd,Rd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:ka,format:Zn,colorSpace:lo,depthBuffer:!1},r=Cv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uL(s)),this._blurMaterial=dL(s,e,n)}return r}_compileMaterial(e){const n=new ui(this._lodPlanes[0],e);this._renderer.compile(n,Ad)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(wv),d.toneMapping=fr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const y=new ks({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new ui(new Ga,y);let h=!1;const g=e.background;g?g.isColor&&(y.color.copy(g),e.background=null,h=!0):(y.color.copy(wv),h=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const T=this._cubeSize;Fl(r,_*T,v>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===oo||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ui(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ad)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Av[(r-s-1)%Av.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ui(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kr-1),y=s/x,m=isFinite(s)?1+Math.floor(u*y):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const h=[];let g=0;for(let A=0;A<kr;++A){const R=A/y,E=Math.exp(-R*R/2);h.push(E),A===0?g+=E:A<m&&(g+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const _=this._sizeLods[r],T=3*_*(r>v-Bs?r-v+Bs:0),b=4*(this._cubeSize-_);Fl(n,T,b,3*_,2*_),l.setRenderTarget(n),l.render(d,Ad)}}function uL(t){const e=[],n=[],i=[];let r=t;const s=t-Bs+1+Tv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Bs?l=Tv[o-t+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,y=3,m=2,h=1,g=new Float32Array(y*x*p),v=new Float32Array(m*x*p),_=new Float32Array(h*x*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,R=b>2?0:-1,E=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];g.set(E,y*x*b),v.set(f,m*x*b);const M=[b,b,b,b,b,b];_.set(M,h*x*b)}const T=new vi;T.setAttribute("position",new ti(g,y)),T.setAttribute("uv",new ti(v,m)),T.setAttribute("faceIndex",new ti(_,h)),e.push(T),r>Bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cv(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dL(t,e,n){const i=new Float32Array(kr),r=new k(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Rv(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Pv(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function _m(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===th||l===nh,u=l===oo||l===ao;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new bv(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new bv(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pL(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,x=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,_=g.length;v<_;v+=3){const T=g[v+0],b=g[v+1],A=g[v+2];f.push(T,b,b,A,A,T)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,_=g.length/3-1;v<_;v+=3){const T=v+0,b=v+1,A=v+2;f.push(T,b,b,A,A,T)}}else return;const m=new(nM(f)?lM:aM)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function mL(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,f*o,x),n.update(p,i,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];n.update(m,i,1)}function d(f,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,x);let h=0;for(let g=0;g<x;g++)h+=p[g]*y[g];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vL(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;x===!0&&(_=1),y===!0&&(_=2),m===!0&&(_=3);let T=a.attributes.position.count*_,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*b*4*d),R=new iM(A,T,b,d);R.type=Pi,R.needsUpdate=!0;const E=_*4;for(let D=0;D<d;D++){const z=h[D],H=g[D],$=v[D],j=T*b*4*D;for(let G=0;G<z.count;G++){const Y=G*E;x===!0&&(r.fromBufferAttribute(z,G),A[j+Y+0]=r.x,A[j+Y+1]=r.y,A[j+Y+2]=r.z,A[j+Y+3]=0),y===!0&&(r.fromBufferAttribute(H,G),A[j+Y+4]=r.x,A[j+Y+5]=r.y,A[j+Y+6]=r.z,A[j+Y+7]=0),m===!0&&(r.fromBufferAttribute($,G),A[j+Y+8]=r.x,A[j+Y+9]=r.y,A[j+Y+10]=r.z,A[j+Y+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new et(T,b)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function xL(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const gM=new gn,Dv=new pM(1,1),vM=new iM,xM=new YR,yM=new dM,Lv=[],Nv=[],Iv=new Float32Array(16),Uv=new Float32Array(9),Fv=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lv[r];if(s===void 0&&(s=new Float32Array(r),Lv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function du(t,e){let n=Nv[e];n===void 0&&(n=new Int32Array(e),Nv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _L(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function SL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function ML(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function EL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Fv.set(i),t.uniformMatrix2fv(this.addr,!1,Fv),Ot(n,i)}}function TL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Uv.set(i),t.uniformMatrix3fv(this.addr,!1,Uv),Ot(n,i)}}function wL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Iv.set(i),t.uniformMatrix4fv(this.addr,!1,Iv),Ot(n,i)}}function AL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function CL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function RL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function PL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function NL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function IL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Dv.compareFunction=tM,s=Dv):s=gM,n.setTexture2D(e||s,r)}function UL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xM,r)}function FL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yM,r)}function OL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||vM,r)}function kL(t){switch(t){case 5126:return yL;case 35664:return _L;case 35665:return SL;case 35666:return ML;case 35674:return EL;case 35675:return TL;case 35676:return wL;case 5124:case 35670:return AL;case 35667:case 35671:return bL;case 35668:case 35672:return CL;case 35669:case 35673:return RL;case 5125:return PL;case 36294:return DL;case 36295:return LL;case 36296:return NL;case 35678:case 36198:case 36298:case 36306:case 35682:return IL;case 35679:case 36299:case 36307:return UL;case 35680:case 36300:case 36308:case 36293:return FL;case 36289:case 36303:case 36311:case 36292:return OL}}function BL(t,e){t.uniform1fv(this.addr,e)}function VL(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function zL(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function HL(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function GL(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WL(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jL(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XL(t,e){t.uniform1iv(this.addr,e)}function YL(t,e){t.uniform2iv(this.addr,e)}function $L(t,e){t.uniform3iv(this.addr,e)}function qL(t,e){t.uniform4iv(this.addr,e)}function KL(t,e){t.uniform1uiv(this.addr,e)}function ZL(t,e){t.uniform2uiv(this.addr,e)}function QL(t,e){t.uniform3uiv(this.addr,e)}function JL(t,e){t.uniform4uiv(this.addr,e)}function e3(t,e,n){const i=this.cache,r=e.length,s=du(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||gM,s[o])}function t3(t,e,n){const i=this.cache,r=e.length,s=du(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xM,s[o])}function n3(t,e,n){const i=this.cache,r=e.length,s=du(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||yM,s[o])}function i3(t,e,n){const i=this.cache,r=e.length,s=du(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||vM,s[o])}function r3(t){switch(t){case 5126:return BL;case 35664:return VL;case 35665:return zL;case 35666:return HL;case 35674:return GL;case 35675:return WL;case 35676:return jL;case 5124:case 35670:return XL;case 35667:case 35671:return YL;case 35668:case 35672:return $L;case 35669:case 35673:return qL;case 5125:return KL;case 36294:return ZL;case 36295:return QL;case 36296:return JL;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}class s3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kL(n.type)}}class o3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=r3(n.type)}}class a3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function Ov(t,e){t.seq.push(e),t.map[e.id]=e}function l3(t,e,n){const i=t.name,r=i.length;for(Dd.lastIndex=0;;){const s=Dd.exec(i),o=Dd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ov(n,c===void 0?new s3(a,t,e):new o3(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new a3(a),Ov(n,d)),n=d}}}class oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);l3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function kv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const c3=37297;let u3=0;function d3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Bv=new He;function f3(t){Qe._getMatrix(Bv,Qe.workingColorSpace,t);const e=`mat3( ${Bv.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case kc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+d3(t.getShaderSource(e),a)}else return s}function h3(t,e){const n=f3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function p3(t,e){let n;switch(e){case _R:n="Linear";break;case SR:n="Reinhard";break;case MR:n="Cineon";break;case ER:n="ACESFilmic";break;case wR:n="AgX";break;case AR:n="Neutral";break;case TR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ol=new k;function m3(){Qe.getLuminanceCoefficients(Ol);const t=Ol.x.toFixed(4),e=Ol.y.toFixed(4),n=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function v3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function x3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vo(t){return t!==""}function zv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(y3,S3)}const _3=new Map;function S3(t,e){let n=Ge[e];if(n===void 0){const i=_3.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(n)}const M3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(t){return t.replace(M3,E3)}function E3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===WS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===JC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function w3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function b3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jS:e="ENVMAP_BLENDING_MULTIPLY";break;case xR:e="ENVMAP_BLENDING_MIX";break;case yR:e="ENVMAP_BLENDING_ADD";break}return e}function C3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function R3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=T3(n),c=w3(n),u=A3(n),d=b3(n),f=C3(n),p=g3(n),x=v3(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vo).join(`
`),h.length>0&&(h+=`
`)):(m=[Wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),h=[Wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==fr?p3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,h3("linearToOutputTexel",n.outputColorSpace),m3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Nh(o),o=zv(o,n),o=Hv(o,n),a=Nh(a),a=zv(a,n),a=Hv(a,n),o=Gv(o),a=Gv(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===iv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===iv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=g+m+o,_=g+h+a,T=kv(r,r.VERTEX_SHADER,v),b=kv(r,r.FRAGMENT_SHADER,_);r.attachShader(y,T),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(D){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(T)||"",$=r.getShaderInfoLog(b)||"",j=z.trim(),G=H.trim(),Y=$.trim();let L=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,T,b);else{const q=Vv(r,T,"vertex"),ue=Vv(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+q+`
`+ue)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||Y==="")&&(W=!1);W&&(D.diagnostics={runnable:L,programLog:j,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(T),r.deleteShader(b),R=new oc(r,y),E=x3(r,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,c3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=u3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=b,this}let P3=0;class D3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new L3(e),n.set(e,i)),i}}class L3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function N3(t,e,n,i,r,s,o){const a=new sM,l=new D3,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,z,H){const $=z.fog,j=H.geometry,G=E.isMeshStandardMaterial?z.environment:null,Y=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),L=Y&&Y.mapping===lu?Y.image.height:null,W=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=q!==void 0?q.length:0;let oe=0;j.morphAttributes.position!==void 0&&(oe=1),j.morphAttributes.normal!==void 0&&(oe=2),j.morphAttributes.color!==void 0&&(oe=3);let Be,ke,X,te;if(W){const tt=oi[W];Be=tt.vertexShader,ke=tt.fragmentShader}else Be=E.vertexShader,ke=E.fragmentShader,l.update(E),X=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const J=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),we=H.isInstancedMesh===!0,De=H.isBatchedMesh===!0,ft=!!E.map,je=!!E.matcap,N=!!Y,Ke=!!E.aoMap,Le=!!E.lightMap,Je=!!E.bumpMap,Re=!!E.normalMap,ht=!!E.displacementMap,_e=!!E.emissiveMap,We=!!E.metalnessMap,kt=!!E.roughnessMap,wt=E.anisotropy>0,P=E.clearcoat>0,S=E.dispersion>0,O=E.iridescence>0,Z=E.sheen>0,ne=E.transmission>0,K=wt&&!!E.anisotropyMap,Ce=P&&!!E.clearcoatMap,ce=P&&!!E.clearcoatNormalMap,Te=P&&!!E.clearcoatRoughnessMap,Ae=O&&!!E.iridescenceMap,ae=O&&!!E.iridescenceThicknessMap,me=Z&&!!E.sheenColorMap,Ue=Z&&!!E.sheenRoughnessMap,be=!!E.specularMap,he=!!E.specularColorMap,ze=!!E.specularIntensityMap,I=ne&&!!E.transmissionMap,le=ne&&!!E.thicknessMap,de=!!E.gradientMap,ye=!!E.alphaMap,re=E.alphaTest>0,ee=!!E.alphaHash,Ee=!!E.extensions;let Ve=fr;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ve=t.toneMapping);const at={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:Be,fragmentShader:ke,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:De,batchingColor:De&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:lo,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:je,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:L,aoMap:Ke,lightMap:Le,bumpMap:Je,normalMap:Re,displacementMap:f&&ht,emissiveMap:_e,normalMapObjectSpace:Re&&E.normalMapType===DR,normalMapTangentSpace:Re&&E.normalMapType===PR,metalnessMap:We,roughnessMap:kt,anisotropy:wt,anisotropyMap:K,clearcoat:P,clearcoatMap:Ce,clearcoatNormalMap:ce,clearcoatRoughnessMap:Te,dispersion:S,iridescence:O,iridescenceMap:Ae,iridescenceThicknessMap:ae,sheen:Z,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:he,specularIntensityMap:ze,transmission:ne,transmissionMap:I,thicknessMap:le,gradientMap:de,opaque:E.transparent===!1&&E.blending===Ys&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:re,alphaHash:ee,combine:E.combine,mapUv:ft&&y(E.map.channel),aoMapUv:Ke&&y(E.aoMap.channel),lightMapUv:Le&&y(E.lightMap.channel),bumpMapUv:Je&&y(E.bumpMap.channel),normalMapUv:Re&&y(E.normalMap.channel),displacementMapUv:ht&&y(E.displacementMap.channel),emissiveMapUv:_e&&y(E.emissiveMap.channel),metalnessMapUv:We&&y(E.metalnessMap.channel),roughnessMapUv:kt&&y(E.roughnessMap.channel),anisotropyMapUv:K&&y(E.anisotropyMap.channel),clearcoatMapUv:Ce&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:ce&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:me&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&y(E.sheenRoughnessMap.channel),specularMapUv:be&&y(E.specularMap.channel),specularColorMapUv:he&&y(E.specularColorMap.channel),specularIntensityMapUv:ze&&y(E.specularIntensityMap.channel),transmissionMapUv:I&&y(E.transmissionMap.channel),thicknessMapUv:le&&y(E.thicknessMap.channel),alphaMapUv:ye&&y(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Re||wt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(ft||ye),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:_e&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bi,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&E.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(g(M,E),v(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const M=x[E.type];let D;if(M){const z=oi[M];D=o2.clone(z.uniforms)}else D=E.uniforms;return D}function T(E,M){let D;for(let z=0,H=u.length;z<H;z++){const $=u[z];if($.cacheKey===M){D=$,++D.usedTimes;break}}return D===void 0&&(D=new R3(t,M,E,s),u.push(D)),D}function b(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:_,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:R}}function I3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function U3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,x,y,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:y,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,x,y,m){const h=o(d,f,p,x,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,x,y,m){const h=o(d,f,p,x,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||U3),i.length>1&&i.sort(f||jv),r.length>1&&r.sort(f||jv)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function F3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Xv,t.set(i,[o])):r>=s.length?(o=new Xv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function O3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new nt};break;case"SpotLight":n={position:new k,direction:new k,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function k3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B3=0;function V3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function z3(t){const e=new O3,n=k3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Nt,o=new Nt;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,x=0,y=0,m=0,h=0,g=0,v=0,_=0,T=0,b=0,A=0;c.sort(V3);for(let E=0,M=c.length;E<M;E++){const D=c[E],z=D.color,H=D.intensity,$=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*H,d+=z.g*H,f+=z.b*H;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],H);A++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,L=n.get(D);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(z).multiplyScalar(H),G.distance=$,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[y]=G;const Y=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,Y.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[y]=Y.matrix,D.castShadow){const L=n.get(D);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=j,_++}y++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(z).multiplyScalar(H),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Y=D.shadow,L=n.get(D);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=D.shadow.matrix,v++}i.point[x]=G,x++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(H),G.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==x||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==g||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,R.directionalLength=p,R.pointLength=x,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=g,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=A,i.version=B3++)}function l(c,u){let d=0,f=0,p=0,x=0,y=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const v=c[h];if(v.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(v.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const _=i.rectArea[x];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Yv(t){const e=new z3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function H3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Yv(t),e.set(r,[a])):s>=o.length?(a=new Yv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const G3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j3(t,e,n){let i=new fM;const r=new et,s=new et,o=new Ct,a=new v2({depthPacking:RR}),l=new x2,c={},u=n.maxTextureSize,d={[vr]:mn,[mn]:vr,[bi]:bi},f=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:G3,fragmentShader:W3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new vi;x.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ui(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=WS;let h=this.type;this.render=function(b,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),z=t.state;z.setBlending(dr),z.buffers.depth.getReversed()?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=h!==Ti&&this.type===Ti,$=h===Ti&&this.type!==Ti;for(let j=0,G=b.length;j<G;j++){const Y=b[j],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null||H===!0||$===!0){const ue=this.type!==Ti?{minFilter:ei,magFilter:ei}:{};L.map!==null&&L.map.dispose(),L.map=new ns(r.x,r.y,ue),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const q=L.getViewportCount();for(let ue=0;ue<q;ue++){const oe=L.getViewport(ue);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),z.viewport(o),L.updateMatrices(Y,ue),i=L.getFrustum(),_(A,R,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Ti&&g(L,R),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,D)};function g(b,A){const R=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ns(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,R,f,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,R,p,y,null)}function v(b,A,R,E){let M=null;const D=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=M.uuid,H=A.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let j=$[H];j===void 0&&(j=M.clone(),$[H]=j,A.addEventListener("dispose",T)),M=j}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Ti?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=R}return M}function _(b,A,R,E,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Ti)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const H=e.update(b),$=b.material;if(Array.isArray($)){const j=H.groups;for(let G=0,Y=j.length;G<Y;G++){const L=j[G],W=$[L.materialIndex];if(W&&W.visible){const q=v(b,W,E,M);b.onBeforeShadow(t,b,A,R,H,q,L),t.renderBufferDirect(R,null,H,q,b,L),b.onAfterShadow(t,b,A,R,H,q,L)}}}else if($.visible){const j=v(b,$,E,M);b.onBeforeShadow(t,b,A,R,H,j,null),t.renderBufferDirect(R,null,H,j,b,null),b.onAfterShadow(t,b,A,R,H,j,null)}}const z=b.children;for(let H=0,$=z.length;H<$;H++)_(z[H],A,R,E,M)}function T(b){b.target.removeEventListener("dispose",T);for(const R in c){const E=c[R],M=b.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const X3={[$f]:qf,[Kf]:Jf,[Zf]:eh,[so]:Qf,[qf]:$f,[Jf]:Kf,[eh]:Zf,[Qf]:so};function Y3(t,e){function n(){let I=!1;const le=new Ct;let de=null;const ye=new Ct(0,0,0,0);return{setMask:function(re){de!==re&&!I&&(t.colorMask(re,re,re,re),de=re)},setLocked:function(re){I=re},setClear:function(re,ee,Ee,Ve,at){at===!0&&(re*=Ve,ee*=Ve,Ee*=Ve),le.set(re,ee,Ee,Ve),ye.equals(le)===!1&&(t.clearColor(re,ee,Ee,Ve),ye.copy(le))},reset:function(){I=!1,de=null,ye.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,de=null,ye=null,re=null;return{setReversed:function(ee){if(le!==ee){const Ee=e.get("EXT_clip_control");ee?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const Ve=re;re=null,this.setClear(Ve)}},getReversed:function(){return le},setTest:function(ee){ee?J(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ee){de!==ee&&!I&&(t.depthMask(ee),de=ee)},setFunc:function(ee){if(le&&(ee=X3[ee]),ye!==ee){switch(ee){case $f:t.depthFunc(t.NEVER);break;case qf:t.depthFunc(t.ALWAYS);break;case Kf:t.depthFunc(t.LESS);break;case so:t.depthFunc(t.LEQUAL);break;case Zf:t.depthFunc(t.EQUAL);break;case Qf:t.depthFunc(t.GEQUAL);break;case Jf:t.depthFunc(t.GREATER);break;case eh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=ee}},setLocked:function(ee){I=ee},setClear:function(ee){re!==ee&&(le&&(ee=1-ee),t.clearDepth(ee),re=ee)},reset:function(){I=!1,de=null,ye=null,re=null,le=!1}}}function r(){let I=!1,le=null,de=null,ye=null,re=null,ee=null,Ee=null,Ve=null,at=null;return{setTest:function(tt){I||(tt?J(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(tt){le!==tt&&!I&&(t.stencilMask(tt),le=tt)},setFunc:function(tt,xi,ii){(de!==tt||ye!==xi||re!==ii)&&(t.stencilFunc(tt,xi,ii),de=tt,ye=xi,re=ii)},setOp:function(tt,xi,ii){(ee!==tt||Ee!==xi||Ve!==ii)&&(t.stencilOp(tt,xi,ii),ee=tt,Ee=xi,Ve=ii)},setLocked:function(tt){I=tt},setClear:function(tt){at!==tt&&(t.clearStencil(tt),at=tt)},reset:function(){I=!1,le=null,de=null,ye=null,re=null,ee=null,Ee=null,Ve=null,at=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],x=null,y=!1,m=null,h=null,g=null,v=null,_=null,T=null,b=null,A=new nt(0,0,0),R=0,E=!1,M=null,D=null,z=null,H=null,$=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=Y>=1):L.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=Y>=2);let W=null,q={};const ue=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Be=new Ct().fromArray(ue),ke=new Ct().fromArray(oe);function X(I,le,de,ye){const re=new Uint8Array(4),ee=t.createTexture();t.bindTexture(I,ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<de;Ee++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(le+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return ee}const te={};te[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(so),Je(!1),Re(Z0),J(t.CULL_FACE),Ke(dr);function J(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function Me(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function we(I,le){return d[I]!==le?(t.bindFramebuffer(I,le),d[I]=le,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function De(I,le){let de=p,ye=!1;if(I){de=f.get(le),de===void 0&&(de=[],f.set(le,de));const re=I.textures;if(de.length!==re.length||de[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Ee=re.length;ee<Ee;ee++)de[ee]=t.COLOR_ATTACHMENT0+ee;de.length=re.length,ye=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,ye=!0);ye&&t.drawBuffers(de)}function ft(I){return x!==I?(t.useProgram(I),x=I,!0):!1}const je={[Or]:t.FUNC_ADD,[tR]:t.FUNC_SUBTRACT,[nR]:t.FUNC_REVERSE_SUBTRACT};je[iR]=t.MIN,je[rR]=t.MAX;const N={[sR]:t.ZERO,[oR]:t.ONE,[aR]:t.SRC_COLOR,[Xf]:t.SRC_ALPHA,[hR]:t.SRC_ALPHA_SATURATE,[dR]:t.DST_COLOR,[cR]:t.DST_ALPHA,[lR]:t.ONE_MINUS_SRC_COLOR,[Yf]:t.ONE_MINUS_SRC_ALPHA,[fR]:t.ONE_MINUS_DST_COLOR,[uR]:t.ONE_MINUS_DST_ALPHA,[pR]:t.CONSTANT_COLOR,[mR]:t.ONE_MINUS_CONSTANT_COLOR,[gR]:t.CONSTANT_ALPHA,[vR]:t.ONE_MINUS_CONSTANT_ALPHA};function Ke(I,le,de,ye,re,ee,Ee,Ve,at,tt){if(I===dr){y===!0&&(Me(t.BLEND),y=!1);return}if(y===!1&&(J(t.BLEND),y=!0),I!==eR){if(I!==m||tt!==E){if((h!==Or||_!==Or)&&(t.blendEquation(t.FUNC_ADD),h=Or,_=Or),tt)switch(I){case Ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Q0:t.blendFunc(t.ONE,t.ONE);break;case J0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ev:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Q0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case J0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ev:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,v=null,T=null,b=null,A.set(0,0,0),R=0,m=I,E=tt}return}re=re||le,ee=ee||de,Ee=Ee||ye,(le!==h||re!==_)&&(t.blendEquationSeparate(je[le],je[re]),h=le,_=re),(de!==g||ye!==v||ee!==T||Ee!==b)&&(t.blendFuncSeparate(N[de],N[ye],N[ee],N[Ee]),g=de,v=ye,T=ee,b=Ee),(Ve.equals(A)===!1||at!==R)&&(t.blendColor(Ve.r,Ve.g,Ve.b,at),A.copy(Ve),R=at),m=I,E=!1}function Le(I,le){I.side===bi?Me(t.CULL_FACE):J(t.CULL_FACE);let de=I.side===mn;le&&(de=!de),Je(de),I.blending===Ys&&I.transparent===!1?Ke(dr):Ke(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ye=I.stencilWrite;a.setTest(ye),ye&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function Re(I){I!==ZC?(J(t.CULL_FACE),I!==D&&(I===Z0?t.cullFace(t.BACK):I===QC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),D=I}function ht(I){I!==z&&(G&&t.lineWidth(I),z=I)}function _e(I,le,de){I?(J(t.POLYGON_OFFSET_FILL),(H!==le||$!==de)&&(t.polygonOffset(le,de),H=le,$=de)):Me(t.POLYGON_OFFSET_FILL)}function We(I){I?J(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function kt(I){I===void 0&&(I=t.TEXTURE0+j-1),W!==I&&(t.activeTexture(I),W=I)}function wt(I,le,de){de===void 0&&(W===null?de=t.TEXTURE0+j-1:de=W);let ye=q[de];ye===void 0&&(ye={type:void 0,texture:void 0},q[de]=ye),(ye.type!==I||ye.texture!==le)&&(W!==de&&(t.activeTexture(de),W=de),t.bindTexture(I,le||te[I]),ye.type=I,ye.texture=le)}function P(){const I=q[W];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){Be.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Be.copy(I))}function Ue(I){ke.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ke.copy(I))}function be(I,le){let de=c.get(le);de===void 0&&(de=new WeakMap,c.set(le,de));let ye=de.get(I);ye===void 0&&(ye=t.getUniformBlockIndex(le,I.name),de.set(I,ye))}function he(I,le){const ye=c.get(le).get(I);l.get(le)!==ye&&(t.uniformBlockBinding(le,ye,I.__bindingPointIndex),l.set(le,ye))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},W=null,q={},d={},f=new WeakMap,p=[],x=null,y=!1,m=null,h=null,g=null,v=null,_=null,T=null,b=null,A=new nt(0,0,0),R=0,E=!1,M=null,D=null,z=null,H=null,$=null,Be.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:Me,bindFramebuffer:we,drawBuffers:De,useProgram:ft,setBlending:Ke,setMaterial:Le,setFlipSided:Je,setCullFace:Re,setLineWidth:ht,setPolygonOffset:_e,setScissorTest:We,activeTexture:kt,bindTexture:wt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Ae,texImage3D:ae,updateUBOMapping:be,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:Ce,scissor:me,viewport:Ue,reset:ze}}function $3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,S){return p?new OffscreenCanvas(P,S):Vc("canvas")}function y(P,S,O){let Z=1;const ne=wt(P);if((ne.width>O||ne.height>O)&&(Z=O/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Z*ne.width),Ce=Math.floor(Z*ne.height);d===void 0&&(d=x(K,Ce));const ce=S?x(K,Ce):d;return ce.width=K,ce.height=Ce,ce.getContext("2d").drawImage(P,0,0,K,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Ce+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps}function h(P){t.generateMipmap(P)}function g(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(P,S,O,Z,ne=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=S;if(S===t.RED&&(O===t.FLOAT&&(K=t.R32F),O===t.HALF_FLOAT&&(K=t.R16F),O===t.UNSIGNED_BYTE&&(K=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.R8UI),O===t.UNSIGNED_SHORT&&(K=t.R16UI),O===t.UNSIGNED_INT&&(K=t.R32UI),O===t.BYTE&&(K=t.R8I),O===t.SHORT&&(K=t.R16I),O===t.INT&&(K=t.R32I)),S===t.RG&&(O===t.FLOAT&&(K=t.RG32F),O===t.HALF_FLOAT&&(K=t.RG16F),O===t.UNSIGNED_BYTE&&(K=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RG8UI),O===t.UNSIGNED_SHORT&&(K=t.RG16UI),O===t.UNSIGNED_INT&&(K=t.RG32UI),O===t.BYTE&&(K=t.RG8I),O===t.SHORT&&(K=t.RG16I),O===t.INT&&(K=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGB8UI),O===t.UNSIGNED_SHORT&&(K=t.RGB16UI),O===t.UNSIGNED_INT&&(K=t.RGB32UI),O===t.BYTE&&(K=t.RGB8I),O===t.SHORT&&(K=t.RGB16I),O===t.INT&&(K=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),O===t.UNSIGNED_INT&&(K=t.RGBA32UI),O===t.BYTE&&(K=t.RGBA8I),O===t.SHORT&&(K=t.RGBA16I),O===t.INT&&(K=t.RGBA32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),S===t.RGBA){const Ce=ne?kc:Qe.getTransfer(Z);O===t.FLOAT&&(K=t.RGBA32F),O===t.HALF_FLOAT&&(K=t.RGBA16F),O===t.UNSIGNED_BYTE&&(K=Ce===st?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(P,S){let O;return P?S===null||S===ts||S===Aa?O=t.DEPTH24_STENCIL8:S===Pi?O=t.DEPTH32F_STENCIL8:S===wa&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===Aa?O=t.DEPTH_COMPONENT24:S===Pi?O=t.DEPTH_COMPONENT32F:S===wa&&(O=t.DEPTH_COMPONENT16),O}function T(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ei&&P.minFilter!==li?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function b(P){const S=P.target;S.removeEventListener("dispose",b),R(S),S.isVideoTexture&&u.delete(S)}function A(P){const S=P.target;S.removeEventListener("dispose",A),M(S)}function R(P){const S=i.get(P);if(S.__webglInit===void 0)return;const O=P.source,Z=f.get(O);if(Z){const ne=Z[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(P),Object.keys(Z).length===0&&f.delete(O)}i.remove(P)}function E(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const O=P.source,Z=f.get(O);delete Z[S.__cacheKey],o.memory.textures--}function M(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ne=0;ne<S.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=P.textures;for(let Z=0,ne=O.length;Z<ne;Z++){const K=i.get(O[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(P)}let D=0;function z(){D=0}function H(){const P=D;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function $(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function j(P,S){const O=i.get(P);if(P.isVideoTexture&&We(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(O,P,S);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function G(P,S){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){te(O,P,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function Y(P,S){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){te(O,P,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function L(P,S){const O=i.get(P);if(P.version>0&&O.__version!==P.version){J(O,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const W={[ih]:t.REPEAT,[Wr]:t.CLAMP_TO_EDGE,[rh]:t.MIRRORED_REPEAT},q={[ei]:t.NEAREST,[bR]:t.NEAREST_MIPMAP_NEAREST,[pl]:t.NEAREST_MIPMAP_LINEAR,[li]:t.LINEAR,[td]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},ue={[LR]:t.NEVER,[kR]:t.ALWAYS,[NR]:t.LESS,[tM]:t.LEQUAL,[IR]:t.EQUAL,[OR]:t.GEQUAL,[UR]:t.GREATER,[FR]:t.NOTEQUAL};function oe(P,S){if(S.type===Pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===li||S.magFilter===td||S.magFilter===pl||S.magFilter===jr||S.minFilter===li||S.minFilter===td||S.minFilter===pl||S.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,W[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,W[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,W[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,q[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ei||S.minFilter!==pl&&S.minFilter!==jr||S.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Be(P,S){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",b));const Z=S.source;let ne=f.get(Z);ne===void 0&&(ne={},f.set(Z,ne));const K=$(S);if(K!==P.__cacheKey){ne[K]===void 0&&(ne[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[K].usedTimes++;const Ce=ne[P.__cacheKey];Ce!==void 0&&(ne[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(S)),P.__cacheKey=K,P.__webglTexture=ne[K].texture}return O}function ke(P,S,O){return Math.floor(Math.floor(P/O)/S)}function X(P,S,O,Z){const K=P.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,O,Z,S.data);else{K.sort((ae,me)=>ae.start-me.start);let Ce=0;for(let ae=1;ae<K.length;ae++){const me=K[Ce],Ue=K[ae],be=me.start+me.count,he=ke(Ue.start,S.width,4),ze=ke(me.start,S.width,4);Ue.start<=be+1&&he===ze&&ke(Ue.start+Ue.count-1,S.width,4)===he?me.count=Math.max(me.count,Ue.start+Ue.count-me.start):(++Ce,K[Ce]=Ue)}K.length=Ce+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ae=0,me=K.length;ae<me;ae++){const Ue=K[ae],be=Math.floor(Ue.start/4),he=Math.ceil(Ue.count/4),ze=be%S.width,I=Math.floor(be/S.width),le=he,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,ze,I,le,de,O,Z,S.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function te(P,S,O){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=Be(P,S),K=S.source;n.bindTexture(Z,P.__webglTexture,t.TEXTURE0+O);const Ce=i.get(K);if(K.version!==Ce.__version||ne===!0){n.activeTexture(t.TEXTURE0+O);const ce=Qe.getPrimaries(Qe.workingColorSpace),Te=S.colorSpace===er?null:Qe.getPrimaries(S.colorSpace),Ae=S.colorSpace===er||ce===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=y(S.image,!1,r.maxTextureSize);ae=kt(S,ae);const me=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type);let be=v(S.internalFormat,me,Ue,S.colorSpace,S.isVideoTexture);oe(Z,S);let he;const ze=S.mipmaps,I=S.isVideoTexture!==!0,le=Ce.__version===void 0||ne===!0,de=K.dataReady,ye=T(S,ae);if(S.isDepthTexture)be=_(S.format===Ca,S.type),le&&(I?n.texStorage2D(t.TEXTURE_2D,1,be,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,me,Ue,null));else if(S.isDataTexture)if(ze.length>0){I&&le&&n.texStorage2D(t.TEXTURE_2D,ye,be,ze[0].width,ze[0].height);for(let re=0,ee=ze.length;re<ee;re++)he=ze[re],I?de&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,he.width,he.height,me,Ue,he.data):n.texImage2D(t.TEXTURE_2D,re,be,he.width,he.height,0,me,Ue,he.data);S.generateMipmaps=!1}else I?(le&&n.texStorage2D(t.TEXTURE_2D,ye,be,ae.width,ae.height),de&&X(S,ae,me,Ue)):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,me,Ue,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,ze[0].width,ze[0].height,ae.depth);for(let re=0,ee=ze.length;re<ee;re++)if(he=ze[re],S.format!==Zn)if(me!==null)if(I){if(de)if(S.layerUpdates.size>0){const Ee=Ev(he.width,he.height,S.format,S.type);for(const Ve of S.layerUpdates){const at=he.data.subarray(Ve*Ee/he.data.BYTES_PER_ELEMENT,(Ve+1)*Ee/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Ve,he.width,he.height,1,me,at)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,ae.depth,me,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,be,he.width,he.height,ae.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,ae.depth,me,Ue,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,be,he.width,he.height,ae.depth,0,me,Ue,he.data)}else{I&&le&&n.texStorage2D(t.TEXTURE_2D,ye,be,ze[0].width,ze[0].height);for(let re=0,ee=ze.length;re<ee;re++)he=ze[re],S.format!==Zn?me!==null?I?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,he.width,he.height,me,he.data):n.compressedTexImage2D(t.TEXTURE_2D,re,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?de&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,he.width,he.height,me,Ue,he.data):n.texImage2D(t.TEXTURE_2D,re,be,he.width,he.height,0,me,Ue,he.data)}else if(S.isDataArrayTexture)if(I){if(le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,ae.width,ae.height,ae.depth),de)if(S.layerUpdates.size>0){const re=Ev(ae.width,ae.height,S.format,S.type);for(const ee of S.layerUpdates){const Ee=ae.data.subarray(ee*re/ae.data.BYTES_PER_ELEMENT,(ee+1)*re/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,me,Ue,Ee)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Ue,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ae.width,ae.height,ae.depth,0,me,Ue,ae.data);else if(S.isData3DTexture)I?(le&&n.texStorage3D(t.TEXTURE_3D,ye,be,ae.width,ae.height,ae.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Ue,ae.data)):n.texImage3D(t.TEXTURE_3D,0,be,ae.width,ae.height,ae.depth,0,me,Ue,ae.data);else if(S.isFramebufferTexture){if(le)if(I)n.texStorage2D(t.TEXTURE_2D,ye,be,ae.width,ae.height);else{let re=ae.width,ee=ae.height;for(let Ee=0;Ee<ye;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,be,re,ee,0,me,Ue,null),re>>=1,ee>>=1}}else if(ze.length>0){if(I&&le){const re=wt(ze[0]);n.texStorage2D(t.TEXTURE_2D,ye,be,re.width,re.height)}for(let re=0,ee=ze.length;re<ee;re++)he=ze[re],I?de&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,me,Ue,he):n.texImage2D(t.TEXTURE_2D,re,be,me,Ue,he);S.generateMipmaps=!1}else if(I){if(le){const re=wt(ae);n.texStorage2D(t.TEXTURE_2D,ye,be,re.width,re.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ue,ae)}else n.texImage2D(t.TEXTURE_2D,0,be,me,Ue,ae);m(S)&&h(Z),Ce.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function J(P,S,O){if(S.image.length!==6)return;const Z=Be(P,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+O);const K=i.get(ne);if(ne.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);const Ce=Qe.getPrimaries(Qe.workingColorSpace),ce=S.colorSpace===er?null:Qe.getPrimaries(S.colorSpace),Te=S.colorSpace===er||Ce===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!Ae&&!ae?me[ee]=y(S.image[ee],!0,r.maxCubemapSize):me[ee]=ae?S.image[ee].image:S.image[ee],me[ee]=kt(S,me[ee]);const Ue=me[0],be=s.convert(S.format,S.colorSpace),he=s.convert(S.type),ze=v(S.internalFormat,be,he,S.colorSpace),I=S.isVideoTexture!==!0,le=K.__version===void 0||Z===!0,de=ne.dataReady;let ye=T(S,Ue);oe(t.TEXTURE_CUBE_MAP,S);let re;if(Ae){I&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,ze,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){re=me[ee].mipmaps;for(let Ee=0;Ee<re.length;Ee++){const Ve=re[Ee];S.format!==Zn?be!==null?I?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Ve.width,Ve.height,be,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,ze,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Ve.width,Ve.height,be,he,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,ze,Ve.width,Ve.height,0,be,he,Ve.data)}}}else{if(re=S.mipmaps,I&&le){re.length>0&&ye++;const ee=wt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){I?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,be,he,me[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,me[ee].width,me[ee].height,0,be,he,me[ee].data);for(let Ee=0;Ee<re.length;Ee++){const at=re[Ee].image[ee].image;I?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,at.width,at.height,be,he,at.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,ze,at.width,at.height,0,be,he,at.data)}}else{I?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be,he,me[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,be,he,me[ee]);for(let Ee=0;Ee<re.length;Ee++){const Ve=re[Ee];I?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,be,he,Ve.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,ze,be,he,Ve.image[ee])}}}m(S)&&h(t.TEXTURE_CUBE_MAP),K.__version=ne.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Me(P,S,O,Z,ne,K){const Ce=s.convert(O.format,O.colorSpace),ce=s.convert(O.type),Te=v(O.internalFormat,Ce,ce,O.colorSpace),Ae=i.get(S),ae=i.get(O);if(ae.__renderTarget=S,!Ae.__hasExternalTextures){const me=Math.max(1,S.width>>K),Ue=Math.max(1,S.height>>K);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,K,Te,me,Ue,S.depth,0,Ce,ce,null):n.texImage2D(ne,K,Te,me,Ue,0,Ce,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),_e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,ae.__webglTexture,0,ht(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,ae.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(P,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const Z=S.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,K=_(S.stencilBuffer,ne),Ce=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=ht(S);_e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,K,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,K,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,P)}else{const Z=S.textures;for(let ne=0;ne<Z.length;ne++){const K=Z[ne],Ce=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),Te=v(K.internalFormat,Ce,ce,K.colorSpace),Ae=ht(S);O&&_e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Te,S.width,S.height):_e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Te,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Te,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const ne=Z.__webglTexture,K=ht(S);if(S.depthTexture.format===ba)_e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Ca)_e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ft(P){const S=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?De(S.__webglFramebuffer[0],P):De(S.__webglFramebuffer,P)}else if(O){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),we(S.__webglDepthbuffer[Z],P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),we(S.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(P,S,O){const Z=i.get(P);S!==void 0&&Me(Z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&ft(P)}function N(P){const S=P.texture,O=i.get(P),Z=i.get(S);P.addEventListener("dispose",A);const ne=P.textures,K=P.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let Te=0;Te<S.mipmaps.length;Te++)O.__webglFramebuffer[ce][Te]=t.createFramebuffer()}else O.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)O.__webglFramebuffer[ce]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let ce=0,Te=ne.length;ce<Te;ce++){const Ae=i.get(ne[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&_e(P)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const Te=ne[ce];O.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const Ae=s.convert(Te.format,Te.colorSpace),ae=s.convert(Te.type),me=v(Te.internalFormat,Ae,ae,Te.colorSpace,P.isXRRenderTarget===!0),Ue=ht(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),we(O.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Me(O.__webglFramebuffer[ce][Te],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te);else Me(O.__webglFramebuffer[ce],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let ce=0,Te=ne.length;ce<Te;ce++){const Ae=ne[ce],ae=i.get(Ae);let me=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,ae.__webglTexture),oe(me,Ae),Me(O.__webglFramebuffer,P,Ae,t.COLOR_ATTACHMENT0+ce,me,0),m(Ae)&&h(me)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Z.__webglTexture),oe(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Me(O.__webglFramebuffer[Te],P,S,t.COLOR_ATTACHMENT0,ce,Te);else Me(O.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,ce,0);m(S)&&h(ce),n.unbindTexture()}P.depthBuffer&&ft(P)}function Ke(P){const S=P.textures;for(let O=0,Z=S.length;O<Z;O++){const ne=S[O];if(m(ne)){const K=g(P),Ce=i.get(ne).__webglTexture;n.bindTexture(K,Ce),h(K),n.unbindTexture()}}}const Le=[],Je=[];function Re(P){if(P.samples>0){if(_e(P)===!1){const S=P.textures,O=P.width,Z=P.height;let ne=t.COLOR_BUFFER_BIT;const K=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(P),ce=S.length>1;if(ce)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=P.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const ae=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,O,Z,0,0,O,Z,ne,t.NEAREST),l===!0&&(Le.length=0,Je.length=0,Le.push(t.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Le.push(K),Je.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const ae=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ht(P){return Math.min(r.maxSamples,P.samples)}function _e(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function kt(P,S){const O=P.colorSpace,Z=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==lo&&O!==er&&(Qe.getTransfer(O)===st?(Z!==Zn||ne!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=L,this.rebindTextures=je,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=_e}function q3(t,e){function n(i,r=er){let s;const o=Qe.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===um)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===YS)return t.BYTE;if(i===$S)return t.SHORT;if(i===wa)return t.UNSIGNED_SHORT;if(i===cm)return t.INT;if(i===ts)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===ka)return t.HALF_FLOAT;if(i===KS)return t.ALPHA;if(i===ZS)return t.RGB;if(i===Zn)return t.RGBA;if(i===ba)return t.DEPTH_COMPONENT;if(i===Ca)return t.DEPTH_STENCIL;if(i===QS)return t.RED;if(i===fm)return t.RED_INTEGER;if(i===JS)return t.RG;if(i===hm)return t.RG_INTEGER;if(i===pm)return t.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sh||i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ch||i===uh)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===xh||i===yh||i===_h||i===Sh||i===Mh||i===Eh||i===Th||i===wh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_h)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Th)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===Ah||i===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eM||i===Ch||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class _M extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const K3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new _M(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xr({vertexShader:K3,fragmentShader:Z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new uu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J3 extends vo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,x=null;const y=new Q3,m={},h=n.getContextAttributes();let g=null,v=null;const _=[],T=[],b=new et;let A=null;const R=new Fn;R.viewport=new Ct;const E=new Fn;E.viewport=new Ct;const M=[R,E],D=new _2;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=_[X];return te===void 0&&(te=new Td,_[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=_[X];return te===void 0&&(te=new Td,_[X]=te),te.getGripSpace()},this.getHand=function(X){let te=_[X];return te===void 0&&(te=new Td,_[X]=te),te.getHandSpace()};function $(X){const te=T.indexOf(X.inputSource);if(te===-1)return;const J=_[te];J!==void 0&&(J.update(X.inputSource,X.frame,c||o),J.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",G);for(let X=0;X<_.length;X++){const te=T[X];te!==null&&(T[X]=null,_[X].disconnect(te))}z=null,H=null,y.reset();for(const X in m)delete m[X];e.setRenderTarget(g),p=null,f=null,d=null,r=null,v=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",j),r.addEventListener("inputsourceschange",G),h.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Me=null,we=null;h.depth&&(we=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=h.stencil?Ca:ba,Me=h.stencil?Aa:ts);const De={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ns(f.textureWidth,f.textureHeight,{format:Zn,type:Bi,depthTexture:new pM(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const J={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ns(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(X){for(let te=0;te<X.removed.length;te++){const J=X.removed[te],Me=T.indexOf(J);Me>=0&&(T[Me]=null,_[Me].disconnect(J))}for(let te=0;te<X.added.length;te++){const J=X.added[te];let Me=T.indexOf(J);if(Me===-1){for(let De=0;De<_.length;De++)if(De>=T.length){T.push(J),Me=De;break}else if(T[De]===null){T[De]=J,Me=De;break}if(Me===-1)break}const we=_[Me];we&&we.connect(J)}}const Y=new k,L=new k;function W(X,te,J){Y.setFromMatrixPosition(te.matrixWorld),L.setFromMatrixPosition(J.matrixWorld);const Me=Y.distanceTo(L),we=te.projectionMatrix.elements,De=J.projectionMatrix.elements,ft=we[14]/(we[10]-1),je=we[14]/(we[10]+1),N=(we[9]+1)/we[5],Ke=(we[9]-1)/we[5],Le=(we[8]-1)/we[0],Je=(De[8]+1)/De[0],Re=ft*Le,ht=ft*Je,_e=Me/(-Le+Je),We=_e*-Le;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(We),X.translateZ(_e),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const kt=ft+_e,wt=je+_e,P=Re-We,S=ht+(Me-We),O=N*je/wt*kt,Z=Ke*je/wt*kt;X.projectionMatrix.makePerspective(P,S,O,Z,kt,wt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,J=X.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(J=y.depthFar)),D.near=E.near=R.near=te,D.far=E.far=R.far=J,(z!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,H=D.far),D.layers.mask=X.layers.mask|6,R.layers.mask=D.layers.mask&3,E.layers.mask=D.layers.mask&5;const Me=X.parent,we=D.cameras;q(D,Me);for(let De=0;De<we.length;De++)q(we[De],Me);we.length===2?W(D,R,E):D.projectionMatrix.copy(R.projectionMatrix),ue(X,D,Me)};function ue(X,te,J){J===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(J.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Dh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(D)},this.getCameraTexture=function(X){return m[X]};let oe=null;function Be(X,te){if(u=te.getViewerPose(c||o),x=te,u!==null){const J=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Me=!1;J.length!==D.cameras.length&&(D.cameras.length=0,Me=!0);for(let je=0;je<J.length;je++){const N=J[je];let Ke=null;if(p!==null)Ke=p.getViewport(N);else{const Je=d.getViewSubImage(f,N);Ke=Je.viewport,je===0&&(e.setRenderTargetTextures(v,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(v))}let Le=M[je];Le===void 0&&(Le=new Fn,Le.layers.enable(je),Le.viewport=new Ct,M[je]=Le),Le.matrix.fromArray(N.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(N.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),je===0&&(D.matrix.copy(Le.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Me===!0&&D.cameras.push(Le)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const je=d.getDepthInformation(J[0]);je&&je.isValid&&je.texture&&y.init(je,r.renderState)}if(we&&we.includes("camera-access")&&(e.state.unbindTexture(),d))for(let je=0;je<J.length;je++){const N=J[je].camera;if(N){let Ke=m[N];Ke||(Ke=new _M,m[N]=Ke);const Le=d.getCameraImage(N);Ke.sourceTexture=Le}}}for(let J=0;J<_.length;J++){const Me=T[J],we=_[J];Me!==null&&we!==void 0&&we.update(Me,te,c||o)}oe&&oe(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const ke=new mM;ke.setAnimationLoop(Be),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const Dr=new Vi,eN=new Nt;function tN(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,cM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,v,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),v=g.envMap,_=g.envMapRotation;v&&(m.envMap.value=v,Dr.copy(_),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(eN.makeRotationFromEuler(Dr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===mn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const _=v.program;i.uniformBlockBinding(g,_)}function c(g,v){let _=r[g.id];_===void 0&&(x(g),_=u(g),r[g.id]=_,g.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(g,T);const b=e.render.frame;s[g.id]!==b&&(f(g),s[g.id]=b)}function u(g){const v=d();g.__bindingPointIndex=v;const _=t.createBuffer(),T=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,T,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],_=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,A=_.length;b<A;b++){const R=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,M=R.length;E<M;E++){const D=R[E];if(p(D,b,E,T)===!0){const z=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let j=0;j<H.length;j++){const G=H[j],Y=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,z+$,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,_,T){const b=g.value,A=v+"_"+_;if(T[A]===void 0)return typeof b=="number"||typeof b=="boolean"?T[A]=b:T[A]=b.clone(),!0;{const R=T[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function x(g){const v=g.uniforms;let _=0;const T=16;for(let A=0,R=v.length;A<R;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,D=E.length;M<D;M++){const z=E[M],H=Array.isArray(z.value)?z.value:[z.value];for(let $=0,j=H.length;$<j;$++){const G=H[$],Y=y(G),L=_%T,W=L%Y.boundary,q=L+W;_+=W,q!==0&&T-q<Y.storage&&(_+=T-q),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=Y.storage}}}const b=_%T;return b>0&&(_+=T-b),g.__size=_,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class iN{constructor(e={}){const{canvas:n=VR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),y=new Int32Array(4);let m=null,h=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=Nn;let b=0,A=0,R=null,E=-1,M=null;const D=new Ct,z=new Ct;let H=null;const $=new nt(0);let j=0,G=n.width,Y=n.height,L=1,W=null,q=null;const ue=new Ct(0,0,G,Y),oe=new Ct(0,0,G,Y);let Be=!1;const ke=new fM;let X=!1,te=!1;const J=new Nt,Me=new k,we=new Ct,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function je(){return R===null?L:1}let N=i;function Ke(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lm}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",re,!1),N===null){const U="webgl2";if(N=Ke(U,w),N===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Le,Je,Re,ht,_e,We,kt,wt,P,S,O,Z,ne,K,Ce,ce,Te,Ae,ae,me,Ue,be,he,ze;function I(){Le=new hL(N),Le.init(),be=new q3(N,Le),Je=new oL(N,Le,e,be),Re=new Y3(N,Le),Je.reversedDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),ht=new gL(N),_e=new I3,We=new $3(N,Le,Re,_e,Je,be,ht),kt=new lL(_),wt=new fL(_),P=new M2(N),he=new rL(N,P),S=new pL(N,P,ht,he),O=new xL(N,S,P,ht),ae=new vL(N,Je,We),ce=new aL(_e),Z=new N3(_,kt,wt,Le,Je,he,ce),ne=new tN(_,_e),K=new F3,Ce=new H3(Le),Ae=new iL(_,kt,wt,Re,O,p,l),Te=new j3(_,O,Je),ze=new nN(N,ht,Je,Re),me=new sL(N,Le,ht),Ue=new mL(N,Le,ht),ht.programs=Z.programs,_.capabilities=Je,_.extensions=Le,_.properties=_e,_.renderLists=K,_.shadowMap=Te,_.state=Re,_.info=ht}I();const le=new J3(_,N);this.xr=le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(G,Y,!1))},this.getSize=function(w){return w.set(G,Y)},this.setSize=function(w,U,B=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Y=U,n.width=Math.floor(w*L),n.height=Math.floor(U*L),B===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*L,Y*L).floor()},this.setDrawingBufferSize=function(w,U,B){G=w,Y=U,L=B,n.width=Math.floor(w*B),n.height=Math.floor(U*B),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,U,B,V){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,U,B,V),Re.viewport(D.copy(ue).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,U,B,V){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,U,B,V),Re.scissor(z.copy(oe).multiplyScalar(L).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(w){Re.setScissorTest(Be=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,B=!0){let V=0;if(w){let F=!1;if(R!==null){const se=R.texture.format;F=se===pm||se===hm||se===fm}if(F){const se=R.texture.type,pe=se===Bi||se===ts||se===wa||se===Aa||se===um||se===dm,Se=Ae.getClearColor(),xe=Ae.getClearAlpha(),Ie=Se.r,Oe=Se.g,Pe=Se.b;pe?(x[0]=Ie,x[1]=Oe,x[2]=Pe,x[3]=xe,N.clearBufferuiv(N.COLOR,0,x)):(y[0]=Ie,y[1]=Oe,y[2]=Pe,y[3]=xe,N.clearBufferiv(N.COLOR,0,y))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT),B&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",re,!1),Ae.dispose(),K.dispose(),Ce.dispose(),_e.dispose(),kt.dispose(),wt.dispose(),O.dispose(),he.dispose(),ze.dispose(),Z.dispose(),le.dispose(),le.removeEventListener("sessionstart",ii),le.removeEventListener("sessionend",Sm),Er.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ht.autoReset,U=Te.enabled,B=Te.autoUpdate,V=Te.needsUpdate,F=Te.type;I(),ht.autoReset=w,Te.enabled=U,Te.autoUpdate=B,Te.needsUpdate=V,Te.type=F}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ee(w){const U=w.target;U.removeEventListener("dispose",ee),Ee(U)}function Ee(w){Ve(w),_e.remove(w)}function Ve(w){const U=_e.get(w).programs;U!==void 0&&(U.forEach(function(B){Z.releaseProgram(B)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,B,V,F,se){U===null&&(U=De);const pe=F.isMesh&&F.matrixWorld.determinant()<0,Se=MM(w,U,B,V,F);Re.setMaterial(V,pe);let xe=B.index,Ie=1;if(V.wireframe===!0){if(xe=S.getWireframeAttribute(B),xe===void 0)return;Ie=2}const Oe=B.drawRange,Pe=B.attributes.position;let Ye=Oe.start*Ie,rt=(Oe.start+Oe.count)*Ie;se!==null&&(Ye=Math.max(Ye,se.start*Ie),rt=Math.min(rt,(se.start+se.count)*Ie)),xe!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,xe.count)):Pe!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,Pe.count));const Mt=rt-Ye;if(Mt<0||Mt===1/0)return;he.setup(F,V,Se,B,xe);let ct,ot=me;if(xe!==null&&(ct=P.get(xe),ot=Ue,ot.setIndex(ct)),F.isMesh)V.wireframe===!0?(Re.setLineWidth(V.wireframeLinewidth*je()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(F.isLine){let Ne=V.linewidth;Ne===void 0&&(Ne=1),Re.setLineWidth(Ne*je()),F.isLineSegments?ot.setMode(N.LINES):F.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else F.isPoints?ot.setMode(N.POINTS):F.isSprite&&ot.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,gt=F._multiDrawCounts,Ze=F._multiDrawCount,xn=xe?P.get(xe).bytesPerElement:1,ss=_e.get(V).currentProgram.getUniforms();for(let yn=0;yn<Ze;yn++)ss.setValue(N,"_gl_DrawID",yn),ot.render(Ne[yn]/xn,gt[yn])}else if(F.isInstancedMesh)ot.renderInstances(Ye,Mt,F.count);else if(B.isInstancedBufferGeometry){const Ne=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gt=Math.min(B.instanceCount,Ne);ot.renderInstances(Ye,Mt,gt)}else ot.render(Ye,Mt)};function at(w,U,B){w.transparent===!0&&w.side===bi&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,Xa(w,U,B),w.side=vr,w.needsUpdate=!0,Xa(w,U,B),w.side=bi):Xa(w,U,B)}this.compile=function(w,U,B=null){B===null&&(B=w),h=Ce.get(B),h.init(U),v.push(h),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),w!==B&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Se=se[pe];at(Se,B,F),V.add(Se)}else at(se,B,F),V.add(se)}),h=v.pop(),V},this.compileAsync=function(w,U,B=null){const V=this.compile(w,U,B);return new Promise(F=>{function se(){if(V.forEach(function(pe){_e.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){F(w);return}setTimeout(se,10)}Le.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let tt=null;function xi(w){tt&&tt(w)}function ii(){Er.stop()}function Sm(){Er.start()}const Er=new mM;Er.setAnimationLoop(xi),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(w){tt=w,le.setAnimationLoop(w),w===null?Er.stop():Er.start()},le.addEventListener("sessionstart",ii),le.addEventListener("sessionend",Sm),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,R),h=Ce.get(w,v.length),h.init(U),v.push(h),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ke.setFromProjectionMatrix(J,ci,U.reversedDepth),te=this.localClippingEnabled,X=ce.init(this.clippingPlanes,te),m=K.get(w,g.length),m.init(),g.push(m),le.enabled===!0&&le.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&fu(se,U,-1/0,_.sortObjects)}fu(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(W,q),ft=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ft&&Ae.addToRenderList(m,w),this.info.render.frame++,X===!0&&ce.beginShadows();const B=h.state.shadowsArray;Te.render(B,w,U),X===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(h.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let pe=0,Se=se.length;pe<Se;pe++){const xe=se[pe];Em(V,F,w,xe)}ft&&Ae.render(w);for(let pe=0,Se=se.length;pe<Se;pe++){const xe=se[pe];Mm(m,w,xe,xe.viewport)}}else F.length>0&&Em(V,F,w,U),ft&&Ae.render(w),Mm(m,w,U);R!==null&&A===0&&(We.updateMultisampleRenderTarget(R),We.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,U),he.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(h=v[v.length-1],X===!0&&ce.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function fu(w,U,B,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){V&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);const pe=O.update(w),Se=w.material;Se.visible&&m.push(w,pe,Se,B,we.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const pe=O.update(w),Se=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),we.copy(pe.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(J)),Array.isArray(Se)){const xe=pe.groups;for(let Ie=0,Oe=xe.length;Ie<Oe;Ie++){const Pe=xe[Ie],Ye=Se[Pe.materialIndex];Ye&&Ye.visible&&m.push(w,pe,Ye,B,we.z,Pe)}}else Se.visible&&m.push(w,pe,Se,B,we.z,null)}}const se=w.children;for(let pe=0,Se=se.length;pe<Se;pe++)fu(se[pe],U,B,V)}function Mm(w,U,B,V){const F=w.opaque,se=w.transmissive,pe=w.transparent;h.setupLightsView(B),X===!0&&ce.setGlobalState(_.clippingPlanes,B),V&&Re.viewport(D.copy(V)),F.length>0&&ja(F,U,B),se.length>0&&ja(se,U,B),pe.length>0&&ja(pe,U,B),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Em(w,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new ns(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?ka:Bi,minFilter:jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=h.state.transmissionRenderTarget[V.id],pe=V.viewport||D;se.setSize(pe.z*_.transmissionResolutionScale,pe.w*_.transmissionResolutionScale);const Se=_.getRenderTarget(),xe=_.getActiveCubeFace(),Ie=_.getActiveMipmapLevel();_.setRenderTarget(se),_.getClearColor($),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),ft&&Ae.render(B);const Oe=_.toneMapping;_.toneMapping=fr;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),X===!0&&ce.setGlobalState(_.clippingPlanes,V),ja(w,B,V),We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let rt=0,Mt=U.length;rt<Mt;rt++){const ct=U[rt],ot=ct.object,Ne=ct.geometry,gt=ct.material,Ze=ct.group;if(gt.side===bi&&ot.layers.test(V.layers)){const xn=gt.side;gt.side=mn,gt.needsUpdate=!0,Tm(ot,B,V,Ne,gt,Ze),gt.side=xn,gt.needsUpdate=!0,Ye=!0}}Ye===!0&&(We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se))}_.setRenderTarget(Se,xe,Ie),_.setClearColor($,j),Pe!==void 0&&(V.viewport=Pe),_.toneMapping=Oe}function ja(w,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=w.length;F<se;F++){const pe=w[F],Se=pe.object,xe=pe.geometry,Ie=pe.group;let Oe=pe.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),Se.layers.test(B.layers)&&Tm(Se,U,B,xe,Oe,Ie)}}function Tm(w,U,B,V,F,se){w.onBeforeRender(_,U,B,V,F,se),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,U,B,V,w,se),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=mn,F.needsUpdate=!0,_.renderBufferDirect(B,U,V,F,w,se),F.side=vr,F.needsUpdate=!0,_.renderBufferDirect(B,U,V,F,w,se),F.side=bi):_.renderBufferDirect(B,U,V,F,w,se),w.onAfterRender(_,U,B,V,F,se)}function Xa(w,U,B){U.isScene!==!0&&(U=De);const V=_e.get(w),F=h.state.lights,se=h.state.shadowsArray,pe=F.state.version,Se=Z.getParameters(w,F.state,se,U,B),xe=Z.getProgramCacheKey(Se);let Ie=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?wt:kt).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",ee),Ie=new Map,V.programs=Ie);let Oe=Ie.get(xe);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===pe)return Am(w,Se),Oe}else Se.uniforms=Z.getUniforms(w),w.onBeforeCompile(Se,_),Oe=Z.acquireProgram(Se,xe),Ie.set(xe,Oe),V.uniforms=Se.uniforms;const Pe=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=ce.uniform),Am(w,Se),V.needsLights=TM(w),V.lightsStateVersion=pe,V.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function wm(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=oc.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Am(w,U){const B=_e.get(w);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function MM(w,U,B,V,F){U.isScene!==!0&&(U=De),We.resetTextureUnits();const se=U.fog,pe=V.isMeshStandardMaterial?U.environment:null,Se=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:lo,xe=(V.isMeshStandardMaterial?wt:kt).get(V.envMap||pe),Ie=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,rt=!!B.morphAttributes.color;let Mt=fr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=ct!==void 0?ct.length:0,Ne=_e.get(V),gt=h.state.lights;if(X===!0&&(te===!0||w!==M)){const Jt=w===M&&V.id===E;ce.setState(V,w,Jt)}let Ze=!1;V.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==gt.state.version||Ne.outputColorSpace!==Se||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==xe||V.fog===!0&&Ne.fog!==se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ce.numPlanes||Ne.numIntersection!==ce.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==Oe||Ne.morphTargets!==Pe||Ne.morphNormals!==Ye||Ne.morphColors!==rt||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Ne.__version=V.version);let xn=Ne.currentProgram;Ze===!0&&(xn=Xa(V,U,F));let ss=!1,yn=!1,_o=!1;const vt=xn.getUniforms(),Cn=Ne.uniforms;if(Re.useProgram(xn.program)&&(ss=!0,yn=!0,_o=!0),V.id!==E&&(E=V.id,yn=!0),ss||M!==w){Re.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(N,"projectionMatrix",w.projectionMatrix),vt.setValue(N,"viewMatrix",w.matrixWorldInverse);const an=vt.map.cameraPosition;an!==void 0&&an.setValue(N,Me.setFromMatrixPosition(w.matrixWorld)),Je.logarithmicDepthBuffer&&vt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,yn=!0,_o=!0)}if(F.isSkinnedMesh){vt.setOptional(N,F,"bindMatrix"),vt.setOptional(N,F,"bindMatrixInverse");const Jt=F.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),vt.setValue(N,"boneTexture",Jt.boneTexture,We))}F.isBatchedMesh&&(vt.setOptional(N,F,"batchingTexture"),vt.setValue(N,"batchingTexture",F._matricesTexture,We),vt.setOptional(N,F,"batchingIdTexture"),vt.setValue(N,"batchingIdTexture",F._indirectTexture,We),vt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(N,"batchingColorTexture",F._colorsTexture,We));const Rn=B.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&ae.update(F,B,xn),(yn||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,vt.setValue(N,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Cn.envMap.value=xe,Cn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Cn.envMapIntensity.value=U.environmentIntensity),yn&&(vt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&EM(Cn,_o),se&&V.fog===!0&&ne.refreshFogUniforms(Cn,se),ne.refreshMaterialUniforms(Cn,V,L,Y,h.state.transmissionRenderTarget[w.id]),oc.upload(N,wm(Ne),Cn,We)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(oc.upload(N,wm(Ne),Cn,We),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(N,"center",F.center),vt.setValue(N,"modelViewMatrix",F.modelViewMatrix),vt.setValue(N,"normalMatrix",F.normalMatrix),vt.setValue(N,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Jt=V.uniformsGroups;for(let an=0,hu=Jt.length;an<hu;an++){const Tr=Jt[an];ze.update(Tr,xn),ze.bind(Tr,xn)}}return xn}function EM(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function TM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,B){const V=_e.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_e.get(w.texture).__webglTexture=U,_e.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const B=_e.get(w);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const wM=N.createFramebuffer();this.setRenderTarget=function(w,U=0,B=0){R=w,b=U,A=B;let V=!0,F=null,se=!1,pe=!1;if(w){const xe=_e.get(w);if(xe.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)We.setupRenderTarget(w);else if(xe.__hasExternalTextures)We.rebindTextures(w,_e.get(w.texture).__webglTexture,_e.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(xe.__boundDepthTexture!==Pe){if(Pe!==null&&_e.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const Oe=_e.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?F=Oe[U][B]:F=Oe[U],se=!0):w.samples>0&&We.useMultisampledRTT(w)===!1?F=_e.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[B]:F=Oe,D.copy(w.viewport),z.copy(w.scissor),H=w.scissorTest}else D.copy(ue).multiplyScalar(L).floor(),z.copy(oe).multiplyScalar(L).floor(),H=Be;if(B!==0&&(F=wM),Re.bindFramebuffer(N.FRAMEBUFFER,F)&&V&&Re.drawBuffers(w,F),Re.viewport(D),Re.scissor(z),Re.setScissorTest(H),se){const xe=_e.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,B)}else if(pe){const xe=U;for(let Ie=0;Ie<w.textures.length;Ie++){const Oe=_e.get(w.textures[Ie]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,B,xe)}}else if(w!==null&&B!==0){const xe=_e.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(w,U,B,V,F,se,pe,Se=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){Re.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Ie=w.textures[Se],Oe=Ie.format,Pe=Ie.type;if(!Je.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&B>=0&&B<=w.height-F&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),N.readPixels(U,B,V,F,be.convert(Oe),be.convert(Pe),se))}finally{const Ie=R!==null?_e.get(R).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,U,B,V,F,se,pe,Se=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(U>=0&&U<=w.width-V&&B>=0&&B<=w.height-F){Re.bindFramebuffer(N.FRAMEBUFFER,xe);const Ie=w.textures[Se],Oe=Ie.format,Pe=Ie.type;if(!Je.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),N.readPixels(U,B,V,F,be.convert(Oe),be.convert(Pe),0);const rt=R!==null?_e.get(R).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,rt);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zR(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Ye),N.deleteSync(Mt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,B=0){const V=Math.pow(2,-B),F=Math.floor(w.image.width*V),se=Math.floor(w.image.height*V),pe=U!==null?U.x:0,Se=U!==null?U.y:0;We.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,pe,Se,F,se),Re.unbindTexture()};const AM=N.createFramebuffer(),bM=N.createFramebuffer();this.copyTextureToTexture=function(w,U,B=null,V=null,F=0,se=null){se===null&&(F!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let pe,Se,xe,Ie,Oe,Pe,Ye,rt,Mt;const ct=w.isCompressedTexture?w.mipmaps[se]:w.image;if(B!==null)pe=B.max.x-B.min.x,Se=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,Ie=B.min.x,Oe=B.min.y,Pe=B.isBox3?B.min.z:0;else{const Rn=Math.pow(2,-F);pe=Math.floor(ct.width*Rn),Se=Math.floor(ct.height*Rn),w.isDataArrayTexture?xe=ct.depth:w.isData3DTexture?xe=Math.floor(ct.depth*Rn):xe=1,Ie=0,Oe=0,Pe=0}V!==null?(Ye=V.x,rt=V.y,Mt=V.z):(Ye=0,rt=0,Mt=0);const ot=be.convert(U.format),Ne=be.convert(U.type);let gt;U.isData3DTexture?(We.setTexture3D(U,0),gt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(We.setTexture2DArray(U,0),gt=N.TEXTURE_2D_ARRAY):(We.setTexture2D(U,0),gt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=N.getParameter(N.UNPACK_ROW_LENGTH),xn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ss=N.getParameter(N.UNPACK_SKIP_PIXELS),yn=N.getParameter(N.UNPACK_SKIP_ROWS),_o=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const vt=w.isDataArrayTexture||w.isData3DTexture,Cn=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Rn=_e.get(w),Jt=_e.get(U),an=_e.get(Rn.__renderTarget),hu=_e.get(Jt.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,an.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,hu.__webglFramebuffer);for(let Tr=0;Tr<xe;Tr++)vt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(w).__webglTexture,F,Pe+Tr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,se,Mt+Tr)),N.blitFramebuffer(Ie,Oe,pe,Se,Ye,rt,pe,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||_e.has(w)){const Rn=_e.get(w),Jt=_e.get(U);Re.bindFramebuffer(N.READ_FRAMEBUFFER,AM),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,bM);for(let an=0;an<xe;an++)vt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rn.__webglTexture,F,Pe+an):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rn.__webglTexture,F),Cn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,se,Mt+an):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jt.__webglTexture,se),F!==0?N.blitFramebuffer(Ie,Oe,pe,Se,Ye,rt,pe,Se,N.COLOR_BUFFER_BIT,N.NEAREST):Cn?N.copyTexSubImage3D(gt,se,Ye,rt,Mt+an,Ie,Oe,pe,Se):N.copyTexSubImage2D(gt,se,Ye,rt,Ie,Oe,pe,Se);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Cn?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(gt,se,Ye,rt,Mt,pe,Se,xe,ot,Ne,ct.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(gt,se,Ye,rt,Mt,pe,Se,xe,ot,ct.data):N.texSubImage3D(gt,se,Ye,rt,Mt,pe,Se,xe,ot,Ne,ct):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,Ye,rt,pe,Se,ot,Ne,ct.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,Ye,rt,ct.width,ct.height,ot,ct.data):N.texSubImage2D(N.TEXTURE_2D,se,Ye,rt,pe,Se,ot,Ne,ct);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ss),N.pixelStorei(N.UNPACK_SKIP_ROWS,yn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_o),se===0&&U.generateMipmaps&&N.generateMipmap(gt),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,U,B=null,V=null,F=0){return $s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,B,V,F)},this.initRenderTarget=function(w){_e.get(w).__webglFramebuffer===void 0&&We.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?We.setTextureCube(w,0):w.isData3DTexture?We.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?We.setTexture2DArray(w,0):We.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,Re.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const rN=()=>{const t=Q.useRef(null),[e,n]=Q.useState(!1),i=["Full-Stack Architect","Modern Web Specialist","Real-World Solution Developer","Remote-First Full-Stack Developer","End-to-End Web Engineer"],[r,s]=Q.useState(""),[o,a]=Q.useState(!0),[l,c]=Q.useState(0);Q.useEffect(()=>{const d=i[l];if(o)if(r.length<d.length){const f=setTimeout(()=>{s(d.substring(0,r.length+1))},100);return()=>clearTimeout(f)}else{const f=setTimeout(()=>{a(!1)},2e3);return()=>clearTimeout(f)}else if(r.length>0){const f=setTimeout(()=>{s(r.substring(0,r.length-1))},50);return()=>clearTimeout(f)}else{const f=setTimeout(()=>{c(p=>(p+1)%i.length),a(!0)},500);return()=>clearTimeout(f)}},[r,o,l,i]),Q.useEffect(()=>{if(!t.current)return;const d=new f2,f=new Fn(75,window.innerWidth/window.innerHeight,.1,1e3),p=new iN({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),p.setClearColor(0,0),t.current.appendChild(p.domElement);const x=new vi,y=1500,m=new Float32Array(y*3);for(let j=0;j<y*3;j++)m[j]=(Math.random()-.5)*25;x.setAttribute("position",new ti(m,3));const h=new hM({size:.03,color:"#00ffff",transparent:!0,opacity:.9}),g=new g2(x,h);d.add(g);const v=[new ym(.6),new xm(.5),new vm(.4),new gm(.3)],_=[new ks({color:"#00ffff",wireframe:!0,transparent:!0,opacity:.8}),new ks({color:"#ff00ff",wireframe:!0,transparent:!0,opacity:.8}),new ks({color:"#00ff88",wireframe:!0,transparent:!0,opacity:.8}),new ks({color:"#ffff00",wireframe:!0,transparent:!0,opacity:.8})],T=[];for(let j=0;j<20;j++){const G=v[Math.floor(Math.random()*v.length)],Y=_[Math.floor(Math.random()*_.length)],L=new ui(G,Y);L.position.set((Math.random()-.5)*25,(Math.random()-.5)*25,(Math.random()-.5)*25),L.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),T.push(L),d.add(L)}f.position.z=5;let b=0,A=0,R=null;const E=j=>{b=j.clientX/window.innerWidth*2-1,A=-(j.clientY/window.innerHeight)*2+1},M=j=>{j.touches.length>0&&(b=j.touches[0].clientX/window.innerWidth*2-1,A=-(j.touches[0].clientY/window.innerHeight)*2+1)},D=j=>{j.touches.length>0&&(b=j.touches[0].clientX/window.innerWidth*2-1,A=-(j.touches[0].clientY/window.innerHeight)*2+1,R&&clearTimeout(R),R=setTimeout(()=>{const G=L=>{b=L.clientX/window.innerWidth*2-1,A=-(L.clientY/window.innerHeight)*2+1},Y=()=>{document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",Y),b=0,A=0};document.addEventListener("mousemove",G),document.addEventListener("mouseup",Y)},500))},z=()=>{b=0,A=0,R&&(clearTimeout(R),R=null)};window.addEventListener("mousemove",E),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchstart",D,{passive:!1}),window.addEventListener("touchend",z,{passive:!1});const H=()=>{requestAnimationFrame(H),g.rotation.x+=8e-4,g.rotation.y+=.0012,T.forEach((j,G)=>{j.rotation.x+=.008+G*.001,j.rotation.y+=.006+G*.001,j.position.y+=Math.sin(Date.now()*.001+G)*.002}),f.position.x+=(b*.8-f.position.x)*.05,f.position.y+=(A*.8-f.position.y)*.05,f.lookAt(d.position),p.render(d,f)};H(),n(!0);const $=()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",$),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("touchmove",M),window.removeEventListener("touchstart",D),window.removeEventListener("touchend",z),window.removeEventListener("resize",$),t.current&&p.domElement&&t.current.removeChild(p.domElement),p.dispose()}},[]);const u=()=>{const d=document.getElementById("about");d&&d.scrollIntoView({behavior:"smooth"})};return C.jsxs("section",{className:"relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black",id:"hero",children:[C.jsx("div",{ref:t,className:"absolute inset-0"}),C.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,backgroundSize:"50px 50px"}}),C.jsxs(ge.div,{className:"fixed top-4 left-4 md:top-8 md:left-8 z-50 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6",initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:1,delay:.8},children:[C.jsxs(ge.div,{className:"relative group",children:[C.jsxs(ge.a,{href:"https://github.com/StackedBy-Monirul",target:"_blank",rel:"noopener noreferrer",className:"relative block",whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:17},children:[C.jsxs(ge.div,{className:"w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 flex items-center justify-center relative overflow-hidden",whileHover:{boxShadow:"0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.4)",borderColor:"#00ff88"},transition:{duration:.3},children:[C.jsx(ge.div,{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full",animate:{rotate:[0,360]},transition:{duration:8,repeat:1/0,ease:"linear"}}),C.jsx(au,{className:"w-6 h-6 md:w-8 md:h-8 text-cyan-400 z-10"}),C.jsx(ge.div,{className:"absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full",animate:{scale:[1,1.5,1],opacity:[.5,1,.5],rotate:[0,180,360]},transition:{duration:2,repeat:1/0,delay:.5}}),C.jsx(ge.div,{className:"absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full",animate:{scale:[1,1.8,1],opacity:[.3,1,.3],y:[-2,2,-2]},transition:{duration:1.5,repeat:1/0,delay:1}})]}),C.jsx(ge.div,{className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-8 opacity-0 group-hover:opacity-100",initial:{opacity:0,y:0},whileHover:{opacity:[0,1,.8,1,.6,1],y:[0,-5,0,-3,0,-2],transition:{duration:.6,repeat:1/0}},children:C.jsx("div",{className:"w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-red-500 rounded-t-full blur-sm animate-pulse"})})]}),C.jsx(ge.div,{className:"absolute left-16 md:left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-cyan-400 px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 border border-cyan-500/30 hidden md:block",initial:{opacity:0,x:-10},whileHover:{opacity:1,x:0},transition:{duration:.2},children:"🚀 Code Galaxy"})]}),C.jsxs(ge.div,{className:"relative group",children:[C.jsxs(ge.a,{href:"https://www.linkedin.com/in/monirul-islam-shabuj/",target:"_blank",rel:"noopener noreferrer",className:"relative block",whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:17},children:[C.jsxs(ge.div,{className:"w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-full border-2 border-blue-400 shadow-lg shadow-blue-500/30 flex items-center justify-center relative overflow-hidden",whileHover:{boxShadow:"0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)",borderColor:"#60a5fa"},transition:{duration:.3},children:[C.jsx(ge.div,{className:"absolute inset-0 bg-gradient-to-br from-blue-300/30 via-transparent to-transparent rounded-full",animate:{opacity:[.3,.7,.3],scale:[1,1.05,1]},transition:{duration:3,repeat:1/0}}),C.jsx(VS,{className:"w-6 h-6 md:w-8 md:h-8 text-blue-400 z-10"}),C.jsx(ge.div,{className:"absolute inset-0",animate:{rotate:[0,360]},transition:{duration:4,repeat:1/0,ease:"linear"},children:C.jsx(ge.div,{className:"absolute -top-1 left-1/2 w-2 h-2 bg-blue-300 rounded-sm transform -translate-x-1/2",animate:{scale:[1,1.3,1],opacity:[.7,1,.7]},transition:{duration:1,repeat:1/0}})}),C.jsx(ge.div,{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",animate:{scale:[1,1.5,1],opacity:[0,.5,0]},transition:{duration:2,repeat:1/0,delay:.5},children:C.jsx("div",{className:"w-16 h-16 md:w-20 md:h-20 border-2 border-blue-400 rounded-full"})})]}),C.jsx(ge.div,{className:"absolute -right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100",initial:{opacity:0},whileHover:{opacity:[0,1,.7,1],transition:{duration:.8,repeat:1/0}},children:C.jsxs("div",{className:"flex space-x-1",children:[C.jsx(ge.div,{className:"w-1 h-4 bg-blue-400 rounded-full",animate:{scaleY:[1,.5,1]},transition:{duration:.5,repeat:1/0,delay:0}}),C.jsx(ge.div,{className:"w-1 h-6 bg-blue-400 rounded-full",animate:{scaleY:[1,.3,1]},transition:{duration:.5,repeat:1/0,delay:.2}}),C.jsx(ge.div,{className:"w-1 h-5 bg-blue-400 rounded-full",animate:{scaleY:[1,.7,1]},transition:{duration:.5,repeat:1/0,delay:.4}})]})})]}),C.jsx(ge.div,{className:"absolute left-16 md:left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-blue-400 px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 border border-blue-500/30 hidden md:block",initial:{opacity:0,x:-10},whileHover:{opacity:1,x:0},transition:{duration:.2},children:"👨‍🚀 Professional Network"})]})]}),C.jsx("div",{className:"relative z-10 flex flex-col items-center justify-center h-full text-center px-4",children:C.jsxs(ge.div,{initial:{opacity:0,y:50},animate:{opacity:e?1:0,y:e?0:50},transition:{duration:1,delay:.5},className:"space-y-8",children:[C.jsxs(ge.h1,{className:"text-6xl md:text-8xl font-bold mb-6",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:1},children:[C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl",children:"Monirul"}),C.jsx("br",{}),C.jsx("span",{className:"text-white drop-shadow-2xl",children:"Islam"})]}),C.jsx(ge.div,{className:"text-2xl md:text-4xl font-light h-16 flex items-center justify-center",initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:1,delay:1.2},children:C.jsxs(ge.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold",style:{textShadow:"0 0 20px rgba(0, 255, 255, 0.5)"},children:[r,C.jsx("span",{className:"ml-1 inline-block w-1 h-8 bg-cyan-400 animate-pulse align-middle"})]},l)}),C.jsx(ge.p,{className:"text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:1.4},style:{textShadow:"0 0 10px rgba(0, 255, 255, 0.3)"},children:"Crafting cutting-edge digital experiences with 5+ years of expertise in modern web technologies"}),C.jsx(ge.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:1.6},className:"pt-8",children:C.jsxs("button",{onClick:u,className:"group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400",style:{boxShadow:"0 0 30px rgba(0, 255, 255, 0.3)"},children:[C.jsx("span",{className:"relative z-10 text-white",children:"Explore My Work"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})})]})}),C.jsx(ge.div,{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1,delay:2},children:C.jsx(FC,{className:"w-8 h-8 text-cyan-400 animate-bounce cursor-pointer",onClick:u,style:{filter:"drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))"}})})]})};var Ih=new Map,kl=new WeakMap,$v=0,sN=void 0;function oN(t){return t?(kl.has(t)||($v+=1,kl.set(t,$v.toString())),kl.get(t)):"0"}function aN(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?oN(t.root):t[e]}`).toString()}function lN(t){const e=aN(t);let n=Ih.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&r.some(u=>a.intersectionRatio>=u);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(u=>{u(c,a)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},Ih.set(e,n)}return n}function cN(t,e,n={},i=sN){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=lN(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),Ih.delete(r))}}function Wa({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[d,f]=Q.useState(null),p=Q.useRef(c),[x,y]=Q.useState({inView:!!a,entry:void 0});p.current=c,Q.useEffect(()=>{if(o||!d)return;let v;return v=cN(d,(_,T)=>{y({inView:_,entry:T}),p.current&&p.current(_,T),T.isIntersecting&&s&&v&&(v(),v=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{v&&v()}},[Array.isArray(t)?t.toString():t,d,r,i,s,o,n,l,e]);const m=(u=x.entry)==null?void 0:u.target,h=Q.useRef(void 0);!d&&m&&!s&&!o&&h.current!==m&&(h.current=m,y({inView:!!a,entry:void 0}));const g=[f,x.inView,x.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const uN=()=>{const[t,e]=Wa({threshold:.3,triggerOnce:!0}),n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},i={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},r=[{icon:Ta,value:"5+",label:"Years Experience"},{icon:YC,value:"10+",label:"Projects Completed"},{icon:GS,value:"20+",label:"Technologies"},{icon:kC,value:"2+",label:"Years of Leadership"}];return C.jsxs("section",{id:"about",className:"py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,backgroundSize:"40px 40px"}}),C.jsx("div",{className:"absolute top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"absolute bottom-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"container mx-auto px-6 relative z-10",ref:t,children:C.jsxs(ge.div,{variants:n,initial:"hidden",animate:e?"visible":"hidden",className:"max-w-7xl mx-auto",children:[C.jsxs(ge.div,{variants:i,className:"text-center mb-20",children:[C.jsxs("h2",{className:"text-5xl md:text-6xl font-bold mb-6 text-white",children:["About ",C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",children:"Me"})]}),C.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.5)"}})]}),C.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[C.jsx(ge.div,{variants:i,className:"space-y-8",children:C.jsxs("div",{className:"backdrop-blur-sm bg-gray-800/60 rounded-3xl p-8 border border-cyan-500/30 shadow-2xl",style:{boxShadow:"0 0 40px rgba(0, 255, 255, 0.1)"},children:[C.jsx("h3",{className:"text-3xl font-bold text-white mb-6",children:"Passionate Full-Stack Developer"}),C.jsx("p",{className:"text-cyan-100 text-lg leading-relaxed mb-6",children:"With over 5 years of experience in web development, I specialize in creating robust, scalable applications using cutting-edge technologies. My journey spans from crafting pixel-perfect user interfaces to architecting complex backend systems."}),C.jsx("p",{className:"text-cyan-100 text-lg leading-relaxed mb-8",children:"I'm passionate about clean code, exceptional user experiences, and staying ahead of technology trends. Whether it's a React application, a Laravel API, or a Node.js microservice, I bring dedication and expertise to every project."}),C.jsx("div",{className:"flex flex-wrap gap-3",children:["Problem Solver","Team Player","Continuous Learner"].map(s=>C.jsx("span",{className:"px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/30",style:{boxShadow:"0 0 15px rgba(0, 255, 255, 0.2)"},children:s},s))})]})}),C.jsx(ge.div,{variants:i,children:C.jsx("div",{className:"grid grid-cols-2 gap-6",children:r.map((s,o)=>C.jsxs(ge.div,{variants:i,whileHover:{scale:1.05,rotateY:10},className:"backdrop-blur-sm bg-gray-800/60 rounded-2xl p-6 text-center border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300",style:{transformStyle:"preserve-3d",boxShadow:"0 0 30px rgba(0, 255, 255, 0.1)"},children:[C.jsx("div",{className:"w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4",style:{boxShadow:"0 0 25px rgba(0, 255, 255, 0.4)"},children:C.jsx(s.icon,{className:"w-8 h-8 text-white"})}),C.jsx("div",{className:"text-4xl font-bold text-white mb-2",children:s.value}),C.jsx("div",{className:"text-cyan-300 text-sm font-medium",children:s.label})]},s.label))})})]})]})})]})},dN=()=>{const[t,e]=Wa({threshold:.1,triggerOnce:!0}),n={Comfortable:["HTML5","CSS3","SASS","Tailwind CSS","Bootstrap","React","Next.js","Laravel","Blade","NestJS","MongoDB","Git"],Familiar:["JavaScript (ES6)","TypeScript","React Router","Redux","Node.js","Express.js","Firebase","MySQL","WebSockets","Stripe","PayPal","Swagger"],Tools:["Figma","Jira","Netlify","VPS deployment","Postman"]},i=a=>{switch(a){case"Comfortable":return"from-green-400 to-cyan-500";case"Familiar":return"from-cyan-400 to-blue-500";case"Tools":return"from-purple-400 to-pink-500";default:return"from-gray-500 to-gray-600"}},r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},s={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},o={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:[.6,-.05,.01,.99]}}};return C.jsxs("section",{id:"skills",className:"py-24 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
        `,backgroundSize:"60px 60px"}}),C.jsx("div",{className:"absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"container mx-auto px-6 relative z-10",ref:t,children:C.jsxs(ge.div,{variants:r,initial:"hidden",animate:e?"visible":"hidden",className:"max-w-7xl mx-auto",children:[C.jsxs(ge.div,{variants:s,className:"text-center mb-20",children:[C.jsxs("h2",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:["Technical ",C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",children:"Skills"})]}),C.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.5)"}}),C.jsx("p",{className:"text-cyan-100 text-xl mt-8 max-w-3xl mx-auto leading-relaxed",children:"A comprehensive overview of my technical expertise across different proficiency levels"})]}),C.jsx("div",{className:"grid lg:grid-cols-3 gap-8",children:Object.entries(n).map(([a,l],c)=>C.jsxs(ge.div,{variants:s,className:"backdrop-blur-sm bg-gray-800/40 rounded-3xl p-8 border border-cyan-500/30",style:{boxShadow:"0 0 40px rgba(0, 255, 255, 0.1)"},children:[C.jsxs("div",{className:"text-center mb-10",children:[C.jsx("div",{className:`w-20 h-20 bg-gradient-to-r ${i(a)} rounded-2xl flex items-center justify-center mx-auto mb-6`,style:{boxShadow:"0 0 30px rgba(0, 255, 255, 0.3)"},children:C.jsx("span",{className:"text-white font-bold text-2xl",children:a.charAt(0)})}),C.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:a}),C.jsx("div",{className:`w-16 h-1 bg-gradient-to-r ${i(a)} mx-auto rounded-full`,style:{boxShadow:"0 0 15px rgba(0, 255, 255, 0.4)"}})]}),C.jsx(ge.div,{variants:r,className:"space-y-4",children:l.map((u,d)=>C.jsx(ge.div,{variants:o,whileHover:{scale:1.05,x:10},className:"group",children:C.jsxs("div",{className:"bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.05)"},children:[C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsx("span",{className:"text-white font-medium group-hover:text-cyan-300 transition-colors",children:u}),C.jsx("div",{className:`w-3 h-3 bg-gradient-to-r ${i(a)} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`,style:{boxShadow:"0 0 10px rgba(0, 255, 255, 0.5)"}})]}),C.jsx("div",{className:"mt-3 bg-gray-600/30 rounded-full h-2 overflow-hidden",children:C.jsx(ge.div,{className:`h-full bg-gradient-to-r ${i(a)} rounded-full`,initial:{width:0},animate:e?{width:a==="Comfortable"?"90%":a==="Familiar"?"75%":"85%"}:{width:0},transition:{duration:1,delay:c*.2+d*.1},style:{boxShadow:"0 0 15px rgba(0, 255, 255, 0.4)"}})})]})},u))})]},a))})]})})]})},fN=({project:t,onClose:e})=>{const n={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,scale:.8,transition:{duration:.2}}};return C.jsx(ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-0 inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:e,onTouchMove:i=>i.preventDefault(),children:C.jsxs(ge.div,{variants:n,initial:"hidden",animate:"visible",exit:"exit",className:"bg-gray-900 rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto border border-cyan-500/30",onClick:i=>i.stopPropagation(),onTouchMove:i=>i.stopPropagation(),style:{boxShadow:"0 0 50px rgba(0, 255, 255, 0.2)"},children:[C.jsxs("div",{className:"relative",children:[C.jsx("img",{src:t.image,alt:t.title,className:"w-full h-64 object-cover"}),C.jsx("button",{onClick:e,onTouchStart:i=>i.preventDefault(),className:"absolute top-4 right-4 w-12 h-12 bg-black/70 backdrop-blur-sm text-cyan-400 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors border border-cyan-500/30",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.2)"},children:C.jsx(HS,{className:"w-5 h-5"})}),C.jsxs("div",{className:"absolute bottom-4 left-6",children:[C.jsx("h2",{className:"text-4xl font-bold text-white mb-2",children:t.title}),C.jsxs("div",{className:"flex items-center gap-4 text-cyan-300",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx(UC,{className:"w-4 h-4"}),C.jsx("span",{children:t.year})]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx(XC,{className:"w-4 h-4"}),C.jsx("span",{children:t.category})]})]})]})]}),C.jsx("div",{className:"p-8",children:C.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[C.jsxs("div",{className:"md:col-span-2",children:[C.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Project Overview"}),C.jsx("p",{className:"text-cyan-100 text-lg leading-relaxed mb-6",children:t.details.overview}),C.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Key Features"}),C.jsx("ul",{className:"space-y-3 mb-6",children:t.details.features.map((i,r)=>C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0",style:{boxShadow:"0 0 10px rgba(0, 255, 255, 0.5)"}}),C.jsx("span",{className:"text-cyan-100",children:i})]},r))}),C.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Technical Challenges"}),C.jsx("p",{className:"text-cyan-100 leading-relaxed",children:t.details.challenges})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 mb-6 border border-cyan-500/30",style:{boxShadow:"0 0 30px rgba(0, 255, 255, 0.1)"},children:[C.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Technologies Used"}),C.jsx("div",{className:"flex flex-wrap gap-2",children:t.technologies.map(i=>C.jsx("span",{className:"px-3 py-2 bg-gray-700/50 text-cyan-300 text-sm rounded-xl font-medium border border-cyan-500/30",children:i},i))})]}),C.jsx("div",{className:"space-y-4",children:C.jsxs("a",{href:t.details.github,target:"_blank",rel:"noopener noreferrer",onClick:i=>i.stopPropagation(),onTouchStart:i=>i.preventDefault(),className:"w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors font-semibold border border-cyan-500/30",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.1)"},children:[C.jsx(au,{className:"w-5 h-5"}),"View Source Code"]})})]})]})})]})})},hN=()=>{const[t,e]=Wa({threshold:.1,triggerOnce:!0}),[n,i]=Q.useState(null),r=[{id:1,title:"TimeTracker - Company Management Tool",description:"An internal company time tracking and management system with expense tracking, leave management, and meeting scheduling.",image:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",technologies:["Laravel","React","MySQL"],category:"Full-Stack",year:"2024",details:{overview:"A comprehensive internal company management platform built with Laravel, React, and MySQL. It streamlines employee time tracking, expense reporting, leave requests, holidays, and meetings, providing both employees and admins with an easy-to-use interface.",features:["Employee daily attendance and working hours tracking","Expense management and reporting","Leave and holiday management","Meeting and event scheduling","Admin dashboard for company-wide insights","Responsive design for all devices"],challenges:"Integrating real-time attendance tracking, ensuring data consistency across multiple modules, and optimizing database queries for performance.",github:"https://github.com/StackedBy-Monirul/timetracker",demo:"https://demo.com"}},{id:2,title:"Task Management Dashboard",description:"Collaborative project management tool with real-time updates",image:"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",technologies:["Next.js","TypeScript","Firebase","WebSockets"],category:"Frontend",year:"2024",details:{overview:"A modern task management application that enables teams to collaborate efficiently with real-time updates and intuitive drag-and-drop interfaces.",features:["Real-time collaboration with WebSockets","Drag-and-drop task management","Team member invitation system","Progress tracking and analytics","File attachments and comments","Mobile-responsive design"],challenges:"Managing real-time state synchronization across multiple users and implementing complex drag-and-drop interactions.",github:"https://github.com/StackedBy-Monirul/TODO-FRONTEND",demo:"https://demo.com"}},{id:4,title:"Real-time Chat Application",description:"Modern chat platform with multimedia sharing capabilities",image:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",technologies:["React","Socket.io","Express.js"],category:"Full-Stack",year:"2023",details:{overview:"A feature-rich chat application supporting real-time messaging, file sharing, group conversations, and multimedia content.",features:["Real-time messaging with Socket.io","Group chat and private messaging","File and image sharing","Message search and history","User presence indicators","Push notifications"],challenges:"Implementing efficient message delivery systems and handling file uploads with proper compression and storage.",github:"https://github.com/StackedBy-Monirul/chatly",demo:""}}],s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},o={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},a=c=>{switch(c){case"Full-Stack":return C.jsx(GS,{className:"w-4 h-4"});case"Frontend":return C.jsx(Ta,{className:"w-4 h-4"});case"Backend":return C.jsx(BC,{className:"w-4 h-4"});default:return C.jsx(Ta,{className:"w-4 h-4"})}},l=c=>{switch(c){case"Full-Stack":return"from-purple-400 to-pink-500";case"Frontend":return"from-cyan-400 to-blue-500";case"Backend":return"from-green-400 to-teal-500";default:return"from-gray-500 to-gray-600"}};return C.jsxs("section",{id:"portfolio",className:"py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,backgroundSize:"50px 50px"}}),C.jsx("div",{className:"absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"container mx-auto px-6 relative z-10",ref:t,children:C.jsxs(ge.div,{variants:s,initial:"hidden",animate:e?"visible":"hidden",className:"max-w-7xl mx-auto",children:[C.jsxs(ge.div,{variants:o,className:"text-center mb-20",children:[C.jsxs("h2",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:["Featured ",C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",children:"Projects"})]}),C.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.5)"}}),C.jsx("p",{className:"text-cyan-100 text-xl mt-8 max-w-3xl mx-auto leading-relaxed",children:"Explore a selection of projects that showcase my technical skills and creative problem-solving"})]}),C.jsx(ge.div,{variants:s,className:"grid md:grid-cols-2 xl:grid-cols-3 gap-8",children:r.map(c=>C.jsx(ge.div,{variants:o,whileHover:{y:-10,rotateX:5,rotateY:5},className:"group cursor-pointer perspective-1000",style:{transformStyle:"preserve-3d"},onClick:()=>i(c),children:C.jsxs("div",{className:"backdrop-blur-sm bg-gray-800/60 rounded-3xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 transform-gpu",style:{boxShadow:"0 0 40px rgba(0, 255, 255, 0.1)"},children:[C.jsxs("div",{className:"relative overflow-hidden",children:[C.jsx("img",{src:c.image,alt:c.title,className:"w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),C.jsxs("div",{className:`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${l(c.category)} text-white text-sm rounded-full flex items-center gap-2`,style:{boxShadow:"0 0 15px rgba(0, 255, 255, 0.3)"},children:[a(c.category),c.category]})]}),C.jsxs("div",{className:"p-6",children:[C.jsxs("div",{className:"flex items-center justify-between mb-3",children:[C.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-400 transition-colors",children:c.title}),C.jsx("span",{className:"text-sm text-cyan-300",children:c.year})]}),C.jsx("p",{className:"text-cyan-100 mb-4 line-clamp-2",children:c.description}),C.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[c.technologies.slice(0,3).map(u=>C.jsx("span",{className:"px-3 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/30",children:u},u)),c.technologies.length>3&&C.jsxs("span",{className:"px-3 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/30",children:["+",c.technologies.length-3," more"]})]}),C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsx("span",{className:"text-cyan-400 font-semibold text-sm group-hover:text-cyan-300",children:"View Details →"}),C.jsx("div",{className:"flex gap-2",children:C.jsx("div",{className:"w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/30",children:C.jsx(au,{className:"w-4 h-4 text-cyan-400"})})})]})]})]})},c.id))})]})}),C.jsx(Uc,{children:n&&C.jsx(fN,{project:n,onClose:()=>i(null)})})]})},pN=()=>{const[t,e]=Wa({threshold:.5,triggerOnce:!0}),n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}};return C.jsxs(ge.footer,{ref:t,variants:n,initial:"hidden",animate:e?"visible":"hidden",className:"py-16 bg-black border-t border-cyan-500/30 relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:`
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,backgroundSize:"30px 30px"}}),C.jsx("div",{className:"absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"}),C.jsx("div",{className:"container mx-auto px-6 relative z-10",children:C.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[C.jsxs(ge.div,{initial:{opacity:0,scale:.8},animate:e?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{duration:.6,delay:.2},className:"mb-10",children:[C.jsx("h3",{className:"text-3xl font-bold text-white mb-6",children:C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",children:"Monirul Islam"})}),C.jsx("p",{className:"text-cyan-100 max-w-2xl mx-auto leading-relaxed text-lg",children:"Passionate about creating exceptional digital experiences through clean code, innovative design, and cutting-edge technologies."})]}),C.jsxs(ge.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6,delay:.4},className:"flex items-center justify-center gap-3 text-cyan-300 mb-8 text-lg",children:[C.jsx("span",{children:"Made with"}),C.jsx(VC,{className:"w-5 h-5 text-red-400 fill-current animate-pulse"}),C.jsx("span",{children:"and"}),C.jsx(Ta,{className:"w-5 h-5 text-cyan-400"}),C.jsx("span",{children:"by Monirul Islam"})]}),C.jsx(ge.div,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{duration:.6,delay:.6},className:"pt-8 border-t border-cyan-500/30",children:C.jsxs("p",{className:"text-sm text-cyan-400",children:["© ",new Date().getFullYear()," Monirul Islam. All rights reserved."]})})]})})]})},mN=()=>{const[t,e]=Wa({threshold:.3,triggerOnce:!0}),[n,i]=Q.useState({name:"",email:"",message:""}),[r,s]=Q.useState(!1),o=async f=>{f.preventDefault(),s(!0),await new Promise(p=>setTimeout(p,2e3)),i({name:"",email:"",message:""}),s(!1)},a=f=>{i({...n,[f.target.name]:f.target.value})},l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},c={hidden:{opacity:0,y:50},visible:{opacity:1,y:0}},u=[{icon:zS,title:"Email",value:"mdshabuj973@gmail.com",link:"mailto:mdshabuj973@gmail.com"},{icon:WC,title:"Phone",value:"+880 1580800771",link:"tel:+8801580800771"},{icon:HC,title:"Location",value:"Dhaka, Bangladesh",link:"#"}],d=[{icon:au,link:"https://github.com/StackedBy-Monirul",color:"hover:text-cyan-400"},{icon:VS,link:"https://www.linkedin.com/in/monirul-islam-shabuj/",color:"hover:text-blue-400"}];return C.jsxs("section",{id:"contact",children:[C.jsxs("div",{className:"py-24 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
        `,backgroundSize:"40px 40px"}}),C.jsx("div",{className:"absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"}),C.jsx("div",{className:"container mx-auto px-6 relative z-10",ref:t,children:C.jsxs(ge.div,{variants:l,initial:"hidden",animate:e?"visible":"hidden",className:"max-w-7xl mx-auto",children:[C.jsxs(ge.div,{variants:c,className:"text-center mb-20",children:[C.jsxs("h2",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:["Get In ",C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",children:"Touch"})]}),C.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.5)"}}),C.jsx("p",{className:"text-cyan-100 text-xl mt-8 max-w-3xl mx-auto leading-relaxed",children:"Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."})]}),C.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[C.jsx(ge.div,{variants:c,className:"space-y-8",children:C.jsxs("div",{className:"backdrop-blur-sm bg-gray-800/40 rounded-3xl p-8 border border-cyan-500/30",style:{boxShadow:"0 0 40px rgba(0, 255, 255, 0.1)"},children:[C.jsx("h3",{className:"text-3xl font-bold text-white mb-8",children:"Let's Connect"}),C.jsx("div",{className:"space-y-6",children:u.map(f=>C.jsxs(ge.a,{href:f.link,variants:c,whileHover:{x:10,scale:1.02},className:"flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group border border-cyan-500/20",children:[C.jsx("div",{className:"w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center",style:{boxShadow:"0 0 25px rgba(0, 255, 255, 0.3)"},children:C.jsx(f.icon,{className:"w-6 h-6 text-white"})}),C.jsxs("div",{children:[C.jsx("h4",{className:"text-white font-semibold group-hover:text-cyan-300 transition-colors text-lg",children:f.title}),C.jsx("p",{className:"text-cyan-100 group-hover:text-white transition-colors",children:f.value})]})]},f.title))}),C.jsxs("div",{className:"pt-8",children:[C.jsx("h4",{className:"text-white font-semibold mb-6 text-xl",children:"Follow Me"}),C.jsx("div",{className:"flex gap-4",children:d.map((f,p)=>C.jsx(ge.a,{href:f.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,y:-2},className:`w-14 h-14 bg-gray-700/30 rounded-xl flex items-center justify-center text-cyan-300 ${f.color} transition-all duration-300 hover:bg-gray-700/50 border border-cyan-500/30`,style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.1)"},children:C.jsx(f.icon,{className:"w-6 h-6"})},p))})]})]})}),C.jsx(ge.div,{variants:c,children:C.jsxs("div",{className:"backdrop-blur-sm bg-gray-800/40 rounded-3xl p-8 border border-cyan-500/30",style:{boxShadow:"0 0 40px rgba(0, 255, 255, 0.1)"},children:[C.jsx("h3",{className:"text-3xl font-bold text-white mb-8",children:"Send a Message"}),C.jsxs("form",{onSubmit:o,className:"space-y-6",children:[C.jsxs(ge.div,{variants:c,children:[C.jsx("label",{htmlFor:"name",className:"block text-white font-medium mb-3 text-lg",children:"Your Name"}),C.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:a,required:!0,className:"w-full px-4 py-4 bg-gray-700/50 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300",placeholder:"Enter your name",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.05)"}})]}),C.jsxs(ge.div,{variants:c,children:[C.jsx("label",{htmlFor:"email",className:"block text-white font-medium mb-3 text-lg",children:"Email Address"}),C.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:a,required:!0,className:"w-full px-4 py-4 bg-gray-700/50 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300",placeholder:"Enter your email",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.05)"}})]}),C.jsxs(ge.div,{variants:c,children:[C.jsx("label",{htmlFor:"message",className:"block text-white font-medium mb-3 text-lg",children:"Message"}),C.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:a,required:!0,rows:5,className:"w-full px-4 py-4 bg-gray-700/50 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none",placeholder:"Tell me about your project...",style:{boxShadow:"0 0 20px rgba(0, 255, 255, 0.05)"}})]}),C.jsx(ge.button,{type:"submit",variants:c,whileHover:{scale:1.05},whileTap:{scale:.98},disabled:r,className:"w-full flex items-center text-white justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed",style:{boxShadow:"0 0 30px rgba(0, 255, 255, 0.3)"},children:r?C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"}),"Sending..."]}):C.jsxs(C.Fragment,{children:[C.jsx(jC,{className:"w-5 h-5"}),"Send Message"]})})]})]})})]})]})})]}),C.jsx(pN,{})]})},SM=Q.forwardRef(({children:t,transitionDuration:e=800,scrollThreshold:n=100,scrollPosition:i,onScrollPositionChange:r},s)=>{const[o,a]=Q.useState(0),[l,c]=Q.useState(0),u=(i==null?void 0:i.currentSection)??o,d=(i==null?void 0:i.internalScrollPosition)??l,[f,p]=Q.useState(!1),[x,y]=Q.useState(!1),m=Q.useRef(null),h=Q.useRef([]),g=Pm.Children.count(t),[v,_]=Q.useState(800),[T,b]=Q.useState(!1),[A,R]=Q.useState([]),[E,M]=Q.useState([]),D=Q.useRef(null),z=Q.useRef(d),H=Q.useRef(null);Q.useImperativeHandle(s,()=>({smoothScrollToTop:()=>{x||f||u===0||j()}})),Q.useEffect(()=>{const oe=()=>{const Be=window.innerHeight;_(Be),b(window.innerWidth<=768)};return oe(),window.addEventListener("resize",oe),()=>window.removeEventListener("resize",oe)},[]),Q.useEffect(()=>{const oe=()=>{const Be=[],ke=[];let X=0;h.current.forEach(te=>{if(Be.push(X),te){const J=te.offsetHeight;ke.push(J),X+=J}}),R(Be),M(ke)};return oe(),window.addEventListener("resize",oe),()=>window.removeEventListener("resize",oe)},[t,T]);const $=Q.useRef(null);Q.useEffect(()=>{if(!r||i)return;const oe={currentSection:u,internalScrollPosition:d};(!$.current||$.current.currentSection!==oe.currentSection||$.current.internalScrollPosition!==oe.internalScrollPosition)&&(r(oe),$.current=oe)},[u,d,r,i]);const j=()=>{y(!0);const oe=Date.now(),Be=(A[u]||0)+d,ke=Be,X=Math.max(1e3,Math.min(3e3,ke*2)),te=Me=>1-Math.pow(1-Me,4),J=()=>{const Me=Date.now()-oe,we=Math.min(Me/X,1),De=te(we),ft=Be-ke*De;let je=0,N=0;for(let Ke=A.length-1;Ke>=0;Ke--)if(ft>=A[Ke]){je=Ke,N=ft-A[Ke];break}i?r==null||r({currentSection:je,internalScrollPosition:N}):(a(je),c(N)),we<1?D.current=requestAnimationFrame(J):(i?r==null||r({currentSection:0,internalScrollPosition:0}):(a(0),c(0)),y(!1))};D.current=requestAnimationFrame(J)};Q.useEffect(()=>()=>{D.current&&cancelAnimationFrame(D.current),H.current&&cancelAnimationFrame(H.current)},[]);const G=()=>E[u]||v,Y=()=>d<G()-v,L=()=>d>0,W=oe=>{oe<0||oe>=g||f||x||(p(!0),i?r==null||r({currentSection:oe,internalScrollPosition:0}):(a(oe),c(0)),setTimeout(()=>p(!1),e))},q=oe=>{z.current=oe,H.current===null&&(H.current=requestAnimationFrame(()=>{H.current=null,i?r==null||r({currentSection:u,internalScrollPosition:z.current}):c(z.current)}))};Q.useEffect(()=>{if(T){const te=()=>{if(f||x)return;const J=window.scrollY;let Me=0,we=0;for(let De=A.length-1;De>=0;De--)if(J>=A[De]){Me=De,we=J-A[De];break}i?r==null||r({currentSection:Me,internalScrollPosition:we}):(a(Me),c(we))};return window.addEventListener("scroll",te,{passive:!0}),()=>{window.removeEventListener("scroll",te)}}let oe=null,Be=0;const ke=te=>{if(f||x)return;const J=te.deltaY,Me=G();if(Me>v){if(J>0&&Y()){te.preventDefault(),q(Math.min(z.current+J,Me-v));return}else if(J<0&&L()){te.preventDefault(),q(Math.max(z.current+J,0));return}}te.preventDefault(),oe&&clearTimeout(oe),Be+=Math.abs(J),oe=window.setTimeout(()=>{Be>n&&(J>0&&u<g-1?W(u+1):J<0&&u>0&&W(u-1)),Be=0},150)},X=te=>{if(f||x)return;const J=G()>v;switch(te.key){case"ArrowDown":te.preventDefault(),J&&Y()?q(Math.min(z.current+50,G()-v)):u<g-1&&W(u+1);break;case"ArrowUp":te.preventDefault(),J&&L()?q(Math.max(z.current-50,0)):u>0&&W(u-1);break;case"PageDown":te.preventDefault(),J&&Y()?q(Math.min(z.current+v*.8,G()-v)):u<g-1&&W(u+1);break;case"PageUp":te.preventDefault(),J&&L()?q(Math.max(z.current-v*.8,0)):u>0&&W(u-1);break;case"Home":te.preventDefault(),J?q(0):W(0);break;case"End":te.preventDefault(),J?q(G()-v):W(g-1);break}};return document.addEventListener("wheel",ke,{passive:!1}),document.addEventListener("keydown",X),()=>{document.removeEventListener("wheel",ke),document.removeEventListener("keydown",X),oe&&clearTimeout(oe)}},[u,f,x,g,v,n,i,r,T,A]);const ue=(A[u]||0)+d;return C.jsxs("div",{className:T?"w-full h-auto":"fixed inset-0 overflow-hidden",children:[!T&&G()>v&&C.jsx("div",{className:"fixed left-8 top-1/2 transform -translate-y-1/2 z-50",children:C.jsx("div",{className:"w-1 h-32 bg-white/20 rounded-full relative",children:C.jsx("div",{className:"w-full bg-cyan-400 rounded-full transition-all duration-200",style:{height:`${v/G()*100}%`,transform:`translateY(${d/(G()-v)*(128-v/G()*128)}px)`}})})}),C.jsx("div",{ref:m,className:"w-full h-full",style:T?{overflow:"hidden"}:{transform:`translateY(-${ue}px)`,transition:f&&!x?`transform ${e}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`:"none"},children:Pm.Children.map(t,(oe,Be)=>C.jsx("div",{ref:ke=>h.current[Be]=ke,className:"w-full relative",children:oe},Be))}),!T&&C.jsx("div",{className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 backdrop-blur-lg rounded-full px-4 py-2 text-white",children:C.jsxs("span",{className:"text-sm",children:[u+1," / ",g,G()>v&&C.jsxs("span",{className:"ml-2 opacity-70",children:["(",Math.round(d/(G()-v)*100),"%)"]}),x&&C.jsx("span",{className:"ml-2 text-cyan-400",children:"Scrolling..."})]})})]})});SM.displayName="FullPageScrollSlider";function gN(){const[t,e]=Q.useState({currentSection:0}),[n,i]=Q.useState(!1),r=Q.useRef(null),s=800,o=()=>{r.current&&(i(!0),r.current.smoothScrollToTop(),setTimeout(()=>{i(!1)},3e3))};return Q.useEffect(()=>{const a=document.createElement("div");a.className="fixed w-8 h-8 bg-cyan-400/30 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-150",a.style.transform="translate(-50%, -50%)",a.style.boxShadow="0 0 20px rgba(0, 255, 255, 0.6)",document.body.appendChild(a);const l=m=>{a.style.left=m.clientX+"px",a.style.top=m.clientY+"px"};let c=null,u=!1;const d=m=>{m.touches.length>0&&(a.style.left=m.touches[0].clientX+"px",a.style.top=m.touches[0].clientY+"px",a.style.opacity="1")},f=m=>{m.touches.length>0&&(a.style.left=m.touches[0].clientX+"px",a.style.top=m.touches[0].clientY+"px",a.style.opacity="1",c&&clearTimeout(c),c=setTimeout(()=>{u=!0},500))},p=()=>{a.style.opacity="0",u=!1,c&&(clearTimeout(c),c=null)},x=m=>{u&&(a.style.left=m.clientX+"px",a.style.top=m.clientY+"px",a.style.opacity="1")},y=()=>{u=!1,a.style.opacity="0",document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",y)};return document.addEventListener("mousemove",l),document.addEventListener("touchmove",d,{passive:!0}),document.addEventListener("touchstart",f,{passive:!0}),document.addEventListener("touchend",p),document.addEventListener("mousemove",x),document.addEventListener("mouseup",y),()=>{document.removeEventListener("mousemove",l),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",f),document.removeEventListener("touchend",p),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",y),document.body.contains(a)&&document.body.removeChild(a)}},[]),C.jsxs("div",{className:"relative",children:[C.jsx(qC,{}),C.jsx(KC,{currentSection:t.currentSection,onScrollToTop:o,isScrolling:n}),C.jsxs(SM,{ref:r,scrollPosition:t,onScrollPositionChange:e,transitionDuration:s,children:[C.jsx(rN,{}),C.jsx(uN,{}),C.jsx(dN,{}),C.jsx(hN,{}),C.jsx(mN,{})]})]})}a_(document.getElementById("root")).render(C.jsx(Q.StrictMode,{children:C.jsx(gN,{})}));
