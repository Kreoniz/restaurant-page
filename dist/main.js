(()=>{"use strict";var e={20:(e,n,t)=>{t.d(n,{Z:()=>L});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),d=t.n(s),c=new URL(t(993),t.b),l=new URL(t(658),t.b),p=new URL(t(406),t.b),u=new URL(t(235),t.b),f=new URL(t(163),t.b),m=new URL(t(622),t.b),b=new URL(t(523),t.b),h=i()(a()),g=d()(c),v=d()(l),y=d()(p),w=d()(u),x=d()(f),C=d()(m),E=d()(b);h.push([e.id,`@font-face {\n    font-family: "Raleway";\n    src: url(${g}) format("woff");\n    font-weight: 300;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: "Raleway";\n    src: url(${v}) format("woff");\n    font-weight: 300;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: "Raleway";\n    src: url(${y}) format("woff");\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: "Raleway";\n    src: url(${w}) format("woff");\n    font-weight: 400;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: "Raleway";\n    src: url(${x}) format("woff");\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: "Raleway";\n    src: url(${C}) format("woff");\n    font-weight: 500;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: "Raleway";\n    src: url(${E}) format("woff");\n    font-weight: 700;\n    font-style: normal;\n}\n`,""]);const L=h},348:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"img {\n    display: block;\n    width: 100%;\n}\n\n.pasta-image {\n    border: var(--border);\n    border-bottom: none;\n    border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n\n.description {\n    padding: 10px;\n\n    border: var(--border);\n    border-radius: 0 0 var(--border-radius) var(--border-radius);\n\n    font-style: italic;\n}\n\n.schedule {\n    padding: 1rem;\n    border: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.schedule > *:not(*:last-child, *:first-child) {\n    margin-bottom: min(10px, 1vw);\n}\n\n.schedule-heading {\n    margin-bottom: 10px;\n}\n",""]);const s=i},83:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,".section > *:not(*:last-child) {\n    margin-bottom: 1.5rem;\n}\n\n.section-heading {\n    padding: 10px 0;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: var(--border-radius)\n}\n",""]);const s=i},917:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),d=t.n(s),c=new URL(t(365),t.b),l=i()(a()),p=d()(c);l.push([e.id,`*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n:root {\n    --border: 2px solid black;\n    --border-radius: 20px;\n}\n\nbody {\n    background: url(${p}) 0 0 / 200px;\n}\n\n#content {\n    font-family: "Raleway", sans-serif;\n\n    width: clamp(400px, 60%, 700px);\n    background-color: rgba(255, 255, 255, 0.8);\n    min-height: 100vh;\n\n    padding: 1rem 2rem 2rem;\n    margin-inline: auto;\n}\n\n.page > * {\n    text-align: center;\n}\n\n.page > *:not(*:last-child) {\n    margin-bottom: 1.5rem;\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: 700;\n}\n\nh2 {\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\nh3 {\n    font-size: clamp(1.8rem, 5vw, 2rem);\n    font-weight: 700;\n}\n\np {\n    font-size: clamp(1rem, 2.5vw, 1.2rem);\n    font-weight: 500;\n    line-height: 1.25;\n}\n\n.card-image {\n    border-radius: 0 0 var(--border-radius) var(--border-radius);\n    border: var(--border);\n    border-top: none;\n}\n\n.card-info {\n    padding: 10px 10px 0;\n    border-radius: var(--border-radius) var(--border-radius) 0 0;\n    border: var(--border);\n}\n\n.card-info > * {\n    margin-bottom: 10px;\n}\n`,""]);const u=l},593:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),d=t.n(s),c=new URL(t(92),t.b),l=i()(a()),p=d()(c);l.push([e.id,`:root {\n    --tab-border-radius: 5px;\n}\n\n.tabs {\n    display: flex;\n    justify-content: space-between;\n\n    box-shadow: inset 0 0 5px black;\n\n    border-radius: var(--tab-border-radius);\n\n    margin-bottom: 1.5rem;\n}\n\n.tab:first-child {\n    border-radius: var(--tab-border-radius) 0 0 var(--tab-border-radius);\n}\n\n.tab:last-child {\n    border-radius: 0 var(--tab-border-radius) var(--tab-border-radius) 0;\n}\n\n.tab {\n    flex: 1 0 0;\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: 500;\n    padding: 20px;\n}\n\n.active-tab {\n    background: url(${p}) 50% / cover no-repeat;\n    text-shadow:\n        -1px -1px #fff,\n        1px 1px #fff,\n        1px -1px #fff,\n        -1px 1px #fff;\n}\n\n.tab:hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var d=r(e,a),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},523:(e,n,t)=>{e.exports=t.p+"6d778d0e2b48fd93d049.woff"},235:(e,n,t)=>{e.exports=t.p+"586ccd027a40c71cde9a.woff"},993:(e,n,t)=>{e.exports=t.p+"dcd4de5d34241ee395ef.woff"},658:(e,n,t)=>{e.exports=t.p+"edc2c9cb646e21ce6d2b.woff"},163:(e,n,t)=>{e.exports=t.p+"02a68fc7ad9a27655bbd.woff"},622:(e,n,t)=>{e.exports=t.p+"e16a38cc2d9deaddc02d.woff"},406:(e,n,t)=>{e.exports=t.p+"d04d347dadec1731ce8b.woff"},92:(e,n,t)=>{e.exports=t.p+"36204f73bd28032d9370.png"},365:(e,n,t)=>{e.exports=t.p+"6ed7781c2aad5cfdc8dc.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),f=t(917),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var b=t(20),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var g=t(426),v={};v.styleTagTransform=u(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),n()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var y=t(593),w={};function x(e,n,t){const r=document.createElement("div");r.classList.add("card");const a=document.createElement("div");a.classList.add("card-info");const o=document.createElement("h3");o.textContent=e,o.classList.add("card-heading");const i=document.createElement("p");i.textContent=n,i.classList.add("card-description");const s=new Image;return s.src=t,s.classList.add("card-image"),a.appendChild(o),a.appendChild(i),r.appendChild(a),r.appendChild(s),r}w.styleTagTransform=u(),w.setAttributes=d(),w.insert=i().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=l(),n()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var C=t(348),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=l(),n()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals;const L=t.p+"60a19984b9b3a601c796.jpg",Z=t.p+"7e97878a195a80236f5c.jpg";function T(){const e=document.querySelector("#page"),n=document.createElement("h1"),t=document.createElement("div"),r=new Image,a=document.createElement("p");n.textContent="La Bella Food",r.src=L,r.classList.add("pasta-image"),a.textContent="Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.",a.classList.add("description"),e.appendChild(n),t.appendChild(r),t.appendChild(a),e.appendChild(t);const o=function(){const e=document.createElement("div"),n=document.createElement("h3");e.classList.add("schedule"),n.textContent="Working Hours",n.classList.add("schedule-heading"),e.appendChild(n);for(let n in S)e.appendChild(k(n,S[n][0],S[n][1]));return e}();e.appendChild(o);const i=x("Location","You can find our restaurants anywhere in Rome!",Z);e.appendChild(i)}const S={Monday:["8am","10pm"],Tuesday:["8am","10pm"],Wednesday:["8am","10pm"],Thursday:["8am","10pm"],Friday:["8am","10pm"],Saturday:["9am","11pm"],Sunday:["9am","11pm"]};function k(e,n,t){const r=document.createElement("p");return r.textContent=`${e}: ${n} - ${t}`,r}var R=t(83),A={};A.styleTagTransform=u(),A.setAttributes=d(),A.insert=i().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=l(),n()(R.Z,A),R.Z&&R.Z.locals&&R.Z.locals;const j=t.p+"716a31def476f1abef9a.jpg",$=t.p+"f3c8fb6f3d765590796f.jpg",q=t.p+"4c10a8adf9c16e1c92bf.jpg",I=t.p+"b4d9033c70638c89eac0.jpg",M=t.p+"006a6b4b92f8bef00dee.jpg",U={Beverages:{Espresso:{description:"Unbelievable beverage",image:t.p+"b40bd66d368fcc592fa2.jpg"},"Herbal Tea":{description:"A surprise from the chef",image:t.p+"89d6095f455522d5c2ed.jpg"}},Dishes:{Bruschetta:{description:"Outstanding bruschettas",image:$},Margherita:{description:"A very tasty pizza",image:I},Carbonara:{description:"Unprecedented carbonara",image:q},Pasta:{description:"Extremely delicious pasta",image:j},Risotto:{description:"Stellar risotto",image:M}}},z=t.p+"db6f1a2ac8806da68d32.png",P=document.querySelector("#content"),H=document.createElement("link");H.rel="icon",H.href=z,document.head.appendChild(H);const F=document.createElement("ul");F.classList.add("tabs");const N=document.createElement("li");N.textContent="Home",N.dataset.content="homepage";const O=document.createElement("li");O.textContent="Menu",O.dataset.content="menu";const B=document.createElement("li");B.textContent="Contact",B.dataset.content="contact";const _=[N,O,B],D={homepage:T,menu:function(){const e=document.querySelector("#page");e.classList.add("menu-page");const n=document.createElement("h1");n.textContent="Menu",e.appendChild(n);for(const n in U){const t=document.createElement("div");t.classList.add("section");const r=document.createElement("h2");r.textContent=n,r.classList.add("section-heading"),t.appendChild(r);for(const e in U[n]){const r=U[n][e],a=x(e,r.description,r.image);a.classList.add("meal"),t.appendChild(a)}e.appendChild(t)}},contact:function(){document.querySelector("#page")}};_.forEach((e=>{e.classList.add("tab"),e.addEventListener("click",(()=>{_.forEach((e=>e.classList.remove("active-tab"))),e.classList.add("active-tab");const n=e.dataset.content;document.querySelector("#page").textContent="",D[n]()}))})),F.appendChild(N),F.appendChild(O),F.appendChild(B),P.appendChild(F);const W=document.createElement("div");W.classList.add("page"),W.setAttribute("id","page"),P.appendChild(W),N.classList.add("active-tab"),T()})()})();