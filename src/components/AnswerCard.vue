<template>
    <el-card class="answer-card">
        <!-- 回答内容 -->
        <div class="answer-content">
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
        <!-- 回答者信息 -->
        <template #footer>
            <div class="answer-info">
                <div class="answer">
                    <el-button circle>
                        <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                    </el-button>
                    <div class="ml">
                        周同学
                    </div>
                    <div class="ml">
                        <el-button type="primary" plain>私信</el-button>
                    </div>
                </div>
                
                <div>
                    <span>发布于: 2024-02-20</span>
                </div>
            </div>
        </template>
    </el-card>
</template>

<script setup lang="ts">

</script>

<style>
    .answer-card {
        width: 100%;
    }
    .answer-content {
        margin-top: 10px;
    }
    .answer-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .answer {
        margin-top: 10px;
        display: flex;
        align-items: center;
    }
</style>