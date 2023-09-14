import version from "../data/version.json";

console.log('GELD');

if ("serviceWorker" in navigator) {
  const lastVersion = localStorage.getItem("version");

  if (lastVersion !== version.mainv) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      Promise.allSettled(
        registrations.map((registration) => registration.unregister())
      ).then(() => {
        localStorage.setItem("version", version.mainv);
        location.reload();
      });
    });
  } else {
    registerSw();
  }
}

function registerSw() {
  navigator.serviceWorker.register("/sw.js", {
    scope: "/~uv/"
  });
}