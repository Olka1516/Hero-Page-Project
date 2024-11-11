import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)",
      name: "404",
      component: () => import("../views/404Page.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/MainPage.vue"),
    },
    {
      path: "/games",
      name: "games",
      component: () => import("../views/GamesPage.vue"),
    },
  ],
});

export default router;
