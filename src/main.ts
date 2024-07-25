import Vue from 'vue'

import vuetify from './plugins/vuetify'
import App from './App.vue'
import './index.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
