<template>
  <ion-select
    v-model="currentLocale"
    placeholder="Language"
    @ionChange="changeToNewLocale"
  >
    <ion-select-option
      v-for="(lang, $index) in langs"
      :key="$index"
      :value="lang.code"
      >{{ lang.name }}</ion-select-option
    >
  </ion-select>
</template>

<script lang="ts">
  import { defineComponent, ref, onBeforeMount } from "vue";
  import { useI18n } from "vue-i18n";
  import { IonSelect, IonSelectOption, toastController } from "@ionic/vue";

  import { supportedLocale } from "@/types";
  import { updateLocale } from "@/utils/locale";
  import languages from "@/localization/languages.json";

  interface LocaleEntry {
    name: string;
    code: string;
  }

  export default defineComponent({
    components: {
      IonSelect,
      IonSelectOption,
    },
    setup() {
      const { t, locale } = useI18n();

      const currentLocale = locale;

      const changeToNewLocale = async (/* changeEvent: CustomEvent */) => {
        updateLocale(currentLocale.value as supportedLocale);
        const toast = await toastController.create({
          message: t("app.toasts.changedLocale"),
          position: "bottom",
          duration: 2000,
        });

        toast.present();
      };

      const langs = ref<LocaleEntry[]>([]);

      onBeforeMount(() => {
        Object.entries(languages).map(value => {
          const langName = value[1].languageName;
          const localeCode = value[0];

          langs.value.push({
            name: `${langName} (${localeCode})`,
            code: localeCode,
          });
        });
      });

      return {
        changeToNewLocale,
        currentLocale,
        langs,
      };
    },
  });
</script>

<style></style>
