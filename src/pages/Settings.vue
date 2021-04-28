<template>
  <native-layout
    :page-title="textData.title"
    page-default-back-link="/app/home"
  >
    <locale-changer></locale-changer>
  </native-layout>
</template>

<script lang="ts">
  import { defineComponent, reactive } from "vue";
  import { useI18n } from "vue-i18n";

  import NativeLayout from "@/layouts/Native.vue";
  import LocaleChanger from "@/components/settings/LocaleChanger.vue";

  export default defineComponent({
    components: {
      NativeLayout,
      LocaleChanger,
    },
    setup() {
      const { t } = useI18n();

      const textData = reactive({
        title: t("app.settings.title"),
      });

      return {
        textData,
      };
    },
  });
</script>

<style></style>
