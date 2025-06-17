self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dasc-cache-v1').then(cache => {
      return cache.addAll([
        '/discord-pwa/home',
        '/discord-pwa/index.html',
        '/discord-pwa/manifest.json',
        '/discord-pwa/icons/icon-192x192.png',
        '/discord-pwa/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
