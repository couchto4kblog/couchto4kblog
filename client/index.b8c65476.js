import{S as t,i as s,s as e,e as l,t as a,c as r,b as n,k as h,d as o,g as c,h as i,j as f,w as u,a as m,q as p,f as g,n as d,l as v}from"./client.4ad3a14a.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function j(t){let s,e,m,p,g=t[1].title+"";return{c(){s=l("li"),e=l("a"),m=a(g),this.h()},l(t){s=r(t,"LI",{});var l=n(s);e=r(l,"A",{rel:!0,href:!0});var a=n(e);m=h(a,g),a.forEach(o),l.forEach(o),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",p="summits/"+t[1].slug)},m(t,l){i(t,s,l),f(s,e),f(e,m)},p(t,s){1&s&&g!==(g=t[1].title+"")&&u(m,g),1&s&&p!==(p="summits/"+t[1].slug)&&c(e,"href",p)},d(t){t&&o(s)}}}function x(t){let s,e,u,x,q,S=t[0],b=[];for(let s=0;s<S.length;s+=1)b[s]=j(E(t,S,s));return{c(){s=m(),e=l("h1"),u=a("Summits"),x=m(),q=l("ul");for(let t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){p('[data-svelte="svelte-hfp9t8"]',document.head).forEach(o),s=g(t),e=r(t,"H1",{});var l=n(e);u=h(l,"Summits"),l.forEach(o),x=g(t),q=r(t,"UL",{class:!0});var a=n(q);for(let t=0;t<b.length;t+=1)b[t].l(a);a.forEach(o),this.h()},h(){document.title="Blog",c(q,"class","svelte-xibqc5")},m(t,l){i(t,s,l),i(t,e,l),f(e,u),i(t,x,l),i(t,q,l);for(let t=0;t<b.length;t+=1)b[t].m(q,null)},p(t,[s]){if(1&s){let e;for(S=t[0],e=0;e<S.length;e+=1){const l=E(t,S,e);b[e]?b[e].p(l,s):(b[e]=j(l),b[e].c(),b[e].m(q,null))}for(;e<b.length;e+=1)b[e].d(1);b.length=S.length}},i:d,o:d,d(t){t&&o(s),t&&o(e),t&&o(x),t&&o(q),v(b,t)}}}function q({params:t,query:s}){return this.fetch("summits.json").then(t=>t.json()).then(t=>({posts:t}))}function S(t,s,e){let{posts:l}=s;return t.$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,S,x,e,{posts:0})}}export{q as preload};