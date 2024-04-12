import{c as Xe,g as qe}from"./main-k_BGQtBi.js";function Ue(G,Q){for(var y=0;y<Q.length;y++){const T=Q[y];if(typeof T!="string"&&!Array.isArray(T)){for(const _ in T)if(_!=="default"&&!(_ in G)){const h=Object.getOwnPropertyDescriptor(T,_);h&&Object.defineProperty(G,_,h.get?h:{enumerable:!0,get:()=>T[_]})}}}return Object.freeze(Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}))}var de={exports:{}};/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */(function(G,Q){(function(y){var T=y.setTimeout,_=y.clearTimeout,h=y.XMLHttpRequest,ue=y.XDomainRequest,ce=y.ActiveXObject,K=y.EventSource,I=y.document,Ae=y.Promise,Z=y.fetch,le=y.Response,J=y.TextDecoder,ve=y.TextEncoder,ee=y.AbortController;if(typeof window<"u"&&typeof I<"u"&&!("readyState"in I)&&I.body==null&&(I.readyState="loading",window.addEventListener("load",function(e){I.readyState="complete"},!1)),h==null&&ce!=null&&(h=function(){return new ce("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),ee==null){var xe=Z;Z=function(e,r){var n=r.signal;return xe(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var o=t.body.getReader();return n._reader=o,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return o}}}})},ee=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function he(){this.bitsNeeded=0,this.codePoint=0}he.prototype.decode=function(e){function r(d,u,i){if(i===1)return d>=128>>u&&d<<u<=2047;if(i===2)return d>=2048>>u&&d<<u<=55295||d>=57344>>u&&d<<u<=65535;if(i===3)return d>=65536>>u&&d<<u<=1114111;throw new Error}function n(d,u){if(d===6*1)return u>>6>15?3:u>31?2:1;if(d===6*2)return u>15?3:2;if(d===6*3)return 3;throw new Error}for(var t=65533,o="",a=this.bitsNeeded,s=this.codePoint,c=0;c<e.length;c+=1){var f=e[c];a!==0&&(f<128||f>191||!r(s<<6|f&63,a-6,n(a,s)))&&(a=0,s=t,o+=String.fromCharCode(s)),a===0?(f>=0&&f<=127?(a=0,s=f):f>=192&&f<=223?(a=6*1,s=f&31):f>=224&&f<=239?(a=6*2,s=f&15):f>=240&&f<=247?(a=6*3,s=f&7):(a=0,s=t),a!==0&&!r(s,a,n(a,s))&&(a=0,s=t)):(a-=6,s=s<<6|f&63),a===0&&(s<=65535?o+=String.fromCharCode(s):(o+=String.fromCharCode(55296+(s-65535-1>>10)),o+=String.fromCharCode(56320+(s-65535-1&1023))))}return this.bitsNeeded=a,this.codePoint=s,o};var De=function(){try{return new J().decode(new ve().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(J==null||ve==null||!De())&&(J=he);var R=function(){};function j(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=R,this.onload=R,this.onerror=R,this.onreadystatechange=R,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=R}j.prototype.open=function(e,r){this._abort(!0);var n=this,t=this._xhr,o=1,a=0;this._abort=function(i){n._sendTimeout!==0&&(_(n._sendTimeout),n._sendTimeout=0),(o===1||o===2||o===3)&&(o=4,t.onload=R,t.onerror=R,t.onabort=R,t.onprogress=R,t.onreadystatechange=R,t.abort(),a!==0&&(_(a),a=0),i||(n.readyState=4,n.onabort(null),n.onreadystatechange())),o=0};var s=function(){if(o===1){var i=0,l="",D=void 0;if("contentType"in t)i=200,l="OK",D=t.contentType;else try{i=t.status,l=t.statusText,D=t.getResponseHeader("Content-Type")}catch{i=0,l="",D=void 0}i!==0&&(o=2,n.readyState=2,n.status=i,n.statusText=l,n._contentType=D,n.onreadystatechange())}},c=function(){if(s(),o===2||o===3){o=3;var i="";try{i=t.responseText}catch{}n.readyState=3,n.responseText=i,n.onprogress()}},f=function(i,l){if((l==null||l.preventDefault==null)&&(l={preventDefault:R}),c(),o===1||o===2||o===3){if(o=4,a!==0&&(_(a),a=0),n.readyState=4,i==="load")n.onload(l);else if(i==="error")n.onerror(l);else if(i==="abort")n.onabort(l);else throw new TypeError;n.onreadystatechange()}},d=function(i){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&f(t.responseText===""?"error":"load",i):t.readyState===3?"onprogress"in t||c():t.readyState===2&&s())},u=function(){a=T(function(){u()},500),t.readyState===3&&c()};"onload"in t&&(t.onload=function(i){f("load",i)}),"onerror"in t&&(t.onerror=function(i){f("error",i)}),"onabort"in t&&(t.onabort=function(i){f("abort",i)}),"onprogress"in t&&(t.onprogress=c),"onreadystatechange"in t&&(t.onreadystatechange=function(i){d(i)}),("contentType"in t||!("ontimeout"in h.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(a=T(function(){u()},0))},j.prototype.abort=function(){this._abort(!1)},j.prototype.getResponseHeader=function(e){return this._contentType},j.prototype.setRequestHeader=function(e,r){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,r)},j.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},j.prototype.send=function(){if((!("ontimeout"in h.prototype)||!("sendAsBinary"in h.prototype)&&!("mozAnon"in h.prototype))&&I!=null&&I.readyState!=null&&I.readyState!=="complete"){var e=this;e._sendTimeout=T(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(n){throw n}};function pe(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function ye(e){for(var r=Object.create(null),n=e.split(`\r
`),t=0;t<n.length;t+=1){var o=n[t],a=o.split(": "),s=a.shift(),c=a.join(": ");r[pe(s)]=c}this._map=r}ye.prototype.get=function(e){return this._map[pe(e)]},h!=null&&h.HEADERS_RECEIVED==null&&(h.HEADERS_RECEIVED=2);function ge(){}ge.prototype.open=function(e,r,n,t,o,a,s){e.open("GET",o);var c=0;e.onprogress=function(){var d=e.responseText,u=d.slice(c);c+=u.length,n(u)},e.onerror=function(d){d.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===h.HEADERS_RECEIVED){var d=e.status,u=e.statusText,i=e.getResponseHeader("Content-Type"),l=e.getAllResponseHeaders();r(d,u,i,new ye(l))}},e.withCredentials=a;for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&e.setRequestHeader(f,s[f]);return e.send(),e};function Ee(e){this._headers=e}Ee.prototype.get=function(e){return this._headers.get(e)};function we(){}we.prototype.open=function(e,r,n,t,o,a,s){var c=null,f=new ee,d=f.signal,u=new J;return Z(o,{headers:s,credentials:a?"include":"same-origin",signal:d,cache:"no-store"}).then(function(i){return c=i.body.getReader(),r(i.status,i.statusText,i.headers.get("Content-Type"),new Ee(i.headers)),new Ae(function(l,D){var $=function(){c.read().then(function(C){if(C.done)l(void 0);else{var E=u.decode(C.value,{stream:!0});n(E),$()}}).catch(function(C){D(C)})};$()})}).catch(function(i){if(i.name!=="AbortError")return i}).then(function(i){t(i)}),{abort:function(){c!=null&&c.cancel(),f.abort()}}};function V(){this._listeners=Object.create(null)}function me(e){T(function(){throw e},0)}V.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var n=r.length,t=0;t<n;t+=1){var o=r[t];try{typeof o.handleEvent=="function"?o.handleEvent(e):o.call(this,e)}catch(a){me(a)}}},V.prototype.addEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];t==null&&(t=[],n[e]=t);for(var o=!1,a=0;a<t.length;a+=1)t[a]===r&&(o=!0);o||t.push(r)},V.prototype.removeEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];if(t!=null){for(var o=[],a=0;a<t.length;a+=1)t[a]!==r&&o.push(t[a]);o.length===0?delete n[e]:n[e]=o}};function P(e){this.type=e,this.target=void 0}function Te(e,r){P.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}Te.prototype=Object.create(P.prototype);function te(e,r){P.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}te.prototype=Object.create(P.prototype);function Ce(e,r){P.call(this,e),this.error=r.error}Ce.prototype=Object.create(P.prototype);var re=-1,H=0,X=1,W=2,ne=-1,L=0,ae=1,Se=2,Fe=3,Oe=/^text\/event\-stream(;.*)?$/i,Ne=1e3,Ie=18e6,oe=function(e,r){var n=e==null?r:parseInt(e,10);return n!==n&&(n=r),ie(n)},ie=function(e){return Math.min(Math.max(e,Ne),Ie)},q=function(e,r,n){try{typeof r=="function"&&r.call(e,n)}catch(t){me(t)}};function A(e,r){V.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,je(this,e,r)}function He(){return h!=null&&"withCredentials"in h.prototype||ue==null?new h:new ue}var Le=Z!=null&&le!=null&&"body"in le.prototype;function je(e,r,n){r=String(r);var t=!!n.withCredentials,o=n.lastEventIdQueryParameterName||"lastEventId",a=ie(1e3),s=oe(n.heartbeatTimeout,45e3),c="",f=a,d=!1,u=0,i=n.headers||{},l=n.Transport,D=Le&&l==null?void 0:new j(l!=null?new l:He()),$=l!=null&&typeof l!="string"?new l:D==null?new we:new ge,C=void 0,E=0,x=re,U="",Y="",F="",k="",w=L,se=0,M=0,Me=function(p,v,S,b){if(x===H)if(p===200&&S!=null&&Oe.test(S)){x=X,d=Date.now(),f=a,e.readyState=X;var m=new te("open",{status:p,statusText:v,headers:b});e.dispatchEvent(m),q(e,e.onopen,m)}else{var g="";p!==200?(v&&(v=v.replace(/\s+/g," ")),g="EventSource's response has a status "+p+" "+v+" that is not 200. Aborting the connection."):g="EventSource's response has a Content-Type specifying an unsupported type: "+(S==null?"-":S.replace(/\s+/g," "))+". Aborting the connection.",fe();var m=new te("error",{status:p,statusText:v,headers:b});e.dispatchEvent(m),q(e,e.onerror,m),console.error(g)}},Pe=function(p){if(x===X){for(var v=-1,S=0;S<p.length;S+=1){var b=p.charCodeAt(S);(b===10||b===13)&&(v=S)}var m=(v!==-1?k:"")+p.slice(0,v+1);k=(v===-1?k:"")+p.slice(v+1),p!==""&&(d=Date.now(),u+=p.length);for(var g=0;g<m.length;g+=1){var b=m.charCodeAt(g);if(w===ne&&b===10)w=L;else if(w===ne&&(w=L),b===13||b===10){if(w!==L){w===ae&&(M=g+1);var O=m.slice(se,M-1),N=m.slice(M+(M<g&&m.charCodeAt(M)===32?1:0),g);O==="data"?(U+=`
`,U+=N):O==="id"?Y=N:O==="event"?F=N:O==="retry"?(a=oe(N,a),f=a):O==="heartbeatTimeout"&&(s=oe(N,s),E!==0&&(_(E),E=T(function(){z()},s)))}if(w===L){if(U!==""){c=Y,F===""&&(F="message");var B=new Te(F,{data:U.slice(1),lastEventId:Y});if(e.dispatchEvent(B),F==="open"?q(e,e.onopen,B):F==="message"?q(e,e.onmessage,B):F==="error"&&q(e,e.onerror,B),x===W)return}U="",F=""}w=b===13?ne:L}else w===L&&(se=g,w=ae),w===ae?b===58&&(M=g+1,w=Se):w===Se&&(w=Fe)}}},_e=function(p){if(x===X||x===H){x=re,E!==0&&(_(E),E=0),E=T(function(){z()},f),f=ie(Math.min(a*16,f*2)),e.readyState=H;var v=new Ce("error",{error:p});e.dispatchEvent(v),q(e,e.onerror,v),p!=null&&console.error(p)}},fe=function(){x=W,C!=null&&(C.abort(),C=void 0),E!==0&&(_(E),E=0),e.readyState=W},z=function(){if(E=0,x!==re){if(!d&&C!=null)_e(new Error("No activity within "+s+" milliseconds. "+(x===H?"No response received.":u+" chars received.")+" Reconnecting.")),C!=null&&(C.abort(),C=void 0);else{var p=Math.max((d||Date.now())+s-Date.now(),1);d=!1,E=T(function(){z()},p)}return}d=!1,u=0,E=T(function(){z()},s),x=H,U="",F="",Y=c,k="",se=0,M=0,w=L;var v=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&c!==""){var S=r.indexOf("?");v=S===-1?r:r.slice(0,S+1)+r.slice(S+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(N,B){return B===o?"":N}),v+=(r.indexOf("?")===-1?"?":"&")+o+"="+encodeURIComponent(c)}var b=e.withCredentials,m={};m.Accept="text/event-stream";var g=e.headers;if(g!=null)for(var O in g)Object.prototype.hasOwnProperty.call(g,O)&&(m[O]=g[O]);try{C=$.open(D,Me,Pe,_e,v,b,m)}catch(N){throw fe(),N}};e.url=r,e.readyState=H,e.withCredentials=t,e.headers=i,e._close=fe,z()}A.prototype=Object.create(V.prototype),A.prototype.CONNECTING=H,A.prototype.OPEN=X,A.prototype.CLOSED=W,A.prototype.close=function(){this._close()},A.CONNECTING=H,A.OPEN=X,A.CLOSED=W,A.prototype.withCredentials=void 0;var be=K;h!=null&&(K==null||!("withCredentials"in K.prototype))&&(be=A),function(e){{var r=e(Q);r!==void 0&&(G.exports=r)}}(function(e){e.EventSourcePolyfill=A,e.NativeEventSource=K,e.EventSource=be})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:Xe:globalThis)})(de,de.exports);var Be=de.exports,Re=Be.EventSourcePolyfill;const Ge=qe(Re),We=Ue({__proto__:null,default:Ge},[Re]);export{We as b};
