/// <reference lib="webworker" />

/**
 * LumenLingo Service Worker
 * -  Cache-first for static assets (fonts, CSS, JS, images)
 * -  Network-first with cache fallback for HTML pages
 * -  Offline fallback to /offline for navigation requests
 */

const CACHE_NAME = 'lumenlingo-v1';
const OFFLINE_URL = '/offline';

/** Static asset extensions to cache aggressively */
const STATIC_EXT = /\.(js|css|woff2?|ttf|png|jpg|jpeg|webp|avif|svg|ico)$/;

// @ts-expect-error — ServiceWorker global scope
const sw = /** @type {ServiceWorkerGlobalScope} */ (self);

sw.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // Pre-cache offline fallback page
      cache.add(OFFLINE_URL)
    )
  );
  // Activate immediately
  sw.skipWaiting();
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  sw.clients.claim();
});

sw.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== sw.location.origin) return;

  // Skip API routes and dev paths
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/_next/webpack-hmr')) return;

  // Navigation requests (HTML pages) — network-first with offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful page responses for offline access
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        })
        .catch(() =>
          // Try cached version first, then offline fallback
          caches.match(request).then((cached) => cached ?? caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Static assets — cache-first
  if (STATIC_EXT.test(url.pathname) || url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ??
          fetch(request).then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, clone);
              });
            }
            return response;
          })
      )
    );
    return;
  }
});
