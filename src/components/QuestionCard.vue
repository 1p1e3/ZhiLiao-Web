<template>
    <el-card class="question-card">
        <!-- 问题标题 -->
        <template #header>
            <span class="question-title">你遇到过哪些高质量的 C++ 面试？</span>
        </template>
        <!-- 问题内容 -->
        <div class="question-content">
            本人在国企工作，平时有些闲暇时间。

            本科学历，某211毕业。

            地处北京，我现在可以辞职去找一个互联网的企业，年薪翻倍，但是，翻倍也没多少啊，还压榨了许多时间。

            手里现在有二十万，希望一年内赚到120万。

            希望大家给点建议啊。

            没图没真相：
            没图没真相：
            没图没真相：
            没图没真相：
            没图没真相：
            没图没真相：
            没图没真相：
            没图没真相：
            没图没真相：
            没图没真相：
        </div>
        <!-- 问题发布时间 -->
        <template #footer>
            <span>发布于: 2024-02-20</span>
            <RouterLink to="/" class="read-full">阅读全文</RouterLink>
        </template>
    </el-card>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router'

</script>

<style>
    .question-card {
        width: 80%;
        height: 220px;
        margin: 5px auto;
    }
    .question-title {
        font-weight: bold;
    }
    .read-full {
        margin-left: 20px;
        color: #1772F6;
    }
    a {
        text-decoration: none;
    }
</style>