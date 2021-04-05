<template>
  <ion-tab-bar color="primary" slot="bottom" :selected-tab="selectedTabBar">
    <ion-tab-button tab="home" href="/app">
      <ion-icon :icon="icons.home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="explore" href="/app/explore">
      <ion-icon :icon="icons.explore"></ion-icon>
      <ion-label>Explore</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="search" href="/app/search">
      <ion-icon :icon="icons.search"></ion-icon>
      <ion-label>Search</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script lang="ts">
  import { ref, defineComponent } from "vue";
  import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/vue";
  import { home, map, search } from "ionicons/icons";

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

      const icons = {
        home,
        explore: map,
        search,
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

      return {
        selectedTabBar,
        changeActiveTabTo,
        icons,
      };
    },
  });
</script>
