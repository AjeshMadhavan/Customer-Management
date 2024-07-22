import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import Vuetify from "vuetify";

import App from './App.vue'
import './index.css'

Vue.use(Vuetify);

const vuetify = new Vuetify();

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
