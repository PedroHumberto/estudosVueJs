<template>
    <div>
        <small>{{nome}}:</small>
        <input type="text" v-model="mensagem">
        <button @click="enviar">Enviar</button>
        <br>
        <small>{{status}}</small>
    </div>
</template>

<script>
export default {
    name: 'lv-usuario',
    data () {
        return {
            mensagem: '',
            status:'não esta digitando'
        }
    },
    props: ['nome'],
    methods: {
        enviar() {
            this.$emit('novaMsg', this.nome + ': ' + this.mensagem)
            this.mensagem = ''
            
        },
        finalizar(){
            let valor = this.status
            setTimeout( () => {
                if(valor == this.status){
                    this.status = 'não esta digitando'
                }
            }, 600)
        }
    },
    watch:{
        mensagem: function(novoValor, valorAntigo){
            this.status = `${this.nome} esta digitando uma mensagem`
            this.finalizar()
        }

    }
}
</script>

<style>

</style>