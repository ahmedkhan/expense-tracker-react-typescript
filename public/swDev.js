console.log('registered...')
 

var CACHE_NAME = 'Expense-tracker'

var urlsToCache = [    
    "/static/js/main.chunk.js",
    "/static/js/bundle.js",
    "/static/js/0.chunk.js",
    "index.html",       
    "/"


]

this.addEventListener('install', (event) => {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache')
                return (
                    cache.addAll(urlsToCache)
                    
                )

            })
    )

})



const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true
  };


this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request, options)
                .then((response) => {
                    if (response) {
                        console.log(response)
                        return (response)
                    } else {
                        return fetch(event.request).then((response) => {
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                console.log(response)
                                return response;
                            }
                            var responseToCache = response.clone();

                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(event.request, responseToCache)
                            })
                            console.log(response)
                            return response;

                        }).catch((err) => {
                            console.log('err', err)
                        })

                    }

                }).catch((err) => {
                    console.log('err', err)

                })
        )
    }

})