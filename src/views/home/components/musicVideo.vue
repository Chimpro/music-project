<template>
    <div class="mv-container">
        <Classify />
        <div class="mv-items">
            <div class="mv-item" v-for="(item) in 10" @click="mvdetail">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Classify from '@/components/music/Classify.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const mvdetail = () => {
    router.push('/home/musicvideodetail')
}
</script>


<style scoped lang="scss">
.el-dropdown-link {
    margin-top: 20px;
    margin-left: 20px;
    padding-left: 10px;
    border: 1px solid gray;
    height: 30px;
    width: 80px;
    cursor: pointer;
    color: skyblue;
    display: flex;
    align-items: center;
}

.mv-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .mv-items {
        background-color: skyblue;
        min-height: 700px;
        width: 1200px;
        display: flex;
        flex-wrap: wrap;


        .mv-item {
            width: 300px;
            height: 200px;
            background-color: red;
            border-radius: 10px;
            margin-top: 20px;
            margin-left: 80px;
            cursor: pointer;
        }
    }
}
</style>