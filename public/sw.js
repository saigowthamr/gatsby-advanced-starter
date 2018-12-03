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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3e6045e028af776e5eca.js"
  },
  {
    "url": "app.a2f933b7ab5f58f2ecfb.css"
  },
  {
    "url": "app-ac0ca7f1c27cf9fea402.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5a70fad2aa4463fd8ff7.js"
  },
  {
    "url": "index.html",
    "revision": "56f6053c33caef8b467180cc6591be1b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3843d00ba7aa3f9492de03a64975a9ab"
  },
  {
    "url": "component---src-pages-index-js.3514f13d2acd6635f70c.css"
  },
  {
    "url": "0-fd8104eaa52415021dfc.js"
  },
  {
    "url": "component---src-pages-index-js-2eefa7e7e6df4f342823.js"
  },
  {
    "url": "static/d/137/path---index-6a9-L17jm0rNnI27svojxwvsd2HRVHk.json",
    "revision": "280732fcbf5f4d8452a4bfaebfd2efdd"
  },
  {
    "url": "component---src-pages-404-js.7630a9c464d8bef121da.css"
  },
  {
    "url": "component---src-pages-404-js-9663302f13aaa0510967.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});