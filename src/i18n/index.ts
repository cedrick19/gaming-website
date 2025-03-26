import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import tl from "../locales/ph.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tl: {
      translation: tl,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
