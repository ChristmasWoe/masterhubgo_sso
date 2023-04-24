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

i18n.use(initReactI18next).init({
  lng: "ru-RU",
  fallbackLng: "en-US",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
