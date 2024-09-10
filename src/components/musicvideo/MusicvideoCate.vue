<template>
    <div class="mv-items">
        <div class="mv-item" v-for="item in mvData" @click="mvdetail">
            <div class="showmv">
                <video src=""></video>
            </div>
            <div class="msg">
                <div class="name">{{ item.name }}</div>
                <div class="author">{{ item.author }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const mvdetail = () => {
    router.push('/home/musicvideodetail')
}

defineProps(['mvData'])
</script>


<style scoped lang="scss">
.mv-items {
    min-height: 700px;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;


    .mv-item {
        width: 300px;
        height: 200px;
        background-color: skyblue;
        border-radius: 10px;
        margin-top: 20px;
        padding-bottom: 20px;
        margin-left: 80px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        &:hover {
            box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, .1);
        }

        .showmv {
            margin-top: 10px;
            width: 130px;
            height: 130px;
            background-color: pink;
        }

        .msg {
            width: 200px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>