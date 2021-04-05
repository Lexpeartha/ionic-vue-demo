import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import BasicLayout from "@/layouts/Basic.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/app",
    name: "App",
    component: BasicLayout,
    children: [
      {
        path: "",
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
