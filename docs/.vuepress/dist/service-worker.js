/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3c3a4a683fef86a0dc9fc864ae344497"
  },
  {
    "url": "about/index.html",
    "revision": "5a65e87cfc0dbc9c45aff7a3a6aa9b2f"
  },
  {
    "url": "assets/css/0.styles.21feea46.css",
    "revision": "ab2af68e5dfd2ef4f93c3ffcd3e7f35d"
  },
  {
    "url": "assets/img/2-float-center.8e95d48e.png",
    "revision": "8e95d48ea30687cb7ef51201c2e789d7"
  },
  {
    "url": "assets/img/3-box-pack-center.1bcc0f9d.png",
    "revision": "1bcc0f9da35c4dbe8eb3d68ff3a356d2"
  },
  {
    "url": "assets/img/4-just-content.5c5315eb.png",
    "revision": "5c5315eb053e6f57a6a046a9f2396051"
  },
  {
    "url": "assets/img/5-transform.1fb87690.png",
    "revision": "1fb87690849ad4c67b7bb65e8c7f754e"
  },
  {
    "url": "assets/img/6-margin-left.6a0f7d6d.png",
    "revision": "6a0f7d6d7386028141d99172247e608a"
  },
  {
    "url": "assets/img/7-top-left-right-bottom.f2322043.png",
    "revision": "f2322043c9cb7a306a779811952cd79a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9f2b75cc.js",
    "revision": "013e84f23461c3c0450adca3e2ce2445"
  },
  {
    "url": "assets/js/11.438a67f0.js",
    "revision": "a333e8c091ff8762da89d546998bcb61"
  },
  {
    "url": "assets/js/12.750d6fc8.js",
    "revision": "dda15c194ec4ac1ef26a193bcdaabf3d"
  },
  {
    "url": "assets/js/13.9f03e751.js",
    "revision": "9d4a1eca60f37f86050ab282d33199a9"
  },
  {
    "url": "assets/js/14.20eaa9a6.js",
    "revision": "1f05bec7986a988212cabb84bbd9e7ee"
  },
  {
    "url": "assets/js/15.33b0d8df.js",
    "revision": "25d821c8c9ea94844b29866d0f5945c7"
  },
  {
    "url": "assets/js/16.dc800810.js",
    "revision": "c916051eb85e2a0abb425f53ae810404"
  },
  {
    "url": "assets/js/17.af64d785.js",
    "revision": "04f5f972093a000b24af9da85fbe77ad"
  },
  {
    "url": "assets/js/18.ed397d6b.js",
    "revision": "33cf789e326b56823f2724d759fc8f08"
  },
  {
    "url": "assets/js/19.a845b699.js",
    "revision": "88312ec7bb2fe60f23013b905c543f79"
  },
  {
    "url": "assets/js/2.6c54d71c.js",
    "revision": "fea58811c40f3b9bc08e1585efdc693a"
  },
  {
    "url": "assets/js/20.38b64755.js",
    "revision": "a9ece71ed69429248ffd37ef3c3ba2b9"
  },
  {
    "url": "assets/js/21.c955dc67.js",
    "revision": "aa87dfdf3566e7d7c6048ddb3e841b10"
  },
  {
    "url": "assets/js/22.a799ccd4.js",
    "revision": "c0cf96335ce8f38bc55e9dca7f2ceea2"
  },
  {
    "url": "assets/js/23.45dd1232.js",
    "revision": "2aba9d3151e566dbf366ea468f18d8e7"
  },
  {
    "url": "assets/js/3.06dfcc13.js",
    "revision": "2773b7f6f00d322d8c5cecb0063dc7c0"
  },
  {
    "url": "assets/js/4.b57045e8.js",
    "revision": "24016f287b8cfbf0cf81cb42ce3b8399"
  },
  {
    "url": "assets/js/5.1cc95f03.js",
    "revision": "c69a4b2f6fe56308b30d350d14ac377e"
  },
  {
    "url": "assets/js/6.1d08c912.js",
    "revision": "fb0ad8997e008f49319a427798d19984"
  },
  {
    "url": "assets/js/7.e280942e.js",
    "revision": "4447fe94eac60c7c35d2b8541fa7db86"
  },
  {
    "url": "assets/js/8.60c160bd.js",
    "revision": "6f37098ac99a8a5eff7c7c814c8bdacd"
  },
  {
    "url": "assets/js/9.036c8ac5.js",
    "revision": "6b4563667473dc808a537fa17ff2cdf6"
  },
  {
    "url": "assets/js/app.e9bfad99.js",
    "revision": "760bd4f81a2850d64834e725eeed3db8"
  },
  {
    "url": "css/style.css",
    "revision": "be10e077c03070061f62ce57b451639a"
  },
  {
    "url": "images/itclancoder.jpeg",
    "revision": "5cfa284c4fb53108a3571bd18b7024c7"
  },
  {
    "url": "index.html",
    "revision": "637f7347f9818cfcd3c20e646527ccc7"
  },
  {
    "url": "interview/index.html",
    "revision": "54151fcf9e6215afbce5707dd16c00c4"
  },
  {
    "url": "qianduan/css/1-center.html",
    "revision": "bf74b0128eff768acb0bf7a3d991e52a"
  },
  {
    "url": "qianduan/css/2-flex-box.html",
    "revision": "96666fc60e210a772d4f0080931d4d66"
  },
  {
    "url": "qianduan/css/index.html",
    "revision": "3f800d0b21241d04fb33184cf4a0c4b4"
  },
  {
    "url": "qianduan/index.html",
    "revision": "8e1bb11b50772c2db9e7a2b5a3e8b7ba"
  },
  {
    "url": "qianduan/js/1-scope.html",
    "revision": "7a78c1fda0d7de995435336e5a6c5fc5"
  },
  {
    "url": "qianduan/js/index.html",
    "revision": "171d5fd172f58dbe492c8b07235f76ab"
  },
  {
    "url": "qianduan/tools/1-vuepress-build-blog.html",
    "revision": "f28d6973c3d1606305bb780410c28724"
  },
  {
    "url": "qianduan/tools/index.html",
    "revision": "fb81851f8c23dd04165f064f6d022782"
  },
  {
    "url": "wechat/index.html",
    "revision": "af3a090307ee0029c4bf56424f887554"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
