import{S as e,i as n,s as a,e as t,a as s,c as o,b as m,d as r,f as l,g as i,h as c,j as d,t as h,k as u,n as f,l as g,m as M,q as $,o as p,p as v,r as T,u as E,v as k}from"./client.85fcdb4e.js";function w(e,n,a){const t=e.slice();return t[1]=n[a],t}function H(e){let n,a,h,u,f,g=e[1].name+"",M=e[1].done+"";return{c(){n=t("tr"),a=t("td"),h=s(),u=t("td"),f=s(),this.h()},l(e){n=o(e,"TR",{});var t=m(n);a=o(t,"TD",{class:!0}),m(a).forEach(r),h=l(t),u=o(t,"TD",{class:!0}),m(u).forEach(r),f=l(t),t.forEach(r),this.h()},h(){i(a,"class","svelte-ork77c"),i(u,"class","svelte-ork77c")},m(e,t){c(e,n,t),d(n,a),a.innerHTML=g,d(n,h),d(n,u),u.innerHTML=M,d(n,f)},p(e,n){1&n&&g!==(g=e[1].name+"")&&(a.innerHTML=g),1&n&&M!==(M=e[1].done+"")&&(u.innerHTML=M)},d(e){e&&r(n)}}}function y(e){let n,a,M,$,p,v,T,E,k=e[0],y=[];for(let n=0;n<k.length;n+=1)y[n]=H(w(e,k,n));return{c(){n=t("table"),a=t("tr"),M=t("th"),$=h("Mountain"),p=s(),v=t("th"),T=h("Done"),E=s();for(let e=0;e<y.length;e+=1)y[e].c();this.h()},l(e){n=o(e,"TABLE",{class:!0});var t=m(n);a=o(t,"TR",{});var s=m(a);M=o(s,"TH",{class:!0});var i=m(M);$=u(i,"Mountain"),i.forEach(r),p=l(s),v=o(s,"TH",{class:!0});var c=m(v);T=u(c,"Done"),c.forEach(r),s.forEach(r),E=l(t);for(let e=0;e<y.length;e+=1)y[e].l(t);t.forEach(r),this.h()},h(){i(M,"class","svelte-ork77c"),i(v,"class","svelte-ork77c"),i(n,"class","svelte-ork77c")},m(e,t){c(e,n,t),d(n,a),d(a,M),d(M,$),d(a,p),d(a,v),d(v,T),d(n,E);for(let e=0;e<y.length;e+=1)y[e].m(n,null)},p(e,[a]){if(1&a){let t;for(k=e[0],t=0;t<k.length;t+=1){const s=w(e,k,t);y[t]?y[t].p(s,a):(y[t]=H(s),y[t].c(),y[t].m(n,null))}for(;t<y.length;t+=1)y[t].d(1);y.length=k.length}},i:f,o:f,d(e){e&&r(n),g(y,e)}}}function C(e,n,a){let{summits:t}=n;return e.$set=e=>{"summits"in e&&a(0,t=e.summits)},[t]}class W extends e{constructor(e){super(),n(this,e,C,y,a,{summits:0})}}function b(e){let n,a,g,w,H,y,C,b,D,L,O,j,F,z,N,S,B,G,I,A,x,J;const P=new W({props:{summits:e[0].list1}}),R=new W({props:{summits:e[0].list2}}),K=new W({props:{summits:e[0].list3}}),Q=new W({props:{summits:e[0].list4}}),q=new W({props:{summits:e[0].list5}}),U=new W({props:{summits:e[0].list6}});return{c(){n=s(),a=t("h1"),g=h("Couch to 4k"),w=s(),H=t("h2"),y=h("Our Quest to Climb NH's 48 Four-Thousand Footers with Our Dog"),C=s(),b=t("figure"),D=t("span"),L=t("img"),j=h("\n\t   \n\t"),F=t("img"),N=s(),S=t("div"),M(P.$$.fragment),B=s(),M(R.$$.fragment),G=s(),M(K.$$.fragment),I=s(),M(Q.$$.fragment),A=s(),M(q.$$.fragment),x=s(),M(U.$$.fragment),this.h()},l(e){$('[data-svelte="svelte-1y3tuj4"]',document.head).forEach(r),n=l(e),a=o(e,"H1",{class:!0});var t=m(a);g=u(t,"Couch to 4k"),t.forEach(r),w=l(e),H=o(e,"H2",{class:!0});var s=m(H);y=u(s,"Our Quest to Climb NH's 48 Four-Thousand Footers with Our Dog"),s.forEach(r),C=l(e),b=o(e,"FIGURE",{class:!0});var i=m(b);D=o(i,"SPAN",{});var c=m(D);L=o(c,"IMG",{alt:!0,src:!0,class:!0}),j=u(c,"\n\t   \n\t"),F=o(c,"IMG",{alt:!0,src:!0,class:!0}),c.forEach(r),i.forEach(r),N=l(e),S=o(e,"DIV",{class:!0});var d=m(S);p(P.$$.fragment,d),B=l(d),p(R.$$.fragment,d),G=l(d),p(K.$$.fragment,d),I=l(d),p(Q.$$.fragment,d),A=l(d),p(q.$$.fragment,d),x=l(d),p(U.$$.fragment,d),d.forEach(r),this.h()},h(){document.title="Couch to 4k Blog",i(a,"class","svelte-1olzo86"),i(H,"class","svelte-1olzo86"),i(L,"alt","My dog on the couch"),L.src!==(O="homepage/couch-dog.jpg")&&i(L,"src","homepage/couch-dog.jpg"),i(L,"class","svelte-1olzo86"),i(F,"alt","My dog on a mountain"),F.src!==(z="homepage/summit-laying-down.jpg")&&i(F,"src","homepage/summit-laying-down.jpg"),i(F,"class","svelte-1olzo86"),i(b,"class","svelte-1olzo86"),i(S,"class","svelte-1olzo86")},m(e,t){c(e,n,t),c(e,a,t),d(a,g),c(e,w,t),c(e,H,t),d(H,y),c(e,C,t),c(e,b,t),d(b,D),d(D,L),d(D,j),d(D,F),c(e,N,t),c(e,S,t),v(P,S,null),d(S,B),v(R,S,null),d(S,G),v(K,S,null),d(S,I),v(Q,S,null),d(S,A),v(q,S,null),d(S,x),v(U,S,null),J=!0},p:f,i(e){J||(T(P.$$.fragment,e),T(R.$$.fragment,e),T(K.$$.fragment,e),T(Q.$$.fragment,e),T(q.$$.fragment,e),T(U.$$.fragment,e),J=!0)},o(e){E(P.$$.fragment,e),E(R.$$.fragment,e),E(K.$$.fragment,e),E(Q.$$.fragment,e),E(q.$$.fragment,e),E(U.$$.fragment,e),J=!1},d(e){e&&r(n),e&&r(a),e&&r(w),e&&r(H),e&&r(C),e&&r(b),e&&r(N),e&&r(S),k(P),k(R),k(K),k(Q),k(q),k(U)}}}function D(e){return[{list1:[{name:"Mt. Washington",done:""},{name:"Mt. Adams",done:""},{name:"Mt. Jefferson",done:""},{name:"Mt. Monroe",done:""},{name:"Mt. Madison",done:""},{name:"Mt. Lafayette",done:""},{name:"Mt. Lincoln",done:""},{name:"South Twin",done:""}],list2:[{name:"Carter Dome",done:""},{name:"Mt. Moosilauke",done:""},{name:"Mt. Eisenhower",done:""},{name:"North Twin",done:""},{name:"Mt. Carrigain",done:""},{name:"Mt. Bond",done:""},{name:"Middle Carter",done:""},{name:"West Bond",done:""}],list3:[{name:"Mt. Garfield",done:""},{name:"Mt. Liberty",done:""},{name:"South Carter",done:""},{name:"<a href='/summits/Wildcats'>Wildcat A</a>",done:"&#10004;"},{name:"Mt. Hancock",done:""},{name:"South Kinsman",done:""},{name:"Mt. Field",done:""},{name:"<a href='/summits/Mt-Osceola'>Mt. Osceola</a>",done:"&#10004;"}],list4:[{name:"Mt. Flume",done:""},{name:"South Hancock",done:""},{name:"Mt. Pierce",done:""},{name:"North Kinsman",done:""},{name:"Mt. Willey",done:""},{name:"Bondcliff",done:""},{name:"Mt. Zealand",done:""},{name:"North Tripyramid",done:""}],list5:[{name:"Mt. Cabot",done:""},{name:"East Osceola",done:""},{name:"Middle Tripyramid",done:""},{name:"Cannon Mountain",done:""},{name:"<a href='/summits/Mt-Hale'>Mt. Hale</a>",done:"&#10004;"},{name:"<a href='/summits/Mt-Jackson'>Mt. Jackson</a>",done:"&#10004;"},{name:"Mt. Tom",done:""},{name:"<a href='/summits/Wildcats'>Wildcat D</a>",done:"&#10004;"}],list6:[{name:"Mt. Moriah",done:""},{name:"Mt. Passaconaway",done:""},{name:"Owl's Head",done:""},{name:"Mt. Galehead",done:""},{name:"Mt. Whiteface",done:""},{name:"<a href='/summits/Mt-Waumbek'>Mt. Waumbek</a>",done:"&#10004;"},{name:"Mt. Isolation",done:""},{name:"<a href='/summits/Mt-Tecumseh'>Mt. Tecumseh</a>",done:"&#10004;"}]}]}export default class extends e{constructor(e){super(),n(this,e,D,b,a,{})}}