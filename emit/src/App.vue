<template>
  <div id="app">
    <lv-usuario :nome="'Filomena'" @novaMsg="escrever"></lv-usuario>
    <lv-usuario :nome="'Pedro'" @novaMsg="escrever"></lv-usuario>
    <br>
    <div v-html="chat"></div>
  </div>
</template>

<script>
import LvUsuario from './LvUsuario.vue'

export default {
  name: 'app',
  components:{LvUsuario},
  data () {
    return {
      chat:''
    }
  },
  methods: {
    escrever(mensagem){
      this.chat = mensagem + '<hr>' + this.chat
    }
  },
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
