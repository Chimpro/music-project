<template>
    <div class="mv-container">
        <MvClassify @getMusicvideo="getMusicvideo" />
        <MusicvideoCate :mvData="mvData" />
    </div>
</template>

<script setup>
import MvClassify from '@/components/musicvideo/MvClassify.vue';
import MusicvideoCate from '@/components/musicvideo/MusicvideoCate.vue';
import { ref } from 'vue';
const _mvData = [
    {
        name: '摇滚1',
        author: '周杰伦',
        type: 'rock'
    },
    {
        name: '抒情1',
        author: '周杰伦',
        type: 'lyric'
    },
    {
        name: '说唱1',
        author: '周杰伦',
        type: 'rap'
    },
    {
        name: '儿歌1',
        author: '周杰伦',
        type: 'baby'
    },
    {
        name: '摇滚2',
        author: '周杰伦',
        type: 'rock'
    },
    {
        name: '说唱2',
        author: '周杰伦',
        type: 'rap'
    },
    {
        name: '抒情2',
        author: '周杰伦',
        type: 'lyric'
    },
    {
        name: '儿歌2',
        author: '周杰伦',
        type: 'baby'
    },
    {
        name: '摇滚3',
        author: '周杰伦',
        type: 'rock'
    },
    {
        name: '抒情3',
        author: '周杰伦',
        type: 'lyric'
    },
]
const mvData = ref(_mvData)

//分类
function getMusicvideo(type) {
    mvData.value = _mvData.filter(function (item) {
        if (item.type === type) {
            return item
        }
    })
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


}
</style>