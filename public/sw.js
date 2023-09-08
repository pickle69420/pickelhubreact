/*global UVServiceWorker*/
importScripts("/uv/uv.bundle.js");
importScripts("/uvconfig/uv.config.js");
importScripts("/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));