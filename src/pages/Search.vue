<template>
  <ion-page>
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
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonInput, IonLabel, IonItem, IonPage } from "@ionic/vue";
  import { searchOutline } from "ionicons/icons";

  export default defineComponent({
    components: {
      IonInput,
      IonLabel,
      IonItem,
      IonPage,
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
