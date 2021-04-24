import { createI18n } from "vue-i18n";

import { supportedLocale } from "@/types";
import { checkForLocale } from "@/utils/locale";

import languages from "./languages.json";

const preferedLocale: supportedLocale = checkForLocale();
const fallbackLocale = "en";

const messages = languages;

const i18n = createI18n({
  legacy: false,
  locale: preferedLocale,
  fallbackLocale: fallbackLocale,
  messages,
});

export default i18n;
