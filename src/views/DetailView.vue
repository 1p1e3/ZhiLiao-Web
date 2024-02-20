<template>
    <div class="detail">
        <!-- 问题标题和描述 -->
        <div class="question-info">
            <!-- 问题标题 -->
            <span class="question-title">你遇到过哪些高质量的 C++ 面试？</span>
            <!-- 问题描述 -->
            <div class="question-content">
                本人在国企工作，平时有些闲暇时间。

            本科学历，某211毕业。

            地处北京，我现在可以辞职去找一个互联网的企业，年薪翻倍，但是，翻倍也没多少啊，还压榨了许多时间。

            手里现在有二十万，希望一年内赚到120万。

            希望大家给点建议啊。
            </div>
            <!-- 提问者信息 -->
            <div class="questioner-info">
                <div class="questioner">
                    <el-button circle>
                        <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                    </el-button>
                    <div class="ml">
                        周同学
                    </div>
                    <div class="ml">
                        <el-button type="primary" plain>私信</el-button>
                    </div>
                    <div class="ml">
                        <el-button type="primary" plain>回答</el-button>
                    </div>
                </div>
                
                <div>
                    <span>发布于: 2024-02-20</span>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
    .detail {
        width: 60%;
        height: 100%;
        margin: 60px auto;
    }
    .question-content {
        margin-top: 10px;
    }
    .questioner-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ml {
        margin-left: 20px;
    }
    .mt {
        margin-top: 20px;
    }
    hr {
        margin-top: 20px;
        color: #f4f6f9;
    }
    .questioner {
        margin-top: 10px;
        display: flex;
        align-items: center;
    }
</style>