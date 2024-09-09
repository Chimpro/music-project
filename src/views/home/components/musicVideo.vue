<template>
    <div class="mv-container">
        <div class="cate">
            <el-select v-model="value" placeholder="分类" size="large" style="width: 240px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="mv-items">
            <div class="mv-item" v-for="(item) in 10" @click="mvdetail">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
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

    .cate {
        margin-bottom: 20px;
        margin-top: 20px;
        position: relative;
        left: -400px;
    }

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