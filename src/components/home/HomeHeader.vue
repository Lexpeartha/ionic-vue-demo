<template>
  <ion-toolbar class="home-toolbar">
    <ion-buttons slot="start">
      <ion-button color="secondary">
        <ion-icon slot="icon-only" :icon="menu"></ion-icon>
      </ion-button>
    </ion-buttons>

    <ion-select
      v-model="selectedCityIndex"
      class="city-selection"
      placeholder="Select city"
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
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import {
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    IonSelect,
    IonSelectOption,
  } from "@ionic/vue";
  import { menu, personCircle } from "ionicons/icons";

  type selectionType = number | null;

  export default defineComponent({
    components: {
      IonToolbar,
      IonButton,
      IonButtons,
      IonIcon,
      IonSelect,
      IonSelectOption,
    },
    data() {
      return {
        menu,
        personCircle,
        selectedCityIndex: null as selectionType,
        cities: ["Belgrade", "Novi Sad", "Zrenjanin", "Loznica"],
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
