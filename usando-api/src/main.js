import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource';

Vue.use(VueResouce);

new Vue({
  el: '#app',
  render: h => h(App)
})
