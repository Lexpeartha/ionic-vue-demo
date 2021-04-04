<template>
  <ion-menu
    menu-id="menu"
    content-id="main-content"
    type="overlay"
    :swipe-gesture="true"
    side="start"
  >
    <ion-card class="profile-card" color="primary">
      <ion-card-header class="profile-header">
        <ion-card-title>Username</ion-card-title>
        <ion-card-subtitle>Premium membership</ion-card-subtitle>
      </ion-card-header>

      <ion-icon class="profile-picture" :icon="icons.profile"></ion-icon>
    </ion-card>

    <ion-content>
      <ion-list>
        <ion-item-divider class="ion-padding-vertical">
          <ion-label>Quick access menu</ion-label>
        </ion-item-divider>

        <ion-item v-for="(item, $index) in quickMenuItems" :key="$index">
          <ion-label color="primary">{{ item.name }}</ion-label>
          <ion-icon slot="start" :icon="item.icon"></ion-icon>
        </ion-item>

        <ion-item-divider class="ion-padding-vertical">
          <ion-label>Navigate app</ion-label>
        </ion-item-divider>

        <ion-item v-for="(item, $index) in menuItems" :key="$index">
          <ion-label color="primary">{{ item.name }}</ion-label>
          <ion-icon slot="start" :icon="item.icon"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import {
    IonMenu,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonContent,
    IonLabel,
    IonIcon,
    IonList,
    IonItemDivider,
    IonItem,
  } from "@ionic/vue";
  import {
    home,
    search,
    information,
    personCircle,
    eye,
    save,
  } from "ionicons/icons";

  export default defineComponent({
    components: {
      IonMenu,
      IonCard,
      IonCardTitle,
      IonCardSubtitle,
      IonCardHeader,
      IonContent,
      IonLabel,
      IonIcon,
      IonList,
      IonItemDivider,
      IonItem,
    },
    setup() {
      const icons = {
        home,
        search,
        info: information,
        profile: personCircle,
        eye,
        save,
      };

      const quickMenuItems = [
        {
          name: "Recently viewed",
          icon: icons.eye,
        },
        {
          name: "Saved estates",
          icon: icons.save,
        },
      ];

      const menuItems = [
        {
          name: "Home",
          icon: icons.home,
        },
        {
          name: "Search",
          icon: icons.search,
        },
        {
          name: "Profile",
          icon: icons.info,
        },
      ];

      return {
        quickMenuItems,
        menuItems,
        icons,
      };
    },
  });
</script>

<style scoped>
  .profile-card {
    display: flex;
  }

  .profile-picture {
    width: 4em;
    height: 4em;
    margin: auto 0;
  }
</style>
