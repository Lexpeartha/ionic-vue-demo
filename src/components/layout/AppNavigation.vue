<template>
  <ion-tab-bar color="primary" slot="bottom">
    <ion-tab-button tab="home" href="/app/home">
      <ion-icon :icon="icons.home"></ion-icon>
      <ion-label>{{ textData.home }}</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="explore" href="/app/explore">
      <ion-icon :icon="icons.explore"></ion-icon>
      <ion-label>{{ textData.explore }}</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="search" href="/app/search">
      <ion-icon :icon="icons.search"></ion-icon>
      <ion-label>{{ textData.search }}</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="profile" href="/app/profile">
      <ion-icon :icon="icons.profile"></ion-icon>
      <ion-label>{{ textData.profile }}</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script lang="ts">
  import { ref, defineComponent } from "vue";
  import { useI18n } from "vue-i18n";
  import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/vue";
  import { home, map, search, personCircle } from "ionicons/icons";

  // interface NavigationItem {
  //   name: string;
  //   icon: string;
  //   route: string;
  // }

  export default defineComponent({
    components: {
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonLabel,
    },
    setup() {
      // const router = useRouter();

      const { t } = useI18n();

      const icons = {
        home,
        explore: map,
        search,
        profile: personCircle,
      };

      /* Because of an issue, method below is not possible: https://github.com/ionic-team/ionic-framework/issues/22847 */

      const selectedTabBar = ref("home");

      // const navigationMenu: NavigationItem[] = [
      //   {
      //     name: "Home",
      //     icon: icons.home,
      //     route: "/app",
      //   },
      //   {
      //     name: "Explore",
      //     icon: icons.explore,
      //     route: "/app/explore",
      //   },
      //   {
      //     name: "Search",
      //     icon: icons.search,
      //     route: "/app/search",
      //   },
      // ];

      const changeActiveTabTo = (newTab: string) => {
        selectedTabBar.value = newTab;
      };

      // const navigateToTabLink = (route: string) => {
      //   router.push({ path: route });
      // };

      // const handleTabButtonClick = (navItem: NavigationItem) => {
      //   changeActiveTabTo(navItem.name);
      //   navigateToTabLink(navItem.route);
      // };

      const textData = {
        home: t("app.navigation.home"),
        explore: t("app.navigation.explore"),
        search: t("app.navigation.search"),
        profile: t("app.navigation.profile"),
      };

      return {
        selectedTabBar,
        changeActiveTabTo,
        icons,
        textData,
      };
    },
  });
</script>
