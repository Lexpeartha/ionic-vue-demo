<template>
  <ion-select
    v-model="currentLocale"
    placeholder="Language"
    @ionChange="changeToNewLocale"
  >
    <ion-select-option
      v-for="(locale, $index) in availableLocales"
      :key="$index"
      :value="locale"
      >{{ locale }}</ion-select-option
    >
  </ion-select>
</template>

<script lang="ts">
  import { defineComponent, reactive } from "vue";
  import { useI18n } from "vue-i18n";
  import { IonSelect, IonSelectOption, toastController } from "@ionic/vue";

  import { supportedLocale } from "@/types";
  import { updateLocale } from "@/utils/locale";

  export default defineComponent({
    components: {
      IonSelect,
      IonSelectOption,
    },
    setup() {
      const { t, locale, availableLocales } = useI18n();

      const currentLocale = locale;

      const textData = reactive({
        name: t("not-implemented-yet"),
      });

      const changeToNewLocale = async (/* changeEvent: CustomEvent */) => {
        updateLocale(currentLocale.value as supportedLocale);
        const toast = await toastController.create({
          message: "For locale to apply fully, you may need to restart the app",
          position: "bottom",
          duration: 1800,
        });

        toast.present();
      };

      return {
        changeToNewLocale,
        availableLocales,
        currentLocale,
        textData,
      };
    },
  });
</script>

<style></style>
