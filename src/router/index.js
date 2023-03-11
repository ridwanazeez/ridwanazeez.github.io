import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        title: "Ridwan Azeez",
      },
    },
    {
      path: "/gra-calculator",
      name: "GRACalculator",
      component: () => import("../views/GRACalculator.vue"),
      meta: {
        title: "Ridwan Azeez | Vehicle Duty Calculator",
      },
    },
    {
      path: "/number-checker",
      name: "NumberChecker",
      component: () => import("../views/NumberChecker.vue"),
      meta: {
        title: "Ridwan Azeez | Cell Number Checker",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/404.vue"),
      meta: {
        title: "404",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
