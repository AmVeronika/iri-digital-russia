(()=>{"use strict";var e,t={841:(e,t,r)=>{var o=r(667),l=r(734),n=r.n(l),c=r(804),u=r.n(c);o.ZP.registerPlugin(n(),u());const i=()=>{const e=[document.querySelector(".header__h1"),document.querySelector(".header__subtitle"),document.querySelector(".description__title"),document.querySelector(".description__text"),document.querySelector(".description__icon"),document.querySelectorAll(".block-1__title"),document.querySelectorAll(".block-1__text"),document.querySelectorAll(".block-2__item"),document.querySelector(".block-3__title"),document.querySelector(".block-3__list")],t=document.querySelectorAll(".button-arrow"),r=document.querySelector(".main");t.forEach((e=>{e.onclick=()=>{r.scrollIntoView({behavior:"smooth"})}})),(e=>{if(null==e||!e.length)return;const t=o.ZP.utils.toArray(e);console.log("elements",t),t.forEach((e=>{n().create({trigger:e,start:"top 100%",end:"top 100%",once:!0,onEnter:()=>{e.classList.add("entered")}})}))})(e)};setTimeout((()=>{const e=document.querySelector("body"),t=document.getElementById("preloader");t.classList.add("hide"),e.style.height="100%",e.style.overflowY="auto",setTimeout((()=>{t.style.opacity="0"}),400),setTimeout((()=>{t.remove(),i&&console.log("animate started"),i()}),700)}),2500)}},r={};function o(e){var l=r[e];if(void 0!==l)return l.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,l,n)=>{if(!r){var c=1/0;for(a=0;a<e.length;a++){for(var[r,l,n]=e[a],u=!0,i=0;i<r.length;i++)(!1&n||c>=n)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(u=!1,n<c&&(c=n));if(u){e.splice(a--,1);var s=l();void 0!==s&&(t=s)}}return t}n=n||0;for(var a=e.length;a>0&&e[a-1][2]>n;a--)e[a]=e[a-1];e[a]=[r,l,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var l,n,[c,u,i]=r,s=0;if(c.some((t=>0!==e[t]))){for(l in u)o.o(u,l)&&(o.m[l]=u[l]);if(i)var a=i(o)}for(t&&t(r);s<c.length;s++)n=c[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(a)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[228],(()=>o(841)));l=o.O(l)})();
//# sourceMappingURL=app.js.map