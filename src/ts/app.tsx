import React from "react";
import { createRoot } from "react-dom/client";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import "framework7/css/bundle";
import "../assets/css/icons.css";
import "../assets/css/app.scss";
import App from "../components/app";
import "../i18n";

Framework7.use(Framework7React);

const rootElement = document.getElementById("app");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element with id 'app' not found.");
}

// ✅ Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // If the service worker file is being served from the root, use /service-worker.js
    navigator.serviceWorker
      .register("/service-worker.js") // or /service-worker.ts if you are compiling ts to js
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
