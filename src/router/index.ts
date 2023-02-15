import { createRouter, createWebHistory } from "vue-router";
import SeatsView from "../components/pages/SeatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SeatsView,
    },
    {
      path: "/about",
      name: "about",
      // 遅延ロード
      component: () => import("../components/pages/LoginView.vue"),
    },
  ],
});

export default router;
