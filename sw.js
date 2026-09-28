/* AI FLN GURU — service worker v2: no page caching (the app itself is cached by the loader
   in IndexedDB and updated from the master server). Clears every old cache. */
self.addEventListener('install',function(e){ self.skipWaiting() });
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(k){ return Promise.all(k.map(function(n){ return caches.delete(n) })) }).then(function(){ return self.clients.claim() }));
});
self.addEventListener('fetch',function(){ /* straight to the network */ });
