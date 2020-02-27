import Vue from 'vue'
import App from './App.vue'

import VueMask from 'v-mask'

Vue.config.productionTip = false

Vue.use(VueMask);

new Vue({
  render: h => h(App),
  VueMask
}).$mount('#app')
