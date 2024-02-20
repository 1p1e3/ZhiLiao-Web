<template>
    <div class="add">
        <!-- 问题标题 -->
        <div>
            <h3>问题概要</h3>
            <el-input 
            v-model="questionTitle" 
            placeholder="写下你的问题，准确地描述问题更容易得到解答" 
            type="textarea" 
            clearable 
            />
        </div>
        <!-- 问题详情 -->
        <div>
            <h3>详细描述</h3>
            <el-input v-model="questionTitle" placeholder="输入问题背景、条件等详细信息" type="textarea"/>
        </div>
        <!-- 提交 -->
        <div class="mt">
            <el-button type="primary">发布问题</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    let questionTitle = ref('')
</script>

<style>
    .add {
        width: 60%;
        height: 100%;
        margin: 60px auto;
    }
    .mt {
        margin-top: 30px;
    }
</style>