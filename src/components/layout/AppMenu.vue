<template>
  <ion-menu
    menu-id="menu"
    content-id="main-content"
    type="overlay"
    :swipe-gesture="true"
    side="start"
  >
    <ion-header>
      <ion-toolbar translucent color="secondary">
        <ion-title>Real Estate</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Home</ion-label>
          <ion-icon slot="start" :icon="icons.home"></ion-icon>
        </ion-item>
        <ion-item>
          <ion-label>Search</ion-label>
          <ion-icon slot="start" :icon="icons.search"></ion-icon>
        </ion-item>
        <ion-item>
          <ion-label>Profile</ion-label>
          <ion-icon slot="start" :icon="icons.info"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonContent,
    IonLabel,
    IonTitle,
    IonIcon,
    IonList,
    IonItem,
  } from "@ionic/vue";
  import { home, search, information } from "ionicons/icons";

  export default defineComponent({
    components: {
      IonMenu,
      IonHeader,
      IonToolbar,
      IonContent,
      IonLabel,
      IonTitle,
      IonIcon,
      IonList,
      IonItem,
    },
    setup() {
      const icons = { home, search, info: information };

      return {
        icons,
      };
    },
  });
</script>

<style scoped></style>
