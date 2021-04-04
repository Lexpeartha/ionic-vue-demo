<template>
  <ion-page id="main-content">
    <app-menu></app-menu>
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonPage, IonContent } from "@ionic/vue";

  import AppMenu from "@/components/layout/AppMenu.vue";

  export default defineComponent({
    components: { AppMenu, IonPage, IonContent },
  });
</script>
