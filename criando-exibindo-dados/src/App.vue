<template>
  <div id="app">
    <h1 v-once v-text="titulo"></h1>
    <h2>{{ subtitulo }}</h2>
    <input :disabled="tarefas.length == 0" v-model="substitulo" type="text" placeholder="Descrição">
    <div v-if="tarefas.length <= 0">
      Não há tarefas
    </div>
    <div v-if="tarefas.length > 0">
      Existem {{ tarefas.length }} tarefas     
      <ul>
        <li v-for="tarefa in tarefas" :key="tarefa"> {{tarefa}} </li> <!--:key foi usado para corrigir o erro de sintaxe -->
      </ul>
    </div>
    <button v-on:click="tarefas = []"> Limpar </button> <!-- ou usando @click=""-->
  </div>
</template>

<script>
export default {
  name: 'lv-tarefa',
  data () {
    return {
      titulo: 'Listagem de Tarefas',
      subtitulo: 'Definina uma descrição',
      tarefas: []
    }
  },
  mounted() {
    setTimeout( () => {
      this.titulo = 'novo titulo'
      this.tarefas = ['tarefa 1', 'tarefa 2', 'tarefa 3']
    }, 3000)
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
  padding: 0;
}

li {
  list-style: inside;
  margin: 10px 10px;
}

</style>
