import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inicial from './Inicial.vue'
import Usuarios from './Usuarios.vue'
import NovoUsuario from './NovoUsuario.vue'
import Notificacao from './Notificacao.vue'

Vue.use(VueRouter)

/*Cada rota é um objeto
nota-se que possui dois atributos
path = qual caminho do site a rota vai seguir
component = componente que sera montado;
PARA A API HISTORY FUNCIONAR EM MODO DE PRODUÇÃO DEVE SER ADICIONADO O ARQUIVO DE CONFIGURAÇÃO*/
const router = new VueRouter({
  mode: 'history', /*API History para trocar o modo de URL na instancia do VueRouter*/
  routes:[
    {path: '/', component: Inicial},
    {
      path: '/usuarios', 
      component: Usuarios,
      children:[
        {
          path: 'novo',
          component: NovoUsuario
        },
        {
          path: ':msg',
          component: Notificacao,
          props: true
        },
      ]
    },
  ],
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


