<template>
    <div class="music-container">
        <div class="cate">
            <el-select v-model="value" placeholder="分类" size="large" style="width: 240px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="music-items">
            <div class="music-item" v-for="(item) in 10" @click="musicdetail">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { musicGetMusic } from '@/apis/music';
const router = useRouter()
const value = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
// 去歌曲详情页
const musicdetail = () => {
    router.push('/home/musicdetail')
}
// //获取歌曲数据
// const getMusics = () => {
//     //调用获取歌的接口
//     musicGetMusic()
// }
// onMounted(() => {
//     getMusics()
// }),
</script>


<style scoped lang="scss">
.music-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .cate {
        margin-bottom: 20px;
        margin-top: 20px;
        position: relative;
        left: -420px;
    }

    .music-items {
        background-color: skyblue;
        min-height: 700px;
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        .music-item {
            width: 90%;
            height: 80px;
            background-color: red;
            border-radius: 10px;
            margin-top: 10px;
            cursor: pointer;
        }
    }
}
</style>