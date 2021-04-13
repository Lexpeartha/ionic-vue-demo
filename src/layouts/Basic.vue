<template>
  <ion-page>
    <app-menu></app-menu>
    <ion-tabs>
      <app-navigation id="main-content"></app-navigation>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonPage, IonTabs } from "@ionic/vue";

  import AppMenu from "@/components/layout/AppMenu.vue";
  import AppNavigation from "@/components/layout/AppNavigation.vue";

  export default defineComponent({
    components: { AppMenu, AppNavigation, IonPage, IonTabs },
  });
</script>
