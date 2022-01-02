<template>
  <div id="app">
    <h4>Lista Um</h4>
    <lvLista :lista="['feijão', 'arroz', 'carne']"></lvLista>
    <br>
    <h5>Lista 1 Ordenada</h5>
    <lvLista :lista="['feijão', 'arroz', 'carne']" ordena></lvLista>
    <br>
    <hr>
    <h4>Lista 2</h4>
    <lvLista :lista="['leite', 'bisoito', 'bombom']"></lvLista>
    <h5>Lista Dois Ordenada</h5>
    <lvLista :lista="['leite', 'bisoito', 'bombom']" ordena></lvLista>

  </div>
</template>

<script>
import lvLista from './LvLista.vue'
export default {
  name: 'app',
  components: {lvLista},
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
