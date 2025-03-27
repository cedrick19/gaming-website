import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/locales/en.json";
import tl from "../i18n/locales/ph.json";
import chs from "../i18n/locales/chs.json";
import cht from "../i18n/locales/cht.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tl: {
      translation: tl,
    },
    chs: {
      translation: chs,
    },
    cht: {
      translation: cht,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
