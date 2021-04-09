import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import BasicLayout from "@/layouts/Basic.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/app/home",
  },
  {
    path: "/app",
    name: "App",
    redirect: "/app/home",
    component: BasicLayout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/pages/Home.vue"),
      },
      {
        path: "explore",
        name: "Explore",
        component: () => import("@/pages/Explore.vue"),
      },
      {
        path: "search",
        name: "Search",
        component: () => import("@/pages/Search.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/pages/Profile.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
