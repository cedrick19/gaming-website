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
self.addEventListener("fetch", (event: Event & FetchEvent) => {
  if (!event.request.url.startsWith("http")) {
    return; // Ignore non-HTTP requests (e.g., chrome-extension://)
  }

  event.respondWith(
    caches.match(event.request).then(async (cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(event.request);

        // Only cache successful GET requests
        if (networkResponse && networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }

        return networkResponse;
      } catch (error) {
        console.error("[Service Worker] Fetch failed:", error);
        throw error;
      }
    })
  );
});
