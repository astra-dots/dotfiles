"use strict";(()=>{var Rs=Object.create;var Un=Object.defineProperty;var Is=Object.getOwnPropertyDescriptor;var Cs=Object.getOwnPropertyNames;var Os=Object.getPrototypeOf,Ms=Object.prototype.hasOwnProperty;var Mt=(l,o,u)=>()=>{if(u)throw u[0];try{return l&&(o=l(l=0)),o}catch(f){throw u=[f],f}};var Ns=(l,o)=>()=>{try{return o||l((o={exports:{}}).exports,o),o.exports}catch(u){throw o=0,u}},zs=(l,o)=>{for(var u in o)Un(l,u,{get:o[u],enumerable:!0})},Ks=(l,o,u,f)=>{if(o&&typeof o=="object"||typeof o=="function")for(let y of Cs(o))!Ms.call(l,y)&&y!==u&&Un(l,y,{get:()=>o[y],enumerable:!(f=Is(o,y))||f.enumerable});return l};var Bs=(l,o,u)=>(u=l!=null?Rs(Os(l)):{},Ks(o||!l||!l.__esModule?Un(u,"default",{value:l,enumerable:!0}):u,l));var Zi=Ns((Hn,jn)=>{(function(l,o){typeof Hn=="object"&&typeof jn<"u"?jn.exports=o():typeof define=="function"&&define.amd?define(o):(l=typeof globalThis<"u"?globalThis:l||self,l.Dexie=o())})(Hn,(function(){"use strict";var l=function(t,e){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},l(t,e)};function o(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");l(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var u=function(){return u=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)};function f(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,a;n<i;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))}typeof SuppressedError=="function"&&SuppressedError;var y=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,b=Object.keys,E=Array.isArray;typeof Promise<"u"&&!y.Promise&&(y.Promise=Promise);function K(t,e){return typeof e!="object"||b(e).forEach(function(r){t[r]=e[r]}),t}var I=Object.getPrototypeOf,X={}.hasOwnProperty;function W(t,e){return X.call(t,e)}function tt(t,e){typeof e=="function"&&(e=e(I(t))),(typeof Reflect>"u"?b:Reflect.ownKeys)(e).forEach(function(r){ut(t,r,e[r])})}var ot=Object.defineProperty;function ut(t,e,r,n){ot(t,e,K(r&&W(r,"get")&&typeof r.get=="function"?{get:r.get,set:r.set,configurable:!0}:{value:r,configurable:!0,writable:!0},n))}function it(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ut(t.prototype,"constructor",t),{extend:tt.bind(null,t.prototype)}}}}var St=Object.getOwnPropertyDescriptor;function zt(t,e){var r=St(t,e),n;return r||(n=I(t))&&zt(n,e)}var Bt=[].slice;function Rt(t,e,r){return Bt.call(t,e,r)}function re(t,e){return e(t)}function It(t){if(!t)throw new Error("Assertion Failed")}function Ft(t){y.setImmediate?setImmediate(t):setTimeout(t,0)}function le(t,e){return t.reduce(function(r,n,i){var a=e(n,i);return a&&(r[a[0]]=a[1]),r},{})}function lt(t,e){if(typeof e=="string"&&W(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var r=[],n=0,i=e.length;n<i;++n){var a=lt(t,e[n]);r.push(a)}return r}var s=e.indexOf(".");if(s!==-1){var c=t[e.substr(0,s)];return c==null?void 0:lt(c,e.substr(s+1))}}function pt(t,e,r){if(!(!t||e===void 0)&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){It(typeof r!="string"&&"length"in r);for(var n=0,i=e.length;n<i;++n)pt(t,e[n],r[n])}else{var a=e.indexOf(".");if(a!==-1){var s=e.substr(0,a),c=e.substr(a+1);if(c==="")r===void 0?E(t)&&!isNaN(parseInt(s))?t.splice(s,1):delete t[s]:t[s]=r;else{var p=t[s];if(!p||!W(t,s)){if(r===void 0)return;p=t[s]={}}pt(p,c,r)}}else r===void 0?E(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=r}}function ne(t,e){typeof e=="string"?pt(t,e,void 0):"length"in e&&[].map.call(e,function(r){pt(t,r,void 0)})}function Lt(t){var e={};for(var r in t)W(t,r)&&(e[r]=t[r]);return e}var Gt=[].concat;function Kt(t){return Gt.apply([],t)}var gt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Kt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return y[t]}),Yt=new Set(gt.map(function(t){return y[t]}));function Jt(t){var e={};for(var r in t)if(W(t,r)){var n=t[r];e[r]=!n||typeof n!="object"||Yt.has(n.constructor)?n:Jt(n)}return e}var dt=null;function vt(t){dt=new WeakMap;var e=qt(t);return dt=null,e}function qt(t){if(!t||typeof t!="object")return t;var e=dt.get(t);if(e)return e;if(E(t)){e=[],dt.set(t,e);for(var r=0,n=t.length;r<n;++r)e.push(qt(t[r]))}else if(Yt.has(t.constructor))e=t;else{var i=I(t);e=i===Object.prototype?{}:Object.create(i),dt.set(t,e);for(var a in t)W(t,a)&&(e[a]=qt(t[a]))}return e}var ue={}.toString;function Wt(t){return ue.call(t).slice(8,-1)}var yt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",kt=typeof yt=="symbol"?function(t){var e;return t!=null&&(e=t[yt])&&e.apply(t)}:function(){return null};function Ct(t,e){var r=t.indexOf(e);return r>=0&&t.splice(r,1),r>=0}var bt={};function Pt(t){var e,r,n,i;if(arguments.length===1){if(E(t))return t.slice();if(this===bt&&typeof t=="string")return[t];if(i=kt(t)){for(r=[];n=i.next(),!n.done;)r.push(n.value);return r}if(t==null)return[t];if(e=t.length,typeof e=="number"){for(r=new Array(e);e--;)r[e]=t[e];return r}return[t]}for(e=arguments.length,r=new Array(e);e--;)r[e]=arguments[e];return r}var ce=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ie=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],D=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],j=ie.concat(D),xt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function _t(t,e){this.name=t,this.message=e}it(_t).from(Error).extend({toString:function(){return this.name+": "+this.message}});function Et(t,e){return t+". Errors: "+Object.keys(e).map(function(r){return e[r].toString()}).filter(function(r,n,i){return i.indexOf(r)===n}).join(`
`)}function R(t,e,r,n){this.failures=e,this.failedKeys=n,this.successCount=r,this.message=Et(t,e)}it(R).from(_t);function et(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(r){return e[r]}),this.failuresByPos=e,this.message=Et(t,this.failures)}it(et).from(_t);var U=j.reduce(function(t,e){return t[e]=e+"Error",t},{}),B=_t,C=j.reduce(function(t,e){var r=e+"Error";function n(i,a){this.name=r,i?typeof i=="string"?(this.message="".concat(i).concat(a?`
 `+a:""),this.inner=a||null):typeof i=="object"&&(this.message="".concat(i.name," ").concat(i.message),this.inner=i):(this.message=xt[e]||r,this.inner=null)}return it(n).from(B),t[e]=n,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var st=D.reduce(function(t,e){return t[e+"Error"]=C[e],t},{});function We(t,e){if(!t||t instanceof _t||t instanceof TypeError||t instanceof SyntaxError||!t.name||!st[t.name])return t;var r=new st[t.name](e||t.message,t);return"stack"in t&&ut(r,"stack",{get:function(){return this.inner.stack}}),r}var dr=j.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t},{});dr.ModifyError=R,dr.DexieError=_t,dr.BulkError=et;function rt(){}function Ze(t){return t}function oo(t,e){return t==null||t===Ze?e:function(r){return e(t(r))}}function ke(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function so(t,e){return t===rt?e:function(){var r=t.apply(this,arguments);r!==void 0&&(arguments[0]=r);var n=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var a=e.apply(this,arguments);return n&&(this.onsuccess=this.onsuccess?ke(n,this.onsuccess):n),i&&(this.onerror=this.onerror?ke(i,this.onerror):i),a!==void 0?a:r}}function lo(t,e){return t===rt?e:function(){t.apply(this,arguments);var r=this.onsuccess,n=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),r&&(this.onsuccess=this.onsuccess?ke(r,this.onsuccess):r),n&&(this.onerror=this.onerror?ke(n,this.onerror):n)}}function uo(t,e){return t===rt?e:function(r){var n=t.apply(this,arguments);K(r,n);var i=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var s=e.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?ke(i,this.onsuccess):i),a&&(this.onerror=this.onerror?ke(a,this.onerror):a),n===void 0?s===void 0?void 0:s:K(n,s)}}function co(t,e){return t===rt?e:function(){return e.apply(this,arguments)===!1?!1:t.apply(this,arguments)}}function rn(t,e){return t===rt?e:function(){var r=t.apply(this,arguments);if(r&&typeof r.then=="function"){for(var n=this,i=arguments.length,a=new Array(i);i--;)a[i]=arguments[i];return r.then(function(){return e.apply(n,a)})}return e.apply(this,arguments)}}var ae=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ci(t,e){ae=t}var Xe={},pi=100,nn=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,I(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,I(e),t]})(),di=nn[0],fi=nn[1],po=nn[2],fo=fi&&fi.then,Pe=di&&di.constructor,an=!!po;function mo(){queueMicrotask(go)}var Qe=function(t,e){Je.push([t,e]),fr&&(mo(),fr=!1)},on=!0,fr=!0,_e=[],mr=[],sn=Ze,pe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:rt,pgp:!1,env:{},finalize:rt},H=pe,Je=[],Ee=0,hr=[];function N(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=H;if(typeof t!="function"){if(t!==Xe)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&un(this,this._value);return}this._state=null,this._value=null,++e.ref,hi(this,t)}var ln={get:function(){var t=H,e=br;function r(n,i){var a=this,s=!t.global&&(t!==H||e!==br),c=s&&!ge(),p=new N(function(d,h){cn(a,new mi(yi(n,t,s,c),yi(i,t,s,c),d,h,t))});return this._consoleTask&&(p._consoleTask=this._consoleTask),p}return r.prototype=Xe,r},set:function(t){ut(this,"then",t&&t.prototype===Xe?ln:{get:function(){return t},set:ln.set})}};tt(N.prototype,{then:ln,_then:function(t,e){cn(this,new mi(null,null,t,e,H))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],r=arguments[1];return typeof e=="function"?this.then(null,function(n){return n instanceof e?r(n):gr(n)}):this.then(null,function(n){return n&&n.name===e?r(n):gr(n)})},finally:function(t){return this.then(function(e){return N.resolve(t()).then(function(){return e})},function(e){return N.resolve(t()).then(function(){return gr(e)})})},timeout:function(t,e){var r=this;return t<1/0?new N(function(n,i){var a=setTimeout(function(){return i(new C.Timeout(e))},t);r.then(n,i).finally(clearTimeout.bind(null,a))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ut(N.prototype,Symbol.toStringTag,"Dexie.Promise"),pe.env=vi();function mi(t,e,r,n,i){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=r,this.reject=n,this.psd=i}tt(N,{all:function(){var t=Pt.apply(null,arguments).map(xr);return new N(function(e,r){t.length===0&&e([]);var n=t.length;t.forEach(function(i,a){return N.resolve(i).then(function(s){t[a]=s,--n||e(t)},r)})})},resolve:function(t){if(t instanceof N)return t;if(t&&typeof t.then=="function")return new N(function(r,n){t.then(r,n)});var e=new N(Xe,!0,t);return e},reject:gr,race:function(){var t=Pt.apply(null,arguments).map(xr);return new N(function(e,r){t.map(function(n){return N.resolve(n).then(e,r)})})},PSD:{get:function(){return H},set:function(t){return H=t}},totalEchoes:{get:function(){return br}},newPSD:he,usePSD:Ae,scheduler:{get:function(){return Qe},set:function(t){Qe=t}},rejectionMapper:{get:function(){return sn},set:function(t){sn=t}},follow:function(t,e){return new N(function(r,n){return he(function(i,a){var s=H;s.unhandleds=[],s.onunhandled=a,s.finalize=ke(function(){var c=this;vo(function(){c.unhandleds.length===0?i():a(c.unhandleds[0])})},s.finalize),t()},e,r,n)})}}),Pe&&(Pe.allSettled&&ut(N,"allSettled",function(){var t=Pt.apply(null,arguments).map(xr);return new N(function(e){t.length===0&&e([]);var r=t.length,n=new Array(r);t.forEach(function(i,a){return N.resolve(i).then(function(s){return n[a]={status:"fulfilled",value:s}},function(s){return n[a]={status:"rejected",reason:s}}).then(function(){return--r||e(n)})})})}),Pe.any&&typeof AggregateError<"u"&&ut(N,"any",function(){var t=Pt.apply(null,arguments).map(xr);return new N(function(e,r){t.length===0&&r(new AggregateError([]));var n=t.length,i=new Array(n);t.forEach(function(a,s){return N.resolve(a).then(function(c){return e(c)},function(c){i[s]=c,--n||r(new AggregateError(i))})})})}),Pe.withResolvers&&(N.withResolvers=Pe.withResolvers));function hi(t,e){try{e(function(r){if(t._state===null){if(r===t)throw new TypeError("A promise cannot be resolved with itself.");var n=t._lib&&Ke();r&&typeof r.then=="function"?hi(t,function(i,a){r instanceof N?r._then(i,a):r.then(i,a)}):(t._state=!0,t._value=r,gi(t)),n&&Be()}},un.bind(null,t))}catch(r){un(t,r)}}function un(t,e){if(mr.push(e),t._state===null){var r=t._lib&&Ke();e=sn(e),t._state=!1,t._value=e,yo(t),gi(t),r&&Be()}}function gi(t){var e=t._listeners;t._listeners=[];for(var r=0,n=e.length;r<n;++r)cn(t,e[r]);var i=t._PSD;--i.ref||i.finalize(),Ee===0&&(++Ee,Qe(function(){--Ee===0&&pn()},[]))}function cn(t,e){if(t._state===null){t._listeners.push(e);return}var r=t._state?e.onFulfilled:e.onRejected;if(r===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ee,Qe(ho,[r,t,e])}function ho(t,e,r){try{var n,i=e._value;!e._state&&mr.length&&(mr=[]),n=ae&&e._consoleTask?e._consoleTask.run(function(){return t(i)}):t(i),!e._state&&mr.indexOf(i)===-1&&bo(e),r.resolve(n)}catch(a){r.reject(a)}finally{--Ee===0&&pn(),--r.psd.ref||r.psd.finalize()}}function go(){Ae(pe,function(){Ke()&&Be()})}function Ke(){var t=on;return on=!1,fr=!1,t}function Be(){var t,e,r;do for(;Je.length>0;)for(t=Je,Je=[],r=t.length,e=0;e<r;++e){var n=t[e];n[0].apply(null,n[1])}while(Je.length>0);on=!0,fr=!0}function pn(){var t=_e;_e=[],t.forEach(function(n){n._PSD.onunhandled.call(null,n._value,n)});for(var e=hr.slice(0),r=e.length;r;)e[--r]()}function vo(t){function e(){t(),hr.splice(hr.indexOf(e),1)}hr.push(e),++Ee,Qe(function(){--Ee===0&&pn()},[])}function yo(t){_e.some(function(e){return e._value===t._value})||_e.push(t)}function bo(t){for(var e=_e.length;e;)if(_e[--e]._value===t._value){_e.splice(e,1);return}}function gr(t){return new N(Xe,!1,t)}function at(t,e){var r=H;return function(){var n=Ke(),i=H;try{return ve(r,!0),t.apply(this,arguments)}catch(a){e&&e(a)}finally{ve(i,!1),n&&Be()}}}var wt={awaits:0,echoes:0,id:0},xo=0,vr=[],yr=0,br=0,wo=0;function he(t,e,r,n){var i=H,a=Object.create(i);a.parent=i,a.ref=0,a.global=!1,a.id=++wo,pe.env,a.env=an?{Promise:N,PromiseProp:{value:N,configurable:!0,writable:!0},all:N.all,race:N.race,allSettled:N.allSettled,any:N.any,resolve:N.resolve,reject:N.reject}:{},e&&K(a,e),++i.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()};var s=Ae(a,t,r,n);return a.ref===0&&a.finalize(),s}function Fe(){return wt.id||(wt.id=++xo),++wt.awaits,wt.echoes+=pi,wt.id}function ge(){return wt.awaits?(--wt.awaits===0&&(wt.id=0),wt.echoes=wt.awaits*pi,!0):!1}(""+fo).indexOf("[native code]")===-1&&(Fe=ge=rt);function xr(t){return wt.echoes&&t&&t.constructor===Pe?(Fe(),t.then(function(e){return ge(),e},function(e){return ge(),ct(e)})):t}function So(t){++br,(!wt.echoes||--wt.echoes===0)&&(wt.echoes=wt.awaits=wt.id=0),vr.push(H),ve(t,!0)}function ko(){var t=vr[vr.length-1];vr.pop(),ve(t,!1)}function ve(t,e){var r=H;if((e?wt.echoes&&(!yr++||t!==H):yr&&(!--yr||t!==H))&&queueMicrotask(e?So.bind(null,t):ko),t!==H&&(H=t,r===pe&&(pe.env=vi()),an)){var n=pe.env.Promise,i=t.env;(r.global||t.global)&&(Object.defineProperty(y,"Promise",i.PromiseProp),n.all=i.all,n.race=i.race,n.resolve=i.resolve,n.reject=i.reject,i.allSettled&&(n.allSettled=i.allSettled),i.any&&(n.any=i.any))}}function vi(){var t=y.Promise;return an?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(y,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function Ae(t,e,r,n,i){var a=H;try{return ve(t,!0),e(r,n,i)}finally{ve(a,!1)}}function yi(t,e,r,n){return typeof t!="function"?t:function(){var i=H;r&&Fe(),ve(e,!0);try{return t.apply(this,arguments)}finally{ve(i,!1),n&&queueMicrotask(ge)}}}function dn(t){Promise===Pe&&wt.echoes===0?yr===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}var ct=N.reject;function fn(t,e,r,n){if(!t.idbdb||!t._state.openComplete&&!H.letThrough&&!t._vip){if(t._state.openComplete)return ct(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return ct(new C.DatabaseClosed);t.open().catch(rt)}return t._state.dbReadyPromise.then(function(){return fn(t,e,r,n)})}else{var i=t._createTransaction(e,r,t._dbSchema);try{i.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===U.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t.close({disableAutoOpen:!1}),t.open().then(function(){return fn(t,e,r,n)})):ct(a)}return i._promise(e,function(a,s){return he(function(){return H.trans=i,n(a,s,i)})}).then(function(a){if(e==="readwrite")try{i.idbtrans.commit()}catch{}return e==="readonly"?a:i._completion.then(function(){return a})})}}var bi="4.4.4",Te="\uFFFF",mn=-1/0,de="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",xi="String expected.",wi=1e3,wr="__dbnames",hn="readonly",gn="readwrite";function De(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var Si={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Sr(t){return typeof t=="string"&&!/\./.test(t)?function(e){return e[t]===void 0&&t in e&&(e=vt(e),delete e[t]),e}:function(e){return e}}function ki(){throw C.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function J(t,e){try{var r=Pi(t),n=Pi(e);if(r!==n)return r==="Array"?1:n==="Array"?-1:r==="binary"?1:n==="binary"?-1:r==="string"?1:n==="string"?-1:r==="Date"?1:n!=="Date"?NaN:-1;switch(r){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return _o(_i(t),_i(e));case"Array":return Po(t,e)}}catch{}return NaN}function Po(t,e){for(var r=t.length,n=e.length,i=r<n?r:n,a=0;a<i;++a){var s=J(t[a],e[a]);if(s!==0)return s}return r===n?0:r<n?-1:1}function _o(t,e){for(var r=t.length,n=e.length,i=r<n?r:n,a=0;a<i;++a)if(t[a]!==e[a])return t[a]<e[a]?-1:1;return r===n?0:r<n?-1:1}function Pi(t){var e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";var r=Wt(t);return r==="ArrayBuffer"?"binary":r}function _i(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function kr(t,e,r){var n=t.schema.yProps;return n?(e&&r.numFailures>0&&(e=e.filter(function(i,a){return!r.failures[a]})),Promise.all(n.map(function(i){var a=i.updatesTable;return e?t.db.table(a).where("k").anyOf(e).delete():t.db.table(a).clear()})).then(function(){return r})):r}var qe=(function(){function t(e){this["@@propmod"]=e}return t.prototype.execute=function(e){var r,n=this["@@propmod"];if(n.add!==void 0){var i=n.add;if(E(i))return f(f([],E(e)?e:[],!0),i,!0).sort();if(typeof i=="number")return(Number(e)||0)+i;if(typeof i=="bigint")try{return BigInt(e)+i}catch{return BigInt(0)+i}throw new TypeError("Invalid term ".concat(i))}if(n.remove!==void 0){var a=n.remove;if(E(a))return E(e)?e.filter(function(c){return!a.includes(c)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}var s=(r=n.replacePrefix)===null||r===void 0?void 0:r[0];return s&&typeof e=="string"&&e.startsWith(s)?n.replacePrefix[1]+e.substring(s.length):e},t})();function Ei(t,e){for(var r=b(e),n=r.length,i=!1,a=0;a<n;++a){var s=r[a],c=e[s],p=lt(t,s);c instanceof qe?(pt(t,s,c.execute(p)),i=!0):p!==c&&(pt(t,s,c),i=!0)}return i}var Ai=(function(){function t(){}return t.prototype._trans=function(e,r,n){var i=this._tx||H.trans,a=this.name,s=ae&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(h,g,x){if(!x.schema[a])throw new C.NotFound("Table "+a+" not part of transaction");return r(x.idbtrans,x)}var p=Ke();try{var d=i&&i.db._novip===this.db._novip?i===H.trans?i._promise(e,c,n):he(function(){return i._promise(e,c,n)},{trans:i,transless:H.transless||H}):fn(this.db,e,[this.name],c);return s&&(d._consoleTask=s,d=d.catch(function(h){return console.trace(h),ct(h)})),d}finally{p&&Be()}},t.prototype.get=function(e,r){var n=this;return e&&e.constructor===Object?this.where(e).first(r):e==null?ct(new C.Type("Invalid argument to Table.get()")):this._trans("readonly",function(i){return n.core.get({trans:i,key:e}).then(function(a){return n.hook.reading.fire(a)})}).then(r)},t.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(E(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var r=b(e);if(r.length===1)return this.where(r[0]).equals(e[r[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(h){if(h.compound&&r.every(function(x){return h.keyPath.indexOf(x)>=0})){for(var g=0;g<r.length;++g)if(r.indexOf(h.keyPath[g])===-1)return!1;return!0}return!1}).sort(function(h,g){return h.keyPath.length-g.keyPath.length})[0];if(n&&this.db._maxKey!==Te){var i=n.keyPath.slice(0,r.length);return this.where(i).equals(i.map(function(h){return e[h]}))}!n&&ae&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(r.join("+"),"]"));var a=this.schema.idxByName;function s(h,g){return J(h,g)===0}var c=r.reduce(function(h,g){var x=h[0],P=h[1],m=a[g],v=e[g];return[x||m,x||!m?De(P,m&&m.multi?function(S){var w=lt(S,g);return E(w)&&w.some(function(T){return s(v,T)})}:function(S){return s(v,lt(S,g))}):P]},[null,null]),p=c[0],d=c[1];return p?this.where(p.name).equals(e[p.keyPath]).filter(d):n?this.filter(d):this.where(r).equals("")},t.prototype.filter=function(e){return this.toCollection().and(e)},t.prototype.count=function(e){return this.toCollection().count(e)},t.prototype.offset=function(e){return this.toCollection().offset(e)},t.prototype.limit=function(e){return this.toCollection().limit(e)},t.prototype.each=function(e){return this.toCollection().each(e)},t.prototype.toArray=function(e){return this.toCollection().toArray(e)},t.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},t.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,E(e)?"[".concat(e.join("+"),"]"):e))},t.prototype.reverse=function(){return this.toCollection().reverse()},t.prototype.mapToClass=function(e){var r=this,n=r.db,i=r.name;this.schema.mappedClass=e,e.prototype instanceof ki&&(e=(function(p){o(d,p);function d(){return p!==null&&p.apply(this,arguments)||this}return Object.defineProperty(d.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),d.prototype.table=function(){return i},d})(e));for(var a=new Set,s=e.prototype;s;s=I(s))Object.getOwnPropertyNames(s).forEach(function(p){return a.add(p)});var c=function(p){if(!p)return p;var d=Object.create(e.prototype);for(var h in p)if(!a.has(h))try{d[h]=p[h]}catch{}return d};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=c,this.hook("reading",c),e},t.prototype.defineClass=function(){function e(r){K(this,r)}return this.mapToClass(e)},t.prototype.add=function(e,r){var n=this,i=this.schema.primKey,a=i.auto,s=i.keyPath,c=e;return s&&a&&(c=Sr(s)(e)),this._trans("readwrite",function(p){return n.core.mutate({trans:p,type:"add",keys:r!=null?[r]:null,values:[c]})}).then(function(p){return p.numFailures?N.reject(p.failures[0]):p.lastResult}).then(function(p){if(s)try{pt(e,s,p)}catch{}return p})},t.prototype.upsert=function(e,r){var n=this,i=this.schema.primKey.keyPath;return this._trans("readwrite",function(a){return n.core.get({trans:a,key:e}).then(function(s){var c=s??{};return Ei(c,r),i&&pt(c,i,e),n.core.mutate({trans:a,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[r]}}).then(function(p){return p.numFailures?N.reject(p.failures[0]):!!s})})})},t.prototype.update=function(e,r){if(typeof e=="object"&&!E(e)){var n=lt(e,this.schema.primKey.keyPath);return n===void 0?ct(new C.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(n).modify(r)}else return this.where(":id").equals(e).modify(r)},t.prototype.put=function(e,r){var n=this,i=this.schema.primKey,a=i.auto,s=i.keyPath,c=e;return s&&a&&(c=Sr(s)(e)),this._trans("readwrite",function(p){return n.core.mutate({trans:p,type:"put",values:[c],keys:r!=null?[r]:null})}).then(function(p){return p.numFailures?N.reject(p.failures[0]):p.lastResult}).then(function(p){if(s)try{pt(e,s,p)}catch{}return p})},t.prototype.delete=function(e){var r=this;return this._trans("readwrite",function(n){return r.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(i){return kr(r,[e],i)}).then(function(i){return i.numFailures?N.reject(i.failures[0]):void 0})})},t.prototype.clear=function(){var e=this;return this._trans("readwrite",function(r){return e.core.mutate({trans:r,type:"deleteRange",range:Si}).then(function(n){return kr(e,null,n)})}).then(function(r){return r.numFailures?N.reject(r.failures[0]):void 0})},t.prototype.bulkGet=function(e){var r=this;return this._trans("readonly",function(n){return r.core.getMany({keys:e,trans:n}).then(function(i){return i.map(function(a){return r.hook.reading.fire(a)})})})},t.prototype.bulkAdd=function(e,r,n){var i=this,a=Array.isArray(r)?r:void 0;n=n||(a?void 0:r);var s=n?n.allKeys:void 0;return this._trans("readwrite",function(c){var p=i.schema.primKey,d=p.auto,h=p.keyPath;if(h&&a)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(a&&a.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,x=h&&d?e.map(Sr(h)):e;return i.core.mutate({trans:c,type:"add",keys:a,values:x,wantResults:s}).then(function(P){var m=P.numFailures,v=P.results,S=P.lastResult,w=P.failures,T=s?v:S;if(m===0)return T;throw new et("".concat(i.name,".bulkAdd(): ").concat(m," of ").concat(g," operations failed"),w)})})},t.prototype.bulkPut=function(e,r,n){var i=this,a=Array.isArray(r)?r:void 0;n=n||(a?void 0:r);var s=n?n.allKeys:void 0;return this._trans("readwrite",function(c){var p=i.schema.primKey,d=p.auto,h=p.keyPath;if(h&&a)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(a&&a.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,x=h&&d?e.map(Sr(h)):e;return i.core.mutate({trans:c,type:"put",keys:a,values:x,wantResults:s}).then(function(P){var m=P.numFailures,v=P.results,S=P.lastResult,w=P.failures,T=s?v:S;if(m===0)return T;throw new et("".concat(i.name,".bulkPut(): ").concat(m," of ").concat(g," operations failed"),w)})})},t.prototype.bulkUpdate=function(e){var r=this,n=this.core,i=e.map(function(c){return c.key}),a=e.map(function(c){return c.changes}),s=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:i,cache:"clone"}).then(function(p){var d=[],h=[];e.forEach(function(x,P){var m=x.key,v=x.changes,S=p[P];if(S){for(var w=0,T=Object.keys(v);w<T.length;w++){var A=T[w],k=v[A];if(A===r.schema.primKey.keyPath){if(J(k,m)!==0)throw new C.Constraint("Cannot update primary key in bulkUpdate()")}else pt(S,A,k)}s.push(P),d.push(m),h.push(S)}});var g=d.length;return n.mutate({trans:c,type:"put",keys:d,values:h,updates:{keys:i,changeSpecs:a}}).then(function(x){var P=x.numFailures,m=x.failures;if(P===0)return g;for(var v=0,S=Object.keys(m);v<S.length;v++){var w=S[v],T=s[Number(w)];if(T!=null){var A=m[w];delete m[w],m[T]=A}}throw new et("".concat(r.name,".bulkUpdate(): ").concat(P," of ").concat(g," operations failed"),m)})})})},t.prototype.bulkDelete=function(e){var r=this,n=e.length;return this._trans("readwrite",function(i){return r.core.mutate({trans:i,type:"delete",keys:e}).then(function(a){return kr(r,e,a)})}).then(function(i){var a=i.numFailures,s=i.lastResult,c=i.failures;if(a===0)return s;throw new et("".concat(r.name,".bulkDelete(): ").concat(a," of ").concat(n," operations failed"),c)})},t})();function tr(t){var e={},r=function(c,p){if(p){for(var d=arguments.length,h=new Array(d-1);--d;)h[d-1]=arguments[d];return e[c].subscribe.apply(null,h),t}else if(typeof c=="string")return e[c]};r.addEventType=a;for(var n=1,i=arguments.length;n<i;++n)a(arguments[n]);return r;function a(c,p,d){if(typeof c=="object")return s(c);p||(p=co),d||(d=rt);var h={subscribers:[],fire:d,subscribe:function(g){h.subscribers.indexOf(g)===-1&&(h.subscribers.push(g),h.fire=p(h.fire,g))},unsubscribe:function(g){h.subscribers=h.subscribers.filter(function(x){return x!==g}),h.fire=h.subscribers.reduce(p,d)}};return e[c]=r[c]=h,h}function s(c){b(c).forEach(function(p){var d=c[p];if(E(d))a(p,c[p][0],c[p][1]);else if(d==="asap")var h=a(p,Ze,function(){for(var x=arguments.length,P=new Array(x);x--;)P[x]=arguments[x];h.subscribers.forEach(function(m){Ft(function(){m.apply(null,P)})})});else throw new C.InvalidArgument("Invalid event config")})}}function er(t,e){return it(e).from({prototype:t}),e}function Eo(t){return er(Ai.prototype,function(r,n,i){this.db=t,this._tx=i,this.name=r,this.schema=n,this.hook=t._allTables[r]?t._allTables[r].hook:tr(null,{creating:[so,rt],reading:[oo,Ze],updating:[uo,rt],deleting:[lo,rt]})})}function Le(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function vn(t,e){t.filter=De(t.filter,e)}function yn(t,e,r){var n=t.replayFilter;t.replayFilter=n?function(){return De(n(),e())}:e,t.justLimit=r&&!n}function Ao(t,e){t.isMatch=De(t.isMatch,e)}function Pr(t,e){if(t.isPrimKey)return e.primaryKey;var r=e.getIndexByKeyPath(t.index);if(!r)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return r}function Ti(t,e,r){var n=Pr(t,e.schema);return e.openCursor({trans:r,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:n,range:t.range}})}function _r(t,e,r,n){var i=t.replayFilter?De(t.filter,t.replayFilter()):t.filter;if(t.or){var a={},s=function(c,p,d){if(!i||i(p,d,function(x){return p.stop(x)},function(x){return p.fail(x)})){var h=p.primaryKey,g=""+h;g==="[object ArrayBuffer]"&&(g=""+new Uint8Array(h)),W(a,g)||(a[g]=!0,e(c,p,d))}};return Promise.all([t.or._iterate(s,r),Di(Ti(t,n,r),t.algorithm,s,!t.keysOnly&&t.valueMapper)])}else return Di(Ti(t,n,r),De(t.algorithm,i),e,!t.keysOnly&&t.valueMapper)}function Di(t,e,r,n){var i=n?function(s,c,p){return r(n(s),c,p)}:r,a=at(i);return t.then(function(s){if(s)return s.start(function(){var c=function(){return s.continue()};(!e||e(s,function(p){return c=p},function(p){s.stop(p),c=rt},function(p){s.fail(p),c=rt}))&&a(s.value,s,function(p){return c=p}),c()})})}var To=(function(){function t(){}return t.prototype._read=function(e,r){var n=this._ctx;return n.error?n.table._trans(null,ct.bind(null,n.error)):n.table._trans("readonly",e).then(r)},t.prototype._write=function(e){var r=this._ctx;return r.error?r.table._trans(null,ct.bind(null,r.error)):r.table._trans("readwrite",e,"locked")},t.prototype._addAlgorithm=function(e){var r=this._ctx;r.algorithm=De(r.algorithm,e)},t.prototype._iterate=function(e,r){return _r(this._ctx,e,r,this._ctx.table.core)},t.prototype.clone=function(e){var r=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&K(n,e),r._ctx=n,r},t.prototype.raw=function(){return this._ctx.valueMapper=null,this},t.prototype.each=function(e){var r=this._ctx;return this._read(function(n){return _r(r,e,n,r.table.core)})},t.prototype.count=function(e){var r=this;return this._read(function(n){var i=r._ctx,a=i.table.core;if(Le(i,!0))return a.count({trans:n,query:{index:Pr(i,a.schema),range:i.range}}).then(function(c){return Math.min(c,i.limit)});var s=0;return _r(i,function(){return++s,!1},n,a).then(function(){return s})}).then(e)},t.prototype.sortBy=function(e,r){var n=e.split(".").reverse(),i=n[0],a=n.length-1;function s(d,h){return h?s(d[n[h]],h-1):d[i]}var c=this._ctx.dir==="next"?1:-1;function p(d,h){var g=s(d,a),x=s(h,a);return J(g,x)*c}return this.toArray(function(d){return d.slice().sort(p)}).then(r)},t.prototype.toArray=function(e){var r=this;return this._read(function(n){var i=r._ctx;if(Le(i,!0)&&i.limit>0){var a=i.valueMapper,s=Pr(i,i.table.core.schema);return i.table.core.query({trans:n,limit:i.limit,values:!0,direction:i.dir==="prev"?"prev":void 0,query:{index:s,range:i.range}}).then(function(p){var d=p.result;return a?d.map(a):d})}else{var c=[];return _r(i,function(p){return c.push(p)},n,i.table.core).then(function(){return c})}},e)},t.prototype.offset=function(e){var r=this._ctx;return e<=0?this:(r.offset+=e,Le(r)?yn(r,function(){var n=e;return function(i,a){return n===0?!0:n===1?(--n,!1):(a(function(){i.advance(n),n=0}),!1)}}):yn(r,function(){var n=e;return function(){return--n<0}}),this)},t.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),yn(this._ctx,function(){var r=e;return function(n,i,a){return--r<=0&&i(a),r>=0}},!0),this},t.prototype.until=function(e,r){return vn(this._ctx,function(n,i,a){return e(n.value)?(i(a),r):!0}),this},t.prototype.first=function(e){return this.limit(1).toArray(function(r){return r[0]}).then(e)},t.prototype.last=function(e){return this.reverse().first(e)},t.prototype.filter=function(e){return vn(this._ctx,function(r){return e(r.value)}),Ao(this._ctx,e),this},t.prototype.and=function(e){return this.filter(e)},t.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},t.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},t.prototype.desc=function(){return this.reverse()},t.prototype.eachKey=function(e){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(n,i){e(i.key,i)})},t.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},t.prototype.eachPrimaryKey=function(e){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(n,i){e(i.primaryKey,i)})},t.prototype.keys=function(e){var r=this._ctx;r.keysOnly=!r.isMatch;var n=[];return this.each(function(i,a){n.push(a.key)}).then(function(){return n}).then(e)},t.prototype.primaryKeys=function(e){var r=this._ctx;if(Le(r,!0)&&r.limit>0)return this._read(function(i){var a=Pr(r,r.table.core.schema);return r.table.core.query({trans:i,values:!1,limit:r.limit,direction:r.dir==="prev"?"prev":void 0,query:{index:a,range:r.range}})}).then(function(i){var a=i.result;return a}).then(e);r.keysOnly=!r.isMatch;var n=[];return this.each(function(i,a){n.push(a.primaryKey)}).then(function(){return n}).then(e)},t.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},t.prototype.firstKey=function(e){return this.limit(1).keys(function(r){return r[0]}).then(e)},t.prototype.lastKey=function(e){return this.reverse().firstKey(e)},t.prototype.distinct=function(){var e=this._ctx,r=e.index&&e.table.schema.idxByName[e.index];if(!r||!r.multi)return this;var n={};return vn(this._ctx,function(i){var a=i.primaryKey.toString(),s=W(n,a);return n[a]=!0,!s}),this},t.prototype.modify=function(e){var r=this,n=this._ctx;return this._write(function(i){var a;typeof e=="function"?a=e:a=function(w){return Ei(w,e)};var s=n.table.core,c=s.schema.primaryKey,p=c.outbound,d=c.extractKey,h=200,g=r.db._options.modifyChunkSize;g&&(typeof g=="object"?h=g[s.name]||g["*"]||200:h=g);var x=[],P=0,m=[],v=function(w,T){var A=T.failures,k=T.numFailures;P+=w-k;for(var _=0,z=b(A);_<z.length;_++){var O=z[_];x.push(A[O])}},S=e===Ri;return r.clone().primaryKeys().then(function(w){var T=Le(n)&&n.limit===1/0&&(typeof e!="function"||S)&&{index:n.index,range:n.range},A=function(k){var _=Math.min(h,w.length-k),z=w.slice(k,k+_);return(S?Promise.resolve([]):s.getMany({trans:i,keys:z,cache:"immutable"})).then(function(O){var M=[],F=[],Q=p?[]:null,V=S?z:[];if(!S)for(var L=0;L<_;++L){var G=O[L],Y={value:vt(G),primKey:w[k+L]};a.call(Y,Y.value,Y)!==!1&&(Y.value==null?V.push(w[k+L]):!p&&J(d(G),d(Y.value))!==0?(V.push(w[k+L]),M.push(Y.value)):(F.push(Y.value),p&&Q.push(w[k+L])))}return Promise.resolve(M.length>0&&s.mutate({trans:i,type:"add",values:M}).then(function(nt){for(var $ in nt.failures)V.splice(parseInt($),1);v(M.length,nt)})).then(function(){return(F.length>0||T&&typeof e=="object")&&s.mutate({trans:i,type:"put",keys:Q,values:F,criteria:T,changeSpec:typeof e!="function"&&e,isAdditionalChunk:k>0}).then(function(nt){return v(F.length,nt)})}).then(function(){return(V.length>0||T&&S)&&s.mutate({trans:i,type:"delete",keys:V,criteria:T,isAdditionalChunk:k>0}).then(function(nt){return kr(n.table,V,nt)}).then(function(nt){return v(V.length,nt)})}).then(function(){return w.length>k+_&&A(k+h)})})};return A(0).then(function(){if(x.length>0)throw new R("Error modifying one or more objects",x,P,m);return w.length})})})},t.prototype.delete=function(){var e=this._ctx,r=e.range;return Le(e)&&!e.table.schema.yProps&&(e.isPrimKey||r.type===3)?this._write(function(n){var i=e.table.core.schema.primaryKey,a=r;return e.table.core.count({trans:n,query:{index:i,range:a}}).then(function(s){return e.table.core.mutate({trans:n,type:"deleteRange",range:a}).then(function(c){var p=c.failures,d=c.numFailures;if(d)throw new R("Could not delete some values",Object.keys(p).map(function(h){return p[h]}),s-d);return s-d})})}):this.modify(Ri)},t})(),Ri=function(t,e){return e.value=null};function Do(t){return er(To.prototype,function(r,n){this.db=t;var i=Si,a=null;if(n)try{i=n()}catch(d){a=d}var s=r._ctx,c=s.table,p=c.hook.reading.fire;this._ctx={table:c,index:s.index,isPrimKey:!s.index||c.schema.primKey.keyPath&&s.index===c.schema.primKey.name,range:i,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:a,or:s.or,valueMapper:p!==Ze?p:null}})}function Ro(t,e){return t<e?-1:t===e?0:1}function Io(t,e){return t>e?-1:t===e?0:1}function Ut(t,e,r){var n=t instanceof Ci?new t.Collection(t):t;return n._ctx.error=r?new r(e):new TypeError(e),n}function Ue(t){return new t.Collection(t,function(){return Ii("")}).limit(0)}function Co(t){return t==="next"?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()}}function Oo(t){return t==="next"?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()}}function Mo(t,e,r,n,i,a){for(var s=Math.min(t.length,n.length),c=-1,p=0;p<s;++p){var d=e[p];if(d!==n[p])return i(t[p],r[p])<0?t.substr(0,p)+r[p]+r.substr(p+1):i(t[p],n[p])<0?t.substr(0,p)+n[p]+r.substr(p+1):c>=0?t.substr(0,c)+e[c]+r.substr(c+1):null;i(t[p],d)<0&&(c=p)}return s<n.length&&a==="next"?t+r.substr(t.length):s<t.length&&a==="prev"?t.substr(0,r.length):c<0?null:t.substr(0,c)+n[c]+r.substr(c+1)}function Er(t,e,r,n){var i,a,s,c,p,d,h,g=r.length;if(!r.every(function(v){return typeof v=="string"}))return Ut(t,xi);function x(v){i=Co(v),a=Oo(v),s=v==="next"?Ro:Io;var S=r.map(function(w){return{lower:a(w),upper:i(w)}}).sort(function(w,T){return s(w.lower,T.lower)});c=S.map(function(w){return w.upper}),p=S.map(function(w){return w.lower}),d=v,h=v==="next"?"":n}x("next");var P=new t.Collection(t,function(){return ye(c[0],p[g-1]+n)});P._ondirectionchange=function(v){x(v)};var m=0;return P._addAlgorithm(function(v,S,w){var T=v.key;if(typeof T!="string")return!1;var A=a(T);if(e(A,p,m))return!0;for(var k=null,_=m;_<g;++_){var z=Mo(T,A,c[_],p[_],s,d);z===null&&k===null?m=_+1:(k===null||s(k,z)>0)&&(k=z)}return S(k!==null?function(){v.continue(k+h)}:w),!1}),P}function ye(t,e,r,n){return{type:2,lower:t,upper:e,lowerOpen:r,upperOpen:n}}function Ii(t){return{type:1,lower:t,upper:t}}var Ci=(function(){function t(){}return Object.defineProperty(t.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),t.prototype.between=function(e,r,n,i){n=n!==!1,i=i===!0;try{return this._cmp(e,r)>0||this._cmp(e,r)===0&&(n||i)&&!(n&&i)?Ue(this):new this.Collection(this,function(){return ye(e,r,!n,!i)})}catch{return Ut(this,de)}},t.prototype.equals=function(e){return e==null?Ut(this,de):new this.Collection(this,function(){return Ii(e)})},t.prototype.above=function(e){return e==null?Ut(this,de):new this.Collection(this,function(){return ye(e,void 0,!0)})},t.prototype.aboveOrEqual=function(e){return e==null?Ut(this,de):new this.Collection(this,function(){return ye(e,void 0,!1)})},t.prototype.below=function(e){return e==null?Ut(this,de):new this.Collection(this,function(){return ye(void 0,e,!1,!0)})},t.prototype.belowOrEqual=function(e){return e==null?Ut(this,de):new this.Collection(this,function(){return ye(void 0,e)})},t.prototype.startsWith=function(e){return typeof e!="string"?Ut(this,xi):this.between(e,e+Te,!0,!0)},t.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Er(this,function(r,n){return r.indexOf(n[0])===0},[e],Te)},t.prototype.equalsIgnoreCase=function(e){return Er(this,function(r,n){return r===n[0]},[e],"")},t.prototype.anyOfIgnoreCase=function(){var e=Pt.apply(bt,arguments);return e.length===0?Ue(this):Er(this,function(r,n){return n.indexOf(r)!==-1},e,"")},t.prototype.startsWithAnyOfIgnoreCase=function(){var e=Pt.apply(bt,arguments);return e.length===0?Ue(this):Er(this,function(r,n){return n.some(function(i){return r.indexOf(i)===0})},e,Te)},t.prototype.anyOf=function(){var e=this,r=Pt.apply(bt,arguments),n=this._cmp;try{r.sort(n)}catch{return Ut(this,de)}if(r.length===0)return Ue(this);var i=new this.Collection(this,function(){return ye(r[0],r[r.length-1])});i._ondirectionchange=function(s){n=s==="next"?e._ascending:e._descending,r.sort(n)};var a=0;return i._addAlgorithm(function(s,c,p){for(var d=s.key;n(d,r[a])>0;)if(++a,a===r.length)return c(p),!1;return n(d,r[a])===0?!0:(c(function(){s.continue(r[a])}),!1)}),i},t.prototype.notEqual=function(e){return this.inAnyRange([[mn,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},t.prototype.noneOf=function(){var e=Pt.apply(bt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Ut(this,de)}var r=e.reduce(function(n,i){return n?n.concat([[n[n.length-1][1],i]]):[[mn,i]]},null);return r.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})},t.prototype.inAnyRange=function(e,r){var n=this,i=this._cmp,a=this._ascending,s=this._descending,c=this._min,p=this._max;if(e.length===0)return Ue(this);if(!e.every(function(_){return _[0]!==void 0&&_[1]!==void 0&&a(_[0],_[1])<=0}))return Ut(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);var d=!r||r.includeLowers!==!1,h=r&&r.includeUppers===!0;function g(_,z){for(var O=0,M=_.length;O<M;++O){var F=_[O];if(i(z[0],F[1])<0&&i(z[1],F[0])>0){F[0]=c(F[0],z[0]),F[1]=p(F[1],z[1]);break}}return O===M&&_.push(z),_}var x=a;function P(_,z){return x(_[0],z[0])}var m;try{m=e.reduce(g,[]),m.sort(P)}catch{return Ut(this,de)}var v=0,S=h?function(_){return a(_,m[v][1])>0}:function(_){return a(_,m[v][1])>=0},w=d?function(_){return s(_,m[v][0])>0}:function(_){return s(_,m[v][0])>=0};function T(_){return!S(_)&&!w(_)}var A=S,k=new this.Collection(this,function(){return ye(m[0][0],m[m.length-1][1],!d,!h)});return k._ondirectionchange=function(_){_==="next"?(A=S,x=a):(A=w,x=s),m.sort(P)},k._addAlgorithm(function(_,z,O){for(var M=_.key;A(M);)if(++v,v===m.length)return z(O),!1;return T(M)?!0:(n._cmp(M,m[v][1])===0||n._cmp(M,m[v][0])===0||z(function(){x===a?_.continue(m[v][0]):_.continue(m[v][1])}),!1)}),k},t.prototype.startsWithAnyOf=function(){var e=Pt.apply(bt,arguments);return e.every(function(r){return typeof r=="string"})?e.length===0?Ue(this):this.inAnyRange(e.map(function(r){return[r,r+Te]})):Ut(this,"startsWithAnyOf() only works with strings")},t})();function No(t){return er(Ci.prototype,function(r,n,i){if(this.db=t,this._ctx={table:r,index:n===":id"?null:n,or:i},this._cmp=this._ascending=J,this._descending=function(a,s){return J(s,a)},this._max=function(a,s){return J(a,s)>0?a:s},this._min=function(a,s){return J(a,s)<0?a:s},this._IDBKeyRange=t._deps.IDBKeyRange,!this._IDBKeyRange)throw new C.MissingAPI})}function te(t){return at(function(e){return rr(e),t(e.target.error),!1})}function rr(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var Ar="storagemutated",bn="x-storagemutated-1",be=tr(null,Ar),zo=(function(){function t(){}return t.prototype._lock=function(){return It(!H.global),++this._reculock,this._reculock===1&&!H.global&&(H.lockOwnerFor=this),this},t.prototype._unlock=function(){if(It(!H.global),--this._reculock===0)for(H.global||(H.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{Ae(e[1],e[0])}catch{}}return this},t.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},t.prototype.create=function(e){var r=this;if(!this.mode)return this;var n=this.db.idbdb,i=this.db._state.dbOpenError;if(It(!this.idbtrans),!e&&!n)switch(i&&i.name){case"DatabaseClosedError":throw new C.DatabaseClosed(i);case"MissingAPIError":throw new C.MissingAPI(i.message,i);default:throw new C.OpenFailed(i)}if(!this.active)throw new C.TransactionInactive;return It(this._completion._state===null),e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),e.onerror=at(function(a){rr(a),r._reject(e.error)}),e.onabort=at(function(a){rr(a),r.active&&r._reject(new C.Abort(e.error)),r.active=!1,r.on("abort").fire(a)}),e.oncomplete=at(function(){r.active=!1,r._resolve(),"mutatedParts"in e&&be.storagemutated.fire(e.mutatedParts)}),this},t.prototype._promise=function(e,r,n){var i=this;if(e==="readwrite"&&this.mode!=="readwrite")return ct(new C.ReadOnly("Transaction is readonly"));if(!this.active)return ct(new C.TransactionInactive);if(this._locked())return new N(function(s,c){i._blockedFuncs.push([function(){i._promise(e,r,n).then(s,c)},H])});if(n)return he(function(){var s=new N(function(c,p){i._lock();var d=r(c,p,i);d&&d.then&&d.then(c,p)});return s.finally(function(){return i._unlock()}),s._lib=!0,s});var a=new N(function(s,c){var p=r(s,c,i);p&&p.then&&p.then(s,c)});return a._lib=!0,a},t.prototype._root=function(){return this.parent?this.parent._root():this},t.prototype.waitFor=function(e){var r=this._root(),n=N.resolve(e);if(r._waitingFor)r._waitingFor=r._waitingFor.then(function(){return n});else{r._waitingFor=n,r._waitingQueue=[];var i=r.idbtrans.objectStore(r.storeNames[0]);(function s(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(i.get(-1/0).onsuccess=s)})()}var a=r._waitingFor;return new N(function(s,c){n.then(function(p){return r._waitingQueue.push(at(s.bind(null,p)))},function(p){return r._waitingQueue.push(at(c.bind(null,p)))}).finally(function(){r._waitingFor===a&&(r._waitingFor=null)})})},t.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))},t.prototype.table=function(e){var r=this._memoizedTables||(this._memoizedTables={});if(W(r,e))return r[e];var n=this.schema[e];if(!n)throw new C.NotFound("Table "+e+" not part of transaction");var i=new this.db.Table(e,n,this);return i.core=this.db.core.table(e),r[e]=i,i},t})();function Ko(t){return er(zo.prototype,function(r,n,i,a,s){var c=this;r!=="readonly"&&n.forEach(function(p){var d,h=(d=i[p])===null||d===void 0?void 0:d.yProps;h&&(n=n.concat(h.map(function(g){return g.updatesTable})))}),this.db=t,this.mode=r,this.storeNames=n,this.schema=i,this.chromeTransactionDurability=a,this.idbtrans=null,this.on=tr(this,"complete","error","abort"),this.parent=s||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new N(function(p,d){c._resolve=p,c._reject=d}),this._completion.then(function(){c.active=!1,c.on.complete.fire()},function(p){var d=c.active;return c.active=!1,c.on.error.fire(p),c.parent?c.parent._reject(p):d&&c.idbtrans&&c.idbtrans.abort(),ct(p)})})}function xn(t,e,r,n,i,a,s,c){return{name:t,keyPath:e,unique:r,multi:n,auto:i,compound:a,src:(r&&!s?"&":"")+(n?"*":"")+(i?"++":"")+Oi(e),type:c}}function Oi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function wn(t,e,r){return{name:t,primKey:e,indexes:r,mappedClass:null,idxByName:le(r,function(n){return[n.name,n]})}}function Bo(t){return t.length===1?t[0]:t}var nr=function(t){try{return t.only([[]]),nr=function(){return[[]]},[[]]}catch{return nr=function(){return Te},Te}};function Sn(t){return t==null?function(){}:typeof t=="string"?Fo(t):function(e){return lt(e,t)}}function Fo(t){var e=t.split(".");return e.length===1?function(r){return r[t]}:function(r){return lt(r,t)}}function Mi(t){return[].slice.call(t)}var Lo=0;function ir(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Uo(t,e,r){function n(x,P){var m=Mi(x.objectStoreNames),v=m.length>0?P.objectStore(m[0]):{};return{schema:{name:x.name,tables:m.map(function(S){return P.objectStore(S)}).map(function(S){var w=S.keyPath,T=S.autoIncrement,A=E(w),k=w==null,_={},z={name:S.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:k,compound:A,keyPath:w,autoIncrement:T,unique:!0,extractKey:Sn(w)},indexes:Mi(S.indexNames).map(function(O){return S.index(O)}).map(function(O){var M=O.name,F=O.unique,Q=O.multiEntry,V=O.keyPath,L=E(V),G={name:M,compound:L,keyPath:V,unique:F,multiEntry:Q,extractKey:Sn(V)};return _[ir(V)]=G,G}),getIndexByKeyPath:function(O){return _[ir(O)]}};return _[":id"]=z.primaryKey,w!=null&&(_[ir(w)]=z.primaryKey),z})},hasGetAll:m.length>0&&"getAll"in v&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in v}}function i(x){if(x.type===3)return null;if(x.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var P=x.lower,m=x.upper,v=x.lowerOpen,S=x.upperOpen,w=P===void 0?m===void 0?null:e.upperBound(m,!!S):m===void 0?e.lowerBound(P,!!v):e.bound(P,m,!!v,!!S);return w}function a(x){var P=x.name;function m(w){var T=w.trans,A=w.type,k=w.keys,_=w.values,z=w.range;return new Promise(function(O,M){O=at(O);var F=T.objectStore(P),Q=F.keyPath==null,V=A==="put"||A==="add";if(!V&&A!=="delete"&&A!=="deleteRange")throw new Error("Invalid operation type: "+A);var L=(k||_||{length:1}).length;if(k&&_&&k.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(L===0)return O({numFailures:0,failures:{},results:[],lastResult:void 0});var G,Y=[],nt=[],$=0,mt=function(At){++$,rr(At)};if(A==="deleteRange"){if(z.type===4)return O({numFailures:$,failures:nt,results:[],lastResult:void 0});z.type===3?Y.push(G=F.clear()):Y.push(G=F.delete(i(z)))}else{var Zt=V?Q?[_,k]:[_,null]:[k,null],Ot=Zt[0],Ce=Zt[1];if(V)for(var Dt=0;Dt<L;++Dt)Y.push(G=Ce&&Ce[Dt]!==void 0?F[A](Ot[Dt],Ce[Dt]):F[A](Ot[Dt])),G.onerror=mt;else for(var Dt=0;Dt<L;++Dt)Y.push(G=F[A](Ot[Dt])),G.onerror=mt}var Xt=function(At){var Oe=At.target.result;Y.forEach(function(ee,Fr){return ee.error!=null&&(nt[Fr]=ee.error)}),O({numFailures:$,failures:nt,results:A==="delete"?k:Y.map(function(ee){return ee.result}),lastResult:Oe})};G.onerror=function(At){mt(At),Xt(At)},G.onsuccess=Xt})}function v(w){var T=w.trans,A=w.values,k=w.query,_=w.reverse,z=w.unique;return new Promise(function(O,M){O=at(O);var F=k.index,Q=k.range,V=T.objectStore(P),L=F.isPrimaryKey?V:V.index(F.name),G=_?z?"prevunique":"prev":z?"nextunique":"next",Y=A||!("openKeyCursor"in L)?L.openCursor(i(Q),G):L.openKeyCursor(i(Q),G);Y.onerror=te(M),Y.onsuccess=at(function(nt){var $=Y.result;if(!$){O(null);return}$.___id=++Lo,$.done=!1;var mt=$.continue.bind($),Zt=$.continuePrimaryKey;Zt&&(Zt=Zt.bind($));var Ot=$.advance.bind($),Ce=function(){throw new Error("Cursor not started")},Dt=function(){throw new Error("Cursor not stopped")};$.trans=T,$.stop=$.continue=$.continuePrimaryKey=$.advance=Ce,$.fail=at(M),$.next=function(){var Xt=this,At=1;return this.start(function(){return At--?Xt.continue():Xt.stop()}).then(function(){return Xt})},$.start=function(Xt){var At=new Promise(function(ee,Fr){ee=at(ee),Y.onerror=te(Fr),$.fail=Fr,$.stop=function(Ds){$.stop=$.continue=$.continuePrimaryKey=$.advance=Dt,ee(Ds)}}),Oe=function(){if(Y.result)try{Xt()}catch(ee){$.fail(ee)}else $.done=!0,$.start=function(){throw new Error("Cursor behind last entry")},$.stop()};return Y.onsuccess=at(function(ee){Y.onsuccess=Oe,Oe()}),$.continue=mt,$.continuePrimaryKey=Zt,$.advance=Ot,Oe(),At},O($)},M)})}function S(w,T){return function(A){return new Promise(function(k,_){var z;k=at(k);var O=A.trans,M=A.values,F=A.limit,Q=A.query,V=(z=A.direction)!==null&&z!==void 0?z:"next",L=F===1/0?void 0:F,G=Q.index,Y=Q.range,nt=O.objectStore(P),$=G.isPrimaryKey?nt:nt.index(G.name),mt=i(Y);if(F===0)return k({result:[]});if(T){var Zt={query:mt,count:L,direction:V},Ot=M?$.getAll(Zt):$.getAllKeys(Zt);Ot.onsuccess=function(At){return k({result:At.target.result})},Ot.onerror=te(_)}else if(w&&V==="next"){var Ot=M?$.getAll(mt,L):$.getAllKeys(mt,L);Ot.onsuccess=function(Oe){return k({result:Oe.target.result})},Ot.onerror=te(_)}else{var Ce=0,Dt=M||!("openKeyCursor"in $)?$.openCursor(mt,V):$.openKeyCursor(mt,V),Xt=[];Dt.onsuccess=function(){var At=Dt.result;if(!At)return k({result:Xt});if(Xt.push(M?At.value:At.primaryKey),++Ce===F)return k({result:Xt});At.continue()},Dt.onerror=te(_)}})}}return{name:P,schema:x,mutate:m,getMany:function(w){var T=w.trans,A=w.keys;return new Promise(function(k,_){k=at(k);for(var z=T.objectStore(P),O=A.length,M=new Array(O),F=0,Q=0,V,L=function($){var mt=$.target;(M[mt._pos]=mt.result)!=null,++Q===F&&k(M)},G=te(_),Y=0;Y<O;++Y){var nt=A[Y];nt!=null&&(V=z.get(A[Y]),V._pos=Y,V.onsuccess=L,V.onerror=G,++F)}F===0&&k(M)})},get:function(w){var T=w.trans,A=w.key;return new Promise(function(k,_){k=at(k);var z=T.objectStore(P),O=z.get(A);O.onsuccess=function(M){return k(M.target.result)},O.onerror=te(_)})},query:S(p,d),openCursor:v,count:function(w){var T=w.query,A=w.trans,k=T.index,_=T.range;return new Promise(function(z,O){var M=A.objectStore(P),F=k.isPrimaryKey?M:M.index(k.name),Q=i(_),V=Q?F.count(Q):F.count();V.onsuccess=at(function(L){return z(L.target.result)}),V.onerror=te(O)})}}}var s=n(t,r),c=s.schema,p=s.hasGetAll,d=s.hasIdb3Features,h=c.tables.map(function(x){return a(x)}),g={};return h.forEach(function(x){return g[x.name]=x}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(x){var P=g[x];if(!P)throw new Error("Table '".concat(x,"' not found"));return g[x]},MIN_KEY:-1/0,MAX_KEY:nr(e),schema:c}}function Ho(t,e){return e.reduce(function(r,n){var i=n.create;return u(u({},r),i(r))},t)}function jo(t,e,r,n){var i=r.IDBKeyRange;r.indexedDB;var a=Ho(Uo(e,i,n),t.dbcore);return{dbcore:a}}function Tr(t,e){var r=e.db,n=jo(t._middlewares,r,t._deps,e);t.core=n.dbcore,t.tables.forEach(function(i){var a=i.name;t.core.schema.tables.some(function(s){return s.name===a})&&(i.core=t.core.table(a),t[a]instanceof t.Table&&(t[a].core=i.core))})}function Dr(t,e,r,n){r.forEach(function(i){var a=n[i];e.forEach(function(s){var c=zt(s,i);(!c||"value"in c&&c.value===void 0)&&(s===t.Transaction.prototype||s instanceof t.Transaction?ut(s,i,{get:function(){return this.table(i)},set:function(p){ot(this,i,{value:p,writable:!0,configurable:!0,enumerable:!0})}}):s[i]=new t.Table(i,a))})})}function kn(t,e){e.forEach(function(r){for(var n in r)r[n]instanceof t.Table&&delete r[n]})}function Vo(t,e){return t._cfg.version-e._cfg.version}function $o(t,e,r,n){var i=t._dbSchema;r.objectStoreNames.contains("$meta")&&!i.$meta&&(i.$meta=wn("$meta",zi("")[0],[]),t._storeNames.push("$meta"));var a=t._createTransaction("readwrite",t._storeNames,i);a.create(r),a._completion.catch(n);var s=a._reject.bind(a),c=H.transless||H;he(function(){if(H.trans=a,H.transless=c,e===0)b(i).forEach(function(p){_n(r,p,i[p].primKey,i[p].indexes)}),Tr(t,r),N.follow(function(){return t.on.populate.fire(a)}).catch(s);else return Tr(t,r),Yo(t,a,e).then(function(p){return Wo(t,p,a,r)}).catch(s)})}function Go(t,e){Ni(t._dbSchema,e),e.db.version%10===0&&!e.objectStoreNames.contains("$meta")&&e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var r=Ir(t,t.idbdb,e);Cr(t,t._dbSchema,e);for(var n=Pn(r,t._dbSchema),i=function(d){if(d.change.length||d.recreate)return console.warn("Unable to patch indexes of table ".concat(d.name," because it has changes on the type of index or primary key.")),{value:void 0};var h=e.objectStore(d.name);d.add.forEach(function(g){ae&&console.debug("Dexie upgrade patch: Creating missing index ".concat(d.name,".").concat(g.src)),Rr(h,g)})},a=0,s=n.change;a<s.length;a++){var c=s[a],p=i(c);if(typeof p=="object")return p.value}}function Yo(t,e,r){return e.storeNames.includes("$meta")?e.table("$meta").get("version").then(function(n){return n??r}):N.resolve(r)}function Wo(t,e,r,n){var i=[],a=t._versions,s=t._dbSchema=Ir(t,t.idbdb,n),c=a.filter(function(d){return d._cfg.version>=e});if(c.length===0)return N.resolve();c.forEach(function(d){i.push(function(){var h=s,g=d._cfg.dbschema;Cr(t,h,n),Cr(t,g,n),s=t._dbSchema=g;var x=Pn(h,g);x.add.forEach(function(T){_n(n,T[0],T[1].primKey,T[1].indexes)}),x.change.forEach(function(T){if(T.recreate)throw new C.Upgrade("Not yet support for changing primary key");var A=n.objectStore(T.name);T.add.forEach(function(k){return Rr(A,k)}),T.change.forEach(function(k){A.deleteIndex(k.name),Rr(A,k)}),T.del.forEach(function(k){return A.deleteIndex(k)})});var P=d._cfg.contentUpgrade;if(P&&d._cfg.version>e){Tr(t,n),r._memoizedTables={};var m=Lt(g);x.del.forEach(function(T){m[T]=h[T]}),kn(t,[t.Transaction.prototype]),Dr(t,[t.Transaction.prototype],b(m),m),r.schema=m;var v=ce(P);v&&Fe();var S,w=N.follow(function(){if(S=P(r),S&&v){var T=ge.bind(null,null);S.then(T,T)}});return S&&typeof S.then=="function"?N.resolve(S):w.then(function(){return S})}}),i.push(function(h){var g=d._cfg.dbschema;Zo(g,h),kn(t,[t.Transaction.prototype]),Dr(t,[t.Transaction.prototype],t._storeNames,t._dbSchema),r.schema=t._dbSchema}),i.push(function(h){t.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(t.idbdb.version/10)===d._cfg.version?(t.idbdb.deleteObjectStore("$meta"),delete t._dbSchema.$meta,t._storeNames=t._storeNames.filter(function(g){return g!=="$meta"})):h.objectStore("$meta").put(d._cfg.version,"version"))})});function p(){return i.length?N.resolve(i.shift()(r.idbtrans)).then(p):N.resolve()}return p().then(function(){Ni(s,n)})}function Pn(t,e){var r={del:[],add:[],change:[]},n;for(n in t)e[n]||r.del.push(n);for(n in e){var i=t[n],a=e[n];if(!i)r.add.push([n,a]);else{var s={name:n,def:a,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(a.primKey.keyPath||"")||i.primKey.auto!==a.primKey.auto)s.recreate=!0,r.change.push(s);else{var c=i.idxByName,p=a.idxByName,d=void 0;for(d in c)p[d]||s.del.push(d);for(d in p){var h=c[d],g=p[d];h?h.src!==g.src&&s.change.push(g):s.add.push(g)}(s.del.length>0||s.add.length>0||s.change.length>0)&&r.change.push(s)}}}return r}function _n(t,e,r,n){var i=t.db.createObjectStore(e,r.keyPath?{keyPath:r.keyPath,autoIncrement:r.auto}:{autoIncrement:r.auto});return n.forEach(function(a){return Rr(i,a)}),i}function Ni(t,e){b(t).forEach(function(r){e.db.objectStoreNames.contains(r)||(ae&&console.debug("Dexie: Creating missing table",r),_n(e,r,t[r].primKey,t[r].indexes))})}function Zo(t,e){[].slice.call(e.db.objectStoreNames).forEach(function(r){return t[r]==null&&e.db.deleteObjectStore(r)})}function Rr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Ir(t,e,r){var n={},i=Rt(e.objectStoreNames,0);return i.forEach(function(a){for(var s=r.objectStore(a),c=s.keyPath,p=xn(Oi(c),c||"",!0,!1,!!s.autoIncrement,c&&typeof c!="string",!0),d=[],h=0;h<s.indexNames.length;++h){var g=s.index(s.indexNames[h]);c=g.keyPath;var x=xn(g.name,c,!!g.unique,!!g.multiEntry,!1,c&&typeof c!="string",!1);d.push(x)}n[a]=wn(a,p,d)}),n}function Xo(t,e,r){t.verno=e.version/10;var n=t._dbSchema=Ir(t,e,r);t._storeNames=Rt(e.objectStoreNames,0),Dr(t,[t._allTables],b(n),n)}function Qo(t,e){var r=Ir(t,t.idbdb,e),n=Pn(r,t._dbSchema);return!(n.add.length||n.change.some(function(i){return i.add.length||i.change.length}))}function Cr(t,e,r){for(var n=r.db.objectStoreNames,i=0;i<n.length;++i){var a=n[i],s=r.objectStore(a);t._hasGetAll="getAll"in s;for(var c=0;c<s.indexNames.length;++c){var p=s.indexNames[c],d=s.index(p).keyPath,h=typeof d=="string"?d:"["+Rt(d).join("+")+"]";if(e[a]){var g=e[a].idxByName[h];g&&(g.name=p,delete e[a].idxByName[h],e[a].idxByName[p]=g)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&y.WorkerGlobalScope&&y instanceof y.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function zi(t){return t.split(",").map(function(e,r){var n,i=e.split(":"),a=(n=i[1])===null||n===void 0?void 0:n.trim();e=i[0].trim();var s=e.replace(/([&*]|\+\+)/g,""),c=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return xn(s,c||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),E(c),r===0,a)})}var Jo=(function(){function t(){}return t.prototype._createTableSchema=function(e,r,n){return wn(e,r,n)},t.prototype._parseIndexSyntax=function(e){return zi(e)},t.prototype._parseStoresSpec=function(e,r){var n=this;b(e).forEach(function(i){if(e[i]!==null){var a=n._parseIndexSyntax(e[i]),s=a.shift();if(!s)throw new C.Schema("Invalid schema for table "+i+": "+e[i]);if(s.unique=!0,s.multi)throw new C.Schema("Primary key cannot be multiEntry*");a.forEach(function(p){if(p.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")});var c=n._createTableSchema(i,s,a);r[i]=c}})},t.prototype.stores=function(e){var r=this.db;this._cfg.storesSource=this._cfg.storesSource?K(this._cfg.storesSource,e):e;var n=r._versions,i={},a={};return n.forEach(function(s){K(i,s._cfg.storesSource),a=s._cfg.dbschema={},s._parseStoresSpec(i,a)}),r._dbSchema=a,kn(r,[r._allTables,r,r.Transaction.prototype]),Dr(r,[r._allTables,r,r.Transaction.prototype,this._cfg.tables],b(a),a),r._storeNames=b(a),this},t.prototype.upgrade=function(e){return this._cfg.contentUpgrade=rn(this._cfg.contentUpgrade||rt,e),this},t})();function qo(t){return er(Jo.prototype,function(r){this.db=t,this._cfg={version:r,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var ar=ts();function ts(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var t=new Set,e=new FinalizationRegistry(function(s){t.delete(s)}),r=function(){return Array.from(t).map(function(s){return s.deref()}).filter(function(s){return s!==void 0})},n=function(s){var c=new WeakRef(s._novip);if(t.add(c),e.register(s._novip,c,c),t.size>s._options.maxConnections){var p=t.values().next().value;t.delete(p),e.unregister(p)}},i=function(s){if(s)for(var c=t.values(),p=c.next();!p.done;){var d=p.value;if(d.deref()===s._novip){t.delete(d),e.unregister(d);return}p=c.next()}};return{toArray:r,add:n,remove:i}}else{var a=[],r=function(){return a},n=function(d){a.push(d._novip)},i=function(d){if(d){var h=a.indexOf(d._novip);h!==-1&&a.splice(h,1)}};return{toArray:r,add:n,remove:i}}}function En(t,e){var r=t._dbNamesDB;return r||(r=t._dbNamesDB=new fe(wr,{addons:[],indexedDB:t,IDBKeyRange:e}),r.version(1).stores({dbnames:"name"})),r.table("dbnames")}function An(t){return t&&typeof t.databases=="function"}function es(t){var e=t.indexedDB,r=t.IDBKeyRange;return An(e)?Promise.resolve(e.databases()).then(function(n){return n.map(function(i){return i.name}).filter(function(i){return i!==wr})}):En(e,r).toCollection().primaryKeys()}function rs(t,e){var r=t.indexedDB,n=t.IDBKeyRange;!An(r)&&e!==wr&&En(r,n).put({name:e}).catch(rt)}function ns(t,e){var r=t.indexedDB,n=t.IDBKeyRange;!An(r)&&e!==wr&&En(r,n).delete(e).catch(rt)}function Tn(t){return he(function(){return H.letThrough=!0,t()})}function is(){var t=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!t||!indexedDB.databases)return Promise.resolve();var e;return new Promise(function(r){var n=function(){return indexedDB.databases().finally(r)};e=setInterval(n,100),n()}).finally(function(){return clearInterval(e)})}var Dn;function Rn(t){return!("from"in t)}var Tt=function(t,e){if(this)K(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0});else{var r=new Tt;return t&&"d"in t&&K(r,t),r}};tt(Tt.prototype,(Dn={add:function(t){return sr(this,t),this},addKey:function(t){return or(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(r){return or(e,r,r)}),this},hasKey:function(t){var e=Or(this).next(t).value;return e&&J(e.from,t)<=0&&J(e.to,t)>=0}},Dn[yt]=function(){return Or(this)},Dn));function or(t,e,r){var n=J(e,r);if(!isNaN(n)){if(n>0)throw RangeError();if(Rn(t))return K(t,{from:e,to:r,d:1});var i=t.l,a=t.r;if(J(r,t.from)<0)return i?or(i,e,r):t.l={from:e,to:r,d:1,l:null,r:null},Bi(t);if(J(e,t.to)>0)return a?or(a,e,r):t.r={from:e,to:r,d:1,l:null,r:null},Bi(t);J(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),J(r,t.to)>0&&(t.to=r,t.r=null,t.d=t.l?t.l.d+1:1);var s=!t.r;i&&!t.l&&sr(t,i),a&&s&&sr(t,a)}}function sr(t,e){function r(n,i){var a=i.from,s=i.to,c=i.l,p=i.r;or(n,a,s),c&&r(n,c),p&&r(n,p)}Rn(e)||r(t,e)}function Ki(t,e){var r=Or(e),n=r.next();if(n.done)return!1;for(var i=n.value,a=Or(t),s=a.next(i.from),c=s.value;!n.done&&!s.done;){if(J(c.from,i.to)<=0&&J(c.to,i.from)>=0)return!0;J(i.from,c.from)<0?i=(n=r.next(c.from)).value:c=(s=a.next(i.from)).value}return!1}function Or(t){var e=Rn(t)?null:{s:0,n:t};return{next:function(r){for(var n=arguments.length>0;e;)switch(e.s){case 0:if(e.s=1,n)for(;e.n.l&&J(r,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!n||J(r,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Bi(t){var e,r,n=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((r=t.l)===null||r===void 0?void 0:r.d)||0),i=n>1?"r":n<-1?"l":"";if(i){var a=i==="r"?"l":"r",s=u({},t),c=t[i];t.from=c.from,t.to=c.to,t[i]=c[i],s[i]=c[a],t[a]=s,s.d=Fi(s)}t.d=Fi(t)}function Fi(t){var e=t.r,r=t.l;return(e?r?Math.max(e.d,r.d):e.d:r?r.d:0)+1}function Mr(t,e){return b(e).forEach(function(r){t[r]?sr(t[r],e[r]):t[r]=Jt(e[r])}),t}function In(t,e){return t.all||e.all||Object.keys(t).some(function(r){return e[r]&&Ki(e[r],t[r])})}var Re={},Cn={},On=!1;function Nr(t,e){Mr(Cn,t),On||(On=!0,setTimeout(function(){On=!1;var r=Cn;Cn={},Mn(r,!1)},0))}function Mn(t,e){e===void 0&&(e=!1);var r=new Set;if(t.all)for(var n=0,i=Object.values(Re);n<i.length;n++){var a=i[n];Li(a,t,r,e)}else for(var s in t){var c=/^idb\:\/\/(.*)\/(.*)\//.exec(s);if(c){var p=c[1],d=c[2],a=Re["idb://".concat(p,"/").concat(d)];a&&Li(a,t,r,e)}}r.forEach(function(h){return h()})}function Li(t,e,r,n){for(var i=[],a=0,s=Object.entries(t.queries.query);a<s.length;a++){for(var c=s[a],p=c[0],d=c[1],h=[],g=0,x=d;g<x.length;g++){var P=x[g];In(e,P.obsSet)?P.subscribers.forEach(function(w){return r.add(w)}):n&&h.push(P)}n&&i.push([p,h])}if(n)for(var m=0,v=i;m<v.length;m++){var S=v[m],p=S[0],h=S[1];t.queries.query[p]=h}}function as(t){var e=t._state,r=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?ct(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var n=e.openCanceller,i=Math.round(t.verno*10),a=!1;function s(){if(e.openCanceller!==n)throw new C.DatabaseClosed("db.open() was cancelled")}var c=e.dbReadyResolve,p=null,d=!1,h=function(){return new N(function(g,x){if(s(),!r)throw new C.MissingAPI;var P=t.name,m=e.autoSchema||!i?r.open(P):r.open(P,i);if(!m)throw new C.MissingAPI;m.onerror=te(x),m.onblocked=at(t._fireOnBlocked),m.onupgradeneeded=at(function(v){if(p=m.transaction,e.autoSchema&&!t._options.allowEmptyDB){m.onerror=rr,p.abort(),m.result.close();var S=r.deleteDatabase(P);S.onsuccess=S.onerror=at(function(){x(new C.NoSuchDatabase("Database ".concat(P," doesnt exist")))})}else{p.onerror=te(x);var w=v.oldVersion>Math.pow(2,62)?0:v.oldVersion;d=w<1,t.idbdb=m.result,a&&Go(t,p),$o(t,w/10,p,x)}},x),m.onsuccess=at(function(){p=null;var v=t.idbdb=m.result,S=Rt(v.objectStoreNames);if(S.length>0)try{var w=v.transaction(Bo(S),"readonly");if(e.autoSchema)Xo(t,v,w);else if(Cr(t,t._dbSchema,w),!Qo(t,w)&&!a)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),v.close(),i=v.version+1,a=!0,g(h());Tr(t,w)}catch{}ar.add(t),v.onversionchange=at(function(T){e.vcFired=!0,t.on("versionchange").fire(T)}),v.onclose=at(function(){t.close({disableAutoOpen:!1})}),d&&rs(t._deps,P),g()},x)}).catch(function(g){switch(g?.name){case"UnknownError":if(e.PR1398_maxLoop>0)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),h();break;case"VersionError":if(i>0)return i=0,h();break}return N.reject(g)})};return N.race([n,(typeof navigator>"u"?N.resolve():is()).then(h)]).then(function(){return s(),e.onReadyBeingFired=[],N.resolve(Tn(function(){return t.on.ready.fire(t.vip)})).then(function g(){if(e.onReadyBeingFired.length>0){var x=e.onReadyBeingFired.reduce(rn,rt);return e.onReadyBeingFired=[],N.resolve(Tn(function(){return x(t.vip)})).then(g)}})}).finally(function(){e.openCanceller===n&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(g){e.dbOpenError=g;try{p&&p.abort()}catch{}return n===e.openCanceller&&t._close(),ct(g)}).finally(function(){e.openComplete=!0,c()}).then(function(){if(d){var g={};t.tables.forEach(function(x){x.schema.indexes.forEach(function(P){P.name&&(g["idb://".concat(t.name,"/").concat(x.name,"/").concat(P.name)]=new Tt(-1/0,[[[]]]))}),g["idb://".concat(t.name,"/").concat(x.name,"/")]=g["idb://".concat(t.name,"/").concat(x.name,"/:dels")]=new Tt(-1/0,[[[]]])}),be(Ar).fire(g),Mn(g,!0)}return t})}function Nn(t){var e=function(s){return t.next(s)},r=function(s){return t.throw(s)},n=a(e),i=a(r);function a(s){return function(c){var p=s(c),d=p.value;return p.done?d:!d||typeof d.then!="function"?E(d)?Promise.all(d).then(n,i):n(d):d.then(n,i)}}return a(e)()}function os(t,e,r){var n=arguments.length;if(n<2)throw new C.InvalidArgument("Too few arguments");for(var i=new Array(n-1);--n;)i[n-1]=arguments[n];r=i.pop();var a=Kt(i);return[t,a,r]}function Ui(t,e,r,n,i){return N.resolve().then(function(){var a=H.transless||H,s=t._createTransaction(e,r,t._dbSchema,n);s.explicit=!0;var c={trans:s,transless:a};if(n)s.idbtrans=n.idbtrans;else try{s.create(),s.idbtrans._explicit=!0,t._state.PR1398_maxLoop=3}catch(g){return g.name===U.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t.close({disableAutoOpen:!1}),t.open().then(function(){return Ui(t,e,r,null,i)})):ct(g)}var p=ce(i);p&&Fe();var d,h=N.follow(function(){if(d=i.call(s,s),d)if(p){var g=ge.bind(null,null);d.then(g,g)}else typeof d.next=="function"&&typeof d.throw=="function"&&(d=Nn(d))},c);return(d&&typeof d.then=="function"?N.resolve(d).then(function(g){return s.active?g:ct(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):h.then(function(){return d})).then(function(g){return n&&s._resolve(),s._completion.then(function(){return g})}).catch(function(g){return s._reject(g),ct(g)})})}function zr(t,e,r){for(var n=E(t)?t.slice():[t],i=0;i<r;++i)n.push(e);return n}function ss(t){return u(u({},t),{table:function(e){var r=t.table(e),n=r.schema,i={},a=[];function s(v,S,w){var T=ir(v),A=i[T]=i[T]||[],k=v==null?0:typeof v=="string"?1:v.length,_=S>0,z=u(u({},w),{name:_?"".concat(T,"(virtual-from:").concat(w.name,")"):w.name,lowLevelIndex:w,isVirtual:_,keyTail:S,keyLength:k,extractKey:Sn(v),unique:!_&&w.unique});if(A.push(z),z.isPrimaryKey||a.push(z),k>1){var O=k===2?v[0]:v.slice(0,k-1);s(O,S+1,w)}return A.sort(function(M,F){return M.keyTail-F.keyTail}),z}var c=s(n.primaryKey.keyPath,0,n.primaryKey);i[":id"]=[c];for(var p=0,d=n.indexes;p<d.length;p++){var h=d[p];s(h.keyPath,0,h)}function g(v){var S=i[ir(v)];return S&&S[0]}function x(v,S){return{type:v.type===1?2:v.type,lower:zr(v.lower,v.lowerOpen?t.MAX_KEY:t.MIN_KEY,S),lowerOpen:!0,upper:zr(v.upper,v.upperOpen?t.MIN_KEY:t.MAX_KEY,S),upperOpen:!0}}function P(v){var S=v.query.index;return S.isVirtual?u(u({},v),{query:{index:S.lowLevelIndex,range:x(v.query.range,S.keyTail)}}):v}var m=u(u({},r),{schema:u(u({},n),{primaryKey:c,indexes:a,getIndexByKeyPath:g}),count:function(v){return r.count(P(v))},query:function(v){return r.query(P(v))},openCursor:function(v){var S=v.query.index,w=S.keyTail,T=S.isVirtual,A=S.keyLength;if(!T)return r.openCursor(v);function k(_){function z(M){M!=null?_.continue(zr(M,v.reverse?t.MAX_KEY:t.MIN_KEY,w)):v.unique?_.continue(_.key.slice(0,A).concat(v.reverse?t.MIN_KEY:t.MAX_KEY,w)):_.continue()}var O=Object.create(_,{continue:{value:z},continuePrimaryKey:{value:function(M,F){_.continuePrimaryKey(zr(M,t.MAX_KEY,w),F)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var M=_.key;return A===1?M[0]:M.slice(0,A)}},value:{get:function(){return _.value}}});return O}return r.openCursor(P(v)).then(function(_){return _&&k(_)})}});return m}})}var ls={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:ss};function zn(t,e,r,n){return r=r||{},n=n||"",b(t).forEach(function(i){if(!W(e,i))r[n+i]=void 0;else{var a=t[i],s=e[i];if(typeof a=="object"&&typeof s=="object"&&a&&s){var c=Wt(a),p=Wt(s);c!==p?r[n+i]=e[i]:c==="Object"?zn(a,s,r,n+i+"."):a!==s&&(r[n+i]=e[i])}else a!==s&&(r[n+i]=e[i])}}),b(e).forEach(function(i){W(t,i)||(r[n+i]=e[i])}),r}function Kn(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var us={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return u(u({},t),{table:function(e){var r=t.table(e),n=r.schema.primaryKey,i=u(u({},r),{mutate:function(a){var s=H.trans,c=s.table(e).hook,p=c.deleting,d=c.creating,h=c.updating;switch(a.type){case"add":if(d.fire===rt)break;return s._promise("readwrite",function(){return g(a)},!0);case"put":if(d.fire===rt&&h.fire===rt)break;return s._promise("readwrite",function(){return g(a)},!0);case"delete":if(p.fire===rt)break;return s._promise("readwrite",function(){return g(a)},!0);case"deleteRange":if(p.fire===rt)break;return s._promise("readwrite",function(){return x(a)},!0)}return r.mutate(a);function g(m){var v=H.trans,S=m.keys||Kn(n,m);if(!S)throw new Error("Keys missing");return m=m.type==="add"||m.type==="put"?u(u({},m),{keys:S}):u({},m),m.type!=="delete"&&(m.values=f([],m.values,!0)),m.keys&&(m.keys=f([],m.keys,!0)),cs(r,m,S).then(function(w){var T=S.map(function(A,k){var _=w[k],z={onerror:null,onsuccess:null};if(m.type==="delete")p.fire.call(z,A,_,v);else if(m.type==="add"||_===void 0){var O=d.fire.call(z,A,m.values[k],v);A==null&&O!=null&&(A=O,m.keys[k]=A,n.outbound||pt(m.values[k],n.keyPath,A))}else{var M=zn(_,m.values[k]),F=h.fire.call(z,M,A,_,v);if(F){var Q=m.values[k];Object.keys(F).forEach(function(V){W(Q,V)?Q[V]=F[V]:pt(Q,V,F[V])})}}return z});return r.mutate(m).then(function(A){for(var k=A.failures,_=A.results,z=A.numFailures,O=A.lastResult,M=0;M<S.length;++M){var F=_?_[M]:S[M],Q=T[M];F==null?Q.onerror&&Q.onerror(k[M]):Q.onsuccess&&Q.onsuccess(m.type==="put"&&w[M]?m.values[M]:F)}return{failures:k,results:_,numFailures:z,lastResult:O}}).catch(function(A){return T.forEach(function(k){return k.onerror&&k.onerror(A)}),Promise.reject(A)})})}function x(m){return P(m.trans,m.range,1e4)}function P(m,v,S){return r.query({trans:m,values:!1,query:{index:n,range:v},limit:S}).then(function(w){var T=w.result;return g({type:"delete",keys:T,trans:m}).then(function(A){return A.numFailures>0?Promise.reject(A.failures[0]):T.length<S?{failures:[],numFailures:0,lastResult:void 0}:P(m,u(u({},v),{lower:T[T.length-1],lowerOpen:!0}),S)})})}}});return i}})}};function cs(t,e,r){return e.type==="add"?Promise.resolve([]):t.getMany({trans:e.trans,keys:r,cache:"immutable"})}function Hi(t,e,r){try{if(!e||e.keys.length<t.length)return null;for(var n=[],i=0,a=0;i<e.keys.length&&a<t.length;++i)J(e.keys[i],t[a])===0&&(n.push(r?vt(e.values[i]):e.values[i]),++a);return n.length===t.length?n:null}catch{return null}}var ps={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var r=t.table(e);return u(u({},r),{getMany:function(n){if(!n.cache)return r.getMany(n);var i=Hi(n.keys,n.trans._cache,n.cache==="clone");return i?N.resolve(i):r.getMany(n).then(function(a){return n.trans._cache={keys:n.keys,values:n.cache==="clone"?vt(a):a},a})},mutate:function(n){return n.type!=="add"&&(n.trans._cache=null),r.mutate(n)}})}}}};function ji(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Vi(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var ds={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,r=new Tt(t.MIN_KEY,t.MAX_KEY);return u(u({},t),{transaction:function(n,i,a){if(H.subscr&&i!=="readonly")throw new C.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return t.transaction(n,i,a)},table:function(n){var i=t.table(n),a=i.schema,s=a.primaryKey,c=a.indexes,p=s.extractKey,d=s.outbound,h=s.autoIncrement&&c.filter(function(m){return m.compound&&m.keyPath.includes(s.keyPath)}),g=u(u({},i),{mutate:function(m){var v,S,w=m.trans,T=m.mutatedParts||(m.mutatedParts={}),A=function(G){var Y="idb://".concat(e,"/").concat(n,"/").concat(G);return T[Y]||(T[Y]=new Tt)},k=A(""),_=A(":dels"),z=m.type,O=m.type==="deleteRange"?[m.range]:m.type==="delete"?[m.keys]:m.values.length<50?[Kn(s,m).filter(function(G){return G}),m.values]:[],M=O[0],F=O[1],Q=m.trans._cache;if(E(M)){k.addKeys(M);var V=z==="delete"||M.length===F.length?Hi(M,Q):null;V||_.addKeys(M),(V||F)&&fs(A,a,V,F)}else if(M){var L={from:(v=M.lower)!==null&&v!==void 0?v:t.MIN_KEY,to:(S=M.upper)!==null&&S!==void 0?S:t.MAX_KEY};_.add(L),k.add(L)}else k.add(r),_.add(r),a.indexes.forEach(function(G){return A(G.name).add(r)});return i.mutate(m).then(function(G){return M&&(m.type==="add"||m.type==="put")&&(k.addKeys(G.results),h&&h.forEach(function(Y){for(var nt=m.values.map(function(Ot){return Y.extractKey(Ot)}),$=Y.keyPath.findIndex(function(Ot){return Ot===s.keyPath}),mt=0,Zt=G.results.length;mt<Zt;++mt)nt[mt][$]=G.results[mt];A(Y.name).addKeys(nt)})),w.mutatedParts=Mr(w.mutatedParts||{},T),G})}}),x=function(m){var v,S,w=m.query,T=w.index,A=w.range;return[T,new Tt((v=A.lower)!==null&&v!==void 0?v:t.MIN_KEY,(S=A.upper)!==null&&S!==void 0?S:t.MAX_KEY)]},P={get:function(m){return[s,new Tt(m.key)]},getMany:function(m){return[s,new Tt().addKeys(m.keys)]},count:x,query:x,openCursor:x};return b(P).forEach(function(m){g[m]=function(v){var S=H.subscr,w=!!S,T=ji(H,i)&&Vi(m,v),A=T?v.obsSet={}:S;if(w){var k=function(V){var L="idb://".concat(e,"/").concat(n,"/").concat(V);return A[L]||(A[L]=new Tt)},_=k(""),z=k(":dels"),O=P[m](v),M=O[0],F=O[1];if(m==="query"&&M.isPrimaryKey&&!v.values?z.add(F):k(M.name||"").add(F),!M.isPrimaryKey)if(m==="count")z.add(r);else{var Q=m==="query"&&d&&v.values&&i.query(u(u({},v),{values:!1}));return i[m].apply(this,arguments).then(function(V){if(m==="query"){if(d&&v.values)return Q.then(function(nt){var $=nt.result;return _.addKeys($),V});var L=v.values?V.result.map(p):V.result;v.values?_.addKeys(L):z.addKeys(L)}else if(m==="openCursor"){var G=V,Y=v.values;return G&&Object.create(G,{key:{get:function(){return z.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var nt=G.primaryKey;return z.addKey(nt),nt}},value:{get:function(){return Y&&_.addKey(G.primaryKey),G.value}}})}return V})}}return i[m].apply(this,arguments)}}),g}})}};function fs(t,e,r,n){function i(a){var s=t(a.name||"");function c(d){return d!=null?a.extractKey(d):null}var p=function(d){return a.multiEntry&&E(d)?d.forEach(function(h){return s.addKey(h)}):s.addKey(d)};(r||n).forEach(function(d,h){var g=r&&c(r[h]),x=n&&c(n[h]);J(g,x)!==0&&(g!=null&&p(g),x!=null&&p(x))})}e.indexes.forEach(i)}function $i(t,e,r){if(r.numFailures===0)return e;if(e.type==="deleteRange")return null;var n=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;if(r.numFailures===n)return null;var i=u({},e);return E(i.keys)&&(i.keys=i.keys.filter(function(a,s){return!(s in r.failures)})),"values"in i&&E(i.values)&&(i.values=i.values.filter(function(a,s){return!(s in r.failures)})),i}function ms(t,e){return e.lower===void 0?!0:e.lowerOpen?J(t,e.lower)>0:J(t,e.lower)>=0}function hs(t,e){return e.upper===void 0?!0:e.upperOpen?J(t,e.upper)<0:J(t,e.upper)<=0}function Bn(t,e){return ms(t,e)&&hs(t,e)}function Gi(t,e,r,n,i,a){if(!r||r.length===0)return t;var s=e.query.index,c=s.multiEntry,p=e.query.range,d=n.schema.primaryKey,h=d.extractKey,g=s.extractKey,x=(s.lowLevelIndex||s).extractKey,P=r.reduce(function(v,S){var w=v,T=[];if(S.type==="add"||S.type==="put")for(var A=new Tt,k=S.values.length-1;k>=0;--k){var _=S.values[k],z=h(_);if(!A.hasKey(z)){var O=g(_);(c&&E(O)?O.some(function(L){return Bn(L,p)}):Bn(O,p))&&(A.addKey(z),T.push(_))}}switch(S.type){case"add":{var M=new Tt().addKeys(e.values?v.map(function(L){return h(L)}):v);w=v.concat(e.values?T.filter(function(L){var G=h(L);return M.hasKey(G)?!1:(M.addKey(G),!0)}):T.map(function(L){return h(L)}).filter(function(L){return M.hasKey(L)?!1:(M.addKey(L),!0)}));break}case"put":{var F=new Tt().addKeys(S.values.map(function(L){return h(L)}));w=v.filter(function(L){return!F.hasKey(e.values?h(L):L)}).concat(e.values?T:T.map(function(L){return h(L)}));break}case"delete":var Q=new Tt().addKeys(S.keys);w=v.filter(function(L){return!Q.hasKey(e.values?h(L):L)});break;case"deleteRange":var V=S.range;w=v.filter(function(L){return!Bn(h(L),V)});break}return w},t);if(P===t)return t;var m=function(v,S){return J(x(v),x(S))||J(h(v),h(S))};return P.sort(e.direction==="prev"||e.direction==="prevunique"?function(v,S){return m(S,v)}:m),e.limit&&e.limit<1/0&&(P.length>e.limit?P.length=e.limit:t.length===e.limit&&P.length<e.limit&&(i.dirty=!0)),a?Object.freeze(P):P}function Yi(t,e){return J(t.lower,e.lower)===0&&J(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function gs(t,e,r,n){if(t===void 0)return e!==void 0?-1:0;if(e===void 0)return 1;var i=J(t,e);if(i===0){if(r&&n)return 0;if(r)return 1;if(n)return-1}return i}function vs(t,e,r,n){if(t===void 0)return e!==void 0?1:0;if(e===void 0)return-1;var i=J(t,e);if(i===0){if(r&&n)return 0;if(r)return-1;if(n)return 1}return i}function ys(t,e){return gs(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&vs(t.upper,e.upper,t.upperOpen,e.upperOpen)>=0}function bs(t,e,r,n){var i,a=Re["idb://".concat(t,"/").concat(e)];if(!a)return[];var s=a.queries[r];if(!s)return[null,!1,a,null];var c=n.query?n.query.index.name:null,p=s[c||""];if(!p)return[null,!1,a,null];switch(r){case"query":var d=(i=n.direction)!==null&&i!==void 0?i:"next",h=p.find(function(P){var m;return P.req.limit===n.limit&&P.req.values===n.values&&((m=P.req.direction)!==null&&m!==void 0?m:"next")===d&&Yi(P.req.query.range,n.query.range)});if(h)return[h,!0,a,p];var g=p.find(function(P){var m,v="limit"in P.req?P.req.limit:1/0;return v>=n.limit&&((m=P.req.direction)!==null&&m!==void 0?m:"next")===d&&(n.values?P.req.values:!0)&&ys(P.req.query.range,n.query.range)});return[g,!1,a,p];case"count":var x=p.find(function(P){return Yi(P.req.query.range,n.query.range)});return[x,!!x,a,p]}}function xs(t,e,r,n){t.subscribers.add(r),n.addEventListener("abort",function(){t.subscribers.delete(r),t.subscribers.size===0&&ws(t,e)})}function ws(t,e){setTimeout(function(){t.subscribers.size===0&&Ct(e,t)},3e3)}var Ss={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name,r=u(u({},t),{transaction:function(n,i,a){var s=t.transaction(n,i,a);if(i==="readwrite"){var c=new AbortController,p=c.signal,d=function(h){return function(){if(c.abort(),i==="readwrite"){for(var g=new Set,x=0,P=n;x<P.length;x++){var m=P[x],v=Re["idb://".concat(e,"/").concat(m)];if(v){var S=t.table(m),w=v.optimisticOps.filter(function(Y){return Y.trans===s});if(s._explicit&&h&&s.mutatedParts)for(var T=0,A=Object.values(v.queries.query);T<A.length;T++)for(var k=A[T],_=0,z=k.slice();_<z.length;_++){var O=z[_];In(O.obsSet,s.mutatedParts)&&(Ct(k,O),O.subscribers.forEach(function(Y){return g.add(Y)}))}else if(w.length>0){v.optimisticOps=v.optimisticOps.filter(function(Y){return Y.trans!==s});for(var M=0,F=Object.values(v.queries.query);M<F.length;M++)for(var k=F[M],Q=0,V=k.slice();Q<V.length;Q++){var O=V[Q];if(O.res!=null&&s.mutatedParts)if(h&&!O.dirty){var L=Object.isFrozen(O.res),G=Gi(O.res,O.req,w,S,O,L);O.dirty?(Ct(k,O),O.subscribers.forEach(function($){return g.add($)})):G!==O.res&&(O.res=G,O.promise=N.resolve({result:G}))}else O.dirty&&Ct(k,O),O.subscribers.forEach(function($){return g.add($)})}}}}g.forEach(function(Y){return Y()})}}};s.addEventListener("abort",d(!1),{signal:p}),s.addEventListener("error",d(!1),{signal:p}),s.addEventListener("complete",d(!0),{signal:p})}return s},table:function(n){var i=t.table(n),a=i.schema.primaryKey,s=u(u({},i),{mutate:function(c){var p=H.trans;if(a.outbound||p.db._options.cache==="disabled"||p.explicit||p.idbtrans.mode!=="readwrite")return i.mutate(c);var d=Re["idb://".concat(e,"/").concat(n)];if(!d)return i.mutate(c);var h=i.mutate(c);return(c.type==="add"||c.type==="put")&&(c.values.length>=50||Kn(a,c).some(function(g){return g==null}))?h.then(function(g){var x=u(u({},c),{values:c.values.map(function(m,v){var S;if(g.failures[v])return m;var w=!((S=a.keyPath)===null||S===void 0)&&S.includes(".")?vt(m):u({},m);return pt(w,a.keyPath,g.results[v]),w})}),P=$i(d,x,g);d.optimisticOps.push(P),queueMicrotask(function(){return c.mutatedParts&&Nr(c.mutatedParts)})}):(d.optimisticOps.push(c),c.mutatedParts&&Nr(c.mutatedParts),h.then(function(g){if(g.numFailures>0){Ct(d.optimisticOps,c);var x=$i(d,c,g);x&&d.optimisticOps.push(x),c.mutatedParts&&Nr(c.mutatedParts)}}),h.catch(function(){Ct(d.optimisticOps,c),c.mutatedParts&&Nr(c.mutatedParts)})),h},query:function(c){var p;if(!ji(H,i)||!Vi("query",c))return i.query(c);var d=((p=H.trans)===null||p===void 0?void 0:p.db._options.cache)==="immutable",h=H,g=h.requery,x=h.signal,P=bs(e,n,"query",c),m=P[0],v=P[1],S=P[2],w=P[3];if(m&&v)m.obsSet=c.obsSet;else{var T=i.query(c).then(function(A){var k=A.result;if(m&&(m.res=k),d){for(var _=0,z=k.length;_<z;++_)Object.freeze(k[_]);Object.freeze(k)}return A}).catch(function(A){return w&&m&&Ct(w,m),Promise.reject(A)});m={obsSet:c.obsSet,promise:T,subscribers:new Set,type:"query",req:c,dirty:!1},w?w.push(m):(w=[m],S||(S=Re["idb://".concat(e,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),S.queries.query[c.query.index.name||""]=w)}return xs(m,w,g,x),m.promise.then(function(A){var k=Gi(A.result,c,S?.optimisticOps,i,m,d);return{result:d?k:vt(k)}})}});return s}});return r}};function Kr(t,e){return new Proxy(t,{get:function(r,n,i){return n==="db"?e:Reflect.get(r,n,i)}})}var fe=(function(){function t(e,r){var n=this;this._middlewares={},this.verno=0;var i=t.dependencies;this._options=r=u({addons:t.addons,autoOpen:!0,indexedDB:i.indexedDB,IDBKeyRange:i.IDBKeyRange,cache:"cloned",maxConnections:wi},r),this._deps={indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange};var a=r.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var s={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:rt,dbReadyPromise:null,cancelOpen:rt,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:r.autoOpen};s.dbReadyPromise=new N(function(p){s.dbReadyResolve=p}),s.openCanceller=new N(function(p,d){s.cancelOpen=d}),this._state=s,this.name=e,this.on=tr(this,"populate","blocked","versionchange","close",{ready:[rn,rt]}),this.once=function(p,d){var h=function(){for(var g=[],x=0;x<arguments.length;x++)g[x]=arguments[x];n.on(p).unsubscribe(h),d.apply(n,g)};return n.on(p,h)},this.on.ready.subscribe=re(this.on.ready.subscribe,function(p){return function(d,h){t.vip(function(){var g=n._state;if(g.openComplete)g.dbOpenError||N.resolve().then(d),h&&p(d);else if(g.onReadyBeingFired)g.onReadyBeingFired.push(d),h&&p(d);else{p(d);var x=n;h||p(function P(){x.on.ready.unsubscribe(d),x.on.ready.unsubscribe(P)})}})}}),this.Collection=Do(this),this.Table=Eo(this),this.Transaction=Ko(this),this.Version=qo(this),this.WhereClause=No(this),this.on("versionchange",function(p){p.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(n.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(n.name,"'. Closing db now to resume the delete request.")),n.close({disableAutoOpen:!1})}),this.on("blocked",function(p){!p.newVersion||p.newVersion<p.oldVersion?console.warn("Dexie.delete('".concat(n.name,"') was blocked")):console.warn("Upgrade '".concat(n.name,"' blocked by other connection holding version ").concat(p.oldVersion/10))}),this._maxKey=nr(r.IDBKeyRange),this._createTransaction=function(p,d,h,g){return new n.Transaction(p,d,h,n._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(p){n.on("blocked").fire(p),ar.toArray().filter(function(d){return d.name===n.name&&d!==n&&!d._state.vcFired}).map(function(d){return d.on("versionchange").fire(p)})},this.use(ps),this.use(Ss),this.use(ds),this.use(ls),this.use(us);var c=new Proxy(this,{get:function(p,d,h){if(d==="_vip")return!0;if(d==="table")return function(x){return Kr(n.table(x),c)};var g=Reflect.get(p,d,h);return g instanceof Ai?Kr(g,c):d==="tables"?g.map(function(x){return Kr(x,c)}):d==="_createTransaction"?function(){var x=g.apply(this,arguments);return Kr(x,c)}:g}});this.vip=c,a.forEach(function(p){return p(n)})}return t.prototype.version=function(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(e*10)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var r=this._versions,n=r.filter(function(i){return i._cfg.version===e})[0];return n||(n=new this.Version(e),r.push(n),r.sort(Vo),n.stores({}),this._state.autoSchema=!1,n)},t.prototype._whenReady=function(e){var r=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new N(function(n,i){if(r._state.openComplete)return i(new C.DatabaseClosed(r._state.dbOpenError));if(!r._state.isBeingOpened){if(!r._state.autoOpen){i(new C.DatabaseClosed);return}r.open().catch(rt)}r._state.dbReadyPromise.then(n,i)}).then(e)},t.prototype.use=function(e){var r=e.stack,n=e.create,i=e.level,a=e.name;a&&this.unuse({stack:r,name:a});var s=this._middlewares[r]||(this._middlewares[r]=[]);return s.push({stack:r,create:n,level:i??10,name:a}),s.sort(function(c,p){return c.level-p.level}),this},t.prototype.unuse=function(e){var r=e.stack,n=e.name,i=e.create;return r&&this._middlewares[r]&&(this._middlewares[r]=this._middlewares[r].filter(function(a){return i?a.create!==i:n?a.name!==n:!1})),this},t.prototype.open=function(){var e=this;return Ae(pe,function(){return as(e)})},t.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state;if(ar.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new N(function(r){e.dbReadyResolve=r}),e.openCanceller=new N(function(r,n){e.cancelOpen=n}))},t.prototype.close=function(e){var r=e===void 0?{disableAutoOpen:!0}:e,n=r.disableAutoOpen,i=this._state;n?(i.isBeingOpened&&i.cancelOpen(new C.DatabaseClosed),this._close(),i.autoOpen=!1,i.dbOpenError=new C.DatabaseClosed):(this._close(),i.autoOpen=this._options.autoOpen||i.isBeingOpened,i.openComplete=!1,i.dbOpenError=null)},t.prototype.delete=function(e){var r=this;e===void 0&&(e={disableAutoOpen:!0});var n=arguments.length>0&&typeof arguments[0]!="object",i=this._state;return new N(function(a,s){var c=function(){r.close(e);var p=r._deps.indexedDB.deleteDatabase(r.name);p.onsuccess=at(function(){ns(r._deps,r.name),a()}),p.onerror=te(s),p.onblocked=r._fireOnBlocked};if(n)throw new C.InvalidArgument("Invalid closeOptions argument to db.delete()");i.isBeingOpened?i.dbReadyPromise.then(c):c()})},t.prototype.backendDB=function(){return this.idbdb},t.prototype.isOpen=function(){return this.idbdb!==null},t.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},t.prototype.hasFailed=function(){return this._state.dbOpenError!==null},t.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(t.prototype,"tables",{get:function(){var e=this;return b(this._allTables).map(function(r){return e._allTables[r]})},enumerable:!1,configurable:!0}),t.prototype.transaction=function(){var e=os.apply(this,arguments);return this._transaction.apply(this,e)},t.prototype._transaction=function(e,r,n){var i=this,a=H.trans;(!a||a.db!==this||e.indexOf("!")!==-1)&&(a=null);var s=e.indexOf("?")!==-1;e=e.replace("!","").replace("?","");var c,p;try{if(p=r.map(function(h){var g=h instanceof i.Table?h.name:h;if(typeof g!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return g}),e=="r"||e===hn)c=hn;else if(e=="rw"||e==gn)c=gn;else throw new C.InvalidArgument("Invalid transaction mode: "+e);if(a){if(a.mode===hn&&c===gn)if(s)a=null;else throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");a&&p.forEach(function(h){if(a&&a.storeNames.indexOf(h)===-1)if(s)a=null;else throw new C.SubTransaction("Table "+h+" not included in parent transaction.")}),s&&a&&!a.active&&(a=null)}}catch(h){return a?a._promise(null,function(g,x){x(h)}):ct(h)}var d=Ui.bind(null,this,c,p,a,n);return a?a._promise(c,d,"lock"):H.trans?Ae(H.transless,function(){return i._whenReady(d)}):this._whenReady(d)},t.prototype.table=function(e){if(!W(this._allTables,e))throw new C.InvalidTable("Table ".concat(e," does not exist"));return this._allTables[e]},t})(),ks=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ps=(function(){function t(e){this._subscribe=e}return t.prototype.subscribe=function(e,r,n){return this._subscribe(!e||typeof e=="function"?{next:e,error:r,complete:n}:e)},t.prototype[ks]=function(){return this},t})(),Br;try{Br={indexedDB:y.indexedDB||y.mozIndexedDB||y.webkitIndexedDB||y.msIndexedDB,IDBKeyRange:y.IDBKeyRange||y.webkitIDBKeyRange}}catch{Br={indexedDB:null,IDBKeyRange:null}}function Wi(t){var e=!1,r,n=new Ps(function(i){var a=ce(t);function s(w){var T=Ke();try{a&&Fe();var A=he(t,w);return a&&(A=A.finally(ge)),A}finally{T&&Be()}}var c=!1,p,d={},h={},g={get closed(){return c},unsubscribe:function(){c||(c=!0,p&&p.abort(),x&&be.storagemutated.unsubscribe(v))}};i.start&&i.start(g);var x=!1,P=function(){return dn(S)};function m(){return In(h,d)}var v=function(w){Mr(d,w),m()&&P()},S=function(){if(!(c||!Br.indexedDB)){d={};var w={};p&&p.abort(),p=new AbortController;var T={subscr:w,signal:p.signal,requery:P,querier:t,trans:null},A=s(T);x||(be.storagemutated.subscribe(v),x=!0),Promise.resolve(A).then(function(k){e=!0,r=k,!(c||T.signal.aborted)&&(m()?P():(h=w,m()?P():(d={},dn(function(){return!c&&i.next&&i.next(k)}))))},function(k){e=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||c||dn(function(){c||i.error&&i.error(k)})})}};return setTimeout(P,0),g});return n.hasValue=function(){return e},n.getValue=function(){return r},n}var Ie=fe;tt(Ie,u(u({},dr),{delete:function(t){var e=new Ie(t,{addons:[]});return e.delete()},exists:function(t){return new Ie(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return es(Ie.dependencies).then(t)}catch{return ct(new C.MissingAPI)}},defineClass:function(){function t(e){K(this,e)}return t},ignoreTransaction:function(t){return H.trans?Ae(H.transless||pe,t):t()},vip:Tn,async:function(t){return function(){try{var e=Nn(t.apply(this,arguments));return!e||typeof e.then!="function"?N.resolve(e):e}catch(r){return ct(r)}}},spawn:function(t,e,r){try{var n=Nn(t.apply(r,e||[]));return!n||typeof n.then!="function"?N.resolve(n):n}catch(i){return ct(i)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(t,e){var r=N.resolve(typeof t=="function"?Ie.ignoreTransaction(t):t).timeout(e||6e4);return H.trans?H.trans.waitFor(r):r},Promise:N,debug:{get:function(){return ae},set:function(t){ci(t)}},derive:it,extend:K,props:tt,override:re,Events:tr,on:be,liveQuery:Wi,extendObservabilitySet:Mr,getByKeyPath:lt,setByKeyPath:pt,delByKeyPath:ne,shallowClone:Lt,deepClone:vt,getObjectDiff:zn,cmp:J,asap:Ft,minKey:mn,addons:[],connections:{get:ar.toArray},errnames:U,dependencies:Br,cache:Re,semVer:bi,version:bi.split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,r){return t+e/Math.pow(10,r*2)})})),Ie.maxKey=nr(Ie.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(be(Ar,function(t){if(!xe){var e;e=new CustomEvent(bn,{detail:t}),xe=!0,dispatchEvent(e),xe=!1}}),addEventListener(bn,function(t){var e=t.detail;xe||Fn(e)}));function Fn(t){var e=xe;try{xe=!0,be.storagemutated.fire(t),Mn(t,!0)}finally{xe=e}}var xe=!1,we,Ln=function(){};typeof BroadcastChannel<"u"&&(Ln=function(){we=new BroadcastChannel(bn),we.onmessage=function(t){return t.data&&Fn(t.data)}},Ln(),typeof we.unref=="function"&&we.unref(),be(Ar,function(t){xe||we.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!fe.disableBfCache&&t.persisted){ae&&console.debug("Dexie: handling persisted pagehide"),we?.close();for(var e=0,r=ar.toArray();e<r.length;e++){var n=r[e];n.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(t){!fe.disableBfCache&&t.persisted&&(ae&&console.debug("Dexie: handling persisted pageshow"),Ln(),Fn({all:new Tt(-1/0,[[]])}))}));function _s(t){return new qe({add:t})}function Es(t){return new qe({remove:t})}function As(t,e){return new qe({replacePrefix:[t,e]})}N.rejectionMapper=We,ci(ae);var Ts=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:wi,Dexie:fe,Entity:ki,PropModification:qe,RangeSet:Tt,add:_s,cmp:J,default:fe,liveQuery:Wi,mergeRanges:sr,rangesOverlap:Ki,remove:Es,replacePrefix:As});return u(fe,Ts,{default:fe}),fe}))});var Lr,Xi,Ur,Gl,Yl,Wl,Zl,Xl,Ql,Jl,ql,tu,eu,ru,Me,Vn=Mt(()=>{Lr=Bs(Zi(),1),Xi=Symbol.for("Dexie"),Ur=globalThis[Xi]||(globalThis[Xi]=Lr.default);if(Lr.default.semVer!==Ur.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Lr.default.semVer} and ${Ur.semVer}`);({liveQuery:Gl,mergeRanges:Yl,rangesOverlap:Wl,RangeSet:Zl,cmp:Xl,Entity:Ql,PropModification:Jl,replacePrefix:ql,add:tu,remove:eu,DexieYProvider:ru}=Ur),Me=Ur});function Ji(l){Qi=l}var Qi,$n,q,me=Mt(()=>{"use strict";Vn();$n=class extends Me{constructor(o){super("listening-stats"),this.version(4).stores({playEvents:"++id, startedAt, trackUri, artistUri, type"}),this.version(5).stores({playEvents:"++id, startedAt, trackUri, artistUri, type",artists:"uri, updatedAt"}),this.on("versionchange",u=>{if(u.newVersion!==null)return this.close({disableAutoOpen:!0}),o?.(),Qi?.(),!1})}},q=new $n});function ra(){let l=new Date,o=new Date(l.getFullYear(),l.getMonth(),l.getDate(),0,0,0,0),u=new Date(l.getFullYear(),l.getMonth(),l.getDate()+1,0,0,0,0);return{start:o.getTime(),end:u.getTime()}}function Hs(){let l=new Date,u=(l.getDay()+6)%7,f=new Date(l.getFullYear(),l.getMonth(),l.getDate()-u,0,0,0,0),y=new Date(f.getFullYear(),f.getMonth(),f.getDate()+7,0,0,0,0);return{start:f.getTime(),end:y.getTime()}}function js(){let l=new Date,o=new Date(l.getFullYear(),l.getMonth(),1,0,0,0,0),u=new Date(l.getFullYear(),l.getMonth()+1,1,0,0,0,0);return{start:o.getTime(),end:u.getTime()}}function Vs(){let l=new Date,o=new Date(l.getFullYear(),l.getMonth()-6,1,0,0,0,0),u=new Date(l.getFullYear(),l.getMonth()+1,1,0,0,0,0);return{start:o.getTime(),end:u.getTime()}}function $s(){let l=Date.now();return{start:l-28*864e5,end:l}}function Gs(){let l=Date.now();return{start:l-180*864e5,end:l}}function na(){return{start:0,end:Number.MAX_SAFE_INTEGER}}function aa(l){let o=Ne.findIndex(u=>u.id===l);return o===-1||o===Ne.length-1?null:Ne[o+1]}function ur(l){if(l.id==="all-time"||l.id==="sfm-all-time"||l.id==="overall")return null;let{start:o,end:u}=l.getBoundaries(),f=u-o,y=o-f;return y<0?null:{start:y,end:o}}var Ne,ze,ia,cr=Mt(()=>{"use strict";Ne=[{id:"today",label:"Today",getBoundaries:ra},{id:"this-week",label:"This Week",getBoundaries:Hs},{id:"this-month",label:"This Month",getBoundaries:js},{id:"last-6-months",label:"Last 6 Months",getBoundaries:Vs},{id:"all-time",label:"All Time",getBoundaries:na}],ze=[{id:"sfm-weeks",label:"Last 4 Weeks",getBoundaries:$s},{id:"sfm-months",label:"Last 6 Months",getBoundaries:Gs},{id:"sfm-all-time",label:"All Time",getBoundaries:na}],ia=[{id:"sfm-today",label:"Today",getBoundaries:ra},...ze]});var Z,Nt=Mt(()=>{"use strict";Z={PLAY_THRESHOLD:"listening-stats:playThreshold",PLAY_THRESHOLD_MODE:"listening-stats:playThresholdMode",PLAY_THRESHOLD_PERCENT:"listening-stats:playThresholdPercent",TRACKING_PAUSED:"listening-stats:tracking-paused",SKIP_REPEATS:"listening-stats:skip-repeats",LAST_UPDATE:"listening-stats:lastUpdate",LOGGING:"listening-stats:logging",TRACKING_HEALTH:"listening-stats:tracking-health",LAST_WRITE:"listening-stats:lastWrite",ACTIVE_PROVIDER:"listening-stats:active-provider",PREFERENCES:"listening-stats:preferences",MIGRATION_PENDING:"listening-stats:migration-pending",STATSFM_CONFIG:"listening-stats:statsfm",PROVIDER_WIZARD_SEEN:"listening-stats:provider-wizard-seen",PROVIDER_PERIODS:"listening-stats:provider-periods",STATSFM_HEALTH:"listening-stats:statsfm-health",DISMISSED_BANNER_VERSION:"listening-stats:dismissed-banner-version",LASTFM_API_KEY:"listening-stats:lastfm-api-key",LASTFM_CONFIG:"listening-stats:lastfm-provider",WORLD_CHARTS_SCOPE:"listening-stats:world-charts-scope",WORLD_CHARTS_WINDOW:"listening-stats:world-charts-window",TOUR_SEEN_VERSION:"listening-stats:tour-seen-version",DISMISSED_REMOTE_ANNOUNCEMENT_ID:"listening-stats:dismissed-remote-announcement-id",UPDATE_PROMPT_SNOOZE_UNTIL:"listening-stats:update-prompt-snooze-until",RECAP_DISMISSED_MONTH:"listening-stats:recap-dismissed-month",RANK_MODE:"listening-stats:rank-mode",PLAYLIST_CONFIG:"listening-stats:playlist-config",PLAYLIST_STATE:"listening-stats:playlist-state"}});var ht,je=Mt(()=>{"use strict";ht={PLAY_RECORDED:"listening-stats:play-recorded",SKIP_RECORDED:"listening-stats:skip-recorded",HEALTH_CHANGED:"listening-stats:health-changed",TRACKING_PAUSED:"listening-stats:tracking-paused",TRACKING_RESUMED:"listening-stats:tracking-resumed",PROVIDER_CHANGED:"listening-stats:provider-changed",STATSFM_CONNECTED:"listening-stats:statsfm-connected",STATSFM_DISCONNECTED:"listening-stats:statsfm-disconnected",STATSFM_HEALTH_CHANGED:"listening-stats:statsfm-health-changed",STATSFM_PROFILE_REFRESHED:"listening-stats:statsfm-profile-refreshed",PREFS_CHANGED:"listening-stats:prefs-changed",RANK_MODE_CHANGED:"listening-stats:rank-mode-changed",DASHBOARD_PERIOD_CHANGED:"listening-stats:dashboard-period-changed",OPEN_RECAP:"listening-stats:open-recap"}});var Tl,qr,Oa=Mt(()=>{"use strict";({Component:Tl}=Spicetify.React),qr=class extends Tl{constructor(){super(...arguments);this.state={error:null,componentStack:"",copied:!1};this.handleCopy=async()=>{let u=this.buildReport();try{await navigator.clipboard.writeText(u),this.setState({copied:!0})}catch{try{let f=document.createElement("textarea");f.value=u,f.style.position="fixed",f.style.left="-9999px",document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f),this.setState({copied:!0})}catch{}}};this.handleRetry=()=>{this.setState({error:null,componentStack:"",copied:!1})}}static getDerivedStateFromError(u){return{error:u,copied:!1}}componentDidCatch(u,f){this.setState({componentStack:f?.componentStack??""}),console.error("[listening-stats] Render error:",u,f?.componentStack??"")}buildReport(){let{error:u,componentStack:f}=this.state;return["Listening Stats error report",`Version: ${this.props.appVersion??"unknown"}`,`Spotify UA: ${typeof navigator<"u"?navigator.userAgent:"unknown"}`,`Error: ${u?.message??"unknown"}`,u?.stack?`Stack:
${u.stack}`:"",f?`Component stack:
${f}`:""].filter(Boolean).join(`
`)}render(){let{error:u,copied:f}=this.state;return u?this.props.silent?null:Spicetify.React.createElement("div",{role:"alert",style:{margin:24,padding:20,borderRadius:8,background:"var(--spice-card, rgba(255,255,255,0.06))",color:"var(--spice-text, #fff)",maxWidth:640}},Spicetify.React.createElement("h2",{style:{marginTop:0,fontSize:18}},"Listening Stats hit an error"),Spicetify.React.createElement("p",{style:{fontSize:14,opacity:.85}},"The rest of Spotify is unaffected. Copy the details below and attach them to a GitHub issue so this can be fixed."),Spicetify.React.createElement("pre",{style:{fontSize:12,whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:180,overflow:"auto",padding:10,borderRadius:6,background:"rgba(0,0,0,0.35)"}},u.message),Spicetify.React.createElement("div",{style:{display:"flex",gap:8}},Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:this.handleCopy},f?"Copied":"Copy error details"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:this.handleRetry},"Try again"))):this.props.children??null}}});function Il(l){let o=l.match(/^spotify:track:(.+)$/i);return o?o[1]:null}function Cl(l){return{"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[l]??null}async function Ma(l,o,u){let f=Il(o);if(!f||!l.trim())return null;for(let y=0;y<Rl;y+=ii){let b=new URL(`${Dl}/users/${encodeURIComponent(l.trim())}/top/tracks`);b.searchParams.set("range",u),b.searchParams.set("limit",String(ii)),b.searchParams.set("offset",String(y));let E;try{E=await fetch(b.toString(),{headers:{Accept:"application/json"}})}catch{return null}if(!E.ok)return null;let K=await E.json(),I=K.items??K.item??[];if(!Array.isArray(I)||I.length===0)return null;for(let X of I)if(X.track?.externalIds?.spotify?.[0]===f)return X.streams;if(I.length<ii)return null}return null}async function Na(l,o){return Ma(l,o,"lifetime")}async function za(l,o,u){let f=Cl(u);return f?Ma(l,o,f):null}function Ka(){try{let l=localStorage.getItem(Z.STATSFM_CONFIG);if(!l)return null;let o=JSON.parse(l);return typeof o.username=="string"?o.username:null}catch{return null}}var Dl,ii,Rl,Ba=Mt(()=>{"use strict";Nt();Dl="https://api.stats.fm/api/v1",ii=100,Rl=4e3});var ai,oi,Fa=Mt(()=>{"use strict";Nt();ai=class{constructor(){this.providers=new Map;this.activeId=null}register(o){let u=o.getProviderInfo();this.providers.set(u.id,o)}getActive(){return this.activeId?this.providers.get(this.activeId)??null:null}getActiveId(){return this.activeId}setActive(o){if(!this.providers.has(o))throw new Error(`Provider "${o}" not registered`);this.activeId=o,localStorage.setItem(Z.ACTIVE_PROVIDER,o)}restoreActive(){let o=localStorage.getItem(Z.ACTIVE_PROVIDER);o&&this.providers.has(o)&&(this.activeId=o)}_resetForTesting(){this.providers.clear(),this.activeId=null}getAll(){return Array.from(this.providers.values()).map(o=>o.getProviderInfo())}},oi=new ai});function Ol(){try{let l=localStorage.getItem(Z.PROVIDER_PERIODS);if(!l)return{};let o=JSON.parse(l);return typeof o=="object"&&o!==null&&!Array.isArray(o)?o:{}}catch{return{}}}function La(l,o){let u=Ol()[l];if(u){let f=o.find(y=>y.id===u);if(f)return f}return o[0]}var Ua=Mt(()=>{"use strict";Nt()});function Ha(){return{...Vt,hiddenSections:[...Vt.hiddenSections],sectionOrder:[...Vt.sectionOrder],columnOrder:[...Vt.columnOrder],overviewOrder:{local:[...Vt.overviewOrder.local],statsfm:[...Vt.overviewOrder.statsfm]}}}function tn(l,o){let u=new Set(o),f=[],y=new Set;if(Array.isArray(l))for(let b of l)typeof b=="string"&&u.has(b)&&!y.has(b)&&(y.add(b),f.push(b));for(let b of o)y.has(b)||f.push(b);return f}function zl(l){let o=[],u=new Set;if(!Array.isArray(l))return o;for(let f of l)typeof f=="string"&&(u.has(f)||(u.add(f),o.push(f)));return o}function si(){try{let l=localStorage.getItem(Z.PREFERENCES);if(l){let o=JSON.parse(l),u=Ha();return{...u,...o,hiddenSections:zl(o.hiddenSections??u.hiddenSections),sectionOrder:tn(o.sectionOrder,ja),columnOrder:tn(o.columnOrder,Va),overviewOrder:{local:tn(o.overviewOrder?.local,en.local),statsfm:tn(o.overviewOrder?.statsfm,en.statsfm)},activityTab:Ml.has(o.activityTab)?o.activityTab:Vt.activityTab,playCountVariant:Nl.has(o.playCountVariant)?o.playCountVariant:Vt.playCountVariant,playCountShowPeriodStreams:typeof o.playCountShowPeriodStreams=="boolean"?o.playCountShowPeriodStreams:Vt.playCountShowPeriodStreams,receiveBetaUpdates:typeof o.receiveBetaUpdates=="boolean"?o.receiveBetaUpdates:Vt.receiveBetaUpdates,showAnnouncementBanner:typeof o.showAnnouncementBanner=="boolean"?o.showAnnouncementBanner:Vt.showAnnouncementBanner,announcementBannerHiddenForDismissKey:typeof o.announcementBannerHiddenForDismissKey=="string"?o.announcementBannerHiddenForDismissKey:Vt.announcementBannerHiddenForDismissKey,heatmapShrink:typeof o.heatmapShrink=="boolean"?o.heatmapShrink:Vt.heatmapShrink}}}catch{}return Ha()}var ja,Va,en,Ml,Nl,Vt,$a=Mt(()=>{"use strict";Nt();ja=["overview","top-genres","top-lists","activity","consistency","recently-played"],Va=["top-tracks","top-artists","top-albums"],en={local:["tracks","unique-artists","streak","new-artists","peak-hour","skip-rate","est-payout"],statsfm:["unique-artists","new-artists","top-genre","est-payout"]},Ml=new Set(["hour","weekday","day"]),Nl=new Set(["pill","bubble","minimal","off"]),Vt={use24HourTime:!1,itemsPerSection:5,hiddenSections:[],sectionOrder:[...ja],columnOrder:[...Va],overviewOrder:{local:[...en.local],statsfm:[...en.statsfm]},activityTab:"hour",activeGenre:null,playCountVariant:"pill",playCountShowPeriodStreams:!0,activePage:"dashboard",receiveBetaUpdates:!1,showAnnouncementBanner:!0,announcementBannerHiddenForDismissKey:"",showShareCaption:!0,heatmapShrink:!0}});function Kl(l){return new Date(l).toLocaleDateString(void 0,{month:"short",day:"numeric"})}function Ga({count:l,variant:o,firstPlayedAt:u,periodStreams:f,periodLabel:y,showFirstListen:b=!1}){if(o==="off"||l<1&&!b)return null;let E="No plays in your tracked history for this track yet (skips excluded). Count updates after a qualifying listen.";if(b&&l<1){let tt=(ot,ut,it)=>$t.createElement("div",{className:ot,title:it},ut);return o==="bubble"?tt("play-count-bubble",[$t.createElement("div",{key:"i",className:"play-count-bubble-icon"},"\u25B6"),$t.createElement("span",{key:"b",className:"play-count-badge play-count-badge--new"},"NEW")],E):o==="minimal"?tt("play-count-minimal","New",E):tt("play-count-pill play-count-pill--first",[$t.createElement("span",{key:"d",className:"play-count-dot"}),$t.createElement("span",{key:"t"},"New play")],E)}let I=`Played ${l} ${l===1?"time":"times"}`;u!=null&&(I+=` \xB7 first on ${Kl(u)}`),f!=null&&y&&(I+=` \xB7 ${f} in ${y} (stats.fm top tracks)`);let X=l===1?"1 play":`${l} plays`,W=f!=null&&y?$t.createElement("span",{style:{marginLeft:6,fontSize:"0.85em",fontWeight:500,color:"rgba(var(--spice-rgb-text), 0.55)"}},`\xB7 ${f} ${y}`):null;if(o==="bubble")return $t.createElement("div",{className:"play-count-bubble",title:I},$t.createElement("div",{className:"play-count-bubble-icon"},"\u25B6"),$t.createElement("span",{className:"play-count-badge"},l),f!=null&&y?$t.createElement("span",{style:{marginLeft:4,fontSize:10,color:"rgba(var(--spice-rgb-text), 0.55)"}},`${f}`):null);if(o==="minimal"){let tt=f!=null&&y?` (${f} ${y})`:"";return $t.createElement("div",{className:"play-count-minimal",title:I},`\xD7${l}${tt}`)}return $t.createElement("div",{className:"play-count-pill",title:I},$t.createElement("span",{className:"play-count-dot"}),X,W)}var $t,Ya=Mt(()=>{"use strict";({React:$t}=Spicetify)});function Ll(){let[l,o]=li(null),[u,f]=li(()=>Spicetify.Player.data?.item?.uri??null),[y,b]=li(0),E=Fl(0),K=Bl(async I=>{let X=++E.current,W=tt=>{E.current===X&&o(tt)};try{let tt=si(),ot=await q.playEvents.where("trackUri").equals(I).filter(St=>St.type!=="skip").sortBy("startedAt"),ut=ot.length,it=ot[0]?.startedAt??null;if(oi.getActiveId()==="statsfm"){let St=Ka();if(St){let zt=await Na(St,I),Bt=null,Rt=null;if(tt.playCountShowPeriodStreams){let Ft=oi.getActive()?.getSupportedPeriods()??ze;if(Ft.length>0){let le=La("statsfm",Ft);Rt=le.label,Bt=await za(St,I,le.id)}}let re=zt??ut,It=zt!=null?null:it;W({count:re,firstPlayedAt:It,periodStreams:Bt,periodLabel:Rt});return}}W({count:ut,firstPlayedAt:it,periodStreams:void 0,periodLabel:void 0})}catch{W(null)}},[]);return Ye(()=>{u?K(u):(E.current++,o(null))},[u,K,y]),Ye(()=>{let I=()=>{let X=Spicetify.Player.data?.item?.uri??null;f(X)};return Spicetify.Player.addEventListener("songchange",I),()=>Spicetify.Player.removeEventListener("songchange",I)},[]),Ye(()=>{let I=()=>{u&&K(u)};return window.addEventListener(ht.PLAY_RECORDED,I),()=>window.removeEventListener(ht.PLAY_RECORDED,I)},[u,K]),Ye(()=>{let I=()=>b(X=>X+1);return window.addEventListener(ht.PROVIDER_CHANGED,I),()=>window.removeEventListener(ht.PROVIDER_CHANGED,I)},[]),Ye(()=>{let I=()=>b(X=>X+1);return window.addEventListener(ht.DASHBOARD_PERIOD_CHANGED,I),()=>window.removeEventListener(ht.DASHBOARD_PERIOD_CHANGED,I)},[]),Ye(()=>{let I=()=>b(X=>X+1);return window.addEventListener(ht.PREFS_CHANGED,I),()=>window.removeEventListener(ht.PREFS_CHANGED,I)},[]),l}function Wa(){let l=Ll(),o=si();if(o.playCountVariant==="off"||!l)return null;let u=o.playCountShowPeriodStreams&&l.count<1;return l.count<1&&!u?null:ui.createElement("div",{className:"play-count-widget-anchor"},ui.createElement(Ga,{count:l.count,variant:o.playCountVariant,firstPlayedAt:l.firstPlayedAt,periodStreams:l.periodStreams??void 0,periodLabel:l.periodLabel??void 0,showFirstListen:u}))}var ui,li,Ye,Bl,Fl,Za=Mt(()=>{"use strict";Ba();je();cr();Fa();Ua();me();$a();Ya();({React:ui}=Spicetify),{useState:li,useEffect:Ye,useCallback:Bl,useRef:Fl}=ui});var Qa,Xa=Mt(()=>{Qa=`:root {
	--font-size-sm: 12px;
	--font-size-md: 14px;
	--font-size-lg: 20px;
	--font-size-2xl: 28px;

	--line-height-display: 1.2;
	--line-height-heading: 1.2;
	--line-height-label: 1.4;
	--line-height-body: 1.5;

	--space-xs: 4px;
	--space-sm: 8px;
	--space-md: 16px;
	--space-lg: 24px;
	--space-xl: 32px;
	--space-2xl: 48px;

	--rank-gold: #ffd700;
	--rank-silver: #c0c0c0;
	--rank-bronze: #cd7f32;
}

/* Hide Spicetify topbar only when our page is active */
body:has(.stats-page) .main-topBar-container {
	display: none;
}

/* Page shell: flex column fills custom-app height; scroll is on inner so sticky works. */
.stats-page {
	box-sizing: border-box;
	width: 100%;
	max-width: 100%;
	height: 100%;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.stats-page-scroll {
	flex: 1 1 auto;
	min-height: 0;
	overflow-x: clip;
	overflow-y: auto;
	/* No top padding: sticky header must sit flush with scrollport top */
	padding: 0 var(--space-xl, 32px) var(--space-lg, 24px);
	box-sizing: border-box;
}

.stats-page-sticky {
	position: sticky;
	top: 0;
	z-index: 100;
	margin: 0 calc(-1 * var(--space-xl, 32px)) var(--space-md, 16px);
	padding: var(--space-lg, 24px) var(--space-xl, 32px) var(--space-md, 16px);
	/* Frosted glass: translucent theme color + blur keeps scrolled content
	   readable underneath while transparency themes keep their background
	   visible instead of getting an opaque slab. */
	background: rgba(var(--spice-rgb-main, 18, 18, 18), 0.72);
	-webkit-backdrop-filter: blur(16px) saturate(1.4);
	backdrop-filter: blur(16px) saturate(1.4);
	border-bottom: 1px solid rgba(var(--spice-rgb-text, 255 255 255), 0.06);
	box-sizing: border-box;
}

/* Without backdrop-filter a translucent bar would let text scroll straight
   through the header - fall back to the old solid bar. */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
	.stats-page-sticky {
		background: var(--spice-main);
		background-color: rgb(var(--spice-rgb-main));
	}
}

/* Filter Pill */
.filter-pill {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 14px;
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	border-radius: 999px;
	font-size: 13px;
	margin-bottom: var(--space-sm, 8px);
}

.filter-pill-icon {
	display: inline-flex;
	width: 13px;
	height: 13px;
	color: var(--spice-button);
}

.filter-pill-genre {
	color: var(--spice-button);
}

.filter-pill-close {
	appearance: none;
	border: 0;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	color: rgba(var(--spice-rgb-text), 0.7);
	width: 18px;
	height: 18px;
	border-radius: 50%;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	line-height: 1;
	padding: 0;
}

.filter-pill-close:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.18);
	color: var(--spice-text);
}

/* Announcement Banner */
.announcement-banner {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 16px;
	margin-bottom: var(--space-md, 16px);
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.25);
	border-radius: 8px;
}

.announcement-banner-icon {
	color: var(--spice-button);
	width: 20px;
	height: 20px;
	flex-shrink: 0;
}

.announcement-banner-text {
	font-size: 13px;
	color: var(--spice-text);
	flex: 1;
}

.announcement-banner-link {
	color: var(--spice-button);
	font-size: 12px;
	font-weight: 600;
	text-decoration: none;
	white-space: nowrap;
}

button.announcement-banner-link-btn {
	appearance: none;
	margin: 0;
	padding: 0;
	border: none;
	background: transparent;
	font: inherit;
	font-size: 12px;
	font-weight: 600;
	color: var(--spice-button);
	cursor: pointer;
	text-decoration: underline;
	text-underline-offset: 2px;
	white-space: nowrap;
}

button.announcement-banner-link-btn:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.announcement-banner-dismiss {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.5);
	cursor: pointer;
	padding: 4px;
	font-size: 16px;
	line-height: 1;
}

/* Header */
.stats-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-lg, 24px);
	padding: 8px 0 12px;
	flex-wrap: wrap;
}

.stats-header-title {
	margin: 0;
	font-size: 32px;
	font-weight: 800;
	letter-spacing: -0.02em;
	line-height: 1;
	display: flex;
	align-items: center;
	color: var(--spice-text);
}

.stats-header-left {
	display: flex;
	align-items: center;
	gap: 14px;
	min-width: 0;
	flex-wrap: wrap;
	flex: 1 1 420px;
	row-gap: 6px;
}

.header-provider-pill {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.header-provider-name {
	font-size: 12px;
	font-weight: 400;
	color: rgba(var(--spice-rgb-text), 0.7);
	line-height: 1.2;
}

.stats-header-right {
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 0;
	flex: 1 1 340px;
	justify-content: flex-end;
	flex-wrap: wrap;
	row-gap: 8px;
}

.stats-header-icon-btn {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: var(--spice-text);
	width: 36px;
	height: 36px;
	border-radius: 999px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition:
		background 0.15s,
		border-color 0.15s;
	padding: 0;
}

.stats-header-icon-btn:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.stats-header-icon-btn svg {
	width: 20px;
	height: 20px;
}

.loading-status-banner {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	margin: 0 0 12px;
	padding: 8px 12px;
	border-radius: 10px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.78);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.loading-status-dot {
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: var(--spice-button);
	box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.8);
	animation: loading-status-pulse 1.4s ease-out infinite;
}

@keyframes loading-status-pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.6);
	}
	100% {
		box-shadow: 0 0 0 8px rgba(var(--spice-rgb-button), 0);
	}
}

