(()=>{var e={757:(e,t,n)=>{e.exports=n(666)},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),l=new C(r||[]);return o._invoke=function(e,t,n){var r=u;return function(i,o){if(r===y)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var l=n.delegate;if(l){var c=S(l,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=y;var a=d(e,t,n);if("normal"===a.type){if(r=n.done?h:p,a.arg===f)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=h,n.method="throw",n.arg=a.arg)}}}(e,n,l),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u="suspendedStart",p="suspendedYield",y="executing",h="completed",f={};function m(){}function v(){}function g(){}var b={};a(b,o,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(T([])));x&&x!==n&&r.call(x,o)&&(b=x);var w=g.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(i,o,l,c){var a=d(e[i],e,o);if("throw"!==a.type){var s=a.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):t.resolve(u).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,c)}))}c(a.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,f;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function T(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,l=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return l.next=l}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=g,a(w,"constructor",g),a(g,"constructor",v),v.displayName=a(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,a(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},_(L.prototype),a(L.prototype,l,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var l=new L(s(t,n,r,i),o);return e.isGeneratorFunction(n)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},_(w),a(w,c,"Generator"),a(w,o,(function(){return this})),a(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return c.type="throw",c.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],c=l.completion;if("root"===l.tryLoc)return i("end");if(l.tryLoc<=this.prev){var a=r.call(l,"catchLoc"),s=r.call(l,"finallyLoc");if(a&&s){if(this.prev<l.catchLoc)return i(l.catchLoc,!0);if(this.prev<l.finallyLoc)return i(l.finallyLoc)}else if(a){if(this.prev<l.catchLoc)return i(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return i(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),q(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;q(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t,n,r,i,o,l){try{var c=e[o](l),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var l=e.apply(t,n);function c(e){r(l,i,o,c,a,"next",e)}function a(e){r(l,i,o,c,a,"throw",e)}c(void 0)}))}}var o=n(757),l=n.n(o);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a,s,d,u,p,y,h,f,m,v,g,b,E,x,w,_,L,S,k,q,C,T,N,A,W;N=document.querySelector(".header-contacts__phone-number-accord").querySelector(".header-contacts__phone-number"),A=document.querySelector(".header-contacts__arrow"),W=A.querySelector("img"),A.addEventListener("click",(function(){0==+getComputedStyle(N).opacity?(N.style.margin="25px 0 0 0",N.style.opacity=1,W.style.cssText="transform: rotate(180deg)"):(N.style.margin="0",N.style.opacity=0,W.style.cssText="transform: rotate(0deg)")})),function(){var e=document.querySelector("body"),t=document.querySelector(".popup-dialog-menu"),n=document.querySelector(".popup-menu"),r=document.querySelector(".popup-repair-types"),i=document.querySelector(".popup-privacy");document.documentElement.clientWidth>576?t.style.cssText+="transform: translate3d(645px, 0, 0)":t.style.cssText+="transform: translate3d(0, -2000px, 0)";var o=document.documentElement.clientWidth;window.addEventListener("resize",(function(){o=document.documentElement.clientWidth,t.style.cssText+=o>576?"transform: translate3d(645px, 0, 0)":"transform: translate3d(0, -2000px, 0)"}));var l=function(){"hidden"===n.style.visibility||""===n.style.visibility?(t.style.transition="1s",n.style.visibility="visible",t.style.visibility="visible",t.style.cssText+="transform: translate3d(0, 0, 0)"):"visible"===n.style.visibility&&(n.style.visibility="hidden",t.style.position="absolute",t.style.cssText+=o>576?"transform: translate3d(645px, 0, 0)":"transform: translate3d(0, -2000px, 0)")};e.addEventListener("click",(function(e){var o=e.target;if(o.closest(".menu")&&!o.closest(".menu-phone-icon"))l();else if(o.closest(".close-menu"))l();else if(o.closest(".menu-link")&&!o.closest(".no-overflow")){t.style.transition="0s",l();var c=o.getAttribute("href").slice(1),a=document.getElementById(c).getBoundingClientRect().top,s=0,d=setInterval((function(){window.scrollTo(0,s),(s+=20)>=a&&clearInterval(d)}),1)}else o.closest("a")&&(o.textContent.match("Полный список услуг и цен")||"svg"===o.tagName.toLowerCase()||"path"===o.tagName.toLowerCase())?("visible"===n.style.visibility&&l(),r.style.visibility="visible"):o.closest(".close")&&o.parentNode.classList.contains("popup-repair-types")?r.style.visibility="hidden":o.classList.contains("link-privacy")?i.style.visibility="visible":o.classList.contains("close")&&o.parentNode.classList.contains("popup-privacy")&&(i.style.visibility="hidden")}))}(),S=document.querySelector(".formula"),k=S.querySelector(".formula-slider"),q=document.querySelector(".formula-slider-wrap"),C=document.documentElement.clientWidth,T=function(e){e<=1024&&e>576?(t(k.children).forEach((function(e){e.style.display="none"})),k.children[0].style.display="flex",k.children[1].style.display="flex",k.children[2].style.display="flex",k.style.display="flex",k.style.cssText+="align-items: flex-start;"):e<=576&&(t(k.children).forEach((function(e){e.style.display="none"})),k.children[0].style.display="flex",k.style.display="block")},T(document.documentElement.clientWidth),window.addEventListener("resize",(function(){C=document.documentElement.clientWidth,T(C)})),document.documentElement.clientWidth>1024&&(S.addEventListener("mouseover",(function(e){var t=e.target;if(t.closest(".formula-item__icon")){var n=t.parentNode.querySelector(".formula-item-popup");n.style.visibility="visible",n.style.opacity=1,n.style.transition="opacity 0.2s",t.parentElement.style.opacity=1,n.getBoundingClientRect().y<0&&(n.style.transform="translateY(310px)",n.classList.add("formula-item-popup--before"))}})),S.addEventListener("mouseout",(function(e){var t=e.target;if(t.closest(".formula-item__icon")){var n=t.parentNode.querySelector(".formula-item-popup");n.style.visibility="hidden",n.style.opacity=0,n.style.transition="opacity 0.2s",n.style.transform="translateY(0)",n.classList.remove("formula-item-popup--before")}}))),q.addEventListener("click",(function(e){var n=e.target;if(n.closest("#formula-arrow_left"))k.prepend(k.children[k.children.length-1]),T(document.documentElement.clientWidth);else if(n.closest("#formula-arrow_right"))k.append(k.children[0]),T(document.documentElement.clientWidth);else if(!n.closest(".formula-item")||n.classList.contains("formula-item-popup")||n.parentNode.classList.contains("formula-item-popup"))n.classList.contains("formula-item")||t(k.children).forEach((function(e){e.children[0].children[0].style.visibility="hidden"}));else{t(k.children).forEach((function(e){e.children[0].children[0].style.visibility="hidden"}));var r=n.querySelector(".formula-item-popup");r.style.visibility="visible",r.style.opacity=1,r.style.transition="opacity 0.2s",n.parentElement.style.opacity=1}})),document.querySelectorAll("input").forEach((function(e){if("phone"===e.getAttribute("name")){var t,n=function(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();var n="+7 (___) ___-__-__",r=0,i=n.replace(/\D/g,""),o=this.value.replace(/\D/g,""),l=n.replace(/[_\d]/g,(function(e){return r<o.length?o.charAt(r++)||i.charAt(r):e}));-1!=(r=l.indexOf("_"))&&(r<5&&(r=3),l=l.slice(0,r));var c=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")};e.addEventListener("input",n,!1),e.addEventListener("focus",n,!1),e.addEventListener("blur",n,!1),e.addEventListener("keydown",n,!1)}})),g=document.querySelector(".repair-types"),b=document.querySelector(".repair-types-slider"),E=t(g.querySelectorAll(".repair-types-nav__item")),x=document.querySelector(".slider-counter-content__current"),w=document.querySelector(".slider-counter-content__total"),_=g.querySelector(".nav-list-repair"),L=1,g.addEventListener("click",(function(e){var t=e.target,n=function(e){e.childNodes.forEach((function(e){"#text"===e.nodeName&&e.remove()})),e===b&&e.childNodes[0].childNodes.forEach((function(e){"#text"===e.nodeName&&e.remove()}))};if(n(b),w.textContent=b.firstChild.childNodes.length,t.classList.contains("repair-types-nav__item")||t.classList.contains("nav-arrow_left")||t.classList.contains("nav-arrow_right")){if(t.classList.contains("repair-types-nav__item")){var r=t.classList[2].match(/\d/),i=document.querySelector(".types-repair".concat(r[0]));b.prepend(i),E.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}else{if(t.classList.contains("nav-arrow_right")){n(_);var o=_.firstChild;_.append(o);var l=document.querySelector(".nav-list-repair").children;_.lastChild.classList.remove("active"),l[0].classList.add("active")}else if(t.classList.contains("nav-arrow_left")){n(_);var c=_.lastChild;_.prepend(c);var a=document.querySelector(".nav-list-repair").children;a[1].classList.remove("active"),a[0].classList.add("active")}var s=_.children[0].classList[2].match(/\d/),d=document.querySelector(".types-repair".concat(s[0]));b.prepend(d)}n(b),w.textContent=b.firstChild.childNodes.length,L=1,x.textContent=L}else t.closest(".slider-arrow_right")?(b.firstChild.append(b.firstChild.firstChild),++L>b.firstChild.childNodes.length&&(L=1),x.textContent=L):t.closest(".slider-arrow_left")&&(b.firstChild.prepend(b.firstChild.lastChild),--L<1&&(L=b.firstChild.childNodes.length),x.textContent=L)})),y=document.querySelector(".popup-portfolio"),h=document.getElementById("portfolio"),f=document.querySelectorAll(".popup-portfolio-text"),m=document.getElementById("popup-portfolio-counter"),v=document.querySelector(".popup-portfolio-slider"),h.addEventListener("click",(function(e){var n=e.target;if(m.children[0].children[1].textContent=v.children.length,n.closest(".portfolio-slider__slide-frame")){y.style.visibility="visible";var r=0;t(v.children).forEach((function(e){if(e.style.display="none",!(r>0)){var t=e.children[0].getAttribute("src").match(/\d/);+t==+n.children[0].getAttribute("alt").match(/\d/)&&(r++,e.style.display="block",f[+t-1].style.display="flex",m.children[0].children[0].textContent=t,document.documentElement.clientWidth<=1024&&(f[+t-1].style.cssText+="flex-wrap: wrap;"))}}))}})),y.addEventListener("click",(function(e){var n=e.target,r=+m.children[0].children[0].textContent;if(n.closest("#popup_portfolio_left")){var i=0;t(v.children).forEach((function(e,t){0===i&&("block"===e.style.display&&(f.forEach((function(e){e.style.display="none"})),e.style.display="none",e.previousElementSibling?(e.previousElementSibling.style.display="block",f[t-1].style.display="flex",document.documentElement.clientWidth<=1024&&(f[t-1].style.cssText+="flex-wrap: wrap;"),i++,r--):(v.children[v.children.length-1].style.display="block",f[v.children.length-1].style.display="flex",document.documentElement.clientWidth<=1024&&(f[v.children.length-1].style.cssText+="flex-wrap: wrap;"),i++,r--)),r<1&&(r=v.children.length),m.children[0].children[0].textContent=r)}))}else if(n.closest("#popup_portfolio_right")){var o=0;t(v.children).forEach((function(e,t){0===o&&("block"===e.style.display&&(f.forEach((function(e){e.style.display="none"})),e.style.display="none",e.nextElementSibling?(e.nextElementSibling.style.display="block",f[t+1].style.display="flex",document.documentElement.clientWidth<=1024&&(f[t+1].style.cssText+="flex-wrap: wrap;"),o++,r++):(v.children[0].style.display="block",f[0].style.display="flex",document.documentElement.clientWidth<=1024&&(f[0].style.cssText+="flex-wrap: wrap;"),o++,r++)),r>v.children.length&&(r=1),m.children[0].children[0].textContent=r)}))}else n.closest(".close")&&(y.style.visibility="hidden")})),function(){var e=document.querySelector("#portfolio"),t=e.querySelector(".portfolio-slider"),n=e.querySelector("#portfolio-arrow_right"),r=e.querySelector("#portfolio-arrow_left"),i=0;e.addEventListener("click",(function(e){var o,l=e.target;o=document.documentElement.clientWidth<=576?8:document.documentElement.clientWidth>576&&document.documentElement.clientWidth<=768?4:document.documentElement.clientWidth>768&&document.documentElement.clientWidth<=1024?3:2,l.closest("#portfolio-arrow_right")?(i<o&&(r.style.display="flex",t.append(t.children[0]),i++),i===o&&(n.style.display="none")):l.closest("#portfolio-arrow_left")&&(i>0&&(n.style.display="flex",t.prepend(t.children[t.children.length-1]),i--),0===i&&(r.style.display="none"))}))}(),function(){var e=document.querySelector(".popup-transparency"),n=document.querySelector(".transparency-slider-wrap"),r=n.querySelector(".transparency-slider"),i=document.querySelector(".popup-transparency-slider"),o=document.getElementById("transparency-popup-counter");document.documentElement.clientWidth,window.addEventListener("resize",(function(){document.documentElement.clientWidth,document.documentElement.clientWidth<=1090?(t(r.children).forEach((function(e){e.style.display="none"})),r.children[0].style.display="flex",n.addEventListener("click",(function(e){var n=e.target,i=0;n.closest("#transparency-arrow_left")?t(r.children).forEach((function(e){0===i&&"flex"===e.style.display&&(e.style.display="none",e.previousElementSibling?(e.previousElementSibling.style.display="flex",i++):(r.children[r.children.length-1].style.display="flex",i++))})):n.closest("#transparency-arrow_right")&&t(r.children).forEach((function(e){0===i&&"flex"===e.style.display&&(e.style.display="none",e.nextElementSibling?(e.nextElementSibling.style.display="flex",i++):(r.children[0].style.display="flex",i++))}))}))):t(r.children).forEach((function(e){e.style.display="flex"}))})),n.addEventListener("click",(function(n){var l=n.target;l.closest(".transparency-item")&&(e.style.visibility="visible",t(r.children).forEach((function(e,t){e.children[0]===l&&(i.prepend(i.children[t]),o.children[0].children[1].textContent=i.children.length,o.children[0].children[0].textContent=t+1)})))})),e.addEventListener("click",(function(t){var n=t.target;if(n.closest(".close"))e.style.visibility="hidden";else if(n.closest("#transparency_left")){i.prepend(i.children[i.children.length-1]);var r=o.children[0].children[0].textContent;++r>i.children.length&&(r=1),o.children[0].children[0].textContent=r}else if(n.closest("#transparency_right")){i.append(i.children[0]);var l=o.children[0].children[0].textContent;--l<1&&(l=i.children.length),o.children[0].children[0].textContent=l}}))}(),(u=document.querySelector("body")).querySelector("button"),p=document.querySelector(".popup-consultation"),u.addEventListener("click",(function(e){"Проконсультироваться"===e.target.textContent&&(p.style.visibility="visible")})),p.addEventListener("click",(function(e){e.target.closest(".close-consultation")&&(p.style.visibility="hidden")})),d=document.querySelector(".reviews-slider-wrap").querySelector(".reviews-slider"),document.querySelector("#reviews").addEventListener("click",(function(e){var t=e.target;t.closest("#reviews-arrow_left")?d.append(d.children[0]):t.closest("#reviews-arrow_right")&&d.prepend(d.children[d.children.length-1])})),a=document.querySelector(".accordion"),(s=function(){t(a.children[0].children).forEach((function(e){e.children[0].classList.remove("msg-active")}))})(),a.addEventListener("click",(function(e){var t=e.target;t.closest(".title_block")&&(s(),t.classList.add("msg-active"))})),function(){var e=document.querySelector(".popup-repair-types-content-table"),n=document.querySelector(".nav-list-popup-repair"),r=document.querySelector(".popup-repair-types-tab"),o=document.querySelector(".popup-repair-types-content__head-title");e.innerHTML="",n.innerHTML="";var c=function(){var e=i(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/api/items");case 2:if(!(t=e.sent).ok){e.next=7;break}return e.abrupt("return",t.json());case 7:throw new Error("Данные небыли получены, ошибка ".concat(t.status," ").concat(t.statusText));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c().then((function(r){var i=new Map;r.forEach((function(e){i.set(e.type)})),t(i.keys()).forEach((function(t){var i=document.createElement("div");i.classList.add("popup-repair-types-content-table__list");var o=document.createElement("tbody"),l=document.createElement("button");l.classList="button_o popup-repair-types-nav__item",l.textContent=t,n.append(l),r.forEach((function(e){if(e.type===t){var n=document.createElement("tr");n.classList.add("mobile-row");var r=e.units.replace(/\d/,(function(e){return"<sup>".concat(e,"</sup>")}));n.innerHTML='\n                        <td class="repair-types-name">'.concat(e.name,'</td>\n\t\t\t\t\t\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n\t\t\t\t\t\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n\t\t\t\t\t\t\t\t\t<td class="repair-types-value">').concat(r,'</td>\n\t\t\t\t\t\t\t\t\t<td class="repair-types-value">').concat(e.cost," руб.</td>\n                        "),o.append(n)}})),o.children[0].classList.add("showHide"),i.append(o),e.append(i)})),document.documentElement.clientWidth<=1024&&t(n.children).forEach((function(e,t){e.style.display=0!==t?"none":"inline"}))})).catch((function(e){console.error(e)})),document.documentElement.clientWidth>1024?n.addEventListener("click",(function(r){var i=r.target;i.closest(".popup-repair-types-nav__item")&&(t(e.children).forEach((function(e){e.style.display="none"})),t(n.children).forEach((function(t,n){t.classList.remove("active"),t===i&&(i.classList.add("active"),e.children[n].style.display="block")})),o.textContent=i.textContent)})):r.addEventListener("click",(function(r){var i=r.target,l=0;i.closest("#nav-arrow-popup-repair_left")?t(n.children).forEach((function(e){0===l&&"inline"===e.style.display&&(e.style.display="none",e.previousElementSibling?(e.previousElementSibling.style.display="inline",l++):(n.children[n.children.length-1].style.display="inline",l++))})):i.closest("#nav-arrow-popup-repair_right")&&t(n.children).forEach((function(e){0===l&&"inline"===e.style.display&&(e.style.display="none",e.nextElementSibling?(e.nextElementSibling.style.display="inline",l++):(n.children[0].style.display="inline",l++))})),t(n.children).forEach((function(n,r){"inline"===n.style.display&&(o.textContent=n.textContent,t(e.children).forEach((function(e){e.style.display="none"})),e.children[r].style.display="block")}))}))}(),function(){var e,t=document.getElementsByTagName("body")[0],n=document.querySelector(".popup-thank");t.addEventListener("submit",(function(t){t.preventDefault();var r=t.target,o=r.querySelector(".checkbox__descr");if("FORM"===r.tagName){var a,s=new FormData(r),d={},u=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw o}}}}(s.entries());try{for(u.s();!(a=u.n()).done;){var p=a.value;d[p[0]]=p[1]}}catch(e){u.e(e)}finally{u.f()}var y=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},h=r.querySelectorAll("input"),f=0;h.forEach((function(t){""===t.value.trim()||t.value.match(/_/g)?(t.style.cssText+="border: 3px solid red",f++):t.style.cssText+="border: none",e||(o.style.color="red")})),0===f&&e?(o.style.color="#322823",i(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(d).then((function(e){if(200!==e.status)throw new Error("status network not 200");n.style.visibility="visible",n.addEventListener("click",(function(e){e.target.closest(".close")&&(n.style.visibility="hidden")}))}));case 2:r.reset();case 3:case"end":return e.stop()}}),e)})))(),e=!1):document.createElement("div").textContent="Необходимо поставить галочку"}else r.closest(".checkbox__label")&&(e=!e)})),t.addEventListener("click",(function(t){t.target.closest(".checkbox__label")&&(e=!e)}))}()})()})();