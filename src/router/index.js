import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/page/HomePage.vue"),
    },
    {
      path: "/chi-tiet-san-pham",
      name: "detail-product",
      component: () => import("@/page/ProductDetail.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/page/Cart.vue"),
    },
  ],
  mode: "history",
});
