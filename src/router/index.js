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
    {
      path: "/login",
      name: "LoginThis",
      component: () => import("@/page/Login.vue"),
    },
    {
      path: "/make-order",
      name: "MakeOrder",
      component: () => import("@/page/Makeorder.vue"),
    },
    {
      path: "/register",
      name: "RegisterThis",
      component: () => import("@/page/Register.vue"),
    },
    {
      path: "/user-profile",
      name: "UserProfile",
      component: () => import("@/page/UserProfile.vue"),
    },
  ],
  mode: "history",
});
