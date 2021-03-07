import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import "normalize.css"

Vue.config.productionTip = false;

export const eventBus = new Vue()

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
