import { createRouter, createWebHistory } from "vue-router";
import { menu } from "@/stores/utils/menu";
import homeLayout from "@/layouts/homeLayout.vue";
import homePage from "@/views/home-page.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-layout",
      component: homeLayout,
      children: [
        {
          path: "",
          name: "home",
          component: homePage,
        },
        {
          path: "/:pathMatch(.*)*",
          name: "error",
          component: import("@/views/error-page.vue"),
        },
        ...menu,
      ],
    },
  ],
});

export default router;
