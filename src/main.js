import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import './util/filter'
import VConsole from 'vconsole'

new VConsole()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
