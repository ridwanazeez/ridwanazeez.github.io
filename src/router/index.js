import { createRouter, createWebHashHistory } from "vue-router";
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
      meta: {
        title: "Ridwan Azeez",
      },
    },
    {
      path: "/gra-calculator",
      name: "GRACalculator",
      component: GRACalculator,
      meta: {
        title: "Ridwan Azeez | Vehicle Duty Calculator",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      meta: {
        title: "404",
      },
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
