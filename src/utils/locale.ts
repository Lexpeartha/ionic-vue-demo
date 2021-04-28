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
  return setLocalStorageLocale(newLocale);
};

const checkForLocale = (): supportedLocale => {
  return checkLocalStorageForLocale();
};

export { checkForLocale, updateLocale };
