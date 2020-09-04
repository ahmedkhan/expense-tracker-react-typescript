var CACHE_NAME = 'Static'

var urlsToCache = [
    "/",
    "/static/js/bundle.js",
    "/static/js/0.chunk.js",
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
        caches.open(CACHE_NAME)
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
            }
        })
    );
});
 
 
