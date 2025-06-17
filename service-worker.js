self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dasc-cache-v1').then(cache => {
      return cache.addAll([
        '/Kleversuite-PWA/home',
        '/Kleversuite-PWA/index.html',
        '/Kleversuite-PWA/manifest.json',
        '/Kleversuite-PWA/icons/icon-192x192.png',
        '/Kleversuite-PWA/icons/icon-512x512.png'
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
