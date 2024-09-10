<template>
    <div class="cate">
        <el-select v-model="value" placeholder="分类" size="large" style="width: 240px" @change="changeValue">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>

<script setup>
import { ref } from 'vue';
//下拉框
const value = ref('')
const options = [
    {
        value: 'baby',
        label: '儿歌',
    },
    {
        value: 'lyric',
        label: '抒情',
    },
    {
        value: 'rock',
        label: '摇滚',
    },
    {
        value: 'rap',
        label: '说唱',
    }
]

function changeValue(type) {
    emit('getMusic', type)
}

//emit
let emit = defineEmits(['getMusic'])
</script>


<style scoped lang="scss">
.cate {
    margin-bottom: 20px;
    margin-top: 20px;
    position: relative;
    left: -420px;
}
</style>