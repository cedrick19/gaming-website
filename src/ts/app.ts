import { createRoot } from "react-dom/client";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import "framework7/css/bundle";
import "../assets/css/icons.css";
import "../assets/css/app.css";
import "../i18n";
import { createElement } from "react";
import MyApp from "@/app";

// eslint-disable-next-line react-hooks/rules-of-hooks
Framework7.use(Framework7React);

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(createElement(MyApp));
