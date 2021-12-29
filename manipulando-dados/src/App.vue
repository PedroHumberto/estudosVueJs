<template>
  <div id="app">
    <p>{{total}}</p>
    <button @click="calcula('-')"> - </button>
    <button @click="calcula('+')"> + </button>
    <hr>
    <br>
    <p>Nome Iniciando: {{nome}}</p>
    <p>Nome Filtrado: {{nome | formataNome}}</p>
    <hr>
    <br>
    <p>Nome Computado: {{nomeFormatado}}</p>
    <label> Input a Computar</label>
    <input v-model="nomeFormatado" type="text">
    <hr>
    <br>
    <input v-model="busca" type="text">
    <p v-text="resultado2"></p>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      total: 0,
      nome: 'pedro cardoso',
      nome2: 'Joao Castro',
      resultado2: '',
      busca: ''
    }
  },
    watch: { /*Mudam seu valor de acordo com o dado que representam, com ela podemos capturar o novo e antigo valor da varável
              tomando ações customaizadas a partir disso.
              Util para executar ações assincronas como requisições à API extern, em que devemos observar se a API retornou os dados*/
    busca: function(novoValor, valorAntigo){
      this.resultado2 = 'Aguardando o término da digitação...'
      this.recolheResposta()
      console.log("Valor novo:", novoValor ,' Valor Antigo:', valorAntigo)
    }
  },
  methods: {
        calcula(sinal){
          this.total = (sinal == '-') ? this.total - 1 : this.total + 1
        },
        recolheResposta(){
          let valor2 = this.busca
          setTimeout(() => {
            if (valor2 == this.busca){
              this.resultado2 = 'Terminou de digitar...'
            }
          }, 500)
        }
      },
  filters: {//este atributo ele é chamado toda vez que ocorre uma alteração de variavel no sistema, usado apenas para formatar a variavel deixando ela mais agradavel
        formataNome(valor){
          console.log("executando filter")
          valor = valor.toLowerCase()
          let corta = valor.split(' ')
          let resultado = ''
          for (let nome of corta)
          resultado += nome.charAt(0).toUpperCase() + nome.slice(1) + ' '
          return resultado
    }
  },
  /*
  computed: {
    nomeFormatado(){
      console.log('executando computed')
      return this.nome2.toUpperCase()
    }
  }
  */
 computed: { /*diferente do filter o computed altera uma variavel e é possivel usar os metodos getter e setter*/
    nomeFormatado: {
      get: function(){
        console.log("executando computed")
        return this.nome2.toUpperCase()
    },
      set: function(novoValor){
        this.nome2 = novoValor.substring(0, 3)
    }
  },
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
