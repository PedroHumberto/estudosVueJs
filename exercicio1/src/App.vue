<template>
  <div id="app">
    <h1>{{nome}}</h1>
    <small v-if="mostra" v-once v-text="nome"></small>
    <input v-model='nome' type="text" placeholder="Digite um nome">
    <button @click="mostra = !mostra">Trocar</button>
    <ul>
      <li v-for="qnt in cadeiras" :key="qnt">{{ qnt }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nome: "Mané Garrincha",
      mostra: true,
      cadeiras:[
        '30.000 brancas',
        '30.000 cinzas',
        '10.000 vips',
      ]
    }
  },
  mounted() {
    setTimeout( () => {
      this.nome = "Mineirão"
      }, 3000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px
}

h1, h2 {
  font-weight: normal;
}

ul {
  
  padding: 0;
}

li {
  list-style: inside;
  margin: 10px 10px;
}

a {
  color: #42b983;
}
</style>
