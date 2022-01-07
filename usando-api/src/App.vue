<template>
  <div id="app">
    <ul>
      <li v-for="foto in fotos" :key="foto">
        <img :src="foto.url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      fotos: [],
    }
  },
  created() {
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
      .then(res => res.json())
      .then(fotos => this.fotos = fotos)
  },
}
</script>

<style>

</style>
