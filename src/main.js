import Vue from 'vue'
import App from './App.vue'
import waveAnimation from './components/index'

Vue.use(waveAnimation)

new Vue({
  el: '#app',
  render: h => h(App)
})
