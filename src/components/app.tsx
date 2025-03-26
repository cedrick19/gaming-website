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
  };

  return (
    <App {...(f7params as any)}>
      <Navbar />
      <View main url="/" browserHistory browserHistorySeparator="" />
    </App>
  );
};

export default MyApp;
