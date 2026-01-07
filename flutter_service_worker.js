'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "112fc537e393adda6835a71aa489037a",
"assets/AssetManifest.bin": "99c9ae93f18a5d79e4c5e2a74a73b553",
"assets/AssetManifest.bin.json": "4962ad02aff2fcb1a38f20948ade0c7b",
"assets/assets/images/favicon.webp": "46127cd96eccd31e1d48fbac6ed3aa7e",
"assets/assets/images/figma.png": "c08ac53a53b372bef45d5c4619d1b311",
"assets/assets/images/gogit.png": "50068d938c02f3deab3d98c1c170b90e",
"assets/assets/images/gogit_logo.png": "0097d05cf427b0a515d184cde3cdb840",
"assets/assets/images/kenobi.jpg": "e5cffcb8d3bbc0a269a5ac8e2c8e7eb8",
"assets/assets/images/peerlist_icon.png": "8d530ef2dc14256b67de450f75f453e5",
"assets/assets/images/peerlist_icon2.png": "b65e8eb3c96616810428260a29f92d18",
"assets/assets/images/portfolio.png": "4bb99d878a4408924f9cefa5f10e7972",
"assets/assets/images/profileimage.webp": "77acea76b6e75eb83c7f1c1406138ac4",
"assets/assets/images/profileimage2.webp": "a6ef87e3ce8b7a199f47720bb378aa99",
"assets/assets/images/technical_writing.png": "42d2941e5f2c8ade2146fb064e0d3d93",
"assets/assets/images/tilted.png": "e52184eca8b939eafb09da5e11be0536",
"assets/assets/images/vedas.png": "ac8ffc34600e16dbbf6093cf7835da63",
"assets/assets/images/vedas_logo.png": "9b419368a734fd9bec951dc2dfafc993",
"assets/FontManifest.json": "2f2c96f1f36c74298837e5eee4453ddc",
"assets/fonts/MaterialIcons-Regular.otf": "2bea0bd92cc438666be66262146a97db",
"assets/NOTICES": "2737515fbe436c42ce0996d046afd3b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "749d3883bab74a408ce9f380ef497c89",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "8d0acfbf774979914d3c0d736f4be13e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b41edeb8238e1e35c1193850866b066",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "90580190a5349ea2d3a73ccca4c41e4a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.webp": "46127cd96eccd31e1d48fbac6ed3aa7e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a2253e88ed8a67546a19aff1507d76a1",
"icons/apple-touch-icon.png": "22c7b7178411fbd9d7d1a963cd4a5240",
"icons/favicon.ico": "ea4f3a83fc23d1d75abcea45dc1ff75a",
"icons/icon-192-maskable.png": "45a56830b6f5ff148f7307630013ee32",
"icons/icon-192.png": "7ed7727ae45dff231c7b11cea497f4f6",
"icons/icon-512-maskable.png": "0e2d782eba48cbfb7735786e19b7f16c",
"icons/icon-512.png": "58e34a49136c20e1201d3bbdba809282",
"index.html": "cfc35f29f4254d76e9d8a43317da261b",
"/": "cfc35f29f4254d76e9d8a43317da261b",
"main.dart.js": "30f5ded2b4356c828c52eaeb272922ca",
"manifest.json": "42e7e58f7efe8058115e9d17f28c7850",
"resume.html": "06c29f99b32222af23647e5b5610785c",
"version.json": "5c4257e382c7b153fcdfedef50a90191"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
