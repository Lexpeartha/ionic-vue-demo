<template>
  <ion-toolbar class="home-toolbar">
    <ion-buttons slot="start">
      <ion-button @click="openMenu" color="secondary">
        <ion-icon slot="icon-only" :icon="icons.menu"></ion-icon>
      </ion-button>
    </ion-buttons>

    <ion-select
      v-model="selectedCityIndex"
      @ionChange="emitUpdate"
      class="city-selection"
      :placeholder="textData.searchCity"
      ok-text="Select"
      cancel-text="Dismiss"
    >
      <ion-select-option
        v-for="(city, $index) in cities"
        :key="$index"
        :value="$index"
      >
        {{ city }}
      </ion-select-option>
    </ion-select>

    <ion-buttons slot="end">
      <ion-button color="secondary">
        <ion-icon slot="icon-only" :icon="icons.profile"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
  <!-- 
      :modelValue="selectedCityIndex"
      @update:modelValue="selectedCityIndex = $event"
    -->
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from "vue";
  import { useI18n } from "vue-i18n";
  import {
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    IonSelect,
    IonSelectOption,
  } from "@ionic/vue";
  import { menu, personCircle } from "ionicons/icons";

  import useMenu from "@/compositions/useMenu";

  export default defineComponent({
    emits: ["update:modelValue"],
    props: {
      modelValue: {
        type: Number,
        required: false,
        default: null,
      },
    },
    components: {
      IonToolbar,
      IonButton,
      IonButtons,
      IonIcon,
      IonSelect,
      IonSelectOption,
    },
    setup(props, { emit }) {
      const { t } = useI18n();

      const cities = ["Belgrade", "Novi Sad", "Zrenjanin", "Loznica"];

      const selectedCityIndex = ref(props.modelValue);

      const emitUpdate = () => {
        emit("update:modelValue", selectedCityIndex.value);
      };

      const { openMenu, closeMenu } = useMenu();

      const icons = {
        menu,
        profile: personCircle,
      };

      const textData = reactive({
        searchCity: t("components.homeHeader.selectCity"),
      });

      return {
        icons,
        selectedCityIndex,
        cities,
        emitUpdate,
        openMenu,
        closeMenu,
        textData,
      };
    },
  });
</script>

<style scoped>
  .home-toolbar {
  }

  .city-selection {
    width: 11em;
    margin: 0 auto;
  }
</style>