/* Period tabs */
.period-tabs {
	display: flex;
	flex-direction: row;
	gap: var(--space-xs, 4px);
	min-height: 36px;
	align-items: center;
	flex-wrap: wrap;
}

.period-tab {
	cursor: pointer;
	padding: 5px 12px;
	color: rgba(var(--spice-rgb-text), 0.6);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 500;
	transition:
		background 0.15s,
		color 0.15s;
}

.period-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.period-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	font-weight: 600;
}

.overview-card {
	background: var(--spice-card);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	border-radius: 8px;
	padding: 12px 14px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 6px;
	transition:
		background 0.15s,
		border-color 0.15s;
	cursor: default;
}

.overview-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.overview-card-row {
	display: flex;
	align-items: baseline;
	gap: 5px;
}

.overview-card-sub {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.overview-section {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: auto auto;
	gap: var(--space-md, 16px);
	align-items: stretch;
}

.overview-section--compact {
	grid-template-rows: auto;
}
.overview-hero-cell {
	grid-column: 1 / span 3;
	grid-row: 1;
}
.overview-right-block {
	grid-column: 4 / span 2;
	grid-row: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--space-md, 16px);
}
.overview-bottom-row {
	grid-column: 1 / span 5;
	grid-row: 2;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--space-md, 16px);
}

