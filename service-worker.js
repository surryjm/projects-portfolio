const cacheName = 'site-cache-v1';
const assetsToCache = [
  '/',
  'index.html',
  'styles/stylesheet.css',
  'main.js',
  'images/apple-touch-icon.png',
  'images/coffee-shop-image.jpg',
  'images/contact-form-image.jpg',
  'images/education-app-image.jpg',
  'images/coffee-shop-image.webp',
  'images/contact-form-image.webp',
  'images/education-app-image.webp',
  'images/favicon.jpeg',
  'images/icon-192x192.png',
  'images/icon-256x256.png',
  'images/icon-384x384.png',
  'images/icon-512x512.png',
  'images/rock-paper-scissors-image.webp',
  'images/rock-paper-scissors-image.webp'
];

self.addEventListener('install', event => {
  //console.log('Attempting to install service worker and cache static assets');
  // self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('activate', event => {
  //console.log('Activating new service worker...');
  const cacheAllowlist = [assetsToCache];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  //console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(res => {
      return res || fetch(event.request);
    })
  );
});