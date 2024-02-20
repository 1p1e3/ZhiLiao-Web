<template>    
    <div class="home" v-infinite-scroll="load">
        <QuestionCard v-for="i in count" :key="i"/>
    </div>
</template>

<script setup lang="ts" name="Home">
    import QuestionCard from '@/components/QuestionCard.vue'
    import { ref } from 'vue'
    const count = ref(0)
    const load = () => {
        count.value += 2
    }
</script>

<style>
    .home {
        width: 80%;
        height: 100%;
        margin: 60px auto;
    }
</style>