/* Top Genres */
.top-genres-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.top-genres-row {
	display: grid;
	grid-template-columns: 140px 1fr 44px;
	gap: 12px;
	align-items: center;
}

.top-genres-name {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.85);
	text-align: left;
	cursor: pointer;
	font-size: 13px;
	padding: 0;
	font-weight: 500;
	font-family: inherit;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.top-genres-name:hover {
	color: var(--spice-text);
}

.top-genres-name--active {
	color: var(--spice-button);
}

.top-genres-bar-track {
	height: 8px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 4px;
	overflow: hidden;
}

.top-genres-bar {
	height: 8px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-button), 0.4);
	transition: width 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.top-genres-bar.peak {
	background: var(--spice-button);
}

.top-genres-pct {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-variant-numeric: tabular-nums;
	text-align: right;
}

.overview-card-label {
	font-size: 10.5px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.overview-card-value {
	font-size: 22px;
	font-weight: 700;
	letter-spacing: -0.02em;
	line-height: 1;
	color: var(--spice-text);
	font-variant-numeric: tabular-nums;
}

/* Section card wrapper */
.section-card {
	background: var(--spice-card);
	border-radius: 8px;
	padding: 20px;
	overflow: hidden;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	box-sizing: border-box;
}

.stats-page-content {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

/* Top lists grid - 3 columns side by side, responsive */
.top-lists-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: var(--space-md, 16px);
}

@media (max-width: 1200px) {
	.top-lists-grid {
		grid-template-columns: 1fr;
	}

	.overview-card {
		min-width: 80px;
	}
}

@media (max-width: 780px) {
	.overview-section {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
	}
	.overview-hero-cell {
		grid-column: 1;
		grid-row: 1;
	}
	.overview-right-block {
		grid-column: 1;
		grid-row: 2;
		grid-template-columns: 1fr 1fr;
	}
	.overview-bottom-row {
		grid-column: 1;
		grid-row: 3;
		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media (max-width: 600px) {
	.stats-page-scroll {
		padding: 0 var(--space-md, 16px) var(--space-lg, 24px);
	}

	.stats-page-sticky {
		margin: 0 calc(-1 * var(--space-md, 16px)) var(--space-md, 16px);
		padding: var(--space-lg, 24px) var(--space-md, 16px) var(--space-md, 16px);
	}

	.stats-header-title {
		font-size: 22px;
	}

	.stats-header {
		flex-wrap: wrap;
	}

	.overview-card {
		min-width: 70px;
		padding: 12px;
	}

	.period-tabs {
		flex-wrap: wrap;
		height: auto;
		gap: var(--space-xs, 4px);
	}

	.settings-modal {
		width: calc(100vw - 32px);
		max-width: 620px;
	}

	.recently-played-item {
		flex: 0 0 100px;
	}

	.recently-played-art {
		width: 100px;
		height: 100px;
	}

	.overview-right-block,
	.overview-bottom-row {
		grid-template-columns: 1fr 1fr;
	}

	.top-genres-row {
		grid-template-columns: 100px 1fr 36px;
		gap: 8px;
	}
}

/* Section headings */
.section-heading {
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin-bottom: var(--space-md, 16px);
}

.section-kicker {
	font-size: 11px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.section-title {
	margin: 0;
	font-size: var(--font-size-lg, 20px);
	line-height: var(--line-height-heading, 1.2);
	font-weight: 700;
	letter-spacing: -0.01em;
}

.section-header {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	line-height: var(--line-height-heading, 1.2);
	margin: 0 0 var(--space-sm, 8px);
	color: var(--spice-subtext);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

/* Top list rows */
.top-list-row {
	display: flex;
	align-items: center;
	height: 64px;
	box-sizing: border-box;
	padding: 8px 6px;
	cursor: pointer;
	gap: 12px;
	border-radius: 6px;
	transition: background 0.15s;
	overflow: hidden;
}

.top-list-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

/* Rank badges */
.rank-number {
	width: 28px;
	text-align: center;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-subtext);
	flex-shrink: 0;
}

.rank-gold,
.rank-silver,
.rank-bronze {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: #1a1a1a;
	flex-shrink: 0;
}

.rank-gold {
	background: var(--rank-gold, #ffd700);
}
.rank-silver {
	background: var(--rank-silver, #c0c0c0);
}
.rank-bronze {
	background: var(--rank-bronze, #cd7f32);
}

.activity-chart-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
}

.activity-chart-peak {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.activity-chart-peak span {
	color: var(--spice-button);
	font-weight: 700;
}

.activity-chart {
	display: flex;
	align-items: flex-end;
	gap: 2px;
	height: 160px;
	padding: 8px 0;
}

.activity-bar {
	flex: 1;
	background: rgba(var(--spice-rgb-button), 0.4);
	border-radius: 6px 6px 0 0;
	min-width: 4px;
	transition: height 0.2s ease;
	cursor: pointer;
}

.activity-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.7);
}

.activity-bar.peak {
	background: var(--spice-button);
}

.activity-chart-labels {
	display: flex;
	justify-content: space-between;
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.consistency-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 10px;
}

.consistency-metric {
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
}

.consistency-metric-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
}

.consistency-metric-value {
	margin-top: 6px;
	font-size: 24px;
	font-weight: 700;
	line-height: 1;
}

.consistency-metric-sub {
	margin-top: 6px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.62);
}

.consistency-metric--accent {
	border-color: rgba(var(--spice-rgb-button), 0.3);
	background: rgba(var(--spice-rgb-button), 0.06);
}

.consistency-metric--accent .consistency-metric-value {
	color: #1ed760;
}

.consistency-footer {
	margin-top: 12px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
}

.consistency-coverage-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
	margin-bottom: 6px;
}

.consistency-coverage-row {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
}

.consistency-coverage-track {
	flex: 1;
	height: 8px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.15);
	overflow: hidden;
}

.consistency-coverage-fill {
	height: 100%;
	background: var(--spice-button);
}

.consistency-sparkline-bars {
	height: 44px;
	display: flex;
	align-items: flex-end;
	gap: 3px;
}

.consistency-sparkline-bar-wrap {
	flex: 1;
	display: flex;
	align-items: flex-end;
	height: 100%;
	min-height: 44px;
}

.consistency-sparkline-bar {
	width: 100%;
	border-radius: 3px 3px 0 0;
	background: rgba(var(--spice-rgb-button), 0.65);
	transition: background 0.15s ease;
}

.consistency-sparkline-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.85);
}

