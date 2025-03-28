import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../i18n/locales/en.json";
import tl from "../i18n/locales/ph.json";
import chs from "../i18n/locales/chs.json";
import cht from "../i18n/locales/cht.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tl: { translation: tl },
      chs: { translation: chs },
      cht: { translation: cht },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
