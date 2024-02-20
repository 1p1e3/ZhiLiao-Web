<template>
    <Header class="header-fixed"/>
    <RouterView />
</template>

<script setup lang="ts" >
    import Header from './components/Header.vue'
</script>

<style scoped>
    #app {
        margin: 0;
        padding: 0;
        background-color: #f4f6f9;
    }
    .header-fixed {
        position: fixed;
        top: 0;
    }
</style>