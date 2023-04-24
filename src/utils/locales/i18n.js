import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru_RU from "./ru-RU.json";
import en_US from "./en-US.json";
import fr_FR from "./fr-FR.json";
import uk_UA from "./uk-UA.json";
import de_DE from "./de-DE.json";

const resources = {
  "en-US": en_US["en-US"],
  "ru-RU": ru_RU["ru-RU"],
  "fr-FR": fr_FR["fr-FR"],
  "uk-UA": uk_UA["uk-UA"],
  "de-DE": de_DE["de-DE"],
};

function userLang() {
  let userLang = navigator.language;
  if (/^ru\b/.test(userLang)) {
    return "ru-RU";
  } else if (/^es\b/.test(userLang)) {
    return "es-PA";
  } else if (/^en\b/.test(userLang)) {
    return "en-US";
  } else if (/^fr\b/.test(userLang)) {
    return "fr-FR";
  } else if (/^pt\b/.test(userLang)) {
    return "pt-BR";
  } else if (/^it\b/.test(userLang)) {
    return "it-IT";
  } else if (/^tt\b/.test(userLang)) {
    return "tt-RU";
  } else {
    return "en-US";
  }
}

const getLang = () => {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  }
  let lang = userLang();
  localStorage.setItem("lang", lang);
  return lang;
};

i18n.use(initReactI18next).init({
  lng: getLang(),
  fallbackLng: "en-US",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
