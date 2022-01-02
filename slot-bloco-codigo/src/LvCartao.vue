<template>
    <div class="cartao">
        <h2>{{titulo}}</h2>
        <slot></slot>
        <hr>
        <slot name="rodape"></slot>
    </div>
</template>

<script>
export default {
    name: 'lvCartao',
    props:['titulo','conteudo'],
    data () {
        return {
        }
    }
}
</script>

<style>
    .cartao{
        border: 1px solid #000;
        padding: 10px;
    }
</style>