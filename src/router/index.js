import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: () => import("../views/Home.vue"),
    //   meta: {
    //     title: "Ridwan Azeez",
    //   },
    // },
    {
      path: "/",
      name: "home",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com";
      },
    },
    {
      path: "/gra-calculator",
      name: "GRACalculator",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com/vehicle-import-calculator/";
      },
    },
    {
      path: "/salary-calculator",
      name: "SalaryCalculator",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com/salary-calculator/";
      },
    },
    {
      path: "/links",
      name: "Links",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com/links/";
      },
    },
    {
      path: "/number-checker",
      name: "NumberChecker",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com/number-checker/";
      },
    },
    {
      path: "/cloud-storage-comparison",
      name: "CloudStorageComparison",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com/cloud-storage-comparison/";
      },
    },
    {
      path: "/guyana-isps-compared",
      name: "ISPComparison",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com/guyana-isps-compared/";
      },
    },
    {
      path: "/google-one-payment-guide",
      name: "GoogleOnePayments",
      beforeEnter() {
        window.location.href = "https://ridwanazeez.com/google-one-payment-guide/";
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
