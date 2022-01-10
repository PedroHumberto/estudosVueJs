<template>
  <div id="app">
    <input type="search" v-on:input="filtro = $event.target.value" name="produtos" id="">
    <ul>
      <li v-for="itens of listaComFiltro" :key="itens">
        {{itens}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data () {
    return {
      lista: ['macarrão', 'batata', 'biscoito', 'chocolate', 'telefone' ],
      filtro:''
    }
  },
  computed:{
    listaComFiltro(){
      let valores = []
      valores = this.lista.filter((itens) => {
        return(
          itens.toLowerCase().indexOf(this.filtro.toLowerCase()) > - 1
        )
      })
      return valores
    }
  /*listaComFiltro(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i'); //'i' insensitive, tanto faz maiusculo ou minusculo
        return this.lista.filter(itens => exp.test(itens))
      }
      else{
        return this.lista
      }*/
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
