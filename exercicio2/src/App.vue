<template>
  <div id="app">
    <input v-model="nome" type="text">
    <p></p>
    <small>{{status}}</small>
    <br>
    <p>{{nome | maisculo}}</p>
    <p>Caracteres: {{nomeCaracteres}}</p>
    <br>
    <button @click="exibirAlert()">Alerta</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      status: 'Digite seu nome acima',
      nome: ''
    }
  },
  methods: {
    exibirAlert(){
      window.alert("Ola")
    },
    finalizar(){
      let valor = this.status
      setTimeout( () => {
        if(valor == this.status){
          this.status = 'Digite seu nome acima'
        }
      }, 600)
    }
  },
  watch:{
    nome: function(novoValor, valorAntigo){
      this.status = 'Recebendo seu nome...'
      this.finalizar()
    }
  },
  filters: {
    maisculo(nome){
      return nome.toUpperCase()
    }
  },
  computed: {
    nomeCaracteres: {
      get: function(){
        return this.nome.length
      }
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
