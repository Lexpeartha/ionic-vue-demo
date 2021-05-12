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
          <ion-card-subtitle>{{ textData.membership }}</ion-card-subtitle>
        </ion-card-header>

        <ion-icon class="profile-picture" :icon="icons.profile"></ion-icon>
      </ion-card>

      <ion-list>
        <ion-list-header class="ion-padding-top">
          <ion-label class="menu-label" color="secondary">
            {{ textData.quickAccessMenuTitle }}
          </ion-label>
        </ion-list-header>

        <ion-item
          button
          @click="navigateToNewRoute(item.routeName)"
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
            {{ textData.navigationMenuTitle }}
          </ion-label>
        </ion-list-header>

        <ion-item
          button
          @click="navigateToTabRoute(item.routePath)"
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
          <ion-button
            @click="navigateToNewRoute('Settings')"
            color="secondary"
            detail="false"
          >
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
  import { useI18n } from "vue-i18n";
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

      const { t } = useI18n();

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
          name: t("app.menu.quickAccessMenu.recent"),
          icon: icons.eye,
          routeName: "Recent",
        },
        {
          name: t("app.menu.quickAccessMenu.saved"),
          icon: icons.save,
          routeName: "Saved",
        },
      ];

      const menuItems = [
        {
          name: t("app.navigation.home"),
          icon: icons.home,
          routePath: "/app/home",
        },
        {
          name: t("app.navigation.explore"),
          icon: icons.explore,
          routePath: "/app/explore",
        },
        {
          name: t("app.navigation.search"),
          icon: icons.search,
          routePath: "/app/search",
        },
        {
          name: t("app.navigation.profile"),
          icon: icons.info,
          routePath: "/app/profile",
        },
      ];

      const { closeMenu } = useMenu();

      const navigateToTabRoute = (routePath: string) => {
        router.replace({ path: routePath });
        closeMenu();
      };

      const navigateToNewRoute = (routeName: string) => {
        router.push({ name: routeName });
        setTimeout(closeMenu, 200);
      };

      const textData = {
        membership: t("app.freeMembership"),
        quickAccessMenuTitle: t("app.menu.quickAccessMenu.title"),
        navigationMenuTitle: t("app.navigation.menuTitle"),
      };

      return {
        quickMenuItems,
        menuItems,
        icons,
        navigateToTabRoute,
        navigateToNewRoute,
        textData,
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
