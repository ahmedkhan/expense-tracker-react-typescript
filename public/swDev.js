
let cacheName = "AppV1";

this.addEventListener("install", (event)=>{
 event.waitUntil(
   caches.open(cacheName).then((cache)=>{
     cache.addAll([
       "/static/js/bundle.js",
       "/static/js/1.chunk.js",
       "/static/js/main.chunk.js",
       "/index.html",
       "/" 
     ])
   })
 )
})


this.addEventListener("fetch",(event)=>{
  event.respondWith(
    caches.match(event.request).then((resp)=>{
      if(resp){
        return resp
      }
    })
  )
})
