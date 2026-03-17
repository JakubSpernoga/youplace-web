var CACHE_NAME = 'youplace-v1';
var ASSETS = [
  'index.html',
  'bg.jpg',
  'person1.png',
  'person2.png',
  'person3.png',
  'person4.png',
  'person5.png',
  'jakub.png',
  'kalkulacky.html',
  'kalkulacky.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
             .map(function(n) { return caches.delete(n); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  // Skip non-GET requests
  if (e.request.method !== 'GET') return;

  // Skip AI proxy requests - they won't work offline
  if (e.request.url.indexOf(':8081') !== -1) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return new Response(JSON.stringify({ error: 'Offline - AI chat is not available without internet connection.' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // Cache-first strategy with network update
  e.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(e.request).then(function(cached) {
        var fetchPromise = fetch(e.request).then(function(response) {
          if (response && response.status === 200 && response.type === 'basic') {
            cache.put(e.request, response.clone());
          }
          return response;
        }).catch(function() {
          return cached;
        });
        return cached || fetchPromise;
      });
    })
  );
});