.consistency-sparkline-bar.peak {
	background: var(--spice-button);
}

.consistency-week-split-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.consistency-week-chip {
	padding: 10px 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.consistency-week-chip strong {
	font-size: 15px;
	color: var(--spice-text);
}

/* Recently played */
.recently-played {
	display: flex;
	gap: 14px;
	overflow-x: auto;
	padding-bottom: 4px;
	margin-right: -24px;
	padding-right: 24px;
}

.recently-played::-webkit-scrollbar {
	display: none;
}

.recently-played-item {
	flex: 0 0 132px;
	width: 132px;
	min-width: 132px;
	max-width: 132px;
	cursor: pointer;
}

.recently-played-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
	object-fit: cover;
	background: var(--spice-main);
}

.recently-played-name {
	margin-top: 8px;
	display: block;
	width: 100%;
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-artist {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-time {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.4);
	margin-top: 2px;
}

/* Loading skeletons */
.skeleton-shimmer {
	background: var(--spice-card);
	animation: shimmer 1.5s infinite;
	border-radius: 4px;
}

@keyframes shimmer {
	0% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.5;
	}
}

.skeleton-text {
	height: 14px;
	margin: 4px 0;
}

/* Recently played skeleton */
.recently-played-skeleton-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
}

.recently-played-skeleton-text {
	width: 100px;
	height: 10px;
	border-radius: 2px;
	margin-top: 8px;
}

