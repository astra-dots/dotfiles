"use strict";var ListeningStatsApp=(()=>{var Xm=Object.create;var Ia=Object.defineProperty;var Zm=Object.getOwnPropertyDescriptor;var Jm=Object.getOwnPropertyNames;var Qm=Object.getPrototypeOf,eg=Object.prototype.hasOwnProperty;var kr=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}};var Ne=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},kl=(e,t)=>{for(var r in t)Ia(e,r,{get:t[r],enumerable:!0})},El=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Jm(t))!eg.call(e,o)&&o!==r&&Ia(e,o,{get:()=>t[o],enumerable:!(i=Zm(t,o))||i.enumerable});return e};var cs=(e,t,r)=>(r=e!=null?Xm(Qm(e)):{},El(t||!e||!e.__esModule?Ia(r,"default",{value:e,enumerable:!0}):r,e)),tg=e=>El(Ia({},"__esModule",{value:!0}),e);var ue,Rt=kr(()=>{"use strict";ue={PLAY_RECORDED:"listening-stats:play-recorded",SKIP_RECORDED:"listening-stats:skip-recorded",HEALTH_CHANGED:"listening-stats:health-changed",TRACKING_PAUSED:"listening-stats:tracking-paused",TRACKING_RESUMED:"listening-stats:tracking-resumed",PROVIDER_CHANGED:"listening-stats:provider-changed",STATSFM_CONNECTED:"listening-stats:statsfm-connected",STATSFM_DISCONNECTED:"listening-stats:statsfm-disconnected",STATSFM_HEALTH_CHANGED:"listening-stats:statsfm-health-changed",STATSFM_PROFILE_REFRESHED:"listening-stats:statsfm-profile-refreshed",PREFS_CHANGED:"listening-stats:prefs-changed",RANK_MODE_CHANGED:"listening-stats:rank-mode-changed",DASHBOARD_PERIOD_CHANGED:"listening-stats:dashboard-period-changed",OPEN_RECAP:"listening-stats:open-recap"}});var ne,at=kr(()=>{"use strict";ne={PLAY_THRESHOLD:"listening-stats:playThreshold",PLAY_THRESHOLD_MODE:"listening-stats:playThresholdMode",PLAY_THRESHOLD_PERCENT:"listening-stats:playThresholdPercent",TRACKING_PAUSED:"listening-stats:tracking-paused",SKIP_REPEATS:"listening-stats:skip-repeats",LAST_UPDATE:"listening-stats:lastUpdate",LOGGING:"listening-stats:logging",TRACKING_HEALTH:"listening-stats:tracking-health",LAST_WRITE:"listening-stats:lastWrite",ACTIVE_PROVIDER:"listening-stats:active-provider",PREFERENCES:"listening-stats:preferences",MIGRATION_PENDING:"listening-stats:migration-pending",STATSFM_CONFIG:"listening-stats:statsfm",PROVIDER_WIZARD_SEEN:"listening-stats:provider-wizard-seen",PROVIDER_PERIODS:"listening-stats:provider-periods",STATSFM_HEALTH:"listening-stats:statsfm-health",DISMISSED_BANNER_VERSION:"listening-stats:dismissed-banner-version",LASTFM_API_KEY:"listening-stats:lastfm-api-key",LASTFM_CONFIG:"listening-stats:lastfm-provider",WORLD_CHARTS_SCOPE:"listening-stats:world-charts-scope",WORLD_CHARTS_WINDOW:"listening-stats:world-charts-window",TOUR_SEEN_VERSION:"listening-stats:tour-seen-version",DISMISSED_REMOTE_ANNOUNCEMENT_ID:"listening-stats:dismissed-remote-announcement-id",UPDATE_PROMPT_SNOOZE_UNTIL:"listening-stats:update-prompt-snooze-until",RECAP_DISMISSED_MONTH:"listening-stats:recap-dismissed-month",RANK_MODE:"listening-stats:rank-mode",PLAYLIST_CONFIG:"listening-stats:playlist-config",PLAYLIST_STATE:"listening-stats:playlist-state"}});function Cl(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0),r=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0);return{start:t.getTime(),end:r.getTime()}}function ig(){let e=new Date,r=(e.getDay()+6)%7,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()-r,0,0,0,0),o=new Date(i.getFullYear(),i.getMonth(),i.getDate()+7,0,0,0,0);return{start:i.getTime(),end:o.getTime()}}function sg(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1,0,0,0,0),r=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:t.getTime(),end:r.getTime()}}function og(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth()-6,1,0,0,0,0),r=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:t.getTime(),end:r.getTime()}}function lg(){let e=Date.now();return{start:e-28*864e5,end:e}}function cg(){let e=Date.now();return{start:e-180*864e5,end:e}}function _a(){return{start:0,end:Number.MAX_SAFE_INTEGER}}function Nl(e){let t=Gt.findIndex(r=>r.id===e);return t===-1||t===Gt.length-1?null:Gt[t+1]}function Dn(e){if(e.id==="all-time"||e.id==="sfm-all-time"||e.id==="overall")return null;let{start:t,end:r}=e.getBoundaries(),i=r-t,o=t-i;return o<0?null:{start:o,end:t}}var Gt,Yt,Il,On,ds,ps,Er=kr(()=>{"use strict";Gt=[{id:"today",label:"Today",getBoundaries:Cl},{id:"this-week",label:"This Week",getBoundaries:ig},{id:"this-month",label:"This Month",getBoundaries:sg},{id:"last-6-months",label:"Last 6 Months",getBoundaries:og},{id:"all-time",label:"All Time",getBoundaries:_a}],Yt=[{id:"sfm-weeks",label:"Last 4 Weeks",getBoundaries:lg},{id:"sfm-months",label:"Last 6 Months",getBoundaries:cg},{id:"sfm-all-time",label:"All Time",getBoundaries:_a}],Il=[{id:"sfm-today",label:"Today",getBoundaries:Cl},...Yt];On=[{id:"7day",label:"7 Days",getBoundaries:()=>({start:Date.now()-7*864e5,end:Date.now()})},{id:"1month",label:"1 Month",getBoundaries:()=>({start:Date.now()-30*864e5,end:Date.now()})},{id:"3month",label:"3 Months",getBoundaries:()=>({start:Date.now()-90*864e5,end:Date.now()})},{id:"6month",label:"6 Months",getBoundaries:()=>({start:Date.now()-180*864e5,end:Date.now()})},{id:"12month",label:"12 Months",getBoundaries:()=>({start:Date.now()-365*864e5,end:Date.now()})},{id:"overall",label:"Overall",getBoundaries:_a}],ds="world-charts",ps={id:ds,label:"World",getBoundaries:_a}});var ug,fs,ze,Xt=kr(()=>{"use strict";Rt();ug=120*1e3,fs=class{constructor(){this.store=new Map;this.invalidationListenerAttached=!1}get(t){let r=this.store.get(t);return r?Date.now()>=r.expiry?(this.store.delete(t),null):r.data:null}set(t,r){this.store.set(t,{data:r,expiry:Date.now()+ug})}invalidate(t){t!==void 0?this.store.delete(t):this.store.clear()}setupInvalidationListeners(){this.invalidationListenerAttached||(this.invalidationListenerAttached=!0,window.addEventListener(ue.PLAY_RECORDED,()=>{this.invalidate()}))}},ze=new fs});var Dl=Ne((gs,hs)=>{(function(e,t){typeof gs=="object"&&typeof hs<"u"?hs.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.Dexie=t())})(gs,(function(){"use strict";var e=function(n,a){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,l){s.__proto__=l}||function(s,l){for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(s[d]=l[d])},e(n,a)};function t(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");e(n,a);function s(){this.constructor=n}n.prototype=a===null?Object.create(a):(s.prototype=a.prototype,new s)}var r=function(){return r=Object.assign||function(a){for(var s,l=1,d=arguments.length;l<d;l++){s=arguments[l];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(a[p]=s[p])}return a},r.apply(this,arguments)};function i(n,a,s){if(s||arguments.length===2)for(var l=0,d=a.length,p;l<d;l++)(p||!(l in a))&&(p||(p=Array.prototype.slice.call(a,0,l)),p[l]=a[l]);return n.concat(p||Array.prototype.slice.call(a))}typeof SuppressedError=="function"&&SuppressedError;var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,c=Object.keys,u=Array.isArray;typeof Promise<"u"&&!o.Promise&&(o.Promise=Promise);function f(n,a){return typeof a!="object"||c(a).forEach(function(s){n[s]=a[s]}),n}var g=Object.getPrototypeOf,h={}.hasOwnProperty;function w(n,a){return h.call(n,a)}function b(n,a){typeof a=="function"&&(a=a(g(n))),(typeof Reflect>"u"?c:Reflect.ownKeys)(a).forEach(function(s){k(n,s,a[s])})}var S=Object.defineProperty;function k(n,a,s,l){S(n,a,f(s&&w(s,"get")&&typeof s.get=="function"?{get:s.get,set:s.set,configurable:!0}:{value:s,configurable:!0,writable:!0},l))}function _(n){return{from:function(a){return n.prototype=Object.create(a.prototype),k(n.prototype,"constructor",n),{extend:b.bind(null,n.prototype)}}}}var $=Object.getOwnPropertyDescriptor;function U(n,a){var s=$(n,a),l;return s||(l=g(n))&&U(l,a)}var z=[].slice;function W(n,a,s){return z.call(n,a,s)}function ee(n,a){return a(n)}function D(n){if(!n)throw new Error("Assertion Failed")}function N(n){o.setImmediate?setImmediate(n):setTimeout(n,0)}function M(n,a){return n.reduce(function(s,l,d){var p=a(l,d);return p&&(s[p[0]]=p[1]),s},{})}function R(n,a){if(typeof a=="string"&&w(n,a))return n[a];if(!a)return n;if(typeof a!="string"){for(var s=[],l=0,d=a.length;l<d;++l){var p=R(n,a[l]);s.push(p)}return s}var m=a.indexOf(".");if(m!==-1){var v=n[a.substr(0,m)];return v==null?void 0:R(v,a.substr(m+1))}}function E(n,a,s){if(!(!n||a===void 0)&&!("isFrozen"in Object&&Object.isFrozen(n)))if(typeof a!="string"&&"length"in a){D(typeof s!="string"&&"length"in s);for(var l=0,d=a.length;l<d;++l)E(n,a[l],s[l])}else{var p=a.indexOf(".");if(p!==-1){var m=a.substr(0,p),v=a.substr(p+1);if(v==="")s===void 0?u(n)&&!isNaN(parseInt(m))?n.splice(m,1):delete n[m]:n[m]=s;else{var y=n[m];if(!y||!w(n,m)){if(s===void 0)return;y=n[m]={}}E(y,v,s)}}else s===void 0?u(n)&&!isNaN(parseInt(a))?n.splice(a,1):delete n[a]:n[a]=s}}function Z(n,a){typeof a=="string"?E(n,a,void 0):"length"in a&&[].map.call(a,function(s){E(n,s,void 0)})}function K(n){var a={};for(var s in n)w(n,s)&&(a[s]=n[s]);return a}var fe=[].concat;function ge(n){return fe.apply([],n)}var V="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ge([8,16,32,64].map(function(n){return["Int","Uint","Float"].map(function(a){return a+n+"Array"})}))).filter(function(n){return o[n]}),oe=new Set(V.map(function(n){return o[n]}));function re(n){var a={};for(var s in n)if(w(n,s)){var l=n[s];a[s]=!l||typeof l!="object"||oe.has(l.constructor)?l:re(l)}return a}var ve=null;function Re(n){ve=new WeakMap;var a=te(n);return ve=null,a}function te(n){if(!n||typeof n!="object")return n;var a=ve.get(n);if(a)return a;if(u(n)){a=[],ve.set(n,a);for(var s=0,l=n.length;s<l;++s)a.push(te(n[s]))}else if(oe.has(n.constructor))a=n;else{var d=g(n);a=d===Object.prototype?{}:Object.create(d),ve.set(n,a);for(var p in n)w(n,p)&&(a[p]=te(n[p]))}return a}var Pe={}.toString;function T(n){return Pe.call(n).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Te=typeof ae=="symbol"?function(n){var a;return n!=null&&(a=n[ae])&&a.apply(n)}:function(){return null};function Oe(n,a){var s=n.indexOf(a);return s>=0&&n.splice(s,1),s>=0}var Me={};function Le(n){var a,s,l,d;if(arguments.length===1){if(u(n))return n.slice();if(this===Me&&typeof n=="string")return[n];if(d=Te(n)){for(s=[];l=d.next(),!l.done;)s.push(l.value);return s}if(n==null)return[n];if(a=n.length,typeof a=="number"){for(s=new Array(a);a--;)s[a]=n[a];return s}return[n]}for(a=arguments.length,s=new Array(a);a--;)s[a]=arguments[a];return s}var et=typeof Symbol<"u"?function(n){return n[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],J=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ye=tt.concat(J),Ke={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function $e(n,a){this.name=n,this.message=a}_($e).from(Error).extend({toString:function(){return this.name+": "+this.message}});function rt(n,a){return n+". Errors: "+Object.keys(a).map(function(s){return a[s].toString()}).filter(function(s,l,d){return d.indexOf(s)===l}).join(`
`)}function Q(n,a,s,l){this.failures=a,this.failedKeys=l,this.successCount=s,this.message=rt(n,a)}_(Q).from($e);function Be(n,a){this.name="BulkError",this.failures=Object.keys(a).map(function(s){return a[s]}),this.failuresByPos=a,this.message=rt(n,this.failures)}_(Be).from($e);var he=ye.reduce(function(n,a){return n[a]=a+"Error",n},{}),F=$e,Y=ye.reduce(function(n,a){var s=a+"Error";function l(d,p){this.name=s,d?typeof d=="string"?(this.message="".concat(d).concat(p?`
 `+p:""),this.inner=p||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=Ke[a]||s,this.inner=null)}return _(l).from(F),n[a]=l,n},{});Y.Syntax=SyntaxError,Y.Type=TypeError,Y.Range=RangeError;var _e=J.reduce(function(n,a){return n[a+"Error"]=Y[a],n},{});function ot(n,a){if(!n||n instanceof $e||n instanceof TypeError||n instanceof SyntaxError||!n.name||!_e[n.name])return n;var s=new _e[n.name](a||n.message,n);return"stack"in n&&k(s,"stack",{get:function(){return this.inner.stack}}),s}var qt=ye.reduce(function(n,a){return["Syntax","Type","Range"].indexOf(a)===-1&&(n[a+"Error"]=Y[a]),n},{});qt.ModifyError=Q,qt.DexieError=$e,qt.BulkError=Be;function Ue(){}function Nt(n){return n}function lt(n,a){return n==null||n===Nt?a:function(s){return a(n(s))}}function je(n,a){return function(){n.apply(this,arguments),a.apply(this,arguments)}}function _t(n,a){return n===Ue?a:function(){var s=n.apply(this,arguments);s!==void 0&&(arguments[0]=s);var l=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var p=a.apply(this,arguments);return l&&(this.onsuccess=this.onsuccess?je(l,this.onsuccess):l),d&&(this.onerror=this.onerror?je(d,this.onerror):d),p!==void 0?p:s}}function me(n,a){return n===Ue?a:function(){n.apply(this,arguments);var s=this.onsuccess,l=this.onerror;this.onsuccess=this.onerror=null,a.apply(this,arguments),s&&(this.onsuccess=this.onsuccess?je(s,this.onsuccess):s),l&&(this.onerror=this.onerror?je(l,this.onerror):l)}}function We(n,a){return n===Ue?a:function(s){var l=n.apply(this,arguments);f(s,l);var d=this.onsuccess,p=this.onerror;this.onsuccess=null,this.onerror=null;var m=a.apply(this,arguments);return d&&(this.onsuccess=this.onsuccess?je(d,this.onsuccess):d),p&&(this.onerror=this.onerror?je(p,this.onerror):p),l===void 0?m===void 0?void 0:m:f(l,m)}}function Pt(n,a){return n===Ue?a:function(){return a.apply(this,arguments)===!1?!1:n.apply(this,arguments)}}function ct(n,a){return n===Ue?a:function(){var s=n.apply(this,arguments);if(s&&typeof s.then=="function"){for(var l=this,d=arguments.length,p=new Array(d);d--;)p[d]=arguments[d];return s.then(function(){return a.apply(l,p)})}return a.apply(this,arguments)}}var qe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ir(n,a){qe=n}var gr={},ft=100,Vr=typeof Promise>"u"?[]:(function(){var n=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[n,g(n),n];var a=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[a,g(a),n]})(),Bo=Vr[0],Wo=Vr[1],_f=Vr[2],Df=Wo&&Wo.then,_r=Bo&&Bo.constructor,Ai=!!_f;function Of(){queueMicrotask(Mf)}var wn=function(n,a){Sn.push([n,a]),na&&(Of(),na=!1)},Ri=!0,na=!0,Dr=[],aa=[],Ci=Nt,sr={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ue,pgp:!1,env:{},finalize:Ue},Se=sr,Sn=[],Or=0,ia=[];function le(n){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var a=this._PSD=Se;if(typeof n!="function"){if(n!==gr)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Ni(this,this._value);return}this._state=null,this._value=null,++a.ref,zo(this,n)}var Ii={get:function(){var n=Se,a=ca;function s(l,d){var p=this,m=!n.global&&(n!==Se||a!==ca),v=m&&!vr(),y=new le(function(x,A){_i(p,new Ho(Vo(l,n,m,v),Vo(d,n,m,v),x,A,n))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return s.prototype=gr,s},set:function(n){k(this,"then",n&&n.prototype===gr?Ii:{get:function(){return n},set:Ii.set})}};b(le.prototype,{then:Ii,_then:function(n,a){_i(this,new Ho(null,null,n,a,Se))},catch:function(n){if(arguments.length===1)return this.then(null,n);var a=arguments[0],s=arguments[1];return typeof a=="function"?this.then(null,function(l){return l instanceof a?s(l):sa(l)}):this.then(null,function(l){return l&&l.name===a?s(l):sa(l)})},finally:function(n){return this.then(function(a){return le.resolve(n()).then(function(){return a})},function(a){return le.resolve(n()).then(function(){return sa(a)})})},timeout:function(n,a){var s=this;return n<1/0?new le(function(l,d){var p=setTimeout(function(){return d(new Y.Timeout(a))},n);s.then(l,d).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&k(le.prototype,Symbol.toStringTag,"Dexie.Promise"),sr.env=Go();function Ho(n,a,s,l,d){this.onFulfilled=typeof n=="function"?n:null,this.onRejected=typeof a=="function"?a:null,this.resolve=s,this.reject=l,this.psd=d}b(le,{all:function(){var n=Le.apply(null,arguments).map(ua);return new le(function(a,s){n.length===0&&a([]);var l=n.length;n.forEach(function(d,p){return le.resolve(d).then(function(m){n[p]=m,--l||a(n)},s)})})},resolve:function(n){if(n instanceof le)return n;if(n&&typeof n.then=="function")return new le(function(s,l){n.then(s,l)});var a=new le(gr,!0,n);return a},reject:sa,race:function(){var n=Le.apply(null,arguments).map(ua);return new le(function(a,s){n.map(function(l){return le.resolve(l).then(a,s)})})},PSD:{get:function(){return Se},set:function(n){return Se=n}},totalEchoes:{get:function(){return ca}},newPSD:hr,usePSD:Lr,scheduler:{get:function(){return wn},set:function(n){wn=n}},rejectionMapper:{get:function(){return Ci},set:function(n){Ci=n}},follow:function(n,a){return new le(function(s,l){return hr(function(d,p){var m=Se;m.unhandleds=[],m.onunhandled=p,m.finalize=je(function(){var v=this;$f(function(){v.unhandleds.length===0?d():p(v.unhandleds[0])})},m.finalize),n()},a,s,l)})}}),_r&&(_r.allSettled&&k(le,"allSettled",function(){var n=Le.apply(null,arguments).map(ua);return new le(function(a){n.length===0&&a([]);var s=n.length,l=new Array(s);n.forEach(function(d,p){return le.resolve(d).then(function(m){return l[p]={status:"fulfilled",value:m}},function(m){return l[p]={status:"rejected",reason:m}}).then(function(){return--s||a(l)})})})}),_r.any&&typeof AggregateError<"u"&&k(le,"any",function(){var n=Le.apply(null,arguments).map(ua);return new le(function(a,s){n.length===0&&s(new AggregateError([]));var l=n.length,d=new Array(l);n.forEach(function(p,m){return le.resolve(p).then(function(v){return a(v)},function(v){d[m]=v,--l||s(new AggregateError(d))})})})}),_r.withResolvers&&(le.withResolvers=_r.withResolvers));function zo(n,a){try{a(function(s){if(n._state===null){if(s===n)throw new TypeError("A promise cannot be resolved with itself.");var l=n._lib&&jr();s&&typeof s.then=="function"?zo(n,function(d,p){s instanceof le?s._then(d,p):s.then(d,p)}):(n._state=!0,n._value=s,Ko(n)),l&&qr()}},Ni.bind(null,n))}catch(s){Ni(n,s)}}function Ni(n,a){if(aa.push(a),n._state===null){var s=n._lib&&jr();a=Ci(a),n._state=!1,n._value=a,Uf(n),Ko(n),s&&qr()}}function Ko(n){var a=n._listeners;n._listeners=[];for(var s=0,l=a.length;s<l;++s)_i(n,a[s]);var d=n._PSD;--d.ref||d.finalize(),Or===0&&(++Or,wn(function(){--Or===0&&Di()},[]))}function _i(n,a){if(n._state===null){n._listeners.push(a);return}var s=n._state?a.onFulfilled:a.onRejected;if(s===null)return(n._state?a.resolve:a.reject)(n._value);++a.psd.ref,++Or,wn(Lf,[s,n,a])}function Lf(n,a,s){try{var l,d=a._value;!a._state&&aa.length&&(aa=[]),l=qe&&a._consoleTask?a._consoleTask.run(function(){return n(d)}):n(d),!a._state&&aa.indexOf(d)===-1&&Ff(a),s.resolve(l)}catch(p){s.reject(p)}finally{--Or===0&&Di(),--s.psd.ref||s.psd.finalize()}}function Mf(){Lr(sr,function(){jr()&&qr()})}function jr(){var n=Ri;return Ri=!1,na=!1,n}function qr(){var n,a,s;do for(;Sn.length>0;)for(n=Sn,Sn=[],s=n.length,a=0;a<s;++a){var l=n[a];l[0].apply(null,l[1])}while(Sn.length>0);Ri=!0,na=!0}function Di(){var n=Dr;Dr=[],n.forEach(function(l){l._PSD.onunhandled.call(null,l._value,l)});for(var a=ia.slice(0),s=a.length;s;)a[--s]()}function $f(n){function a(){n(),ia.splice(ia.indexOf(a),1)}ia.push(a),++Or,wn(function(){--Or===0&&Di()},[])}function Uf(n){Dr.some(function(a){return a._value===n._value})||Dr.push(n)}function Ff(n){for(var a=Dr.length;a;)if(Dr[--a]._value===n._value){Dr.splice(a,1);return}}function sa(n){return new le(gr,!1,n)}function nt(n,a){var s=Se;return function(){var l=jr(),d=Se;try{return yr(s,!0),n.apply(this,arguments)}catch(p){a&&a(p)}finally{yr(d,!1),l&&qr()}}}var ht={awaits:0,echoes:0,id:0},Bf=0,oa=[],la=0,ca=0,Wf=0;function hr(n,a,s,l){var d=Se,p=Object.create(d);p.parent=d,p.ref=0,p.global=!1,p.id=++Wf,sr.env,p.env=Ai?{Promise:le,PromiseProp:{value:le,configurable:!0,writable:!0},all:le.all,race:le.race,allSettled:le.allSettled,any:le.any,resolve:le.resolve,reject:le.reject}:{},a&&f(p,a),++d.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()};var m=Lr(p,n,s,l);return p.ref===0&&p.finalize(),m}function Yr(){return ht.id||(ht.id=++Bf),++ht.awaits,ht.echoes+=ft,ht.id}function vr(){return ht.awaits?(--ht.awaits===0&&(ht.id=0),ht.echoes=ht.awaits*ft,!0):!1}(""+Df).indexOf("[native code]")===-1&&(Yr=vr=Ue);function ua(n){return ht.echoes&&n&&n.constructor===_r?(Yr(),n.then(function(a){return vr(),a},function(a){return vr(),it(a)})):n}function Hf(n){++ca,(!ht.echoes||--ht.echoes===0)&&(ht.echoes=ht.awaits=ht.id=0),oa.push(Se),yr(n,!0)}function zf(){var n=oa[oa.length-1];oa.pop(),yr(n,!1)}function yr(n,a){var s=Se;if((a?ht.echoes&&(!la++||n!==Se):la&&(!--la||n!==Se))&&queueMicrotask(a?Hf.bind(null,n):zf),n!==Se&&(Se=n,s===sr&&(sr.env=Go()),Ai)){var l=sr.env.Promise,d=n.env;(s.global||n.global)&&(Object.defineProperty(o,"Promise",d.PromiseProp),l.all=d.all,l.race=d.race,l.resolve=d.resolve,l.reject=d.reject,d.allSettled&&(l.allSettled=d.allSettled),d.any&&(l.any=d.any))}}function Go(){var n=o.Promise;return Ai?{Promise:n,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:n.all,race:n.race,allSettled:n.allSettled,any:n.any,resolve:n.resolve,reject:n.reject}:{}}function Lr(n,a,s,l,d){var p=Se;try{return yr(n,!0),a(s,l,d)}finally{yr(p,!1)}}function Vo(n,a,s,l){return typeof n!="function"?n:function(){var d=Se;s&&Yr(),yr(a,!0);try{return n.apply(this,arguments)}finally{yr(d,!1),l&&queueMicrotask(vr)}}}function Oi(n){Promise===_r&&ht.echoes===0?la===0?n():enqueueNativeMicroTask(n):setTimeout(n,0)}var it=le.reject;function Li(n,a,s,l){if(!n.idbdb||!n._state.openComplete&&!Se.letThrough&&!n._vip){if(n._state.openComplete)return it(new Y.DatabaseClosed(n._state.dbOpenError));if(!n._state.isBeingOpened){if(!n._state.autoOpen)return it(new Y.DatabaseClosed);n.open().catch(Ue)}return n._state.dbReadyPromise.then(function(){return Li(n,a,s,l)})}else{var d=n._createTransaction(a,s,n._dbSchema);try{d.create(),n._state.PR1398_maxLoop=3}catch(p){return p.name===he.InvalidState&&n.isOpen()&&--n._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),n.close({disableAutoOpen:!1}),n.open().then(function(){return Li(n,a,s,l)})):it(p)}return d._promise(a,function(p,m){return hr(function(){return Se.trans=d,l(p,m,d)})}).then(function(p){if(a==="readwrite")try{d.idbtrans.commit()}catch{}return a==="readonly"?p:d._completion.then(function(){return p})})}}var jo="4.4.4",Mr="\uFFFF",Mi=-1/0,or="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",qo="String expected.",Yo=1e3,da="__dbnames",$i="readonly",Ui="readwrite";function $r(n,a){return n?a?function(){return n.apply(this,arguments)&&a.apply(this,arguments)}:n:a}var Xo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function pa(n){return typeof n=="string"&&!/\./.test(n)?function(a){return a[n]===void 0&&n in a&&(a=Re(a),delete a[n]),a}:function(a){return a}}function Zo(){throw Y.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ge(n,a){try{var s=Jo(n),l=Jo(a);if(s!==l)return s==="Array"?1:l==="Array"?-1:s==="binary"?1:l==="binary"?-1:s==="string"?1:l==="string"?-1:s==="Date"?1:l!=="Date"?NaN:-1;switch(s){case"number":case"Date":case"string":return n>a?1:n<a?-1:0;case"binary":return Gf(Qo(n),Qo(a));case"Array":return Kf(n,a)}}catch{}return NaN}function Kf(n,a){for(var s=n.length,l=a.length,d=s<l?s:l,p=0;p<d;++p){var m=Ge(n[p],a[p]);if(m!==0)return m}return s===l?0:s<l?-1:1}function Gf(n,a){for(var s=n.length,l=a.length,d=s<l?s:l,p=0;p<d;++p)if(n[p]!==a[p])return n[p]<a[p]?-1:1;return s===l?0:s<l?-1:1}function Jo(n){var a=typeof n;if(a!=="object")return a;if(ArrayBuffer.isView(n))return"binary";var s=T(n);return s==="ArrayBuffer"?"binary":s}function Qo(n){return n instanceof Uint8Array?n:ArrayBuffer.isView(n)?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n)}function fa(n,a,s){var l=n.schema.yProps;return l?(a&&s.numFailures>0&&(a=a.filter(function(d,p){return!s.failures[p]})),Promise.all(l.map(function(d){var p=d.updatesTable;return a?n.db.table(p).where("k").anyOf(a).delete():n.db.table(p).clear()})).then(function(){return s})):s}var xn=(function(){function n(a){this["@@propmod"]=a}return n.prototype.execute=function(a){var s,l=this["@@propmod"];if(l.add!==void 0){var d=l.add;if(u(d))return i(i([],u(a)?a:[],!0),d,!0).sort();if(typeof d=="number")return(Number(a)||0)+d;if(typeof d=="bigint")try{return BigInt(a)+d}catch{return BigInt(0)+d}throw new TypeError("Invalid term ".concat(d))}if(l.remove!==void 0){var p=l.remove;if(u(p))return u(a)?a.filter(function(v){return!p.includes(v)}).sort():[];if(typeof p=="number")return Number(a)-p;if(typeof p=="bigint")try{return BigInt(a)-p}catch{return BigInt(0)-p}throw new TypeError("Invalid subtrahend ".concat(p))}var m=(s=l.replacePrefix)===null||s===void 0?void 0:s[0];return m&&typeof a=="string"&&a.startsWith(m)?l.replacePrefix[1]+a.substring(m.length):a},n})();function el(n,a){for(var s=c(a),l=s.length,d=!1,p=0;p<l;++p){var m=s[p],v=a[m],y=R(n,m);v instanceof xn?(E(n,m,v.execute(y)),d=!0):y!==v&&(E(n,m,v),d=!0)}return d}var tl=(function(){function n(){}return n.prototype._trans=function(a,s,l){var d=this._tx||Se.trans,p=this.name,m=qe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(a==="readonly"?"read":"write"," ").concat(this.name));function v(A,C,O){if(!O.schema[p])throw new Y.NotFound("Table "+p+" not part of transaction");return s(O.idbtrans,O)}var y=jr();try{var x=d&&d.db._novip===this.db._novip?d===Se.trans?d._promise(a,v,l):hr(function(){return d._promise(a,v,l)},{trans:d,transless:Se.transless||Se}):Li(this.db,a,[this.name],v);return m&&(x._consoleTask=m,x=x.catch(function(A){return console.trace(A),it(A)})),x}finally{y&&qr()}},n.prototype.get=function(a,s){var l=this;return a&&a.constructor===Object?this.where(a).first(s):a==null?it(new Y.Type("Invalid argument to Table.get()")):this._trans("readonly",function(d){return l.core.get({trans:d,key:a}).then(function(p){return l.hook.reading.fire(p)})}).then(s)},n.prototype.where=function(a){if(typeof a=="string")return new this.db.WhereClause(this,a);if(u(a))return new this.db.WhereClause(this,"[".concat(a.join("+"),"]"));var s=c(a);if(s.length===1)return this.where(s[0]).equals(a[s[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(A){if(A.compound&&s.every(function(O){return A.keyPath.indexOf(O)>=0})){for(var C=0;C<s.length;++C)if(s.indexOf(A.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(A,C){return A.keyPath.length-C.keyPath.length})[0];if(l&&this.db._maxKey!==Mr){var d=l.keyPath.slice(0,s.length);return this.where(d).equals(d.map(function(A){return a[A]}))}!l&&qe&&console.warn("The query ".concat(JSON.stringify(a)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(s.join("+"),"]"));var p=this.schema.idxByName;function m(A,C){return Ge(A,C)===0}var v=s.reduce(function(A,C){var O=A[0],G=A[1],P=p[C],I=a[C];return[O||P,O||!P?$r(G,P&&P.multi?function(B){var L=R(B,C);return u(L)&&L.some(function(X){return m(I,X)})}:function(B){return m(I,R(B,C))}):G]},[null,null]),y=v[0],x=v[1];return y?this.where(y.name).equals(a[y.keyPath]).filter(x):l?this.filter(x):this.where(s).equals("")},n.prototype.filter=function(a){return this.toCollection().and(a)},n.prototype.count=function(a){return this.toCollection().count(a)},n.prototype.offset=function(a){return this.toCollection().offset(a)},n.prototype.limit=function(a){return this.toCollection().limit(a)},n.prototype.each=function(a){return this.toCollection().each(a)},n.prototype.toArray=function(a){return this.toCollection().toArray(a)},n.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},n.prototype.orderBy=function(a){return new this.db.Collection(new this.db.WhereClause(this,u(a)?"[".concat(a.join("+"),"]"):a))},n.prototype.reverse=function(){return this.toCollection().reverse()},n.prototype.mapToClass=function(a){var s=this,l=s.db,d=s.name;this.schema.mappedClass=a,a.prototype instanceof Zo&&(a=(function(y){t(x,y);function x(){return y!==null&&y.apply(this,arguments)||this}return Object.defineProperty(x.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),x.prototype.table=function(){return d},x})(a));for(var p=new Set,m=a.prototype;m;m=g(m))Object.getOwnPropertyNames(m).forEach(function(y){return p.add(y)});var v=function(y){if(!y)return y;var x=Object.create(a.prototype);for(var A in y)if(!p.has(A))try{x[A]=y[A]}catch{}return x};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),a},n.prototype.defineClass=function(){function a(s){f(this,s)}return this.mapToClass(a)},n.prototype.add=function(a,s){var l=this,d=this.schema.primKey,p=d.auto,m=d.keyPath,v=a;return m&&p&&(v=pa(m)(a)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"add",keys:s!=null?[s]:null,values:[v]})}).then(function(y){return y.numFailures?le.reject(y.failures[0]):y.lastResult}).then(function(y){if(m)try{E(a,m,y)}catch{}return y})},n.prototype.upsert=function(a,s){var l=this,d=this.schema.primKey.keyPath;return this._trans("readwrite",function(p){return l.core.get({trans:p,key:a}).then(function(m){var v=m??{};return el(v,s),d&&E(v,d,a),l.core.mutate({trans:p,type:"put",values:[v],keys:[a],upsert:!0,updates:{keys:[a],changeSpecs:[s]}}).then(function(y){return y.numFailures?le.reject(y.failures[0]):!!m})})})},n.prototype.update=function(a,s){if(typeof a=="object"&&!u(a)){var l=R(a,this.schema.primKey.keyPath);return l===void 0?it(new Y.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(l).modify(s)}else return this.where(":id").equals(a).modify(s)},n.prototype.put=function(a,s){var l=this,d=this.schema.primKey,p=d.auto,m=d.keyPath,v=a;return m&&p&&(v=pa(m)(a)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"put",values:[v],keys:s!=null?[s]:null})}).then(function(y){return y.numFailures?le.reject(y.failures[0]):y.lastResult}).then(function(y){if(m)try{E(a,m,y)}catch{}return y})},n.prototype.delete=function(a){var s=this;return this._trans("readwrite",function(l){return s.core.mutate({trans:l,type:"delete",keys:[a]}).then(function(d){return fa(s,[a],d)}).then(function(d){return d.numFailures?le.reject(d.failures[0]):void 0})})},n.prototype.clear=function(){var a=this;return this._trans("readwrite",function(s){return a.core.mutate({trans:s,type:"deleteRange",range:Xo}).then(function(l){return fa(a,null,l)})}).then(function(s){return s.numFailures?le.reject(s.failures[0]):void 0})},n.prototype.bulkGet=function(a){var s=this;return this._trans("readonly",function(l){return s.core.getMany({keys:a,trans:l}).then(function(d){return d.map(function(p){return s.hook.reading.fire(p)})})})},n.prototype.bulkAdd=function(a,s,l){var d=this,p=Array.isArray(s)?s:void 0;l=l||(p?void 0:s);var m=l?l.allKeys:void 0;return this._trans("readwrite",function(v){var y=d.schema.primKey,x=y.auto,A=y.keyPath;if(A&&p)throw new Y.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(p&&p.length!==a.length)throw new Y.InvalidArgument("Arguments objects and keys must have the same length");var C=a.length,O=A&&x?a.map(pa(A)):a;return d.core.mutate({trans:v,type:"add",keys:p,values:O,wantResults:m}).then(function(G){var P=G.numFailures,I=G.results,B=G.lastResult,L=G.failures,X=m?I:B;if(P===0)return X;throw new Be("".concat(d.name,".bulkAdd(): ").concat(P," of ").concat(C," operations failed"),L)})})},n.prototype.bulkPut=function(a,s,l){var d=this,p=Array.isArray(s)?s:void 0;l=l||(p?void 0:s);var m=l?l.allKeys:void 0;return this._trans("readwrite",function(v){var y=d.schema.primKey,x=y.auto,A=y.keyPath;if(A&&p)throw new Y.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(p&&p.length!==a.length)throw new Y.InvalidArgument("Arguments objects and keys must have the same length");var C=a.length,O=A&&x?a.map(pa(A)):a;return d.core.mutate({trans:v,type:"put",keys:p,values:O,wantResults:m}).then(function(G){var P=G.numFailures,I=G.results,B=G.lastResult,L=G.failures,X=m?I:B;if(P===0)return X;throw new Be("".concat(d.name,".bulkPut(): ").concat(P," of ").concat(C," operations failed"),L)})})},n.prototype.bulkUpdate=function(a){var s=this,l=this.core,d=a.map(function(v){return v.key}),p=a.map(function(v){return v.changes}),m=[];return this._trans("readwrite",function(v){return l.getMany({trans:v,keys:d,cache:"clone"}).then(function(y){var x=[],A=[];a.forEach(function(O,G){var P=O.key,I=O.changes,B=y[G];if(B){for(var L=0,X=Object.keys(I);L<X.length;L++){var q=X[L],H=I[q];if(q===s.schema.primKey.keyPath){if(Ge(H,P)!==0)throw new Y.Constraint("Cannot update primary key in bulkUpdate()")}else E(B,q,H)}m.push(G),x.push(P),A.push(B)}});var C=x.length;return l.mutate({trans:v,type:"put",keys:x,values:A,updates:{keys:d,changeSpecs:p}}).then(function(O){var G=O.numFailures,P=O.failures;if(G===0)return C;for(var I=0,B=Object.keys(P);I<B.length;I++){var L=B[I],X=m[Number(L)];if(X!=null){var q=P[L];delete P[L],P[X]=q}}throw new Be("".concat(s.name,".bulkUpdate(): ").concat(G," of ").concat(C," operations failed"),P)})})})},n.prototype.bulkDelete=function(a){var s=this,l=a.length;return this._trans("readwrite",function(d){return s.core.mutate({trans:d,type:"delete",keys:a}).then(function(p){return fa(s,a,p)})}).then(function(d){var p=d.numFailures,m=d.lastResult,v=d.failures;if(p===0)return m;throw new Be("".concat(s.name,".bulkDelete(): ").concat(p," of ").concat(l," operations failed"),v)})},n})();function kn(n){var a={},s=function(v,y){if(y){for(var x=arguments.length,A=new Array(x-1);--x;)A[x-1]=arguments[x];return a[v].subscribe.apply(null,A),n}else if(typeof v=="string")return a[v]};s.addEventType=p;for(var l=1,d=arguments.length;l<d;++l)p(arguments[l]);return s;function p(v,y,x){if(typeof v=="object")return m(v);y||(y=Pt),x||(x=Ue);var A={subscribers:[],fire:x,subscribe:function(C){A.subscribers.indexOf(C)===-1&&(A.subscribers.push(C),A.fire=y(A.fire,C))},unsubscribe:function(C){A.subscribers=A.subscribers.filter(function(O){return O!==C}),A.fire=A.subscribers.reduce(y,x)}};return a[v]=s[v]=A,A}function m(v){c(v).forEach(function(y){var x=v[y];if(u(x))p(y,v[y][0],v[y][1]);else if(x==="asap")var A=p(y,Nt,function(){for(var O=arguments.length,G=new Array(O);O--;)G[O]=arguments[O];A.subscribers.forEach(function(P){N(function(){P.apply(null,G)})})});else throw new Y.InvalidArgument("Invalid event config")})}}function En(n,a){return _(a).from({prototype:n}),a}function Vf(n){return En(tl.prototype,function(s,l,d){this.db=n,this._tx=d,this.name=s,this.schema=l,this.hook=n._allTables[s]?n._allTables[s].hook:kn(null,{creating:[_t,Ue],reading:[lt,Nt],updating:[We,Ue],deleting:[me,Ue]})})}function Xr(n,a){return!(n.filter||n.algorithm||n.or)&&(a?n.justLimit:!n.replayFilter)}function Fi(n,a){n.filter=$r(n.filter,a)}function Bi(n,a,s){var l=n.replayFilter;n.replayFilter=l?function(){return $r(l(),a())}:a,n.justLimit=s&&!l}function jf(n,a){n.isMatch=$r(n.isMatch,a)}function ma(n,a){if(n.isPrimKey)return a.primaryKey;var s=a.getIndexByKeyPath(n.index);if(!s)throw new Y.Schema("KeyPath "+n.index+" on object store "+a.name+" is not indexed");return s}function rl(n,a,s){var l=ma(n,a.schema);return a.openCursor({trans:s,values:!n.keysOnly,reverse:n.dir==="prev",unique:!!n.unique,query:{index:l,range:n.range}})}function ga(n,a,s,l){var d=n.replayFilter?$r(n.filter,n.replayFilter()):n.filter;if(n.or){var p={},m=function(v,y,x){if(!d||d(y,x,function(O){return y.stop(O)},function(O){return y.fail(O)})){var A=y.primaryKey,C=""+A;C==="[object ArrayBuffer]"&&(C=""+new Uint8Array(A)),w(p,C)||(p[C]=!0,a(v,y,x))}};return Promise.all([n.or._iterate(m,s),nl(rl(n,l,s),n.algorithm,m,!n.keysOnly&&n.valueMapper)])}else return nl(rl(n,l,s),$r(n.algorithm,d),a,!n.keysOnly&&n.valueMapper)}function nl(n,a,s,l){var d=l?function(m,v,y){return s(l(m),v,y)}:s,p=nt(d);return n.then(function(m){if(m)return m.start(function(){var v=function(){return m.continue()};(!a||a(m,function(y){return v=y},function(y){m.stop(y),v=Ue},function(y){m.fail(y),v=Ue}))&&p(m.value,m,function(y){return v=y}),v()})})}var qf=(function(){function n(){}return n.prototype._read=function(a,s){var l=this._ctx;return l.error?l.table._trans(null,it.bind(null,l.error)):l.table._trans("readonly",a).then(s)},n.prototype._write=function(a){var s=this._ctx;return s.error?s.table._trans(null,it.bind(null,s.error)):s.table._trans("readwrite",a,"locked")},n.prototype._addAlgorithm=function(a){var s=this._ctx;s.algorithm=$r(s.algorithm,a)},n.prototype._iterate=function(a,s){return ga(this._ctx,a,s,this._ctx.table.core)},n.prototype.clone=function(a){var s=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return a&&f(l,a),s._ctx=l,s},n.prototype.raw=function(){return this._ctx.valueMapper=null,this},n.prototype.each=function(a){var s=this._ctx;return this._read(function(l){return ga(s,a,l,s.table.core)})},n.prototype.count=function(a){var s=this;return this._read(function(l){var d=s._ctx,p=d.table.core;if(Xr(d,!0))return p.count({trans:l,query:{index:ma(d,p.schema),range:d.range}}).then(function(v){return Math.min(v,d.limit)});var m=0;return ga(d,function(){return++m,!1},l,p).then(function(){return m})}).then(a)},n.prototype.sortBy=function(a,s){var l=a.split(".").reverse(),d=l[0],p=l.length-1;function m(x,A){return A?m(x[l[A]],A-1):x[d]}var v=this._ctx.dir==="next"?1:-1;function y(x,A){var C=m(x,p),O=m(A,p);return Ge(C,O)*v}return this.toArray(function(x){return x.slice().sort(y)}).then(s)},n.prototype.toArray=function(a){var s=this;return this._read(function(l){var d=s._ctx;if(Xr(d,!0)&&d.limit>0){var p=d.valueMapper,m=ma(d,d.table.core.schema);return d.table.core.query({trans:l,limit:d.limit,values:!0,direction:d.dir==="prev"?"prev":void 0,query:{index:m,range:d.range}}).then(function(y){var x=y.result;return p?x.map(p):x})}else{var v=[];return ga(d,function(y){return v.push(y)},l,d.table.core).then(function(){return v})}},a)},n.prototype.offset=function(a){var s=this._ctx;return a<=0?this:(s.offset+=a,Xr(s)?Bi(s,function(){var l=a;return function(d,p){return l===0?!0:l===1?(--l,!1):(p(function(){d.advance(l),l=0}),!1)}}):Bi(s,function(){var l=a;return function(){return--l<0}}),this)},n.prototype.limit=function(a){return this._ctx.limit=Math.min(this._ctx.limit,a),Bi(this._ctx,function(){var s=a;return function(l,d,p){return--s<=0&&d(p),s>=0}},!0),this},n.prototype.until=function(a,s){return Fi(this._ctx,function(l,d,p){return a(l.value)?(d(p),s):!0}),this},n.prototype.first=function(a){return this.limit(1).toArray(function(s){return s[0]}).then(a)},n.prototype.last=function(a){return this.reverse().first(a)},n.prototype.filter=function(a){return Fi(this._ctx,function(s){return a(s.value)}),jf(this._ctx,a),this},n.prototype.and=function(a){return this.filter(a)},n.prototype.or=function(a){return new this.db.WhereClause(this._ctx.table,a,this)},n.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},n.prototype.desc=function(){return this.reverse()},n.prototype.eachKey=function(a){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(l,d){a(d.key,d)})},n.prototype.eachUniqueKey=function(a){return this._ctx.unique="unique",this.eachKey(a)},n.prototype.eachPrimaryKey=function(a){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(l,d){a(d.primaryKey,d)})},n.prototype.keys=function(a){var s=this._ctx;s.keysOnly=!s.isMatch;var l=[];return this.each(function(d,p){l.push(p.key)}).then(function(){return l}).then(a)},n.prototype.primaryKeys=function(a){var s=this._ctx;if(Xr(s,!0)&&s.limit>0)return this._read(function(d){var p=ma(s,s.table.core.schema);return s.table.core.query({trans:d,values:!1,limit:s.limit,direction:s.dir==="prev"?"prev":void 0,query:{index:p,range:s.range}})}).then(function(d){var p=d.result;return p}).then(a);s.keysOnly=!s.isMatch;var l=[];return this.each(function(d,p){l.push(p.primaryKey)}).then(function(){return l}).then(a)},n.prototype.uniqueKeys=function(a){return this._ctx.unique="unique",this.keys(a)},n.prototype.firstKey=function(a){return this.limit(1).keys(function(s){return s[0]}).then(a)},n.prototype.lastKey=function(a){return this.reverse().firstKey(a)},n.prototype.distinct=function(){var a=this._ctx,s=a.index&&a.table.schema.idxByName[a.index];if(!s||!s.multi)return this;var l={};return Fi(this._ctx,function(d){var p=d.primaryKey.toString(),m=w(l,p);return l[p]=!0,!m}),this},n.prototype.modify=function(a){var s=this,l=this._ctx;return this._write(function(d){var p;typeof a=="function"?p=a:p=function(L){return el(L,a)};var m=l.table.core,v=m.schema.primaryKey,y=v.outbound,x=v.extractKey,A=200,C=s.db._options.modifyChunkSize;C&&(typeof C=="object"?A=C[m.name]||C["*"]||200:A=C);var O=[],G=0,P=[],I=function(L,X){var q=X.failures,H=X.numFailures;G+=L-H;for(var j=0,ce=c(q);j<ce.length;j++){var ie=ce[j];O.push(q[ie])}},B=a===al;return s.clone().primaryKeys().then(function(L){var X=Xr(l)&&l.limit===1/0&&(typeof a!="function"||B)&&{index:l.index,range:l.range},q=function(H){var j=Math.min(A,L.length-H),ce=L.slice(H,H+j);return(B?Promise.resolve([]):m.getMany({trans:d,keys:ce,cache:"immutable"})).then(function(ie){var se=[],be=[],He=y?[]:null,xe=B?ce:[];if(!B)for(var we=0;we<j;++we){var Ce=ie[we],Ie={value:Re(Ce),primKey:L[H+we]};p.call(Ie,Ie.value,Ie)!==!1&&(Ie.value==null?xe.push(L[H+we]):!y&&Ge(x(Ce),x(Ie.value))!==0?(xe.push(L[H+we]),se.push(Ie.value)):(be.push(Ie.value),y&&He.push(L[H+we])))}return Promise.resolve(se.length>0&&m.mutate({trans:d,type:"add",values:se}).then(function(Ze){for(var ke in Ze.failures)xe.splice(parseInt(ke),1);I(se.length,Ze)})).then(function(){return(be.length>0||X&&typeof a=="object")&&m.mutate({trans:d,type:"put",keys:He,values:be,criteria:X,changeSpec:typeof a!="function"&&a,isAdditionalChunk:H>0}).then(function(Ze){return I(be.length,Ze)})}).then(function(){return(xe.length>0||X&&B)&&m.mutate({trans:d,type:"delete",keys:xe,criteria:X,isAdditionalChunk:H>0}).then(function(Ze){return fa(l.table,xe,Ze)}).then(function(Ze){return I(xe.length,Ze)})}).then(function(){return L.length>H+j&&q(H+A)})})};return q(0).then(function(){if(O.length>0)throw new Q("Error modifying one or more objects",O,G,P);return L.length})})})},n.prototype.delete=function(){var a=this._ctx,s=a.range;return Xr(a)&&!a.table.schema.yProps&&(a.isPrimKey||s.type===3)?this._write(function(l){var d=a.table.core.schema.primaryKey,p=s;return a.table.core.count({trans:l,query:{index:d,range:p}}).then(function(m){return a.table.core.mutate({trans:l,type:"deleteRange",range:p}).then(function(v){var y=v.failures,x=v.numFailures;if(x)throw new Q("Could not delete some values",Object.keys(y).map(function(A){return y[A]}),m-x);return m-x})})}):this.modify(al)},n})(),al=function(n,a){return a.value=null};function Yf(n){return En(qf.prototype,function(s,l){this.db=n;var d=Xo,p=null;if(l)try{d=l()}catch(x){p=x}var m=s._ctx,v=m.table,y=v.hook.reading.fire;this._ctx={table:v,index:m.index,isPrimKey:!m.index||v.schema.primKey.keyPath&&m.index===v.schema.primKey.name,range:d,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:p,or:m.or,valueMapper:y!==Nt?y:null}})}function Xf(n,a){return n<a?-1:n===a?0:1}function Zf(n,a){return n>a?-1:n===a?0:1}function Dt(n,a,s){var l=n instanceof sl?new n.Collection(n):n;return l._ctx.error=s?new s(a):new TypeError(a),l}function Zr(n){return new n.Collection(n,function(){return il("")}).limit(0)}function Jf(n){return n==="next"?function(a){return a.toUpperCase()}:function(a){return a.toLowerCase()}}function Qf(n){return n==="next"?function(a){return a.toLowerCase()}:function(a){return a.toUpperCase()}}function em(n,a,s,l,d,p){for(var m=Math.min(n.length,l.length),v=-1,y=0;y<m;++y){var x=a[y];if(x!==l[y])return d(n[y],s[y])<0?n.substr(0,y)+s[y]+s.substr(y+1):d(n[y],l[y])<0?n.substr(0,y)+l[y]+s.substr(y+1):v>=0?n.substr(0,v)+a[v]+s.substr(v+1):null;d(n[y],x)<0&&(v=y)}return m<l.length&&p==="next"?n+s.substr(n.length):m<n.length&&p==="prev"?n.substr(0,s.length):v<0?null:n.substr(0,v)+l[v]+s.substr(v+1)}function ha(n,a,s,l){var d,p,m,v,y,x,A,C=s.length;if(!s.every(function(I){return typeof I=="string"}))return Dt(n,qo);function O(I){d=Jf(I),p=Qf(I),m=I==="next"?Xf:Zf;var B=s.map(function(L){return{lower:p(L),upper:d(L)}}).sort(function(L,X){return m(L.lower,X.lower)});v=B.map(function(L){return L.upper}),y=B.map(function(L){return L.lower}),x=I,A=I==="next"?"":l}O("next");var G=new n.Collection(n,function(){return br(v[0],y[C-1]+l)});G._ondirectionchange=function(I){O(I)};var P=0;return G._addAlgorithm(function(I,B,L){var X=I.key;if(typeof X!="string")return!1;var q=p(X);if(a(q,y,P))return!0;for(var H=null,j=P;j<C;++j){var ce=em(X,q,v[j],y[j],m,x);ce===null&&H===null?P=j+1:(H===null||m(H,ce)>0)&&(H=ce)}return B(H!==null?function(){I.continue(H+A)}:L),!1}),G}function br(n,a,s,l){return{type:2,lower:n,upper:a,lowerOpen:s,upperOpen:l}}function il(n){return{type:1,lower:n,upper:n}}var sl=(function(){function n(){}return Object.defineProperty(n.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),n.prototype.between=function(a,s,l,d){l=l!==!1,d=d===!0;try{return this._cmp(a,s)>0||this._cmp(a,s)===0&&(l||d)&&!(l&&d)?Zr(this):new this.Collection(this,function(){return br(a,s,!l,!d)})}catch{return Dt(this,or)}},n.prototype.equals=function(a){return a==null?Dt(this,or):new this.Collection(this,function(){return il(a)})},n.prototype.above=function(a){return a==null?Dt(this,or):new this.Collection(this,function(){return br(a,void 0,!0)})},n.prototype.aboveOrEqual=function(a){return a==null?Dt(this,or):new this.Collection(this,function(){return br(a,void 0,!1)})},n.prototype.below=function(a){return a==null?Dt(this,or):new this.Collection(this,function(){return br(void 0,a,!1,!0)})},n.prototype.belowOrEqual=function(a){return a==null?Dt(this,or):new this.Collection(this,function(){return br(void 0,a)})},n.prototype.startsWith=function(a){return typeof a!="string"?Dt(this,qo):this.between(a,a+Mr,!0,!0)},n.prototype.startsWithIgnoreCase=function(a){return a===""?this.startsWith(a):ha(this,function(s,l){return s.indexOf(l[0])===0},[a],Mr)},n.prototype.equalsIgnoreCase=function(a){return ha(this,function(s,l){return s===l[0]},[a],"")},n.prototype.anyOfIgnoreCase=function(){var a=Le.apply(Me,arguments);return a.length===0?Zr(this):ha(this,function(s,l){return l.indexOf(s)!==-1},a,"")},n.prototype.startsWithAnyOfIgnoreCase=function(){var a=Le.apply(Me,arguments);return a.length===0?Zr(this):ha(this,function(s,l){return l.some(function(d){return s.indexOf(d)===0})},a,Mr)},n.prototype.anyOf=function(){var a=this,s=Le.apply(Me,arguments),l=this._cmp;try{s.sort(l)}catch{return Dt(this,or)}if(s.length===0)return Zr(this);var d=new this.Collection(this,function(){return br(s[0],s[s.length-1])});d._ondirectionchange=function(m){l=m==="next"?a._ascending:a._descending,s.sort(l)};var p=0;return d._addAlgorithm(function(m,v,y){for(var x=m.key;l(x,s[p])>0;)if(++p,p===s.length)return v(y),!1;return l(x,s[p])===0?!0:(v(function(){m.continue(s[p])}),!1)}),d},n.prototype.notEqual=function(a){return this.inAnyRange([[Mi,a],[a,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},n.prototype.noneOf=function(){var a=Le.apply(Me,arguments);if(a.length===0)return new this.Collection(this);try{a.sort(this._ascending)}catch{return Dt(this,or)}var s=a.reduce(function(l,d){return l?l.concat([[l[l.length-1][1],d]]):[[Mi,d]]},null);return s.push([a[a.length-1],this.db._maxKey]),this.inAnyRange(s,{includeLowers:!1,includeUppers:!1})},n.prototype.inAnyRange=function(a,s){var l=this,d=this._cmp,p=this._ascending,m=this._descending,v=this._min,y=this._max;if(a.length===0)return Zr(this);if(!a.every(function(j){return j[0]!==void 0&&j[1]!==void 0&&p(j[0],j[1])<=0}))return Dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Y.InvalidArgument);var x=!s||s.includeLowers!==!1,A=s&&s.includeUppers===!0;function C(j,ce){for(var ie=0,se=j.length;ie<se;++ie){var be=j[ie];if(d(ce[0],be[1])<0&&d(ce[1],be[0])>0){be[0]=v(be[0],ce[0]),be[1]=y(be[1],ce[1]);break}}return ie===se&&j.push(ce),j}var O=p;function G(j,ce){return O(j[0],ce[0])}var P;try{P=a.reduce(C,[]),P.sort(G)}catch{return Dt(this,or)}var I=0,B=A?function(j){return p(j,P[I][1])>0}:function(j){return p(j,P[I][1])>=0},L=x?function(j){return m(j,P[I][0])>0}:function(j){return m(j,P[I][0])>=0};function X(j){return!B(j)&&!L(j)}var q=B,H=new this.Collection(this,function(){return br(P[0][0],P[P.length-1][1],!x,!A)});return H._ondirectionchange=function(j){j==="next"?(q=B,O=p):(q=L,O=m),P.sort(G)},H._addAlgorithm(function(j,ce,ie){for(var se=j.key;q(se);)if(++I,I===P.length)return ce(ie),!1;return X(se)?!0:(l._cmp(se,P[I][1])===0||l._cmp(se,P[I][0])===0||ce(function(){O===p?j.continue(P[I][0]):j.continue(P[I][1])}),!1)}),H},n.prototype.startsWithAnyOf=function(){var a=Le.apply(Me,arguments);return a.every(function(s){return typeof s=="string"})?a.length===0?Zr(this):this.inAnyRange(a.map(function(s){return[s,s+Mr]})):Dt(this,"startsWithAnyOf() only works with strings")},n})();function tm(n){return En(sl.prototype,function(s,l,d){if(this.db=n,this._ctx={table:s,index:l===":id"?null:l,or:d},this._cmp=this._ascending=Ge,this._descending=function(p,m){return Ge(m,p)},this._max=function(p,m){return Ge(p,m)>0?p:m},this._min=function(p,m){return Ge(p,m)<0?p:m},this._IDBKeyRange=n._deps.IDBKeyRange,!this._IDBKeyRange)throw new Y.MissingAPI})}function zt(n){return nt(function(a){return Tn(a),n(a.target.error),!1})}function Tn(n){n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault()}var va="storagemutated",Wi="x-storagemutated-1",wr=kn(null,va),rm=(function(){function n(){}return n.prototype._lock=function(){return D(!Se.global),++this._reculock,this._reculock===1&&!Se.global&&(Se.lockOwnerFor=this),this},n.prototype._unlock=function(){if(D(!Se.global),--this._reculock===0)for(Se.global||(Se.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var a=this._blockedFuncs.shift();try{Lr(a[1],a[0])}catch{}}return this},n.prototype._locked=function(){return this._reculock&&Se.lockOwnerFor!==this},n.prototype.create=function(a){var s=this;if(!this.mode)return this;var l=this.db.idbdb,d=this.db._state.dbOpenError;if(D(!this.idbtrans),!a&&!l)switch(d&&d.name){case"DatabaseClosedError":throw new Y.DatabaseClosed(d);case"MissingAPIError":throw new Y.MissingAPI(d.message,d);default:throw new Y.OpenFailed(d)}if(!this.active)throw new Y.TransactionInactive;return D(this._completion._state===null),a=this.idbtrans=a||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):l.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),a.onerror=nt(function(p){Tn(p),s._reject(a.error)}),a.onabort=nt(function(p){Tn(p),s.active&&s._reject(new Y.Abort(a.error)),s.active=!1,s.on("abort").fire(p)}),a.oncomplete=nt(function(){s.active=!1,s._resolve(),"mutatedParts"in a&&wr.storagemutated.fire(a.mutatedParts)}),this},n.prototype._promise=function(a,s,l){var d=this;if(a==="readwrite"&&this.mode!=="readwrite")return it(new Y.ReadOnly("Transaction is readonly"));if(!this.active)return it(new Y.TransactionInactive);if(this._locked())return new le(function(m,v){d._blockedFuncs.push([function(){d._promise(a,s,l).then(m,v)},Se])});if(l)return hr(function(){var m=new le(function(v,y){d._lock();var x=s(v,y,d);x&&x.then&&x.then(v,y)});return m.finally(function(){return d._unlock()}),m._lib=!0,m});var p=new le(function(m,v){var y=s(m,v,d);y&&y.then&&y.then(m,v)});return p._lib=!0,p},n.prototype._root=function(){return this.parent?this.parent._root():this},n.prototype.waitFor=function(a){var s=this._root(),l=le.resolve(a);if(s._waitingFor)s._waitingFor=s._waitingFor.then(function(){return l});else{s._waitingFor=l,s._waitingQueue=[];var d=s.idbtrans.objectStore(s.storeNames[0]);(function m(){for(++s._spinCount;s._waitingQueue.length;)s._waitingQueue.shift()();s._waitingFor&&(d.get(-1/0).onsuccess=m)})()}var p=s._waitingFor;return new le(function(m,v){l.then(function(y){return s._waitingQueue.push(nt(m.bind(null,y)))},function(y){return s._waitingQueue.push(nt(v.bind(null,y)))}).finally(function(){s._waitingFor===p&&(s._waitingFor=null)})})},n.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Y.Abort))},n.prototype.table=function(a){var s=this._memoizedTables||(this._memoizedTables={});if(w(s,a))return s[a];var l=this.schema[a];if(!l)throw new Y.NotFound("Table "+a+" not part of transaction");var d=new this.db.Table(a,l,this);return d.core=this.db.core.table(a),s[a]=d,d},n})();function nm(n){return En(rm.prototype,function(s,l,d,p,m){var v=this;s!=="readonly"&&l.forEach(function(y){var x,A=(x=d[y])===null||x===void 0?void 0:x.yProps;A&&(l=l.concat(A.map(function(C){return C.updatesTable})))}),this.db=n,this.mode=s,this.storeNames=l,this.schema=d,this.chromeTransactionDurability=p,this.idbtrans=null,this.on=kn(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new le(function(y,x){v._resolve=y,v._reject=x}),this._completion.then(function(){v.active=!1,v.on.complete.fire()},function(y){var x=v.active;return v.active=!1,v.on.error.fire(y),v.parent?v.parent._reject(y):x&&v.idbtrans&&v.idbtrans.abort(),it(y)})})}function Hi(n,a,s,l,d,p,m,v){return{name:n,keyPath:a,unique:s,multi:l,auto:d,compound:p,src:(s&&!m?"&":"")+(l?"*":"")+(d?"++":"")+ol(a),type:v}}function ol(n){return typeof n=="string"?n:n?"["+[].join.call(n,"+")+"]":""}function zi(n,a,s){return{name:n,primKey:a,indexes:s,mappedClass:null,idxByName:M(s,function(l){return[l.name,l]})}}function am(n){return n.length===1?n[0]:n}var Pn=function(n){try{return n.only([[]]),Pn=function(){return[[]]},[[]]}catch{return Pn=function(){return Mr},Mr}};function Ki(n){return n==null?function(){}:typeof n=="string"?im(n):function(a){return R(a,n)}}function im(n){var a=n.split(".");return a.length===1?function(s){return s[n]}:function(s){return R(s,n)}}function ll(n){return[].slice.call(n)}var sm=0;function An(n){return n==null?":id":typeof n=="string"?n:"[".concat(n.join("+"),"]")}function om(n,a,s){function l(O,G){var P=ll(O.objectStoreNames),I=P.length>0?G.objectStore(P[0]):{};return{schema:{name:O.name,tables:P.map(function(B){return G.objectStore(B)}).map(function(B){var L=B.keyPath,X=B.autoIncrement,q=u(L),H=L==null,j={},ce={name:B.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:H,compound:q,keyPath:L,autoIncrement:X,unique:!0,extractKey:Ki(L)},indexes:ll(B.indexNames).map(function(ie){return B.index(ie)}).map(function(ie){var se=ie.name,be=ie.unique,He=ie.multiEntry,xe=ie.keyPath,we=u(xe),Ce={name:se,compound:we,keyPath:xe,unique:be,multiEntry:He,extractKey:Ki(xe)};return j[An(xe)]=Ce,Ce}),getIndexByKeyPath:function(ie){return j[An(ie)]}};return j[":id"]=ce.primaryKey,L!=null&&(j[An(L)]=ce.primaryKey),ce})},hasGetAll:P.length>0&&"getAll"in I&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in I}}function d(O){if(O.type===3)return null;if(O.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var G=O.lower,P=O.upper,I=O.lowerOpen,B=O.upperOpen,L=G===void 0?P===void 0?null:a.upperBound(P,!!B):P===void 0?a.lowerBound(G,!!I):a.bound(G,P,!!I,!!B);return L}function p(O){var G=O.name;function P(L){var X=L.trans,q=L.type,H=L.keys,j=L.values,ce=L.range;return new Promise(function(ie,se){ie=nt(ie);var be=X.objectStore(G),He=be.keyPath==null,xe=q==="put"||q==="add";if(!xe&&q!=="delete"&&q!=="deleteRange")throw new Error("Invalid operation type: "+q);var we=(H||j||{length:1}).length;if(H&&j&&H.length!==j.length)throw new Error("Given keys array must have same length as given values array.");if(we===0)return ie({numFailures:0,failures:{},results:[],lastResult:void 0});var Ce,Ie=[],Ze=[],ke=0,mt=function(yt){++ke,Tn(yt)};if(q==="deleteRange"){if(ce.type===4)return ie({numFailures:ke,failures:Ze,results:[],lastResult:void 0});ce.type===3?Ie.push(Ce=be.clear()):Ie.push(Ce=be.delete(d(ce)))}else{var Ut=xe?He?[j,H]:[j,null]:[H,null],At=Ut[0],Br=Ut[1];if(xe)for(var Tt=0;Tt<we;++Tt)Ie.push(Ce=Br&&Br[Tt]!==void 0?be[q](At[Tt],Br[Tt]):be[q](At[Tt])),Ce.onerror=mt;else for(var Tt=0;Tt<we;++Tt)Ie.push(Ce=be[q](At[Tt])),Ce.onerror=mt}var Ft=function(yt){var Wr=yt.target.result;Ie.forEach(function(Kt,Ca){return Kt.error!=null&&(Ze[Ca]=Kt.error)}),ie({numFailures:ke,failures:Ze,results:q==="delete"?H:Ie.map(function(Kt){return Kt.result}),lastResult:Wr})};Ce.onerror=function(yt){mt(yt),Ft(yt)},Ce.onsuccess=Ft})}function I(L){var X=L.trans,q=L.values,H=L.query,j=L.reverse,ce=L.unique;return new Promise(function(ie,se){ie=nt(ie);var be=H.index,He=H.range,xe=X.objectStore(G),we=be.isPrimaryKey?xe:xe.index(be.name),Ce=j?ce?"prevunique":"prev":ce?"nextunique":"next",Ie=q||!("openKeyCursor"in we)?we.openCursor(d(He),Ce):we.openKeyCursor(d(He),Ce);Ie.onerror=zt(se),Ie.onsuccess=nt(function(Ze){var ke=Ie.result;if(!ke){ie(null);return}ke.___id=++sm,ke.done=!1;var mt=ke.continue.bind(ke),Ut=ke.continuePrimaryKey;Ut&&(Ut=Ut.bind(ke));var At=ke.advance.bind(ke),Br=function(){throw new Error("Cursor not started")},Tt=function(){throw new Error("Cursor not stopped")};ke.trans=X,ke.stop=ke.continue=ke.continuePrimaryKey=ke.advance=Br,ke.fail=nt(se),ke.next=function(){var Ft=this,yt=1;return this.start(function(){return yt--?Ft.continue():Ft.stop()}).then(function(){return Ft})},ke.start=function(Ft){var yt=new Promise(function(Kt,Ca){Kt=nt(Kt),Ie.onerror=zt(Ca),ke.fail=Ca,ke.stop=function(Ym){ke.stop=ke.continue=ke.continuePrimaryKey=ke.advance=Tt,Kt(Ym)}}),Wr=function(){if(Ie.result)try{Ft()}catch(Kt){ke.fail(Kt)}else ke.done=!0,ke.start=function(){throw new Error("Cursor behind last entry")},ke.stop()};return Ie.onsuccess=nt(function(Kt){Ie.onsuccess=Wr,Wr()}),ke.continue=mt,ke.continuePrimaryKey=Ut,ke.advance=At,Wr(),yt},ie(ke)},se)})}function B(L,X){return function(q){return new Promise(function(H,j){var ce;H=nt(H);var ie=q.trans,se=q.values,be=q.limit,He=q.query,xe=(ce=q.direction)!==null&&ce!==void 0?ce:"next",we=be===1/0?void 0:be,Ce=He.index,Ie=He.range,Ze=ie.objectStore(G),ke=Ce.isPrimaryKey?Ze:Ze.index(Ce.name),mt=d(Ie);if(be===0)return H({result:[]});if(X){var Ut={query:mt,count:we,direction:xe},At=se?ke.getAll(Ut):ke.getAllKeys(Ut);At.onsuccess=function(yt){return H({result:yt.target.result})},At.onerror=zt(j)}else if(L&&xe==="next"){var At=se?ke.getAll(mt,we):ke.getAllKeys(mt,we);At.onsuccess=function(Wr){return H({result:Wr.target.result})},At.onerror=zt(j)}else{var Br=0,Tt=se||!("openKeyCursor"in ke)?ke.openCursor(mt,xe):ke.openKeyCursor(mt,xe),Ft=[];Tt.onsuccess=function(){var yt=Tt.result;if(!yt)return H({result:Ft});if(Ft.push(se?yt.value:yt.primaryKey),++Br===be)return H({result:Ft});yt.continue()},Tt.onerror=zt(j)}})}}return{name:G,schema:O,mutate:P,getMany:function(L){var X=L.trans,q=L.keys;return new Promise(function(H,j){H=nt(H);for(var ce=X.objectStore(G),ie=q.length,se=new Array(ie),be=0,He=0,xe,we=function(ke){var mt=ke.target;(se[mt._pos]=mt.result)!=null,++He===be&&H(se)},Ce=zt(j),Ie=0;Ie<ie;++Ie){var Ze=q[Ie];Ze!=null&&(xe=ce.get(q[Ie]),xe._pos=Ie,xe.onsuccess=we,xe.onerror=Ce,++be)}be===0&&H(se)})},get:function(L){var X=L.trans,q=L.key;return new Promise(function(H,j){H=nt(H);var ce=X.objectStore(G),ie=ce.get(q);ie.onsuccess=function(se){return H(se.target.result)},ie.onerror=zt(j)})},query:B(y,x),openCursor:I,count:function(L){var X=L.query,q=L.trans,H=X.index,j=X.range;return new Promise(function(ce,ie){var se=q.objectStore(G),be=H.isPrimaryKey?se:se.index(H.name),He=d(j),xe=He?be.count(He):be.count();xe.onsuccess=nt(function(we){return ce(we.target.result)}),xe.onerror=zt(ie)})}}}var m=l(n,s),v=m.schema,y=m.hasGetAll,x=m.hasIdb3Features,A=v.tables.map(function(O){return p(O)}),C={};return A.forEach(function(O){return C[O.name]=O}),{stack:"dbcore",transaction:n.transaction.bind(n),table:function(O){var G=C[O];if(!G)throw new Error("Table '".concat(O,"' not found"));return C[O]},MIN_KEY:-1/0,MAX_KEY:Pn(a),schema:v}}function lm(n,a){return a.reduce(function(s,l){var d=l.create;return r(r({},s),d(s))},n)}function cm(n,a,s,l){var d=s.IDBKeyRange;s.indexedDB;var p=lm(om(a,d,l),n.dbcore);return{dbcore:p}}function ya(n,a){var s=a.db,l=cm(n._middlewares,s,n._deps,a);n.core=l.dbcore,n.tables.forEach(function(d){var p=d.name;n.core.schema.tables.some(function(m){return m.name===p})&&(d.core=n.core.table(p),n[p]instanceof n.Table&&(n[p].core=d.core))})}function ba(n,a,s,l){s.forEach(function(d){var p=l[d];a.forEach(function(m){var v=U(m,d);(!v||"value"in v&&v.value===void 0)&&(m===n.Transaction.prototype||m instanceof n.Transaction?k(m,d,{get:function(){return this.table(d)},set:function(y){S(this,d,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):m[d]=new n.Table(d,p))})})}function Gi(n,a){a.forEach(function(s){for(var l in s)s[l]instanceof n.Table&&delete s[l]})}function um(n,a){return n._cfg.version-a._cfg.version}function dm(n,a,s,l){var d=n._dbSchema;s.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=zi("$meta",ul("")[0],[]),n._storeNames.push("$meta"));var p=n._createTransaction("readwrite",n._storeNames,d);p.create(s),p._completion.catch(l);var m=p._reject.bind(p),v=Se.transless||Se;hr(function(){if(Se.trans=p,Se.transless=v,a===0)c(d).forEach(function(y){ji(s,y,d[y].primKey,d[y].indexes)}),ya(n,s),le.follow(function(){return n.on.populate.fire(p)}).catch(m);else return ya(n,s),fm(n,p,a).then(function(y){return mm(n,y,p,s)}).catch(m)})}function pm(n,a){cl(n._dbSchema,a),a.db.version%10===0&&!a.objectStoreNames.contains("$meta")&&a.db.createObjectStore("$meta").add(Math.ceil(a.db.version/10-1),"version");var s=Sa(n,n.idbdb,a);xa(n,n._dbSchema,a);for(var l=Vi(s,n._dbSchema),d=function(x){if(x.change.length||x.recreate)return console.warn("Unable to patch indexes of table ".concat(x.name," because it has changes on the type of index or primary key.")),{value:void 0};var A=a.objectStore(x.name);x.add.forEach(function(C){qe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(x.name,".").concat(C.src)),wa(A,C)})},p=0,m=l.change;p<m.length;p++){var v=m[p],y=d(v);if(typeof y=="object")return y.value}}function fm(n,a,s){return a.storeNames.includes("$meta")?a.table("$meta").get("version").then(function(l){return l??s}):le.resolve(s)}function mm(n,a,s,l){var d=[],p=n._versions,m=n._dbSchema=Sa(n,n.idbdb,l),v=p.filter(function(x){return x._cfg.version>=a});if(v.length===0)return le.resolve();v.forEach(function(x){d.push(function(){var A=m,C=x._cfg.dbschema;xa(n,A,l),xa(n,C,l),m=n._dbSchema=C;var O=Vi(A,C);O.add.forEach(function(X){ji(l,X[0],X[1].primKey,X[1].indexes)}),O.change.forEach(function(X){if(X.recreate)throw new Y.Upgrade("Not yet support for changing primary key");var q=l.objectStore(X.name);X.add.forEach(function(H){return wa(q,H)}),X.change.forEach(function(H){q.deleteIndex(H.name),wa(q,H)}),X.del.forEach(function(H){return q.deleteIndex(H)})});var G=x._cfg.contentUpgrade;if(G&&x._cfg.version>a){ya(n,l),s._memoizedTables={};var P=K(C);O.del.forEach(function(X){P[X]=A[X]}),Gi(n,[n.Transaction.prototype]),ba(n,[n.Transaction.prototype],c(P),P),s.schema=P;var I=et(G);I&&Yr();var B,L=le.follow(function(){if(B=G(s),B&&I){var X=vr.bind(null,null);B.then(X,X)}});return B&&typeof B.then=="function"?le.resolve(B):L.then(function(){return B})}}),d.push(function(A){var C=x._cfg.dbschema;gm(C,A),Gi(n,[n.Transaction.prototype]),ba(n,[n.Transaction.prototype],n._storeNames,n._dbSchema),s.schema=n._dbSchema}),d.push(function(A){n.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(n.idbdb.version/10)===x._cfg.version?(n.idbdb.deleteObjectStore("$meta"),delete n._dbSchema.$meta,n._storeNames=n._storeNames.filter(function(C){return C!=="$meta"})):A.objectStore("$meta").put(x._cfg.version,"version"))})});function y(){return d.length?le.resolve(d.shift()(s.idbtrans)).then(y):le.resolve()}return y().then(function(){cl(m,l)})}function Vi(n,a){var s={del:[],add:[],change:[]},l;for(l in n)a[l]||s.del.push(l);for(l in a){var d=n[l],p=a[l];if(!d)s.add.push([l,p]);else{var m={name:l,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||d.primKey.auto!==p.primKey.auto)m.recreate=!0,s.change.push(m);else{var v=d.idxByName,y=p.idxByName,x=void 0;for(x in v)y[x]||m.del.push(x);for(x in y){var A=v[x],C=y[x];A?A.src!==C.src&&m.change.push(C):m.add.push(C)}(m.del.length>0||m.add.length>0||m.change.length>0)&&s.change.push(m)}}}return s}function ji(n,a,s,l){var d=n.db.createObjectStore(a,s.keyPath?{keyPath:s.keyPath,autoIncrement:s.auto}:{autoIncrement:s.auto});return l.forEach(function(p){return wa(d,p)}),d}function cl(n,a){c(n).forEach(function(s){a.db.objectStoreNames.contains(s)||(qe&&console.debug("Dexie: Creating missing table",s),ji(a,s,n[s].primKey,n[s].indexes))})}function gm(n,a){[].slice.call(a.db.objectStoreNames).forEach(function(s){return n[s]==null&&a.db.deleteObjectStore(s)})}function wa(n,a){n.createIndex(a.name,a.keyPath,{unique:a.unique,multiEntry:a.multi})}function Sa(n,a,s){var l={},d=W(a.objectStoreNames,0);return d.forEach(function(p){for(var m=s.objectStore(p),v=m.keyPath,y=Hi(ol(v),v||"",!0,!1,!!m.autoIncrement,v&&typeof v!="string",!0),x=[],A=0;A<m.indexNames.length;++A){var C=m.index(m.indexNames[A]);v=C.keyPath;var O=Hi(C.name,v,!!C.unique,!!C.multiEntry,!1,v&&typeof v!="string",!1);x.push(O)}l[p]=zi(p,y,x)}),l}function hm(n,a,s){n.verno=a.version/10;var l=n._dbSchema=Sa(n,a,s);n._storeNames=W(a.objectStoreNames,0),ba(n,[n._allTables],c(l),l)}function vm(n,a){var s=Sa(n,n.idbdb,a),l=Vi(s,n._dbSchema);return!(l.add.length||l.change.some(function(d){return d.add.length||d.change.length}))}function xa(n,a,s){for(var l=s.db.objectStoreNames,d=0;d<l.length;++d){var p=l[d],m=s.objectStore(p);n._hasGetAll="getAll"in m;for(var v=0;v<m.indexNames.length;++v){var y=m.indexNames[v],x=m.index(y).keyPath,A=typeof x=="string"?x:"["+W(x).join("+")+"]";if(a[p]){var C=a[p].idxByName[A];C&&(C.name=y,delete a[p].idxByName[A],a[p].idxByName[y]=C)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(n._hasGetAll=!1)}function ul(n){return n.split(",").map(function(a,s){var l,d=a.split(":"),p=(l=d[1])===null||l===void 0?void 0:l.trim();a=d[0].trim();var m=a.replace(/([&*]|\+\+)/g,""),v=/^\[/.test(m)?m.match(/^\[(.*)\]$/)[1].split("+"):m;return Hi(m,v||null,/\&/.test(a),/\*/.test(a),/\+\+/.test(a),u(v),s===0,p)})}var ym=(function(){function n(){}return n.prototype._createTableSchema=function(a,s,l){return zi(a,s,l)},n.prototype._parseIndexSyntax=function(a){return ul(a)},n.prototype._parseStoresSpec=function(a,s){var l=this;c(a).forEach(function(d){if(a[d]!==null){var p=l._parseIndexSyntax(a[d]),m=p.shift();if(!m)throw new Y.Schema("Invalid schema for table "+d+": "+a[d]);if(m.unique=!0,m.multi)throw new Y.Schema("Primary key cannot be multiEntry*");p.forEach(function(y){if(y.auto)throw new Y.Schema("Only primary key can be marked as autoIncrement (++)");if(!y.keyPath)throw new Y.Schema("Index must have a name and cannot be an empty string")});var v=l._createTableSchema(d,m,p);s[d]=v}})},n.prototype.stores=function(a){var s=this.db;this._cfg.storesSource=this._cfg.storesSource?f(this._cfg.storesSource,a):a;var l=s._versions,d={},p={};return l.forEach(function(m){f(d,m._cfg.storesSource),p=m._cfg.dbschema={},m._parseStoresSpec(d,p)}),s._dbSchema=p,Gi(s,[s._allTables,s,s.Transaction.prototype]),ba(s,[s._allTables,s,s.Transaction.prototype,this._cfg.tables],c(p),p),s._storeNames=c(p),this},n.prototype.upgrade=function(a){return this._cfg.contentUpgrade=ct(this._cfg.contentUpgrade||Ue,a),this},n})();function bm(n){return En(ym.prototype,function(s){this.db=n,this._cfg={version:s,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var Rn=wm();function wm(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var n=new Set,a=new FinalizationRegistry(function(m){n.delete(m)}),s=function(){return Array.from(n).map(function(m){return m.deref()}).filter(function(m){return m!==void 0})},l=function(m){var v=new WeakRef(m._novip);if(n.add(v),a.register(m._novip,v,v),n.size>m._options.maxConnections){var y=n.values().next().value;n.delete(y),a.unregister(y)}},d=function(m){if(m)for(var v=n.values(),y=v.next();!y.done;){var x=y.value;if(x.deref()===m._novip){n.delete(x),a.unregister(x);return}y=v.next()}};return{toArray:s,add:l,remove:d}}else{var p=[],s=function(){return p},l=function(x){p.push(x._novip)},d=function(x){if(x){var A=p.indexOf(x._novip);A!==-1&&p.splice(A,1)}};return{toArray:s,add:l,remove:d}}}function qi(n,a){var s=n._dbNamesDB;return s||(s=n._dbNamesDB=new lr(da,{addons:[],indexedDB:n,IDBKeyRange:a}),s.version(1).stores({dbnames:"name"})),s.table("dbnames")}function Yi(n){return n&&typeof n.databases=="function"}function Sm(n){var a=n.indexedDB,s=n.IDBKeyRange;return Yi(a)?Promise.resolve(a.databases()).then(function(l){return l.map(function(d){return d.name}).filter(function(d){return d!==da})}):qi(a,s).toCollection().primaryKeys()}function xm(n,a){var s=n.indexedDB,l=n.IDBKeyRange;!Yi(s)&&a!==da&&qi(s,l).put({name:a}).catch(Ue)}function km(n,a){var s=n.indexedDB,l=n.IDBKeyRange;!Yi(s)&&a!==da&&qi(s,l).delete(a).catch(Ue)}function Xi(n){return hr(function(){return Se.letThrough=!0,n()})}function Em(){var n=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!n||!indexedDB.databases)return Promise.resolve();var a;return new Promise(function(s){var l=function(){return indexedDB.databases().finally(s)};a=setInterval(l,100),l()}).finally(function(){return clearInterval(a)})}var Zi;function Ji(n){return!("from"in n)}var Et=function(n,a){if(this)f(this,arguments.length?{d:1,from:n,to:arguments.length>1?a:n}:{d:0});else{var s=new Et;return n&&"d"in n&&f(s,n),s}};b(Et.prototype,(Zi={add:function(n){return In(this,n),this},addKey:function(n){return Cn(this,n,n),this},addKeys:function(n){var a=this;return n.forEach(function(s){return Cn(a,s,s)}),this},hasKey:function(n){var a=ka(this).next(n).value;return a&&Ge(a.from,n)<=0&&Ge(a.to,n)>=0}},Zi[ae]=function(){return ka(this)},Zi));function Cn(n,a,s){var l=Ge(a,s);if(!isNaN(l)){if(l>0)throw RangeError();if(Ji(n))return f(n,{from:a,to:s,d:1});var d=n.l,p=n.r;if(Ge(s,n.from)<0)return d?Cn(d,a,s):n.l={from:a,to:s,d:1,l:null,r:null},pl(n);if(Ge(a,n.to)>0)return p?Cn(p,a,s):n.r={from:a,to:s,d:1,l:null,r:null},pl(n);Ge(a,n.from)<0&&(n.from=a,n.l=null,n.d=p?p.d+1:1),Ge(s,n.to)>0&&(n.to=s,n.r=null,n.d=n.l?n.l.d+1:1);var m=!n.r;d&&!n.l&&In(n,d),p&&m&&In(n,p)}}function In(n,a){function s(l,d){var p=d.from,m=d.to,v=d.l,y=d.r;Cn(l,p,m),v&&s(l,v),y&&s(l,y)}Ji(a)||s(n,a)}function dl(n,a){var s=ka(a),l=s.next();if(l.done)return!1;for(var d=l.value,p=ka(n),m=p.next(d.from),v=m.value;!l.done&&!m.done;){if(Ge(v.from,d.to)<=0&&Ge(v.to,d.from)>=0)return!0;Ge(d.from,v.from)<0?d=(l=s.next(v.from)).value:v=(m=p.next(d.from)).value}return!1}function ka(n){var a=Ji(n)?null:{s:0,n};return{next:function(s){for(var l=arguments.length>0;a;)switch(a.s){case 0:if(a.s=1,l)for(;a.n.l&&Ge(s,a.n.from)<0;)a={up:a,n:a.n.l,s:1};else for(;a.n.l;)a={up:a,n:a.n.l,s:1};case 1:if(a.s=2,!l||Ge(s,a.n.to)<=0)return{value:a.n,done:!1};case 2:if(a.n.r){a.s=3,a={up:a,n:a.n.r,s:0};continue}case 3:a=a.up}return{done:!0}}}}function pl(n){var a,s,l=(((a=n.r)===null||a===void 0?void 0:a.d)||0)-(((s=n.l)===null||s===void 0?void 0:s.d)||0),d=l>1?"r":l<-1?"l":"";if(d){var p=d==="r"?"l":"r",m=r({},n),v=n[d];n.from=v.from,n.to=v.to,n[d]=v[d],m[d]=v[p],n[p]=m,m.d=fl(m)}n.d=fl(n)}function fl(n){var a=n.r,s=n.l;return(a?s?Math.max(a.d,s.d):a.d:s?s.d:0)+1}function Ea(n,a){return c(a).forEach(function(s){n[s]?In(n[s],a[s]):n[s]=re(a[s])}),n}function Qi(n,a){return n.all||a.all||Object.keys(n).some(function(s){return a[s]&&dl(a[s],n[s])})}var Ur={},es={},ts=!1;function Ta(n,a){Ea(es,n),ts||(ts=!0,setTimeout(function(){ts=!1;var s=es;es={},rs(s,!1)},0))}function rs(n,a){a===void 0&&(a=!1);var s=new Set;if(n.all)for(var l=0,d=Object.values(Ur);l<d.length;l++){var p=d[l];ml(p,n,s,a)}else for(var m in n){var v=/^idb\:\/\/(.*)\/(.*)\//.exec(m);if(v){var y=v[1],x=v[2],p=Ur["idb://".concat(y,"/").concat(x)];p&&ml(p,n,s,a)}}s.forEach(function(A){return A()})}function ml(n,a,s,l){for(var d=[],p=0,m=Object.entries(n.queries.query);p<m.length;p++){for(var v=m[p],y=v[0],x=v[1],A=[],C=0,O=x;C<O.length;C++){var G=O[C];Qi(a,G.obsSet)?G.subscribers.forEach(function(L){return s.add(L)}):l&&A.push(G)}l&&d.push([y,A])}if(l)for(var P=0,I=d;P<I.length;P++){var B=I[P],y=B[0],A=B[1];n.queries.query[y]=A}}function Tm(n){var a=n._state,s=n._deps.indexedDB;if(a.isBeingOpened||n.idbdb)return a.dbReadyPromise.then(function(){return a.dbOpenError?it(a.dbOpenError):n});a.isBeingOpened=!0,a.dbOpenError=null,a.openComplete=!1;var l=a.openCanceller,d=Math.round(n.verno*10),p=!1;function m(){if(a.openCanceller!==l)throw new Y.DatabaseClosed("db.open() was cancelled")}var v=a.dbReadyResolve,y=null,x=!1,A=function(){return new le(function(C,O){if(m(),!s)throw new Y.MissingAPI;var G=n.name,P=a.autoSchema||!d?s.open(G):s.open(G,d);if(!P)throw new Y.MissingAPI;P.onerror=zt(O),P.onblocked=nt(n._fireOnBlocked),P.onupgradeneeded=nt(function(I){if(y=P.transaction,a.autoSchema&&!n._options.allowEmptyDB){P.onerror=Tn,y.abort(),P.result.close();var B=s.deleteDatabase(G);B.onsuccess=B.onerror=nt(function(){O(new Y.NoSuchDatabase("Database ".concat(G," doesnt exist")))})}else{y.onerror=zt(O);var L=I.oldVersion>Math.pow(2,62)?0:I.oldVersion;x=L<1,n.idbdb=P.result,p&&pm(n,y),dm(n,L/10,y,O)}},O),P.onsuccess=nt(function(){y=null;var I=n.idbdb=P.result,B=W(I.objectStoreNames);if(B.length>0)try{var L=I.transaction(am(B),"readonly");if(a.autoSchema)hm(n,I,L);else if(xa(n,n._dbSchema,L),!vm(n,L)&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),I.close(),d=I.version+1,p=!0,C(A());ya(n,L)}catch{}Rn.add(n),I.onversionchange=nt(function(X){a.vcFired=!0,n.on("versionchange").fire(X)}),I.onclose=nt(function(){n.close({disableAutoOpen:!1})}),x&&xm(n._deps,G),C()},O)}).catch(function(C){switch(C?.name){case"UnknownError":if(a.PR1398_maxLoop>0)return a.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),A();break;case"VersionError":if(d>0)return d=0,A();break}return le.reject(C)})};return le.race([l,(typeof navigator>"u"?le.resolve():Em()).then(A)]).then(function(){return m(),a.onReadyBeingFired=[],le.resolve(Xi(function(){return n.on.ready.fire(n.vip)})).then(function C(){if(a.onReadyBeingFired.length>0){var O=a.onReadyBeingFired.reduce(ct,Ue);return a.onReadyBeingFired=[],le.resolve(Xi(function(){return O(n.vip)})).then(C)}})}).finally(function(){a.openCanceller===l&&(a.onReadyBeingFired=null,a.isBeingOpened=!1)}).catch(function(C){a.dbOpenError=C;try{y&&y.abort()}catch{}return l===a.openCanceller&&n._close(),it(C)}).finally(function(){a.openComplete=!0,v()}).then(function(){if(x){var C={};n.tables.forEach(function(O){O.schema.indexes.forEach(function(G){G.name&&(C["idb://".concat(n.name,"/").concat(O.name,"/").concat(G.name)]=new Et(-1/0,[[[]]]))}),C["idb://".concat(n.name,"/").concat(O.name,"/")]=C["idb://".concat(n.name,"/").concat(O.name,"/:dels")]=new Et(-1/0,[[[]]])}),wr(va).fire(C),rs(C,!0)}return n})}function ns(n){var a=function(m){return n.next(m)},s=function(m){return n.throw(m)},l=p(a),d=p(s);function p(m){return function(v){var y=m(v),x=y.value;return y.done?x:!x||typeof x.then!="function"?u(x)?Promise.all(x).then(l,d):l(x):x.then(l,d)}}return p(a)()}function Pm(n,a,s){var l=arguments.length;if(l<2)throw new Y.InvalidArgument("Too few arguments");for(var d=new Array(l-1);--l;)d[l-1]=arguments[l];s=d.pop();var p=ge(d);return[n,p,s]}function gl(n,a,s,l,d){return le.resolve().then(function(){var p=Se.transless||Se,m=n._createTransaction(a,s,n._dbSchema,l);m.explicit=!0;var v={trans:m,transless:p};if(l)m.idbtrans=l.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,n._state.PR1398_maxLoop=3}catch(C){return C.name===he.InvalidState&&n.isOpen()&&--n._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),n.close({disableAutoOpen:!1}),n.open().then(function(){return gl(n,a,s,null,d)})):it(C)}var y=et(d);y&&Yr();var x,A=le.follow(function(){if(x=d.call(m,m),x)if(y){var C=vr.bind(null,null);x.then(C,C)}else typeof x.next=="function"&&typeof x.throw=="function"&&(x=ns(x))},v);return(x&&typeof x.then=="function"?le.resolve(x).then(function(C){return m.active?C:it(new Y.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):A.then(function(){return x})).then(function(C){return l&&m._resolve(),m._completion.then(function(){return C})}).catch(function(C){return m._reject(C),it(C)})})}function Pa(n,a,s){for(var l=u(n)?n.slice():[n],d=0;d<s;++d)l.push(a);return l}function Am(n){return r(r({},n),{table:function(a){var s=n.table(a),l=s.schema,d={},p=[];function m(I,B,L){var X=An(I),q=d[X]=d[X]||[],H=I==null?0:typeof I=="string"?1:I.length,j=B>0,ce=r(r({},L),{name:j?"".concat(X,"(virtual-from:").concat(L.name,")"):L.name,lowLevelIndex:L,isVirtual:j,keyTail:B,keyLength:H,extractKey:Ki(I),unique:!j&&L.unique});if(q.push(ce),ce.isPrimaryKey||p.push(ce),H>1){var ie=H===2?I[0]:I.slice(0,H-1);m(ie,B+1,L)}return q.sort(function(se,be){return se.keyTail-be.keyTail}),ce}var v=m(l.primaryKey.keyPath,0,l.primaryKey);d[":id"]=[v];for(var y=0,x=l.indexes;y<x.length;y++){var A=x[y];m(A.keyPath,0,A)}function C(I){var B=d[An(I)];return B&&B[0]}function O(I,B){return{type:I.type===1?2:I.type,lower:Pa(I.lower,I.lowerOpen?n.MAX_KEY:n.MIN_KEY,B),lowerOpen:!0,upper:Pa(I.upper,I.upperOpen?n.MIN_KEY:n.MAX_KEY,B),upperOpen:!0}}function G(I){var B=I.query.index;return B.isVirtual?r(r({},I),{query:{index:B.lowLevelIndex,range:O(I.query.range,B.keyTail)}}):I}var P=r(r({},s),{schema:r(r({},l),{primaryKey:v,indexes:p,getIndexByKeyPath:C}),count:function(I){return s.count(G(I))},query:function(I){return s.query(G(I))},openCursor:function(I){var B=I.query.index,L=B.keyTail,X=B.isVirtual,q=B.keyLength;if(!X)return s.openCursor(I);function H(j){function ce(se){se!=null?j.continue(Pa(se,I.reverse?n.MAX_KEY:n.MIN_KEY,L)):I.unique?j.continue(j.key.slice(0,q).concat(I.reverse?n.MIN_KEY:n.MAX_KEY,L)):j.continue()}var ie=Object.create(j,{continue:{value:ce},continuePrimaryKey:{value:function(se,be){j.continuePrimaryKey(Pa(se,n.MAX_KEY,L),be)}},primaryKey:{get:function(){return j.primaryKey}},key:{get:function(){var se=j.key;return q===1?se[0]:se.slice(0,q)}},value:{get:function(){return j.value}}});return ie}return s.openCursor(G(I)).then(function(j){return j&&H(j)})}});return P}})}var Rm={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:Am};function as(n,a,s,l){return s=s||{},l=l||"",c(n).forEach(function(d){if(!w(a,d))s[l+d]=void 0;else{var p=n[d],m=a[d];if(typeof p=="object"&&typeof m=="object"&&p&&m){var v=T(p),y=T(m);v!==y?s[l+d]=a[d]:v==="Object"?as(p,m,s,l+d+"."):p!==m&&(s[l+d]=a[d])}else p!==m&&(s[l+d]=a[d])}}),c(a).forEach(function(d){w(n,d)||(s[l+d]=a[d])}),s}function is(n,a){return a.type==="delete"?a.keys:a.keys||a.values.map(n.extractKey)}var Cm={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(n){return r(r({},n),{table:function(a){var s=n.table(a),l=s.schema.primaryKey,d=r(r({},s),{mutate:function(p){var m=Se.trans,v=m.table(a).hook,y=v.deleting,x=v.creating,A=v.updating;switch(p.type){case"add":if(x.fire===Ue)break;return m._promise("readwrite",function(){return C(p)},!0);case"put":if(x.fire===Ue&&A.fire===Ue)break;return m._promise("readwrite",function(){return C(p)},!0);case"delete":if(y.fire===Ue)break;return m._promise("readwrite",function(){return C(p)},!0);case"deleteRange":if(y.fire===Ue)break;return m._promise("readwrite",function(){return O(p)},!0)}return s.mutate(p);function C(P){var I=Se.trans,B=P.keys||is(l,P);if(!B)throw new Error("Keys missing");return P=P.type==="add"||P.type==="put"?r(r({},P),{keys:B}):r({},P),P.type!=="delete"&&(P.values=i([],P.values,!0)),P.keys&&(P.keys=i([],P.keys,!0)),Im(s,P,B).then(function(L){var X=B.map(function(q,H){var j=L[H],ce={onerror:null,onsuccess:null};if(P.type==="delete")y.fire.call(ce,q,j,I);else if(P.type==="add"||j===void 0){var ie=x.fire.call(ce,q,P.values[H],I);q==null&&ie!=null&&(q=ie,P.keys[H]=q,l.outbound||E(P.values[H],l.keyPath,q))}else{var se=as(j,P.values[H]),be=A.fire.call(ce,se,q,j,I);if(be){var He=P.values[H];Object.keys(be).forEach(function(xe){w(He,xe)?He[xe]=be[xe]:E(He,xe,be[xe])})}}return ce});return s.mutate(P).then(function(q){for(var H=q.failures,j=q.results,ce=q.numFailures,ie=q.lastResult,se=0;se<B.length;++se){var be=j?j[se]:B[se],He=X[se];be==null?He.onerror&&He.onerror(H[se]):He.onsuccess&&He.onsuccess(P.type==="put"&&L[se]?P.values[se]:be)}return{failures:H,results:j,numFailures:ce,lastResult:ie}}).catch(function(q){return X.forEach(function(H){return H.onerror&&H.onerror(q)}),Promise.reject(q)})})}function O(P){return G(P.trans,P.range,1e4)}function G(P,I,B){return s.query({trans:P,values:!1,query:{index:l,range:I},limit:B}).then(function(L){var X=L.result;return C({type:"delete",keys:X,trans:P}).then(function(q){return q.numFailures>0?Promise.reject(q.failures[0]):X.length<B?{failures:[],numFailures:0,lastResult:void 0}:G(P,r(r({},I),{lower:X[X.length-1],lowerOpen:!0}),B)})})}}});return d}})}};function Im(n,a,s){return a.type==="add"?Promise.resolve([]):n.getMany({trans:a.trans,keys:s,cache:"immutable"})}function hl(n,a,s){try{if(!a||a.keys.length<n.length)return null;for(var l=[],d=0,p=0;d<a.keys.length&&p<n.length;++d)Ge(a.keys[d],n[p])===0&&(l.push(s?Re(a.values[d]):a.values[d]),++p);return l.length===n.length?l:null}catch{return null}}var Nm={stack:"dbcore",level:-1,create:function(n){return{table:function(a){var s=n.table(a);return r(r({},s),{getMany:function(l){if(!l.cache)return s.getMany(l);var d=hl(l.keys,l.trans._cache,l.cache==="clone");return d?le.resolve(d):s.getMany(l).then(function(p){return l.trans._cache={keys:l.keys,values:l.cache==="clone"?Re(p):p},p})},mutate:function(l){return l.type!=="add"&&(l.trans._cache=null),s.mutate(l)}})}}}};function vl(n,a){return n.trans.mode==="readonly"&&!!n.subscr&&!n.trans.explicit&&n.trans.db._options.cache!=="disabled"&&!a.schema.primaryKey.outbound}function yl(n,a){switch(n){case"query":return a.values&&!a.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var _m={stack:"dbcore",level:0,name:"Observability",create:function(n){var a=n.schema.name,s=new Et(n.MIN_KEY,n.MAX_KEY);return r(r({},n),{transaction:function(l,d,p){if(Se.subscr&&d!=="readonly")throw new Y.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Se.querier));return n.transaction(l,d,p)},table:function(l){var d=n.table(l),p=d.schema,m=p.primaryKey,v=p.indexes,y=m.extractKey,x=m.outbound,A=m.autoIncrement&&v.filter(function(P){return P.compound&&P.keyPath.includes(m.keyPath)}),C=r(r({},d),{mutate:function(P){var I,B,L=P.trans,X=P.mutatedParts||(P.mutatedParts={}),q=function(Ce){var Ie="idb://".concat(a,"/").concat(l,"/").concat(Ce);return X[Ie]||(X[Ie]=new Et)},H=q(""),j=q(":dels"),ce=P.type,ie=P.type==="deleteRange"?[P.range]:P.type==="delete"?[P.keys]:P.values.length<50?[is(m,P).filter(function(Ce){return Ce}),P.values]:[],se=ie[0],be=ie[1],He=P.trans._cache;if(u(se)){H.addKeys(se);var xe=ce==="delete"||se.length===be.length?hl(se,He):null;xe||j.addKeys(se),(xe||be)&&Dm(q,p,xe,be)}else if(se){var we={from:(I=se.lower)!==null&&I!==void 0?I:n.MIN_KEY,to:(B=se.upper)!==null&&B!==void 0?B:n.MAX_KEY};j.add(we),H.add(we)}else H.add(s),j.add(s),p.indexes.forEach(function(Ce){return q(Ce.name).add(s)});return d.mutate(P).then(function(Ce){return se&&(P.type==="add"||P.type==="put")&&(H.addKeys(Ce.results),A&&A.forEach(function(Ie){for(var Ze=P.values.map(function(At){return Ie.extractKey(At)}),ke=Ie.keyPath.findIndex(function(At){return At===m.keyPath}),mt=0,Ut=Ce.results.length;mt<Ut;++mt)Ze[mt][ke]=Ce.results[mt];q(Ie.name).addKeys(Ze)})),L.mutatedParts=Ea(L.mutatedParts||{},X),Ce})}}),O=function(P){var I,B,L=P.query,X=L.index,q=L.range;return[X,new Et((I=q.lower)!==null&&I!==void 0?I:n.MIN_KEY,(B=q.upper)!==null&&B!==void 0?B:n.MAX_KEY)]},G={get:function(P){return[m,new Et(P.key)]},getMany:function(P){return[m,new Et().addKeys(P.keys)]},count:O,query:O,openCursor:O};return c(G).forEach(function(P){C[P]=function(I){var B=Se.subscr,L=!!B,X=vl(Se,d)&&yl(P,I),q=X?I.obsSet={}:B;if(L){var H=function(xe){var we="idb://".concat(a,"/").concat(l,"/").concat(xe);return q[we]||(q[we]=new Et)},j=H(""),ce=H(":dels"),ie=G[P](I),se=ie[0],be=ie[1];if(P==="query"&&se.isPrimaryKey&&!I.values?ce.add(be):H(se.name||"").add(be),!se.isPrimaryKey)if(P==="count")ce.add(s);else{var He=P==="query"&&x&&I.values&&d.query(r(r({},I),{values:!1}));return d[P].apply(this,arguments).then(function(xe){if(P==="query"){if(x&&I.values)return He.then(function(Ze){var ke=Ze.result;return j.addKeys(ke),xe});var we=I.values?xe.result.map(y):xe.result;I.values?j.addKeys(we):ce.addKeys(we)}else if(P==="openCursor"){var Ce=xe,Ie=I.values;return Ce&&Object.create(Ce,{key:{get:function(){return ce.addKey(Ce.primaryKey),Ce.key}},primaryKey:{get:function(){var Ze=Ce.primaryKey;return ce.addKey(Ze),Ze}},value:{get:function(){return Ie&&j.addKey(Ce.primaryKey),Ce.value}}})}return xe})}}return d[P].apply(this,arguments)}}),C}})}};function Dm(n,a,s,l){function d(p){var m=n(p.name||"");function v(x){return x!=null?p.extractKey(x):null}var y=function(x){return p.multiEntry&&u(x)?x.forEach(function(A){return m.addKey(A)}):m.addKey(x)};(s||l).forEach(function(x,A){var C=s&&v(s[A]),O=l&&v(l[A]);Ge(C,O)!==0&&(C!=null&&y(C),O!=null&&y(O))})}a.indexes.forEach(d)}function bl(n,a,s){if(s.numFailures===0)return a;if(a.type==="deleteRange")return null;var l=a.keys?a.keys.length:"values"in a&&a.values?a.values.length:1;if(s.numFailures===l)return null;var d=r({},a);return u(d.keys)&&(d.keys=d.keys.filter(function(p,m){return!(m in s.failures)})),"values"in d&&u(d.values)&&(d.values=d.values.filter(function(p,m){return!(m in s.failures)})),d}function Om(n,a){return a.lower===void 0?!0:a.lowerOpen?Ge(n,a.lower)>0:Ge(n,a.lower)>=0}function Lm(n,a){return a.upper===void 0?!0:a.upperOpen?Ge(n,a.upper)<0:Ge(n,a.upper)<=0}function ss(n,a){return Om(n,a)&&Lm(n,a)}function wl(n,a,s,l,d,p){if(!s||s.length===0)return n;var m=a.query.index,v=m.multiEntry,y=a.query.range,x=l.schema.primaryKey,A=x.extractKey,C=m.extractKey,O=(m.lowLevelIndex||m).extractKey,G=s.reduce(function(I,B){var L=I,X=[];if(B.type==="add"||B.type==="put")for(var q=new Et,H=B.values.length-1;H>=0;--H){var j=B.values[H],ce=A(j);if(!q.hasKey(ce)){var ie=C(j);(v&&u(ie)?ie.some(function(we){return ss(we,y)}):ss(ie,y))&&(q.addKey(ce),X.push(j))}}switch(B.type){case"add":{var se=new Et().addKeys(a.values?I.map(function(we){return A(we)}):I);L=I.concat(a.values?X.filter(function(we){var Ce=A(we);return se.hasKey(Ce)?!1:(se.addKey(Ce),!0)}):X.map(function(we){return A(we)}).filter(function(we){return se.hasKey(we)?!1:(se.addKey(we),!0)}));break}case"put":{var be=new Et().addKeys(B.values.map(function(we){return A(we)}));L=I.filter(function(we){return!be.hasKey(a.values?A(we):we)}).concat(a.values?X:X.map(function(we){return A(we)}));break}case"delete":var He=new Et().addKeys(B.keys);L=I.filter(function(we){return!He.hasKey(a.values?A(we):we)});break;case"deleteRange":var xe=B.range;L=I.filter(function(we){return!ss(A(we),xe)});break}return L},n);if(G===n)return n;var P=function(I,B){return Ge(O(I),O(B))||Ge(A(I),A(B))};return G.sort(a.direction==="prev"||a.direction==="prevunique"?function(I,B){return P(B,I)}:P),a.limit&&a.limit<1/0&&(G.length>a.limit?G.length=a.limit:n.length===a.limit&&G.length<a.limit&&(d.dirty=!0)),p?Object.freeze(G):G}function Sl(n,a){return Ge(n.lower,a.lower)===0&&Ge(n.upper,a.upper)===0&&!!n.lowerOpen==!!a.lowerOpen&&!!n.upperOpen==!!a.upperOpen}function Mm(n,a,s,l){if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;var d=Ge(n,a);if(d===0){if(s&&l)return 0;if(s)return 1;if(l)return-1}return d}function $m(n,a,s,l){if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;var d=Ge(n,a);if(d===0){if(s&&l)return 0;if(s)return-1;if(l)return 1}return d}function Um(n,a){return Mm(n.lower,a.lower,n.lowerOpen,a.lowerOpen)<=0&&$m(n.upper,a.upper,n.upperOpen,a.upperOpen)>=0}function Fm(n,a,s,l){var d,p=Ur["idb://".concat(n,"/").concat(a)];if(!p)return[];var m=p.queries[s];if(!m)return[null,!1,p,null];var v=l.query?l.query.index.name:null,y=m[v||""];if(!y)return[null,!1,p,null];switch(s){case"query":var x=(d=l.direction)!==null&&d!==void 0?d:"next",A=y.find(function(G){var P;return G.req.limit===l.limit&&G.req.values===l.values&&((P=G.req.direction)!==null&&P!==void 0?P:"next")===x&&Sl(G.req.query.range,l.query.range)});if(A)return[A,!0,p,y];var C=y.find(function(G){var P,I="limit"in G.req?G.req.limit:1/0;return I>=l.limit&&((P=G.req.direction)!==null&&P!==void 0?P:"next")===x&&(l.values?G.req.values:!0)&&Um(G.req.query.range,l.query.range)});return[C,!1,p,y];case"count":var O=y.find(function(G){return Sl(G.req.query.range,l.query.range)});return[O,!!O,p,y]}}function Bm(n,a,s,l){n.subscribers.add(s),l.addEventListener("abort",function(){n.subscribers.delete(s),n.subscribers.size===0&&Wm(n,a)})}function Wm(n,a){setTimeout(function(){n.subscribers.size===0&&Oe(a,n)},3e3)}var Hm={stack:"dbcore",level:0,name:"Cache",create:function(n){var a=n.schema.name,s=r(r({},n),{transaction:function(l,d,p){var m=n.transaction(l,d,p);if(d==="readwrite"){var v=new AbortController,y=v.signal,x=function(A){return function(){if(v.abort(),d==="readwrite"){for(var C=new Set,O=0,G=l;O<G.length;O++){var P=G[O],I=Ur["idb://".concat(a,"/").concat(P)];if(I){var B=n.table(P),L=I.optimisticOps.filter(function(Ie){return Ie.trans===m});if(m._explicit&&A&&m.mutatedParts)for(var X=0,q=Object.values(I.queries.query);X<q.length;X++)for(var H=q[X],j=0,ce=H.slice();j<ce.length;j++){var ie=ce[j];Qi(ie.obsSet,m.mutatedParts)&&(Oe(H,ie),ie.subscribers.forEach(function(Ie){return C.add(Ie)}))}else if(L.length>0){I.optimisticOps=I.optimisticOps.filter(function(Ie){return Ie.trans!==m});for(var se=0,be=Object.values(I.queries.query);se<be.length;se++)for(var H=be[se],He=0,xe=H.slice();He<xe.length;He++){var ie=xe[He];if(ie.res!=null&&m.mutatedParts)if(A&&!ie.dirty){var we=Object.isFrozen(ie.res),Ce=wl(ie.res,ie.req,L,B,ie,we);ie.dirty?(Oe(H,ie),ie.subscribers.forEach(function(ke){return C.add(ke)})):Ce!==ie.res&&(ie.res=Ce,ie.promise=le.resolve({result:Ce}))}else ie.dirty&&Oe(H,ie),ie.subscribers.forEach(function(ke){return C.add(ke)})}}}}C.forEach(function(Ie){return Ie()})}}};m.addEventListener("abort",x(!1),{signal:y}),m.addEventListener("error",x(!1),{signal:y}),m.addEventListener("complete",x(!0),{signal:y})}return m},table:function(l){var d=n.table(l),p=d.schema.primaryKey,m=r(r({},d),{mutate:function(v){var y=Se.trans;if(p.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return d.mutate(v);var x=Ur["idb://".concat(a,"/").concat(l)];if(!x)return d.mutate(v);var A=d.mutate(v);return(v.type==="add"||v.type==="put")&&(v.values.length>=50||is(p,v).some(function(C){return C==null}))?A.then(function(C){var O=r(r({},v),{values:v.values.map(function(P,I){var B;if(C.failures[I])return P;var L=!((B=p.keyPath)===null||B===void 0)&&B.includes(".")?Re(P):r({},P);return E(L,p.keyPath,C.results[I]),L})}),G=bl(x,O,C);x.optimisticOps.push(G),queueMicrotask(function(){return v.mutatedParts&&Ta(v.mutatedParts)})}):(x.optimisticOps.push(v),v.mutatedParts&&Ta(v.mutatedParts),A.then(function(C){if(C.numFailures>0){Oe(x.optimisticOps,v);var O=bl(x,v,C);O&&x.optimisticOps.push(O),v.mutatedParts&&Ta(v.mutatedParts)}}),A.catch(function(){Oe(x.optimisticOps,v),v.mutatedParts&&Ta(v.mutatedParts)})),A},query:function(v){var y;if(!vl(Se,d)||!yl("query",v))return d.query(v);var x=((y=Se.trans)===null||y===void 0?void 0:y.db._options.cache)==="immutable",A=Se,C=A.requery,O=A.signal,G=Fm(a,l,"query",v),P=G[0],I=G[1],B=G[2],L=G[3];if(P&&I)P.obsSet=v.obsSet;else{var X=d.query(v).then(function(q){var H=q.result;if(P&&(P.res=H),x){for(var j=0,ce=H.length;j<ce;++j)Object.freeze(H[j]);Object.freeze(H)}return q}).catch(function(q){return L&&P&&Oe(L,P),Promise.reject(q)});P={obsSet:v.obsSet,promise:X,subscribers:new Set,type:"query",req:v,dirty:!1},L?L.push(P):(L=[P],B||(B=Ur["idb://".concat(a,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),B.queries.query[v.query.index.name||""]=L)}return Bm(P,L,C,O),P.promise.then(function(q){var H=wl(q.result,v,B?.optimisticOps,d,P,x);return{result:x?H:Re(H)}})}});return m}});return s}};function Aa(n,a){return new Proxy(n,{get:function(s,l,d){return l==="db"?a:Reflect.get(s,l,d)}})}var lr=(function(){function n(a,s){var l=this;this._middlewares={},this.verno=0;var d=n.dependencies;this._options=s=r({addons:n.addons,autoOpen:!0,indexedDB:d.indexedDB,IDBKeyRange:d.IDBKeyRange,cache:"cloned",maxConnections:Yo},s),this._deps={indexedDB:s.indexedDB,IDBKeyRange:s.IDBKeyRange};var p=s.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ue,dbReadyPromise:null,cancelOpen:Ue,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:s.autoOpen};m.dbReadyPromise=new le(function(y){m.dbReadyResolve=y}),m.openCanceller=new le(function(y,x){m.cancelOpen=x}),this._state=m,this.name=a,this.on=kn(this,"populate","blocked","versionchange","close",{ready:[ct,Ue]}),this.once=function(y,x){var A=function(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];l.on(y).unsubscribe(A),x.apply(l,C)};return l.on(y,A)},this.on.ready.subscribe=ee(this.on.ready.subscribe,function(y){return function(x,A){n.vip(function(){var C=l._state;if(C.openComplete)C.dbOpenError||le.resolve().then(x),A&&y(x);else if(C.onReadyBeingFired)C.onReadyBeingFired.push(x),A&&y(x);else{y(x);var O=l;A||y(function G(){O.on.ready.unsubscribe(x),O.on.ready.unsubscribe(G)})}})}}),this.Collection=Yf(this),this.Table=Vf(this),this.Transaction=nm(this),this.Version=bm(this),this.WhereClause=tm(this),this.on("versionchange",function(y){y.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(y){!y.newVersion||y.newVersion<y.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(y.oldVersion/10))}),this._maxKey=Pn(s.IDBKeyRange),this._createTransaction=function(y,x,A,C){return new l.Transaction(y,x,A,l._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(y){l.on("blocked").fire(y),Rn.toArray().filter(function(x){return x.name===l.name&&x!==l&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(y)})},this.use(Nm),this.use(Hm),this.use(_m),this.use(Rm),this.use(Cm);var v=new Proxy(this,{get:function(y,x,A){if(x==="_vip")return!0;if(x==="table")return function(O){return Aa(l.table(O),v)};var C=Reflect.get(y,x,A);return C instanceof tl?Aa(C,v):x==="tables"?C.map(function(O){return Aa(O,v)}):x==="_createTransaction"?function(){var O=C.apply(this,arguments);return Aa(O,v)}:C}});this.vip=v,p.forEach(function(y){return y(l)})}return n.prototype.version=function(a){if(isNaN(a)||a<.1)throw new Y.Type("Given version is not a positive number");if(a=Math.round(a*10)/10,this.idbdb||this._state.isBeingOpened)throw new Y.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,a);var s=this._versions,l=s.filter(function(d){return d._cfg.version===a})[0];return l||(l=new this.Version(a),s.push(l),s.sort(um),l.stores({}),this._state.autoSchema=!1,l)},n.prototype._whenReady=function(a){var s=this;return this.idbdb&&(this._state.openComplete||Se.letThrough||this._vip)?a():new le(function(l,d){if(s._state.openComplete)return d(new Y.DatabaseClosed(s._state.dbOpenError));if(!s._state.isBeingOpened){if(!s._state.autoOpen){d(new Y.DatabaseClosed);return}s.open().catch(Ue)}s._state.dbReadyPromise.then(l,d)}).then(a)},n.prototype.use=function(a){var s=a.stack,l=a.create,d=a.level,p=a.name;p&&this.unuse({stack:s,name:p});var m=this._middlewares[s]||(this._middlewares[s]=[]);return m.push({stack:s,create:l,level:d??10,name:p}),m.sort(function(v,y){return v.level-y.level}),this},n.prototype.unuse=function(a){var s=a.stack,l=a.name,d=a.create;return s&&this._middlewares[s]&&(this._middlewares[s]=this._middlewares[s].filter(function(p){return d?p.create!==d:l?p.name!==l:!1})),this},n.prototype.open=function(){var a=this;return Lr(sr,function(){return Tm(a)})},n.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var a=this._state;if(Rn.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}a.isBeingOpened||(a.dbReadyPromise=new le(function(s){a.dbReadyResolve=s}),a.openCanceller=new le(function(s,l){a.cancelOpen=l}))},n.prototype.close=function(a){var s=a===void 0?{disableAutoOpen:!0}:a,l=s.disableAutoOpen,d=this._state;l?(d.isBeingOpened&&d.cancelOpen(new Y.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new Y.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},n.prototype.delete=function(a){var s=this;a===void 0&&(a={disableAutoOpen:!0});var l=arguments.length>0&&typeof arguments[0]!="object",d=this._state;return new le(function(p,m){var v=function(){s.close(a);var y=s._deps.indexedDB.deleteDatabase(s.name);y.onsuccess=nt(function(){km(s._deps,s.name),p()}),y.onerror=zt(m),y.onblocked=s._fireOnBlocked};if(l)throw new Y.InvalidArgument("Invalid closeOptions argument to db.delete()");d.isBeingOpened?d.dbReadyPromise.then(v):v()})},n.prototype.backendDB=function(){return this.idbdb},n.prototype.isOpen=function(){return this.idbdb!==null},n.prototype.hasBeenClosed=function(){var a=this._state.dbOpenError;return a&&a.name==="DatabaseClosed"},n.prototype.hasFailed=function(){return this._state.dbOpenError!==null},n.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(n.prototype,"tables",{get:function(){var a=this;return c(this._allTables).map(function(s){return a._allTables[s]})},enumerable:!1,configurable:!0}),n.prototype.transaction=function(){var a=Pm.apply(this,arguments);return this._transaction.apply(this,a)},n.prototype._transaction=function(a,s,l){var d=this,p=Se.trans;(!p||p.db!==this||a.indexOf("!")!==-1)&&(p=null);var m=a.indexOf("?")!==-1;a=a.replace("!","").replace("?","");var v,y;try{if(y=s.map(function(A){var C=A instanceof d.Table?A.name:A;if(typeof C!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return C}),a=="r"||a===$i)v=$i;else if(a=="rw"||a==Ui)v=Ui;else throw new Y.InvalidArgument("Invalid transaction mode: "+a);if(p){if(p.mode===$i&&v===Ui)if(m)p=null;else throw new Y.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");p&&y.forEach(function(A){if(p&&p.storeNames.indexOf(A)===-1)if(m)p=null;else throw new Y.SubTransaction("Table "+A+" not included in parent transaction.")}),m&&p&&!p.active&&(p=null)}}catch(A){return p?p._promise(null,function(C,O){O(A)}):it(A)}var x=gl.bind(null,this,v,y,p,l);return p?p._promise(v,x,"lock"):Se.trans?Lr(Se.transless,function(){return d._whenReady(x)}):this._whenReady(x)},n.prototype.table=function(a){if(!w(this._allTables,a))throw new Y.InvalidTable("Table ".concat(a," does not exist"));return this._allTables[a]},n})(),zm=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Km=(function(){function n(a){this._subscribe=a}return n.prototype.subscribe=function(a,s,l){return this._subscribe(!a||typeof a=="function"?{next:a,error:s,complete:l}:a)},n.prototype[zm]=function(){return this},n})(),Ra;try{Ra={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{Ra={indexedDB:null,IDBKeyRange:null}}function xl(n){var a=!1,s,l=new Km(function(d){var p=et(n);function m(L){var X=jr();try{p&&Yr();var q=hr(n,L);return p&&(q=q.finally(vr)),q}finally{X&&qr()}}var v=!1,y,x={},A={},C={get closed(){return v},unsubscribe:function(){v||(v=!0,y&&y.abort(),O&&wr.storagemutated.unsubscribe(I))}};d.start&&d.start(C);var O=!1,G=function(){return Oi(B)};function P(){return Qi(A,x)}var I=function(L){Ea(x,L),P()&&G()},B=function(){if(!(v||!Ra.indexedDB)){x={};var L={};y&&y.abort(),y=new AbortController;var X={subscr:L,signal:y.signal,requery:G,querier:n,trans:null},q=m(X);O||(wr.storagemutated.subscribe(I),O=!0),Promise.resolve(q).then(function(H){a=!0,s=H,!(v||X.signal.aborted)&&(P()?G():(A=L,P()?G():(x={},Oi(function(){return!v&&d.next&&d.next(H)}))))},function(H){a=!1,["DatabaseClosedError","AbortError"].includes(H?.name)||v||Oi(function(){v||d.error&&d.error(H)})})}};return setTimeout(G,0),C});return l.hasValue=function(){return a},l.getValue=function(){return s},l}var Fr=lr;b(Fr,r(r({},qt),{delete:function(n){var a=new Fr(n,{addons:[]});return a.delete()},exists:function(n){return new Fr(n,{addons:[]}).open().then(function(a){return a.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(n){try{return Sm(Fr.dependencies).then(n)}catch{return it(new Y.MissingAPI)}},defineClass:function(){function n(a){f(this,a)}return n},ignoreTransaction:function(n){return Se.trans?Lr(Se.transless||sr,n):n()},vip:Xi,async:function(n){return function(){try{var a=ns(n.apply(this,arguments));return!a||typeof a.then!="function"?le.resolve(a):a}catch(s){return it(s)}}},spawn:function(n,a,s){try{var l=ns(n.apply(s,a||[]));return!l||typeof l.then!="function"?le.resolve(l):l}catch(d){return it(d)}},currentTransaction:{get:function(){return Se.trans||null}},waitFor:function(n,a){var s=le.resolve(typeof n=="function"?Fr.ignoreTransaction(n):n).timeout(a||6e4);return Se.trans?Se.trans.waitFor(s):s},Promise:le,debug:{get:function(){return qe},set:function(n){ir(n)}},derive:_,extend:f,props:b,override:ee,Events:kn,on:wr,liveQuery:xl,extendObservabilitySet:Ea,getByKeyPath:R,setByKeyPath:E,delByKeyPath:Z,shallowClone:K,deepClone:Re,getObjectDiff:as,cmp:Ge,asap:N,minKey:Mi,addons:[],connections:{get:Rn.toArray},errnames:he,dependencies:Ra,cache:Ur,semVer:jo,version:jo.split(".").map(function(n){return parseInt(n)}).reduce(function(n,a,s){return n+a/Math.pow(10,s*2)})})),Fr.maxKey=Pn(Fr.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(wr(va,function(n){if(!Sr){var a;a=new CustomEvent(Wi,{detail:n}),Sr=!0,dispatchEvent(a),Sr=!1}}),addEventListener(Wi,function(n){var a=n.detail;Sr||os(a)}));function os(n){var a=Sr;try{Sr=!0,wr.storagemutated.fire(n),rs(n,!0)}finally{Sr=a}}var Sr=!1,xr,ls=function(){};typeof BroadcastChannel<"u"&&(ls=function(){xr=new BroadcastChannel(Wi),xr.onmessage=function(n){return n.data&&os(n.data)}},ls(),typeof xr.unref=="function"&&xr.unref(),wr(va,function(n){Sr||xr.postMessage(n)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(n){if(!lr.disableBfCache&&n.persisted){qe&&console.debug("Dexie: handling persisted pagehide"),xr?.close();for(var a=0,s=Rn.toArray();a<s.length;a++){var l=s[a];l.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(n){!lr.disableBfCache&&n.persisted&&(qe&&console.debug("Dexie: handling persisted pageshow"),ls(),os({all:new Et(-1/0,[[]])}))}));function Gm(n){return new xn({add:n})}function Vm(n){return new xn({remove:n})}function jm(n,a){return new xn({replacePrefix:[n,a]})}le.rejectionMapper=ot,ir(qe);var qm=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:Yo,Dexie:lr,Entity:Zo,PropModification:xn,RangeSet:Et,add:Gm,cmp:Ge,default:lr,liveQuery:xl,mergeRanges:In,rangesOverlap:dl,remove:Vm,replacePrefix:jm});return r(lr,qm,{default:lr}),lr}))});var Mn,Tr,Ma=kr(()=>{"use strict";Mn=class{constructor(){this.state="closed";this.failureCount=0;this.openedAt=null;this.extraCooldownMs=0}isOpen(){if(this.state==="open"){let t=Date.now()-(this.openedAt??0),r=3e4+this.extraCooldownMs;return t>=r?(this.state="half-open",!1):!0}return!1}recordSuccess(){this.failureCount=0,this.state="closed",this.openedAt=null,this.extraCooldownMs=0}recordFailure(t){if(this.state==="half-open"){this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=t?t*1e3:0;return}this.failureCount+=1,this.failureCount>=3&&(this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=t?t*1e3:0)}reset(){this.recordSuccess()}getResetAt(){return this.state!=="open"||this.openedAt===null?null:this.openedAt+3e4+this.extraCooldownMs}getState(){return this.state}},Tr=new Mn});function Es(){try{let e=localStorage.getItem(ne.STATSFM_HEALTH);if(e)return JSON.parse(e).lastSuccessAt}catch{}return null}function Ua(e){try{localStorage.setItem(ne.STATSFM_HEALTH,JSON.stringify(e))}catch{}window.dispatchEvent(new CustomEvent(ue.STATSFM_HEALTH_CHANGED,{detail:e}))}async function ut(e,t){if(Pr.isOpen())return Ua({lastFetchAt:Date.now(),lastSuccessAt:Es(),lastError:"Circuit open  -  stats.fm temporarily unavailable",circuitOpen:!0}),{ok:!1,status:0,message:"Circuit open  -  stats.fm temporarily unavailable"};let r=new URL(`${Ag}${e}`);if(t)for(let[c,u]of Object.entries(t))r.searchParams.set(c,u);localStorage.getItem(ne.LOGGING)==="true"&&console.debug("[statsfm]",r.toString());let i=new AbortController,o=setTimeout(()=>i.abort(),1e4);try{let c=await fetch(r.toString(),{headers:{Accept:"application/json"},signal:i.signal});if(clearTimeout(o),!c.ok)return Pr.recordFailure(),Ua({lastFetchAt:Date.now(),lastSuccessAt:Es(),lastError:`HTTP ${c.status}`,circuitOpen:Pr.isOpen()}),{ok:!1,status:c.status,message:`HTTP ${c.status}`};let u=await c.json();return Pr.recordSuccess(),Ua({lastFetchAt:Date.now(),lastSuccessAt:Date.now(),lastError:null,circuitOpen:!1}),{ok:!0,data:u.item??u.items}}catch(c){clearTimeout(o),Pr.recordFailure();let u=(c instanceof Error||c instanceof DOMException)&&c.name==="AbortError"?"Request timed out after 10s":String(c);return Ua({lastFetchAt:Date.now(),lastSuccessAt:Es(),lastError:u,circuitOpen:Pr.isOpen()}),(c instanceof Error||c instanceof DOMException)&&c.name==="AbortError"?{ok:!1,status:0,message:"Request timed out after 10s"}:{ok:!1,status:0,message:String(c)}}}async function Hr(e){let t=await ut(`/users/${encodeURIComponent(e)}`);return t.ok?{valid:!0,isPlus:t.data.isPlus,displayName:t.data.displayName}:t.status===404?{valid:!1,reason:"not_found"}:t.status===403?{valid:!1,reason:"private"}:t.status===0&&t.message.includes("Circuit open")?{valid:!1,reason:"circuit_open"}:{valid:!1,reason:"network"}}var Ag,Pr,Fa=kr(()=>{"use strict";Rt();at();Ma();Ag="https://api.stats.fm/api/v1",Pr=new Mn});function zr(e,t,r){return e===404?{variant:"UserNotFound",message:t,retryable:!1}:e===429||e===0&&t.includes("Circuit open")?{variant:"RateLimited",message:t,retryable:!1,resetAt:r}:e>=500&&e<=599?{variant:"ServiceDown",message:t,retryable:!0}:e===0?{variant:"NetworkError",message:t,retryable:!0}:{variant:"Unknown",message:t,retryable:!0}}var en,Ba=kr(()=>{"use strict";en=class extends Error{constructor(t){super(t.message),this.name="ClassifiedError",this.appError=t}}});var zl={};kl(zl,{StatsFmProvider:()=>Ha,statsfmProvider:()=>Vt});function tn(e){let t=new Date(e);return Number.isFinite(t.getTime())?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`:e.slice(0,10)}function Fl(e){let t=new Set(Object.entries(e).filter(([,u])=>u.count>0).map(([u])=>tn(u)).filter(u=>u.length===10));if(t.size===0)return 0;let r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=tn(i.toISOString());if(!t.has(o)&&(i.setDate(i.getDate()-1),!t.has(tn(i.toISOString()))))return 0;let c=0;for(;t.has(tn(i.toISOString()));)c++,i.setDate(i.getDate()-1);return c}function Ot(e,t){if(e)return e.startsWith("spotify:")?e:`spotify:${t}:${e}`}function Bl(e){return`${Rg}:${e}`}function Bt(e){return e.status==="fulfilled"&&e.value.ok?e.value.data:null}function Wa(e){return e.status==="fulfilled"&&!e.value.ok?{status:e.value.status,message:e.value.message}:e.status==="rejected"?{status:0,message:String(e.reason)}:null}function Ig(e){let t=new Map;for(let o of e)for(let c of o.artist.genres)t.set(c,(t.get(c)??0)+ +(o.streams??0));if([...t.values()].some(o=>o>0))return Array.from(t.entries()).sort((o,c)=>c[1]-o[1]).map(([o,c],u)=>({rank:u+1,genre:o,count:c}));let i=new Map;for(let o of e)for(let c of o.artist.genres)i.set(c,(i.get(c)??0)+1);return Array.from(i.entries()).sort((o,c)=>c[1]-o[1]).map(([o,c],u)=>({rank:u+1,genre:o,count:c}))}function Wl(e,t){let r=e??[];if(r.length>0){let i=[...r].sort((c,u)=>u.streams-c.streams).map((c,u)=>({rank:u+1,genre:c.genre.tag,count:+(c.streams??0)}));if(i.reduce((c,u)=>c+u.count,0)>0)return i}return Ig(t)}function Hl(e){let t=new Map;for(let r of e){let i=r.track.albums[0];if(!i)continue;let o=i.name,c=t.get(o),u=r.track.artists[0]?.name??"",f=Ot(i.externalIds?.spotify?.[0],"album")??"",g=r.streams??0;c?c.streams+=g:t.set(o,{albumName:i.name,artistName:u,albumArt:i.image,albumUri:f,streams:g})}return Array.from(t.values()).sort((r,i)=>i.streams-r.streams).map((r,i)=>({rank:i+1,albumUri:r.albumUri||`listening-stats:album:${r.albumName}${r.artistName}`,albumName:r.albumName,artistName:r.artistName,albumArt:r.albumArt,count:r.streams,durationMs:0}))}var Rg,Cg,Ha,Vt,rn=kr(()=>{"use strict";Fa();at();Ba();Er();Xt();Rg="statsfm",Cg=1440*60*1e3;Ha=class{constructor(){this.config=null}getProviderInfo(){return{id:"statsfm",name:"stats.fm",description:"Stats from stats.fm",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!1,hasSkipRate:!1,tier:this.config?.isPlus??!1?"plus":"free"}}}getSupportedPeriods(){return this.config?.isPlus?Il:Yt}async calculateStats(t){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let r=Bl(t.id),i=ze.get(r);if(i)return i;let c={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[t.id];if(!c)throw new Error(`Unknown stats.fm period: ${t.id}`);let u={range:c},f=encodeURIComponent(this.config.username),g=this.config.isPlus,h=Intl.DateTimeFormat().resolvedOptions().timeZone,w=Dn(t),b=w?ut(`/users/${f}/top/artists`,{after:String(w.start),before:String(w.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),[S,k,_,$,U,z,W,ee,D]=await Promise.allSettled([ut(`/users/${f}/top/tracks`,u),ut(`/users/${f}/top/artists`,u),ut(`/users/${f}/top/genres`,u),ut(`/users/${f}/streams/stats`,u),ut(`/users/${f}/streams/recent`,{limit:"12"}),g?ut(`/users/${f}/top/albums`,u):Promise.resolve({ok:!1,status:0,message:"skipped"}),ut(`/users/${f}/streams/stats/per-day`,{range:"lifetime",timeZone:h}),ut(`/users/${f}/streams/stats/dates`,{range:c,timeZone:h}),b]),N=Wa(S),M=Wa(k),R=Wa($);if(N&&M&&R){let Q=Pr.getResetAt()??void 0;throw new en(zr(N.status,N.message,Q))}let E=Bt(S)??[],Z=Bt(k)??[],K=Bt(_)??[],fe=Bt(D)??[],ge=0;if(w){let Q=new Set(Z.map(Be=>Be.artist.externalIds?.spotify?.[0]).filter(Be=>!!Be));if(fe.length>0){let Be=new Set(fe.map(F=>F.artist.externalIds?.spotify?.[0]).filter(F=>!!F)),he=0;for(let F of Q)Be.has(F)||he++;ge=he}else ge=Q.size}let V=Bt($),oe=Bt(U)??[],re=Bt(z)??[],ve=Bt(W),Re=ve?.days?Object.values(ve.days).filter(Q=>Q.count>0).length:void 0,te=ve?.days?Fl(ve.days):0,Pe=ve?.days?Object.entries(ve.days).map(([Q,Be])=>({date:tn(Q),count:Be.count})).sort((Q,Be)=>Q.date.localeCompare(Be.date)):void 0,T;if(w&&ve?.days){let Q=0;for(let[Be,he]of Object.entries(ve.days)){let F=new Date(Be).getTime();Number.isFinite(F)&&F>=w.start&&F<w.end&&(Q+=he.durationMs)}Q>0&&(T=Q)}let ae=Bt(ee),Te=new Array(24).fill(0);if(ae?.hours)for(let[Q,Be]of Object.entries(ae.hours)){let he=Number(Q);he>=0&&he<24&&(Te[he]=Be.count)}let Oe=Te.reduce((Q,Be,he,F)=>Be>F[Q]?he:Q,0),Me,Le;if(ae!=null&&(Object.keys(ae.hours??{}).length>0||Object.keys(ae.weekDays??{}).length>0)&&ae?.weekDays){Me=new Array(7).fill(0);for(let[Q,Be]of Object.entries(ae.weekDays)){let he=Number(Q)-1;he>=0&&he<7&&(Me[he]=Be.count)}Le=Me.reduce((Q,Be,he,F)=>Be>F[Q]?he:Q,0)}let tt=E.map(Q=>{let Be=Q.streams??0;return{rank:Q.position,trackUri:Ot(Q.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${Q.track.name}${Q.track.artists[0]?.name??""}`,trackName:Q.track.name,artistName:Q.track.artists[0]?.name??"",artistUri:Ot(Q.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${Q.track.artists[0]?.name??""}`,albumName:Q.track.albums[0]?.name??"",albumUri:Ot(Q.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:Q.track.albums[0]?.image,count:Be,durationMs:Q.playedMs??(Q.track.durationMs??0)*Be}}),J=Z.map(Q=>({rank:Q.position,artistUri:Ot(Q.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${Q.artist.name}`,artistName:Q.artist.name,count:Q.streams??0,durationMs:Q.playedMs??0,genres:Q.artist.genres,imageUrl:Q.artist.image??null})),ye=g?re.map(Q=>({rank:Q.position,albumUri:Ot(Q.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${Q.album.name}${Q.album.artists[0]?.name??""}`,albumName:Q.album.name,artistName:Q.album.artists[0]?.name??"",albumArt:Q.album.image,count:Q.streams??0,durationMs:0})):Hl(E),Ke=Wl(K,Z),$e=oe.map(Q=>({trackUri:Ot(Q.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${Q.track.name}${Q.track.artists[0]?.name??""}`,trackName:Q.track.name,artistName:Q.track.artists[0]?.name??"",albumArt:Q.track.albums[0]?.image,playedAt:new Date(Q.endTime).getTime()||Date.now()})),rt={topTracks:tt,topArtists:J,topAlbums:ye,topGenres:Ke,totalPlays:V?.count??0,totalDuration:V?.durationMs??0,recentPlays:$e,hourlyDistribution:Te,peakHour:Oe,skipRate:0,uniqueTrackCount:V?.cardinality.tracks??0,uniqueArtistCount:V?.cardinality.artists??0,streak:te,listeningDays:Re,weekdayDistribution:Me,peakWeekday:Le,dailyPlayCounts:Pe,newArtistCount:ge,priorPeriodTotalDuration:T,isFreeTier:!g&&tt.every(Q=>Q.count===0)};return ze.set(r,rt),rt}async calculateStatsProgressive(t,r){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let i=Bl(t.id),o=ze.get(i);if(o)return r(o,1),r(o,2),r(o,3),o;let u={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[t.id];if(!u)throw new Error(`Unknown stats.fm period: ${t.id}`);let f={range:u},g=encodeURIComponent(this.config.username),h=this.config.isPlus,w=Intl.DateTimeFormat().resolvedOptions().timeZone,b=Dn(t),S=b?ut(`/users/${g}/top/artists`,{after:String(b.start),before:String(b.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),k=ut(`/users/${g}/streams/stats`,f),_=ut(`/users/${g}/streams/recent`,{limit:"12"}),$=ut(`/users/${g}/top/tracks`,f),U=ut(`/users/${g}/top/artists`,f),z=ut(`/users/${g}/top/genres`,f),W=h?ut(`/users/${g}/top/albums`,f):Promise.resolve({ok:!1,status:0,message:"skipped"}),ee=ut(`/users/${g}/streams/stats/per-day`,{range:"lifetime",timeZone:w}),D=ut(`/users/${g}/streams/stats/dates`,{range:u,timeZone:w}),[N,M]=await Promise.allSettled([k,_]),R=Bt(N),Z=(Bt(M)??[]).map(he=>({trackUri:Ot(he.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${he.track.name}${he.track.artists[0]?.name??""}`,trackName:he.track.name,artistName:he.track.artists[0]?.name??"",albumArt:he.track.albums[0]?.image,playedAt:new Date(he.endTime).getTime()||Date.now()}));r({totalPlays:R?.count??0,totalDuration:R?.durationMs??0,uniqueTrackCount:R?.cardinality.tracks??0,uniqueArtistCount:R?.cardinality.artists??0,skipRate:0,recentPlays:Z},1);let K=[],fe=[],ge=[],V=null,oe=[],re=[],ve=[],Re=[],te=[],Pe,T,ae,Te,Oe,Me=!b,Le=()=>{if(!b){Te=0,r({newArtistCount:Te},2);return}if(!Me)return;if(fe.length===0){Te=0,r({newArtistCount:Te},2);return}let he=new Set(fe.map(F=>F.artist.externalIds?.spotify?.[0]).filter(F=>!!F));if(oe.length>0){let F=new Set(oe.map(_e=>_e.artist.externalIds?.spotify?.[0]).filter(_e=>!!_e)),Y=0;for(let _e of he)F.has(_e)||Y++;Te=Y}else Te=he.size;r({newArtistCount:Te},2)},et=[$.then(he=>{K=he.ok?he.data:[],re=K.map(F=>{let Y=F.streams??0;return{rank:F.position,trackUri:Ot(F.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${F.track.name}${F.track.artists[0]?.name??""}`,trackName:F.track.name,artistName:F.track.artists[0]?.name??"",artistUri:Ot(F.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${F.track.artists[0]?.name??""}`,albumName:F.track.albums[0]?.name??"",albumUri:Ot(F.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:F.track.albums[0]?.image,count:Y,durationMs:F.playedMs??(F.track.durationMs??0)*Y}}),r({topTracks:re},2),h||(Re=Hl(K),r({topAlbums:Re},2))}),Promise.all([U,z]).then(([he,F])=>{fe=he.ok?he.data:[],ve=fe.map(_e=>({rank:_e.position,artistUri:Ot(_e.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${_e.artist.name}`,artistName:_e.artist.name,count:_e.streams??0,durationMs:_e.playedMs??0,genres:_e.artist.genres,imageUrl:_e.artist.image??null})),r({topArtists:ve},2);let Y=F.ok?F.data:null;te=Wl(Y,fe),r({topGenres:te},2),Le()}),W.then(he=>{h&&(ge=he.ok?he.data:[],Re=ge.map(F=>({rank:F.position,albumUri:Ot(F.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${F.album.name}${F.album.artists[0]?.name??""}`,albumName:F.album.name,artistName:F.album.artists[0]?.name??"",albumArt:F.album.image,count:F.streams??0,durationMs:0})),r({topAlbums:Re},2))}),ee.then(he=>{if(V=he.ok?he.data:null,T=V?.days?Object.values(V.days).filter(F=>F.count>0).length:void 0,Pe=V?.days?Fl(V.days):0,ae=V?.days?Object.entries(V.days).map(([F,Y])=>({date:tn(F),count:Y.count})).sort((F,Y)=>F.date.localeCompare(Y.date)):void 0,b&&V?.days){let F=0;for(let[Y,_e]of Object.entries(V.days)){let ot=new Date(Y).getTime();Number.isFinite(ot)&&ot>=b.start&&ot<b.end&&(F+=_e.durationMs)}F>0&&(Oe=F)}r({streak:Pe,listeningDays:T,dailyPlayCounts:ae,priorPeriodTotalDuration:Oe},2)}),S.then(he=>{oe=he.ok?he.data:[],Me=!0,Le()})];await Promise.allSettled(et);let[tt]=await Promise.allSettled([D]),J=Wa(tt),ye=Bt(tt),Ke=new Array(24).fill(0);if(ye?.hours)for(let[he,F]of Object.entries(ye.hours)){let Y=Number(he);Y>=0&&Y<24&&(Ke[Y]=F.count)}let $e=Ke.reduce((he,F,Y,_e)=>F>_e[he]?Y:he,0),rt,Q;if(ye!=null&&(Object.keys(ye.hours??{}).length>0||Object.keys(ye.weekDays??{}).length>0)&&ye?.weekDays){rt=new Array(7).fill(0);for(let[he,F]of Object.entries(ye.weekDays)){let Y=Number(he)-1;Y>=0&&Y<7&&(rt[Y]=F.count)}Q=rt.reduce((he,F,Y,_e)=>F>_e[he]?Y:he,0)}return J?r({hourlyDistribution:new Array(24).fill(0),peakHour:0},3,zr(J.status,J.message)):r({hourlyDistribution:Ke,peakHour:$e,weekdayDistribution:rt,peakWeekday:Q},3),{topTracks:re,topArtists:ve,topAlbums:Re,topGenres:te,totalPlays:R?.count??0,totalDuration:R?.durationMs??0,recentPlays:Z,hourlyDistribution:Ke,peakHour:$e,skipRate:0,uniqueTrackCount:R?.cardinality.tracks??0,uniqueArtistCount:R?.cardinality.artists??0,streak:Pe,listeningDays:T,weekdayDistribution:rt,peakWeekday:Q,dailyPlayCounts:ae,newArtistCount:Te,priorPeriodTotalDuration:Oe,isFreeTier:!h&&re.every(he=>he.count===0)}}async init(){let t=localStorage.getItem(ne.STATSFM_CONFIG);if(!t)return;try{let i=JSON.parse(t);if(typeof i?.username!="string"||!i.username)throw new Error("invalid stats.fm config shape");typeof i.lastValidated!="number"&&(i.lastValidated=0),this.config=i}catch(i){console.warn("[listening-stats] Discarding invalid stats.fm config:",i),localStorage.removeItem(ne.STATSFM_CONFIG),this.config=null;return}if(Date.now()-this.config.lastValidated>Cg){let i=await Hr(this.config.username);i.valid&&(this.config.isPlus=i.isPlus,this.config.lastValidated=Date.now(),localStorage.setItem(ne.STATSFM_CONFIG,JSON.stringify(this.config)))}}destroy(){ze.invalidate()}},Vt=new Ha});var nn=Ne((Lx,ql)=>{"use strict";var Dg="2.0.0",Og=Number.MAX_SAFE_INTEGER||9007199254740991,Lg=16,Mg=250,$g=["major","premajor","minor","preminor","patch","prepatch","prerelease"];ql.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Lg,MAX_SAFE_BUILD_LENGTH:Mg,MAX_SAFE_INTEGER:Og,RELEASE_TYPES:$g,SEMVER_SPEC_VERSION:Dg,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Bn=Ne((Mx,Yl)=>{"use strict";var Ug=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};Yl.exports=Ug});var an=Ne((Jt,Xl)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:Ps,MAX_SAFE_BUILD_LENGTH:Fg,MAX_LENGTH:Bg}=nn(),Wg=Bn();Jt=Xl.exports={};var Hg=Jt.re=[],zg=Jt.safeRe=[],de=Jt.src=[],Kg=Jt.safeSrc=[],pe=Jt.t={},Gg=0,As="[a-zA-Z0-9-]",Vg=[["\\s",1],["\\d",Bg],[As,Fg]],jg=e=>{for(let[t,r]of Vg)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},De=(e,t,r)=>{let i=jg(t),o=Gg++;Wg(e,o,t),pe[e]=o,de[o]=t,Kg[o]=i,Hg[o]=new RegExp(t,r?"g":void 0),zg[o]=new RegExp(i,r?"g":void 0)};De("NUMERICIDENTIFIER","0|[1-9]\\d*");De("NUMERICIDENTIFIERLOOSE","\\d+");De("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${As}*`);De("MAINVERSION",`(${de[pe.NUMERICIDENTIFIER]})\\.(${de[pe.NUMERICIDENTIFIER]})\\.(${de[pe.NUMERICIDENTIFIER]})`);De("MAINVERSIONLOOSE",`(${de[pe.NUMERICIDENTIFIERLOOSE]})\\.(${de[pe.NUMERICIDENTIFIERLOOSE]})\\.(${de[pe.NUMERICIDENTIFIERLOOSE]})`);De("PRERELEASEIDENTIFIER",`(?:${de[pe.NONNUMERICIDENTIFIER]}|${de[pe.NUMERICIDENTIFIER]})`);De("PRERELEASEIDENTIFIERLOOSE",`(?:${de[pe.NONNUMERICIDENTIFIER]}|${de[pe.NUMERICIDENTIFIERLOOSE]})`);De("PRERELEASE",`(?:-(${de[pe.PRERELEASEIDENTIFIER]}(?:\\.${de[pe.PRERELEASEIDENTIFIER]})*))`);De("PRERELEASELOOSE",`(?:-?(${de[pe.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${de[pe.PRERELEASEIDENTIFIERLOOSE]})*))`);De("BUILDIDENTIFIER",`${As}+`);De("BUILD",`(?:\\+(${de[pe.BUILDIDENTIFIER]}(?:\\.${de[pe.BUILDIDENTIFIER]})*))`);De("FULLPLAIN",`v?${de[pe.MAINVERSION]}${de[pe.PRERELEASE]}?${de[pe.BUILD]}?`);De("FULL",`^${de[pe.FULLPLAIN]}$`);De("LOOSEPLAIN",`[v=\\s]*${de[pe.MAINVERSIONLOOSE]}${de[pe.PRERELEASELOOSE]}?${de[pe.BUILD]}?`);De("LOOSE",`^${de[pe.LOOSEPLAIN]}$`);De("GTLT","((?:<|>)?=?)");De("XRANGEIDENTIFIERLOOSE",`${de[pe.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);De("XRANGEIDENTIFIER",`${de[pe.NUMERICIDENTIFIER]}|x|X|\\*`);De("XRANGEPLAIN",`[v=\\s]*(${de[pe.XRANGEIDENTIFIER]})(?:\\.(${de[pe.XRANGEIDENTIFIER]})(?:\\.(${de[pe.XRANGEIDENTIFIER]})(?:${de[pe.PRERELEASE]})?${de[pe.BUILD]}?)?)?`);De("XRANGEPLAINLOOSE",`[v=\\s]*(${de[pe.XRANGEIDENTIFIERLOOSE]})(?:\\.(${de[pe.XRANGEIDENTIFIERLOOSE]})(?:\\.(${de[pe.XRANGEIDENTIFIERLOOSE]})(?:${de[pe.PRERELEASELOOSE]})?${de[pe.BUILD]}?)?)?`);De("XRANGE",`^${de[pe.GTLT]}\\s*${de[pe.XRANGEPLAIN]}$`);De("XRANGELOOSE",`^${de[pe.GTLT]}\\s*${de[pe.XRANGEPLAINLOOSE]}$`);De("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Ps}})(?:\\.(\\d{1,${Ps}}))?(?:\\.(\\d{1,${Ps}}))?`);De("COERCE",`${de[pe.COERCEPLAIN]}(?:$|[^\\d])`);De("COERCEFULL",de[pe.COERCEPLAIN]+`(?:${de[pe.PRERELEASE]})?(?:${de[pe.BUILD]})?(?:$|[^\\d])`);De("COERCERTL",de[pe.COERCE],!0);De("COERCERTLFULL",de[pe.COERCEFULL],!0);De("LONETILDE","(?:~>?)");De("TILDETRIM",`(\\s*)${de[pe.LONETILDE]}\\s+`,!0);Jt.tildeTrimReplace="$1~";De("TILDE",`^${de[pe.LONETILDE]}${de[pe.XRANGEPLAIN]}$`);De("TILDELOOSE",`^${de[pe.LONETILDE]}${de[pe.XRANGEPLAINLOOSE]}$`);De("LONECARET","(?:\\^)");De("CARETTRIM",`(\\s*)${de[pe.LONECARET]}\\s+`,!0);Jt.caretTrimReplace="$1^";De("CARET",`^${de[pe.LONECARET]}${de[pe.XRANGEPLAIN]}$`);De("CARETLOOSE",`^${de[pe.LONECARET]}${de[pe.XRANGEPLAINLOOSE]}$`);De("COMPARATORLOOSE",`^${de[pe.GTLT]}\\s*(${de[pe.LOOSEPLAIN]})$|^$`);De("COMPARATOR",`^${de[pe.GTLT]}\\s*(${de[pe.FULLPLAIN]})$|^$`);De("COMPARATORTRIM",`(\\s*)${de[pe.GTLT]}\\s*(${de[pe.LOOSEPLAIN]}|${de[pe.XRANGEPLAIN]})`,!0);Jt.comparatorTrimReplace="$1$2$3";De("HYPHENRANGE",`^\\s*(${de[pe.XRANGEPLAIN]})\\s+-\\s+(${de[pe.XRANGEPLAIN]})\\s*$`);De("HYPHENRANGELOOSE",`^\\s*(${de[pe.XRANGEPLAINLOOSE]})\\s+-\\s+(${de[pe.XRANGEPLAINLOOSE]})\\s*$`);De("STAR","(<|>)?=?\\s*\\*");De("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");De("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var za=Ne(($x,Zl)=>{"use strict";var qg=Object.freeze({loose:!0}),Yg=Object.freeze({}),Xg=e=>e?typeof e!="object"?qg:e:Yg;Zl.exports=Xg});var Rs=Ne((Ux,ec)=>{"use strict";var Jl=/^[0-9]+$/,Ql=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let r=Jl.test(e),i=Jl.test(t);return r&&i&&(e=+e,t=+t),e===t?0:r&&!i?-1:i&&!r?1:e<t?-1:1},Zg=(e,t)=>Ql(t,e);ec.exports={compareIdentifiers:Ql,rcompareIdentifiers:Zg}});var bt=Ne((Fx,rc)=>{"use strict";var Ka=Bn(),{MAX_LENGTH:tc,MAX_SAFE_INTEGER:Ga}=nn(),{safeRe:Va,t:ja}=an(),Jg=za(),{compareIdentifiers:Cs}=Rs(),Qg=(e,t)=>{let r=t.split(".");if(r.length>e.length)return!1;for(let i=0;i<r.length;i++)if(Cs(e[i],r[i])!==0)return!1;return!0},Is=class e{constructor(t,r){if(r=Jg(r),t instanceof e){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>tc)throw new TypeError(`version is longer than ${tc} characters`);Ka("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let i=t.trim().match(r.loose?Va[ja.LOOSE]:Va[ja.FULL]);if(!i)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>Ga||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ga||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ga||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let c=+o;if(c>=0&&c<Ga)return c}return o}):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(Ka("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{let i=this.prerelease[r],o=t.prerelease[r];if(Ka("prerelease compare",r,i,o),i===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(i===void 0)return-1;if(i===o)continue;return Cs(i,o)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{let i=this.build[r],o=t.build[r];if(Ka("build compare",r,i,o),i===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(i===void 0)return-1;if(i===o)continue;return Cs(i,o)}while(++r)}inc(t,r,i){if(t.startsWith("pre")){if(!r&&i===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?Va[ja.PRERELEASELOOSE]:Va[ja.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,i);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,i);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,i),this.inc("pre",r,i);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,i),this.inc("pre",r,i);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(i)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let c=this.prerelease.length;for(;--c>=0;)typeof this.prerelease[c]=="number"&&(this.prerelease[c]++,c=-2);if(c===-1){if(r===this.prerelease.join(".")&&i===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let c=[r,o];if(i===!1&&(c=[r]),Qg(this.prerelease,r)){let u=this.prerelease[r.split(".").length];isNaN(u)&&(this.prerelease=c)}else this.prerelease=c}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};rc.exports=Is});var Ar=Ne((Bx,ac)=>{"use strict";var nc=bt(),eh=(e,t,r=!1)=>{if(e instanceof nc)return e;try{return new nc(e,t)}catch(i){if(!r)return null;throw i}};ac.exports=eh});var sc=Ne((Wx,ic)=>{"use strict";var th=Ar(),rh=(e,t)=>{let r=th(e,t);return r?r.version:null};ic.exports=rh});var lc=Ne((Hx,oc)=>{"use strict";var nh=Ar(),ah=(e,t)=>{let r=nh(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};oc.exports=ah});var dc=Ne((zx,uc)=>{"use strict";var cc=bt(),ih=(e,t,r,i,o)=>{typeof r=="string"&&(o=i,i=r,r=void 0);try{return new cc(e instanceof cc?e.version:e,r).inc(t,i,o).version}catch{return null}};uc.exports=ih});var mc=Ne((Kx,fc)=>{"use strict";var pc=Ar(),sh=(e,t)=>{let r=pc(e,null,!0),i=pc(t,null,!0),o=r.compare(i);if(o===0)return null;let c=o>0,u=c?r:i,f=c?i:r,g=!!u.prerelease.length;if(!!f.prerelease.length&&!g){if(!f.patch&&!f.minor)return"major";if(f.compareMain(u)===0)return f.minor&&!f.patch?"minor":"patch"}let w=g?"pre":"";return r.major!==i.major?w+"major":r.minor!==i.minor?w+"minor":r.patch!==i.patch?w+"patch":"prerelease"};fc.exports=sh});var hc=Ne((Gx,gc)=>{"use strict";var oh=bt(),lh=(e,t)=>new oh(e,t).major;gc.exports=lh});var yc=Ne((Vx,vc)=>{"use strict";var ch=bt(),uh=(e,t)=>new ch(e,t).minor;vc.exports=uh});var wc=Ne((jx,bc)=>{"use strict";var dh=bt(),ph=(e,t)=>new dh(e,t).patch;bc.exports=ph});var xc=Ne((qx,Sc)=>{"use strict";var fh=Ar(),mh=(e,t)=>{let r=fh(e,t);return r&&r.prerelease.length?r.prerelease:null};Sc.exports=mh});var Wt=Ne((Yx,Ec)=>{"use strict";var kc=bt(),gh=(e,t,r)=>new kc(e,r).compare(new kc(t,r));Ec.exports=gh});var Pc=Ne((Xx,Tc)=>{"use strict";var hh=Wt(),vh=(e,t,r)=>hh(t,e,r);Tc.exports=vh});var Rc=Ne((Zx,Ac)=>{"use strict";var yh=Wt(),bh=(e,t)=>yh(e,t,!0);Ac.exports=bh});var qa=Ne((Jx,Ic)=>{"use strict";var Cc=bt(),wh=(e,t,r)=>{let i=new Cc(e,r),o=new Cc(t,r);return i.compare(o)||i.compareBuild(o)};Ic.exports=wh});var _c=Ne((Qx,Nc)=>{"use strict";var Sh=qa(),xh=(e,t)=>e.sort((r,i)=>Sh(r,i,t));Nc.exports=xh});var Oc=Ne((ek,Dc)=>{"use strict";var kh=qa(),Eh=(e,t)=>e.sort((r,i)=>kh(i,r,t));Dc.exports=Eh});var Wn=Ne((tk,Lc)=>{"use strict";var Th=Wt(),Ph=(e,t,r)=>Th(e,t,r)>0;Lc.exports=Ph});var Ya=Ne((rk,Mc)=>{"use strict";var Ah=Wt(),Rh=(e,t,r)=>Ah(e,t,r)<0;Mc.exports=Rh});var Ns=Ne((nk,$c)=>{"use strict";var Ch=Wt(),Ih=(e,t,r)=>Ch(e,t,r)===0;$c.exports=Ih});var _s=Ne((ak,Uc)=>{"use strict";var Nh=Wt(),_h=(e,t,r)=>Nh(e,t,r)!==0;Uc.exports=_h});var Xa=Ne((ik,Fc)=>{"use strict";var Dh=Wt(),Oh=(e,t,r)=>Dh(e,t,r)>=0;Fc.exports=Oh});var Za=Ne((sk,Bc)=>{"use strict";var Lh=Wt(),Mh=(e,t,r)=>Lh(e,t,r)<=0;Bc.exports=Mh});var Ds=Ne((ok,Wc)=>{"use strict";var $h=Ns(),Uh=_s(),Fh=Wn(),Bh=Xa(),Wh=Ya(),Hh=Za(),zh=(e,t,r,i)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return $h(e,r,i);case"!=":return Uh(e,r,i);case">":return Fh(e,r,i);case">=":return Bh(e,r,i);case"<":return Wh(e,r,i);case"<=":return Hh(e,r,i);default:throw new TypeError(`Invalid operator: ${t}`)}};Wc.exports=zh});var zc=Ne((lk,Hc)=>{"use strict";var Kh=bt(),Gh=Ar(),{safeRe:Ja,t:Qa}=an(),Vh=(e,t)=>{if(e instanceof Kh)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let r=null;if(!t.rtl)r=e.match(t.includePrerelease?Ja[Qa.COERCEFULL]:Ja[Qa.COERCE]);else{let g=t.includePrerelease?Ja[Qa.COERCERTLFULL]:Ja[Qa.COERCERTL],h;for(;(h=g.exec(e))&&(!r||r.index+r[0].length!==e.length);)(!r||h.index+h[0].length!==r.index+r[0].length)&&(r=h),g.lastIndex=h.index+h[1].length+h[2].length;g.lastIndex=-1}if(r===null)return null;let i=r[2],o=r[3]||"0",c=r[4]||"0",u=t.includePrerelease&&r[5]?`-${r[5]}`:"",f=t.includePrerelease&&r[6]?`+${r[6]}`:"";return Gh(`${i}.${o}.${c}${u}${f}`,t)};Hc.exports=Vh});var Gc=Ne((ck,Kc)=>{"use strict";var jh=Ar(),qh=nn(),Yh=bt(),Xh=(e,t,r)=>{if(!qh.RELEASE_TYPES.includes(t))return null;let i=Zh(e,r);return i&&Jh(i,t)},Zh=(e,t)=>{let r=e instanceof Yh?e.version:e;return jh(r,t)},Jh=(e,t)=>{if(Qh(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},Qh=e=>e.startsWith("pre");Kc.exports=Xh});var jc=Ne((uk,Vc)=>{"use strict";var Os=class{constructor(){this.max=1e3,this.map=new Map}get(t){let r=this.map.get(t);if(r!==void 0)return this.map.delete(t),this.map.set(t,r),r}delete(t){return this.map.delete(t)}set(t,r){if(!this.delete(t)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,r)}return this}};Vc.exports=Os});var Ht=Ne((dk,Zc)=>{"use strict";var ev=/\s+/g,Ls=class e{constructor(t,r){if(r=rv(r),t instanceof e)return t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease?t:new e(t.raw,r);if(t instanceof Ms)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=t.trim().replace(ev," "),this.set=this.raw.split("||").map(i=>this.parseRange(i.trim())).filter(i=>i.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let i=this.set[0];if(this.set=this.set.filter(o=>!Yc(o[0])),this.set.length===0)this.set=[i];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&dv(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let r=this.set[t];for(let i=0;i<r.length;i++)i>0&&(this.formatted+=" "),this.formatted+=r[i].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace(uv,"");let i=((this.options.includePrerelease&&lv)|(this.options.loose&&cv))+":"+t,o=qc.get(i);if(o)return o;let c=this.options.loose,u=c?Ct[wt.HYPHENRANGELOOSE]:Ct[wt.HYPHENRANGE];t=t.replace(u,xv(this.options.includePrerelease)),Qe("hyphen replace",t),t=t.replace(Ct[wt.COMPARATORTRIM],iv),Qe("comparator trim",t),t=t.replace(Ct[wt.TILDETRIM],sv),Qe("tilde trim",t),t=t.replace(Ct[wt.CARETTRIM],ov),Qe("caret trim",t);let f=t.split(" ").map(b=>pv(b,this.options)).join(" ").split(/\s+/).map(b=>Sv(b,this.options));c&&(f=f.filter(b=>(Qe("loose invalid filter",b,this.options),!!b.match(Ct[wt.COMPARATORLOOSE])))),Qe("range list",f);let g=new Map,h=f.map(b=>new Ms(b,this.options));for(let b of h){if(Yc(b))return[b];g.set(b.value,b)}g.size>1&&g.has("")&&g.delete("");let w=[...g.values()];return qc.set(i,w),w}intersects(t,r){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(i=>Xc(i,r)&&t.set.some(o=>Xc(o,r)&&i.every(c=>o.every(u=>c.intersects(u,r)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new nv(t,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(kv(this.set[r],t,this.options))return!0;return!1}};Zc.exports=Ls;var tv=jc(),qc=new tv,rv=za(),Ms=Hn(),Qe=Bn(),nv=bt(),{safeRe:Ct,src:av,t:wt,comparatorTrimReplace:iv,tildeTrimReplace:sv,caretTrimReplace:ov}=an(),{FLAG_INCLUDE_PRERELEASE:lv,FLAG_LOOSE:cv}=nn(),uv=new RegExp(av[wt.BUILD],"g"),Yc=e=>e.value==="<0.0.0-0",dv=e=>e.value==="",Xc=(e,t)=>{let r=!0,i=e.slice(),o=i.pop();for(;r&&i.length;)r=i.every(c=>o.intersects(c,t)),o=i.pop();return r},pv=(e,t)=>(e=e.replace(Ct[wt.BUILD],""),Qe("comp",e,t),e=hv(e,t),Qe("caret",e),e=mv(e,t),Qe("tildes",e),e=yv(e,t),Qe("xrange",e),e=wv(e,t),Qe("stars",e),e),gt=e=>!e||e.toLowerCase()==="x"||e==="*",fv=(e,t,r)=>gt(e)&&!gt(t)||gt(t)&&r&&!gt(r),mv=(e,t)=>e.trim().split(/\s+/).map(r=>gv(r,t)).join(" "),gv=(e,t)=>{let r=t.loose?Ct[wt.TILDELOOSE]:Ct[wt.TILDE],i=t.includePrerelease?"-0":"";return e.replace(r,(o,c,u,f,g)=>{Qe("tilde",e,o,c,u,f,g);let h;return gt(c)?h="":gt(u)?h=`>=${c}.0.0${i} <${+c+1}.0.0-0`:gt(f)?h=`>=${c}.${u}.0${i} <${c}.${+u+1}.0-0`:g?(Qe("replaceTilde pr",g),h=`>=${c}.${u}.${f}-${g} <${c}.${+u+1}.0-0`):h=`>=${c}.${u}.${f} <${c}.${+u+1}.0-0`,Qe("tilde return",h),h})},hv=(e,t)=>e.trim().split(/\s+/).map(r=>vv(r,t)).join(" "),vv=(e,t)=>{Qe("caret",e,t);let r=t.loose?Ct[wt.CARETLOOSE]:Ct[wt.CARET],i=t.includePrerelease?"-0":"";return e.replace(r,(o,c,u,f,g)=>{Qe("caret",e,o,c,u,f,g);let h;return gt(c)?h="":gt(u)?h=`>=${c}.0.0${i} <${+c+1}.0.0-0`:gt(f)?c==="0"?h=`>=${c}.${u}.0${i} <${c}.${+u+1}.0-0`:h=`>=${c}.${u}.0${i} <${+c+1}.0.0-0`:g?(Qe("replaceCaret pr",g),c==="0"?u==="0"?h=`>=${c}.${u}.${f}-${g} <${c}.${u}.${+f+1}-0`:h=`>=${c}.${u}.${f}-${g} <${c}.${+u+1}.0-0`:h=`>=${c}.${u}.${f}-${g} <${+c+1}.0.0-0`):(Qe("no pr"),c==="0"?u==="0"?h=`>=${c}.${u}.${f} <${c}.${u}.${+f+1}-0`:h=`>=${c}.${u}.${f} <${c}.${+u+1}.0-0`:h=`>=${c}.${u}.${f} <${+c+1}.0.0-0`),Qe("caret return",h),h})},yv=(e,t)=>(Qe("replaceXRanges",e,t),e.split(/\s+/).map(r=>bv(r,t)).join(" ")),bv=(e,t)=>{e=e.trim();let r=t.loose?Ct[wt.XRANGELOOSE]:Ct[wt.XRANGE];return e.replace(r,(i,o,c,u,f,g)=>{if(Qe("xRange",e,i,o,c,u,f,g),fv(c,u,f))return e;let h=gt(c),w=h||gt(u),b=w||gt(f),S=b;return o==="="&&S&&(o=""),g=t.includePrerelease?"-0":"",h?o===">"||o==="<"?i="<0.0.0-0":i="*":o&&S?(w&&(u=0),f=0,o===">"?(o=">=",w?(c=+c+1,u=0,f=0):(u=+u+1,f=0)):o==="<="&&(o="<",w?c=+c+1:u=+u+1),o==="<"&&(g="-0"),i=`${o+c}.${u}.${f}${g}`):w?i=`>=${c}.0.0${g} <${+c+1}.0.0-0`:b&&(i=`>=${c}.${u}.0${g} <${c}.${+u+1}.0-0`),Qe("xRange return",i),i})},wv=(e,t)=>(Qe("replaceStars",e,t),e.trim().replace(Ct[wt.STAR],"")),Sv=(e,t)=>(Qe("replaceGTE0",e,t),e.trim().replace(Ct[t.includePrerelease?wt.GTE0PRE:wt.GTE0],"")),xv=e=>(t,r,i,o,c,u,f,g,h,w,b,S)=>(gt(i)?r="":gt(o)?r=`>=${i}.0.0${e?"-0":""}`:gt(c)?r=`>=${i}.${o}.0${e?"-0":""}`:u?r=`>=${r}`:r=`>=${r}${e?"-0":""}`,gt(h)?g="":gt(w)?g=`<${+h+1}.0.0-0`:gt(b)?g=`<${h}.${+w+1}.0-0`:S?g=`<=${h}.${w}.${b}-${S}`:e?g=`<${h}.${w}.${+b+1}-0`:g=`<=${g}`,`${r} ${g}`.trim()),kv=(e,t,r)=>{for(let i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let i=0;i<e.length;i++)if(Qe(e[i].semver),e[i].semver!==Ms.ANY&&e[i].semver.prerelease.length>0){let o=e[i].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var Hn=Ne((pk,nu)=>{"use strict";var zn=Symbol("SemVer ANY"),Fs=class e{static get ANY(){return zn}constructor(t,r){if(r=Jc(r),t instanceof e){if(t.loose===!!r.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),Us("comparator",t,r),this.options=r,this.loose=!!r.loose,this.parse(t),this.semver===zn?this.value="":this.value=this.operator+this.semver.version,Us("comp",this)}parse(t){let r=this.options.loose?Qc[eu.COMPARATORLOOSE]:Qc[eu.COMPARATOR],i=t.match(r);if(!i)throw new TypeError(`Invalid comparator: ${t}`);this.operator=i[1]!==void 0?i[1]:"",this.operator==="="&&(this.operator=""),i[2]?this.semver=new tu(i[2],this.options.loose):this.semver=zn}toString(){return this.value}test(t){if(Us("Comparator.test",t,this.options.loose),this.semver===zn||t===zn)return!0;if(typeof t=="string")try{t=new tu(t,this.options)}catch{return!1}return $s(t,this.operator,this.semver,this.options)}intersects(t,r){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new ru(t.value,r).test(this.value):t.operator===""?t.value===""?!0:new ru(this.value,r).test(t.semver):(r=Jc(r),r.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||$s(this.semver,"<",t.semver,r)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||$s(this.semver,">",t.semver,r)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};nu.exports=Fs;var Jc=za(),{safeRe:Qc,t:eu}=an(),$s=Ds(),Us=Bn(),tu=bt(),ru=Ht()});var Kn=Ne((fk,au)=>{"use strict";var Ev=Ht(),Tv=(e,t,r)=>{try{t=new Ev(t,r)}catch{return!1}return t.test(e)};au.exports=Tv});var su=Ne((mk,iu)=>{"use strict";var Pv=Ht(),Av=(e,t)=>new Pv(e,t).set.map(r=>r.map(i=>i.value).join(" ").trim().split(" "));iu.exports=Av});var lu=Ne((gk,ou)=>{"use strict";var Rv=bt(),Cv=Ht(),Iv=(e,t,r)=>{let i=null,o=null,c=null;try{c=new Cv(t,r)}catch{return null}return e.forEach(u=>{c.test(u)&&(!i||o.compare(u)===-1)&&(i=u,o=new Rv(i,r))}),i};ou.exports=Iv});var uu=Ne((hk,cu)=>{"use strict";var Nv=bt(),_v=Ht(),Dv=(e,t,r)=>{let i=null,o=null,c=null;try{c=new _v(t,r)}catch{return null}return e.forEach(u=>{c.test(u)&&(!i||o.compare(u)===1)&&(i=u,o=new Nv(i,r))}),i};cu.exports=Dv});var fu=Ne((vk,pu)=>{"use strict";var Bs=bt(),Ov=Ht(),du=Wn(),Lv=(e,t)=>{e=new Ov(e,t);let r=new Bs("0.0.0");if(e.test(r)||(r=new Bs("0.0.0-0"),e.test(r)))return r;r=null;for(let i=0;i<e.set.length;++i){let o=e.set[i],c=null;o.forEach(u=>{let f=new Bs(u.semver.version);switch(u.operator){case">":f.prerelease.length===0?f.patch++:f.prerelease.push(0),f.raw=f.format();case"":case">=":(!c||du(f,c))&&(c=f);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${u.operator}`)}}),c&&(!r||du(r,c))&&(r=c)}return r&&e.test(r)?r:null};pu.exports=Lv});var gu=Ne((yk,mu)=>{"use strict";var Mv=Ht(),$v=(e,t)=>{try{return new Mv(e,t).range||"*"}catch{return null}};mu.exports=$v});var ei=Ne((bk,bu)=>{"use strict";var Uv=bt(),yu=Hn(),{ANY:Fv}=yu,Bv=Ht(),Wv=Kn(),hu=Wn(),vu=Ya(),Hv=Za(),zv=Xa(),Kv=(e,t,r,i)=>{e=new Uv(e,i),t=new Bv(t,i);let o,c,u,f,g;switch(r){case">":o=hu,c=Hv,u=vu,f=">",g=">=";break;case"<":o=vu,c=zv,u=hu,f="<",g="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Wv(e,t,i))return!1;for(let h=0;h<t.set.length;++h){let w=t.set[h],b=null,S=null;if(w.forEach(k=>{k.semver===Fv&&(k=new yu(">=0.0.0")),b=b||k,S=S||k,o(k.semver,b.semver,i)?b=k:u(k.semver,S.semver,i)&&(S=k)}),b.operator===f||b.operator===g||(!S.operator||S.operator===f)&&c(e,S.semver))return!1;if(S.operator===g&&u(e,S.semver))return!1}return!0};bu.exports=Kv});var Su=Ne((wk,wu)=>{"use strict";var Gv=ei(),Vv=(e,t,r)=>Gv(e,t,">",r);wu.exports=Vv});var ku=Ne((Sk,xu)=>{"use strict";var jv=ei(),qv=(e,t,r)=>jv(e,t,"<",r);xu.exports=qv});var Pu=Ne((xk,Tu)=>{"use strict";var Eu=Ht(),Yv=(e,t,r)=>(e=new Eu(e,r),t=new Eu(t,r),e.intersects(t,r));Tu.exports=Yv});var Ru=Ne((kk,Au)=>{"use strict";var Xv=Kn(),Zv=Wt();Au.exports=(e,t,r)=>{let i=[],o=null,c=null,u=e.sort((w,b)=>Zv(w,b,r));for(let w of u)Xv(w,t,r)?(c=w,o||(o=w)):(c&&i.push([o,c]),c=null,o=null);o&&i.push([o,null]);let f=[];for(let[w,b]of i)w===b?f.push(w):!b&&w===u[0]?f.push("*"):b?w===u[0]?f.push(`<=${b}`):f.push(`${w} - ${b}`):f.push(`>=${w}`);let g=f.join(" || "),h=typeof t.raw=="string"?t.raw:String(t);return g.length<h.length?g:t}});var Ou=Ne((Ek,Du)=>{"use strict";var Cu=Ht(),zs=Hn(),{ANY:Ws}=zs,Hs=Kn(),Ks=Wt(),Jv=(e,t,r={})=>{if(e===t)return!0;e=new Cu(e,r),t=new Cu(t,r);let i=!1;e:for(let o of e.set){for(let c of t.set){let u=ey(o,c,r);if(i=i||u!==null,u)continue e}if(i)return!1}return!0},Qv=[new zs(">=0.0.0-0")],Iu=[new zs(">=0.0.0")],ey=(e,t,r)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===Ws){if(t.length===1&&t[0].semver===Ws)return!0;r.includePrerelease?e=Qv:e=Iu}if(t.length===1&&t[0].semver===Ws){if(r.includePrerelease)return!0;t=Iu}let i=new Set,o,c;for(let k of e)k.operator===">"||k.operator===">="?o=Nu(o,k,r):k.operator==="<"||k.operator==="<="?c=_u(c,k,r):i.add(k.semver);if(i.size>1)return null;let u;if(o&&c){if(u=Ks(o.semver,c.semver,r),u>0)return null;if(u===0&&(o.operator!==">="||c.operator!=="<="))return null}for(let k of i){if(o&&!Hs(k,String(o),r)||c&&!Hs(k,String(c),r))return null;for(let _ of t)if(!Hs(k,String(_),r))return!1;return!0}let f,g,h,w,b=c&&!r.includePrerelease&&c.semver.prerelease.length?c.semver:!1,S=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;b&&b.prerelease.length===1&&c.operator==="<"&&b.prerelease[0]===0&&(b=!1);for(let k of t){if(w=w||k.operator===">"||k.operator===">=",h=h||k.operator==="<"||k.operator==="<=",o){if(S&&k.semver.prerelease&&k.semver.prerelease.length&&k.semver.major===S.major&&k.semver.minor===S.minor&&k.semver.patch===S.patch&&(S=!1),k.operator===">"||k.operator===">="){if(f=Nu(o,k,r),f===k&&f!==o)return!1}else if(o.operator===">="&&!k.test(o.semver))return!1}if(c){if(b&&k.semver.prerelease&&k.semver.prerelease.length&&k.semver.major===b.major&&k.semver.minor===b.minor&&k.semver.patch===b.patch&&(b=!1),k.operator==="<"||k.operator==="<="){if(g=_u(c,k,r),g===k&&g!==c)return!1}else if(c.operator==="<="&&!k.test(c.semver))return!1}if(!k.operator&&(c||o)&&u!==0)return!1}return!(o&&h&&!c&&u!==0||c&&w&&!o&&u!==0||S||b)},Nu=(e,t,r)=>{if(!e)return t;let i=Ks(e.semver,t.semver,r);return i>0?e:i<0||t.operator===">"&&e.operator===">="?t:e},_u=(e,t,r)=>{if(!e)return t;let i=Ks(e.semver,t.semver,r);return i<0?e:i>0||t.operator==="<"&&e.operator==="<="?t:e};Du.exports=Jv});var Vs=Ne((Tk,$u)=>{"use strict";var Gs=an(),Lu=nn(),ty=bt(),Mu=Rs(),ry=Ar(),ny=sc(),ay=lc(),iy=dc(),sy=mc(),oy=hc(),ly=yc(),cy=wc(),uy=xc(),dy=Wt(),py=Pc(),fy=Rc(),my=qa(),gy=_c(),hy=Oc(),vy=Wn(),yy=Ya(),by=Ns(),wy=_s(),Sy=Xa(),xy=Za(),ky=Ds(),Ey=zc(),Ty=Gc(),Py=Hn(),Ay=Ht(),Ry=Kn(),Cy=su(),Iy=lu(),Ny=uu(),_y=fu(),Dy=gu(),Oy=ei(),Ly=Su(),My=ku(),$y=Pu(),Uy=Ru(),Fy=Ou();$u.exports={parse:ry,valid:ny,clean:ay,inc:iy,diff:sy,major:oy,minor:ly,patch:cy,prerelease:uy,compare:dy,rcompare:py,compareLoose:fy,compareBuild:my,sort:gy,rsort:hy,gt:vy,lt:yy,eq:by,neq:wy,gte:Sy,lte:xy,cmp:ky,coerce:Ey,truncate:Ty,Comparator:Py,Range:Ay,satisfies:Ry,toComparators:Cy,maxSatisfying:Iy,minSatisfying:Ny,minVersion:_y,validRange:Dy,outside:Oy,gtr:Ly,ltr:My,intersects:$y,simplifyRange:Uy,subset:Fy,SemVer:ty,re:Gs.re,src:Gs.src,tokens:Gs.t,SEMVER_SPEC_VERSION:Lu.SEMVER_SPEC_VERSION,RELEASE_TYPES:Lu.RELEASE_TYPES,compareIdentifiers:Mu.compareIdentifiers,rcompareIdentifiers:Mu.rcompareIdentifiers}});var xS={};kl(xS,{render:()=>wS,unmount:()=>SS});Rt();at();var rg="https://ws.audioscrobbler.com/2.0/",ng=["2a96cbd8b46e442fc41c2b86b821562f","c6f59c1e5e7240a4c0d427abd71f3dbb"];function Na(e){return Array.isArray(e)?e:e==null?[]:[e]}function ag(e){return ng.some(t=>e.includes(t))}function Nn(e){let t=e?.find(r=>r.size==="large")?.["#text"]?.trim();return t&&!ag(t)?t:void 0}async function _n(e,t,r){let i=new URL(rg);i.searchParams.set("api_key",e),i.searchParams.set("format","json"),i.searchParams.set("method",t);for(let[u,f]of Object.entries(r))i.searchParams.set(u,f);let o=await fetch(i.toString());if(!o.ok)throw o.status===403?new Error("Invalid Last.fm API key"):o.status===429?new Error("Last.fm rate limited"):new Error(`Last.fm API error: ${o.status}`);let c=await o.json();if(c.error)throw new Error(c.message||`Last.fm error ${c.error}`);return c}async function Tl(e,t){let i=(await _n(e,"user.getinfo",{user:t})).user;return{username:i.name,totalScrobbles:parseInt(i.playcount,10)||0,registered:i.registered?.["#text"]||"",imageUrl:Nn(i.image)}}async function us(e,t,r=50,i=1,o,c){let u={user:t,limit:String(r),page:String(i)};o!==void 0&&(u.from=String(Math.floor(o/1e3))),c!==void 0&&(u.to=String(Math.floor(c/1e3)));let f=await _n(e,"user.getrecenttracks",u);return Na(f.recenttracks?.track).filter(h=>h.date||h["@attr"]?.nowplaying).map(h=>{let w="#text"in h.artist?h.artist["#text"]:h.artist.name;return{name:h.name,artist:w,album:h.album?.["#text"]||"",albumArt:Nn(h.image),playedAt:h.date?.uts?parseInt(h.date.uts,10)*1e3:Date.now()}})}async function Pl(e,t,r,i=200){let o=await _n(e,"user.gettoptracks",{user:t,period:r,limit:String(i)});return Na(o.toptracks?.track).map(u=>({name:u.name,artist:u.artist?.name||"",playCount:parseInt(u.playcount,10)||0,albumArt:Nn(u.image)}))}async function Al(e,t,r,i=100){let o=await _n(e,"user.gettopartists",{user:t,period:r,limit:String(i)});return Na(o.topartists?.artist).map(u=>({name:u.name,playCount:parseInt(u.playcount,10)||0,imageUrl:Nn(u.image)}))}async function Rl(e,t,r,i=100){let o=await _n(e,"user.gettopalbums",{user:t,period:r,limit:String(i)});return Na(o.topalbums?.album).map(u=>({name:u.name,artist:u.artist?.name||"",playCount:parseInt(u.playcount,10)||0,imageUrl:Nn(u.image)}))}at();Er();Xt();var dg="lastfm",pg=20,_l=200,fg=12;function mg(e){return`${dg}:${e}`}function Jr(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function gg(e){let t=new Set(e.map(u=>Jr(u.playedAt)));if(t.size===0)return 0;let r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=Jr(i.getTime());if(!t.has(o)&&(i.setDate(i.getDate()-1),!t.has(Jr(i.getTime()))))return 0;let c=0;for(;t.has(Jr(i.getTime()));)c++,i.setDate(i.getDate()-1);return c}var ms=class{constructor(){this.config=null}getProviderInfo(){return{id:"lastfm",name:"Last.fm",description:"Stats from Last.fm scrobbles",capabilities:{hasActivityData:!0,hasConsistencyData:!1,hasGenreData:!1,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return On}async calculateStats(t){if(!this.config&&(await this.init(),!this.config))throw new Error("LastfmProvider not configured  -  call init() first");let r=mg(t.id),i=ze.get(r);if(i)return i;let{apiKey:o,username:c}=this.config,u=t.id,[f,g,h,w]=await Promise.allSettled([Pl(o,c,u,200),Al(o,c,u,100),Rl(o,c,u,100),us(o,c,_l,1)]),b=f.status==="fulfilled"?f.value:[],S=g.status==="fulfilled"?g.value:[],k=h.status==="fulfilled"?h.value:[],_=w.status==="fulfilled"?w.value:[],$=_.filter(T=>!Number.isNaN(T.playedAt)),U=b.reduce((T,ae)=>T+ae.playCount,0)||$.length,W=U*21e4,ee=b.map((T,ae)=>({rank:ae+1,trackUri:`lfm:track:${T.artist}:${T.name}`,trackName:T.name,artistName:T.artist,artistUri:`lfm:artist:${T.artist}`,albumName:T.album??"",albumUri:"",albumArt:T.albumArt,count:T.playCount,durationMs:0})),D=S.map((T,ae)=>({rank:ae+1,artistUri:`lfm:artist:${T.name}`,artistName:T.name,count:T.playCount,durationMs:0,imageUrl:T.imageUrl??null})),N=k.map((T,ae)=>({rank:ae+1,albumUri:`lfm:album:${T.artist}:${T.name}`,albumName:T.name,artistName:T.artist,count:T.playCount,durationMs:0,albumArt:T.imageUrl})),M=[],R=$.slice(0,fg).map(T=>({trackUri:`lfm:track:${T.artist}:${T.name}`,trackName:T.name,artistName:T.artist,albumArt:T.albumArt,playedAt:T.playedAt})),E=new Array(24).fill(0);for(let T of $){let ae=new Date(T.playedAt).getHours();E[ae]++}let Z=$.length>0?E.indexOf(Math.max(...E)):0,K=new Array(7).fill(0);for(let T of $){let ae=new Date(T.playedAt).getDay(),Te=ae===0?6:ae-1;K[Te]++}let fe=$.length>0?K.indexOf(Math.max(...K)):0,ge=[..._];try{for(let T=2;T<=pg;T++){let ae=await us(o,c,_l,T);if(ae.length===0)break;ge.push(...ae)}}catch(T){console.warn("[listening-stats] Last.fm streak pagination stopped early:",T)}let V=gg(ge),oe=new Set(ge.map(T=>Jr(T.playedAt))).size,re=new Map;for(let T of ge){let ae=Jr(T.playedAt);re.set(ae,(re.get(ae)??0)+1)}let ve=Array.from(re.entries()).map(([T,ae])=>({date:T,count:ae})).sort((T,ae)=>T.date.localeCompare(ae.date)),Re=b.length,te=S.length,Pe={topTracks:ee,topArtists:D,topAlbums:N,topGenres:M,totalPlays:U,totalDuration:W,listeningDays:oe,recentPlays:R,hourlyDistribution:E,peakHour:Z,skipRate:0,uniqueTrackCount:Re,uniqueArtistCount:te,streak:V,weekdayDistribution:K,peakWeekday:fe,dailyPlayCounts:ve};return ze.set(r,Pe),Pe}async calculateStatsProgressive(t,r){let i=await this.calculateStats(t);return r(i,1),r(i,2),r(i,3),i}async init(){let t=localStorage.getItem(ne.LASTFM_CONFIG);if(t)try{let r=JSON.parse(t);this.config=typeof r?.apiKey=="string"&&r.apiKey&&typeof r?.username=="string"&&r.username?r:null}catch{this.config=null}else this.config=null}destroy(){ze.invalidate()}},Ln=new ms;var Da=cs(Dl(),1),Ol=Symbol.for("Dexie"),Oa=globalThis[Ol]||(globalThis[Ol]=Da.default);if(Da.default.semVer!==Oa.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Da.default.semVer} and ${Oa.semVer}`);var{liveQuery:LS,mergeRanges:MS,rangesOverlap:$S,RangeSet:US,cmp:FS,Entity:BS,PropModification:WS,replacePrefix:HS,add:zS,remove:KS,DexieYProvider:GS}=Oa;var Ll=Oa;var hg,vs=class extends Ll{constructor(t){super("listening-stats"),this.version(4).stores({playEvents:"++id, startedAt, trackUri, artistUri, type"}),this.version(5).stores({playEvents:"++id, startedAt, trackUri, artistUri, type",artists:"uri, updatedAt"}),this.on("versionchange",r=>{if(r.newVersion!==null)return this.close({disableAutoOpen:!0}),t?.(),hg?.(),!1})}},Ye=new vs;function cr(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Je(e){if(e==null)return;let t=String(e).trim();if(t){if(/^spotify:image:/i.test(t)){let r=t.replace(/^spotify:image:/i,"").trim();return r?`https://i.scdn.co/image/${r}`:void 0}return t}}var ys=class{constructor(t=300*1e3){this.store=new Map;this.ttlMs=t}get(t){let r=this.store.get(t);return!r||Date.now()>r.expiry?null:r.data}getStale(t){let r=this.store.get(t);return r?r.data:null}set(t,r){this.store.set(t,{data:r,expiry:Date.now()+this.ttlMs})}invalidate(t){t!==void 0?this.store.delete(t):this.store.clear()}},La=new ys;Ma();async function Zt(e){let t=La.get(e);if(t!==null)return{ok:!0,data:t};if(Tr.isOpen()){let r=La.getStale(e);return r!==null?{ok:!0,data:r,stale:!0}:{ok:!1,error:{type:"circuit_open"}}}try{let r=await Spicetify.CosmosAsync.request("GET",e);if(r.status===429){let o=r.headers?.["retry-after"]??r.headers?.["Retry-After"]??"5",c=Number(o)||5;return Tr.recordFailure(c),{ok:!1,error:{type:"rate_limited",retryAfter:c}}}if(r.status<200||r.status>=300)return Tr.recordFailure(),{ok:!1,error:{type:"http_error",status:r.status}};Tr.recordSuccess();let i=r.body;return La.set(e,i),{ok:!0,data:i}}catch(r){return Tr.recordFailure(),{ok:!1,error:{type:"network_error",message:String(r)}}}}var Ml=50,vg=1440*60*1e3,yg=360*60*1e3;function $n(e){return/^spotify:artist:[a-zA-Z0-9]+$/i.test(e.trim())}function bg(e,t){let r=t-e.updatedAt;return e.imageUrl?.trim()?r<vg:r<yg}async function $a(e){if(e.length===0)return;let t=[...new Set(e.filter($n))];if(t.length===0)return;let r=Date.now(),i=await Ye.artists.where("uri").anyOf(t).toArray(),o=new Set(i.filter(u=>bg(u,r)).map(u=>u.uri)),c=t.filter(u=>!o.has(u));if(c.length!==0)for(let u=0;u<c.length;u+=Ml){let f=c.slice(u,u+Ml),g=f.map(S=>S.replace(/^spotify:artist:/i,"")).join(","),h=await Zt(`https://api.spotify.com/v1/artists?ids=${g}`);if(!h.ok)continue;let w=[],b=h.data.artists??[];for(let S=0;S<f.length;S++){let k=f[S],_=b[S];if(_){let $=_.images[0]?.url??null;w.push({uri:`spotify:artist:${_.id}`,name:_.name,genres:_.genres??[],imageUrl:Je($)??$,updatedAt:Date.now()})}else w.push({uri:k,name:"Unknown",genres:[],imageUrl:null,updatedAt:Date.now()})}w.length>0&&await Ye.artists.bulkPut(w)}}Er();at();function Qr(){return localStorage.getItem(ne.RANK_MODE)==="minutes"?"minutes":"streams"}function $l(e){localStorage.setItem(ne.RANK_MODE,e)}Xt();var wg="local",Sg=12,xg=400;async function kg(e){let t=[...new Set(e.topArtists.map(o=>o.artistUri).filter($n))];if(t.length===0)return;let r=await Ye.artists.where("uri").anyOf(t).toArray(),i=new Map(r.map(o=>[o.uri,o]));for(let o of e.topArtists){let c=i.get(o.artistUri),u=Je(c?.imageUrl??void 0)??c?.imageUrl;u?.trim()&&!o.imageUrl?.trim()&&(o.imageUrl=u)}}function bs(e){if(e.type==="skip")return!1;let t=e.trackUri??"";return!(t.startsWith("spotify:narration:")||t.startsWith("spotify:ad:")||t.startsWith("spotify:interruption:"))}function ws(e){return e.artistUri||`local:artist:${e.artistName.toLowerCase()}`}function Eg(e){return e.albumUri||`local:album:${e.artistName.toLowerCase()}:${e.albumName.toLowerCase()}`}function Tg(e,t){return`${wg}:${e}:${t}`}function Ss(e){return(t,r)=>e==="minutes"?r.durationMs-t.durationMs||r.count-t.count:r.count-t.count||r.durationMs-t.durationMs}function Ul(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()-1)}function Pg(e){if(e.length===0)return 0;let t=new Set(e.map(u=>cr(u.startedAt))),r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=cr(i.getTime());if(!t.has(o)){i=Ul(i);let u=cr(i.getTime());if(!t.has(u))return 0}let c=0;for(;t.has(cr(i.getTime()));)c++,i=Ul(i);return c}var xs=class{getProviderInfo(){return{id:"local",name:"Local",description:"Stats from locally tracked plays",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return Gt}async calculateStats(t){let r=Qr(),i=Tg(t.id,r),o=ze.get(i);if(o)return await kg(o),o;let{start:c,end:u}=t.getBoundaries(),f=u===Number.MAX_SAFE_INTEGER?await Ye.playEvents.toArray():await Ye.playEvents.where("startedAt").between(c,u).toArray(),g=f.filter(bs),h=Dn(t),w,b;if(h){let ye=(await Ye.playEvents.where("startedAt").between(h.start,h.end).toArray()).filter(bs),Ke=new Set(g.map(ws));if(ye.length>0){let $e=new Set(ye.map(ws)),rt=0;for(let Q of Ke)$e.has(Q)||rt++;w=rt,b=ye.reduce((Q,Be)=>Q+Be.playedMs,0)}else w=Ke.size}else w=0;let S=Date.now()-xg*24*60*60*1e3,_=(await Ye.playEvents.where("startedAt").above(S).toArray()).filter(bs),$=Pg(_),U=new Map,z=new Map,W=new Map;for(let J of g){let ye=U.get(J.trackUri);ye?(ye.count++,ye.durationMs+=J.playedMs):U.set(J.trackUri,{trackUri:J.trackUri,trackName:J.trackName,artistName:J.artistName,artistUri:J.artistUri,albumName:J.albumName,albumUri:J.albumUri,albumArt:Je(J.albumArt),count:1,durationMs:J.playedMs});let Ke=ws(J),$e=z.get(Ke);$e?($e.count++,$e.durationMs+=J.playedMs):z.set(Ke,{name:J.artistName,uri:J.artistUri,count:1,durationMs:J.playedMs});let rt=Eg(J),Q=W.get(rt);Q?(Q.count++,Q.durationMs+=J.playedMs):W.set(rt,{name:J.albumName,uri:J.albumUri,artistName:J.artistName,albumArt:Je(J.albumArt),count:1,durationMs:J.playedMs})}let ee=Array.from(U.values()).sort(Ss(r)).map((J,ye)=>({rank:ye+1,...J})),D=Array.from(z.values()).sort(Ss(r)).map((J,ye)=>({rank:ye+1,artistUri:J.uri,artistName:J.name,count:J.count,durationMs:J.durationMs})),N=Array.from(W.values()).sort(Ss(r)).map((J,ye)=>({rank:ye+1,albumUri:J.uri,albumName:J.name,artistName:J.artistName,albumArt:J.albumArt,count:J.count,durationMs:J.durationMs})),R=[...g].sort((J,ye)=>ye.startedAt-J.startedAt).slice(0,Sg).map(J=>({trackUri:J.trackUri,trackName:J.trackName,artistName:J.artistName,albumArt:Je(J.albumArt),playedAt:J.startedAt})),E=g.reduce((J,ye)=>J+ye.playedMs,0),Z=g.length>0?new Set(g.map(J=>cr(J.startedAt))).size:0,K=new Array(24).fill(0);for(let J of g){let ye=new Date(J.startedAt).getHours();K[ye]++}let fe=g.length>0?K.indexOf(Math.max(...K)):0,ge=new Array(7).fill(0);for(let J of g){let ye=new Date(J.startedAt).getDay(),Ke=ye===0?6:ye-1;ge[Ke]++}let V=g.length>0?ge.indexOf(Math.max(...ge)):0,oe=new Map;for(let J of _){let ye=cr(J.startedAt);oe.set(ye,(oe.get(ye)??0)+1)}let re=Array.from(oe.entries()).map(([J,ye])=>({date:J,count:ye})).sort((J,ye)=>J.date.localeCompare(ye.date)),ve=f.filter(J=>J.type==="skip").length,Re=f.length,te=Re>0?ve/Re:0,Pe=U.size,T=z.size,ae=D.map(J=>J.artistUri);await $a(ae);let Te=await Ye.artists.where("uri").anyOf(ae).toArray(),Oe=new Map(Te.map(J=>[J.uri,J]));for(let J of D){let ye=Oe.get(J.artistUri);ye&&(J.genres=ye.genres,J.imageUrl=Je(ye.imageUrl??void 0)??ye.imageUrl??void 0)}let Me=new Map;for(let J of Te)for(let ye of J.genres)Me.set(ye,(Me.get(ye)??0)+1);let Le=Array.from(Me.entries()).sort((J,ye)=>ye[1]-J[1]).map(([J,ye],Ke)=>({rank:Ke+1,genre:J,count:ye})),et={topTracks:ee,topArtists:D,topAlbums:N,topGenres:Le,totalPlays:g.length,totalDuration:E,listeningDays:Z,recentPlays:R,hourlyDistribution:K,peakHour:fe,skipRate:te,uniqueTrackCount:Pe,uniqueArtistCount:T,streak:$,weekdayDistribution:ge,peakWeekday:V,dailyPlayCounts:re,newArtistCount:w,priorPeriodTotalDuration:b};ze.set(i,et);let tt=Nl(t.id);return tt&&this.calculateStats(tt).catch(()=>{}),et}async calculateStatsProgressive(t,r){let i=await this.calculateStats(t);return r(i,1),r(i,2),r(i,3),i}async init(){ze.setupInvalidationListeners()}destroy(){ze.invalidate()}},Un=new xs;at();var ks=class{constructor(){this.providers=new Map;this.activeId=null}register(t){let r=t.getProviderInfo();this.providers.set(r.id,t)}getActive(){return this.activeId?this.providers.get(this.activeId)??null:null}getActiveId(){return this.activeId}setActive(t){if(!this.providers.has(t))throw new Error(`Provider "${t}" not registered`);this.activeId=t,localStorage.setItem(ne.ACTIVE_PROVIDER,t)}restoreActive(){let t=localStorage.getItem(ne.ACTIVE_PROVIDER);t&&this.providers.has(t)&&(this.activeId=t)}_resetForTesting(){this.providers.clear(),this.activeId=null}getAll(){return Array.from(this.providers.values()).map(t=>t.getProviderInfo())}},Ae=new ks;rn();var Ng=["listening-stats:card-order","listening-stats:period","listening-stats:sfm-promo-dismissed","listening-stats:tour-seen","listening-stats:tour-version","listening-stats:lastUpdateCheck","listening-stats:searchCache","listening-stats:dedup-v2-done","listening-stats:rateLimitedUntil","listening-stats:lastfm","listening-stats:pollingData"],Kl="listening-stats:prun-v1-done";function _g(){try{if(localStorage.getItem(Kl)==="1")return;for(let e of Ng)localStorage.removeItem(e);localStorage.setItem(Kl,"1")}catch{}}var Gl=!1;async function Vl(){if(!Gl){Gl=!0,_g(),Ae.register(Un),Ae.register(Vt),Ae.register(Ln),Ae.restoreActive(),Ae.getActive()||Ae.setActive("local");for(let e of[Un,Vt,Ln])try{await e.init()}catch(t){console.warn(`[listening-stats] Provider "${e.getProviderInfo().id}" failed to init:`,t)}}}Er();at();function Ts(){try{let e=localStorage.getItem(ne.PROVIDER_PERIODS);if(!e)return{};let t=JSON.parse(e);return typeof t=="object"&&t!==null&&!Array.isArray(t)?t:{}}catch{return{}}}function Fn(e,t){let r=Ts()[e];if(r){let i=t.find(o=>o.id===r);if(i)return i}return t[0]}function jl(e,t){let r=Ts();r[e]=t,localStorage.setItem(ne.PROVIDER_PERIODS,JSON.stringify(r))}Xt();var ni=cs(Vs(),1);at();var ri=cs(Vs(),1);var Uu="Xndr2",Fu="listening-stats",ti=`${Uu}/${Fu}`,ur=`https://github.com/${ti}`,Pk=`${ur}/releases/latest/download/listening-stats.zip`,dr=`https://raw.githubusercontent.com/${ti}/main`,Bu=`https://raw.githubusercontent.com/${ti}/dist/latest-release.json`,Wu=`https://cdn.jsdelivr.net/gh/${Uu}/${Fu}@dist/latest-release.json`,Hu=`https://api.github.com/repos/${ti}`;function js(e){return e.replace(/^v/i,"").trim()}async function By(){let e=[Bu,Wu];for(let t of e)try{let r=await fetch(`${t}?t=${Date.now()}`,{cache:"no-store"});if(!r.ok)continue;let i=await r.json();if(typeof i.tag!="string"||!i.tag)continue;return{tag:i.tag,prerelease:!!i.prerelease}}catch{}return null}async function zu(e){try{let t=await fetch(`${Hu}${e}`,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});return t.ok?await t.json():null}catch{return null}}function Wy(e){return typeof e.tag_name!="string"||!e.tag_name?!1:(e.assets??[]).some(t=>t.name==="listening-stats.zip")}function Hy(e){let t=(e??[]).filter(Wy),r=t.find(u=>!u.prerelease),i=t.find(u=>u.prerelease);if(!i)return r;if(!r)return i;let o=ri.default.coerce(i.tag_name,{includePrerelease:!0}),c=ri.default.coerce(r.tag_name,{includePrerelease:!0});return o&&c&&ri.default.gt(o,c)?i:r}async function Ku(e){if(e){let i=await zu("/releases?per_page=15"),o=Hy(i);if(o?.tag_name)return{tag:o.tag_name,version:js(o.tag_name),prerelease:!!o.prerelease}}let t=await zu("/releases/latest");if(t?.tag_name)return{tag:t.tag_name,version:js(t.tag_name),prerelease:!!t.prerelease};let r=await By();return r&&(e||!r.prerelease)?{tag:r.tag,version:js(r.tag),prerelease:r.prerelease}:null}function zy(e,t){let r=ni.default.coerce(e,{includePrerelease:!0}),i=ni.default.coerce(t,{includePrerelease:!0});return!r||!i?!1:ni.default.gt(i,r)}async function Gu(e,t){let r=await Ku(t);return r?{updateAvailable:zy(e,r.version),localVersion:e,remoteVersion:r.version,remoteTag:r.tag,prerelease:r.prerelease}:{updateAvailable:!1,localVersion:e,remoteVersion:e,remoteTag:null}}function Vu(e){try{let t=Date.now()+e*60*60*1e3;localStorage.setItem(ne.UPDATE_PROMPT_SNOOZE_UNTIL,String(t))}catch{}}function ju(){try{let e=localStorage.getItem(ne.UPDATE_PROMPT_SNOOZE_UNTIL);if(!e)return!1;let t=Number.parseInt(e,10);return!Number.isNaN(t)&&Date.now()<t}catch{return!1}}var Ky=[{id:"overview",label:"Overview"},{id:"top-genres",label:"Top Genres"},{id:"top-lists",label:"Top Lists"},{id:"activity",label:"Activity"},{id:"consistency",label:"Consistency"},{id:"recently-played",label:"Recently Played"}];function ai(e){return Ky.filter(t=>!(t.id==="top-genres"&&!e.hasGenreData||t.id==="activity"&&!e.hasActivityData||t.id==="consistency"&&!e.hasConsistencyData))}function qu(e){return e.hasActivityData?"full":"hidden"}function Yu(e){if(e<6e4)return"<1 min";let t=Math.floor(e/6e4);if(t<60)return`${t} min`;let r=Math.floor(t/60),i=t%60;if(r<24)return i>0?`${r}h ${i}m`:`${r}h`;let o=Math.floor(r/24),c=r%24;return c>0?`${o}d ${c}h`:`${o}d`}function Xu(e){let t=Date.now()-e,r=Math.floor(t/1e3);if(r<60)return"just now";let i=Math.floor(r/60);if(i<60)return`${i}m ago`;let o=Math.floor(i/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function dt(e){try{return Spicetify.Locale.formatNumber(e)}catch{return String(e)}}function Qt(e,t){return t?`${e}:00`:e===0?"12am":e<12?`${e}am`:e===12?"12pm":`${e-12}pm`}function Zu(e){return`$${(e*.004).toFixed(2)}`}at();var Gn=["overview","top-genres","top-lists","activity","consistency","recently-played"],si=["top-tracks","top-artists","top-albums"],Kr={local:["tracks","unique-artists","streak","new-artists","peak-hour","skip-rate","est-payout"],statsfm:["unique-artists","new-artists","top-genre","est-payout"]},Vn={tracks:"Tracks","unique-artists":"Unique Artists","listening-days":"Listening Days",streak:"Streak","skip-rate":"Skip Rate","est-payout":"Est. Payout","top-genre":"Top Genre","new-artists":"New Artists","peak-hour":"Peak Hour"},Qu={"top-tracks":"Top Tracks","top-artists":"Top Artists","top-albums":"Top Albums"},Gy=new Set(["hour","weekday","day"]),Vy=new Set(["pill","bubble","minimal","off"]),Lt={use24HourTime:!1,itemsPerSection:5,hiddenSections:[],sectionOrder:[...Gn],columnOrder:[...si],overviewOrder:{local:[...Kr.local],statsfm:[...Kr.statsfm]},activityTab:"hour",activeGenre:null,playCountVariant:"pill",playCountShowPeriodStreams:!0,activePage:"dashboard",receiveBetaUpdates:!1,showAnnouncementBanner:!0,announcementBannerHiddenForDismissKey:"",showShareCaption:!0,heatmapShrink:!0};function Ju(){return{...Lt,hiddenSections:[...Lt.hiddenSections],sectionOrder:[...Lt.sectionOrder],columnOrder:[...Lt.columnOrder],overviewOrder:{local:[...Lt.overviewOrder.local],statsfm:[...Lt.overviewOrder.statsfm]}}}function ii(e,t){let r=new Set(t),i=[],o=new Set;if(Array.isArray(e))for(let c of e)typeof c=="string"&&r.has(c)&&!o.has(c)&&(o.add(c),i.push(c));for(let c of t)o.has(c)||i.push(c);return i}function jy(e){let t=[],r=new Set;if(!Array.isArray(e))return t;for(let i of e)typeof i=="string"&&(r.has(i)||(r.add(i),t.push(i)));return t}function st(){try{let e=localStorage.getItem(ne.PREFERENCES);if(e){let t=JSON.parse(e),r=Ju();return{...r,...t,hiddenSections:jy(t.hiddenSections??r.hiddenSections),sectionOrder:ii(t.sectionOrder,Gn),columnOrder:ii(t.columnOrder,si),overviewOrder:{local:ii(t.overviewOrder?.local,Kr.local),statsfm:ii(t.overviewOrder?.statsfm,Kr.statsfm)},activityTab:Gy.has(t.activityTab)?t.activityTab:Lt.activityTab,playCountVariant:Vy.has(t.playCountVariant)?t.playCountVariant:Lt.playCountVariant,playCountShowPeriodStreams:typeof t.playCountShowPeriodStreams=="boolean"?t.playCountShowPeriodStreams:Lt.playCountShowPeriodStreams,receiveBetaUpdates:typeof t.receiveBetaUpdates=="boolean"?t.receiveBetaUpdates:Lt.receiveBetaUpdates,showAnnouncementBanner:typeof t.showAnnouncementBanner=="boolean"?t.showAnnouncementBanner:Lt.showAnnouncementBanner,announcementBannerHiddenForDismissKey:typeof t.announcementBannerHiddenForDismissKey=="string"?t.announcementBannerHiddenForDismissKey:Lt.announcementBannerHiddenForDismissKey,heatmapShrink:typeof t.heatmapShrink=="boolean"?t.heatmapShrink:Lt.heatmapShrink}}}catch{}return Ju()}function Fe(e,t){try{let r=st();r[e]=t,localStorage.setItem(ne.PREFERENCES,JSON.stringify(r))}catch{}}function St({children:e,label:t,placement:r}){let i=globalThis.Spicetify?.ReactComponent?.TooltipWrapper;return i?Spicetify.React.createElement(i,{label:t,placement:r},e):Spicetify.React.createElement(Spicetify.React.Fragment,null,e)}function er({value:e,onSelected:t}){let r=globalThis.Spicetify?.ReactComponent?.Toggle;return r?Spicetify.React.createElement(r,{value:e,onSelected:t}):Spicetify.React.createElement("input",{type:"checkbox",checked:e,onChange:i=>t(i.currentTarget.checked)})}var{useRef:qy,useEffect:Yy,useState:ed}=Spicetify.React,Xy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Zy(e){let t=new Date;t.setHours(0,0,0,0);let r=new Map;for(let b of e)r.set(b.date,b.count);let i=new Date(t);i.setDate(i.getDate()-364-i.getDay());let o=[],c=new Date(i);for(;c<=t;){let b=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`;o.push({date:new Date(c),count:r.get(b)??0}),c.setDate(c.getDate()+1)}let u=o[0]?.date.getDay()??0;for(let b=0;b<u;b++)o.unshift(null);for(;o.length%7!==0;)o.push(null);let f=o.length/7,g=[];for(let b=0;b<f;b++)g.push(o.slice(b*7,b*7+7));let h=[],w=-1;for(let b=0;b<g.length;b++){let S=g[b].find(k=>k!==null);if(S&&S.date.getDate()<=7){let k=S.date.getMonth();k!==w&&(h.push({col:b,label:Xy[k]}),w=k)}}return{cells:g,monthLabels:h}}function Jy(e,t){return e<=0?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${(.15+Math.min(1,e/t)*.85).toFixed(2)})`}function td({dailyPlayCounts:e,shrink:t}){let{cells:r,monthLabels:i}=Zy(e),o=r.length,c=Math.max(...r.flat().filter(_=>_!==null).map(_=>_.count),1),u=qy(null),[f,g]=ed(16),[h,w]=ed(3);Yy(()=>{if(!t||!u.current){g(16),w(3);return}let _=3,$=new ResizeObserver(U=>{let z=U[0].contentRect.width;if(z<=0)return;let W=Math.max(1,o),ee=Math.max(1,Math.min(3,Math.floor(z/W/5))),D=Math.max(_,Math.min(16,Math.floor((z-W*ee)/W)));g(D),w(ee)});return $.observe(u.current),()=>$.disconnect()},[t,o]);let b=t?`${f}px`:"16px",S=t?h:3,k=`repeat(${o}, ${b})`;return Spicetify.React.createElement("div",{className:`heatmap-container${t?" heatmap-shrink":""}`},Spicetify.React.createElement("div",{className:"heatmap-scroll-wrap",ref:u},Spicetify.React.createElement("div",{className:"heatmap-scroll-inner"},Spicetify.React.createElement("div",{className:"heatmap-month-labels",style:{gridTemplateColumns:k,gap:`${S}px`}},Array.from({length:o}).map((_,$)=>{let U=i.find(z=>z.col===$);return Spicetify.React.createElement("span",{key:$},U?U.label:"")})),Spicetify.React.createElement("div",{className:"heatmap-grid",style:{gridTemplateColumns:k,gap:`${S}px`}},r.map((_,$)=>Spicetify.React.createElement("div",{key:$,className:"heatmap-week",style:{gridTemplateRows:`repeat(7, ${b})`,gap:`${S}px`}},_.map((U,z)=>Spicetify.React.createElement(St,{key:z,label:U?`${U.date.toDateString()} - ${U.count} plays`:"",placement:"top"},Spicetify.React.createElement("div",{className:"heatmap-cell",style:{width:b,height:b,background:U?Jy(U.count,c):"transparent"}})))))))),Spicetify.React.createElement("div",{className:"heatmap-legend"},Spicetify.React.createElement("span",null,"Less"),[.05,.25,.5,.75,1].map(_=>Spicetify.React.createElement("span",{key:_,className:"heatmap-legend-swatch",style:{background:_===.05?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${_})`}})),Spicetify.React.createElement("span",null,"More")))}function vt({width:e="100%",height:t="12px",radius:r=4,style:i,className:o,...c}){return Spicetify.React.createElement("div",{...c,className:`skeleton-shimmer${o?` ${o}`:""}`,style:{width:e,height:t,borderRadius:r,...i}})}function rd({size:e=20,style:t}){return Spicetify.React.createElement(vt,{width:e,height:e,radius:"50%",style:t})}function qs({width:e="70%"}){return Spicetify.React.createElement(vt,{width:e,height:"10px",radius:4})}var{useState:Qy}=Spicetify.React,nd=Array.from({length:24},(e,t)=>t),eb=Array.from({length:7},(e,t)=>t),tb=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ad=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],rb=[{value:"hour",label:"By hour"},{value:"weekday",label:"By week"},{value:"day",label:"By month"}];function Ys({loading:e=!1,hourlyDistribution:t,peakHour:r,weekdayDistribution:i,peakWeekday:o,dailyPlayCounts:c,streak:u,showStreak:f}){let g=st(),[h,w]=Qy(()=>g.activityTab);if(e)return Spicetify.React.createElement("div",{className:"section-card","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),Spicetify.React.createElement("div",{className:"activity-chart"},nd.map(k=>Spicetify.React.createElement(vt,{key:k,className:"activity-bar",height:`${20+k%6*10}%`}))));let b=k=>{w(k),Fe("activityTab",k)},S=null;return h==="hour"&&t[r]>0?S=Qt(r,g.use24HourTime):h==="weekday"&&i[o]>0&&(S=ad[o]),Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("div",{className:"activity-chart-header"},Spicetify.React.createElement("header",{className:"section-heading",style:{marginBottom:0}},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),S&&Spicetify.React.createElement("div",{className:"activity-chart-peak"},"Peak: ",Spicetify.React.createElement("span",null,S))),Spicetify.React.createElement("div",{className:"activity-tabs"},rb.map(k=>Spicetify.React.createElement("button",{type:"button",key:k.value,className:`activity-tab${h===k.value?" active":""}`,onClick:()=>b(k.value)},k.label))),h==="hour"&&nb(t,r,g.use24HourTime),h==="weekday"&&ab(i,o),h==="day"&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement(td,{dailyPlayCounts:c??[],shrink:g.heatmapShrink}),f&&u!=null&&u>0&&Spicetify.React.createElement("div",{className:"streak-callout"},"You've listened on ",Spicetify.React.createElement("strong",null,u," days")," in a row \xB7 longest stretch this year.")))}function nb(e,t,r){let i=Math.max(...e,1);return Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:"activity-chart"},nd.map(o=>{let c=e[o],u=c>0?Math.max(c/i*100,5):0,f=o===t&&c>0;return Spicetify.React.createElement(St,{key:o,label:`${Qt(o,r)}: ${c} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${f?" peak":""}`,style:{height:`${u}%`}}))})),Spicetify.React.createElement("div",{className:"activity-chart-labels"},Spicetify.React.createElement("span",null,Qt(0,r)),Spicetify.React.createElement("span",null,Qt(6,r)),Spicetify.React.createElement("span",null,Qt(12,r)),Spicetify.React.createElement("span",null,Qt(18,r)),Spicetify.React.createElement("span",null,Qt(0,r))))}function ab(e,t){let r=Math.max(...e,1);return Spicetify.React.createElement("div",{className:"weekday-chart"},eb.map(i=>{let o=e[i],c=o>0?Math.max(o/r*100,5):0,u=i===t&&o>0;return Spicetify.React.createElement("div",{key:i,className:"weekday-column"},Spicetify.React.createElement("div",{className:"weekday-bar-area"},Spicetify.React.createElement(St,{label:`${ad[i]}: ${o} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${u?" peak":""}`,style:{height:`${c}%`}}))),Spicetify.React.createElement("span",{className:"weekday-label"},tb[i]))}))}function ib(){return Spicetify.React.createElement("svg",{className:"announcement-banner-icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false"},Spicetify.React.createElement("path",{d:"M3 10.5V13.5H5V10.5H3ZM7 6.5V17.5H9V6.5H7ZM11 3.5V20.5H13V3.5H11ZM15 6.5V17.5H17V6.5H15ZM19 10.5V13.5H21V10.5H19Z"}))}function Xs({title:e,body:t,titleOnly:r=!1,actionLabel:i,actionUrl:o,onActionClick:c,onDismiss:u}){return Spicetify.React.createElement("div",{className:"announcement-banner"},Spicetify.React.createElement(ib,null),Spicetify.React.createElement("span",{className:"announcement-banner-text"},r?Spicetify.React.createElement("strong",null,e):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("strong",null,e)," \u2013 ",t)),i&&(c?Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-link announcement-banner-link-btn",onClick:c},i):Spicetify.React.createElement("a",{className:"announcement-banner-link",href:o??"#",target:o&&o!=="#"?"_blank":void 0,rel:o&&o!=="#"?"noopener noreferrer":void 0},i)),Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-dismiss",onClick:u,"aria-label":"Dismiss"},"\xD7"))}var id="https://discord.gg/XtqbFAHk6a",sd="https://buymeacoffee.com/xndr_";var{memo:sb}=Spicetify.React;function ob({version:e,onCheckForUpdates:t}){return Spicetify.React.createElement("footer",{className:"stats-app-footer"},Spicetify.React.createElement("span",{className:"stats-app-footer-credit"},"Made with love by Xndr"),Spicetify.React.createElement("span",{className:"stats-app-footer-links","aria-label":"Community links"},Spicetify.React.createElement("a",{className:"stats-app-footer-link",href:id,target:"_blank",rel:"noopener noreferrer"},"Discord"),Spicetify.React.createElement("a",{className:"stats-app-footer-link",href:sd,target:"_blank",rel:"noopener noreferrer"},"Buy me a coffee")),Spicetify.React.createElement("span",{className:"stats-app-footer-meta"},Spicetify.React.createElement("span",{className:"stats-app-footer-version"},"v",e),Spicetify.React.createElement("button",{type:"button",className:"stats-app-footer-install-link",onClick:t},"Check for updates")))}var od=sb(ob);function ld(e){return new Date(e).toISOString().slice(0,10)}function lb(e,t){let{start:r,end:i}=t.getBoundaries();if(i===Number.MAX_SAFE_INTEGER)return e.slice(-30);let o=i-1,c=ld(r),u=ld(o);return e.filter(f=>f.date>=c&&f.date<=u)}function cb(e){let t=new Date(e);if(!Number.isFinite(t.getTime())){let r=e.slice(0,10);t=new Date(`${r}T00:00:00`)}return Number.isFinite(t.getTime())?t.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}):e.slice(0,10)}function Zs({loading:e=!1,totalPlays:t,totalDuration:r,listeningDays:i,dailyPlayCounts:o,streak:c,activePeriod:u,activeProviderId:f="statsfm"}){if(e)return Spicetify.React.createElement("div",{className:"section-card consistency-section","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Array.from({length:4}).map((ee,D)=>Spicetify.React.createElement("div",{key:D,className:"consistency-metric"},Spicetify.React.createElement(qs,{width:"55%"}),Spicetify.React.createElement(vt,{width:"45%",height:24,style:{marginTop:8}}),Spicetify.React.createElement(qs,{width:"70%"})))));let g=lb(o??[],u),h=g.length,w=g.length>0?g.filter(ee=>ee.count>0).length:i??0,b=w>0?t/w:0,S=w>0?r/6e4/w:0,k=h>0?Math.round(w/h*100):0,_=g.slice(-14),$=Math.max(..._.map(ee=>ee.count),1),U=u.id==="today"||u.id==="sfm-today",z=f==="local",W=({label:ee,value:D,sub:N,tooltip:M,accent:R})=>Spicetify.React.createElement(St,{label:M},Spicetify.React.createElement("div",{className:`consistency-metric${R?" consistency-metric--accent":""}`},Spicetify.React.createElement("div",{className:"consistency-metric-label"},ee),Spicetify.React.createElement("div",{className:"consistency-metric-value"},D),Spicetify.React.createElement("div",{className:"consistency-metric-sub"},N)));return Spicetify.React.createElement("div",{className:"section-card consistency-section"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Spicetify.React.createElement(W,{label:"Listening days",value:w,sub:`out of ${h||w} days`,tooltip:"Number of days in this period with at least one stream."}),Spicetify.React.createElement(W,{label:"Avg plays / active day",value:Math.round(b),sub:"streams when active",tooltip:"Average stream count only across days where you listened."}),Spicetify.React.createElement(W,{label:"Avg minutes / active day",value:Math.round(S),sub:"listening time",tooltip:"Average listening duration in minutes across active days."}),Spicetify.React.createElement(W,{label:"Current streak",value:c!=null&&c>0?`${c}d`:"-",sub:"consecutive days",tooltip:"Consecutive calendar days with at least one play (local timezone)."})),!U&&Spicetify.React.createElement("div",{className:"consistency-footer"},Spicetify.React.createElement(St,{label:`You listened on ${w} of ${h||w} days in this period.`},Spicetify.React.createElement("div",{className:"consistency-coverage"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Active-day coverage"),Spicetify.React.createElement("div",{className:"consistency-coverage-row"},Spicetify.React.createElement("div",{className:"consistency-coverage-track"},Spicetify.React.createElement("div",{className:"consistency-coverage-fill",style:{width:`${k}%`}})),Spicetify.React.createElement("span",null,k,"%")))),z?Spicetify.React.createElement("div",{className:"consistency-week-split"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Weekday vs weekend"),(()=>{let ee=g.filter(Z=>Z.count>0),D=ee.filter(Z=>{let K=new Date(`${Z.date}T00:00:00`).getDay();return K>=1&&K<=5}).length,N=ee.length-D,M=Math.max(D+N,1),R=Math.round(D/M*100),E=100-R;return Spicetify.React.createElement("div",{className:"consistency-week-split-row"},Spicetify.React.createElement(St,{label:`${D} active weekdays (${R}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekdays"),Spicetify.React.createElement("strong",null,R,"%"))),Spicetify.React.createElement(St,{label:`${N} active weekend days (${E}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekend"),Spicetify.React.createElement("strong",null,E,"%"))))})()):_.length>0&&Spicetify.React.createElement("div",{className:"consistency-sparkline"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Last 14 days"),Spicetify.React.createElement("div",{className:"consistency-sparkline-bars"},_.map(ee=>{let D=ee.count>0&&ee.count===$;return Spicetify.React.createElement(St,{key:ee.date,label:`${cb(ee.date)}: ${ee.count} plays`,placement:"top"},Spicetify.React.createElement("div",{className:"consistency-sparkline-bar-wrap"},Spicetify.React.createElement("div",{className:`consistency-sparkline-bar${D?" peak":""}`,style:{height:`${Math.max(ee.count/$*100,ee.count>0?8:2)}%`}})))})))))}function Js({onOpenSettings:e}){return Spicetify.React.createElement("div",{className:"empty-state",role:"status"},Spicetify.React.createElement("h2",{style:{fontSize:"var(--font-size-md, 14px)",fontWeight:700,color:"var(--spice-text)",marginBottom:"var(--space-sm, 8px)"}},"No listening data yet"),Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-md, 14px)",color:"var(--spice-subtext)",marginBottom:"var(--space-md, 16px)"}},"Play some tracks and check back. Make sure tracking is enabled in Settings."),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:e},"Open Settings"))}Rt();var cd='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53a7.76 7.76 0 0 0 .07-1 7.76 7.76 0 0 0-.07-.97l2.11-1.63a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.15 7.15 0 0 0-1.69-.98l-.37-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.68 7.68 0 0 0-1.68.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64L4.57 11a8.3 8.3 0 0 0-.07.97 8.3 8.3 0 0 0 .07 1l-2.1 1.63a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1.01a7.35 7.35 0 0 0 1.68.99l.38 2.65c.05.24.25.42.49.42h4c.25 0 .44-.18.49-.42l.37-2.65a7.58 7.58 0 0 0 1.69-.99l2.49 1.01a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.66Z"/></svg>',sn='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 4.7l-1.4-1.4L8 6.6 4.7 3.3 3.3 4.7 6.6 8l-3.3 3.3 1.4 1.4L8 9.4l3.3 3.3 1.4-1.4L9.4 8l3.3-3.3z"/></svg>',ud='<svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor" aria-hidden="true"><circle cx="3" cy="3" r="1.1"/><circle cx="9" cy="3" r="1.1"/><circle cx="15" cy="3" r="1.1"/><circle cx="3" cy="7" r="1.1"/><circle cx="9" cy="7" r="1.1"/><circle cx="15" cy="7" r="1.1"/></svg>',dd='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pd='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',fd='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';function oi(e){Fe("activeGenre",e),window.dispatchEvent(new CustomEvent(ue.PREFS_CHANGED))}function Qs(){oi(null)}function md({activeGenre:e,onClear:t}){return e?Spicetify.React.createElement("div",{className:"filter-pill"},Spicetify.React.createElement("span",{className:"filter-pill-icon","aria-hidden":"true",dangerouslySetInnerHTML:{__html:pd}}),Spicetify.React.createElement("span",null,"Filtering by"),Spicetify.React.createElement("strong",{className:"filter-pill-genre"},e),Spicetify.React.createElement("button",{className:"filter-pill-close",type:"button",onClick:t,"aria-label":"Clear genre filter"},"\xD7")):null}at();var li=[{id:"health",label:"Health Indicator",text:"This dot shows your tracking status. Green means data is flowing, yellow means it\u2019s been a while, and red means something needs attention. Works for both local and stats.fm tracking.",selector:'[data-tour-target="health"], .header-provider-pill'},{id:"period",label:"Time Window & World",text:"Pick a time range and every section on the dashboard updates to match. Use the World tab at the end for global charts from stats.fm. Available periods depend on your tracking provider.",selector:'[data-tour-target="period"], .period-tabs'}],ci={overview:{id:"overview",label:"Overview Cards",text:"Your headline stats for the selected period include total plays, unique artists, listening streak, and more. The cards shown depend on your provider and tier.",selector:'[data-section-id="overview"]'},lists:{id:"lists",label:"Top Lists",text:"Your most-played tracks, artists, and albums ranked side by side. Click any item to jump straight to it in Spotify.",selector:'[data-section-id="top-lists"]'},activity:{id:"activity",label:"Activity Charts",text:"Hourly and daily listening patterns visualized as charts. Discover your peak hours and most active days of the week.",selector:'[data-section-id="activity"]'},consistency:{id:"consistency",label:"Consistency",text:"See how regularly you listened in this period, including active days, average intensity, and your longest silent gap.",selector:'[data-section-id="consistency"]'}},ui=[{id:"share",label:"Share Card",text:"Generate a shareable image of your stats. Download it as a PNG or copy it straight to your clipboard.",selector:'[data-tour-target="share"], [aria-label="Share card"]'},{id:"gear",label:"Settings",text:"Customize everything by reordering or hiding sections, switching tracking providers, managing your data, and connecting Last.fm for world charts.",selector:'[data-tour-target="settings"], [aria-label="Open settings"]'}];function eo(e){if(!e)return[...li,ci.overview,ci.lists,ci.activity,...ui];if(e.activePage==="world")return[li[0],li[1],ui[1]];let t=e.sectionIds.map(i=>ci[i]).filter(i=>!!i),r=e.hasShare?ui:ui.filter(i=>i.id!=="share");return[...li,...t,...r]}var di=eo();function gd(e){let t=e.match(/^(\d+)/);return t?t[1]:"0"}function hd(e){let t=localStorage.getItem(ne.TOUR_SEEN_VERSION);return t?t!==gd(e):!0}function vd(e){localStorage.setItem(ne.TOUR_SEEN_VERSION,gd(e))}var{useRef:ub,useLayoutEffect:db,useState:pb}=Spicetify.React,yd=280,bd=12,on=8,fb=210;function mb(e,t){let r=window.innerHeight,i=window.innerWidth,o=e.top+e.height+bd,c=e.top-t-bd,u;o+t<=r-on?u=o:c>=on?u=c:u=on;let f=e.left+e.width/2-yd/2;return f=Math.max(on,Math.min(f,i-yd-on)),{position:"fixed",top:u,left:f,zIndex:10001,maxHeight:`calc(100vh - ${on*2}px)`,overflowY:"auto"}}function wd({step:e,steps:t=di,onNext:r,onBack:i,onSkip:o,targetRect:c}){let u=ub(null),[f,g]=pb(void 0),h=t[e],w=e===t.length-1,b=c!=null;return db(()=>{if(!b){g(void 0);return}let k=u.current?.offsetHeight||fb;g(mb(c,k))},[b,c,e]),Spicetify.React.createElement("div",{ref:u,className:`tour-popover${b?" tour-popover--positioned":""}`,style:f},Spicetify.React.createElement("div",{className:"tour-step-counter"},"Step ",e+1," of ",t.length),Spicetify.React.createElement("div",{className:"tour-label"},h.label),Spicetify.React.createElement("div",{className:"tour-text"},h.text),Spicetify.React.createElement("div",{className:"tour-footer"},i?Spicetify.React.createElement("button",{type:"button",className:"tour-btn-back",onClick:i},"Back"):Spicetify.React.createElement("button",{type:"button",className:"tour-btn-skip",onClick:o},"Skip"),Spicetify.React.createElement("div",{className:"tour-dots"},t.map((k,_)=>Spicetify.React.createElement("span",{key:_,className:`tour-dot${_===e?" active":""}`}))),Spicetify.React.createElement("button",{type:"button",className:"tour-btn-next",onClick:r},w?"Finish":"Next")))}var{useState:Sd,useLayoutEffect:xd,useCallback:pi,useRef:kd,useEffect:Ed}=Spicetify.React,fi=6;function gb(e){let t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function Td(e){let t=document.querySelector(e);if(!t)return null;let r=t.getBoundingClientRect();return r.width===0&&r.height===0?null:{top:r.top,left:r.left,width:r.width,height:r.height}}function Pd({active:e,version:t,steps:r=di,onComplete:i}){let[o,c]=Sd(0),u=kd(0),[f,g]=Sd(null),h=kd([]);Ed(()=>()=>{h.current.forEach(clearTimeout)},[]);let w=pi(()=>{vd(t),i()},[t,i]),b=pi(z=>{let W=r[z];if(!W)return;h.current.forEach(clearTimeout),h.current=[],gb(W.selector);let ee=()=>g(Td(W.selector));ee(),h.current.push(window.setTimeout(ee,160),window.setTimeout(ee,320))},[r]),S=pi(()=>{if(u.current>=r.length-1)w();else{let z=u.current+1;u.current=z,c(z),b(z)}},[w,b,r.length]),k=pi(()=>{let z=Math.max(0,u.current-1);u.current=z,c(z),b(z)},[b]);if(xd(()=>{if(e){if(r.length===0){w();return}u.current=0,c(0),b(0)}},[e,b,r.length,w]),Ed(()=>{if(!e)return;let z=()=>{let W=r[u.current];W&&g(Td(W.selector))};return window.addEventListener("resize",z),window.addEventListener("scroll",z,!0),()=>{window.removeEventListener("resize",z),window.removeEventListener("scroll",z,!0)}},[e,r]),xd(()=>{if(!e)return;let z=W=>{W.key==="ArrowRight"?S():W.key==="ArrowLeft"?k():W.key==="Escape"&&w()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[e,S,k,w]),!e)return null;let _=f!==null,$=_?{position:"fixed",top:f.top-fi,left:f.left-fi,width:f.width+fi*2,height:f.height+fi*2,borderRadius:8,boxShadow:"0 0 0 9999px rgba(0,0,0,0.55)",pointerEvents:"none",zIndex:1e4}:void 0,U=Spicetify.React.createElement("div",{className:`tour-overlay${_?" tour-overlay--targeted":""}`},_&&Spicetify.React.createElement("div",{className:"tour-spotlight",style:$}),Spicetify.React.createElement(wd,{step:o,steps:r,onNext:S,onBack:o>0?k:void 0,onSkip:w,targetRect:f}));return Spicetify.ReactDOM.createPortal(U,document.body)}Rt();at();function to({periods:e,activePeriod:t,onPeriodChange:r}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist"},e.map(i=>Spicetify.React.createElement("button",{type:"button",key:i.id,className:`period-tab ${i.id===t.id?"active":""}`,role:"tab","aria-selected":i.id===t.id,onClick:()=>r(i)},i.label)))}var{useState:ro,useEffect:no}=Spicetify.React,hb=2*6e4;function vb(e){let t=Math.max(0,Math.ceil(e/1e3)),r=Math.floor(t/60),i=t%60;return r<=0?`${i}s`:i===0?`${r}m`:`${r}m ${i}s`}function yb(e){if(!e||e.lastWriteAt===null)return"red";let t=(Date.now()-e.lastWriteAt)/6e4;return t<5?"green":t<60?"yellow":"red"}function bb(e){if(!e||e.lastSuccessAt===null||e.circuitOpen||e.lastError!==null)return"red";let t=(Date.now()-e.lastSuccessAt)/6e4;return t<30?"green":t<120?"yellow":"red"}function wb(e,t,r){return e==="statsfm"?bb(r):yb(t)}function Sb(e){if(!e||e.lastWriteAt===null)return"No plays recorded yet";if(!e.healthy&&e.lastError)return`Tracking error: ${e.lastError}`;let t=(Date.now()-e.lastWriteAt)/6e4,r=e.lastTrackName?` - ${e.lastTrackName.length>40?`${e.lastTrackName.slice(0,40)}...`:e.lastTrackName}`:"";return t<1?`Last play just now${r}`:t<60?`Last play ${Math.floor(t)}m ago${r}`:`Last play ${Math.floor(t/60)}h ago${r}`}function xb(e){if(!e||e.lastFetchAt===null)return"No data fetched yet";if(e.circuitOpen)return"stats.fm unavailable: circuit open";if(e.lastError!==null)return`API error: ${e.lastError.length>60?`${e.lastError.slice(0,60)}\u2026`:e.lastError}`;if(e.lastSuccessAt===null)return"No data fetched yet";let t=Math.max(0,hb-(Date.now()-e.lastSuccessAt)),r=t>0?` \xB7 refresh in ${vb(t)}`:" \xB7 refresh due now",i=(Date.now()-e.lastSuccessAt)/6e4;return i<1?`API healthy, just refreshed${r}`:i<60?`API healthy, refreshed ${Math.floor(i)}m ago${r}`:`Data stale, last refresh ${Math.floor(i/60)}h ago${r}`}function ao({providerName:e,activeProviderId:t,onSettingsClick:r,onShareClick:i,periods:o,activePeriod:c,onPeriodChange:u}){let[f,g]=ro(()=>{try{let $=localStorage.getItem(ne.TRACKING_HEALTH);if($)return JSON.parse($)}catch{}return null});no(()=>{let $=()=>{try{let U=localStorage.getItem(ne.TRACKING_HEALTH);U&&g(JSON.parse(U))}catch{}};return window.addEventListener(ue.HEALTH_CHANGED,$),()=>{window.removeEventListener(ue.HEALTH_CHANGED,$)}},[]);let[h,w]=ro(()=>{try{let $=localStorage.getItem(ne.STATSFM_HEALTH);if($)return JSON.parse($)}catch{}return null});no(()=>{let $=()=>{try{let U=localStorage.getItem(ne.STATSFM_HEALTH);U&&w(JSON.parse(U))}catch{}};return window.addEventListener(ue.STATSFM_HEALTH_CHANGED,$),()=>{window.removeEventListener(ue.STATSFM_HEALTH_CHANGED,$)}},[]);let[b,S]=ro(()=>Ae.getActive()?.getProviderInfo().capabilities??null);no(()=>{let $=()=>{S(Ae.getActive()?.getProviderInfo().capabilities??null)};return $(),window.addEventListener(ue.PROVIDER_CHANGED,$),window.addEventListener(ue.STATSFM_PROFILE_REFRESHED,$),()=>{window.removeEventListener(ue.PROVIDER_CHANGED,$),window.removeEventListener(ue.STATSFM_PROFILE_REFRESHED,$)}},[t]);let k=wb(t,f,h),_=t==="statsfm"?xb(h):Sb(f);return Spicetify.React.createElement("header",{className:"stats-header"},Spicetify.React.createElement("div",{className:"stats-header-left"},Spicetify.React.createElement("h1",{className:"stats-header-title"},"Listening Stats"),Spicetify.React.createElement("div",{"data-tour-target":"health"},Spicetify.React.createElement(St,{label:_,placement:"bottom"},Spicetify.React.createElement("div",{className:"header-provider-pill"},Spicetify.React.createElement("span",{className:`health-dot health-${k}`,"aria-label":`Health: ${k} - ${_}`}),Spicetify.React.createElement("span",{className:"header-provider-name"},e),b?.tier==="plus"&&Spicetify.React.createElement("span",{className:"tier-badge tier-badge--plus"},"Plus"))))),Spicetify.React.createElement("div",{className:"stats-header-right"},o&&c&&u&&Spicetify.React.createElement("div",{"data-tour-target":"period"},Spicetify.React.createElement(to,{periods:o,activePeriod:c,onPeriodChange:u})),i&&Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:i,"aria-label":"Share card","data-tour-target":"share",dangerouslySetInnerHTML:{__html:fd}}),Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:r,"aria-label":"Open settings","data-tour-target":"settings",dangerouslySetInnerHTML:{__html:cd}})))}var{useState:kb,useEffect:Eb}=Spicetify.React,Tb={UserNotFound:{title:"We couldn't find that stats.fm user",body:"Double-check the username in Settings.",cta:"settings"},NetworkError:{title:"Couldn't reach stats.fm",body:"Your connection might be flaky.",cta:"retry"},ServiceDown:{title:"stats.fm is having a moment",body:"Their side, not yours.",cta:"retry"},RateLimited:{title:"Too many requests",body:"We'll back off automatically.",cta:null},InvalidApiKey:{title:"Invalid Last.fm API key",body:"Check your key in Settings.",cta:"settings"},Unknown:{title:"Something went sideways",body:"It happens. Try once more?",cta:"retry"}};function Pb(e){let[t,r]=kb(()=>e?Math.max(0,Math.ceil((e-Date.now())/1e3)):0);return Eb(()=>{if(!e)return;let i=setInterval(()=>{let o=Math.max(0,Math.ceil((e-Date.now())/1e3));r(o),o<=0&&clearInterval(i)},1e3);return()=>clearInterval(i)},[e]),t}function ln({error:e,onRetry:t,onOpenSettings:r}){let i=Tb[e.variant],o=Pb(e.resetAt),c=i.cta==="settings"?r:t,u=i.cta==="settings"?"Open Settings":"Retry";return Spicetify.React.createElement("div",{className:"inline-error-card",role:"status"},Spicetify.React.createElement("div",{className:"inline-error-content"},Spicetify.React.createElement("div",{className:"inline-error-title"},i.title),Spicetify.React.createElement("div",{className:"inline-error-body"},i.body),e.resetAt!==void 0&&o>0&&Spicetify.React.createElement("div",{className:"inline-error-countdown"},"retry in 0:",o.toString().padStart(2,"0"))),i.cta&&Spicetify.React.createElement("button",{type:"button",className:"inline-error-cta",onClick:c},u))}var{useState:Ab,useEffect:Rb,useMemo:Cb}=Spicetify.React;function Ib({totalDuration:e,priorPeriodTotalDuration:t,totalPlays:r,uniqueArtistCount:i,periodLabel:o,periodKey:c}){let u=Cb(()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),[f,g]=Ab(u?e:0);Rb(()=>{if(u){g(e);return}let _=0,$=0,U=z=>{$||($=z);let W=Math.min(1,(z-$)/900),ee=1-(1-W)**3;g(Math.round(e*ee)),W<1&&(_=requestAnimationFrame(U))};return g(0),_=requestAnimationFrame(U),()=>cancelAnimationFrame(_)},[c,e,u]);let h=Math.floor(f/36e5),w=Math.floor(f%36e5/6e4),b=t,S=b!=null&&b>0,k=S?Math.round((e-b)/b*100):null;return Spicetify.React.createElement("div",{className:"overview-hero-cell",style:{background:"radial-gradient(120% 140% at 0% 0%, rgba(var(--spice-rgb-button),.16), transparent 52%), var(--spice-card)",border:"1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12)",borderRadius:8,padding:20,minHeight:184,position:"relative",overflow:"hidden",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"space-between"}},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--spice-text)",fontSize:12,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase"}},Spicetify.React.createElement("span",{dangerouslySetInnerHTML:{__html:dd}}),Spicetify.React.createElement("span",null,"Total time - ",o)),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:14,marginTop:"auto"}},Spicetify.React.createElement("span",{"data-testid":"hero-hours",style:{fontSize:80,fontWeight:800,letterSpacing:"-0.04em",lineHeight:1,fontVariantNumeric:"tabular-nums"}},h),Spicetify.React.createElement("span",{style:{fontSize:28,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"h"),Spicetify.React.createElement("span",{"data-testid":"hero-minutes",style:{fontSize:48,fontWeight:700,letterSpacing:"-0.03em",fontVariantNumeric:"tabular-nums"}},w.toString().padStart(2,"0")),Spicetify.React.createElement("span",{style:{fontSize:22,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"m"),S&&k!=null&&Spicetify.React.createElement("span",{"data-testid":"hero-delta",style:{marginLeft:"auto",fontSize:12,color:"var(--spice-button)",fontWeight:600,display:"inline-flex",alignItems:"center",gap:4}},k>=0?"\u2191":"\u2193"," ",Math.abs(k),"% vs prev")),Spicetify.React.createElement("div",{"data-testid":"hero-sublabel",style:{marginTop:14,display:"flex",alignItems:"center",gap:6,fontSize:12,color:"rgba(var(--spice-rgb-text), 0.55)"}},Spicetify.React.createElement("span",null,dt(r)," plays \xB7 "),Spicetify.React.createElement("span",null,dt(i)," artists")))}function Nb(){return Spicetify.React.createElement("div",{className:"overview-section","aria-hidden":"true"},Spicetify.React.createElement(vt,{className:"overview-hero-cell",height:184}),Spicetify.React.createElement("div",{className:"overview-right-block"},Array.from({length:4}).map((e,t)=>Spicetify.React.createElement(vt,{key:t,className:"overview-card",height:60}))),Spicetify.React.createElement("div",{className:"overview-bottom-row"},Array.from({length:3}).map((e,t)=>Spicetify.React.createElement(vt,{key:t,className:"overview-card",height:60}))))}function mi({stats:e,activePeriod:t,loading:r=!1}){if(r||!e)return Spicetify.React.createElement(Nb,null);let i=st(),c=(Ae.getActive()?.getProviderInfo().id??"local")==="statsfm"?"statsfm":"local",u=c==="statsfm",f={tracks:{value:dt(e.totalPlays),tooltip:"Total number of tracks played in the selected period",sub:"plays"},"unique-artists":{value:dt(e.uniqueArtistCount),tooltip:"Number of distinct artists played in the selected period"},streak:void 0,"new-artists":{value:dt(e.newArtistCount??0),tooltip:"Artists you played in this period that you didn't play in the previous period (or no plays in the prior window)",sub:"discovered"},"peak-hour":{value:Qt(e.peakHour,i.use24HourTime),tooltip:"Your most active listening hour in this period",sub:"most active"},"skip-rate":u?void 0:{value:`${Math.round(e.skipRate*100)}%`,tooltip:"Percentage of tracks skipped before the play threshold"},"est-payout":{value:Zu(e.totalPlays),tooltip:"Estimated streaming payout at $0.004 per play (approximate only)",sub:"indie scale"},"top-genre":{value:e.topGenres[0]?.genre??"-",tooltip:"Your most-played genre in this period"},"listening-days":{value:e.listeningDays!=null&&e.listeningDays>0?dt(e.listeningDays):"-",tooltip:"Number of days with at least one play in the selected period"}},h=i.overviewOrder[c].filter(U=>f[U]!==void 0&&!i.hiddenSections.includes(U)),w=h.slice(0,4),b=h.slice(4,7),S=Math.max(1,Math.min(2,w.length)),k=Math.max(1,Math.min(3,b.length)),_=U=>{let z=f[U];if(!z)return null;let W=Vn[U]??U;return Spicetify.React.createElement(St,{key:U,label:z.tooltip},Spicetify.React.createElement("div",{className:"overview-card","data-card-id":U},Spicetify.React.createElement("div",{className:"overview-card-label"},W),Spicetify.React.createElement("div",{className:"overview-card-row"},Spicetify.React.createElement("span",{className:"overview-card-value",style:z.accent?{color:z.accent}:void 0},z.value),z.sub&&Spicetify.React.createElement("span",{className:"overview-card-sub"},z.sub))))},$=b.length>0;return Spicetify.React.createElement("div",{className:`overview-section${$?"":" overview-section--compact"}`},Spicetify.React.createElement(Ib,{totalDuration:e.totalDuration,priorPeriodTotalDuration:e.priorPeriodTotalDuration,totalPlays:e.totalPlays,uniqueArtistCount:e.uniqueArtistCount,periodLabel:t.label,periodKey:t.id}),w.length>0&&Spicetify.React.createElement("div",{className:"overview-right-block",style:{gridTemplateColumns:`repeat(${S}, minmax(0, 1fr))`}},w.map(_)),$&&Spicetify.React.createElement("div",{className:"overview-bottom-row",style:{gridTemplateColumns:`repeat(${k}, minmax(0, 1fr))`}},b.map(_)))}var _b=new Set(["track","artist","album","playlist","show","episode","user"]);function It(e){let t=e.split(":");t.length>=3&&t[0]==="spotify"&&_b.has(t[1])&&t[2]&&Spicetify.Platform.History.push(`/${t[1]}/${t[2]}`)}function io(e,t,r){let i=new Blob([e],{type:r}),o=URL.createObjectURL(i),c=document.createElement("a");c.href=o,c.download=t,c.click(),URL.revokeObjectURL(o)}function so({recentPlays:e=[],loading:t=!1}){return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Last 24h"),Spicetify.React.createElement("h2",{className:"section-title"},"Recently Played")),Spicetify.React.createElement("div",{className:"recently-played"},t?Array.from({length:6}).map((r,i)=>Spicetify.React.createElement("div",{key:i,className:"recently-played-item","aria-hidden":"true"},Spicetify.React.createElement(vt,{className:"recently-played-skeleton-art",width:132,height:132,radius:6}),Spicetify.React.createElement(vt,{className:"recently-played-skeleton-text",width:100,height:10,radius:2,style:{marginTop:8}}),Spicetify.React.createElement(vt,{className:"recently-played-skeleton-subtext",width:70,height:10,radius:2,style:{marginTop:6}}))):e.map(r=>{let i=Je(r.albumArt);return Spicetify.React.createElement("div",{key:`${r.trackUri}-${r.playedAt}`,className:"recently-played-item",onClick:()=>It(r.trackUri)},i?Spicetify.React.createElement("img",{src:i,alt:"",className:"recently-played-art"}):Spicetify.React.createElement("div",{className:"recently-played-art"}),Spicetify.React.createElement("div",{className:"recently-played-name"},r.trackName),Spicetify.React.createElement("div",{className:"recently-played-artist"},r.artistName),Spicetify.React.createElement("div",{className:"recently-played-time"},Xu(r.playedAt)))})))}Fa();Rt();at();Xt();rn();var{useState:gi}=Spicetify.React,Db={not_found:"Username not found. Check your stats.fm customId.",private:"Your profile is private. Make it public in stats.fm settings.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function Ad({onComplete:e}){let[t,r]=gi("provider"),[i,o]=gi(""),[c,u]=gi(!1),[f,g]=gi(null),h=()=>{Ae.setActive("local"),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED)),e()},w=async()=>{if(!i.trim())return;u(!0),g(null);let b=await Hr(i.trim());if(!b.valid){g(Db[b.reason]??"Connection failed. Try again."),u(!1);return}let S={username:i.trim(),isPlus:b.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(ne.STATSFM_CONFIG,JSON.stringify(S)),await Vt.init(),ze.invalidate(),Ae.setActive("statsfm"),window.dispatchEvent(new CustomEvent(ue.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED)),u(!1),e()};return Spicetify.React.createElement("div",{className:"wizard-page"},Spicetify.React.createElement("div",{className:"wizard-modal wizard-modal--page","aria-label":"Choose your provider"},t==="provider"?Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Welcome to Listening Stats"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Choose how you want to track your listening history."),Spicetify.React.createElement("div",{className:"wizard-provider-cards"},Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:h},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"Local Tracking"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Stats tracked on this device. No account required."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Start with Local")),Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:()=>r("statsfm")},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"stats.fm"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Import your listening history from your stats.fm profile."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Use stats.fm")))):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Connect stats.fm"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Use your stats.fm customId. Your profile must be public for this to work."),Spicetify.React.createElement("div",{className:"provider-status-card wizard-statsfm-help"},Spicetify.React.createElement("div",{className:"settings-label"},"How to find your customId"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Open stats.fm, visit your profile, and copy the customId from the profile URL."),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Example: stats.fm/user/",Spicetify.React.createElement("strong",null,"your-custom-id"))),Spicetify.React.createElement("div",{className:"wizard-statsfm-form"},Spicetify.React.createElement("input",{type:"text",value:i,onChange:b=>o(b.target.value),onKeyDown:b=>{b.key==="Enter"&&!c&&w()},placeholder:"Enter your stats.fm customId",disabled:c,"aria-label":"stats.fm customId",className:"wizard-statsfm-input"}),Spicetify.React.createElement("div",{className:"wizard-statsfm-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>r("provider"),disabled:c},"Back"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>{w()},disabled:c||!i.trim()},c?"Connecting...":"Connect stats.fm")),f&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},f)))))}at();function Ob(e){let t=/^spotify:album:([a-zA-Z0-9]+)$/.exec(e.trim());return t?t[1]:null}function Rd(e){let t=/^spotify:track:([a-zA-Z0-9]+)$/.exec(e.trim());return t?t[1]:null}function Lb(e){for(let t of e.topTracks){let r=Je(t.albumArt);r&&(t.albumArt=r)}for(let t of e.topArtists){let r=Je(t.imageUrl??void 0);r&&(t.imageUrl=r)}for(let t of e.topAlbums??[]){let r=Je(t.albumArt);r&&(t.albumArt=r)}for(let t of e.recentPlays??[]){let r=Je(t.albumArt);r&&(t.albumArt=r)}}function Mb(e,t){let r=[],i=new Set;for(let o of e)if(!i.has(o.trackUri)&&(i.add(o.trackUri),r.push(o),r.length>=t))break;return r}function $b(e){let t=new Map;for(let r of e.recentPlays??[]){let i=r.albumArt?.trim();i&&t.set(r.trackUri,i)}for(let r of e.topTracks)if(!r.albumArt?.trim()){let i=t.get(r.trackUri);i&&(r.albumArt=i)}}function Ub(e){for(let t of e.topAlbums??[]){let r=t.albumArt?.trim();if(r)for(let i of e.topTracks)!i.albumArt?.trim()&&i.albumUri===t.albumUri&&(i.albumArt=r)}}async function Fb(e){let t=e.filter(o=>(!o.albumArt||!String(o.albumArt).trim())&&o.albumUri?.startsWith("spotify:album:"));if(t.length===0)return;let r=new Map;for(let o of t){let c=Ob(o.albumUri);if(!c)continue;let u=r.get(c)??[];u.push(o),r.set(c,u)}let i=[...r.keys()];for(let o=0;o<i.length;o+=20){let c=i.slice(o,o+20),u=c.join(","),f=await Zt(`https://api.spotify.com/v1/albums?ids=${encodeURIComponent(u)}`);if(!f.ok)continue;let g=new Map;for(let h of f.data.albums??[]){if(!h?.id)continue;let w=h.images?.[0]?.url;w&&g.set(h.id,w)}for(let h of c){let w=g.get(h);if(w)for(let b of r.get(h)??[])b.albumArt=w}}}async function Bb(e){let t=e.filter(o=>(!o.albumArt||!String(o.albumArt).trim())&&Rd(o.trackUri));if(t.length===0)return;let r=new Map;for(let o of t){let c=Rd(o.trackUri);if(!c)continue;let u=r.get(c)??[];u.push(o),r.set(c,u)}let i=[...r.keys()];for(let o=0;o<i.length;o+=50){let c=i.slice(o,o+50),u=c.join(","),f=await Zt(`https://api.spotify.com/v1/tracks?ids=${encodeURIComponent(u)}`);if(f.ok)for(let g=0;g<c.length;g++){let h=c[g],b=f.data.tracks?.[g]?.album?.images?.[0]?.url;if(!(!b||!h))for(let S of r.get(h)??[])S.albumArt=b}}}async function Wb(e){let t=e.topArtists.filter(r=>(!r.imageUrl||!String(r.imageUrl).trim())&&$n(r.artistUri??""));if(t.length!==0)for(let r=0;r<t.length;r+=50){let i=t.slice(r,r+50),o=i.map(f=>f.artistUri.replace(/^spotify:artist:/i,"")).join(","),c=await Zt(`https://api.spotify.com/v1/artists?ids=${encodeURIComponent(o)}`);if(!c.ok)continue;let u=c.data.artists??[];for(let f=0;f<i.length;f++){let g=i[f],w=u[f]?.images?.[0]?.url;if(!w?.trim())continue;let b=Je(w)??w;b.trim()&&(g.imageUrl=b)}}}function Hb(e){let t=new Map;for(let r of e.topTracks){let i=r.albumArt?.trim(),o=r.artistUri?.trim();!i||!o||t.has(o)||t.set(o,i)}for(let r of e.topArtists){if(r.imageUrl?.trim())continue;let i=r.artistUri?.trim()??"",o=i?t.get(i):void 0;if(o){let c=Je(o)??o;c.trim()&&(r.imageUrl=c)}}}function zb(e){let t=new Map;for(let r of e.topTracks){let i=r.albumArt?.trim(),o=r.artistName?.trim().toLowerCase();!i||!o||t.has(o)||t.set(o,i)}for(let r of e.topArtists){if(r.imageUrl?.trim())continue;let i=r.artistName?.trim().toLowerCase();if(!i)continue;let o=t.get(i);if(o){let c=Je(o)??o;c.trim()&&(r.imageUrl=c)}}}async function Cd(e){try{Lb(e);let t=Mb(e.topTracks,50);$b(e),Ub(e),await Fb(t),await Bb(t);let r=[...new Set(e.topArtists.map(i=>i.artistUri).filter(Boolean))];if(r.length>0){await $a(r);let i=await Ye.artists.where("uri").anyOf(r).toArray(),o=new Map(i.map(c=>[c.uri,c]));for(let c of e.topArtists){let u=o.get(c.artistUri),f=Je(u?.imageUrl??void 0)??u?.imageUrl;f?.trim()&&(!c.imageUrl||!String(c.imageUrl).trim())&&(c.imageUrl=f)}}await Wb(e),Hb(e),zb(e)}catch{}}var Kb={square:{width:1080,height:1080},story:{width:1080,height:1920}},Id=[{id:"top5",label:"Top 5"},{id:"time",label:"Total time"},{id:"genre",label:"Genre"},{id:"streak",label:"Streak"},{id:"throwback",label:"Throwback"},{id:"wrapped",label:"Wrapped"},{id:"recap",label:"Recap"}];function co(e,t,r){let i=e.topTracks.length>0,o=Id.filter(c=>{if(r&&!r.includes(c.id)||c.id==="recap"&&!r)return!1;switch(c.id){case"top5":case"throwback":return i;case"time":return e.totalDuration>0;case"genre":return(t?.hasGenreData??!0)&&e.topGenres.some(u=>u.count>0);case"streak":return(t?.hasStreakData??!1)&&(e.streak??0)>0;default:return!0}});return o.length===0?Id.filter(c=>c.id===(r?.[0]??"wrapped")):o}var Ee='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',Nd=[30,215,96];function Xe(e,t=1){return t===1?`rgb(${e[0]},${e[1]},${e[2]})`:`rgba(${e[0]},${e[1]},${e[2]},${t})`}function hi(e){if(!e)return null;let t=e.trim(),r=t.match(/^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);if(r)return[Number(r[1]),Number(r[2]),Number(r[3])];let i=t.replace("#","");return/^[\da-f]{6}$/i.test(i)?[Number.parseInt(i.slice(0,2),16),Number.parseInt(i.slice(2,4),16),Number.parseInt(i.slice(4,6),16)]:null}function Gb(e){if(!e)return{accent:Nd,bgA:"#0c160e",bgB:"#122318",bgC:"#0a1d12",text:"#ffffff",muted:"rgba(255,255,255,0.72)",dim:"rgba(255,255,255,0.55)",faint:"rgba(255,255,255,0.45)",chunkBg:"rgba(255,255,255,0.05)",chunkBorder:"rgba(255,255,255,0.09)",barTrack:"rgba(255,255,255,0.10)"};let t=getComputedStyle(document.documentElement),r=hi(t.getPropertyValue("--spice-button"))??hi(t.getPropertyValue("--spice-text"))??Nd,i=hi(t.getPropertyValue("--spice-main"))??[12,22,14],o=hi(t.getPropertyValue("--spice-text"))??[255,255,255];return{accent:r,bgA:Xe([Math.max(0,i[0]-10),Math.max(0,i[1]-10),Math.max(0,i[2]-10)]),bgB:Xe(i),bgC:Xe([Math.max(0,i[0]-6),Math.max(0,i[1]-6),Math.max(0,i[2]-6)]),text:Xe(o),muted:Xe(o,.72),dim:Xe(o,.55),faint:Xe(o,.45),chunkBg:Xe(o,.06),chunkBorder:Xe(o,.14),barTrack:Xe(o,.12)}}var un=72,_d=170,Vb=128;function tr(e){return Math.round(e*1.25)}function uo(e,t,r,i,o,c){e.beginPath(),e.moveTo(t+c,r),e.arcTo(t+i,r,t+i,r+o,c),e.arcTo(t+i,r+o,t,r+o,c),e.arcTo(t,r+o,t,r,c),e.arcTo(t,r,t+i,r,c),e.closePath()}function Rr(e,t,r,i,o,c){uo(e,t,r,i,o,c),e.fill()}function xt(e,t,r){if(r<=8)return"\u2026";if(e.measureText(t).width<=r)return t;let i=t;for(;i.length>0&&e.measureText(`${i}\u2026`).width>r;)i=i.slice(0,-1);return`${i}\u2026`}function Ld(e){let t=Je(e);return t?new Promise(r=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>r(i),i.onerror=()=>r(null),setTimeout(()=>r(null),5e3),i.src=t}):Promise.resolve(null)}var Dd=[["#1d4ed8","#22d3ee"],["#7c3aed","#ec4899"],["#059669","#a3e635"],["#dc2626","#f97316"],["#0e7490","#2dd4bf"],["#b45309","#fbbf24"],["#4338ca","#a78bfa"]];function jb(e){let t=0;for(let r=0;r<e.length;r++)t=t*31+e.charCodeAt(r)|0;return Math.abs(t)}function qb(e,t,r,i,o,c){let u=Dd[jb(c||"\u266B")%Dd.length],f=e.createLinearGradient(t,r,t+i,r+i);f.addColorStop(0,u[0]),f.addColorStop(1,u[1]),e.fillStyle=f,Rr(e,t,r,i,i,o);let g=e.createLinearGradient(t,r,t,r+i);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,0.28)"),e.fillStyle=g,Rr(e,t,r,i,i,o);let h=(c.match(/[\p{L}\p{N}]/u)?.[0]??"\u266A").toUpperCase();e.fillStyle="rgba(255,255,255,0.92)",e.font=`800 ${Math.round(i*.44)}px ${Ee}`,e.textAlign="center",e.textBaseline="middle",e.fillText(h,t+i/2,r+i/2+Math.round(i*.03)),e.textAlign="left",e.textBaseline="alphabetic"}async function vi(e,t,r,i,o,c,u){let f=t?await Ld(t):null;if(!f){qb(e,r,i,o,c,u);return}e.save(),uo(e,r,i,o,o,c),e.clip(),e.drawImage(f,r,i,o,o),e.restore()}var oo=34,Cr=oo+28;function dn(e,t,r,i,o,c=!1){let u=e.letterSpacing;return e.fillStyle=o.dim,e.font=`700 ${oo}px ${Ee}`,e.letterSpacing="0.1em",e.fillText(c?t:t.toUpperCase(),r,i+oo),e.letterSpacing=u,i+Cr}function rr(e,t,r,i,o,c){let u=e.letterSpacing;e.fillStyle=c,e.font=`700 ${o}px ${Ee}`,e.letterSpacing="0.08em",e.fillText(t.toUpperCase(),r,i),e.letterSpacing=u}function nr(e,t,r,i,o,c){e.fillStyle=c.chunkBg,Rr(e,t,r,i,o,20),e.strokeStyle=c.chunkBorder,e.lineWidth=2,uo(e,t,r,i,o,20),e.stroke()}function Yb(e){let t=(Math.floor(e)%24+24)%24;return`${t%12||12} ${t<12?"AM":"PM"}`}function Md(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);if(!t)return e;let r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=Number(t[2]);return i<1||i>12?e:`${r[i-1]} ${Number(t[3])}`}function Xb(e,t,r,i){let o=160*(Math.PI/180),c=Math.sin(o),u=-Math.cos(o),f=Math.hypot(t,r)/2,g=e.createLinearGradient(t/2-c*f,r/2-u*f,t/2+c*f,r/2+u*f);g.addColorStop(0,i.bgA),g.addColorStop(.5,i.bgB),g.addColorStop(1,i.bgC),e.fillStyle=g,e.fillRect(0,0,t,r);let h=e.createRadialGradient(t,0,0,t,0,t*.8);h.addColorStop(0,Xe(i.accent,.35)),h.addColorStop(1,Xe(i.accent,0)),e.fillStyle=h,e.fillRect(0,0,t,r);let w=e.createRadialGradient(0,r,0,0,r,r*.7);w.addColorStop(0,Xe(i.accent,.15)),w.addColorStop(1,Xe(i.accent,0)),e.fillStyle=w,e.fillRect(0,0,t,r)}function Zb(e,t,r,i){let o=un,c=52;e.fillStyle=Xe(i.accent),e.beginPath(),e.arc(o+18,c+18,18,0,Math.PI*2),e.fill();let u=e.letterSpacing;if(e.fillStyle=i.dim,e.font=`600 28px ${Ee}`,e.letterSpacing="0.04em",e.textBaseline="middle",e.fillText("LISTENING STATS \xB7 SPICETIFY",o+48,c+18),e.letterSpacing=u,r){e.fillStyle=i.dim,e.font=`500 26px ${Ee}`;let f=o+48+e.measureText("LISTENING STATS \xB7 SPICETIFY").width,g=Math.max(60,t-un-f-28);e.textAlign="right",e.fillText(xt(e,r,g),t-un,c+18),e.textAlign="left"}e.textBaseline="alphabetic"}function Jb(e,t,r,i){e.fillStyle=i.faint,e.font=`28px ${Ee}`,e.fillText(r,un,t-52)}function cn(e){return e.tile+e.gap}async function lo(e,t,r,i,o,c,u){let{palette:f}=t,g=24,h=0;u.rightValue&&(e.font=`700 ${r.countPx}px ${Ee}`,h=Math.max(h,e.measureText(u.rightValue).width)),u.rightCaps&&(e.font=`700 ${r.capsPx}px ${Ee}`,h=Math.max(h,e.measureText(u.rightCaps).width*1.08));let w=h>0?h+28:0;e.fillStyle=Xe(f.accent),e.font=`800 ${Math.round(r.tile*.52)}px ${Ee}`,e.textAlign="right",e.fillText(`${u.rank}`,i+r.rank,o+r.tile/2+Math.round(r.tile*.19)),e.textAlign="left";let b=i+r.rank+g;await vi(e,u.art??void 0,b,o,r.tile,r.radius,u.seed);let S=b+r.tile+g,k=Math.max(64,i+c-w-20-S),_=o+Math.round(r.tile*.42),$=o+Math.round(r.tile*.82);if(e.fillStyle=f.text,e.font=`600 ${r.titlePx}px ${Ee}`,e.fillText(xt(e,u.title,k),S,_),e.fillStyle=f.dim,e.font=`${r.subPx}px ${Ee}`,e.fillText(xt(e,u.subtitle,k),S,$),u.rightValue&&(e.fillStyle=f.text,e.font=`700 ${r.countPx}px ${Ee}`,e.textAlign="right",e.fillText(u.rightValue,i+c,_),e.textAlign="left"),u.rightCaps){e.textAlign="right";let U=e.letterSpacing;e.fillStyle=f.dim,e.font=`700 ${r.capsPx}px ${Ee}`,e.letterSpacing="0.08em",e.fillText(u.rightCaps.toUpperCase(),i+c,$),e.letterSpacing=U,e.textAlign="left"}}var Qb=(e,t,r,i)=>{let{stats:o,size:c,palette:u}=t,f=c==="story",g=o.topTracks.slice(0,5),h=f?{tile:124,gap:34,rank:56,titlePx:42,subPx:30,countPx:34,capsPx:20,radius:12}:{tile:96,gap:26,rank:48,titlePx:36,subPx:26,countPx:30,capsPx:18,radius:10},w=g.length*cn(h)-h.gap,b=200,S=56,k=f&&o.totalPlays>0,_=Cr+16+w;k&&(_+=S+b);let $=k&&_<=i;return!$&&k&&(_-=S+b),{height:_,draw:async(U,z,W,ee)=>{W=dn(U,"My top 5",z,W,u)+16;for(let R=0;R<g.length;R++){let E=g[R];await lo(U,t,h,z,W,ee,{rank:R+1,art:E.albumArt,seed:E.trackName,title:E.trackName,subtitle:E.artistName,rightValue:E.count>0?`${E.count}`:void 0,rightCaps:E.count>0?"plays":void 0}),W+=cn(h)}if(W-=h.gap,!$)return;W+=S;let D=g.reduce((R,E)=>R+E.count,0),N=Math.round(D/o.totalPlays*100);nr(U,z,W,ee,b,u);let M=z+32;rr(U,"Top 5 share",M,W+52,24,u.dim),U.fillStyle=u.text,U.font=`800 52px ${Ee}`,U.fillText(`${N}% of all plays`,M,W+124),U.fillStyle=u.muted,U.font=`28px ${Ee}`,U.textAlign="right",U.fillText(`${dt(D)} of ${dt(o.totalPlays)} plays`,z+ee-32,W+124),U.textAlign="left"}}},e0=(e,t,r,i)=>{let{stats:o,size:c,palette:u,periodLabel:f,periodDayCount:g}=t,h=c==="story",w=Math.floor(o.totalDuration/36e5),b=h?330:250,S=h?84:64,k=h?40:36,_=o.topArtists[0]?.artistName??"",$=210,U=56,z=88,W=Math.min(3,o.topArtists.length),ee=W>0?96+W*z:0,D=Math.floor(b*.78),N=Cr+20+D+28+tr(S);_&&(N+=24+tr(k));let M=!1,R=!1;return h&&(N+U+$<=i&&(M=!0,N+=U+$),ee>0&&N+40+ee<=i&&(R=!0,N+=40+ee)),{height:N,draw:async(E,Z,K,fe)=>{let ge=f.trim()?`${f} \xB7 I listened`:"Listening time";if(K=dn(E,ge,Z,K,u,!0)+20,E.font=`900 ${b}px ${Ee}`,E.fillStyle=Xe(u.accent),E.fillText(`${w}`,Z,K+D),K+=D+28,E.fillStyle=u.text,E.font=`700 ${S}px ${Ee}`,E.fillText("hours",Z,K+S),K+=tr(S),_){K+=24,E.fillStyle=u.muted,E.font=`${k}px ${Ee}`;let V="Mostly to ";E.fillText(V,Z,K+k);let oe=E.measureText(V).width;E.fillStyle=Xe(u.accent),E.font=`700 ${k}px ${Ee}`,E.fillText(xt(E,`${_}.`,fe-oe),Z+oe,K+k),K+=tr(k)}if(M){K+=U;let V=24,oe=(fe-V)/2,re=Math.round(w/24),ve=Math.round(w*60/Math.max(1,g));nr(E,Z,K,oe,$,u),nr(E,Z+oe+V,K,oe,$,u),rr(E,"Equivalent to",Z+32,K+52,24,u.dim),E.fillStyle=u.text,E.font=`800 56px ${Ee}`,E.fillText(`${re} days`,Z+32,K+124),E.fillStyle=u.muted,E.font=`26px ${Ee}`,E.fillText("of nonstop play",Z+32,K+168);let Re=Z+oe+V+32;rr(E,"Daily average",Re,K+52,24,u.dim),E.fillStyle=u.text,E.font=`800 56px ${Ee}`,E.fillText(`${ve} min`,Re,K+124),E.fillStyle=u.muted,E.font=`26px ${Ee}`,o.totalPlays>0&&E.fillText(xt(E,`across ${dt(o.totalPlays)} plays`,oe-64),Re,K+168),K+=$}if(R){K+=40,nr(E,Z,K,fe,ee,u),rr(E,"Top artists",Z+32,K+52,26,u.dim);let V=K+80;for(let oe=0;oe<W;oe++){let re=t.stats.topArtists[oe],ve=64;E.fillStyle=Xe(u.accent),E.font=`800 38px ${Ee}`,E.textAlign="right",E.fillText(`${oe+1}`,Z+32+30,V+ve/2+13),E.textAlign="left",await vi(E,re.imageUrl??void 0,Z+32+52,V,ve,ve/2,re.artistName);let Re=Z+32+52+ve+22,te=re.count>0?`${dt(re.count)} ${re.count===1?"play":"plays"}`:"";E.font=`28px ${Ee}`;let Pe=E.measureText(te).width+24;E.fillStyle=u.text,E.font=`600 36px ${Ee}`,E.fillText(xt(E,re.artistName,Z+fe-32-Pe-Re),Re,V+ve/2+12),E.fillStyle=u.dim,E.font=`28px ${Ee}`,E.textAlign="right",E.fillText(te,Z+fe-32,V+ve/2+11),E.textAlign="left",V+=z}}}}},t0=(e,t,r,i)=>{let{stats:o,size:c,palette:u}=t,f=c==="story",g=f?6:5,h=o.topGenres.slice(0,g),w=h.reduce((N,M)=>N+M.count,0),b=h[0]?.count||1,S=w>0?Math.round(b/w*100):0,k=f?36:32,_=f?40:32,$=h.length*(k+_)-_,U=h.slice(0,3).filter((N,M)=>o.topTracks[M]),z=96,W=U.length>0?88+U.length*z:0,ee=Cr+24+$,D=!1;return f&&W>0&&ee+56+W<=i&&(D=!0,ee+=56+W),{height:ee,draw:async(N,M,R,E)=>{if(h.length===0||w===0)return;R=dn(N,`I was ${S}% ${h[0].genre}`,M,R,u)+24;let Z=f?40:36,K=f?34:32;N.font=`600 ${Z}px ${Ee}`;let fe=0;for(let re of h)fe=Math.max(fe,N.measureText(re.genre).width);fe=Math.min(fe+8,Math.floor(E*.36));let ge=110;for(let re=0;re<h.length;re++){let ve=h[re],Re=R+re*(k+_),te=ve.count/w,Pe=Re+k/2;N.fillStyle=u.text,N.font=`600 ${Z}px ${Ee}`,N.textBaseline="middle",N.fillText(xt(N,ve.genre,fe),M,Pe);let T=M+fe+24,ae=Math.max(64,E-ge-(T-M)-20);N.fillStyle=u.barTrack,Rr(N,T,Re,ae,k,k/2),N.fillStyle=Xe(u.accent,1-re*.13),Rr(N,T,Re,Math.max(k,ae*(ve.count/b)),k,k/2),N.fillStyle=u.muted,N.font=`600 ${K}px ${Ee}`,N.textAlign="right",N.fillText(`${Math.round(te*100)}%`,M+E,Pe),N.textAlign="left",N.textBaseline="alphabetic"}if(R+=$,!D)return;R+=56,nr(N,M,R,E,W,u),rr(N,"Genre leaders",M+32,R+52,26,u.dim);let V=R+80,oe=64;for(let re=0;re<U.length;re++){let ve=U[re],Re=o.topTracks[re];await vi(N,Re.albumArt,M+32,V,oe,8,Re.trackName);let te=M+32+oe+24;N.font=`700 24px ${Ee}`;let Pe=N.measureText(ve.genre.toUpperCase()).width+28,T=Math.max(100,M+E-32-Pe-te);N.fillStyle=u.text,N.font=`600 32px ${Ee}`,N.fillText(xt(N,Re.trackName,T),te,V+28),N.fillStyle=u.dim,N.font=`24px ${Ee}`,N.fillText(xt(N,Re.artistName,T),te,V+60),N.fillStyle=Xe(u.accent),N.textAlign="right",rr(N,ve.genre,0,0,0,"transparent");let ae=N.letterSpacing;N.font=`700 24px ${Ee}`,N.letterSpacing="0.08em",N.fillText(ve.genre.toUpperCase(),M+E-32,V+44),N.letterSpacing=ae,N.textAlign="left",V+=z}}}},r0=(e,t,r,i)=>{let{stats:o,size:c,palette:u}=t,f=c==="story",g=o.streak??0,h=f?12:10,w=7,b=12,S=f?38:32,k=200,_=48,$=(o.dailyPlayCounts??[]).slice(-(h*w)),U=40+tr(S),z=Cr+24,W=f&&$.length>0,ee=U+(W?_+k*2+28:0),D=Math.max(160,i-z-ee),N=Math.floor((r-b*(h-1))/h),M=Math.floor((D-b*(w-1))/w),R=Math.max(16,Math.min(N,M)),E=h*(R+b)-b,Z=w*(R+b)-b,K=z+Z+U,fe=!1;W&&K+_+k<=i&&(fe=!0,K+=_+k);let ge=!1;return fe&&K+28+176<=i&&(ge=!0,K+=204),{height:K,draw:async(V,oe,re,ve)=>{if(g===0)return;re=dn(V,`${g}-day streak`,oe,re,u)+24;let Re=oe+Math.floor((ve-E)/2),te=Math.max(1,...$.map(Ke=>Ke.count));for(let Ke=0;Ke<h;Ke++)for(let $e=0;$e<w;$e++){let rt=Ke*w+$e,Q=$[rt]?.count??0,Be=Math.min(1,Q/te);V.fillStyle=Xe(u.accent,.08+Be*.92),Rr(V,Re+Ke*(R+b),re+$e*(R+b),R,R,Math.min(6,R/4))}re+=Z+40,V.fillStyle=u.muted,V.font=`${S}px ${Ee}`;let Pe="Listened every day for ";V.fillText(Pe,oe,re+S);let T=V.measureText(Pe).width;if(V.fillStyle=u.text,V.font=`700 ${S}px ${Ee}`,V.fillText(xt(V,`${g} days.`,ve-T),oe+T,re+S),re+=tr(S),!fe)return;re+=_;let ae=$.reduce((Ke,$e)=>Ke+$e.count*3,0),Te=$.length?Math.round(ae/$.length):0,Oe=24,Me=(ve-Oe)/2;nr(V,oe,re,Me,k,u),nr(V,oe+Me+Oe,re,Me,k,u),rr(V,"Daily average",oe+32,re+52,24,u.dim),V.fillStyle=u.text,V.font=`800 56px ${Ee}`,V.fillText(`${Te} min`,oe+32,re+122),V.fillStyle=u.muted,V.font=`26px ${Ee}`,V.fillText(xt(V,`over the last ${$.length} days`,Me-64),oe+32,re+164);let Le=oe+Me+Oe+32;if(rr(V,"Longest streak",Le,re+52,24,u.dim),V.fillStyle=Xe(u.accent),V.font=`800 56px ${Ee}`,V.fillText(`${g} days`,Le,re+122),V.fillStyle=u.muted,V.font=`26px ${Ee}`,V.fillText("your best run this year",Le,re+164),re+=k,!ge)return;re+=28;let et=$[0];if(!et)return;let tt=$.reduce((Ke,$e)=>$e.count>Ke.count?$e:Ke,et);nr(V,oe,re,ve,176,u),rr(V,"Best day",oe+32,re+52,24,u.dim);let J=`${tt.count} ${tt.count===1?"play":"plays"}`;V.font=`800 36px ${Ee}`;let ye=V.measureText(J).width+24;V.fillStyle=u.text,V.font=`700 36px ${Ee}`,V.fillText(xt(V,Md(tt.date),ve-64-ye),oe+32,re+118),V.fillStyle=Xe(u.accent),V.font=`800 36px ${Ee}`,V.textAlign="right",V.fillText(J,oe+ve-32,re+118),V.textAlign="left"}}},n0=(e,t,r,i)=>{let{stats:o,size:c,palette:u}=t,f=c==="story",g=o.topTracks[0],h=f?84:60,w=f?40:32,b=200,S=64,k=64+tr(h)+12+tr(w),_=f&&o.totalPlays>0,$=Cr+28+k+(_?S+b:0),z=Math.min(f?880:480,r,Math.max(280,i-$)),W=Cr+28+z+k,ee=!1;return _&&W+S+b<=i&&(ee=!0,W+=S+b),{height:W,draw:async(D,N,M,R)=>{if(!g)return;M=dn(D,"Most-played",N,M,u)+28;let E=N+Math.floor((R-z)/2);await vi(D,g.albumArt,E,M,z,20,g.trackName),M+=z+64,D.fillStyle=u.text,D.font=`800 ${h}px ${Ee}`,D.fillText(xt(D,g.trackName,R),N,M+h),M+=tr(h)+12,D.fillStyle=u.muted,D.font=`${w}px ${Ee}`;let Z=g.count>0?g.count===1?"1 play":`${g.count} plays`:"";if(D.fillText(xt(D,Z?`${g.artistName} \xB7 ${Z}`:g.artistName,R),N,M+w),M+=tr(w),!ee)return;M+=S,nr(D,N,M,R,b,u);let K=R/3,fe=M+56,ge=Math.round(g.count/o.totalPlays*100);D.textAlign="center";let V=D.letterSpacing;D.fillStyle=u.dim,D.font=`700 22px ${Ee}`,D.letterSpacing="0.08em",D.fillText("PLAYS",N+K*.5,fe),D.fillText("SHARE",N+K*1.5,fe),D.fillText("RANK",N+K*2.5,fe),D.letterSpacing=V,D.fillStyle=Xe(u.accent),D.font=`800 52px ${Ee}`,D.fillText(`${g.count}`,N+K*.5,fe+84),D.fillStyle=u.text,D.fillText(`${ge}%`,N+K*1.5,fe+84),D.fillText("#1",N+K*2.5,fe+84),D.textAlign="left",D.strokeStyle=u.chunkBorder,D.lineWidth=2,D.beginPath(),D.moveTo(N+K,M+28),D.lineTo(N+K,M+b-28),D.moveTo(N+2*K,M+28),D.lineTo(N+2*K,M+b-28),D.stroke()}}},Od=(e,t,r,i)=>{let{stats:o,size:c,palette:u,periodLabel:f,allowStreak:g,recapDayCount:h,periodDayCount:w}=t,b=c==="story",S=h!=null,k=Math.floor(o.totalDuration/36e5),_=Math.floor(o.totalDuration/6e4),$=k>=1?`${k}`:`${_}`,U=k>=1?"hours":"minutes",z=o.totalDuration>0,W=o.topGenres.filter(F=>F.count>0),ee=(o.hourlyDistribution??[]).some(F=>F>0),D=S||g?o.streak??0:0,N=o.dailyPlayCounts??[],M=N.length>0?N.reduce((F,Y)=>Y.count>F.count?Y:F,N[0]):null,R=[];o.totalPlays>0&&R.push({label:"Plays",value:dt(o.totalPlays)}),o.uniqueArtistCount>0&&R.push({label:"Artists",value:dt(o.uniqueArtistCount)}),o.uniqueTrackCount>0&&R.push({label:"Tracks",value:dt(o.uniqueTrackCount)}),_>0&&R.push({label:"Daily avg",value:`${Math.round(_/Math.max(1,w))} min`}),ee&&R.push({label:"Peak hour",value:Yb(o.peakHour)}),D>0&&R.push({label:S&&D>=(h??Number.POSITIVE_INFINITY)?"Every day":"Streak",value:`${D} days`}),M&&M.count>0&&R.push({label:"Best day",value:Md(M.date),sub:`${dt(M.count)} plays`});let E=3,Z=b?6:3,K=R.slice(0,Z),fe=b?168:136,ge=20,V=b?24:20,oe=V+20,re=b?40:26,ve=b?{tile:84,gap:18,rank:34,titlePx:30,subPx:22,countPx:24,capsPx:15,radius:9}:{tile:56,gap:13,rank:26,titlePx:21,subPx:16,countPx:18,capsPx:12,radius:7},Re=b?44:30,te=b?24:18,Pe=b?20:14,T=b?170:100,ae=b?50:34,Te=Math.floor(T*.78),Oe=z?Te+12:0,Me=b?5:3,Le=Math.min(b?4:2,W.length),et=K.length,tt=()=>Math.min(Me,o.topTracks.length),J=()=>Math.min(Me,o.topArtists.length),ye=()=>Math.ceil(et/E),Ke=()=>et>0?ye()*(fe+ge)-ge:0,$e=()=>{let F=Math.max(tt(),J());return F>0?oe+F*cn(ve)-ve.gap:0},rt=()=>Le>0?oe+Le*(te+Pe)-Pe:0,Q=()=>{let F=Cr+8+Oe;return et>0&&(F+=re+Ke()),$e()>0&&(F+=re+$e()),rt()>0&&(F+=re+rt()),F};for(;Q()>i&&Le>0;)Le--;for(;Q()>i&&Me>2;)Me--;for(;Q()>i&&et>E;)et-=E;let Be=Q(),he=(F,Y,_e,ot)=>{let qt=F.letterSpacing;F.fillStyle=u.dim,F.font=`700 ${V}px ${Ee}`,F.letterSpacing="0.1em",F.fillText(Y,_e,ot+V),F.letterSpacing=qt};return{height:Be,draw:async(F,Y,_e,ot)=>{let qt=S?f.trim()?`${f} \xB7 Recap`:"Monthly Recap":f.trim()?`${f} \xB7 Wrapped`:"Wrapped";if(_e=dn(F,qt,Y,_e,u,!0)+8,z){F.font=`900 ${T}px ${Ee}`,F.fillStyle=Xe(u.accent);let lt=_e+Te;F.fillText($,Y,lt);let je=F.measureText($).width;F.fillStyle=u.text,F.font=`700 ${ae}px ${Ee}`,F.fillText(U,Y+je+20,lt),_e+=Oe}if(et>0){_e+=re;let lt=Math.floor((ot-ge*(E-1))/E);for(let je=0;je<et;je++){let _t=K[je],me=Y+je%E*(lt+ge),We=_e+Math.floor(je/E)*(fe+ge);nr(F,me,We,lt,fe,u),rr(F,_t.label,me+28,We+46,b?22:20,u.dim),F.fillStyle=u.text,F.font=`800 ${b?46:38}px ${Ee}`,F.fillText(xt(F,_t.value,lt-56),me+28,We+(b?108:96)),_t.sub&&b&&(F.fillStyle=u.muted,F.font=`24px ${Ee}`,F.fillText(xt(F,_t.sub,lt-56),me+28,We+144))}_e+=Ke()}let Ue=tt(),Nt=J();if(Ue>0||Nt>0){_e+=re;let lt=Ue>0&&Nt>0,je=lt?Math.floor((ot-Re)/2):ot,_t=Y+je+Re;Ue>0&&he(F,"TOP TRACKS",Y,_e),Nt>0&&he(F,"TOP ARTISTS",lt?_t:Y,_e);let me=_e+oe,We=me;for(let ct=0;ct<Ue;ct++){let qe=o.topTracks[ct];await lo(F,t,ve,Y,We,je,{rank:ct+1,art:qe.albumArt,seed:qe.trackName,title:qe.trackName,subtitle:qe.artistName,rightValue:qe.count>0?`${qe.count}`:void 0}),We+=cn(ve)}let Pt=me;for(let ct=0;ct<Nt;ct++){let qe=o.topArtists[ct];await lo(F,t,ve,lt?_t:Y,Pt,je,{rank:ct+1,art:qe.imageUrl,seed:qe.artistName,title:qe.artistName,subtitle:qe.count>0?`${dt(qe.count)} ${qe.count===1?"play":"plays"}`:""}),Pt+=cn(ve)}_e=me+Math.max(Ue,Nt)*cn(ve)-ve.gap}if(Le>0){_e+=re,he(F,"TOP GENRES",Y,_e),_e+=oe;let lt=W.slice(0,Le),je=W.reduce((We,Pt)=>We+Pt.count,0),_t=lt[0]?.count||1;F.font=`600 ${te+2}px ${Ee}`;let me=0;for(let We of lt)me=Math.max(me,F.measureText(We.genre).width);me=Math.min(me+6,Math.floor(ot*.32));for(let We=0;We<lt.length;We++){let Pt=lt[We],ct=_e+We*(te+Pe),qe=ct+te/2;F.textBaseline="middle",F.fillStyle=u.text,F.font=`600 ${te+2}px ${Ee}`,F.fillText(xt(F,Pt.genre,me),Y,qe);let ir=Y+me+20,ft=Math.max(48,ot-76-(ir-Y)-16);F.fillStyle=u.barTrack,Rr(F,ir,ct,ft,te,te/2),F.fillStyle=Xe(u.accent,1-We*.15),Rr(F,ir,ct,Math.max(te,ft*(Pt.count/_t)),te,te/2),F.fillStyle=u.dim,F.font=`600 ${te}px ${Ee}`,F.textAlign="right",F.fillText(`${Math.round(Pt.count/je*100)}%`,Y+ot,qe),F.textAlign="left",F.textBaseline="alphabetic"}_e+=Le*(te+Pe)-Pe}}}},a0={top5:Qb,time:e0,genre:t0,streak:r0,throwback:n0,wrapped:Od,recap:Od};async function $d(e,t,r,i,o,c){let u=Kb[r],f=document.createElement("canvas");f.width=u.width,f.height=u.height;let g=f.getContext("2d");if(!g)throw new Error("Canvas 2D context unavailable");await Cd(e);let h=Gb(!!c?.followTheme),w=c?.activeProviderId??"local",b=c?.hasStreakData??w==="local",S=!b&&t==="streak"?"top5":t,k=[];c?.showUsername!==!1&&o&&k.push(`@${o}`),c?.showPeriodLabel!==!1&&k.push(i);let _=k.join(" \xB7 ");Xb(g,u.width,u.height,h),Zb(g,u.width,_,h);let $={stats:e,size:r,palette:h,periodLabel:i,periodDayCount:Math.max(1,c?.periodDayCount??e.listeningDays??28),allowStreak:b,recapDayCount:S==="recap"?Math.max(1,c?.periodDayCount??e.listeningDays??28):void 0},U=u.width-un*2,z=u.height-_d-Vb,W=a0[S](g,$,U,z),ee=Math.max(0,z-W.height),N=_d+Math.floor(ee*(S==="wrapped"||S==="recap"?.08:.3));return await W.draw(g,un,N,U),Jb(g,u.height,_,h),f}async function jn(e,t,r,i,o,c){let u=await $d(e,t,r,i,o,c);return new Promise((f,g)=>{u.toBlob(h=>{if(!h){g(new Error("PNG blob creation failed"));return}f(h)},"image/png")})}async function po(e,t,r,i,o,c){let u=await jn(e,t,r,i,o,c),f=URL.createObjectURL(u),g=document.createElement("a");g.href=f,g.download="listening-stats-share.png",g.click(),URL.revokeObjectURL(f)}async function fo(e,t,r,i,o,c){let u=await jn(e,t,r,i,o,c);if(!navigator.clipboard?.write)throw new Error("Clipboard API not available");await navigator.clipboard.write([new ClipboardItem({"image/png":u})])}var{useState:ar,useCallback:mo,useEffect:go,useMemo:i0}=Spicetify.React,s0=[{id:"square",label:"Square"},{id:"story",label:"Story"}];function o0(){try{let e=localStorage.getItem(ne.STATSFM_CONFIG);if(e){let r=JSON.parse(e)?.username;if(r&&String(r).trim())return String(r).trim()}}catch{}return""}function ho({stats:e,activePeriod:t,onClose:r,initialVariant:i,variantIds:o,title:c}){let[u,f]=ar(i??"top5"),[g,h]=ar("square"),[w,b]=ar(!1),[S,k]=ar(!0),[_,$]=ar(!0),[U,z]=ar(!1),[W,ee]=ar(""),[D,N]=ar(!1),[M,R]=ar(null),[E,Z]=ar(o0);go(()=>{if(E)return;let T=!1;return Spicetify.Platform.UserAPI?.getUser?.().then(ae=>{let Te=(ae?.displayName??ae?.username??"").trim();!T&&Te&&Z(Te)}).catch(()=>{}),()=>{T=!0}},[E]);let K=t.label,fe=t.getBoundaries(),ge=Math.max(1,Math.round((fe.end-fe.start)/864e5)),V=Ae.getActiveId()??"local",oe=Ae.getActive()?.getProviderInfo().capabilities,re=i0(()=>co(e,oe,o),[oe,e,o]);go(()=>{re.some(T=>T.id===u)||f(re[0]?.id??"top5")},[re,u]),go(()=>{let T=!1,ae="";return(async()=>{N(!0),R(null);try{let Oe=await jn(e,u,g,K,E,{followTheme:w,showUsername:S,showPeriodLabel:_,activeProviderId:V,periodDayCount:ge,hasStreakData:oe?.hasStreakData??!1});if(T)return;ae=URL.createObjectURL(Oe),ee(ae)}catch{T||R("Could not render preview")}finally{T||N(!1)}})(),()=>{T=!0,ae&&URL.revokeObjectURL(ae)}},[e,u,g,K,E,w,S,_,V,ge]);let ve=T=>f(T),Re=mo(T=>{T.target.classList.contains("share-overlay")&&r()},[r]),te=mo(async()=>{if(!U){z(!0);try{await po(e,u,g,K,E,{followTheme:w,showUsername:S,showPeriodLabel:_,activeProviderId:V,periodDayCount:ge,hasStreakData:oe?.hasStreakData??!1}),Spicetify.showNotification("Share card downloaded!")}catch{Spicetify.showNotification("Could not export share card.",!0)}finally{z(!1)}}},[e,u,g,K,E,w,S,_,V,ge,U]),Pe=mo(async()=>{if(!U){z(!0);try{await fo(e,u,g,K,E,{followTheme:w,showUsername:S,showPeriodLabel:_,activeProviderId:V,periodDayCount:ge,hasStreakData:oe?.hasStreakData??!1}),Spicetify.showNotification("Copied to clipboard!")}catch{Spicetify.showNotification("Could not copy share card.",!0)}finally{z(!1)}}},[e,u,g,K,E,w,S,_,V,ge,U]);return Spicetify.ReactDOM.createPortal(Spicetify.React.createElement("div",{className:"share-overlay",onClick:Re},Spicetify.React.createElement("div",{className:"share-modal"},Spicetify.React.createElement("div",{className:"share-modal-header"},Spicetify.React.createElement("h2",{className:"share-modal-title"},c??"Share Cards"),Spicetify.React.createElement("button",{type:"button",className:"share-modal-close stats-header-icon-btn",onClick:r,"aria-label":"Close share modal",dangerouslySetInnerHTML:{__html:sn}})),re.length>1&&Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Card type"),Spicetify.React.createElement("div",{className:"share-tabs-row"},re.map(T=>Spicetify.React.createElement("button",{type:"button",key:T.id,className:`share-variant-tab${u===T.id?" active":""}`,onClick:()=>ve(T.id)},T.label)))),Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Layout"),Spicetify.React.createElement("div",{className:"share-tabs-row"},s0.map(T=>Spicetify.React.createElement("button",{type:"button",key:T.id,className:`share-size-tab${g===T.id?" active":""}`,onClick:()=>h(T.id)},T.label)))),Spicetify.React.createElement("div",{className:"share-control-row"},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Follow theme"),Spicetify.React.createElement(er,{value:w,onSelected:b})),Spicetify.React.createElement("div",{className:"share-preview-container"},D&&Spicetify.React.createElement("div",{className:"share-preview-status"},"Rendering preview\u2026"),M&&Spicetify.React.createElement("div",{className:"share-preview-status"},M),!!W&&!D&&Spicetify.React.createElement("img",{src:W,alt:"Share card preview",className:"share-preview-image","data-testid":"share-card-preview-image"})),Spicetify.React.createElement("div",{className:"share-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-copy-btn",onClick:Pe,disabled:U},U?"Working\u2026":"Copy image"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-download-btn",onClick:te,disabled:U},U?"Working\u2026":"Save PNG")),Spicetify.React.createElement("div",{className:"share-control-row",style:{marginTop:8}},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Show @username"),Spicetify.React.createElement(er,{value:S,onSelected:k})),Spicetify.React.createElement("div",{className:"share-control-row"},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Show period label"),Spicetify.React.createElement(er,{value:_,onSelected:$})))),document.body)}Rt();function pt({title:e,children:t}){return Spicetify.React.createElement("section",{className:"settings-group"},Spicetify.React.createElement("h3",{className:"section-header"},e),t)}function Ve({label:e,sublabel:t,stacked:r,testId:i,children:o}){return Spicetify.React.createElement("div",{className:"settings-row","data-testid":i,style:r?{flexDirection:"column",alignItems:"stretch",gap:"8px"}:void 0},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},e),t&&Spicetify.React.createElement("div",{className:"settings-sublabel"},t)),o)}function kt({value:e,onChange:t}){return er?Spicetify.React.createElement(er,{value:e,onSelected:t}):Spicetify.React.createElement("input",{type:"checkbox",checked:e,onChange:r=>t(r.currentTarget.checked)})}function pr({options:e,value:t,onChange:r,testId:i}){return Spicetify.React.createElement("div",{className:"option-group",role:"group","data-testid":i},e.map(o=>Spicetify.React.createElement("button",{key:String(o.value),type:"button",className:`option-group-btn${o.value===t?" active":""}`,"aria-pressed":o.value===t,onClick:()=>r(o.value)},o.label)))}var{useCallback:l0}=Spicetify.React;function Ud({version:e,onOpenUpdates:t,onPrefsChanged:r,onReceiveBetaUpdatesChanged:i,onRestartTour:o}){let c=st(),u=l0(f=>{Fe("receiveBetaUpdates",f),window.dispatchEvent(new CustomEvent(ue.PREFS_CHANGED)),r(),i?.()},[r,i]);return Spicetify.React.createElement("div",{className:"settings-about"},Spicetify.React.createElement(pt,{title:"Updates"},Spicetify.React.createElement(Ve,{label:"Listening Stats",sublabel:`Version ${e}`},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:t},"Check for updates\u2026")),Spicetify.React.createElement(Ve,{label:"Prereleases",sublabel:"Include beta versions in update checks"},Spicetify.React.createElement(kt,{value:c.receiveBetaUpdates,onChange:u}))),Spicetify.React.createElement(pt,{title:"Help"},o&&Spicetify.React.createElement(Ve,{label:"Guided tour"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"restart-tour",onClick:o},"Restart")),Spicetify.React.createElement(Ve,{label:"Source"},Spicetify.React.createElement("a",{className:"settings-inline-link",href:ur,target:"_blank",rel:"noopener noreferrer"},ur.replace("https://","")))))}Rt();Xt();async function vo(e){let r=new TextEncoder().encode(e.toLowerCase()),i=await globalThis.crypto.subtle.digest("SHA-256",r);return Array.from(new Uint8Array(i)).map(c=>c.toString(16).padStart(2,"0")).join("").slice(0,12)}async function qn(e,t,r){let[i,o,c]=await Promise.all([vo(e+t+r),vo(t),vo(t+r)]);return{trackUri:`listening-stats:track:${i}`,artistUri:`listening-stats:artist:${o}`,albumUri:`listening-stats:album:${c}`}}Ma();var c0=2e3,u0=1e3;function d0(e){return new Promise(t=>setTimeout(t,e))}async function Fd(e){let r=(await Ye.playEvents.where("trackUri").startsWith("listening-stats:").toArray()).filter(c=>c.resolvedAt===null||c.resolvedAt===void 0);if(r.length===0)return;let i=[...new Set(r.map(c=>c.trackUri))],o=new Map;for(let c of r)o.has(c.trackUri)||o.set(c.trackUri,{trackName:c.trackName,artistName:c.artistName});for(let c of i){if(Tr.isOpen())break;let u=o.get(c);if(!u)continue;let{trackName:f,artistName:g}=u,w=`https://api.spotify.com/v1/search?q=${encodeURIComponent(`track:${f} artist:${g}`)}&type=track&limit=5`,b=await Zt(w);if(b.ok){let k=b.data.tracks.items.find(_=>_.name.toLowerCase()===f.toLowerCase()&&_.artists[0]?.name.toLowerCase()===g.toLowerCase());k?await Ye.playEvents.where("trackUri").equals(c).modify({trackUri:`spotify:track:${k.id}`,artistUri:`spotify:artist:${k.artists[0].id}`,albumUri:`spotify:album:${k.album.id}`,albumArt:k.album.images[0]?.url??null,resolvedAt:Date.now()}):await Ye.playEvents.where("trackUri").equals(c).modify({resolvedAt:0})}else{if(b.error.type==="rate_limited"||b.error.type==="circuit_open")break;await Ye.playEvents.where("trackUri").equals(c).modify({resolvedAt:0})}await d0(e?.delayMs??c0+Math.random()*u0)}}var Bd="Track,Artist,Album,Duration (ms),Played (ms),Started At,Ended At",p0=`${Bd},Type,Track URI,Artist URI,Album URI,Album Art`,Gr=10,f0=new Set(["lastfm.freetls.fastly.net","cdn.stats.fm"]);function Wd(e){if(e.startsWith("spotify:image:"))return!0;try{let t=new URL(e);return t.protocol!=="https:"?!1:t.hostname.endsWith(".scdn.co")||f0.has(t.hostname)}catch{return!1}}function m0(e){let t=[],r="",i=!1;for(let o=0;o<e.length;o++){let c=e[o];c==='"'?i&&e[o+1]==='"'?(r+='"',o++):i=!i:c===","&&!i?(t.push(r),r=""):r+=c}return t.push(r),t}async function Hd(e){let t=e.split(`
`).map(g=>g.trim()).filter(g=>g.length>0);if(t.length===0)return{events:[],errors:0,errorDetails:[]};let r=t[0],i=r===p0;if(!i&&r!==Bd)throw r.startsWith("Period,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Export play history as CSV" to create an importable backup.'):r.startsWith("Rank,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Export play history as CSV" to create an importable backup.'):new Error(`Import failed: unrecognized CSV format (expected v1 export). Got: "${r.slice(0,60)}"`);let o=[],c=0,u=[],f=t.slice(1);for(let g=0;g<f.length;g++){let h=g+2,w=f[g],b=m0(w);if(b.length<7){c++,u.length<Gr&&u.push(`Row ${h}: expected 7 fields, got ${b.length}`);continue}let[S,k,_,$,U,z,W]=b,ee=parseInt($,10),D=parseInt(U,10),N=new Date(z).getTime(),M=new Date(W).getTime();if(Number.isNaN(ee)||Number.isNaN(D)){c++,u.length<Gr&&u.push(`Row ${h}: invalid numeric field (duration or played ms)`);continue}if(!Number.isFinite(N)||Number.isNaN(N)||N<=0){c++,u.length<Gr&&u.push(`Row ${h}: invalid timestamp (Started At: "${z}")`);continue}if(!Number.isFinite(M)||Number.isNaN(M)||M<=0){c++,u.length<Gr&&u.push(`Row ${h}: invalid timestamp (Ended At: "${W}")`);continue}let R=i?b[8]:"",E=R?{trackUri:R,artistUri:b[9]??"",albumUri:b[10]??""}:await qn(S,k,_),Z={trackName:S,artistName:k,albumName:_,durationMs:ee,playedMs:D,startedAt:N,endedAt:M,type:i&&b[7]==="skip"?"skip":"play",...E},K=i?b[11]:"";K&&Wd(K)&&(Z.albumArt=K),o.push(Z)}return{events:o,errors:c,errorDetails:u}}async function zd(e){let t;try{t=JSON.parse(e)}catch{throw new Error("Import failed: file is not valid JSON")}if(!Array.isArray(t))throw typeof t=="object"&&t!==null&&"topTracks"in t?new Error("Import failed: JSON must be a raw play events array, not a stats export"):new Error("Import failed: JSON must be a raw play events array, not a stats export");let r=[],i=0,o=[];for(let c=0;c<t.length;c++){let u=t[c],f=c+1;if(typeof u.trackName!="string"||typeof u.artistName!="string"||typeof u.startedAt!="number"||typeof u.endedAt!="number"||typeof u.durationMs!="number"||typeof u.playedMs!="number"){i++,o.length<Gr&&o.push(`Row ${f}: missing required field(s)`);continue}if(!Number.isFinite(u.startedAt)||u.startedAt<=0||!Number.isFinite(u.endedAt)||u.endedAt<=0||!Number.isFinite(u.durationMs)||u.durationMs<0||!Number.isFinite(u.playedMs)||u.playedMs<0){i++,o.length<Gr&&o.push(`Row ${f}: invalid numeric field (timestamp or duration)`);continue}let g=u.trackName,h=u.artistName,w=typeof u.albumName=="string"?u.albumName:"",b=u.durationMs,S=u.playedMs,k=u.startedAt,_=u.endedAt,$,U,z;if(typeof u.trackUri=="string"&&u.trackUri)$=u.trackUri,U=typeof u.artistUri=="string"?u.artistUri:"",z=typeof u.albumUri=="string"?u.albumUri:"";else{let ee=await qn(g,h,w);$=ee.trackUri,U=ee.artistUri,z=ee.albumUri}let W={trackName:g,artistName:h,albumName:w,durationMs:b,playedMs:S,startedAt:k,endedAt:_,trackUri:$,artistUri:U,albumUri:z,type:u.type==="skip"?"skip":"play"};typeof u.albumArt=="string"&&Wd(u.albumArt)&&(W.albumArt=u.albumArt),r.push(W)}return{events:r,errors:i,errorDetails:o}}async function Kd(e){if(e.length===0)return{imported:0,skipped:0,errors:0,errorDetails:[]};let t=e.map(g=>g.startedAt),r=await Ye.playEvents.where("startedAt").anyOf(t).toArray(),i=new Set(r.map(g=>`${g.startedAt}:${g.trackName}`)),o=[],c=0;for(let g of e){let h=`${g.startedAt}:${g.trackName}`;i.has(h)?c++:(o.push(g),i.add(h))}let u=0,f=[];if(o.length>0)try{await Ye.playEvents.bulkAdd(o)}catch(g){if(g!==null&&typeof g=="object"&&"failures"in g&&g.failures!==null&&typeof g.failures=="object"){let h=g.failures;u=Object.keys(h).length,f.length<Gr&&f.push(`bulkAdd: ${u} item(s) failed to insert`)}else throw g}return o.length-u>0&&Fd().catch(g=>{console.warn("[listening-stats] URI resolution error:",g)}),{imported:o.length-u,skipped:c,errors:u,errorDetails:f}}var g0=101010256,h0=33639248,v0=67324752;function y0(e){let t=Math.max(0,e.byteLength-22-65535);for(let r=e.byteLength-22;r>=t;r--)if(e.getUint32(r,!0)===g0)return r;throw new Error("Import failed: not a valid zip file")}function b0(e){let t=new DataView(e),r=y0(t),i=t.getUint16(r+10,!0),o=t.getUint32(r+16,!0),c=new TextDecoder,u=[],f=o;for(let g=0;g<i;g++){if(t.getUint32(f,!0)!==h0)throw new Error("Import failed: corrupt zip central directory");let h=t.getUint16(f+10,!0),w=t.getUint32(f+20,!0),b=t.getUint32(f+24,!0),S=t.getUint16(f+28,!0),k=t.getUint16(f+30,!0),_=t.getUint16(f+32,!0),$=t.getUint32(f+42,!0);if(w===4294967295||b===4294967295||$===4294967295)throw new Error("Import failed: zip64 archives are not supported (entry over 4 GB)");u.push({name:c.decode(new Uint8Array(e,f+46,S)),compressionMethod:h,compressedSize:w,uncompressedSize:b,localHeaderOffset:$}),f+=46+S+k+_}return u}async function w0(e){let t=new ReadableStream({start(o){o.enqueue(e),o.close()}}),r=new DecompressionStream("deflate-raw"),i=t.pipeThrough(r);return new Uint8Array(await new Response(i).arrayBuffer())}async function S0(e,t){let r=new DataView(e),i=t.localHeaderOffset;if(r.getUint32(i,!0)!==v0)throw new Error("Import failed: corrupt zip local header");let o=r.getUint16(i+26,!0),c=r.getUint16(i+28,!0),u=i+30+o+c,f=new Uint8Array(e,u,t.compressedSize),g;if(t.compressionMethod===0)g=f;else if(t.compressionMethod===8)g=await w0(f);else throw new Error(`Import failed: unsupported zip compression method ${t.compressionMethod}`);return new TextDecoder("utf-8").decode(g)}var x0=/(^|\/)(Streaming_History_Audio[^/]*|endsong(_\d+)?)\.json$/i,k0=/(^|\/)StreamingHistory(_music)?_?\d*\.json$/i,E0=3e4,yi=10;async function T0(e,t,r){for(let i of e){if(typeof i!="object"||i===null){r.errors++,r.errorDetails.length<yi&&r.errorDetails.push(`${t}: non-object record`);continue}let o=i,c=o.master_metadata_track_name;if(typeof c!="string"||c.length===0||o.spotify_episode_uri||o.episode_name){r.ignored++;continue}let u=typeof o.ms_played=="number"&&Number.isFinite(o.ms_played)?o.ms_played:-1;if(u<=0){r.ignored++;continue}let f=typeof o.ts=="string"?Date.parse(o.ts):Number.NaN;if(!Number.isFinite(f)||f<=0){r.errors++,r.errorDetails.length<yi&&r.errorDetails.push(`${t}: invalid "ts" value ${JSON.stringify(o.ts).slice(0,40)}`);continue}let g=f-u,h=typeof o.master_metadata_album_artist_name=="string"?o.master_metadata_album_artist_name:"",w=typeof o.master_metadata_album_album_name=="string"?o.master_metadata_album_album_name:"",b=await qn(c,h,w),S=typeof o.spotify_track_uri=="string"&&o.spotify_track_uri.startsWith("spotify:track:")?o.spotify_track_uri:b.trackUri;r.events.push({trackName:c,artistName:h,albumName:w,durationMs:u,playedMs:u,startedAt:g,endedAt:g+u,trackUri:S,artistUri:b.artistUri,albumUri:b.albumUri,type:u>=E0?"play":"skip"})}}async function Gd(e){let t=b0(e),r=t.filter(u=>x0.test(u.name));if(r.length===0)throw t.some(u=>k0.test(u.name))?new Error('Import failed: this is the "Account data" export, which only covers the last year. Request "Extended streaming history" instead at spotify.com/account/privacy/'):new Error("Import failed: no streaming history files found in this zip");let i={events:[],errors:0,errorDetails:[],filesRead:0,ignored:0};for(let u of r){let f=await S0(e,u),g;try{g=JSON.parse(f)}catch{i.errors++,i.errorDetails.length<yi&&i.errorDetails.push(`${u.name}: not valid JSON`);continue}if(!Array.isArray(g)){i.errors++,i.errorDetails.length<yi&&i.errorDetails.push(`${u.name}: expected a JSON array`);continue}i.filesRead++,await T0(g,u.name,i)}let o=new Set,c=[];for(let u of i.events){let f=`${u.startedAt}:${u.trackName}`;o.has(f)||(o.add(f),c.push(u))}return i.events=c,i}var{useState:Yn,useRef:P0}=Spicetify.React;function Vd({onRefresh:e}){let[t,r]=Yn(!1),[i,o]=Yn("idle"),[c,u]=Yn({current:0,total:0}),[f,g]=Yn(null),[h,w]=Yn(null),b=P0(null),S=()=>{ze.invalidate(),e(),Spicetify.showNotification("Stats refreshed")},k=async M=>{o("importing"),u({current:0,total:M.events.length});let R=500,E=0,Z=0,K=M.errors,fe=[...M.errorDetails];for(let ge=0;ge<M.events.length;ge+=R){let V=M.events.slice(ge,ge+R),oe=await Kd(V);E+=oe.imported,Z+=oe.skipped,K+=oe.errors,fe=fe.concat(oe.errorDetails),u({current:Math.min(ge+R,M.events.length),total:M.events.length}),await new Promise(re=>setTimeout(re,0))}ze.invalidate(),window.dispatchEvent(new CustomEvent(ue.PLAY_RECORDED)),g({imported:E,skipped:Z,errors:K,errorDetails:fe.slice(0,10)}),o("complete")},_=async M=>{let R=M.target.files?.[0];if(!R)return;b.current&&(b.current.value="");let E=R.name.endsWith(".csv"),Z=R.name.endsWith(".json"),K=R.name.endsWith(".zip");if(!E&&!Z&&!K){Spicetify.showNotification("Unsupported file type. Use .csv, .json or .zip.",!0);return}let fe=100*1024*1024;if(R.size>fe){Spicetify.showNotification("Import failed: file larger than 100 MB",!0);return}try{if(K){o("parsing");let oe=await Gd(await R.arrayBuffer());if(oe.events.length===0){Spicetify.showNotification("Import failed: no music plays found in this zip",!0),o("idle");return}w(oe),o("confirm-zip");return}o("parsing");let ge=await R.text(),V=E?await Hd(ge):await zd(ge);if(V.events.length===0&&V.errors===0){Spicetify.showNotification("Import failed: file contains no events",!0),o("idle");return}await k(V)}catch(ge){let V=ge instanceof Error?ge.message:"Unknown import error";Spicetify.showNotification(V,!0),o("idle"),console.error("[DataTab] Import error:",ge)}},$=async M=>{if(!h)return;let R=h;w(null);try{M&&await Ye.playEvents.clear(),await k(R)}catch(E){let Z=E instanceof Error?E.message:"Unknown import error";Spicetify.showNotification(Z,!0),o("idle"),console.error("[DataTab] Zip import error:",E)}},U=()=>{o("idle"),g(null)},z=async()=>{try{let M=await Ye.playEvents.toArray();if(M.length===0){Spicetify.showNotification("No local play history to export",!0);return}let R=M.map(({id:E,...Z})=>Z);io(JSON.stringify(R),"listening-stats-backup.json","application/json")}catch(M){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export JSON error:",M)}},W=async()=>{try{let M=await Ye.playEvents.toArray();if(M.length===0){Spicetify.showNotification("No local play history to export",!0);return}let R=K=>`"${K.replace(/"/g,'""').replace(/[\r\n]+/g," ")}"`,E=`Track,Artist,Album,Duration (ms),Played (ms),Started At,Ended At,Type,Track URI,Artist URI,Album URI,Album Art
`,Z=M.map(K=>[R(K.trackName),R(K.artistName),R(K.albumName),K.durationMs,K.playedMs,new Date(K.startedAt).toISOString(),new Date(K.endedAt).toISOString(),K.type,R(K.trackUri),R(K.artistUri),R(K.albumUri),R(K.albumArt??"")].join(",")).join(`
`);io(E+Z,"listening-stats-backup.csv","text/csv")}catch(M){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export CSV error:",M)}},ee=async()=>{try{let M={trackUri:"spotify:track:test",trackName:"Test Track",artistName:"Test Artist",artistUri:"spotify:artist:test",albumName:"Test Album",albumUri:"spotify:album:test",durationMs:3e4,playedMs:3e4,startedAt:Date.now(),endedAt:Date.now(),type:"play"},R=await Ye.playEvents.add(M);await Ye.playEvents.delete(R),Spicetify.showNotification("Write test passed")}catch(M){Spicetify.showNotification("Write test failed. Check console.",!0),console.error("[DataTab] Test write error:",M)}},D=M=>{for(let R=M.length-1;R>=0;R--){let E=M.key(R);E?.startsWith("listening-stats:")&&M.removeItem(E)}},N=async()=>{try{await Ye.delete(),ze.invalidate(),indexedDB.deleteDatabase("listening-stats-lastfm-cache"),D(localStorage),D(sessionStorage),Spicetify.showNotification("All data wiped"),r(!1),window.location.reload()}catch(M){Spicetify.showNotification("Wipe failed. Check console.",!0),console.error("[DataTab] Wipe error:",M)}};return Spicetify.React.createElement("div",null,Spicetify.React.createElement(pt,{title:"Library"},Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},Spicetify.React.createElement("input",{ref:b,type:"file",accept:".csv,.json,.zip",style:{display:"none"},onChange:_,"aria-label":"Import play history file"}),i==="idle"&&Spicetify.React.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Import play history"),Spicetify.React.createElement("div",{className:"settings-sublabel"},'A .json backup from this app, .csv / .json from a v1 export, or the Spotify "Extended streaming history" .zip from spotify.com/account/privacy')),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>b.current?.click()},"Import")),i==="parsing"&&Spicetify.React.createElement("div",{className:"import-progress"},Spicetify.React.createElement("span",{className:"import-progress-label"},"Reading file..."),Spicetify.React.createElement("progress",{className:"import-progress-bar"})),i==="confirm-zip"&&h&&Spicetify.React.createElement("div",{className:"import-result-card"},Spicetify.React.createElement("p",{style:{margin:0,fontSize:"var(--font-size-sm, 14px)",color:"var(--spice-text)"}},"Found ",Spicetify.React.createElement("strong",null,h.events.length.toLocaleString())," music plays in ",h.filesRead," ","history file",h.filesRead===1?"":"s",h.ignored>0?` (${h.ignored.toLocaleString()} podcast/zero-length rows ignored)`:"",". This export contains everything Spotify ever recorded for your account - including plays this app already tracked."),Spicetify.React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"}},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"}},Spicetify.React.createElement("div",{className:"settings-sublabel",style:{flex:1}},Spicetify.React.createElement("strong",null,"Replace (recommended):")," deletes your existing local play history first, then imports the export. Guarantees no duplicate plays."),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>$(!0)},"Replace")),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"}},Spicetify.React.createElement("div",{className:"settings-sublabel",style:{flex:1}},Spicetify.React.createElement("strong",null,"Merge:")," keeps your current history and skips exact duplicates (same start time + track). Plays tracked live by this app have slightly different timestamps, so some may appear twice. Use this for the 2nd+ zip of a multi-zip export."),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>$(!1)},"Merge")),Spicetify.React.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>{w(null),o("idle")}},"Cancel")))),i==="importing"&&Spicetify.React.createElement("div",{className:"import-progress"},Spicetify.React.createElement("span",{className:"import-progress-label"},"Importing... ",c.current," / ",c.total),Spicetify.React.createElement("progress",{className:"import-progress-bar",value:c.current,max:c.total})),i==="complete"&&f&&Spicetify.React.createElement("div",{className:"import-result-card"},Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--success"},f.imported),Spicetify.React.createElement("span",{className:"import-result-label"},"imported")),Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--neutral"},f.skipped),Spicetify.React.createElement("span",{className:"import-result-label"},"skipped as duplicates")),f.errors>0&&Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--error"},f.errors),Spicetify.React.createElement("span",{className:"import-result-label"},"errors")),f.errors>0&&f.errorDetails.length>0&&Spicetify.React.createElement("div",{className:"import-result-errors"},f.errorDetails.slice(0,3).map((M,R)=>Spicetify.React.createElement("div",{key:R,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"}},M.length>80?`${M.slice(0,80)}\u2026`:M))),Spicetify.React.createElement("div",{className:"import-result-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:U},"Dismiss Results")))),Spicetify.React.createElement(Ve,{label:"Export play history as JSON"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:z},"Export")),Spicetify.React.createElement(Ve,{label:"Export play history as CSV"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:W},"Export"))),Spicetify.React.createElement(pt,{title:"Maintenance"},Spicetify.React.createElement(Ve,{label:"Refresh statistics cache"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:S},"Refresh")),Spicetify.React.createElement(Ve,{label:"Test database write"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:ee},"Test"))),Spicetify.React.createElement(pt,{title:"Danger zone"},t?Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-sm, 14px)",color:"var(--spice-text)",margin:0}},"This permanently deletes all play history and cannot be undone. Are you sure?"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px"}},Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:N},"Delete Everything"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>r(!1)},"Keep My Data"))):Spicetify.React.createElement(Ve,{label:"Wipe all data",sublabel:"Deletes all play history permanently"},Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:()=>r(!0)},"Wipe"))))}Rt();var{useState:A0,useRef:Xn,useEffect:jd,useCallback:fr}=Spicetify.React,R0=8;function Zn(e){let{order:t,onReorder:r}=e,i=e.orientation??"vertical",[o,c]=A0({isDragging:!1,activeId:null,dropSlotIndex:null}),u=Xn(null),f=Xn(0),g=Xn(0),h=Xn(new Map),w=Xn(t);jd(()=>{w.current=t},[t]);let b=fr((D,N)=>{N?h.current.set(D,N):h.current.delete(D)},[]),S=fr((D,N)=>{let M=w.current;if(i==="grid"){for(let R=0;R<M.length;R++){let E=h.current.get(M[R]);if(!E)continue;let Z=E.getBoundingClientRect();if(D>=Z.left&&D<=Z.right&&N>=Z.top&&N<=Z.bottom){let K=(Z.left+Z.right)/2;return D<K?R:R+1}}return M.length-1}for(let R=0;R<M.length;R++){let E=h.current.get(M[R]);if(!E)continue;let Z=E.getBoundingClientRect();if(i==="horizontal"){let K=(Z.left+Z.right)/2;if(D<K)return R}else{let K=(Z.top+Z.bottom)/2;if(N<K)return R}}return M.length-1},[i]),k=fr(()=>{u.current=null,f.current=0,g.current=0,c({isDragging:!1,activeId:null,dropSlotIndex:null})},[]),_=fr(D=>{if(!u.current)return;let N=D.clientX-u.current.x,M=D.clientY-u.current.y;f.current=N,g.current=M,c(R=>{let E=Math.hypot(N,M);return R.isDragging?{...R,dropSlotIndex:S(D.clientX,D.clientY)}:E<R0?R:{isDragging:!0,activeId:R.activeId,dropSlotIndex:S(D.clientX,D.clientY)}})},[S]),$=fr(()=>{c(D=>{if(D.isDragging&&D.activeId&&D.dropSlotIndex!=null){let N=w.current,M=N.indexOf(D.activeId);if(M>=0&&M!==D.dropSlotIndex){let R=[...N],[E]=R.splice(M,1);R.splice(D.dropSlotIndex,0,E),r(R)}}return{isDragging:!1,activeId:null,dropSlotIndex:null}}),u.current=null,f.current=0,g.current=0},[r]),U=fr(()=>k(),[k]),z=fr(D=>{D.key==="Escape"&&k()},[k]);jd(()=>(window.addEventListener("pointermove",_),window.addEventListener("pointerup",$),window.addEventListener("pointercancel",U),window.addEventListener("keydown",z),()=>{window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",$),window.removeEventListener("pointercancel",U),window.removeEventListener("keydown",z)}),[_,$,U,z]);let W=fr(D=>N=>{w.current.includes(D)&&(u.current={x:N.clientX,y:N.clientY},f.current=0,g.current=0,c({isDragging:!1,activeId:D,dropSlotIndex:null}))},[]),ee=fr(D=>{if(!o.isDragging||o.activeId!==D)return;let N;return i==="horizontal"?N=`translate3d(${f.current}px, 0, 0)`:i==="grid"?N=`translate3d(${f.current}px, ${g.current}px, 0)`:N=`translate3d(0, ${g.current}px, 0)`,{transform:N,opacity:.4}},[o.isDragging,o.activeId,i]);return{dragState:o,onItemPointerDown:W,registerItem:b,getItemStyle:ee}}var{React:DT}=Spicetify;function qd({id:e,label:t,dragHandleProps:r,style:i,children:o}){return Spicetify.React.createElement("div",{className:"sortable-row","data-row-id":e,style:i},Spicetify.React.createElement("button",{type:"button",className:"settings-drag-handle","aria-label":`Drag ${t}`,onPointerDown:c=>r.onPointerDown(c.nativeEvent),dangerouslySetInnerHTML:{__html:ud}}),Spicetify.React.createElement("div",{className:"sortable-row-label"},t),Spicetify.React.createElement("div",{className:"sortable-row-toggle"},o))}var{React:LT}=Spicetify;function Yd({id:e,label:t,tileDragProps:r,style:i,children:o}){return Spicetify.React.createElement("div",{className:"sortable-tile","data-tile-id":e,style:i,onPointerDown:u=>r.onPointerDown(u.nativeEvent)},Spicetify.React.createElement("div",{className:"sortable-tile-label"},t),Spicetify.React.createElement("div",{className:"sortable-tile-toggle",onPointerDown:u=>u.stopPropagation()},o))}var{useState:yo,useRef:C0,useCallback:Jn,useEffect:I0}=Spicetify.React,N0={overview:"Overview","top-genres":"Top Genres","top-lists":"Top Lists",activity:"Activity",consistency:"Consistency","recently-played":"Recently Played"},_0=[{value:3,label:"3"},{value:5,label:"5"},{value:10,label:"10"}],D0=[{value:"pill",label:"Pill"},{value:"bubble",label:"Bubble"},{value:"minimal",label:"Minimal"},{value:"off",label:"Off"}];function Xd({onPrefsChanged:e,announcementDismissKey:t=null}){let[r,i]=yo(()=>st()),[o,c]=yo(null),u=C0(new Map),f=Jn(()=>{e(),window.dispatchEvent(new CustomEvent(ue.PREFS_CHANGED))},[e]),g=T=>{Fe("itemsPerSection",T),i({...r,itemsPerSection:T}),f()},h=T=>{Fe("playCountVariant",T),T==="off"&&Fe("playCountShowPeriodStreams",!1),i({...r,playCountVariant:T,...T==="off"?{playCountShowPeriodStreams:!1}:{}}),f()},w=T=>{Fe("playCountShowPeriodStreams",T),i({...r,playCountShowPeriodStreams:T}),f()},b=T=>{Fe("use24HourTime",T),i({...r,use24HourTime:T}),f()},S=T=>{Fe("heatmapShrink",T),i({...r,heatmapShrink:T}),f()},k=T=>{T?(Fe("showAnnouncementBanner",!0),Fe("announcementBannerHiddenForDismissKey","")):(Fe("showAnnouncementBanner",!1),Fe("announcementBannerHiddenForDismissKey",t??"")),i(st()),f()},_=()=>{c({hiddenSections:[...r.hiddenSections],sectionOrder:[...r.sectionOrder],columnOrder:[...r.columnOrder],overviewOrder:{local:[...r.overviewOrder.local],statsfm:[...r.overviewOrder.statsfm]}});let T=[...Gn],ae=[...si],Te={local:[...Kr.local],statsfm:[...Kr.statsfm]};Fe("hiddenSections",[]),Fe("sectionOrder",T),Fe("columnOrder",ae),Fe("overviewOrder",Te),i(Oe=>({...Oe,hiddenSections:[],sectionOrder:T,columnOrder:ae,overviewOrder:Te})),f()},$=()=>{o&&(Fe("hiddenSections",o.hiddenSections),Fe("sectionOrder",o.sectionOrder),Fe("columnOrder",o.columnOrder),Fe("overviewOrder",o.overviewOrder),i(T=>({...T,hiddenSections:o.hiddenSections,sectionOrder:o.sectionOrder,columnOrder:o.columnOrder,overviewOrder:o.overviewOrder})),c(null),f())},U=(T,ae)=>{let Te=ae?r.hiddenSections.filter(Oe=>Oe!==T):[...r.hiddenSections,T];Fe("hiddenSections",Te),i({...r,hiddenSections:Te}),f()},z=Jn(T=>{let ae=r.sectionOrder.filter(Oe=>!T.includes(Oe)),Te=[...T,...ae];Fe("sectionOrder",Te),i(Oe=>({...Oe,sectionOrder:Te})),f()},[r.sectionOrder,f]),[W,ee]=yo(()=>Ae.getActiveId()==="statsfm"?"statsfm":"local"),D=Ae.getActive()?.getProviderInfo().capabilities??{hasActivityData:!0,hasConsistencyData:!1,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"},N=new Set(Gn),M=new Set(ai(D).map(T=>T.id)),R=r.sectionOrder.filter(T=>N.has(T)&&M.has(T)),E=Zn({order:R,onReorder:z});I0(()=>{let T=()=>{let ae=Ae.getActiveId();ee(ae==="statsfm"?"statsfm":"local")};return window.addEventListener(ue.PROVIDER_CHANGED,T),()=>window.removeEventListener(ue.PROVIDER_CHANGED,T)},[]);let Z=r.overviewOrder[W],K=Z.slice(0,4),fe=Z.slice(4),ge=Jn(T=>{let ae=[...T,...r.overviewOrder[W].slice(4)],Te={...r.overviewOrder,[W]:ae};Fe("overviewOrder",Te),i(Oe=>({...Oe,overviewOrder:Te})),f()},[r.overviewOrder,W,f]),V=Zn({order:K,orientation:"grid",onReorder:ge}),oe=Jn(T=>{let ae=[...r.overviewOrder[W].slice(0,4),...T],Te={...r.overviewOrder,[W]:ae};Fe("overviewOrder",Te),i(Oe=>({...Oe,overviewOrder:Te})),f()},[r.overviewOrder,W,f]),re=Zn({order:fe,orientation:"horizontal",onReorder:oe}),ve=Jn(T=>{Fe("columnOrder",T),i(ae=>({...ae,columnOrder:T})),f()},[f]),Re=Zn({order:r.columnOrder,orientation:"horizontal",onReorder:ve}),te=r.hiddenSections.includes("top-lists"),Pe=(T,ae,Te,Oe)=>{let Me=!r.hiddenSections.includes(T),Le=ae[T]??T,et=Te.dragState.isDragging&&Te.dragState.dropSlotIndex!=null&&Oe[Te.dragState.dropSlotIndex]===T&&Te.dragState.activeId!==T;return Spicetify.React.createElement("div",{key:T,ref:tt=>Te.registerItem(T,tt),style:et?{outline:"2px solid var(--spice-button-active)",outlineOffset:"-2px",borderRadius:"6px"}:void 0},Spicetify.React.createElement(Yd,{id:T,label:Le,tileDragProps:{onPointerDown:Te.onItemPointerDown(T)},style:Te.getItemStyle(T)},Spicetify.React.createElement(kt,{value:Me,onChange:tt=>U(T,tt)})))};return Spicetify.React.createElement("div",{className:"display-tab"},Spicetify.React.createElement(pt,{title:"Dashboard"},Spicetify.React.createElement(Ve,{label:"Items per section"},Spicetify.React.createElement(pr,{options:_0,value:r.itemsPerSection,onChange:g})),Spicetify.React.createElement(Ve,{label:"24-hour time"},Spicetify.React.createElement(kt,{value:r.use24HourTime,onChange:b})),Spicetify.React.createElement(Ve,{label:"Compact heatmap",sublabel:"Fit the calendar to the card instead of scrolling"},Spicetify.React.createElement(kt,{value:r.heatmapShrink,onChange:S})),Spicetify.React.createElement(Ve,{label:"Announcement banner"},Spicetify.React.createElement(kt,{value:r.showAnnouncementBanner,onChange:k}))),Spicetify.React.createElement(pt,{title:"Playbar"},Spicetify.React.createElement(Ve,{label:"Play count style"},Spicetify.React.createElement(pr,{options:D0,value:r.playCountVariant,onChange:h,testId:"play-count-variant"})),r.playCountVariant!=="off"&&Spicetify.React.createElement(Ve,{label:"Show new streams",sublabel:W==="statsfm"?void 0:'"New play" hint for tracks with no plays yet',testId:"play-count-extra-context"},Spicetify.React.createElement(kt,{value:r.playCountShowPeriodStreams,onChange:w}))),Spicetify.React.createElement(pt,{title:"Layout"},Spicetify.React.createElement(Ve,{label:"Section and card arrangement"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"reset-layout",onClick:_,style:{padding:"4px 12px"}},"Reset")),o&&Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-sublabel"},"Layout reset to defaults"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"undo-reset-layout",onClick:$,style:{padding:"4px 12px"}},"Undo")),Spicetify.React.createElement("div",{style:{marginTop:"4px"},"data-drag-active":E.dragState.isDragging?"true":"false"},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Visible sections"),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":E.dragState.isDragging&&E.dragState.dropSlotIndex===0?"true":"false"}),R.map((T,ae)=>{let Te=!r.hiddenSections.includes(T),Oe=N0[T]??T;return Spicetify.React.createElement(Spicetify.React.Fragment,{key:T},Spicetify.React.createElement("div",{ref:Me=>{Me?u.current.set(T,Me):u.current.delete(T),E.registerItem(T,Me)}},Spicetify.React.createElement(qd,{id:T,label:Oe,dragHandleProps:{onPointerDown:E.onItemPointerDown(T)},style:E.getItemStyle(T)},Spicetify.React.createElement(kt,{value:Te,onChange:Me=>U(T,Me)}))),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":E.dragState.isDragging&&E.dragState.dropSlotIndex===ae+1?"true":"false"}))})),Spicetify.React.createElement("div",{style:{marginTop:"16px"},key:W},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Overview cards"),Spicetify.React.createElement("div",{className:"overview-settings-top"},Spicetify.React.createElement("div",{className:"overview-settings-hero","data-testid":"overview-settings-hero"},Spicetify.React.createElement("div",{className:"sortable-tile-label"},"Total Time"),Spicetify.React.createElement("div",{className:"overview-settings-hero-sub"},"Fixed")),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--2x2"},K.map(T=>Pe(T,Vn,V,K)))),fe.length>0&&Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3","data-testid":"overview-bottom-row"},fe.map(T=>Pe(T,Vn,re,fe)))),Spicetify.React.createElement("div",{"data-testid":"top-lists-columns-subsection",style:{marginTop:"16px",opacity:te?.4:1,pointerEvents:te?"none":"auto"}},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Top Lists columns"),te&&Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"4px"}},"Top Lists is hidden. Re-enable it above to manage individual columns."),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3"},r.columnOrder.map(T=>Pe(T,Qu,Re,r.columnOrder))))))}rn();at();Er();var Zd=[5,10,20,30],pn={enabled:!1,trackCount:10,providerId:"local",periodId:"this-week",isPublic:!1},O0=new Set(["today","sfm-today"]);function bi(e){return(e==="statsfm"?Yt:Gt).filter(r=>!O0.has(r.id))}function Jd(e){let t=bi(e.providerId);return t.find(r=>r.id===e.periodId)??t[0]}function fn(){try{let e=localStorage.getItem(ne.PLAYLIST_CONFIG);if(!e)return{...pn};let t=JSON.parse(e);return{enabled:typeof t.enabled=="boolean"?t.enabled:pn.enabled,trackCount:typeof t.trackCount=="number"&&t.trackCount>0?t.trackCount:pn.trackCount,providerId:t.providerId==="statsfm"?"statsfm":"local",periodId:typeof t.periodId=="string"?t.periodId:pn.periodId,isPublic:typeof t.isPublic=="boolean"?t.isPublic:pn.isPublic}}catch{return{...pn}}}function mn(e){let t={...fn(),...e};try{localStorage.setItem(ne.PLAYLIST_CONFIG,JSON.stringify(t))}catch{}return t}function gn(){try{let e=localStorage.getItem(ne.PLAYLIST_STATE);if(!e)return{playlistUri:null,lastBuiltDay:null};let t=JSON.parse(e);return{playlistUri:typeof t.playlistUri=="string"?t.playlistUri:null,lastBuiltDay:typeof t.lastBuiltDay=="string"?t.lastBuiltDay:null}}catch{return{playlistUri:null,lastBuiltDay:null}}}function Qd(e){let t={...gn(),...e};try{localStorage.setItem(ne.PLAYLIST_STATE,JSON.stringify(t))}catch{}}function L0(e){return new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=()=>r(new Error(`cover art failed to load: ${e}`)),i.src=e})}async function ep(e,t){let r=document.createElement("canvas");r.width=640,r.height=640;let i=r.getContext("2d");if(!i)throw new Error("canvas 2d context unavailable");let o=null;if(e&&(o=await L0(e).catch(()=>null)),o)i.drawImage(o,0,0,640,640);else{let f=i.createLinearGradient(0,0,640,640);f.addColorStop(0,"#1e3264"),f.addColorStop(1,"#121212"),i.fillStyle=f,i.fillRect(0,0,640,640)}let c=i.createLinearGradient(0,640*.55,0,640);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,0.85)"),i.fillStyle=c,i.fillRect(0,0,640,640),i.fillStyle="#ffffff",i.textBaseline="alphabetic",i.font="600 36px CircularSp, 'Helvetica Neue', Arial, sans-serif",i.fillText("Listening Stats",40,544);let u=64;for(i.font=`700 ${u}px CircularSp, 'Helvetica Neue', Arial, sans-serif`;u>24&&i.measureText(t).width>560;)u-=4,i.font=`700 ${u}px CircularSp, 'Helvetica Neue', Arial, sans-serif`;return i.fillText(t,40,604),r.toDataURL("image/jpeg",.9)}var tp=100;function M0(){let e=globalThis.Spicetify?.Platform;return!e?.RootlistAPI?.createPlaylist||!e?.PlaylistAPI?.add?null:{rootlist:e.RootlistAPI,playlist:e.PlaylistAPI}}async function $0(e,t){let r=gn().playlistUri;if(r)try{return await Spicetify.Platform.PlaylistAPI.getMetadata(r),r}catch{}let i=await e.createPlaylist(t,{before:"start"}),o=typeof i=="string"?i:i?.uri;if(!o)throw new Error("createPlaylist returned no URI");return o}async function U0(e,t,r){if(typeof e.clear=="function")await e.clear(t);else for(;;){let i=await e.getContents(t,{limit:tp,offset:0});if(!i.items.length||(await e.remove(t,i.items.map(({uri:o,uid:c})=>({uri:o,uid:c}))),i.items.length<tp))break}await e.add(t,r,{after:"end"})}async function F0(e,t,r){if(typeof e.uploadImage!="function")return;let i=Spicetify.Platform.Session?.accessToken;if(!i)return;let o=await(await fetch(r)).blob(),c=new File([o],"cover.jpg",{type:"image/jpeg"}),u=await e.uploadImage(c),f=t.split(":").pop(),g=await fetch(`https://spclient.wg.spotify.com/playlist/v2/playlist/${f}/register-image`,{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({uploadToken:u})});if(!g.ok)throw new Error(`register-image failed: ${g.status}`);let h=await g.arrayBuffer(),w=[...new Uint8Array(h)].map(S=>S.toString(16).padStart(2,"0")).join(""),b=w.startsWith("0a14")?w.slice(4):w;await e.setAttributes(t,{picture:b}),typeof e.resync=="function"&&await e.resync(t)}async function rp(e,t){let r=Spicetify.Platform.PlaylistPermissionsAPI;if(typeof r?.setBasePermission=="function")try{await r.setBasePermission(e,t?"VIEWER":"BLOCKED")}catch(i){console.warn("[listening-stats] playlist visibility update failed:",i)}}async function np(e){let t=gn().playlistUri;t&&await rp(t,e)}var wi=null;function ap(){return wi||(wi=B0().finally(()=>{wi=null})),wi}async function B0(){let e=fn();if(!e.enabled)return{status:"skipped",reason:"disabled"};let t=M0();if(!t)return{status:"error",message:"Spotify playlist APIs unavailable in this client version"};try{let r=Jd(e),c=(await(e.providerId==="statsfm"?Vt:Un).calculateStats(r)).topTracks.filter(g=>g.trackUri.startsWith("spotify:track:")).slice(0,e.trackCount);if(c.length===0)return{status:"skipped",reason:"no-tracks"};let u=`Listening Stats \xB7 ${r.label}`,f=await $0(t.rootlist,u);await U0(t.playlist,f,c.map(g=>g.trackUri)),await t.playlist.setAttributes(f,{name:u,description:`Your top ${c.length} tracks (${r.label.toLowerCase()}) - auto-updated daily by Listening Stats`}),await rp(f,e.isPublic);try{let g=await ep(c[0].albumArt,r.label);await F0(t.playlist,f,g)}catch(g){console.warn("[listening-stats] playlist cover update failed:",g)}return Qd({playlistUri:f,lastBuiltDay:cr(Date.now())}),{status:"built",playlistUri:f,trackCount:c.length}}catch(r){let i=r instanceof Error?r.message:String(r);return console.error("[listening-stats] playlist build failed:",r),{status:"error",message:i}}}var{useState:ip}=Spicetify.React,W0=[{value:"local",label:"Local"},{value:"statsfm",label:"stats.fm"}],H0=Zd.map(e=>({value:e,label:String(e)}));function z0(e){e.status==="built"?Spicetify.showNotification(`Playlist updated with your top ${e.trackCount} tracks`):e.status==="skipped"&&e.reason==="no-tracks"?Spicetify.showNotification("No tracks with Spotify links found for this period yet",!0):e.status==="error"&&Spicetify.showNotification(`Playlist update failed: ${e.message}`,!0)}function sp(){let[e,t]=ip(()=>fn()),[r,i]=ip(!1),o=async()=>{if(!r){i(!0);try{z0(await ap())}finally{i(!1)}}},c=S=>{t(mn({enabled:S})),S&&o()},u=S=>{t(mn({trackCount:S}))},f=S=>{let k=bi(S),_=fn().periodId,$=k.some(U=>U.id===_)?_:k[0].id;t(mn({providerId:S,periodId:$}))},g=S=>{t(mn({periodId:S}))},h=S=>{t(mn({isPublic:S})),np(S)},w=bi(e.providerId).map(S=>({value:S.id,label:S.label})),b=gn().playlistUri;return Spicetify.React.createElement("div",null,Spicetify.React.createElement(pt,{title:"Auto playlist"},Spicetify.React.createElement(Ve,{label:"Daily top songs playlist",sublabel:"Creates a playlist from your top tracks and refreshes it once per day",testId:"playlist-enabled"},Spicetify.React.createElement(kt,{value:e.enabled,onChange:c})),Spicetify.React.createElement(Ve,{label:"Public playlist",sublabel:"Private by default; turn on to make it visible on your profile",testId:"playlist-public"},Spicetify.React.createElement(kt,{value:e.isPublic,onChange:h}))),Spicetify.React.createElement(pt,{title:"Contents"},Spicetify.React.createElement(Ve,{label:"Songs"},Spicetify.React.createElement(pr,{options:H0,value:e.trackCount,onChange:u})),Spicetify.React.createElement(Ve,{label:"Source",sublabel:"Last.fm can't be used: it doesn't expose Spotify track links"},Spicetify.React.createElement(pr,{options:W0,value:e.providerId,onChange:f,testId:"playlist-provider"})),Spicetify.React.createElement(Ve,{label:"Period",sublabel:'"Today" is not offered - too little history to fill a playlist',stacked:!0},Spicetify.React.createElement(pr,{options:w,value:e.periodId,onChange:g,testId:"playlist-period"}))),Spicetify.React.createElement(pt,{title:"Actions"},Spicetify.React.createElement(Ve,{label:"Update now",sublabel:e.enabled?"Setting changes apply on the next daily refresh, or immediately with this button":"Enable the playlist above first"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",disabled:!e.enabled||r,onClick:()=>{o()},style:{padding:"4px 12px"},"data-testid":"playlist-update-now"},r?"Updating\u2026":"Update")),b&&Spicetify.React.createElement(Ve,{label:"Open playlist"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>Spicetify.Platform.History.push(`/playlist/${b.split(":").pop()}`),style:{padding:"4px 12px"}},"Open"))))}Fa();Rt();at();Xt();rn();var{useState:jt}=Spicetify.React,op={not_found:"Username not found. Check your stats.fm customId.",private:"Profile is private. Visit stats.fm settings and set your profile to public.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function lp(){let e=localStorage.getItem(ne.STATSFM_CONFIG);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function K0(){let e=localStorage.getItem(ne.LASTFM_CONFIG);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function G0(e){let r=e.getAll().find(c=>c.id==="statsfm")?.capabilities.tier==="plus"?"plus":"free";return{tier:r,tierClass:r==="plus"?"tier-badge--plus":"tier-badge--free",tierLabel:r==="plus"?"Plus":"Free"}}function cp(){let[e,t]=jt(""),[r,i]=jt(()=>lp()?"connected":"idle"),[o,c]=jt(()=>lp()),[u,f]=jt(null),[g,h]=jt(!1),[w,b]=jt(null),[S,k]=jt(()=>K0()),[_,$]=jt(!1),[U,z]=jt(""),[W,ee]=jt(""),[D,N]=jt(null),M=async()=>{if(!e.trim())return;i("connecting"),f(null);let te=await Hr(e.trim());if(!te.valid){f(op[te.reason]??"Connection failed. Check the console for details."),i("error");return}let Pe={username:e.trim(),isPlus:te.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(ne.STATSFM_CONFIG,JSON.stringify(Pe)),await Vt.init(),ze.invalidate(),Ae.setActive("statsfm"),window.dispatchEvent(new CustomEvent(ue.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED)),c(Pe),i("connected")},R=()=>{localStorage.removeItem(ne.STATSFM_CONFIG),ze.invalidate(),Ae.setActive("local"),window.dispatchEvent(new CustomEvent(ue.STATSFM_DISCONNECTED)),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED)),i("idle"),t(""),c(null),f(null)},E=async()=>{if(!o)return;let te=o.isPlus;h(!0),b(null);let Pe=await Hr(o.username);if(!Pe.valid){b(op[Pe.reason]??"Validation failed. Check the console for details."),h(!1);return}let T={...o,isPlus:Pe.isPlus,lastValidated:Date.now()};localStorage.setItem(ne.STATSFM_CONFIG,JSON.stringify(T)),await Vt.init(),c(T),h(!1),window.dispatchEvent(new CustomEvent(ue.STATSFM_PROFILE_REFRESHED)),te!==Pe.isPlus&&(ze.invalidate(),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED)))},Z=async()=>{let te=W.trim()||localStorage.getItem(ne.LASTFM_API_KEY)||"";if(!(!te||!U.trim())){$(!0),N(null);try{let Pe=await Tl(te,U.trim()),T={apiKey:te,username:Pe.username};localStorage.setItem(ne.LASTFM_CONFIG,JSON.stringify(T)),localStorage.setItem(ne.LASTFM_API_KEY,te),await Ln.init(),ze.invalidate(),Ae.setActive("lastfm"),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED)),k(T),$(!1)}catch(Pe){N(String(Pe)),$(!1)}}},K=()=>{localStorage.removeItem(ne.LASTFM_CONFIG),ze.invalidate(),Ae.setActive("local"),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED)),k(null),z(""),ee(""),N(null)},fe=te=>{ze.invalidate(),Ae.setActive(te),window.dispatchEvent(new CustomEvent(ue.PROVIDER_CHANGED))},ge=Ae.getAll(),V=Ae.getActiveId(),oe=o!==null,re=S!==null,{tierClass:ve,tierLabel:Re}=G0(Ae);return Spicetify.React.createElement("div",null,Spicetify.React.createElement("h3",{className:"section-header"},"Active provider"),Spicetify.React.createElement("div",{role:"radiogroup","aria-label":"Active provider"},ge.map(te=>{let Pe=te.id==="statsfm"&&!oe||te.id==="lastfm"&&!re;return Spicetify.React.createElement("div",{key:te.id,className:`provider-radio-row ${V===te.id?"active":""}`,role:"radio","aria-checked":V===te.id,"aria-label":te.name,onClick:()=>{Pe||V!==te.id&&fe(te.id)},style:Pe?{opacity:.5,pointerEvents:"none"}:void 0},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},te.name),Spicetify.React.createElement("div",{className:"settings-sublabel"},te.description)))})),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"20px"}},"stats.fm account"),(r==="idle"||r==="connecting"||r==="error")&&Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Use your stats.fm customId, not your display name"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:e,onChange:te=>t(te.target.value),onKeyDown:te=>{te.key==="Enter"&&r!=="connecting"&&M()},placeholder:"Enter your stats.fm username",disabled:r==="connecting","aria-label":"stats.fm username",className:"settings-input"}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:M,disabled:r==="connecting","aria-busy":r==="connecting",style:r==="connecting"?{opacity:.6}:void 0},r==="connecting"?"Connecting...":"Connect Account")),r==="error"&&u&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},u)),r==="connected"&&o&&Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},Spicetify.React.createElement("span",{style:{color:"var(--spice-text)",fontWeight:700}},o.username),Spicetify.React.createElement("span",{className:`tier-badge ${ve}`},Re)),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Connected since ",new Date(o.connectedAt).toLocaleDateString()),Spicetify.React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px",alignItems:"center"}},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:E,disabled:g,"aria-busy":g,"aria-label":"Re-validate stats.fm tier status",style:g?{opacity:.6}:void 0},g?"Re-validating...":"Re-validate"),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:R,"aria-label":"Disconnect stats.fm account"},"Disconnect")),w&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},w)),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"20px"}},"Last.fm account"),S?Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},Spicetify.React.createElement("span",{style:{color:"var(--spice-text)",fontWeight:700}},S.username)),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Last.fm API key is configured and active."),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:K,style:{marginTop:"8px",alignSelf:"flex-start"}},"Disconnect")):Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Connect your Last.fm account to use it as a stats provider (also enables World Charts data)."),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:U,onChange:te=>z(te.target.value),onKeyDown:te=>{te.key==="Enter"&&!_&&Z()},placeholder:"Enter your Last.fm username",disabled:_,"aria-label":"Last.fm username",className:"settings-input"}),Spicetify.React.createElement("input",{type:"text",value:W,onChange:te=>ee(te.target.value),onKeyDown:te=>{te.key==="Enter"&&!_&&Z()},placeholder:"Enter your Last.fm API key",disabled:_,"aria-label":"Last.fm provider API key",className:"settings-input"}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:Z,disabled:_||!U.trim()||!(W.trim()||localStorage.getItem(ne.LASTFM_API_KEY)),"aria-busy":_,style:_?{opacity:.6}:void 0},_?"Connecting...":"Connect Account")),D&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},D)))}at();var V0=3e4,j0=25;function up(){try{let e=localStorage.getItem(ne.PLAY_THRESHOLD);if(e!==null){let t=parseInt(e,10);if(!Number.isNaN(t)&&t>=0&&t<=6e4)return t}}catch{}return V0}function dp(e){try{let t=Math.max(0,Math.min(6e4,Math.round(e/1e3)*1e3));localStorage.setItem(ne.PLAY_THRESHOLD,String(t))}catch{}}function pp(){try{let e=localStorage.getItem(ne.PLAY_THRESHOLD_PERCENT);if(e!==null){let t=parseInt(e,10);if(!Number.isNaN(t)&&t>=0&&t<=100)return t}}catch{}return j0}function fp(e){try{let t=Math.max(0,Math.min(100,Math.round(e)));localStorage.setItem(ne.PLAY_THRESHOLD_PERCENT,String(t))}catch{}}function mp(){try{return localStorage.getItem(ne.PLAY_THRESHOLD_MODE)==="percent"?"percent":"seconds"}catch{return"seconds"}}function gp(e){try{e==="percent"?localStorage.setItem(ne.PLAY_THRESHOLD_MODE,"percent"):localStorage.removeItem(ne.PLAY_THRESHOLD_MODE)}catch{}}function hp(){try{return localStorage.getItem(ne.TRACKING_PAUSED)==="1"}catch{return!1}}function vp(e){try{e?localStorage.setItem(ne.TRACKING_PAUSED,"1"):localStorage.removeItem(ne.TRACKING_PAUSED)}catch{}}function yp(){try{return localStorage.getItem(ne.SKIP_REPEATS)==="1"}catch{return!1}}function bp(e){try{e?localStorage.setItem(ne.SKIP_REPEATS,"1"):localStorage.removeItem(ne.SKIP_REPEATS)}catch{}}Rt();at();Xt();function wp({max:e,value:t,presets:r,onChange:i,formatValue:o}){let u=Spicetify.React.useRef(null),f=S=>{let k=u.current;if(!k)return t;let _=k.getBoundingClientRect();if(_.width<=0)return t;let $=(S-_.left)/_.width;return Math.max(0,Math.min(e,Math.round($*e)))},g=S=>{S.currentTarget.setPointerCapture?.(S.pointerId),i(f(S.clientX))},h=S=>{S.currentTarget.hasPointerCapture?.(S.pointerId)&&i(f(S.clientX))},w=S=>{S.key==="ArrowLeft"||S.key==="ArrowDown"?(S.preventDefault(),i(Math.max(0,t-1))):(S.key==="ArrowRight"||S.key==="ArrowUp")&&(S.preventDefault(),i(Math.min(e,t+1)))},b=e>0?t/e*100:0;return Spicetify.React.createElement("div",{className:"threshold-slider"},Spicetify.React.createElement("div",{className:"threshold-slider-rail",ref:u,onPointerDown:g,onPointerMove:h},Spicetify.React.createElement("div",{className:"threshold-slider-track"}),Spicetify.React.createElement("div",{className:"threshold-slider-fill",style:{width:`${b}%`}}),Spicetify.React.createElement("div",{className:"threshold-slider-handle",style:{left:`${b}%`},role:"slider",tabIndex:0,"aria-valuemin":0,"aria-valuemax":e,"aria-valuenow":t,"aria-valuetext":o(t),onKeyDown:w},o(t))),Spicetify.React.createElement("div",{className:"threshold-slider-presets"},r.map(S=>Spicetify.React.createElement("button",{key:S,type:"button",className:`threshold-slider-preset${S===t?" active":""}`,style:{left:`${e>0?S/e*100:0}%`},onClick:()=>i(S)},o(S)))))}var q0=[0,15,30,45,60],Y0=[0,25,50,75,100],X0=[{value:"streams",label:"Streams"},{value:"minutes",label:"Minutes"}],{useState:Ir,useEffect:Z0}=Spicetify.React;function J0(){return localStorage.getItem(ne.LOGGING)==="true"}function Q0(e){localStorage.setItem(ne.LOGGING,String(e))}function Sp({onPrefsChanged:e}){let[t,r]=Ir(()=>hp()),[i,o]=Ir(()=>yp()),[c,u]=Ir(()=>mp()==="percent"),[f,g]=Ir(()=>up()/1e3),[h,w]=Ir(()=>pp()),[b,S]=Ir(()=>J0()),[k,_]=Ir(()=>Qr()),[$,U]=Ir(()=>Ae.getActiveId()??"local");return Z0(()=>{let R=()=>U(Ae.getActiveId()??"local");return window.addEventListener(ue.PROVIDER_CHANGED,R),()=>window.removeEventListener(ue.PROVIDER_CHANGED,R)},[]),Spicetify.React.createElement("div",null,Spicetify.React.createElement(pt,{title:"Recording"},Spicetify.React.createElement(Ve,{label:"Pause tracking"},Spicetify.React.createElement(kt,{value:t,onChange:R=>{r(R),vp(R),window.dispatchEvent(new CustomEvent(R?ue.TRACKING_PAUSED:ue.TRACKING_RESUMED)),e()}})),Spicetify.React.createElement(Ve,{label:"Skip repeats",sublabel:"Don't count back-to-back plays of the same track"},Spicetify.React.createElement(kt,{value:i,onChange:R=>{o(R),bp(R),e()}}))),Spicetify.React.createElement(pt,{title:"Play threshold"},Spicetify.React.createElement(Ve,{label:"Use percentage of track length"},Spicetify.React.createElement(kt,{value:c,onChange:R=>{u(R),gp(R?"percent":"seconds"),e()}})),Spicetify.React.createElement(Ve,{label:"Count a play after",sublabel:"Local tracking only; stats.fm and Last.fm use their own rules",stacked:!0},Spicetify.React.createElement(wp,{max:c?100:60,value:c?h:f,presets:c?Y0:q0,onChange:R=>{c?(w(R),fp(R)):(g(R),dp(R*1e3)),e()},formatValue:R=>c?`${R}%`:`${R}s`}))),$==="local"&&Spicetify.React.createElement(pt,{title:"Ranking"},Spicetify.React.createElement(Ve,{label:"Rank top lists by",sublabel:"Orders top tracks, artists, and albums by play count or time listened"},Spicetify.React.createElement(pr,{options:X0,value:k,onChange:R=>{_(R),$l(R),ze.invalidate(),window.dispatchEvent(new CustomEvent(ue.RANK_MODE_CHANGED)),e()},testId:"rank-mode"}))),Spicetify.React.createElement(pt,{title:"Diagnostics"},Spicetify.React.createElement(Ve,{label:"Console logging"},Spicetify.React.createElement(kt,{value:b,onChange:R=>{S(R),Q0(R),e()}}))))}var{useState:ew,useEffect:tw}=Spicetify.React,rw={tracking:"Tracking",display:"Display",playlist:"Playlist",data:"Data",providers:"Providers",about:"About"};function xp({onClose:e,onRefresh:t,onPrefsChanged:r,onRestartTour:i,onOpenUpdates:o,onReceiveBetaUpdatesChanged:c,initialTab:u="tracking",appVersion:f,announcementDismissKey:g=null}){let[h,w]=ew(u);tw(()=>{let S=k=>{k.key==="Escape"&&e()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[e]);let{createPortal:b}=Spicetify.ReactDOM;return b(Spicetify.React.createElement("div",{className:"settings-overlay",onClick:S=>{S.target.classList.contains("settings-overlay")&&e()}},Spicetify.React.createElement("div",{className:"settings-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Settings"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:e,"aria-label":"Close settings",dangerouslySetInnerHTML:{__html:sn}})),Spicetify.React.createElement("div",{className:"settings-tabs",role:"tablist"},["tracking","display","playlist","data","providers","about"].map(S=>Spicetify.React.createElement("button",{type:"button",key:S,className:`settings-tab ${h===S?"active":""}`,role:"tab","aria-selected":h===S,onClick:()=>w(S)},rw[S]))),h==="tracking"&&Spicetify.React.createElement(Sp,{onPrefsChanged:r}),h==="display"&&Spicetify.React.createElement(Xd,{onPrefsChanged:r,announcementDismissKey:g}),h==="playlist"&&Spicetify.React.createElement(sp,null),h==="data"&&Spicetify.React.createElement(Vd,{onRefresh:t}),h==="providers"&&Spicetify.React.createElement(cp,null),h==="about"&&Spicetify.React.createElement(Ud,{version:f,onOpenUpdates:o,onPrefsChanged:r,onReceiveBetaUpdatesChanged:c,onRestartTour:i}))),document.body)}function kp({topGenres:e,onGenreClick:t,activeGenre:r}){if(!e||e.length===0)return null;let i=e.slice(0,6),o=e.reduce((c,u)=>c+u.count,0)||1;return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Composition"),Spicetify.React.createElement("h2",{className:"section-title"},"Top Genres")),Spicetify.React.createElement("div",{className:"top-genres-list"},i.map((c,u)=>{let f=o>0?c.count/o*100:0;return Spicetify.React.createElement("div",{key:c.genre,className:"top-genres-row"},Spicetify.React.createElement("button",{className:`top-genres-name${r===c.genre?" top-genres-name--active":""}`,onClick:()=>t?.(c.genre),type:"button"},c.genre),Spicetify.React.createElement("div",{className:"top-genres-bar-track"},Spicetify.React.createElement("div",{className:`top-genres-bar${u===0?" peak":""}`,style:{width:`${f}%`}})),Spicetify.React.createElement("span",{className:"top-genres-pct"},Math.round(c.count/o*100),"%"))})))}var{React:WP}=Spicetify;function hn(e){return e===1?"rank-gold":e===2?"rank-silver":e===3?"rank-bronze":""}function bo(){return Spicetify.React.createElement("div",null,Array.from({length:5}).map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"top-list-row",style:{marginBottom:6}},Spicetify.React.createElement(rd,{size:20}),Spicetify.React.createElement(vt,{width:44,height:44}),Spicetify.React.createElement("div",{style:{flex:1}},Spicetify.React.createElement(vt,{width:"80%",height:11,style:{marginBottom:6}}),Spicetify.React.createElement(vt,{width:"55%",height:9})))))}function Ep({stats:e,loading:t,loadingByColumn:r,hiddenSections:i,onGenreClick:o,activeGenre:c}){let u=st(),f=u.columnOrder.filter(h=>!i.includes(h));if(f.length===0)return null;let g={"top-tracks":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-tracks",key:"top-tracks"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Most played"),Spicetify.React.createElement("h2",{className:"section-title"},"Tracks")),t||r?.tracks?Spicetify.React.createElement(bo,null):e?.topTracks.slice(0,u.itemsPerSection).map(h=>{let w=Je(h.albumArt);return Spicetify.React.createElement("div",{key:h.trackUri||`unknown-track-${h.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>It(h.trackUri),onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&It(h.trackUri)}},Spicetify.React.createElement("span",{className:`rank-number ${hn(h.rank)}`},h.rank),w?Spicetify.React.createElement("img",{src:w,alt:"",className:"track-art"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.trackName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.artistName)),!e?.isFreeTier||h.durationMs>0?Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",color:"rgba(var(--spice-rgb-text), 0.55)",flexShrink:0}},Spicetify.React.createElement("span",{style:{fontSize:11,fontVariantNumeric:"tabular-nums"}},Yu(h.durationMs))):null)})),"top-artists":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-artists",key:"top-artists"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Artists")),t||r?.artists?Spicetify.React.createElement(bo,null):e?.topArtists.slice(0,u.itemsPerSection).map(h=>{let w=h.genres?.[0],b=Je(h.imageUrl??void 0);return Spicetify.React.createElement("div",{key:h.artistUri||`unknown-artist-${h.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>It(h.artistUri),onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&It(h.artistUri)}},Spicetify.React.createElement("span",{className:`rank-number ${hn(h.rank)}`},h.rank),b?Spicetify.React.createElement("img",{src:b,alt:"",className:"track-art track-art--round"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.artistName),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},(!e?.isFreeTier||h.count>0)&&Spicetify.React.createElement("span",{style:{fontVariantNumeric:"tabular-nums"}},dt(h.count)," plays"),w&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("span",{style:{opacity:.4}},"\xB7"),Spicetify.React.createElement("span",{role:"button",tabIndex:0,onClick:S=>{S.stopPropagation(),o?.(w)},onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&(S.stopPropagation(),o?.(w))},style:{color:c===w?"var(--spice-button)":"rgba(var(--spice-rgb-text), 0.7)",cursor:"pointer"}},w)))))})),"top-albums":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-albums",key:"top-albums"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Albums")),t||r?.albums?Spicetify.React.createElement(bo,null):e?.topAlbums.slice(0,u.itemsPerSection).map(h=>{let w=Je(h.albumArt);return Spicetify.React.createElement("div",{key:h.albumUri||`unknown-album-${h.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>It(h.albumUri),onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&It(h.albumUri)}},Spicetify.React.createElement("span",{className:`rank-number ${hn(h.rank)}`},h.rank),w?Spicetify.React.createElement("img",{src:w,alt:"",className:"track-art"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.albumName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontVariantNumeric:"tabular-nums"}},h.artistName,(!e?.isFreeTier||h.count>0)&&Spicetify.React.createElement(Spicetify.React.Fragment,null," \xB7"," ",dt(h.count)," plays"))))}))};return Spicetify.React.createElement("div",{className:"top-lists-grid"},f.map(h=>g[h]?.()??null))}var Tp=`curl -fsSL ${dr}/install.sh | bash`,Pp=`irm ${dr}/install.ps1 | iex`,Ap=`LISTENING_STATS_PRERELEASE=1 curl -fsSL ${dr}/install.sh | bash`,Rp=`$env:LISTENING_STATS_PRERELEASE = "1"; irm ${dr}/install.ps1 | iex`;async function Cp(){try{let e=await fetch(`${dr}/CHANGELOG.md?t=${Date.now()}`,{cache:"no-store"});return e.ok?await e.text():null}catch{return null}}function Ip(e){let t=e.replace(/\r\n/g,`
`).split(`
`),r=[],i=!1;function o(){i&&(r.push("</p>"),i=!1)}function c(u){let f=nw(u);return f=f.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),f=f.replace(/`([^`]+)`/g,"<code>$1</code>"),f=f.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),f}for(let u of t){let g=u.trimEnd().trim();if(g===""){o();continue}let h=g.match(/^##+\s+(.*)$/);if(h){o(),r.push(`<h3>${c(h[1]??"")}</h3>`);continue}i?r.push("<br />"):(r.push("<p>"),i=!0),r.push(c(g))}return o(),r.join("")}function nw(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var{useState:wo,useEffect:So,useCallback:Np,useRef:aw}=Spicetify.React;async function iw(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select();let r=document.execCommand("copy");return document.body.removeChild(t),r}catch{return!1}}function _p({open:e,onClose:t,updateInfo:r,appVersion:i,receiveBetaUpdates:o,onReceiveBetaUpdatesChange:c}){let[u,f]=wo(null),[g,h]=wo(null),[w,b]=wo(null),S=aw(null),k=o?Ap:Tp,_=o?Rp:Pp;So(()=>{if(!e)return;let N=!1;return f(null),h(null),b(null),Cp().then(M=>{N||(M===null?h("Could not load changelog."):f(M))}).catch(()=>{N||h("Could not load changelog.")}),()=>{N=!0}},[e]),So(()=>()=>{S.current!==null&&window.clearTimeout(S.current)},[]),So(()=>{b(null),S.current!==null&&(window.clearTimeout(S.current),S.current=null)},[o]);let $=Np(()=>{Vu(24),t()},[t]),U=Np(async N=>{await iw(N==="bash"?k:_)?(S.current!==null&&window.clearTimeout(S.current),b(N),S.current=window.setTimeout(()=>{b(null),S.current=null},2500),Spicetify.showNotification(N==="bash"?"Copied (macOS / Linux).":"Copied (Windows).")):Spicetify.showNotification("Could not copy.",!0)},[k,_]),{createPortal:z}=Spicetify.ReactDOM;if(!e)return null;let W=u!==null?Ip(u.slice(0,12e4)):"",ee=r!=null&&r.remoteTag===null,D=r==null?"Could not compare versions.":ee?`No release metadata (this build is v${i}).`:r.updateAvailable?`Update available: ${r.remoteVersion} (you have ${r.localVersion}).`:`Up to date (${r.localVersion}).`;return z(Spicetify.React.createElement("div",{className:"settings-overlay update-overlay",onClick:N=>{N.target.classList.contains("settings-overlay")&&t()}},Spicetify.React.createElement("div",{className:"settings-modal update-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Updates"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:t,"aria-label":"Close",dangerouslySetInnerHTML:{__html:sn}})),Spicetify.React.createElement("p",{className:"update-modal-status"},D),r?.updateAvailable&&r.prerelease?Spicetify.React.createElement("p",{className:"update-modal-note"},"That release is a GitHub pre-release."):null,Spicetify.React.createElement("div",{className:"update-modal-actions update-modal-actions-top"},r?.updateAvailable?Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:$},"Remind me later"):null,Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:t},"Close")),Spicetify.React.createElement("div",{className:"settings-row update-modal-pref-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Prereleases"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Include prereleases when checking for updates.")),er?Spicetify.React.createElement(er,{value:o,onSelected:c}):Spicetify.React.createElement("input",{type:"checkbox",checked:o,onChange:N=>c(N.currentTarget.checked)})),Spicetify.React.createElement("p",{className:"update-modal-note update-modal-install-short"},o?"Commands install the newest GitHub release that includes the zip (may be a pre-release). Bash needs jq or python3.":"Quit Spotify, paste one command, then restart Spotify."),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"macOS / Linux"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{U("bash")}},w==="bash"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},k)),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"Windows"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{U("powershell")}},w==="powershell"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},_)),Spicetify.React.createElement("p",{className:"settings-about-hint update-modal-repo-hint"},Spicetify.React.createElement("a",{className:"settings-inline-link",href:ur,target:"_blank",rel:"noopener noreferrer"},"GitHub")," \xB7 ",Spicetify.React.createElement("a",{className:"settings-inline-link",href:`${ur}/releases`,target:"_blank",rel:"noopener noreferrer"},"Releases")),Spicetify.React.createElement("h3",{className:"update-modal-changelog-title"},"Changelog"),g?Spicetify.React.createElement("p",{className:"update-modal-changelog-error"},g):null,Spicetify.React.createElement("div",{className:"update-modal-changelog markdown-lite",dangerouslySetInnerHTML:{__html:W}}))),document.body)}at();Ba();var Dp="https://mytopspotify.io/spotify-top-songs.json",sw="https://mytopspotify.io/spotify-top-artists.json",xo={Accept:"application/json","User-Agent":"Mozilla/5.0 (compatible; ListeningStats/2.x; +https://github.com/Xndr2/listening-stats)"};function ow(e){if(!e?.trim())return"-";let t=e.replace(/[^\d]/g,"");if(!t)return e.trim();let r=Number(t);return Number.isFinite(r)?r>=1e6?`${(r/1e6).toFixed(1)}M listeners`:r>=1e3?`${Math.round(r/1e3)}K listeners`:`${r} listeners`:e.trim()}function Op(e,t){return`${e.trim().toLowerCase()}|${t.trim().toLowerCase()}`}async function Lp(){let e=new Map,t=new Map;try{let r=await fetch(Dp,{headers:xo});if(!r.ok)return{bySpotifyId:e,byTitleArtist:t};let o=(await r.json()).data??[];for(let c of o)c.image&&(c.spotifyId&&e.set(c.spotifyId,c.image),t.set(Op(c.name,c.artist),c.image))}catch{}return{bySpotifyId:e,byTitleArtist:t}}function Mp(e,t){return e.map(r=>{if(r.artUrl)return r;if(r.spotifyTrackId){let o=t.bySpotifyId.get(r.spotifyTrackId);if(o)return{...r,artUrl:o}}let i=t.byTitleArtist.get(Op(r.title,r.artist));return i?{...r,artUrl:i}:r})}async function $p(){let e=await fetch(Dp,{headers:xo});if(!e.ok)throw new Error(`mytop songs HTTP ${e.status}`);return((await e.json()).data??[]).slice(0,8).map((i,o)=>{let c=o+1;return{id:`mytop-t-${i.spotifyId??`mytop-t-${c}-${i.name}`}`,title:i.name,artist:i.artist,country:"GL",plays:"",delta:null,...i.spotifyId?{spotifyTrackId:i.spotifyId}:{},...i.image?{artUrl:i.image}:{}}})}async function Up(){let e=await fetch(sw,{headers:xo});if(!e.ok)throw new Error(`mytop artists HTTP ${e.status}`);return((await e.json()).data??[]).slice(0,8).map((i,o)=>({id:`mytop-a-${i.position??o+1}-${i.name}`,title:i.name,artist:"",country:"GL",plays:ow(i.listeners),delta:null,...i.image?{artUrl:i.image}:{}}))}var lw="https://api.stats.fm/api/v1",ko=10;function Qn(e){return e.toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g," ").trim()}function Fp(e){return e.split(",")[0]?.trim()??""}function Bp(e){return e?.trim()?`spotify:track:${e.trim()}`:null}function cw(e){return e?.trim()?`spotify:artist:${e.trim()}`:null}function uw(e){return e?.trim()?`spotify:album:${e.trim()}`:null}function dw(e){let t=Bp(e.spotifyTrackId);if(!t)return!1;let r=Spicetify.Player;return typeof r.playUri=="function"?(r.playUri(t),!0):(It(t),!0)}function Wp(e){e.spotifyTrackId&&dw(e)||ea(e,"track")}function ea(e,t){if(t==="track"){let i=Bp(e.spotifyTrackId);if(i){It(i);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(`${e.title} ${e.artist}`.trim())}`);return}if(t==="artist"){let i=cw(e.spotifyArtistId);if(i){It(i);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(e.title)}`);return}let r=uw(e.spotifyAlbumId);if(r){It(r);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(`${e.title} ${e.artist}`.trim())}`)}function Hp(e){return e.spotifyTrackId?"Play in Spotify":"Open in Spotify search"}async function pw(e){let t=await fetch(`${lw}/tracks/${e}`,{headers:{Accept:"application/json"}});if(!t.ok)return null;let r=await t.json();return((r.item??r).externalIds?.spotify??[])[0]??null}function fw(e,t,r){if(!e.length)return null;let i=Qn(t),o=Qn(Fp(r)),c=e.find(f=>Qn(f.name)===i&&f.artists.some(g=>{let h=Qn(g.name);return h===o||h.includes(o)||o.includes(h)}));if(c)return c.id;let u=e.find(f=>Qn(f.name)===i);return u?u.id:e[0]?.id??null}async function mw(e,t){let r=Fp(t),i=r?[`track:${e} artist:${r}`,`${e} ${r}`]:[e];for(let o of i){let c=await Zt(`https://api.spotify.com/v1/search?q=${encodeURIComponent(o)}&type=track&limit=8`);if(!c.ok)continue;let u=fw(c.data.tracks?.items??[],e,t);if(u)return u}return null}async function gw(e){if(e.spotifyTrackId)return e.spotifyTrackId;if(e.statsFmTrackId!=null){let t=await pw(e.statsFmTrackId);if(t)return t}return e.artist?.trim()?mw(e.title,e.artist):null}async function zp(e,t){let r=Math.min(t?.max??ko,e.length),i=e.map(o=>({...o}));for(let o=0;o<r;o++){let c=i[o];if(c.spotifyTrackId)continue;let u=await gw(c);u&&(i[o]={...c,spotifyTrackId:u})}return i}var hw="https://api.stats.fm/api/v1",vw=50,Eo={today:"today",week:"weeks"},yw=["today","week"];function ta(e){return yw.includes(e)}function To(e){return{ok:!1,status:503,message:`${e==="month"?"This month":e==="lifetime"?"All-time":e} charts are not available from stats.fm (only Today and This Week are supported).`}}function Po(e){if(e==null)return null;let t=String(e).toUpperCase();return t==="UP"||t.includes("UP")?"UP":t==="DOWN"||t.includes("DOWN")?"DOWN":t==="NEW"||t.includes("NEW")?"NEW":null}function Ao(e){return e==="UP"?1:e==="DOWN"?-1:e==="NEW"?3:null}function Ro(e){return e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(e)}function bw(e){if(e==null)return;let t=e>1e12?e:e*1e3,r=new Date(t).getFullYear(),i=new Date().getFullYear();if(!(!Number.isFinite(r)||r<1900||r>i+1))return r}function ww(e){let t=e.track.albums??[],r=o=>{if(o?.startsWith("http"))return o.includes("i.scdn.co"),o};for(let o of t){let c=r(o.image);if(c)return c}let i=e.track.artists[0];return r(i?.image)}function Co(e,t){let r=new URL(`${hw}/charts/top/${e}`);return r.searchParams.set("range",t),r.searchParams.set("limit",String(vw)),r.toString()}function Sw(e){let t=e.track.artists.map(c=>c.name).join(", "),r=ww(e),i=e.track.externalIds?.spotify?.[0],o=Po(e.indicator);return{id:`sfm-t-${e.position}-${e.track.name}`,title:e.track.name,artist:t,country:"GL",plays:Ro(e.streams),delta:Ao(o),indicator:o,statsFmTrackId:e.track.id,...i?{spotifyTrackId:i}:{},...r?{artUrl:r}:{},...e.track.durationMs!=null?{durationMs:e.track.durationMs}:{},...e.track.explicit?{explicit:!0}:{}}}function xw(e){let t=e.artist.image,r=Po(e.indicator),i=e.artist.genres?.slice(0,2),o=e.artist.externalIds?.spotify?.[0];return{id:`sfm-a-${e.position}-${e.artist.name}`,title:e.artist.name,artist:"",country:"GL",plays:Ro(e.streams),delta:Ao(r),indicator:r,...t?{artUrl:t}:{},...i?.length?{genres:i}:{},...o?{spotifyArtistId:o}:{}}}function kw(e){let t=e.album.image,r=Po(e.indicator),i=e.album.artists?.[0]?.name??"",o=bw(e.album.releaseDate),c=e.album.externalIds?.spotify?.[0];return{id:`sfm-al-${e.position}-${e.album.name}`,title:e.album.name,artist:i,country:"GL",plays:Ro(e.streams),delta:Ao(r),indicator:r,...t?{artUrl:t}:{},...o?{albumYear:o}:{},...c?{spotifyAlbumId:c}:{}}}async function Ew(e){let t=await fetch(Co("tracks",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(i=>Sw(i))}async function Tw(e){let t=await fetch(Co("artists",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(i=>xw(i))}async function Pw(e){let t=await fetch(Co("albums",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(i=>kw(i))}var Si={ok:!1,status:0,message:"Could not load world charts. Check your connection and retry."};async function Kp(e,t){if(!ta(t))return To(t);let r=Eo[t]??"today";try{let i=await Ew(r);if(i.length===0)throw new Error("empty");let o={bySpotifyId:new Map,byTitleArtist:new Map};try{o=await Lp()}catch{}let c=Mp(i,o),u=await zp(c,{max:ko});return u.length===0?Si:{ok:!0,data:u,source:"statsfm"}}catch{try{let i=await $p();if(i.length)return{ok:!0,data:i,source:"mytopspotify"}}catch{}return Si}}async function Gp(e,t){if(!ta(t))return To(t);let r=Eo[t]??"today";try{let i=await Tw(r);if(i.length===0)throw new Error("empty");return{ok:!0,data:i,source:"statsfm"}}catch{try{let i=await Up();if(i.length)return{ok:!0,data:i,source:"mytopspotify"}}catch{}return Si}}async function Vp(e,t){if(!ta(t))return To(t);let r=Eo[t]??"today";try{let i=await Pw(r);if(i.length===0)throw new Error("empty");return{ok:!0,data:i,source:"statsfm"}}catch{return Si}}var{useMemo:Aw}=Spicetify.React,xi=[{value:"today",label:"Today"},{value:"week",label:"This Week"}],ki=[{value:"track",label:"Tracks"},{value:"artist",label:"Artists"},{value:"album",label:"Albums"}];function Rw(e,t){let r=0;for(let i=0;i<e.length;i++)r=r*31+e.charCodeAt(i)>>>0;return{a:`oklch(0.70 0.14 ${r%360})`,b:`oklch(0.40 0.10 ${(r+60)%360})`,init:t.replace(/[^A-Za-z0-9]/g,"").slice(0,2).toUpperCase()}}function jp({value:e}){return e?Spicetify.React.createElement("span",{className:"world-chart-indicator","data-dir":e==="UP"?"up":e==="DOWN"?"down":"new","aria-label":e==="NEW"?"New entry":e==="UP"?"Up":"Down"},Spicetify.React.createElement("span",{className:"world-chart-indicator-glyph"},e==="NEW"?"\u25CF":e==="UP"?"\u25B2":"\u25BC"),e==="NEW"?Spicetify.React.createElement("span",null,"NEW"):null):null}function qp({src:e,alt:t,size:r=44,round:i,fallbackSeed:o,fallbackLabel:c}){let u=Aw(()=>e?null:Rw(o,c),[e,o,c]);return e?Spicetify.React.createElement("img",{src:e,alt:t,className:"track-art",loading:"lazy",style:{width:r,height:r,borderRadius:i?"50%":Math.max(4,Math.round(r/18)),flexShrink:0}}):Spicetify.React.createElement("div",{className:"track-art track-art--fallback",style:{width:r,height:r,borderRadius:i?"50%":Math.max(4,Math.round(r/18)),flexShrink:0,background:u?`linear-gradient(135deg, ${u.a}, ${u.b})`:void 0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:Math.max(11,r*.28),color:"rgba(255,255,255,0.92)"},"aria-hidden":!0},u?.init)}function Yp({value:e,onChange:t}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist","aria-label":"Time range","data-testid":"world-window-tabs"},xi.map(r=>Spicetify.React.createElement("button",{type:"button",key:r.value,className:`period-tab ${e===r.value?"active":""}`,role:"tab","aria-selected":e===r.value,onClick:()=>t(r.value)},r.label)))}function Xp({value:e,onChange:t}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist","aria-label":"Chart type","data-testid":"world-kind-tabs"},ki.map(r=>Spicetify.React.createElement("button",{type:"button",key:r.value,className:`period-tab ${e===r.value?"active":""}`,role:"tab","aria-selected":e===r.value,onClick:()=>t(r.value)},r.label)))}function Zp({item:e,size:t=28}){let r=Hp(e);return Spicetify.React.createElement(St,{label:r,placement:"top"},Spicetify.React.createElement("button",{type:"button",className:"world-chart-playbtn",style:{width:t,height:t},"aria-label":r,onClick:o=>{o.stopPropagation(),Wp(e)}},Spicetify.React.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor","aria-hidden":"true",role:"presentation"},Spicetify.React.createElement("path",{d:"M2.5 1.5L8 5L2.5 8.5Z"}))))}function Jp(e,t){if(t==="track")return{title:e.title,sub:e.artist,art:e.artUrl};if(t==="artist")return{title:e.title,sub:e.genres?.length?e.genres.slice(0,2).join(" \xB7 "):"Artist",art:e.artUrl};let r=e.albumYear?` \xB7 ${e.albumYear}`:"";return{title:e.title,sub:`${e.artist}${r}`,art:e.artUrl}}function Cw({item:e,rank:t,kind:r}){let i=Jp(e,r),o=t===1?152:112;return Spicetify.React.createElement("div",{className:"world-podium-cell","data-rank":t},Spicetify.React.createElement("div",{className:"world-podium-artwrap"},Spicetify.React.createElement("button",{type:"button",className:"world-podium-art-btn",onClick:()=>ea(e,r),"aria-label":`Open ${i.title}`},Spicetify.React.createElement(qp,{src:i.art,alt:i.title,size:o,round:r==="artist",fallbackSeed:i.title+i.sub,fallbackLabel:i.title})),r==="track"?Spicetify.React.createElement("span",{className:"world-podium-play"},Spicetify.React.createElement(Zp,{item:e,size:30})):null),Spicetify.React.createElement("div",{className:`world-podium-rank rank-number ${hn(t)}`},t),Spicetify.React.createElement("div",{className:"world-podium-title","data-testid":t===1?"world-podium-title":void 0},i.title),Spicetify.React.createElement("div",{className:"world-podium-sub"},i.sub),Spicetify.React.createElement("div",{className:"world-podium-stat"},Spicetify.React.createElement("span",null,e.plays),Spicetify.React.createElement(jp,{value:e.indicator})))}function Qp({items:e,kind:t}){if(e.length===0)return null;let r=[e[1]?{item:e[1],rank:2}:null,{item:e[0],rank:1},e[2]?{item:e[2],rank:3}:null];return Spicetify.React.createElement("div",{className:"world-podium","data-testid":"world-podium"},r.map((i,o)=>i?Spicetify.React.createElement(Cw,{key:i.item.id,item:i.item,rank:i.rank,kind:t}):Spicetify.React.createElement("div",{key:`empty-${o}`})))}function Iw({item:e,rank:t,kind:r}){let i=Jp(e,r);return Spicetify.React.createElement("div",{className:"top-list-row",role:"button",tabIndex:0,onClick:()=>ea(e,r),onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&ea(e,r)}},Spicetify.React.createElement("span",{className:`rank-number ${hn(t)}`},t),Spicetify.React.createElement(qp,{src:i.art,alt:i.title,size:44,round:r==="artist",fallbackSeed:i.title+i.sub,fallbackLabel:i.title}),Spicetify.React.createElement("div",{className:"world-chart-text"},Spicetify.React.createElement("div",{className:"world-chart-title"},i.title),Spicetify.React.createElement("div",{className:"world-chart-sub"},i.sub)),r==="track"?Spicetify.React.createElement(Zp,{item:e,size:24}):null,Spicetify.React.createElement("div",{className:"world-chart-stats"},Spicetify.React.createElement("span",null,e.plays),Spicetify.React.createElement(jp,{value:e.indicator})))}function ef({items:e,kind:t,startRank:r}){return e.length===0?null:Spicetify.React.createElement("div",{className:"world-ladder","data-testid":"world-ladder"},e.map((i,o)=>Spicetify.React.createElement(Iw,{key:i.id,item:i,rank:r+o,kind:t})))}function tf(){return Spicetify.React.createElement("div",{className:"world-stage-skeleton stats-page-content","aria-hidden":!0},Spicetify.React.createElement("section",{className:"section-card world-podium-card"},Spicetify.React.createElement("div",{className:"world-podium"},[112,152,112].map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"world-podium-cell"},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:e,height:e,borderRadius:8}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:e*.8,height:12,borderRadius:4,marginTop:10}}))))),Spicetify.React.createElement("section",{className:"section-card"},Spicetify.React.createElement("div",{className:"world-ladder"},Array.from({length:6}).map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"top-list-row",style:{pointerEvents:"none"}},Spicetify.React.createElement("span",{className:"rank-number",style:{color:"transparent"}},"0"),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:44,height:44,borderRadius:4,flexShrink:0}}),Spicetify.React.createElement("div",{className:"world-chart-text"},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"60%",height:11,borderRadius:4}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"40%",height:9,borderRadius:4,marginTop:6}})))))))}var{useState:Nr,useEffect:Nw,useCallback:_w}=Spicetify.React,Dw=new Set(xi.map(e=>e.value)),Ow=new Set(ki.map(e=>e.value)),rf="listening-stats:world-charts-kind",Ei=3,Lw=12,Mw=Ei+Lw;function $w(){let e=localStorage.getItem(ne.WORLD_CHARTS_WINDOW);return e&&Dw.has(e)&&ta(e)?e:"today"}function Uw(){let e=localStorage.getItem(rf);return e&&Ow.has(e)?e:"track"}function Fw(e,t,r){if(e==="statsfm"&&t==="statsfm"&&r==="statsfm")return"Global charts \xB7 stats.fm";let i=(o,c)=>o==="mytopspotify"?`${c} \xB7 mytopspotify.io (daily)`:`${c} \xB7 stats.fm`;return[i(e,"Tracks"),i(t,"Artists"),i(r,"Albums")].join(" \xB7 ")}function nf(){let[e,t]=Nr($w),[r,i]=Nr(Uw),[o,c]=Nr([]),[u,f]=Nr([]),[g,h]=Nr([]),[w,b]=Nr(!0),[S,k]=Nr(null),[_,$]=Nr("Global charts \xB7 stats.fm"),U=xi.find(Z=>Z.value===e)?.label??"Today",z=_w(async Z=>{b(!0),k(null);let[K,fe,ge]=await Promise.all([Kp("world",Z),Gp("world",Z),Vp("world",Z)]),V="statsfm",oe="statsfm",re="statsfm";K.ok?(c(K.data),V=K.source??"statsfm"):(k(zr(K.status,K.message)),c([])),fe.ok?(f(fe.data),oe=fe.source??"statsfm"):f([]),ge.ok?(h(ge.data),re=ge.source??"statsfm"):h([]),$(Fw(V,oe,re)),b(!1)},[]);Nw(()=>{z(e)},[e,z]);let W=Z=>{t(Z),localStorage.setItem(ne.WORLD_CHARTS_WINDOW,Z)},ee=()=>{z(e)},D=Z=>{i(Z),localStorage.setItem(rf,Z)},N=(r==="track"?o:r==="artist"?u:g).slice(0,Mw),M=N.slice(0,Ei),R=N.slice(Ei),E=ki.find(Z=>Z.value===r)?.label??"Tracks";return Spicetify.React.createElement("div",{className:"world-charts-page stats-page-content"},Spicetify.React.createElement("header",{className:"section-heading world-page-header"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("span",{className:"section-kicker","data-testid":"world-page-kicker"},"What the planet is playing"),Spicetify.React.createElement("h1",{className:"section-title"},"World")),Spicetify.React.createElement(Yp,{value:e,onChange:W})),w&&Spicetify.React.createElement(tf,null),!w&&S&&Spicetify.React.createElement(ln,{error:S,onRetry:ee,onOpenSettings:()=>{}}),!w&&!S&&Spicetify.React.createElement(Spicetify.React.Fragment,null,N.length===0?Spicetify.React.createElement("div",{className:"world-charts-empty"},Spicetify.React.createElement("div",{className:"world-charts-empty-title"},"Nothing charted here yet"),Spicetify.React.createElement("div",{className:"world-charts-empty-body"},U," ",E.toLowerCase()," charts came back empty. Try another chart type or time range.")):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("section",{className:"section-card world-podium-card","data-testid":"world-podium-card"},Spicetify.React.createElement("div",{className:"world-stage-header"},Spicetify.React.createElement("header",{className:"section-heading",style:{marginBottom:0}},Spicetify.React.createElement("span",{className:"section-kicker"},"Global podium \xB7 ",U),Spicetify.React.createElement("h2",{className:"section-title"},E)),Spicetify.React.createElement(Xp,{value:r,onChange:D})),Spicetify.React.createElement(Qp,{items:M,kind:r})),R.length>0?Spicetify.React.createElement("section",{className:"section-card","data-testid":"world-ladder-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Global top 15"),Spicetify.React.createElement("h2",{className:"section-title"},"Ranks 4\u201315")),Spicetify.React.createElement(ef,{items:R,kind:r,startRank:Ei+1})):null),Spicetify.React.createElement("div",{className:"world-charts-source"},_)))}var af="listening-stats:remote-announcement-cache",Bw=1800*1e3;function Ti(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Ww(e){let t=e.trim(),r=t.match(/^UPDATE\s*(.*)$/i);if(!r)return null;let i=r[1].trim(),o=i.indexOf("|");if(o>=0){let c=i.slice(0,o).trim(),u=i.slice(o+1).trim();return{dismissId:c||Ti(t),headline:u||"Notice from the Listening Stats maintainers."}}return{dismissId:Ti(t),headline:i||"Notice from the Listening Stats maintainers."}}function Hw(e){let t=e.replace(/^\uFEFF/,"").trim();if(!t)return null;let r=t.indexOf(`
`),i=(r===-1?t:t.slice(0,r)).trim(),o=r===-1?"":t.slice(r+1).trim(),c=Ww(i);if(c)return{dismissId:c.dismissId,title:c.headline,body:o.trim()||"Open the changelog in the app, or run the install script from Settings \u2192 About to update.",actionLabel:"Changelog",actionUrl:`${ur}/releases`,actionOpensChangelog:!0};if(i.startsWith("# ")){let u=i.slice(2).trim();return{dismissId:Ti(t),title:u,body:o}}return{dismissId:Ti(t),title:"Announcement",body:t}}async function sf(){let e=null;try{let t=sessionStorage.getItem(af);if(t){let r=JSON.parse(t);r&&typeof r.t=="number"&&typeof r.text=="string"&&Date.now()-r.t<Bw&&(e=r.text)}}catch{}if(e===null)try{let t=await fetch(`${dr}/ANNOUNCEMENT.md?t=${Date.now()}`,{cache:"no-store"});if(t.status===404)e="";else if(t.ok)e=await t.text();else return null;try{sessionStorage.setItem(af,JSON.stringify({t:Date.now(),text:e??""}))}catch{}}catch{return null}return e===null||e===""?null:Hw(e)}Rt();at();var zw={"2.6":{title:"v2.6 is here",body:"section streaming, share cards, world charts.",actionLabel:"What's new \u2192"}};function Kw(e){return zw[e]??null}function Gw(e){try{return localStorage.getItem(ne.DISMISSED_BANNER_VERSION)===e}catch{return!1}}function Vw(e){try{return localStorage.getItem(ne.DISMISSED_REMOTE_ANNOUNCEMENT_ID)===e}catch{return!1}}function of(e,t){if(t&&!Vw(t.dismissId))return{source:"remote",dismissKey:t.dismissId,title:t.title,body:t.body,actionLabel:t.actionLabel,actionUrl:t.actionUrl,actionOpensChangelog:t.actionOpensChangelog};let r=Kw(e);return r&&!Gw(e)?{source:"local",dismissKey:e,title:r.title,body:r.body,actionLabel:r.actionLabel,actionUrl:r.actionUrl}:null}var{useState:jw,useEffect:lf,useCallback:qw,useMemo:Yw}=Spicetify.React;function cf(e,t){let[r,i]=jw(null);lf(()=>{sf().then(i).catch(()=>{})},[]);let o=Yw(()=>of(e,r),[e,r]);lf(()=>{if(!o)return;let u=st();if(u.showAnnouncementBanner)return;let f=o.dismissKey,g=u.announcementBannerHiddenForDismissKey;f!==g&&(Fe("showAnnouncementBanner",!0),Fe("announcementBannerHiddenForDismissKey",""),window.dispatchEvent(new CustomEvent(ue.PREFS_CHANGED)),t())},[o,t]);let c=qw(()=>{o&&(Fe("showAnnouncementBanner",!1),Fe("announcementBannerHiddenForDismissKey",o.dismissKey),window.dispatchEvent(new CustomEvent(ue.PREFS_CHANGED)),t())},[o,t]);return{resolvedBanner:o,dismissBanner:c}}Rt();at();Er();var Xw=["January","February","March","April","May","June","July","August","September","October","November","December"];function No(e){return new Date(e.getFullYear(),e.getMonth()-1,1,0,0,0,0)}function Zw(e=new Date){let t=No(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}function Jw(e=new Date){let t=No(e);return`${Xw[t.getMonth()]} ${t.getFullYear()}`}function _o(e,t=new Date){let r=Zw(t),i=Jw(t);if(e==="statsfm")return{period:Yt.find(f=>f.id==="sfm-weeks")??Yt[0],monthKey:r,monthLabel:"Last 4 Weeks",exactMonth:!1};if(e==="lastfm")return{period:On.find(f=>f.id==="1month")??On[0],monthKey:r,monthLabel:"Last Month",exactMonth:!1};let o=No(t).getTime(),c=new Date(t.getFullYear(),t.getMonth(),1,0,0,0,0).getTime();return{period:{id:`recap-${r}`,label:i,getBoundaries:()=>({start:o,end:c})},monthKey:r,monthLabel:i,exactMonth:!0}}function uf(e){try{return localStorage.getItem(ne.RECAP_DISMISSED_MONTH)===e}catch{return!1}}function df(e){try{localStorage.setItem(ne.RECAP_DISMISSED_MONTH,e)}catch{}}function Io(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Qw(e,t,r){let i=Math.max(1,Math.round((r-t)/864e5));if(!e?.length)return{longestRun:0,daysInPeriod:i};let o=new Set(e.filter(g=>g.count>0&&g.date>=Io(t)&&g.date<=Io(r-1)).map(g=>g.date)),c=0,u=0,f=new Date(t);for(let g=0;g<i;g++)u=o.has(Io(f.getTime()))?u+1:0,u>c&&(c=u),f.setDate(f.getDate()+1);return{longestRun:c,daysInPeriod:i}}async function Do(e,t){let r=await e.calculateStats(t.period);if(r.totalPlays===0)return null;let{start:i,end:o}=t.period.getBoundaries(),{longestRun:c}=Qw(r.dailyPlayCounts,i,o);return{...r,streak:c}}function pf(e){let t=Math.floor(e.totalDuration/36e5),r=[];t>0&&r.push(t===1?"1 hour":`${t} hours`),r.push(e.totalPlays===1?"1 play":`${e.totalPlays.toLocaleString()} plays`);let i=e.topArtists[0]?.artistName;return i&&r.push(`mostly ${i}`),r.join(" \xB7 ")}var{useState:ff,useEffect:mf,useCallback:eS,useRef:tS}=Spicetify.React;function gf(e,t){let[r,i]=ff(null),[o,c]=ff(!1),u=tS(!1);mf(()=>{if(!e||!t||u.current)return;u.current=!0;let g=_o(Ae.getActiveId()??"local");if(uf(g.monthKey))return;let h=Ae.getActive();h&&Do(h,g).then(w=>{w&&i({source:g,stats:w})}).catch(()=>{})},[e,t]),mf(()=>{let g=()=>{let h=_o(Ae.getActiveId()??"local"),w=Ae.getActive();w&&Do(w,h).then(b=>{b?(i({source:h,stats:b}),c(!0)):Spicetify.showNotification("No plays recorded for last month yet.")}).catch(()=>Spicetify.showNotification("Could not load recap stats.",!0))};return window.addEventListener(ue.OPEN_RECAP,g),()=>window.removeEventListener(ue.OPEN_RECAP,g)},[]);let f=eS(()=>{r&&df(r.source.monthKey),i(null)},[r]);return{recapOffer:r,showRecap:o,setShowRecap:c,dismissOffer:f}}Ba();function Oo(){return{overview:"loading",lists:"loading",activity:"loading",consistency:"loading"}}function Lo(){return{overview:"resolved",lists:"resolved",activity:"resolved",consistency:"resolved"}}var Mo={topTracks:[],topArtists:[],topAlbums:[],topGenres:[],totalPlays:0,totalDuration:0,recentPlays:[],hourlyDistribution:new Array(24).fill(0),peakHour:0,skipRate:0,uniqueTrackCount:0,uniqueArtistCount:0};function hf(e){switch(e){case 1:return"overview";case 2:return"lists";case 3:return"activity"}}Xt();var{useState:ra,useCallback:rS,useRef:nS}=Spicetify.React;function vf(e,t){return e==="local"?`local:${t}:${Qr()}`:`${e}:${t}`}function yf(){let[e,t]=ra(null),[r,i]=ra(Oo()),[o,c]=ra({tracks:!0,artists:!0,albums:!0}),[u,f]=ra({}),[g,h]=ra(""),w=nS(0),b=rS(async(S,k=!1)=>{let _=++w.current,$=Ae.getActiveId()??"local",U=vf($,S.id);h(`${$}:${S.id}`),k||(i(Oo()),c({tracks:!0,artists:!0,albums:!0}),t(null)),f({});try{if(!k){let W=ze.get(U);if(W){t(W),i(Lo()),c({tracks:!1,artists:!1,albums:!1});return}}let z=Ae.getActive();if(!z)throw new Error("No active provider");if(z.calculateStatsProgressive){let W=!1,ee=await z.calculateStatsProgressive(S,(D,N,M)=>{if(_!==w.current)return;let R=hf(N);"topTracks"in D&&c(E=>({...E,tracks:!1})),"topArtists"in D&&c(E=>({...E,artists:!1})),"topAlbums"in D&&c(E=>({...E,albums:!1})),("dailyPlayCounts"in D||"listeningDays"in D)&&i(E=>({...E,consistency:"resolved"})),M?(W=!0,f(E=>({...E,[R]:M})),i(E=>({...E,[R]:"error"}))):(t(E=>E?{...E,...D}:{...Mo,...D}),i(E=>({...E,[R]:"resolved"})))});if(_!==w.current)return;t(D=>({...D??Mo,...ee})),c({tracks:!1,artists:!1,albums:!1}),i(D=>({overview:D.overview==="error"?"error":"resolved",lists:D.lists==="error"?"error":"resolved",activity:D.activity==="error"?"error":"resolved",consistency:D.consistency==="error"?"error":"resolved"})),W||ze.set(U,ee)}else{let W=await z.calculateStats(S);if(_!==w.current)return;ze.set(U,W),t(W),i(Lo()),c({tracks:!1,artists:!1,albums:!1})}}catch(z){if(_!==w.current)return;let W=z instanceof en?z.appError:zr(0,z instanceof Error?z.message:"Failed to load stats");f({overview:W,lists:W,activity:W}),i({overview:"error",lists:"error",activity:"error",consistency:"error"})}},[]);return{stats:e,sectionSlots:r,listColumnLoading:o,sectionErrors:u,activeRequestLabel:g,loadStats:b}}function aS(){return!localStorage.getItem(ne.PROVIDER_WIZARD_SEEN)}function iS(){localStorage.setItem(ne.PROVIDER_WIZARD_SEEN,"1")}function bf(){return Ae.getActive()?.getSupportedPeriods()??Gt}var{useState:Mt,useEffect:vn,useCallback:mr,useMemo:wf}=Spicetify.React;function sS(){let[e,t]=Mt(Gt),[r,i]=Mt(Gt[0]),{stats:o,sectionSlots:c,listColumnLoading:u,sectionErrors:f,activeRequestLabel:g,loadStats:h}=yf(),[w,b]=Mt(!1),[S,k]=Mt(!1),[_,$]=Mt(0),[U,z]=Mt(()=>localStorage.getItem(ne.ACTIVE_PROVIDER)??"local"),[W,ee]=Mt(aS),[D,N]=Mt("tracking"),[M,R]=Mt(()=>hd("2.1.1")),[E,Z]=Mt(()=>st().activePage),[K,fe]=Mt(!1),[ge,V]=Mt(null),[oe,re]=Mt(!1),ve=wf(()=>[...e,ps],[e]),Re=wf(()=>E==="world"?ps:r,[E,r]);vn(()=>{Vl().catch(me=>{console.error("[listening-stats] Provider Init failed: ",me)}).then(()=>{let me=bf();t(me);let We=Fn(Ae.getActiveId()??"local",me);i(We),k(!0)})},[]),vn(()=>{!S||E==="world"||h(r)},[r,S,h,E]),vn(()=>{let me=()=>{let We=Ae.getActiveId()??"local",Pt=bf();t(Pt);let ct=Fn(We,Pt);i(ct),z(We),ze.invalidate(),Qs()};return window.addEventListener(ue.PROVIDER_CHANGED,me),()=>window.removeEventListener(ue.PROVIDER_CHANGED,me)},[]),vn(()=>{let me=()=>{E!=="world"&&(ze.invalidate(),h(r,!0))};return window.addEventListener(ue.PLAY_RECORDED,me),window.addEventListener(ue.RANK_MODE_CHANGED,me),()=>{window.removeEventListener(ue.PLAY_RECORDED,me),window.removeEventListener(ue.RANK_MODE_CHANGED,me)}},[r,h,E]),vn(()=>{let me=()=>$(We=>We+1);return window.addEventListener(ue.PREFS_CHANGED,me),()=>window.removeEventListener(ue.PREFS_CHANGED,me)},[]);let te=mr(async()=>{let me=st(),We=await Gu("2.1.1",me.receiveBetaUpdates);return V(We),We},[]);vn(()=>{if(!S)return;let me=!1;return(async()=>{let We=await te();me||We.updateAvailable&&!ju()&&re(!0)})(),()=>{me=!0}},[S,te]);let Pe=mr(async()=>{b(!1),await te(),re(!0)},[te]),T=Ae.getActive()?.getProviderInfo().name??"Local",ae=Ae.getActive()?.getProviderInfo().capabilities??null,Oe=ae??{hasActivityData:!1,hasConsistencyData:!1,hasGenreData:!1,hasStreakData:!1,hasSkipRate:!1,tier:"n/a"},Me=new Set(ai(Oe).map(me=>me.id)),Le=st(),et=ae?.hasStreakData||U==="statsfm",tt=me=>Le.hiddenSections.includes(me),J=mr(()=>{$(me=>me+1)},[]),{resolvedBanner:ye,dismissBanner:Ke}=cf("2.1.1",J),{recapOffer:$e,showRecap:rt,setShowRecap:Q,dismissOffer:Be}=gf(S,o),he=mr(me=>{Fe("receiveBetaUpdates",me),window.dispatchEvent(new CustomEvent(ue.PREFS_CHANGED)),J(),te()},[J,te]),F=mr(me=>{if(me.id===ds){fe(!1),Z("world"),Fe("activePage","world");return}Z("dashboard"),Fe("activePage","dashboard"),i(me),jl(Ae.getActiveId()??"local",me.id),window.dispatchEvent(new CustomEvent(ue.DASHBOARD_PERIOD_CHANGED,{detail:{periodId:me.id}}))},[]),Y=mr(async()=>{if(Ae.getActiveId()==="statsfm"){let{statsfmProvider:me}=await Promise.resolve().then(()=>(rn(),zl));await me.init(),window.dispatchEvent(new CustomEvent(ue.STATSFM_PROFILE_REFRESHED))}await h(r)},[r,h]),_e=mr(()=>{iS(),ee(!1)},[]),ot=mr((me="tracking")=>{N(me),b(!0)},[]),qt=mr(()=>{b(!1),R(!0)},[]),Ue=me=>c[me]==="loading"||c[me]==="pending",Nt=me=>{switch(me){case"overview":return Ue("overview")?Spicetify.React.createElement(mi,{loading:!0,activePeriod:r}):f.overview?Spicetify.React.createElement(ln,{error:f.overview,onRetry:()=>h(r),onOpenSettings:()=>ot("providers")}):o?Spicetify.React.createElement(mi,{stats:o,activePeriod:r}):null;case"top-genres":return Ue("lists")||!o||!ae?.hasGenreData||o.topGenres.length===0?null:Spicetify.React.createElement(kp,{topGenres:o.topGenres,onGenreClick:oi,activeGenre:Le.activeGenre});case"top-lists":{let We=Ue("lists");return f.lists?Spicetify.React.createElement(ln,{error:f.lists,onRetry:()=>h(r),onOpenSettings:()=>ot("providers")}):!We&&!o?null:Spicetify.React.createElement(Ep,{stats:o??null,loading:We,loadingByColumn:u,hiddenSections:Le.hiddenSections,onGenreClick:oi,activeGenre:Le.activeGenre})}case"activity":return!ae||qu(ae)==="hidden"?null:f.activity?Spicetify.React.createElement(ln,{error:f.activity,onRetry:()=>h(r),onOpenSettings:()=>ot("providers")}):Ue("activity")?Spicetify.React.createElement(Ys,{loading:!0,hourlyDistribution:[],peakHour:0,weekdayDistribution:[],peakWeekday:0,showStreak:!1}):o?Spicetify.React.createElement(Ys,{hourlyDistribution:o.hourlyDistribution,peakHour:o.peakHour,weekdayDistribution:o.weekdayDistribution??Array(7).fill(0),peakWeekday:o.peakWeekday??0,dailyPlayCounts:o.dailyPlayCounts,streak:o.streak,showStreak:et}):null;case"consistency":return c.consistency==="loading"||c.consistency==="pending"?Spicetify.React.createElement(Zs,{loading:!0,activePeriod:r,activeProviderId:U,totalPlays:0,totalDuration:0}):o?Spicetify.React.createElement(Zs,{totalPlays:o.totalPlays,totalDuration:o.totalDuration,listeningDays:o.listeningDays,dailyPlayCounts:o.dailyPlayCounts,streak:o.streak,activePeriod:r,activeProviderId:U}):null;case"recently-played":return Ue("overview")?Spicetify.React.createElement(so,{loading:!0}):o?Spicetify.React.createElement(so,{recentPlays:o.recentPlays}):null;default:return null}},lt=()=>{let me=c.overview==="resolved"||c.overview==="error",We=c.lists==="resolved"||c.lists==="error",Pt=Object.values(f).every(ft=>ft==null);if(me&&We&&Pt&&o&&o.totalPlays===0&&o.topTracks.length===0)return Spicetify.React.createElement(Js,{onOpenSettings:()=>ot()});let qe=Le.sectionOrder.filter(ft=>Me.has(ft)&&!tt(ft)),ir=Object.entries(c).filter(([,ft])=>ft==="loading"||ft==="pending").map(([ft])=>ft),gr=ir.length>0;return Spicetify.React.createElement("div",{className:"stats-page-content"},gr&&Spicetify.React.createElement("div",{className:"loading-status-banner",role:"status","aria-live":"polite"},Spicetify.React.createElement("span",{className:"loading-status-dot"}),Spicetify.React.createElement("span",null,"Loading ",g," - waiting on ",ir.join(", "))),qe.map(ft=>{let Vr=Nt(ft);return Vr?Spicetify.React.createElement("div",{key:ft,"data-section-id":ft},Vr):null}))},je=Le.showAnnouncementBanner?ye:null,_t=()=>E==="world"?Spicetify.React.createElement(nf,null):lt();return Spicetify.React.createElement("div",{className:"stats-page","data-version":"2.1.1"},W?Spicetify.React.createElement("div",{className:"stats-page-scroll"},Spicetify.React.createElement(Ad,{onComplete:_e})):Spicetify.React.createElement("div",{className:"stats-page-scroll"},Spicetify.React.createElement("div",{className:"stats-page-sticky"},Spicetify.React.createElement(md,{activeGenre:Le.activeGenre,onClear:Qs}),Spicetify.React.createElement(ao,{providerName:T,activeProviderId:U,onSettingsClick:()=>ot(),onShareClick:o&&E!=="world"?()=>fe(!0):void 0,periods:ve,activePeriod:Re,onPeriodChange:F})),je&&Spicetify.React.createElement(Xs,{title:je.title,body:je.body,titleOnly:je.actionOpensChangelog===!0,actionLabel:je.actionLabel,actionUrl:je.actionUrl,onActionClick:je.actionOpensChangelog?()=>{Pe()}:void 0,onDismiss:Ke}),$e&&E!=="world"&&Spicetify.React.createElement(Xs,{title:$e.source.exactMonth?`Your ${$e.source.monthLabel} recap is ready`:"Your monthly recap is ready",body:pf($e.stats),actionLabel:"View recap \u2192",onActionClick:()=>Q(!0),onDismiss:Be}),_t(),Spicetify.React.createElement(od,{version:"2.1.1",onCheckForUpdates:()=>{Pe()}})),w&&Spicetify.React.createElement(xp,{onClose:()=>b(!1),onRefresh:Y,onPrefsChanged:J,onRestartTour:qt,onOpenUpdates:()=>{Pe()},onReceiveBetaUpdatesChanged:()=>{te()},initialTab:D,appVersion:"2.1.1",announcementDismissKey:ye?.dismissKey??null}),Spicetify.React.createElement(Pd,{active:M&&!W,version:"2.1.1",steps:eo({activePage:E,hasShare:!!o,sectionIds:Le.sectionOrder.filter(me=>Me.has(me)&&!tt(me))}),onComplete:()=>R(!1)}),K&&o&&Spicetify.React.createElement(ho,{stats:o,activePeriod:r,onClose:()=>fe(!1)}),rt&&$e&&Spicetify.React.createElement(ho,{stats:$e.stats,activePeriod:$e.source.period,onClose:()=>Q(!1),initialVariant:"recap",variantIds:["recap"],title:$e.source.exactMonth?`${$e.source.monthLabel} Recap`:"Monthly Recap"}),Spicetify.React.createElement(_p,{open:oe,onClose:()=>re(!1),updateInfo:ge,appVersion:"2.1.1",receiveBetaUpdates:Le.receiveBetaUpdates,onReceiveBetaUpdatesChange:he}))}var Sf=sS;var{Component:oS}=Spicetify.React,yn=class extends oS{constructor(){super(...arguments);this.state={error:null,componentStack:"",copied:!1};this.handleCopy=async()=>{let r=this.buildReport();try{await navigator.clipboard.writeText(r),this.setState({copied:!0})}catch{try{let i=document.createElement("textarea");i.value=r,i.style.position="fixed",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),this.setState({copied:!0})}catch{}}};this.handleRetry=()=>{this.setState({error:null,componentStack:"",copied:!1})}}static getDerivedStateFromError(r){return{error:r,copied:!1}}componentDidCatch(r,i){this.setState({componentStack:i?.componentStack??""}),console.error("[listening-stats] Render error:",r,i?.componentStack??"")}buildReport(){let{error:r,componentStack:i}=this.state;return["Listening Stats error report",`Version: ${this.props.appVersion??"unknown"}`,`Spotify UA: ${typeof navigator<"u"?navigator.userAgent:"unknown"}`,`Error: ${r?.message??"unknown"}`,r?.stack?`Stack:
${r.stack}`:"",i?`Component stack:
${i}`:""].filter(Boolean).join(`
`)}render(){let{error:r,copied:i}=this.state;return r?this.props.silent?null:Spicetify.React.createElement("div",{role:"alert",style:{margin:24,padding:20,borderRadius:8,background:"var(--spice-card, rgba(255,255,255,0.06))",color:"var(--spice-text, #fff)",maxWidth:640}},Spicetify.React.createElement("h2",{style:{marginTop:0,fontSize:18}},"Listening Stats hit an error"),Spicetify.React.createElement("p",{style:{fontSize:14,opacity:.85}},"The rest of Spotify is unaffected. Copy the details below and attach them to a GitHub issue so this can be fixed."),Spicetify.React.createElement("pre",{style:{fontSize:12,whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:180,overflow:"auto",padding:10,borderRadius:6,background:"rgba(0,0,0,0.35)"}},r.message),Spicetify.React.createElement("div",{style:{display:"flex",gap:8}},Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:this.handleCopy},i?"Copied":"Copy error details"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:this.handleRetry},"Try again"))):this.props.children??null}};var xf=`:root {
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
`;function Pi(){let e=document.getElementById("listening-stats-styles");e&&e.remove();let t=document.createElement("style");t.id="listening-stats-styles",t.textContent=xf,document.head.appendChild(t)}at();var cS="https://api.stats.fm/api/v1",$o=100,uS=4e3;function dS(e){let t=e.match(/^spotify:track:(.+)$/i);return t?t[1]:null}function pS(e){return{"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[e]??null}async function kf(e,t,r){let i=dS(t);if(!i||!e.trim())return null;for(let o=0;o<uS;o+=$o){let c=new URL(`${cS}/users/${encodeURIComponent(e.trim())}/top/tracks`);c.searchParams.set("range",r),c.searchParams.set("limit",String($o)),c.searchParams.set("offset",String(o));let u;try{u=await fetch(c.toString(),{headers:{Accept:"application/json"}})}catch{return null}if(!u.ok)return null;let f=await u.json(),g=f.items??f.item??[];if(!Array.isArray(g)||g.length===0)return null;for(let h of g)if(h.track?.externalIds?.spotify?.[0]===i)return h.streams;if(g.length<$o)return null}return null}async function Ef(e,t){return kf(e,t,"lifetime")}async function Tf(e,t,r){let i=pS(r);return i?kf(e,t,i):null}function Pf(){try{let e=localStorage.getItem(ne.STATSFM_CONFIG);if(!e)return null;let t=JSON.parse(e);return typeof t.username=="string"?t.username:null}catch{return null}}Rt();Er();var{React:$t}=Spicetify;function fS(e){return new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric"})}function Af({count:e,variant:t,firstPlayedAt:r,periodStreams:i,periodLabel:o,showFirstListen:c=!1}){if(t==="off"||e<1&&!c)return null;let u="No plays in your tracked history for this track yet (skips excluded). Count updates after a qualifying listen.";if(c&&e<1){let b=(S,k,_)=>$t.createElement("div",{className:S,title:_},k);return t==="bubble"?b("play-count-bubble",[$t.createElement("div",{key:"i",className:"play-count-bubble-icon"},"\u25B6"),$t.createElement("span",{key:"b",className:"play-count-badge play-count-badge--new"},"NEW")],u):t==="minimal"?b("play-count-minimal","New",u):b("play-count-pill play-count-pill--first",[$t.createElement("span",{key:"d",className:"play-count-dot"}),$t.createElement("span",{key:"t"},"New play")],u)}let g=`Played ${e} ${e===1?"time":"times"}`;r!=null&&(g+=` \xB7 first on ${fS(r)}`),i!=null&&o&&(g+=` \xB7 ${i} in ${o} (stats.fm top tracks)`);let h=e===1?"1 play":`${e} plays`,w=i!=null&&o?$t.createElement("span",{style:{marginLeft:6,fontSize:"0.85em",fontWeight:500,color:"rgba(var(--spice-rgb-text), 0.55)"}},`\xB7 ${i} ${o}`):null;if(t==="bubble")return $t.createElement("div",{className:"play-count-bubble",title:g},$t.createElement("div",{className:"play-count-bubble-icon"},"\u25B6"),$t.createElement("span",{className:"play-count-badge"},e),i!=null&&o?$t.createElement("span",{style:{marginLeft:4,fontSize:10,color:"rgba(var(--spice-rgb-text), 0.55)"}},`${i}`):null);if(t==="minimal"){let b=i!=null&&o?` (${i} ${o})`:"";return $t.createElement("div",{className:"play-count-minimal",title:g},`\xD7${e}${b}`)}return $t.createElement("div",{className:"play-count-pill",title:g},$t.createElement("span",{className:"play-count-dot"}),h,w)}var{React:Fo}=Spicetify,{useState:Uo,useEffect:bn,useCallback:mS,useRef:gS}=Fo;function hS(){let[e,t]=Uo(null),[r,i]=Uo(()=>Spicetify.Player.data?.item?.uri??null),[o,c]=Uo(0),u=gS(0),f=mS(async g=>{let h=++u.current,w=b=>{u.current===h&&t(b)};try{let b=st(),S=await Ye.playEvents.where("trackUri").equals(g).filter($=>$.type!=="skip").sortBy("startedAt"),k=S.length,_=S[0]?.startedAt??null;if(Ae.getActiveId()==="statsfm"){let $=Pf();if($){let U=await Ef($,g),z=null,W=null;if(b.playCountShowPeriodStreams){let N=Ae.getActive()?.getSupportedPeriods()??Yt;if(N.length>0){let M=Fn("statsfm",N);W=M.label,z=await Tf($,g,M.id)}}let ee=U??k,D=U!=null?null:_;w({count:ee,firstPlayedAt:D,periodStreams:z,periodLabel:W});return}}w({count:k,firstPlayedAt:_,periodStreams:void 0,periodLabel:void 0})}catch{w(null)}},[]);return bn(()=>{r?f(r):(u.current++,t(null))},[r,f,o]),bn(()=>{let g=()=>{let h=Spicetify.Player.data?.item?.uri??null;i(h)};return Spicetify.Player.addEventListener("songchange",g),()=>Spicetify.Player.removeEventListener("songchange",g)},[]),bn(()=>{let g=()=>{r&&f(r)};return window.addEventListener(ue.PLAY_RECORDED,g),()=>window.removeEventListener(ue.PLAY_RECORDED,g)},[r,f]),bn(()=>{let g=()=>c(h=>h+1);return window.addEventListener(ue.PROVIDER_CHANGED,g),()=>window.removeEventListener(ue.PROVIDER_CHANGED,g)},[]),bn(()=>{let g=()=>c(h=>h+1);return window.addEventListener(ue.DASHBOARD_PERIOD_CHANGED,g),()=>window.removeEventListener(ue.DASHBOARD_PERIOD_CHANGED,g)},[]),bn(()=>{let g=()=>c(h=>h+1);return window.addEventListener(ue.PREFS_CHANGED,g),()=>window.removeEventListener(ue.PREFS_CHANGED,g)},[]),e}function Rf(){let e=hS(),t=st();if(t.playCountVariant==="off"||!e)return null;let r=t.playCountShowPeriodStreams&&e.count<1;return e.count<1&&!r?null:Fo.createElement("div",{className:"play-count-widget-anchor"},Fo.createElement(Af,{count:e.count,variant:t.playCountVariant,firstPlayedAt:e.firstPlayedAt,periodStreams:e.periodStreams??void 0,periodLabel:e.periodLabel??void 0,showFirstListen:r}))}var Cf="listening-stats-widget-root",vS=[".main-nowPlayingWidget-nowPlaying",".main-nowPlayingBar-left",'[data-testid="now-playing-widget"]'];function yS(){for(let e of vS){let t=document.querySelector(e);if(t)return t}return null}function bS(e){let t=()=>{if(e.isConnected&&e.parentElement!==document.body)return;let i=yS();i&&e.parentElement!==i&&i.appendChild(e)};t(),new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),setInterval(t,2e3)}function If(){if(document.getElementById(Cf))return;Pi();let e=document.createElement("div");e.id=Cf,e.style.display="contents",document.body.appendChild(e),bS(e);let t=Spicetify.React.createElement(yn,{silent:!0},Spicetify.React.createElement(Rf)),r=Spicetify.ReactDOM;typeof r.createRoot=="function"?r.createRoot(e).render(t):r.render?.(t,e)}var{React:Nf}=Spicetify;function wS(){return Pi(),If(),Nf.createElement(yn,{appVersion:"2.1.1"},Nf.createElement(Sf))}function SS(){}return tg(xS);})();
var { render, unmount } = ListeningStatsApp;
