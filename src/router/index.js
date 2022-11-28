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
      path: "/profilepage",
      component: () => import("../components/ProfilePage.vue"),
    },
    {
      path: "/contactpage",
      component: () => import("../components/ContactPage.vue"),
    },
    {
      path: "/editprofile",
      component: () => import("../components/EditProfilePage.vue"),
    },
  ],
});

export default router;
