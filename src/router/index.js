import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../components/LoginPage.vue") },
    {
      path: "/register",
      component: () => import("../components/RegisterPage.vue"),
    },
    {
      path: "/home",
      component: () => import("../components/HomePage.vue"),
    },
    {
      path: "/creategame",
      component: () => import("../components/CreateGamePage.vue"),
    },
    {
      path: "/createteam",
      component: () => import("../components/CreateTeamPage.vue"),
    },
    {
      path: "/rateplayer",
      component: () => import("../components/RatePlayerPage.vue"),
    },
    {
      path: "/locationreview",
      component: () => import("../components/LocationReviewPage.vue"),
    },
  ],
});

export default router;
