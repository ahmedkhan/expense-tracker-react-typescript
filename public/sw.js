var CACHE_STATIC_NAME = 'Static-V4'
var CACHE_DYNAMIC_NAME = 'dynamic-V2'
var urlsToCache = [
    "/",
    "/static/js/bundle.js",
    "/static/js/1.chunk.js",
    "static/js/main.chunk.js",
    "/sw.js",
    "/favicon.ico",
    "/manifest.json",
    "/images/icons/exp256X256.png",
    "https://fonts.googleapis.com/css?family=Lato&display=swap",
    "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2",
    
]
this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then((cache) => {
                console.log('Opened Cache')
                return (
                    cache.addAll(urlsToCache)
                    
                )

            })
    )
});

this.addEventListener('activate',function(event) {
    console.log("[ServiceWorker] Activaing Service worker...",event)
    event.waitUntil(
        caches.keys()
         .then(function(keyList){
             return Promise.all(keyList.map((key)=>{
                 if (key !==CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME){
                     console.log("Service Worker Removing Old Caches...", key)
                     return caches.delete(key);

                 }
             }));
         })
    );
    return this.clients.claim();
});
 
this.addEventListener('fetch',function(event) {   
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if (response){
                return response
            } else {
                return fetch(event.request)
                .then(function(res){
                    return caches.open(CACHE_DYNAMIC_NAME)
                     .then(function(cache){
                         cache.put(event.request.url , res.clone());
                         return res
                     })
                })
                .catch(function(err){

                });
            }
        })
    );
});
 
 
