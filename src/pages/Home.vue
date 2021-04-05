<template>
  <ion-page>

  </ion-page>
  <home-header v-model="selectedCityIndex"></home-header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonPage } from "@ionic/vue";
  import HomeHeader from "@/components/home/HomeHeader.vue";

  export default defineComponent({
    name: "Home",
    components: {
      HomeHeader,
      IonPage
    },
    data() {
      return {
        selectedCityIndex: null,
      };
    },
  });
</script>

<style scoped></style>
