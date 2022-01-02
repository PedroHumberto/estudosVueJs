<template>
  <div id="app">
    <lv-leitor></lv-leitor>
    <hr>
    <lv-comentarios></lv-comentarios>
  </div>
</template>

<script>
import LvLeitor from './LvLeitor.vue'
import LvComentarios from './LvComentarios.vue'
export default {
  name: 'app',
  components: {LvLeitor, LvComentarios},
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
