<template>
    <div>
        <h1>Usuarios</h1>
        <router-link to='/usuarios/novo'>Novo Usuario</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'usuarios',
    data () {
        return {
        }
    }
}
</script>

<style>

</style>