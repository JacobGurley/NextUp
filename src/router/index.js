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
  ],
});

export default router;
