import React from "react";
import { f7, f7ready, App, View } from "framework7-react";

import routes from "../ts/routes";
import store from "../ts/store";
import Navbar from "./nav-bar/Navbar";

const MyApp = () => {
  const f7params = {
    name: "gamingwebsite",
    theme: "auto",
    darkMode: false,
    store: store,
    routes: routes,

    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},
  };

  f7ready(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  });

  return (
    <App {...(f7params as any)}>
      <Navbar />
      <View main url="/" browserHistory browserHistorySeparator="" />
    </App>
  );
};

export default MyApp;
