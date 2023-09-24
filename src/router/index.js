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
      beforeEnter() {
        window.location.href = "https://ridwanazeez.github.io/vehicle-import-calculator/";
      },
    },
    {
      path: "/links",
      name: "Links",
      component: () => import("../views/Links.vue"),
      meta: {
        title: "Ridwan Azeez | My Links",
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
      path: "/cloud-storage-comparison",
      name: "CloudStorageComparison",
      component: () => import("../views/CloudStorageComparison.vue"),
      meta: {
        title: "Cloud Storage Comparison Table",
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
