<template>
  <ion-menu
    menu-id="menu"
    content-id="main-content"
    type="overlay"
    :swipe-gesture="true"
    side="start"
  >
    <ion-content>
      <ion-card class="profile-card ion-padding-end" color="primary">
        <ion-card-header class="profile-header">
          <ion-card-title>Username</ion-card-title>
          <ion-card-subtitle>Free membership</ion-card-subtitle>
        </ion-card-header>

        <ion-icon class="profile-picture" :icon="icons.profile"></ion-icon>
      </ion-card>

      <ion-list>
        <ion-list-header class="ion-padding-top">
          <ion-label class="menu-label" color="secondary">
            Quick access menu
          </ion-label>
        </ion-list-header>

        <ion-item
          button
          detail="false"
          lines="none"
          v-for="(item, $index) in quickMenuItems"
          :key="$index"
        >
          <ion-label color="primary">{{ item.name }}</ion-label>
          <ion-icon slot="start" color="primary" :icon="item.icon"></ion-icon>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-list-header class="ion-padding-top">
          <ion-label class="menu-label" color="secondary">
            Navigate app
          </ion-label>
        </ion-list-header>

        <ion-item
          button
          @click="navigateToRoute(item.route)"
          detail="false"
          lines="none"
          v-for="(item, $index) in menuItems"
          :key="$index"
        >
          <ion-label lines="none" color="primary">{{ item.name }}</ion-label>
          <ion-icon slot="start" color="primary" :icon="item.icon"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="secondary" detail="false">
            <ion-icon :icon="icons.profile"></ion-icon>
            <ion-label class="username-label">Username</ion-label>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button color="secondary" detail="false">
            <ion-icon slot="icon-only" :icon="icons.settings"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-menu>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  import {
    IonMenu,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonContent,
    IonFooter,
    IonButtons,
    IonButton,
    IonToolbar,
    IonLabel,
    IonIcon,
    IonList,
    IonListHeader,
    IonItem,
  } from "@ionic/vue";
  import {
    home,
    search,
    information,
    personCircle,
    eye,
    map,
    settings,
    save,
  } from "ionicons/icons";

  import useMenu from "@/compositions/useMenu";

  export default defineComponent({
    components: {
      IonMenu,
      IonCard,
      IonCardTitle,
      IonCardSubtitle,
      IonCardHeader,
      IonContent,
      IonFooter,
      IonButtons,
      IonButton,
      IonToolbar,
      IonLabel,
      IonIcon,
      IonList,
      IonListHeader,
      IonItem,
    },
    setup() {
      const router = useRouter();

      const icons = {
        home,
        search,
        info: information,
        profile: personCircle,
        explore: map,
        settings,
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
          route: "/app/home",
        },
        {
          name: "Explore",
          icon: icons.explore,
          route: "/app/explore",
        },
        {
          name: "Search",
          icon: icons.search,
          route: "/app/search",
        },
        {
          name: "Profile",
          icon: icons.info,
          route: "/app/profile",
        },
      ];

      const { closeMenu } = useMenu();

      const navigateToRoute = (routeName: string) => {
        router.replace({ path: routeName });
        closeMenu();
      };

      return {
        quickMenuItems,
        menuItems,
        icons,
        navigateToRoute,
      };
    },
  });
</script>

<style scoped>
  .profile-card {
    display: flex;
    justify-content: space-between;
  }

  .profile-picture {
    width: 4em;
    height: 4em;
    margin: auto 0;
  }

  .menu-label {
    font-size: 1.35rem;
    margin: auto 0;
  }

  .username-label {
    margin-left: 0.5rem;
  }
</style>
