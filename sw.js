const CACHE = 'morse-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './lame.min.js',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(async cached => {
      if (cached) return cached;

      const response = await fetch(e.request);
      const cache = await caches.open(CACHE);
      cache.put(e.request, response.clone());
      return response;
    })
  );
});
