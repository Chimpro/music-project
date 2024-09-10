<template>
    <div class="music-items">
        <div class="music-item" v-for="item in musicInfos" @click="musicdetail">
            <div class="img">
                <img :src="item.musicImg" alt="">
            </div>
            <div class="singerMsg">
                <div class="singName">{{ item.musicName }}</div>
                <div class="singer">{{ item.singer }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
// 去歌曲详情页
const musicdetail = () => {
    router.push('/home/musicdetail')
}

//接受参数
defineProps(['musicInfos'])
</script>


<style scoped lang="scss">
.music-items {
    // background-color: skyblue;
    min-height: 700px;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .music-item {
        width: 1000px;
        height: 80px;
        background-color: pink;
        border-radius: 10px;
        margin-top: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
            box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, .1);
        }

        img {
            height: 60px;
            width: 60px;
            margin-left: 10px;
        }

        .singerMsg {
            display: flex;
            justify-content: space-between;
            width: 200px;
            margin-right: 20px;
            align-items: center;

            .singName {
                font-weight: bold;
                font-size: 30px;
            }

            .singer {
                font-size: 20px;
            }
        }
    }
}
</style>