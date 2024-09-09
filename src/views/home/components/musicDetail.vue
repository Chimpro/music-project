<template>
    <div class="container">
        <div class="pic">
            <img src='../../../assets/music-picture/taotai-eason.jpg' alt="">
            <div class="musicName">歌名：{{ musicInfo.musicName }}</div>
            <div class="singer">歌手：{{ musicInfo.singer }}</div>
            <div class="lyricWriter">作词：{{ musicInfo.lyricWriter }}</div>
            <div class="compose">作曲；{{ musicInfo.compose }}</div>
        </div>
        <div class="box">
            <video src="../../../assets/musics/陈奕迅-淘汰.mp3" class="video" ref="audioElement"
                @timeupdate="timeUpDateHandler"></video>
            <div class="box-container">
                <div class="msg">
                    <ul :style="transformStyle">
                        <li v-for="(item, index) in lyricsArray" :key="item.timestamp"
                            :class="activeIndex === index ? 'active' : ''">
                            {{ item.content }}
                        </li>
                    </ul>
                </div>
                <div class="btn">
                    <el-button type="primary" @click="audioElement.play()">播放</el-button>
                    <el-button type="danger" @click="audioElement.pause()">暂停</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { changeLyrics } from '@/utils/music/musicData';
import { ref, watch } from 'vue';
const audioElement = ref()
const currentTime = ref('')
const activeIndex = ref(0)
const transformStyle = ref('')
const musicInfo = {
    musicName: '淘汰',
    singer: '陈奕迅',
    lyricWriter: '周杰伦',
    compose: '周杰伦',
    musicImg: '../../../assets/music-picture/taotai-eason.jpg',
    lyrics: `
        00:00 淘汰 – 陈奕迅 (Eason Chan)
        00:08 词：周杰伦
        00:17 曲：周杰伦
        00:26 编曲：C.Y.Kong
        00:35 我说了所有的谎
        00:39 你全都相信
        00:43 简单的我爱你
        00:46 你却老不信
        00:51 你书里的剧情
        00:55 我不想上演
        00:58 因为我喜欢
        01:01 喜剧收尾
        01:08 我试过完美放弃
        01:12 的确很踏实
        01:15 醒来了梦散了
        01:19 你我都走散了
        01:23 情歌的词何必押韵
        01:27 就算我是K歌之王
        01:31 也不见得把
        01:33 爱情唱得完美
        01:38 只能说我输了
        01:42 也许是你怕了
        01:46 我们的回忆没有皱褶
        01:51 你却用离开烫下句点
        01:54 只能说我认了
        01:58 你的不安赢得你信任
        02:03 我却得到你安慰的淘汰
        02:25 我试过完美放弃
        02:29 的确很踏实
        02:32 醒来了梦散了
        02:36 你我都走散了
        02:40 情歌的词何必押韵
        02:44 就算我是K歌之王
        02:48 也不见得把
        02:50 爱情唱得完美
        02:55 只能说我输了
        02:59 也许是你怕了
        03:03 我们的回忆没有皱褶
        03:08 你却用离开烫下句点
        03:11 只能说我认了
        03:15 你的不安赢得你信任
        03:21 我却得到你安慰的淘汰
        03:44 只能说我输了
        03:48 也许是你怕了
        03:52 我们的回忆没有皱褶
        03:57 你却用离开烫下句点
        04:00 只能说我认了
        04:04 你的不安赢得你信任
        04:09 我却得到你安慰的淘汰
`
}
const lyricsArray = changeLyrics(musicInfo.lyrics)
const timeUpDateHandler = () => {
    currentTime.value = audioElement.value.currentTime;
}
watch(currentTime, (newVal) => {
    for (let i = 0; i < lyricsArray.length; i++) {
        if (lyricsArray[i].timestamp < +newVal) {
            activeIndex.value = i
            transformStyle.value = `transform: translateY(${-activeIndex.value * 30}px)`
        }
    }
})

</script>


<style scoped lang="scss">
.container {
    margin-top: 5px;
    min-height: 700px;
    background-color: grey;
    border-radius: 10px;
    display: flex;

    .pic {
        flex: 1;
        background-color: skyblue;

        img {
            border-radius: 50%;
        }
    }

    .box {
        padding: 10px;
        flex: 1;
        background-color: pink;
        display: flex;
        flex-direction: column;
        align-items: center;

        .video {
            width: 0;
            height: 0;
        }

        .box-container {
            height: 600px;
            overflow: hidden;

            .msg {
                margin-top: 50px;
                height: 400px;
                overflow: hidden;
                width: 300px;

                ul {
                    li {
                        &.active {
                            color: greenyellow;
                            transform: scale(1.3);
                        }
                    }
                }
            }

            .btn {
                margin-top: 20px;
            }
        }
    }
}
</style>