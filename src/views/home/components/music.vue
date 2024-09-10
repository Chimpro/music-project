<template>
    <div class="music-container">
        <MusicClassify @getMusic="getMusic" />
        <MusicCate :musicInfos="musicInfos" />
    </div>
</template>

<script setup>
import MusicClassify from '@/components/music/MusicClassify.vue';
import MusicCate from '@/components/music/MusicCate.vue';
import { ref, onMounted } from 'vue';
import { musicGetMusic } from '@/apis/music';
//歌曲数据
const _musicInfos = [
    {
        musicName: '儿歌1',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'baby'
    },
    {
        musicName: '摇滚1',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'rock'
    },
    {
        musicName: '抒情1',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'lyric'
    },
    {
        musicName: '说唱1',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'rap'
    },
    {
        musicName: '儿歌2',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'baby'
    },
    {
        musicName: '摇滚2',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'rock'
    },
    {
        musicName: '抒情2',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'lyric'
    },
    {
        musicName: '说唱2',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'rap'
    },
    {
        musicName: '儿歌3',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'baby'
    },
    {
        musicName: '摇滚3',
        singer: '陈奕迅',
        musicImg: '../../../assets/music-picture/taotai-eason.jpg',
        type: 'rock'
    },
]
const musicInfos = ref(_musicInfos)
//组件通信，给分类组件通信，实现分类
function getMusic(type) {
    musicInfos.value = _musicInfos.filter(function (item) {
        if (item.type == type) {
            return item
        }
    })
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
}
</style>