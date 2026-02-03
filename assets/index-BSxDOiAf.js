(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Ih={exports:{}},$o={};var M_;function HS(){if(M_)return $o;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return $o.Fragment=t,$o.jsx=n,$o.jsxs=n,$o}var E_;function GS(){return E_||(E_=1,Ih.exports=HS()),Ih.exports}var Ut=GS(),Bh={exports:{}},me={};var b_;function VS(){if(b_)return me;b_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(L,it,gt){this.props=L,this.context=it,this.refs=M,this.updater=gt||b}v.prototype.isReactComponent={},v.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=v.prototype;function U(L,it,gt){this.props=L,this.context=it,this.refs=M,this.updater=gt||b}var D=U.prototype=new O;D.constructor=U,T(D,v.prototype),D.isPureReactComponent=!0;var z=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function C(L,it,gt){var Rt=gt.ref;return{$$typeof:r,type:L,key:it,ref:Rt!==void 0?Rt:null,props:gt}}function w(L,it){return C(L.type,it,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Q(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(gt){return it[gt]})}var et=/\/+/g;function ht(L,it){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):it.toString(36)}function ut(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,it,gt,Rt,kt){var $=typeof L;($==="undefined"||$==="boolean")&&(L=null);var lt=!1;if(L===null)lt=!0;else switch($){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(L.$$typeof){case r:case t:lt=!0;break;case g:return lt=L._init,P(lt(L._payload),it,gt,Rt,kt)}}if(lt)return kt=kt(L),lt=Rt===""?"."+ht(L,0):Rt,z(kt)?(gt="",lt!=null&&(gt=lt.replace(et,"$&/")+"/"),P(kt,it,gt,"",function(zt){return zt})):kt!=null&&(V(kt)&&(kt=w(kt,gt+(kt.key==null||L&&L.key===kt.key?"":(""+kt.key).replace(et,"$&/")+"/")+lt)),it.push(kt)),1;lt=0;var Dt=Rt===""?".":Rt+":";if(z(L))for(var Yt=0;Yt<L.length;Yt++)Rt=L[Yt],$=Dt+ht(Rt,Yt),lt+=P(Rt,it,gt,$,kt);else if(Yt=S(L),typeof Yt=="function")for(L=Yt.call(L),Yt=0;!(Rt=L.next()).done;)Rt=Rt.value,$=Dt+ht(Rt,Yt++),lt+=P(Rt,it,gt,$,kt);else if($==="object"){if(typeof L.then=="function")return P(ut(L),it,gt,Rt,kt);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return lt}function H(L,it,gt){if(L==null)return L;var Rt=[],kt=0;return P(L,Rt,"","",function($){return it.call(gt,$,kt++)}),Rt}function at(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(gt){(L._status===0||L._status===-1)&&(L._status=1,L._result=gt)},function(gt){(L._status===0||L._status===-1)&&(L._status=2,L._result=gt)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var Et=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},St={map:H,forEach:function(L,it,gt){H(L,function(){it.apply(this,arguments)},gt)},count:function(L){var it=0;return H(L,function(){it++}),it},toArray:function(L){return H(L,function(it){return it})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return me.Activity=_,me.Children=St,me.Component=v,me.Fragment=n,me.Profiler=l,me.PureComponent=U,me.StrictMode=a,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,me.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},me.cache=function(L){return function(){return L.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(L,it,gt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Rt=T({},L.props),kt=L.key;if(it!=null)for($ in it.key!==void 0&&(kt=""+it.key),it)!Z.call(it,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&it.ref===void 0||(Rt[$]=it[$]);var $=arguments.length-2;if($===1)Rt.children=gt;else if(1<$){for(var lt=Array($),Dt=0;Dt<$;Dt++)lt[Dt]=arguments[Dt+2];Rt.children=lt}return C(L.type,kt,Rt)},me.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},me.createElement=function(L,it,gt){var Rt,kt={},$=null;if(it!=null)for(Rt in it.key!==void 0&&($=""+it.key),it)Z.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(kt[Rt]=it[Rt]);var lt=arguments.length-2;if(lt===1)kt.children=gt;else if(1<lt){for(var Dt=Array(lt),Yt=0;Yt<lt;Yt++)Dt[Yt]=arguments[Yt+2];kt.children=Dt}if(L&&L.defaultProps)for(Rt in lt=L.defaultProps,lt)kt[Rt]===void 0&&(kt[Rt]=lt[Rt]);return C(L,$,kt)},me.createRef=function(){return{current:null}},me.forwardRef=function(L){return{$$typeof:d,render:L}},me.isValidElement=V,me.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:at}},me.memo=function(L,it){return{$$typeof:p,type:L,compare:it===void 0?null:it}},me.startTransition=function(L){var it=I.T,gt={};I.T=gt;try{var Rt=L(),kt=I.S;kt!==null&&kt(gt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(B,Et)}catch($){Et($)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),I.T=it}},me.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},me.use=function(L){return I.H.use(L)},me.useActionState=function(L,it,gt){return I.H.useActionState(L,it,gt)},me.useCallback=function(L,it){return I.H.useCallback(L,it)},me.useContext=function(L){return I.H.useContext(L)},me.useDebugValue=function(){},me.useDeferredValue=function(L,it){return I.H.useDeferredValue(L,it)},me.useEffect=function(L,it){return I.H.useEffect(L,it)},me.useEffectEvent=function(L){return I.H.useEffectEvent(L)},me.useId=function(){return I.H.useId()},me.useImperativeHandle=function(L,it,gt){return I.H.useImperativeHandle(L,it,gt)},me.useInsertionEffect=function(L,it){return I.H.useInsertionEffect(L,it)},me.useLayoutEffect=function(L,it){return I.H.useLayoutEffect(L,it)},me.useMemo=function(L,it){return I.H.useMemo(L,it)},me.useOptimistic=function(L,it){return I.H.useOptimistic(L,it)},me.useReducer=function(L,it,gt){return I.H.useReducer(L,it,gt)},me.useRef=function(L){return I.H.useRef(L)},me.useState=function(L){return I.H.useState(L)},me.useSyncExternalStore=function(L,it,gt){return I.H.useSyncExternalStore(L,it,gt)},me.useTransition=function(){return I.H.useTransition()},me.version="19.2.4",me}var T_;function Tp(){return T_||(T_=1,Bh.exports=VS()),Bh.exports}var re=Tp(),Fh={exports:{}},tl={},Hh={exports:{}},Gh={};var A_;function kS(){return A_||(A_=1,(function(r){function t(P,H){var at=P.length;P.push(H);t:for(;0<at;){var Et=at-1>>>1,St=P[Et];if(0<l(St,H))P[Et]=H,P[at]=St,at=Et;else break t}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var H=P[0],at=P.pop();if(at!==H){P[0]=at;t:for(var Et=0,St=P.length,L=St>>>1;Et<L;){var it=2*(Et+1)-1,gt=P[it],Rt=it+1,kt=P[Rt];if(0>l(gt,at))Rt<St&&0>l(kt,gt)?(P[Et]=kt,P[Rt]=at,Et=Rt):(P[Et]=gt,P[it]=at,Et=it);else if(Rt<St&&0>l(kt,at))P[Et]=kt,P[Rt]=at,Et=Rt;else break t}}return H}function l(P,H){var at=P.sortIndex-H.sortIndex;return at!==0?at:P.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,y=3,S=!1,b=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=P)a(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function z(P){if(T=!1,D(P),!b)if(n(m)!==null)b=!0,B||(B=!0,Q());else{var H=n(p);H!==null&&ut(z,H.startTime-P)}}var B=!1,I=-1,Z=5,C=-1;function w(){return M?!0:!(r.unstable_now()-C<Z)}function V(){if(M=!1,B){var P=r.unstable_now();C=P;var H=!0;try{t:{b=!1,T&&(T=!1,O(I),I=-1),S=!0;var at=y;try{e:{for(D(P),_=n(m);_!==null&&!(_.expirationTime>P&&w());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,y=_.priorityLevel;var St=Et(_.expirationTime<=P);if(P=r.unstable_now(),typeof St=="function"){_.callback=St,D(P),H=!0;break e}_===n(m)&&a(m),D(P)}else a(m);_=n(m)}if(_!==null)H=!0;else{var L=n(p);L!==null&&ut(z,L.startTime-P),H=!1}}break t}finally{_=null,y=at,S=!1}H=void 0}}finally{H?Q():B=!1}}}var Q;if(typeof U=="function")Q=function(){U(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ht=et.port2;et.port1.onmessage=V,Q=function(){ht.postMessage(null)}}else Q=function(){v(V,0)};function ut(P,H){I=v(function(){P(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(P){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var at=y;y=H;try{return P()}finally{y=at}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var at=y;y=P;try{return H()}finally{y=at}},r.unstable_scheduleCallback=function(P,H,at){var Et=r.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Et+at:Et):at=Et,P){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=at+St,P={id:g++,callback:H,priorityLevel:P,startTime:at,expirationTime:St,sortIndex:-1},at>Et?(P.sortIndex=at,t(p,P),n(m)===null&&P===n(p)&&(T?(O(I),I=-1):T=!0,ut(z,at-Et))):(P.sortIndex=St,t(m,P),b||S||(b=!0,B||(B=!0,Q()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var H=y;return function(){var at=y;y=H;try{return P.apply(this,arguments)}finally{y=at}}}})(Gh)),Gh}var R_;function XS(){return R_||(R_=1,Hh.exports=kS()),Hh.exports}var Vh={exports:{}},Kn={};var C_;function WS(){if(C_)return Kn;C_=1;var r=Tp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Kn.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},Kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Kn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:S}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Kn.requestFormReset=function(m){a.d.r(m)},Kn.unstable_batchedUpdates=function(m,p){return m(p)},Kn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Kn.version="19.2.4",Kn}var w_;function qS(){if(w_)return Vh.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Vh.exports=WS(),Vh.exports}var D_;function YS(){if(D_)return tl;D_=1;var r=XS(),t=Tp(),n=qS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return m(u),e;if(h===o)return m(u),i;h=h.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===s){x=!0,s=u,o=h;break}if(A===o){x=!0,o=u,s=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===s){x=!0,s=h,o=u;break}if(A===o){x=!0,o=h,s=u;break}A=A.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:ht(e.type)||"Memo";case Z:i=e._payload,e=e._init;try{return ht(e(i))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Et=[],St=-1;function L(e){return{current:e}}function it(e){0>St||(e.current=Et[St],Et[St]=null,St--)}function gt(e,i){St++,Et[St]=e.current,e.current=i}var Rt=L(null),kt=L(null),$=L(null),lt=L(null);function Dt(e,i){switch(gt($,i),gt(kt,e),gt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Wg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Wg(i),e=qg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Rt),gt(Rt,e)}function Yt(){it(Rt),it(kt),it($)}function zt(e){e.memoizedState!==null&&gt(lt,e);var i=Rt.current,s=qg(i,e.type);i!==s&&(gt(kt,e),gt(Rt,s))}function ve(e){kt.current===e&&(it(Rt),it(kt)),lt.current===e&&(it(lt),Zo._currentValue=at)}var rn,Te;function xe(e){if(rn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);rn=i&&i[1]||"",Te=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+e+Te}var ze=!1;function se(e,i){if(!e||ze)return"";ze=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){rt=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var F=x.split(`
`),nt=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===nt.length)for(o=F.length-1,u=nt.length-1;1<=o&&0<=u&&F[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==nt[u]){var pt=`
`+F[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{ze=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?xe(s):""}function fn(e,i){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return e.child!==i&&i!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return xe("Activity");default:return""}}function G(e){try{var i="",s=null;do i+=fn(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var on=Object.prototype.hasOwnProperty,Ne=r.unstable_scheduleCallback,Ce=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,N=r.unstable_requestPaint,E=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,$t=r.unstable_LowPriority,Nt=r.unstable_IdlePriority,jt=r.log,le=r.unstable_setDisableYieldValue,Tt=null,At=null;function Xt(e){if(typeof jt=="function"&&le(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Tt,e)}catch{}}var Ht=Math.clz32?Math.clz32:W,Lt=Math.log,de=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Lt(e)/de|0)|0}var Ot=256,Ct=262144,Gt=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=bt(o):(x&=A,x!==0?u=bt(x):s||(s=A&~e,s!==0&&(u=bt(s))))):(A=o&~h,A!==0?u=bt(A):x!==0?u=bt(x):s||(s=o&~e,s!==0&&(u=bt(s)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:u}function wt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function K(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xt(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function yt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Pt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wt(e,i,s,o,u,h){var x=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(s=x&~s;0<s;){var pt=31-Ht(s),vt=1<<pt;A[pt]=0,F[pt]=-1;var rt=nt[pt];if(rt!==null)for(nt[pt]=null,pt=0;pt<rt.length;pt++){var ct=rt[pt];ct!==null&&(ct.lane&=-536870913)}s&=~vt}o!==0&&Zt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~i))}function Zt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ht(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function Ee(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Ht(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function ye(e,i){var s=i&-i;return s=(s&42)!==0?1:we(s),(s&(e.suspendedLanes|i))!==0?0:s}function we(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function je(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function He(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:m_(e.type))}function Ge(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var ge=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ge,Le="__reactProps$"+ge,pe="__reactContainer$"+ge,_n="__reactEvents$"+ge,qi="__reactListeners$"+ge,vn="__reactHandles$"+ge,co="__reactResources$"+ge,xs="__reactMarker$"+ge;function uo(e){delete e[Ae],delete e[Le],delete e[_n],delete e[qi],delete e[vn]}function Ia(e){var i=e[Ae];if(i)return i;for(var s=e.parentNode;s;){if(i=s[pe]||s[Ae]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=$g(e);e!==null;){if(s=e[Ae])return s;e=$g(e)}return i}e=s,s=e.parentNode}return null}function Ba(e){if(e=e[Ae]||e[pe]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ys(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Fa(e){var i=e[co];return i||(i=e[co]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function R(e){e[xs]=!0}var Y=new Set,ot={};function st(e,i){J(e,i),J(e+"Capture",i)}function J(e,i){for(ot[e]=i,e=0;e<i.length;e++)Y.add(i[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qt={},Ft={};function Kt(e){return on.call(Ft,e)?!0:on.call(qt,e)?!1:It.test(e)?Ft[e]=!0:(qt[e]=!0,!1)}function te(e,i,s){if(Kt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function oe(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function ee(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function ce(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pn(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,h.call(this,x)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function cn(e){if(!e._valueTracker){var i=We(e)?"checked":"value";e._valueTracker=pn(e,i,""+e[i])}}function Ze(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=We(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qe=/[\n"\\]/g;function he(e){return e.replace(qe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Fn(e,i,s,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),i!=null?x==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ce(i)):e.value!==""+ce(i)&&(e.value=""+ce(i)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),i!=null?Hn(e,x,ce(i)):s!=null?Hn(e,x,ce(s)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ce(A):e.removeAttribute("name")}function la(e,i,s,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){cn(e);return}s=s!=null?""+ce(s):"",i=i!=null?""+ce(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),cn(e)}function Hn(e,i,s){i==="number"&&ie(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ei(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+ce(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Ke(e,i,s){if(i!=null&&(i=""+ce(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ce(s):""}function Gn(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ut(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=ce(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),cn(e)}function wn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kn(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Vn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function $s(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&kn(e,u,o)}else for(var h in i)i.hasOwnProperty(h)&&kn(e,h,i[h])}function zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ix=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(e){return Ix.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var Lu=null;function Ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,er=null;function Xp(e){var i=Ba(e);if(i&&(e=i.stateNode)){var s=e[Le]||null;t:switch(e=i.stateNode,i.type){case"input":if(Fn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+he(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[Le]||null;if(!u)throw Error(a(90));Fn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Ze(o)}break t;case"textarea":Ke(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Ei(e,!!s.multiple,i,!1)}}}var Pu=!1;function Wp(e,i,s){if(Pu)return e(i,s);Pu=!0;try{var o=e(i);return o}finally{if(Pu=!1,(tr!==null||er!==null)&&(mc(),tr&&(i=tr,e=er,er=tr=null,Xp(i),e)))for(i=0;i<e.length;i++)Xp(e[i])}}function fo(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Le]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(ua)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){zu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{zu=!1}var Ha=null,Iu=null,wl=null;function qp(){if(wl)return wl;var e,i=Iu,s=i.length,o,u="value"in Ha?Ha.value:Ha.textContent,h=u.length;for(e=0;e<s&&i[e]===u[e];e++);var x=s-e;for(o=1;o<=x&&i[s-o]===u[h-o];o++);return wl=u.slice(e,1<o?1-o:void 0)}function Dl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function Yp(){return!1}function si(e){function i(s,o,u,h,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ul:Yp,this.isPropagationStopped=Yp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=si(Ss),po=_({},Ss,{view:0,detail:0}),Bx=si(po),Bu,Fu,mo,Ll=_({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(Bu=e.screenX-mo.screenX,Fu=e.screenY-mo.screenY):Fu=Bu=0,mo=e),Bu)},movementY:function(e){return"movementY"in e?e.movementY:Fu}}),jp=si(Ll),Fx=_({},Ll,{dataTransfer:0}),Hx=si(Fx),Gx=_({},po,{relatedTarget:0}),Hu=si(Gx),Vx=_({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=si(Vx),Xx=_({},Ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wx=si(Xx),qx=_({},Ss,{data:0}),Zp=si(qx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Zx[e])?!!i[e]:!1}function Gu(){return Kx}var Jx=_({},po,{key:function(e){if(e.key){var i=Yx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(e){return e.type==="keypress"?Dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qx=si(Jx),$x=_({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=si($x),ty=_({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),ey=si(ty),ny=_({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=si(ny),ay=_({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sy=si(ay),ry=_({},Ss,{newState:0,oldState:0}),oy=si(ry),ly=[9,13,27,32],Vu=ua&&"CompositionEvent"in window,go=null;ua&&"documentMode"in document&&(go=document.documentMode);var cy=ua&&"TextEvent"in window&&!go,Jp=ua&&(!Vu||go&&8<go&&11>=go),Qp=" ",$p=!1;function tm(e,i){switch(e){case"keyup":return ly.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function uy(e,i){switch(e){case"compositionend":return em(i);case"keypress":return i.which!==32?null:($p=!0,Qp);case"textInput":return e=i.data,e===Qp&&$p?null:e;default:return null}}function fy(e,i){if(nr)return e==="compositionend"||!Vu&&tm(e,i)?(e=qp(),wl=Iu=Ha=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jp&&i.locale!=="ko"?null:i.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!hy[e.type]:i==="textarea"}function im(e,i,s,o){tr?er?er.push(o):er=[o]:tr=o,i=Mc(i,"onChange"),0<i.length&&(s=new Nl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var _o=null,vo=null;function dy(e){Fg(e,0)}function Ol(e){var i=ys(e);if(Ze(i))return e}function am(e,i){if(e==="change")return i}var sm=!1;if(ua){var ku;if(ua){var Xu="oninput"in document;if(!Xu){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),Xu=typeof rm.oninput=="function"}ku=Xu}else ku=!1;sm=ku&&(!document.documentMode||9<document.documentMode)}function om(){_o&&(_o.detachEvent("onpropertychange",lm),vo=_o=null)}function lm(e){if(e.propertyName==="value"&&Ol(vo)){var i=[];im(i,vo,e,Ou(e)),Wp(dy,i)}}function py(e,i,s){e==="focusin"?(om(),_o=i,vo=s,_o.attachEvent("onpropertychange",lm)):e==="focusout"&&om()}function my(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ol(vo)}function gy(e,i){if(e==="click")return Ol(i)}function _y(e,i){if(e==="input"||e==="change")return Ol(i)}function vy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var di=typeof Object.is=="function"?Object.is:vy;function xo(e,i){if(di(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!on.call(i,u)||!di(e[u],i[u]))return!1}return!0}function cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function um(e,i){var s=cm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=cm(s)}}function fm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?fm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function hm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ie(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ie(e.document)}return i}function Wu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var xy=ua&&"documentMode"in document&&11>=document.documentMode,ir=null,qu=null,yo=null,Yu=!1;function dm(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yu||ir==null||ir!==ie(o)||(o=ir,"selectionStart"in o&&Wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&xo(yo,o)||(yo=o,o=Mc(qu,"onSelect"),0<o.length&&(i=new Nl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=ir)))}function Ms(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ar={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},ju={},pm={};ua&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Es(e){if(ju[e])return ju[e];if(!ar[e])return e;var i=ar[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in pm)return ju[e]=i[s];return e}var mm=Es("animationend"),gm=Es("animationiteration"),_m=Es("animationstart"),yy=Es("transitionrun"),Sy=Es("transitionstart"),My=Es("transitioncancel"),vm=Es("transitionend"),xm=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function Ii(e,i){xm.set(e,i),st(i,[e])}var Pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],sr=0,Ku=0;function zl(){for(var e=sr,i=Ku=sr=0;i<e;){var s=bi[i];bi[i++]=null;var o=bi[i];bi[i++]=null;var u=bi[i];bi[i++]=null;var h=bi[i];if(bi[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&ym(s,u,h)}}function Il(e,i,s,o){bi[sr++]=e,bi[sr++]=i,bi[sr++]=s,bi[sr++]=o,Ku|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ju(e,i,s,o){return Il(e,i,s,o),Bl(e)}function bs(e,i){return Il(e,null,null,i),Bl(e)}function ym(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,h=e.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&i!==null&&(u=31-Ht(s),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),h):null}function Bl(e){if(50<Vo)throw Vo=0,oh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var rr={};function Ey(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,i,s,o){return new Ey(e,i,s,o)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,i){var s=e.alternate;return s===null?(s=pi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Sm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Fl(e,i,s,o,u,h){var x=0;if(o=e,typeof e=="function")Qu(e)&&(x=1);else if(typeof e=="string")x=CS(e,s,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=pi(31,s,i,u),e.elementType=C,e.lanes=h,e;case T:return Ts(s.children,u,h,i);case M:x=8,u|=24;break;case v:return e=pi(12,s,i,u|2),e.elementType=v,e.lanes=h,e;case z:return e=pi(13,s,i,u),e.elementType=z,e.lanes=h,e;case B:return e=pi(19,s,i,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case O:x=9;break t;case D:x=11;break t;case I:x=14;break t;case Z:x=16,o=null;break t}x=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=pi(x,s,i,u),i.elementType=e,i.type=o,i.lanes=h,i}function Ts(e,i,s,o){return e=pi(7,e,o,i),e.lanes=s,e}function $u(e,i,s){return e=pi(6,e,null,i),e.lanes=s,e}function Mm(e){var i=pi(18,null,null,0);return i.stateNode=e,i}function tf(e,i,s){return i=pi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Em=new WeakMap;function Ti(e,i){if(typeof e=="object"&&e!==null){var s=Em.get(e);return s!==void 0?s:(i={value:e,source:i,stack:G(i)},Em.set(e,i),i)}return{value:e,source:i,stack:G(i)}}var or=[],lr=0,Hl=null,So=0,Ai=[],Ri=0,Ga=null,Yi=1,ji="";function ha(e,i){or[lr++]=So,or[lr++]=Hl,Hl=e,So=i}function bm(e,i,s){Ai[Ri++]=Yi,Ai[Ri++]=ji,Ai[Ri++]=Ga,Ga=e;var o=Yi;e=ji;var u=32-Ht(o)-1;o&=~(1<<u),s+=1;var h=32-Ht(i)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Yi=1<<32-Ht(i)+u|s<<u|o,ji=h+e}else Yi=1<<h|s<<u|o,ji=e}function ef(e){e.return!==null&&(ha(e,1),bm(e,1,0))}function nf(e){for(;e===Hl;)Hl=or[--lr],or[lr]=null,So=or[--lr],or[lr]=null;for(;e===Ga;)Ga=Ai[--Ri],Ai[Ri]=null,ji=Ai[--Ri],Ai[Ri]=null,Yi=Ai[--Ri],Ai[Ri]=null}function Tm(e,i){Ai[Ri++]=Yi,Ai[Ri++]=ji,Ai[Ri++]=Ga,Yi=i.id,ji=i.overflow,Ga=e}var Xn=null,hn=null,Ie=!1,Va=null,Ci=!1,af=Error(a(519));function ka(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(Ti(i,e)),af}function Am(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[Ae]=e,i[Le]=o,s){case"dialog":Ue("cancel",i),Ue("close",i);break;case"iframe":case"object":case"embed":Ue("load",i);break;case"video":case"audio":for(s=0;s<Xo.length;s++)Ue(Xo[s],i);break;case"source":Ue("error",i);break;case"img":case"image":case"link":Ue("error",i),Ue("load",i);break;case"details":Ue("toggle",i);break;case"input":Ue("invalid",i),la(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ue("invalid",i);break;case"textarea":Ue("invalid",i),Gn(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||kg(i.textContent,s)?(o.popover!=null&&(Ue("beforetoggle",i),Ue("toggle",i)),o.onScroll!=null&&Ue("scroll",i),o.onScrollEnd!=null&&Ue("scrollend",i),o.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||ka(e,!0)}function Rm(e){for(Xn=e.return;Xn;)switch(Xn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Xn=Xn.return}}function cr(e){if(e!==Xn)return!1;if(!Ie)return Rm(e),Ie=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Mh(e.type,e.memoizedProps)),s=!s),s&&hn&&ka(e),Rm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hn=Qg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hn=Qg(e)}else i===27?(i=hn,is(e.type)?(e=Rh,Rh=null,hn=e):hn=i):hn=Xn?Di(e.stateNode.nextSibling):null;return!0}function As(){hn=Xn=null,Ie=!1}function sf(){var e=Va;return e!==null&&(ci===null?ci=e:ci.push.apply(ci,e),Va=null),e}function Mo(e){Va===null?Va=[e]:Va.push(e)}var rf=L(null),Rs=null,da=null;function Xa(e,i,s){gt(rf,i._currentValue),i._currentValue=s}function pa(e){e._currentValue=rf.current,it(rf)}function of(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function lf(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var F=0;F<i.length;F++)if(A.context===i[F]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),of(h.return,s,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=s,h=x.alternate,h!==null&&(h.lanes|=s),of(x,s,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ur(e,i,s,o){e=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var A=u.type;di(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===lt.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}u=u.return}e!==null&&lf(i,e,s,o),i.flags|=262144}function Gl(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){Rs=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Wn(e){return Cm(Rs,e)}function Vl(e,i){return Rs===null&&Cs(e),Cm(e,i)}function Cm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},da===null){if(e===null)throw Error(a(308));da=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else da=da.next=i;return s}var by=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Ty=r.unstable_scheduleCallback,Ay=r.unstable_NormalPriority,bn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new by,data:new Map,refCount:0}}function Eo(e){e.refCount--,e.refCount===0&&Ty(Ay,function(){e.controller.abort()})}var bo=null,uf=0,fr=0,hr=null;function Ry(e,i){if(bo===null){var s=bo=[];uf=0,fr=dh(),hr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return uf++,i.then(wm,wm),i}function wm(){if(--uf===0&&bo!==null){hr!==null&&(hr.status="fulfilled");var e=bo;bo=null,fr=0,hr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Cy(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Dm=P.S;P.S=function(e,i){dg=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ry(e,i),Dm!==null&&Dm(e,i)};var ws=L(null);function ff(){var e=ws.current;return e!==null?e:ln.pooledCache}function kl(e,i){i===null?gt(ws,ws.current):gt(ws,i.pool)}function Um(){var e=ff();return e===null?null:{parent:bn._currentValue,pool:e}}var dr=Error(a(460)),hf=Error(a(474)),Xl=Error(a(542)),Wl={then:function(){}};function Nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Pm(e),e;default:if(typeof i.status=="string")i.then(ca,ca);else{if(e=ln,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Pm(e),e}throw Us=i,dr}}function Ds(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Us=s,dr):s}}var Us=null;function Om(){if(Us===null)throw Error(a(459));var e=Us;return Us=null,e}function Pm(e){if(e===dr||e===Xl)throw Error(a(483))}var pr=null,To=0;function ql(e){var i=To;return To+=1,pr===null&&(pr=[]),Lm(pr,e,i)}function Ao(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Yl(e,i){throw i.$$typeof===y?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function zm(e){function i(j,k){if(e){var tt=j.deletions;tt===null?(j.deletions=[k],j.flags|=16):tt.push(k)}}function s(j,k){if(!e)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=fa(j,k),j.index=0,j.sibling=null,j}function h(j,k,tt){return j.index=tt,e?(tt=j.alternate,tt!==null?(tt=tt.index,tt<k?(j.flags|=67108866,k):tt):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function x(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,tt,mt){return k===null||k.tag!==6?(k=$u(tt,j.mode,mt),k.return=j,k):(k=u(k,tt),k.return=j,k)}function F(j,k,tt,mt){var ae=tt.type;return ae===T?pt(j,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Z&&Ds(ae)===k.type)?(k=u(k,tt.props),Ao(k,tt),k.return=j,k):(k=Fl(tt.type,tt.key,tt.props,null,j.mode,mt),Ao(k,tt),k.return=j,k)}function nt(j,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=tf(tt,j.mode,mt),k.return=j,k):(k=u(k,tt.children||[]),k.return=j,k)}function pt(j,k,tt,mt,ae){return k===null||k.tag!==7?(k=Ts(tt,j.mode,mt,ae),k.return=j,k):(k=u(k,tt),k.return=j,k)}function vt(j,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=$u(""+k,j.mode,tt),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return tt=Fl(k.type,k.key,k.props,null,j.mode,tt),Ao(tt,k),tt.return=j,tt;case b:return k=tf(k,j.mode,tt),k.return=j,k;case Z:return k=Ds(k),vt(j,k,tt)}if(ut(k)||Q(k))return k=Ts(k,j.mode,tt,null),k.return=j,k;if(typeof k.then=="function")return vt(j,ql(k),tt);if(k.$$typeof===U)return vt(j,Vl(j,k),tt);Yl(j,k)}return null}function rt(j,k,tt,mt){var ae=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return ae!==null?null:A(j,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===ae?F(j,k,tt,mt):null;case b:return tt.key===ae?nt(j,k,tt,mt):null;case Z:return tt=Ds(tt),rt(j,k,tt,mt)}if(ut(tt)||Q(tt))return ae!==null?null:pt(j,k,tt,mt,null);if(typeof tt.then=="function")return rt(j,k,ql(tt),mt);if(tt.$$typeof===U)return rt(j,k,Vl(j,tt),mt);Yl(j,tt)}return null}function ct(j,k,tt,mt,ae){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(tt)||null,A(k,j,""+mt,ae);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return j=j.get(mt.key===null?tt:mt.key)||null,F(k,j,mt,ae);case b:return j=j.get(mt.key===null?tt:mt.key)||null,nt(k,j,mt,ae);case Z:return mt=Ds(mt),ct(j,k,tt,mt,ae)}if(ut(mt)||Q(mt))return j=j.get(tt)||null,pt(k,j,mt,ae,null);if(typeof mt.then=="function")return ct(j,k,tt,ql(mt),ae);if(mt.$$typeof===U)return ct(j,k,tt,Vl(k,mt),ae);Yl(k,mt)}return null}function Jt(j,k,tt,mt){for(var ae=null,ke=null,ne=k,Se=k=0,Pe=null;ne!==null&&Se<tt.length;Se++){ne.index>Se?(Pe=ne,ne=null):Pe=ne.sibling;var Xe=rt(j,ne,tt[Se],mt);if(Xe===null){ne===null&&(ne=Pe);break}e&&ne&&Xe.alternate===null&&i(j,ne),k=h(Xe,k,Se),ke===null?ae=Xe:ke.sibling=Xe,ke=Xe,ne=Pe}if(Se===tt.length)return s(j,ne),Ie&&ha(j,Se),ae;if(ne===null){for(;Se<tt.length;Se++)ne=vt(j,tt[Se],mt),ne!==null&&(k=h(ne,k,Se),ke===null?ae=ne:ke.sibling=ne,ke=ne);return Ie&&ha(j,Se),ae}for(ne=o(ne);Se<tt.length;Se++)Pe=ct(ne,j,Se,tt[Se],mt),Pe!==null&&(e&&Pe.alternate!==null&&ne.delete(Pe.key===null?Se:Pe.key),k=h(Pe,k,Se),ke===null?ae=Pe:ke.sibling=Pe,ke=Pe);return e&&ne.forEach(function(ls){return i(j,ls)}),Ie&&ha(j,Se),ae}function ue(j,k,tt,mt){if(tt==null)throw Error(a(151));for(var ae=null,ke=null,ne=k,Se=k=0,Pe=null,Xe=tt.next();ne!==null&&!Xe.done;Se++,Xe=tt.next()){ne.index>Se?(Pe=ne,ne=null):Pe=ne.sibling;var ls=rt(j,ne,Xe.value,mt);if(ls===null){ne===null&&(ne=Pe);break}e&&ne&&ls.alternate===null&&i(j,ne),k=h(ls,k,Se),ke===null?ae=ls:ke.sibling=ls,ke=ls,ne=Pe}if(Xe.done)return s(j,ne),Ie&&ha(j,Se),ae;if(ne===null){for(;!Xe.done;Se++,Xe=tt.next())Xe=vt(j,Xe.value,mt),Xe!==null&&(k=h(Xe,k,Se),ke===null?ae=Xe:ke.sibling=Xe,ke=Xe);return Ie&&ha(j,Se),ae}for(ne=o(ne);!Xe.done;Se++,Xe=tt.next())Xe=ct(ne,j,Se,Xe.value,mt),Xe!==null&&(e&&Xe.alternate!==null&&ne.delete(Xe.key===null?Se:Xe.key),k=h(Xe,k,Se),ke===null?ae=Xe:ke.sibling=Xe,ke=Xe);return e&&ne.forEach(function(FS){return i(j,FS)}),Ie&&ha(j,Se),ae}function nn(j,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var ae=tt.key;k!==null;){if(k.key===ae){if(ae=tt.type,ae===T){if(k.tag===7){s(j,k.sibling),mt=u(k,tt.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Z&&Ds(ae)===k.type){s(j,k.sibling),mt=u(k,tt.props),Ao(mt,tt),mt.return=j,j=mt;break t}s(j,k);break}else i(j,k);k=k.sibling}tt.type===T?(mt=Ts(tt.props.children,j.mode,mt,tt.key),mt.return=j,j=mt):(mt=Fl(tt.type,tt.key,tt.props,null,j.mode,mt),Ao(mt,tt),mt.return=j,j=mt)}return x(j);case b:t:{for(ae=tt.key;k!==null;){if(k.key===ae)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){s(j,k.sibling),mt=u(k,tt.children||[]),mt.return=j,j=mt;break t}else{s(j,k);break}else i(j,k);k=k.sibling}mt=tf(tt,j.mode,mt),mt.return=j,j=mt}return x(j);case Z:return tt=Ds(tt),nn(j,k,tt,mt)}if(ut(tt))return Jt(j,k,tt,mt);if(Q(tt)){if(ae=Q(tt),typeof ae!="function")throw Error(a(150));return tt=ae.call(tt),ue(j,k,tt,mt)}if(typeof tt.then=="function")return nn(j,k,ql(tt),mt);if(tt.$$typeof===U)return nn(j,k,Vl(j,tt),mt);Yl(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(s(j,k.sibling),mt=u(k,tt),mt.return=j,j=mt):(s(j,k),mt=$u(tt,j.mode,mt),mt.return=j,j=mt),x(j)):s(j,k)}return function(j,k,tt,mt){try{To=0;var ae=nn(j,k,tt,mt);return pr=null,ae}catch(ne){if(ne===dr||ne===Xl)throw ne;var ke=pi(29,ne,null,j.mode);return ke.lanes=mt,ke.return=j,ke}}}var Ns=zm(!0),Im=zm(!1),Wa=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ye&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Bl(e),ym(e,null,s),i}return Il(e,o,i,s),Bl(e)}function Ro(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Ee(e,s)}}function mf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var gf=!1;function Co(){if(gf){var e=hr;if(e!==null)throw e}}function wo(e,i,s,o){gf=!1;var u=e.updateQueue;Wa=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,nt=F.next;F.next=null,x===null?h=nt:x.next=nt,x=F;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==x&&(A===null?pt.firstBaseUpdate=nt:A.next=nt,pt.lastBaseUpdate=F))}if(h!==null){var vt=u.baseState;x=0,pt=nt=F=null,A=h;do{var rt=A.lane&-536870913,ct=rt!==A.lane;if(ct?(Oe&rt)===rt:(o&rt)===rt){rt!==0&&rt===fr&&(gf=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Jt=e,ue=A;rt=i;var nn=s;switch(ue.tag){case 1:if(Jt=ue.payload,typeof Jt=="function"){vt=Jt.call(nn,vt,rt);break t}vt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=ue.payload,rt=typeof Jt=="function"?Jt.call(nn,vt,rt):Jt,rt==null)break t;vt=_({},vt,rt);break t;case 2:Wa=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(nt=pt=ct,F=vt):pt=pt.next=ct,x|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);pt===null&&(F=vt),u.baseState=F,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),Qa|=x,e.lanes=x,e.memoizedState=vt}}function Bm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Fm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Bm(s[e],i)}var mr=L(null),jl=L(0);function Hm(e,i){e=Ea,gt(jl,e),gt(mr,i),Ea=e|i.baseLanes}function _f(){gt(jl,Ea),gt(mr,mr.current)}function vf(){Ea=jl.current,it(mr),it(jl)}var mi=L(null),wi=null;function ja(e){var i=e.alternate;gt(Mn,Mn.current&1),gt(mi,e),wi===null&&(i===null||mr.current!==null||i.memoizedState!==null)&&(wi=e)}function xf(e){gt(Mn,Mn.current),gt(mi,e),wi===null&&(wi=e)}function Gm(e){e.tag===22?(gt(Mn,Mn.current),gt(mi,e),wi===null&&(wi=e)):Za()}function Za(){gt(Mn,Mn.current),gt(mi,mi.current)}function gi(e){it(mi),wi===e&&(wi=null),it(Mn)}var Mn=L(0);function Zl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Th(s)||Ah(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,_e=null,tn=null,Tn=null,Kl=!1,gr=!1,Ls=!1,Jl=0,Do=0,_r=null,wy=0;function xn(){throw Error(a(321))}function yf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!di(e[s],i[s]))return!1;return!0}function Sf(e,i,s,o,u,h){return ma=h,_e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=e===null||e.memoizedState===null?b0:zf,Ls=!1,h=s(o,u),Ls=!1,gr&&(h=km(i,s,o,u)),Vm(e),h}function Vm(e){P.H=Lo;var i=tn!==null&&tn.next!==null;if(ma=0,Tn=tn=_e=null,Kl=!1,Do=0,_r=null,i)throw Error(a(300));e===null||An||(e=e.dependencies,e!==null&&Gl(e)&&(An=!0))}function km(e,i,s,o){_e=e;var u=0;do{if(gr&&(_r=null),Do=0,gr=!1,25<=u)throw Error(a(301));if(u+=1,Tn=tn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=T0,h=i(s,o)}while(gr);return h}function Dy(){var e=P.H,i=e.useState()[0];return i=typeof i.then=="function"?Uo(i):i,e=e.useState()[0],(tn!==null?tn.memoizedState:null)!==e&&(_e.flags|=1024),i}function Mf(){var e=Jl!==0;return Jl=0,e}function Ef(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function bf(e){if(Kl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Kl=!1}ma=0,Tn=tn=_e=null,gr=!1,Do=Jl=0,_r=null}function ni(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?_e.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function En(){if(tn===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=tn.next;var i=Tn===null?_e.memoizedState:Tn.next;if(i!==null)Tn=i,tn=e;else{if(e===null)throw _e.alternate===null?Error(a(467)):Error(a(310));tn=e,e={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Tn===null?_e.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var i=Do;return Do+=1,_r===null&&(_r=[]),e=Lm(_r,e,i),i=_e,(Tn===null?i.memoizedState:Tn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?b0:zf),e}function $l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===U)return Wn(e)}throw Error(a(438,String(e)))}function Tf(e){var i=null,s=_e.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Ql(),_e.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=w;return i.index++,s}function ga(e,i){return typeof i=="function"?i(e):i}function tc(e){var i=En();return Af(i,tn,e)}function Af(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}i.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{i=u.next;var A=x=null,F=null,nt=i,pt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Oe&vt)===vt:(ma&vt)===vt){var rt=nt.revertLane;if(rt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===fr&&(pt=!0);else if((ma&rt)===rt){nt=nt.next,rt===fr&&(pt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=vt,x=h):F=F.next=vt,_e.lanes|=rt,Qa|=rt;vt=nt.action,Ls&&s(h,vt),h=nt.hasEagerState?nt.eagerState:s(h,vt)}else rt={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=rt,x=h):F=F.next=rt,_e.lanes|=vt,Qa|=vt;nt=nt.next}while(nt!==null&&nt!==i);if(F===null?x=h:F.next=A,!di(h,e.memoizedState)&&(An=!0,pt&&(s=hr,s!==null)))throw s;e.memoizedState=h,e.baseState=x,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Rf(e){var i=En(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);di(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,o]}function Xm(e,i,s){var o=_e,u=En(),h=Ie;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var x=!di((tn||u).memoizedState,s);if(x&&(u.memoizedState=s,An=!0),u=u.queue,Df(Ym.bind(null,o,u,e),[e]),u.getSnapshot!==i||x||Tn!==null&&Tn.memoizedState.tag&1){if(o.flags|=2048,vr(9,{destroy:void 0},qm.bind(null,o,u,s,i),null),ln===null)throw Error(a(349));h||(ma&127)!==0||Wm(o,i,s)}return s}function Wm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=_e.updateQueue,i===null?(i=Ql(),_e.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function qm(e,i,s,o){i.value=s,i.getSnapshot=o,jm(i)&&Zm(e)}function Ym(e,i,s){return s(function(){jm(i)&&Zm(e)})}function jm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!di(e,s)}catch{return!0}}function Zm(e){var i=bs(e,2);i!==null&&ui(i,e,2)}function Cf(e){var i=ni();if(typeof e=="function"){var s=e;if(e=s(),Ls){Xt(!0);try{s()}finally{Xt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},i}function Km(e,i,s,o){return e.baseState=s,Af(e,tn,typeof o=="function"?o:ga)}function Uy(e,i,s,o,u){if(ic(e))throw Error(a(485));if(e=i.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};P.T!==null?s(!0):h.isTransition=!1,o(h),s=i.pending,s===null?(h.next=i.pending=h,Jm(i,h)):(h.next=s.next,i.pending=s.next=h)}}function Jm(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var h=P.T,x={};P.T=x;try{var A=s(u,o),F=P.S;F!==null&&F(x,A),Qm(e,i,A)}catch(nt){wf(e,i,nt)}finally{h!==null&&x.types!==null&&(h.types=x.types),P.T=h}}else try{h=s(u,o),Qm(e,i,h)}catch(nt){wf(e,i,nt)}}function Qm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){$m(e,i,o)},function(o){return wf(e,i,o)}):$m(e,i,s)}function $m(e,i,s){i.status="fulfilled",i.value=s,t0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Jm(e,s)))}function wf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,t0(i),i=i.next;while(i!==o)}e.action=null}function t0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function e0(e,i){return i}function n0(e,i){if(Ie){var s=ln.formState;if(s!==null){t:{var o=_e;if(Ie){if(hn){e:{for(var u=hn,h=Ci;u.nodeType!==8;){if(!h){u=null;break e}if(u=Di(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){hn=Di(u.nextSibling),o=u.data==="F!";break t}}ka(o)}o=!1}o&&(i=s[0])}}return s=ni(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:i},s.queue=o,s=S0.bind(null,_e,o),o.dispatch=s,o=Cf(!1),h=Pf.bind(null,_e,!1,o.queue),o=ni(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=Uy.bind(null,_e,u,h,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function i0(e){var i=En();return a0(i,tn,e)}function a0(e,i,s){if(i=Af(e,i,e0)[0],e=tc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Uo(i)}catch(x){throw x===dr?Xl:x}else o=i;i=En();var u=i.queue,h=u.dispatch;return s!==i.memoizedState&&(_e.flags|=2048,vr(9,{destroy:void 0},Ny.bind(null,u,s),null)),[o,h,e]}function Ny(e,i){e.action=i}function s0(e){var i=En(),s=tn;if(s!==null)return a0(i,s,e);En(),i=i.memoizedState,s=En();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function vr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=_e.updateQueue,i===null&&(i=Ql(),_e.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function r0(){return En().memoizedState}function ec(e,i,s,o){var u=ni();_e.flags|=e,u.memoizedState=vr(1|i,{destroy:void 0},s,o===void 0?null:o)}function nc(e,i,s,o){var u=En();o=o===void 0?null:o;var h=u.memoizedState.inst;tn!==null&&o!==null&&yf(o,tn.memoizedState.deps)?u.memoizedState=vr(i,h,s,o):(_e.flags|=e,u.memoizedState=vr(1|i,h,s,o))}function o0(e,i){ec(8390656,8,e,i)}function Df(e,i){nc(2048,8,e,i)}function Ly(e){_e.flags|=4;var i=_e.updateQueue;if(i===null)i=Ql(),_e.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function l0(e){var i=En().memoizedState;return Ly({ref:i,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function c0(e,i){return nc(4,2,e,i)}function u0(e,i){return nc(4,4,e,i)}function f0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function h0(e,i,s){s=s!=null?s.concat([e]):null,nc(4,4,f0.bind(null,i,e),s)}function Uf(){}function d0(e,i){var s=En();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&yf(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function p0(e,i){var s=En();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&yf(i,o[1]))return o[0];if(o=e(),Ls){Xt(!0);try{e()}finally{Xt(!1)}}return s.memoizedState=[o,i],o}function Nf(e,i,s){return s===void 0||(ma&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=mg(),_e.lanes|=e,Qa|=e,s)}function m0(e,i,s,o){return di(s,i)?s:mr.current!==null?(e=Nf(e,s,o),di(e,i)||(An=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(Oe&261930)===0?(An=!0,e.memoizedState=s):(e=mg(),_e.lanes|=e,Qa|=e,i)}function g0(e,i,s,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var x=P.T,A={};P.T=A,Pf(e,!1,i,s);try{var F=u(),nt=P.S;if(nt!==null&&nt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var pt=Cy(F,o);No(e,i,pt,xi(e))}else No(e,i,o,xi(e))}catch(vt){No(e,i,{then:function(){},status:"rejected",reason:vt},xi())}finally{H.p=h,x!==null&&A.types!==null&&(x.types=A.types),P.T=x}}function Oy(){}function Lf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var u=_0(e).queue;g0(e,u,i,at,s===null?Oy:function(){return v0(e),s(o)})}function _0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:at},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function v0(e){var i=_0(e);i.next===null&&(i=e.alternate.memoizedState),No(e,i.next.queue,{},xi())}function Of(){return Wn(Zo)}function x0(){return En().memoizedState}function y0(){return En().memoizedState}function Py(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=xi();e=qa(s);var o=Ya(i,e,s);o!==null&&(ui(o,i,s),Ro(o,i,s)),i={cache:cf()},e.payload=i;return}i=i.return}}function zy(e,i,s){var o=xi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ic(e)?M0(i,s):(s=Ju(e,i,s,o),s!==null&&(ui(s,e,o),E0(s,i,o)))}function S0(e,i,s){var o=xi();No(e,i,s,o)}function No(e,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(ic(e))M0(i,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var x=i.lastRenderedState,A=h(x,s);if(u.hasEagerState=!0,u.eagerState=A,di(A,x))return Il(e,i,u,0),ln===null&&zl(),!1}catch{}if(s=Ju(e,i,u,o),s!==null)return ui(s,e,o),E0(s,i,o),!0}return!1}function Pf(e,i,s,o){if(o={lane:2,revertLane:dh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(i)throw Error(a(479))}else i=Ju(e,s,o,2),i!==null&&ui(i,e,2)}function ic(e){var i=e.alternate;return e===_e||i!==null&&i===_e}function M0(e,i){gr=Kl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function E0(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Ee(e,s)}}var Lo={readContext:Wn,use:$l,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};Lo.useEffectEvent=xn;var b0={readContext:Wn,use:$l,useCallback:function(e,i){return ni().memoizedState=[e,i===void 0?null:i],e},useContext:Wn,useEffect:o0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ec(4194308,4,f0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ec(4194308,4,e,i)},useInsertionEffect:function(e,i){ec(4,2,e,i)},useMemo:function(e,i){var s=ni();i=i===void 0?null:i;var o=e();if(Ls){Xt(!0);try{e()}finally{Xt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=ni();if(s!==void 0){var u=s(i);if(Ls){Xt(!0);try{s(i)}finally{Xt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=zy.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var i=ni();return e={current:e},i.memoizedState=e},useState:function(e){e=Cf(e);var i=e.queue,s=S0.bind(null,_e,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Uf,useDeferredValue:function(e,i){var s=ni();return Nf(s,e,i)},useTransition:function(){var e=Cf(!1);return e=g0.bind(null,_e,e.queue,!0,!1),ni().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=_e,u=ni();if(Ie){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),ln===null)throw Error(a(349));(Oe&127)!==0||Wm(o,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,o0(Ym.bind(null,o,h,e),[e]),o.flags|=2048,vr(9,{destroy:void 0},qm.bind(null,o,h,s,i),null),s},useId:function(){var e=ni(),i=ln.identifierPrefix;if(Ie){var s=ji,o=Yi;s=(o&~(1<<32-Ht(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Jl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=wy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Of,useFormState:n0,useActionState:n0,useOptimistic:function(e){var i=ni();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Pf.bind(null,_e,!0,s),s.dispatch=i,[e,i]},useMemoCache:Tf,useCacheRefresh:function(){return ni().memoizedState=Py.bind(null,_e)},useEffectEvent:function(e){var i=ni(),s={impl:e};return i.memoizedState=s,function(){if((Ye&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},zf={readContext:Wn,use:$l,useCallback:d0,useContext:Wn,useEffect:Df,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:tc,useRef:r0,useState:function(){return tc(ga)},useDebugValue:Uf,useDeferredValue:function(e,i){var s=En();return m0(s,tn.memoizedState,e,i)},useTransition:function(){var e=tc(ga)[0],i=En().memoizedState;return[typeof e=="boolean"?e:Uo(e),i]},useSyncExternalStore:Xm,useId:x0,useHostTransitionStatus:Of,useFormState:i0,useActionState:i0,useOptimistic:function(e,i){var s=En();return Km(s,tn,e,i)},useMemoCache:Tf,useCacheRefresh:y0};zf.useEffectEvent=l0;var T0={readContext:Wn,use:$l,useCallback:d0,useContext:Wn,useEffect:Df,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Rf,useRef:r0,useState:function(){return Rf(ga)},useDebugValue:Uf,useDeferredValue:function(e,i){var s=En();return tn===null?Nf(s,e,i):m0(s,tn.memoizedState,e,i)},useTransition:function(){var e=Rf(ga)[0],i=En().memoizedState;return[typeof e=="boolean"?e:Uo(e),i]},useSyncExternalStore:Xm,useId:x0,useHostTransitionStatus:Of,useFormState:s0,useActionState:s0,useOptimistic:function(e,i){var s=En();return tn!==null?Km(s,tn,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:y0};T0.useEffectEvent=l0;function If(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Bf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=xi(),u=qa(o);u.payload=i,s!=null&&(u.callback=s),i=Ya(e,u,o),i!==null&&(ui(i,e,o),Ro(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=xi(),u=qa(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ya(e,u,o),i!==null&&(ui(i,e,o),Ro(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=xi(),o=qa(s);o.tag=2,i!=null&&(o.callback=i),i=Ya(e,o,s),i!==null&&(ui(i,e,s),Ro(i,e,s))}};function A0(e,i,s,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):i.prototype&&i.prototype.isPureReactComponent?!xo(s,o)||!xo(u,h):!0}function R0(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&Bf.enqueueReplaceState(i,i.state,null)}function Os(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function C0(e){Pl(e)}function w0(e){console.error(e)}function D0(e){Pl(e)}function ac(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function U0(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ff(e,i,s){return s=qa(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(e,i)},s}function N0(e){return e=qa(e),e.tag=3,e}function L0(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){U0(i,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){U0(i,s,o),typeof u!="function"&&($a===null?$a=new Set([this]):$a.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Iy(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&ur(i,s,u,!0),s=mi.current,s!==null){switch(s.tag){case 31:case 13:return wi===null?gc():s.alternate===null&&yn===0&&(yn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Wl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),uh(e,o,u)),!1;case 22:return s.flags|=65536,o===Wl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),uh(e,o,u)),!1}throw Error(a(435,s.tag))}return uh(e,o,u),gc(),!1}if(Ie)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==af&&(e=Error(a(422),{cause:o}),Mo(Ti(e,s)))):(o!==af&&(i=Error(a(423),{cause:o}),Mo(Ti(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ti(o,s),u=Ff(e.stateNode,o,u),mf(e,u),yn!==4&&(yn=2)),!1;var h=Error(a(520),{cause:o});if(h=Ti(h,s),Go===null?Go=[h]:Go.push(h),yn!==4&&(yn=2),i===null)return!0;o=Ti(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=Ff(s.stateNode,o,e),mf(s,e),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($a===null||!$a.has(h))))return s.flags|=65536,u&=-u,s.lanes|=u,u=N0(u),L0(u,e,s,o),mf(s,u),!1}s=s.return}while(s!==null);return!1}var Hf=Error(a(461)),An=!1;function qn(e,i,s,o){i.child=e===null?Im(i,null,s,o):Ns(i,e.child,s,o)}function O0(e,i,s,o,u){s=s.render;var h=i.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Cs(i),o=Sf(e,i,s,x,h,u),A=Mf(),e!==null&&!An?(Ef(e,i,u),_a(e,i,u)):(Ie&&A&&ef(i),i.flags|=1,qn(e,i,o,u),i.child)}function P0(e,i,s,o,u){if(e===null){var h=s.type;return typeof h=="function"&&!Qu(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,z0(e,i,h,o,u)):(e=Fl(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!jf(e,u)){var x=h.memoizedProps;if(s=s.compare,s=s!==null?s:xo,s(x,o)&&e.ref===i.ref)return _a(e,i,u)}return i.flags|=1,e=fa(h,o),e.ref=i.ref,e.return=i,i.child=e}function z0(e,i,s,o,u){if(e!==null){var h=e.memoizedProps;if(xo(h,o)&&e.ref===i.ref)if(An=!1,i.pendingProps=o=h,jf(e,u))(e.flags&131072)!==0&&(An=!0);else return i.lanes=e.lanes,_a(e,i,u)}return Gf(e,i,s,o,u)}function I0(e,i,s,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,i.child=null;return B0(e,i,h,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(i,h!==null?h.cachePool:null),h!==null?Hm(i,h):_f(),Gm(i);else return o=i.lanes=536870912,B0(e,i,h!==null?h.baseLanes|s:s,s,o)}else h!==null?(kl(i,h.cachePool),Hm(i,h),Za(),i.memoizedState=null):(e!==null&&kl(i,null),_f(),Za());return qn(e,i,u,s),i.child}function Oo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function B0(e,i,s,o,u){var h=ff();return h=h===null?null:{parent:bn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&kl(i,null),_f(),Gm(i),e!==null&&ur(e,i,o,!0),i.childLanes=u,null}function sc(e,i){return i=oc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function F0(e,i,s){return Ns(i,e.child,null,s),e=sc(i,i.pendingProps),e.flags|=2,gi(i),i.memoizedState=null,e}function By(e,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ie){if(o.mode==="hidden")return e=sc(i,o),i.lanes=536870912,Oo(null,e);if(xf(i),(e=hn)?(e=Jg(e,Ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=Mm(e),s.return=i,i.child=s,Xn=i,hn=null)):e=null,e===null)throw ka(i);return i.lanes=536870912,null}return sc(i,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(xf(i),u)if(i.flags&256)i.flags&=-257,i=F0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(An||ur(e,i,s,!1),u=(s&e.childLanes)!==0,An||u){if(o=ln,o!==null&&(x=ye(o,s),x!==0&&x!==h.retryLane))throw h.retryLane=x,bs(e,x),ui(o,e,x),Hf;gc(),i=F0(e,i,s)}else e=h.treeContext,hn=Di(x.nextSibling),Xn=i,Ie=!0,Va=null,Ci=!1,e!==null&&Tm(i,e),i=sc(i,o),i.flags|=4096;return i}return e=fa(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function rc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Gf(e,i,s,o,u){return Cs(i),s=Sf(e,i,s,o,void 0,u),o=Mf(),e!==null&&!An?(Ef(e,i,u),_a(e,i,u)):(Ie&&o&&ef(i),i.flags|=1,qn(e,i,s,u),i.child)}function H0(e,i,s,o,u,h){return Cs(i),i.updateQueue=null,s=km(i,o,s,u),Vm(e),o=Mf(),e!==null&&!An?(Ef(e,i,h),_a(e,i,h)):(Ie&&o&&ef(i),i.flags|=1,qn(e,i,s,h),i.child)}function G0(e,i,s,o,u){if(Cs(i),i.stateNode===null){var h=rr,x=s.contextType;typeof x=="object"&&x!==null&&(h=Wn(x)),h=new s(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Bf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},df(i),x=s.contextType,h.context=typeof x=="object"&&x!==null?Wn(x):rr,h.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(If(i,s,x,o),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Bf.enqueueReplaceState(h,h.state,null),wo(i,o,h,u),Co(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var A=i.memoizedProps,F=Os(s,A);h.props=F;var nt=h.context,pt=s.contextType;x=rr,typeof pt=="object"&&pt!==null&&(x=Wn(pt));var vt=s.getDerivedStateFromProps;pt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||nt!==x)&&R0(i,h,o,x),Wa=!1;var rt=i.memoizedState;h.state=rt,wo(i,o,h,u),Co(),nt=i.memoizedState,A||rt!==nt||Wa?(typeof vt=="function"&&(If(i,s,vt,o),nt=i.memoizedState),(F=Wa||A0(i,s,F,o,rt,nt,x))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=nt),h.props=o,h.state=nt,h.context=x,o=F):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,pf(e,i),x=i.memoizedProps,pt=Os(s,x),h.props=pt,vt=i.pendingProps,rt=h.context,nt=s.contextType,F=rr,typeof nt=="object"&&nt!==null&&(F=Wn(nt)),A=s.getDerivedStateFromProps,(nt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||rt!==F)&&R0(i,h,o,F),Wa=!1,rt=i.memoizedState,h.state=rt,wo(i,o,h,u),Co();var ct=i.memoizedState;x!==vt||rt!==ct||Wa||e!==null&&e.dependencies!==null&&Gl(e.dependencies)?(typeof A=="function"&&(If(i,s,A,o),ct=i.memoizedState),(pt=Wa||A0(i,s,pt,o,rt,ct,F)||e!==null&&e.dependencies!==null&&Gl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,F)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ct),h.props=o,h.state=ct,h.context=F,o=pt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,rc(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=Ns(i,e.child,null,u),i.child=Ns(i,null,s,u)):qn(e,i,s,u),i.memoizedState=h.state,e=i.child):e=_a(e,i,u),e}function V0(e,i,s,o){return As(),i.flags|=256,qn(e,i,s,o),i.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Um()}}function Xf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=vi),e}function k0(e,i,s){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ie){if(u?ja(i):Za(),(e=hn)?(e=Jg(e,Ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=Mm(e),s.return=i,i.child=s,Xn=i,hn=null)):e=null,e===null)throw ka(i);return Ah(e)?i.lanes=32:i.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Za(),u=i.mode,A=oc({mode:"hidden",children:A},u),o=Ts(o,u,s,null),A.return=i,o.return=i,A.sibling=o,i.child=A,o=i.child,o.memoizedState=kf(s),o.childLanes=Xf(e,x,s),i.memoizedState=Vf,Oo(null,o)):(ja(i),Wf(i,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)i.flags&256?(ja(i),i.flags&=-257,i=qf(e,i,s)):i.memoizedState!==null?(Za(),i.child=e.child,i.flags|=128,i=null):(Za(),A=o.fallback,u=i.mode,o=oc({mode:"visible",children:o.children},u),A=Ts(A,u,s,null),A.flags|=2,o.return=i,A.return=i,o.sibling=A,i.child=o,Ns(i,e.child,null,s),o=i.child,o.memoizedState=kf(s),o.childLanes=Xf(e,x,s),i.memoizedState=Vf,i=Oo(null,o));else if(ja(i),Ah(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(a(419)),o.stack="",o.digest=x,Mo({value:o,source:null,stack:null}),i=qf(e,i,s)}else if(An||ur(e,i,s,!1),x=(s&e.childLanes)!==0,An||x){if(x=ln,x!==null&&(o=ye(x,s),o!==0&&o!==F.retryLane))throw F.retryLane=o,bs(e,o),ui(x,e,o),Hf;Th(A)||gc(),i=qf(e,i,s)}else Th(A)?(i.flags|=192,i.child=e.child,i=null):(e=F.treeContext,hn=Di(A.nextSibling),Xn=i,Ie=!0,Va=null,Ci=!1,e!==null&&Tm(i,e),i=Wf(i,o.children),i.flags|=4096);return i}return u?(Za(),A=o.fallback,u=i.mode,F=e.child,nt=F.sibling,o=fa(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,nt!==null?A=fa(nt,A):(A=Ts(A,u,s,null),A.flags|=2),A.return=i,o.return=i,o.sibling=A,i.child=o,Oo(null,o),o=i.child,A=e.child.memoizedState,A===null?A=kf(s):(u=A.cachePool,u!==null?(F=bn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Um(),A={baseLanes:A.baseLanes|s,cachePool:u}),o.memoizedState=A,o.childLanes=Xf(e,x,s),i.memoizedState=Vf,Oo(e.child,o)):(ja(i),s=e.child,e=s.sibling,s=fa(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(x=i.deletions,x===null?(i.deletions=[e],i.flags|=16):x.push(e)),i.child=s,i.memoizedState=null,s)}function Wf(e,i){return i=oc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function oc(e,i){return e=pi(22,e,null,i),e.lanes=0,e}function qf(e,i,s){return Ns(i,e.child,null,s),e=Wf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function X0(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),of(e.return,i,s)}function Yf(e,i,s,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=h)}function W0(e,i,s){var o=i.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=Mn.current,A=(x&2)!==0;if(A?(x=x&1|2,i.flags|=128):x&=1,gt(Mn,x),qn(e,i,o,s),o=Ie?So:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&X0(e,s,i);else if(e.tag===19)X0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Zl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Yf(i,!1,u,s,h,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Zl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Yf(i,!0,s,null,h,o);break;case"together":Yf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function _a(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Qa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(ur(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=fa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=fa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function jf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Gl(e)))}function Fy(e,i,s){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),Xa(i,bn,e.memoizedState.cache),As();break;case 27:case 5:zt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:Xa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,xf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?k0(e,i,s):(ja(i),e=_a(e,i,s),e!==null?e.sibling:null);ja(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(ur(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return W0(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(Mn,Mn.current),o)break;return null;case 22:return i.lanes=0,I0(e,i,s,i.pendingProps);case 24:Xa(i,bn,e.memoizedState.cache)}return _a(e,i,s)}function q0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)An=!0;else{if(!jf(e,s)&&(i.flags&128)===0)return An=!1,Fy(e,i,s);An=(e.flags&131072)!==0}else An=!1,Ie&&(i.flags&1048576)!==0&&bm(i,So,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Ds(i.elementType),i.type=e,typeof e=="function")Qu(e)?(o=Os(e,o),i.tag=1,i=G0(null,i,e,o,s)):(i.tag=0,i=Gf(null,i,e,o,s));else{if(e!=null){var u=e.$$typeof;if(u===D){i.tag=11,i=O0(null,i,e,o,s);break t}else if(u===I){i.tag=14,i=P0(null,i,e,o,s);break t}}throw i=ht(e)||e,Error(a(306,i,""))}}return i;case 0:return Gf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=Os(o,i.pendingProps),G0(e,i,o,u,s);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,pf(e,i),wo(i,o,null,s);var x=i.memoizedState;if(o=x.cache,Xa(i,bn,o),o!==h.cache&&lf(i,[bn],s,!0),Co(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=V0(e,i,o,s);break t}else if(o!==u){u=Ti(Error(a(424)),i),Mo(u),i=V0(e,i,o,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,hn=Di(e.firstChild),Xn=i,Ie=!0,Va=null,Ci=!0,s=Im(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(As(),o===u){i=_a(e,i,s);break t}qn(e,i,o,s)}i=i.child}return i;case 26:return rc(e,i),e===null?(s=i_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ie||(s=i.type,e=i.pendingProps,o=Ec($.current).createElement(s),o[Ae]=i,o[Le]=e,Yn(o,s,e),R(o),i.stateNode=o):i.memoizedState=i_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return zt(i),e===null&&Ie&&(o=i.stateNode=t_(i.type,i.pendingProps,$.current),Xn=i,Ci=!0,u=hn,is(i.type)?(Rh=u,hn=Di(o.firstChild)):hn=u),qn(e,i,i.pendingProps.children,s),rc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ie&&((u=o=hn)&&(o=mS(o,i.type,i.pendingProps,Ci),o!==null?(i.stateNode=o,Xn=i,hn=Di(o.firstChild),Ci=!1,u=!0):u=!1),u||ka(i)),zt(i),u=i.type,h=i.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,Mh(u,h)?o=null:x!==null&&Mh(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=Sf(e,i,Dy,null,null,s),Zo._currentValue=u),rc(e,i),qn(e,i,o,s),i.child;case 6:return e===null&&Ie&&((e=s=hn)&&(s=gS(s,i.pendingProps,Ci),s!==null?(i.stateNode=s,Xn=i,hn=null,e=!0):e=!1),e||ka(i)),null;case 13:return k0(e,i,s);case 4:return Dt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ns(i,null,o,s):qn(e,i,o,s),i.child;case 11:return O0(e,i,i.type,i.pendingProps,s);case 7:return qn(e,i,i.pendingProps,s),i.child;case 8:return qn(e,i,i.pendingProps.children,s),i.child;case 12:return qn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Xa(i,i.type,o.value),qn(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Cs(i),u=Wn(u),o=o(u),i.flags|=1,qn(e,i,o,s),i.child;case 14:return P0(e,i,i.type,i.pendingProps,s);case 15:return z0(e,i,i.type,i.pendingProps,s);case 19:return W0(e,i,s);case 31:return By(e,i,s);case 22:return I0(e,i,s,i.pendingProps);case 24:return Cs(i),o=Wn(bn),e===null?(u=ff(),u===null&&(u=ln,h=cf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=s),u=h),i.memoizedState={parent:o,cache:u},df(i),Xa(i,bn,u)):((e.lanes&s)!==0&&(pf(e,i),wo(i,null,null,s),Co()),u=e.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Xa(i,bn,o)):(o=h.cache,Xa(i,bn,o),o!==u.cache&&lf(i,[bn],s,!0))),qn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function va(e){e.flags|=4}function Zf(e,i,s,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(xg())e.flags|=8192;else throw Us=Wl,hf}else e.flags&=-16777217}function Y0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l_(i))if(xg())e.flags|=8192;else throw Us=Wl,hf}function lc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?xt():536870912,e.lanes|=i,Mr|=i)}function Po(e,i){if(!Ie)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function dn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function Hy(e,i,s){var o=i.pendingProps;switch(nf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return dn(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),pa(bn),Yt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(cr(i)?va(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sf())),dn(i),null;case 26:var u=i.type,h=i.memoizedState;return e===null?(va(i),h!==null?(dn(i),Y0(i,h)):(dn(i),Zf(i,u,null,o,s))):h?h!==e.memoizedState?(va(i),dn(i),Y0(i,h)):(dn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&va(i),dn(i),Zf(i,u,e,o,s)),null;case 27:if(ve(i),s=$.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&va(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return dn(i),null}e=Rt.current,cr(i)?Am(i):(e=t_(u,o,s),i.stateNode=e,va(i))}return dn(i),null;case 5:if(ve(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&va(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return dn(i),null}if(h=Rt.current,cr(i))Am(i);else{var x=Ec($.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[Ae]=i,h[Le]=o;t:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break t;for(;x.sibling===null;){if(x.return===null||x.return===i)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=h;t:switch(Yn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&va(i)}}return dn(i),Zf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&va(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=$.current,cr(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=Xn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ae]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||kg(e.nodeValue,s)),e||ka(i,!0)}else e=Ec(e).createTextNode(o),e[Ae]=i,i.stateNode=e}return dn(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=cr(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Ae]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),e=!1}else s=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(gi(i),i):(gi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return dn(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=cr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[Ae]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),u=!1}else u=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(gi(i),i):(gi(i),null)}return gi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),lc(i,i.updateQueue),dn(i),null);case 4:return Yt(),e===null&&_h(i.stateNode.containerInfo),dn(i),null;case 10:return pa(i.type),dn(i),null;case 19:if(it(Mn),o=i.memoizedState,o===null)return dn(i),null;if(u=(i.flags&128)!==0,h=o.rendering,h===null)if(u)Po(o,!1);else{if(yn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Zl(e),h!==null){for(i.flags|=128,Po(o,!1),e=h.updateQueue,i.updateQueue=e,lc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Sm(s,e),s=s.sibling;return gt(Mn,Mn.current&1|2),Ie&&ha(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&E()>dc&&(i.flags|=128,u=!0,Po(o,!1),i.lanes=4194304)}else{if(!u)if(e=Zl(h),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,lc(i,e),Po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ie)return dn(i),null}else 2*E()-o.renderingStartTime>dc&&s!==536870912&&(i.flags|=128,u=!0,Po(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(e=o.last,e!==null?e.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,s=Mn.current,gt(Mn,u?s&1|2:s&1),Ie&&ha(i,o.treeForkCount),e):(dn(i),null);case 22:case 23:return gi(i),vf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),s=i.updateQueue,s!==null&&lc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&it(ws),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(bn),dn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Gy(e,i){switch(nf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return pa(bn),Yt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ve(i),null;case 31:if(i.memoizedState!==null){if(gi(i),i.alternate===null)throw Error(a(340));As()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(gi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));As()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Mn),null;case 4:return Yt(),null;case 10:return pa(i.type),null;case 22:case 23:return gi(i),vf(),e!==null&&it(ws),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return pa(bn),null;case 25:return null;default:return null}}function j0(e,i){switch(nf(i),i.tag){case 3:pa(bn),Yt();break;case 26:case 27:case 5:ve(i);break;case 4:Yt();break;case 31:i.memoizedState!==null&&gi(i);break;case 13:gi(i);break;case 19:it(Mn);break;case 10:pa(i.type);break;case 22:case 23:gi(i),vf(),e!==null&&it(ws);break;case 24:pa(bn)}}function zo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var h=s.create,x=s.inst;o=h(),x.destroy=o}s=s.next}while(s!==u)}}catch(A){Qe(i,i.return,A)}}function Ka(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=i;var F=s,nt=A;try{nt()}catch(pt){Qe(u,F,pt)}}}o=o.next}while(o!==h)}}catch(pt){Qe(i,i.return,pt)}}function Z0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Fm(i,s)}catch(o){Qe(e,e.return,o)}}}function K0(e,i,s){s.props=Os(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Qe(e,i,o)}}function Io(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){Qe(e,i,u)}}function Zi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Qe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Qe(e,i,u)}else s.current=null}function J0(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Qe(e,e.return,u)}}function Kf(e,i,s){try{var o=e.stateNode;cS(o,e.type,s,i),o[Le]=i}catch(u){Qe(e,e.return,u)}}function Q0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&is(e.type)||e.tag===4}function Jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Q0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&is(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(o!==4&&(o===27&&is(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Qf(e,i,s),e=e.sibling;e!==null;)Qf(e,i,s),e=e.sibling}function cc(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&is(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(cc(e,i,s),e=e.sibling;e!==null;)cc(e,i,s),e=e.sibling}function $0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Yn(i,o,s),i[Ae]=e,i[Le]=s}catch(h){Qe(e,e.return,h)}}var xa=!1,Rn=!1,$f=!1,tg=typeof WeakSet=="function"?WeakSet:Set,zn=null;function Vy(e,i){if(e=e.containerInfo,yh=Dc,e=hm(e),Wu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var x=0,A=-1,F=-1,nt=0,pt=0,vt=e,rt=null;e:for(;;){for(var ct;vt!==s||u!==0&&vt.nodeType!==3||(A=x+u),vt!==h||o!==0&&vt.nodeType!==3||(F=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)rt=vt,vt=ct;for(;;){if(vt===e)break e;if(rt===s&&++nt===u&&(A=x),rt===h&&++pt===o&&(F=x),(ct=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ct}s=A===-1||F===-1?null:{start:A,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(Sh={focusedElem:e,selectionRange:s},Dc=!1,zn=i;zn!==null;)if(i=zn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,zn=e;else for(;zn!==null;){switch(i=zn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=i,u=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var Jt=Os(s.type,u);e=o.getSnapshotBeforeUpdate(Jt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ue){Qe(s,s.return,ue)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)bh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,zn=e;break}zn=i.return}}function eg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(e,s),o&4&&zo(5,s);break;case 1:if(Sa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(x){Qe(s,s.return,x)}else{var u=Os(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Qe(s,s.return,x)}}o&64&&Z0(s),o&512&&Io(s,s.return);break;case 3:if(Sa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Fm(e,i)}catch(x){Qe(s,s.return,x)}}break;case 27:i===null&&o&4&&$0(s);case 26:case 5:Sa(e,s),i===null&&o&4&&J0(s),o&512&&Io(s,s.return);break;case 12:Sa(e,s);break;case 31:Sa(e,s),o&4&&ag(e,s);break;case 13:Sa(e,s),o&4&&sg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Jy.bind(null,s),_S(e,s))));break;case 22:if(o=s.memoizedState!==null||xa,!o){i=i!==null&&i.memoizedState!==null||Rn,u=xa;var h=Rn;xa=o,(Rn=i)&&!h?Ma(e,s,(s.subtreeFlags&8772)!==0):Sa(e,s),xa=u,Rn=h}break;case 30:break;default:Sa(e,s)}}function ng(e){var i=e.alternate;i!==null&&(e.alternate=null,ng(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&uo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mn=null,ri=!1;function ya(e,i,s){for(s=s.child;s!==null;)ig(e,i,s),s=s.sibling}function ig(e,i,s){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Tt,s)}catch{}switch(s.tag){case 26:Rn||Zi(s,i),ya(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Rn||Zi(s,i);var o=mn,u=ri;is(s.type)&&(mn=s.stateNode,ri=!1),ya(e,i,s),qo(s.stateNode),mn=o,ri=u;break;case 5:Rn||Zi(s,i);case 6:if(o=mn,u=ri,mn=null,ya(e,i,s),mn=o,ri=u,mn!==null)if(ri)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(s.stateNode)}catch(h){Qe(s,i,h)}else try{mn.removeChild(s.stateNode)}catch(h){Qe(s,i,h)}break;case 18:mn!==null&&(ri?(e=mn,Zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Dr(e)):Zg(mn,s.stateNode));break;case 4:o=mn,u=ri,mn=s.stateNode.containerInfo,ri=!0,ya(e,i,s),mn=o,ri=u;break;case 0:case 11:case 14:case 15:Ka(2,s,i),Rn||Ka(4,s,i),ya(e,i,s);break;case 1:Rn||(Zi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&K0(s,i,o)),ya(e,i,s);break;case 21:ya(e,i,s);break;case 22:Rn=(o=Rn)||s.memoizedState!==null,ya(e,i,s),Rn=o;break;default:ya(e,i,s)}}function ag(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dr(e)}catch(s){Qe(i,i.return,s)}}}function sg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dr(e)}catch(s){Qe(i,i.return,s)}}function ky(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new tg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new tg),i;default:throw Error(a(435,e.tag))}}function uc(e,i){var s=ky(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=Qy.bind(null,e,o);o.then(u,u)}})}function oi(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],h=e,x=i,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(is(A.type)){mn=A.stateNode,ri=!1;break t}break;case 5:mn=A.stateNode,ri=!1;break t;case 3:case 4:mn=A.stateNode.containerInfo,ri=!0;break t}A=A.return}if(mn===null)throw Error(a(160));ig(h,x,u),mn=null,ri=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)rg(i,e),i=i.sibling}var Bi=null;function rg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oi(i,e),li(e),o&4&&(Ka(3,e,e.return),zo(3,e),Ka(5,e,e.return));break;case 1:oi(i,e),li(e),o&512&&(Rn||s===null||Zi(s,s.return)),o&64&&xa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Bi;if(oi(i,e),li(e),o&512&&(Rn||s===null||Zi(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[xs]||h[Ae]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Yn(h,o,s),h[Ae]=e,R(h),o=h;break t;case"link":var x=r_("link","href",u).get(o+(s.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),Yn(h,o,s),u.head.appendChild(h);break;case"meta":if(x=r_("meta","content",u).get(o+(s.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(A,1);break e}}h=u.createElement(o),Yn(h,o,s),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[Ae]=e,R(h),o=h}e.stateNode=o}else o_(u,e.type,e.stateNode);else e.stateNode=s_(u,o,e.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?o_(u,e.type,e.stateNode):s_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Kf(e,e.memoizedProps,s.memoizedProps)}break;case 27:oi(i,e),li(e),o&512&&(Rn||s===null||Zi(s,s.return)),s!==null&&o&4&&Kf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(oi(i,e),li(e),o&512&&(Rn||s===null||Zi(s,s.return)),e.flags&32){u=e.stateNode;try{wn(u,"")}catch(Jt){Qe(e,e.return,Jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Kf(e,u,s!==null?s.memoizedProps:u)),o&1024&&($f=!0);break;case 6:if(oi(i,e),li(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Jt){Qe(e,e.return,Jt)}}break;case 3:if(Ac=null,u=Bi,Bi=bc(i.containerInfo),oi(i,e),Bi=u,li(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Dr(i.containerInfo)}catch(Jt){Qe(e,e.return,Jt)}$f&&($f=!1,og(e));break;case 4:o=Bi,Bi=bc(e.stateNode.containerInfo),oi(i,e),li(e),Bi=o;break;case 12:oi(i,e),li(e);break;case 31:oi(i,e),li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 13:oi(i,e),li(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(hc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 22:u=e.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,nt=xa,pt=Rn;if(xa=nt||u,Rn=pt||F,oi(i,e),Rn=pt,xa=nt,li(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||F||xa||Rn||Ps(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(h=F.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=F.stateNode;var vt=F.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Jt){Qe(F,F.return,Jt)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Jt){Qe(F,F.return,Jt)}}}else if(i.tag===18){if(s===null){F=i;try{var ct=F.stateNode;u?Kg(ct,!0):Kg(F.stateNode,!1)}catch(Jt){Qe(F,F.return,Jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,uc(e,s))));break;case 19:oi(i,e),li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 30:break;case 21:break;default:oi(i,e),li(e)}}function li(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(Q0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,h=Jf(e);cc(e,h,u);break;case 5:var x=s.stateNode;s.flags&32&&(wn(x,""),s.flags&=-33);var A=Jf(e);cc(e,A,x);break;case 3:case 4:var F=s.stateNode.containerInfo,nt=Jf(e);Qf(e,nt,F);break;default:throw Error(a(161))}}catch(pt){Qe(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;og(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Sa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)eg(e,i.alternate,i),i=i.sibling}function Ps(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ka(4,i,i.return),Ps(i);break;case 1:Zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&K0(i,i.return,s),Ps(i);break;case 27:qo(i.stateNode);case 26:case 5:Zi(i,i.return),Ps(i);break;case 22:i.memoizedState===null&&Ps(i);break;case 30:Ps(i);break;default:Ps(i)}e=e.sibling}}function Ma(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,h=i,x=h.flags;switch(h.tag){case 0:case 11:case 15:Ma(u,h,s),zo(4,h);break;case 1:if(Ma(u,h,s),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Qe(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Bm(F[u],A)}catch(nt){Qe(o,o.return,nt)}}s&&x&64&&Z0(h),Io(h,h.return);break;case 27:$0(h);case 26:case 5:Ma(u,h,s),s&&o===null&&x&4&&J0(h),Io(h,h.return);break;case 12:Ma(u,h,s);break;case 31:Ma(u,h,s),s&&x&4&&ag(u,h);break;case 13:Ma(u,h,s),s&&x&4&&sg(u,h);break;case 22:h.memoizedState===null&&Ma(u,h,s),Io(h,h.return);break;case 30:break;default:Ma(u,h,s)}i=i.sibling}}function th(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Eo(s))}function eh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Eo(e))}function Fi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)lg(e,i,s,o),i=i.sibling}function lg(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(e,i,s,o),u&2048&&zo(9,i);break;case 1:Fi(e,i,s,o);break;case 3:Fi(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Eo(e)));break;case 12:if(u&2048){Fi(e,i,s,o),e=i.stateNode;try{var h=i.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Qe(i,i.return,F)}}else Fi(e,i,s,o);break;case 31:Fi(e,i,s,o);break;case 13:Fi(e,i,s,o);break;case 23:break;case 22:h=i.stateNode,x=i.alternate,i.memoizedState!==null?h._visibility&2?Fi(e,i,s,o):Bo(e,i):h._visibility&2?Fi(e,i,s,o):(h._visibility|=2,xr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&th(x,i);break;case 24:Fi(e,i,s,o),u&2048&&eh(i.alternate,i);break;default:Fi(e,i,s,o)}}function xr(e,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,x=i,A=s,F=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:xr(h,x,A,F,u),zo(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?xr(h,x,A,F,u):Bo(h,x):(pt._visibility|=2,xr(h,x,A,F,u)),u&&nt&2048&&th(x.alternate,x);break;case 24:xr(h,x,A,F,u),u&&nt&2048&&eh(x.alternate,x);break;default:xr(h,x,A,F,u)}i=i.sibling}}function Bo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:Bo(s,o),u&2048&&th(o.alternate,o);break;case 24:Bo(s,o),u&2048&&eh(o.alternate,o);break;default:Bo(s,o)}i=i.sibling}}var Fo=8192;function yr(e,i,s){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)cg(e,i,s),e=e.sibling}function cg(e,i,s){switch(e.tag){case 26:yr(e,i,s),e.flags&Fo&&e.memoizedState!==null&&wS(s,Bi,e.memoizedState,e.memoizedProps);break;case 5:yr(e,i,s);break;case 3:case 4:var o=Bi;Bi=bc(e.stateNode.containerInfo),yr(e,i,s),Bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Fo,Fo=16777216,yr(e,i,s),Fo=o):yr(e,i,s));break;default:yr(e,i,s)}}function ug(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ho(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];zn=o,hg(o,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 0:case 11:case 15:Ho(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Ho(e);break;case 12:Ho(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,fc(e)):Ho(e);break;default:Ho(e)}}function fc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];zn=o,hg(o,e)}ug(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ka(8,i,i.return),fc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,fc(i));break;default:fc(i)}e=e.sibling}}function hg(e,i){for(;zn!==null;){var s=zn;switch(s.tag){case 0:case 11:case 15:Ka(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Eo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,zn=o;else t:for(s=e;zn!==null;){o=zn;var u=o.sibling,h=o.return;if(ng(o),o===s){zn=null;break t}if(u!==null){u.return=h,zn=u;break t}zn=h}}}var Xy={getCacheForType:function(e){var i=Wn(bn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Wn(bn).controller.signal}},Wy=typeof WeakMap=="function"?WeakMap:Map,Ye=0,ln=null,De=null,Oe=0,Je=0,_i=null,Ja=!1,Sr=!1,nh=!1,Ea=0,yn=0,Qa=0,zs=0,ih=0,vi=0,Mr=0,Go=null,ci=null,ah=!1,hc=0,dg=0,dc=1/0,pc=null,$a=null,Dn=0,ts=null,Er=null,ba=0,sh=0,rh=null,pg=null,Vo=0,oh=null;function xi(){return(Ye&2)!==0&&Oe!==0?Oe&-Oe:P.T!==null?dh():He()}function mg(){if(vi===0)if((Oe&536870912)===0||Ie){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),vi=e}else vi=536870912;return e=mi.current,e!==null&&(e.flags|=32),vi}function ui(e,i,s){(e===ln&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(br(e,0),es(e,Oe,vi,!1)),Pt(e,s),((Ye&2)===0||e!==ln)&&(e===ln&&((Ye&2)===0&&(zs|=s),yn===4&&es(e,Oe,vi,!1)),Ki(e))}function gg(e,i,s){if((Ye&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||wt(e,i),u=o?jy(e,i):ch(e,i,!0),h=o;do{if(u===0){Sr&&!o&&es(e,i,0,!1);break}else{if(s=e.current.alternate,h&&!qy(s)){u=ch(e,i,!1),h=!1;continue}if(u===2){if(h=i,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;t:{var A=e;u=Go;var F=A.current.memoizedState.isDehydrated;if(F&&(br(A,x).flags|=256),x=ch(A,x,!1),x!==2){if(nh&&!F){A.errorRecoveryDisabledLanes|=h,zs|=h,u=4;break t}h=ci,ci=u,h!==null&&(ci===null?ci=h:ci.push.apply(ci,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){br(e,0),es(e,i,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:es(o,i,vi,!Ja);break t;case 2:ci=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=hc+300-E(),10<u)){if(es(o,i,vi,!Ja),_t(o,0,!0)!==0)break t;ba=i,o.timeoutHandle=Yg(_g.bind(null,o,s,ci,pc,ah,i,vi,zs,Mr,Ja,h,"Throttled",-0,0),u);break t}_g(o,s,ci,pc,ah,i,vi,zs,Mr,Ja,h,null,-0,0)}}break}while(!0);Ki(e)}function _g(e,i,s,o,u,h,x,A,F,nt,pt,vt,rt,ct){if(e.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},cg(i,h,vt);var Jt=(h&62914560)===h?hc-E():(h&4194048)===h?dg-E():0;if(Jt=DS(vt,Jt),Jt!==null){ba=h,e.cancelPendingCommit=Jt(Tg.bind(null,e,i,h,s,o,u,x,A,F,pt,vt,null,rt,ct)),es(e,h,x,!nt);return}}Tg(e,i,h,s,o,u,x,A,F)}function qy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],h=u.getSnapshot;u=u.value;try{if(!di(h(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function es(e,i,s,o){i&=~ih,i&=~zs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var h=31-Ht(u),x=1<<h;o[h]=-1,u&=~x}s!==0&&Zt(e,s,i)}function mc(){return(Ye&6)===0?(ko(0),!1):!0}function lh(){if(De!==null){if(Je===0)var e=De.return;else e=De,da=Rs=null,bf(e),pr=null,To=0,e=De;for(;e!==null;)j0(e.alternate,e),e=e.return;De=null}}function br(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,hS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ba=0,lh(),ln=e,De=s=fa(e.current,null),Oe=i,Je=0,_i=null,Ja=!1,Sr=wt(e,i),nh=!1,Mr=vi=ih=zs=Qa=yn=0,ci=Go=null,ah=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ht(o),h=1<<u;i|=e[u],o&=~h}return Ea=i,zl(),s}function vg(e,i){_e=null,P.H=Lo,i===dr||i===Xl?(i=Om(),Je=3):i===hf?(i=Om(),Je=4):Je=i===Hf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,_i=i,De===null&&(yn=1,ac(e,Ti(i,e.current)))}function xg(){var e=mi.current;return e===null?!0:(Oe&4194048)===Oe?wi===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===wi:!1}function yg(){var e=P.H;return P.H=Lo,e===null?Lo:e}function Sg(){var e=P.A;return P.A=Xy,e}function gc(){yn=4,Ja||(Oe&4194048)!==Oe&&mi.current!==null||(Sr=!0),(Qa&134217727)===0&&(zs&134217727)===0||ln===null||es(ln,Oe,vi,!1)}function ch(e,i,s){var o=Ye;Ye|=2;var u=yg(),h=Sg();(ln!==e||Oe!==i)&&(pc=null,br(e,i)),i=!1;var x=yn;t:do try{if(Je!==0&&De!==null){var A=De,F=_i;switch(Je){case 8:lh(),x=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var nt=Je;if(Je=0,_i=null,Tr(e,A,F,nt),s&&Sr){x=0;break t}break;default:nt=Je,Je=0,_i=null,Tr(e,A,F,nt)}}Yy(),x=yn;break}catch(pt){vg(e,pt)}while(!0);return i&&e.shellSuspendCounter++,da=Rs=null,Ye=o,P.H=u,P.A=h,De===null&&(ln=null,Oe=0,zl()),x}function Yy(){for(;De!==null;)Mg(De)}function jy(e,i){var s=Ye;Ye|=2;var o=yg(),u=Sg();ln!==e||Oe!==i?(pc=null,dc=E()+500,br(e,i)):Sr=wt(e,i);t:do try{if(Je!==0&&De!==null){i=De;var h=_i;e:switch(Je){case 1:Je=0,_i=null,Tr(e,i,h,1);break;case 2:case 9:if(Nm(h)){Je=0,_i=null,Eg(i);break}i=function(){Je!==2&&Je!==9||ln!==e||(Je=7),Ki(e)},h.then(i,i);break t;case 3:Je=7;break t;case 4:Je=5;break t;case 7:Nm(h)?(Je=0,_i=null,Eg(i)):(Je=0,_i=null,Tr(e,i,h,7));break;case 5:var x=null;switch(De.tag){case 26:x=De.memoizedState;case 5:case 27:var A=De;if(x?l_(x):A.stateNode.complete){Je=0,_i=null;var F=A.sibling;if(F!==null)De=F;else{var nt=A.return;nt!==null?(De=nt,_c(nt)):De=null}break e}}Je=0,_i=null,Tr(e,i,h,5);break;case 6:Je=0,_i=null,Tr(e,i,h,6);break;case 8:lh(),yn=6;break t;default:throw Error(a(462))}}Zy();break}catch(pt){vg(e,pt)}while(!0);return da=Rs=null,P.H=o,P.A=u,Ye=s,De!==null?0:(ln=null,Oe=0,zl(),yn)}function Zy(){for(;De!==null&&!Qt();)Mg(De)}function Mg(e){var i=q0(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,i===null?_c(e):De=i}function Eg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=H0(s,i,i.pendingProps,i.type,void 0,Oe);break;case 11:i=H0(s,i,i.pendingProps,i.type.render,i.ref,Oe);break;case 5:bf(i);default:j0(s,i),i=De=Sm(i,Ea),i=q0(s,i,Ea)}e.memoizedProps=e.pendingProps,i===null?_c(e):De=i}function Tr(e,i,s,o){da=Rs=null,bf(i),pr=null,To=0;var u=i.return;try{if(Iy(e,u,i,s,Oe)){yn=1,ac(e,Ti(s,e.current)),De=null;return}}catch(h){if(u!==null)throw De=u,h;yn=1,ac(e,Ti(s,e.current)),De=null;return}i.flags&32768?(Ie||o===1?e=!0:Sr||(Oe&536870912)!==0?e=!1:(Ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=mi.current,o!==null&&o.tag===13&&(o.flags|=16384))),bg(i,e)):_c(i)}function _c(e){var i=e;do{if((i.flags&32768)!==0){bg(i,Ja);return}e=i.return;var s=Hy(i.alternate,i,Ea);if(s!==null){De=s;return}if(i=i.sibling,i!==null){De=i;return}De=i=e}while(i!==null);yn===0&&(yn=5)}function bg(e,i){do{var s=Gy(e.alternate,e);if(s!==null){s.flags&=32767,De=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){De=e;return}De=e=s}while(e!==null);yn=6,De=null}function Tg(e,i,s,o,u,h,x,A,F){e.cancelPendingCommit=null;do vc();while(Dn!==0);if((Ye&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Ku,Wt(e,s,h,x,A,F),e===ln&&(De=ln=null,Oe=0),Er=i,ts=e,ba=s,sh=h,rh=u,pg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$y(ft,function(){return Dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,x=Ye,Ye|=4;try{Vy(e,i,s)}finally{Ye=x,H.p=u,P.T=o}}Dn=1,Ag(),Rg(),Cg()}}function Ag(){if(Dn===1){Dn=0;var e=ts,i=Er,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var o=H.p;H.p=2;var u=Ye;Ye|=4;try{rg(i,e);var h=Sh,x=hm(e.containerInfo),A=h.focusedElem,F=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&fm(A.ownerDocument.documentElement,A)){if(F!==null&&Wu(A)){var nt=F.start,pt=F.end;if(pt===void 0&&(pt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(pt,A.value.length);else{var vt=A.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Jt=A.textContent.length,ue=Math.min(F.start,Jt),nn=F.end===void 0?ue:Math.min(F.end,Jt);!ct.extend&&ue>nn&&(x=nn,nn=ue,ue=x);var j=um(A,ue),k=um(A,nn);if(j&&k&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=vt.createRange();tt.setStart(j.node,j.offset),ct.removeAllRanges(),ue>nn?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(vt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Dc=!!yh,Sh=yh=null}finally{Ye=u,H.p=o,P.T=s}}e.current=i,Dn=2}}function Rg(){if(Dn===2){Dn=0;var e=ts,i=Er,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var o=H.p;H.p=2;var u=Ye;Ye|=4;try{eg(e,i.alternate,i)}finally{Ye=u,H.p=o,P.T=s}}Dn=3}}function Cg(){if(Dn===4||Dn===3){Dn=0,N();var e=ts,i=Er,s=ba,o=pg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Dn=5:(Dn=0,Er=ts=null,wg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&($a=null),je(s),i=i.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=P.T,u=H.p,H.p=2,P.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{P.T=i,H.p=u}}(ba&3)!==0&&vc(),Ki(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===oh?Vo++:(Vo=0,oh=e):Vo=0,ko(0)}}function wg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Eo(i)))}function vc(){return Ag(),Rg(),Cg(),Dg()}function Dg(){if(Dn!==5)return!1;var e=ts,i=sh;sh=0;var s=je(ba),o=P.T,u=H.p;try{H.p=32>s?32:s,P.T=null,s=rh,rh=null;var h=ts,x=ba;if(Dn=0,Er=ts=null,ba=0,(Ye&6)!==0)throw Error(a(331));var A=Ye;if(Ye|=4,fg(h.current),lg(h,h.current,x,s),Ye=A,ko(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{H.p=u,P.T=o,wg(e,i)}}function Ug(e,i,s){i=Ti(s,i),i=Ff(e.stateNode,i,2),e=Ya(e,i,2),e!==null&&(Pt(e,2),Ki(e))}function Qe(e,i,s){if(e.tag===3)Ug(e,e,s);else for(;i!==null;){if(i.tag===3){Ug(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&($a===null||!$a.has(o))){e=Ti(s,e),s=N0(2),o=Ya(i,s,2),o!==null&&(L0(s,o,i,e),Pt(o,2),Ki(o));break}}i=i.return}}function uh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Wy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(nh=!0,u.add(s),e=Ky.bind(null,e,i,s),i.then(e,e))}function Ky(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ln===e&&(Oe&s)===s&&(yn===4||yn===3&&(Oe&62914560)===Oe&&300>E()-hc?(Ye&2)===0&&br(e,0):ih|=s,Mr===Oe&&(Mr=0)),Ki(e)}function Ng(e,i){i===0&&(i=xt()),e=bs(e,i),e!==null&&(Pt(e,i),Ki(e))}function Jy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Ng(e,s)}function Qy(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Ng(e,s)}function $y(e,i){return Ne(e,i)}var xc=null,Ar=null,fh=!1,yc=!1,hh=!1,ns=0;function Ki(e){e!==Ar&&e.next===null&&(Ar===null?xc=Ar=e:Ar=Ar.next=e),yc=!0,fh||(fh=!0,eS())}function ko(e,i){if(!hh&&yc){hh=!0;do for(var s=!1,o=xc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ht(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,zg(o,h))}else h=Oe,h=_t(o,o===ln?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||wt(o,h)||(s=!0,zg(o,h));o=o.next}while(s);hh=!1}}function tS(){Lg()}function Lg(){yc=fh=!1;var e=0;ns!==0&&fS()&&(e=ns);for(var i=E(),s=null,o=xc;o!==null;){var u=o.next,h=Og(o,i);h===0?(o.next=null,s===null?xc=u:s.next=u,u===null&&(Ar=s)):(s=o,(e!==0||(h&3)!==0)&&(yc=!0)),o=u}Dn!==0&&Dn!==5||ko(e),ns!==0&&(ns=0)}function Og(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ht(h),A=1<<x,F=u[x];F===-1?((A&s)===0||(A&o)!==0)&&(u[x]=K(A,i)):F<=i&&(e.expiredLanes|=A),h&=~A}if(i=ln,s=Oe,s=_t(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ce(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||wt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&Ce(o),je(s)){case 2:case 8:s=Mt;break;case 32:s=ft;break;case 268435456:s=Nt;break;default:s=ft}return o=Pg.bind(null,e),s=Ne(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&Ce(o),e.callbackPriority=2,e.callbackNode=null,2}function Pg(e,i){if(Dn!==0&&Dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(vc()&&e.callbackNode!==s)return null;var o=Oe;return o=_t(e,e===ln?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(gg(e,o,i),Og(e,E()),e.callbackNode!=null&&e.callbackNode===s?Pg.bind(null,e):null)}function zg(e,i){if(vc())return null;gg(e,i,!0)}function eS(){dS(function(){(Ye&6)!==0?Ne(dt,tS):Lg()})}function dh(){if(ns===0){var e=fr;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),ns=e}return ns}function Ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cl(""+e)}function Bg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function nS(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var h=Ig((u[Le]||null).action),x=o.submitter;x&&(i=(i=x[Le]||null)?Ig(i.formAction):x.getAttribute("formAction"),i!==null&&(h=i,x=null));var A=new Nl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ns!==0){var F=x?Bg(u,x):new FormData(u);Lf(s,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=x?Bg(u,x):new FormData(u),Lf(s,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var ph=0;ph<Zu.length;ph++){var mh=Zu[ph],iS=mh.toLowerCase(),aS=mh[0].toUpperCase()+mh.slice(1);Ii(iS,"on"+aS)}Ii(mm,"onAnimationEnd"),Ii(gm,"onAnimationIteration"),Ii(_m,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(yy,"onTransitionRun"),Ii(Sy,"onTransitionStart"),Ii(My,"onTransitionCancel"),Ii(vm,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Fg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var x=o.length-1;0<=x;x--){var A=o[x],F=A.instance,nt=A.currentTarget;if(A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(pt){Pl(pt)}u.currentTarget=null,h=F}else for(x=0;x<o.length;x++){if(A=o[x],F=A.instance,nt=A.currentTarget,A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(pt){Pl(pt)}u.currentTarget=null,h=F}}}}function Ue(e,i){var s=i[_n];s===void 0&&(s=i[_n]=new Set);var o=e+"__bubble";s.has(o)||(Hg(i,e,2,!1),s.add(o))}function gh(e,i,s){var o=0;i&&(o|=4),Hg(s,e,o,i)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Sc]){e[Sc]=!0,Y.forEach(function(s){s!=="selectionchange"&&(sS.has(s)||gh(s,!1,e),gh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Sc]||(i[Sc]=!0,gh("selectionchange",!1,i))}}function Hg(e,i,s,o){switch(m_(i)){case 2:var u=LS;break;case 8:u=OS;break;default:u=Nh}s=u.bind(null,i,s,e),u=void 0,!zu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function vh(e,i,s,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Ia(A),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=h=x;continue t}A=A.parentNode}}o=o.return}Wp(function(){var nt=h,pt=Ou(s),vt=[];t:{var rt=xm.get(e);if(rt!==void 0){var ct=Nl,Jt=e;switch(e){case"keypress":if(Dl(s)===0)break t;case"keydown":case"keyup":ct=Qx;break;case"focusin":Jt="focus",ct=Hu;break;case"focusout":Jt="blur",ct=Hu;break;case"beforeblur":case"afterblur":ct=Hu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ey;break;case mm:case gm:case _m:ct=kx;break;case vm:ct=iy;break;case"scroll":case"scrollend":ct=Bx;break;case"wheel":ct=sy;break;case"copy":case"cut":case"paste":ct=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Kp;break;case"toggle":case"beforetoggle":ct=oy}var ue=(i&4)!==0,nn=!ue&&(e==="scroll"||e==="scrollend"),j=ue?rt!==null?rt+"Capture":null:rt;ue=[];for(var k=nt,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||j===null||(mt=fo(k,j),mt!=null&&ue.push(Wo(k,mt,tt))),nn)break;k=k.return}0<ue.length&&(rt=new ct(rt,Jt,null,s,pt),vt.push({event:rt,listeners:ue}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&s!==Lu&&(Jt=s.relatedTarget||s.fromElement)&&(Ia(Jt)||Jt[pe]))break t;if((ct||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Jt=s.relatedTarget||s.toElement,ct=nt,Jt=Jt?Ia(Jt):null,Jt!==null&&(nn=c(Jt),ue=Jt.tag,Jt!==nn||ue!==5&&ue!==27&&ue!==6)&&(Jt=null)):(ct=null,Jt=nt),ct!==Jt)){if(ue=jp,mt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Kp,mt="onPointerLeave",j="onPointerEnter",k="pointer"),nn=ct==null?rt:ys(ct),tt=Jt==null?rt:ys(Jt),rt=new ue(mt,k+"leave",ct,s,pt),rt.target=nn,rt.relatedTarget=tt,mt=null,Ia(pt)===nt&&(ue=new ue(j,k+"enter",Jt,s,pt),ue.target=tt,ue.relatedTarget=nn,mt=ue),nn=mt,ct&&Jt)e:{for(ue=rS,j=ct,k=Jt,tt=0,mt=j;mt;mt=ue(mt))tt++;mt=0;for(var ae=k;ae;ae=ue(ae))mt++;for(;0<tt-mt;)j=ue(j),tt--;for(;0<mt-tt;)k=ue(k),mt--;for(;tt--;){if(j===k||k!==null&&j===k.alternate){ue=j;break e}j=ue(j),k=ue(k)}ue=null}else ue=null;ct!==null&&Gg(vt,rt,ct,ue,!1),Jt!==null&&nn!==null&&Gg(vt,nn,Jt,ue,!0)}}t:{if(rt=nt?ys(nt):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var ke=am;else if(nm(rt))if(sm)ke=_y;else{ke=my;var ne=py}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&zi(nt.elementType)&&(ke=am):ke=gy;if(ke&&(ke=ke(e,nt))){im(vt,ke,s,pt);break t}ne&&ne(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Hn(rt,"number",rt.value)}switch(ne=nt?ys(nt):window,e){case"focusin":(nm(ne)||ne.contentEditable==="true")&&(ir=ne,qu=nt,yo=null);break;case"focusout":yo=qu=ir=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,dm(vt,s,pt);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":dm(vt,s,pt)}var Se;if(Vu)t:{switch(e){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else nr?tm(e,s)&&(Pe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Pe="onCompositionStart");Pe&&(Jp&&s.locale!=="ko"&&(nr||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&nr&&(Se=qp()):(Ha=pt,Iu="value"in Ha?Ha.value:Ha.textContent,nr=!0)),ne=Mc(nt,Pe),0<ne.length&&(Pe=new Zp(Pe,e,null,s,pt),vt.push({event:Pe,listeners:ne}),Se?Pe.data=Se:(Se=em(s),Se!==null&&(Pe.data=Se)))),(Se=cy?uy(e,s):fy(e,s))&&(Pe=Mc(nt,"onBeforeInput"),0<Pe.length&&(ne=new Zp("onBeforeInput","beforeinput",null,s,pt),vt.push({event:ne,listeners:Pe}),ne.data=Se)),nS(vt,e,nt,s,pt)}Fg(vt,i)})}function Wo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Mc(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=fo(e,s),u!=null&&o.unshift(Wo(e,u,h)),u=fo(e,i),u!=null&&o.push(Wo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function rS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gg(e,i,s,o,u){for(var h=i._reactName,x=[];s!==null&&s!==o;){var A=s,F=A.alternate,nt=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||nt===null||(F=nt,u?(nt=fo(s,h),nt!=null&&x.unshift(Wo(s,nt,F))):u||(nt=fo(s,h),nt!=null&&x.push(Wo(s,nt,F)))),s=s.return}x.length!==0&&e.push({event:i,listeners:x})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Vg(e){return(typeof e=="string"?e:""+e).replace(oS,`
`).replace(lS,"")}function kg(e,i){return i=Vg(i),Vg(e)===i}function en(e,i,s,o,u,h){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||wn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&wn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,s,o);break;case"style":$s(e,o,h);break;case"data":if(i!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Cl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&en(e,i,"name",u.name,u,null),en(e,i,"formEncType",u.formEncType,u,null),en(e,i,"formMethod",u.formMethod,u,null),en(e,i,"formTarget",u.formTarget,u,null)):(en(e,i,"encType",u.encType,u,null),en(e,i,"method",u.method,u,null),en(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Cl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=ca);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),te(e,"popover",o);break;case"xlinkActuate":ee(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ee(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ee(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ee(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ee(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ee(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ee(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ee(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ee(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":te(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=zx.get(s)||s,te(e,s,o))}}function xh(e,i,s,o,u,h){switch(s){case"style":$s(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?wn(e,o):(typeof o=="number"||typeof o=="bigint")&&wn(e,""+o);break;case"onScroll":o!=null&&Ue("scroll",e);break;case"onScrollEnd":o!=null&&Ue("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),h=e[Le]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):te(e,s,o)}}}function Yn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var o=!1,u=!1,h;for(h in s)if(s.hasOwnProperty(h)){var x=s[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:en(e,i,h,x,s,null)}}u&&en(e,i,"srcSet",s.srcSet,s,null),o&&en(e,i,"src",s.src,s,null);return;case"input":Ue("invalid",e);var A=h=x=u=null,F=null,nt=null;for(o in s)if(s.hasOwnProperty(o)){var pt=s[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":x=pt;break;case"checked":F=pt;break;case"defaultChecked":nt=pt;break;case"value":h=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:en(e,i,o,pt,s,null)}}la(e,h,A,F,nt,x,u,!1);return;case"select":Ue("invalid",e),o=x=h=null;for(u in s)if(s.hasOwnProperty(u)&&(A=s[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:en(e,i,u,A,s,null)}i=h,s=x,e.multiple=!!o,i!=null?Ei(e,!!o,i,!1):s!=null&&Ei(e,!!o,s,!0);return;case"textarea":Ue("invalid",e),h=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(A=s[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:en(e,i,x,A,s,null)}Gn(e,o,u,h);return;case"option":for(F in s)s.hasOwnProperty(F)&&(o=s[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":en(e,i,F,o,s,null));return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(o=0;o<Xo.length;o++)Ue(Xo[o],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in s)if(s.hasOwnProperty(nt)&&(o=s[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:en(e,i,nt,o,s,null)}return;default:if(zi(i)){for(pt in s)s.hasOwnProperty(pt)&&(o=s[pt],o!==void 0&&xh(e,i,pt,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&en(e,i,A,o,s,null))}function cS(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,F=null,nt=null,pt=null;for(ct in s){var vt=s[ct];if(s.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":F=vt;default:o.hasOwnProperty(ct)||en(e,i,ct,null,o,vt)}}for(var rt in o){var ct=o[rt];if(vt=s[rt],o.hasOwnProperty(rt)&&(ct!=null||vt!=null))switch(rt){case"type":h=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":pt=ct;break;case"value":x=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==vt&&en(e,i,rt,ct,o,vt)}}Fn(e,x,A,F,nt,pt,h,u);return;case"select":ct=x=A=rt=null;for(h in s)if(F=s[h],s.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ct=F;default:o.hasOwnProperty(h)||en(e,i,h,null,o,F)}for(u in o)if(h=o[u],F=s[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":rt=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==F&&en(e,i,u,h,o,F)}i=A,s=x,o=ct,rt!=null?Ei(e,!!s,rt,!1):!!o!=!!s&&(i!=null?Ei(e,!!s,i,!0):Ei(e,!!s,s?[]:"",!1));return;case"textarea":ct=rt=null;for(A in s)if(u=s[A],s.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:en(e,i,A,null,o,u)}for(x in o)if(u=o[x],h=s[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&en(e,i,x,u,o,h)}Ke(e,rt,ct);return;case"option":for(var Jt in s)rt=s[Jt],s.hasOwnProperty(Jt)&&rt!=null&&!o.hasOwnProperty(Jt)&&(Jt==="selected"?e.selected=!1:en(e,i,Jt,null,o,rt));for(F in o)rt=o[F],ct=s[F],o.hasOwnProperty(F)&&rt!==ct&&(rt!=null||ct!=null)&&(F==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":en(e,i,F,rt,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)rt=s[ue],s.hasOwnProperty(ue)&&rt!=null&&!o.hasOwnProperty(ue)&&en(e,i,ue,null,o,rt);for(nt in o)if(rt=o[nt],ct=s[nt],o.hasOwnProperty(nt)&&rt!==ct&&(rt!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:en(e,i,nt,rt,o,ct)}return;default:if(zi(i)){for(var nn in s)rt=s[nn],s.hasOwnProperty(nn)&&rt!==void 0&&!o.hasOwnProperty(nn)&&xh(e,i,nn,void 0,o,rt);for(pt in o)rt=o[pt],ct=s[pt],!o.hasOwnProperty(pt)||rt===ct||rt===void 0&&ct===void 0||xh(e,i,pt,rt,o,ct);return}}for(var j in s)rt=s[j],s.hasOwnProperty(j)&&rt!=null&&!o.hasOwnProperty(j)&&en(e,i,j,null,o,rt);for(vt in o)rt=o[vt],ct=s[vt],!o.hasOwnProperty(vt)||rt===ct||rt==null&&ct==null||en(e,i,vt,rt,o,ct)}function Xg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&Xg(x)){for(x=0,A=u.responseEnd,o+=1;o<s.length;o++){var F=s[o],nt=F.startTime;if(nt>A)break;var pt=F.transferSize,vt=F.initiatorType;pt&&Xg(vt)&&(F=F.responseEnd,x+=pt*(F<A?1:(A-nt)/(F-nt)))}if(--o,i+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,Sh=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function Wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Mh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eh=null;function fS(){var e=window.event;return e&&e.type==="popstate"?e===Eh?!1:(Eh=e,!0):(Eh=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(e){return jg.resolve(null).then(e).catch(pS)}:Yg;function pS(e){setTimeout(function(){throw e})}function is(e){return e==="head"}function Zg(e,i){var s=i,o=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(u),Dr(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")qo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,qo(s);for(var h=s.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[xs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=x}}else s==="body"&&qo(e.ownerDocument.body);s=u}while(s);Dr(i)}function Kg(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function bh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":bh(s),uo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function mS(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[xs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function gS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Di(e.nextSibling),e===null))return null;return e}function Jg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Di(e.nextSibling),e===null))return null;return e}function Th(e){return e.data==="$?"||e.data==="$~"}function Ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _S(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Rh=null;function Qg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Di(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function $g(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function t_(e,i,s){switch(i=Ec(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function qo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);uo(e)}var Ui=new Map,e_=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=H.d;H.d={f:vS,r:xS,D:yS,C:SS,L:MS,m:ES,X:TS,S:bS,M:AS};function vS(){var e=Ta.f(),i=mc();return e||i}function xS(e){var i=Ba(e);i!==null&&i.tag===5&&i.type==="form"?v0(i):Ta.r(e)}var Rr=typeof document>"u"?null:document;function n_(e,i,s){var o=Rr;if(o&&typeof i=="string"&&i){var u=he(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),e_.has(u)||(e_.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Yn(i,"link",e),R(i),o.head.appendChild(i)))}}function yS(e){Ta.D(e),n_("dns-prefetch",e,null)}function SS(e,i){Ta.C(e,i),n_("preconnect",e,i)}function MS(e,i,s){Ta.L(e,i,s);var o=Rr;if(o&&e&&i){var u='link[rel="preload"][as="'+he(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+he(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+he(s.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var h=u;switch(i){case"style":h=Cr(e);break;case"script":h=wr(e)}Ui.has(h)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ui.set(h,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Yo(h))||i==="script"&&o.querySelector(jo(h))||(i=o.createElement("link"),Yn(i,"link",e),R(i),o.head.appendChild(i)))}}function ES(e,i){Ta.m(e,i);var s=Rr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=wr(e)}if(!Ui.has(h)&&(e=_({rel:"modulepreload",href:e},i),Ui.set(h,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(jo(h)))return}o=s.createElement("link"),Yn(o,"link",e),R(o),s.head.appendChild(o)}}}function bS(e,i,s){Ta.S(e,i,s);var o=Rr;if(o&&e){var u=Fa(o).hoistableStyles,h=Cr(e);i=i||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Yo(h)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ui.get(h))&&Ch(e,s);var F=x=o.createElement("link");R(F),Yn(F,"link",e),F._p=new Promise(function(nt,pt){F.onload=nt,F.onerror=pt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Tc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function TS(e,i){Ta.X(e,i);var s=Rr;if(s&&e){var o=Fa(s).hoistableScripts,u=wr(e),h=o.get(u);h||(h=s.querySelector(jo(u)),h||(e=_({src:e,async:!0},i),(i=Ui.get(u))&&wh(e,i),h=s.createElement("script"),R(h),Yn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function AS(e,i){Ta.M(e,i);var s=Rr;if(s&&e){var o=Fa(s).hoistableScripts,u=wr(e),h=o.get(u);h||(h=s.querySelector(jo(u)),h||(e=_({src:e,async:!0,type:"module"},i),(i=Ui.get(u))&&wh(e,i),h=s.createElement("script"),R(h),Yn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function i_(e,i,s,o){var u=(u=$.current)?bc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Cr(s.href),s=Fa(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Cr(s.href);var h=Fa(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Yo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),Ui.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ui.set(e,s),h||RS(u,e,s,x.state))),i&&o===null)throw Error(a(528,""));return x}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=wr(s),s=Fa(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Cr(e){return'href="'+he(e)+'"'}function Yo(e){return'link[rel="stylesheet"]['+e+"]"}function a_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function RS(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Yn(i,"link",s),R(i),e.head.appendChild(i))}function wr(e){return'[src="'+he(e)+'"]'}function jo(e){return"script[async]"+e}function s_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+he(s.href)+'"]');if(o)return i.instance=o,R(o),o;var u=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Yn(o,"style",u),Tc(o,s.precedence,e),i.instance=o;case"stylesheet":u=Cr(s.href);var h=e.querySelector(Yo(u));if(h)return i.state.loading|=4,i.instance=h,R(h),h;o=a_(s),(u=Ui.get(u))&&Ch(o,u),h=(e.ownerDocument||e).createElement("link"),R(h);var x=h;return x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),Yn(h,"link",o),i.state.loading|=4,Tc(h,s.precedence,e),i.instance=h;case"script":return h=wr(s.src),(u=e.querySelector(jo(h)))?(i.instance=u,R(u),u):(o=s,(u=Ui.get(h))&&(o=_({},s),wh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Yn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Tc(o,s.precedence,e));return i.instance}function Tc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===i)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function wh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ac=null;function r_(e,i,s){if(Ac===null){var o=new Map,u=Ac=new Map;u.set(s,o)}else u=Ac,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var h=s[u];if(!(h[xs]||h[Ae]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(i)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function o_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function CS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function l_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wS(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Cr(o.href),h=i.querySelector(Yo(u));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Rc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=h,R(h);return}h=i.ownerDocument||i,o=a_(o),(u=Ui.get(u))&&Ch(o,u),h=h.createElement("link"),R(h);var x=h;x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),Yn(h,"link",o),s.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Rc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Dh=0;function DS(e,i){return e.stylesheets&&e.count===0&&wc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&wc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&Dh===0&&(Dh=62500*uS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Dh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cc=null;function wc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cc=new Map,i.forEach(US,e),Cc=null,Rc.call(e))}function US(e,i){if(!(i.state.loading&4)){var s=Cc.get(e);if(s)var o=s.get(null);else{s=new Map,Cc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),h=s.get(x)||o,h===o&&s.set(null,u),s.set(x,u),this.count++,o=Rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Zo={$$typeof:U,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function NS(e,i,s,o,u,h,x,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.hiddenUpdates=yt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function c_(e,i,s,o,u,h,x,A,F,nt,pt,vt){return e=new NS(e,i,s,x,F,nt,pt,vt,A),i=1,h===!0&&(i|=24),h=pi(3,null,null,i),e.current=h,h.stateNode=e,i=cf(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:i},df(h),e}function u_(e){return e?(e=rr,e):rr}function f_(e,i,s,o,u,h){u=u_(u),o.context===null?o.context=u:o.pendingContext=u,o=qa(i),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=Ya(e,o,i),s!==null&&(ui(s,e,i),Ro(s,e,i))}function h_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Uh(e,i){h_(e,i),(e=e.alternate)&&h_(e,i)}function d_(e){if(e.tag===13||e.tag===31){var i=bs(e,67108864);i!==null&&ui(i,e,67108864),Uh(e,67108864)}}function p_(e){if(e.tag===13||e.tag===31){var i=xi();i=we(i);var s=bs(e,i);s!==null&&ui(s,e,i),Uh(e,i)}}var Dc=!0;function LS(e,i,s,o){var u=P.T;P.T=null;var h=H.p;try{H.p=2,Nh(e,i,s,o)}finally{H.p=h,P.T=u}}function OS(e,i,s,o){var u=P.T;P.T=null;var h=H.p;try{H.p=8,Nh(e,i,s,o)}finally{H.p=h,P.T=u}}function Nh(e,i,s,o){if(Dc){var u=Lh(o);if(u===null)vh(e,i,o,Uc,s),g_(e,o);else if(zS(u,e,i,s,o))o.stopPropagation();else if(g_(e,o),i&4&&-1<PS.indexOf(e)){for(;u!==null;){var h=Ba(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=bt(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var F=1<<31-Ht(x);A.entanglements[1]|=F,x&=~F}Ki(h),(Ye&6)===0&&(dc=E()+500,ko(0))}}break;case 31:case 13:A=bs(h,2),A!==null&&ui(A,h,2),mc(),Uh(h,2)}if(h=Lh(o),h===null&&vh(e,i,o,Uc,s),h===u)break;u=h}u!==null&&o.stopPropagation()}else vh(e,i,o,null,s)}}function Lh(e){return e=Ou(e),Oh(e)}var Uc=null;function Oh(e){if(Uc=null,e=Ia(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===31){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Uc=e,null}function m_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case Mt:return 8;case ft:case $t:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var Ph=!1,as=null,ss=null,rs=null,Ko=new Map,Jo=new Map,os=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(e,i){switch(e){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":Ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(i.pointerId)}}function Qo(e,i,s,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Ba(i),i!==null&&d_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function zS(e,i,s,o,u){switch(i){case"focusin":return as=Qo(as,e,i,s,o,u),!0;case"dragenter":return ss=Qo(ss,e,i,s,o,u),!0;case"mouseover":return rs=Qo(rs,e,i,s,o,u),!0;case"pointerover":var h=u.pointerId;return Ko.set(h,Qo(Ko.get(h)||null,e,i,s,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Jo.set(h,Qo(Jo.get(h)||null,e,i,s,o,u)),!0}return!1}function __(e){var i=Ia(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,Ge(e.priority,function(){p_(s)});return}}else if(i===31){if(i=d(s),i!==null){e.blockedOn=i,Ge(e.priority,function(){p_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Lh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Lu=o,s.target.dispatchEvent(o),Lu=null}else return i=Ba(s),i!==null&&d_(i),e.blockedOn=s,!1;i.shift()}return!0}function v_(e,i,s){Nc(e)&&s.delete(i)}function IS(){Ph=!1,as!==null&&Nc(as)&&(as=null),ss!==null&&Nc(ss)&&(ss=null),rs!==null&&Nc(rs)&&(rs=null),Ko.forEach(v_),Jo.forEach(v_)}function Lc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ph||(Ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,IS)))}var Oc=null;function x_(e){Oc!==e&&(Oc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Oc===e&&(Oc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Oh(o||s)===null)continue;break}var h=Ba(s);h!==null&&(e.splice(i,3),i-=3,Lf(h,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Dr(e){function i(F){return Lc(F,e)}as!==null&&Lc(as,e),ss!==null&&Lc(ss,e),rs!==null&&Lc(rs,e),Ko.forEach(i),Jo.forEach(i);for(var s=0;s<os.length;s++){var o=os[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<os.length&&(s=os[0],s.blockedOn===null);)__(s),s.blockedOn===null&&os.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],h=s[o+1],x=u[Le]||null;if(typeof h=="function")x||x_(s);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Le]||null)A=x.formAction;else if(Oh(u)!==null)continue}else A=x.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),x_(s)}}}function y_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function zh(e){this._internalRoot=e}Pc.prototype.render=zh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=xi();f_(s,o,e,i,null,null)},Pc.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;f_(e.current,2,null,e,null,null),mc(),i[pe]=null}};function Pc(e){this._internalRoot=e}Pc.prototype.unstable_scheduleHydration=function(e){if(e){var i=He();e={blockedOn:null,target:e,priority:i};for(var s=0;s<os.length&&i!==0&&i<os[s].priority;s++);os.splice(s,0,e),s===0&&__(e)}};var S_=t.version;if(S_!=="19.2.4")throw Error(a(527,S_,"19.2.4"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var BS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{Tt=zc.inject(BS),At=zc}catch{}}return tl.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",u=C0,h=w0,x=D0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=c_(e,1,!1,null,null,s,o,null,u,h,x,y_),e[pe]=i.current,_h(e),new zh(i)},tl.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,u="",h=C0,x=w0,A=D0,F=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(F=s.formState)),i=c_(e,1,!0,i,s??null,o,u,F,h,x,A,y_),i.context=u_(null),s=i.current,o=xi(),o=we(o),u=qa(o),u.callback=null,Ya(s,u,o),s=o,i.current.lanes=s,Pt(i,s),Ki(i),e[pe]=i.current,_h(e),new Pc(i)},tl.version="19.2.4",tl}var U_;function jS(){if(U_)return Fh.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Fh.exports=YS(),Fh.exports}var ZS=jS();const Wv=(...r)=>r.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();const KS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const JS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase());const N_=r=>{const t=JS(r);return t.charAt(0).toUpperCase()+t.slice(1)};var QS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $S=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const tM=re.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:f,...d},m)=>re.createElement("svg",{ref:m,...QS,width:t,height:t,stroke:r,strokeWidth:a?Number(n)*24/Number(t):n,className:Wv("lucide",l),...!c&&!$S(d)&&{"aria-hidden":"true"},...d},[...f.map(([p,g])=>re.createElement(p,g)),...Array.isArray(c)?c:[c]]));const ei=(r,t)=>{const n=re.forwardRef(({className:a,...l},c)=>re.createElement(tM,{ref:c,iconNode:t,className:Wv(`lucide-${KS(N_(r))}`,`lucide-${r}`,a),...l}));return n.displayName=N_(r),n};const eM=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],nM=ei("arrow-down-to-line",eM);const iM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],aM=ei("book-open",iM);const sM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],rM=ei("circle-plus",sM);const oM=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],lM=ei("eye",oM);const cM=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],uM=ei("hand",cM);const fM=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],L_=ei("layers",fM);const hM=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],dM=ei("menu",hM);const pM=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],mM=ei("pen-line",pM);const gM=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],_M=ei("pen-tool",gM);const vM=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xM=ei("rotate-ccw",vM);const yM=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],SM=ei("save",yM);const MM=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],EM=ei("shield",MM);const bM=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],TM=ei("swords",bM);const AM=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],RM=ei("user-cog",AM);const CM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],O_=ei("x",CM);const wM=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],DM=ei("zap",wM);const Ap="182",Qr={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},UM=0,P_=1,NM=2,du=1,LM=2,hl=3,vs=0,hi=1,ki=2,Na=0,$r=1,z_=2,I_=3,B_=4,OM=5,ks=100,PM=101,zM=102,IM=103,BM=104,FM=200,HM=201,GM=202,VM=203,Ad=204,Rd=205,kM=206,XM=207,WM=208,qM=209,YM=210,jM=211,ZM=212,KM=213,JM=214,Cd=0,wd=1,Dd=2,eo=3,Ud=4,Nd=5,Ld=6,Od=7,qv=0,QM=1,$M=2,na=0,Yv=1,jv=2,Zv=3,Kv=4,Jv=5,Qv=6,$v=7,tx=300,js=301,no=302,Pd=303,zd=304,Cu=306,Id=1e3,Ua=1001,Bd=1002,Zn=1003,tE=1004,Ic=1005,$n=1006,kh=1007,Ws=1008,Mi=1009,ex=1010,nx=1011,yl=1012,Rp=1013,aa=1014,ta=1015,Pa=1016,Cp=1017,wp=1018,Sl=1020,ix=35902,ax=35899,sx=1021,rx=1022,Xi=1023,za=1026,qs=1027,ox=1028,Dp=1029,io=1030,Up=1031,Np=1033,pu=33776,mu=33777,gu=33778,_u=33779,Fd=35840,Hd=35841,Gd=35842,Vd=35843,kd=36196,Xd=37492,Wd=37496,qd=37488,Yd=37489,jd=37490,Zd=37491,Kd=37808,Jd=37809,Qd=37810,$d=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,hp=36495,dp=36283,pp=36284,mp=36285,gp=36286,eE=3200,lx=0,nE=1,gs="",Li="srgb",ao="srgb-linear",Su="linear",$e="srgb",Ur=7680,F_=519,iE=512,aE=513,sE=514,Lp=515,rE=516,oE=517,Op=518,lE=519,_p=35044,H_="300 es",ea=2e3,Mu=2001;function cx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cE(){const r=Eu("canvas");return r.style.display="block",r}const G_={};function bu(...r){const t="THREE."+r.shift();console.log(t,...r)}function fe(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Be(...r){const t="THREE."+r.shift();console.error(t,...r)}function Ml(...r){const t=r.join(" ");t in G_||(G_[t]=!0,fe(...r))}function uE(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Js{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,vp=180/Math.PI;function La(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]+"-"+Jn[t&255]+Jn[t>>8&255]+"-"+Jn[t>>16&15|64]+Jn[t>>24&255]+"-"+Jn[n&63|128]+Jn[n>>8&255]+"-"+Jn[n>>16&255]+Jn[n>>24&255]+Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]).toLowerCase()}function Re(r,t,n){return Math.max(t,Math.min(n,r))}function fE(r,t){return(r%t+t)%t}function Xh(r,t,n){return(1-n)*r+n*t}function $i(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function an(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hE={DEG2RAD:vu};class Bt{constructor(t=0,n=0){Bt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,f,d){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3],y=c[f+0],S=c[f+1],b=c[f+2],T=c[f+3];if(d<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(d>=1){t[n+0]=y,t[n+1]=S,t[n+2]=b,t[n+3]=T;return}if(_!==T||m!==y||p!==S||g!==b){let M=m*y+p*S+g*b+_*T;M<0&&(y=-y,S=-S,b=-b,T=-T,M=-M);let v=1-d;if(M<.9995){const O=Math.acos(M),U=Math.sin(O);v=Math.sin(v*O)/U,d=Math.sin(d*O)/U,m=m*v+y*d,p=p*v+S*d,g=g*v+b*d,_=_*v+T*d}else{m=m*v+y*d,p=p*v+S*d,g=g*v+b*d,_=_*v+T*d;const O=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=O,p*=O,g*=O,_*=O}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,l,c,f){const d=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=c[f],y=c[f+1],S=c[f+2],b=c[f+3];return t[n]=d*b+g*_+m*S-p*y,t[n+1]=m*b+g*y+p*_-d*S,t[n+2]=p*b+g*S+d*y-m*_,t[n+3]=g*b-d*_-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(l/2),_=d(c/2),y=m(a/2),S=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=y*g*_+p*S*b,this._y=p*S*_-y*g*b,this._z=p*g*b+y*S*_,this._w=p*g*_-y*S*b;break;case"YXZ":this._x=y*g*_+p*S*b,this._y=p*S*_-y*g*b,this._z=p*g*b-y*S*_,this._w=p*g*_+y*S*b;break;case"ZXY":this._x=y*g*_-p*S*b,this._y=p*S*_+y*g*b,this._z=p*g*b+y*S*_,this._w=p*g*_-y*S*b;break;case"ZYX":this._x=y*g*_-p*S*b,this._y=p*S*_+y*g*b,this._z=p*g*b-y*S*_,this._w=p*g*_+y*S*b;break;case"YZX":this._x=y*g*_+p*S*b,this._y=p*S*_+y*g*b,this._z=p*g*b-y*S*_,this._w=p*g*_-y*S*b;break;case"XZY":this._x=y*g*_-p*S*b,this._y=p*S*_-y*g*b,this._z=p*g*b+y*S*_,this._w=p*g*_+y*S*b;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],f=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],y=a+d+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(a>d&&a>_){const S=2*Math.sqrt(1+a-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-a-_);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-a-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,f=t._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-a*p,this._z=c*g+f*p+a*m-l*d,this._w=f*g-a*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(a=-a,l=-l,c=-c,f=-f,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,a=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(V_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*a),g=2*(d*n-c*l),_=2*(c*a-f*n);return this.x=n+m*p+f*_-d*g,this.y=a+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,f=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*f-a*m,this.z=a*d-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Wh.copy(this).projectOnVector(t),this.sub(Wh)}reflect(t){return this.sub(Wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new X,V_=new Zs;class Me{constructor(t,n,a,l,c,f,d,m,p){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,d,m,p)}set(t,n,a,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],y=a[2],S=a[5],b=a[8],T=l[0],M=l[3],v=l[6],O=l[1],U=l[4],D=l[7],z=l[2],B=l[5],I=l[8];return c[0]=f*T+d*O+m*z,c[3]=f*M+d*U+m*B,c[6]=f*v+d*D+m*I,c[1]=p*T+g*O+_*z,c[4]=p*M+g*U+_*B,c[7]=p*v+g*D+_*I,c[2]=y*T+S*O+b*z,c[5]=y*M+S*U+b*B,c[8]=y*v+S*D+b*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*d*p-a*c*g+a*d*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,y=d*m-g*c,S=p*c-f*m,b=n*_+a*y+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*a)*T,t[2]=(d*a-l*f)*T,t[3]=y*T,t[4]=(g*n-l*m)*T,t[5]=(l*c-d*n)*T,t[6]=S*T,t[7]=(a*m-p*n)*T,t[8]=(f*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(qh.makeScale(t,n)),this}rotate(t){return this.premultiply(qh.makeRotation(-t)),this}translate(t,n){return this.premultiply(qh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qh=new Me,k_=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X_=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const r={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===$e&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===$e&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===gs?Su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[ao]:{primaries:t,whitePoint:a,transfer:Su,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:a,transfer:$e,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),r}const Ve=dE();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nr;class pE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Nr===void 0&&(Nr=Eu("canvas")),Nr.width=t.width,Nr.height=t.height;const l=Nr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=Nr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Eu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Oa(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Oa(n[a]/255)*255):n[a]=Oa(n[a]);return{data:n,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mE=0;class Pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=La(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Yh(l[f].image)):c.push(Yh(l[f]))}else c=Yh(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function Yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let gE=0;const jh=new X;class ti extends Js{constructor(t=ti.DEFAULT_IMAGE,n=ti.DEFAULT_MAPPING,a=Ua,l=Ua,c=$n,f=Ws,d=Xi,m=Mi,p=ti.DEFAULT_ANISOTROPY,g=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=La(),this.name="",this.source=new Pp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){fe(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Id:t.x=t.x-Math.floor(t.x);break;case Ua:t.x=t.x<0?0:1;break;case Bd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Id:t.y=t.y-Math.floor(t.y);break;case Ua:t.y=t.y<0?0:1;break;case Bd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=tx;ti.DEFAULT_ANISOTROPY=1;class Sn{constructor(t=0,n=0,a=0,l=1){Sn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],S=m[5],b=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,D=(S+1)/2,z=(v+1)/2,B=(g+y)/4,I=(_+T)/4,Z=(b+M)/4;return U>D&&U>z?U<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(U),l=B/a,c=I/a):D>z?D<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),a=B/l,c=Z/l):z<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),a=I/c,l=Z/c),this.set(a,l,c,n),this}let O=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(y-g)*(y-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(_-T)/O,this.z=(y-g)/O,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this.w=Re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this.w=Re(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _E extends Js{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Sn(0,0,t,n),this.scissorTest=!1,this.viewport=new Sn(0,0,t,n);const l={width:t,height:n,depth:a.depth},c=new ti(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Pp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends _E{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class ux extends ti{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends ti{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rl{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Hi):Hi.fromBufferAttribute(c,f),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Bc.copy(a.boundingBox)),Bc.applyMatrix4(t.matrixWorld),this.union(Bc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(el),Fc.subVectors(this.max,el),Lr.subVectors(t.a,el),Or.subVectors(t.b,el),Pr.subVectors(t.c,el),cs.subVectors(Or,Lr),us.subVectors(Pr,Or),Is.subVectors(Lr,Pr);let n=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Is.z,Is.y,cs.z,0,-cs.x,us.z,0,-us.x,Is.z,0,-Is.x,-cs.y,cs.x,0,-us.y,us.x,0,-Is.y,Is.x,0];return!Zh(n,Lr,Or,Pr,Fc)||(n=[1,0,0,0,1,0,0,0,1],!Zh(n,Lr,Or,Pr,Fc))?!1:(Hc.crossVectors(cs,us),n=[Hc.x,Hc.y,Hc.z],Zh(n,Lr,Or,Pr,Fc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Aa=[new X,new X,new X,new X,new X,new X,new X,new X],Hi=new X,Bc=new Rl,Lr=new X,Or=new X,Pr=new X,cs=new X,us=new X,Is=new X,el=new X,Fc=new X,Hc=new X,Bs=new X;function Zh(r,t,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){Bs.fromArray(r,c);const d=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),m=t.dot(Bs),p=n.dot(Bs),g=a.dot(Bs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const xE=new Rl,nl=new X,Kh=new X;class wu{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):xE.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nl.subVectors(t,this.center);const n=nl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(nl,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nl.copy(t.center).add(Kh)),this.expandByPoint(nl.copy(t.center).sub(Kh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ra=new X,Jh=new X,Gc=new X,fs=new X,Qh=new X,Vc=new X,$h=new X;class Du{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,n),Ra.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){Jh.copy(t).add(n).multiplyScalar(.5),Gc.copy(n).sub(t).normalize(),fs.copy(this.origin).sub(Jh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Gc),d=fs.dot(this.direction),m=-fs.dot(Gc),p=fs.lengthSq(),g=Math.abs(1-f*f);let _,y,S,b;if(g>0)if(_=f*m-d,y=f*d-m,b=c*g,_>=0)if(y>=-b)if(y<=b){const T=1/g;_*=T,y*=T,S=_*(_+f*y+2*d)+y*(f*_+y+2*m)+p}else y=c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*m)+p;else y<=-b?(_=Math.max(0,-(-f*c+d)),y=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p):y<=b?(_=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(_=Math.max(0,-(f*c+d)),y=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p);else y=f>0?-c:c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Jh).addScaledVector(Gc,y),S}intersectSphere(t,n){Ra.subVectors(t.center,this.origin);const a=Ra.dot(this.direction),l=Ra.dot(Ra)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(a=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(a=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,n,a,l,c){Qh.subVectors(n,t),Vc.subVectors(a,t),$h.crossVectors(Qh,Vc);let f=this.direction.dot($h),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fs.subVectors(this.origin,t);const m=d*this.direction.dot(Vc.crossVectors(fs,Vc));if(m<0)return null;const p=d*this.direction.dot(Qh.cross(fs));if(p<0||m+p>f)return null;const g=-d*fs.dot($h);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,n,a,l,c,f,d,m,p,g,_,y,S,b,T,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,d,m,p,g,_,y,S,b,T,M)}set(t,n,a,l,c,f,d,m,p,g,_,y,S,b,T,M){const v=this.elements;return v[0]=t,v[4]=n,v[8]=a,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=y,v[3]=S,v[7]=b,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,l=1/zr.setFromMatrixColumn(t,0).length(),c=1/zr.setFromMatrixColumn(t,1).length(),f=1/zr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=f*g,S=f*_,b=d*g,T=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=S+b*p,n[5]=y-T*p,n[9]=-d*m,n[2]=T-y*p,n[6]=b+S*p,n[10]=f*m}else if(t.order==="YXZ"){const y=m*g,S=m*_,b=p*g,T=p*_;n[0]=y+T*d,n[4]=b*d-S,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=S*d-b,n[6]=T+y*d,n[10]=f*m}else if(t.order==="ZXY"){const y=m*g,S=m*_,b=p*g,T=p*_;n[0]=y-T*d,n[4]=-f*_,n[8]=b+S*d,n[1]=S+b*d,n[5]=f*g,n[9]=T-y*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(t.order==="ZYX"){const y=f*g,S=f*_,b=d*g,T=d*_;n[0]=m*g,n[4]=b*p-S,n[8]=y*p+T,n[1]=m*_,n[5]=T*p+y,n[9]=S*p-b,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(t.order==="YZX"){const y=f*m,S=f*p,b=d*m,T=d*p;n[0]=m*g,n[4]=T-y*_,n[8]=b*_+S,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-p*g,n[6]=S*_+b,n[10]=y-T*_}else if(t.order==="XZY"){const y=f*m,S=f*p,b=d*m,T=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=y*_+T,n[5]=f*g,n[9]=S*_-b,n[2]=b*_-S,n[6]=d*g,n[10]=T*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yE,t,SE)}lookAt(t,n,a){const l=this.elements;return yi.subVectors(t,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),hs.crossVectors(a,yi),hs.lengthSq()===0&&(Math.abs(a.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),hs.crossVectors(a,yi)),hs.normalize(),kc.crossVectors(yi,hs),l[0]=hs.x,l[4]=kc.x,l[8]=yi.x,l[1]=hs.y,l[5]=kc.y,l[9]=yi.y,l[2]=hs.z,l[6]=kc.z,l[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],y=a[9],S=a[13],b=a[2],T=a[6],M=a[10],v=a[14],O=a[3],U=a[7],D=a[11],z=a[15],B=l[0],I=l[4],Z=l[8],C=l[12],w=l[1],V=l[5],Q=l[9],et=l[13],ht=l[2],ut=l[6],P=l[10],H=l[14],at=l[3],Et=l[7],St=l[11],L=l[15];return c[0]=f*B+d*w+m*ht+p*at,c[4]=f*I+d*V+m*ut+p*Et,c[8]=f*Z+d*Q+m*P+p*St,c[12]=f*C+d*et+m*H+p*L,c[1]=g*B+_*w+y*ht+S*at,c[5]=g*I+_*V+y*ut+S*Et,c[9]=g*Z+_*Q+y*P+S*St,c[13]=g*C+_*et+y*H+S*L,c[2]=b*B+T*w+M*ht+v*at,c[6]=b*I+T*V+M*ut+v*Et,c[10]=b*Z+T*Q+M*P+v*St,c[14]=b*C+T*et+M*H+v*L,c[3]=O*B+U*w+D*ht+z*at,c[7]=O*I+U*V+D*ut+z*Et,c[11]=O*Z+U*Q+D*P+z*St,c[15]=O*C+U*et+D*H+z*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],S=t[14],b=t[3],T=t[7],M=t[11],v=t[15],O=m*S-p*y,U=d*S-p*_,D=d*y-m*_,z=f*S-p*g,B=f*y-m*g,I=f*_-d*g;return n*(T*O-M*U+v*D)-a*(b*O-M*z+v*B)+l*(b*U-T*z+v*I)-c*(b*D-T*B+M*I)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],S=t[11],b=t[12],T=t[13],M=t[14],v=t[15],O=_*M*p-T*y*p+T*m*S-d*M*S-_*m*v+d*y*v,U=b*y*p-g*M*p-b*m*S+f*M*S+g*m*v-f*y*v,D=g*T*p-b*_*p+b*d*S-f*T*S-g*d*v+f*_*v,z=b*_*m-g*T*m-b*d*y+f*T*y+g*d*M-f*_*M,B=n*O+a*U+l*D+c*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=O*I,t[1]=(T*y*c-_*M*c-T*l*S+a*M*S+_*l*v-a*y*v)*I,t[2]=(d*M*c-T*m*c+T*l*p-a*M*p-d*l*v+a*m*v)*I,t[3]=(_*m*c-d*y*c-_*l*p+a*y*p+d*l*S-a*m*S)*I,t[4]=U*I,t[5]=(g*M*c-b*y*c+b*l*S-n*M*S-g*l*v+n*y*v)*I,t[6]=(b*m*c-f*M*c-b*l*p+n*M*p+f*l*v-n*m*v)*I,t[7]=(f*y*c-g*m*c+g*l*p-n*y*p-f*l*S+n*m*S)*I,t[8]=D*I,t[9]=(b*_*c-g*T*c-b*a*S+n*T*S+g*a*v-n*_*v)*I,t[10]=(f*T*c-b*d*c+b*a*p-n*T*p-f*a*v+n*d*v)*I,t[11]=(g*d*c-f*_*c-g*a*p+n*_*p+f*a*S-n*d*S)*I,t[12]=z*I,t[13]=(g*T*l-b*_*l+b*a*y-n*T*y-g*a*M+n*_*M)*I,t[14]=(b*d*l-f*T*l-b*a*m+n*T*m+f*a*M-n*d*M)*I,t[15]=(f*_*l-g*d*l+g*a*m-n*_*m-f*a*y+n*d*y)*I,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+a,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+a,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,f=n._y,d=n._z,m=n._w,p=c+c,g=f+f,_=d+d,y=c*p,S=c*g,b=c*_,T=f*g,M=f*_,v=d*_,O=m*p,U=m*g,D=m*_,z=a.x,B=a.y,I=a.z;return l[0]=(1-(T+v))*z,l[1]=(S+D)*z,l[2]=(b-U)*z,l[3]=0,l[4]=(S-D)*B,l[5]=(1-(y+v))*B,l[6]=(M+O)*B,l[7]=0,l[8]=(b+U)*I,l[9]=(M-O)*I,l[10]=(1-(y+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=zr.set(l[0],l[1],l[2]).length();const f=zr.set(l[4],l[5],l[6]).length(),d=zr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Gi.copy(this);const p=1/c,g=1/f,_=1/d;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,n.setFromRotationMatrix(Gi),a.x=c,a.y=f,a.z=d,this}makePerspective(t,n,a,l,c,f,d=ea,m=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(a-l),y=(n+t)/(n-t),S=(a+l)/(a-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(d===ea)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===Mu)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,f,d=ea,m=!1){const p=this.elements,g=2/(n-t),_=2/(a-l),y=-(n+t)/(n-t),S=-(a+l)/(a-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(d===ea)b=-2/(f-c),T=-(f+c)/(f-c);else if(d===Mu)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const zr=new X,Gi=new un,yE=new X(0,0,0),SE=new X(1,1,1),hs=new X,kc=new X,yi=new X,W_=new un,q_=new Zs;class sa{constructor(t=0,n=0,a=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],y=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return W_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(W_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return q_.setFromEuler(this),this.setFromQuaternion(q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class zp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ME=0;const Y_=new X,Ir=new Zs,Ca=new un,Xc=new X,il=new X,EE=new X,bE=new Zs,j_=new X(1,0,0),Z_=new X(0,1,0),K_=new X(0,0,1),J_={type:"added"},TE={type:"removed"},Br={type:"childadded",child:null},td={type:"childremoved",child:null};class Bn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new X,n=new sa,a=new Zs,l=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new Me}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(j_,t)}rotateY(t){return this.rotateOnAxis(Z_,t)}rotateZ(t){return this.rotateOnAxis(K_,t)}translateOnAxis(t,n){return Y_.copy(t).applyQuaternion(this.quaternion),this.position.add(Y_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(j_,t)}translateY(t){return this.translateOnAxis(Z_,t)}translateZ(t){return this.translateOnAxis(K_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Xc.copy(t):Xc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(il,Xc,this.up):Ca.lookAt(Xc,il,this.up),this.quaternion.setFromRotationMatrix(Ca),l&&(Ca.extractRotation(l.matrixWorld),Ir.setFromRotationMatrix(Ca),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),Br.child=t,this.dispatchEvent(Br),Br.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(TE),td.child=t,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),Br.child=t,this.dispatchEvent(Br),Br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,t,EE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,bE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(n){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),y=f(t.skeletons),S=f(t.animations),b=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),y.length>0&&(a.skeletons=y),S.length>0&&(a.animations=S),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new X(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new X,wa=new X,ed=new X,Da=new X,Fr=new X,Hr=new X,Q_=new X,nd=new X,id=new X,ad=new X,sd=new Sn,rd=new Sn,od=new Sn;class Pi{constructor(t=new X,n=new X,a=new X){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Vi.subVectors(t,n),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Vi.subVectors(l,n),wa.subVectors(a,n),ed.subVectors(t,n);const f=Vi.dot(Vi),d=Vi.dot(wa),m=Vi.dot(ed),p=wa.dot(wa),g=wa.dot(ed),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,S=(p*m-d*g)*y,b=(f*g-d*m)*y;return c.set(1-S-b,b,S)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(t,n,a,l,c,f,d,m){return this.getBarycoord(t,n,a,l,Da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Da.x),m.addScaledVector(f,Da.y),m.addScaledVector(d,Da.z),m)}static getInterpolatedAttribute(t,n,a,l,c,f){return sd.setScalar(0),rd.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(t,n),rd.fromBufferAttribute(t,a),od.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(sd,c.x),f.addScaledVector(rd,c.y),f.addScaledVector(od,c.z),f}static isFrontFacing(t,n,a,l){return Vi.subVectors(a,n),wa.subVectors(t,n),Vi.cross(wa).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Vi.cross(wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Pi.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let f,d;Fr.subVectors(l,a),Hr.subVectors(c,a),nd.subVectors(t,a);const m=Fr.dot(nd),p=Hr.dot(nd);if(m<=0&&p<=0)return n.copy(a);id.subVectors(t,l);const g=Fr.dot(id),_=Hr.dot(id);if(g>=0&&_<=g)return n.copy(l);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(Fr,f);ad.subVectors(t,c);const S=Fr.dot(ad),b=Hr.dot(ad);if(b>=0&&S<=b)return n.copy(c);const T=S*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),n.copy(a).addScaledVector(Hr,d);const M=g*b-S*_;if(M<=0&&_-g>=0&&S-b>=0)return Q_.subVectors(c,l),d=(_-g)/(_-g+(S-b)),n.copy(l).addScaledVector(Q_,d);const v=1/(M+T+y);return f=T*v,d=y*v,n.copy(a).addScaledVector(Fr,f).addScaledVector(Hr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function ld(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Fe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=Ve.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ve.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=Ve.workingColorSpace){if(t=fE(t,1),n=Re(n,0,1),a=Re(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=ld(f,c,t+1/3),this.g=ld(f,c,t),this.b=ld(f,c,t-1/3)}return Ve.colorSpaceToWorking(this,l),this}setStyle(t,n=Li){function a(c){c!==void 0&&parseFloat(c)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:fe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Li){const a=fx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return Ve.workingToColorSpace(Qn.copy(this),t),Math.round(Re(Qn.r*255,0,255))*65536+Math.round(Re(Qn.g*255,0,255))*256+Math.round(Re(Qn.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ve.workingColorSpace){Ve.workingToColorSpace(Qn.copy(this),n);const a=Qn.r,l=Qn.g,c=Qn.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case a:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-a)/_+2;break;case c:m=(a-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Ve.workingColorSpace){return Ve.workingToColorSpace(Qn.copy(this),n),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=Li){Ve.workingToColorSpace(Qn.copy(this),t);const n=Qn.r,a=Qn.g,l=Qn.b;return t!==Li?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+n,ds.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ds),t.getHSL(Wc);const a=Xh(ds.h,Wc.h,n),l=Xh(ds.s,Wc.s,n),c=Xh(ds.l,Wc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qn=new Fe;Fe.NAMES=fx;let AE=0;class Qs extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=La(),this.name="",this.type="Material",this.blending=$r,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){fe(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(a.blending=this.blending),this.side!==vs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ad&&(a.blendSrc=this.blendSrc),this.blendDst!==Rd&&(a.blendDst=this.blendDst),this.blendEquation!==ks&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kr extends Qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cn=new X,qc=new Bt;let RE=0;class Wi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=_p,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)qc.fromBufferAttribute(this,n),qc.applyMatrix3(t),this.setXY(n,qc.x,qc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix3(t),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix4(t),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyNormalMatrix(t),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.transformDirection(t),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=an(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$i(n,this.array)),n}setX(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$i(n,this.array)),n}setY(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$i(n,this.array)),n}setZ(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$i(n,this.array)),n}setW(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),a=an(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),a=an(a,this.array),l=an(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),a=an(a,this.array),l=an(l,this.array),c=an(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_p&&(t.usage=this.usage),t}}class hx extends Wi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class dx extends Wi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ln extends Wi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let CE=0;const Ni=new un,cd=new Bn,Gr=new X,Si=new Rl,al=new Rl,In=new X;class Nn extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cx(t)?dx:hx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Me().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,n,a){return Ni.makeTranslation(t,n,a),this.applyMatrix4(Ni),this}scale(t,n,a){return Ni.makeScale(t,n,a),this.applyMatrix4(Ni),this}lookAt(t){return cd.lookAt(t),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ln(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const a=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];al.setFromBufferAttribute(d),this.morphTargetsRelative?(In.addVectors(Si.min,al.min),Si.expandByPoint(In),In.addVectors(Si.max,al.max),Si.expandByPoint(In)):(Si.expandByPoint(al.min),Si.expandByPoint(al.max))}Si.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)In.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(In));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)In.fromBufferAttribute(d,p),m&&(Gr.fromBufferAttribute(t,p),In.add(Gr)),l=Math.max(l,a.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<a.count;Z++)d[Z]=new X,m[Z]=new X;const p=new X,g=new X,_=new X,y=new Bt,S=new Bt,b=new Bt,T=new X,M=new X;function v(Z,C,w){p.fromBufferAttribute(a,Z),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),y.fromBufferAttribute(c,Z),S.fromBufferAttribute(c,C),b.fromBufferAttribute(c,w),g.sub(p),_.sub(p),S.sub(y),b.sub(y);const V=1/(S.x*b.y-b.x*S.y);isFinite(V)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(V),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(V),d[Z].add(T),d[C].add(T),d[w].add(T),m[Z].add(M),m[C].add(M),m[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Z=0,C=O.length;Z<C;++Z){const w=O[Z],V=w.start,Q=w.count;for(let et=V,ht=V+Q;et<ht;et+=3)v(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const U=new X,D=new X,z=new X,B=new X;function I(Z){z.fromBufferAttribute(l,Z),B.copy(z);const C=d[Z];U.copy(C),U.sub(z.multiplyScalar(z.dot(C))).normalize(),D.crossVectors(B,C);const V=D.dot(m[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,V)}for(let Z=0,C=O.length;Z<C;++Z){const w=O[Z],V=w.start,Q=w.count;for(let et=V,ht=V+Q;et<ht;et+=3)I(t.getX(et+0)),I(t.getX(et+1)),I(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Wi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let y=0,S=a.count;y<S;y++)a.setXYZ(y,0,0,0);const l=new X,c=new X,f=new X,d=new X,m=new X,p=new X,g=new X,_=new X;if(t)for(let y=0,S=t.count;y<S;y+=3){const b=t.getX(y+0),T=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(a,b),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),d.add(g),m.add(g),p.add(g),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=n.count;y<S;y+=3)l.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)In.fromBufferAttribute(t,n),In.normalize(),t.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,y=new p.constructor(m.length*g);let S=0,b=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let v=0;v<g;v++)y[b++]=p[S++]}return new Wi(y,g,_)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const y=p[g],S=t(y,a);m.push(S)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $_=new un,Fs=new Du,Yc=new wu,tv=new X,jc=new X,Zc=new X,Kc=new X,ud=new X,Jc=new X,ev=new X,Qc=new X;class jn extends Bn{constructor(t=new Nn,n=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Jc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(ud.fromBufferAttribute(_,t),f?Jc.addScaledVector(ud,g):Jc.addScaledVector(ud.sub(n),g))}n.add(Jc)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(c),Fs.copy(t.ray).recast(t.near),!(Yc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Yc,tv)===null||Fs.origin.distanceToSquared(tv)>(t.far-t.near)**2))&&($_.copy(c).invert(),Fs.copy(t.ray).applyMatrix4($_),!(a.boundingBox!==null&&Fs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Fs)))}_computeIntersections(t,n,a){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=y.length;b<T;b++){const M=y[b],v=f[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=O,z=U;D<z;D+=3){const B=d.getX(D),I=d.getX(D+1),Z=d.getX(D+2);l=$c(this,v,t,a,p,g,_,B,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=b,v=T;M<v;M+=3){const O=d.getX(M),U=d.getX(M+1),D=d.getX(M+2);l=$c(this,f,t,a,p,g,_,O,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=y.length;b<T;b++){const M=y[b],v=f[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=O,z=U;D<z;D+=3){const B=D,I=D+1,Z=D+2;l=$c(this,v,t,a,p,g,_,B,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let M=b,v=T;M<v;M+=3){const O=M,U=M+1,D=M+2;l=$c(this,f,t,a,p,g,_,O,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function wE(r,t,n,a,l,c,f,d){let m;if(t.side===hi?m=a.intersectTriangle(f,c,l,!0,d):m=a.intersectTriangle(l,c,f,t.side===vs,d),m===null)return null;Qc.copy(d),Qc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Qc);return p<n.near||p>n.far?null:{distance:p,point:Qc.clone(),object:r}}function $c(r,t,n,a,l,c,f,d,m,p){r.getVertexPosition(d,jc),r.getVertexPosition(m,Zc),r.getVertexPosition(p,Kc);const g=wE(r,t,n,a,jc,Zc,Kc,ev);if(g){const _=new X;Pi.getBarycoord(ev,jc,Zc,Kc,_),l&&(g.uv=Pi.getInterpolatedAttribute(l,d,m,p,_,new Bt)),c&&(g.uv1=Pi.getInterpolatedAttribute(c,d,m,p,_,new Bt)),f&&(g.normal=Pi.getInterpolatedAttribute(f,d,m,p,_,new X),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new X,materialIndex:0};Pi.getNormal(jc,Zc,Kc,y.normal),g.face=y,g.barycoord=_}return g}class oo extends Nn{constructor(t=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let y=0,S=0;b("z","y","x",-1,-1,a,n,t,f,c,0),b("z","y","x",1,-1,a,n,-t,f,c,1),b("x","z","y",1,1,t,a,n,l,f,2),b("x","z","y",1,-1,t,a,-n,l,f,3),b("x","y","z",1,-1,t,n,a,l,c,4),b("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(_,2));function b(T,M,v,O,U,D,z,B,I,Z,C){const w=D/I,V=z/Z,Q=D/2,et=z/2,ht=B/2,ut=I+1,P=Z+1;let H=0,at=0;const Et=new X;for(let St=0;St<P;St++){const L=St*V-et;for(let it=0;it<ut;it++){const gt=it*w-Q;Et[T]=gt*O,Et[M]=L*U,Et[v]=ht,p.push(Et.x,Et.y,Et.z),Et[T]=0,Et[M]=0,Et[v]=B>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(it/I),_.push(1-St/Z),H+=1}}for(let St=0;St<Z;St++)for(let L=0;L<I;L++){const it=y+L+ut*St,gt=y+L+ut*(St+1),Rt=y+(L+1)+ut*(St+1),kt=y+(L+1)+ut*St;m.push(it,gt,kt),m.push(gt,Rt,kt),at+=6}d.addGroup(S,at,C),S+=at,y+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function so(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function ai(r){const t={};for(let n=0;n<r.length;n++){const a=so(r[n]);for(const l in a)t[l]=a[l]}return t}function DE(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function px(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const UE={clone:so,merge:ai};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ra extends Qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=LE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=DE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class mx extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new X,nv=new Bt,iv=new Bt;class Oi extends mx{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=vp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,n){return this.getViewBounds(t,nv,iv),n.subVectors(iv,nv)}setViewOffset(t,n,a,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(vu*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,kr=1;class OE extends Bn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Oi(Vr,kr,t,n);l.layers=this.layers,this.add(l);const c=new Oi(Vr,kr,t,n);c.layers=this.layers,this.add(c);const f=new Oi(Vr,kr,t,n);f.layers=this.layers,this.add(f);const d=new Oi(Vr,kr,t,n);d.layers=this.layers,this.add(d);const m=new Oi(Vr,kr,t,n);m.layers=this.layers,this.add(m);const p=new Oi(Vr,kr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,d,m]=n;for(const p of n)this.remove(p);if(t===ea)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Mu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,c),t.setRenderTarget(a,1,l),t.render(n,f),t.setRenderTarget(a,2,l),t.render(n,d),t.setRenderTarget(a,3,l),t.render(n,m),t.setRenderTarget(a,4,l),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,l),t.render(n,g),t.setRenderTarget(_,y,S),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class gx extends ti{constructor(t=[],n=js,a,l,c,f,d,m,p,g){super(t,n,a,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _x extends ia{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new gx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new oo(5,5,5),c=new ra({name:"CubemapFromEquirect",uniforms:so(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:hi,blending:Na});c.uniforms.tEquirect.value=n;const f=new jn(l,c),d=n.minFilter;return n.minFilter===Ws&&(n.minFilter=$n),new OE(1,10,this).update(t,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,l);t.setRenderTarget(c)}}class dl extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,b=.005;p.inputState.pinching&&y>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new dl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class zE extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class IE{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=_p,this.updateRanges=[],this.version=0,this.uuid=La()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=n.array[a+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ii=new X;class Tu{constructor(t,n,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)ii.fromBufferAttribute(this,n),ii.applyMatrix4(t),this.setXYZ(n,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ii.fromBufferAttribute(this,n),ii.applyNormalMatrix(t),this.setXYZ(n,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ii.fromBufferAttribute(this,n),ii.transformDirection(t),this.setXYZ(n,ii.x,ii.y,ii.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=an(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=$i(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=$i(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=$i(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=$i(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),a=an(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),a=an(a,this.array),l=an(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),a=an(a,this.array),l=an(l,this.array),c=an(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){bu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Wi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Tu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){bu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vx extends Qs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xr;const sl=new X,Wr=new X,qr=new X,Yr=new Bt,rl=new Bt,xx=new un,tu=new X,ol=new X,eu=new X,av=new Bt,hd=new Bt,sv=new Bt;class BE extends Bn{constructor(t=new vx){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new Nn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new IE(n,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Tu(a,3,0,!1)),Xr.setAttribute("uv",new Tu(a,2,3,!1))}this.geometry=Xr,this.material=t,this.center=new Bt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),xx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-qr.z);const a=this.material.rotation;let l,c;a!==0&&(c=Math.cos(a),l=Math.sin(a));const f=this.center;nu(tu.set(-.5,-.5,0),qr,f,Wr,l,c),nu(ol.set(.5,-.5,0),qr,f,Wr,l,c),nu(eu.set(.5,.5,0),qr,f,Wr,l,c),av.set(0,0),hd.set(1,0),sv.set(1,1);let d=t.ray.intersectTriangle(tu,ol,eu,!1,sl);if(d===null&&(nu(ol.set(-.5,.5,0),qr,f,Wr,l,c),hd.set(0,1),d=t.ray.intersectTriangle(tu,eu,ol,!1,sl),d===null))return;const m=t.ray.origin.distanceTo(sl);m<t.near||m>t.far||n.push({distance:m,point:sl.clone(),uv:Pi.getInterpolation(sl,tu,ol,eu,av,hd,sv,new Bt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nu(r,t,n,a,l,c){Yr.subVectors(r,n).addScalar(.5).multiply(a),l!==void 0?(rl.x=c*Yr.x-l*Yr.y,rl.y=l*Yr.x+c*Yr.y):rl.copy(Yr),r.copy(t),r.x+=rl.x,r.y+=rl.y,r.applyMatrix4(xx)}class FE extends ti{constructor(t=null,n=1,a=1,l,c,f,d,m,p=Zn,g=Zn,_,y){super(null,f,d,m,p,g,l,c,_,y),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new X,HE=new X,GE=new Me;class ms{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=dd.subVectors(a,n).cross(HE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(dd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||GE.getNormalMatrix(t),l=this.coplanarPoint(dd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new wu,VE=new Bt(.5,.5),iu=new X;class Ip{constructor(t=new ms,n=new ms,a=new ms,l=new ms,c=new ms,f=new ms){this.planes=[t,n,a,l,c,f]}set(t,n,a,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ea,a=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],y=c[6],S=c[7],b=c[8],T=c[9],M=c[10],v=c[11],O=c[12],U=c[13],D=c[14],z=c[15];if(l[0].setComponents(p-f,S-g,v-b,z-O).normalize(),l[1].setComponents(p+f,S+g,v+b,z+O).normalize(),l[2].setComponents(p+d,S+_,v+T,z+U).normalize(),l[3].setComponents(p-d,S-_,v-T,z-U).normalize(),a)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,S-y,v-M,z-D).normalize();else if(l[4].setComponents(p-m,S-y,v-M,z-D).normalize(),n===ea)l[5].setComponents(p+m,S+y,v+M,z+D).normalize();else if(n===Mu)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(t){Hs.center.set(0,0,0);const n=VE.distanceTo(t.center);return Hs.radius=.7071067811865476+n,Hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(iu.x=l.normal.x>0?t.max.x:t.min.x,iu.y=l.normal.y>0?t.max.y:t.min.y,iu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(iu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jr extends Qs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Au=new X,Ru=new X,rv=new un,ll=new Du,au=new wu,pd=new X,ov=new X;class cl extends Bn{constructor(t=new Nn,n=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let l=1,c=n.count;l<c;l++)Au.fromBufferAttribute(n,l-1),Ru.fromBufferAttribute(n,l),a[l]=a[l-1],a[l]+=Au.distanceTo(Ru);t.setAttribute("lineDistance",new Ln(a,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),au.copy(a.boundingSphere),au.applyMatrix4(l),au.radius+=c,t.ray.intersectsSphere(au)===!1)return;rv.copy(l).invert(),ll.copy(t.ray).applyMatrix4(rv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,y=a.attributes.position;if(g!==null){const S=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let T=S,M=b-1;T<M;T+=p){const v=g.getX(T),O=g.getX(T+1),U=su(this,t,ll,m,v,O,T);U&&n.push(U)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(S),v=su(this,t,ll,m,T,M,b-1);v&&n.push(v)}}else{const S=Math.max(0,f.start),b=Math.min(y.count,f.start+f.count);for(let T=S,M=b-1;T<M;T+=p){const v=su(this,t,ll,m,T,T+1,T);v&&n.push(v)}if(this.isLineLoop){const T=su(this,t,ll,m,b-1,S,b-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function su(r,t,n,a,l,c,f){const d=r.geometry.attributes.position;if(Au.fromBufferAttribute(d,l),Ru.fromBufferAttribute(d,c),n.distanceSqToSegment(Au,Ru,pd,ov)>a)return;pd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(pd);if(!(p<t.near||p>t.far))return{distance:p,point:ov.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class kE extends ti{constructor(t,n,a,l,c,f,d,m,p){super(t,n,a,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends ti{constructor(t,n,a=aa,l,c,f,d=Zn,m=Zn,p,g=za,_=1){if(g!==za&&g!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:n,depth:_};super(y,l,c,f,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class XE extends El{constructor(t,n=aa,a=js,l,c,f=Zn,d=Zn,m,p=za){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,l,c,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yx extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bp extends Nn{constructor(t=1,n=1,a=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],y=[],S=[];let b=0;const T=[],M=a/2;let v=0;O(),f===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(S,2));function O(){const D=new X,z=new X;let B=0;const I=(n-t)/a;for(let Z=0;Z<=c;Z++){const C=[],w=Z/c,V=w*(n-t)+t;for(let Q=0;Q<=l;Q++){const et=Q/l,ht=et*m+d,ut=Math.sin(ht),P=Math.cos(ht);z.x=V*ut,z.y=-w*a+M,z.z=V*P,_.push(z.x,z.y,z.z),D.set(ut,I,P).normalize(),y.push(D.x,D.y,D.z),S.push(et,1-w),C.push(b++)}T.push(C)}for(let Z=0;Z<l;Z++)for(let C=0;C<c;C++){const w=T[C][Z],V=T[C+1][Z],Q=T[C+1][Z+1],et=T[C][Z+1];(t>0||C!==0)&&(g.push(w,V,et),B+=3),(n>0||C!==c-1)&&(g.push(V,Q,et),B+=3)}p.addGroup(v,B,0),v+=B}function U(D){const z=b,B=new Bt,I=new X;let Z=0;const C=D===!0?t:n,w=D===!0?1:-1;for(let Q=1;Q<=l;Q++)_.push(0,M*w,0),y.push(0,w,0),S.push(.5,.5),b++;const V=b;for(let Q=0;Q<=l;Q++){const ht=Q/l*m+d,ut=Math.cos(ht),P=Math.sin(ht);I.x=C*P,I.y=M*w,I.z=C*ut,_.push(I.x,I.y,I.z),y.push(0,w,0),B.x=ut*.5+.5,B.y=P*.5*w+.5,S.push(B.x,B.y),b++}for(let Q=0;Q<l;Q++){const et=z+Q,ht=V+Q;D===!0?g.push(ht,ht+1,et):g.push(ht+1,ht,et),Z+=3}p.addGroup(v,Z,D===!0?1:2),v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(l),n.push(c),l=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let l=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=a[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,a[l]===f)return l/(c-1);const g=a[l],y=a[l+1]-g,S=(f-g)/y;return(l+S)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=n||(f.isVector2?new Bt:new X);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new X,l=[],c=[],f=[],d=new X,m=new un;for(let S=0;S<=t;S++){const b=S/t;l[S]=this.getTangentAt(b,new X)}c[0]=new X,f[0]=new X;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),y=Math.abs(l[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),y<=p&&a.set(0,0,1),d.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(Re(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,b))}f[S].crossVectors(l[S],c[S])}if(n===!0){let S=Math.acos(Re(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],S*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fp extends oa{constructor(t=0,n=0,a=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,n=new Bt){const a=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=m-this.aX,S=p-this.aY;m=y*g-S*_+this.aX,p=y*_+S*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class WE extends Fp{constructor(t,n,a,l,c,f){super(t,n,a,a,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Hp(){let r=0,t=0,n=0,a=0;function l(c,f,d,m){r=c,t=d,n=-3*c+3*f-2*d-m,a=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,g,_){let y=(f-c)/p-(d-c)/(p+g)+(d-f)/g,S=(d-f)/g-(m-f)/(g+_)+(m-d)/_;y*=g,S*=g,l(f,d,y,S)},calc:function(c){const f=c*c,d=f*c;return r+t*c+n*f+a*d}}}const ru=new X,md=new Hp,gd=new Hp,_d=new Hp;class qE extends oa{constructor(t=[],n=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=l}getPoint(t,n=new X){const a=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(ru.subVectors(l[0],l[1]).add(l[0]),p=ru);const _=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(ru.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=ru),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(_),S),T=Math.pow(_.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(g),S);T<1e-4&&(T=1),b<1e-4&&(b=T),M<1e-4&&(M=T),md.initNonuniformCatmullRom(p.x,_.x,y.x,g.x,b,T,M),gd.initNonuniformCatmullRom(p.y,_.y,y.y,g.y,b,T,M),_d.initNonuniformCatmullRom(p.z,_.z,y.z,g.z,b,T,M)}else this.curveType==="catmullrom"&&(md.initCatmullRom(p.x,_.x,y.x,g.x,this.tension),gd.initCatmullRom(p.y,_.y,y.y,g.y,this.tension),_d.initCatmullRom(p.z,_.z,y.z,g.z,this.tension));return a.set(md.calc(m),gd.calc(m),_d.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new X().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lv(r,t,n,a,l){const c=(a-t)*.5,f=(l-n)*.5,d=r*r,m=r*d;return(2*n-2*a+c+f)*m+(-3*n+3*a-2*c-f)*d+c*r+n}function YE(r,t){const n=1-r;return n*n*t}function jE(r,t){return 2*(1-r)*r*t}function ZE(r,t){return r*r*t}function gl(r,t,n,a){return YE(r,t)+jE(r,n)+ZE(r,a)}function KE(r,t){const n=1-r;return n*n*n*t}function JE(r,t){const n=1-r;return 3*n*n*r*t}function QE(r,t){return 3*(1-r)*r*r*t}function $E(r,t){return r*r*r*t}function _l(r,t,n,a,l){return KE(r,t)+JE(r,n)+QE(r,a)+$E(r,l)}class Sx extends oa{constructor(t=new Bt,n=new Bt,a=new Bt,l=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new Bt){const a=n,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return a.set(_l(t,l.x,c.x,f.x,d.x),_l(t,l.y,c.y,f.y,d.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class t1 extends oa{constructor(t=new X,n=new X,a=new X,l=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new X){const a=n,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return a.set(_l(t,l.x,c.x,f.x,d.x),_l(t,l.y,c.y,f.y,d.y),_l(t,l.z,c.z,f.z,d.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mx extends oa{constructor(t=new Bt,n=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Bt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Bt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class e1 extends oa{constructor(t=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new X){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ex extends oa{constructor(t=new Bt,n=new Bt,a=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Bt){const a=n,l=this.v0,c=this.v1,f=this.v2;return a.set(gl(t,l.x,c.x,f.x),gl(t,l.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xp extends oa{constructor(t=new X,n=new X,a=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new X){const a=n,l=this.v0,c=this.v1,f=this.v2;return a.set(gl(t,l.x,c.x,f.x),gl(t,l.y,c.y,f.y),gl(t,l.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bx extends oa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Bt){const a=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return a.set(lv(d,m.x,p.x,g.x,_.x),lv(d,m.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new Bt().fromArray(l))}return this}}var cv=Object.freeze({__proto__:null,ArcCurve:WE,CatmullRomCurve3:qE,CubicBezierCurve:Sx,CubicBezierCurve3:t1,EllipseCurve:Fp,LineCurve:Mx,LineCurve3:e1,QuadraticBezierCurve:Ex,QuadraticBezierCurve3:xp,SplineCurve:bx});class n1 extends oa{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cv[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=a){const f=l[c]-a,d=this.curves[c],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,l=this.curves.length;a<l;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(new cv[l.type]().fromJSON(l))}return this}}class uv extends n1{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Mx(this.currentPoint.clone(),new Bt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,l){const c=new Ex(this.currentPoint.clone(),new Bt(t,n),new Bt(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}bezierCurveTo(t,n,a,l,c,f){const d=new Sx(this.currentPoint.clone(),new Bt(t,n),new Bt(a,l),new Bt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new bx(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,l,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,n+m,a,l,c,f),this}absarc(t,n,a,l,c,f){return this.absellipse(t,n,a,a,l,c,f),this}ellipse(t,n,a,l,c,f,d,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,l,c,f,d,m),this}absellipse(t,n,a,l,c,f,d,m){const p=new Fp(t,n,a,l,c,f,d,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xu extends uv{constructor(t){super(t),this.uuid=La(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,l=this.holes.length;a<l;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(new uv().fromJSON(l))}return this}}function i1(r,t,n=2){const a=t&&t.length,l=a?t[0]*n:r.length;let c=Tx(r,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(a&&(c=l1(r,t,c,n)),r.length>80*n){d=r[0],m=r[1];let g=d,_=m;for(let y=n;y<l;y+=n){const S=r[y],b=r[y+1];S<d&&(d=S),b<m&&(m=b),S>g&&(g=S),b>_&&(_=b)}p=Math.max(g-d,_-m),p=p!==0?32767/p:0}return bl(c,f,n,d,m,p,0),f}function Tx(r,t,n,a,l){let c;if(l===x1(r,t,n,a)>0)for(let f=t;f<n;f+=a)c=fv(f/a|0,r[f],r[f+1],c);else for(let f=n-a;f>=t;f-=a)c=fv(f/a|0,r[f],r[f+1],c);return c&&ro(c,c.next)&&(Al(c),c=c.next),c}function Ks(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(ro(n,n.next)||gn(n.prev,n,n.next)===0)){if(Al(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function bl(r,t,n,a,l,c,f){if(!r)return;!f&&c&&d1(r,a,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?s1(r,a,l,c):a1(r)){t.push(m.i,r.i,p.i),Al(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=r1(Ks(r),t),bl(r,t,n,a,l,c,2)):f===2&&o1(r,t,n,a,l,c):bl(Ks(r),t,n,a,l,c,1);break}}}function a1(r){const t=r.prev,n=r,a=r.next;if(gn(t,n,a)>=0)return!1;const l=t.x,c=n.x,f=a.x,d=t.y,m=n.y,p=a.y,g=Math.min(l,c,f),_=Math.min(d,m,p),y=Math.max(l,c,f),S=Math.max(d,m,p);let b=a.next;for(;b!==t;){if(b.x>=g&&b.x<=y&&b.y>=_&&b.y<=S&&pl(l,d,c,m,f,p,b.x,b.y)&&gn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function s1(r,t,n,a){const l=r.prev,c=r,f=r.next;if(gn(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,g=l.y,_=c.y,y=f.y,S=Math.min(d,m,p),b=Math.min(g,_,y),T=Math.max(d,m,p),M=Math.max(g,_,y),v=yp(S,b,t,n,a),O=yp(T,M,t,n,a);let U=r.prevZ,D=r.nextZ;for(;U&&U.z>=v&&D&&D.z<=O;){if(U.x>=S&&U.x<=T&&U.y>=b&&U.y<=M&&U!==l&&U!==f&&pl(d,g,m,_,p,y,U.x,U.y)&&gn(U.prev,U,U.next)>=0||(U=U.prevZ,D.x>=S&&D.x<=T&&D.y>=b&&D.y<=M&&D!==l&&D!==f&&pl(d,g,m,_,p,y,D.x,D.y)&&gn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;U&&U.z>=v;){if(U.x>=S&&U.x<=T&&U.y>=b&&U.y<=M&&U!==l&&U!==f&&pl(d,g,m,_,p,y,U.x,U.y)&&gn(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;D&&D.z<=O;){if(D.x>=S&&D.x<=T&&D.y>=b&&D.y<=M&&D!==l&&D!==f&&pl(d,g,m,_,p,y,D.x,D.y)&&gn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function r1(r,t){let n=r;do{const a=n.prev,l=n.next.next;!ro(a,l)&&Rx(a,n,n.next,l)&&Tl(a,l)&&Tl(l,a)&&(t.push(a.i,n.i,l.i),Al(n),Al(n.next),n=r=l),n=n.next}while(n!==r);return Ks(n)}function o1(r,t,n,a,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&g1(f,d)){let m=Cx(f,d);f=Ks(f,f.next),m=Ks(m,m.next),bl(f,t,n,a,l,c,0),bl(m,t,n,a,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function l1(r,t,n,a){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*a,m=c<f-1?t[c+1]*a:r.length,p=Tx(r,d,m,a,!1);p===p.next&&(p.steiner=!0),l.push(m1(p))}l.sort(c1);for(let c=0;c<l.length;c++)n=u1(l[c],n);return n}function c1(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=a-l}return n}function u1(r,t){const n=f1(r,t);if(!n)return t;const a=Cx(n,r);return Ks(a,a.next),Ks(n,n.next)}function f1(r,t){let n=t;const a=r.x,l=r.y;let c=-1/0,f;if(ro(r,n))return n;do{if(ro(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const _=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,f=n.x<n.next.x?n:n.next,_===a))return f}n=n.next}while(n!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let g=1/0;n=f;do{if(a>=n.x&&n.x>=m&&a!==n.x&&Ax(l<p?a:c,l,m,p,l<p?c:a,l,n.x,n.y)){const _=Math.abs(l-n.y)/(a-n.x);Tl(n,r)&&(_<g||_===g&&(n.x>f.x||n.x===f.x&&h1(f,n)))&&(f=n,g=_)}n=n.next}while(n!==d);return f}function h1(r,t){return gn(r.prev,r,t.prev)<0&&gn(t.next,r,r.next)<0}function d1(r,t,n,a){let l=r;do l.z===0&&(l.z=yp(l.x,l.y,t,n,a)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,p1(l)}function p1(r){let t,n=1;do{let a=r,l;r=null;let c=null;for(t=0;a;){t++;let f=a,d=0;for(let p=0;p<n&&(d++,f=f.nextZ,!!f);p++);let m=n;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||a.z<=f.z)?(l=a,a=a.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;a=f}c.nextZ=null,n*=2}while(t>1);return r}function yp(r,t,n,a,l){return r=(r-n)*l|0,t=(t-a)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function m1(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function Ax(r,t,n,a,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(a-d)>=(n-f)*(t-d)&&(n-f)*(c-d)>=(l-f)*(a-d)}function pl(r,t,n,a,l,c,f,d){return!(r===f&&t===d)&&Ax(r,t,n,a,l,c,f,d)}function g1(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!_1(r,t)&&(Tl(r,t)&&Tl(t,r)&&v1(r,t)&&(gn(r.prev,r,t.prev)||gn(r,t.prev,t))||ro(r,t)&&gn(r.prev,r,r.next)>0&&gn(t.prev,t,t.next)>0)}function gn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function ro(r,t){return r.x===t.x&&r.y===t.y}function Rx(r,t,n,a){const l=lu(gn(r,t,n)),c=lu(gn(r,t,a)),f=lu(gn(n,a,r)),d=lu(gn(n,a,t));return!!(l!==c&&f!==d||l===0&&ou(r,n,t)||c===0&&ou(r,a,t)||f===0&&ou(n,r,a)||d===0&&ou(n,t,a))}function ou(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function lu(r){return r>0?1:r<0?-1:0}function _1(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&Rx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function Tl(r,t){return gn(r.prev,r,r.next)<0?gn(r,t,r.next)>=0&&gn(r,r.prev,t)>=0:gn(r,t,r.prev)<0||gn(r,r.next,t)<0}function v1(r,t){let n=r,a=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function Cx(r,t){const n=Sp(r.i,r.x,r.y),a=Sp(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function fv(r,t,n,a){const l=Sp(r,t,n);return a?(l.next=a.next,l.prev=a,a.next.prev=l,a.next=l):(l.prev=l,l.next=l),l}function Al(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function x1(r,t,n,a){let l=0;for(let c=t,f=n-a;c<n;c+=a)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class y1{static triangulate(t,n,a=2){return i1(t,n,a)}}class vl{static area(t){const n=t.length;let a=0;for(let l=n-1,c=0;c<n;l=c++)a+=t[l].x*t[c].y-t[c].x*t[l].y;return a*.5}static isClockWise(t){return vl.area(t)<0}static triangulateShape(t,n){const a=[],l=[],c=[];hv(t),dv(a,t);let f=t.length;n.forEach(hv);for(let m=0;m<n.length;m++)l.push(f),f+=n[m].length,dv(a,n[m]);const d=y1.triangulate(a,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function hv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function dv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Ys extends Nn{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,f=n/2,d=Math.floor(a),m=Math.floor(l),p=d+1,g=m+1,_=t/d,y=n/m,S=[],b=[],T=[],M=[];for(let v=0;v<g;v++){const O=v*y-f;for(let U=0;U<p;U++){const D=U*_-c;b.push(D,-O,0),T.push(0,0,1),M.push(U/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<d;O++){const U=O+p*v,D=O+p*(v+1),z=O+1+p*(v+1),B=O+1+p*v;S.push(U,D,B),S.push(D,z,B)}this.setIndex(S),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(T,3)),this.setAttribute("uv",new Ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.width,t.height,t.widthSegments,t.heightSegments)}}class xl extends Nn{constructor(t=new xu([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],l=[],c=[],f=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let g=0;g<t.length;g++)p(t[g]),this.addGroup(d,m,g),d+=m,m=0;this.setIndex(a),this.setAttribute("position",new Ln(l,3)),this.setAttribute("normal",new Ln(c,3)),this.setAttribute("uv",new Ln(f,2));function p(g){const _=l.length/3,y=g.extractPoints(n);let S=y.shape;const b=y.holes;vl.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,v=b.length;M<v;M++){const O=b[M];vl.isClockWise(O)===!0&&(b[M]=O.reverse())}const T=vl.triangulateShape(S,b);for(let M=0,v=b.length;M<v;M++){const O=b[M];S=S.concat(O)}for(let M=0,v=S.length;M<v;M++){const O=S[M];l.push(O.x,O.y,0),c.push(0,0,1),f.push(O.x,O.y)}for(let M=0,v=T.length;M<v;M++){const O=T[M],U=O[0]+_,D=O[1]+_,z=O[2]+_;a.push(U,D,z),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return S1(n,t)}static fromJSON(t,n){const a=[];for(let l=0,c=t.shapes.length;l<c;l++){const f=n[t.shapes[l]];a.push(f)}return new xl(a,t.curveSegments)}}function S1(r,t){if(t.shapes=[],Array.isArray(r))for(let n=0,a=r.length;n<a;n++){const l=r[n];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t}class Gp extends Nn{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+d,Math.PI);let p=0;const g=[],_=new X,y=new X,S=[],b=[],T=[],M=[];for(let v=0;v<=a;v++){const O=[],U=v/a;let D=0;v===0&&f===0?D=.5/n:v===a&&m===Math.PI&&(D=-.5/n);for(let z=0;z<=n;z++){const B=z/n;_.x=-t*Math.cos(l+B*c)*Math.sin(f+U*d),_.y=t*Math.cos(f+U*d),_.z=t*Math.sin(l+B*c)*Math.sin(f+U*d),b.push(_.x,_.y,_.z),y.copy(_).normalize(),T.push(y.x,y.y,y.z),M.push(B+D,1-U),O.push(p++)}g.push(O)}for(let v=0;v<a;v++)for(let O=0;O<n;O++){const U=g[v][O+1],D=g[v][O],z=g[v+1][O],B=g[v+1][O+1];(v!==0||f>0)&&S.push(U,D,B),(v!==a-1||m<Math.PI)&&S.push(D,z,B)}this.setIndex(S),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(T,3)),this.setAttribute("uv",new Ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class M1 extends ra{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cu extends Qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lx,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class E1 extends Qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b1 extends Qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class T1 extends Jr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class wx extends Bn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const vd=new un,pv=new X,mv=new X;class A1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;pv.setFromMatrixPosition(t.matrixWorld),n.position.copy(pv),mv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(mv),n.updateMatrixWorld(),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vp extends mx{constructor(t=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class R1 extends A1{constructor(){super(new Vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C1 extends wx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new R1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class w1 extends wx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class D1 extends Oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const gv=new un;class U1{constructor(t,n,a=0,l=1/0){this.ray=new Du(t,n),this.near=a,this.far=l,this.camera=null,this.layers=new zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Be("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return gv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gv),this}intersectObject(t,n=!0,a=[]){return Mp(t,this,a,n),a.sort(_v),a}intersectObjects(t,n=!0,a=[]){for(let l=0,c=t.length;l<c;l++)Mp(t[l],this,a,n);return a.sort(_v),a}}function _v(r,t){return r.distance-t.distance}function Mp(r,t,n,a){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&a===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Mp(c[f],t,n,!0)}}class vv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Re(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class N1 extends Js{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){fe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function xv(r,t,n,a){const l=L1(a);switch(n){case sx:return r*t;case ox:return r*t/l.components*l.byteLength;case Dp:return r*t/l.components*l.byteLength;case io:return r*t*2/l.components*l.byteLength;case Up:return r*t*2/l.components*l.byteLength;case rx:return r*t*3/l.components*l.byteLength;case Xi:return r*t*4/l.components*l.byteLength;case Np:return r*t*4/l.components*l.byteLength;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gu:case _u:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hd:case Vd:return Math.max(r,16)*Math.max(t,8)/4;case Fd:case Gd:return Math.max(r,8)*Math.max(t,8)/2;case kd:case Xd:case qd:case Yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wd:case jd:case Zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $d:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case tp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case up:case fp:case hp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case dp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case mp:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function L1(r){switch(r){case Mi:case ex:return{byteLength:1,components:1};case yl:case nx:case Pa:return{byteLength:2,components:1};case Cp:case wp:return{byteLength:2,components:4};case aa:case Rp:case ta:return{byteLength:4,components:1};case ix:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);function Dx(){let r=null,t=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function O1(r){const t=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,b)=>S.start-b.start);let y=0;for(let S=1;S<_.length;S++){const b=_[y],T=_[S];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++y,_[y]=T)}_.length=y+1;for(let S=0,b=_.length;S<b;S++){const T=_[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
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
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G1=`#ifdef USE_AOMAP
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
#endif`,V1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
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
#endif`,X1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j1=`#ifdef USE_IRIDESCENCE
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
#endif`,Z1=`#ifdef USE_BUMPMAP
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
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ab=`#define PI 3.141592653589793
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
} // validated`,sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rb=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
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
}`,Eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ab=`uniform bool receiveShadow;
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
#endif`,Rb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Lb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ob=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xb=`#if defined( USE_POINTS_UV )
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
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iT=`#ifdef USE_NORMALMAP
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
#endif`,aT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ST=`#ifdef USE_SKINNING
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
#endif`,MT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ET=`#ifdef USE_SKINNING
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
#endif`,bT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wT=`#ifdef USE_TRANSMISSION
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PT=`uniform sampler2D t2D;
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`#include <common>
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
}`,GT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,VT=`#define DISTANCE
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
}`,kT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`uniform float scale;
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
}`,YT=`uniform vec3 diffuse;
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
}`,jT=`#include <common>
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
}`,ZT=`uniform vec3 diffuse;
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
}`,KT=`#define LAMBERT
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
}`,JT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,QT=`#define MATCAP
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
}`,$T=`#define MATCAP
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
}`,tA=`#define NORMAL
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
}`,eA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nA=`#define PHONG
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
}`,iA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,aA=`#define STANDARD
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
}`,sA=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,rA=`#define TOON
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
}`,oA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,lA=`uniform float size;
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
}`,cA=`uniform vec3 diffuse;
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
}`,uA=`#include <common>
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
}`,fA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,hA=`uniform float rotation;
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
}`,dA=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:P1,alphahash_pars_fragment:z1,alphamap_fragment:I1,alphamap_pars_fragment:B1,alphatest_fragment:F1,alphatest_pars_fragment:H1,aomap_fragment:G1,aomap_pars_fragment:V1,batching_pars_vertex:k1,batching_vertex:X1,begin_vertex:W1,beginnormal_vertex:q1,bsdfs:Y1,iridescence_fragment:j1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:K1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:Q1,clipping_planes_vertex:$1,color_fragment:tb,color_pars_fragment:eb,color_pars_vertex:nb,color_vertex:ib,common:ab,cube_uv_reflection_fragment:sb,defaultnormal_vertex:rb,displacementmap_pars_vertex:ob,displacementmap_vertex:lb,emissivemap_fragment:cb,emissivemap_pars_fragment:ub,colorspace_fragment:fb,colorspace_pars_fragment:hb,envmap_fragment:db,envmap_common_pars_fragment:pb,envmap_pars_fragment:mb,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Rb,envmap_vertex:_b,fog_vertex:vb,fog_pars_vertex:xb,fog_fragment:yb,fog_pars_fragment:Sb,gradientmap_pars_fragment:Mb,lightmap_pars_fragment:Eb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Tb,lights_pars_begin:Ab,lights_toon_fragment:Cb,lights_toon_pars_fragment:wb,lights_phong_fragment:Db,lights_phong_pars_fragment:Ub,lights_physical_fragment:Nb,lights_physical_pars_fragment:Lb,lights_fragment_begin:Ob,lights_fragment_maps:Pb,lights_fragment_end:zb,logdepthbuf_fragment:Ib,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:Fb,logdepthbuf_vertex:Hb,map_fragment:Gb,map_pars_fragment:Vb,map_particle_fragment:kb,map_particle_pars_fragment:Xb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:qb,morphinstance_vertex:Yb,morphcolor_vertex:jb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Kb,morphtarget_vertex:Jb,normal_fragment_begin:Qb,normal_fragment_maps:$b,normal_pars_fragment:tT,normal_pars_vertex:eT,normal_vertex:nT,normalmap_pars_fragment:iT,clearcoat_normal_fragment_begin:aT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:rT,iridescence_pars_fragment:oT,opaque_fragment:lT,packing:cT,premultiplied_alpha_fragment:uT,project_vertex:fT,dithering_fragment:hT,dithering_pars_fragment:dT,roughnessmap_fragment:pT,roughnessmap_pars_fragment:mT,shadowmap_pars_fragment:gT,shadowmap_pars_vertex:_T,shadowmap_vertex:vT,shadowmask_pars_fragment:xT,skinbase_vertex:yT,skinning_pars_vertex:ST,skinning_vertex:MT,skinnormal_vertex:ET,specularmap_fragment:bT,specularmap_pars_fragment:TT,tonemapping_fragment:AT,tonemapping_pars_fragment:RT,transmission_fragment:CT,transmission_pars_fragment:wT,uv_pars_fragment:DT,uv_pars_vertex:UT,uv_vertex:NT,worldpos_vertex:LT,background_vert:OT,background_frag:PT,backgroundCube_vert:zT,backgroundCube_frag:IT,cube_vert:BT,cube_frag:FT,depth_vert:HT,depth_frag:GT,distance_vert:VT,distance_frag:kT,equirect_vert:XT,equirect_frag:WT,linedashed_vert:qT,linedashed_frag:YT,meshbasic_vert:jT,meshbasic_frag:ZT,meshlambert_vert:KT,meshlambert_frag:JT,meshmatcap_vert:QT,meshmatcap_frag:$T,meshnormal_vert:tA,meshnormal_frag:eA,meshphong_vert:nA,meshphong_frag:iA,meshphysical_vert:aA,meshphysical_frag:sA,meshtoon_vert:rA,meshtoon_frag:oA,points_vert:lA,points_frag:cA,shadow_vert:uA,shadow_frag:fA,sprite_vert:hA,sprite_frag:dA},Vt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Qi={basic:{uniforms:ai([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ai([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ai([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ai([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ai([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ai([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ai([Vt.points,Vt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ai([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ai([Vt.common,Vt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ai([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ai([Vt.sprite,Vt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:ai([Vt.common,Vt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:ai([Vt.lights,Vt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Qi.physical={uniforms:ai([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const uu={r:0,b:0,g:0},Gs=new sa,pA=new un;function mA(r,t,n,a,l,c,f){const d=new Fe(0);let m=c===!0?0:1,p,g,_=null,y=0,S=null;function b(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function T(U){let D=!1;const z=b(U);z===null?v(d,m):z&&z.isColor&&(v(z,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const z=b(D);z&&(z.isCubeTexture||z.mapping===Cu)?(g===void 0&&(g=new jn(new oo(1,1,1),new ra({name:"BackgroundCubeMaterial",uniforms:so(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Gs.copy(D.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pA.makeRotationFromEuler(Gs)),g.material.toneMapped=Ve.getTransfer(z.colorSpace)!==$e,(_!==z||y!==z.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=z,y=z.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new jn(new Ys(2,2),new ra({name:"BackgroundMaterial",uniforms:so(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ve.getTransfer(z.colorSpace)!==$e,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||y!==z.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=z,y=z.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,D){U.getRGB(uu,px(r)),a.buffers.color.setClear(uu.r,uu.g,uu.b,D,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:T,addToRenderList:M,dispose:O}}function gA(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=y(null);let c=l,f=!1;function d(w,V,Q,et,ht){let ut=!1;const P=_(et,Q,V);c!==P&&(c=P,p(c.object)),ut=S(w,et,Q,ht),ut&&b(w,et,Q,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,D(w,V,Q,et),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,V,Q){const et=Q.wireframe===!0;let ht=a[w.id];ht===void 0&&(ht={},a[w.id]=ht);let ut=ht[V.id];ut===void 0&&(ut={},ht[V.id]=ut);let P=ut[et];return P===void 0&&(P=y(m()),ut[et]=P),P}function y(w){const V=[],Q=[],et=[];for(let ht=0;ht<n;ht++)V[ht]=0,Q[ht]=0,et[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:et,object:w,attributes:{},index:null}}function S(w,V,Q,et){const ht=c.attributes,ut=V.attributes;let P=0;const H=Q.getAttributes();for(const at in H)if(H[at].location>=0){const St=ht[at];let L=ut[at];if(L===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),St===void 0||St.attribute!==L||L&&St.data!==L.data)return!0;P++}return c.attributesNum!==P||c.index!==et}function b(w,V,Q,et){const ht={},ut=V.attributes;let P=0;const H=Q.getAttributes();for(const at in H)if(H[at].location>=0){let St=ut[at];St===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const L={};L.attribute=St,St&&St.data&&(L.data=St.data),ht[at]=L,P++}c.attributes=ht,c.attributesNum=P,c.index=et}function T(){const w=c.newAttributes;for(let V=0,Q=w.length;V<Q;V++)w[V]=0}function M(w){v(w,0)}function v(w,V){const Q=c.newAttributes,et=c.enabledAttributes,ht=c.attributeDivisors;Q[w]=1,et[w]===0&&(r.enableVertexAttribArray(w),et[w]=1),ht[w]!==V&&(r.vertexAttribDivisor(w,V),ht[w]=V)}function O(){const w=c.newAttributes,V=c.enabledAttributes;for(let Q=0,et=V.length;Q<et;Q++)V[Q]!==w[Q]&&(r.disableVertexAttribArray(Q),V[Q]=0)}function U(w,V,Q,et,ht,ut,P){P===!0?r.vertexAttribIPointer(w,V,Q,ht,ut):r.vertexAttribPointer(w,V,Q,et,ht,ut)}function D(w,V,Q,et){T();const ht=et.attributes,ut=Q.getAttributes(),P=V.defaultAttributeValues;for(const H in ut){const at=ut[H];if(at.location>=0){let Et=ht[H];if(Et===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){const St=Et.normalized,L=Et.itemSize,it=t.get(Et);if(it===void 0)continue;const gt=it.buffer,Rt=it.type,kt=it.bytesPerElement,$=Rt===r.INT||Rt===r.UNSIGNED_INT||Et.gpuType===Rp;if(Et.isInterleavedBufferAttribute){const lt=Et.data,Dt=lt.stride,Yt=Et.offset;if(lt.isInstancedInterleavedBuffer){for(let zt=0;zt<at.locationSize;zt++)v(at.location+zt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let zt=0;zt<at.locationSize;zt++)M(at.location+zt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let zt=0;zt<at.locationSize;zt++)U(at.location+zt,L/at.locationSize,Rt,St,Dt*kt,(Yt+L/at.locationSize*zt)*kt,$)}else{if(Et.isInstancedBufferAttribute){for(let lt=0;lt<at.locationSize;lt++)v(at.location+lt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let lt=0;lt<at.locationSize;lt++)M(at.location+lt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let lt=0;lt<at.locationSize;lt++)U(at.location+lt,L/at.locationSize,Rt,St,L*kt,L/at.locationSize*lt*kt,$)}}else if(P!==void 0){const St=P[H];if(St!==void 0)switch(St.length){case 2:r.vertexAttrib2fv(at.location,St);break;case 3:r.vertexAttrib3fv(at.location,St);break;case 4:r.vertexAttrib4fv(at.location,St);break;default:r.vertexAttrib1fv(at.location,St)}}}}O()}function z(){Z();for(const w in a){const V=a[w];for(const Q in V){const et=V[Q];for(const ht in et)g(et[ht].object),delete et[ht];delete V[Q]}delete a[w]}}function B(w){if(a[w.id]===void 0)return;const V=a[w.id];for(const Q in V){const et=V[Q];for(const ht in et)g(et[ht].object),delete et[ht];delete V[Q]}delete a[w.id]}function I(w){for(const V in a){const Q=a[V];if(Q[w.id]===void 0)continue;const et=Q[w.id];for(const ht in et)g(et[ht].object),delete et[ht];delete Q[w.id]}}function Z(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function _A(r,t,n){let a;function l(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let S=0;for(let b=0;b<_;b++)S+=g[b];n.update(S,a,1)}function m(p,g,_,y){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)f(p[b],g[b],y[b]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,y,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*y[T];n.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function vA(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Xi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===Pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Mi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ta&&!Z)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(fe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,maxSamples:z,samples:B}}function xA(r){const t=this;let n=null,a=0,l=!1,c=!1;const f=new ms,d=new Me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||a!==0||l;return l=y,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=g(_,y,0)},this.setState=function(_,y,S){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const O=c?0:a,U=O*4;let D=v.clippingState||null;m.value=D,D=g(b,y,U,S);for(let z=0;z!==U;++z)D[z]=n[z];v.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,y,S,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const v=S+T*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,D=S;U!==T;++U,D+=4)f.copy(_[U]).applyMatrix4(O,d),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function yA(r){let t=new WeakMap;function n(f,d){return d===Pd?f.mapping=js:d===zd&&(f.mapping=no),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===Pd||d===zd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new _x(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const _s=4,yv=[.125,.215,.35,.446,.526,.582],Xs=20,SA=256,ul=new Vp,Sv=new Fe;let xd=null,yd=0,Sd=0,Md=!1;const MA=new X;class Mv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,l=100,c={}){const{size:f=256,position:d=MA}=c;xd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xd,yd,Sd),this._renderer.xr.enabled=Md,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===js||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Pa,format:Xi,colorSpace:ao,depthBuffer:!1},l=Ev(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EA(c)),this._blurMaterial=TA(c,t,n),this._ggxMaterial=bA(c,t,n)}return l}_compileMaterial(t){const n=new jn(new Nn,t);this._renderer.compile(n,ul)}_sceneToCubeUV(t,n,a,l,c){const m=new Oi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(Sv),_.toneMapping=na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jn(new oo,new Kr({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,v=!0):(M.color.copy(Sv),v=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const z=this._cubeSize;jr(l,D*z,U>2?z:0,z,z),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=S,_.autoClear=y,t.background=O}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===js||t.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;jr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,ul)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[a];d.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),y=0+p*1.25,S=_*y,{_lodMax:b}=this,T=this._sizeLods[a],M=3*T*(a>b-_s?a-b+_s:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-n,jr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(d,ul),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,jr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(d,ul)}_blur(t,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const y=p.uniforms,S=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xs-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Xs;M>Xs&&fe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Xs}`);const v=[];let O=0;for(let I=0;I<Xs;++I){const Z=I/T,C=Math.exp(-Z*Z/2);v.push(C),I===0?O+=C:I<M&&(O+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/O;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=b,y.mipInt.value=U-a;const D=this._sizeLods[l],z=3*D*(l>U-_s?l-U+_s:0),B=4*(this._cubeSize-D);jr(n,z,B,3*D,2*D),m.setRenderTarget(n),m.render(_,ul)}}function EA(r){const t=[],n=[],a=[];let l=r;const c=r-_s+1+yv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-_s?m=yv[f-r+_s-1]:f===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,b=6,T=3,M=2,v=1,O=new Float32Array(T*b*S),U=new Float32Array(M*b*S),D=new Float32Array(v*b*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,Z=B>2?0:-1,C=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];O.set(C,T*b*B),U.set(y,M*b*B);const w=[B,B,B,B,B,B];D.set(w,v*b*B)}const z=new Nn;z.setAttribute("position",new Wi(O,T)),z.setAttribute("uv",new Wi(U,M)),z.setAttribute("faceIndex",new Wi(D,v)),a.push(new jn(z,null)),l>_s&&l--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Ev(r,t,n){const a=new ia(r,t,n);return a.texture.mapping=Cu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function jr(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function bA(r,t,n){return new ra({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function TA(r,t,n){const a=new Float32Array(Xs),l=new X(0,1,0);return new ra({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function bv(){return new ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Tv(){return new ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}function AA(r){let t=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===Pd||m===zd,g=m===js||m===no;if(p||g){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new Mv(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new Mv(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function RA(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const l=r.getExtension(a);return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Ml("WebGLRenderer: "+a+" extension not supported."),l}}}function CA(r,t,n,a){const l={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,n.memory.geometries++),y}function m(_){const y=_.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function p(_){const y=[],S=_.index,b=_.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let U=0,D=O.length;U<D;U+=3){const z=O[U+0],B=O[U+1],I=O[U+2];y.push(z,B,B,I,I,z)}}else if(b!==void 0){const O=b.array;T=b.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const z=U+0,B=U+1,I=U+2;y.push(z,B,B,I,I,z)}}else return;const M=new(cx(y)?dx:hx)(y,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const y=c.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function wA(r,t,n){let a;function l(y){a=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function m(y,S){r.drawElements(a,S,c,y*f),n.update(S,a,1)}function p(y,S,b){b!==0&&(r.drawElementsInstanced(a,S,c,y*f,b),n.update(S,a,b))}function g(y,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,y,0,b);let M=0;for(let v=0;v<b;v++)M+=S[v];n.update(M,a,1)}function _(y,S,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/f,S[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,y,0,T,0,b);let v=0;for(let O=0;O<b;O++)v+=S[O]*T[O];n.update(v,a,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function DA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Be("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function UA(r,t,n){const a=new WeakMap,l=new Sn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=a.get(d);if(y===void 0||y.count!==_){let w=function(){Z.dispose(),a.delete(d),d.removeEventListener("dispose",w)};var S=w;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let z=d.attributes.position.count*D,B=1;z>t.maxTextureSize&&(B=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const I=new Float32Array(z*B*4*_),Z=new ux(I,z,B,_);Z.type=ta,Z.needsUpdate=!0;const C=D*4;for(let V=0;V<_;V++){const Q=v[V],et=O[V],ht=U[V],ut=z*B*4*V;for(let P=0;P<Q.count;P++){const H=P*C;b===!0&&(l.fromBufferAttribute(Q,P),I[ut+H+0]=l.x,I[ut+H+1]=l.y,I[ut+H+2]=l.z,I[ut+H+3]=0),T===!0&&(l.fromBufferAttribute(et,P),I[ut+H+4]=l.x,I[ut+H+5]=l.y,I[ut+H+6]=l.z,I[ut+H+7]=0),M===!0&&(l.fromBufferAttribute(ht,P),I[ut+H+8]=l.x,I[ut+H+9]=l.y,I[ut+H+10]=l.z,I[ut+H+11]=ht.itemSize===4?l.w:1)}}y={count:_,texture:Z,size:new Bt(z,B)},a.set(d,y),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function NA(r,t,n,a){let l=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const LA={[Yv]:"LINEAR_TONE_MAPPING",[jv]:"REINHARD_TONE_MAPPING",[Zv]:"CINEON_TONE_MAPPING",[Kv]:"ACES_FILMIC_TONE_MAPPING",[Qv]:"AGX_TONE_MAPPING",[$v]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function OA(r,t,n,a,l){const c=new ia(t,n,{type:r,depthBuffer:a,stencilBuffer:l}),f=new ia(t,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),d=new Nn;d.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const m=new M1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new jn(d,m),g=new Vp(-1,1,1,-1,0,1);let _=null,y=null,S=!1,b,T=null,M=[],v=!1;this.setSize=function(O,U){c.setSize(O,U),f.setSize(O,U);for(let D=0;D<M.length;D++){const z=M[D];z.setSize&&z.setSize(O,U)}},this.setEffects=function(O){M=O,v=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let z=0;z<M.length;z++){const B=M[z];B.setSize&&B.setSize(U,D)}},this.begin=function(O,U){if(S||O.toneMapping===na&&M.length===0)return!1;if(T=U,U!==null){const D=U.width,z=U.height;(c.width!==D||c.height!==z)&&this.setSize(D,z)}return v===!1&&O.setRenderTarget(c),b=O.toneMapping,O.toneMapping=na,!0},this.hasRenderPass=function(){return v},this.end=function(O,U){O.toneMapping=b,S=!0;let D=c,z=f;for(let B=0;B<M.length;B++){const I=M[B];if(I.enabled!==!1&&(I.render(O,z,D,U),I.needsSwap!==!1)){const Z=D;D=z,z=Z}}if(_!==O.outputColorSpace||y!==O.toneMapping){_=O.outputColorSpace,y=O.toneMapping,m.defines={},Ve.getTransfer(_)===$e&&(m.defines.SRGB_TRANSFER="");const B=LA[y];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,O.setRenderTarget(T),O.render(p,g),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Ux=new ti,Ep=new El(1,1),Nx=new ux,Lx=new vE,Ox=new gx,Av=[],Rv=[],Cv=new Float32Array(16),wv=new Float32Array(9),Dv=new Float32Array(4);function lo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=Av[l];if(c===void 0&&(c=new Float32Array(l),Av[l]=c),t!==0){a.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=n,r[f].toArray(c,d)}return c}function On(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Pn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Nu(r,t){let n=Rv[t];n===void 0&&(n=new Int32Array(t),Rv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function PA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function zA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(On(n,t))return;r.uniform2fv(this.addr,t),Pn(n,t)}}function IA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(On(n,t))return;r.uniform3fv(this.addr,t),Pn(n,t)}}function BA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(On(n,t))return;r.uniform4fv(this.addr,t),Pn(n,t)}}function FA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(On(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pn(n,t)}else{if(On(n,a))return;Dv.set(a),r.uniformMatrix2fv(this.addr,!1,Dv),Pn(n,a)}}function HA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(On(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pn(n,t)}else{if(On(n,a))return;wv.set(a),r.uniformMatrix3fv(this.addr,!1,wv),Pn(n,a)}}function GA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(On(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pn(n,t)}else{if(On(n,a))return;Cv.set(a),r.uniformMatrix4fv(this.addr,!1,Cv),Pn(n,a)}}function VA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function kA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(On(n,t))return;r.uniform2iv(this.addr,t),Pn(n,t)}}function XA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(On(n,t))return;r.uniform3iv(this.addr,t),Pn(n,t)}}function WA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(On(n,t))return;r.uniform4iv(this.addr,t),Pn(n,t)}}function qA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function YA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(On(n,t))return;r.uniform2uiv(this.addr,t),Pn(n,t)}}function jA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(On(n,t))return;r.uniform3uiv(this.addr,t),Pn(n,t)}}function ZA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(On(n,t))return;r.uniform4uiv(this.addr,t),Pn(n,t)}}function KA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ep.compareFunction=n.isReversedDepthBuffer()?Op:Lp,c=Ep):c=Ux,n.setTexture2D(t||c,l)}function JA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||Lx,l)}function QA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||Ox,l)}function $A(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||Nx,l)}function t2(r){switch(r){case 5126:return PA;case 35664:return zA;case 35665:return IA;case 35666:return BA;case 35674:return FA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return kA;case 35668:case 35672:return XA;case 35669:case 35673:return WA;case 5125:return qA;case 36294:return YA;case 36295:return jA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return $A}}function e2(r,t){r.uniform1fv(this.addr,t)}function n2(r,t){const n=lo(t,this.size,2);r.uniform2fv(this.addr,n)}function i2(r,t){const n=lo(t,this.size,3);r.uniform3fv(this.addr,n)}function a2(r,t){const n=lo(t,this.size,4);r.uniform4fv(this.addr,n)}function s2(r,t){const n=lo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function r2(r,t){const n=lo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function o2(r,t){const n=lo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function l2(r,t){r.uniform1iv(this.addr,t)}function c2(r,t){r.uniform2iv(this.addr,t)}function u2(r,t){r.uniform3iv(this.addr,t)}function f2(r,t){r.uniform4iv(this.addr,t)}function h2(r,t){r.uniform1uiv(this.addr,t)}function d2(r,t){r.uniform2uiv(this.addr,t)}function p2(r,t){r.uniform3uiv(this.addr,t)}function m2(r,t){r.uniform4uiv(this.addr,t)}function g2(r,t,n){const a=this.cache,l=t.length,c=Nu(n,l);On(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Ep:f=Ux;for(let d=0;d!==l;++d)n.setTexture2D(t[d]||f,c[d])}function _2(r,t,n){const a=this.cache,l=t.length,c=Nu(n,l);On(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||Lx,c[f])}function v2(r,t,n){const a=this.cache,l=t.length,c=Nu(n,l);On(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||Ox,c[f])}function x2(r,t,n){const a=this.cache,l=t.length,c=Nu(n,l);On(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||Nx,c[f])}function y2(r){switch(r){case 5126:return e2;case 35664:return n2;case 35665:return i2;case 35666:return a2;case 35674:return s2;case 35675:return r2;case 35676:return o2;case 5124:case 35670:return l2;case 35667:case 35671:return c2;case 35668:case 35672:return u2;case 35669:case 35673:return f2;case 5125:return h2;case 36294:return d2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return x2}}class S2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=t2(n.type)}}class M2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y2(n.type)}}class E2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,n[d.id],a)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function Uv(r,t){r.seq.push(t),r.map[t.id]=t}function b2(r,t,n){const a=r.name,l=a.length;for(Ed.lastIndex=0;;){const c=Ed.exec(a),f=Ed.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Uv(n,p===void 0?new S2(d,r,t):new M2(d,r,t));break}else{let _=n.map[d];_===void 0&&(_=new E2(d),Uv(n,_)),n=_}}}class yu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const d=t.getActiveUniform(n,f),m=t.getUniformLocation(n,d.name);b2(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,f=n.length;c!==f;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&a.push(f)}return a}}function Nv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const T2=37297;let A2=0;function R2(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${n[f]}`)}return a.join(`
`)}const Lv=new Me;function C2(r){Ve._getMatrix(Lv,Ve.workingColorSpace,r);const t=`mat3( ${Lv.elements.map(n=>n.toFixed(4))} )`;switch(Ve.getTransfer(r)){case Su:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ov(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+R2(r.getShaderSource(t),d)}else return c}function w2(r,t){const n=C2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const D2={[Yv]:"Linear",[jv]:"Reinhard",[Zv]:"Cineon",[Kv]:"ACESFilmic",[Qv]:"AgX",[$v]:"Neutral",[Jv]:"Custom"};function U2(r,t){const n=D2[t];return n===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fu=new X;function N2(){Ve.getLuminanceCoefficients(fu);const r=fu.x.toFixed(4),t=fu.y.toFixed(4),n=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function O2(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function P2(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return n}function ml(r){return r!==""}function Pv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(r){return r.replace(z2,B2)}const I2=new Map;function B2(r,t){let n=be[t];if(n===void 0){const a=I2.get(t);if(a!==void 0)n=be[a],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return bp(n)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iv(r){return r.replace(F2,H2)}function H2(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Bv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const G2={[du]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function V2(r){return G2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k2={[js]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function X2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":k2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const W2={[no]:"ENVMAP_MODE_REFRACTION"};function q2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":W2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Y2={[qv]:"ENVMAP_BLENDING_MULTIPLY",[QM]:"ENVMAP_BLENDING_MIX",[$M]:"ENVMAP_BLENDING_ADD"};function j2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Y2[r.combine]||"ENVMAP_BLENDING_NONE"}function Z2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function K2(r,t,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=V2(n),p=X2(n),g=q2(n),_=j2(n),y=Z2(n),S=L2(n),b=O2(c),T=l.createProgram();let M,v,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ml).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ml).join(`
`),v.length>0&&(v+=`
`)):(M=[Bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),v=[Bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==na?"#define TONE_MAPPING":"",n.toneMapping!==na?be.tonemapping_pars_fragment:"",n.toneMapping!==na?U2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,w2("linearToOutputTexel",n.outputColorSpace),N2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ml).join(`
`)),f=bp(f),f=Pv(f,n),f=zv(f,n),d=bp(d),d=Pv(d,n),d=zv(d,n),f=Iv(f),d=Iv(d),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",n.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+M+f,D=O+v+d,z=Nv(l,l.VERTEX_SHADER,U),B=Nv(l,l.FRAGMENT_SHADER,D);l.attachShader(T,z),l.attachShader(T,B),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(V){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(T)||"",et=l.getShaderInfoLog(z)||"",ht=l.getShaderInfoLog(B)||"",ut=Q.trim(),P=et.trim(),H=ht.trim();let at=!0,Et=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(at=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,z,B);else{const St=Ov(l,z,"vertex"),L=Ov(l,B,"fragment");Be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+St+`
`+L)}else ut!==""?fe("WebGLProgram: Program Info Log:",ut):(P===""||H==="")&&(Et=!1);Et&&(V.diagnostics={runnable:at,programLog:ut,vertexShader:{log:P,prefix:M},fragmentShader:{log:H,prefix:v}})}l.deleteShader(z),l.deleteShader(B),Z=new yu(l,T),C=P2(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,T2)),w},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A2++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=B,this}let J2=0;class Q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new $2(t),n.set(t,a)),a}}class $2{constructor(t){this.id=J2++,this.code=t,this.usedTimes=0}}function tR(r,t,n,a,l,c,f){const d=new zp,m=new Q2,p=new Set,g=[],_=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,V,Q,et){const ht=Q.fog,ut=et.geometry,P=C.isMeshStandardMaterial?Q.environment:null,H=(C.isMeshStandardMaterial?n:t).get(C.envMap||P),at=H&&H.mapping===Cu?H.image.height:null,Et=b[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&fe("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,L=St!==void 0?St.length:0;let it=0;ut.morphAttributes.position!==void 0&&(it=1),ut.morphAttributes.normal!==void 0&&(it=2),ut.morphAttributes.color!==void 0&&(it=3);let gt,Rt,kt,$;if(Et){const yt=Qi[Et];gt=yt.vertexShader,Rt=yt.fragmentShader}else gt=C.vertexShader,Rt=C.fragmentShader,m.update(C),kt=m.getVertexShaderID(C),$=m.getFragmentShaderID(C);const lt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Yt=et.isInstancedMesh===!0,zt=et.isBatchedMesh===!0,ve=!!C.map,rn=!!C.matcap,Te=!!H,xe=!!C.aoMap,ze=!!C.lightMap,se=!!C.bumpMap,fn=!!C.normalMap,G=!!C.displacementMap,on=!!C.emissiveMap,Ne=!!C.metalnessMap,Ce=!!C.roughnessMap,Qt=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,q=C.iridescence>0,dt=C.sheen>0,Mt=C.transmission>0,ft=Qt&&!!C.anisotropyMap,$t=N&&!!C.clearcoatMap,Nt=N&&!!C.clearcoatNormalMap,jt=N&&!!C.clearcoatRoughnessMap,le=q&&!!C.iridescenceMap,Tt=q&&!!C.iridescenceThicknessMap,At=dt&&!!C.sheenColorMap,Xt=dt&&!!C.sheenRoughnessMap,Ht=!!C.specularMap,Lt=!!C.specularColorMap,de=!!C.specularIntensityMap,W=Mt&&!!C.transmissionMap,Ot=Mt&&!!C.thicknessMap,Ct=!!C.gradientMap,Gt=!!C.alphaMap,bt=C.alphaTest>0,_t=!!C.alphaHash,wt=!!C.extensions;let K=na;C.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(K=r.toneMapping);const xt={shaderID:Et,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:Rt,defines:C.defines,customVertexShaderID:kt,customFragmentShaderID:$,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:zt,batchingColor:zt&&et._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&et.instanceColor!==null,instancingMorph:Yt&&et.morphTexture!==null,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ao,alphaToCoverage:!!C.alphaToCoverage,map:ve,matcap:rn,envMap:Te,envMapMode:Te&&H.mapping,envMapCubeUVHeight:at,aoMap:xe,lightMap:ze,bumpMap:se,normalMap:fn,displacementMap:G,emissiveMap:on,normalMapObjectSpace:fn&&C.normalMapType===nE,normalMapTangentSpace:fn&&C.normalMapType===lx,metalnessMap:Ne,roughnessMap:Ce,anisotropy:Qt,anisotropyMap:ft,clearcoat:N,clearcoatMap:$t,clearcoatNormalMap:Nt,clearcoatRoughnessMap:jt,dispersion:E,iridescence:q,iridescenceMap:le,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:At,sheenRoughnessMap:Xt,specularMap:Ht,specularColorMap:Lt,specularIntensityMap:de,transmission:Mt,transmissionMap:W,thicknessMap:Ot,gradientMap:Ct,opaque:C.transparent===!1&&C.blending===$r&&C.alphaToCoverage===!1,alphaMap:Gt,alphaTest:bt,alphaHash:_t,combine:C.combine,mapUv:ve&&T(C.map.channel),aoMapUv:xe&&T(C.aoMap.channel),lightMapUv:ze&&T(C.lightMap.channel),bumpMapUv:se&&T(C.bumpMap.channel),normalMapUv:fn&&T(C.normalMap.channel),displacementMapUv:G&&T(C.displacementMap.channel),emissiveMapUv:on&&T(C.emissiveMap.channel),metalnessMapUv:Ne&&T(C.metalnessMap.channel),roughnessMapUv:Ce&&T(C.roughnessMap.channel),anisotropyMapUv:ft&&T(C.anisotropyMap.channel),clearcoatMapUv:$t&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:At&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&T(C.sheenRoughnessMap.channel),specularMapUv:Ht&&T(C.specularMap.channel),specularColorMapUv:Lt&&T(C.specularColorMap.channel),specularIntensityMapUv:de&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Ot&&T(C.thicknessMap.channel),alphaMapUv:Gt&&T(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(fn||Qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ut.attributes.uv&&(ve||Gt),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Dt,skinning:et.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:K,decodeVideoTexture:ve&&C.map.isVideoTexture===!0&&Ve.getTransfer(C.map.colorSpace)===$e,decodeVideoTextureEmissive:on&&C.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(C.emissiveMap.colorSpace)===$e,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ki,flipSided:C.side===hi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:wt&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&C.extensions.multiDraw===!0||zt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return xt.vertexUv1s=p.has(1),xt.vertexUv2s=p.has(2),xt.vertexUv3s=p.has(3),p.clear(),xt}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(O(w,C),U(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function O(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=b[C.type];let V;if(w){const Q=Qi[w];V=UE.clone(Q.uniforms)}else V=C.uniforms;return V}function z(C,w){let V=_.get(w);return V!==void 0?++V.usedTimes:(V=new K2(r,w,C,c),g.push(V),_.set(w,V)),V}function B(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){m.remove(C)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:z,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:Z}}function eR(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function a(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function nR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Fv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hv(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function f(_,y,S,b,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function d(_,y,S,b,T,M){const v=f(_,y,S,b,T,M);S.transmission>0?a.push(v):S.transparent===!0?l.push(v):n.push(v)}function m(_,y,S,b,T,M){const v=f(_,y,S,b,T,M);S.transmission>0?a.unshift(v):S.transparent===!0?l.unshift(v):n.unshift(v)}function p(_,y){n.length>1&&n.sort(_||nR),a.length>1&&a.sort(y||Fv),l.length>1&&l.sort(y||Fv)}function g(){for(let _=t,y=r.length;_<y;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function iR(){let r=new WeakMap;function t(a,l){const c=r.get(a);let f;return c===void 0?(f=new Hv,r.set(a,[f])):l>=c.length?(f=new Hv,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function aR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new Fe};break;case"SpotLight":n={position:new X,direction:new X,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=n,n}}}function sR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let rR=0;function oR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function lR(r){const t=new aR,n=sR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new X);const l=new X,c=new un,f=new un;function d(p){let g=0,_=0,y=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let S=0,b=0,T=0,M=0,v=0,O=0,U=0,D=0,z=0,B=0,I=0;p.sort(oR);for(let C=0,w=p.length;C<w;C++){const V=p[C],Q=V.color,et=V.intensity,ht=V.distance;let ut=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===io?ut=V.shadow.map.texture:ut=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Q.r*et,_+=Q.g*et,y+=Q.b*et;else if(V.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(V.sh.coefficients[P],et);I++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,at=n.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,a.directionalShadow[S]=at,a.directionalShadowMap[S]=ut,a.directionalShadowMatrix[S]=V.shadow.matrix,O++}a.directional[S]=P,S++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(Q).multiplyScalar(et),P.distance=ht,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,a.spot[T]=P;const H=V.shadow;if(V.map&&(a.spotLightMap[z]=V.map,z++,H.updateMatrices(V),V.castShadow&&B++),a.spotLightMatrix[T]=H.matrix,V.castShadow){const at=n.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,a.spotShadow[T]=at,a.spotShadowMap[T]=ut,D++}T++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(Q).multiplyScalar(et),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),a.rectArea[M]=P,M++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const H=V.shadow,at=n.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,a.pointShadow[b]=at,a.pointShadowMap[b]=ut,a.pointShadowMatrix[b]=V.shadow.matrix,U++}a.point[b]=P,b++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(et),P.groundColor.copy(V.groundColor).multiplyScalar(et),a.hemi[v]=P,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Vt.LTC_FLOAT_1,a.rectAreaLTC2=Vt.LTC_FLOAT_2):(a.rectAreaLTC1=Vt.LTC_HALF_1,a.rectAreaLTC2=Vt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=y;const Z=a.hash;(Z.directionalLength!==S||Z.pointLength!==b||Z.spotLength!==T||Z.rectAreaLength!==M||Z.hemiLength!==v||Z.numDirectionalShadows!==O||Z.numPointShadows!==U||Z.numSpotShadows!==D||Z.numSpotMaps!==z||Z.numLightProbes!==I)&&(a.directional.length=S,a.spot.length=T,a.rectArea.length=M,a.point.length=b,a.hemi.length=v,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=D+z-B,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=I,Z.directionalLength=S,Z.pointLength=b,Z.spotLength=T,Z.rectAreaLength=M,Z.hemiLength=v,Z.numDirectionalShadows=O,Z.numPointShadows=U,Z.numSpotShadows=D,Z.numSpotMaps=z,Z.numLightProbes=I,a.version=rR++)}function m(p,g){let _=0,y=0,S=0,b=0,T=0;const M=g.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const U=p[v];if(U.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(U.isSpotLight){const D=a.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=a.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const D=a.point[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const D=a.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:a}}function Gv(r){const t=new lR(r),n=[],a=[];function l(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function d(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function cR(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Gv(r),t.set(l,[d])):c>=f.length?(d=new Gv(r),f.push(d)):d=f[c],d}function a(){t=new WeakMap}return{get:n,dispose:a}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hR=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],dR=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Vv=new un,fl=new X,bd=new X;function pR(r,t,n){let a=new Ip;const l=new Bt,c=new Bt,f=new Sn,d=new E1,m=new b1,p={},g=n.maxTextureSize,_={[vs]:hi,[hi]:vs,[ki]:ki},y=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:uR,fragmentShader:fR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const b=new Nn;b.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new jn(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let v=this.type;this.render=function(B,I,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===LM&&(fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=du);const C=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Na),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const et=v!==this.type;et&&I.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(ut=>ut.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,ut=B.length;ht<ut;ht++){const P=B[ht],H=P.shadow;if(H===void 0){fe("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const at=H.getFrameExtents();if(l.multiply(at),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/at.x),l.x=c.x*at.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/at.y),l.y=c.y*at.y,H.mapSize.y=c.y)),H.map===null||et===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===hl){if(P.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ia(l.x,l.y,{format:io,type:Pa,minFilter:$n,magFilter:$n,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new El(l.x,l.y,ta),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=za,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zn,H.map.depthTexture.magFilter=Zn}else{P.isPointLight?(H.map=new _x(l.x),H.map.depthTexture=new XE(l.x,aa)):(H.map=new ia(l.x,l.y),H.map.depthTexture=new El(l.x,l.y,aa)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=za;const St=r.state.buffers.depth.getReversed();this.type===du?(H.map.depthTexture.compareFunction=St?Op:Lp,H.map.depthTexture.minFilter=$n,H.map.depthTexture.magFilter=$n):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zn,H.map.depthTexture.magFilter=Zn)}H.camera.updateProjectionMatrix()}const Et=H.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<Et;St++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,St),r.clear();else{St===0&&(r.setRenderTarget(H.map),r.clear());const L=H.getViewport(St);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),Q.viewport(f)}if(P.isPointLight){const L=H.camera,it=H.matrix,gt=P.distance||L.far;gt!==L.far&&(L.far=gt,L.updateProjectionMatrix()),fl.setFromMatrixPosition(P.matrixWorld),L.position.copy(fl),bd.copy(L.position),bd.add(hR[St]),L.up.copy(dR[St]),L.lookAt(bd),L.updateMatrixWorld(),it.makeTranslation(-fl.x,-fl.y,-fl.z),Vv.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Vv,L.coordinateSystem,L.reversedDepth)}else H.updateMatrices(P);a=H.getFrustum(),D(I,Z,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===hl&&O(H,Z),H.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(C,w,V)};function O(B,I){const Z=t.update(T);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ia(l.x,l.y,{format:io,type:Pa})),y.uniforms.shadow_pass.value=B.map.depthTexture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(I,null,Z,y,T,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(I,null,Z,S,T,null)}function U(B,I,Z,C){let w=null;const V=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)w=V;else if(w=Z.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=w.uuid,et=I.uuid;let ht=p[Q];ht===void 0&&(ht={},p[Q]=ht);let ut=ht[et];ut===void 0&&(ut=w.clone(),ht[et]=ut,I.addEventListener("dispose",z)),w=ut}if(w.visible=I.visible,w.wireframe=I.wireframe,C===hl?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:_[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=r.properties.get(w);Q.light=Z}return w}function D(B,I,Z,C,w){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===hl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const et=t.update(B),ht=B.material;if(Array.isArray(ht)){const ut=et.groups;for(let P=0,H=ut.length;P<H;P++){const at=ut[P],Et=ht[at.materialIndex];if(Et&&Et.visible){const St=U(B,Et,C,w);B.onBeforeShadow(r,B,I,Z,et,St,at),r.renderBufferDirect(Z,null,et,St,B,at),B.onAfterShadow(r,B,I,Z,et,St,at)}}}else if(ht.visible){const ut=U(B,ht,C,w);B.onBeforeShadow(r,B,I,Z,et,ut,null),r.renderBufferDirect(Z,null,et,ut,B,null),B.onAfterShadow(r,B,I,Z,et,ut,null)}}const Q=B.children;for(let et=0,ht=Q.length;et<ht;et++)D(Q[et],I,Z,C,w)}function z(B){B.target.removeEventListener("dispose",z);for(const Z in p){const C=p[Z],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const mR={[Cd]:wd,[Dd]:Ld,[Ud]:Od,[eo]:Nd,[wd]:Cd,[Ld]:Dd,[Od]:Ud,[Nd]:eo};function gR(r,t){function n(){let W=!1;const Ot=new Sn;let Ct=null;const Gt=new Sn(0,0,0,0);return{setMask:function(bt){Ct!==bt&&!W&&(r.colorMask(bt,bt,bt,bt),Ct=bt)},setLocked:function(bt){W=bt},setClear:function(bt,_t,wt,K,xt){xt===!0&&(bt*=K,_t*=K,wt*=K),Ot.set(bt,_t,wt,K),Gt.equals(Ot)===!1&&(r.clearColor(bt,_t,wt,K),Gt.copy(Ot))},reset:function(){W=!1,Ct=null,Gt.set(-1,0,0,0)}}}function a(){let W=!1,Ot=!1,Ct=null,Gt=null,bt=null;return{setReversed:function(_t){if(Ot!==_t){const wt=t.get("EXT_clip_control");_t?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Ot=_t;const K=bt;bt=null,this.setClear(K)}},getReversed:function(){return Ot},setTest:function(_t){_t?lt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(_t){Ct!==_t&&!W&&(r.depthMask(_t),Ct=_t)},setFunc:function(_t){if(Ot&&(_t=mR[_t]),Gt!==_t){switch(_t){case Cd:r.depthFunc(r.NEVER);break;case wd:r.depthFunc(r.ALWAYS);break;case Dd:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case Ud:r.depthFunc(r.EQUAL);break;case Nd:r.depthFunc(r.GEQUAL);break;case Ld:r.depthFunc(r.GREATER);break;case Od:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Gt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){bt!==_t&&(Ot&&(_t=1-_t),r.clearDepth(_t),bt=_t)},reset:function(){W=!1,Ct=null,Gt=null,bt=null,Ot=!1}}}function l(){let W=!1,Ot=null,Ct=null,Gt=null,bt=null,_t=null,wt=null,K=null,xt=null;return{setTest:function(yt){W||(yt?lt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(yt){Ot!==yt&&!W&&(r.stencilMask(yt),Ot=yt)},setFunc:function(yt,Pt,Wt){(Ct!==yt||Gt!==Pt||bt!==Wt)&&(r.stencilFunc(yt,Pt,Wt),Ct=yt,Gt=Pt,bt=Wt)},setOp:function(yt,Pt,Wt){(_t!==yt||wt!==Pt||K!==Wt)&&(r.stencilOp(yt,Pt,Wt),_t=yt,wt=Pt,K=Wt)},setLocked:function(yt){W=yt},setClear:function(yt){xt!==yt&&(r.clearStencil(yt),xt=yt)},reset:function(){W=!1,Ot=null,Ct=null,Gt=null,bt=null,_t=null,wt=null,K=null,xt=null}}}const c=new n,f=new a,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,S=[],b=null,T=!1,M=null,v=null,O=null,U=null,D=null,z=null,B=null,I=new Fe(0,0,0),Z=0,C=!1,w=null,V=null,Q=null,et=null,ht=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const at=r.getParameter(r.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),P=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),P=H>=2);let Et=null,St={};const L=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),gt=new Sn().fromArray(L),Rt=new Sn().fromArray(it);function kt(W,Ot,Ct,Gt){const bt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(W,_t),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<Ct;wt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Gt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Ot+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return _t}const $={};$[r.TEXTURE_2D]=kt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=kt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=kt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=kt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),lt(r.DEPTH_TEST),f.setFunc(eo),se(!1),fn(P_),lt(r.CULL_FACE),xe(Na);function lt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Dt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Yt(W,Ot){return _[W]!==Ot?(r.bindFramebuffer(W,Ot),_[W]=Ot,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function zt(W,Ot){let Ct=S,Gt=!1;if(W){Ct=y.get(Ot),Ct===void 0&&(Ct=[],y.set(Ot,Ct));const bt=W.textures;if(Ct.length!==bt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,wt=bt.length;_t<wt;_t++)Ct[_t]=r.COLOR_ATTACHMENT0+_t;Ct.length=bt.length,Gt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Gt=!0);Gt&&r.drawBuffers(Ct)}function ve(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const rn={[ks]:r.FUNC_ADD,[PM]:r.FUNC_SUBTRACT,[zM]:r.FUNC_REVERSE_SUBTRACT};rn[IM]=r.MIN,rn[BM]=r.MAX;const Te={[FM]:r.ZERO,[HM]:r.ONE,[GM]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[YM]:r.SRC_ALPHA_SATURATE,[WM]:r.DST_COLOR,[kM]:r.DST_ALPHA,[VM]:r.ONE_MINUS_SRC_COLOR,[Rd]:r.ONE_MINUS_SRC_ALPHA,[qM]:r.ONE_MINUS_DST_COLOR,[XM]:r.ONE_MINUS_DST_ALPHA,[jM]:r.CONSTANT_COLOR,[ZM]:r.ONE_MINUS_CONSTANT_COLOR,[KM]:r.CONSTANT_ALPHA,[JM]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(W,Ot,Ct,Gt,bt,_t,wt,K,xt,yt){if(W===Na){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(lt(r.BLEND),T=!0),W!==OM){if(W!==M||yt!==C){if((v!==ks||D!==ks)&&(r.blendEquation(r.FUNC_ADD),v=ks,D=ks),yt)switch(W){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFunc(r.ONE,r.ONE);break;case I_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case B_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Be("WebGLState: Invalid blending: ",W);break}else switch(W){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case I_:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B_:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",W);break}O=null,U=null,z=null,B=null,I.set(0,0,0),Z=0,M=W,C=yt}return}bt=bt||Ot,_t=_t||Ct,wt=wt||Gt,(Ot!==v||bt!==D)&&(r.blendEquationSeparate(rn[Ot],rn[bt]),v=Ot,D=bt),(Ct!==O||Gt!==U||_t!==z||wt!==B)&&(r.blendFuncSeparate(Te[Ct],Te[Gt],Te[_t],Te[wt]),O=Ct,U=Gt,z=_t,B=wt),(K.equals(I)===!1||xt!==Z)&&(r.blendColor(K.r,K.g,K.b,xt),I.copy(K),Z=xt),M=W,C=!1}function ze(W,Ot){W.side===ki?Dt(r.CULL_FACE):lt(r.CULL_FACE);let Ct=W.side===hi;Ot&&(Ct=!Ct),se(Ct),W.blending===$r&&W.transparent===!1?xe(Na):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Gt=W.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),on(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function fn(W){W!==UM?(lt(r.CULL_FACE),W!==V&&(W===P_?r.cullFace(r.BACK):W===NM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),V=W}function G(W){W!==Q&&(P&&r.lineWidth(W),Q=W)}function on(W,Ot,Ct){W?(lt(r.POLYGON_OFFSET_FILL),(et!==Ot||ht!==Ct)&&(r.polygonOffset(Ot,Ct),et=Ot,ht=Ct)):Dt(r.POLYGON_OFFSET_FILL)}function Ne(W){W?lt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function Ce(W){W===void 0&&(W=r.TEXTURE0+ut-1),Et!==W&&(r.activeTexture(W),Et=W)}function Qt(W,Ot,Ct){Ct===void 0&&(Et===null?Ct=r.TEXTURE0+ut-1:Ct=Et);let Gt=St[Ct];Gt===void 0&&(Gt={type:void 0,texture:void 0},St[Ct]=Gt),(Gt.type!==W||Gt.texture!==Ot)&&(Et!==Ct&&(r.activeTexture(Ct),Et=Ct),r.bindTexture(W,Ot||$[W]),Gt.type=W,Gt.texture=Ot)}function N(){const W=St[Et];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function $t(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function Nt(){try{r.texStorage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function jt(){try{r.texStorage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function le(){try{r.texImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Tt(){try{r.texImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function At(W){gt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Xt(W){Rt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Ht(W,Ot){let Ct=p.get(Ot);Ct===void 0&&(Ct=new WeakMap,p.set(Ot,Ct));let Gt=Ct.get(W);Gt===void 0&&(Gt=r.getUniformBlockIndex(Ot,W.name),Ct.set(W,Gt))}function Lt(W,Ot){const Gt=p.get(Ot).get(W);m.get(Ot)!==Gt&&(r.uniformBlockBinding(Ot,Gt,W.__bindingPointIndex),m.set(Ot,Gt))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Et=null,St={},_={},y=new WeakMap,S=[],b=null,T=!1,M=null,v=null,O=null,U=null,D=null,z=null,B=null,I=new Fe(0,0,0),Z=0,C=!1,w=null,V=null,Q=null,et=null,ht=null,gt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:lt,disable:Dt,bindFramebuffer:Yt,drawBuffers:zt,useProgram:ve,setBlending:xe,setMaterial:ze,setFlipSided:se,setCullFace:fn,setLineWidth:G,setPolygonOffset:on,setScissorTest:Ne,activeTexture:Ce,bindTexture:Qt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:le,texImage3D:Tt,updateUBOMapping:Ht,uniformBlockBinding:Lt,texStorage2D:Nt,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:Mt,compressedTexSubImage2D:ft,compressedTexSubImage3D:$t,scissor:At,viewport:Xt,reset:de}}function _R(r,t,n,a,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return S?new OffscreenCanvas(N,E):Eu("canvas")}function T(N,E,q){let dt=1;const Mt=Qt(N);if((Mt.width>q||Mt.height>q)&&(dt=q/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(dt*Mt.width),$t=Math.floor(dt*Mt.height);_===void 0&&(_=b(ft,$t));const Nt=E?b(ft,$t):_;return Nt.width=ft,Nt.height=$t,Nt.getContext("2d").drawImage(N,0,0,ft,$t),fe("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ft+"x"+$t+")."),Nt}else return"data"in N&&fe("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function M(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,E,q,dt,Mt=!1){if(N!==null){if(r[N]!==void 0)return r[N];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=E;if(E===r.RED&&(q===r.FLOAT&&(ft=r.R32F),q===r.HALF_FLOAT&&(ft=r.R16F),q===r.UNSIGNED_BYTE&&(ft=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.R8UI),q===r.UNSIGNED_SHORT&&(ft=r.R16UI),q===r.UNSIGNED_INT&&(ft=r.R32UI),q===r.BYTE&&(ft=r.R8I),q===r.SHORT&&(ft=r.R16I),q===r.INT&&(ft=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ft=r.RG32F),q===r.HALF_FLOAT&&(ft=r.RG16F),q===r.UNSIGNED_BYTE&&(ft=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RG8UI),q===r.UNSIGNED_SHORT&&(ft=r.RG16UI),q===r.UNSIGNED_INT&&(ft=r.RG32UI),q===r.BYTE&&(ft=r.RG8I),q===r.SHORT&&(ft=r.RG16I),q===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),q===r.UNSIGNED_INT&&(ft=r.RGB32UI),q===r.BYTE&&(ft=r.RGB8I),q===r.SHORT&&(ft=r.RGB16I),q===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),q===r.UNSIGNED_INT&&(ft=r.RGBA32UI),q===r.BYTE&&(ft=r.RGBA8I),q===r.SHORT&&(ft=r.RGBA16I),q===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),E===r.RGBA){const $t=Mt?Su:Ve.getTransfer(dt);q===r.FLOAT&&(ft=r.RGBA32F),q===r.HALF_FLOAT&&(ft=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ft=$t===$e?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(N,E){let q;return N?E===null||E===aa||E===Sl?q=r.DEPTH24_STENCIL8:E===ta?q=r.DEPTH32F_STENCIL8:E===yl&&(q=r.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===aa||E===Sl?q=r.DEPTH_COMPONENT24:E===ta?q=r.DEPTH_COMPONENT32F:E===yl&&(q=r.DEPTH_COMPONENT16),q}function z(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Zn&&N.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function B(N){const E=N.target;E.removeEventListener("dispose",B),Z(E),E.isVideoTexture&&g.delete(E)}function I(N){const E=N.target;E.removeEventListener("dispose",I),w(E)}function Z(N){const E=a.get(N);if(E.__webglInit===void 0)return;const q=N.source,dt=y.get(q);if(dt){const Mt=dt[E.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(N),Object.keys(dt).length===0&&y.delete(q)}a.remove(N)}function C(N){const E=a.get(N);r.deleteTexture(E.__webglTexture);const q=N.source,dt=y.get(q);delete dt[E.__cacheKey],f.memory.textures--}function w(N){const E=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let Mt=0;Mt<E.__webglFramebuffer[dt].length;Mt++)r.deleteFramebuffer(E.__webglFramebuffer[dt][Mt]);else r.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[dt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let dt=0,Mt=q.length;dt<Mt;dt++){const ft=a.get(q[dt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),a.remove(q[dt])}a.remove(N)}let V=0;function Q(){V=0}function et(){const N=V;return N>=l.maxTextures&&fe("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function ht(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ut(N,E){const q=a.get(N);if(N.isVideoTexture&&Ne(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const dt=N.image;if(dt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function P(N,E){const q=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){$(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function H(N,E){const q=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){$(q,N,E);return}n.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function at(N,E){const q=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){lt(q,N,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const Et={[Id]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[Bd]:r.MIRRORED_REPEAT},St={[Zn]:r.NEAREST,[tE]:r.NEAREST_MIPMAP_NEAREST,[Ic]:r.NEAREST_MIPMAP_LINEAR,[$n]:r.LINEAR,[kh]:r.LINEAR_MIPMAP_NEAREST,[Ws]:r.LINEAR_MIPMAP_LINEAR},L={[iE]:r.NEVER,[lE]:r.ALWAYS,[aE]:r.LESS,[Lp]:r.LEQUAL,[sE]:r.EQUAL,[Op]:r.GEQUAL,[rE]:r.GREATER,[oE]:r.NOTEQUAL};function it(N,E){if(E.type===ta&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===kh||E.magFilter===Ic||E.magFilter===Ws||E.minFilter===$n||E.minFilter===kh||E.minFilter===Ic||E.minFilter===Ws)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Et[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Et[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Et[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zn||E.minFilter!==Ic&&E.minFilter!==Ws||E.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function gt(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",B));const dt=E.source;let Mt=y.get(dt);Mt===void 0&&(Mt={},y.set(dt,Mt));const ft=ht(E);if(ft!==N.__cacheKey){Mt[ft]===void 0&&(Mt[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),Mt[ft].usedTimes++;const $t=Mt[N.__cacheKey];$t!==void 0&&(Mt[N.__cacheKey].usedTimes--,$t.usedTimes===0&&C(E)),N.__cacheKey=ft,N.__webglTexture=Mt[ft].texture}return q}function Rt(N,E,q){return Math.floor(Math.floor(N/q)/E)}function kt(N,E,q,dt){const ft=N.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,dt,E.data);else{ft.sort((Tt,At)=>Tt.start-At.start);let $t=0;for(let Tt=1;Tt<ft.length;Tt++){const At=ft[$t],Xt=ft[Tt],Ht=At.start+At.count,Lt=Rt(Xt.start,E.width,4),de=Rt(At.start,E.width,4);Xt.start<=Ht+1&&Lt===de&&Rt(Xt.start+Xt.count-1,E.width,4)===Lt?At.count=Math.max(At.count,Xt.start+Xt.count-At.start):(++$t,ft[$t]=Xt)}ft.length=$t+1;const Nt=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,At=ft.length;Tt<At;Tt++){const Xt=ft[Tt],Ht=Math.floor(Xt.start/4),Lt=Math.ceil(Xt.count/4),de=Ht%E.width,W=Math.floor(Ht/E.width),Ot=Lt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,de,W,Ot,Ct,q,dt,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Nt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function $(N,E,q){let dt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=r.TEXTURE_3D);const Mt=gt(N,E),ft=E.source;n.bindTexture(dt,N.__webglTexture,r.TEXTURE0+q);const $t=a.get(ft);if(ft.version!==$t.__version||Mt===!0){n.activeTexture(r.TEXTURE0+q);const Nt=Ve.getPrimaries(Ve.workingColorSpace),jt=E.colorSpace===gs?null:Ve.getPrimaries(E.colorSpace),le=E.colorSpace===gs||Nt===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Tt=T(E.image,!1,l.maxTextureSize);Tt=Ce(E,Tt);const At=c.convert(E.format,E.colorSpace),Xt=c.convert(E.type);let Ht=U(E.internalFormat,At,Xt,E.colorSpace,E.isVideoTexture);it(dt,E);let Lt;const de=E.mipmaps,W=E.isVideoTexture!==!0,Ot=$t.__version===void 0||Mt===!0,Ct=ft.dataReady,Gt=z(E,Tt);if(E.isDepthTexture)Ht=D(E.format===qs,E.type),Ot&&(W?n.texStorage2D(r.TEXTURE_2D,1,Ht,Tt.width,Tt.height):n.texImage2D(r.TEXTURE_2D,0,Ht,Tt.width,Tt.height,0,At,Xt,null));else if(E.isDataTexture)if(de.length>0){W&&Ot&&n.texStorage2D(r.TEXTURE_2D,Gt,Ht,de[0].width,de[0].height);for(let bt=0,_t=de.length;bt<_t;bt++)Lt=de[bt],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,At,Xt,Lt.data):n.texImage2D(r.TEXTURE_2D,bt,Ht,Lt.width,Lt.height,0,At,Xt,Lt.data);E.generateMipmaps=!1}else W?(Ot&&n.texStorage2D(r.TEXTURE_2D,Gt,Ht,Tt.width,Tt.height),Ct&&kt(E,Tt,At,Xt)):n.texImage2D(r.TEXTURE_2D,0,Ht,Tt.width,Tt.height,0,At,Xt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ot&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Ht,de[0].width,de[0].height,Tt.depth);for(let bt=0,_t=de.length;bt<_t;bt++)if(Lt=de[bt],E.format!==Xi)if(At!==null)if(W){if(Ct)if(E.layerUpdates.size>0){const wt=xv(Lt.width,Lt.height,E.format,E.type);for(const K of E.layerUpdates){const xt=Lt.data.subarray(K*wt/Lt.data.BYTES_PER_ELEMENT,(K+1)*wt/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,K,Lt.width,Lt.height,1,At,xt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Tt.depth,At,Lt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Ht,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Tt.depth,At,Xt,Lt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,bt,Ht,Lt.width,Lt.height,Tt.depth,0,At,Xt,Lt.data)}else{W&&Ot&&n.texStorage2D(r.TEXTURE_2D,Gt,Ht,de[0].width,de[0].height);for(let bt=0,_t=de.length;bt<_t;bt++)Lt=de[bt],E.format!==Xi?At!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,At,Lt.data):n.compressedTexImage2D(r.TEXTURE_2D,bt,Ht,Lt.width,Lt.height,0,Lt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,At,Xt,Lt.data):n.texImage2D(r.TEXTURE_2D,bt,Ht,Lt.width,Lt.height,0,At,Xt,Lt.data)}else if(E.isDataArrayTexture)if(W){if(Ot&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Ht,Tt.width,Tt.height,Tt.depth),Ct)if(E.layerUpdates.size>0){const bt=xv(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const wt=Tt.data.subarray(_t*bt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*bt/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,At,Xt,wt)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,At,Xt,Tt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,Tt.width,Tt.height,Tt.depth,0,At,Xt,Tt.data);else if(E.isData3DTexture)W?(Ot&&n.texStorage3D(r.TEXTURE_3D,Gt,Ht,Tt.width,Tt.height,Tt.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,At,Xt,Tt.data)):n.texImage3D(r.TEXTURE_3D,0,Ht,Tt.width,Tt.height,Tt.depth,0,At,Xt,Tt.data);else if(E.isFramebufferTexture){if(Ot)if(W)n.texStorage2D(r.TEXTURE_2D,Gt,Ht,Tt.width,Tt.height);else{let bt=Tt.width,_t=Tt.height;for(let wt=0;wt<Gt;wt++)n.texImage2D(r.TEXTURE_2D,wt,Ht,bt,_t,0,At,Xt,null),bt>>=1,_t>>=1}}else if(de.length>0){if(W&&Ot){const bt=Qt(de[0]);n.texStorage2D(r.TEXTURE_2D,Gt,Ht,bt.width,bt.height)}for(let bt=0,_t=de.length;bt<_t;bt++)Lt=de[bt],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,At,Xt,Lt):n.texImage2D(r.TEXTURE_2D,bt,Ht,At,Xt,Lt);E.generateMipmaps=!1}else if(W){if(Ot){const bt=Qt(Tt);n.texStorage2D(r.TEXTURE_2D,Gt,Ht,bt.width,bt.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Xt,Tt)}else n.texImage2D(r.TEXTURE_2D,0,Ht,At,Xt,Tt);M(E)&&v(dt),$t.__version=ft.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function lt(N,E,q){if(E.image.length!==6)return;const dt=gt(N,E),Mt=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+q);const ft=a.get(Mt);if(Mt.version!==ft.__version||dt===!0){n.activeTexture(r.TEXTURE0+q);const $t=Ve.getPrimaries(Ve.workingColorSpace),Nt=E.colorSpace===gs?null:Ve.getPrimaries(E.colorSpace),jt=E.colorSpace===gs||$t===Nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,At=[];for(let _t=0;_t<6;_t++)!le&&!Tt?At[_t]=T(E.image[_t],!0,l.maxCubemapSize):At[_t]=Tt?E.image[_t].image:E.image[_t],At[_t]=Ce(E,At[_t]);const Xt=At[0],Ht=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),de=U(E.internalFormat,Ht,Lt,E.colorSpace),W=E.isVideoTexture!==!0,Ot=ft.__version===void 0||dt===!0,Ct=Mt.dataReady;let Gt=z(E,Xt);it(r.TEXTURE_CUBE_MAP,E);let bt;if(le){W&&Ot&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,de,Xt.width,Xt.height);for(let _t=0;_t<6;_t++){bt=At[_t].mipmaps;for(let wt=0;wt<bt.length;wt++){const K=bt[wt];E.format!==Xi?Ht!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,K.width,K.height,Ht,K.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,de,K.width,K.height,0,K.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,K.width,K.height,Ht,Lt,K.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,de,K.width,K.height,0,Ht,Lt,K.data)}}}else{if(bt=E.mipmaps,W&&Ot){bt.length>0&&Gt++;const _t=Qt(At[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,de,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,At[_t].width,At[_t].height,Ht,Lt,At[_t].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,de,At[_t].width,At[_t].height,0,Ht,Lt,At[_t].data);for(let wt=0;wt<bt.length;wt++){const xt=bt[wt].image[_t].image;W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,xt.width,xt.height,Ht,Lt,xt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,de,xt.width,xt.height,0,Ht,Lt,xt.data)}}else{W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ht,Lt,At[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,de,Ht,Lt,At[_t]);for(let wt=0;wt<bt.length;wt++){const K=bt[wt];W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Ht,Lt,K.image[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,de,Ht,Lt,K.image[_t])}}}M(E)&&v(r.TEXTURE_CUBE_MAP),ft.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Dt(N,E,q,dt,Mt,ft){const $t=c.convert(q.format,q.colorSpace),Nt=c.convert(q.type),jt=U(q.internalFormat,$t,Nt,q.colorSpace),le=a.get(E),Tt=a.get(q);if(Tt.__renderTarget=E,!le.__hasExternalTextures){const At=Math.max(1,E.width>>ft),Xt=Math.max(1,E.height>>ft);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?n.texImage3D(Mt,ft,jt,At,Xt,E.depth,0,$t,Nt,null):n.texImage2D(Mt,ft,jt,At,Xt,0,$t,Nt,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),on(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,Mt,Tt.__webglTexture,0,G(E)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,Mt,Tt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(N,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const dt=E.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,ft=D(E.stencilBuffer,Mt),$t=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;on(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),ft,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$t,r.RENDERBUFFER,N)}else{const dt=E.textures;for(let Mt=0;Mt<dt.length;Mt++){const ft=dt[Mt],$t=c.convert(ft.format,ft.colorSpace),Nt=c.convert(ft.type),jt=U(ft.internalFormat,$t,Nt,ft.colorSpace);on(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),jt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),jt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,jt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(N,E,q){const dt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=a.get(E.depthTexture);if(Mt.__renderTarget=E,(!Mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),it(r.TEXTURE_CUBE_MAP,E.depthTexture);const le=c.convert(E.depthTexture.format),Tt=c.convert(E.depthTexture.type);let At;E.depthTexture.format===za?At=r.DEPTH_COMPONENT24:E.depthTexture.format===qs&&(At=r.DEPTH24_STENCIL8);for(let Xt=0;Xt<6;Xt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,At,E.width,E.height,0,le,Tt,null)}}else ut(E.depthTexture,0);const ft=Mt.__webglTexture,$t=G(E),Nt=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,jt=E.depthTexture.format===qs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===za)on(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Nt,ft,0,$t):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Nt,ft,0);else if(E.depthTexture.format===qs)on(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Nt,ft,0,$t):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Nt,ft,0);else throw new Error("Unknown depthTexture format")}function ve(N){const E=a.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const Mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),E.__depthDisposeCallback=Mt}E.__boundDepthTexture=dt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)zt(E.__webglFramebuffer[dt],N,dt);else{const dt=N.texture.mipmaps;dt&&dt.length>0?zt(E.__webglFramebuffer[0],N,0):zt(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=r.createRenderbuffer(),Yt(E.__webglDepthbuffer[dt],N,!1);else{const Mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ft)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Yt(E.__webglDepthbuffer,N,!1);else{const Mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function rn(N,E,q){const dt=a.get(N);E!==void 0&&Dt(dt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ve(N)}function Te(N){const E=N.texture,q=a.get(N),dt=a.get(E);N.addEventListener("dispose",I);const Mt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,$t=Mt.length>1;if($t||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=E.version,f.memory.textures++),ft){q.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Nt]=[];for(let jt=0;jt<E.mipmaps.length;jt++)q.__webglFramebuffer[Nt][jt]=r.createFramebuffer()}else q.__webglFramebuffer[Nt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Nt=0;Nt<E.mipmaps.length;Nt++)q.__webglFramebuffer[Nt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if($t)for(let Nt=0,jt=Mt.length;Nt<jt;Nt++){const le=a.get(Mt[Nt]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&on(N)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Mt.length;Nt++){const jt=Mt[Nt];q.__webglColorRenderbuffer[Nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Nt]);const le=c.convert(jt.format,jt.colorSpace),Tt=c.convert(jt.type),At=U(jt.internalFormat,le,Tt,jt.colorSpace,N.isXRRenderTarget===!0),Xt=G(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,At,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,q.__webglColorRenderbuffer[Nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),it(r.TEXTURE_CUBE_MAP,E);for(let Nt=0;Nt<6;Nt++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Dt(q.__webglFramebuffer[Nt][jt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,jt);else Dt(q.__webglFramebuffer[Nt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);M(E)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($t){for(let Nt=0,jt=Mt.length;Nt<jt;Nt++){const le=Mt[Nt],Tt=a.get(le);let At=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(At,Tt.__webglTexture),it(At,le),Dt(q.__webglFramebuffer,N,le,r.COLOR_ATTACHMENT0+Nt,At,0),M(le)&&v(At)}n.unbindTexture()}else{let Nt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Nt,dt.__webglTexture),it(Nt,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Dt(q.__webglFramebuffer[jt],N,E,r.COLOR_ATTACHMENT0,Nt,jt);else Dt(q.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Nt,0);M(E)&&v(Nt),n.unbindTexture()}N.depthBuffer&&ve(N)}function xe(N){const E=N.textures;for(let q=0,dt=E.length;q<dt;q++){const Mt=E[q];if(M(Mt)){const ft=O(N),$t=a.get(Mt).__webglTexture;n.bindTexture(ft,$t),v(ft),n.unbindTexture()}}}const ze=[],se=[];function fn(N){if(N.samples>0){if(on(N)===!1){const E=N.textures,q=N.width,dt=N.height;let Mt=r.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$t=a.get(N),Nt=E.length>1;if(Nt)for(let le=0;le<E.length;le++)n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);const jt=N.texture.mipmaps;jt&&jt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let le=0;le<E.length;le++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$t.__webglColorRenderbuffer[le]);const Tt=a.get(E[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,q,dt,0,0,q,dt,Mt,r.NEAREST),m===!0&&(ze.length=0,se.length=0,ze.push(r.COLOR_ATTACHMENT0+le),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ze.push(ft),se.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Nt)for(let le=0;le<E.length;le++){n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,$t.__webglColorRenderbuffer[le]);const Tt=a.get(E[le]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,Tt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function G(N){return Math.min(l.maxSamples,N.samples)}function on(N){const E=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ne(N){const E=f.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Ce(N,E){const q=N.colorSpace,dt=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==ao&&q!==gs&&(Ve.getTransfer(q)===$e?(dt!==Xi||Mt!==Mi)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",q)),E}function Qt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=rn,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vR(r,t){function n(a,l=gs){let c;const f=Ve.getTransfer(l);if(a===Mi)return r.UNSIGNED_BYTE;if(a===Cp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===wp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===ix)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===ax)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===ex)return r.BYTE;if(a===nx)return r.SHORT;if(a===yl)return r.UNSIGNED_SHORT;if(a===Rp)return r.INT;if(a===aa)return r.UNSIGNED_INT;if(a===ta)return r.FLOAT;if(a===Pa)return r.HALF_FLOAT;if(a===sx)return r.ALPHA;if(a===rx)return r.RGB;if(a===Xi)return r.RGBA;if(a===za)return r.DEPTH_COMPONENT;if(a===qs)return r.DEPTH_STENCIL;if(a===ox)return r.RED;if(a===Dp)return r.RED_INTEGER;if(a===io)return r.RG;if(a===Up)return r.RG_INTEGER;if(a===Np)return r.RGBA_INTEGER;if(a===pu||a===mu||a===gu||a===_u)if(f===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fd||a===Hd||a===Gd||a===Vd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Gd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kd||a===Xd||a===Wd||a===qd||a===Yd||a===jd||a===Zd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===kd||a===Xd)return f===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Wd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===qd)return c.COMPRESSED_R11_EAC;if(a===Yd)return c.COMPRESSED_SIGNED_R11_EAC;if(a===jd)return c.COMPRESSED_RG11_EAC;if(a===Zd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Kd||a===Jd||a===Qd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Kd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Jd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Qd)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===$d)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===tp)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ep)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===np)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ip)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ap)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===sp)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===rp)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===op)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===lp)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===cp)return f===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===up||a===fp||a===hp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===up)return f===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===hp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===dp||a===pp||a===mp||a===gp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===dp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Sl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yR=`
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

}`;class SR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new yx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ra({vertexShader:xR,fragmentShader:yR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jn(new Ys(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MR extends Js{constructor(t,n){super();const a=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,y=null,S=null,b=null;const T=typeof XRWebGLBinding<"u",M=new SR,v={},O=n.getContextAttributes();let U=null,D=null;const z=[],B=[],I=new Bt;let Z=null;const C=new Oi;C.viewport=new Sn;const w=new Oi;w.viewport=new Sn;const V=[C,w],Q=new D1;let et=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let lt=z[$];return lt===void 0&&(lt=new fd,z[$]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function($){let lt=z[$];return lt===void 0&&(lt=new fd,z[$]=lt),lt.getGripSpace()},this.getHand=function($){let lt=z[$];return lt===void 0&&(lt=new fd,z[$]=lt),lt.getHandSpace()};function ut($){const lt=B.indexOf($.inputSource);if(lt===-1)return;const Dt=z[lt];Dt!==void 0&&(Dt.update($.inputSource,$.frame,p||f),Dt.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let $=0;$<z.length;$++){const lt=B[$];lt!==null&&(B[$]=null,z[$].disconnect(lt))}et=null,ht=null,M.reset();for(const $ in v)delete v[$];t.setRenderTarget(U),S=null,y=null,_=null,l=null,D=null,kt.stop(),a.isPresenting=!1,t.setPixelRatio(Z),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,a.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,a.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await n.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Yt=null,zt=null;O.depth&&(zt=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=O.stencil?qs:za,Yt=O.stencil?Sl:aa);const ve={colorFormat:n.RGBA8,depthFormat:zt,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(ve),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),D=new ia(y.textureWidth,y.textureHeight,{format:Xi,type:Mi,depthTexture:new El(y.textureWidth,y.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Dt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,Dt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ia(S.framebufferWidth,S.framebufferHeight,{format:Xi,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),kt.setContext(l),kt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H($){for(let lt=0;lt<$.removed.length;lt++){const Dt=$.removed[lt],Yt=B.indexOf(Dt);Yt>=0&&(B[Yt]=null,z[Yt].disconnect(Dt))}for(let lt=0;lt<$.added.length;lt++){const Dt=$.added[lt];let Yt=B.indexOf(Dt);if(Yt===-1){for(let ve=0;ve<z.length;ve++)if(ve>=B.length){B.push(Dt),Yt=ve;break}else if(B[ve]===null){B[ve]=Dt,Yt=ve;break}if(Yt===-1)break}const zt=z[Yt];zt&&zt.connect(Dt)}}const at=new X,Et=new X;function St($,lt,Dt){at.setFromMatrixPosition(lt.matrixWorld),Et.setFromMatrixPosition(Dt.matrixWorld);const Yt=at.distanceTo(Et),zt=lt.projectionMatrix.elements,ve=Dt.projectionMatrix.elements,rn=zt[14]/(zt[10]-1),Te=zt[14]/(zt[10]+1),xe=(zt[9]+1)/zt[5],ze=(zt[9]-1)/zt[5],se=(zt[8]-1)/zt[0],fn=(ve[8]+1)/ve[0],G=rn*se,on=rn*fn,Ne=Yt/(-se+fn),Ce=Ne*-se;if(lt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(Ne),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Qt=rn+Ne,N=Te+Ne,E=G-Ce,q=on+(Yt-Ce),dt=xe*Te/N*Qt,Mt=ze*Te/N*Qt;$.projectionMatrix.makePerspective(E,q,dt,Mt,Qt,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function L($,lt){lt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(lt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let lt=$.near,Dt=$.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),Q.near=w.near=C.near=lt,Q.far=w.far=C.far=Dt,(et!==Q.near||ht!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),et=Q.near,ht=Q.far),Q.layers.mask=$.layers.mask|6,C.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const Yt=$.parent,zt=Q.cameras;L(Q,Yt);for(let ve=0;ve<zt.length;ve++)L(zt[ve],Yt);zt.length===2?St(Q,C,w):Q.projectionMatrix.copy(C.projectionMatrix),it($,Q,Yt)};function it($,lt,Dt){Dt===null?$.matrix.copy(lt.matrixWorld):($.matrix.copy(Dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(lt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=vp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function($){m=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function($){return v[$]};let gt=null;function Rt($,lt){if(g=lt.getViewerPose(p||f),b=lt,g!==null){const Dt=g.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Yt=!1;Dt.length!==Q.cameras.length&&(Q.cameras.length=0,Yt=!0);for(let Te=0;Te<Dt.length;Te++){const xe=Dt[Te];let ze=null;if(S!==null)ze=S.getViewport(xe);else{const fn=_.getViewSubImage(y,xe);ze=fn.viewport,Te===0&&(t.setRenderTargetTextures(D,fn.colorTexture,fn.depthStencilTexture),t.setRenderTarget(D))}let se=V[Te];se===void 0&&(se=new Oi,se.layers.enable(Te),se.viewport=new Sn,V[Te]=se),se.matrix.fromArray(xe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(xe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ze.x,ze.y,ze.width,ze.height),Te===0&&(Q.matrix.copy(se.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Yt===!0&&Q.cameras.push(se)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const Te=_.getDepthInformation(Dt[0]);Te&&Te.isValid&&Te.texture&&M.init(Te,l.renderState)}if(zt&&zt.includes("camera-access")&&T){t.state.unbindTexture(),_=a.getBinding();for(let Te=0;Te<Dt.length;Te++){const xe=Dt[Te].camera;if(xe){let ze=v[xe];ze||(ze=new yx,v[xe]=ze);const se=_.getCameraImage(xe);ze.sourceTexture=se}}}}for(let Dt=0;Dt<z.length;Dt++){const Yt=B[Dt],zt=z[Dt];Yt!==null&&zt!==void 0&&zt.update(Yt,lt,p||f)}gt&&gt($,lt),lt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:lt}),b=null}const kt=new Dx;kt.setAnimationLoop(Rt),this.setAnimationLoop=function($){gt=$},this.dispose=function(){}}}const Vs=new sa,ER=new un;function bR(r,t){function n(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function a(M,v){v.color.getRGB(M.fogColor.value,px(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&S(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,O,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,n(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===hi&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,n(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===hi&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,n(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,n(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=t.get(v),U=O.envMap,D=O.envMapRotation;U&&(M.envMap.value=U,Vs.copy(D),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),M.envMapRotation.value.setFromMatrix4(ER.makeRotationFromEuler(Vs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,O,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=U*.5,v.map&&(M.map.value=v.map,n(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===hi&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const O=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function TR(r,t,n,a){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const D=U.program;a.uniformBlockBinding(O,D)}function p(O,U){let D=l[O.id];D===void 0&&(b(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",M));const z=U.program;a.updateUBOMapping(O,z);const B=t.render.frame;c[O.id]!==B&&(y(O),c[O.id]=B)}function g(O){const U=_();O.__bindingPointIndex=U;const D=r.createBuffer(),z=O.__size,B=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,z,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function _(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const U=l[O.id],D=O.uniforms,z=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,I=D.length;B<I;B++){const Z=Array.isArray(D[B])?D[B]:[D[B]];for(let C=0,w=Z.length;C<w;C++){const V=Z[C];if(S(V,B,C,z)===!0){const Q=V.__offset,et=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let ut=0;ut<et.length;ut++){const P=et[ut],H=T(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Q+ht,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,ht),ht+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(O,U,D,z){const B=O.value,I=U+"_"+D;if(z[I]===void 0)return typeof B=="number"||typeof B=="boolean"?z[I]=B:z[I]=B.clone(),!0;{const Z=z[I];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return z[I]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function b(O){const U=O.uniforms;let D=0;const z=16;for(let I=0,Z=U.length;I<Z;I++){const C=Array.isArray(U[I])?U[I]:[U[I]];for(let w=0,V=C.length;w<V;w++){const Q=C[w],et=Array.isArray(Q.value)?Q.value:[Q.value];for(let ht=0,ut=et.length;ht<ut;ht++){const P=et[ht],H=T(P),at=D%z,Et=at%H.boundary,St=at+Et;D+=Et,St!==0&&z-St<H.storage&&(D+=z-St),Q.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=H.storage}}}const B=D%z;return B>0&&(D+=z-B),O.__size=D,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const O in l)r.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const AR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function RR(){return Ji===null&&(Ji=new FE(AR,16,16,io,Pa),Ji.name="DFG_LUT",Ji.minFilter=$n,Ji.magFilter=$n,Ji.wrapS=Ua,Ji.wrapT=Ua,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class CR{constructor(t={}){const{canvas:n=cE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:S=Mi}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=f;const T=S,M=new Set([Np,Up,Dp]),v=new Set([Mi,aa,yl,Sl,Cp,wp]),O=new Uint32Array(4),U=new Int32Array(4);let D=null,z=null;const B=[],I=[];let Z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=Li;let V=0,Q=0,et=null,ht=-1,ut=null;const P=new Sn,H=new Sn;let at=null;const Et=new Fe(0);let St=0,L=n.width,it=n.height,gt=1,Rt=null,kt=null;const $=new Sn(0,0,L,it),lt=new Sn(0,0,L,it);let Dt=!1;const Yt=new Ip;let zt=!1,ve=!1;const rn=new un,Te=new X,xe=new Sn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function fn(){return et===null?gt:1}let G=a;function on(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ap}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",xt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),G===null){const Y="webgl2";if(G=on(Y,R),G===null)throw on(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Be("WebGLRenderer: "+R.message),R}let Ne,Ce,Qt,N,E,q,dt,Mt,ft,$t,Nt,jt,le,Tt,At,Xt,Ht,Lt,de,W,Ot,Ct,Gt,bt;function _t(){Ne=new RA(G),Ne.init(),Ct=new vR(G,Ne),Ce=new vA(G,Ne,t,Ct),Qt=new gR(G,Ne),Ce.reversedDepthBuffer&&y&&Qt.buffers.depth.setReversed(!0),N=new DA(G),E=new eR,q=new _R(G,Ne,Qt,E,Ce,Ct,N),dt=new yA(C),Mt=new AA(C),ft=new O1(G),Gt=new gA(G,ft),$t=new CA(G,ft,N,Gt),Nt=new NA(G,$t,ft,N),de=new UA(G,Ce,q),Xt=new xA(E),jt=new tR(C,dt,Mt,Ne,Ce,Gt,Xt),le=new bR(C,E),Tt=new iR,At=new cR(Ne),Lt=new mA(C,dt,Mt,Qt,Nt,b,m),Ht=new pR(C,Nt,Ce),bt=new TR(G,N,Ce,Qt),W=new _A(G,Ne,N),Ot=new wA(G,Ne,N),N.programs=jt.programs,C.capabilities=Ce,C.extensions=Ne,C.properties=E,C.renderLists=Tt,C.shadowMap=Ht,C.state=Qt,C.info=N}_t(),T!==Mi&&(Z=new OA(T,n.width,n.height,l,c));const wt=new MR(C,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(L,it,!1))},this.getSize=function(R){return R.set(L,it)},this.setSize=function(R,Y,ot=!0){if(wt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,it=Y,n.width=Math.floor(R*gt),n.height=Math.floor(Y*gt),ot===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),Z!==null&&Z.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(L*gt,it*gt).floor()},this.setDrawingBufferSize=function(R,Y,ot){L=R,it=Y,gt=ot,n.width=Math.floor(R*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(T===Mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,Y,ot,st){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Y,ot,st),Qt.viewport(P.copy($).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,Y,ot,st){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,Y,ot,st),Qt.scissor(H.copy(lt).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){Qt.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){kt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ot=!0){let st=0;if(R){let J=!1;if(et!==null){const It=et.texture.format;J=M.has(It)}if(J){const It=et.texture.type,qt=v.has(It),Ft=Lt.getClearColor(),Kt=Lt.getClearAlpha(),te=Ft.r,oe=Ft.g,ee=Ft.b;qt?(O[0]=te,O[1]=oe,O[2]=ee,O[3]=Kt,G.clearBufferuiv(G.COLOR,0,O)):(U[0]=te,U[1]=oe,U[2]=ee,U[3]=Kt,G.clearBufferiv(G.COLOR,0,U))}else st|=G.COLOR_BUFFER_BIT}Y&&(st|=G.DEPTH_BUFFER_BIT),ot&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",xt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),Lt.dispose(),Tt.dispose(),At.dispose(),E.dispose(),dt.dispose(),Mt.dispose(),Nt.dispose(),Gt.dispose(),bt.dispose(),jt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",je),wt.removeEventListener("sessionend",He),Ge.stop()};function K(R){R.preventDefault(),bu("WebGLRenderer: Context Lost."),w=!0}function xt(){bu("WebGLRenderer: Context Restored."),w=!1;const R=N.autoReset,Y=Ht.enabled,ot=Ht.autoUpdate,st=Ht.needsUpdate,J=Ht.type;_t(),N.autoReset=R,Ht.enabled=Y,Ht.autoUpdate=ot,Ht.needsUpdate=st,Ht.type=J}function yt(R){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pt(R){const Y=R.target;Y.removeEventListener("dispose",Pt),Wt(Y)}function Wt(R){Zt(R),E.remove(R)}function Zt(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(ot){jt.releaseProgram(ot)}),R.isShaderMaterial&&jt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ot,st,J,It){Y===null&&(Y=ze);const qt=J.isMesh&&J.matrixWorld.determinant()<0,Ft=xs(R,Y,ot,st,J);Qt.setMaterial(st,qt);let Kt=ot.index,te=1;if(st.wireframe===!0){if(Kt=$t.getWireframeAttribute(ot),Kt===void 0)return;te=2}const oe=ot.drawRange,ee=ot.attributes.position;let ce=oe.start*te,We=(oe.start+oe.count)*te;It!==null&&(ce=Math.max(ce,It.start*te),We=Math.min(We,(It.start+It.count)*te)),Kt!==null?(ce=Math.max(ce,0),We=Math.min(We,Kt.count)):ee!=null&&(ce=Math.max(ce,0),We=Math.min(We,ee.count));const pn=We-ce;if(pn<0||pn===1/0)return;Gt.setup(J,st,Ft,ot,Kt);let cn,Ze=W;if(Kt!==null&&(cn=ft.get(Kt),Ze=Ot,Ze.setIndex(cn)),J.isMesh)st.wireframe===!0?(Qt.setLineWidth(st.wireframeLinewidth*fn()),Ze.setMode(G.LINES)):Ze.setMode(G.TRIANGLES);else if(J.isLine){let ie=st.linewidth;ie===void 0&&(ie=1),Qt.setLineWidth(ie*fn()),J.isLineSegments?Ze.setMode(G.LINES):J.isLineLoop?Ze.setMode(G.LINE_LOOP):Ze.setMode(G.LINE_STRIP)}else J.isPoints?Ze.setMode(G.POINTS):J.isSprite&&Ze.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Ml("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ze.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ie=J._multiDrawStarts,qe=J._multiDrawCounts,he=J._multiDrawCount,Fn=Kt?ft.get(Kt).bytesPerElement:1,la=E.get(st).currentProgram.getUniforms();for(let Hn=0;Hn<he;Hn++)la.setValue(G,"_gl_DrawID",Hn),Ze.render(ie[Hn]/Fn,qe[Hn])}else if(J.isInstancedMesh)Ze.renderInstances(ce,pn,J.count);else if(ot.isInstancedBufferGeometry){const ie=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,qe=Math.min(ot.instanceCount,ie);Ze.renderInstances(ce,pn,qe)}else Ze.render(ce,pn)};function Ee(R,Y,ot){R.transparent===!0&&R.side===ki&&R.forceSinglePass===!1?(R.side=hi,R.needsUpdate=!0,qi(R,Y,ot),R.side=vs,R.needsUpdate=!0,qi(R,Y,ot),R.side=ki):qi(R,Y,ot)}this.compile=function(R,Y,ot=null){ot===null&&(ot=R),z=At.get(ot),z.init(Y),I.push(z),ot.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(z.pushLight(J),J.castShadow&&z.pushShadow(J))}),R!==ot&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(z.pushLight(J),J.castShadow&&z.pushShadow(J))}),z.setupLights();const st=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const It=J.material;if(It)if(Array.isArray(It))for(let qt=0;qt<It.length;qt++){const Ft=It[qt];Ee(Ft,ot,J),st.add(Ft)}else Ee(It,ot,J),st.add(It)}),z=I.pop(),st},this.compileAsync=function(R,Y,ot=null){const st=this.compile(R,Y,ot);return new Promise(J=>{function It(){if(st.forEach(function(qt){E.get(qt).currentProgram.isReady()&&st.delete(qt)}),st.size===0){J(R);return}setTimeout(It,10)}Ne.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ye=null;function we(R){ye&&ye(R)}function je(){Ge.stop()}function He(){Ge.start()}const Ge=new Dx;Ge.setAnimationLoop(we),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(R){ye=R,wt.setAnimationLoop(R),R===null?Ge.stop():Ge.start()},wt.addEventListener("sessionstart",je),wt.addEventListener("sessionend",He),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ot=wt.enabled===!0&&wt.isPresenting===!0,st=Z!==null&&(et===null||ot)&&Z.begin(C,et);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Y),Y=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,et),z=At.get(R,I.length),z.init(Y),I.push(z),rn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Yt.setFromProjectionMatrix(rn,ea,Y.reversedDepth),ve=this.localClippingEnabled,zt=Xt.init(this.clippingPlanes,ve),D=Tt.get(R,B.length),D.init(),B.push(D),wt.enabled===!0&&wt.isPresenting===!0){const qt=C.xr.getDepthSensingMesh();qt!==null&&ge(qt,Y,-1/0,C.sortObjects)}ge(R,Y,0,C.sortObjects),D.finish(),C.sortObjects===!0&&D.sort(Rt,kt),se=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,se&&Lt.addToRenderList(D,R),this.info.render.frame++,zt===!0&&Xt.beginShadows();const J=z.state.shadowsArray;if(Ht.render(J,R,Y),zt===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&Z.hasRenderPass())===!1){const qt=D.opaque,Ft=D.transmissive;if(z.setupLights(),Y.isArrayCamera){const Kt=Y.cameras;if(Ft.length>0)for(let te=0,oe=Kt.length;te<oe;te++){const ee=Kt[te];Le(qt,Ft,R,ee)}se&&Lt.render(R);for(let te=0,oe=Kt.length;te<oe;te++){const ee=Kt[te];Ae(D,R,ee,ee.viewport)}}else Ft.length>0&&Le(qt,Ft,R,Y),se&&Lt.render(R),Ae(D,R,Y)}et!==null&&Q===0&&(q.updateMultisampleRenderTarget(et),q.updateRenderTargetMipmap(et)),st&&Z.end(C),R.isScene===!0&&R.onAfterRender(C,R,Y),Gt.resetDefaultState(),ht=-1,ut=null,I.pop(),I.length>0?(z=I[I.length-1],zt===!0&&Xt.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function ge(R,Y,ot,st){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Yt.intersectsSprite(R)){st&&xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(rn);const qt=Nt.update(R),Ft=R.material;Ft.visible&&D.push(R,qt,Ft,ot,xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Yt.intersectsObject(R))){const qt=Nt.update(R),Ft=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xe.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),xe.copy(qt.boundingSphere.center)),xe.applyMatrix4(R.matrixWorld).applyMatrix4(rn)),Array.isArray(Ft)){const Kt=qt.groups;for(let te=0,oe=Kt.length;te<oe;te++){const ee=Kt[te],ce=Ft[ee.materialIndex];ce&&ce.visible&&D.push(R,qt,ce,ot,xe.z,ee)}}else Ft.visible&&D.push(R,qt,Ft,ot,xe.z,null)}}const It=R.children;for(let qt=0,Ft=It.length;qt<Ft;qt++)ge(It[qt],Y,ot,st)}function Ae(R,Y,ot,st){const{opaque:J,transmissive:It,transparent:qt}=R;z.setupLightsView(ot),zt===!0&&Xt.setGlobalState(C.clippingPlanes,ot),st&&Qt.viewport(P.copy(st)),J.length>0&&pe(J,Y,ot),It.length>0&&pe(It,Y,ot),qt.length>0&&pe(qt,Y,ot),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function Le(R,Y,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[st.id]===void 0){const ce=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[st.id]=new ia(1,1,{generateMipmaps:!0,type:ce?Pa:Mi,minFilter:Ws,samples:Ce.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const It=z.state.transmissionRenderTarget[st.id],qt=st.viewport||P;It.setSize(qt.z*C.transmissionResolutionScale,qt.w*C.transmissionResolutionScale);const Ft=C.getRenderTarget(),Kt=C.getActiveCubeFace(),te=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(Et),St=C.getClearAlpha(),St<1&&C.setClearColor(16777215,.5),C.clear(),se&&Lt.render(ot);const oe=C.toneMapping;C.toneMapping=na;const ee=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),z.setupLightsView(st),zt===!0&&Xt.setGlobalState(C.clippingPlanes,st),pe(R,ot,st),q.updateMultisampleRenderTarget(It),q.updateRenderTargetMipmap(It),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let We=0,pn=Y.length;We<pn;We++){const cn=Y[We],{object:Ze,geometry:ie,material:qe,group:he}=cn;if(qe.side===ki&&Ze.layers.test(st.layers)){const Fn=qe.side;qe.side=hi,qe.needsUpdate=!0,_n(Ze,ot,st,ie,qe,he),qe.side=Fn,qe.needsUpdate=!0,ce=!0}}ce===!0&&(q.updateMultisampleRenderTarget(It),q.updateRenderTargetMipmap(It))}C.setRenderTarget(Ft,Kt,te),C.setClearColor(Et,St),ee!==void 0&&(st.viewport=ee),C.toneMapping=oe}function pe(R,Y,ot){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,It=R.length;J<It;J++){const qt=R[J],{object:Ft,geometry:Kt,group:te}=qt;let oe=qt.material;oe.allowOverride===!0&&st!==null&&(oe=st),Ft.layers.test(ot.layers)&&_n(Ft,Y,ot,Kt,oe,te)}}function _n(R,Y,ot,st,J,It){R.onBeforeRender(C,Y,ot,st,J,It),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(C,Y,ot,st,R,It),J.transparent===!0&&J.side===ki&&J.forceSinglePass===!1?(J.side=hi,J.needsUpdate=!0,C.renderBufferDirect(ot,Y,st,J,R,It),J.side=vs,J.needsUpdate=!0,C.renderBufferDirect(ot,Y,st,J,R,It),J.side=ki):C.renderBufferDirect(ot,Y,st,J,R,It),R.onAfterRender(C,Y,ot,st,J,It)}function qi(R,Y,ot){Y.isScene!==!0&&(Y=ze);const st=E.get(R),J=z.state.lights,It=z.state.shadowsArray,qt=J.state.version,Ft=jt.getParameters(R,J.state,It,Y,ot),Kt=jt.getProgramCacheKey(Ft);let te=st.programs;st.environment=R.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(R.isMeshStandardMaterial?Mt:dt).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",Pt),te=new Map,st.programs=te);let oe=te.get(Kt);if(oe!==void 0){if(st.currentProgram===oe&&st.lightsStateVersion===qt)return co(R,Ft),oe}else Ft.uniforms=jt.getUniforms(R),R.onBeforeCompile(Ft,C),oe=jt.acquireProgram(Ft,Kt),te.set(Kt,oe),st.uniforms=Ft.uniforms;const ee=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ee.clippingPlanes=Xt.uniform),co(R,Ft),st.needsLights=Ia(R),st.lightsStateVersion=qt,st.needsLights&&(ee.ambientLightColor.value=J.state.ambient,ee.lightProbe.value=J.state.probe,ee.directionalLights.value=J.state.directional,ee.directionalLightShadows.value=J.state.directionalShadow,ee.spotLights.value=J.state.spot,ee.spotLightShadows.value=J.state.spotShadow,ee.rectAreaLights.value=J.state.rectArea,ee.ltc_1.value=J.state.rectAreaLTC1,ee.ltc_2.value=J.state.rectAreaLTC2,ee.pointLights.value=J.state.point,ee.pointLightShadows.value=J.state.pointShadow,ee.hemisphereLights.value=J.state.hemi,ee.directionalShadowMap.value=J.state.directionalShadowMap,ee.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ee.spotShadowMap.value=J.state.spotShadowMap,ee.spotLightMatrix.value=J.state.spotLightMatrix,ee.spotLightMap.value=J.state.spotLightMap,ee.pointShadowMap.value=J.state.pointShadowMap,ee.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=oe,st.uniformsList=null,oe}function vn(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=yu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function co(R,Y){const ot=E.get(R);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function xs(R,Y,ot,st,J){Y.isScene!==!0&&(Y=ze),q.resetTextureUnits();const It=Y.fog,qt=st.isMeshStandardMaterial?Y.environment:null,Ft=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ao,Kt=(st.isMeshStandardMaterial?Mt:dt).get(st.envMap||qt),te=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,oe=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),ee=!!ot.morphAttributes.position,ce=!!ot.morphAttributes.normal,We=!!ot.morphAttributes.color;let pn=na;st.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(pn=C.toneMapping);const cn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ze=cn!==void 0?cn.length:0,ie=E.get(st),qe=z.state.lights;if(zt===!0&&(ve===!0||R!==ut)){const Vn=R===ut&&st.id===ht;Xt.setState(st,R,Vn)}let he=!1;st.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==qe.state.version||ie.outputColorSpace!==Ft||J.isBatchedMesh&&ie.batching===!1||!J.isBatchedMesh&&ie.batching===!0||J.isBatchedMesh&&ie.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ie.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ie.instancing===!1||!J.isInstancedMesh&&ie.instancing===!0||J.isSkinnedMesh&&ie.skinning===!1||!J.isSkinnedMesh&&ie.skinning===!0||J.isInstancedMesh&&ie.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ie.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ie.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ie.instancingMorph===!1&&J.morphTexture!==null||ie.envMap!==Kt||st.fog===!0&&ie.fog!==It||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Xt.numPlanes||ie.numIntersection!==Xt.numIntersection)||ie.vertexAlphas!==te||ie.vertexTangents!==oe||ie.morphTargets!==ee||ie.morphNormals!==ce||ie.morphColors!==We||ie.toneMapping!==pn||ie.morphTargetsCount!==Ze)&&(he=!0):(he=!0,ie.__version=st.version);let Fn=ie.currentProgram;he===!0&&(Fn=qi(st,Y,J));let la=!1,Hn=!1,Ei=!1;const Ke=Fn.getUniforms(),Gn=ie.uniforms;if(Qt.useProgram(Fn.program)&&(la=!0,Hn=!0,Ei=!0),st.id!==ht&&(ht=st.id,Hn=!0),la||ut!==R){Qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(G,"projectionMatrix",R.projectionMatrix),Ke.setValue(G,"viewMatrix",R.matrixWorldInverse);const kn=Ke.map.cameraPosition;kn!==void 0&&kn.setValue(G,Te.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&Ke.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ke.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),ut!==R&&(ut=R,Hn=!0,Ei=!0)}if(ie.needsLights&&(qe.state.directionalShadowMap.length>0&&Ke.setValue(G,"directionalShadowMap",qe.state.directionalShadowMap,q),qe.state.spotShadowMap.length>0&&Ke.setValue(G,"spotShadowMap",qe.state.spotShadowMap,q),qe.state.pointShadowMap.length>0&&Ke.setValue(G,"pointShadowMap",qe.state.pointShadowMap,q)),J.isSkinnedMesh){Ke.setOptional(G,J,"bindMatrix"),Ke.setOptional(G,J,"bindMatrixInverse");const Vn=J.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Ke.setValue(G,"boneTexture",Vn.boneTexture,q))}J.isBatchedMesh&&(Ke.setOptional(G,J,"batchingTexture"),Ke.setValue(G,"batchingTexture",J._matricesTexture,q),Ke.setOptional(G,J,"batchingIdTexture"),Ke.setValue(G,"batchingIdTexture",J._indirectTexture,q),Ke.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&Ke.setValue(G,"batchingColorTexture",J._colorsTexture,q));const wn=ot.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&de.update(J,ot,Fn),(Hn||ie.receiveShadow!==J.receiveShadow)&&(ie.receiveShadow=J.receiveShadow,Ke.setValue(G,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Gn.envMap.value=Kt,Gn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Gn.envMapIntensity.value=Y.environmentIntensity),Gn.dfgLUT!==void 0&&(Gn.dfgLUT.value=RR()),Hn&&(Ke.setValue(G,"toneMappingExposure",C.toneMappingExposure),ie.needsLights&&uo(Gn,Ei),It&&st.fog===!0&&le.refreshFogUniforms(Gn,It),le.refreshMaterialUniforms(Gn,st,gt,it,z.state.transmissionRenderTarget[R.id]),yu.upload(G,vn(ie),Gn,q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(yu.upload(G,vn(ie),Gn,q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ke.setValue(G,"center",J.center),Ke.setValue(G,"modelViewMatrix",J.modelViewMatrix),Ke.setValue(G,"normalMatrix",J.normalMatrix),Ke.setValue(G,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Vn=st.uniformsGroups;for(let kn=0,$s=Vn.length;kn<$s;kn++){const zi=Vn[kn];bt.update(zi,Fn),bt.bind(zi,Fn)}}return Fn}function uo(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ia(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(R,Y,ot){const st=E.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ot,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ot=E.get(R);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const Ba=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,ot=0){et=R,V=Y,Q=ot;let st=null,J=!1,It=!1;if(R){const Ft=E.get(R);if(Ft.__useDefaultFramebuffer!==void 0){Qt.bindFramebuffer(G.FRAMEBUFFER,Ft.__webglFramebuffer),P.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest,Qt.viewport(P),Qt.scissor(H),Qt.setScissorTest(at),ht=-1;return}else if(Ft.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ft.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const oe=R.depthTexture;if(Ft.__boundDepthTexture!==oe){if(oe!==null&&E.has(oe)&&(R.width!==oe.image.width||R.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(It=!0);const te=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[Y])?st=te[Y][ot]:st=te[Y],J=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?st=E.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?st=te[ot]:st=te,P.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest}else P.copy($).multiplyScalar(gt).floor(),H.copy(lt).multiplyScalar(gt).floor(),at=Dt;if(ot!==0&&(st=Ba),Qt.bindFramebuffer(G.FRAMEBUFFER,st)&&Qt.drawBuffers(R,st),Qt.viewport(P),Qt.scissor(H),Qt.setScissorTest(at),J){const Ft=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,ot)}else if(It){const Ft=Y;for(let Kt=0;Kt<R.textures.length;Kt++){const te=E.get(R.textures[Kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Kt,te.__webglTexture,ot,Ft)}}else if(R!==null&&ot!==0){const Ft=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,ot)}ht=-1},this.readRenderTargetPixels=function(R,Y,ot,st,J,It,qt,Ft=0){if(!(R&&R.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){Qt.bindFramebuffer(G.FRAMEBUFFER,Kt);try{const te=R.textures[Ft],oe=te.format,ee=te.type;if(!Ce.textureFormatReadable(oe)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(ee)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-st&&ot>=0&&ot<=R.height-J&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ft),G.readPixels(Y,ot,st,J,Ct.convert(oe),Ct.convert(ee),It))}finally{const te=et!==null?E.get(et).__webglFramebuffer:null;Qt.bindFramebuffer(G.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ot,st,J,It,qt,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(Y>=0&&Y<=R.width-st&&ot>=0&&ot<=R.height-J){Qt.bindFramebuffer(G.FRAMEBUFFER,Kt);const te=R.textures[Ft],oe=te.format,ee=te.type;if(!Ce.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.bufferData(G.PIXEL_PACK_BUFFER,It.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ft),G.readPixels(Y,ot,st,J,Ct.convert(oe),Ct.convert(ee),0);const We=et!==null?E.get(et).__webglFramebuffer:null;Qt.bindFramebuffer(G.FRAMEBUFFER,We);const pn=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await uE(G,pn,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,It),G.deleteBuffer(ce),G.deleteSync(pn),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ot=0){const st=Math.pow(2,-ot),J=Math.floor(R.image.width*st),It=Math.floor(R.image.height*st),qt=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,qt,Ft,J,It),Qt.unbindTexture()};const ys=G.createFramebuffer(),Fa=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,ot=null,st=null,J=0,It=null){It===null&&(J!==0?(Ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=J,J=0):It=0);let qt,Ft,Kt,te,oe,ee,ce,We,pn;const cn=R.isCompressedTexture?R.mipmaps[It]:R.image;if(ot!==null)qt=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,Kt=ot.isBox3?ot.max.z-ot.min.z:1,te=ot.min.x,oe=ot.min.y,ee=ot.isBox3?ot.min.z:0;else{const wn=Math.pow(2,-J);qt=Math.floor(cn.width*wn),Ft=Math.floor(cn.height*wn),R.isDataArrayTexture?Kt=cn.depth:R.isData3DTexture?Kt=Math.floor(cn.depth*wn):Kt=1,te=0,oe=0,ee=0}st!==null?(ce=st.x,We=st.y,pn=st.z):(ce=0,We=0,pn=0);const Ze=Ct.convert(Y.format),ie=Ct.convert(Y.type);let qe;Y.isData3DTexture?(q.setTexture3D(Y,0),qe=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),qe=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),qe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const he=G.getParameter(G.UNPACK_ROW_LENGTH),Fn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),la=G.getParameter(G.UNPACK_SKIP_PIXELS),Hn=G.getParameter(G.UNPACK_SKIP_ROWS),Ei=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,cn.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,cn.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,oe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ee);const Ke=R.isDataArrayTexture||R.isData3DTexture,Gn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const wn=E.get(R),Vn=E.get(Y),kn=E.get(wn.__renderTarget),$s=E.get(Vn.__renderTarget);Qt.bindFramebuffer(G.READ_FRAMEBUFFER,kn.__webglFramebuffer),Qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let zi=0;zi<Kt;zi++)Ke&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,ee+zi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,It,pn+zi)),G.blitFramebuffer(te,oe,qt,Ft,ce,We,qt,Ft,G.DEPTH_BUFFER_BIT,G.NEAREST);Qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const wn=E.get(R),Vn=E.get(Y);Qt.bindFramebuffer(G.READ_FRAMEBUFFER,ys),Qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fa);for(let kn=0;kn<Kt;kn++)Ke?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wn.__webglTexture,J,ee+kn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wn.__webglTexture,J),Gn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vn.__webglTexture,It,pn+kn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vn.__webglTexture,It),J!==0?G.blitFramebuffer(te,oe,qt,Ft,ce,We,qt,Ft,G.COLOR_BUFFER_BIT,G.NEAREST):Gn?G.copyTexSubImage3D(qe,It,ce,We,pn+kn,te,oe,qt,Ft):G.copyTexSubImage2D(qe,It,ce,We,te,oe,qt,Ft);Qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Gn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(qe,It,ce,We,pn,qt,Ft,Kt,Ze,ie,cn.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,It,ce,We,pn,qt,Ft,Kt,Ze,cn.data):G.texSubImage3D(qe,It,ce,We,pn,qt,Ft,Kt,Ze,ie,cn):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,It,ce,We,qt,Ft,Ze,ie,cn.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,It,ce,We,cn.width,cn.height,Ze,cn.data):G.texSubImage2D(G.TEXTURE_2D,It,ce,We,qt,Ft,Ze,ie,cn);G.pixelStorei(G.UNPACK_ROW_LENGTH,he),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Fn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,la),G.pixelStorei(G.UNPACK_SKIP_ROWS,Hn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ei),It===0&&Y.generateMipmaps&&G.generateMipmap(qe),Qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Qt.unbindTexture()},this.resetState=function(){V=0,Q=0,et=null,Qt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ve._getUnpackColorSpace()}}const kv={type:"change"},kp={type:"start"},Px={type:"end"},hu=new Du,Xv=new ms,wR=Math.cos(70*hE.DEG2RAD),Un=new X,fi=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Td=1e-6;class DR extends N1{constructor(t,n=null){super(t,n),this.state=sn.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Zs,this._lastTargetPosition=new X,this._quat=new Zs().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vv,this._sphericalDelta=new vv,this._scale=1,this._panOffset=new X,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new X,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NR.bind(this),this._onPointerDown=UR.bind(this),this._onPointerUp=LR.bind(this),this._onContextMenu=HR.bind(this),this._onMouseWheel=zR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=BR.bind(this),this._onTouchMove=FR.bind(this),this._onMouseDown=OR.bind(this),this._onMouseMove=PR.bind(this),this._interceptControlDown=GR.bind(this),this._interceptControlUp=VR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kv),this.update(),this.state=sn.NONE}update(t=null){const n=this.object.position;Un.copy(n).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(a)&&isFinite(l)&&(a<-Math.PI?a+=fi:a>Math.PI&&(a-=fi),l<-Math.PI?l+=fi:l>Math.PI&&(l-=fi),a<=l?this._spherical.theta=Math.max(a,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+l)/2?Math.max(a,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),n.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Un.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(hu.origin.copy(this.object.position),hu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hu.direction))<wR?this.object.lookAt(this.target):(Xv.setFromNormalAndCoplanarPoint(this.object.up,this.target),hu.intersectPlane(Xv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Td||this._lastTargetPosition.distanceToSquared(this.target)>Td?(this.dispatchEvent(kv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fi/60*this.autoRotateSpeed*t:fi/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Un.setFromMatrixColumn(n,0),Un.multiplyScalar(-t),this._panOffset.add(Un)}_panUp(t,n){this.screenSpacePanning===!0?Un.setFromMatrixColumn(n,1):(Un.setFromMatrixColumn(n,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(t),this._panOffset.add(Un)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Un.copy(l).sub(this.target);let c=Un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),l=t-a.left,c=n-a.top,f=a.width,d=a.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/n.clientHeight),this._rotateUp(fi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(a,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(a,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),l=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/n.clientHeight),this._rotateUp(fi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(a,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Bt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function UR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function NR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function LR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Px),this.state=sn.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function OR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=sn.DOLLY;break;case Qr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}break;case Qr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(kp)}function PR(r){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function zR(r){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(r.preventDefault(),this.dispatchEvent(kp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Px))}function IR(r){this.enabled!==!1&&this._handleKeyDown(r)}function BR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=sn.TOUCH_ROTATE;break;case Zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case Zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=sn.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(kp)}function FR(r){switch(this._trackPointer(r),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=sn.NONE}}function HR(r){this.enabled!==!1&&r.preventDefault()}function GR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kR=()=>{const r=re.useRef(null),[t,n]=re.useState(!1),[a,l]=re.useState(!1),[c,f]=re.useState(1),[d,m]=re.useState("serve_receive"),[p,g]=re.useState("move"),[_,y]=re.useState(!1),[S,b]=re.useState(null),[T,M]=re.useState(!0),[v,O]=re.useState(!1),[U,D]=re.useState([]),[z,B]=re.useState({}),[I,Z]=re.useState(null),[C,w]=re.useState(!1),[V,Q]=re.useState(""),[et,ht]=re.useState(""),[ut,P]=re.useState(null),H=re.useRef(p),at=re.useRef(_),Et=re.useRef(z),St=re.useRef(d),L=re.useRef(c),it=re.useRef(T);re.useEffect(()=>{H.current=p},[p]),re.useEffect(()=>{at.current=_},[_]),re.useEffect(()=>{Et.current=z},[z]),re.useEffect(()=>{St.current=d},[d]),re.useEffect(()=>{L.current=c},[c]),re.useEffect(()=>{it.current=T},[T]);const gt=re.useRef(null),Rt=re.useRef(null),kt=re.useRef(null),$=re.useRef(null),lt=re.useRef([]),Dt=re.useRef([]),Yt=re.useRef(null),zt=re.useRef(null),ve=re.useRef([]),rn=re.useRef(null),Te=re.useRef({x:0,y:0}),xe=re.useRef([]),ze=re.useRef({}),se=re.useRef({isDown:!1,isDragging:!1,object:null,offset:null,startScreen:{x:0,y:0},type:null,handleIndex:-1,ownerId:null}),fn=[{x:-1.5,z:-1.5},{x:1.5,z:-1.5},{x:1.5,z:1.5},{x:-1.5,z:1.5}],G=[{id:"S",label:"S",color:"#fbbf24",role:"setter"},{id:"H1",label:"H1",color:"#3b82f6",role:"wing"},{id:"H2",label:"H2",color:"#3b82f6",role:"wing"},{id:"M1",label:"M1",color:"#22c55e",role:"middle"},{id:"M2",label:"M2",color:"#22c55e",role:"middle"},{id:"L",label:"L",color:"#ef4444",role:"libero"},{id:"O",label:"OPP",color:"#a855f7",role:"opposite"}],on=[{id:"E_S",label:"S",color:"#64748b",pos:{x:-2,z:-2}},{id:"E_H1",label:"H1",color:"#64748b",pos:{x:3,z:-2}},{id:"E_H2",label:"H2",color:"#64748b",pos:{x:-3,z:-6}},{id:"E_M1",label:"M1",color:"#475569",pos:{x:0,z:-2}},{id:"E_M2",label:"M2",color:"#475569",pos:{x:0,z:-6}},{id:"E_L",label:"L",color:"#ef4444",pos:{x:3,z:-6}}],Ne=[{id:"u19_research",name:"U19 Onderzoek (L5/H6)"},{id:"standard_3man",name:"Standaard 3-Man Pass"},{id:"perimeter_def",name:"Perimeter Verdediging"},{id:"rotation_def",name:"Rotatie Verdediging"}],Ce={wing:[{name:"Meter (High)",type:"attack",style:"normal",target:{x:-4,z:.5},height:4},{name:"Tempo (Snel)",type:"attack",style:"fast",target:{x:-4,z:.5},height:2.8},{name:"Pipe (Back)",type:"attack",style:"pipe",target:{x:0,z:2.5},height:3.5}],middle:[{name:"Stijg (A)",type:"attack",style:"quick",target:{x:1,z:.5},height:2.6},{name:"Achter (C)",type:"attack",style:"quick",target:{x:2.5,z:.5},height:2.6},{name:"Slide",type:"attack",style:"slide",target:{x:4,z:.5},height:2.8}],opposite:[{name:"Achterover",type:"attack",style:"normal",target:{x:4,z:.5},height:4},{name:"Kruis (X)",type:"attack",style:"cross",target:{x:1.5,z:1},height:2.8},{name:"D-Bal (Back)",type:"attack",style:"backrow",target:{x:3,z:2.5},height:3.5}]},Qt={block:[{name:"Blok: Positie",type:"defense",style:"block",offset:{x:0,z:0},color:16711680}],dig:[{name:"Verdedig: Hier",type:"defense",style:"dig",target:{x:-3.5,z:7},color:65280}]};re.useEffect(()=>{n(!0)},[]),re.useEffect(()=>{if(!t||!r.current)return;const K=new zE;K.background=new Fe(1976635),gt.current=K;const xt=new Oi(45,r.current.clientWidth/r.current.clientHeight,.1,1e3);N(xt),Rt.current=xt;const yt=new CR({antialias:!0,alpha:!0});yt.setSize(r.current.clientWidth,r.current.clientHeight),yt.shadowMap.enabled=!0,r.current.appendChild(yt.domElement),kt.current=yt;const Pt=new DR(xt,yt.domElement);Pt.enableDamping=!0,Pt.enabled=!1,$.current=Pt,K.add(new w1(16777215,.7));const Wt=new C1(16777215,.6);Wt.position.set(5,20,5),K.add(Wt);const Zt=new jn(new Ys(11,22),new cu({color:3900150}));Zt.rotation.x=-Math.PI/2,Zt.position.y=-.01,K.add(Zt);const Ee=new jn(new Ys(9,18),new cu({color:16347926}));Ee.rotation.x=-Math.PI/2,Ee.receiveShadow=!0,K.add(Ee);const ye=new Jr({color:16777215,linewidth:2}),we=pe=>{const _n=new Nn().setFromPoints([new X(-4.5,.02,pe),new X(4.5,.02,pe)]);K.add(new cl(_n,ye))};we(0),we(-3),we(3);const je=new jn(new oo(10,2.43,.1),new cu({color:16777215,transparent:!0,opacity:.5}));je.position.set(0,1.215,0),K.add(je);const He=new jn(new Ys(50,50),new Kr({visible:!1}));He.rotation.x=-Math.PI/2,Yt.current=He,K.add(He);const Ge=new dl;K.add(Ge),zt.current=Ge,rn.current=new U1,Te.current=new Bt,G.forEach(pe=>E(K,pe,!1)),on.forEach(pe=>E(K,pe,!0)),dt();const ge=()=>{requestAnimationFrame(ge),$.current&&$.current.update(),kt.current&&kt.current.render(K,xt)};ge();const Ae=yt.domElement;Ae.addEventListener("pointerdown",Xt),Ae.addEventListener("pointermove",Ht),Ae.addEventListener("wheel",Lt,{passive:!1}),window.addEventListener("pointerup",de);const Le=()=>{if(!r.current||!Rt.current||!kt.current)return;const pe=r.current.clientWidth,_n=r.current.clientHeight;Rt.current.aspect=pe/_n,Rt.current.updateProjectionMatrix(),kt.current.setSize(pe,_n)};return window.addEventListener("resize",Le),()=>{r.current&&yt.domElement&&r.current.removeChild(yt.domElement),window.removeEventListener("pointerup",de),window.removeEventListener("resize",Le)}},[t]),re.useEffect(()=>{t&&dt()},[c,d,z,t]),re.useEffect(()=>{t&&jt()},[T,p,t,v]),re.useEffect(()=>{$.current&&($.current.enabled=p==="camera")},[p]);const N=(K=Rt.current)=>{K&&(K.position.set(0,20,22),K.lookAt(0,0,-2))},E=(K,xt,yt)=>{const Pt=new Bp(.4,.4,1.8,32),Wt=new cu({color:xt.color}),Zt=new jn(Pt,Wt);Zt.userData={id:xt.id,role:xt.role,isEnemy:yt,type:"player",label:xt.label},q(Zt,xt.label),yt?(Zt.position.set(xt.pos.x,.9,xt.pos.z),Dt.current.push(Zt)):lt.current.push(Zt),K.add(Zt)},q=(K,xt)=>{const yt=document.createElement("canvas");yt.width=128,yt.height=64;const Pt=yt.getContext("2d");Pt.fillStyle="white",Pt.font="bold 40px Arial",Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText(xt,64,32);const Wt=K.children.find(Ee=>Ee.type==="Sprite");Wt&&K.remove(Wt);const Zt=new BE(new vx({map:new kE(yt)}));Zt.position.y=1.6,Zt.scale.set(1.5,.75,1),K.add(Zt)},dt=()=>{const K=`${c}_${d}`,xt=z[K],yt=z.names||{};xt&&xt.players?(lt.current.forEach(Pt=>{const Wt=xt.players[Pt.userData.id];Wt&&(Pt.position.set(Wt.x,Wt.visible?.9:-100,Wt.z),Pt.visible=Wt.visible);const Zt=yt[Pt.userData.id]||Pt.userData.label;Pt.userData.currentLabel!==Zt&&(q(Pt,Zt),Pt.userData.currentLabel=Zt)}),xt.enemies&&Dt.current.forEach(Pt=>{const Wt=xt.enemies[Pt.userData.id];Wt&&Pt.position.set(Wt.x,.9,Wt.z)})):Mt(c,d),jt()},Mt=(K,xt)=>{const yt=ft(K),Pt=[1,5,6];let Wt=null,Zt=null;Pt.includes(yt.M1)?(Zt="M1",Wt=yt.M1):Pt.includes(yt.M2)&&(Zt="M2",Wt=yt.M2);const Ee={1:{x:3,z:6},2:{x:3,z:1.5},3:{x:0,z:1.5},4:{x:-3,z:1.5},5:{x:-3,z:6},6:{x:0,z:6}},ye=z.names||{};lt.current.forEach(we=>{const je=we.userData.id,He=ye[je]||we.userData.label;we.userData.currentLabel!==He&&(q(we,He),we.userData.currentLabel=He);let Ge=yt[je],ge=!1;if(je==="L"?Wt?Ge=Wt:ge=!0:je===Zt&&(ge=!0),ge)we.visible=!1,we.position.y=-100;else{we.visible=!0;let Ae=Ee[Ge];xt==="serve_receive"&&["L","H1","H2"].includes(je)&&(Ge===1&&(Ae={x:3,z:6.5}),Ge===6&&(Ae={x:0,z:7}),Ge===5&&(Ae={x:-3,z:6.5})),we.position.set(Ae.x,.9,Ae.z)}})},ft=K=>{const yt=[...["S","H1","M1","O","H2","M2"]];for(let Pt=0;Pt<K-1;Pt++)yt.unshift(yt.pop());return{[yt[0]]:1,[yt[1]]:2,[yt[2]]:3,[yt[3]]:4,[yt[4]]:5,[yt[5]]:6}},$t=K=>{const xt={},yt=[1,2,3,4,5,6],Pt=["serve_receive","defense","attack"],Wt={1:{x:3,z:6},2:{x:3,z:1.5},3:{x:0,z:1.5},4:{x:-3,z:1.5},5:{x:-3,z:6},6:{x:0,z:6},deep5:{x:-3.5,z:7.5},deep6:{x:0,z:7.5},deep1:{x:3.5,z:7.5}};return yt.forEach(Zt=>{const Ee=ft(Zt),ye=[1,5,6];let we=null,je=null;ye.includes(Ee.M1)?(je="M1",we=Ee.M1):(je="M2",we=Ee.M2),Pt.forEach(He=>{const Ge={},ge={};G.forEach(Le=>{const pe=Le.id;let _n=Ee[pe],qi=!0;if(pe==="L"?we?_n=we:qi=!1:pe===je&&(qi=!1),!qi){Ge[pe]={x:0,z:-100,visible:!1};return}let vn=Wt[_n];K==="u19_research"?He==="serve_receive"?pe==="L"?vn={x:-3,z:6.5}:["H1","H2"].includes(pe)?ye.includes(_n)?vn={x:0,z:7}:vn={x:3,z:6.5}:(pe==="S"&&(vn={x:2.5,z:2}),["M1","M2"].includes(pe)&&(vn={x:0,z:3}),pe==="O"&&(vn={x:4,z:2})):He==="defense"&&(ye.includes(_n)?(ge[pe]="defend",pe==="L"?vn=Wt.deep5:["H1","H2"].includes(pe)?vn=Wt.deep6:vn=Wt.deep1):(vn={x:_n===4?-3.5:_n===2?3.5:0,z:.5},ge[pe]="block")):He==="serve_receive"&&["L","H1","H2"].includes(pe)?(_n===1&&(vn={x:3,z:6.5}),_n===6&&(vn={x:0,z:7}),_n===5&&(vn={x:-3,z:6.5})):He==="defense"&&(ye.includes(_n)?(ge[pe]="defend",vn.z=7.5):(vn.z=.5,ge[pe]="block")),Ge[pe]={x:vn.x,z:vn.z,visible:!0}});const Ae={};on.forEach(Le=>Ae[Le.id]={x:Le.pos.x,z:Le.pos.z}),xt[`${Zt}_${He}`]={players:Ge,enemies:Ae,roles:ge,zones:{}}})}),xt},Nt=(K,xt)=>{const yt=$t(K);B(yt),Z(xt),setTimeout(()=>dt(),50)},jt=()=>{if(!zt.current)return;for(;zt.current.children.length>0;)zt.current.remove(zt.current.children[0]);if(xe.current=[],ze.current={},v&&St.current==="attack"&&le(),!it.current&&H.current!=="edit_zones")return;const K=`${L.current}_${St.current}`,xt=Et.current[K]||{},yt=xt.zones||{},Pt=xt.roles||{};lt.current.forEach(Wt=>{if(!Wt.visible)return;const Zt=Wt.userData.id;let Ee=!1;if(Pt[Zt]?Ee=Pt[Zt]==="block":Ee=Wt.position.z<2&&St.current==="defense",Ee){const ye=new xu;ye.moveTo(-.5,0),ye.lineTo(.5,0),ye.lineTo(2,-9),ye.lineTo(-2,-9),ye.lineTo(-.5,0);const we=new xl(ye),je=new Kr({color:2042167,transparent:!0,opacity:.6,side:ki}),He=new jn(we,je);He.rotation.x=-Math.PI/2,He.position.set(Wt.position.x,.05,Wt.position.z+.5),zt.current.add(He)}else{const ye=yt[Zt]||JSON.parse(JSON.stringify(fn)),we=new xu;we.moveTo(ye[0].x,ye[0].z);for(let ge=1;ge<ye.length;ge++)we.lineTo(ye[ge].x,ye[ge].z);we.lineTo(ye[0].x,ye[0].z);const je=new xl(we),He=new Kr({color:9647082,transparent:!0,opacity:.4,side:ki}),Ge=new jn(je,He);Ge.rotation.x=Math.PI/2,Ge.position.set(Wt.position.x,.05,Wt.position.z),zt.current.add(Ge),ze.current[Zt]=Ge,H.current==="edit_zones"&&ye.forEach((ge,Ae)=>{const Le=new jn(new Gp(.3),new Kr({color:14202110}));Le.position.set(Wt.position.x+ge.x,.3,Wt.position.z+ge.z),Le.userData={type:"handle",ownerId:Zt,index:Ae},zt.current.add(Le),xe.current.push(Le)})}})},le=()=>{if(!zt.current)return;const K=[Ce.wing[1],Ce.middle[0],Ce.opposite[1]],xt=lt.current.find(Pt=>Pt.userData.id==="S"),yt=xt?xt.position.clone():new X(2,0,0);yt.y=2.4,K.forEach(Pt=>{const Wt=new X(Pt.target.x,2.6,Pt.target.z),Zt=new X().lerpVectors(yt,Wt,.5);Zt.y=Pt.height;const Ee=new xp(yt,Zt,Wt),ye=new Nn().setFromPoints(Ee.getPoints(20)),we=Pt.style==="quick"?16711680:16776960,je=new Jr({color:we,linewidth:2,transparent:!0,opacity:.6}),He=new cl(ye,je);zt.current.add(He)})},Tt=(K,xt)=>{if(!zt.current||!K)return;const yt=xt.position.clone();if(K.type==="attack"){const Pt=lt.current.find(Ge=>Ge.userData.id==="S"),Wt=Pt?Pt.position.clone():yt;Wt.y=2.4;const Zt=new X(K.target.x,2.6,K.target.z),Ee=new X().lerpVectors(Wt,Zt,.5);Ee.y=K.height;const ye=new xp(Wt,Ee,Zt),we=new Nn().setFromPoints(ye.getPoints(25)),je=new T1({color:K.style==="quick"?16711680:16776960,linewidth:4,dashSize:.5,gapSize:.2,scale:1}),He=new cl(we,je);He.computeLineDistances(),zt.current.add(He)}else if(K.type==="defense"){yt.y=.1;let Pt;K.style==="block"?Pt=new X(yt.x+K.offset.x,.1,yt.z-2):Pt=new X(K.target.x,.1,K.target.z);const Wt=[yt,Pt],Zt=new Nn().setFromPoints(Wt),Ee=new Jr({color:K.color||65280,linewidth:3}),ye=new cl(Zt,Ee);zt.current.add(ye),K.style==="dig"&&(xt.position.x=K.target.x,xt.position.z=K.target.z,W())}P(K.name)},At=(K,xt)=>{if(!r.current||!Rt.current||!rn.current)return[];const yt=r.current.getBoundingClientRect(),Pt=Te.current;return Pt.x=(K.clientX-yt.left)/yt.width*2-1,Pt.y=-((K.clientY-yt.top)/yt.height)*2+1,rn.current.setFromCamera(Pt,Rt.current),rn.current.intersectObjects(xt)},Xt=K=>{if(!t||H.current==="camera")return;if(at.current){bt(K);return}const xt=At(K,xe.current);if(xt.length>0){const Wt=xt[0].object;$.current&&($.current.enabled=!1),se.current={isDown:!0,isDragging:!1,object:Wt,type:"handle",ownerId:Wt.userData.ownerId,handleIndex:Wt.userData.index,startScreen:{x:K.clientX,y:K.clientY}};return}const yt=[...lt.current,...Dt.current],Pt=At(K,yt);if(Pt.length>0){const Wt=Pt[0].object,Zt=Pt[0].point,Ee=Wt.position.clone().sub(Zt);$.current&&($.current.enabled=!1),se.current={isDown:!0,isDragging:!1,object:Wt,type:"player",offset:Ee,startScreen:{x:K.clientX,y:K.clientY}};return}},Ht=K=>{if(!t)return;if(at.current&&se.current.isDown){_t(K);return}const xt=se.current;if(xt.isDown){const yt=K.clientX-xt.startScreen.x,Pt=K.clientY-xt.startScreen.y;if(Math.sqrt(yt*yt+Pt*Pt)>3&&(xt.isDragging=!0),xt.isDragging){const Wt=At(K,[Yt.current]);if(Wt.length>0){const Zt=Wt[0].point;if(xt.type==="player"){const Ee=Zt.add(xt.offset);xt.object.position.set(Ee.x,.9,Ee.z),(it.current||H.current==="edit_zones")&&jt()}else if(xt.type==="handle"){const Ee=lt.current.find(ye=>ye.userData.id===xt.ownerId);if(Ee){xt.object.position.set(Zt.x,.3,Zt.z);const ye=Zt.x-Ee.position.x,we=Zt.z-Ee.position.z,je=`${L.current}_${St.current}`,He=Et.current[je]||{},Ge=He.zones||{},ge=Ge[xt.ownerId]||JSON.parse(JSON.stringify(fn));ge[xt.handleIndex]={x:ye,z:we},Et.current={...Et.current,[je]:{...He,zones:{...Ge,[xt.ownerId]:ge}}};const Ae=ze.current[xt.ownerId];if(Ae){const Le=new xu;Le.moveTo(ge[0].x,ge[0].z);for(let pe=1;pe<ge.length;pe++)Le.lineTo(ge[pe].x,ge[pe].z);Le.lineTo(ge[0].x,ge[0].z),Ae.geometry.dispose(),Ae.geometry=new xl(Le)}}}}}}},Lt=K=>{},de=()=>{const K=se.current;if(K.isDown&&(K.isDragging&&(K.type==="handle"?B({...Et.current}):W()),!K.isDragging&&K.type==="player"&&!K.object.userData.isEnemy)){const xt=K.object;b(xt);const yt=Et.current.names?.[xt.userData.id]||xt.userData.label;ht(yt)}se.current={isDown:!1,isDragging:!1,object:null,offset:null,startScreen:{x:0,y:0}},$.current&&H.current==="camera"&&($.current.enabled=!0)},W=()=>{const K=`${L.current}_${St.current}`,xt={};lt.current.forEach(Zt=>xt[Zt.userData.id]={x:Zt.position.x,z:Zt.position.z,visible:Zt.visible});const yt={};Dt.current.forEach(Zt=>yt[Zt.userData.id]={x:Zt.position.x,z:Zt.position.z});const Pt=Et.current[K]?.zones||{},Wt=Et.current[K]?.roles||{};B(Zt=>({...Zt,[K]:{...Zt[K],players:xt,enemies:yt,zones:Pt,roles:Wt}}))},Ot=()=>{if(!S)return;const K=S.userData.id;B(xt=>({...xt,names:{...xt.names,[K]:et}}))},Ct=K=>{const xt=`${c}_${d}`;B(yt=>{const Pt=yt[xt]||{},Wt=Pt.roles||{},Zt=Wt[K]||(lt.current.find(Ee=>Ee.userData.id===K).position.z<2?"block":"defend");return{...yt,[xt]:{...Pt,roles:{...Wt,[K]:Zt==="block"?"defend":"block"}}}})},Gt=()=>{V&&(W(),D(K=>[...K,{id:Date.now(),name:V,data:z}]),w(!1),Q(""))},bt=K=>{se.current.isDown=!0;const xt=At(K,[Yt.current]);if(xt.length>0){const yt=new cl(new Nn,new Jr({color:16776960,linewidth:3}));yt.userData.points=[xt[0].point],yt.position.y=.05,gt.current.add(yt),ve.current.push(yt),se.current.object=yt}},_t=K=>{if(!se.current.object)return;const xt=At(K,[Yt.current]);if(xt.length>0){const yt=se.current.object;yt.userData.points.push(xt[0].point),yt.geometry.setFromPoints(yt.userData.points)}},wt=()=>{ve.current.forEach(K=>gt.current.remove(K)),ve.current=[]};return Ut.jsxs("div",{className:"flex flex-col h-full bg-slate-900 text-white font-sans overflow-hidden",children:[Ut.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700 z-50",children:[Ut.jsxs("h1",{className:"text-lg font-bold flex items-center gap-2",children:[Ut.jsx("button",{onClick:()=>l(!a),className:"md:hidden text-slate-300",children:Ut.jsx(dM,{size:24})}),Ut.jsx("span",{className:"text-orange-500",children:"Volley"}),"Tactics Pro",I&&Ut.jsx("span",{className:"hidden sm:inline-block text-xs bg-slate-700 px-2 py-1 rounded text-slate-300 ml-2",children:I})]}),Ut.jsx("div",{className:"flex gap-1 overflow-x-auto",children:[1,2,3,4,5,6].map(K=>Ut.jsxs("button",{onClick:()=>f(K),className:`px-2 py-1 sm:px-3 sm:py-1 rounded text-sm font-bold ${c===K?"bg-orange-600":"bg-slate-700"}`,children:["P",K]},K))})]}),Ut.jsxs("div",{className:"flex flex-1 relative overflow-hidden",children:[Ut.jsxs("div",{className:`
                fixed inset-y-0 left-0 bg-slate-800 p-4 flex flex-col gap-4 z-40 transform transition-transform duration-300 w-64 border-r border-slate-700 pt-16 md:pt-4 md:relative md:transform-none
                ${a?"translate-x-0":"-translate-x-full md:translate-x-0"}
            `,children:[Ut.jsxs("div",{className:"flex justify-between md:hidden",children:[Ut.jsx("h3",{className:"font-bold text-slate-400",children:"Menu"}),Ut.jsx("button",{onClick:()=>l(!1),children:Ut.jsx(O_,{size:20})})]}),Ut.jsxs("div",{className:"space-y-1",children:[Ut.jsx("h3",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Fase"}),Ut.jsxs("button",{onClick:()=>{m("serve_receive"),l(!1)},className:`w-full flex items-center gap-2 p-3 md:p-2 rounded text-sm ${d==="serve_receive"?"bg-blue-600":"bg-slate-700"}`,children:[Ut.jsx(nM,{size:18})," Receptie"]}),Ut.jsxs("button",{onClick:()=>{m("defense"),l(!1)},className:`w-full flex items-center gap-2 p-3 md:p-2 rounded text-sm ${d==="defense"?"bg-green-600":"bg-slate-700"}`,children:[Ut.jsx(EM,{size:18})," Verdediging"]}),Ut.jsxs("button",{onClick:()=>{m("attack"),l(!1)},className:`w-full flex items-center gap-2 p-3 md:p-2 rounded text-sm ${d==="attack"?"bg-red-600":"bg-slate-700"}`,children:[Ut.jsx(TM,{size:18})," Aanval"]})]}),Ut.jsxs("div",{className:"space-y-1 pt-2 border-t border-slate-700",children:[Ut.jsx("h3",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Sjablonen"}),Ne.map(K=>Ut.jsxs("button",{onClick:()=>{Nt(K.id,K.name),l(!1)},className:"w-full text-left p-2 rounded text-xs bg-slate-700 hover:bg-slate-600 flex items-center gap-2",children:[Ut.jsx(aM,{size:14,className:"text-orange-400"})," ",K.name]},K.id))]}),Ut.jsxs("div",{className:"space-y-1 pt-2 border-t border-slate-700",children:[Ut.jsx("h3",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Tools"}),Ut.jsxs("button",{onClick:()=>M(!T),className:`w-full flex items-center gap-2 p-2 rounded text-sm ${T?"bg-indigo-600":"bg-slate-700"}`,children:[Ut.jsx(L_,{size:16})," Zones"]}),Ut.jsxs("button",{onClick:()=>O(!v),className:`w-full flex items-center gap-2 p-2 rounded text-sm ${v?"bg-orange-500":"bg-slate-700"}`,children:[Ut.jsx(DM,{size:16})," Alle Aanvallen"]}),Ut.jsxs("div",{className:"flex gap-1 mt-1",children:[Ut.jsxs("button",{onClick:()=>w(!0),className:"flex-1 bg-blue-600 p-2 rounded text-xs font-bold flex justify-center items-center gap-1",children:[Ut.jsx(SM,{size:14})," Save"]}),Ut.jsxs("button",{onClick:()=>{B({}),Z(null)},className:"flex-1 bg-slate-600 p-2 rounded text-xs flex justify-center items-center gap-1",children:[Ut.jsx(rM,{size:14})," New"]})]})]}),Ut.jsxs("div",{className:"mt-auto pt-2 border-t border-slate-700",children:[Ut.jsx("h3",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Modus"}),Ut.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[Ut.jsxs("button",{onClick:()=>{g("move"),y(!1),l(!1)},className:`p-3 md:p-2 rounded text-xs ${p==="move"?"bg-blue-600":"bg-slate-700"}`,children:[Ut.jsx(uM,{size:18,className:"mb-1 mx-auto"})," Verplaats"]}),Ut.jsxs("button",{onClick:()=>{g("edit_zones"),y(!1),M(!0),l(!1)},className:`p-3 md:p-2 rounded text-xs ${p==="edit_zones"?"bg-blue-600":"bg-slate-700"}`,children:[Ut.jsx(L_,{size:18,className:"mb-1 mx-auto"})," Bewerk Zone"]}),Ut.jsxs("button",{onClick:()=>{g("camera"),y(!1),l(!1)},className:`p-3 md:p-2 rounded text-xs ${p==="camera"?"bg-blue-600":"bg-slate-700"}`,children:[Ut.jsx(lM,{size:18,className:"mb-1 mx-auto"})," Camera"]}),Ut.jsxs("button",{onClick:()=>{y(!_),g("move"),l(!1)},className:`p-3 md:p-2 rounded text-xs ${_?"bg-yellow-500 text-black":"bg-slate-700"}`,children:[Ut.jsx(_M,{size:18,className:"mb-1 mx-auto"})," Teken"]})]}),Ut.jsxs("button",{onClick:wt,className:"w-full mt-1 bg-slate-700 text-xs p-2 hover:bg-red-900",children:[Ut.jsx(xM,{size:14,className:"inline mr-1"})," Wis Lijnen"]})]})]}),a&&Ut.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 md:hidden",onClick:()=>l(!1)}),Ut.jsxs("div",{className:"flex-1 bg-gray-900 relative cursor-crosshair h-full",ref:r,children:[S&&Ut.jsxs("div",{className:"absolute top-4 right-4 bg-slate-800 p-4 rounded shadow-xl border border-slate-600 z-20 w-64 max-h-[80vh] overflow-y-auto",children:[Ut.jsxs("div",{className:"flex justify-between items-center mb-3 pb-2 border-b border-slate-600",children:[Ut.jsx("h3",{className:"font-bold flex items-center gap-2",children:"Speler Opties"}),Ut.jsx("button",{onClick:()=>b(null),children:Ut.jsx(O_,{size:16})})]}),Ut.jsxs("div",{className:"mb-3",children:[Ut.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-bold",children:"Naam"}),Ut.jsxs("div",{className:"flex gap-1",children:[Ut.jsx("input",{className:"bg-slate-900 text-white text-sm p-1 rounded w-full border border-slate-600",value:et,onChange:K=>ht(K.target.value),onBlur:Ot,onKeyDown:K=>K.key==="Enter"&&Ot()}),Ut.jsx("button",{onClick:Ot,className:"bg-blue-600 p-1 rounded hover:bg-blue-500",children:Ut.jsx(mM,{size:14})})]})]}),Ut.jsxs("button",{onClick:()=>Ct(S.userData.id),className:"w-full bg-slate-700 hover:bg-slate-600 p-2 rounded text-xs flex items-center gap-2 mb-3",children:[Ut.jsx(RM,{size:16})," Wissel Rol (Blok/Verd)"]}),Ut.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-bold mb-1 block",children:"Acties"}),(S.userData.role==="wing"?Ce.wing:S.userData.role==="middle"?Ce.middle:Ce.opposite).map((K,xt)=>Ut.jsx("button",{onClick:()=>Tt(K,S),className:"w-full text-left p-2 rounded bg-slate-700 hover:bg-slate-600 text-xs mb-1",children:Ut.jsx("span",{className:"font-bold text-slate-200",children:K.name})},xt)),Qt.block.map((K,xt)=>Ut.jsx("button",{onClick:()=>Tt(K,S),className:"w-full text-left p-2 rounded bg-slate-700 hover:bg-slate-600 text-xs mb-1 border-l-2 border-red-500 pl-2",children:Ut.jsx("span",{className:"font-bold text-slate-200",children:K.name})},"b"+xt)),Qt.dig.map((K,xt)=>Ut.jsx("button",{onClick:()=>Tt(K,S),className:"w-full text-left p-2 rounded bg-slate-700 hover:bg-slate-600 text-xs mb-1 border-l-2 border-green-500 pl-2",children:Ut.jsx("span",{className:"font-bold text-slate-200",children:K.name})},"d"+xt))]}),C&&Ut.jsx("div",{className:"absolute inset-0 bg-black/60 flex items-center justify-center z-50",children:Ut.jsxs("div",{className:"bg-slate-800 p-6 rounded w-80",children:[Ut.jsx("h3",{className:"font-bold mb-2",children:"Opslaan"}),Ut.jsx("input",{value:V,onChange:K=>Q(K.target.value),className:"w-full bg-slate-900 p-2 rounded mb-4",placeholder:"Naam tactics..."}),Ut.jsxs("div",{className:"flex justify-end gap-2",children:[Ut.jsx("button",{onClick:()=>w(!1),children:"Annuleren"}),Ut.jsx("button",{onClick:Gt,className:"bg-blue-600 px-4 py-2 rounded",children:"Opslaan"})]})]})}),p==="edit_zones"&&Ut.jsxs("div",{className:"absolute bottom-4 left-4 right-4 md:left-4 md:right-auto bg-blue-900/80 p-2 rounded text-xs pointer-events-none",children:[Ut.jsx("p",{className:"font-bold text-blue-200",children:"Zone Bewerken:"}),"Sleep de 4 oranje bollen."]})]})]})]})};ZS.createRoot(document.getElementById("root")).render(Ut.jsx(re.StrictMode,{children:Ut.jsx(kR,{})}));
