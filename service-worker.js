self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dasc-cache-v1').then(cache => {
      return cache.addAll([
        '/home.html',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});
