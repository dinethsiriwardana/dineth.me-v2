'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"splash/img/light-2x.png": "55e518e2a77265a75443d68c66bf20a4",
"splash/img/dark-4x.png": "a967f96b3ffb6282135617d958f1eed1",
"splash/img/light-3x.png": "7873d99075d20956025eeb5d1f138933",
"splash/img/dark-3x.png": "7873d99075d20956025eeb5d1f138933",
"splash/img/light-4x.png": "a967f96b3ffb6282135617d958f1eed1",
"splash/img/dark-2x.png": "55e518e2a77265a75443d68c66bf20a4",
"splash/img/dark-1x.png": "6b8cb29b60f24a611b1615a6d5e2061b",
"splash/img/light-1x.png": "6b8cb29b60f24a611b1615a6d5e2061b",
"index.html": "c74879aa2d0b6a0c2e704b38f8c4c9ba",
"/": "c74879aa2d0b6a0c2e704b38f8c4c9ba",
"main.dart.js": "598418be7d7dd49758f5bd2841486591",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/copy_from_source_repo.yml": "c681c79ab1839ea85089627284c91f74",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "7b438dc5db1de3a87bd255804dd6611f",
".git/objects/32/21f25a5a62feba99d0248704f08959b1ab690b": "7fb77e7681f4cf51c357c40761853c82",
".git/objects/pack/pack-7cb79efc45ff49691d83099e8564c1e94629e442.idx": "b3ef1e33a32f42b0fa9352d8f313cab2",
".git/objects/pack/pack-7cb79efc45ff49691d83099e8564c1e94629e442.pack": "bdd0572f05c5992f3efc5970be8ef4a0",
".git/objects/e9/845bea83401b258e4ca6567cea29b602ff1d86": "126348abeafa479e01ab9fe582e9e657",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5dd749642cada91b32594c40ec424ccb",
".git/logs/refs/heads/main": "5dd749642cada91b32594c40ec424ccb",
".git/logs/refs/remotes/origin/HEAD": "324b62e61abbf10bfc2ad65dc9223864",
".git/logs/refs/remotes/origin/main": "ba39ea738f392d571aea25be6c23c3e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3b0e12c5bc089132d4cb8eec12f0c2c8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3b0e12c5bc089132d4cb8eec12f0c2c8",
".git/index": "0db6327afa2b23a217c3369e22506693",
".git/packed-refs": "eee71c3824f39671e58c03ffadfd04ad",
".git/COMMIT_EDITMSG": "e9744f87a11f938021263d51855b9527",
".git/FETCH_HEAD": "e79ecb8717d826743c47baba6d563cee",
"assets/AssetManifest.json": "3db7bb286eda5da551f0a1caf5280402",
"assets/NOTICES": "8d5587e48089538c379c27a358594203",
"assets/image/spotify.png": "cbc5d3efc65c0a0a1b56e8090b7c97ab",
"assets/image/programmingl/ts.png": "6a7076a88c69c0dc4df7e34f4e28e95e",
"assets/image/programmingl/code.png": "52f89b89ac80f35aad08cd42ce85fe9d",
"assets/image/programmingl/flutter.png": "02e39f4351bd6b9348833c6050baeac7",
"assets/image/programmingl/sql.png": "971530b03f34df3ec1ad0965b8b421aa",
"assets/image/programmingl/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/image/programmingl/java.png": "ba6f54079f9e1eb62eecf2a8dcdc20fd",
"assets/image/programmingl/py.png": "4210c51d71efe3554157962e3e0d6b3f",
"assets/image/programmingl/js.png": "86612ad814a169e9b6bbc392fb8159f9",
"assets/image/programmingl/mongo.png": "88c73735787aaed7ee3535beabaacbed",
"assets/image/programmingl/figma.png": "11bac102822cf4f8866bb9128649a727",
"assets/image/programmingl/bootstrap.png": "22bd18f9ee39c5d0427f7d52bf0d4436",
"assets/image/programmingl/vscode.png": "6ac27c6f9faf22507a7f6b227af04e52",
"assets/image/programmingl/jq.png": "e50cf7cd39810508459cf3e11916d840",
"assets/image/programmingl/node.png": "a292185b1bbba805838fe87db8f1b914",
"assets/image/programmingl/go.png": "4b63c88d72267f5d4af74af4c665f095",
"assets/image/programmingl/html.png": "3b821bec2a392accf56b7af2401c90a4",
"assets/image/programmingl/postman.png": "2ddf389f268e3a5f99f8c046200756d9",
"assets/image/programmingl/dotnet.png": "334ec5c9cfb8bed9de5520023096401e",
"assets/image/programmingl/slim.png": "d25a1e66a550ff7b3ff371779a243b71",
"assets/image/programmingl/php.png": "d0e7ac61ed03ba2591405682d0daf909",
"assets/image/programmingl/css.png": "cf865319eb2461f18b8266555909a5bc",
"assets/image/programmingl/dart.png": "80e0cfaf4e39a2700665ae5762d76645",
"assets/image/programmingl/laravel.png": "a7f495342a5caf3c2d0ca8a522a56d25",
"assets/image/in.png": "36c016a8faf2644f3d903baadaf9c982",
"assets/image/fb.png": "8508f879bfeb1c15cf9a7ee25411ac93",
"assets/image/github.jpg": "2ab3e9b5c4c97f1b0857b07629bb9ce2",
"assets/image/intro.png": "5a2918eb8f2e6ff2e2e54a5b573bb737",
"assets/image/bgm.jpg": "c3f84948c3ef48a9b9955dfd98a17a04",
"assets/image/li.png": "3ebd4d3259a3e77d5ff00d18f1b7ddd2",
"assets/image/wa.png": "301fbe7e63aa5db1c16198ee81cc0695",
"assets/image/my.png": "71c9b1a08900bd1039c2a120becd93e1",
"assets/image/chat.png": "15f2696a43688843161336c4ac6a7f45",
"assets/image/bg.jpg": "e18ffe7a937bfda0676a757fe006ab2a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_chess_board/images/green_board.png": "ce9ae5c533ebe93bee85092938f15d19",
"assets/packages/flutter_chess_board/images/brown_board.png": "991f16fa89ceaf98eb79ab8084253b85",
"assets/packages/flutter_chess_board/images/chess_board.png": "14e7651575d4b7667b2da76091e957a3",
"assets/packages/flutter_chess_board/images/2.0x/green_board.png": "c13a78b15c2c047199e4c5354b38e4d0",
"assets/packages/flutter_chess_board/images/2.0x/brown_board.png": "a2e272a369e1a8b804820c79e370f266",
"assets/packages/flutter_chess_board/images/2.0x/orange_board.png": "ad1ce906dd598908c1c68a32d3eacf59",
"assets/packages/flutter_chess_board/images/2.0x/dark_brown_board.png": "2e7a428512da68aa9fd8dfcc9924c172",
"assets/packages/flutter_chess_board/images/3.0x/green_board.png": "dab3af27f76d27dfa2a38e301f2c6683",
"assets/packages/flutter_chess_board/images/3.0x/brown_board.png": "b403298eb7e7f28475e372946699bc09",
"assets/packages/flutter_chess_board/images/3.0x/orange_board.png": "92e5ba21006b61e945e9da086c98940d",
"assets/packages/flutter_chess_board/images/3.0x/dark_brown_board.png": "b488dc862a67c699d0ed82b3d2bcfd99",
"assets/packages/flutter_chess_board/images/orange_board.png": "6b7c6c161c0943a6be5d060392a48416",
"assets/packages/flutter_chess_board/images/dark_brown_board.png": "c8402900184332a76a0d89d30d231fd3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "684ff2fa4416db1453f52ff6b9f00851",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
