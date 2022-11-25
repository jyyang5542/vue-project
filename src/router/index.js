import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryView.vue"),
    },
    {
      path: "/gallerySub",
      name: "gallerySub",
      component: () => import("../views/GallerySubView.vue"),
    },
    {
      path: "/screenshot",
      name: "screenshot",
      component: () => import("../views/ScreenshotView.vue"),
    },
    {
      path: "/btool",
      name: "btool",
      component: () => import("../views/BtoolView.vue"),
    },
    {
      path: "/etc",
      name: "etc",
      component: () => import("../views/EtcView.vue"),
    },
    {
      path: "/clap",
      name: "clap",
      component: () => import("../views/ClapView.vue"),
    },
    {
      path: "/404",
      name: "notFound",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

export default router;