.recently-played-skeleton-subtext {
	width: 70px;
	height: 8px;
	border-radius: 2px;
	margin-top: 4px;
}

/* Empty state */
.empty-state {
	text-align: center;
	padding: 48px 16px;
	color: var(--spice-subtext);
}

/* Inline error card */
.inline-error-card {
	display: flex;
	align-items: flex-start;
	gap: 14px;
	padding: 18px 20px;
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.18);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.02);
}

.inline-error-content {
	flex: 1;
	min-width: 0;
}

.inline-error-title {
	font-size: 13px;
	font-weight: 600;
}

.inline-error-body {
	font-size: var(--font-size-sm);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-top: 2px;
}

.inline-error-countdown {
	margin-top: 8px;
	font-size: var(--font-size-sm);
	color: var(--spice-button);
	font-variant-numeric: tabular-nums;
	font-weight: 600;
}

.inline-error-cta {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc), 0.16);
	background: transparent;
	color: var(--spice-text);
	padding: 7px 14px;
	font-size: var(--font-size-sm);
	font-weight: 600;
	border-radius: 999px;
	cursor: pointer;
	flex-shrink: 0;
	align-self: center;
}

/* Settings overlay/modal */
.settings-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.settings-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 620px;
	max-width: calc(100vw - 32px);
	max-height: 80vh;
	overflow-y: auto;
	padding: 24px;
}

