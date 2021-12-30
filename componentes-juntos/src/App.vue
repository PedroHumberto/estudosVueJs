<template>
  <div id="app">
   <lvBusca></lvBusca>
   <hr>
   <lvPerfil></lvPerfil>
  </div>
</template>

<script>
import lvBusca from './LVBusca.vue'
import lvPerfil from './LVPerfil.vue'

export default {
  name: 'app',
  components: {lvBusca, lvPerfil}
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
