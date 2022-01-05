<template>
    <div>
        <h1>Notificação</h1>
        <p v-if="msg == 'erro'"> Erro ao Cadastrar Usuário</p>
        <p v-if="msg != 'erro'">Ola</p>
    </div>
</template>

<script>
export default {
    name: 'notificacao',
    props: ['msg'],
    data () {
        return {
        }
    }
}
</script>

<style>

</style>