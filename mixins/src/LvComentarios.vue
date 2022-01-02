<template>
    <div>
        <h4>Comentários de {{'artigo X' | maiusculo}}</h4>
    </div>
</template>

<script>
import postagem from './postagem'
export default {
    name: 'LvComentarios',
    mixins: [postagem],
    data () {
        return {
        }
    }
}
</script>

<style>

</style>