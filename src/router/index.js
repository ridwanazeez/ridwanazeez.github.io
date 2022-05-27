import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GRACalculator from "../views/GRACalculator.vue";
import NotFound from "../views/404.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/gra-calculator",
      name: "GRACalculator",
      component: GRACalculator,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    // {
    // path: "/about",
    // name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
