!function(){"use strict";const e=["client/client.aa2160bf.js","client/[slug].99be1add.js","client/about.067c4a1e.js","client/index.30768d90.js","client/index.6b835ef3.js","client/client.30685531.js"].concat(["service-worker-index.html","bear-brook/bridge-ruins.jpg","bear-brook/dog-wife-rock.jpg","bear-brook/empty-trail.jpg","bear-brook/perky-dog-river.jpg","bear-brook/pup-near-pines.jpg","bear-brook/toad.jpg","bear-brook/trail-map.jpg","blue-job/blue-job-summit.jpg","blue-job/little-blue-job-summit.jpg","blue-job/muddy-trail.jpg","blue-job/pond-view.jpg","blue-job/summit-wife-and-dog.jpg","favicon.png","global.css","homepage/couch-dog.jpg","homepage/summit-laying-down.jpg","logo-192.png","logo-512.png","manifest.json","mt-rowe/dog-and-wife-summit.jpg","mt-rowe/dog-on-trail.jpg","mt-rowe/drink.jpg","mt-rowe/happy-dog-trail.jpg","mt-rowe/sleepy-pup.jpg","mt-rowe/summit-full-dog.jpg","mt-rowe/summit-happy-dog.jpg","mt-rowe/summit-pano-left.jpg","mt-rowe/summit-pano-mid.jpg","mt-rowe/summit-pano-right.jpg","mt-rowe/trail-map-small.jpg","mt-rowe/trail-map.jpg","mt-rowe/usgs-earthquake-sensor.jpg","mt-rowe/wife-covered-head.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1590279143790").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1590279143790"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&t.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590279143790").then(async t=>{try{const o=await fetch(e.request);return t.put(e.request,o.clone()),o}catch(o){const a=await t.match(e.request);if(a)return a;throw o}}))))})}();
