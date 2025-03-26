import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Welcome to my App",
        description: "This is a multilingual app using i18n.",
        not_found: "Oops! The page you're looking for doesn't exist.",
        go_home: "Go Home",
      },
    },
    tl: {
      translation: {
        title: "Maligayang pagdating sa aking App",
        description: "Ito ay isang multilingual na app gamit ang i18n.",
        not_found: "Paumanhin! Ang pahinang hinahanap mo ay hindi umiiral.",
        go_home: "Bumalik sa Home",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
