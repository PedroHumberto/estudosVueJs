<template>
  <div id="app">
    <input type="text" v-model="git" placeholder="Type your github username">
    <p>{{ status }}</p>
    <img :src="photo" alt="">
    <h1>Ron Phrases</h1>
    <p>{{ phrases }}</p>
    

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      git:'',
      status: '',
      photo: '',
      phrases: ''
    }
  },
  created(){
    this.ronPhrases()
    this.test()
  },

  watch:{
    git: function(newValue, oldValue){
      //console.log(newValue)
        this.status = '...Loading'
        /*The public GitHub API requests are limited to 
        60/hour/ip, like you observed. That's why you need authentication.
        Como a API é limitada a 60 requisições você pode colocar a função 
        dentro de um botão e realizar a requisição 1x a cada hora que digitar
        o nome, neste exemplo ela requisitada a cada letra digitada.
        */
        axios.get(`https://api.github.com/users/${newValue}`)
        .then(res =>{
          this.status = res.data.name
          this.photo = res.data.avatar_url
        })
        .catch(error => {
          this.status = `User doesn't exist`
          this.photo = ''
        })
      }
  },
  methods: {
    ronPhrases(){
      this.phrases ='Loading Phrases'
      axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => {
       
        //console.log('Ron Phrases')
        //console.log(res)
        this.phrases = res.data[0]
      })
    },

    
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
