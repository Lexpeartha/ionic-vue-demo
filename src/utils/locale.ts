import { supportedLocale } from "@/types";

const localeAccessName = "locale";

const checkLocalStorageForLocale = (): supportedLocale => {
  return (localStorage.getItem(localeAccessName) as supportedLocale) || "en";
};

const setLocalStorageLocale = (newLocale: supportedLocale): void => {
  return localStorage.setItem(localeAccessName, newLocale);
};

export { checkLocalStorageForLocale, setLocalStorageLocale };
