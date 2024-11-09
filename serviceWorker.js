const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style1.css",
  "/js/app.js",
  "/images/coffee1.webp",
  "/images/coffee2.webp",
  "/images/coffee3.webp",
  "/images/coffee4.webp",
  "/images/coffee5.webp",
  "/images/coffee6.webp",
  "/images/coffee7.webp",
  "/images/coffee8.webp",
  "/images/coffee9.webp",
  
  "/images/svg/web-app_1.webp",
  "/images/svg/web-app_1.svg",
  "/images/svg/web-app_2.webp"
    
  
];
//comentarios 7 nov
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
