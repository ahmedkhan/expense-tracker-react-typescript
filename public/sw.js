this.addEventListener('install', function(event) {
    console.log("[ServiceWorker] installing Service worker...",event)
});

this.addEventListener('activate',function(event) {
    console.log("[ServiceWorker] Activaing Service worker...",event)
    return this.clients.claim();
});

