<template>
  <default-layout page-title="Housyes">
    <template #actions-end>
      <ion-button router-link="/search" router-direction="right">
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </template>

    This is home
  </default-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonButton, IonIcon } from "@ionic/vue";
  import { search } from "ionicons/icons";

  import DefaultLayout from "@/layouts/Default.vue";

  export default defineComponent({
    components: {
      DefaultLayout,
      IonButton,
      IonIcon,
    },
    data() {
      return {
        search,
      };
    },
  });
</script>

<style scoped></style>
