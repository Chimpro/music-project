<template>
    <div class="nav">
        <div class="nav-items">
            <el-menu :ellipsis="false" :default-active="$router.path" class="el-menu-demo" mode="horizontal" router
                @select="handleSelect">
                <el-menu-item index="/home/music" @click="router.push('/home/music')">音乐</el-menu-item>
                <el-menu-item index="/home/musicvideo" @click="router.push('/home/musicvideo')">MV</el-menu-item>
                <el-menu-item index="/home/musiclist" @click="router.push('/home/musiclist')"
                    v-if="userStore.userInfo.token">我的歌单</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useUserStore } from '@/stores/modules/user';
const userStore = useUserStore()
</script>


<style scoped lang="scss"></style>