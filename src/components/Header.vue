<template>
    <div class="header-wrapper">
        <div class="header">
            <!-- 标题 -->
            <div class="title">知了</div>
            <!-- 菜单 -->
            <div class="menu">
                <RouterLink active-class="active" to="/" class="mr">首页</RouterLink>
                <RouterLink active-class="active" to="/hot">热门</RouterLink>
            </div>
            <!-- 搜索 -->
            <div class="input-wrapper">
                <el-input v-model="searchText" placeholder="请输入想要搜索的内容">
                    <template #append>
                        <el-button :icon="Search" />
                    </template>
                </el-input>
            </div>
            <!-- 提问 -->
            <div>
                <el-button type="primary" @click="toAddView">提问</el-button>
            </div>
            <!-- 消息和用户头像 -->
            <div class="header-tail">
                <div class="mr">
                    <el-badge :value="12">
                        <el-button :icon="Bell" circle></el-button>
                    </el-badge>
                </div>
                <div>
                    <el-button circle>
                        <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup name="Header">
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'
    import { Search, Bell } from '@element-plus/icons-vue'
    import router from '@/router';
    

    let searchText = ref('')

    function toAddView() {
        router.push("/add")
    }
</script>

<style scoped>
    .header-wrapper {
        width: 100%;
        background-color: #fff;
        border-bottom: solid 1px #f4f6f9;
    }
    .header {
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .title {
        font-size: x-large;
        font-weight: bold;
        color: #1772F6;
    }
    .menu {
        display: flex;
        font-weight: bold;
    }
    .mr {
        margin-right: 30px;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    .active {
        color: #1772F6;
    }
    .input-wrapper {
        width: 400px;
    }
    .header-tail {
        display: flex;
    }
</style>