import{S as t,i as s,s as a,a as e,e as n,t as i,q as o,d as r,f as c,c as l,b as u,k as h,g as m,h as f,j as p,w as d,n as v}from"./client.25ee2bb1.js";function g(t){let s,a,g,j,x,b,w=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=i(w),x=e(),b=n("div"),this.h()},l(t){o('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);j=h(s,w),s.forEach(r),x=c(t),b=l(t,"DIV",{class:!0}),u(b).forEach(r),this.h()},h(){m(b,"class","content svelte-gnxal1")},m(t,s){f(t,a,s),f(t,g,s),p(g,j),f(t,x,s),f(t,b,s),b.innerHTML=y},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&w!==(w=t[0].title+"")&&d(j,w),1&a&&y!==(y=t[0].html+"")&&(b.innerHTML=y)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(x),t&&r(b)}}}async function j({params:t,query:s}){const a=await this.fetch(`summits/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function x(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{post:0})}}export{j as preload};