import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "@/router/index.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
