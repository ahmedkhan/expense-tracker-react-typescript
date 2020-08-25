

var CACHE_NAME = 'my-pwa-cache-v1';
var urlsToCache = [
  "/",
  "/favicon.icon",
  "/asset-manifest.json",
  "/manifest.json",
  "/swDev.js",
  "/index.html",
  "/static/js/2.c0adc85b.chunk.js",
  "/static/js/main.cd07c24b.chunk.js",
  "/static/js/runtime-main.ff41a76f.js",
  "/static/css/main.91bf5878.chunk.css"
];

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(caches => {
        return caches.addAll(urlsToCache);
      })
  );
});

this.addEventListener('activate',function(event){
  event.waitUntil(
    caches.keys().then(function(cacheName){
      return Promise.all(
        cacheName.filter(function(cacheName){
        }).map(function(cacheName){
          return caches.delete(cacheName)
        })
      )
    })
  )
})

this.addEventListener('fetch',event=> {
   event.respondWith(
     caches.match(event.request)
     .then(function(response){
       if(response){
         console.log("Found in cache");
         console.log(event.request);
         console.log(response);
         return response;      

       }
       console.log("Not Found in Cache");
       console.log(event.request);
       return fetch(event.request);
     })
   )
})
  
 








  
    