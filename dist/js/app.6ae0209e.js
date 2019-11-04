(function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("vue-router"),require("vue"));else if("function"===typeof define&&define.amd)define(["vue-router","vue"],e);else{var n="object"===typeof exports?e(require("vue-router"),require("vue")):e(t["vue-router"],t["vue"]);for(var r in n)("object"===typeof exports?exports:t)[r]=n[r]}})(window,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="56d7")}({"0244":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"04cf":function(t,e,n){var r=n("4a89"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"08c1":function(t,e,n){"use strict";var r,o,i,a,c=n("e6a1"),u=n("b808"),s=n("a9f2"),f=n("a274"),l=n("569f"),p=n("ab4c"),v=n("9184"),d=n("8115"),h=n("88b8"),b=n("1aa7"),m=n("1ad4").set,y=n("a24c")(),g=n("cc20"),_=n("73c3"),x=n("4b9e"),w=n("1c08"),j="Promise",O=u.TypeError,E=u.process,S=E&&E.versions,P=S&&S.v8||"",k=u[j],C="process"==f(E),M=function(){},T=o=g.f,R=!!function(){try{var t=k.resolve(1),e=(t.constructor={})[n("b67f")("species")]=function(t){t(M,M)};return(C||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof e&&0!==P.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(r){}}(),N=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},U=function(t,e){if(!t._n){t._n=!0;var n=t._c;y((function(){var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,c=o?e.ok:e.fail,u=e.resolve,s=e.reject,f=e.domain;try{c?(o||(2==t._h&&F(t),t._h=1),!0===c?n=r:(f&&f.enter(),n=c(r),f&&(f.exit(),a=!0)),n===e.promise?s(O("Promise-chain cycle")):(i=N(n))?i.call(n,u,s):u(n)):s(r)}catch(l){f&&!a&&f.exit(),s(l)}};while(n.length>i)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)}))}},A=function(t){m.call(u,(function(){var e,n,r,o=t._v,i=I(t);if(i&&(e=_((function(){C?E.emit("unhandledRejection",o,t):(n=u.onunhandledrejection)?n({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=C||I(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){m.call(u,(function(){var e;C?E.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})}))},L=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),U(e,!0))},$=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw O("Promise can't be resolved itself");(e=N(t))?y((function(){var r={_w:n,_d:!1};try{e.call(t,s($,r,1),s(L,r,1))}catch(o){L.call(r,o)}})):(n._v=t,n._s=1,U(n,!1))}catch(r){L.call({_w:n,_d:!1},r)}}};R||(k=function(t){d(this,k,j,"_h"),v(t),r.call(this);try{t(s($,this,1),s(L,this,1))}catch(e){L.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("9faf")(k.prototype,{then:function(t,e){var n=T(b(this,k));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=C?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&U(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s($,t,1),this.reject=s(L,t,1)},g.f=T=function(t){return t===k||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!R,{Promise:k}),n("aab6")(k,j),n("0ec0")(j),a=n("ca38")[j],l(l.S+l.F*!R,j,{reject:function(t){var e=T(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(c||!R),j,{resolve:function(t){return w(c&&this===a?k:this,t)}}),l(l.S+l.F*!(R&&n("2299")((function(t){k.all(t)["catch"](M)}))),j,{all:function(t){var e=this,n=T(e),r=n.resolve,o=n.reject,i=_((function(){var n=[],i=0,a=1;h(t,!1,(function(t){var c=i++,u=!1;n.push(void 0),a++,e.resolve(t).then((function(t){u||(u=!0,n[c]=t,--a||r(n))}),o)})),--a||r(n)}));return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=T(e),r=n.reject,o=_((function(){h(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return o.e&&r(o.v),n.promise}})},"0ec0":function(t,e,n){"use strict";var r=n("b808"),o=n("e4e1"),i=n("45e2"),a=n("b67f")("species");t.exports=function(t){var e=r[t];i&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},"0f4a":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},1024:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"h3[data-v-379548a4]{margin:40px 0 0}ul[data-v-379548a4]{list-style-type:none;padding:0}li[data-v-379548a4]{display:inline-block;margin:0 10px}a[data-v-379548a4]{color:#42b983}",""])},"14c6":function(t,e,n){"use strict";var r=n("3bb1"),o=n("b5cb"),i=n("a638"),a=n("58b9");t.exports=n("fa2d")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},"1aa7":function(t,e,n){var r=n("27b2"),o=n("9184"),i=n("b67f")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},"1ad4":function(t,e,n){var r,o,i,a=n("a9f2"),c=n("ef26"),u=n("d8db"),s=n("781f"),f=n("b808"),l=f.process,p=f.setImmediate,v=f.clearImmediate,d=f.MessageChannel,h=f.Dispatch,b=0,m={},y="onreadystatechange",g=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},_=function(t){g.call(t.data)};p&&v||(p=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return m[++b]=function(){c("function"==typeof t?t:Function(t),e)},r(b),b},v=function(t){delete m[t]},"process"==n("71fa")(l)?r=function(t){l.nextTick(a(g,t,1))}:h&&h.now?r=function(t){h.now(a(g,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=_,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r=y in s("script")?function(t){u.appendChild(s("script"))[y]=function(){u.removeChild(this),g.call(t)}}:function(t){setTimeout(a(g,t,1),0)}),t.exports={set:p,clear:v}},"1c08":function(t,e,n){var r=n("27b2"),o=n("ab4c"),i=n("cc20");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),a=n.resolve;return a(e),n.promise}},"1d27":function(t,e,n){var r=n("27b2");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){var i=t["return"];throw void 0!==i&&r(i.call(t)),a}}},"1d73":function(t,e,n){t.exports=n("312a")("native-function-to-string",Function.toString)},"1f51":function(t,e,n){var r=n("b808"),o=n("a0a8"),i=n("0f4a"),a=n("c0f4")("src"),c=n("1d73"),u="toString",s=(""+c).split(u);n("ca38").inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(u&&(i(n,a)||o(n,a,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,u,(function(){return"function"==typeof this&&this[a]||c.call(this)}))},2299:function(t,e,n){var r=n("b67f")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(a){}return n}},2350:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"===typeof btoa){var i=r(o),a=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function r(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"===typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"27b2":function(t,e,n){var r=n("ab4c");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"312a":function(t,e,n){var r=n("ca38"),o=n("b808"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("e6a1")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"33e3":function(t,e,n){var r,o,i;(function(n,a){o=[e],r=a,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})(0,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(o,!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var i={Vue:null,appOptions:null,template:null};function a(t){if("object"!==o(t))throw new Error("single-spa-vue requires a configuration object");var e=n({},i,{},t);if(!e.Vue)throw new Error("single-spa-vuejs must be passed opts.Vue");if(!e.appOptions)throw new Error("single-spa-vuejs must be passed opts.appOptions");var r={};return{bootstrap:c.bind(null,e,r),mount:u.bind(null,e,r),unmount:f.bind(null,e,r),update:s.bind(null,e,r)}}function c(t){return t.loadRootComponent?t.loadRootComponent().then((function(e){return t.rootComponent=e})):Promise.resolve()}function u(t,e,r){return Promise.resolve().then((function(){var o=n({},t.appOptions);if(r.domElement&&!o.el&&(o.el=r.domElement),!o.el){var i="single-spa-application:".concat(r.name);o.el="#".concat(i.replace(":","\\:")," .single-spa-container");var a=document.getElementById(i);if(a||(a=document.createElement("div"),a.id=i,document.body.appendChild(a)),!a.querySelector(".single-spa-container")){var c=document.createElement("div");c.className="single-spa-container",a.appendChild(c)}e.domEl=a}o.render||o.template||!t.rootComponent||(o.render=function(e){return e(t.rootComponent)}),o.data||(o.data={}),o.data=n({},o.data,{},r),e.instance=new t.Vue(o),e.instance.bind&&(e.instance=e.instance.bind(e.instance))}))}function s(t,e,r){return Promise.resolve().then((function(){var o=n({},t.appOptions.data||{},{},r);for(var i in o)e.instance[i]=o[i]}))}function f(t,e){return Promise.resolve().then((function(){e.instance.$destroy(),e.instance.$el.innerHTML="",delete e.instance,e.domEl&&(e.domEl.innerHTML="",delete e.domEl)}))}}))},"3bb1":function(t,e,n){var r=n("b67f")("unscopables"),o=Array.prototype;void 0==o[r]&&n("a0a8")(o,r,{}),t.exports=function(t){o[r][t]=!0}},4052:function(t,e,n){var r=n("4a89"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"45e2":function(t,e,n){t.exports=!n("b629")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},4842:function(t,e,n){var r=n("569f");r(r.S+r.F,"Object",{assign:n("a402")})},"499e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],c=i[1],u=i[2],s=i[3],f={id:t+":"+o,css:c,media:u,sourceMap:s};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(e),n.d(e,"default",(function(){return d}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,s=!1,f=function(){},l=null,p="data-vue-ssr-id",v="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,n,o){s=n,l=o||{};var a=r(t,e);return h(a),function(e){for(var n=[],o=0;o<a.length;o++){var c=a[o],u=i[c.id];u.refs--,n.push(u)}e?(a=r(t,e),h(a)):a=[];for(o=0;o<n.length;o++){u=n[o];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(v){var o=u++;r=c||(c=b()),e=g.bind(null,r,o,!1),n=g.bind(null,r,o,!0)}else r=b(),e=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function _(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute(p,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"49c1":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"4a89":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"4b9e":function(t,e,n){var r=n("b808"),o=r.navigator;t.exports=o&&o.userAgent||""},"4cf4":function(t,e,n){var r=n("0244");t.exports=function(t){return Object(r(t))}},"569f":function(t,e,n){var r=n("b808"),o=n("ca38"),i=n("a0a8"),a=n("1f51"),c=n("a9f2"),u="prototype",s=function(t,e,n){var f,l,p,v,d=t&s.F,h=t&s.G,b=t&s.S,m=t&s.P,y=t&s.B,g=h?r:b?r[e]||(r[e]={}):(r[e]||{})[u],_=h?o:o[e]||(o[e]={}),x=_[u]||(_[u]={});for(f in h&&(n=e),n)l=!d&&g&&void 0!==g[f],p=(l?g:n)[f],v=y&&l?c(p,r):m&&"function"==typeof p?c(Function.call,p):p,g&&a(g,f,p,t&s.U),_[f]!=p&&i(_,f,v),m&&x[f]!=p&&(x[f]=p)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");function r(t,e=1){if("string"!==typeof t||0===t.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!==typeof e||e<=0||!Number.isInteger(e))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let r;try{if(r=window.System.resolve(t),!r)throw Error()}catch(i){throw Error("systemjs-webpack-interop: There is no such module '"+t+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=o(r,e)}function o(t,e){const n=new URL(t),r=new URL(t).pathname;let o=0,i=r.length;while(o!==e&&i>=0){const t=r[--i];"/"===t&&o++}if(o!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+o+") in the URL path "+fullUrl);return n.pathname=n.pathname.slice(0,i+1),n.href}r("app1");var i=n("8bbf"),a=n.n(i),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[t._v("这个是App1")])},u=[];n("7ab7");function s(t,e,n,r,o,i,a,c){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}var f={},l=s(f,c,u,!1,null,"2c878394",null),p=l.exports,v=n("6389"),d=n.n(v),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("router-link",{attrs:{to:"/app2/about"}},[t._v("App2's about page")])],1)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},_=g,x=(n("ccd1"),s(_,m,y,!1,null,"379548a4",null)),w=x.exports,j={name:"home",components:{HelloWorld:w}},O=j,E=s(O,h,b,!1,null,null,null),S=E.exports,P=new d.a({mode:"history",base:"/",routes:[{path:"/app1",name:"home",component:S}]}),k=n("33e3"),C=n.n(k);n.d(e,"bootstrap",(function(){return T})),n.d(e,"mount",(function(){return R})),n.d(e,"unmount",(function(){return N})),a.a.config.productionTip=!1;var M=C()({Vue:a.a,appOptions:{render:function(t){return t(p)},router:P}}),T=M.bootstrap,R=M.mount,N=M.unmount},"58b9":function(t,e,n){var r=n("d43f"),o=n("0244");t.exports=function(t){return r(o(t))}},6389:function(e,n){e.exports=t},"696b":function(t,e){e.f=Object.getOwnPropertySymbols},"71fa":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"73c3":function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"781f":function(t,e,n){var r=n("ab4c"),o=n("b808").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"7ab7":function(t,e,n){"use strict";var r=n("abe0"),o=n.n(r);o.a},8115:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"88b8":function(t,e,n){var r=n("a9f2"),o=n("1d27"),i=n("f26d"),a=n("27b2"),c=n("04cf"),u=n("b36f"),s={},f={};e=t.exports=function(t,e,n,l,p){var v,d,h,b,m=p?function(){return t}:u(t),y=r(n,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=c(t.length);v>g;g++)if(b=e?y(a(d=t[g])[0],d[1]):y(t[g]),b===s||b===f)return b}else for(h=m.call(t);!(d=h.next()).done;)if(b=o(h,y,d.value,e),b===s||b===f)return b};e.BREAK=s,e.RETURN=f},"8bbf":function(t,n){t.exports=e},9184:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"9ed1":function(t,e,n){var r=n("f6d7"),o=n("49c1");t.exports=Object.keys||function(t){return r(t,o)}},"9faf":function(t,e,n){var r=n("1f51");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},a0a8:function(t,e,n){var r=n("e4e1"),o=n("dcc3");t.exports=n("45e2")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},a24c:function(t,e,n){var r=n("b808"),o=n("1ad4").set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,u="process"==n("71fa")(a);t.exports=function(){var t,e,n,s=function(){var r,o;u&&(r=a.domain)&&r.exit();while(t){o=t.fn,t=t.next;try{o()}catch(i){throw t?n():e=void 0,i}}e=void 0,r&&r.enter()};if(u)n=function(){a.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},a274:function(t,e,n){var r=n("71fa"),o=n("b67f")("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},a402:function(t,e,n){"use strict";var r=n("45e2"),o=n("9ed1"),i=n("696b"),a=n("bf41"),c=n("4cf4"),u=n("d43f"),s=Object.assign;t.exports=!s||n("b629")((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r}))?function(t,e){var n=c(t),s=arguments.length,f=1,l=i.f,p=a.f;while(s>f){var v,d=u(arguments[f++]),h=l?o(d).concat(l(d)):o(d),b=h.length,m=0;while(b>m)v=h[m++],r&&!p.call(d,v)||(n[v]=d[v])}return n}:s},a638:function(t,e){t.exports={}},a6c8:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".no[data-v-2c878394]{color:#0ff}.app[data-v-2c878394]{color:#fff;background-color:#8a2be2}",""])},a9f2:function(t,e,n){var r=n("9184");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},aab6:function(t,e,n){var r=n("e4e1").f,o=n("0f4a"),i=n("b67f")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},ab4c:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},abe0:function(t,e,n){var r=n("a6c8");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("54dfd31b",r,!0,{sourceMap:!1,shadowMode:!1})},b36f:function(t,e,n){var r=n("a274"),o=n("b67f")("iterator"),i=n("a638");t.exports=n("ca38").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},b5cb:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},b629:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},b67f:function(t,e,n){var r=n("312a")("wks"),o=n("c0f4"),i=n("b808").Symbol,a="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};c.store=r},b808:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},b938:function(t,e,n){var r=n("ab4c");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},be5a:function(t,e,n){var r=n("312a")("keys"),o=n("c0f4");t.exports=function(t){return r[t]||(r[t]=o(t))}},bf41:function(t,e){e.f={}.propertyIsEnumerable},c0f4:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},c339:function(t,e,n){var r=n("0f4a"),o=n("4cf4"),i=n("be5a")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},ca38:function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},cc1d:function(t,e,n){var r=n("58b9"),o=n("04cf"),i=n("4052");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){while(s>f)if(c=u[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},cc20:function(t,e,n){"use strict";var r=n("9184");function o(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},ccd1:function(t,e,n){"use strict";var r=n("e34d"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d43f:function(t,e,n){var r=n("71fa");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},d8db:function(t,e,n){var r=n("b808").document;t.exports=r&&r.documentElement},d9fc:function(t,e,n){"use strict";var r=n("569f"),o=n("ca38"),i=n("b808"),a=n("1aa7"),c=n("1c08");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then((function(){return n}))}:t,n?function(n){return c(e,t()).then((function(){throw n}))}:t)}})},dcc3:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},e34d:function(t,e,n){var r=n("1024");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("382c2729",r,!0,{sourceMap:!1,shadowMode:!1})},e4e1:function(t,e,n){var r=n("27b2"),o=n("e830"),i=n("b938"),a=Object.defineProperty;e.f=n("45e2")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e523:function(t,e,n){var r=n("e4e1"),o=n("27b2"),i=n("9ed1");t.exports=n("45e2")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),c=a.length,u=0;while(c>u)r.f(t,n=a[u++],e[n]);return t}},e6a1:function(t,e){t.exports=!1},e830:function(t,e,n){t.exports=!n("45e2")&&!n("b629")((function(){return 7!=Object.defineProperty(n("781f")("div"),"a",{get:function(){return 7}}).a}))},ed0f:function(t,e,n){var r=n("27b2"),o=n("e523"),i=n("49c1"),a=n("be5a")("IE_PROTO"),c=function(){},u="prototype",s=function(){var t,e=n("781f")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("d8db").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),s=t.F;while(r--)delete s[u][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[u]=r(t),n=new c,c[u]=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},eec7:function(t,e,n){"use strict";var r=n("ed0f"),o=n("dcc3"),i=n("aab6"),a={};n("a0a8")(a,n("b67f")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},ef26:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},f26d:function(t,e,n){var r=n("a638"),o=n("b67f")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},f6d7:function(t,e,n){var r=n("0f4a"),o=n("58b9"),i=n("cc1d")(!1),a=n("be5a")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);while(e.length>u)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},fa2d:function(t,e,n){"use strict";var r=n("e6a1"),o=n("569f"),i=n("1f51"),a=n("a0a8"),c=n("a638"),u=n("eec7"),s=n("aab6"),f=n("c339"),l=n("b67f")("iterator"),p=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",h="values",b=function(){return this};t.exports=function(t,e,n,m,y,g,_){u(n,e,m);var x,w,j,O=function(t){if(!p&&t in k)return k[t];switch(t){case d:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",S=y==h,P=!1,k=t.prototype,C=k[l]||k[v]||y&&k[y],M=C||O(y),T=y?S?O("entries"):M:void 0,R="Array"==e&&k.entries||C;if(R&&(j=f(R.call(new t)),j!==Object.prototype&&j.next&&(s(j,E,!0),r||"function"==typeof j[l]||a(j,l,b))),S&&C&&C.name!==h&&(P=!0,M=function(){return C.call(this)}),r&&!_||!p&&!P&&k[l]||a(k,l,M),c[e]=M,c[E]=b,y)if(x={values:S?M:O(h),keys:g?M:O(d),entries:T},_)for(w in x)w in k||i(k,w,x[w]);else o(o.P+o.F*(p||P),e,x);return x}}})}));
//# sourceMappingURL=app.6ae0209e.js.map