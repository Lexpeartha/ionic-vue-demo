import { useI18n } from "vue-i18n";
import { supportedLocale } from "@/types";

const localeAccessName = "locale";

const checkLocalStorageForLocale = (): supportedLocale => {
  // Gets either the locale from the local storage or fallback "en"
  return (localStorage.getItem(localeAccessName) as supportedLocale) || "en";
};

const setLocalStorageLocale = (newLocale: supportedLocale): void => {
  return localStorage.setItem(localeAccessName, newLocale);
};

const updateLocale = (newLocale: supportedLocale): void => {
  setLocalStorageLocale(newLocale);
  // Initiates & updates global i18n object's locale
  const i18n = useI18n();
  i18n.locale.value = newLocale;
};

const checkForLocale = (): supportedLocale => {
  return checkLocalStorageForLocale();
};

export { checkForLocale, updateLocale };