.settings-modal.update-modal {
	width: 560px;
	max-height: 85vh;
}

.update-modal-status {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
	margin: 0 0 12px;
	line-height: 1.45;
}

.update-modal-note {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin: 0 0 8px;
	line-height: 1.45;
}

.update-modal-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.update-modal-actions-top {
	margin-bottom: 16px;
}

.update-modal-pref-row {
	margin-bottom: 4px;
}

.update-modal-install-short {
	margin: 8px 0 12px;
}

.update-modal-changelog-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 8px;
	padding-top: 8px;
	border-top: 1px solid var(--spice-misc);
}

.update-modal-changelog-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error, #e83b3b);
	margin: 0 0 8px;
}

.update-modal-changelog {
	max-height: min(40vh, 320px);
	overflow: auto;
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.5;
}

.markdown-lite h3 {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 16px 0 8px;
}

.markdown-lite h3:first-child {
	margin-top: 0;
}

.markdown-lite p {
	margin: 0 0 8px;
}

.markdown-lite code {
	font-family: ui-monospace, monospace;
	font-size: 11px;
	padding: 1px 4px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-text), 0.08);
}

.markdown-lite a {
	color: var(--spice-button);
}

.settings-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.settings-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
}

/* Settings tabs */
.settings-tabs {
	display: flex;
	gap: 8px;
	border-bottom: 1px solid var(--spice-misc);
	margin-bottom: 16px;
}

.settings-tab {
	cursor: pointer;
	padding: 8px 12px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
	white-space: nowrap;
}

.settings-tab:hover {
	color: var(--spice-text);
}

.settings-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Settings rows */
.settings-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 0;
	border-bottom: 1px solid var(--spice-misc);
}

.settings-row:last-child {
	border-bottom: none;
}

.settings-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.settings-sublabel {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 2px;
}

/* Settings groups: kicker header + rows, mirrors the dashboard section anatomy */
.settings-group {
	margin-top: 20px;
}

.settings-group:first-child {
	margin-top: 0;
}

.settings-group > .section-header {
	margin-bottom: 0;
	padding-bottom: 6px;
	border-bottom: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.15);
}

.settings-group .settings-row:last-child {
	border-bottom: none;
}

/* Option group: joined segmented pills for small option sets */
.option-group {
	display: inline-flex;
	flex-wrap: wrap;
	/* Hug the buttons even inside stacked rows (align-items: stretch) */
	width: fit-content;
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	overflow: hidden;
}

.option-group-btn {
	flex: 0 0 auto;
	background: none;
	border: none;
	border-left: 1px solid var(--spice-misc);
	padding: 4px 12px;
	min-width: 36px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s;
}

.option-group-btn:first-child {
	border-left: none;
}

.option-group-btn:hover {
	color: var(--spice-text);
}

.option-group-btn.active {
	background: rgba(var(--spice-rgb-button, 30, 215, 96), 0.2);
	color: var(--spice-text);
	font-weight: 700;
}

/* Text inputs in settings */
.settings-input {
	flex: 1;
	min-width: 0;
	padding: 8px 12px;
	border-radius: 4px;
	border: 1px solid var(--spice-misc);
	background: var(--spice-main);
	color: var(--spice-text);
	font-size: var(--font-size-sm, 14px);
}

.health-dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	display: inline-block;
	flex-shrink: 0;
	cursor: default;
}

.health-green {
	background: #1ed760;
}

.health-yellow {
	background: #f59b23;
}

.health-red {
	background: #e83b3b;
}

/* Legacy settings-btn kept for backwards compatibility */
.settings-btn {
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;
	color: var(--spice-subtext);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition:
		color 0.15s,
		background 0.15s;
	width: 32px;
	height: 32px;
}

.settings-btn:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.settings-btn svg {
	width: 20px;
	height: 20px;
}

/* Primary/destructive buttons */
.btn-primary {
	background: var(--spice-button);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-primary:hover {
	opacity: 0.85;
}

.btn-destructive {
	background: var(--spice-notification-error);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-destructive:hover {
	opacity: 0.85;
}

.btn-secondary {
	background: none;
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
}

.btn-secondary:hover {
	color: var(--spice-text);
	border-color: var(--spice-text);
}

/* Compact action buttons inside settings rows */
.settings-row .btn-primary,
.settings-row .btn-secondary,
.settings-row .btn-destructive {
	padding: 4px 12px;
	font-size: var(--font-size-sm, 12px);
	white-space: nowrap;
}

/* Album art thumbnail */
.track-art {
	width: 44px;
	height: 44px;
	border-radius: 4px;
	object-fit: cover;
	background: var(--spice-card);
	flex-shrink: 0;
}

.track-art--round {
	border-radius: 50%;
}

/* Import progress */
.import-progress {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-progress-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-subtext);
}

.import-progress-bar {
	width: 100%;
	height: 4px;
	-webkit-appearance: none;
	appearance: none;
	border-radius: 2px;
	background: var(--spice-misc);
}

.import-progress-bar::-webkit-progress-bar {
	background: var(--spice-misc);
	border-radius: 2px;
}

.import-progress-bar::-webkit-progress-value {
	background: var(--spice-button);
	border-radius: 2px;
}

/* Import result card */
.import-result-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-result-row {
	display: flex;
	align-items: baseline;
	gap: 4px;
	font-size: var(--font-size-md, 14px);
}

.import-result-count {
	font-weight: 700;
}

.import-result-count--success {
	color: var(--spice-button);
}

.import-result-count--neutral {
	color: var(--spice-subtext);
}

.import-result-count--error {
	color: var(--spice-notification-error);
}

.import-result-label {
	color: var(--spice-subtext);
}

.import-result-errors {
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.import-result-actions {
	margin-top: 8px;
	display: flex;
	justify-content: flex-end;
}

/* Provider tab */

.provider-status-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.tier-badge {
	display: inline-block;
	border-radius: 4px;
	padding: 2px 8px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	line-height: 1.4;
}

.tier-badge--free {
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
}

.tier-badge--plus {
	color: var(--spice-button);
	background: rgba(var(--spice-rgb-button), 0.15);
}

.provider-radio-row {
	display: flex;
	align-items: center;
	min-height: 44px;
	padding: 8px 12px;
	cursor: pointer;
	gap: 12px;
	border-radius: 4px;
	border-left: 2px solid transparent;
	transition: background 0.1s;
}

.provider-radio-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.provider-radio-row.active {
	border-left: 2px solid var(--spice-button);
}

.provider-radio-row.active .settings-label {
	color: var(--spice-text);
}

.provider-connect-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error);
	margin-top: 4px;
}

/* Activity tabs */
.activity-tabs {
	display: flex;
	gap: 0;
	margin-bottom: 12px;
}

.activity-tab {
	cursor: pointer;
	padding: 4px 8px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
	transition: color 0.15s;
}

.activity-tab:hover {
	color: var(--spice-text);
}

.activity-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Weekday chart */
.weekday-chart {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
	height: 160px;
	padding: 8px 0;
}

.weekday-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
}

.weekday-bar-area {
	flex: 1;
	display: flex;
	align-items: flex-end;
	width: 100%;
	min-height: 0;
}

.weekday-bar-area .activity-bar {
	width: 100%;
}

.weekday-label {
	margin-top: 6px;
	font-size: 11px;
	color: var(--spice-subtext);
	text-align: center;
}

/* Calendar heatmap */
.heatmap-container {
	padding-top: 18px;
}

.heatmap-scroll-wrap {
	overflow-x: auto;
}

.heatmap-scroll-inner {
	min-width: min-content;
	width: fit-content;
	margin: 0 auto;
}

.heatmap-shrink .heatmap-scroll-wrap {
	overflow: hidden;
}

.heatmap-shrink .heatmap-scroll-inner {
	min-width: 0;
	width: fit-content;
	margin: 0 auto;
}

.heatmap-month-labels {
	display: grid;
	gap: 3px;
	font-size: 10px;
	color: rgba(var(--spice-rgb-text), 0.5);
	height: 16px;
	margin-bottom: 4px;
}

.heatmap-grid {
	display: grid;
	gap: 3px;
}

.heatmap-week {
	display: grid;
	grid-template-rows: repeat(7, 16px);
	gap: 3px;
}

.heatmap-cell {
	width: 16px;
	height: 16px;
	border-radius: 3px;
}

.heatmap-legend {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	margin-top: 10px;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.heatmap-legend-swatch {
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 3px;
}

/* Streak callout */
.streak-callout {
	margin-top: 14px;
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

/* Setup wizard */
.wizard-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 520px;
	max-width: calc(100vw - 48px);
	padding: 24px;
	text-align: center;
}

.wizard-page {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: var(--space-md, 16px) 0 var(--space-xl, 32px);
}

.wizard-modal--page {
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.wizard-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0 0 8px 0;
	line-height: 1.2;
}

.wizard-subtitle {
	font-size: var(--font-size-md, 14px);
	font-weight: 400;
	color: var(--spice-subtext);
	margin: 0 0 24px 0;
	line-height: 1.5;
}

.wizard-provider-cards {
	display: flex;
	flex-direction: row;
	gap: 16px;
}

.wizard-provider-card {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 24px;
	background: transparent;
	border: 1px solid var(--spice-misc);
	border-radius: 8px;
	cursor: pointer;
	min-height: 44px;
	transition: background 0.1s;
	text-align: center;
	color: inherit;
	font-family: inherit;
}

.wizard-provider-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.wizard-provider-name {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-text);
	line-height: 1.2;
}

.wizard-provider-desc {
	font-size: var(--font-size-sm, 12px);
	font-weight: 400;
	color: var(--spice-subtext);
	line-height: 1.4;
}

.wizard-provider-cta {
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: var(--spice-button);
	margin-top: auto;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.wizard-statsfm-help {
	text-align: left;
	gap: 6px;
	margin-bottom: 14px;
}

.wizard-statsfm-form {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.wizard-statsfm-input {
	width: 100%;
	padding: 10px 12px;
	border-radius: 4px;
	border: 1px solid var(--spice-misc);
	background: var(--spice-main);
	color: var(--spice-text);
	font-size: var(--font-size-md, 14px);
}

.wizard-statsfm-actions {
	display: flex;
	justify-content: space-between;
	gap: 8px;
}

/* Threshold slider */
.threshold-slider {
	padding: 10px 24px 26px;
}

.threshold-slider-rail {
	position: relative;
	height: 28px;
	cursor: pointer;
	touch-action: none;
}

.threshold-slider-track {
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	height: 4px;
	transform: translateY(-50%);
	border-radius: 2px;
	background: var(--spice-card);
	border: 1px solid var(--spice-misc);
}

.threshold-slider-fill {
	position: absolute;
	left: 0;
	top: 50%;
	height: 4px;
	transform: translateY(-50%);
	border-radius: 2px;
	background: var(--spice-button);
	opacity: 0.5;
	pointer-events: none;
}

.threshold-slider-handle {
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	min-width: 40px;
	padding: 3px 6px;
	border-radius: 4px;
	background: var(--spice-button);
	color: var(--spice-main);
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	text-align: center;
	user-select: none;
	cursor: grab;
	z-index: 1;
}

.threshold-slider-handle:active {
	cursor: grabbing;
}

.threshold-slider-presets {
	position: relative;
	height: 16px;
	margin-top: 6px;
}

.threshold-slider-preset {
	position: absolute;
	transform: translateX(-50%);
	background: none;
	border: none;
	padding: 0;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	cursor: pointer;
	user-select: none;
}

.threshold-slider-preset:hover {
	color: var(--spice-text);
}

.threshold-slider-preset.active {
	color: var(--spice-text);
	font-weight: 700;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Settings sortable rows + tiles
   Scoped under .display-tab (DisplayTab root). NEW system does NOT
   restore any torn-down dashboard drag CSS. No portal, no ancestor
   transforms, no edge-scroll. Drop line for rows, outline for tiles.
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.display-tab .sortable-row {
	display: flex;
	align-items: center;
	min-height: 40px;
	padding: 0;
	gap: 8px;
	position: relative;
	user-select: none;
	touch-action: none;
}

.display-tab .sortable-row-label {
	flex: 1 1 auto;
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.display-tab .sortable-row-toggle {
	flex: 0 0 auto;
}

.display-tab .settings-drag-handle {
	flex: 0 0 auto;
	width: 24px;
	height: 24px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	background: transparent;
	border: none;
	cursor: grab;
	color: var(--spice-subtext);
	border-radius: 4px;
}
.display-tab .settings-drag-handle:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 128, 128, 128), 0.12);
}
.display-tab .settings-drag-handle:active {
	cursor: grabbing;
}

/* Drop-slot indicator line between rows (Decision 5).
   At rest (no active drag in this list): invisible.
   During an active drag in the list (parent has data-drag-active="true"):
   ALL drop-lines show subtle (opacity 0.25) so user can see every drop slot.
   The targeted slot's line glows full opacity + box-shadow. */
.display-tab .settings-drop-line {
	height: 2px;
	margin: 0;
	background: var(--spice-button-active);
	opacity: 0;
	transition:
		opacity 100ms ease,
		box-shadow 100ms ease;
	pointer-events: none;
}
.display-tab [data-drag-active="true"] .settings-drop-line {
	opacity: 0.25;
}
.display-tab [data-drag-active="true"] .settings-drop-line[data-active="true"] {
	opacity: 1;
	box-shadow: 0 0 6px var(--spice-button-active);
}

/* Mini-grid tiles (Overview 2x2, Top Lists 1x3).
   overflow: hidden clips the dragged tile's translate3d so it can't escape
   the modal; drop logic uses live pointer position so reorder still works
   when the visible tile is clipped at the container edge. */
.display-tab .sortable-grid {
	display: grid;
	gap: 8px;
	margin-top: 8px;
	overflow: hidden;
}
.display-tab .sortable-grid--2x2 {
	grid-template-columns: 1fr 1fr;
}
.display-tab .sortable-grid--1x3 {
	grid-template-columns: 1fr 1fr 1fr;
}

/* Overview settings: mirrors actual overview layout (hero + 2x2 right block + 1x3 bottom row) */
.display-tab .overview-settings-top {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 8px;
	margin-top: 8px;
}
.display-tab .overview-settings-top .sortable-grid {
	margin-top: 0;
}
.display-tab .overview-settings-hero {
	border: 1px dashed var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	opacity: 0.6;
}
.display-tab .overview-settings-hero-sub {
	font-size: 10px;
	opacity: 0.5;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.display-tab .sortable-tile {
	min-height: 80px;
	padding: 12px;
	border: 1px solid var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	cursor: grab;
	user-select: none;
	touch-action: none;
	position: relative;
}
.display-tab .sortable-tile:active {
	cursor: grabbing;
}

.display-tab .sortable-tile-label {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-text);
	text-align: center;
}

.display-tab .sortable-tile-toggle {
	/* Stops drag activation; cursor reverts to default for this hit zone. */
	cursor: default;
}

/* Tile drop target outline (Decision 5, inset so grid does not shift) */
.display-tab .sortable-tile[data-drop-target="true"] {
	outline: 2px solid var(--spice-button-active);
	outline-offset: -2px;
}

.play-count-widget-anchor {
	display: flex;
	align-items: center;
	pointer-events: auto;
	margin-left: 8px;
	flex-shrink: 0;
}

.play-count-pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-button), 0.14);
	color: var(--spice-button);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	font-size: 11px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-pill:hover {
	background: rgba(var(--spice-rgb-button), 0.22);
}

.play-count-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--spice-button);
}

.play-count-bubble {
	position: relative;
	cursor: pointer;
}
.play-count-bubble-icon {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background: rgba(var(--spice-rgb-button), 0.28);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--spice-button);
	font-size: 12px;
	box-shadow:
		0 0 0 1px rgba(var(--spice-rgb-button), 0.45),
		inset 0 1px 0 rgba(255, 255, 255, 0.12);
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.45);
}
.play-count-badge {
	position: absolute;
	top: -3px;
	right: -4px;
	min-width: 18px;
	height: 18px;
	padding: 0 4px;
	background: var(--spice-button);
	color: #000;
	border-radius: 999px;
	font-size: 10px;
	font-weight: 800;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #000;
	font-variant-numeric: tabular-nums;
}

.play-count-minimal {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: rgba(255, 255, 255, 0.7);
	font-size: 11px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	padding: 3px 7px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.06);
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-minimal:hover {
	background: rgba(255, 255, 255, 0.1);
}

.play-count-badge--new {
	font-size: 8px;
	letter-spacing: 0.04em;
	padding: 0 3px;
	min-width: 22px;
}

.play-count-pill--first {
	color: rgba(var(--spice-rgb-text), 0.92);
	border-color: rgba(var(--spice-rgb-button), 0.35);
}

.world-chart-text {
	flex: 1;
	min-width: 0;
}

.world-chart-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-sub {
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-stats {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 2px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	flex-shrink: 0;
	min-width: 52px;
}

.world-stage-skeleton {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

/* World: podium card (hero-accented) + Top-15 ladder card */
.world-podium-card {
	background:
		radial-gradient(120% 140% at 0% 0%, rgba(var(--spice-rgb-button), 0.14), transparent 52%), var(--spice-card);
	border-color: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
}

.world-stage-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-md, 16px);
	flex-wrap: wrap;
}

.world-stage-skeleton {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

.world-podium {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: end;
	justify-items: center;
	gap: var(--space-md, 16px);
	padding: var(--space-md, 16px) 0 var(--space-sm, 8px);
}

.world-podium-cell {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	min-width: 0;
	max-width: 220px;
	gap: 4px;
}

.world-podium-artwrap {
	position: relative;
	transition: transform 0.15s ease-out;
}

.world-podium-artwrap:hover {
	transform: translateY(-2px);
}

.world-podium-art-btn {
	appearance: none;
	border: 0;
	padding: 0;
	background: transparent;
	cursor: pointer;
	border-radius: 10px;
	display: block;
}

.world-podium-art-btn:focus-visible {
	outline: 2px solid rgba(var(--spice-rgb-button), 0.7);
	outline-offset: 2px;
}

.world-podium-play {
	position: absolute;
	right: 6px;
	bottom: 6px;
	opacity: 0;
	transition: opacity 0.15s;
}

.world-podium-artwrap:hover .world-podium-play,
.world-podium-artwrap:focus-within .world-podium-play {
	opacity: 1;
}

.world-podium-rank {
	font-size: 18px;
	font-weight: 800;
	line-height: 1;
	margin-top: 6px;
	font-variant-numeric: tabular-nums;
}

.world-podium-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-podium-cell[data-rank="1"] .world-podium-title {
	font-size: 16px;
}

.world-podium-sub {
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-podium-stat {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	color: rgba(var(--spice-rgb-text), 0.72);
}

.world-ladder {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(6, auto);
	grid-auto-flow: column;
	column-gap: var(--space-xl, 32px);
	row-gap: 0;
}

@media (max-width: 1100px) {
	.world-ladder {
		grid-template-columns: 1fr;
		grid-template-rows: none;
		grid-auto-flow: row;
	}
}

@media (max-width: 780px) {
	.world-podium {
		gap: var(--space-sm, 8px);
	}

	.world-podium-cell {
		max-width: 160px;
	}
}

.world-page-header {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: var(--space-md, 16px);
	flex-wrap: wrap;
	margin-bottom: 0;
}

.world-page-header .section-title {
	font-size: var(--font-size-2xl, 28px);
}

.world-chart-indicator {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 11px;
	font-weight: 600;
}

.world-chart-indicator-glyph {
	font-size: 9px;
}

.world-chart-indicator[data-dir="up"] {
	color: #1ed760;
}

.world-chart-indicator[data-dir="down"] {
	color: #e83b3b;
}

.world-chart-indicator[data-dir="new"] {
	color: #f59b23;
}

.world-chart-playbtn {
	appearance: none;
	border: 0;
	cursor: pointer;
	font: inherit;
	background: var(--spice-button);
	color: var(--spice-button-text, #000);
	border-radius: 999px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	transition:
		transform 0.1s,
		background 0.15s;
}

.world-chart-playbtn:hover {
	background: var(--spice-button-active, var(--spice-button));
	transform: scale(1.06);
}

@media (max-width: 780px) {
	.world-page-header {
		flex-direction: column;
		align-items: flex-start;
	}
}

.world-charts-source {
	margin-top: var(--space-md, 16px);
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.45);
}

.world-charts-empty {
	text-align: center;
	padding: var(--space-2xl, 48px) var(--space-lg, 24px);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.03);
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.12);
}

.world-charts-empty-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin-bottom: var(--space-sm, 8px);
}

.world-charts-empty-body {
	font-size: var(--font-size-md, 14px);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-bottom: var(--space-md, 16px);
	max-width: 320px;
	margin-inline: auto;
}

.tour-overlay {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.55);
}

.tour-overlay--targeted {
	background: transparent;
	pointer-events: none;
}

.tour-spotlight {
	pointer-events: none;
	border: 2px solid var(--spice-button);
	animation: tour-pulse 1.8s ease-in-out infinite;
}

@keyframes tour-pulse {
	0%,
	100% {
		border-color: var(--spice-button);
	}
	50% {
		border-color: rgba(255, 255, 255, 0.4);
	}
}

.tour-popover {
	width: 280px;
	max-width: calc(100vw - 16px);
	padding: 14px;
	background: #1f1f1f;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
	text-align: left;
	pointer-events: auto;
}

.tour-popover--positioned {
	position: fixed;
}

.tour-step-counter {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--spice-button);
	margin-bottom: 4px;
}

.tour-label {
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	margin-bottom: 4px;
}

.tour-text {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.65);
	line-height: 1.5;
}

.tour-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 14px;
}

.tour-btn-skip,
.tour-btn-back {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(255, 255, 255, 0.5);
	font-size: 12px;
	cursor: pointer;
	padding: 0;
}

.tour-btn-next {
	appearance: none;
	border: 0;
	background: var(--spice-button);
	color: #000;
	font-size: 12px;
	font-weight: 700;
	padding: 5px 12px;
	border-radius: 999px;
	cursor: pointer;
}

.tour-dots {
	display: flex;
	gap: 4px;
}

.tour-dot {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.2);
}

.tour-dot.active {
	background: var(--spice-button);
}

