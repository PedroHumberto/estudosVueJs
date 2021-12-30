<template>
    <div>
        <h3>Buscando Time:</h3>
        <label> Time:</label>
        <input v-model="busca" type="text">
        <p>Rival: {{rival(busca)}}</p>
    </div>
</template>

<script>
export default {
    name: 'lv-busca',
    data () {
        return {
            busca:''
        }
    },
    methods: {
        rival(time){
            switch(time.toLowerCase()){
                case 'cruzeiro':
                    return 'atletico'
                case 'santos':
                    return 'são paulo'
                case 'flamengo':
                    return vasco
                default:
                    return 'não encontrado'
            }
        }
    },
}
</script>

<style>

</style>