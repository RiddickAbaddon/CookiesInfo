!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(3)},function(t,e,n){(function(t){function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var c,a=t[Symbol.iterator]();!(i=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function i(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=new WeakSet,c=new WeakSet,a=new WeakSet,l=new WeakSet,s=new WeakSet,f=function t(e){var n=e.cssPrefix,o=void 0===n?"ci":n,f=e.title,p=void 0===f?"Polityka Cookies":f,m=e.description,y=void 0===m?"Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.":m,v=e.acceptText,b=void 0===v?"Akceptuje":v,g=e.acceptExpired,w=void 0===g?30:g,k=e.removeDelay,R=void 0===k?1e3:k,x=e.showDelay,B=void 0===x?100:x,S=e.infoButton,T=void 0===S?{}:S,j=e.templateFn,A=void 0===j?null:j,M=e.debugMode,E=void 0!==M&&M;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s.add(this),l.add(this),a.add(this),c.add(this),r.add(this),"true"===function(t){if(""!==document.cookie)for(var e=document.cookie.split(/; */),n=0;n<e.length;n++){var i=e[n].split("="),o=i[0],r=i[1];if(o===decodeURIComponent(t))return decodeURIComponent(r)}return!1}("cookiesAccepted")){if(!E)return;console.log("DebugMode: Cookies are accepted")}var N=T.text,C=T.link,O=T.blank;this.config={cssPrefix:o,title:p,description:y,acceptText:b,acceptExpired:w,removeDelay:R,showDelay:B,infoButton:{text:N||"Dowiedz się więcej",link:C||null,blank:O||!1},templateFn:A,debugMode:E},this.wrapperRef=null,this.acceptButtonRef=null,this.infoButtonRef=null,this.handleAcceptClick=i(this,r,u).bind(this),this.createElement=i(this,l,h).bind(this),i(this,c,d).call(this)},u=function(){var t=this;!function(t,e,n){if(navigator.cookieEnabled){var i=encodeURIComponent(t),o=encodeURIComponent(e),r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var c="".concat(i,"=").concat(o,"; expires=").concat(r.toGMTString());document.cookie=c}}("cookiesAccepted","true",this.config.acceptExpired),this.wrapperRef.classList.remove("".concat(this.config.cssPrefix,"-show")),this.acceptButtonRef.removeEventListener("click",this.handleAcceptClick),setTimeout((function(){t.config.debugMode?console.log("DebugMode: DOM element would be removed now"):t.wrapperRef.remove()}),this.config.removeDelay)},d=function(){var t=this;if(this.config.templateFn)try{this.config.templateFn({title:this.config.title,description:this.config.description,acceptText:this.config.acceptText,infoButton:{text:this.config.infoButton.text,link:this.config.infoButton.link,blank:this.config.infoButton.blank}},{wrapper:function(e){return t.wrapperRef=i(t,l,h).call(t,e),t.wrapperRef},acceptButton:function(e){return t.acceptButtonRef=i(t,l,h).call(t,e),t.acceptButtonRef},infoButton:function(e){return t.infoButtonRef=i(t,l,h).call(t,e),t.infoButtonRef}})}catch(t){console.error("Invalid template function")}i(this,a,p).call(this)},p=function(){var t=this;this.acceptButtonRef=this.acceptButtonRef?this.acceptButtonRef:i(this,l,h).call(this,{element:"button",className:"accept-button",children:this.config.acceptText}),this.acceptButtonRef.addEventListener("click",this.handleAcceptClick),this.config.infoButton.text&&this.config.infoButton.link&&(this.infoButtonRef=this.infoButtonRef?this.infoButtonRef:i(this,l,h).call(this,{element:"a",className:"info-button",children:this.config.infoButton.text,attributes:{href:this.config.infoButton.link,target:this.config.infoButton.blank?"_blank":"_self"}})),this.wrapperRef=this.wrapperRef?this.wrapperRef:i(this,l,h).call(this,{element:"section",className:"wrapper",children:[{element:"div",className:"container",children:[{element:"div",className:"information",children:[{element:"h1",className:"title",children:this.config.title},{element:"p",className:"description",children:this.config.description}]},{element:"div",className:"actions",children:[this.infoButtonRef,this.acceptButtonRef]}]}]}),document.body.appendChild(this.wrapperRef),setTimeout((function(){t.wrapperRef.classList.add("".concat(t.config.cssPrefix,"-show"))}),this.config.showDelay)},h=function(t){var n=this,o=t.element,r=t.className,c=t.children,a=void 0===c?null:c,l=t.attributes,f=void 0===l?null:l,u=document.createElement(o);if(u.setAttribute("class","".concat(this.config.cssPrefix,"-").concat(r)),f)for(var d=0,p=Object.entries(f);d<p.length;d++){var h=e(p[d],2),y=h[0],v=h[1];u.setAttribute(y,v)}return a&&(Array.isArray(a)||(a=[a]),a.map((function(t){var e=i(n,s,m).call(n,t);e&&u.append(e)}))),u},m=function(t){if(null===t)return null;if(a=t,"object"===("undefined"==typeof HTMLElement?"undefined":o(HTMLElement))?a instanceof HTMLElement:a&&"object"===o(a)&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)return t;if("object"===o(t)&&t.element&&t.className){var e=t.element,n=t.className,r=t.children,c=void 0===r?null:r;return i(this,l,h).call(this,{element:e,className:n,children:c})}return"string"==typeof t?document.createTextNode(t):null;var a};t.CookiesInfo=function(t){return new f(t)}}).call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e),e.default=n.p+"css/default-theme.css"}]);