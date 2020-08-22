export default function swDev() {

    if ('serviceWorker' in navigator) {        
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/swDev.js').then((registration) => {
                console.log('ServiceWorker registration successful with scope', registration);

            }).catch((err) => {
                console.log('ServiceWorker registration failed: ', err)
            })

        })

    }
} 


