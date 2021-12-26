import Vue from 'vue'
import App from './App.vue'

new Vue({
  mounted(){
    alert('hello world')
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})

