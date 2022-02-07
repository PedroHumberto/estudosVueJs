<template>
    <div>
        <h4>Lista de {{ title }}</h4>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }} from <i>{{ item.brand }}</i>
            </li>
        </ul>
    </div>
</template>

<script>
    

export default {
    name: 'itemList',
    props: {
        title: null,
        list: {
            required: true,
            type: Array | Object
        }
    }

}
</script>

<style>

</style>