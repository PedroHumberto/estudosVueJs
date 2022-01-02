<template>
    <div>
        <h1>Lendo {{'artigo X' | maiusculo}}</h1>
    </div>
</template>

<script>
import postagem from './postagem'
export default {
    name: 'LvLeitor',
    mixins: [postagem],
    data () {
        return {
        }
    }
}
</script>

<style>

</style>