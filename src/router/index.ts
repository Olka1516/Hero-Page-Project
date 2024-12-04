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
      path: "/bestiary",
      name: "bestiary",
      component: () => import("../views/BestiaryPage.vue"),
    },
    {
      path: "/heroes",
      name: "heroes",
      component: () => import("../views/Heroes3Page.vue"),
    },
    {
      path: "/games",
      name: "games",
      children: [
        {
          path: "witcher-1",
          component: () => import("../views/GamesWitcher1.vue"),
        },
        {
          path: "witcher-2",
          component: () => import("../views/GamesWitcher2.vue"),
        },
        {
          path: "witcher-3",
          component: () => import("../views/GamesWitcher3.vue"),
        },
      ],
    },
  ],
});

export default router;
