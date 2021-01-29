import Vue from 'vue'
import router from './routes'
import App from './App.vue'

const app = new Vue({
  router: router,
  render: h => h(App)
})

app.$mount('#app')
