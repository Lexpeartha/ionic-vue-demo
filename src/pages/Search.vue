<template>
  <basic-layout
    page-default-back-link="/"
    page-title="Search for your dream house"
  >
    <ion-item>
      <ion-label color="primary" position="floating"
        >Search for a city</ion-label
      >
      <ion-input
        :debounce="800"
        v-model="searchTerm"
        clear-input
        inputmode="search"
        type="text"
        placeholder="ex. London"
      />
    </ion-item>
  </basic-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonInput, IonLabel, IonItem } from "@ionic/vue";
  import { searchOutline } from "ionicons/icons";

  import BasicLayout from "@/layouts/Basic.vue";

  export default defineComponent({
    components: {
      BasicLayout,
      IonInput,
      IonLabel,
      IonItem,
    },
    data() {
      return {
        searchTerm: "",
        searchOutline,
      };
    },
    watch: {
      searchTerm(): void {
        console.log("It was typed: ", this.searchTerm);
      },
    },
  });
</script>

<style scoped></style>