.share-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.share-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: min(720px, calc(100vw - 48px));
	max-width: calc(100vw - 48px);
	max-height: 90vh;
	overflow-y: auto;
	padding: 24px;
}

.share-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.share-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0;
}

.share-tabs-row {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
}

.share-control-group {
	margin-bottom: 12px;
}

.share-control-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.55);
	margin-bottom: 6px;
}

.share-control-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin: 6px 0 12px;
}

.share-variant-tab,
.share-size-tab {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 5px 12px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s,
		border-color 0.15s;
}

.share-variant-tab:hover,
.share-size-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.share-variant-tab.active,
.share-size-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-color: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.2);
}

.share-size-tab:disabled {
	opacity: 0.35;
	cursor: not-allowed;
	pointer-events: none;
}

.share-preview-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: min(58vh, 640px);
	min-height: 320px;
	overflow: auto;
	padding: 16px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-main), 0.3);
}

.share-preview-image {
	max-width: 100%;
	max-height: min(54vh, 600px);
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 10px;
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.share-preview-status {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

.share-actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	margin-top: 12px;
}

.share-action-btn {
	min-width: 140px;
}

/* App footer */
.stats-app-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: var(--space-sm, 8px);
	margin-top: var(--space-xl, 32px);
	padding-top: var(--space-md, 16px);
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
}

.stats-app-footer-links {
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	gap: var(--space-sm, 8px);
}

.stats-app-footer-link {
	color: var(--spice-button);
	font-weight: 600;
	text-decoration: none;
}

.stats-app-footer-link:hover {
	color: var(--spice-button-active, var(--spice-button));
	text-decoration: underline;
	text-underline-offset: 2px;
}

.stats-app-footer-credit {
	font-style: italic;
}

.stats-app-footer-meta {
	display: inline-flex;
	align-items: center;
	gap: 12px;
}

.stats-app-footer-version {
	font-variant-numeric: tabular-nums;
	color: rgba(var(--spice-rgb-text), 0.45);
}

.stats-app-footer-install-link {
	appearance: none;
	border: none;
	background: none;
	cursor: pointer;
	padding: 0;
	font: inherit;
	color: var(--spice-button);
	font-weight: 600;
	text-decoration: underline;
	text-underline-offset: 2px;
}

.stats-app-footer-install-link:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.update-modal-repo-hint {
	margin-bottom: 0;
}

.settings-about-command-block {
	margin-bottom: 14px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: rgba(var(--spice-rgb-main), 0.35);
	overflow: hidden;
}

.settings-about-command-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	padding: 8px 10px;
	border-bottom: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.settings-about-command-label {
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	color: var(--spice-subtext);
}

.settings-about-copy-btn {
	flex-shrink: 0;
	padding: 4px 12px;
	font-size: 12px;
}

.settings-about-command-pre {
	margin: 0;
	padding: 12px;
	font-family: ui-monospace, monospace;
	font-size: 11px;
	line-height: 1.45;
	color: rgba(var(--spice-rgb-text), 0.92);
	white-space: pre-wrap;
	word-break: break-all;
	max-height: 120px;
	overflow: auto;
}

.settings-about-hint {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 16px;
	line-height: 1.5;
}

