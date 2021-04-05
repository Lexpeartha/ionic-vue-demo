import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import Home from "@/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("@/pages/Explore.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/pages/Search.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
