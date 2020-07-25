import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Default from "./layouts/default.vue";
import WithSidebar from "./layouts/withSidebar.vue";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/reset.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);
// register your layouts here
Vue.component(`${Default.name}-layout`, Default);
Vue.component(`${WithSidebar.name}-layout`, WithSidebar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
