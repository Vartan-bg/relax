(()=>{"use strict";(()=>{const e=document.querySelector(".header-contacts__phone-number-accord").querySelector(".header-contacts__phone-number"),t=document.querySelector(".header-contacts__arrow"),l=t.querySelector("img");t.addEventListener("click",(()=>{0==+getComputedStyle(e).opacity?(e.style.margin="25px 0 0 0",e.style.opacity=1,l.style.cssText="transform: rotate(180deg)"):(e.style.margin="0",e.style.opacity=0,l.style.cssText="transform: rotate(0deg)")}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".popup-dialog-menu"),l=document.querySelector(".popup-menu"),i=document.querySelector(".popup-repair-types"),n=document.querySelector(".popup-privacy"),s=()=>{"hidden"===l.style.visibility||""===l.style.visibility?(t.style.transition="1s",l.style.visibility="visible",t.style.visibility="visible",document.documentElement.clientWidth>576?(t.style.cssText+="transform: translate3d(645px, 0, 0)",t.style.cssText+="transform: translate3d(0, 0, 0)"):(t.style.cssText+="transform: translate3d(0, -2000px, 0)",t.style.cssText+="transform: translate3d(0, 0, 0)")):"visible"===l.style.visibility&&(l.style.visibility="hidden",t.style.position="absolute",document.documentElement.clientWidth>576?(t.style.cssText+="transform: translate3d(0, 0, 0)",t.style.cssText+="transform: translate3d(645px, 0, 0)"):(t.style.cssText+="transform: translate3d(0, 0, 0)",t.style.cssText+="transform: translate3d(0, -2000px, 0)"))};e.addEventListener("click",(e=>{let r=e.target;if(r.closest(".menu")&&!r.closest(".menu-phone-icon"))s();else if(r.closest(".close-menu"))s();else if(r.closest(".menu-link")&&!r.closest(".no-overflow")){t.style.transition="0s",s();let e=r.getAttribute("href").slice(1);const l=document.getElementById(e).getBoundingClientRect().top;let i=0;const n=setInterval((function(){window.scrollTo(0,i),i+=20,i>=l&&clearInterval(n)}),1)}else r.closest("a")&&(r.textContent.match("Полный список услуг и цен")||"svg"===r.tagName.toLowerCase()||"path"===r.tagName.toLowerCase())?("visible"===l.style.visibility&&s(),i.style.visibility="visible"):r.closest(".close")&&r.parentNode.classList.contains("popup-repair-types")?i.style.visibility="hidden":r.classList.contains("link-privacy")?n.style.visibility="visible":r.classList.contains("close")&&r.parentNode.classList.contains("popup-privacy")&&(n.style.visibility="hidden")}))})(),(()=>{const e=document.querySelector(".formula"),t=e.querySelector(".formula-slider"),l=document.querySelector(".formula-slider-wrap");if(document.documentElement.clientWidth>1024)e.addEventListener("mouseover",(e=>{let t=e.target;if(t.closest(".formula-item__icon")){const e=t.parentNode.querySelector(".formula-item-popup");e.style.visibility="visible",e.style.opacity=1,e.style.transition="opacity 0.2s",t.parentElement.style.opacity=1,e.getBoundingClientRect().y<0&&(e.style.transform="translateY(310px)",e.classList.add("formula-item-popup--before"))}})),e.addEventListener("mouseout",(e=>{let t=e.target;if(t.closest(".formula-item__icon")){const e=t.parentNode.querySelector(".formula-item-popup");e.style.visibility="hidden",e.style.opacity=0,e.style.transition="opacity 0.2s",e.style.transform="translateY(0)",e.classList.remove("formula-item-popup--before")}}));else if(document.documentElement.clientWidth<=1024&&document.documentElement.clientWidth>576){const e=()=>{[...t.children].forEach((e=>{e.style.display="none"})),t.children[0].style.display="flex",t.children[1].style.display="flex",t.children[2].style.display="flex"};e(),t.style.display="flex",t.style.cssText+="align-items: flex-start;",l.addEventListener("click",(l=>{let i=l.target;if(i.closest("#formula-arrow_left"))t.prepend(t.children[t.children.length-1]),e();else if(i.closest("#formula-arrow_right"))t.append(t.children[0]),e();else if(!i.closest(".formula-item")||i.classList.contains("formula-item-popup")||i.parentNode.classList.contains("formula-item-popup"))i.classList.contains("formula-item")||[...t.children].forEach((e=>{e.children[0].children[0].style.visibility="hidden"}));else{[...t.children].forEach((e=>{e.children[0].children[0].style.visibility="hidden"}));const e=i.querySelector(".formula-item-popup");e.style.visibility="visible",e.style.opacity=1,e.style.transition="opacity 0.2s",i.parentElement.style.opacity=1}}))}else if(document.documentElement.clientWidth<=576){const e=()=>{[...t.children].forEach((e=>{e.style.display="none"})),t.children[0].style.display="flex"};e(),l.addEventListener("click",(l=>{let i=l.target;if(i.closest("#formula-arrow_left"))t.prepend(t.children[t.children.length-1]),e(),[...t.children].forEach((e=>{e.children[0].children[0].style.visibility="hidden"}));else if(i.closest("#formula-arrow_right"))t.append(t.children[0]),e(),[...t.children].forEach((e=>{e.children[0].children[0].style.visibility="hidden"}));else if(!i.closest(".formula-item")||i.classList.contains("formula-item-popup")||i.parentNode.classList.contains("formula-item-popup"))i.classList.contains("formula-item")||[...t.children].forEach((e=>{e.children[0].children[0].style.visibility="hidden"}));else{[...t.children].forEach((e=>{e.children[0].children[0].style.visibility="hidden"}));const e=i.querySelector(".formula-item-popup");e.style.visibility="visible",e.style.opacity=1,e.style.transition="opacity 0.2s",i.parentElement.style.opacity=1}}))}})(),document.querySelectorAll("input").forEach((e=>{if("phone"===e.getAttribute("name")){let t;const l=function(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();let l="+7 (___) ___-__-__",i=0,n=l.replace(/\D/g,""),s=this.value.replace(/\D/g,""),r=l.replace(/[_\d]/g,(function(e){return i<s.length?s.charAt(i++)||n.charAt(i):e}));i=r.indexOf("_"),-1!=i&&(i<5&&(i=3),r=r.slice(0,i));let c=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=r),"blur"==e.type&&this.value.length<5&&(this.value="")};e.addEventListener("input",l,!1),e.addEventListener("focus",l,!1),e.addEventListener("blur",l,!1),e.addEventListener("keydown",l,!1)}})),(()=>{const e=document.querySelector(".repair-types"),t=document.querySelector(".repair-types-slider"),l=[...e.querySelectorAll(".repair-types-nav__item")],i=document.querySelector(".slider-counter-content__current"),n=document.querySelector(".slider-counter-content__total"),s=e.querySelector(".nav-list-repair");let r=1;e.addEventListener("click",(e=>{let c=e.target;const o=e=>{e.childNodes.forEach((e=>{"#text"===e.nodeName&&e.remove()})),e===t&&e.childNodes[0].childNodes.forEach((e=>{"#text"===e.nodeName&&e.remove()}))};if(o(t),n.textContent=t.firstChild.childNodes.length,c.classList.contains("repair-types-nav__item")||c.classList.contains("nav-arrow_left")||c.classList.contains("nav-arrow_right")){if(c.classList.contains("repair-types-nav__item")){let e=c.classList[2].match(/\d/),i=document.querySelector(`.types-repair${e[0]}`);t.prepend(i),l.forEach((e=>{e.classList.remove("active")})),c.classList.add("active")}else{if(c.classList.contains("nav-arrow_right")){o(s);let e=s.firstChild;s.append(e);let t=document.querySelector(".nav-list-repair").children;s.lastChild.classList.remove("active"),t[0].classList.add("active")}else if(c.classList.contains("nav-arrow_left")){o(s);let e=s.lastChild;s.prepend(e);let t=document.querySelector(".nav-list-repair").children;t[1].classList.remove("active"),t[0].classList.add("active")}let e=s.children[0].classList[2].match(/\d/),l=document.querySelector(`.types-repair${e[0]}`);t.prepend(l)}o(t),n.textContent=t.firstChild.childNodes.length,r>t.firstChild.childNodes.length&&(r=1),i.textContent=r}else c.closest(".slider-arrow_right")?(t.firstChild.append(t.firstChild.firstChild),r++,r>t.firstChild.childNodes.length&&(r=1),i.textContent=r):c.closest(".slider-arrow_left")&&(t.firstChild.prepend(t.firstChild.lastChild),r--,r<1&&(r=t.firstChild.childNodes.length),i.textContent=r)}))})(),(()=>{const e=document.querySelector(".popup-portfolio"),t=document.getElementById("portfolio"),l=document.querySelectorAll(".popup-portfolio-text"),i=document.getElementById("popup-portfolio-counter"),n=document.querySelector(".popup-portfolio-slider");t.addEventListener("click",(t=>{let s=t.target;if(i.children[0].children[1].textContent=n.children.length,s.closest(".portfolio-slider__slide-frame")){e.style.visibility="visible";let t=0;[...n.children].forEach((e=>{if(e.style.display="none",!(t>0)){let n=e.children[0].getAttribute("src").match(/\d/),r=s.children[0].getAttribute("alt").match(/\d/);+n==+r&&(t++,e.style.display="block",l[+n-1].style.display="flex",i.children[0].children[0].textContent=n,document.documentElement.clientWidth<=1024&&(l[+n-1].style.cssText+="flex-wrap: wrap;"))}})),[...n.children].forEach(((e,t)=>{"block"===e.style.display&&(slideNumber=t)}))}})),e.addEventListener("click",(t=>{let s=t.target,r=+i.children[0].children[0].textContent;if(s.closest("#popup_portfolio_left")){let e=0;[...n.children].forEach(((t,s)=>{0===e&&("block"===t.style.display&&(l.forEach((e=>{e.style.display="none"})),t.style.display="none",t.previousElementSibling?(t.previousElementSibling.style.display="block",l[s-1].style.display="flex",document.documentElement.clientWidth<=1024&&(l[s-1].style.cssText+="flex-wrap: wrap;"),e++,r--):(n.children[n.children.length-1].style.display="block",l[n.children.length-1].style.display="flex",document.documentElement.clientWidth<=1024&&(l[n.children.length-1].style.cssText+="flex-wrap: wrap;"),e++,r--)),r<1&&(r=n.children.length),i.children[0].children[0].textContent=r)}))}else if(s.closest("#popup_portfolio_right")){let e=0;[...n.children].forEach(((t,s)=>{0===e&&("block"===t.style.display&&(l.forEach((e=>{e.style.display="none"})),t.style.display="none",t.nextElementSibling?(t.nextElementSibling.style.display="block",l[s+1].style.display="flex",document.documentElement.clientWidth<=1024&&(l[s+1].style.cssText+="flex-wrap: wrap;"),e++,r++):(n.children[0].style.display="block",l[0].style.display="flex",document.documentElement.clientWidth<=1024&&(l[0].style.cssText+="flex-wrap: wrap;"),e++,r++)),r>n.children.length&&(r=1),i.children[0].children[0].textContent=r)}))}else s.closest(".close")&&(e.style.visibility="hidden")}))})(),(()=>{const e=document.querySelector("#portfolio"),t=e.querySelector(".portfolio-slider"),l=e.querySelector("#portfolio-arrow_right"),i=e.querySelector("#portfolio-arrow_left");let n=0;e.addEventListener("click",(e=>{let s,r=e.target;s=document.documentElement.clientWidth<=576?8:document.documentElement.clientWidth>576&&document.documentElement.clientWidth<=768?4:document.documentElement.clientWidth>768&&document.documentElement.clientWidth<=1024?3:2,r.closest("#portfolio-arrow_right")?(n<s&&(i.style.display="flex",t.append(t.children[0]),n++),n===s&&(l.style.display="none")):r.closest("#portfolio-arrow_left")&&(n>0&&(l.style.display="flex",t.prepend(t.children[t.children.length-1]),n--),0===n&&(i.style.display="none"))}))})(),(()=>{const e=document.querySelector(".popup-transparency"),t=document.querySelector(".transparency-slider-wrap"),l=t.querySelector(".transparency-slider"),i=document.querySelector(".popup-transparency-slider"),n=document.getElementById("transparency-popup-counter");t.addEventListener("click",(t=>{let s=t.target;s.closest(".transparency-item")&&(e.style.visibility="visible",[...l.children].forEach(((e,t)=>{e.children[0]===s&&(i.prepend(i.children[t]),n.children[0].children[1].textContent=i.children.length,n.children[0].children[0].textContent=t+1)})))})),e.addEventListener("click",(t=>{let l=t.target;if(l.closest(".close"))e.style.visibility="hidden";else if(l.closest("#transparency_right")){i.prepend(i.children[i.children.length-1]);let e=n.children[0].children[0].textContent;e++,e>i.children.length&&(e=1),n.children[0].children[0].textContent=e}else if(l.closest("#transparency_left")){i.append(i.children[0]);let e=n.children[0].children[0].textContent;e--,e<1&&(e=i.children.length),n.children[0].children[0].textContent=e}})),document.documentElement.clientWidth<=1024&&([...l.children].forEach((e=>{e.style.display="none"})),l.children[0].style.display="flex",t.addEventListener("click",(e=>{let t=e.target,i=0;t.closest("#transparency-arrow_left")?[...l.children].forEach((e=>{0===i&&"flex"===e.style.display&&(e.style.display="none",e.previousElementSibling?(e.previousElementSibling.style.display="flex",i++):(l.children[l.children.length-1].style.display="flex",i++))})):t.closest("#transparency-arrow_right")&&[...l.children].forEach((e=>{0===i&&"flex"===e.style.display&&(e.style.display="none",e.nextElementSibling?(e.nextElementSibling.style.display="flex",i++):(l.children[0].style.display="flex",i++))}))})))})(),(()=>{const e=document.querySelector(".director"),t=e.querySelector("button"),l=document.querySelector(".popup-consultation");e.addEventListener("click",(e=>{e.target===t&&(l.style.visibility="visible")})),l.addEventListener("click",(e=>{e.target.closest(".close-consultation")&&(l.style.visibility="hidden")}))})(),(()=>{const e=document.querySelector(".reviews-slider-wrap").querySelector(".reviews-slider");document.querySelector("#reviews").addEventListener("click",(t=>{let l=t.target;l.closest("#reviews-arrow_left")?e.append(e.children[0]):l.closest("#reviews-arrow_right")&&e.prepend(e.children[e.children.length-1])}))})(),(()=>{const e=document.querySelector(".accordion"),t=()=>{[...e.children[0].children].forEach((e=>{e.children[0].classList.remove("msg-active")}))};t(),e.addEventListener("click",(e=>{let l=e.target;l.closest(".title_block")&&(t(),l.classList.add("msg-active"))}))})(),(()=>{const e=document.querySelector(".popup-repair-types-content-table"),t=document.querySelector(".nav-list-popup-repair"),l=document.querySelector(".popup-repair-types-tab"),i=document.querySelector(".popup-repair-types-content__head-title");document.querySelector(".popup-repair-types"),e.innerHTML="",t.innerHTML="",(async()=>{const e=await fetch("../crm-backend/db.json");if(e.ok)return e.json();throw new Error(`Данные небыли получены, ошибка ${e.status} ${e.statusText}`)})().then((l=>{let i=new Map;l.forEach((e=>{i.set(e.type)})),[...i.keys()].forEach((i=>{let n=document.createElement("div");n.classList.add("popup-repair-types-content-table__list");let s=document.createElement("tbody"),r=document.createElement("button");r.classList="button_o popup-repair-types-nav__item",r.textContent=i,t.append(r),l.forEach((e=>{if(e.type===i){let t=document.createElement("tr");t.classList.add("mobile-row");let l=e.units.replace(/\d/,(e=>`<sup>${e}</sup>`));t.innerHTML=`\n                        <td class="repair-types-name">${e.name}</td>\n\t\t\t\t\t\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n\t\t\t\t\t\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n\t\t\t\t\t\t\t\t\t<td class="repair-types-value">${l}</td>\n\t\t\t\t\t\t\t\t\t<td class="repair-types-value">${e.cost} руб.</td>\n                        `,s.append(t)}})),s.children[0].classList.add("showHide"),n.append(s),e.append(n)})),document.documentElement.clientWidth<=1024&&[...t.children].forEach(((e,t)=>{e.style.display=0!==t?"none":"inline"}))})).catch((e=>{console.error(e)})),document.documentElement.clientWidth>1024?t.addEventListener("click",(l=>{let n=l.target;n.closest(".popup-repair-types-nav__item")&&([...e.children].forEach((e=>{e.style.display="none"})),[...t.children].forEach(((t,l)=>{t.classList.remove("active"),t===n&&(n.classList.add("active"),e.children[l].style.display="block")})),i.textContent=n.textContent)})):l.addEventListener("click",(l=>{let n=l.target,s=0;n.closest("#nav-arrow-popup-repair_left")?[...t.children].forEach((e=>{0===s&&"inline"===e.style.display&&(e.style.display="none",e.previousElementSibling?(e.previousElementSibling.style.display="inline",s++):(t.children[t.children.length-1].style.display="inline",s++))})):n.closest("#nav-arrow-popup-repair_right")&&[...t.children].forEach((e=>{0===s&&"inline"===e.style.display&&(e.style.display="none",e.nextElementSibling?(e.nextElementSibling.style.display="inline",s++):(t.children[0].style.display="inline",s++))})),[...t.children].forEach(((t,l)=>{"inline"===t.style.display&&(i.textContent=t.textContent,[...e.children].forEach((e=>{e.style.display="none"})),e.children[l].style.display="block")}))}))})()})();