.settings-inline-link {
	color: var(--spice-button);
}
`});function Ja(){let l=document.getElementById("listening-stats-styles");l&&l.remove();let o=document.createElement("style");o.id="listening-stats-styles",o.textContent=Qa,document.head.appendChild(o)}var qa=Mt(()=>{"use strict";Xa()});var ro={};zs(ro,{findPlaybarMount:()=>eo,mountPlaybarWidget:()=>Vl});function eo(){for(let l of Hl){let o=document.querySelector(l);if(o)return o}return null}function jl(l){let o=()=>{if(l.isConnected&&l.parentElement!==document.body)return;let f=eo();f&&l.parentElement!==f&&f.appendChild(l)};o(),new MutationObserver(o).observe(document.body,{childList:!0,subtree:!0}),setInterval(o,2e3)}function Vl(){if(document.getElementById(to))return;Ja();let l=document.createElement("div");l.id=to,l.style.display="contents",document.body.appendChild(l),jl(l);let o=Spicetify.React.createElement(qr,{silent:!0},Spicetify.React.createElement(Wa)),u=Spicetify.ReactDOM;typeof u.createRoot=="function"?u.createRoot(l).render(o):u.render?.(o,l)}var to,Hl,no=Mt(()=>{"use strict";Oa();Za();qa();to="listening-stats-widget-root",Hl=[".main-nowPlayingWidget-nowPlaying",".main-nowPlayingBar-left",'[data-testid="now-playing-widget"]']});me();function Ht(l){let o=new Date(l);return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`}function oe(l){if(l==null)return;let o=String(l).trim();if(o){if(/^spotify:image:/i.test(o)){let u=o.replace(/^spotify:image:/i,"").trim();return u?`https://i.scdn.co/image/${u}`:void 0}return o}}var Gn=class{constructor(o=300*1e3){this.store=new Map;this.ttlMs=o}get(o){let u=this.store.get(o);return!u||Date.now()>u.expiry?null:u.data}getStale(o){let u=this.store.get(o);return u?u.data:null}set(o,u){this.store.set(o,{data:u,expiry:Date.now()+this.ttlMs})}invalidate(o){o!==void 0?this.store.delete(o):this.store.clear()}},Hr=new Gn;var lr=class{constructor(){this.state="closed";this.failureCount=0;this.openedAt=null;this.extraCooldownMs=0}isOpen(){if(this.state==="open"){let o=Date.now()-(this.openedAt??0),u=3e4+this.extraCooldownMs;return o>=u?(this.state="half-open",!1):!0}return!1}recordSuccess(){this.failureCount=0,this.state="closed",this.openedAt=null,this.extraCooldownMs=0}recordFailure(o){if(this.state==="half-open"){this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=o?o*1e3:0;return}this.failureCount+=1,this.failureCount>=3&&(this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=o?o*1e3:0)}reset(){this.recordSuccess()}getResetAt(){return this.state!=="open"||this.openedAt===null?null:this.openedAt+3e4+this.extraCooldownMs}getState(){return this.state}},He=new lr;async function qi(l){let o=Hr.get(l);if(o!==null)return{ok:!0,data:o};if(He.isOpen()){let u=Hr.getStale(l);return u!==null?{ok:!0,data:u,stale:!0}:{ok:!1,error:{type:"circuit_open"}}}try{let u=await Spicetify.CosmosAsync.request("GET",l);if(u.status===429){let y=u.headers?.["retry-after"]??u.headers?.["Retry-After"]??"5",b=Number(y)||5;return He.recordFailure(b),{ok:!1,error:{type:"rate_limited",retryAfter:b}}}if(u.status<200||u.status>=300)return He.recordFailure(),{ok:!1,error:{type:"http_error",status:u.status}};He.recordSuccess();let f=u.body;return Hr.set(l,f),{ok:!0,data:f}}catch(u){return He.recordFailure(),{ok:!1,error:{type:"network_error",message:String(u)}}}}me();var ta=50,Fs=1440*60*1e3,Ls=360*60*1e3;function Yn(l){return/^spotify:artist:[a-zA-Z0-9]+$/i.test(l.trim())}function Us(l,o){let u=o-l.updatedAt;return l.imageUrl?.trim()?u<Fs:u<Ls}async function ea(l){if(l.length===0)return;let o=[...new Set(l.filter(Yn))];if(o.length===0)return;let u=Date.now(),f=await q.artists.where("uri").anyOf(o).toArray(),y=new Set(f.filter(E=>Us(E,u)).map(E=>E.uri)),b=o.filter(E=>!y.has(E));if(b.length!==0)for(let E=0;E<b.length;E+=ta){let K=b.slice(E,E+ta),I=K.map(ot=>ot.replace(/^spotify:artist:/i,"")).join(","),X=await qi(`https://api.spotify.com/v1/artists?ids=${I}`);if(!X.ok)continue;let W=[],tt=X.data.artists??[];for(let ot=0;ot<K.length;ot++){let ut=K[ot],it=tt[ot];if(it){let St=it.images[0]?.url??null;W.push({uri:`spotify:artist:${it.id}`,name:it.name,genres:it.genres??[],imageUrl:oe(St)??St,updatedAt:Date.now()})}else W.push({uri:ut,name:"Unknown",genres:[],imageUrl:null,updatedAt:Date.now()})}W.length>0&&await q.artists.bulkPut(W)}}cr();Nt();function oa(){return localStorage.getItem(Z.RANK_MODE)==="minutes"?"minutes":"streams"}je();var Ys=120*1e3,Wn=class{constructor(){this.store=new Map;this.invalidationListenerAttached=!1}get(o){let u=this.store.get(o);return u?Date.now()>=u.expiry?(this.store.delete(o),null):u.data:null}set(o,u){this.store.set(o,{data:u,expiry:Date.now()+Ys})}invalidate(o){o!==void 0?this.store.delete(o):this.store.clear()}setupInvalidationListeners(){this.invalidationListenerAttached||(this.invalidationListenerAttached=!0,window.addEventListener(ht.PLAY_RECORDED,()=>{this.invalidate()}))}},se=new Wn;var Ws="local",Zs=12,Xs=400;async function Qs(l){let o=[...new Set(l.topArtists.map(y=>y.artistUri).filter(Yn))];if(o.length===0)return;let u=await q.artists.where("uri").anyOf(o).toArray(),f=new Map(u.map(y=>[y.uri,y]));for(let y of l.topArtists){let b=f.get(y.artistUri),E=oe(b?.imageUrl??void 0)??b?.imageUrl;E?.trim()&&!y.imageUrl?.trim()&&(y.imageUrl=E)}}function Zn(l){if(l.type==="skip")return!1;let o=l.trackUri??"";return!(o.startsWith("spotify:narration:")||o.startsWith("spotify:ad:")||o.startsWith("spotify:interruption:"))}function Xn(l){return l.artistUri||`local:artist:${l.artistName.toLowerCase()}`}function Js(l){return l.albumUri||`local:album:${l.artistName.toLowerCase()}:${l.albumName.toLowerCase()}`}function qs(l,o){return`${Ws}:${l}:${o}`}function Qn(l){return(o,u)=>l==="minutes"?u.durationMs-o.durationMs||u.count-o.count:u.count-o.count||u.durationMs-o.durationMs}function sa(l){return new Date(l.getFullYear(),l.getMonth(),l.getDate()-1)}function tl(l){if(l.length===0)return 0;let o=new Set(l.map(E=>Ht(E.startedAt))),u=new Date,f=new Date(u.getFullYear(),u.getMonth(),u.getDate()),y=Ht(f.getTime());if(!o.has(y)){f=sa(f);let E=Ht(f.getTime());if(!o.has(E))return 0}let b=0;for(;o.has(Ht(f.getTime()));)b++,f=sa(f);return b}var Jn=class{getProviderInfo(){return{id:"local",name:"Local",description:"Stats from locally tracked plays",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return Ne}async calculateStats(o){let u=oa(),f=qs(o.id,u),y=se.get(f);if(y)return await Qs(y),y;let{start:b,end:E}=o.getBoundaries(),K=E===Number.MAX_SAFE_INTEGER?await q.playEvents.toArray():await q.playEvents.where("startedAt").between(b,E).toArray(),I=K.filter(Zn),X=ur(o),W,tt;if(X){let j=(await q.playEvents.where("startedAt").between(X.start,X.end).toArray()).filter(Zn),xt=new Set(I.map(Xn));if(j.length>0){let _t=new Set(j.map(Xn)),Et=0;for(let R of xt)_t.has(R)||Et++;W=Et,tt=j.reduce((R,et)=>R+et.playedMs,0)}else W=xt.size}else W=0;let ot=Date.now()-Xs*24*60*60*1e3,it=(await q.playEvents.where("startedAt").above(ot).toArray()).filter(Zn),St=tl(it),zt=new Map,Bt=new Map,Rt=new Map;for(let D of I){let j=zt.get(D.trackUri);j?(j.count++,j.durationMs+=D.playedMs):zt.set(D.trackUri,{trackUri:D.trackUri,trackName:D.trackName,artistName:D.artistName,artistUri:D.artistUri,albumName:D.albumName,albumUri:D.albumUri,albumArt:oe(D.albumArt),count:1,durationMs:D.playedMs});let xt=Xn(D),_t=Bt.get(xt);_t?(_t.count++,_t.durationMs+=D.playedMs):Bt.set(xt,{name:D.artistName,uri:D.artistUri,count:1,durationMs:D.playedMs});let Et=Js(D),R=Rt.get(Et);R?(R.count++,R.durationMs+=D.playedMs):Rt.set(Et,{name:D.albumName,uri:D.albumUri,artistName:D.artistName,albumArt:oe(D.albumArt),count:1,durationMs:D.playedMs})}let re=Array.from(zt.values()).sort(Qn(u)).map((D,j)=>({rank:j+1,...D})),It=Array.from(Bt.values()).sort(Qn(u)).map((D,j)=>({rank:j+1,artistUri:D.uri,artistName:D.name,count:D.count,durationMs:D.durationMs})),Ft=Array.from(Rt.values()).sort(Qn(u)).map((D,j)=>({rank:j+1,albumUri:D.uri,albumName:D.name,artistName:D.artistName,albumArt:D.albumArt,count:D.count,durationMs:D.durationMs})),lt=[...I].sort((D,j)=>j.startedAt-D.startedAt).slice(0,Zs).map(D=>({trackUri:D.trackUri,trackName:D.trackName,artistName:D.artistName,albumArt:oe(D.albumArt),playedAt:D.startedAt})),pt=I.reduce((D,j)=>D+j.playedMs,0),ne=I.length>0?new Set(I.map(D=>Ht(D.startedAt))).size:0,Lt=new Array(24).fill(0);for(let D of I){let j=new Date(D.startedAt).getHours();Lt[j]++}let Gt=I.length>0?Lt.indexOf(Math.max(...Lt)):0,Kt=new Array(7).fill(0);for(let D of I){let j=new Date(D.startedAt).getDay(),xt=j===0?6:j-1;Kt[xt]++}let gt=I.length>0?Kt.indexOf(Math.max(...Kt)):0,Yt=new Map;for(let D of it){let j=Ht(D.startedAt);Yt.set(j,(Yt.get(j)??0)+1)}let Jt=Array.from(Yt.entries()).map(([D,j])=>({date:D,count:j})).sort((D,j)=>D.date.localeCompare(j.date)),dt=K.filter(D=>D.type==="skip").length,vt=K.length,qt=vt>0?dt/vt:0,ue=zt.size,Wt=Bt.size,yt=It.map(D=>D.artistUri);await ea(yt);let kt=await q.artists.where("uri").anyOf(yt).toArray(),Ct=new Map(kt.map(D=>[D.uri,D]));for(let D of It){let j=Ct.get(D.artistUri);j&&(D.genres=j.genres,D.imageUrl=oe(j.imageUrl??void 0)??j.imageUrl??void 0)}let bt=new Map;for(let D of kt)for(let j of D.genres)bt.set(j,(bt.get(j)??0)+1);let Pt=Array.from(bt.entries()).sort((D,j)=>j[1]-D[1]).map(([D,j],xt)=>({rank:xt+1,genre:D,count:j})),ce={topTracks:re,topArtists:It,topAlbums:Ft,topGenres:Pt,totalPlays:I.length,totalDuration:pt,listeningDays:ne,recentPlays:lt,hourlyDistribution:Lt,peakHour:Gt,skipRate:qt,uniqueTrackCount:ue,uniqueArtistCount:Wt,streak:St,weekdayDistribution:Kt,peakWeekday:gt,dailyPlayCounts:Jt,newArtistCount:W,priorPeriodTotalDuration:tt};se.set(f,ce);let ie=aa(o.id);return ie&&this.calculateStats(ie).catch(()=>{}),ce}async calculateStatsProgressive(o,u){let f=await this.calculateStats(o);return u(f,1),u(f,2),u(f,3),f}async init(){se.setupInvalidationListeners()}destroy(){se.invalidate()}},la=new Jn;je();Nt();var el="https://api.stats.fm/api/v1",Se=new lr;function qn(){try{let l=localStorage.getItem(Z.STATSFM_HEALTH);if(l)return JSON.parse(l).lastSuccessAt}catch{}return null}function jr(l){try{localStorage.setItem(Z.STATSFM_HEALTH,JSON.stringify(l))}catch{}window.dispatchEvent(new CustomEvent(ht.STATSFM_HEALTH_CHANGED,{detail:l}))}async function ft(l,o){if(Se.isOpen())return jr({lastFetchAt:Date.now(),lastSuccessAt:qn(),lastError:"Circuit open  -  stats.fm temporarily unavailable",circuitOpen:!0}),{ok:!1,status:0,message:"Circuit open  -  stats.fm temporarily unavailable"};let u=new URL(`${el}${l}`);if(o)for(let[b,E]of Object.entries(o))u.searchParams.set(b,E);localStorage.getItem(Z.LOGGING)==="true"&&console.debug("[statsfm]",u.toString());let f=new AbortController,y=setTimeout(()=>f.abort(),1e4);try{let b=await fetch(u.toString(),{headers:{Accept:"application/json"},signal:f.signal});if(clearTimeout(y),!b.ok)return Se.recordFailure(),jr({lastFetchAt:Date.now(),lastSuccessAt:qn(),lastError:`HTTP ${b.status}`,circuitOpen:Se.isOpen()}),{ok:!1,status:b.status,message:`HTTP ${b.status}`};let E=await b.json();return Se.recordSuccess(),jr({lastFetchAt:Date.now(),lastSuccessAt:Date.now(),lastError:null,circuitOpen:!1}),{ok:!0,data:E.item??E.items}}catch(b){clearTimeout(y),Se.recordFailure();let E=(b instanceof Error||b instanceof DOMException)&&b.name==="AbortError"?"Request timed out after 10s":String(b);return jr({lastFetchAt:Date.now(),lastSuccessAt:qn(),lastError:E,circuitOpen:Se.isOpen()}),(b instanceof Error||b instanceof DOMException)&&b.name==="AbortError"?{ok:!1,status:0,message:"Request timed out after 10s"}:{ok:!1,status:0,message:String(b)}}}async function ua(l){let o=await ft(`/users/${encodeURIComponent(l)}`);return o.ok?{valid:!0,isPlus:o.data.isPlus,displayName:o.data.displayName}:o.status===404?{valid:!1,reason:"not_found"}:o.status===403?{valid:!1,reason:"private"}:o.status===0&&o.message.includes("Circuit open")?{valid:!1,reason:"circuit_open"}:{valid:!1,reason:"network"}}Nt();var Vr=class extends Error{constructor(o){super(o.message),this.name="ClassifiedError",this.appError=o}};function ti(l,o,u){return l===404?{variant:"UserNotFound",message:o,retryable:!1}:l===429||l===0&&o.includes("Circuit open")?{variant:"RateLimited",message:o,retryable:!1,resetAt:u}:l>=500&&l<=599?{variant:"ServiceDown",message:o,retryable:!0}:l===0?{variant:"NetworkError",message:o,retryable:!0}:{variant:"Unknown",message:o,retryable:!0}}cr();var rl="statsfm",nl=1440*60*1e3;function Ve(l){let o=new Date(l);return Number.isFinite(o.getTime())?`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`:l.slice(0,10)}function ca(l){let o=new Set(Object.entries(l).filter(([,E])=>E.count>0).map(([E])=>Ve(E)).filter(E=>E.length===10));if(o.size===0)return 0;let u=new Date,f=new Date(u.getFullYear(),u.getMonth(),u.getDate()),y=Ve(f.toISOString());if(!o.has(y)&&(f.setDate(f.getDate()-1),!o.has(Ve(f.toISOString()))))return 0;let b=0;for(;o.has(Ve(f.toISOString()));)b++,f.setDate(f.getDate()-1);return b}function jt(l,o){if(l)return l.startsWith("spotify:")?l:`spotify:${o}:${l}`}function pa(l){return`${rl}:${l}`}function Qt(l){return l.status==="fulfilled"&&l.value.ok?l.value.data:null}function $r(l){return l.status==="fulfilled"&&!l.value.ok?{status:l.value.status,message:l.value.message}:l.status==="rejected"?{status:0,message:String(l.reason)}:null}function il(l){let o=new Map;for(let y of l)for(let b of y.artist.genres)o.set(b,(o.get(b)??0)+ +(y.streams??0));if([...o.values()].some(y=>y>0))return Array.from(o.entries()).sort((y,b)=>b[1]-y[1]).map(([y,b],E)=>({rank:E+1,genre:y,count:b}));let f=new Map;for(let y of l)for(let b of y.artist.genres)f.set(b,(f.get(b)??0)+1);return Array.from(f.entries()).sort((y,b)=>b[1]-y[1]).map(([y,b],E)=>({rank:E+1,genre:y,count:b}))}function da(l,o){let u=l??[];if(u.length>0){let f=[...u].sort((b,E)=>E.streams-b.streams).map((b,E)=>({rank:E+1,genre:b.genre.tag,count:+(b.streams??0)}));if(f.reduce((b,E)=>b+E.count,0)>0)return f}return il(o)}function fa(l){let o=new Map;for(let u of l){let f=u.track.albums[0];if(!f)continue;let y=f.name,b=o.get(y),E=u.track.artists[0]?.name??"",K=jt(f.externalIds?.spotify?.[0],"album")??"",I=u.streams??0;b?b.streams+=I:o.set(y,{albumName:f.name,artistName:E,albumArt:f.image,albumUri:K,streams:I})}return Array.from(o.values()).sort((u,f)=>f.streams-u.streams).map((u,f)=>({rank:f+1,albumUri:u.albumUri||`listening-stats:album:${u.albumName}${u.artistName}`,albumName:u.albumName,artistName:u.artistName,albumArt:u.albumArt,count:u.streams,durationMs:0}))}var ei=class{constructor(){this.config=null}getProviderInfo(){return{id:"statsfm",name:"stats.fm",description:"Stats from stats.fm",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!1,hasSkipRate:!1,tier:this.config?.isPlus??!1?"plus":"free"}}}getSupportedPeriods(){return this.config?.isPlus?ia:ze}async calculateStats(o){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let u=pa(o.id),f=se.get(u);if(f)return f;let b={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[o.id];if(!b)throw new Error(`Unknown stats.fm period: ${o.id}`);let E={range:b},K=encodeURIComponent(this.config.username),I=this.config.isPlus,X=Intl.DateTimeFormat().resolvedOptions().timeZone,W=ur(o),tt=W?ft(`/users/${K}/top/artists`,{after:String(W.start),before:String(W.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),[ot,ut,it,St,zt,Bt,Rt,re,It]=await Promise.allSettled([ft(`/users/${K}/top/tracks`,E),ft(`/users/${K}/top/artists`,E),ft(`/users/${K}/top/genres`,E),ft(`/users/${K}/streams/stats`,E),ft(`/users/${K}/streams/recent`,{limit:"12"}),I?ft(`/users/${K}/top/albums`,E):Promise.resolve({ok:!1,status:0,message:"skipped"}),ft(`/users/${K}/streams/stats/per-day`,{range:"lifetime",timeZone:X}),ft(`/users/${K}/streams/stats/dates`,{range:b,timeZone:X}),tt]),Ft=$r(ot),le=$r(ut),lt=$r(St);if(Ft&&le&&lt){let R=Se.getResetAt()??void 0;throw new Vr(ti(Ft.status,Ft.message,R))}let pt=Qt(ot)??[],ne=Qt(ut)??[],Lt=Qt(it)??[],Gt=Qt(It)??[],Kt=0;if(W){let R=new Set(ne.map(et=>et.artist.externalIds?.spotify?.[0]).filter(et=>!!et));if(Gt.length>0){let et=new Set(Gt.map(B=>B.artist.externalIds?.spotify?.[0]).filter(B=>!!B)),U=0;for(let B of R)et.has(B)||U++;Kt=U}else Kt=R.size}let gt=Qt(St),Yt=Qt(zt)??[],Jt=Qt(Bt)??[],dt=Qt(Rt),vt=dt?.days?Object.values(dt.days).filter(R=>R.count>0).length:void 0,qt=dt?.days?ca(dt.days):0,ue=dt?.days?Object.entries(dt.days).map(([R,et])=>({date:Ve(R),count:et.count})).sort((R,et)=>R.date.localeCompare(et.date)):void 0,Wt;if(W&&dt?.days){let R=0;for(let[et,U]of Object.entries(dt.days)){let B=new Date(et).getTime();Number.isFinite(B)&&B>=W.start&&B<W.end&&(R+=U.durationMs)}R>0&&(Wt=R)}let yt=Qt(re),kt=new Array(24).fill(0);if(yt?.hours)for(let[R,et]of Object.entries(yt.hours)){let U=Number(R);U>=0&&U<24&&(kt[U]=et.count)}let Ct=kt.reduce((R,et,U,B)=>et>B[R]?U:R,0),bt,Pt;if(yt!=null&&(Object.keys(yt.hours??{}).length>0||Object.keys(yt.weekDays??{}).length>0)&&yt?.weekDays){bt=new Array(7).fill(0);for(let[R,et]of Object.entries(yt.weekDays)){let U=Number(R)-1;U>=0&&U<7&&(bt[U]=et.count)}Pt=bt.reduce((R,et,U,B)=>et>B[R]?U:R,0)}let ie=pt.map(R=>{let et=R.streams??0;return{rank:R.position,trackUri:jt(R.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${R.track.name}${R.track.artists[0]?.name??""}`,trackName:R.track.name,artistName:R.track.artists[0]?.name??"",artistUri:jt(R.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${R.track.artists[0]?.name??""}`,albumName:R.track.albums[0]?.name??"",albumUri:jt(R.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:R.track.albums[0]?.image,count:et,durationMs:R.playedMs??(R.track.durationMs??0)*et}}),D=ne.map(R=>({rank:R.position,artistUri:jt(R.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${R.artist.name}`,artistName:R.artist.name,count:R.streams??0,durationMs:R.playedMs??0,genres:R.artist.genres,imageUrl:R.artist.image??null})),j=I?Jt.map(R=>({rank:R.position,albumUri:jt(R.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${R.album.name}${R.album.artists[0]?.name??""}`,albumName:R.album.name,artistName:R.album.artists[0]?.name??"",albumArt:R.album.image,count:R.streams??0,durationMs:0})):fa(pt),xt=da(Lt,ne),_t=Yt.map(R=>({trackUri:jt(R.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${R.track.name}${R.track.artists[0]?.name??""}`,trackName:R.track.name,artistName:R.track.artists[0]?.name??"",albumArt:R.track.albums[0]?.image,playedAt:new Date(R.endTime).getTime()||Date.now()})),Et={topTracks:ie,topArtists:D,topAlbums:j,topGenres:xt,totalPlays:gt?.count??0,totalDuration:gt?.durationMs??0,recentPlays:_t,hourlyDistribution:kt,peakHour:Ct,skipRate:0,uniqueTrackCount:gt?.cardinality.tracks??0,uniqueArtistCount:gt?.cardinality.artists??0,streak:qt,listeningDays:vt,weekdayDistribution:bt,peakWeekday:Pt,dailyPlayCounts:ue,newArtistCount:Kt,priorPeriodTotalDuration:Wt,isFreeTier:!I&&ie.every(R=>R.count===0)};return se.set(u,Et),Et}async calculateStatsProgressive(o,u){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let f=pa(o.id),y=se.get(f);if(y)return u(y,1),u(y,2),u(y,3),y;let E={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[o.id];if(!E)throw new Error(`Unknown stats.fm period: ${o.id}`);let K={range:E},I=encodeURIComponent(this.config.username),X=this.config.isPlus,W=Intl.DateTimeFormat().resolvedOptions().timeZone,tt=ur(o),ot=tt?ft(`/users/${I}/top/artists`,{after:String(tt.start),before:String(tt.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),ut=ft(`/users/${I}/streams/stats`,K),it=ft(`/users/${I}/streams/recent`,{limit:"12"}),St=ft(`/users/${I}/top/tracks`,K),zt=ft(`/users/${I}/top/artists`,K),Bt=ft(`/users/${I}/top/genres`,K),Rt=X?ft(`/users/${I}/top/albums`,K):Promise.resolve({ok:!1,status:0,message:"skipped"}),re=ft(`/users/${I}/streams/stats/per-day`,{range:"lifetime",timeZone:W}),It=ft(`/users/${I}/streams/stats/dates`,{range:E,timeZone:W}),[Ft,le]=await Promise.allSettled([ut,it]),lt=Qt(Ft),ne=(Qt(le)??[]).map(U=>({trackUri:jt(U.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${U.track.name}${U.track.artists[0]?.name??""}`,trackName:U.track.name,artistName:U.track.artists[0]?.name??"",albumArt:U.track.albums[0]?.image,playedAt:new Date(U.endTime).getTime()||Date.now()}));u({totalPlays:lt?.count??0,totalDuration:lt?.durationMs??0,uniqueTrackCount:lt?.cardinality.tracks??0,uniqueArtistCount:lt?.cardinality.artists??0,skipRate:0,recentPlays:ne},1);let Lt=[],Gt=[],Kt=[],gt=null,Yt=[],Jt=[],dt=[],vt=[],qt=[],ue,Wt,yt,kt,Ct,bt=!tt,Pt=()=>{if(!tt){kt=0,u({newArtistCount:kt},2);return}if(!bt)return;if(Gt.length===0){kt=0,u({newArtistCount:kt},2);return}let U=new Set(Gt.map(B=>B.artist.externalIds?.spotify?.[0]).filter(B=>!!B));if(Yt.length>0){let B=new Set(Yt.map(st=>st.artist.externalIds?.spotify?.[0]).filter(st=>!!st)),C=0;for(let st of U)B.has(st)||C++;kt=C}else kt=U.size;u({newArtistCount:kt},2)},ce=[St.then(U=>{Lt=U.ok?U.data:[],Jt=Lt.map(B=>{let C=B.streams??0;return{rank:B.position,trackUri:jt(B.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${B.track.name}${B.track.artists[0]?.name??""}`,trackName:B.track.name,artistName:B.track.artists[0]?.name??"",artistUri:jt(B.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${B.track.artists[0]?.name??""}`,albumName:B.track.albums[0]?.name??"",albumUri:jt(B.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:B.track.albums[0]?.image,count:C,durationMs:B.playedMs??(B.track.durationMs??0)*C}}),u({topTracks:Jt},2),X||(vt=fa(Lt),u({topAlbums:vt},2))}),Promise.all([zt,Bt]).then(([U,B])=>{Gt=U.ok?U.data:[],dt=Gt.map(st=>({rank:st.position,artistUri:jt(st.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${st.artist.name}`,artistName:st.artist.name,count:st.streams??0,durationMs:st.playedMs??0,genres:st.artist.genres,imageUrl:st.artist.image??null})),u({topArtists:dt},2);let C=B.ok?B.data:null;qt=da(C,Gt),u({topGenres:qt},2),Pt()}),Rt.then(U=>{X&&(Kt=U.ok?U.data:[],vt=Kt.map(B=>({rank:B.position,albumUri:jt(B.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${B.album.name}${B.album.artists[0]?.name??""}`,albumName:B.album.name,artistName:B.album.artists[0]?.name??"",albumArt:B.album.image,count:B.streams??0,durationMs:0})),u({topAlbums:vt},2))}),re.then(U=>{if(gt=U.ok?U.data:null,Wt=gt?.days?Object.values(gt.days).filter(B=>B.count>0).length:void 0,ue=gt?.days?ca(gt.days):0,yt=gt?.days?Object.entries(gt.days).map(([B,C])=>({date:Ve(B),count:C.count})).sort((B,C)=>B.date.localeCompare(C.date)):void 0,tt&&gt?.days){let B=0;for(let[C,st]of Object.entries(gt.days)){let We=new Date(C).getTime();Number.isFinite(We)&&We>=tt.start&&We<tt.end&&(B+=st.durationMs)}B>0&&(Ct=B)}u({streak:ue,listeningDays:Wt,dailyPlayCounts:yt,priorPeriodTotalDuration:Ct},2)}),ot.then(U=>{Yt=U.ok?U.data:[],bt=!0,Pt()})];await Promise.allSettled(ce);let[ie]=await Promise.allSettled([It]),D=$r(ie),j=Qt(ie),xt=new Array(24).fill(0);if(j?.hours)for(let[U,B]of Object.entries(j.hours)){let C=Number(U);C>=0&&C<24&&(xt[C]=B.count)}let _t=xt.reduce((U,B,C,st)=>B>st[U]?C:U,0),Et,R;if(j!=null&&(Object.keys(j.hours??{}).length>0||Object.keys(j.weekDays??{}).length>0)&&j?.weekDays){Et=new Array(7).fill(0);for(let[U,B]of Object.entries(j.weekDays)){let C=Number(U)-1;C>=0&&C<7&&(Et[C]=B.count)}R=Et.reduce((U,B,C,st)=>B>st[U]?C:U,0)}return D?u({hourlyDistribution:new Array(24).fill(0),peakHour:0},3,ti(D.status,D.message)):u({hourlyDistribution:xt,peakHour:_t,weekdayDistribution:Et,peakWeekday:R},3),{topTracks:Jt,topArtists:dt,topAlbums:vt,topGenres:qt,totalPlays:lt?.count??0,totalDuration:lt?.durationMs??0,recentPlays:ne,hourlyDistribution:xt,peakHour:_t,skipRate:0,uniqueTrackCount:lt?.cardinality.tracks??0,uniqueArtistCount:lt?.cardinality.artists??0,streak:ue,listeningDays:Wt,weekdayDistribution:Et,peakWeekday:R,dailyPlayCounts:yt,newArtistCount:kt,priorPeriodTotalDuration:Ct,isFreeTier:!X&&Jt.every(U=>U.count===0)}}async init(){let o=localStorage.getItem(Z.STATSFM_CONFIG);if(!o)return;try{let f=JSON.parse(o);if(typeof f?.username!="string"||!f.username)throw new Error("invalid stats.fm config shape");typeof f.lastValidated!="number"&&(f.lastValidated=0),this.config=f}catch(f){console.warn("[listening-stats] Discarding invalid stats.fm config:",f),localStorage.removeItem(Z.STATSFM_CONFIG),this.config=null;return}if(Date.now()-this.config.lastValidated>nl){let f=await ua(this.config.username);f.valid&&(this.config.isPlus=f.isPlus,this.config.lastValidated=Date.now(),localStorage.setItem(Z.STATSFM_CONFIG,JSON.stringify(this.config)))}}destroy(){se.invalidate()}},ma=new ei;Nt();cr();var $e={enabled:!1,trackCount:10,providerId:"local",periodId:"this-week",isPublic:!1},al=new Set(["today","sfm-today"]);function ol(l){return(l==="statsfm"?ze:Ne).filter(u=>!al.has(u.id))}function ha(l){let o=ol(l.providerId);return o.find(u=>u.id===l.periodId)??o[0]}function ri(){try{let l=localStorage.getItem(Z.PLAYLIST_CONFIG);if(!l)return{...$e};let o=JSON.parse(l);return{enabled:typeof o.enabled=="boolean"?o.enabled:$e.enabled,trackCount:typeof o.trackCount=="number"&&o.trackCount>0?o.trackCount:$e.trackCount,providerId:o.providerId==="statsfm"?"statsfm":"local",periodId:typeof o.periodId=="string"?o.periodId:$e.periodId,isPublic:typeof o.isPublic=="boolean"?o.isPublic:$e.isPublic}}catch{return{...$e}}}function Gr(){try{let l=localStorage.getItem(Z.PLAYLIST_STATE);if(!l)return{playlistUri:null,lastBuiltDay:null};let o=JSON.parse(l);return{playlistUri:typeof o.playlistUri=="string"?o.playlistUri:null,lastBuiltDay:typeof o.lastBuiltDay=="string"?o.lastBuiltDay:null}}catch{return{playlistUri:null,lastBuiltDay:null}}}function ga(l){let o={...Gr(),...l};try{localStorage.setItem(Z.PLAYLIST_STATE,JSON.stringify(o))}catch{}}function sl(l){return new Promise((o,u)=>{let f=new Image;f.crossOrigin="anonymous",f.onload=()=>o(f),f.onerror=()=>u(new Error(`cover art failed to load: ${l}`)),f.src=l})}async function va(l,o){let u=document.createElement("canvas");u.width=640,u.height=640;let f=u.getContext("2d");if(!f)throw new Error("canvas 2d context unavailable");let y=null;if(l&&(y=await sl(l).catch(()=>null)),y)f.drawImage(y,0,0,640,640);else{let K=f.createLinearGradient(0,0,640,640);K.addColorStop(0,"#1e3264"),K.addColorStop(1,"#121212"),f.fillStyle=K,f.fillRect(0,0,640,640)}let b=f.createLinearGradient(0,640*.55,0,640);b.addColorStop(0,"rgba(0,0,0,0)"),b.addColorStop(1,"rgba(0,0,0,0.85)"),f.fillStyle=b,f.fillRect(0,0,640,640),f.fillStyle="#ffffff",f.textBaseline="alphabetic",f.font="600 36px CircularSp, 'Helvetica Neue', Arial, sans-serif",f.fillText("Listening Stats",40,544);let E=64;for(f.font=`700 ${E}px CircularSp, 'Helvetica Neue', Arial, sans-serif`;E>24&&f.measureText(o).width>560;)E-=4,f.font=`700 ${E}px CircularSp, 'Helvetica Neue', Arial, sans-serif`;return f.fillText(o,40,604),u.toDataURL("image/jpeg",.9)}var ya=100;function ll(){let l=globalThis.Spicetify?.Platform;return!l?.RootlistAPI?.createPlaylist||!l?.PlaylistAPI?.add?null:{rootlist:l.RootlistAPI,playlist:l.PlaylistAPI}}async function ul(l,o){let u=Gr().playlistUri;if(u)try{return await Spicetify.Platform.PlaylistAPI.getMetadata(u),u}catch{}let f=await l.createPlaylist(o,{before:"start"}),y=typeof f=="string"?f:f?.uri;if(!y)throw new Error("createPlaylist returned no URI");return y}async function cl(l,o,u){if(typeof l.clear=="function")await l.clear(o);else for(;;){let f=await l.getContents(o,{limit:ya,offset:0});if(!f.items.length||(await l.remove(o,f.items.map(({uri:y,uid:b})=>({uri:y,uid:b}))),f.items.length<ya))break}await l.add(o,u,{after:"end"})}async function pl(l,o,u){if(typeof l.uploadImage!="function")return;let f=Spicetify.Platform.Session?.accessToken;if(!f)return;let y=await(await fetch(u)).blob(),b=new File([y],"cover.jpg",{type:"image/jpeg"}),E=await l.uploadImage(b),K=o.split(":").pop(),I=await fetch(`https://spclient.wg.spotify.com/playlist/v2/playlist/${K}/register-image`,{method:"POST",headers:{Authorization:`Bearer ${f}`,"Content-Type":"application/json"},body:JSON.stringify({uploadToken:E})});if(!I.ok)throw new Error(`register-image failed: ${I.status}`);let X=await I.arrayBuffer(),W=[...new Uint8Array(X)].map(ot=>ot.toString(16).padStart(2,"0")).join(""),tt=W.startsWith("0a14")?W.slice(4):W;await l.setAttributes(o,{picture:tt}),typeof l.resync=="function"&&await l.resync(o)}async function dl(l,o){let u=Spicetify.Platform.PlaylistPermissionsAPI;if(typeof u?.setBasePermission=="function")try{await u.setBasePermission(l,o?"VIEWER":"BLOCKED")}catch(f){console.warn("[listening-stats] playlist visibility update failed:",f)}}var Yr=null;function fl(){return Yr||(Yr=ml().finally(()=>{Yr=null})),Yr}async function ml(){let l=ri();if(!l.enabled)return{status:"skipped",reason:"disabled"};let o=ll();if(!o)return{status:"error",message:"Spotify playlist APIs unavailable in this client version"};try{let u=ha(l),b=(await(l.providerId==="statsfm"?ma:la).calculateStats(u)).topTracks.filter(I=>I.trackUri.startsWith("spotify:track:")).slice(0,l.trackCount);if(b.length===0)return{status:"skipped",reason:"no-tracks"};let E=`Listening Stats \xB7 ${u.label}`,K=await ul(o.rootlist,E);await cl(o.playlist,K,b.map(I=>I.trackUri)),await o.playlist.setAttributes(K,{name:E,description:`Your top ${b.length} tracks (${u.label.toLowerCase()}) - auto-updated daily by Listening Stats`}),await dl(K,l.isPublic);try{let I=await va(b[0].albumArt,u.label);await pl(o.playlist,K,I)}catch(I){console.warn("[listening-stats] playlist cover update failed:",I)}return ga({playlistUri:K,lastBuiltDay:Ht(Date.now())}),{status:"built",playlistUri:K,trackCount:b.length}}catch(u){let f=u instanceof Error?u.message:String(u);return console.error("[listening-stats] playlist build failed:",u),{status:"error",message:f}}}async function ni(){ri().enabled&&Gr().lastBuiltDay!==Ht(Date.now())&&await fl()}var hl=6e4;function ba(){let l=Ht(Date.now());ni().catch(o=>{console.error("[listening-stats] playlist scheduler run failed:",o)}),setInterval(()=>{let o=Ht(Date.now());o!==l&&(l=o,ni().catch(u=>{console.error("[listening-stats] playlist scheduler run failed:",u)}))},hl)}Nt();Vn();me();var Wr="listening-stats-backup";async function gl(){let l=await q.playEvents.toArray();return{version:1,exportedAt:Date.now(),fromDbVersion:q.verno,count:l.length,events:l}}async function xa(l){if(l.version!==1)throw new Error("Unknown export format version");await q.transaction("rw",q.playEvents,async()=>{await q.playEvents.clear(),await q.playEvents.bulkAdd(l.events)})}async function Zr(){let l=await gl();if(l.count===0)return;await Me.delete(Wr);let o=new Me(Wr);o.version(1).stores({snapshots:""}),await o.open(),await o.table("snapshots").put(l,"latest"),o.close()}async function wa(){try{let l=new Me(Wr);l.version(1).stores({snapshots:""}),await l.open();let o=await l.table("snapshots").get("latest");return l.close(),o??null}catch{return null}}async function Sa(){try{let l=new Me(Wr);l.version(1).stores({snapshots:""}),await l.open();let o=await l.table("snapshots").count();return l.close(),o>0}catch{return!1}}me();Nt();me();async function ka(){if(!localStorage.getItem(Z.LAST_WRITE))return{ok:!0,wipeDetected:!1,backupAvailable:!1,restored:!1};let o;try{o=await q.playEvents.count()}catch{return{ok:!1,wipeDetected:!1,backupAvailable:!1,restored:!1,warning:"DB not openable"}}if(o>0)return{ok:!0,wipeDetected:!1,backupAvailable:!1,restored:!1};if(await Sa()){let f=await wa();if(f)return await xa(f),{ok:!0,wipeDetected:!0,backupAvailable:!0,restored:!0}}return{ok:!1,wipeDetected:!0,backupAvailable:!1,restored:!1,warning:"Data was wiped externally and no backup exists"}}Nt();me();var vl=5;async function yl(l){l>=vl||l===0||await Zr()}async function bl(){try{if(typeof indexedDB.databases=="function")return(await indexedDB.databases()).find(u=>u.name==="listening-stats")?.version??0}catch{}return q.isOpen()?q.verno:0}async function Pa(){if(!q.isOpen()){let l=await bl();await yl(l),localStorage.setItem(Z.MIGRATION_PENDING,"1");try{await q.open(),localStorage.removeItem(Z.MIGRATION_PENDING)}catch(o){console.error("[listening-stats] DB upgrade failed, will retry on next open",o)}}return q}me();async function _a(l){let o=Math.floor(l.startedAt/3e3)*3e3,u=o+3e3;return q.transaction("rw",q.playEvents,async()=>await q.playEvents.where("startedAt").between(o,u).filter(y=>y.trackUri===l.trackUri).count()>0?null:await q.playEvents.add(l)??null)}async function Ea(l,o,u){await q.playEvents.update(l,{playedMs:o,endedAt:u})}je();Nt();function xl(l,o,u){return o<=0?"skip":l/o>=.9||l>=u?"play":"skip"}function wl(l){if(l.provider==="narration"||l.provider==="ad")return!1;let o=l.uri??"";return!(o.startsWith("spotify:narration:")||o.startsWith("spotify:ad:")||o.startsWith("spotify:interruption:"))}function Sl(l){if(!l.startsWith("spotify:local:"))return null;let o=l.split(":"),u=f=>{if(!f)return"";let y=f.replace(/\+/g," ");try{return decodeURIComponent(y)}catch{return y}};return{artist:u(o[2]),album:u(o[3]),title:u(o[4])}}var Xr=class l{constructor(o){this._crossWritePromise=null;this._deps=o,this._state=l._initialState()}static _initialState(){return{state:"idle",trackUri:null,playStartTime:null,accumulatedPlayMs:0,isPlaying:!1,durationMs:0,capturedData:null,lastProgressMs:0,lastLoopDetectedAt:0,lastRecordedUri:null,recordedEventId:null}}get state(){return this._state.state}getSnapshot(){return{...this._state,capturedData:this._state.capturedData?{...this._state.capturedData}:null}}async handleSongChange(o){if(this._state.state==="tracking"&&this._state.capturedData&&(this._state.state="completing",await this._finalizePlayEvent(this._totalPlayedMs())),this._state.lastProgressMs=0,o?.item&&wl(o.item)){let u=o.item,f=u.metadata,y=Sl(u.uri),b=u.name||f?.title||y?.title||"Unknown Track",E=f?.artist_name||y?.artist||"Unknown Artist",K=f?.album_title||y?.album||"Unknown Album",I=f?.artist_uri||"",X=f?.album_uri||"";y&&(I||(I=`local:artist:${E.toLowerCase()}`),X||(X=`local:album:${E.toLowerCase()}:${K.toLowerCase()}`)),this._state.capturedData={trackUri:u.uri,trackName:b,artistName:E,artistUri:I,albumName:K,albumUri:X,albumArt:oe(f?.image_url||f?.image_xlarge_url),durationMs:u.duration?.milliseconds||0,startedAt:Date.now()},this._state.trackUri=u.uri,this._state.durationMs=u.duration?.milliseconds||0,this._state.playStartTime=Date.now(),this._state.accumulatedPlayMs=0,this._state.isPlaying=!o.isPaused,this._state.recordedEventId=null,this._state.state="tracking",await this._maybeRecordThresholdCross()}else this._state={...l._initialState(),lastRecordedUri:this._state.lastRecordedUri}}handlePlayPause(o){let u=this._state.isPlaying;u&&o?(this._state.playStartTime!==null&&(this._state.accumulatedPlayMs+=Date.now()-this._state.playStartTime),this._state.isPlaying=!1,this._maybeRecordThresholdCross()):!u&&!o&&(this._state.playStartTime=Date.now(),this._state.isPlaying=!0)}handleProgress(o,u,f){if(f===2&&u>0&&this._state.state==="tracking"){let y=this._state.lastProgressMs>u*.9,b=o<u*.1,E=Date.now()-this._state.lastLoopDetectedAt>=2e3;y&&b&&E&&(this._state.lastLoopDetectedAt=Date.now(),this._finalizePlayEvent(this._totalPlayedMs()).then(()=>{this._state.accumulatedPlayMs=0,this._state.recordedEventId=null,this._state.isPlaying&&(this._state.playStartTime=Date.now()),this._state.capturedData&&(this._state.capturedData={...this._state.capturedData,startedAt:Date.now()})}))}this._state.lastProgressMs=o,this._maybeRecordThresholdCross()}destroy(){}_totalPlayedMs(){return this._state.accumulatedPlayMs+(this._state.isPlaying&&this._state.playStartTime!==null?Date.now()-this._state.playStartTime:0)}async _maybeRecordThresholdCross(){if(this._state.state!=="tracking"||!this._state.capturedData||this._state.recordedEventId!==null||this._crossWritePromise!==null||this._deps.isTrackingPaused())return;let o=this._state.capturedData.durationMs;if(o<=0)return;let u=Math.min(this._deps.resolveThresholdMs(o),o*.9);if(this._totalPlayedMs()<u||this._deps.isSkipRepeatsEnabled()&&this._state.capturedData.trackUri===this._state.lastRecordedUri)return;let f=(async()=>{try{let y=await this._writeEvent("play",this._totalPlayedMs());this._state.recordedEventId=y??0}catch(y){console.warn("[listening-stats] Failed to write play event:",y)}})();this._crossWritePromise=f;try{await f}finally{this._crossWritePromise=null}}async _finalizePlayEvent(o){if(!this._state.capturedData)return;if(this._crossWritePromise!==null&&await this._crossWritePromise,this._state.recordedEventId!==null){if(this._state.recordedEventId>0)try{await this._deps.updatePlayEvent(this._state.recordedEventId,o,Date.now())}catch(y){console.warn("[listening-stats] Failed to update play event:",y)}return}if(this._deps.isTrackingPaused()){this._deps.dispatchEvent(new CustomEvent(ht.TRACKING_PAUSED));return}let u=this._deps.resolveThresholdMs(this._state.capturedData.durationMs),f=xl(o,this._state.capturedData.durationMs,u);if(!(f==="play"&&this._deps.isSkipRepeatsEnabled()&&this._state.capturedData.trackUri===this._state.lastRecordedUri))try{await this._writeEvent(f,o)}catch(y){console.warn("[listening-stats] Failed to write play event:",y)}}async _writeEvent(o,u){if(!this._state.capturedData)return null;let f={trackUri:this._state.capturedData.trackUri,trackName:this._state.capturedData.trackName,artistName:this._state.capturedData.artistName,artistUri:this._state.capturedData.artistUri,albumName:this._state.capturedData.albumName,albumUri:this._state.capturedData.albumUri,albumArt:this._state.capturedData.albumArt,durationMs:this._state.capturedData.durationMs,playedMs:u,startedAt:this._state.capturedData.startedAt,endedAt:Date.now(),type:o},y=await this._deps.addPlayEvent(f);if(y!==null){o==="play"&&this._deps.isSkipRepeatsEnabled()&&(this._state.lastRecordedUri=this._state.capturedData.trackUri);let b=o==="play"?ht.PLAY_RECORDED:ht.SKIP_RECORDED;this._deps.dispatchEvent(new CustomEvent(b,{detail:f})),localStorage.getItem(Z.LOGGING)==="true"&&console.log(`[listening-stats] ${o}: "${f.trackName}" by ${f.artistName} (${Math.round(f.playedMs/1e3)}s)`)}return y}};je();Nt();var Qr=class{constructor(){this._state={healthy:!0,lastWriteAt:null,lastTrackName:null,errorCount:0,lastError:null}}getHealth(){return{...this._state}}recordSuccess(o){this._state.healthy=!0,this._state.lastWriteAt=Date.now(),this._state.lastTrackName=o,this._state.errorCount=0,this._state.lastError=null,this.publish()}recordFailure(o){this._state.healthy=!1,this._state.errorCount+=1,this._state.lastError=o,this.publish()}publish(){try{localStorage.setItem(Z.TRACKING_HEALTH,JSON.stringify(this._state))}catch{}window.dispatchEvent(new CustomEvent(ht.HEALTH_CHANGED,{detail:{...this._state}}))}};Nt();var kl=3e4,Pl=25;function _l(){try{let l=localStorage.getItem(Z.PLAY_THRESHOLD);if(l!==null){let o=parseInt(l,10);if(!Number.isNaN(o)&&o>=0&&o<=6e4)return o}}catch{}return kl}function El(){try{let l=localStorage.getItem(Z.PLAY_THRESHOLD_PERCENT);if(l!==null){let o=parseInt(l,10);if(!Number.isNaN(o)&&o>=0&&o<=100)return o}}catch{}return Pl}function Al(){try{return localStorage.getItem(Z.PLAY_THRESHOLD_MODE)==="percent"?"percent":"seconds"}catch{return"seconds"}}function Aa(l){return Al()==="percent"?l<=0?Number.POSITIVE_INFINITY:Math.round(l*El()/100):_l()}function Ta(){try{return localStorage.getItem(Z.TRACKING_PAUSED)==="1"}catch{return!1}}function Da(){try{return localStorage.getItem(Z.SKIP_REPEATS)==="1"}catch{return!1}}var Jr=class{constructor(o){this._intervalId=null;this._visibilityHandler=null;this.config={intervalMs:o.intervalMs??3e5,sentinelKey:o.sentinelKey??"__lsSongHandler",onReRegister:o.onReRegister,pingDb:o.pingDb}}start(){this._intervalId!==null&&clearInterval(this._intervalId),this._intervalId=setInterval(()=>{window[this.config.sentinelKey]||this.config.onReRegister()},this.config.intervalMs),this._visibilityHandler!==null&&document.removeEventListener("visibilitychange",this._visibilityHandler),this._visibilityHandler=()=>{document.visibilityState==="visible"&&(window[this.config.sentinelKey]||this.config.onReRegister(),this.config.pingDb().catch(()=>{}))},document.addEventListener("visibilitychange",this._visibilityHandler)}stop(){this._intervalId!==null&&(clearInterval(this._intervalId),this._intervalId=null),this._visibilityHandler!==null&&(document.removeEventListener("visibilitychange",this._visibilityHandler),this._visibilityHandler=null)}};var pr=null,Ge=null,Ra=null;async function Ca(){let l=window;if(l.__lsPollerInitialized)return;l.__lsPollerInitialized=!0,Ge=new Qr,Ji(()=>{Ge?.recordFailure("DB connection closed  -  version upgrade in another tab")}),await Pa();let o=await ka();o.wipeDetected&&(o.restored?Ge.recordSuccess("Restored from backup after external wipe"):Ge.recordFailure(o.warning??"External data wipe detected  -  play history lost")),o.ok&&Zr().catch(()=>{});let u=async y=>{try{let b=await _a(y);return b!==null&&(Ge?.recordSuccess(y.trackName),localStorage.setItem(Z.LAST_WRITE,String(Date.now()))),b}catch(b){throw Ge?.recordFailure(b instanceof Error?b.message:String(b)),b}};pr=new Xr({addPlayEvent:u,updatePlayEvent:Ea,resolveThresholdMs:Aa,isTrackingPaused:Ta,isSkipRepeatsEnabled:Da,dispatchEvent:y=>window.dispatchEvent(y)}),Ia();let f=globalThis.Spicetify?.Player?.data;f&&f.item&&pr.handleSongChange(f).catch(y=>{console.warn("[listening-stats] initial song capture error:",y)}),Ra=new Jr({intervalMs:3e5,sentinelKey:"__lsSongHandler",onReRegister:Ia,pingDb:()=>q.playEvents.count().then(()=>{})}),Ra.start()}function Ia(){let l=window,o=globalThis.Spicetify?.Player;if(!o?.addEventListener)return;if(o.removeEventListener){let b=l.__lsSongHandler,E=l.__lsPauseHandler,K=l.__lsProgressHandler;b&&o.removeEventListener("songchange",b),E&&o.removeEventListener("onplaypause",E),K&&o.removeEventListener("onprogress",K)}let u=()=>{pr?.handleSongChange(o.data).catch(b=>{console.warn("[listening-stats] songchange error:",b)})},f=()=>{let b=o.data;pr?.handlePlayPause(b?.isPaused??!0)},y=()=>{pr?.handleProgress(o.getProgress?.()??0,o.getDuration?.()??0,o.getRepeat?.()??0)};o.addEventListener("songchange",u),o.addEventListener("onplaypause",f),o.addEventListener("onprogress",y),l.__lsSongHandler=u,l.__lsPauseHandler=f,l.__lsProgressHandler=y}var io=100,ao=3e4;(function(){let o=Date.now(),u=!1;function f(){let y=globalThis.Spicetify;if(!y?.Player?.addEventListener||!y.React||!y.ReactDOM){if(Date.now()-o>ao){console.error("[listening-stats] Spicetify init timeout: Player API not found after 30s");return}setTimeout(f,io);return}if(u||(u=!0,Promise.resolve().then(()=>(no(),ro)).then(({mountPlaybarWidget:b})=>b()).catch(b=>{console.error("[listening-stats] playbar widget mount error:",b)})),!globalThis.Spicetify?.Player?.data?.item){if(Date.now()-o>ao){console.warn("[listening-stats] Spicetify init timeout: Player data not loaded after 30s");return}setTimeout(f,io);return}console.log("[listening-stats] extension loaded, initializing tracker"),Ca().catch(b=>{console.error("[listening-stats] tracker init error:",b)}),ba()}f()})();})();
