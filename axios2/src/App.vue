<template>
  <div id="app">
    <item-list title="Cars" :list="cars"></item-list>
    <item-list title="Airplanes" :list="airplanes"></item-list>
    <hr>
    <br>
    <input type="text" v-model="cep" placeholder="00000000">
    <button @click="buscar" :disabled="estado">Buscar CEP</button>
    <div v-if="end">
      <p><strong>Logradouro</strong>: {{ end.logradouro }}</p>
      <p><strong>Complemento</strong>: {{ end.complemento }}</p>
      <p><strong>Bairro</strong>: {{ end.bairro }}</p>
      <p><strong>Localidade</strong>: {{ end.localidade }}</p>
      <p><strong>UF</strong>: {{ end.uf }}</p>
    </div>

  </div>
</template>

<script>
import Cep from './services/cep'
import Cars from './services/cars';
import Airplanes from './services/airplane';
import itemList from './components/List.vue';
export default {
  name: 'app',
  components: {'item-list': itemList},
  data () {
    return {
      cars:{},
      airplanes:{},
      cep: '', 
      estado: false, 
      end: false
      
    }
  },
  mounted(){
    Cars.list().then(data => this.cars = data.data)
    Airplanes.list().then(data => this.airplanes = data.data);
  },
  methods: {
    buscar() {
      this.estado = true
      Cep.busca( this.cep ).then( dado => {
        this.end = dado.data
        this.estado = false
      })
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
