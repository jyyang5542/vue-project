import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // 메인 화면
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "HatiHo",
      },
    },
    // 갤러리
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryView.vue"),
    },
    // 스크린샷
    {
      path: "/screenshot",
      name: "screenshot",
      component: () => import("../views/ScreenshotView.vue"),
    },
    // 비툴
    {
      path: "/btool",
      name: "btool",
      component: () => import("../views/BtoolView.vue"),
    },
    // 기타
    {
      path: "/etc",
      name: "etc",
      component: () => import("../views/EtcView.vue"),
    },
    // 웹박수
    {
      path: "/clap",
      name: "clap",
      component: () => import("../views/ClapView.vue"),
    },
    // 페이지를 찾을 수 없습니다.
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
