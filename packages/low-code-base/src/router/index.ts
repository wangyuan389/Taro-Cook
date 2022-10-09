/*
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2022-04-02 14:12:10
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-08 15:33:38
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "design",
      component: () => import("../views/design.vue"),
    },
  ],
});

export default router;
