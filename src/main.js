import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'normalize.css'
import './css/theme.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
