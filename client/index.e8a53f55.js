import{S as e,i as n,s as a,e as t,a as o,t as s,c as r,b as m,d as l,f as c,g as d,h as i,j as h,k as u,l as f,n as g,m as $,o as M,q as p,p as v,r as E,u as T,v as w,w as k}from"./client.5d84ff8d.js";function H(e,n,a){const t=e.slice();return t[1]=n[a],t}function y(e){let n,a,g,$,M,p,v=e[1].name+"",E=e[1].done+"";return{c(){n=t("tr"),a=t("td"),g=o(),$=t("td"),M=s(E),p=o(),this.h()},l(e){n=r(e,"TR",{});var t=m(n);a=r(t,"TD",{class:!0}),m(a).forEach(l),g=c(t),$=r(t,"TD",{class:!0});var o=m($);M=d(o,E),o.forEach(l),p=c(t),t.forEach(l),this.h()},h(){i(a,"class","svelte-ork77c"),i($,"class","svelte-ork77c")},m(e,t){h(e,n,t),u(n,a),a.innerHTML=v,u(n,g),u(n,$),u($,M),u(n,p)},p(e,n){1&n&&v!==(v=e[1].name+"")&&(a.innerHTML=v),1&n&&E!==(E=e[1].done+"")&&f(M,E)},d(e){e&&l(n)}}}function C(e){let n,a,f,M,p,v,E,T,w=e[0],k=[];for(let n=0;n<w.length;n+=1)k[n]=y(H(e,w,n));return{c(){n=t("table"),a=t("tr"),f=t("th"),M=s("Mountain"),p=o(),v=t("th"),E=s("Done"),T=o();for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){n=r(e,"TABLE",{class:!0});var t=m(n);a=r(t,"TR",{});var o=m(a);f=r(o,"TH",{class:!0});var s=m(f);M=d(s,"Mountain"),s.forEach(l),p=c(o),v=r(o,"TH",{class:!0});var i=m(v);E=d(i,"Done"),i.forEach(l),o.forEach(l),T=c(t);for(let e=0;e<k.length;e+=1)k[e].l(t);t.forEach(l),this.h()},h(){i(f,"class","svelte-ork77c"),i(v,"class","svelte-ork77c"),i(n,"class","svelte-ork77c")},m(e,t){h(e,n,t),u(n,a),u(a,f),u(f,M),u(a,p),u(a,v),u(v,E),u(n,T);for(let e=0;e<k.length;e+=1)k[e].m(n,null)},p(e,[a]){if(1&a){let t;for(w=e[0],t=0;t<w.length;t+=1){const o=H(e,w,t);k[t]?k[t].p(o,a):(k[t]=y(o),k[t].c(),k[t].m(n,null))}for(;t<k.length;t+=1)k[t].d(1);k.length=w.length}},i:g,o:g,d(e){e&&l(n),$(k,e)}}}function D(e,n,a){let{summits:t}=n;return e.$set=e=>{"summits"in e&&a(0,t=e.summits)},[t]}class b extends e{constructor(e){super(),n(this,e,D,C,a,{summits:0})}}function j(e){let n,a,f,$,H,y,C,D,j,F,O,W,z,L,N,S,B,G,I,A,x,P;const R=new b({props:{summits:e[0].list1}}),J=new b({props:{summits:e[0].list2}}),K=new b({props:{summits:e[0].list3}}),Q=new b({props:{summits:e[0].list4}}),q=new b({props:{summits:e[0].list5}}),U=new b({props:{summits:e[0].list6}});return{c(){n=o(),a=t("h1"),f=s("Couch to 4k"),$=o(),H=t("h2"),y=s("Our Quest to Climb NH's 48 Four-Thousand Footers with Our Dog"),C=o(),D=t("figure"),j=t("span"),F=t("img"),W=s("\n\t   \n\t"),z=t("img"),N=o(),S=t("div"),M(R.$$.fragment),B=o(),M(J.$$.fragment),G=o(),M(K.$$.fragment),I=o(),M(Q.$$.fragment),A=o(),M(q.$$.fragment),x=o(),M(U.$$.fragment),this.h()},l(e){p('[data-svelte="svelte-1y3tuj4"]',document.head).forEach(l),n=c(e),a=r(e,"H1",{class:!0});var t=m(a);f=d(t,"Couch to 4k"),t.forEach(l),$=c(e),H=r(e,"H2",{class:!0});var o=m(H);y=d(o,"Our Quest to Climb NH's 48 Four-Thousand Footers with Our Dog"),o.forEach(l),C=c(e),D=r(e,"FIGURE",{class:!0});var s=m(D);j=r(s,"SPAN",{});var i=m(j);F=r(i,"IMG",{alt:!0,src:!0,class:!0}),W=d(i,"\n\t   \n\t"),z=r(i,"IMG",{alt:!0,src:!0,class:!0}),i.forEach(l),s.forEach(l),N=c(e),S=r(e,"DIV",{class:!0});var h=m(S);v(R.$$.fragment,h),B=c(h),v(J.$$.fragment,h),G=c(h),v(K.$$.fragment,h),I=c(h),v(Q.$$.fragment,h),A=c(h),v(q.$$.fragment,h),x=c(h),v(U.$$.fragment,h),h.forEach(l),this.h()},h(){document.title="Couch to 4k Blog",i(a,"class","svelte-1olzo86"),i(H,"class","svelte-1olzo86"),i(F,"alt","My dog on the couch"),F.src!==(O="homepage/couch-dog.jpg")&&i(F,"src","homepage/couch-dog.jpg"),i(F,"class","svelte-1olzo86"),i(z,"alt","My dog on a mountain"),z.src!==(L="homepage/summit-laying-down.jpg")&&i(z,"src","homepage/summit-laying-down.jpg"),i(z,"class","svelte-1olzo86"),i(D,"class","svelte-1olzo86"),i(S,"class","svelte-1olzo86")},m(e,t){h(e,n,t),h(e,a,t),u(a,f),h(e,$,t),h(e,H,t),u(H,y),h(e,C,t),h(e,D,t),u(D,j),u(j,F),u(j,W),u(j,z),h(e,N,t),h(e,S,t),E(R,S,null),u(S,B),E(J,S,null),u(S,G),E(K,S,null),u(S,I),E(Q,S,null),u(S,A),E(q,S,null),u(S,x),E(U,S,null),P=!0},p:g,i(e){P||(T(R.$$.fragment,e),T(J.$$.fragment,e),T(K.$$.fragment,e),T(Q.$$.fragment,e),T(q.$$.fragment,e),T(U.$$.fragment,e),P=!0)},o(e){w(R.$$.fragment,e),w(J.$$.fragment,e),w(K.$$.fragment,e),w(Q.$$.fragment,e),w(q.$$.fragment,e),w(U.$$.fragment,e),P=!1},d(e){e&&l(n),e&&l(a),e&&l($),e&&l(H),e&&l(C),e&&l(D),e&&l(N),e&&l(S),k(R),k(J),k(K),k(Q),k(q),k(U)}}}function F(e){return[{list1:[{name:"Mt. Washington",done:""},{name:"Mt. Adams",done:""},{name:"Mt. Jefferson",done:""},{name:"Mt. Monroe",done:""},{name:"Mt. Madison",done:""},{name:"Mt. Lafayette",done:""},{name:"Mt. Lincoln",done:""},{name:"South Twin",done:""}],list2:[{name:"Carter Dome",done:""},{name:"Mt. Moosilauke",done:""},{name:"Mt. Eisenhower",done:""},{name:"North Twin",done:""},{name:"Mt. Carrigain",done:""},{name:"Mt. Bond",done:""},{name:"Middle Carter",done:""},{name:"West Bond",done:""}],list3:[{name:"Mt. Garfield",done:""},{name:"Mt. Liberty",done:""},{name:"South Carter",done:""},{name:"Wildcat A",done:""},{name:"Mt. Hancock",done:""},{name:"South Kinsman",done:""},{name:"Mt. Field",done:""},{name:"Mt. Osceola",done:""}],list4:[{name:"Mt. Flume",done:""},{name:"South Hancock",done:""},{name:"Mt. Pierce",done:""},{name:"North Kinsman",done:""},{name:"Mt. Willey",done:""},{name:"Bondcliff",done:""},{name:"Mt. Zealand",done:""},{name:"North Tripyramid",done:""}],list5:[{name:"Mt. Cabot",done:""},{name:"East Osceola",done:""},{name:"Middle Tripyramid",done:""},{name:"Cannon Mountain",done:""},{name:"Mt. Hale",done:""},{name:"Mt. Jackson",done:""},{name:"Mt. Tom",done:""},{name:"Wildcat D",done:""}],list6:[{name:"Mt. Moriah",done:""},{name:"Mt. Passaconaway",done:""},{name:"Owl's Head",done:""},{name:"Mt. Galehead",done:""},{name:"Mt. Whiteface",done:""},{name:"Mt. Waumbek",done:""},{name:"Mt. Isolation",done:""},{name:"Mt. Tecumseh*",done:""}]}]}export default class extends e{constructor(e){super(),n(this,e,F,j,a,{})}}
