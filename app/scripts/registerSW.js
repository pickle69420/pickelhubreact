import { mainv } from "../data/version.json";

console.log('GELD');

if ("serviceWorker" in navigator) {
  const lastVersion = localStorage.getItem("version");

  if (lastVersion !== mainv) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      Promise.allSettled(
        registrations.map((registration) => registration.unregister())
      ).then(() => {
        localStorage.setItem("version", version);
        location.reload();
      });
    });
  } else {
    registerSw();
  }
}

function registerSw() {
  navigator.serviceWorker.register("/sw.js", {
    scope: __uv$config.prefix
  });
}