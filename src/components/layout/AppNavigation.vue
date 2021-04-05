<template>
  <ion-footer>
    <ion-tabs>
      <ion-tab-bar :selected-tab="selectedTabBar">
        <ion-tab-button
          v-for="(navItem, $index) in navigationMenu"
          :layout="selectedTabBar == navItem.name ? 'icon-top' : 'label-hide'"
          @click="handleTabButtonClick(navItem)"
          :key="$index"
          :tab="navItem.name"
          :href="navItem.route"
        >
          <ion-icon :icon="navItem.icon"></ion-icon>
          <ion-label>{{ navItem.name }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-footer>
</template>

<script lang="ts">
  import { ref, defineComponent } from "vue";
  import { useRouter } from "vue-router";
  import {
    IonFooter,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  } from "@ionic/vue";
  import { home, map, search } from "ionicons/icons";

  interface NavigationItem {
    name: string;
    icon: string;
    route: string;
  }

  export default defineComponent({
    components: {
      IonFooter,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonLabel,
    },
    setup() {
      const router = useRouter();

      const icons = {
        home,
        explore: map,
        search,
      };

      const navigationMenu: NavigationItem[] = [
        {
          name: "Home",
          icon: icons.home,
          route: "/home",
        },
        {
          name: "Explore",
          icon: icons.explore,
          route: "/explore",
        },
        {
          name: "Search",
          icon: icons.search,
          route: "/search",
        },
      ];

      const selectedTabBar = ref(navigationMenu[0].name);

      const changeActiveTabTo = (newTab: string) => {
        selectedTabBar.value = newTab;
      };

      const navigateToTabLink = (route: string) => {
        router.push({ path: route });
      };

      const handleTabButtonClick = (navItem: NavigationItem) => {
        changeActiveTabTo(navItem.name);
        navigateToTabLink(navItem.route);
      };

      return {
        navigationMenu,
        selectedTabBar,
        handleTabButtonClick,
        icons,
      };
    },
  });
</script>
