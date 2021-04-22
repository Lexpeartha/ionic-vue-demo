import { createI18n } from "vue-i18n";

import { supportedLocale } from "@/types";
import { checkLocalStorageForLocale } from "@/utils/locale";

import languages from "./languages.json";

const preferedLocale: supportedLocale = checkLocalStorageForLocale();

const messages = languages;

const i18n = createI18n({
  locale: preferedLocale,
  fallbackLocale: "en",
  messages,
});

export default i18n;
