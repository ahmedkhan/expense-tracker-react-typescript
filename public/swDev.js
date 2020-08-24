var CACHE_NAME = 'my-pwa-cache-v1';
var urlsToCache = [
  "/static/js/main.chunk.js",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "index.html",
  "/"
];

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});

