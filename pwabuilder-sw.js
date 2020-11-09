// This is the service worker with the Cache-first network

const CACHE = "pwabuilder-precache";

importScripts('/scripts/workbox/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: '/scripts/workbox/'
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.CacheFirst({
    cacheName: CACHE
  })
);
