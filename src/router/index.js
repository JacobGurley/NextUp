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
      path: "/tutorial",
      component: () => import("../components/TutorialPage.vue")
    },
    {
      path: "/basketball",
      component: () => import("../components/BasketballPage.vue")
    },
    {
      path: "/football",
      component: () => import("../components/FootballPage.vue")
    },
    {
      path: "/soccer",
      component: () => import("../components/SoccerPage.vue")
    },
    {
      path: "/createteam",
      component: () => import("../components/CreateTeamPage.vue")
    },
    {
      path: "/friends",
      component: () => import("../components/FriendsPage.vue")
    },
  ],
});

export default router;
