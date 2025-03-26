/// <reference lib="webworker" />

declare var self: ServiceWorkerGlobalScope;

const CACHE_NAME = "gaming-website-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/css/app.scss",
  "/assets/css/icons.css",
  "/ts/app.tsx",
];

// ✅ Install event - Cache essential files
self.addEventListener("install", (event: Event & ExtendableEvent) => {
  console.log("[Service Worker] Installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching files...");
      return cache.addAll(ASSETS_TO_CACHE).catch(console.error);
    })
  );
});

// ✅ Activate event - Cleanup old caches
self.addEventListener("activate", (event: Event & ExtendableEvent) => {
  console.log("[Service Worker] Activating...");

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${cache}`);
            return caches.delete(cache);
          }
        })
      )
    )
  );

  // ✅ Ensure immediate activation
  return self.clients.claim();
});

// ✅ Fetch event - Serve from cache or fetch from network
self.addEventListener("fetch", (event: Event & FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then(async (cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        // Fetch from network & cache response
        const networkResponse = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      } catch (error) {
        console.error("[Service Worker] Fetch failed:", error);
        throw error;
      }
    })
  );
});
